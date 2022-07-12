export default async function getCourses() {
    const response = await fetch("../assets/courses.json");
    const json = await response.json();
    //console.log(json);
    return json;
}