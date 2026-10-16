import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderComponent from './components/header-component/HeaderComponent';
import FooterComponent from './components/footer-component/FooterComponent';
import MobileMenuComponent from './components/mobile-menu-component/MobileMenuComponent';
import ScrollToTop from './components/scroll-component/ScrollToTop';
import ChatWidget from './components/chatbot/chat_widget';

import Home from './pages/home-page/home';
import Overview from './pages/overview-page/overview';
import DoctorPage from './pages/doctor-page/doctor';
import Profile from './pages/profile-page/profile';
import MediaPage from './pages/media-page/media';
import DirectorsPage from './pages/directors-page/directors';
import DiseasesAndConditionsPage from './pages/diseasesandconditions-page/diseases_conditions_page';
import DiseasesDetailsPage from './pages/diseases-details-page/diseases_details';
import CentresOfExcellencePage from './pages/centresofexcellence-page/centres_of_excellence';
import SpecialitiesPage from './pages/specialities-page/specialities';
import DisclaimerPage from './pages/disclaimer-page/disclaimer';
import PrivacyAndPolicy from './pages/privacy&policy-page/privacy&policy';
import RefundAndCancellation from './pages/refund&cancellation-page/refund&cancellation';

import './App.css';

{/* bootstrap */ }
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <HeaderComponent />
      <ScrollToTop />
      <ChatWidget />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/company-overview" element={<Overview />} />
          <Route path="/doctors-page" element={<DoctorPage />} />
          <Route path="/media-page" element={<MediaPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/directors" element={<DirectorsPage />} />
          <Route path="/diseases-and-conditions" element={<DiseasesAndConditionsPage />} />
          <Route path="/disease-details/:diseaseId" element={<DiseasesDetailsPage />} />
          <Route path="/centres_of_excellence" element={<CentresOfExcellencePage />} />
          <Route path="/speciality_details" element={<SpecialitiesPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy&policy" element={<PrivacyAndPolicy />} />
          <Route path="/refund_and_cancellations" element={<RefundAndCancellation />} />
        </Routes>
      </main>
      <MobileMenuComponent />
      <FooterComponent />
    </Router>
  )
}

export default App
