<!DOCTYPE html>
<html>
	<head>

		<title>VK API</title>

<meta charset="utf-8">
<link href="style.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<?php // ключ приложения
$url = file_get_contents("https://api.vk.com/method/wall.get?owner_id=-26750264&count=15&filter=owner&v=5.92&access_token=b0e05daab0e05daab0e05daa0cb08b7414bb0e0b0e05daaede606ea22d8738d28a04fe4"); // функция по которой подключаемся к нужной странице и используем нужный метод
$wall = json_decode($url);
$wall = $wall->response->items;
for ($i = 0; $i < count($wall); $i++) {
	if(strpos($wall[$i]->text,'Страна:')){
	echo "<p>".($i + 1)."</b>. <i>".$wall[$i]->text."</p><br />";
	echo"<p><Img src=\"".$wall[$i]->attachments[0]->photo->sizes[0]->url."\"</p>";
	echo "<p>Лайков ".$wall[$i]->likes->count."</p>";}

}
?>
</html>
