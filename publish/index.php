<?php
require_once 'config.php';

?> 
<!doctype html>
<!--[if lt IE 7 ]><html lang=en class="no-js ie6"><![endif]-->
<!--[if IE 7 ]><html lang=en class="no-js ie7"><![endif]-->
<!--[if IE 8 ]><html lang=en class="no-js ie8"><![endif]-->
<!--[if IE 9 ]><html lang=en class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="en" class="no-js" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://opengraphprotocol.org/schema/">
<!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
		<title>
			Your Romance Novel Author Name 
		</title>
		<meta name="description" content="">
		<meta name="author" content="Melanie Archer">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:title" content="Your Romance Novel Author Name" />
		<meta property="og:type" content="game" />
		<meta property="og:url" content="https://apps.facebook.com/romance-author-name/" />
		<meta property="og:site_name" content="Your Romance Novel Author Name" />
		<meta property="og:image" content="http://twobanjos.com/romance/img/hibiscus-square.jpg" />
		<meta property="fb:app_id" content="112427873827" />
		<meta property="og:description" content="Generate an eye-catching pseudonym for your bestselling romance novel!" />
		<!-- <link rel="shortcut" icon href="http://twobanjos.com/romance/favicon.ico" /> -->
		<link rel="stylesheet" href="css/reset.css">
		<link rel="stylesheet" href="css/style-${build.number}.min.css?v=2">
		<link rel="stylesheet" href="css/romance.css?v=2">
<script src="js/libs/modernizr-1.6.min.js"></script> 
	</head>
	<body id="wrapper">
		<div id="container">
			<header id="header">
				<h1>
					Your Romance Novel Author Name 
				</h1>
				<div class="fb" id="fb-like">
					<iframe src="//www.facebook.com/plugins/like.php?href=%2F%2Fapps.facebook.com%2Fromance-author-name&amp;layout=standard&amp;show_faces=true&amp;width=250&amp;action=like&amp;colorscheme=light&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:250px; height:80px;" allowtransparency="true">
					</iframe>
				</div>
			</header>
			<div id="main">
				<div id="fb-root">
				</div>
				<article class="post">
					<section>
						<p>
							Remember those 50,000 words of torrid, clich&eacute;-riddled prose you wrote last 
						<a href="//nanowrimo.org">
							NaNoWriMo</a>? Generate an eye-catching pseudonym for that trash, sell it as a romance novel, and pay off your mortgage! 
						</p>
					</section>
					<section class="entry" id="output">
						<form>
							<fieldset>
								<ol>
									<li>
<?php if ($user): ?>
										<a href="<?php echo $logoutUrl; ?>">
											Logout
										</a>
<?php else: ?>
										<div class="fb">
											<a href="<?php echo $loginUrl; ?>">
												Login with Facebook
											</a>
										</div>
<?php endif ?>
									</li>
									<li>
										<input id="generate" type="button" value="Generate your author name" />
									</li>
									<li class="toggled">
										<label>
											Your romance novel author name is 
										</label>
										<input type="text" placeholder="...just a sec..." />
									</li>
									<li>
										<input id="wall" type="button" value="Post your name to your Wall" />
									</li>
								</ol>
							</fieldset>
						</form>
					</section>
<?php if ($user): ?>
      <h3>You</h3>
      <img src="https://graph.facebook.com/<?php echo $user; ?>/picture">

      <h3>Your User Object (/me)</h3>
      <pre><?php print_r($user_profile); ?></pre>
    <?php else: ?>
      <strong><em>You are not Connected.!!</em></strong>
    <?php endif ?>
				</article>
			</div>
			<footer>
				<nav>
					<ol>
						<li>
							<a href="./about.html">
								About this application</a>
						</li>
					</ol>
				</nav>
			</footer>
		</div>
<script src="http://code.jquery.com/jquery-1.6.1.min.js"></script> 
<script>!window.jQuery&&document.write(unescape('%3Cscript src="js/libs/jquery-1.4.4.min.js"%3E%3C/script%3E'));</script> 
<!--[if lt IE 7 ]><script src="js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg");</script><![endif]-->
<script>var _gaq=[["_setAccount","UA-8330160-1"],["_trackPageview"]];(function(e,a){var c=e.createElement(a),b=e.getElementsByTagName(a)[0];c.async=true;c.src=("https:"==location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";b.parentNode.insertBefore(c,b)})(document,"script");</script> <script src='js/script.js'></script> 
	</body>
</html>
