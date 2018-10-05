set /p x="enter the name of the folder: "
@Echo Off

Set string1=html{
Set "string2="
Set string3=}
Set "string 4="
Set string5=body {
Set "string6="
Set srting7=}
Set "string8="
Set string9=.content {
Set "string10="
Set string11=}
Set "string12="
Set string13=.content h1 {
Set "string14="
Set string15=}
Set Papka=%x%
Set string=html{

If not Exist "%Papka%\*.*" (
MD %x%
MD %x%\css
MD %x%\js
echo Create style.css
echo. %string1%>%x%\css\style.css
echo. %string2%>>%x%\css\style.css
echo. %string3%>>%x%\css\style.css
echo. %string4%>>%x%\css\style.css
echo. %string5%>>%x%\css\style.css
echo. %string6%>>%x%\css\style.css
echo. %string7%>>%x%\css\style.css
echo. %string8%>>%x%\css\style.css
echo. %string9%>>%x%\css\style.css
echo. %string10%>>%x%\css\style.css
echo. %string11%>>%x%\css\style.css
echo. %string12%>>%x%\css\style.css
echo. %string13%>>%x%\css\style.css
echo. %string14%>>%x%\css\style.css
echo. %string15%>>%x%\css\style.css
echo Create app.js
echo. >%x%\js\app.js
echo Create index.html
echo. ^<^!DOCTYPE html^>^ >%x%\index.html
echo. ^<^html lang="en"^>^ >>%x%\index.html
echo. ^<^head^>^ >>%x%\index.html
echo.   ^<^meta charset="UTF-8"^>^ >>%x%\index.html
echo.   ^<^title>Title</title^>^ >>%x%\index.html
echo.   ^<^link rel="stylesheet" href="css/style.css"/^>^ >>%x%\index.html
echo. ^<^/head^>^ >>%x%\index.html
echo. ^<^body^>^ >>%x%\index.html
echo.   ^<^div class="content"^>^ >>%x%\index.html
echo.     ^<^h1^>^Hello! I'm ready for edit! :)^<^/h1^>^ >>%x%\index.html
echo.   ^<^/div^>^ >>%x%\index.html
echo.   ^<^script src="js/app.js"^>^^<^/script^>^ >>%x%\index.html
echo. ^<^/body^>^ >>%x%\index.html
echo. ^<^/html^>^ >>%x%\index.html
Echo The project created!
) Else (
Echo The project is already created!
)
pause
