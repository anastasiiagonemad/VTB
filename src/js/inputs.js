//FUNCTION SELECT_DROPDOWN
function showDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}
//ACTION DROPDOWN
document
  .getElementById('dropdown1')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    const dropdownContent = document.getElementById('content1');
    showDropdown('content1');
  });

document
  .getElementById('dropdown2')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    const dropdownContent = document.getElementById('content2');
    showDropdown('content2');
  });
