import notFoundLottie from '@/assets/not_found.json';
import Lottie from 'lottie-react';
import { Outlet, useRouteError } from 'react-router-dom';

export default function Component() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {
        // @ts-expect-error no error typing
        error?.status === 404 ? (
          <div className="relative ">
            <Lottie animationData={notFoundLottie} className="w-90vw h-90vh" />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5">
            <h3>Something went wrong</h3>
          </div>
        )
      }
    </div>
  );
}
