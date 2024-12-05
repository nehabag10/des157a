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
        let thisPage = event.target.id;
        if (currentPage < totalPages - 1) {
            currentPage++;
        } else {
            currentPage = 0;
        }
        updatePages(thisPage);

        console.log(thisPage);
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

        const statebuttons = document.querySelectorAll(".statebutton");

        const newstate = document.querySelector(`.states-${thisPage}`);
        const addplace = document.querySelector(`.addname-${thisPage}`);
            if (newstate) {
                statebuttons.forEach((statebutton) => {
                    statebutton.addEventListener('click', function(){
                        newstate.src= `images/${thisPage}-states.svg`;
                        if (thisPage === "ramen") {
                            addplace.innerHTML = "<p>to see where this meal is based: San Francisco, CA </p>"
                        }
                        if (thisPage === "vpasta") {
                            addplace.innerHTML = "<p>to see where this meal is based: Chicago, IL </p>"
                        }
                        if (thisPage === "pizza") {
                            addplace.innerHTML = "<p>to see where this meal is based: New York City, NY </p>"
                        }
                        if (thisPage === "brunch") {
                            addplace.innerHTML = "<p>to see where this meal is based: Oahu, HI </p>"
                        }
                        if (thisPage === "pasta") {
                            addplace.innerHTML = "<p>to see where this meal is based: Los Angeles, CA </p>"
                        }
                    });

                });
            }   
        
        
        const getchangeareas = document.querySelectorAll(".before");
        const newimagesstate = document.querySelector(`.before-${thisPage}`);

        getchangeareas.forEach((getchangearea) => {
            getchangearea.addEventListener('mouseover' , function(){
                newimagesstate.src= `images/${thisPage}-after.svg`;
                
            });

        });
        getchangeareas.forEach((getchangearea) => {
            getchangearea.addEventListener("mouseleave", function(){
                newimagesstate.src = `images/${thisPage}-before.svg`;
            });

        });
        
        const starbuttons = document.querySelectorAll(".buttonstarschange");
        const stars = document.querySelector(`.emptystars-${thisPage}`);
        if (stars) {
            starbuttons.forEach((starbutton) => {
                starbutton.addEventListener("click" , function(){
                    stars.src= `images/${thisPage}-stars.svg`;
                });

            });
        }
        
        }
        
})();

