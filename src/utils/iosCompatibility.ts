import { CookieOptions } from './types'; 


export const applyIOSFixes = (): void => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  if (isIOS) {
    const cookieOptions: CookieOptions = {
      name: 'ios_fix',
      value: '1',
      days: 1,
      secure: true,
      sameSite: 'None'
    };
    
    setCookie(cookieOptions);
    
    patchFetchForIOS();
  }
};

const setCookie = (options: CookieOptions): void => {
  const { name, value, days, secure, sameSite } = options;
  let cookie = `${name}=${value}; path=/;`;
  
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    cookie += ` expires=${date.toUTCString()};`;
  }
  
  if (secure) cookie += ' Secure;';
  if (sameSite) cookie += ` SameSite=${sameSite};`;
  
  document.cookie = cookie;
};

const patchFetchForIOS = (): void => {
    const originalFetch = window.fetch;
    
    window.fetch = async (input, init: RequestInit = {}) => {
      const modifiedInit: RequestInit = {
        ...init,
        credentials: 'include', 
        headers: {
          ...init.headers,
          'X-Platform': 'iOS'
        }
      };
      
      return originalFetch(input, modifiedInit);
    };
  };