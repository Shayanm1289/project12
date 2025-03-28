
const loading = document.getElementById('loading');
const btn= document.getElementById('btn');
const dogImage = document.getElementById('dogImage');


async function fetchDogImage() {
    dogImage.style.display = 'none'; 
    loading.style.display = 'block';  
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        dogImage.style.display = 'block';
        dogImage.src = data.message;
        
    } catch (error05) {
        console.error('Error1:',error05 );
    } finally {
        loading.style.display = 'none';
    }
}


fetchDogImage();
btn.addEventListener('click', fetchDogImage);