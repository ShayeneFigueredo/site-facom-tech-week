import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import CountdownSection from './components/CountdownSection.jsx';
import TracksSection from './components/TracksSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import ScheduleSection from './components/ScheduleSection.jsx';
import SpeakersSection from './components/SpeakersSection.jsx';
import TicketsSection from './components/TicketsSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const symplaUrl = 'https://www.sympla.com.br/evento/facom-techweek/3599637';

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#050816' }}>
      {/* Fixed Navigation Bar */}
      <Navbar symplaUrl={symplaUrl} />

      {/* Main Banner Hero & Sponsors */}
      <main>
        <HeroBanner symplaUrl={symplaUrl} />
        <CountdownSection />
        <StatsSection />
        <TracksSection />
        <ScheduleSection />
        <SpeakersSection />
        <TicketsSection symplaUrl={symplaUrl} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer symplaUrl={symplaUrl} />
    </div>
  );
}
