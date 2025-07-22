import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

// Ensure window is available and document is ready
if (typeof window !== 'undefined' && document.readyState !== 'loading') {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
    );
  });
} else if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    startTransition(() => {
      hydrateRoot(
        document,
        <StrictMode>
          <RemixBrowser />
        </StrictMode>,
      );
    });
  });
}