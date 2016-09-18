exports.index = function(req, res){
    res.render('layout');
};

exports.partials = function(req, res){
    var filename = req.params.filename;
    if(!filename) return;  // might want to change this
    res.render("partials/"+filename, {name: "Abc", surveys : ["Abc D"]} );
};

// router.post('/parseAgent', function(req, res, next){
// 	var PythonShell = require('python-shell');

// 	var options = {
// 	  mode: 'text',
// 	  pythonPath: 'C:/Python27/python.exe',
// 	  pythonOptions: ['-u'],
// 	  scriptPath: './',
// 	  args: [req.body.userAgent]
// 	};

// 	PythonShell.run('E:/Personal_Projects/understandify/UserAgentParser/routes/parser.py', options, function(err, results){
// 		if (err) res.send("This error" + err);
// 		else res.send(results);
// 	})
// })