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

    console.log(coursesData);
    

coursesData.forEach((course:any) => {



    course.sections.forEach((section:any) => {
        

            section.meetingTimes.forEach((classMeeting:any) => {
                if (classMeeting.meetingDay === day && classMeeting.buildingCode === building) {
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
                    classObject.sectionNumber = section.number;
                classObject.startTime = `${classMeeting.startTime[0] == '0' ? classMeeting.startTime.substring(1).slice(0, 1) + ':' + classMeeting.startTime.substring(1).slice(1) : classMeeting.startTime.slice(0, 2) + ':' + classMeeting.startTime.slice(2)}${classMeeting.pmCode}M`
                classObject.endTime = `${classMeeting.endTime[0] == '0' ? classMeeting.endTime.substring(1).slice(0, 1) + ':' + classMeeting.endTime.substring(1).slice(1) : classMeeting.endTime.slice(0, 2) + ':' + classMeeting.endTime.slice(2)}${classMeeting.endTimeMilitary.substring(0, 2) > '11' ? 'PM' : 'AM'}`;
                classObject.room = classMeeting.roomNumber;
                classObject.mode = classMeeting.meetingModeDesc;
                res.push(classObject); 
                
            }
            })
    })

});
    res = res.sort((a:courseObject, b:courseObject) => {
        
        if (new Date(`1766/11/10 ${a.startTime.substring(0, a.startTime.indexOf('M')-1) + ' ' +  a.startTime.substring(a.startTime.indexOf('M')-1, a.startTime.length)}`) < new Date(`1766/11/10 ${b.startTime.substring(0, b.startTime.indexOf('M')-1) + ' ' +  b.startTime.substring(b.startTime.indexOf('M')-1, b.startTime.length)}`))
        return -1;
        if (new Date(`1766/11/10 ${a.startTime.substring(0, a.startTime.indexOf('M')-1) + ' ' +  a.startTime.substring(a.startTime.indexOf('M')-1, a.startTime.length)}`) > new Date(`1766/11/10 ${b.startTime.substring(0, b.startTime.indexOf('M')-1) + ' ' +  b.startTime.substring(b.startTime.indexOf('M')-1, b.startTime.length)}`))
        return 1;
        
        return 0;
    
    })
    return res;


}