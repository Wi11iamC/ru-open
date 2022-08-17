import React from "react";
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



        const coursesData = props.courses;
        let roomNumbers:Array<string> = []; 
        //Filtering out meetingTimes that are not at specifed building or day
        if (coursesData.length > 1) {
        coursesData.forEach((course:any) => {
                

                course.sections.forEach((section:any) => {

                        section.meetingTimes = section.meetingTimes.filter((classMeeting:any) => (classMeeting.meetingDay === props.day && classMeeting.buildingCode === props.building))

                })

        });

        coursesData.forEach((course:any) => {
                course.sections.forEach((section:any) => {
                        section.meetingTimes.forEach((classMeeting:any, index:any) => {
        
                                if (!roomNumbers.some((roomNumber:any) => (classMeeting.roomNumber === roomNumber))){
                                        roomNumbers.push(classMeeting.roomNumber)
                                }       

                })
        
                })
        
        })

              
}





return (

<div className="courses-container" id='courses-container'>
        
{
        roomNumbers.map((room, index:any) => {
                return (
                <div className="roomNumber-wrapper" key={index+100}>
                <button className="room-button" onClick={() => openModal(index+1000)}>{room}</button>
                <ModalElements idx={index+1000} room={room} coursesData={coursesData} closeModal={closeModal} />
                </div>
                )

        })
}
       
</div>
        
        
        )
}