import getCourses from './api.js';
import filterCourses from './filterCourses.js';
import sortCourses from './sortCourses.js';
import addCoursesToPage from './addCoursesToPage.js';
import displayBuildingOptions from './displayBuildingOptions.js';


const form = document.querySelector('form');
const filterButton = document.querySelector('#filter-button');

/* Campus Button Selection*/
const CAC_BUTTON = document.querySelector('#CAC');
const BUS_BUTTON = document.querySelector('#BUS');
const LIV_BUTTON = document.querySelector('#LIV');
const CD_BUTTON = document.querySelector('#CD');

/* Building Filter Section */
const CAC_Section = document.querySelector('.CAC-Section');
const BUS_Section = document.querySelector('.BUS-Section');
const LIV_Section = document.querySelector('.LIV-Section');
const CD_Section = document.querySelector('.CD-Section');
let current_Open_Section = null;

/* container for filtered courses */

const filteredCoursesContainer = document.querySelector('.filtered-courses-container');


BUS_BUTTON.addEventListener('pointerdown' , e => {
    displayBuildingOptions('BUS');
    current_Open_Section = BUS_Section;
    BUS_BUTTON.style.backgroundColor = '#333';
});
BUS_BUTTON.addEventListener('pointerup', e => {
    BUS_BUTTON.style.backgroundColor = '#219ebc';
});
BUS_BUTTON.addEventListener('pointermove', e => {
    BUS_BUTTON.style.backgroundColor = '#219ebc';
});


LIV_BUTTON.addEventListener('pointerdown', e => {
    displayBuildingOptions('LIV');
    current_Open_Section = LIV_Section;
    LIV_BUTTON.style.backgroundColor = '#333';
});
LIV_BUTTON.addEventListener('pointerup', e => {
    LIV_BUTTON.style.backgroundColor = '#219ebc';
});
LIV_BUTTON.addEventListener('pointermove', e => {
    LIV_BUTTON.style.backgroundColor = '#219ebc';
});


CD_BUTTON.addEventListener('pointerdown' , e => {
    displayBuildingOptions('CD');
    current_Open_Section = CD_Section;
    CD_BUTTON.style.backgroundColor = '#333';
});
CD_BUTTON.addEventListener('pointerup', e => {
    CD_BUTTON.style.backgroundColor = '#219ebc';
});
CD_BUTTON.addEventListener('pointermove', e => {
    CD_BUTTON.style.backgroundColor = '#219ebc';
});

CAC_BUTTON.addEventListener('pointerdown' , e => {
    displayBuildingOptions('CAC');
    current_Open_Section = CAC_Section;
    CAC_BUTTON.style.backgroundColor = '#333';
});
CAC_BUTTON.addEventListener('pointerup', e => {
    CAC_BUTTON.style.backgroundColor = '#219ebc';
});
CAC_BUTTON.addEventListener('pointermove', e => {
    CAC_BUTTON.style.backgroundColor = '#219ebc';
});







filterButton.addEventListener('pointerdown', (e) => {
    filterButton.style.backgroundColor = '#fff';
    filterButton.style.color = '#333';
});

filterButton.addEventListener('pointerup', (e) => {
    filterButton.style.backgroundColor = '#4CAF50';
    filterButton.style.color = '#fff';
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    filteredCoursesContainer.innerHTML = '';
    const formData = new FormData(form);
    const response = await getCourses();
    const filteredCourses = await filterCourses(formData.get('day'),formData.get('building'), response);
    addCoursesToPage(filteredCourses, filteredCoursesContainer, formData.get('day'), formData.get('building'));


});