var nickwhetstoneApp = angular.module('nickwhetstoneApp', ['ngSanitize']);
nickwhetstoneApp.controller('ContentController', function ContentController($scope) {
	$scope.blocks = [
		{
			open: true,
			name: 'About Me',
			contents: 'I\'m a twenty-year-old junior undergraduate student pursuing Bachelor of Science degrees in both Electrical Engineering and Computer Engineering at <a href="http://siu.edu">Southern Illinois University Carbondale (SIUC)</a>, an <a href="http://abet.org">ABET-accredited</a> research university. In May 2014, I completed an Associate of Science Degree at <a href="http://www.iecc.edu/page.php?page=WVCH">Wabash Valley College</a> before transferring to SIUC for Fall Semester 2014.'
		}, {
			open: false,
			name: 'What I\'m doing',
			contents: '<ul id="current"><li> <h3>Grade Calculator</h3> <img src="images/GradeCalc.png" title="Android Grade Calculator" alt="Android Grade Calculator" id="gradecalc"> I\'m fine-tuning an Android app I developed to calculate what students need on final exams to achieve the grade they desire. </li> <li> <h3>SIUC <a href="http://students.sae.org/cds/formulaseries/">Formula SAE</a> Team</h3> I\'m working with a team of four others to develop a digital controls system for our competition vehicle using an <a href="https://www.arduino.cc/">Arduino</a>. </li> <li><h3>Courses</h3> I am currently taking courses in the following subjects: <ul> <li>Electromechanical Energy Conversion <a href="http://nwhetstone.com/classes/syllabi/ECE385.pdf">(Syllabus)</a></li> <li>Electronics <a href="http://nwhetstone.com/classes/syllabi/ECE345.doc">(Syllabus)</a></li> <li>Signals and Systems <a href="http://nwhetstone.com/classes/syllabi/ECE355.pdf">(Syllabus)</a></li> <li>Discrete Logic <a href="http://nwhetstone.com/classes/syllabi/ECE225.pdf">(Syllabus)</a></li> </ul> </li> <li><h3><a href="https://github.com/nickwhetstone/baseConvert">baseConvert</a></h3>I\'m currently developing a user-friendly command-line tool to convert numeric bases. You can find baseConvert\'s repository <a href="https://github.com/nickwhetstone/baseConvert">on GitHub</a>.</li> </ul>'}, {
			open: false,
			name: 'What I\'ve done',
			contents: '<ul id="past"> <li><a href="http://simplemachines.org/"><img src="images/smf.png" title="Simple Machines Forum" alt="Simple Machines Forum"></a> For most of 2010, I was an official team member for <a href="http://www.simplemachines.org/about/smf/">Simple Machines Forum (SMF)</a>, the second-largest open source forum software on the internet. The software is written in PHP and uses a MySQL database. As a team member, I contributed to code modifications, technical support, software testing, and bug fixing. I\'m <a href="http://www.simplemachines.org/about/smf/team.php#friends">currently credited on SMF\'s site</a> as a friend of the project. </li> <li> <h3>Courses</h3>Here are a few of the subjects I\'ve taken courses in in the past: <ul> <li>Procedural Programming and Data Structures <a href="http://nwhetstone.com/classes/syllabi/ECE222.pdf">(Syllabus)</a></li> <li>Electric Circuits <a href="http://nwhetstone.com/classes/syllabi/ECE235.pdf">(Syllabus)</a></li> <li>Calculus I, Calculus II, Calculus III, and Introduction to Differential Equations</li> </ul> </li> </ul>'
		}
	];
});
$("h2").wrapInner("<a ng-click=\"block.open = !block.open\"></a>");