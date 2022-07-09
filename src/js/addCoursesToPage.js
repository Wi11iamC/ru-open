export default function addCoursesToPage(courseData, section, day, building) {
    
    courseData.forEach(course => {
        
        let filteredCoursePreviewSection =  document.createElement('div');
        filteredCoursePreviewSection.classList.add('additional-article-preview');

        let courseTitle = course.title;
        let sectionIndexList = [];

        course.sections.forEach(courseSection => {

            let sectionNumber = courseSection.number;

            sectionIndexList.push(courseSection.index);
            courseSection.meetingTimes.forEach(classMeeting => {
                if ((classMeeting.campusLocation != '0') && (classMeeting.meetingDay == day) && (classMeeting.buildingCode == building)){
                filteredCoursePreviewSection.innerHTML = 
                `
                <p>${courseTitle} | section: <span>${sectionNumber}</span> | room: <span>${classMeeting.buildingCode}-${classMeeting.roomNumber}</span> | Meeting Times: <span>${classMeeting.startTime[0] == '0' ? classMeeting.startTime.substring(1).slice(0, 1) + ':' + classMeeting.startTime.substring(1).slice(1) : classMeeting.startTime.slice(0, 2) + ':' + classMeeting.startTime.slice(2)}${classMeeting.pmCode}M-${classMeeting.endTime[0] == '0' ? classMeeting.endTime.substring(1).slice(0, 1) + ':' + classMeeting.endTime.substring(1).slice(1) : classMeeting.endTime.slice(0, 2) + ':' + classMeeting.endTime.slice(2)}${classMeeting.endTimeMilitary.substring(0, 2) > '11' ? 'PM' : 'AM'}</span></p>
            
                `
                }

            });

        })




        section.append(filteredCoursePreviewSection);   
    });

}