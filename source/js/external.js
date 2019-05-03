      var navMain = document.querySelector('.main-navigation');
      var navToggle = document.querySelector('.page-header__toggle');

      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-navigation--closed')) {
          navMain.classList.remove('main-navigation--closed');
          navMain.classList.add('main-navigation--opened');
        } else {
          navMain.classList.add('main-navigation--closed');
          navMain.classList.remove('main-navigation--opened');
        }
      });

      var feedbacksSlider = document.querySelector('.feedbacks__wrapper');
      var feedbacksSliderList = feedbacksSlider.querySelectorAll('.feedbacks__item');
      var feedbacksDotList = feedbacksSlider.querySelectorAll('.feedbacks__button');
      var feedbacksArrowList = feedbacksSlider.querySelectorAll('.feedbacks__arrow');
      var feedbacksCurrentSlide = 0;
      var clickFeedbacksFunctionButton = function (currentButton) {
        feedbacksDotList[currentButton].addEventListener('click', function () {
          feedbacksSlider.querySelector('.feedbacks__item--active').classList.remove('feedbacks__item--active');
          feedbacksSliderList[currentButton].classList.add('feedbacks__item--active');
          feedbacksSlider.querySelector('.feedbacks__button--active').classList.remove('feedbacks__button--active');
          feedbacksDotList[currentButton].classList.add('feedbacks__button--active');
        })
      }
      for (var i = 0; i < feedbacksDotList.length; i++ ) {
        clickFeedbacksFunctionButton(i);
      }

      var clickFunctionArrow = function (currentArrow) {
        feedbacksArrowList[currentArrow].addEventListener('click', function () {
          feedbacksSlider.querySelector('.feedbacks__item--active').classList.remove('feedbacks__item--active');
          if (currentArrow == 1) {
            if (feedbacksCurrentSlide == feedbacksSliderList.length - 1) {
                feedbacksCurrentSlide = 0;
              } else {
                feedbacksCurrentSlide++;
              }
          } else if (currentArrow == 0) {
              if (feedbacksCurrentSlide == 0) {
                feedbacksCurrentSlide = 2;
              } else {
                feedbacksCurrentSlide--;
              }
          }
          feedbacksSliderList[feedbacksCurrentSlide].classList.add('feedbacks__item--active');
        });
      }
      for (var i = 0; i < feedbacksArrowList.length; i++ ) {
        clickFunctionArrow(i);
      }

        var tariffsSlider = document.querySelector('.tariffs__wrapper');
        var tariffsSliderList = tariffsSlider.querySelector('.tariffs__list');
        var tariffsDotList = tariffsSlider.querySelectorAll('.tariffs__button');
        var clickTariffsFunctionButton = function (currentButton) {
          tariffsDotList[currentButton].addEventListener('click', function () {
            var tariffsCurrentSlide = currentButton;
            var offset = (tariffsCurrentSlide * -33.333333) + "%";
            tariffsSliderList.style.transform = "translateX("+ offset +")";
            tariffsSlider.querySelector('.tariffs__button--active').classList.remove('tariffs__button--active');
            tariffsDotList[currentButton].classList.add('tariffs__button--active');
          });
        }
        for (var i = 0; i < 3; i++ ) {
          clickTariffsFunctionButton(i);
        }



      var filterIcons = document.querySelector('.filter__wrapper');
      var filterItems = filterIcons.querySelectorAll('.icons__item');
      var filterIcon = filterIcons.querySelectorAll('.icons__image');
      var clickFilterIconFunction = function (currentItem) {
        filterItems[currentItem].addEventListener('click', function () {
          filterIcons.querySelector('.icons__image--active').classList.remove('icons__image--active');
          filterIcon[currentItem].classList.add('icons__image--active');
        });
      }
      for (var i = 0; i < filterIcon.length; i++ ) {
        clickFilterIconFunction(i);
      }
