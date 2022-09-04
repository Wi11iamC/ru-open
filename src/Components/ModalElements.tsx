import React from "react";


export default function ModalElements(props:any) {
  return (
    <div id={`modal-${props.idx}`} className="modal-main inactive">
                <h3>{props.room}</h3>
                <button onClick={() => props.closeModal(props.idx)}>close</button>
                {
                props.coursesData.map((course:any, index:any) => (
                        
                                <div key={index}>
                                        {(course.room === props.room && 
                                         <p>{course.title} | {course.courseString} | section: {course.sectionNumber} | level: {course.level} | {course.startTime}-{course.endTime} | mode: {course.mode}</p>
                                         )}
                                </div>
                        

                ))
        }
                        </div>
  )
}
