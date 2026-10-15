import { Accordion } from "react-bootstrap";
import { FaqQuestion } from "../../constants/faqQuestions";


export default function FaqComponent() {
    return (
        <div className={`faq-wrapper`}>
            {FaqQuestion.map((link, index) => (
                <Accordion key={index} defaultActiveKey="0">
                    <Accordion.Item eventKey="1" className="mb-3">
                        <Accordion.Header>{link.quest}</Accordion.Header>
                        <Accordion.Body>
                            {link.ans}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
        </div>
    )
}