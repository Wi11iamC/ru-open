import data from './coursesData.json'
import filterCourses from './filterCourses';

export default async function getCourses(day: string, campus: string, building: string) {
    try {
        const API_URL = 'https://sis.rutgers.edu/soc/api/courses.json?year=2022&term=9&campus=NB';
        const response = await fetch(API_URL);
        //const loadData = () => JSON.parse(JSON.stringify(data));
        //const response = loadData();
        const json = response.json();

        const sortedData = await filterCourses(json, day, campus, building);

        return sortedData;
    } catch (error) {
        console.log(error);
        return [{}];        
    }
}