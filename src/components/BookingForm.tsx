'use client';

import { useState } from 'react';

// Διεύθυνση παραλήπτη για τα αιτήματα ραντεβού.
const RECIPIENT = 'advancedermabooking@gmail.com';

const labelStyle = {
  fontFamily: 'HarmoniaSans, sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  color: 'rgb(110, 90, 51)',
  display: 'block',
  marginBottom: '6px',
} as const;

const fieldStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1.5px solid rgb(244, 238, 224)',
  borderRadius: '8px',
  fontFamily: 'HarmoniaSans, sans-serif',
  fontSize: '16px',
  color: '#333',
  outline: 'none',
  boxSizing: 'border-box',
} as const;

export default function BookingForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [clinic, setClinic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();
    const subject = fullName
      ? `Αίτημα Ραντεβού — ${fullName}`
      : 'Αίτημα Ραντεβού';

    const lines = [
      'Νέο αίτημα ραντεβού από τη φόρμα επικοινωνίας:',
      '',
      `Όνομα: ${firstName}`,
      `Επώνυμο: ${lastName}`,
      `Τηλέφωνο: ${phone}`,
      `Email: ${email}`,
      `Ιατρείο: ${clinic || '—'}`,
      '',
      'Μήνυμα / Θεραπεία που ενδιαφέρει:',
      message || '—',
    ];

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join('\n'))}`;

    // Ανοίγει την εφαρμογή email της συσκευής με προσυμπληρωμένα τα στοιχεία·
    // ο χρήστης χρειάζεται μόνο να πατήσει «Αποστολή».
    window.location.href = mailto;
  };

  return (
    <form
      className="derma-booking-form"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '48px',
        boxShadow: '0 4px 24px rgba(110, 90, 51,0.1)',
      }}
    >
      <div className="derma-booking-names" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div>
          <label htmlFor="firstName" style={labelStyle}>
            Όνομα *
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Το όνομά σας"
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>
            Επώνυμο *
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Το επώνυμό σας"
            style={fieldStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="phone" style={labelStyle}>
          Τηλέφωνο *
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="69X XXX XXXX"
          style={fieldStyle}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="email" style={labelStyle}>
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          style={fieldStyle}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="clinic" style={labelStyle}>
          Επιλογή Ιατρείου
        </label>
        <select
          id="clinic"
          value={clinic}
          onChange={(e) => setClinic(e.target.value)}
          style={{ ...fieldStyle, backgroundColor: '#fff' }}
        >
          <option value="">Επιλέξτε ιατρείο...</option>
          <option>Advanced Derma Αθήνα — Ζωγράφου</option>
        </select>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <label htmlFor="message" style={labelStyle}>
          Μήνυμα / Θεραπεία που σας ενδιαφέρει
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Περιγράψτε μας την ανάγκη σας..."
          style={{ ...fieldStyle, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          backgroundColor: 'rgb(203, 179, 121)',
          color: '#000',
          fontFamily: 'HarmoniaSans, sans-serif',
          fontSize: '16px',
          fontWeight: 700,
          padding: '16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
      >
        Αποστολή Αιτήματος Ραντεβού
      </button>
    </form>
  );
}
