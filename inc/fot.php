<footer id="footer">
	<div class="wrapper">
        <div id="fot_soc">
            <a href="#" target="_NEW"><img src="gra/facebook.png" /></a>
            <a href="#" target="_NEW"><img src="gra/twitter.png" /></a>
            <a href="#" target="_NEW"><img src="gra/instagram.png" /></a>
            <div class="spacer"></div>
        </div>
    	<div id="fot_links">
            <a href="./#play" id="play_fot_link">Play</a>
						<a href="./#projects" id="projects_fot_link">Projects</a>
            <a href="./#donate" id="donate_fot_link">Donate</a>
						<a href="./#about" id="about_fot_link">About</a>
            <div class="spacer"></div>
        </div>
        <div id="copyright">Copyright &copy; <?php echo date('Y')." <a href='./'>".$full_name."</a>"; ?></div>
    	<div class="spacer"></div>
    </div>
    <div id="fb-root"></div>
</footer>
</body>
</html>
<?php
ob_end_flush();
?>
