<div id="salad-ui-components-demo"></div>
<?php

wp_enqueue_script(
  'salad-ui/components', 
  '', 
  array('wp-element'), 
  '0.1.0', 
  false
);

wp_enqueue_script(
  'salad-ui/components/demo', 
  plugins_url('dist/salad-ui-components-demo.js', __FILE__),
  array( 'wp-element' ), 
  '0.1.0',
  false
);
