$(document).ready(function() {

  var imgUpdateInterval = 1.0;
  var barUpdateInterval = 1/30;

  // in seconds
  var count = 0.0;

  function updateImage() {
    $('.pitcam img').attr('src', "http://pitcam.ccs.neu.edu/pitcam.jpeg?ver=" + new Date().getTime());
    count = 0.0; // reset the progress so time starts over.
  }

  function updateBar() {
    count = count + barUpdateInterval;
    var percent = Math.ceil((count / imgUpdateInterval) * 100);
    $('.pitcam .bar').width(percent+"%");
  }

  // Update the pitcam every 5 sec
  // this is the speed the image updates on the backend
  // anyway so faster would be pointless.
  setInterval(updateImage, imgUpdateInterval*1000);

  // Update the bar 30 times per second.
  // 150 updates == 5 sec, 2/3 of a percent
  // per update.
  setInterval(updateBar, barUpdateInterval*1000);
});
