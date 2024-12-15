export function initTravelersPagination() {
  const list = document.querySelector('.travelers-list__list');
  if (!list) {
    return;
  }

  const cards = list.querySelectorAll('.traveler-card');
  const showMoreButton = document.querySelector('[data-show-more]');
  const paginationButtons = document.querySelectorAll('.pagination__button');
  const prevButton = document.querySelector('.pagination__arrow--prev');
  const nextButton = document.querySelector('.pagination__arrow--next');

  if (!cards.length || !showMoreButton || !paginationButtons.length || !prevButton || !nextButton) {
    return;
  }

  const ITEMS_PER_PAGE = 4;
  let currentPage = 1;
  let visibleItems = ITEMS_PER_PAGE;
  const totalItems = cards.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  function updateVisibility() {
    cards.forEach((card, index) => {
      if (currentPage === 1) {
        card.style.display = index < visibleItems ? '' : 'none';
      } else {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        card.style.display = (index >= startIndex && index < startIndex + ITEMS_PER_PAGE) ? '' : 'none';
      }
    });

    showMoreButton.disabled = visibleItems >= totalItems;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  function updatePaginationButtons() {
    paginationButtons.forEach((button, index) => {
      const pageNumber = index + 1;
      button.classList.toggle('pagination__button--active', pageNumber === currentPage);
      button.disabled = pageNumber > Math.ceil(totalItems / ITEMS_PER_PAGE);
    });
  }

  function showMore() {
    if (visibleItems < totalItems) {
      visibleItems++;
      updateVisibility();
    }
  }

  function goToPage(page) {
    currentPage = page;
    visibleItems = ITEMS_PER_PAGE;
    updateVisibility();
    updatePaginationButtons();
  }

  showMoreButton.addEventListener('click', showMore);
  prevButton.addEventListener('click', () => currentPage > 1 && goToPage(currentPage - 1));
  nextButton.addEventListener('click', () => currentPage < totalPages && goToPage(currentPage + 1));
  paginationButtons.forEach((button, index) => button.addEventListener('click', () => goToPage(index + 1)));

  updateVisibility();
  updatePaginationButtons();
}
