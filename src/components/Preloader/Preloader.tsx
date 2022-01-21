import { useState } from 'react';
import { Button } from '@trussworks/react-uswds';
import { loadingSpinner } from '../../base64/loading-spinner';
import { staticLoadingSpinner } from '../../base64/static-loading-spinner';

export interface PreloaderProps {
  initialAnimationOn?: boolean;
  displayWarning?: boolean;
}

const Preloader = ({ initialAnimationOn = true, displayWarning = false }: PreloaderProps) => {
  const [animationOn, setAnimationOn] = useState(initialAnimationOn);

  return (
    <div className="text-center" aria-live="polite">
      <p>
        {animationOn ? (
          <img alt="Content loading" title="Content loading" src={loadingSpinner} />
        ) : (
          <img alt="Content still loading" title="Content still loading" src={staticLoadingSpinner} />
        )}
      </p>
      {animationOn ? (
        <div className="text-center">
          <Button type="button" onClick={() => setAnimationOn(false)} title="Click to stop the animation">
            Stop animation
          </Button>
          {displayWarning ? (
            <div className="padding-2 font-alt-md text-bold text-secondary-vivid">
              Note: stopping animation will not interrupt loading process
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Preloader;
