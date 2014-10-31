<?php
$speed = $effect = 0;
get_header(); ?>

<style>
/*to hide the ticker shown initally */
#fade li:not(:first-child) { 
    display: none;
}
</style>

<section id="home">
    <div  id="sb-site">
    <div class="container-fluid">
        <header>
            <div class="row">
                <div class="col-md-12">
                    <a href="/" class="logo pull-left"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="Saint Joseph University"></a>
                    <div class="pull-right sb-toggle-right"><span>menu</span> <img src="<?php echo get_template_directory_uri(); ?>/img/nav-icon.gif" width="26" height="19" alt="nav-icon"></div>
                </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <!--text-slider here-->
              <div class="text-slider">
                <ul id="fade">
                  <?php 
                      $args = array( 'post_type' => 'banner', 'posts_per_page' => '1' );
                      $loop = new WP_Query( $args );
                  ?>
                  <?php 
                    while ( $loop->have_posts() ) : $loop->the_post();
                  ?> 

                  <?php $speed = get_field('speed'); ?>
                  <?php $effect = get_field('effect'); ?>

                    <?php if( have_rows('banner')  ): ?>

                      <?php while( have_rows('banner')  ): the_row(); 
                        $message = get_sub_field('message');
                      ?>
                                   
                      <li> <?php echo $message; ?></li>
                                   
                      <?php endwhile; ?>

                    <?php endif; ?>

                  <?php endwhile; ?>
                </ul>
              </div>

              </div>
            </div>
        </header><!-- // header -->

        <section id="main-site">
          <div class="row grid1">

            <?php 
                $args = array( 'post_type' => 'magis', 'posts_per_page' => '12' );
                $loop = new WP_Query( $args );
            ?>
            <?php 
              while ( $loop->have_posts() ) : $loop->the_post();
            ?> 

            <div class="col-xs-12 col-sm-4 col-md-4">
                <div class="row">
                    
                    <?php 
//                     $link = trim(the_permalink());
// $segments = explode('/', $link );

?>

                      <div class="grid-block" data-post="<?php  echo $post->post_name;?>" data-rel="<?php the_permalink();?>" data-id="<?php echo $post->ID; ?>">
                         <div class="grid-img">
                            <?php $image = get_field('image'); if( !empty($image) ): ?>
                              <img src="<?php echo $image['url']; ?>" />
                            <?php endif; ?>
                          </div>
                          <div class="grid-hovered"><div class="overlay"></div>
                            <?php $image = get_field('image'); if( !empty($image) ): ?>
                              <img src="<?php echo $image['url']; ?>" />
                            <?php endif; ?> 
                          </div>
                         <div class="grid-content">
                            <h2><?php the_title(); ?></h2>
                            <?php $caption = get_field('caption'); if( !empty($caption) ): ?>
                              <p><?php echo $caption; ?></p>
                            <?php endif; ?>
                         </div>
                      </div>
                </div>
            </div><!-- /grid-block -->

            <?php endwhile; ?>


          </div><!-- /grid -->

          <div class="row magis-row">
            <div class="col-md-12 magis-cta">
              <a href="http://www.sju.edu/information/apply-undergraduate-admission/begin-living-magis" class="play-btn magis-btn"  target="_blank">Begin Living the Magis</a>
            </div>
          </div>

          <!-- say hello section -->
         <!--  <div class="row">
            <div class="col-md-12">

                <div id="sayHello">
                  <h2>Say Hello</h2>
                  <div class="questionary">
                     <span>What's your name?</span>
                     <textarea cols="6" rows="5" placeholder="Type your Answer.."></textarea>
                  </div>
                </div>

            </div>
          </div> -->

          <div class="row">
            <div class="col-md-12">
              <div class="row map">
                  <div id="map-canvas"></div>
              </div>
            </div>
          </div><!-- Map -->

      </section><!-- /main-site -->


      <!-- footer contents -->
      <footer class="row">
        <div class="col-md-12">
            <div class="center-block"><p>Copyright  &copy; 2014  Saint Joseph's University, 5600 City Ave. Philadelphia, PA 19131 610&ndash;660&ndash;1000</p></div>
        </div>
      </footer>

    </div><!-- /fluid-container -->
    </div>

    <div class="sb-slidebar sb-right sb-momentum-scrolling">
    <span class="sb-close">&nbsp;</span>
      <!-- Slidebar content. -->
      <nav id="navigation">
        <ul>
            <li><a  href="/">Home</a></li>

            <?php 
              $args = array( 'post_type' => 'magis', 'posts_per_page' => '12' );
              $loop = new WP_Query( $args );
            ?>
            <?php 
              while ( $loop->have_posts() ) : $loop->the_post();
            ?> 

            <li><a data-post="<?php  echo $post->post_name;?>" data-rel="<?php the_permalink();?>"  href="#<?php  echo $post->post_name;?>"><?php the_title(); ?></a></li>

            <?php endwhile; ?>

        </ul>

  
        <ul class="ext-links">
            <li><a target="_blank" href="http://sju.edu/visit">Visit</a></li>
            <li><a target="_blank" href="http://sju.edu/apply">Apply</a></li>
            <li><a target="_blank" href="http://sju.edu/">SJU.EDU</a></li>
        </ul>
      </nav>
      <div class="share">
        <h4>Share</h4>
        <a target="_blank"  href="http://twitter.com/share?text=Look for" target="_blank" class="twit twitterpopup">twitter</a>
        <a  target="_blank" href="#" onClick="window.open('http://www.facebook.com/sharer/sharer.php?u=http://qa-inkriti-sju.inkriti.net/', 'facebook_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');" class="fb">facebook</a>
      </div>
</div>
</section><!-- /wrap -->

<!-- second layer -->
<section id="video">
                
  <div class="equalizer">
    <div class="column">
      
    </div>
  </div>
</section>


      

<?php
get_footer(); ?>

