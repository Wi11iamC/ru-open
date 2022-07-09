const form = document.querySelector('form');
const filterButton = document.querySelector('.filter-button');

/* Campus Button Selection*/
const CA_BUTTON = document.querySelector('#CAC');
const BUS_BUTTON = document.querySelector('#BUS');
const LIV_BUTTON = document.querySelector('#LIV');
const CD_BUTTON = document.querySelector('#CD');

/* Building Filter Section */
const CAC_Section = document.querySelector('.CAC-Section');
const BUS_Section = document.querySelector('.BUS-Section');
const LIV_Section = document.querySelector('.LIV-Section');
const CD_Section = document.querySelector('.CD-Section');


async function printJSON() {
    const response = await fetch("../assets/courses.json");
    const json = await response.json();
    console.log(json);
}
/*
CA_BUTTON.addEventListener('pointerdown', e => {
    CA_BUTTON.style.backgroundColor = '#333';
    CAC_Section.style.display = CAC_Section.style.display == 'none' || CAC_Section.style.display == '' ? 'grid': 'none';
});
CA_BUTTON.addEventListener('pointerup', e => {
    CA_BUTTON.style.backgroundColor = '#219ebc';
});
CA_BUTTON.addEventListener('pointermove', e => {
    CA_BUTTON.style.backgroundColor = '#219ebc';
});
*/

BUS_BUTTON.addEventListener('pointerdown' , e => {
    BUS_Section.style.display = BUS_Section.style.display == 'none' || BUS_Section.style.display == '' ? 'grid': 'none';
    BUS_BUTTON.style.backgroundColor = '#333';
});
BUS_BUTTON.addEventListener('pointerup', e => {
    BUS_BUTTON.style.backgroundColor = '#219ebc';
});
BUS_BUTTON.addEventListener('pointermove', e => {
    BUS_BUTTON.style.backgroundColor = '#219ebc';
});


LIV_BUTTON.addEventListener('pointerdown', e => {
    LIV_Section.style.display = LIV_Section.style.display == 'none' || LIV_Section.style.display == '' ? 'grid' : 'none';
    LIV_BUTTON.style.backgroundColor = '#333';
});
LIV_BUTTON.addEventListener('pointerup', e => {
    LIV_BUTTON.style.backgroundColor = '#219ebc';
});
LIV_BUTTON.addEventListener('pointermove', e => {
    LIV_BUTTON.style.backgroundColor = '#219ebc';
});


CD_BUTTON.addEventListener('pointerdown' , e => {
    CD_Section.style.display = CD_Section.style.display == 'none' ||CD_Section.style.display == '' ? 'grid' : 'none';
    CD_BUTTON.style.backgroundColor = '#333';
});
CD_BUTTON.addEventListener('pointerup', e => {
    CD_BUTTON.style.backgroundColor = '#219ebc';
});
CD_BUTTON.addEventListener('pointermove', e => {
    CD_BUTTON.style.backgroundColor = '#219ebc';
});


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