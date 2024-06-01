
import styles from '../../styles/SideMenu.module.css'


export default function SideMenu() {


    return (
        <div className={styles.sidemenu} >
             <div className={styles.iconContainer} >
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <img src="/icons/Rising Logo.svg" className={styles.icon} />
                </button>
            </div>
            <div className={styles.iconContainer} >
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <img src="/icons/homepage.svg" className={styles.icon} />
                </button>
            </div>
            <div className={styles.iconContainer} >
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <img src="/icons/card.svg" className={styles.icon} />
                </button>
            </div>
            <div className={styles.iconContainer}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <img src="/icons/user.svg" className={styles.icon} />
                </button>
            </div>
            <div className={styles.iconContainer}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <img src="/icons/logout.svg" className={styles.icon} />
                </button>
            </div>
        </div>
    )

}