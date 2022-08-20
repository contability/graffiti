import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDeviceType } from "../reducers/common";


const EventListener: Function = () => {
    // device type
    const BREAK_POINT_MOBILE = 360;
    const BREAK_POINT_TABLET = 1024;
    const BREAK_POINT_PC = 1920;

    const dispatch = useDispatch();

    const handleResize = () => {
        if(window.innerWidth > BREAK_POINT_PC) dispatch(setDeviceType("P"));
        else if(BREAK_POINT_PC > window.innerWidth && window.innerWidth > BREAK_POINT_TABLET) dispatch(setDeviceType("T"));
        else dispatch(setDeviceType("M"));
    };

    useEffect(() => {
        if(window.innerWidth > BREAK_POINT_PC) dispatch(setDeviceType("P"));
        else if(BREAK_POINT_PC > window.innerWidth && window.innerWidth > BREAK_POINT_TABLET) dispatch(setDeviceType("T"));
        else dispatch(setDeviceType("M"));
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <></>;
}

export default EventListener;