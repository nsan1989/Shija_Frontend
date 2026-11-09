import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderComponent from './components/header-component/HeaderComponent';
import FooterComponent from './components/footer-component/FooterComponent';
import MobileMenuComponent from './components/mobile-menu-component/MobileMenuComponent';
import ScrollToTop from './components/scroll-component/ScrollToTop';
import ChatWidget from './components/chatbot/chat_widget';

import HomePage from './pages/home-page/HomePage';
import OverviewPage from './pages/overview-page/OverviewPage';
import AwardsPage from './pages/awards-page/AwardsPage';
import DoctorPage from './pages/doctor-page/DoctorPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import MediaPage from './pages/media-page/MediaPage';
import DirectorsPage from './pages/directors-page/DirectorsPage';
import DiseasesAndConditionsPage from './pages/diseasesandconditions-page/DiseasesAndConditionsPage';
import DiseasesDetailsPage from './pages/diseases-details-page/DiseasesDetailsPage';
import CentresOfExcellencePage from './pages/centresofexcellence-page/CentresOfExcellencePage';
import CentreOfExcellenceDetailsPage from './pages/centresofexcellence-page/CentreOfExcellenceDetailsPage';
import SpecialitiesPage from './pages/specialities-page/SpecialitiesPage';
import DisclaimerPage from './pages/disclaimer-page/DisclaimerPage';
import PrivacyAndPolicyPage from './pages/privacy&policy-page/PrivacyAndPolicyPage';
import RefundAndCancellationPage from './pages/refund&cancellation-page/RefundAndCancellationPage';
import CareerPage from './pages/career-page/CareerPage';
import CareerListPage from './pages/career-page/CareerListPage';
import ApplicationPage from './pages/career-page/ApplicationPage';

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
          <Route path="/" element={<HomePage />} />
          <Route path="/company-overview" element={<OverviewPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/doctors-page" element={<DoctorPage />} />
          <Route path="/media-page" element={<MediaPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/directors" element={<DirectorsPage />} />
          <Route path="/diseases-and-conditions" element={<DiseasesAndConditionsPage />} />
          <Route path="/disease-details/:diseaseId" element={<DiseasesDetailsPage />} />
          <Route path="/centres_of_excellence" element={<CentresOfExcellencePage />} />
          <Route path="/centres_of_excellence/:coeId" element={<CentreOfExcellenceDetailsPage />} />
          <Route path="/speciality_details" element={<SpecialitiesPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy&policy" element={<PrivacyAndPolicyPage />} />
          <Route path="/refund_and_cancellations" element={<RefundAndCancellationPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/careers/openings" element={<CareerListPage />} />
          <Route path="/careers/openings/application" element={<ApplicationPage />} />
        </Routes>
      </main>
      <MobileMenuComponent />
      <FooterComponent />
    </Router>
  )
}

export default App
