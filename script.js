const images = document.querySelectorAll('img');
const modalImg = document.querySelector('#img01');
const imageModal = document.querySelector('#image-modal')


// display image
images.forEach(image => {
    console.log('hello')
    image.addEventListener('click', (e) => {
        imageModal.style.display = "block";
        modalImg.src = e.currentTarget.src;
    })
});


// close image

const close = document.querySelector('.close');  

close.addEventListener('click', () => {
    imageModal.style.display = "none";
})

