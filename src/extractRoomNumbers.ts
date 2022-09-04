export default function extractRoomNumbers(data: any): Array<string>{

    let res: Array<string> = [];
if (data.length > 1) {
    data.forEach((course:any) => {

                if (!res.some((room:string) => (room === course.room))) {
                    res.push(course.room);
                }


    })
}

res = res.sort();
    return res;
    
}