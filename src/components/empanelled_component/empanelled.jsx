import styles from './empanelled.module.css'
/* --api's-- */
import useEmpanelledData from '../../api/empanelled_api'

export default function EmpanelledFunction() {

    const { data: empanelledData } = useEmpanelledData();
    const empanelled = empanelledData?.empanelled_data || [];

    const newEmpanelledData = empanelled && empanelled.length > 0 ? empanelled : [];

    return (
        <div className="empanelled-wrapper">
            {newEmpanelledData.map((item, index) => (
                <div 
                key={`${item.id}-${index}`}
                className="empanelled-items"
                >

                </div>
            ))}
        </div>
    )

}
