import { Accordion } from "react-bootstrap"

const faq_quest_list = [
    {
        quest: "How do I book an appointment at the best hospital in Manipur, Shija Hospitals?",
        ans: "Booking an appointment at Shija Hospitals, recognized as the best hospital in India and top hospital in India, is quick and convenient. Use our official website, mobile app, or call the 24/7 helpline at 1860-500-1066 for instant slots across best super specialty hospital India departments. No prior referral needed—select your preferred date, time, and service for seamless access to best hospital near me quality care, whether for routine check-ups or urgent needs at this ranked best hospital in India.",
    },
    {
        quest: "Can I book a specialist appointment at Shija Hospitals , India's No 1 hospital, without a local referral?",
        ans: "Yes, at Shija Hospitals—the No 1 hospital in India and best private hospital in India—direct specialist bookings are welcome without referrals. As a top ranked hospital India leader, we prioritize patient convenience, offering walk-ins, online scheduling, and teleconsultations. This flexibility makes us the go-to best hospital near me for expert care in multispecialty services, ensuring you receive best multi specialty hospital in India standards promptly.",
    },
    {
        quest: "Does Shija Hospitals, the best emergency hospital, in India offer second opinions or online consultations?",
        ans: "Shija Hospitals, the premier best emergency hospital and best emergency hospital near me, provides comprehensive second opinions and 24/7 online consultations via our advanced telemedicine platform with 800+ units. Patients searching for world's best hospitals India quality can upload reports for expert reviews, making us the trusted top hospital in India for remote diagnostics and virtual care that matches in-person best super specialty hospital India excellence.",
    },
    {
        quest: "What information do I need to book at the best super specialty hospital India, Shija?",
        ans: "To book at Shija Hospitals, the leading best super specialty hospital India, simply provide your full name, mobile number, email, preferred date/time, and department. As the best multi specialty hospital in India, we ensure data privacy with secure processing, offering OTP verification for instant confirmations. This streamlined process positions us as the reliable best hospital near me for all patients nationwide.",
    },
    {
        quest: "Will Shija Hospitals, the top hospital, in India inform me about treatment costs and stay duration upfront?",
        ans: "Yes, our patient care team will provide an estimated cost and expected duration of stay based on your diagnosis and treatment plan after consultation with the doctor. Transparency defines Shija Hospitals, the top hospital in India and leading hospital chain in India. Before any commitment, receive detailed cost estimates, treatment plans, and expected stay durations tailored to your case. Our best hospital for emergency services teams provide personalized quotes, helping you plan confidently as part of our ranked best hospital in India commitment to patient.",
    },
    {
        quest: "What documents should I carry for admission at No.1 super specialty hospital India?",
        ans: "For admission at Shija Hospitals—No.1 super specialty hospital India and top 10 hospitals in India member—bring government ID (Aadhaar/Passport), prior medical reports, prescription, and insurance details if applicable. Our best multispecialty hospital for international patients staff assists with digital uploads and verifications, ensuring a hassle-free start to your best private hospital in India experience.",
    },
    {
        quest: "What are the visiting hours and policies at Shija Hospitals, the best hospital for emergency services, ?",
        ans: "Visiting hours at Shija Hospitals, the best hospital for emergency services and 24 hour emergency hospital near me, run from 10 AM to 5 PM daily, with 24/7 access for critical cases and ICUs. Family policies include sanitization, limited visitors (2 per patient), and priority for emergencies, aligning with India’s No 1 hospital safety standards as a top private super specialty hospital India.",
    },
    {
        quest: "Does Shija Hospitals, the best hospital in India, provide assistance for international patients?",
        ans: "Shija Hospitals, the best hospital in India and best multispecialty hospital for international patients, offers end-to-end support including medical visas, airport transfers, accommodation, language interpreters, and dedicated coordinators. As a leading hospital chain in India, we simplify global care, making us the preferred choice among world's best hospitals India for overseas patients.",
    }
]

export default function FaqComponent() {
    return (
        <div className={`faq-wrapper`}>
            {faq_quest_list.map((link, index) => (
                <Accordion key={index} defaultActiveKey="0">
                    <Accordion.Item eventKey="1" className="mb-2">
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