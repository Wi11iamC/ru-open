/*

filter courses taking place in @params building

*/

export default async function filterCourses(coursesData: any,  day: string, campus: string, building: string):Promise<Object> {
   let res:Array<Object> = [] 
    //const courses_in_building:Array<Object> = coursesData.filter((course:any) => (course.sections.some((section:any) => (section.meetingTimes.some((meeting:any) => (meeting.buildingCode === building && meeting.meetingDay === day))))))    
let courseAdded:boolean = false;    
    coursesData.forEach((course:any) => {
        course.sections.forEach((section:any) =>{

            section.meetingTimes.forEach((classMeeting:any) => {
                if (classMeeting.meetingDay === day && classMeeting.buildingCode === building && !courseAdded){
                    res.push(course);
                    courseAdded = true;
                }
        })

        })
        courseAdded = false;
    });


    return res;
}