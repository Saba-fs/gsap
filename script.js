gsap.from(".pro h2",{
    opacity:0,
    duration:1.5,
    x:-700,
    scrollTrigger:{
        trigger:".pro h2",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
    }
})
gsap.from(".col1",{
    opacity:0,
    duration:2,
    scale:0,
    
    // scrollTrigger:".col1"
    scrollTrigger:{
        trigger:".col1",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        
        
    }
})
gsap.from(".pho1 img",{
    opacity:0,
    duration:2,
    delay:.5,
    x:-700,
    
    // scrollTrigger:".pho1 img"
    scrollTrigger:{
        trigger:".pho1 img",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:5
        
        
    }
})
gsap.from(".pho1 p",{
    opacity:0,
    duration:2,
    delay:.5,
    x:700,
    // scrollTrigger:".pho1 p"
    scrollTrigger:{
        trigger:".pho1 p",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:5
        
        
    }
})

gsap.from(".pro2 img",{
    opacity:0,
    y:500,
    duration:1,
    scrollTrigger:{
        trigger:".pro2 img",
        scroller:"body",
        // markers:true,
        start:"top 70%",
         

    }
})