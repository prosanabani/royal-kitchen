// css imports
// import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'virtual:uno.css';
import { ClickToComponent } from 'click-to-react-component';
// js imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

export function Loader() {
  return (
    <div className="h-screen grid place-items-center">
      <h1>Royal Kitchen</h1>
    </div>
  );
}

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <RouterProvider fallbackElement={<Loader />} router={router} />
    <ClickToComponent />
  </StrictMode>
);
