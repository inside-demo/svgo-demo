var fs = require('fs');
var path = require('path');
var htmlnano = require('htmlnano');
var options = {
	minifySvg: {
		plugins: [ 
			{ cleanupIDs: false },
			{ removeUnknownsAndDefaults: false},
		]
	}
};
var file = path.join(__dirname, 'image.svg');
var output = path.join(__dirname, 'image.min.svg');

var html = fs.readFileSync(file);

htmlnano.process(html, options).then(function (result) {
    fs.writeFileSync(output, result.html);
});