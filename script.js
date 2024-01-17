var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor_blr")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -150 +"px"
    blur.style.top = dets.y -150 +"px"
})

// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         crsr.style.scale = 3
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #fff"
//         crsr.style.backgroundColor = "fff"
//     })
// })

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    // delay:1
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }

})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -100%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 68%",
    }
})
gsap.from("#page3 p",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 68%",
    }
})
gsap.from("#c1",{
    y:-70,
    x: -70,
    scrollTrigger:{
        trigger:"#c1",
        scroller:"body",
        start:"top 60%",
        end:"top 47%"
    }
})
gsap.from("#c2",{
    y:70,
    x: 70,
    scrollTrigger:{
        trigger:"#c1",
        scroller:"body",
        start:"top 60%",
        end:"top 47%"
    }
})


