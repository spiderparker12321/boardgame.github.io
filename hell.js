var buttonClicked = false;

  window.addEventListener('load',function(){
  console.log(buttonClicked);
  document.getElementById('BtnGotit').addEventListener('onclick',function(){
    buttonClicked = true;
    console.log(buttonClicked);
  });
  });
