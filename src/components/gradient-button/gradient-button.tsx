import { Component, Element, Event, EventEmitter, Prop, State } from '@stencil/core';
import { BlurEvent, FocusEvent } from '../../utils/input-interfaces';
import { getElementClassMap, openURL } from '../../utils/theme';

export interface IColor {
  start: string;
  end: string;
}

@Component({
  tag: 'codext-gradient-button',
  styleUrl: 'gradient-button.scss',
  shadow: true
})
export class GradientButton {
  @Element() private el: HTMLElement;

  @State() keyFocus: boolean;

  /**
   * The type of the button.
   * Possible values are: `"submit"`, `"reset"` and `"button"`.
   * Default value is: `"button"`
   */
  @Prop() type = 'button';

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string;

  /**
   * The button size.
   * Possible values are: `"small"`, `"default"`, `"large"`.
   */
  @Prop() size: 'small' | 'default' | 'large';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled = false;

  /**
   * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
   * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
   * a toolbar, where the default is `"clear"`.
   */
  @Prop() fill: 'clear' | 'outline' | 'solid' | 'default' = 'default';

  /**
   * If true, activates a button with rounded corners.
   */
  @Prop() round = false;

  /**
   * Set to `"block"` for a full-width button or to `"full"` for a full-width button
   * without left and right borders.
   */
  @Prop() expand: 'full' | 'block';

  /**
   * If true, activates a button with a heavier font weight.
   */
  @Prop() strong = false;

  /**
   * Default options are: `"darkblue"`, `"green"`, `"pink"`, `"blue"`.
   */
  @Prop() color: string;

  /**
   * Emitted when the button has focus.
   */
  @Event() ionFocus: EventEmitter<FocusEvent>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() ionBlur: EventEmitter<BlurEvent>;

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

  // Default Colors
  darkblue: IColor = { start: '#2b4b62', end: '#4b7078'} 
  green: IColor = { start: '#3dab64', end: '#8ed67d'} 
  pink: IColor = { start: '#f96b90', end: '#f67cb5'} 
  blue: IColor = { start: '#43afce', end: '#48c3d3'} 

  selectedColor: IColor;

  backgroundColor:any;

  componentWillLoad(){
    if(this.color == 'darkblue') {
      this.selectedColor = this.darkblue;
    } else if(this.color == 'green'){
      this.selectedColor = this.green;
    } else if(this.color == 'pink'){
      this.selectedColor = this.pink;
    } else if(this.color == 'blue'){
      this.selectedColor = this.blue;
    }

    this.backgroundColor = {
      background: 'linear-gradient(to right, ' + this.selectedColor.start + ', ' + this.selectedColor.end + ')'

    };
  }


  protected render() {
    const {
      expand,
      round,
      size,
      strong
    } = this;

    const TagType = this.href ? 'a' : 'button';
    const buttonClasses = {
      ...getButtonTypeClassMap(expand),
      ...getButtonTypeClassMap(size),
      ...getButtonTypeClassMap(round ? 'round' : null),
      ...getButtonTypeClassMap(strong ? 'strong' : null),
      'gradient-button': true,
      ...getElementClassMap(this.el.classList),
      'focused': this.keyFocus
    };

    const attrs = (TagType === 'button')
      ? { type: this.type }
      : { href: this.href };

    return (
      <TagType
        {...attrs}
        class={buttonClasses}
        disabled={this.disabled}
        onFocus={this.onFocus.bind(this)}
        onKeyUp={this.onKeyUp.bind(this)}
        onClick={(ev) => openURL(this.href, ev)}
        onBlur={this.onBlur.bind(this)}
        style={this.backgroundColor}>
          <div class="gradient-button--shadow" style={this.backgroundColor}></div>
          <span class='button-inner'>
            <slot name='icon-only'></slot>
            <slot name='start'></slot>
            <span class='button-text'><slot></slot></span>
            <slot name='end'></slot>
          </span>
      </TagType>
    );

    
  }

  
}
/**
 * Get the classes based on the type
 * e.g. block, full, round, large
 */
function getButtonTypeClassMap(type: string|null): any {
  if (!type) {
    return {};
  }
  type = type.toLocaleLowerCase();
  return {
    [`${type}`]: true
  };
}
