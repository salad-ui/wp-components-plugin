<?php
/*
  Plugin name: Salad UI - Components
  Plugin URI: https://salad-ui.now.sh/
  Description: Adds salad-ui Components to WordPress
  Version: 0.1.0
*/

add_action('init', 'saladui_init');
add_action('admin_menu', 'saladui_admin_menu');

function saladui_init() {
  wp_register_script(
    'salad-ui/components', 
    plugins_url('dist/salad-ui-components.js', __FILE__),
    array( 'wp-element' ), 
    '0.1.0',
    false
  );
}

function saladui_admin_menu() {
  add_menu_page( 
    'Salad UI - Components - Demo', 
    'Salad UI - Components - Demo', 
    'manage_options', 
    'salad-ui-components-demo', 
    'saladui_demo'
  );
}

function saladui_demo() {
  include 'demo.php';
}
