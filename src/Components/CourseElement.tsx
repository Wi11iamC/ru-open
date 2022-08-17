import React from "react";
import Modal from 'react-modal';

const customStyles = {
        content: {
          backgroundColor: "#282c34",
          opacity: "100%",
        },
        overlay: {
          backgroundColor: "#CC0033",
          
        }
      };


export const CourseElement = (props: any) => {

        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
      
        function afterOpenModal() {
          // references are now sync'd and can be accessed.
        }
      
        function closeModal() {
          setIsOpen(false);
        }
        Modal.setAppElement('#root');



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
                <button className="room-button" onClick={openModal}>{room}</button>
                <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Modal" >
                <h3>{room}</h3>
                <button onClick={closeModal}>close</button>
                {
                coursesData.map((course:any) => (
                        
                        course.sections.map((section:any) => (

                        section.meetingTimes.map((classMeeting:any) => (
                                <div key={section.index}>
                                        {(classMeeting.roomNumber === room && 
                                         <p>{course.title} | section: {section.number} | {classMeeting.startTimeMilitary}-{classMeeting.endTimeMilitary} | room={classMeeting.roomNumber}</p>
                                         )}
                                </div>

                        ))

                ))
                        

                ))
        }
                        </Modal>
                </div>
                )

        })
}
       
</div>
        
        
        )
}