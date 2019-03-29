var like = {
  counter: 0}
  like.Like=function() {
    this.counter++;
  },
  like.DisLike=function() {
    this.counter--;
  }
console.log(like.counter);
like.Like();
like.Like();
like.Like();
console.log(like.counter);
like.DisLike();
like.DisLike();
like.DisLike();
like.DisLike();
console.log(like.counter);
