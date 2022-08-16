import React from 'react';
import { BuildingDropDown } from './Components/BuildingDropDown';


const App : React.FC = () => {

  const [day, setDay] = React.useState("mon");
  const [campus, setCampus] = React.useState("BUS")
  const [building, setBuilding] = React.useState("ARC");
  const [loading, setloading] = React.useState(false) 
  
  const formSubmitted: React.FormEventHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setloading(true);
    

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
      {loading && (
      <div className='loading-image-wrapper'>
        <img alt='loading' id='loading-image' src='https://media3.giphy.com/media/uSuSSuq2OrAYknT2zc/200w.gif?cid=ecf05e47hbixgkhwnqpef9a4rbrvx8yfd1kfh7m54g9w6knh&rid=200w.gif&ct=g'/>
      </div>
    )}

      <div className="courses-container"></div>
    </React.Fragment>
  );
}

export default App;
