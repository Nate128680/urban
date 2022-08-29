var $circle = $('.ball3'),
    $follow = $('.ball'),
    $links = $('.ball2');

    TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 1
      });
      TweenLite.to($follow, 0.3, {
        opacity: 1,
        scale: 0
      });

      TweenLite.to($links, 0.3, {
        opacity: 1,
        scale: 0
      });

      



function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
      x: e.clientX ,
      y: e.clientY 
  });
  TweenLite.to($follow, 0.7, {
      x: e.clientX ,
      y: e.clientY 
  });  
  TweenLite.to($links, 0.3, {
    x: e.clientX ,
    y: e.clientY 
});  
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1
  });
  TweenLite.to($follow, 0.3, {
      scale: 1
  });  
  TweenLite.to($links, 0.3, {
    scale: 0
}); 
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1
  });
  TweenLite.to($follow, 0.3, {
      scale: 0
  });  
}

function verbunhoverFunc(e) {
    TweenLite.to($links, 0.3, {
      opacity: 1,
      scale: 0
    }); 
    TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 1
      });
      TweenLite.to($follow, 0.3, {
        opacity: 1,
        scale: 0
      });
  }

  function verbhoverFunc(e) {
    TweenLite.to($links, 0.3, {
      opacity: 1,
      scale: 2
    });
    TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 0
      });
      TweenLite.to($follow, 0.3, {
        opacity: 1,
        scale: 0
      });

  }

$(window).on('mousemove', moveCircle);

$("a").hover(hoverFunc, unhoverFunc);
$("h1, p, h2").hover(verbhoverFunc, verbunhoverFunc);