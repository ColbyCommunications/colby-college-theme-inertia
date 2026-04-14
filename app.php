<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://use.typekit.net" crossorigin>
  <link rel="preconnect" href="https://p.typekit.net" crossorigin>
  <link rel="preload" href="https://use.typekit.net/iyv0bye.css" as="style">
  <link rel="stylesheet" href="https://use.typekit.net/iyv0bye.css">  
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <?php bb_inject_inertia('app'); ?>
  <?php wp_footer(); ?>
</body>
</html>
