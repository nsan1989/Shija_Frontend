import styles from './coe.module.css'
/* --api's-- */
import useCoeData from '../../api/coe_api'

export default function CoeFunction() {

    const { data: coeData } = useCoeData()
    const coe = coeData?.coe_data || []
    const newCoeData = coe && coe.length > 0 ? coe : [];

    return (
        <div className={`coe-wrapper ${styles[`coeSectionStyles`]}`}>
            {newCoeData.map((item, index) => (
                <div
                    key={`${item.id}-${index}`}
                    className="coe-items"
                >

                </div>
            ))}
        </div>
    )
}
