import {useRef} from 'react';
import {useForm} from "react-hook-form";
import moment from "moment";
import save from "../../images/save.svg";
import uploadFile from "../../images/file-upload.svg";
import {Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";
import {updateEvent} from "../../Api";
import {toast} from "react-toastify";

const Basic = ({event}) => {

    const fileInput = useRef();

    const newValues = {
        id: event?._id,
        name: event?.name,
        startTime: moment(event?.startTime).format("YYYY-MM-DDTkk:mm"),
        endTime: moment(event?.endTime).format("YYYY-MM-DDTkk:mm"),
        timeZone: event?.timeZone,
        language: event?.language,
        accessLink: event?.accessLink
    }

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: newValues
    });

    const onSubmit = async data => {

        const values = {
            name: data.name,
            startTime: data.startTime,
            endTime: data.endTime,
            timeZone: data.timeZone,
            language: data.language,
            cover: data.cover[0].name
        }

        try {
            await updateEvent(newValues.id, values).then(response => {
                if (response.success) {
                    toast.success("رویداد با موفقیت اضافه شد")
                }
            }).catch(error => {
                toast.warning(error.response.data.errors[0].error);
            });
        } catch (error) {
            toast.error("خطایی بوجود آمده است لطفا مجددا تلاش کنید")
        }
    };

    const copyToClipboard = str => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
            return navigator.clipboard.writeText(str);
        return Promise.reject('The Clipboard API is not available.');
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-create-event">
                    <Tabs defaultActiveKey="basic" id="event-setting" className="mb-3 justify-content-center">
                        <Tab eventKey="basic" title="اطلاعات پایه">
                            <div className="mb-4">
                                <label htmlFor="EventName" className="form-label required">نام رویداد</label>
                                <input type="text" className="form-control"
                                       id="EventName" {...register('name', {required: true})}/>
                            </div>
                            <div className="row mb-4">
                                <div className="col-lg-6 col-sm-12 position-relative">
                                    <label htmlFor="eventStartDate" className="form-label">تاریخ و ساعت شروع</label>
                                    <input type="datetime-local"
                                           min={moment().format('YYYY-MM-DDTkk:mm')} {...register('startTime', {required: true})}
                                           className="form-control" id="eventStartDate"/>
                                </div>
                                <div className="col-lg-6 col-sm-12 position-relative">
                                    <label htmlFor="eventEndDate" className="form-label">تاریخ و ساعت پایان</label>
                                    <input type="datetime-local"
                                           min={moment().format('YYYY-MM-DDTkk:mm')} {...register('endTime', {required: true})}
                                           className="form-control" id="eventEndDate"/>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-lg-6 col-sm-12 position-relative">
                                    <label htmlFor="eventStartDate" className="form-label">منطقه زمانی</label>
                                    <select className="form-control" {...register('timeZone', {required: true})}>
                                        <option value="" disabled>منطقه زمانی را انتخاب کنید.</option>
                                        <option value="Asia/Tehran">Asia/Tehran</option>
                                        <option value="Asia/Istanbul">Asia/Istanbul</option>
                                        <option value="Asia/Kuwait">Asia/Kuwait</option>
                                        <option value="Asia/Kabul">Asia/Kabul</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 col-sm-12 position-relative">
                                    <label htmlFor="eventEndDate" className="form-label">زبان اصلی رویداد</label>
                                    <select className="form-control" {...register('language', {required: true})}>
                                        <option value="" disabled>زبان اصلی رویداد را انتخاب کنید.
                                        </option>
                                        <option value="EN">English</option>
                                        <option value="FA">فارسی</option>
                                        <option value="FR">France</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="EventName" className="form-label">آدرس اینترنتی رویداد</label>
                                <div className="row">
                                    <div className="col-lg-10 col-sm-8 col-12">
                                        <input type="text" className="form-control"
                                               id="EventName" {...register('accessLink', {required: true})}/>
                                    </div>
                                    <div className="col-lg-2 col-sm-4 col-12 pe-sm-0 pe-2 mt-sm-0 mt-3">
                                        <button className="btn-event-copy p-sm-0 p-2" onClick={() => copyToClipboard(event?.accessLink)}><img src={save}/>کپی آدرس</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="EventName" className="form-label d-flex justify-content-between">
                                    <span>تصویر کاور رویداد</span>
                                    <a href="#" className="ms-3">دانلود قالب</a>
                                </label>
                                <label htmlFor={"uploadFile"} className="label-upload-file">
                                    <div className="row">
                                        <div className="col-1">
                                            <img src={uploadFile}/>
                                        </div>
                                        <div className="col-11">
                                            <h6>فایل را آپلود یا در اینجا درگ کنید.</h6>
                                            <p>ابعاد کاور وبینار ۱۵*۱۵ باشد.</p>
                                            <p>ماکسیمم سایز فایل کاور ۲ مگابایت و بهترین سایز پیشنهادی ۱۵۰۰ در ۶۰۰
                                                است</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="file" ref={fileInput} {...register('cover', {required: true})} hidden
                                       className="form-control" id="uploadFile"/>
                            </div>
                        </Tab>
                        <Tab eventKey="complete" title="اطلاعات تکمیلی">
                            <div>hi</div>
                        </Tab>
                        <Tab eventKey="ticket" title="ایجاد بلیط">
                            <div>bye</div>
                        </Tab>
                    </Tabs>
                </div>
                <div className="row justify-content-start mt-4 btn-form-event">
                    <input type="submit" className="btn-event btn-event-success" value="ذخیره و ادامه"/>
                    <Link to="/" className="btn-event btn-event-cancel">انصراف</Link>
                </div>
            </form>
        </>
    )
}

export default Basic;