// Variables
const imageInput = document.getElementById('imageInput');
const uploadButton = document.getElementById('uploadButton');
const imagePreview = document.getElementById('imagePreview');
const downloadButton = document.getElementById('downloadButton');
const imageGallery = document.getElementById('imageGallery');

// Upload image functionality
uploadButton.addEventListener('click', () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      // Set the image preview
      imagePreview.src = event.target.result;
      imagePreview.style.display = 'block';
      downloadButton.style.display = 'inline-block';

      // Add to gallery
      const imgElement = document.createElement('img');
      imgElement.src = event.target.result;
      imageGallery.appendChild(imgElement);
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select an image first.');
  }
});

// Image download functionality
downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = imagePreview.src;
  link.download = 'downloaded-image.jpg'; // Change the name if needed
  link.click();
});
