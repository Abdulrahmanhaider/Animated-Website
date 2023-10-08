

var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleskew(){
    var xscale=1;
    var yscale=1;

    var xpre=0;
    var ypre=0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
    // console.log(dets.clientX,dets.clientY);
      var xdiff=dets.clientX-xpre;
      var ydiff=dets.clientY-ypre;

      xpre=dets.clientX;
      ypre=dets.clientY;
    //    console.log(xpre,ypre);
        
    //   console.log(xdiff,ydiff);
     var xscale=gsap.utils.clamp(.8,1.2,xdiff);
     var yscale=gsap.utils.clamp(.8,1.2,ydiff);
     circleMouse(xscale,yscale);
     timeout=setTimeout(function(){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX-5}px, ${dets.clientY-5}px) scale(${1},${1})`
     },100)
    });
}
circleskew();

function circleMouse(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
    document.querySelector('#minicircle').style.transform = `translate(${dets.clientX-5}px, ${dets.clientY-5}px) scale(${xscale},${yscale})`
    });
}

document.querySelectorAll(".elem").forEach(function(elem)
{
    
    var rotate=0;
    var diffrot=0;
    
    
    elem.addEventListener("mousemove",function(dets){
     
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot=dets.clientX - rotate;
        rotate = dets.clientX;
        
     gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,diffrot*1.5) 
     });
    });
    elem.addEventListener("mouseleave",function(dets){
       
        
        gsap.to(elem.querySelector("img"),{
           opacity:0,
           ease:Power3,
           duration:.5
           
        });
       });
})

circleMouse();


function firstPageAnim(){
    var t1= gsap.timeline();

    t1.from(".nav",{
        y:'-15',
        opacity:0,
        duration:1,
        ease:Expo.easeInOut,
        
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.1,
        delay:-1

    })

    .from("#heroFooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.eseInOut
    })
    
}



firstPageAnim();
