const pmmNav = document.querySelector("#hamburger-icon")
const listOfClasses = pmmNav.classList

$(window).resize(function() {
  if ($(window).width() < 935) {
    listOfClasses.remove('displayOff');
    console.log('aa', listOfClasses)
  } else {
    listOfClasses.add('displayOff');
  }
});

