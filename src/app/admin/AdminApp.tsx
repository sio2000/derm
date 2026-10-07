'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Treatment, TherapySection } from '@/data/treatments';
import type { Review, ReviewsContent, TreatmentGroup } from '@/lib/content/types';

type AdminTreatment = Treatment & { status: 'original' | 'edited' | 'new' | 'deleted' };
type Toast = { message: string; error?: boolean } | null;
type Notify = (message: string, error?: boolean) => void;

const GROUP_LABELS: Record<TreatmentGroup, string> = {
  prosopo: 'Πρόσωπο',
  soma: 'Σώμα',
  'kliniki-dermatologia': 'Κλινική Δερματολογία',
};
const STATUS_LABELS: Record<AdminTreatment['status'], string> = {
  original: 'Αρχική',
  edited: 'Τροποποιημένη',
  new: 'Νέα',
  deleted: 'Διαγραμμένη',
};
const keyOf = (t: Pick<Treatment, 'category' | 'slug'>) => `${t.category}/${t.slug}`;

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error ?? 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.');
  return data as T;
}

const GREEK_TO_LATIN: Record<string, string> = {
  α: 'a', β: 'v', γ: 'g', δ: 'd', ε: 'e', ζ: 'z', η: 'i', θ: 'th', ι: 'i', κ: 'k', λ: 'l', μ: 'm',
  ν: 'n', ξ: 'x', ο: 'o', π: 'p', ρ: 'r', σ: 's', ς: 's', τ: 't', υ: 'y', φ: 'f', χ: 'ch', ψ: 'ps', ω: 'o',
};
const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[α-ως]/g, (char) => GREEK_TO_LATIN[char] ?? '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function AdminApp() {
  const [session, setSession] = useState<'loading' | 'out' | 'in'>('loading');
  const [configured, setConfigured] = useState(true);
  const [tab, setTab] = useState<'reviews' | 'treatments'>('reviews');
  const [toast, setToast] = useState<Toast>(null);

  const notify = useCallback<Notify>((message, error) => setToast({ message, error }), []);

  useEffect(() => {
    api<{ authenticated: boolean; configured: boolean }>('/api/admin/session')
      .then((s) => {
        setConfigured(s.configured);
        setSession(s.authenticated ? 'in' : 'out');
      })
      .catch(() => setSession('out'));
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), toast.error ? 6000 : 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const logout = async () => {
    await api('/api/admin/logout', { method: 'POST' }).catch(() => undefined);
    setSession('out');
  };

  if (session === 'loading') return <div className="adm-shell">Φόρτωση…</div>;
  if (session === 'out') return <Login configured={configured} onSuccess={() => setSession('in')} />;

  return (
    <div className="adm-shell">
      <header className="adm-top">
        <h1>Διαχείριση Advanced Derma</h1>
        <div className="adm-row">
          <a className="adm-btn" href="/" target="_blank" rel="noopener noreferrer">
            Προβολή ιστοσελίδας
          </a>
          <button className="adm-btn" onClick={logout}>
            Αποσύνδεση
          </button>
        </div>
      </header>

      <div className="adm-tabs" role="tablist">
        <button className="adm-tab" role="tab" aria-selected={tab === 'reviews'} onClick={() => setTab('reviews')}>
          Αξιολογήσεις
        </button>
        <button className="adm-tab" role="tab" aria-selected={tab === 'treatments'} onClick={() => setTab('treatments')}>
          Θεραπείες
        </button>
      </div>

      {tab === 'reviews' ? <ReviewsPanel notify={notify} /> : <TreatmentsPanel notify={notify} />}

      {toast && (
        <div className={`adm-toast${toast.error ? ' error' : ''}`} role="status">
          {toast.message}
        </div>
      )}
    </div>
  );
}

