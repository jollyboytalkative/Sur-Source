/**
 * Public email address displayed on the Contact / Corrections page.
 * To update this address later, set VITE_CONTACT_EMAIL in your environment
 * or edit the fallback string below.
 */
export const CONTACT_EMAIL =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() ||
  'jollyboytalkative@gmail.com';
