/**
 * Returns the current year.
 *
 * @return Current year.
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Returns a person's age given a date string.
 *
 * @param dateOfBirth Date of birth string.
 * @return Person's age.
 */
function getAge(dateOfBirth) {
  // Create a Date object representing the current date
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth();
  const currDayOfMonth = currDate.getDate();

  // Create a Date object representing the date of birth
  const birthDate = new Date(dateOfBirth);
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDayOfMonth = birthDate.getDate();

  // Fetch the difference in years between the dates
  const numYears = currYear - birthYear;

  // If the birthday has already occurred...
  if (
    currMonth > birthMonth ||
    (currMonth == birthMonth && currDayOfMonth >= birthDayOfMonth)
  ) {
    // ...return the difference in years
    return numYears;
  }

  // Birthday hasn't occurred yet
  return numYears - 1;
}

$(document).ready(() => {
  // Update the displayed age with Grant's current age
  $("#age").text(getAge("2001-03-27"));

  // Update the copyright text with the current year
  $("#copyright-year").text(getCurrentYear());
});
