

// mobile navigations
 const hamberger=document.querySelector('.hamberger');
 const times=document.querySelector('.times');
 const mobileNav=document.querySelector('.mobile-nav')

 hamberger.addEventListener('click', function(){
 
   mobileNav.classList.add('moblie-nav-open');


 });
 times.addEventListener('click',function(){
   mobileNav.classList.remove('moblie-nav-open');
 });

  const navLink=document.querySelectorAll('.nav-link');
   function LinkAction()
   {

   
  navLink.forEach((n)=>{
   //   active link
   n.classList.remove('navActive');
  });
  this.classList.add('navActive');
   // after click remove  mobile navbar
   mobileNav.classList.remove('moblie-nav-open')

}
navLink.forEach(n=>{
   n.addEventListener('click',LinkAction);
});






// home section heading animation



   var typed= new Typed('#heading-animation', {
      strings:[
         ' Web Developar ',
         ' Web Designer ',
         ' React Developer ',
      ],
      typeSpeed: 200,
      backSpeed: 200,
      loop:true,
   });







   const skilsection= document.getElementsByClassName('Skils');

   const bars= document.querySelectorAll('.progress_tool');

   

   bars.forEach((bar)=>{
   let parsentage =bar.dataset.present;
    let tool=bar.children[0];
    tool.innerText=parsentage+"%";
    bar.style.width=parsentage+"%";

   });



// image filter

// jquery using:
console.log("sunny")
   
  var $wrapper = $('.project-wrapper');


  $wrapper.isotope({
     filter : '*',
    layoutMode:'masonry',
    animationOptions : {
     duration:750,
     easing:'linear'
    }
  });
  

let links=document.querySelectorAll('.list a');
console.log(links);
links.forEach(link=>{
   let selector= link.dataset.filter;

   link.addEventListener('click',function(e){
     e.preventDefault();
      
     $wrapper.isotope({
      filter : selector,
     layoutMode:'masonry',
     animationOptions : {
      duration:750,
      easing:'linear'
     }
   });

   links.forEach(link=>{
    
      link.classList.remove('active');


   });
   e.target.classList.add('active');
        

   });


   $('.magnify').magnificPopup({

      type: 'image',
      
      gallery:{
         enabled:true,
   
      },
      
      zoom:{
         enabled: true
      }
   
     });

});

  // Magnify : zoom efect :


  
  




