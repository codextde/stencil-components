export class GradientButton {
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
    static get style() { return "/**style-placeholder:codext-gradient-button:**/"; }
}
