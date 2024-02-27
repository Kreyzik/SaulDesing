

"use strict";

window.addEventListener('load', windowLoad);

function windowLoad() {
   document.addEventListener('click', documentActions);
}


function documentActions(e) {
   const targetElement = e.target

   //Burger

   if (targetElement.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }

 

   //Animation-scrol

   if (targetElement.closest('[data-goto]')) {

      const goTo = targetElement.closest('[data-goto]').dataset.goto;
      const goToElement = document.querySelector(goTo);
      const headerHeight = document.querySelector('.header').offsetHeight;

      if (goToElement) {
         window.scrollTo({
            top: goToElement.offsetTop - (headerHeight + 15),
            behavior: "smooth"
         });
      }
      e.preventDefault();

   }

   //Delegation
   /*if (targetElement.closest('items-works__type') && !targetElement.closest('active')) {
      const activeElement = document.querySelector('.items-works__type.active');
      const elements = document.querySelectorAll('.items-works__items');
      const elementType = targetElement.dataset.workType;

      activeElement.closest.remove('active');
      targetElement.closest.add('active');
   }*/

}

