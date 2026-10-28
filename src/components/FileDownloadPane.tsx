import { useEffect, useState } from "react";
import CustomPaper from "./CustomPaper";


export default function FileDownloadPane({size}){
    const [rerender, setRerender] = useState(false);

    useEffect(()=>{
        if(!rerender){
            setRerender(true);
        }
    }, [size])

    return(
        <CustomPaper setSize={()=>{}} resizable={true} size={['100%', size[1]]} >
            <div>

            </div>
        </CustomPaper>
    );
}