import { CssClassMap } from '../index';
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
export declare function createThemedClasses(mode: string, color: string, classes: string): CssClassMap;
/**
 * Get the classes from a class list and return them as an object
 */
export declare function getElementClassMap(classList: DOMTokenList | string[]): CssClassMap;
/**
 * Get the classes based on the button type
 * e.g. alert-button, action-sheet-button
 */
export declare function getButtonClassMap(buttonType: string, mode: string): CssClassMap;
export declare function getClassMap(classes: string | undefined): CssClassMap;
export declare function openURL(url: string, ev: Event, isPop?: boolean): any;
