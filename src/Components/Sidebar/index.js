import {Link} from "react-router-dom";
import styles from "./Sidebar.module.css";
import arrow from "../../images/arrow.svg";
import profile from "../../images/img.png";
import setting from "../../images/setting.svg";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <img src={arrow} />
                <span>استارتاپ آکادمی</span>
            </div>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>داشبورد</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>تنظیمات سازمان</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>رویداد ها</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>دوره ها</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>جلسات مشاوره</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>مدیریت شرکت کنندگان</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>مدیریت تیم سازمان</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>مدیریت مالی</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>اپ اختصاصی</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>بازاریابی</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>پشتیبانی</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to={"/"}>راهنما</Link></li>
            </ul>
            <div className={styles.sideBarFooter}>
                <img src={profile} className={styles.imgProfile}/>
                <div className="d-flex flex-column ms-auto pe-1">
                    <h6>محمد همتی</h6>
                    <span>مدرس دوره طراحی</span>
                </div>
                <img src={setting} className={styles.imgSetting}/>
            </div>
        </div>
    )
}

export default Sidebar;