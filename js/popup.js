  var writeLink = document.querySelector(".write-us");
  var writePopup = document.querySelector(".write-popup");
  var writeClose = document.querySelector(".modal-close");  

  writeLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    writeClose.classList.add("modal-show");
  });

  writeClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
    writeClose.classList.remove("modal-show");
  });


//slider2
  var previous2Slider = document.querySelector(".slider1");
  var show2Slider = document.querySelector(".slider2");
  var next2Slider = document.querySelector(".slider3");

  var toggle2Slider = document.querySelector(".toggle-slider2");
  var previous2ToggleSlider = document.querySelector(".toggle-slider1");
  var next2ToggleSlider = document.querySelector(".toggle-slider3");
    
  toggle2Slider.addEventListener("click", function(evt) {
    evt.preventDefault();

    toggle2Slider.classList.add("active");
    previous2ToggleSlider.classList.remove("active");
    next2ToggleSlider.classList.remove("active");

    previous2Slider.classList.remove("slider-show");
    next2Slider.classList.remove("slider-show");
    show2Slider.classList.add("slider-show");
  });

//slider3
  var previous3Slider = document.querySelector(".slider2");
  var show3Slider = document.querySelector(".slider3");
  var next3Slider = document.querySelector(".slider1");

  var toggle3Slider = document.querySelector(".toggle-slider3");
  var previous3ToggleSlider = document.querySelector(".toggle-slider2");
  var next3ToggleSlider = document.querySelector(".toggle-slider1");
  
    
  toggle3Slider.addEventListener("click", function(evt) {
    evt.preventDefault();

    toggle3Slider.classList.add("active");
    previous3ToggleSlider.classList.remove("active");
    next3ToggleSlider.classList.remove("active");

    next3Slider.classList.remove("slider-show");
    previous3Slider.classList.remove("slider-show");
    show3Slider.classList.add("slider-show");
  });

//slider1
  var previous1Slider = document.querySelector(".slider3");
  var show1Slider = document.querySelector(".slider1");
  var next1Slider = document.querySelector(".slider2");

  var toggle1Slider = document.querySelector(".toggle-slider1");
  var previous1ToggleSlider = document.querySelector(".toggle-slider3");
  var next1ToggleSlider = document.querySelector(".toggle-slider2");
  
    
  toggle1Slider.addEventListener("click", function(evt) {
    evt.preventDefault();

    toggle1Slider.classList.add("active");
    previous1ToggleSlider.classList.remove("active");
    next1ToggleSlider.classList.remove("active");

    next1Slider.classList.remove("slider-show");
    previous1Slider.classList.remove("slider-show");
    show1Slider.classList.add("slider-show");
  });
