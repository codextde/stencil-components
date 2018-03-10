/*! Built with http://stenciljs.com */
GradientButton.loadBundle("8fatklmm",["exports"],function(t){var e=window.GradientButton.h,r=function(){function t(){this.darkblue={start:"#2b4b62",end:"#4b7078"},this.green={start:"#3dab64",end:"#8ed67d"},this.pink={start:"#f96b90",end:"#f67cb5"},this.blue={start:"#43afce",end:"#48c3d3"}}return t.prototype.componentWillLoad=function(){"darkblue"==this.color?this.selectedColor=this.darkblue:"green"==this.color?this.selectedColor=this.green:"pink"==this.color?this.selectedColor=this.pink:"blue"==this.color&&(this.selectedColor=this.blue),this.backgroundColor={background:"linear-gradient(to right, "+this.selectedColor.start+", "+this.selectedColor.end+")"}},t.prototype.render=function(){return e("button",{class:"gradient-button",style:this.backgroundColor},e("div",{class:"gradient-button--shadow",style:this.backgroundColor}),this.text)},Object.defineProperty(t,"is",{get:function(){return"codext-gradient-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},text:{type:String,attr:"text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@-webkit-keyframes gradient-button-ripple-out{100%{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0}}\@keyframes gradient-button-ripple-out{100%{top:-12px;right:-12px;bottom:-12px;left:-12px;opacity:0}}.gradient-button{position:relative;margin:0 0 15px;padding:15px 20px;text-align:center;text-transform:uppercase;font-weight:700;transition:all ease .2s;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.3);border-radius:7px;border:none;background:linear-gradient(to right,#2b4b62,#4b7078);cursor:pointer}.gradient-button:focus{outline:0}.gradient-button:active{outline:0;transform:translateY(3px)}.gradient-button:active>.gradient-button--shadow{transform:perspective(100px) rotateX(60deg) translateY(-3px)}.gradient-button:hover{box-shadow:inset 0 0 0 50px rgba(0,0,0,.1)}.gradient-button .gradient-button--shadow{border-radius:5px;transition:all ease .2s;position:absolute;left:15px;bottom:-8px;margin:0 auto;height:20px;width:calc(100% - 30px);z-index:-1;filter:blur(8px);transform:perspective(100px) rotateX(60deg);background:linear-gradient(to right,#2b4b62,#4b7078)}"},enumerable:!0,configurable:!0}),t}();t.CodextGradientButton=r,Object.defineProperty(t,"__esModule",{value:!0})});