// add scripts

$(document).on('ready', function() {
  $(".btn").on("click",function(e){
  e.preventDefault();
  var bill = $("#bill").val();
  var tipAmnt = 0.20;
  var tip = $("#bill").val() * tipAmnt;
  $(".tipAmt").html('<h2>You should tip '+tip.toFixed(2) +'</h2>');
  });
});
