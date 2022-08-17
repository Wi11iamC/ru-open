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
                                         <p>{course.title} | section: {section.number} | {`${classMeeting.startTime[0] == '0' ? classMeeting.startTime.substring(1).slice(0, 1) + ':' + classMeeting.startTime.substring(1).slice(1) : classMeeting.startTime.slice(0, 2) + ':' + classMeeting.startTime.slice(2)}${classMeeting.pmCode}M-${classMeeting.endTime[0] == '0' ? classMeeting.endTime.substring(1).slice(0, 1) + ':' + classMeeting.endTime.substring(1).slice(1) : classMeeting.endTime.slice(0, 2) + ':' + classMeeting.endTime.slice(2)}${classMeeting.endTimeMilitary.substring(0, 2) > '11' ? 'PM' : 'AM'}`} | {/* testing purposes room={classMeeting.roomNumber}*/} </p>
                                         )}
                                </div>

                        ))

                ))
                        

                ))
        }
                        </div>
  )
}
