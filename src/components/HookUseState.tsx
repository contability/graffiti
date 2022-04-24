import { useState } from "react";

export default function HookUseState(){
    const [sysDate, setSysDate] = useState(new Date);
    const dateStr: string = sysDate+"";

    function refreshDate(){
        setSysDate(new Date);
    }

    return (
        <div>
            <div>{dateStr}</div>
            <button onClick={refreshDate}>Refresh</button>
        </div>
    );
}