// add scripts

$(document).on('ready', function() {
  $(".btn").on("click",function(e){
  e.preventDefault();
  var bill = $("#bill").val();
  var  billNum = bill.replace(/[^0-9\.]+/g,'');
  var tipAmnt = $(".tipValue").val();
  var tip =  billNum * tipAmnt;
  if (tip !== 0.00){
    $(".tipAmt").html('<h2>You should tip $'+tip.toFixed(2) +'</h2>');
  }else{
    alert("please enter the bill and select a tip amount");
    }
  });
});

// TODO: Add a total for bill + tip
