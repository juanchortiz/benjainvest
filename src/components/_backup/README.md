# Backup Components

This folder contains components that have been removed from the main application but are kept for potential future restoration.

## Files:

### GoldenVisaSection.tsx
- **Removed on**: October 14, 2025
- **Reason**: Client requested to eliminate the Golden Visa section
- **Translations**: Golden Visa translations are still available in the i18n files under the `goldenVisa` key
- **To restore**: 
  1. Move `GoldenVisaSection.tsx` back to `/src/components/`
  2. Import it in `WhyPortugalSection.tsx`
  3. Add navigation link back to `Navigation.tsx` (key: `nav.goldenVisa`)
  4. Translations are already in place in both ES and EN

## Note
Keep this folder when deploying to preserve backup components.

