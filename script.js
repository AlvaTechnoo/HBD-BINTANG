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
    'assets/images/memory1.jpg',
    'assets/images/memory2.jpg',
    'assets/images/memory3.jpg',
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

photoInput.addEventListener('change
