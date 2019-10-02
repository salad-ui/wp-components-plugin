const {createElement: h, Fragment} = wp.element;
const {Theme, Button} = saladui;

wp.element.render(
  // h(Theme, {chidlren: 
    h(Fragment, {children: [
      h('h1', {children: 'World'}),
      // h(Button, {variant: 'primary', children: 'Click Me!'})
    ]})
  // }),  
  ,
  document.getElementById('salad-ui-components-demo')
);
