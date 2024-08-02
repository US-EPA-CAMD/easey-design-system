import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@trussworks/react-uswds';
import { loadingSpinner } from '../../base64/loading-spinner';
import { staticLoadingSpinner } from '../../base64/static-loading-spinner';

export interface PreloaderProps {
  className?: string;
  initialAnimationOn?: boolean;
  displayWarning?: boolean;
  returnFocus?: boolean;
  showStopButton?: boolean;
}

export const Preloader = ({
  className = '',
  initialAnimationOn = true,
  displayWarning = false,
  returnFocus = true,
  showStopButton = true,
}: PreloaderProps) => {
  const [animationOn, setAnimationOn] = useState(initialAnimationOn);
  const prevFocusedElementRef = useRef<HTMLElement | null>(null);

  const handleStopAnimation = () => {
    setAnimationOn(false);
  };

  useEffect(() => {
    prevFocusedElementRef.current = document.activeElement as HTMLElement;
    (document.querySelector('#btnStopAnimation') as HTMLElement)?.focus();
    return () => {
      if (returnFocus) {
        prevFocusedElementRef.current?.focus();
      }
    };
  }, [returnFocus]);

  return (
    <div className={`text-center ${className}`} aria-live="polite">
      <p className="margin-0 display-flex flex-align-center flex-justify-center">
        {animationOn ? (
          <img alt="Content loading" title="Content loading" src={loadingSpinner} />
        ) : (
          <img alt="Content still loading" title="Content still loading" src={staticLoadingSpinner} />
        )}
      </p>
      {showStopButton && animationOn ? (
        <div className="text-center">
          <Button
            id="btnStopAnimation"
            type="button"
            onClick={() => handleStopAnimation()}
            title="Click to stop the animation"
          >
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
