/*

filter courses taking place in @params building

*/

export default async function filterCourses(coursesData: any,  day: string, campus: string, building: string):Promise<Object> {
    
    const courses_in_building:Array<Object> = coursesData.filter((course:any) => (course.sections.some((section:any) => (section.meetingTimes.some((meeting:any) => (meeting.buildingCode === building && meeting.meetingDay === day))))))    
    

    return courses_in_building;
}