import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import PartnersBar from './components/PartnersBar.jsx';
import CountdownSection from './components/CountdownSection.jsx';
import TracksSection from './components/TracksSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import ScheduleSection from './components/ScheduleSection.jsx';
import SpeakersSection from './components/SpeakersSection.jsx';
import TicketsSection from './components/TicketsSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import Footer from './components/Footer.jsx';
import ModalInscricao from './components/ModalInscricao.jsx';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#050816' }}>
      {/* Fixed Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Banner Hero & Sponsors */}
      <main>
        <HeroBanner onOpenModal={handleOpenModal} />
        <CountdownSection />
        <StatsSection />
        <TracksSection />
        <ScheduleSection />
        <SpeakersSection />
        <TicketsSection onOpenModal={handleOpenModal} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Registration Modal */}
      <ModalInscricao isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
