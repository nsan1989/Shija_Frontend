import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShijaHeader from './components/header_component/header'
import ShijaFooter from './components/footer_component/footer'
import MobileMenu from './components/mobile_menu_component/mobile_menu'
import ScrollToTop from './components/scroll_component/scroll_to_top'
import Home from './pages/home_page/home'
import Overview from './pages/overview_page/overview'
import DoctorPage from './pages/doctor_page/doctor'
import Profile from './pages/profile_page/profile'
import MediaPage from './pages/media_page/media'
import DiseasesAndConditionsPage from './pages/DiseasesAndConditions_page/diseases_conditions_page'
import DiseasesDetailsPage from './pages/diseases_details_page/diseases_details'
import CentresOfExcellencePage from './pages/centresofexcellence_page/centres_of_excellence'
import ChatWidget from './components/chatbot/chat_widget'
import './App.css'

{/* bootstrap */ }
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <ShijaHeader />
      <ScrollToTop />
      <ChatWidget />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/company-overview" element={<Overview />} />
          <Route path="/doctors-page" element={<DoctorPage />} />
          <Route path="/media-page" element={<MediaPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/diseases-and-conditions" element={<DiseasesAndConditionsPage />} />
          <Route path="/disease-details/:diseaseId" element={<DiseasesDetailsPage />} />
          <Route path="/centres_of_excellence" element={<CentresOfExcellencePage />} />
        </Routes>
      </main>
      <MobileMenu />
      <ShijaFooter />
    </Router>
  )
}

export default App
