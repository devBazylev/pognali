// import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
// const mob = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');

// gsap.registerPlugin(ScrollTrigger);

// const animateJoinSection = (section) => {
//   const background = section.querySelector('.container');
//   const content = section.querySelector('[data-animate="fadeUp"]');

//   gsap.set(content, {y: 50});

//   const tl = gsap.timeline({
//     scrollTrigger: {trigger: section, start: 'top 70%'},
//   });

//   tl.to(background, {autoAlpha: 1, duration: 0.8, ease: 'power2.inOut'})
//       .to(content, {autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out'}, '-=0.8');
// };

// const animatePeriodSection = (section, sectionName) => {
//   const title = section.querySelector('[data-animate="title"]');
//   const containers = section.querySelectorAll(`[data-container="${sectionName}"]`);

//   gsap.from(title, {
//     autoAlpha: 0, y: 20, duration: 0.45,
//     scrollTrigger: {trigger: title, start: 'top 60%'},
//   });

//   containers.forEach((container, index) => {
//     const subtitle = container.querySelector('[data-animate="subtitle"]');
//     const promoCards = container.querySelectorAll('[data-animate="fadeScale"]');

//     gsap.from(container, {
//       autoAlpha: 0, scale: 0.9, duration: 0.6, ease: 'back.out(1.7)',
//       scrollTrigger: {trigger: container, start: 'top 60%'},
//       delay: index * 0.1,
//     });

//     gsap.from(subtitle, {
//       autoAlpha: 0, y: 20, duration: 0.45,
//       scrollTrigger: {trigger: subtitle, start: 'top 60%'},
//       delay: index * 0.1 + 0.2,
//     });

//     promoCards.forEach((card, cardIndex) => {
//       gsap.from(card, {
//         autoAlpha: 0, scale: 0, duration: 0.6, ease: 'back.out(1.7)',
//         scrollTrigger: {trigger: card, start: 'top 60%'},
//         delay: index * 0.1 + 0.4 + (cardIndex * 0.1),
//       });
//     });
//   });
// };

// const animateCheckSection = (section) => {
//   const form = section.querySelector('[data-animate="check-form"]');
//   const formElements = section.querySelectorAll('.check__agree, .check__btn');
//   const content = section.querySelector('[data-animate="check-content"]');

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: section,
//       start: 'top 50%',
//       once: true,
//     },
//   });

//   tl.from(form, {autoAlpha: 0, y: 20, duration: 0.6, ease: 'power2.out'})
//       .from(formElements, {autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.1, ease: 'power2.out'}, '-=0.2')
//       .from(content, {autoAlpha: 0, y: 20, duration: 0.6, ease: 'power2.out'}, '-=0.2');
// };

// const animateBlankSection = (section) => {
//   const elements = {
//     title: section.querySelector('.blank__title'),
//     tabs: section.querySelectorAll('.blank__btns'),
//     drop: section.querySelector('.blank__drop'),
//     blankContainer: section.querySelector('.blank__container'),
//   };

//   const tl = gsap.timeline({
//     scrollTrigger: {trigger: section, start: 'top 70%'},
//     onComplete: () => {
//       gsap.set([elements.title, elements.tabs, elements.drop, elements.blankContainer], {clearProps: 'all'});
//     },
//   });

//   tl.from(elements.title, {autoAlpha: 0, y: 20, duration: 0.6, ease: 'power2.out'})
//       .from(elements.tabs, {autoAlpha: 0, y: 10, duration: 0.4, stagger: 0.1, ease: 'power2.out'}, '-=0.3')
//       .from(elements.drop, {
//         autoAlpha: 0, y: 10, duration: 0.4, ease: 'power2.out', onComplete: () => gsap.set(elements.drop, {clearProps: 'transform'}),
//       }, '-=0.2')
//       .from(elements.blankContainer, {autoAlpha: 0, y: 20, duration: 0.8, ease: 'power2.out'}, '-=0.2');
// };

// const animateFooter = (footer) => {
//   const content = footer.querySelector('[data-animate="footer-content"]');
//   const visibleItems = footer.querySelectorAll('[data-animate="footer-item"]:not([style*="display: none"])');
//   let percent = 90;

//   if (window.location.pathname.split('/').pop() === 'winner.html') {
//     percent = 180;
//   }

//   if (mob.matches) {
//     percent = 300;
//   }

//   if (content && visibleItems.length > 0) {
//     gsap.from(content, {
//       autoAlpha: 0, duration: 3, ease: 'power2.inOut',
//       scrollTrigger: {trigger: footer, start: `top ${percent}%`},
//     });

//     gsap.from(visibleItems, {
//       autoAlpha: 0, y: 20, duration: 1, stagger: 0.2, ease: 'power2.out',
//       scrollTrigger: {trigger: footer, start: `top ${percent}%`},
//       delay: 1,
//     });
//   }
// };

// const initScrollAnimations = () => {
//   const sections = [
//     {selector: '[data-section="join"]', animateFunc: animateJoinSection},
//     {selector: '[data-section="day"]', animateFunc: (section) => animatePeriodSection(section, 'day')},
//     {selector: '[data-section="month"]', animateFunc: (section) => animatePeriodSection(section, 'month')},
//     {selector: '[data-section="check"]', animateFunc: animateCheckSection},
//     {selector: '[data-section="blank"]', animateFunc: animateBlankSection},
//     {selector: '.footer', animateFunc: animateFooter}
//   ];

//   sections.forEach(({selector, animateFunc}) => {
//     const section = document.querySelector(selector);
//     if (section) {
//       animateFunc(section);
//     }
//   });

//   ScrollTrigger.batch('[data-animate="fade"]', {
//     onEnter: (batch) => gsap.to(batch, {autoAlpha: 1, duration: 0.45, stagger: 0.1}),
//     start: 'top 60%',
//   });
// };

// const initAnimations = () => {
//   requestAnimationFrame(() => {
//     initScrollAnimations();
//   });
// };

// export {initAnimations};
