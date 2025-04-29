export interface CookieOptions {
    name: string;
    value: string;
    days?: number;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  }
  
  declare global {
    interface Window {
      originalFetch?: typeof fetch;
    }
  }