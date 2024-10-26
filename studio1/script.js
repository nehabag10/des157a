(function() {
    "use strict"
    console.log("reading JS");

    const myform = document.querySelector("form");
    const madLib = document.querySelector("#madlib");

    myform.addEventListener('submit', function(event) {
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const adj2 = document.querySelector('#adj2').value;
        const verb = document.querySelector('#verb').value;
        const num = document.querySelector('#num').value;
        const noun3 = document.querySelector('#noun3').value;
        const adj3 = document.querySelector('#adj3').value;
        const noun4 = document.querySelector('#noun4').value;
        const adverb = document.querySelector('#adverb').value;
        const noun5 = document.querySelector('#noun5').value;
        const ptv = document.querySelector('#ptv').value;
        const adv1 = document.querySelector('#adv1').value;
        const noun6 = document.querySelector('#noun6').value;
        const num1 = document.querySelector('#num1').value;
        const pnoun = document.querySelector('#pnoun').value;
        const feeling = document.querySelector('#feeling').value;

        let myText;

        if (adj === '') {
            myText = "please provide an adjective";
            document.querySelector('#adj').focus();
        } 
        else if (noun1 === '') {
            myText = "please provide a noun";
            document.querySelector('#noun1').focus();
        } 
        else if (adj2 === '') {
            myText = "please provide an adjective";
            document.querySelector('#adj2').focus();
        }
        else if (noun2 === '') {
            myText = "please provide a second noun";
            document.querySelector('#noun2').focus();
        }
        else if (num === '') {
            myText = "please provide a number";
            document.querySelector('#num').focus();
        } 
        else if (noun3 === '') {
            myText = "please provide a noun";
            document.querySelector('#noun3').focus();
        }
        else if (adj3 === '') {
            myText = "please provide an adjective";
            document.querySelector('#adj3').focus();
        }
        else if (verb === '') {
            myText = "please provide a verb";
            document.querySelector('#verb').focus();
        }
        else if (noun4 === '') {
            myText = "please provide a noun";
            document.querySelector('#noun4').focus();
        }
        else if (adverb === '') {
            myText = "please provide an adverb";
            document.querySelector('#adverb').focus();
        }
        else if (ptv === '') {
            myText = "please provide a past tense verb";
            document.querySelector('#ptv').focus();
        }
        else if (noun5 === '') {
            myText = "please provide a noun";
            document.querySelector('#noun5').focus();
        }
        else if (adv1 === '') {
            myText = "please provide an adverb";
            document.querySelector('#adv1').focus();
        }
        else if (noun6 === '') {
            myText = "please provide a noun";
            document.querySelector('#noun6').focus();
        }
        else if (num1 === '') {
            myText = "please provide a number";
            document.querySelector('#num1').focus();
        }
        else if (pnoun === '') {
            myText = "please provide a proper noun";
            document.querySelector('#pnoun').focus();
        }
        else if (feeling === '') {
            myText = "please provide a feeling";
            document.querySelector('#feeling').focus();
        } else {
            // document.querySelector('#noun1').value = '';
            // document.querySelector('#noun2').value = '';     
            // document.querySelector('#adj').value = '';  
            // document.querySelector('#verb').value = '';
            // document.querySelector('#feeling').value = '';

            myText = `Sally had enough of her ${adj} day. She wanted to turn it around and bake a ${noun1}. She started by gathering all the ingredients from her ${adj2} pantry. She grabbed a ${noun2}, ${num} cups of ${noun3}, and ${adj3} milk. She went to her closet and ${ptv} a bowl and ${noun4} to ${adverb} finish the process. She ${verb} all the ingredients but accidentally spilled some ${noun5} when using her mixer. Sally waited to hear the noise from the oven and ${adv1} brought her ${noun6} to the oven. She then set a timer for ${num1} minutes. She got a phone call from ${pnoun} and went away from the timer. Later, the timer rang. She didn't hear it. Suddenly smoke was all over and she was ${feeling} that she had to repeat the process.`
        }

        madLib.innerHTML = myText;
    });

    const button = document.getElementById('bubbleButton');

    button.addEventListener('click', function() {
        document.getElementById("overlay").style.display = "flex";

        const bubble = document.createElement('div');
        const bubble1 = document.createElement('div');
        const bubble2 = document.createElement('div');
        const bubble3 = document.createElement('div');
        const bubble4 = document.createElement('div');
        bubble.classList.add('bubble');
        bubble1.classList.add('bubble1');
        bubble2.classList.add('bubble2');
        bubble3.classList.add('bubble3');
        bubble4.classList.add('bubble4');
        
        document.body.appendChild(bubble);
        document.body.appendChild(bubble1);
        document.body.appendChild(bubble2);
        document.body.appendChild(bubble3);
        document.body.appendChild(bubble4);
    
    });

    document.getElementById("closeOverlay").addEventListener("click", function() {
        document.getElementById("overlay").style.display = "none";
    });
})();

