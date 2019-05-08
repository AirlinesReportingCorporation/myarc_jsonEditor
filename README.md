# myarc_jsonEditor
The myarc_jsonEditor is used to supply marketing content to each segment of the MyARC dashboard.  Each piece of content is public-facing but each dashboard is targeted to a specific customer.  To provide easy update and facilitation of static code, MyARC retreives this file asynchronously once it is placed on each environments server on EpiServer for the corpsite.

## Instructions for MyARC JSON Editor

1. Edit the specific file(s) for the segment in 'ads' folder
2. When using double quotes are needed, try to use single quotes for html.  If double quotes are needed for copy try to use the HTML entity or escape it
3. When ready to compile all HTML into a single JSOn file, go into the root folder (myarc_jsonEditor) from the terminal and run the command "npm start"
4. The code will compile into data.json in the 'ads' folder
5. To validate, open the data.json file, copy all the contents, and go to https://jsonlint.com/.  Paste the code in and click 'Validate JSON'.  A 'Valid JSON' message in green should show up below.  Otherwise if it is red, you may need to run the "npm start" command again and repeat the validate step until valid.
6. Copy data.json in the myarc folder of the corresponding environment.

## Troubleshooting
If you get an error about packages, you may need to run 'npm install' to install any missing dependencies.  Make sure to use single quotes when able.  Otherwise make sure to escape double quotations with an HTML entity or escape.
