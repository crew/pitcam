$(document).ready(function() {

  function updateImage() {
    $('#pitcam').attr('src', "http://alpha.ccs.neu.edu/pitcam.jpeg");
  }

  // Update the pitcam every 5 sec
  // this is the speed the image updates on the backend
  // anyway so faster would be pointless.
  setInterval(updateImage, 5000);
});