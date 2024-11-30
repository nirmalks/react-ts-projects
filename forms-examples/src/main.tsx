import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';

const logError = (error: Error, info: { componentStack: string }) => {
  console.log(error);
};
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={<div>Something went wrong</div>}
      onError={logError}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
