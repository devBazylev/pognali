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
      if (this.valueElements[0].value === '' || this.valueElements[1].value === '') {
        return;
      }

      this.valueElements[0].value = this.minInput.value;
      this.valueElements[1].value = this.maxInput.value;

      const minPercent = (parseInt(this.minInput.value, 10) / parseInt(this.minInput.max, 10)) * 100;
      const maxPercent = (parseInt(this.maxInput.value, 10) / parseInt(this.maxInput.max, 10)) * 100;

      this.slider.style.setProperty('--range-min', `${minPercent}%`);
      this.slider.style.setProperty('--range-max', `${maxPercent}%`);
    };

    const validateAndUpdateRange = () => {
      if (this.valueElements[0].value === '') {
        this.valueElements[0].value = '0';
      }
      if (this.valueElements[1].value === '') {
        this.valueElements[1].value = '100';
      }

      const minValue = parseInt(this.valueElements[0].value, 10);
      const maxValue = parseInt(this.valueElements[1].value, 10);

      if (maxValue < minValue) {
        this.valueElements[1].value = minValue.toString();
      }

      this.minInput.value = this.valueElements[0].value;
      this.maxInput.value = this.valueElements[1].value;

      updateRange();
    };

    const updateFromTextInput = (index, isBlur = false) => {
      const input = index === 0 ? this.minInput : this.maxInput;

      if (isBlur) {
        validateAndUpdateRange();
      } else {
        input.value = this.valueElements[index].value;
        updateRange();
      }
    };

    this.minInput.addEventListener('input', updateRange);
    this.maxInput.addEventListener('input', updateRange);

    this.valueElements[0].addEventListener('input', () => updateFromTextInput(0, false));
    this.valueElements[1].addEventListener('input', () => updateFromTextInput(1, false));

    this.valueElements[0].addEventListener('blur', () => updateFromTextInput(0, true));
    this.valueElements[1].addEventListener('blur', () => updateFromTextInput(1, true));

    this.valueElements[0].addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        updateFromTextInput(0, true);
      }
    });
    this.valueElements[1].addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        updateFromTextInput(1, true);
      }
    });

    updateRange();
  }
}
