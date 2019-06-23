function addComment() {
  var commentList = document.getElementById("comments");

  var userNick = document.createElement('div');
  userNick.className = "nick";
  var nickText = document.getElementById('nick');
  userNick.innerHTML = nickText.value;

  var newComment = document.createElement('div');
  newComment.className = "comment";
  var commentText = document.getElementById('comment');
  newComment.innerHTML = commentText.value;
  commentList.appendChild(userNick);
  commentList.appendChild(newComment);
}
