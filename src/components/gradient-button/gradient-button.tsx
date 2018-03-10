import { Component, Prop } from '@stencil/core';

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

  @Prop() text: string;
  @Prop() color: string;


  // Colors
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

  

  render() {
    return (
      <button class="gradient-button" style={this.backgroundColor}>
        {/* HTML Pseudo Element for dropshadow, :before does not work here */}
        <div class="gradient-button--shadow" style={this.backgroundColor}></div>
        {this.text}
      </button>
    );
  }
}
