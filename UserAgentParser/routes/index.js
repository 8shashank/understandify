var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is a great app' });
});

router.post('/parseAgent', function(req, res, next){
	var PythonShell = require('python-shell');

	var options = {
	  mode: 'text',
	  pythonPath: 'C:/Python27/python.exe',
	  pythonOptions: ['-u'],
	  scriptPath: './',
	  args: [req.body.userAgent]
	};

	PythonShell.run('E:/Personal_Projects/understandify/UserAgentParser/routes/parser.py', options, function(err, results){
		if (err) res.send("This error" + err);
		else res.send(results);
	})
})

module.exports = router;
