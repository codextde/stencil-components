/*! Built with http://stenciljs.com */
const { h } = window.GradientButton;

class GradientButton {
    constructor() {
        // Colors
        this.darkblue = { start: '#2b4b62', end: '#4b7078' };
        this.green = { start: '#3dab64', end: '#8ed67d' };
        this.pink = { start: '#f96b90', end: '#f67cb5' };
        this.blue = { start: '#43afce', end: '#48c3d3' };
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
        return (h("button", { class: "gradient-button", style: this.backgroundColor },
            h("div", { class: "gradient-button--shadow", style: this.backgroundColor }),
            this.text));
    }
    static get is() { return "codext-gradient-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "text": { "type": String, "attr": "text" } }; }
    static get style() { return "/* Ripple Out */\n\@-webkit-keyframes hvr-ripple-out {\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0; } }\n\n\@keyframes hvr-ripple-out {\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0; } }\n\n.gradient-button {\n  display: block;\n  position: relative;\n  margin: 0 0 15px;\n  padding: 15px 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  transition: all ease 0.3s;\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  border-radius: 7px;\n  border: none;\n  background: linear-gradient(to right, #2b4b62, #4b7078);\n  cursor: pointer; }\n  .gradient-button:focus {\n    outline: none; }\n  .gradient-button:active {\n    outline: none; }\n    .gradient-button:active:before {\n      opacity: 0; }\n  .gradient-button:hover:before {\n    bottom: -3px; }\n  .gradient-button .gradient-button--shadow {\n    border-radius: 5px;\n    transition: all ease 0.3s;\n    position: absolute;\n    opacity: 1;\n    left: 15px;\n    bottom: -8px;\n    margin: 0 auto;\n    height: 20px;\n    width: calc(100% - 30px);\n    z-index: -1;\n    filter: blur(8px);\n    transform: perspective(100px) rotateX(60deg);\n    background: linear-gradient(to right, #2b4b62, #4b7078); }"; }
}

export { GradientButton as CodextGradientButton };
