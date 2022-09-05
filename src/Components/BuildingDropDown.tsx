import React from 'react'

interface buildingProps {
    campusSelection: string,
    setBuilding: Function,
    building: string
}

export const BuildingDropDown = (props: buildingProps) => {

    const BUS_Buildings_Codes: string[] = ["ARC", "BME", "CCB", "COR", "EE", "EN", "HLL", "PH", "PHY", "SRN", "RWH", "SEC", "EHA", "WL"]
    const BUS_Buildings_Names: string[] = ["Allision Road Classroom", "Biomedical Engineering", "Chemistry and Chemical Biology", "Computing Research & Education (CoRE)", "Electrical Engineering", "Engineering", "Hill Center", "Pharmacy (William Levin Hall)", "Physics", "SRN", "Richard Weeks", "Science & Engineering Resource Center", "Fiber Optics AUD", "Wright Rieman Laboratories"]

    const CAC_Buildings_Codes: string[] = ["AB", "BH", "CA", "CI", "ED", "FH", "HC", "HH", "MI", "MU", "SC", "VD", "VH", "ZAM"]
    const CAC_Buildings_Names: string[] = ["Academic Building", "Bishop House", "Campbell Hall", "School of Communication and Information", "Graduate School of Education", "Frelinghuysen Hall", "Honors College", "Hardenbergh Hall", "Milledoler Hall", "Murray Hall", "Scott Hall", "Van Dyck Hall", "Voorhees Hall", "Zimmerli Art Museum"]

    const Liv_Buildings_Codes: string[] = ["BE", "BRR", "LSH", "RC", "TIL", "JLB"]
    const LIV_Buildings_Names: string[] = ["Beck Hall", "Business", "Lucy Stone Hall", "Rutgers Cinema", "Tillett Hall", "Janice Levin"]

    const CD_Buildings_Codes: string[] = ["ARH", "BIO", "BL", "BT", "CDL", "DAV", "FNH", "FS", "HCK", "HSB", "LOR", "KLG", "RAB", "TH", "WAL"]
    const CD_Buildings_Names: string[] = ["Art History Hall", "Biological Sciences", "Blake Hall", "Bartlett Hall", "Cook Douglass Lecture Hall", "Davison Hall", "Institute for Food Nutrition & Health", "Food Science Building", "Hickman Hall", "Heldrich Science Building", "Loree Classroom Building", "Kathleen W Ludwig Global Village Learning Center", "Ruth Adams Building", "Thompson Hall", "Waller Hall"]

    let current_buildings: string[] = [""];
    let current_buildings_names: string[] = [""];
    if (props.campusSelection === "BUS") {
        current_buildings = BUS_Buildings_Codes;
        current_buildings_names = BUS_Buildings_Names;
    } else if (props.campusSelection === "CAC") {
        current_buildings = CAC_Buildings_Codes; 
        current_buildings_names = CAC_Buildings_Names;
    } else if (props.campusSelection === "LIV") {
        current_buildings = Liv_Buildings_Codes; 
        current_buildings_names = LIV_Buildings_Names;
    } else if (props.campusSelection === "CD") {
        current_buildings = CD_Buildings_Codes; 
        current_buildings_names = CD_Buildings_Names;
    } 

React.useEffect(() => {props.setBuilding(current_buildings[0])}, []);
  return (
    <select name='building' id='buildingSelection' onChange={(e) => {props.setBuilding(e.target.value)}}>
        {
             current_buildings.map((building, index) =>
                <option key={index} value={building}>{current_buildings_names[index]} ({building})</option>
            )
        }
        
  </select> 
  )
}
