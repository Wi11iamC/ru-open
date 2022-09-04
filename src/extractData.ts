interface courseObject {
    title: string,
    sectionNumber: string,
    startTime: string,
    endTime: string,
    level: string,
    courseString: string,
    room: string,
    mode: string,
}

export default function extractData(coursesData:any, day:any, building:any):Array<courseObject> {

    let res:Array<courseObject> =[];


coursesData.forEach((course:any) => {

    let classObject:courseObject = {
        title: "",
        sectionNumber: "",
        startTime: "",
        endTime: "",
        level: "",
        courseString: "",
        room: "",
        mode: "",
    };

    classObject.title = course.title;
    classObject.courseString = course.courseString;
    classObject.level = course.level;

    course.sections.forEach((section:any) => {
        classObject.sectionNumber = section.number;
            section.meetingTimes.forEach((classMeeting:any) => {
                if (classMeeting.meetingDay === day && classMeeting.buildingCode === building) {
                classObject.startTime = `${classMeeting.startTime[0] == '0' ? classMeeting.startTime.substring(1).slice(0, 1) + ':' + classMeeting.startTime.substring(1).slice(1) : classMeeting.startTime.slice(0, 2) + ':' + classMeeting.startTime.slice(2)}${classMeeting.pmCode}M`
                classObject.endTime = `${classMeeting.endTime[0] == '0' ? classMeeting.endTime.substring(1).slice(0, 1) + ':' + classMeeting.endTime.substring(1).slice(1) : classMeeting.endTime.slice(0, 2) + ':' + classMeeting.endTime.slice(2)}${classMeeting.endTimeMilitary.substring(0, 2) > '11' ? 'PM' : 'AM'}`;
                classObject.room = classMeeting.roomNumber;
                classObject.mode = classMeeting.meetingModeDesc;
                res.push(classObject); 
            }
            })
    })

});
    return res;


}