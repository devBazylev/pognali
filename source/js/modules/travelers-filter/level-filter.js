export class LevelFilter {
  constructor() {
    this.slider = document.querySelector('.travelers-filter__range-slider');
    this.minInput = this.slider.querySelector('.travelers-filter__range-min');
    this.maxInput = this.slider.querySelector('.travelers-filter__range-max');
    this.valueElements = document.querySelectorAll('.travelers-filter__value');

    if (this.slider && this.minInput && this.maxInput) {
      this.init();
    }
  }

  init() {
    const updateRange = () => {
      this.valueElements[0].textContent = this.minInput.value;
      this.valueElements[1].textContent = this.maxInput.value;

      const minPercent = (parseInt(this.minInput.value, 10) / parseInt(this.minInput.max, 10)) * 100;
      const maxPercent = (parseInt(this.maxInput.value, 10) / parseInt(this.maxInput.max, 10)) * 100;

      this.slider.style.setProperty('--range-min', `${minPercent}%`);
      this.slider.style.setProperty('--range-max', `${maxPercent}%`);

      if (parseInt(this.maxInput.value, 10) - parseInt(this.minInput.value, 10) <= 0) {
        this.minInput.value = parseInt(this.maxInput.value, 10);
      }
    };

    this.minInput.addEventListener('input', updateRange);
    this.maxInput.addEventListener('input', updateRange);

    updateRange();
  }
}
