var buttonClicked = false;

  window.addEventListener('load',desktopMove(e){
  console.log(buttonClicked);
  document.getElementById('BtnGotit').addEventListener('onclick',desktopMove(e){
    buttonClicked = true;
    console.log(buttonClicked);
  });
  });

function desktopMove(e){

if(buttonClicked == true){
            var wH = $(window).height();
            var wW = $(window).width();
            var x = e.clientX;
            var y = e.clientY;
            if(x <= 20){
                //Left
                $pageTrigger = $('.pt-page-current').find('.right');
                    if($pageTrigger.length)
                        Animate($pageTrigger);
            }else if(x >= (wW - 50)){
                //Right
                $pageTrigger = $('.pt-page-current').find('.left');
                    if($pageTrigger.length)
                        Animate($pageTrigger);
            }else if(y <= 50){
                //Top
                $pageTrigger = $('.pt-page-current').find('.back');
                    if($pageTrigger.length)
                        Animate($pageTrigger);
            }else if(y >= (wH - 50)){
                //Bottom
                $pageTrigger = $('.pt-page-current').find('.next');
                    if($pageTrigger.length)
                        Animate($pageTrigger);
            }

        }
        }
