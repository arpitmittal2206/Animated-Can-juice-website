var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%",
}, "orange")
tl.to("#orange-cut",{
    top: "160%",
    left: "23%"
}, "orange")
tl.to("#orange",{
    width: "15%",
    top: "162%",
    right: "10%"
}, "orange")
tl.to("#leaf1",{
    top: "110%",
    left: "70%",
    rotate: "160deg"
}, "orange")
tl.to("#leaf2",{
    top: "105%",
    left: "0",
    rotate: "180deg"
}, "orange")

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    top: "20%",
    left: "-100%"
}, "ca")
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%"
}, "ca")
tl2.from(".lemon2",{
    rotate: "90deg",
    top: "20%",
    left: "100%"
}, "ca")
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%"
}, "ca")

tl2.to("#orange-cut",{
    width: "18%",
    top: "203%",
    left: "42%"
}, "ca")
tl2.to("#fanta",{
    top: "210%",
    left: "34%",
    width: "33%"
}, "ca")
