const {createElement: h, Fragment} = wp.element;
const {Theme, Title, Button} = saladui;

wp.element.render(
  // h(Theme, {chidlren: 
    h(Fragment, {children: [
      h(Title, {size: 'large', children: 'World'}),
      // h(Button, {variant: 'primary', children: 'Click Me!'})
    ]})
  // }),  
  ,
  document.getElementById('salad-ui-components-demo')
);
