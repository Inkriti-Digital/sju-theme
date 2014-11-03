<!DOCTYPE HTML>

<html>

<head>
  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <meta name="viewport" content="width=device-width,, initial-scale=.47, minimum-scale=0.25, maximum-scale=1.0, user-scalable=yes">
  <meta name="description" content="See how Saint Joseph's University in Philadelphia is helping its students and graduates to live greater.">
  <meta name="keywords" content="" />

<meta property="og:url" content="<?php echo site_url(); ?>"/>
<meta property="og:title" content="Begin living the magis."/>
<meta property="og:image" content="<?php echo site_url(); ?>/wp-content/themes/sju-theme/img/facebooklogo.png"/>
<meta property="og:site_name" content="Saint Joseph's University"/>
<meta property="og:description" content="See how Saint Joseph's University in Philadelphia is helping its students and graduates to live greater. "/>

  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/fonts/font-css.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/slidebars.min.css">
<!--  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/map.css">-->
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/ink-extends.css">
</head>

<!-- To initiall hide the homepage when detail page is loaded directly -->
<body class="hide">

	<script type="text/javascript">
		var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
	</script>