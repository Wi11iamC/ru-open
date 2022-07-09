const form = document.querySelector('form');
const filterButton = document.querySelector('.filter-button');



async function printJSON() {
    const response = await fetch("../assets/courses.json");
    const json = await response.json();
    console.log(json);
}


filterButton.addEventListener('pointerdown', (e) => {
    filterButton.style.backgroundColor = '#fff';
    filterButton.style.color = '#333';
});

filterButton.addEventListener('pointerup', (e) => {
    filterButton.style.backgroundColor = '#4CAF50';
    filterButton.style.color = '#fff';
});

//form.addEventListener('submit', onFormSubmitted);


async function onFormSubmitted(event) {
    event.preventDefault();
  }