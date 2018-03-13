import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { BlurEvent, FocusEvent } from '../../utils/input-interfaces';
export interface IColor {
    start: string;
    end: string;
}
export declare class GradientButtonTwo {
    private el;
    keyFocus: boolean;
    /**
     * The type of the button.
     * Possible values are: `"submit"`, `"reset"` and `"button"`.
     * Default value is: `"button"`
     */
    type: string;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href: string;
    /**
     * The type of button.
     * Possible values are: `"button"`, `"bar-button"`.
     */
    buttonType: string;
    /**
     * The button size.
     * Possible values are: `"small"`, `"default"`, `"large"`.
     */
    size: 'small' | 'default' | 'large';
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    disabled: boolean;
    /**
     * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
     * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
     * a toolbar, where the default is `"clear"`.
     */
    fill: 'clear' | 'outline' | 'solid' | 'default';
    /**
     * If true, activates a button with rounded corners.
     */
    round: boolean;
    /**
     * Set to `"block"` for a full-width button or to `"full"` for a full-width button
     * without left and right borders.
     */
    expand: 'full' | 'block';
    /**
     * If true, activates a button with a heavier font weight.
     */
    strong: boolean;
    /**
     * The color to use from your Sass `$colors` map.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information, see [Theming your App](/docs/theming/theming-your-app).
     */
    color: string;
    /**
     * Emitted when the button has focus.
     */
    ionFocus: EventEmitter<FocusEvent>;
    /**
     * Emitted when the button loses focus.
     */
    ionBlur: EventEmitter<BlurEvent>;
    onFocus(): void;
    onKeyUp(): void;
    onBlur(): void;
    darkblue: IColor;
    green: IColor;
    pink: IColor;
    blue: IColor;
    selectedColor: IColor;
    backgroundColor: any;
    componentWillLoad(): void;
    protected render(): JSX.Element;
}
