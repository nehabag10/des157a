(function(){
    const myImages = ['page1.png', 'page2.png'];
    const slide = document.querySelector("#myimage")

    let currentImage = 0;

    document.querySelector("#next").addEventListener('click', nextPhoto);
    document.querySelector("#prev").addEventListener('click', prevPhoto);

    function nextPhoto(){
            currentImage++;
            if(currentImage > myImages.length-1){
                currentImage = 0;
            }
            slide.src= `images/${myImages[currentImage]}`;
        }

        function prevPhoto(){
            currentImage--;
            if(currentImage < 0){
                currentImage = myImages.length-1;
            }
            slide.src= `images/${myImages[currentImage]}`;
        }
})();