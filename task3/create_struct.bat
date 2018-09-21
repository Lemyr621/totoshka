set /p x="BBeduTe umia papki: "
@Echo Off

Set Papka=D:\%x%

If not Exist "%Papka%\*.*" (
MD D:\%x%
MD D:\%x%\css
MD D:\%x%\js
echo Create style.css
echo. html {>D:\%x%\css\style.css
echo. >>D:\%x%\css\style.css
echo. }>>D:\%x%\css\style.css
echo. >>D:\%x%\css\style.css
echo. body {>>D:\%x%\css\style.css
echo. >>D:\%x%\css\style.css
echo. }>>D:\%x%\css\style.css
echo. >>D:\%x%\css\style.css
echo. .content {>>D:\%x%\css\style.css
echo. >>D:\%x%\css\style.css
echo. }>>D:\%x%\css\style.css
echo. >>D:\%x%\css\style.css
echo. .content h1 {>>D:\%x%\css\style.css
echo. >>D:\%x%\css\style.css
echo. }>>D:\%x%\css\style.css
echo Create app.js
echo. >D:\%x%\js\app.js
echo Create index.html
echo. ^<^!DOCTYPE html^>^ >D:\%x%\index.html
echo. ^<^html lang="en"^>^ >>D:\%x%\index.html
echo. ^<^head^>^ >>D:\%x%\index.html
echo.   ^<^meta charset="UTF-8"^>^ >>D:\%x%\index.html
echo.   ^<^title>Title</title^>^ >>D:\%x%\index.html
echo.   ^<^link rel="stylesheet" href="css/style.css"/^>^ >>D:\%x%\index.html
echo. ^<^/head^>^ >>D:\%x%\index.html
echo. ^<^body^>^ >>D:\%x%\index.html
echo.   ^<^div class="content"^>^ >>D:\%x%\index.html
echo.     ^<^h1^>^Hello! I'm ready for edit! :)^<^/h1^>^ >>D:\%x%\index.html
echo.   ^<^/div^>^ >>D:\%x%\index.html
echo.   ^<^script src="js/app.js"^>^^<^/script^>^ >>D:\%x%\index.html
echo. ^<^/body^>^ >>D:\%x%\index.html
echo. ^<^/html^>^ >>D:\%x%\index.html
Echo The project created!
) Else (
Echo The project is already created!
)
pause
