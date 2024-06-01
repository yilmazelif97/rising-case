
import { useState } from 'react'
import styles from '../../styles/Alert.module.css'

export default function Alert(props: any) {

    const [cancelBtn, setCancelBtn] = useState(false)

    const handleCancelBtn = () => {

        props?.onClose(!cancelBtn)

    }

    return (
        <div className={styles.div} >
            <p className={styles.content}>
                Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card.
                <span className={styles.trial}>Start Free Trial</span>
            </p>            <button onClick={handleCancelBtn} className={styles.cancelButton} >
                <img src="/icons/cancel.svg" className={styles.icon} />
            </button>
        </div>
    )
}