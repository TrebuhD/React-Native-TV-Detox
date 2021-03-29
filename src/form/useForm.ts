import { useState } from 'react';
import { sleep } from '../utils';

export interface FormData {
  email: string;
  password: string;
}

export interface UseFormReturn {
  submitForm: () => void;
  loading: boolean;
  success: boolean;
  error: string | null;
}

export function useForm({ email, password }: FormData): UseFormReturn {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submitForm() {
    setLoading(true);
    setSuccess(false);
    setError(null);

    // simulate network call
    await sleep(1000);
    setLoading(false);
    if (email === 'fakeuser@xite.com') {
      setError('User does not exist');
      return;
    }
    if (password.length < 5) {
      setError('Password too short!');
      return;
    }
    setSuccess(true);
  }

  return { submitForm, loading, success, error };
}
