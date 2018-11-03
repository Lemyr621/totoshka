@Echo Off
SetLocal EnableDelayedExpansion
set /p x="enter the name of the folder: "
Set folder=%x%
Set "string="
If not Exist "%folder%\*.*" (
MD %x%
MD %x%\css
MD %x%\js
echo Create style.css
for /f "UseBackQ Delims=" %%A IN ("css_struct.txt") do (
echo. %%A>>%x%\css\style.css
echo. %string%>>%x%\css\style.css
)
echo Create app.js
echo. >%x%\js\app.js
echo Create index.html
for /f "UseBackQ Delims=" %%A IN ("html_struct.txt") do (
echo. %%A>>%x%\index.html
echo. %string%>>%x%\index.html
)
Echo The project created!
) Else (
Echo The project is already created!
)
pause