function Login({ configured, onSuccess }: { configured: boolean; onSuccess: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      await api('/api/admin/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Η σύνδεση απέτυχε.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="adm-shell">
      <form className="adm-card adm-login" onSubmit={submit}>
        <h2>Σύνδεση διαχειριστή</h2>
        {!configured && (
          <p className="adm-error">
            Δεν έχουν οριστεί ακόμη τα στοιχεία σύνδεσης (ADMIN_EMAIL και ADMIN_PASSWORD).
          </p>
        )}
        {error && (
          <p className="adm-error" role="alert">
            {error}
          </p>
        )}
        <label className="adm-field">
          <span>Email</span>
          <input type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="adm-field">
          <span>Κωδικός</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="adm-btn primary" type="submit" disabled={busy}>
          {busy ? 'Σύνδεση…' : 'Σύνδεση'}
        </button>
      </form>
    </div>
  );
}

/* ───────────────────────────── Reviews ───────────────────────────── */

const emptyReview = (): Review => ({ id: '', name: '', stars: 5, text: '' });

function ReviewsPanel({ notify }: { notify: Notify }) {
  const [content, setContent] = useState<ReviewsContent | null>(null);
  const [summary, setSummary] = useState({ rating: '', count: '' });
  const [draft, setDraft] = useState<Review | null>(null);
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api<ReviewsContent>('/api/admin/reviews')
      .then((data) => {
        setContent(data);
        setSummary({ rating: data.rating, count: data.count });
      })
      .catch((err) => notify(err.message, true));
  }, [notify]);

  const save = async (next: ReviewsContent, message: string) => {
    setBusy(true);
    try {
      const saved = await api<ReviewsContent>('/api/admin/reviews', { method: 'PUT', body: JSON.stringify(next) });
      setContent(saved);
      setSummary({ rating: saved.rating, count: saved.count });
      notify(message);
      return true;
    } catch (err) {
      notify(err instanceof Error ? err.message : 'Η αποθήκευση απέτυχε.', true);
      return false;
    } finally {
      setBusy(false);
    }
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!content) return [];
    return q
      ? content.reviews.filter((r) => r.name.toLowerCase().includes(q) || r.text.toLowerCase().includes(q))
      : content.reviews;
  }, [content, query]);

  if (!content) return <p>Φόρτωση αξιολογήσεων…</p>;

  const saveDraft = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft) return;
    const reviews = draft.id
      ? content.reviews.map((r) => (r.id === draft.id ? draft : r))
      : [{ ...draft, id: `r-${Date.now().toString(36)}` }, ...content.reviews];
    if (await save({ ...content, reviews }, draft.id ? 'Η αξιολόγηση ενημερώθηκε.' : 'Η αξιολόγηση προστέθηκε.')) {
      setDraft(null);
    }
  };

  const remove = (review: Review) => {
    if (!window.confirm(`Διαγραφή της αξιολόγησης από «${review.name}»;`)) return;
    save({ ...content, reviews: content.reviews.filter((r) => r.id !== review.id) }, 'Η αξιολόγηση διαγράφηκε.');
  };

  return (
    <>
      <form
        className="adm-card"
        onSubmit={(event) => {
          event.preventDefault();
          save({ ...content, ...summary }, 'Η βαθμολογία ενημερώθηκε.');
        }}
      >
        <h2>Βαθμολογία Google</h2>
        <div className="adm-grid">
          <label className="adm-field">
            <span>Βαθμολογία (π.χ. 4.70)</span>
            <input type="text" value={summary.rating} onChange={(e) => setSummary({ ...summary, rating: e.target.value })} />
          </label>
          <label className="adm-field">
            <span>Πλήθος κριτικών (π.χ. 866)</span>
            <input type="text" value={summary.count} onChange={(e) => setSummary({ ...summary, count: e.target.value })} />
          </label>
        </div>
        <button className="adm-btn primary" type="submit" disabled={busy}>
          Αποθήκευση βαθμολογίας
        </button>
      </form>

      {draft && (
        <form className="adm-card" onSubmit={saveDraft}>
          <h2>{draft.id ? 'Επεξεργασία αξιολόγησης' : 'Νέα αξιολόγηση'}</h2>
          <div className="adm-grid">
            <label className="adm-field">
              <span>Όνομα</span>
              <input type="text" required value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            </label>
            <label className="adm-field">
              <span>Αστέρια</span>
              <select value={draft.stars} onChange={(e) => setDraft({ ...draft, stars: Number(e.target.value) })}>
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="adm-field">
            <span>Κείμενο</span>
            <textarea required rows={6} value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} />
          </label>
          <div className="adm-row">
            <button className="adm-btn primary" type="submit" disabled={busy}>
              Αποθήκευση
            </button>
            <button className="adm-btn" type="button" onClick={() => setDraft(null)}>
              Άκυρο
            </button>
          </div>
        </form>
      )}

      <div className="adm-card">
        <div className="adm-row" style={{ marginBottom: 8 }}>
          <h2 className="adm-grow" style={{ margin: 0 }}>
            Αξιολογήσεις ({content.reviews.length})
          </h2>
          <button className="adm-btn primary" onClick={() => setDraft(emptyReview())}>
            Προσθήκη αξιολόγησης
          </button>
        </div>
        <label className="adm-field">
          <span>Αναζήτηση</span>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Όνομα ή κείμενο" />
        </label>
        {visible.length === 0 && <p className="adm-hint">Δεν βρέθηκαν αξιολογήσεις.</p>}
        {visible.map((review) => (
          <div className="adm-item" key={review.id}>
            <div className="adm-grow">
              <h3>
                {review.name}{' '}
                <span className="adm-stars" aria-label={`${review.stars} αστέρια`}>
                  {'★'.repeat(review.stars)}
                </span>
              </h3>
              <p>{review.text.length > 220 ? `${review.text.slice(0, 220)}…` : review.text}</p>
            </div>
            <div className="adm-row">
              <button
                className="adm-btn"
                onClick={() => {
                  setDraft(review);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Επεξεργασία
              </button>
              <button className="adm-btn danger" disabled={busy} onClick={() => remove(review)}>
                Διαγραφή
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ──────────────────────────── Treatments ─────────────────────────── */

const emptyTreatment = (category: TreatmentGroup): Treatment => ({
  slug: '',
  name: '',
  category,
  tagline: '',
  description: '',
  heroImage: '',
  sections: [{ heading: '', body: [] }],
  bullets: [],
});

function TreatmentsPanel({ notify }: { notify: Notify }) {
  const [treatments, setTreatments] = useState<AdminTreatment[] | null>(null);
  const [group, setGroup] = useState<TreatmentGroup>('prosopo');
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<{ treatment: Treatment; originalKey?: string } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api<{ treatments: AdminTreatment[] }>('/api/admin/treatments')
      .then((data) => setTreatments(data.treatments))
      .catch((err) => notify(err.message, true));
  }, [notify]);

  const call = async (init: RequestInit, message: string) => {
    setBusy(true);
    try {
      const data = await api<{ treatments: AdminTreatment[] }>('/api/admin/treatments', init);
      setTreatments(data.treatments);
      notify(message);
      return true;
    } catch (err) {
      notify(err instanceof Error ? err.message : 'Η ενέργεια απέτυχε.', true);
      return false;
    } finally {
      setBusy(false);
    }
  };

  const images = useMemo(
    () => Array.from(new Set((treatments ?? []).flatMap((t) => [t.heroImage, t.thumb ?? '']).filter(Boolean))).sort(),
    [treatments],
  );

  if (!treatments) return <p>Φόρτωση θεραπειών…</p>;

  if (editing) {
    return (
      <TreatmentEditor
        initial={editing.treatment}
        isNew={!editing.originalKey}
        images={images}
        busy={busy}
        onCancel={() => setEditing(null)}
        onSave={async (treatment) => {
          const ok = await call(
            { method: 'PUT', body: JSON.stringify({ treatment, originalKey: editing.originalKey }) },
            'Η θεραπεία αποθηκεύτηκε.',
          );
          if (ok) {
            setGroup(treatment.category);
            setEditing(null);
          }
        }}
      />
    );
  }

  const q = query.trim().toLowerCase();
  const visible = treatments.filter(
    (t) => t.category === group && (!q || t.name.toLowerCase().includes(q) || t.slug.includes(q)),
  );

  return (
    <div className="adm-card">
      <div className="adm-row" style={{ marginBottom: 16 }}>
        <h2 className="adm-grow" style={{ margin: 0 }}>
          Σελίδες θεραπειών
        </h2>
        <button className="adm-btn primary" onClick={() => setEditing({ treatment: emptyTreatment(group) })}>
          Νέα θεραπεία
        </button>
      </div>
      <div className="adm-grid">
        <label className="adm-field">
          <span>Κατηγορία</span>
          <select value={group} onChange={(e) => setGroup(e.target.value as TreatmentGroup)}>
            {(Object.keys(GROUP_LABELS) as TreatmentGroup[]).map((g) => (
              <option key={g} value={g}>
                {GROUP_LABELS[g]} ({treatments.filter((t) => t.category === g && t.status !== 'deleted').length})
              </option>
            ))}
          </select>
        </label>
        <label className="adm-field">
          <span>Αναζήτηση</span>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Όνομα θεραπείας" />
        </label>
      </div>

      {visible.length === 0 && <p className="adm-hint">Δεν βρέθηκαν θεραπείες.</p>}
      {visible.map((t) => {
        const key = keyOf(t);
        const deleted = t.status === 'deleted';
        return (
          <div className="adm-item" key={key} style={deleted ? { opacity: 0.7 } : undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="adm-thumb" src={t.thumb || t.heroImage} alt="" loading="lazy" />
            <div className="adm-grow">
              <h3>{t.name}</h3>
              <p>
                <span className={`adm-badge${deleted ? ' warn' : ''}`}>{STATUS_LABELS[t.status]}</span>{' '}
                {t.hidden && !deleted && <span className="adm-badge warn">Κρυφή</span>} /{t.slug}
              </p>
            </div>
            <div className="adm-row">
              {deleted ? (
                <button
                  className="adm-btn"
                  disabled={busy}
                  onClick={() => call({ method: 'DELETE', body: JSON.stringify({ key, restore: true }) }, 'Η θεραπεία επανήλθε.')}
                >
                  Επαναφορά
                </button>
              ) : (
                <>
                  {!t.hidden && (
                    <a className="adm-btn" href={`/el/ypiresies/${t.category}/${t.slug}/`} target="_blank" rel="noopener noreferrer">
                      Προβολή
                    </a>
                  )}
                  <button
                    className="adm-btn"
                    onClick={() => {
                      const { status: _status, ...treatment } = t;
                      setEditing({ treatment, originalKey: key });
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    Επεξεργασία
                  </button>
                  <button
                    className="adm-btn danger"
                    disabled={busy}
                    onClick={() => {
                      if (!window.confirm(`Διαγραφή της σελίδας «${t.name}»;`)) return;
                      call({ method: 'DELETE', body: JSON.stringify({ key }) }, 'Η θεραπεία διαγράφηκε.');
                    }}
                  >
                    Διαγραφή
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TreatmentEditor({
  initial,
  isNew,
  images,
  busy,
  onSave,
  onCancel,
}: {
  initial: Treatment;
  isNew: boolean;
  images: string[];
  busy: boolean;
  onSave: (treatment: Treatment) => void;
  onCancel: () => void;
}) {
  const [t, setT] = useState<Treatment>(initial);
  const [slugTouched, setSlugTouched] = useState(!isNew);

  const set = (patch: Partial<Treatment>) => setT((current) => ({ ...current, ...patch }));
  const setSection = (index: number, patch: Partial<TherapySection>) =>
    set({ sections: t.sections.map((s, i) => (i === index ? { ...s, ...patch } : s)) });
  const moveSection = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= t.sections.length) return;
    const sections = [...t.sections];
    [sections[index], sections[target]] = [sections[target], sections[index]];
    set({ sections });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSave(t);
      }}
    >
      <div className="adm-card">
        <h2>{isNew ? 'Νέα θεραπεία' : `Επεξεργασία: ${initial.name}`}</h2>
        <div className="adm-grid">
          <label className="adm-field">
            <span>Όνομα θεραπείας</span>
            <input
              type="text"
              required
              value={t.name}
              onChange={(e) => set({ name: e.target.value, ...(slugTouched ? {} : { slug: slugify(e.target.value) }) })}
            />
          </label>
          <label className="adm-field">
            <span>Κατηγορία</span>
            <select value={t.category} onChange={(e) => set({ category: e.target.value as TreatmentGroup })}>
              {(Object.keys(GROUP_LABELS) as TreatmentGroup[]).map((g) => (
                <option key={g} value={g}>
                  {GROUP_LABELS[g]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="adm-field">
          <span>Διεύθυνση σελίδας (slug): λατινικά πεζά, αριθμοί, παύλες</span>
          <input
            type="text"
            required
            value={t.slug}
            onChange={(e) => {
              setSlugTouched(true);
              set({ slug: e.target.value });
            }}
          />
          <p className="adm-hint">
            /el/ypiresies/{t.category}/{t.slug || '…'}/
            {!isNew && ' Αν αλλάξει, η παλιά διεύθυνση παύει να λειτουργεί.'}
          </p>
        </label>
        <label className="adm-field">
          <span>Υπότιτλος</span>
          <input type="text" value={t.tagline} onChange={(e) => set({ tagline: e.target.value })} />
        </label>
        <label className="adm-field">
          <span>Περιγραφή (εμφανίζεται στην κορυφή και στο Google)</span>
          <textarea rows={4} value={t.description} onChange={(e) => set({ description: e.target.value })} />
        </label>

        <datalist id="adm-images">
          {images.map((src) => (
            <option key={src} value={src} />
          ))}
        </datalist>
        <div className="adm-grid">
          <label className="adm-field">
            <span>Κύρια εικόνα</span>
            <input
              type="text"
              required
              list="adm-images"
              placeholder="/images/…"
              value={t.heroImage}
              onChange={(e) => set({ heroImage: e.target.value })}
            />
          </label>
          <label className="adm-field">
            <span>Μικρογραφία λίστας (προαιρετικό)</span>
            <input
              type="text"
              list="adm-images"
              placeholder="/images/…"
              value={t.thumb ?? ''}
              onChange={(e) => set({ thumb: e.target.value || undefined })}
            />
          </label>
        </div>
        <p className="adm-hint" style={{ marginBottom: 16 }}>
          Επιλέξτε από τις εικόνες που υπάρχουν ήδη στο site (πληκτρολογήστε για προτάσεις).
        </p>
        {t.heroImage.startsWith('/') && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.heroImage} alt="" style={{ maxWidth: 220, borderRadius: 8, display: 'block', marginBottom: 16 }} />
        )}
        <label className="adm-row">
          <input type="checkbox" checked={Boolean(t.hidden)} onChange={(e) => set({ hidden: e.target.checked || undefined })} />
          <span>Κρυφή σελίδα (δεν εμφανίζεται στο site)</span>
        </label>
      </div>

      <div className="adm-card">
        <h2>Ενότητες κειμένου</h2>
        <p className="adm-hint" style={{ marginBottom: 16 }}>
          Κάθε γραμμή είναι μία παράγραφος. Γραμμή που ξεκινά με «• » γίνεται κουκκίδα. Για έντονα: **κείμενο**.
        </p>
        {t.sections.map((section, index) => (
          <div className="adm-section" key={index}>
            <label className="adm-field">
              <span>Τίτλος ενότητας {index + 1}</span>
              <input type="text" value={section.heading} onChange={(e) => setSection(index, { heading: e.target.value })} />
            </label>
            <label className="adm-field">
              <span>Κείμενο</span>
              <textarea
                rows={Math.min(16, Math.max(5, section.body.length + 2))}
                value={section.body.join('\n')}
                onChange={(e) => setSection(index, { body: e.target.value.split('\n') })}
              />
            </label>
            <div className="adm-row">
              <button className="adm-btn" type="button" disabled={index === 0} onClick={() => moveSection(index, -1)}>
                Πάνω
              </button>
              <button
                className="adm-btn"
                type="button"
                disabled={index === t.sections.length - 1}
                onClick={() => moveSection(index, 1)}
              >
                Κάτω
              </button>
              <button
                className="adm-btn danger"
                type="button"
                onClick={() => {
                  if (!window.confirm('Αφαίρεση αυτής της ενότητας;')) return;
                  set({ sections: t.sections.filter((_, i) => i !== index) });
                }}
              >
                Αφαίρεση ενότητας
              </button>
            </div>
          </div>
        ))}
        <button className="adm-btn" type="button" onClick={() => set({ sections: [...t.sections, { heading: '', body: [] }] })}>
          Προσθήκη ενότητας
        </button>
      </div>

      <div className="adm-card">
        <h2>Βασικά σημεία</h2>
        <label className="adm-field">
          <span>Ένα σημείο ανά γραμμή</span>
          <textarea rows={6} value={t.bullets.join('\n')} onChange={(e) => set({ bullets: e.target.value.split('\n') })} />
        </label>
      </div>

      <div className="adm-savebar">
        <button className="adm-btn primary" type="submit" disabled={busy}>
          {busy ? 'Αποθήκευση…' : 'Αποθήκευση θεραπείας'}
        </button>
        <button className="adm-btn" type="button" onClick={onCancel}>
          Άκυρο
        </button>
      </div>
    </form>
  );
}
