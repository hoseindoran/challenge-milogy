import styles from "./BreadCrumb.module.css";

const BreadCrumb = () => {
    return (
        <>
            <h3 className={styles.breadCrumbTitle}>ایجاد رویداد</h3>
            <ul className={styles.breadCrumbList}>
                <li className={styles.breadCrumbItem}>داشبورد</li>
                <li className={styles.breadCrumbItem}>رویداد ها</li>
                <li className={`${styles.breadCrumbItem} ${styles.active}`}>ایجاد رویداد</li>
            </ul>
        </>
    )
}

export default BreadCrumb;