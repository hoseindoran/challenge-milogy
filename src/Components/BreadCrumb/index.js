import styles from "./BreadCrumb.module.css";

const BreadCrumb = ({items, title}) => {
    return (
        <>
            <h3 className={styles.breadCrumbTitle}>{title}</h3>
            <ul className={styles.breadCrumbList}>
                {
                    items.map((item,index,items) => <li key={index} className={index + 1 !== items.length ? `${styles.breadCrumbItem}` : `${styles.breadCrumbItem} ${styles.active}`}>{item}</li>)
                }
            </ul>
        </>
    )
}

export default BreadCrumb;