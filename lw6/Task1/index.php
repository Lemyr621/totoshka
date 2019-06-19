<!DOCTYPE html>
<html>

<head>
		<title>VK API</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css">
</head>
<?php // ключ приложения

class Film {
	var $name;
	var $img;
	var $country;
	var $genre;
	var $producer;
	var $postText;
	var $like;
	var $link;
}

$url = file_get_contents("https://api.vk.com/method/wall.get?owner_id=-26750264&count=100&filter=owner&v=5.92&access_token=b0e05daab0e05daab0e05daa0cb08b7414bb0e0b0e05daaede606ea22d8738d28a04fe4"); // функция по которой подключаемся к нужной странице и используем нужный метод
$wall = json_decode($url);
$wall = $wall->response->items;
$postNumber = 1;
$PostIdArray = array();
$filmArray = array();
echo "<div class=\"white\">";
for ($i = 0;$i < 15;$i++) {
    $randPostId = rand(0, 100);
    if (!in_array($randPostId, $PostIdArray)) {
        $PostIdArray[] = $randPostId;
        if (strpos($wall[$randPostId]->text, 'Страна:')) {
						$object = new Film;
						$object->img=$wall[$randPostId]->attachments[0]->photo->sizes[3]->url;
            $postText = $wall[$randPostId]->text;
            $countryPos = strpos($postText, 'Страна:');
            $object->name=  substr($postText, 0, $countryPos);
            $postText = substr($postText, $countryPos, strlen($postText) - 1);
            $genrePos = strpos($postText, 'Жанр:');
            $object->country = substr($postText, 0, $genrePos);
            $postText = substr($postText, $genrePos, strlen($postText) - 1);
            $ratingPos = strpos($postText, 'Рейтинги:');
            $genre = substr($postText, 0, $ratingPos);
            $object->genre = str_replace("@xfilm", "", $genre);
            $postText = substr($postText, $ratingPos, strlen($postText) - 1);
            $producerPos = strpos($postText, 'Режиссер:');
            $object->rating = substr($postText, 0, $producerPos);
            $postText = substr($postText, $producerPos, strlen($postText) - 1);
            $actorPos = strpos($postText, 'Режиссер:');
            $object->producer = substr($postText, 0, $actorPos);
            $object->postText = substr($postText, $actorPos, strlen($postText) - 1);
						$object->like=$wall[$randPostId]->likes->count;
						$object->link=$wall[$randPostId]->id;
						$filmArray[] = $object;

        }
    }
}
foreach ( $filmArray as $filmArray ) {
	echo "<div class=\"film\">";
	echo "<div class=\"film_poster\">";
	echo "<p><Img src=\"" .$filmArray->img. "\"</p></div>";
	echo "<div class=\"description\">";
	echo "<p>" . ($postNumber) . "</b>. <i>" .$filmArray->name. "</p><br />";
	echo "<p>" . $filmArray->country . "</p>";
	echo "<p>" . $filmArray->genre . "</p>";
	echo "<p>" . $filmArray->rating . "</p>";
	echo "<p>" . $filmArray->producer . "</p>";
	echo "<p>" . $filmArray->postText . "</p>";
	echo "<p>Лайков " .$filmArray->like. "</p>";
	echo "<a href='https://vk.com/xfilm?w=wall-26750264_" .$filmArray->link. "'> Смотреть на стене</a></div></div>";
	$postNumber++;
}
?>

</html>
