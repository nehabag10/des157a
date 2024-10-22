const button = document.getElementById('bubbleButton');

button.addEventListener('click', function() {
    const bubble = document.createElement('div');
    const bubble1 = document.createElement('div');
    bubble.classList.add('bubble');
    bubble1.classList.add('bubble1');
    
    document.body.appendChild(bubble);
    document.body.appendChild(bubble1);

});