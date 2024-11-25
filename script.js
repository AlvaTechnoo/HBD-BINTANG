const player = document.getElementById('player');
const giftsContainer = document.getElementById('gifts');
const uploadPhotoButton = document.getElementById('upload-photo');
const photoInput = document.getElementById('photo-input');
const photoGallery = document.getElementById('photo-gallery');
const blowCandlesButton = document.getElementById('blow-candles');
const memoryGallery = document.getElementById('memory-gallery');

let score = 0;

// Array of memory images
const memories = [
    'memory1.jpg',
    'memory2.jpg',
    'memory3.jpg',
    // Add more memory images as needed
];

// Function to create gifts
function createGift() {
    const gift = document.createElement('div');
    gift.classList.add('gift');
    gift.textContent = '🎁';
    gift.style.left = Math.random() * (580 - 40) + 'px'; // Random position
    gift.style.top = Math.random() * (380 - 40) + 'px'; // Random position
    giftsContainer.appendChild(gift);

    // Add click event to gift
    gift.addEventListener('click', function() {
        score++;
        alert('You collected a gift! Score: ' + score);
        giftsContainer.removeChild(gift);
        createGift(); // Create a new gift
    });
}

// Start the game
for (let i = 0; i < 5; i++) {
    createGift();
}

// Photo upload functionality
uploadPhotoButton.addEventListener('click', () => {
    photoInput.click();
});

photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100px';
            img.style.margin = '10px';
            photoGallery.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});

// Blow out candles functionality
blowCandlesButton.addEventListener('click', () => {
    alert('🎉 Bintang blew out the candles! 🎉');

    // Show memory pictures
    memories.forEach(memory => {
        const img = document.createElement('img');
        img.src = memory;
        memoryGallery.appendChild(img);
    });

    // Play background music
    const audio = new Audio('background-music.mp3'); // Add your music file
    audio.loop = true; // Loop the music
    audio.play();
});