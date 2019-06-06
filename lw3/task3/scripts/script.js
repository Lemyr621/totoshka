hall = '';
for (i = 1; i <= 10; i++) {
  row = "";
  for (j = 1; j <= 10; j++) {
    row = row + '<div class="seat"><p>' + j + '</p></div>';
  }
  hall = hall + row + '<div class="SpaceBetween"></div>';
}
$('div.Hall').html(hall);
$('.seat').click(function() {
  $(event.currentTarget).toggleClass('bay');
});
