const GRANT_DATE_OF_BIRTH = "2001-03-27"; // Grant's date of birth

/**
 * Returns a person's age in years.
 *
 * @param birthDate Date of birth formatted as a string.
 * @return The person's age.
 */
function getAge(birthDate) {
  // Create Date object using birthDate string
  const dateOfBirth = new Date(birthDate);

  // Create Date object representing the current date
  const currDate = new Date();

  // Fetch the difference in years between the dates
  const numYears = currDate.getFullYear() - dateOfBirth.getFullYear();

  // If the birthday has already occurred...
  const currMonth = currDate.getMonth();
  const dobMonth = dateOfBirth.getMonth();
  if (
    currMonth > dobMonth ||
    (currMonth == dobMonth && currDate.getDate() > dateOfBirth.getDate())
  ) {
    // ...return the difference in years
    return numYears;
  }

  // return the difference in years - 1
  return numYears - 1;
}

$(document).ready(() => {
  // Update the age text with Grant's current age
  const grantAge = getAge(GRANT_DATE_OF_BIRTH);
  $("#age").text(grantAge);
});
