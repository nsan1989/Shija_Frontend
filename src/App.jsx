import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header_component/header'
import Footer from './components/footer_component/footer'
import MobileMenu from './components/mobile_menu_component/mobile_menu'
import ScrollToTop from './components/scroll_component/scroll_to_top'
import Home from './pages/home_page/home'
import Overview from './pages/overview_page/overview'
import DoctorPage from './pages/doctor_page/doctor'
import Profile from './pages/profile_page/profile'
import DiseasesAndConditionsPage from './pages/DiseasesAndConditions_page/diseases_conditions_page'
import ChatWidget from './components/chatbot/chat_widget'
import './App.css'

{/* bootstrap */ }
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Header />
      <ScrollToTop />
      <ChatWidget />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/company-overview" element={<Overview />} />
          <Route path="/doctors-page" element={<DoctorPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/diseases-and-conditions" element={<DiseasesAndConditionsPage />} />
        </Routes>
      </main>
      <MobileMenu />
      <Footer />
    </Router>
  )
}

export default App
