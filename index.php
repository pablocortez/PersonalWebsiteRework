<!DOCTYPE html>
<html ng-app="nickwhetstoneApp">
<head lang="en-US">
<title>Nick Whetstone | Engineer</title>
<meta charset="UTF-8">
<meta name="keywords" content="engineer, software engineer, computer engineer, electrical engineer, programmer, nick, whetstone, nick whetstone, SIU">
<meta name=viewport content='width=1200'>
<link rel="stylesheet" href="css/main.css?<?php echo date('l\%20\%20jS\%20of%20F\20Y\%20h:i:s\%20A'); ?>">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular-sanitize.js"></script>
</head>
<body ng-controller="ContentController">
<div id="wrapper">
	<div id="links">
		<div id="left"><a href="https://www.linkedin.com/in/nickwhetstone"><img src="images/LinkedIn.png" alt="LinkedIn" title="My LinkedIn Profile"></a></div>
			<div id="right"><a href="https://github.com/nickwhetstone"><img src="images/GitHub.png" alt="GitHub" title="My GitHub Profile"></a></div>
			<div id="center"><img src="images/nick.png" id="picture" alt="" title="Personal picture"><h1>Nick Whetstone</h1><a href="mailto:nickwhetstone@siu.edu">nickwhetstone@siu.edu</a></div>
	</div>
	<div ng-repeat="block in blocks" compile-html="block">
		<h2>{{block.name}}</h2>
		<div class="content" ng-bind-html="block.contents" ng-show="block.open"></div>
		</div>
</div>
<div id="nojs" ng-hide="1">It seems that your browser has JavaScript disabled, in which case you're really missing out on the best possible experience. Consider turning it back on!</div>
<script src="js/script.js"></script>
</body>
</html>