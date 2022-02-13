import {useForm} from "react-hook-form";
import BreadCrumb from "../BreadCrumb";
import publicImg from "../../images/public.svg";
import privateImg from "../../images/private.svg";
import {createEvent} from "../../Api";
import {toast} from "react-toastify";
import moment from "moment";

const CreateEvent = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = async values => {
        try {
            await createEvent(values).then(response => {
                if(response.success) {
                    toast.success("رویداد با موفقیت اضافه شد")
                }
            }).catch(error => {
                toast.warning(error.response.data.errors[0].error);
            });
        } catch (error) {
            toast.error("خطایی بوجود آمده است لطفا مجددا تلاش کنید")
        }
    }

    const breadcrumbItem = ["داشبورد","رویداد ها","ایجاد رویداد"];
    const breadcrumbTitle = "ایجاد رویداد";
    return (
        <div className="event-box">
            <form onSubmit={handleSubmit(onSubmit)}>
                <BreadCrumb items={breadcrumbItem} title={breadcrumbTitle}/>
                <div className="form-create-event">
                    <div className="mb-4">
                        <label htmlFor="EventName" className="form-label required">نام رویداد</label>
                        <input type="text" className="form-control" id="EventName" {...register("name", {required: true})}/>
                        {errors?.name?.type === "required" && <p className="error-text">نام رویداد اجباری است.</p>}
                    </div>
                    <div className="row mb-4">
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <label htmlFor="eventStartDate" className="form-label">تاریخ و ساعت شروع</label>
                            <input type="datetime-local" className="form-control" id="eventStartDate" min={moment().format('YYYY-MM-DDTkk:mm')} {...register("startTime", {required: true})}/>
                            {errors?.startTime?.type === "required" && <p className="error-text">تاریخ و ساعت شروع رویداد اجباری است.</p>}
                        </div>
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <label htmlFor="eventEndDate" className="form-label">تاریخ و ساعت پایان</label>
                            <input type="datetime-local" className="form-control" id="eventEndDate" min={moment().format('YYYY-MM-DDTkk:mm')} {...register("endTime", {required: true})}/>
                            {errors?.endTime?.type === "required" && <p className="error-text">تاریخ و ساعت پایان رویداد اجباری است.</p>}
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="eventType" className="form-label">نوع رویداد</label>
                        <div className="col-lg-6 col-sm-12 mt-md-0 mt-sm-3">
                            <input type="radio" value="private" name="event_type" hidden id="eventTypePrivate" {...register("access", {required: true})}/>
                            <label htmlFor="eventTypePrivate" className="form-label-event-type">
                                <div className="row align-items-center">
                                    <div className="col-2"><img src={privateImg}/></div>
                                    <div className="col-10">
                                        <h5>خصوصی</h5>
                                        <p>فقط در صورتی که قصد دارید اطلاع رسانی رویداد از طریق لینک و توسط خودتان انجام
                                            شود این گزینه را انتخاب کنید</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-md-0 mt-sm-3">
                            <input type="radio" value="public" name="event_type" hidden id="eventTypePublic" {...register("access", {required: true})}/>
                            <label htmlFor="eventTypePublic" className="form-label-event-type">
                                <div className="row align-items-center">
                                    <div className="col-2"><img src={publicImg}/></div>
                                    <div className="col-10">
                                        <h5>عمومی</h5>
                                        <p>این رویداد در صفحه اصلی سازمان شما و مارکت رویدادها نمایش داده می شود و امکان
                                            ثبت نام در این رویداد برای کلیه کاربران فراهم است</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        {errors?.access?.type === "required" && <p className="error-text">انتخاب نوع رویداد اجباری است.</p>}
                    </div>
                </div>
                <div className="row justify-content-start mt-4 btn-form-event">
                    <input type="submit" className="btn-event btn-event-success" value="ایجاد رویداد"/>
                    <input type="reset" className="btn-event btn-event-cancel" value={"انصراف"}/>
                </div>
            </form>
        </div>
    )
}
export default CreateEvent;