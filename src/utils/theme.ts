import { CssClassMap } from '../index';

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
export function createThemedClasses(mode: string, color: string, classes: string): CssClassMap {
  const classObj: CssClassMap = {};

  return classes.split(' ')
    .reduce((classObj: CssClassMap, classString: string): CssClassMap => {
      classObj[classString] = true;

      if (mode) {
        classObj[`${classString}-${mode}`] = true;

        if (color) {
          classObj[`${classString}-${color}`] = true;
          classObj[`${classString}-${mode}-${color}`] = true;
        }
      }

      return classObj;
    }, classObj);
}

/**
 * Get the classes from a class list and return them as an object
 */
export function getElementClassMap(classList: DOMTokenList | string[]): CssClassMap {
  const classObj: CssClassMap = {};

  for (let i = 0; i < classList.length; i++) {
    classObj[classList[i]] = true;
  }

  return classObj;
}

/**
 * Get the classes based on the button type
 * e.g. alert-button, action-sheet-button
 */
export function getButtonClassMap(buttonType: string, mode: string): CssClassMap {
  if (!buttonType) {
    return {};
  }
  return {
    [buttonType]: true,
    [`${buttonType}-${mode}`]: true
  };
}


export function getClassMap(classes: string | undefined): CssClassMap {
  const map: CssClassMap = {};
  if (classes) {
    classes
      .split(' ')
      .filter(c => c.trim() !== '')
      .forEach(c => map[c] = true);
  }
  return map;
}

export function openURL(url: string, ev: Event, isPop = false) {
  if (url && url[0] !== '#' && url.indexOf('://') === -1) {
    const router:any = document.querySelector('ion-router');
    if (router) {
      ev && ev.preventDefault();
      return router.componentOnReady().then(() => router.push(url, isPop));
    }
  }
  return Promise.resolve();
}