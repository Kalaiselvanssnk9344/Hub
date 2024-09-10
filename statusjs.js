document.getElementById('certificate-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = document.getElementById('certificate-image');
        image.src = e.target.result;
        document.getElementById('certificate-preview').style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });