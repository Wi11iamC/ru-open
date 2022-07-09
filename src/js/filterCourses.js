export default async function filterCourses(day, building, courseList) {
    
    let filteredCourses = [];
    let filteredCoursesIndex = 0;

    courseList.forEach(course => {

        course.sections.forEach(courseSection => {
            
            courseSection.meetingTimes.forEach(classMeeting => {
                if (classMeeting.buildingCode == building) {
                    filteredCourses[filteredCoursesIndex] = course;
                    filteredCoursesIndex++;
                }
            });

        });



    });


    return filteredCourses;
}