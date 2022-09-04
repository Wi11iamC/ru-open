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

export default function extractData(data:any):Array<courseObject> {

    let res:Array<courseObject> =[];

    data.forEach((course:any) => {

    })

    return res;


}