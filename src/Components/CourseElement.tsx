import React from "react";

export const CourseElement = (props: any) => {

    
return (
        <div>

        <p>{props.title} ~ section: {props.section} ~ room:{props.room}</p>
        <p>{props.start}-{props.end}</p>




        </div>
)

}