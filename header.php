<!DOCTYPE HTML>

<html>

<head>
  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <meta name="viewport" content="width=767, initial-scale=1, minimum-scale=0.25, maximum-scale=1.0, user-scalable=yes">
  <meta name="description" content="What's magis? It's a Jesuit principle that underlies everything we do at Saint Joseph's University. Discover what Magis means at SJU.">
  <meta name="keywords" content="" />

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