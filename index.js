var fs = require('fs'),
		path = require ('path'),
		filePath = path.join(__dirname, 'ads/internal.html'),
		minify = require('html-minifier').minify;

//function to check for an empty object
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}
		
function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}


var jsonFile = { };
		
		
readFiles('ads/', function(filename, content) {
		
	var segment = filename.replace(".html", "");
	
	filePath = path.join(__dirname, 'ads/' + segment + '.html');
	
	(function(mySegment){
		fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
			if(!err) {
				
				//split segment name 
				var segmentVal = mySegment.split("_")[0];
				var splitVal = mySegment.split("_")[1];
				
				//if segment name has additional properties
				if(splitVal == "" || splitVal == undefined) {
					splitVal = "body";
				}
				
				var result = data.replace(/\r?\n|\r/g, "").replace(/\s\s+/g, ' ').replace(/"/g, "'");
				result = "" + result.trim() + "";
				
				var obj = {};
				
				obj[splitVal] = result;
			
				//if this is not the first thing in the segment, then get additional properties and add to it
				if(isEmpty(jsonFile[segmentVal]) || jsonFile[segmentVal] != undefined) {
					var obj1 = jsonFile[segmentVal];
					var obj2 = obj;
					for (var attrname in obj1) { obj2[attrname] = obj1[attrname]; }
					obj = obj2;
				}
		
				jsonFile[segmentVal] = obj;
				
				var text = JSON.stringify(jsonFile);
				
				fs.writeFile(path.join(__dirname, 'data.json'), text, 'utf8', function (err) {
						if(err) {
								return console.log(err);
						}

						//console.log("The file was saved!");
				}); 
				
			}
			else {
				console.log(err);
			}
			
		});
	}(segment));
		
}, function(err) {
  console.log(err);
});




