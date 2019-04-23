var like = {
  counter: 0
}
like.funcLike = function() {
    this.counter++;
  },
  like.funcDislike = function() {
    this.counter--;
  }
console.log(like.counter);
like.funcLike();
like.funcLike();
like.funcLike();
console.log(like.counter);
like.funcDislike();
like.funcDislike();
like.funcDislike();
like.funcDislike();
console.log(like.counter);
