function addComment() {
  var commentList = document.getElementById("comments");

  var userNick = document.createElement('div');
  userNick.className = "nick";
  userNick.id = 'user_nick';
  var nickText = document.getElementById('nick');
  userNick.innerHTML = nickText.value;

  var newComment = document.createElement('div');
  newComment.className = "comment";
  userNick.id = 'user_comment';
  var commentText = document.getElementById('comment');
  newComment.innerHTML = commentText.value;
  commentList.appendChild(userNick);
  commentList.appendChild(newComment);

  var elemCount  = document.getElementsByClassName("comments")[0].childElementCount;
  console.log(elemCount);
  if(elemCount > 8){
    commentList.removeChild(commentList.firstChild);
    commentList.removeChild(commentList.firstChild);
  }
}
