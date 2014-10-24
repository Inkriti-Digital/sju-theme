<div class="container-fluid">
      <div class="row">
        <header id="videoWrap">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                       <div class="hero-container">
                          <div class="video-nav">
                            <nav id="scroll-nav">
                                <ul class="nav nav-tabs nav-justified" role="tablist">
                                    <li><a href="/" class="home">Home <span class="home-icon">&nbsp;</span></a></li>
                                    <li><a href="#video-blocks"><?php echo  get_field('caption'); ?> <span class="experience-icon">&nbsp;</span></a></li>
                                    <li><a href="<?php echo $visit_link; ?>">Visit <span class="visit-icon">&nbsp;</span></a></li>
                                    <li><a href="<?php echo $apply_link; ?>">Apply <span class="apply-icon">&nbsp;</span></a></li>
                                </ul>
                            </nav>

                             <div class="video-descp">
                                <div class="inner-wrap">
                                   <span><?php echo  the_title(); ?></span>
                                    <h2><?php echo  get_field('caption'); ?></h2>
                                    <p><?php echo  get_field('description'); ?></p>
                                </div>
                              </div><!-- video descp -->
                         </div><!-- nav in bottom -->


                         <a href="/" class="logo video-page"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="Saint Joseph University"></a>
                          <div class="hero-img">
                              <img src="<?php echo  get_field('big_image'); ?>" alt="">
                              <a href="<?php echo  get_field('link'); ?>" class="play-btn" style="-webkit-transform: translateZ(0px); transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.4s cubic-bezier(0.645, 0.045, 0.355, 1); -webkit-transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1), top 0.4s cubic-bezier(0.645, 0.045, 0.355, 1); top: 65%;" target="vidFrame">Play Video</a>
                          </div>

                        </div><!-- main video container -->
                        <script>
                          $( ".play-btn" ).click(function() {
                            console.log("hit play click");
                            $(".cover").show();
                          });
                        </script>
                       
                        <a id="close-video" class="hide">&nbsp;</a>
                    </div>
                </div>
            </div>
        </header>
      </div><!-- // header -->

      <section id="mainBlocks">
        <div id="video-blocks">
           <div class="row equalizer">


  <?php if( have_rows('facts')  ): ?>
               <?php while( have_rows('facts')  ): the_row(); 

                  $content = get_sub_field('content');
                  $small_image = get_sub_field('small_image');
                  $blocks =  get_sub_field('blocks');
                  $background =  get_sub_field('background');
                  $content_style = "";

                  if ($content) {
                     $content_style = "content";
                  }

                  if ($small_image) {
                     $content_style = "image";
                  }

                  if ($content && $small_image) {
                     $content_style = "content_image";
                  }

                  if ($blocks == 'one') {
                    $block = "col-md-3 column";
                  }

                  else {
                    $block = "col-md-6 column";
                  }
                  
                ?>


                <?php  if ($content_style == 'content'): ?>
 
            <div class="<?php echo $block; ?>">
                <div class="row">


   
                <?php if($background){ ?>

                      <div class="text-block-redBg block column" style="background: <?php echo $background; ?>">
                  <?php echo $content; ?>
                  </div>

                <?php } else { ?>
                <div class="txt-block block">
                        <div class="part-time"><?php echo $content; ?></div>
                   </div><!-- text block -->
                <?php } ?>
                


                </div>
             </div>

                <?php endif; ?>

                <?php  if ($content_style == 'image'): ?>
              <div class="<?php echo $block; ?>">
                <div class="row">
                   <div id="img1" class="img-block block">
                        <div class="hover-block"></div><!-- hover overlay block -->
                        <img src="<?php echo $small_image; ?>" alt="">
                   </div><!-- image block -->
                </div>
             </div>

                <?php endif; ?>

                <?php  if ($content_style == 'content_image'): ?>
  
         
             <div class="<?php echo $block; ?>">
                <div class="row">
                   <div class="txtWithImg block">
                        <div class="hover-block"></div><img data-slide-to="3" src="<?php echo $small_image; ?>" alt="">
                      <?php echo $content; ?>
                    </div>
                   </div><!-- image plus text block -->
                </div>

                <?php endif; ?>

 

              <?php endwhile; ?>
            <?php endif; ?>
 
           </div>

         </div>

         <div id="gallery" class="carousel slide" data-ride="carousel">
              <a id="close-slider"><img src="<?php echo get_template_directory_uri(); ?>/img/carousel-close.png" width="40" height="40" alt=""></a>
              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                          <?php if( have_rows('facts')  ): $i=1;?>
               <?php while( have_rows('facts')  ): the_row(); 

                  
                  $big_image = get_sub_field('big_image'); ?>
                  <?php if($big_image): ?>
                <div class="item <?php if($i == 1) {echo 'active'; } ?>">
                  <img src="<?php echo $big_image; ?>" alt="carousel">
                </div>
            <?php endif; ?>    
                      <?php $i = $i + 1; endwhile; ?>
            <?php endif; ?>

              </div><!-- carousel slides -->

              <!-- Controls -->
              <a class="left carousel-control" href="#gallery" role="button" data-slide="prev">
                <img src="<?php echo get_template_directory_uri(); ?>/img/arrow-left.png" width="46" height="90" alt="">
              </a>
              <a class="right carousel-control" href="#gallery" role="button" data-slide="next">
                <img src="<?php echo get_template_directory_uri(); ?>/img/arrow-right.png" width="46" height="90" alt="">
              </a>
            </div><!-- image carousel -->

      </section><!-- /main-site -->


      <!-- footer contents -->
      <footer class="row fix"> <a id="scrollTop"><img src="<?php echo get_template_directory_uri(); ?>/img/back-to-top-btn.png" width="54" height="54" alt="Back to top"></a>
        <div class="col-md-12">
            <div class="center-block"><p>Copyright  &copy; 2014  St. Joseph's University, 5600 City Ave. Philadelphia, PA 19131 610&ndash;660&ndash;1000</p></div>
        </div>
      </footer>

    </div><!-- /fluid-container -->



    <div class="cover">
      <iframe src="" id="vidFrame" name="vidFrame" frameborder="0" style="height: 100%; width: 100%;"></iframe>
      <div class="close-vid" id="close-video">
    </div>




