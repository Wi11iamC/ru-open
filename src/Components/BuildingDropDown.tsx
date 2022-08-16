import React from 'react'

interface buildingProps {
    campusSelection: string,
    setBuilding: Function,
    building: string
}

export const BuildingDropDown = (props: buildingProps) => {

    const BUS_Buildings_Codes: Array<string> = ["ARC", "BME", "CCB", "COR", "EN", "HLL", "PH", "PHY", "SRN", "RWH", "SEC", "WL"]
    const BUS_Buildings_Names: Array<string> = ["Allision Road Classroom", "Biomedical Engineering", "Chemistry and Chemical Biology", "Computing Research & Education (CoRE)", "Engineering", "Hill Center", "Pharmacy (William Levin Hall)", "Physics", "SRN", "Richard Weeks", "Science & Engineering Resource Center (T. Alexander Pond)", "	Wright Rieman Laboratories"]

    const CAC_Buildings_Codes: Array<string> = ["AB", "BH", "CA", "CI", "ED", "FH", "HC", "HH", "MI", "MU", "SC", "VD", "VH", "ZAM"]
    const CAC_Buildings_Names: Array<string> = ["Academic Building", "Bishop House", "Campbell Hall", "School of Communication and Information", "Graduate School of Education", "Frelinghuysen Hall", "Honors College", "Hardenbergh Hall", "Milledoler Hall", "Murray Hall", "Scott Hall", "Van Dyck Hall", "Voorhees Hall", "Zimmerli Art Museum"]

    const Liv_Buildings_Codes: Array<string> = ["BE", "LSH", "LSH-AUD", "RC", "TIL"]
    const LIV_Buildings_Names: Array<string> = ["Beck Hall", "Lucy Stone Hall", "Lucy Stone Hall Auditorium", "Rutgers Cinema", "Tillett Hall"]

    const CD_Buildings_Codes: Array<string> = ["ARH", "BIO", "BL", "BT", "CDL", "DAV", "FNH", "FS", "HCK", "HSB", "LOR", "KLG", "RAB", "TH", "WAL"]
    const CD_Buildings_Names: Array<string> = ["Art History Hall", "Biological Sciences", "Blake Hall", "Bartlett Hall", "Cook Douglass Lecture Hall", "Davison Hall", "Institute for Food Nutrition & Health", "Food Science Building", "Hickman Hall", "Heldrich Science Building", "Loree Classroom Building", "Kathleen W Ludwig Global Village Learning Center", "Ruth Adams Building", "Thompson Hall", "Waller Hall"]

    let current_buildings: Array<string> = [""];
    let current_building_names: Array<string> = [""];
    if (props.campusSelection === "BUS") {
        current_buildings = BUS_Buildings_Codes;
        current_building_names = BUS_Buildings_Names;
    } else if (props.campusSelection === "CAC") {
        current_buildings = CAC_Buildings_Codes; 
        current_building_names = CAC_Buildings_Names;
    } else if (props.campusSelection === "LIV") {
        current_buildings = Liv_Buildings_Codes; 
        current_building_names = LIV_Buildings_Names;
    } else if (props.campusSelection === "CD") {
        current_buildings = CD_Buildings_Codes; 
        current_building_names = CD_Buildings_Names;
    } 

  return (
    <select name='building' id='buildingSelection' value={props.building} onChange={(e) => {props.setBuilding(e.target.value)}}>
        {
             current_buildings.map((building, index) =>
                <option key={index} value={building}>{current_building_names[index]} ({building})</option>
            )
        }
        
  </select> 
  )
}
