/***** this function will keep the focus restricted to elements displayed within the
 *     component currently displayed on top
 *
 *    Params:
 *      selector - css selector for component displayed on top
 *      callback - (optional), potential extra functions to call
 *                             [only one implemented so far is 'Escape' press for modal]
 *****/
export const focusTrap = (selector: string, callback = () => {}) => {
  // *** identify focusable component elements
  const componentFocusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  // *** isolate component and its focusable content
  const component = document.querySelector(selector);

  // @ts-ignore
  const focusableComponentContent = component.querySelectorAll(componentFocusableElements);

  // *** isolate first element to be focused inside component
  // @ts-ignore
  const firstComponentFocusableElement = component.querySelectorAll(componentFocusableElements)[0];

  // *** isolate last element to be focused inside component
  const lastComponentFocusableElement = focusableComponentContent
    ? focusableComponentContent[focusableComponentContent.length - 1]
    : null;

  // *** this function will be used to deal with key presses while the component is open
  const handleKeyPress = (event: any) => {
    if (event.key === 'Escape') {
      callback();
    }

    // *** disregard anything other than tab (which leads to change of focus)
    if (event.key === 'Tab') {
      // *** handle shift + tab
      if (event.shiftKey) {
        // *** if focused on first focusable element, cycle back to last on next tab press
        if (document.activeElement === firstComponentFocusableElement) {
          (lastComponentFocusableElement as HTMLElement).focus();
          event.preventDefault();
        }
      }
      // *** handle tab
      else {
        // *** if focused on last focusable element, cycle back to first on next tab press
        if (document.activeElement === lastComponentFocusableElement) {
          (firstComponentFocusableElement as HTMLElement).focus();
          event.preventDefault();
        }
      }
    }
  };

  // *** focus on the first element as soon as modal pops open and the first focusable
  // *** element is in scope
  setTimeout(() => {
    (firstComponentFocusableElement as HTMLElement).focus();
  }, 750);

  return {
    component,
    focusableComponentContent,
    firstComponentFocusableElement,
    lastComponentFocusableElement,
    handleKeyPress,
  };
};
