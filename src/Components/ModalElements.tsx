import React from "react";


export default function ModalElements(props:any) {
  return (
    <div id={`modal-${props.idx}`} className="modal-main inactive">
                <h3>{props.room}</h3>
                <button className="close-modal-button" onClick={() => props.closeModal(props.idx)}>Close</button>
                {
                props.coursesData.map((course:any, index:any) => (
                        
                                <div key={index} className="modal-course-description">
                                        {(course.room === props.room && 
                                         <p>{course.title} | {course.courseString} | section: {course.sectionNumber} | level: {course.level} | <span className="modal-course-time">{course.startTime}-{course.endTime}</span> | mode: {course.mode}</p>
                                         )}
                                </div>
                        

                ))
        }
                        </div>
  )
}
