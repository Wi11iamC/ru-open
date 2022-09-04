import React from "react";
import extractData from "../extractData";
import ModalElements from "./ModalElements";


export const CourseElement = (props: any) => {

      
        function openModal(id:any) {

          const mm = document.querySelector(`#modal-${id}`)
          if (mm != null){
          mm.classList.add("active")
          mm.classList.remove("inactive")
          }
        }
      
        function closeModal(id:any) {

          const mm = document.querySelector(`#modal-${id}`)
          if (mm != null){
          mm.classList.remove("active")
          mm.classList.add("inactive")
          }
        }
              

return (

<div className="courses-container">
        
{
        props.rooms.map((room:any, index:any) => {
                return (
                <>
                <button className="room-button" onClick={() => openModal(index+1000)}>{room}</button>
                <ModalElements idx={index+1000} key={index+1000} room={room} coursesData={props.courses} closeModal={closeModal} />
                </>
                )

        })
}
       
</div>
        
        
        )
}