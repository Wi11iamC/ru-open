import React, {useState} from 'react';
import { BuildingDropDown } from './Components/BuildingDropDown';


const App : React.FC = () => {

  const [day, setDay] = useState("mon");
  const [campus, setCampus] = useState("BUS")
  const [building, setBuilding] = useState("");
  const formSubmitted = (e: any) => {

  console.log("form submitted");

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
          <option value="sun">Sunday</option>
            <option value="mon">Monday</option>
            <option value="tues">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thurs">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
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

      <div className="courses-container"></div>
    </React.Fragment>
  );
}

export default App;
