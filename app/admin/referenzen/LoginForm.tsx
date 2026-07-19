'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.set('password', password);

      const res = await fetch('/api/admin/login', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? 'Anmeldung fehlgeschlagen');
        setLoading(false);
        return;
      }

      router.refresh();
    } catch {
      setError('Anmeldung fehlgeschlagen');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm"
      >
        <h1 className="text-xl font-bold text-[#1A1A1A] mb-6 text-center">
          Referenzbilder-Verwaltung
        </h1>

        <label className="block text-sm font-medium text-slate-600 mb-2">
          Passwort
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
          autoFocus
          required
        />

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#E67E22] hover:bg-[#d46e18] text-white font-bold py-2.5 rounded-lg transition-colors disabled:opacity-60"
        >
          {loading ? 'Bitte warten...' : 'Anmelden'}
        </button>
      </form>
    </main>
  );
}
