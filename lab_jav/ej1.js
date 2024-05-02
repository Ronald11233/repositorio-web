const images = document.querySelectorAll('.image');
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');

images.forEach(image =>{
    image.addEventListener('click', () =>{
        modalDescription.textContent = image.dataset.description;
        modal.style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click',()=>{
    modal.style.display = 'none';
});

window.addEventListener('click',(event) =>{
    if(event.target === modal){
        modal.style.display = 'none';
    }
});