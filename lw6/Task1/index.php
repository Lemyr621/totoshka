<!DOCTYPE html>
<html>

<head>
		<title>VK API</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="style.css">
</head>
<?php // ключ приложения
$url = file_get_contents("https://api.vk.com/method/wall.get?owner_id=-26750264&count=100&filter=owner&v=5.92&access_token=b0e05daab0e05daab0e05daa0cb08b7414bb0e0b0e05daaede606ea22d8738d28a04fe4"); // функция по которой подключаемся к нужной странице и используем нужный метод
$wall = json_decode($url);
$wall = $wall->response->items;
$postNumber = 1;
$PostIdArray = array();
$filmInRow=0;
echo "<div class=\"white\">";
for ($i = 0;$i < 15;$i++) {
    $randPostId = rand(0, 100);
    if (!in_array($randPostId, $PostIdArray)) {
        $PostIdArray[] = $randPostId;
        if (strpos($wall[$randPostId]->text, 'Страна:')) {
            $postText = $wall[$randPostId]->text;
            $countryPos = strpos($postText, 'Страна:');
            $name = substr($postText, 0, $countryPos);
            $postText = substr($postText, $countryPos, strlen($postText) - 1);
            $genrePos = strpos($postText, 'Жанр:');
            $country = substr($postText, 0, $genrePos);
            $postText = substr($postText, $genrePos, strlen($postText) - 1);
            $ratingPos = strpos($postText, 'Рейтинги:');
            $genre = substr($postText, 0, $ratingPos);
            $genre = str_replace("@xfilm", "", $genre);
            $postText = substr($postText, $ratingPos, strlen($postText) - 1);
            $producerPos = strpos($postText, 'Режиссер:');
            $rating = substr($postText, 0, $producerPos);
            $postText = substr($postText, $producerPos, strlen($postText) - 1);
            $actorPos = strpos($postText, 'Режиссер:');
            $producer = substr($postText, 0, $actorPos);
            $postText = substr($postText, $actorPos, strlen($postText) - 1);
						echo "<div class=\"film\">";
						echo "<div class=\"film_poster\">";
            echo "<p><Img src=\"" . $wall[$randPostId]->attachments[0]->photo->sizes[3]->url . "\"</p></div>";
						echo "<div class=\"description\">";
						echo "<p>" . ($postNumber) . "</b>. <i>" . $name . "</p><br />";
            echo "<p>" . $country . "</p>";
            echo "<p>" . $genre . "</p>";
            echo "<p>" . $rating . "</p>";
            echo "<p>" . $producer . "</p>";
            echo "<p>" . $postText . "</p>";
            echo "<p>Лайков " . $wall[$randPostId]->likes->count . "</p>";
            echo "<a href='https://vk.com/xfilm?w=wall-26750264_" . $wall[$randPostId]->id . "'> Смотреть на стене</a></div></div>";
            $postNumber++;
						$filmInRow++;
        }
    }
}
echo"</div>";
?>
</html>
