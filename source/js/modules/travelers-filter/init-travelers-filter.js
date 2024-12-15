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

    header.addEventListener('click', () => {
      section.classList.toggle('is-open');
    });
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
