import React from 'react';
import Navbar from '../components/Navbar';
import MeditrustHero from '../components/MeditrustHero';
import Footer from '../components/Footer';
import UserDetailsSection from '../components/UserDetailsSection';
import FeaturesSection from '../components/FeaturesSection';
import ExpertiseSection from '../components/ExpertiseSection';
import StatisticsSection from '../components/StatisticsSection';
import ContactSection from '../components/ContactSection';

const About = () => {
    return (
        <div>
            <Navbar />
            <MeditrustHero />
            <FeaturesSection />
            <ExpertiseSection />
            <StatisticsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default About;
