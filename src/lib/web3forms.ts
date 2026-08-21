/**
 * Web3Forms submission.
 *
 * The access key is never written into the source. It is read from the
 * environment variable VITE_WEB3FORMS_KEY, which is registered in
 * ENV-VARS-USED.md and in .env.example for the owner to fill in.
 *
 * When the key is missing the site must not crash and must not pretend a
 * message was sent. Callers get the `not-configured` result and show a calm
 * line with the real email address instead.
 */

const ENDPOINT = 'https://api.web3forms.com/submit';

export const web3formsKey: string = (import.meta.env.VITE_WEB3FORMS_KEY ?? '').trim();

export const isFormConfigured: boolean = web3formsKey.length > 0;

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'not-configured' }
  | { status: 'failed'; message: string };

export interface SubmitFields {
  subject: string;
  from_name: string;
  /** Web3Forms uses this as the reply-to address. */
  replyto?: string;
  [field: string]: string | undefined;
}

export async function submitToWeb3Forms(fields: SubmitFields): Promise<SubmitResult> {
  if (!isFormConfigured) {
    return { status: 'not-configured' };
  }

  const payload: Record<string, string> = { access_key: web3formsKey };
  Object.entries(fields).forEach(([key, value]) => {
    if (typeof value === 'string' && value.length > 0) {
      payload[key] = value;
    }
  });

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const body: unknown = await response.json();
    const succeeded =
      response.ok &&
      typeof body === 'object' &&
      body !== null &&
      (body as { success?: boolean }).success === true;

    if (succeeded) {
      return { status: 'sent' };
    }

    const message =
      typeof body === 'object' && body !== null && typeof (body as { message?: string }).message === 'string'
        ? (body as { message: string }).message
        : 'The form service refused the message.';

    return { status: 'failed', message };
  } catch {
    return {
      status: 'failed',
      message: 'We could not reach the server. Check your connection and try again.',
    };
  }
}

/** Shown wherever a form cannot send because the owner has not added the key. */
export const notConfiguredMessage =
  'This form is not connected to our inbox yet. Email hello@skintheory.ph or call +63 917 482 6153 and we will pick it up there.';
