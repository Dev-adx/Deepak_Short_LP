declare global {
  interface Window {
    fbq: (event: string, params?: Record<string, unknown>) => void;
  }
}

export const trackEvent = (event: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(event, params);
  } else {
    console.log('Pixel event:', event, params); // Fallback for dev
  }
};

export const trackSubscribe = () => trackEvent('Subscribe');
export const trackAddToCart = (value: number) => trackEvent('AddToCart', { value, currency: 'INR' as const });
export const trackPurchase = () => trackEvent('Purchase', { value: 99, currency: 'INR' as const, content_ids: ['blockchain-workshop'] });
export const trackPageView = () => trackEvent('PageView');
