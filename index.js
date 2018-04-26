var fs = require('fs'),
		path = require ('path'),
		filePath = path.join(__dirname, 'ads/internal.html'),
		minify = require('html-minifier').minify;
		
var segments = [
	//"login_ads",
	//"login_body",
	"internal"//,
	//"agency",
	//"carrier",
	//"LEO",
	//"touroperator",
	//"3rdparty",
	//"airport",
	//"ctd",
	//"systemprovider"
];

var text = "";

var jsonFile = {
	
};
		
for ( var i = 0; i < segments.length; i++ ) {
		
	var segment = segments[i];	
	console.log(segment);
	(function(mySegment){
		fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
			if(!err) {
				data = data.split("_")[0];			
				var result = data.replace(/\r?\n|\r/g, "").replace(/\s\s+/g, ' ');;
				result = "" + result.trim() + "";
				
				var obj = {"body" : result};
		
				jsonFile[mySegment] = obj;
				
				var text = JSON.stringify(jsonFile);
				
				fs.writeFile(path.join(__dirname, 'data.json'), text, 'utf8', function (err) {
						if(err) {
								return console.log(err);
						}

						console.log("The file was saved!");
				}); 
				
			}
			else {
				console.log(err);
			}
			
		});
	}(segment));
		
}




