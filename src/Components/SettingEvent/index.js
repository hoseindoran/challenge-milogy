import BreadCrumb from "../BreadCrumb";
import Basic from "./Basic";
import {useEffect, useState} from "react";
import {getEvent} from "../../Api";
import {toast} from "react-toastify";

const SettingEvent = () => {

    const [event, setEvent] = useState();

    useEffect(async () => {
        const id = "6208dbd80c9f4f64aa301bfa";
        try {
            const {data} = await getEvent(id);
            setEvent(data);
        } catch (error) {
            toast.error("خطایی بوجود آمده است لطفا مجددا تلاش کنید")
        }
    }, []);

    const breadcrumbItem = ["داشبورد","تنظیمات رویداد","اطلاعات رویداد"];
    const breadcrumbTitle = "تنظیمات رویداد";
    return (
        <>
            <div className="event-box">
                <BreadCrumb items={breadcrumbItem} title={breadcrumbTitle}/>
                {event && <Basic event={event}/>}
            </div>
        </>
    )
}

export default SettingEvent