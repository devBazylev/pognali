import {LevelFilter} from './level-filter';

class TravelersFilter {
  constructor() {
    this.filter = document.querySelector('[data-travelers-filter]');
    this.levelFilter = null;

    if (this.filter) {
      this.sections = this.filter.querySelectorAll('[data-filter-section]');
      this.initSections();
      this.initLevelFilter();
    }
  }

  initSections() {
    if (!this.sections || this.sections.length === 0) {
      return;
    }

    this.sections.forEach((section, index) => {
      this.initSection(section, index);
    });
  }

  initSection(section, index) {
    const header = section.querySelector('.travelers-filter__header');
    const content = section.querySelector('[data-filter-list]');

    if (!header || !content) {
      return;
    }

    if (index === 1 || index === 3 || index === 4) {
      section.classList.add('is-open');
    }

    header.setAttribute('tabindex', '0');

    header.addEventListener('click', () => {
      section.classList.toggle('is-open');
    });

    header.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        section.classList.toggle('is-open');
      }
    });

    const toggle = header.querySelector('.travelers-filter__toggle');
    if (toggle) {
      toggle.setAttribute('tabindex', '-1');
      toggle.addEventListener('click', (evt) => {
        evt.stopPropagation();
      });
    }
  }

  initLevelFilter() {
    this.levelFilter = new LevelFilter({
      min: 0,
      max: 100,
      initialValue: 30,
    });
  }
}

const initTravelersFilter = () => {
  const travelersFilter = new TravelersFilter();
  return travelersFilter;
};

export {initTravelersFilter};
