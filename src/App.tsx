import React from 'react';
import { BuildingDropDown } from './Components/BuildingDropDown';
import getCourses from './api';
import { CourseElement } from './Components/CourseElement';


const App : React.FC = () => {

  const [day, setDay] = React.useState("M");
  const [campus, setCampus] = React.useState("BUS")
  const [building, setBuilding] = React.useState("ARC");
  const [loading, setloading] = React.useState(false) 
  const [data, setData] = React.useState([]);
  
  const formSubmitted: React.FormEventHandler = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setloading(true);
    let ddata:any = await getCourses(day, campus, building);
    setloading(false);
    ddata.forEach((course:any) => {

      course.sections = course.sections.filter((section:any) => section.meetingTimes.some((meetingTimes:any) => (meetingTimes.meetingDay === day && meetingTimes.buildingCode === building)))
      
    })

    console.log(ddata);
    setData(ddata);

}
  return (
    <React.Fragment>
      <div className="app-header">
          <h1>RU Roam</h1>
      </div>
      <div className='form-container'>
          <form onSubmit={formSubmitted} className='form-wrapper'>
            <label htmlFor='day'>I want to search for classes on </label>
          <select name='day' id='daySelection' value={day} onChange={(e) => {setDay(e.target.value)}}>
            <option value="M">Monday</option>
            <option value="T">Tuesday</option>
            <option value="W">Wednesday</option>
            <option value="H">Thursday</option>
            <option value="F">Friday</option>
            </select>
          <label htmlFor='campus'> at {" "}
          <select  name='campus' id='campusSelection' value={campus} onChange={(e) => {setCampus(e.target.value)}}>
            <option value="BUS">Busch</option>
            <option value="CAC">College Avenue</option>
            <option value="LIV">Livingston</option>
            <option value="CD">Cook / Douglass</option>
          </select> 
          {" "} campus
          </label>
          <label htmlFor='building'> in {" "} 
              <BuildingDropDown  campusSelection={campus} setBuilding={setBuilding} building={building}/>
          {" "} buiding
          </label>
          <button type='submit'>Search</button>
          </form>
      </div>
      {loading && (
      <div className='loading-image-wrapper'>
        <img alt='loading' id='loading-image' src='https://media3.giphy.com/media/uSuSSuq2OrAYknT2zc/200w.gif?cid=ecf05e47hbixgkhwnqpef9a4rbrvx8yfd1kfh7m54g9w6knh&rid=200w.gif&ct=g' />
      </div>
    )}

            <CourseElement courses={data} day={day} building={building}/>

    </React.Fragment>
  );
}

export default App;
