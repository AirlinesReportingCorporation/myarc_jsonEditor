Instructions for myarc content

1. Edit the specific file for the segment in 'ads_ua't folder 
2. When using double quotes are needed, try to use single quotes for html.  If double quotes are needed for copy try to use the HTML symbol (&quot;)
3. When ready go into the root folder (myarc_jsonEditor) from the terminal and run the command "npm run uat"
4. The code will compile into data.json in the 'ads_uat' folder
5. To double check, open the data.json file, copy all the contents, and go to https://jsonlint.com/.  Paste the code in and click 'Validate JSON'.  A 'Valid JSON' message in green should show up below.  Otherwise if it is red, you may need to run the "npm run uat" command again and repeat the validate step until green.
6. Copy data.json in the myarc folder of the corresponding environment.

Troubleshooting
If you get an error about packages, you may need to run 'npm install' to install any missing depdencies.  Otherwise, the node modules should already be in the zip file.