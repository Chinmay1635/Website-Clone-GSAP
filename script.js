
function page1Animation(){
    let tl = gsap.timeline();
    tl.from(".star",{
        y:-50,
        opacity:0,
        duration:1.2,
    })
    
    tl.from(".part-2 h4",{
        y:-20,
        opacity:0,
        duration:0.2,
        stagger:0.2
    })
    
    tl.from(".part-2 button",{
        y:-20,
        opacity:0,
        duration:0.2,
    })
    
    tl.from(".slider",{
        x:-50,
        opacity:0,
        duration:0.2,
        stagger:0.2
    })
    
    tl.from(".img-part",{
        x:50,
        opacity:0,
        duration:0.5,
    })
    
    tl.from(".logo",{
        y:50,
        opacity:0,
        duration:0.5,
        stagger:0.2
    })
    
}

function page2Animation(){
    gsap.from(".sec-2 .container-2 h1",{
        x:-50,
        duration:0.5,
        opacity:0,
        scrollTrigger:{
            trigger:".sec-2 .container-2 h1",
            scroller:"body",
            start:"top 85%",
            end:"top 100%",
            scrub:2,
        }
    })
    gsap.from(".sec-2 .container-2 h4",{
        x:50,
        duration:0.5,
        opacity:0,
        scrollTrigger:{
            trigger:".sec-2 .container-2 h1",
            scroller:"body",
            start:"top 85%",
            end:"top 100%",
            scrub:2,
        }
    })
    
    gsap.from(".left",{
        x:-50,
        opacity:0,
        duration:1.9,
        stagger:5,
        scrollTrigger:{
            trigger:".left",
            scroller:"body",
            start:"top 65%",
            end:"top 20%",
            scrub:2,
        }
    })
    
    gsap.from(".right",{
        x:50,
        opacity:0,
        duration:1.9,
        stagger:5,
        scrollTrigger:{
            trigger:".left",
            scroller:"body",
            start:"top 65%",
            end:"top 20%",
            scrub:2,
        }
    })
    
    gsap.from(".slider-2",{
        x:-50,
        opacity:0,
        duration:1.2,
        stagger:0.2,
        scrollTrigger:{
            trigger:".slider-2  ",
            scroller:"body",
            start:"top 80%",
            end:"top 50%",
            scrub:2,
        }
    })
    
    gsap.from(".img",{
        x:50,
        opacity:0,
        duration:1.2,
        mixBlendMode: "multiply",
    
        scrollTrigger:{
            trigger:".slider-2  ",
            scroller:"body",
            start:"top 80%",
            end:"top 50%",
            scrub:2,
        }
    })
}

page1Animation();
page2Animation();
