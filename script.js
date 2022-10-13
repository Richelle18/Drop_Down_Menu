const subMenu = document.querySelectorAll(".hover-active");
const arrowRight = document.querySelectorAll(".fa-angle-right");
const ellipsis = document.querySelector(".fa-ellipsis-vertical");
const firstUl = document.querySelector(".menu-bar .main-ul");
const secondMainUl = document.querySelector(".menu-bar ul #hidden-li ul");
const firstNavHidden = document.querySelectorAll(".menu-bar ul .hidden-nav-text");
const secondHiddenNav = document.querySelectorAll('.menu-bar ul #hidden-li ul .hidden-nav-text');
const mainNav = document.querySelectorAll('.menu-bar ul .main-nav-text');
const mainLi = document.querySelectorAll(".menu-bar ul li");
let widthOfScreen = window.innerWidth;




//remove  & add active class listener
for(let i = 0; i < mainLi.length;i++){
    mainLi[i].addEventListener("click", (e)=>{
        let targetElement = e.target
      //call function that remove active class
     removeActiveClass(mainLi[i]);

     //call function that add active class
      addActiveClass(mainLi[i]);
   
   
    });
}


//function that remove active class
function  removeActiveClass(mainLiValue){
    if(mainLiValue.className.includes("main-nav-text") || mainLiValue.className.includes("hidden-nav-text")){
        
           if(!mainLiValue.children[0].getAttribute("class").includes("fa-ellipsis-vertical") ){
            
               for(let b = 0; b < mainLi.length; b++){
             
                   if((mainLi[b].className.includes("hidden-nav-text") || mainLi[b].className.includes("main-nav-text")) && !mainLi[b].innerText.includes(mainLiValue.innerText)){
                   mainLi[b].classList.remove("active");
                
                   }
                   
               }

           }  
   }
}

  //function that add active class
function addActiveClass(clckList){
         if(clckList.className.includes("main-nav-text") || clckList.className.includes("hidden-nav-text")){
                if(!clckList.children[0].getAttribute("class").includes("fa-ellipsis-vertical") ){
                    for(let b = 0; b < mainLi.length; b++){
                        if((mainLi[b].className.includes("hidden-nav-text") || mainLi[b].className.includes("main-nav-text")) && mainLi[b].innerText.includes(clckList.innerText)){
                        mainLi[b].classList.add("active");
                        
                        }
                        
                    }

                }  
        }
}




//put hover effect in arrow and sibling element when li hover
for(var i = 0; i < subMenu.length;i++){
    subMenu[i].addEventListener("mouseover", (e)=>{
     let mouseOverElement = e.target;
        mouseOverElement.nextElementSibling.classList.add("active-color");
      });

    subMenu[i].addEventListener("mouseout", (e)=>{
        let mouseOutElement = e.target;
            mouseOutElement.nextElementSibling.classList.remove("active-color");
          });
}

//put hover effect in arrow and sibling element when arrow hover
for(var i = 0; i < arrowRight.length;i++){
    arrowRight[i].addEventListener("mouseover", (e)=>{
     let mouseOverElement = e.target.previousElementSibling;
        mouseOverElement.classList.add("active-color");
    });
    arrowRight[i].addEventListener("mouseout", (e)=>{
        let mouseOutElement = e.target.previousElementSibling;
            mouseOutElement.classList.remove("active-color");
           
    });
   
}

//ellipsis click event
ellipsis.addEventListener("click", (e) =>{    
    // widthOfScreen = window.innerWidth
 
    if(e.target.className === "fa-solid fa-ellipsis-vertical"){
      
        if(widthOfScreen < 860){
         
            for (let i = 0; i < mainLi.length; i++){
                mainLi[i].classList.toggle("clicked");
                
            }
            firstUl.classList.toggle("clicked");
        }else{
            for (let i = 0; i < secondHiddenNav.length; i++){
             
                secondHiddenNav[i].classList.toggle("clicked");
            }
             secondMainUl.classList.toggle("clicked");

        } 
    }
});


//remove sidebar according to window innerwidth
window.addEventListener("resize",()=>{  
    widthOfScreen = window.innerWidth
        if(firstUl.className.includes("clicked") && widthOfScreen > 860  ){
              removeSidebar();
        }else if(secondMainUl.className.includes("clicked") && (widthOfScreen > 1300 || widthOfScreen < 860  )){
                    
                    removeSidebar();
                }
});


// remove clicked on navBar when user clicked inside the body

window.addEventListener("click",(e)=>{
    //console.log(e.target);
    if(e.target.className !== "fa-solid fa-ellipsis-vertical"){
        removeSidebar();
    }
});



//remove sidebar function
function removeSidebar(){
    for (let i = 0; i < mainNav.length; i++){
       
                    for (let i = 0; i < secondHiddenNav.length; i++){
                     
                        secondHiddenNav[i].classList.remove("clicked");
                    }
                secondMainUl.classList.remove("clicked");   
            }
            for (let i = 0; i < mainLi.length; i++){
                mainLi[i].classList.remove("clicked");
            }
            firstUl.classList.remove("clicked");
}




   


