import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AppProvider } from './AppContext.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import { CocktailPage } from './pages/CocktailPage.tsx';
import About from './pages/About.tsx';
import { Newsletter } from './pages/Newsletter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppProvider>
                <App />
              </AppProvider>
            }
          />
          <Route path="cocktails/:id" element={<CocktailPage></CocktailPage>} />
          <Route path="about" element={<About></About>} />
          <Route path="newsletter" element={<Newsletter></Newsletter>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
