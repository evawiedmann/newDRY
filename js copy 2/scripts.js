$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var favFood = $("input#favFood").val();
    var favFood2 = $("input#favFood2").val();

    $(".favFood").text(favFood);
    $(".favFood2").text(favFood2);

    var favFoodArray = [];
    favFoodArray.push(favFood);
    favFoodArray.push(favFood2);

    console.log(favFoodArray);
    event.preventDefault();
  });


});


var total = 0;
var summands = [100,2,3,2,4]
summands.forEach(function(summand) {
total += summand;
});
