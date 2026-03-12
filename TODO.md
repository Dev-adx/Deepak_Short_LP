# Meta Pixel Events Complete ✓

## Updates:
- StickyCTA button: fbq('track', 'Subscribe')
- LeadForm submit: fbq('track', 'AddToCart', {value: ~₹99, currency: 'INR'})
- ThankYou mount: fbq('track', 'Purchase', {value: 99, currency: 'INR', content_ids: ['blockchain-workshop']})
- TypeScript declarations added for fbq

**Test:** Dev server running. Click CTAs → check Network tab for facebook.net or console fbq calls. Verify in Facebook Events Manager.
