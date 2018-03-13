import { getElementClassMap, openURL } from '../../utils/theme';
export class GradientButton {
    constructor() {
        /**
         * The type of the button.
         * Possible values are: `"submit"`, `"reset"` and `"button"`.
         * Default value is: `"button"`
         */
        this.type = 'button';
        /**
         * If true, the user cannot interact with the button. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
         * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
         * a toolbar, where the default is `"clear"`.
         */
        this.fill = 'default';
        /**
         * If true, activates a button with rounded corners.
         */
        this.round = false;
        /**
         * If true, activates a button with a heavier font weight.
         */
        this.strong = false;
        // Default Colors
        this.darkblue = { start: '#2b4b62', end: '#4b7078' };
        this.green = { start: '#3dab64', end: '#8ed67d' };
        this.pink = { start: '#f96b90', end: '#f67cb5' };
        this.blue = { start: '#43afce', end: '#48c3d3' };
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    componentWillLoad() {
        if (this.color == 'darkblue') {
            this.selectedColor = this.darkblue;
        }
        else if (this.color == 'green') {
            this.selectedColor = this.green;
        }
        else if (this.color == 'pink') {
            this.selectedColor = this.pink;
        }
        else if (this.color == 'blue') {
            this.selectedColor = this.blue;
        }
        this.backgroundColor = {
            background: 'linear-gradient(to right, ' + this.selectedColor.start + ', ' + this.selectedColor.end + ')'
        };
    }
    render() {
        const { expand, round, size, strong } = this;
        const TagType = this.href ? 'a' : 'button';
        const buttonClasses = Object.assign({}, getButtonTypeClassMap(expand), getButtonTypeClassMap(size), getButtonTypeClassMap(round ? 'round' : null), getButtonTypeClassMap(strong ? 'strong' : null), { 'gradient-button': true }, getElementClassMap(this.el.classList), { 'focused': this.keyFocus });
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: buttonClasses, disabled: this.disabled, onFocus: this.onFocus.bind(this), onKeyUp: this.onKeyUp.bind(this), onClick: (ev) => openURL(this.href, ev), onBlur: this.onBlur.bind(this), style: this.backgroundColor }),
            h("div", { class: "gradient-button--shadow", style: this.backgroundColor }),
            h("span", { class: 'button-inner' },
                h("slot", { name: 'icon-only' }),
                h("slot", { name: 'start' }),
                h("span", { class: 'button-text' },
                    h("slot", null)),
                h("slot", { name: 'end' }))));
    }
    static get is() { return "codext-gradient-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "expand": { "type": "Any", "attr": "expand" }, "fill": { "type": "Any", "attr": "fill" }, "href": { "type": String, "attr": "href" }, "keyFocus": { "state": true }, "round": { "type": Boolean, "attr": "round" }, "size": { "type": "Any", "attr": "size" }, "strong": { "type": Boolean, "attr": "strong" }, "type": { "type": String, "attr": "type" } }; }
    static get events() { return [{ "name": "ionFocus", "method": "ionFocus", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionBlur", "method": "ionBlur", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:codext-gradient-button:**/"; }
}
/**
 * Get the classes based on the type
 * e.g. block, full, round, large
 */
function getButtonTypeClassMap(type) {
    if (!type) {
        return {};
    }
    type = type.toLocaleLowerCase();
    return {
        [`${type}`]: true
    };
}
