// script.js
document.getElementById('deepfakeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let fileInput = document.getElementById('mediaFile');
    let file = fileInput.files[0];
    
    if (!file) {
        alert("Please upload a file");
        return;
    }
    
    // Prepare the form data to send to the API
    let formData = new FormData();
    formData.append("file", file);
    
    // Replace 'YOUR_RAPID_API_URL' and 'YOUR_RAPID_API_KEY' with the actual URL and API key from RapidAPI
    fetch('https://face-url.jpg', {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '24a87cb7eamsh44f174e61fbe43bp18f2ddjsn483dd1cfe4ce',
            'x-rapidapi-host': 'face-swap-video-image-'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let resultDiv = document.getElementById('result');
        if (data.isFake) {
            resultDiv.textContent = "This is a deepfake!";
            resultDiv.style.color = "red";
        } else {
            resultDiv.textContent = "This is a real video!";
            resultDiv.style.color = "green";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById('result').textContent = "An error occurred. Please try again.";
    });
});


const videos = [
    { src: 'webvideo/trevor_sesli (1).mp4', type: 'video/mp4' },
    { src: 'webvideo/Trump_and_Navalny_1080p.mp4', type: 'video/mp4' },
   
];

let currentVideoIndex = 0;
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const nextBtn = document.getElementById('nextBtn');

videoSource.src = videos[currentVideoIndex].src;
videoSource.type = videos[currentVideoIndex].type;
videoPlayer.load(); //

nextBtn.addEventListener('click', () => {
    // Increment the video index
    currentVideoIndex++;
    
    // If we've reached the end of the array, go back to the first video
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    // Update the video source
    videoSource.src = videos[currentVideoIndex].src;
    videoSource.type = videos[currentVideoIndex].type;
    
    // Load the new video and start playing it automatically
    videoPlayer.load();
    videoPlayer.play();
});
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }