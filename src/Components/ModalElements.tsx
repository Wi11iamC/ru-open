import React from "react";


export default function ModalElements(props:any) {
  return (
    <div id={`modal-${props.idx}`} className=" modal-main inactive">
                <h3>{props.room}</h3>
                <button onClick={() => props.closeModal(props.idx)}>close</button>
                {
                props.coursesData.map((course:any) => (
                        
                        course.sections.map((section:any) => (

                        section.meetingTimes.map((classMeeting:any) => (
                                <div key={section.index}>
                                        {(classMeeting.roomNumber === props.room && 
                                         <p>{course.title} | section: {section.number} | {classMeeting.startTimeMilitary}-{classMeeting.endTimeMilitary} | room={classMeeting.roomNumber}</p>
                                         )}
                                </div>

                        ))

                ))
                        

                ))
        }
                        </div>
  )
}
