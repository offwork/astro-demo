export function generatePagination(
  current: number,
  pages: number,
  offset = 2
): number[] {
  // By doing this, when we are close to the beginning or end of the pagination, two numbers are generated after/before the current page,
  // but when we are far from these points (in the middle of the pagination), we generate only one number after/before the current page.
  const offsetNumber =
    current <= offset || current > pages - offset ? offset : offset - 1;
  const numbersList = [];
  const numbersListWithDots: number[] = [];

  // If itemsPerPage is less than what the user selected with the Select component or if there is no page or only one page:
  if (pages <= 1 || pages === undefined) return [1];

  // Create list of numbers:
  numbersList.push(1);
  for (let i = current - offsetNumber; i <= current + offsetNumber; i++) {
    if (i < pages && i > 1) {
      numbersList.push(i);
    }
  }
  numbersList.push(pages);

  // Add three dots to the list of numbers:
  numbersList.reduce((accumulator, currentValue) => {
    if (accumulator === 1) {
      numbersListWithDots.push(accumulator);
    }
    if (currentValue - accumulator !== 1) {
      numbersListWithDots.push(0);
    }
    numbersListWithDots.push(currentValue);

    return currentValue;
  });

  return numbersListWithDots;
}
