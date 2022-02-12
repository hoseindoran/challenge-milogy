import BreadCrumb from "../BreadCrumb";

const CreateEvent = () => {
    return (
        <div className="event-box">
            <BreadCrumb />
            <div className="form-create-event">

            </div>
            <div className="row justify-content-start mt-4">
                <button className="btn-event btn-event-success">ایجاد رویداد</button>
                <button className="btn-event btn-event-cancel">انصراف</button>
            </div>
        </div>
    )
}
export default CreateEvent;