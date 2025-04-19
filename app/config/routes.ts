import { createBrowserRouter } from 'react-router-dom';
// @ts-expect-error fix-later
import { routes } from 'virtual:routes';

export const router = createBrowserRouter(routes, {
  basename: '/',
});
