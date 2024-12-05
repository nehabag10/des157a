(function(){

    'use strict';
    console.log("reading JS");
    
    const container = document.getElementById('bookContainer');
    const pages = document.querySelectorAll('.page');
    let pageNo = 6;

    let currentPage = -1;
    const totalPages = pages.length;

    const nextButtons = document.getElementsByClassName('next');
    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', nextPage);
    }

    const prevButtons = document.getElementsByClassName('prev');
    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener('click', prevPage);
    }

    function nextPage(event){
        const thisPage = event.target.id;
        if (currentPage < totalPages - 1) {
            currentPage++;
        } else {
            currentPage = 0;
        }
        updatePages(thisPage);
    }

    function prevPage(){
        if (currentPage > 0) {
            currentPage--;
        } else {
            currentPage = totalPages - 1; 
        }
        updatePages();
    }

    function updatePages(thisPage) {
        for (let i = 0; i < pages.length; i++) {
            if (i === currentPage) {
                pages[i].style.zIndex = 1;
            } else {
                pages[i].style.zIndex = 0;
            }
        }

        const stars = document.querySelector(`.emptystars-${thisPage}`);

        if (stars) {
            stars.addEventListener("mouseover" , function(){
                stars.src= `images/${thisPage}-stars.svg`;
            });
        }

        const state = document.querySelector(`.prestate-${thisPage}`);
        if (state) {
            state.addEventListener("mouseover" , function(){
                state.src= `images/${thisPage}-state.svg`;
                state.style.opacity = "100%";
                state.style.width = "100%";
            });

            state.addEventListener("mouseleave", function(){
                state.src = `images/${thisPage}.svg`;  
                state.style.opacity = "60%";
                state.style.width = "75%"; 
            });
        }

         /*final script*/

        // const statebutton = document.getElementById("statebutton");

        // const newstate = document.querySelector(`.states-${thisPage}`)
        //     if (newstate) {
        //         statebutton.addEventListener('click', function(){
        //             newstate.src= `images/${thisPage}-states.svg`;
        //         });
        //     }
       
        
        
        // const getchangearea = document.getElementById("before");
        // const newimagesstate = document.querySelector(`.before-${thisPage}`)
        // getchangearea.addEventListener('mouseover' , function(){
        //         newimagesstate.src= `images/${thisPage}-after.svg`;
                
        //     })
        // getchangearea.addEventListener("mouseleave", function(){
        //         newimagesstate.src = `images/${thisPage}-before.svg`;
        //     });
        
        // const starbutton = document.getElementById("buttonstarschange");
        // const stars = document.querySelector(`.emptystars-${thisPage}`);
        // if (stars) {
        //     starbutton.addEventListener("click" , function(){
        //         stars.src= `images/${thisPage}-stars.svg`;
        //     });
        // }
        
        }
        
})();

