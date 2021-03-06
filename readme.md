![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)


# Demo
### Gradient Button
![Gradient Button](https://i.imgur.com/7QPKnBN.png)
[HTML Demo](https://stencil-components.stackblitz.io)

# @codext/stencil-components
npm i @codext/stencil-components --save 


## How to use:
### Gradient Button

Import the Component:
```
<script src="https://unpkg.com/@codext/stencil-components@0.0.6/dist/gradient-button.js"></script>
```
Use it in HTML:
```
  <codext-gradient-button color="darkblue">Gradient Button - Darkblue</codext-gradient-button>
```
```
  <codext-gradient-button color="green">Gradient Button - Green</codext-gradient-button>
```
```
  <codext-gradient-button color="pink">Gradient Button - Pink</codext-gradient-button>
```
```
  <codext-gradient-button color="blue">Gradient Button - Blue</codext-gradient-button>
```

#### Options
```

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

```

## Local Development 
```
npm install
```
```
npm start
```