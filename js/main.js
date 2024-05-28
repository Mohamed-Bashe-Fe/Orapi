$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})




let btnToggle = document.querySelector(".header_btn");

btnToggle.addEventListener("click" , function(){
  let nav= document.querySelector(".nav");
  nav.style.transform = "translate(-100%, 0px)"; 
  let headOverlay = document.querySelector(".header-overlay");
  headOverlay.style.left = "0"
  document.documentElement.style.overflow='hidden';
  headOverlay.addEventListener("click" , function(){
      if(headOverlay.style.left = "0"){
          headOverlay.style.left = "-100%";
           nav.style.transform = "translate(100%, 0px)";  
          document.documentElement.style.overflow='auto';


      }
  })
})


let btnWhatsup = document.querySelector(".header_contact span");
btnWhatsup.addEventListener("click" , function(){
    let headerContactDisc = document.querySelector(".header_contact_disc");
    headerContactDisc.classList.toggle("show");
})




let x = document.querySelectorAll(".gallery_item .card img");
let closeicone = document.querySelector(".box_pop_img span");

x.forEach((ele)=>{
    ele.addEventListener("click",function(e){
    document.querySelector(".background").style.backgroundImage = `url(${e.target.getAttribute("src")})`;
    document.querySelector(".box_pop_img").classList.add("show")
    })
})


closeicone.addEventListener("click",function(){
    document.querySelector(".box_pop_img").classList.remove("show");
})






