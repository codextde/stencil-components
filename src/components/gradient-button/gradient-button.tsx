import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'codext-gradient-button',
  styleUrl: 'gradient-button.scss',
  shadow: true
})
export class GradientButton {

  @Prop() text: string;

  render() {
    return (
      <button class="gradient-button">{this.text}</button>
    );
  }
}
