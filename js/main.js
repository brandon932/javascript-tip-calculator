// add scripts

$(document).on('ready', function() {
  $(".btn").on("click",function(e){
  e.preventDefault();
  var bill = $("#bill").val();
  var  billNum = bill.replace(/[^0-9\.]+/g,'');
  console.log(billNum);
  var tipAmnt = $(".tipValue").val();
  var tip =  billNum * tipAmnt;
  $(".tipAmt").html('<h2>You should tip $'+tip.toFixed(2) +'</h2>');
  });
});
