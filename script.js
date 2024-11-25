const player = document.getElementById('player');
const giftsContainer = document.getElementById('gifts');
const uploadPhotoButton = document.getElementById('upload-photo');
const photoInput = document.getElementById('photo-input');
const photoGallery = document.getElementById('photo-gallery');
const blowCandlesButton = document.getElementById('blow-candles');
const memoryGallery = document.getElementById('memory-gallery');
const playAudioButton = document.getElementById('play-audio');
const birthdayAudio = document.getElementById('birthday-audio');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score-display');
const rollingPhoto = document.getElementById('rolling-photo');
const birthdayMessage = document.getElementById('birthday-message');

let score = 0;
let gameStarted = false;

// Array of memory images
const memories = [
    'assets/images/memory1.jpg',
    'assets/images/memory2.jpg',
    'assets/images/memory3.jpg',
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
        scoreDisplay.textContent = 'Score: ' + score;
        giftsContainer.removeChild(gift);
        createGift(); // Create a new gift
    });
}

// Start the game and play audio
startButton.addEventListener('click', () => {
    if (!gameStarted) {
        birthdayAudio.play();
        rollingPhoto.style.display = 'block';
        gameStarted = true;
        scoreDisplay.style.display = 'block';
        for (let i = 0; i < 5; i++) {
            createGift();
        }
    }
});

// Photo upload functionality
uploadPhotoButton.addEventListener('click', () => {
    photoInput.click();
});

photoInput.addEventListener('change', (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.width = 100; // Set image width
            photoGallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Blow out candles functionality
blowCandlesButton.addEventListener('click', () => {
    birthdayMessage.classList.remove('hidden');
    birthdayMessage.style.display = 'block';
    setTimeout(() => {
        birthdayMessage.style.display
