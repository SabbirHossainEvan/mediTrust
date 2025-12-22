import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HeroSlider from '../components/HeroSlider';
import MedicineSection from '../components/MedicineSection';
import DoctorConsultation from '../components/DoctorConsultation';
import DoctorsSection from '../components/DoctorsSection';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <MedicineSection />
            <DoctorConsultation />
            <DoctorsSection />
            <AppointmentSection />
            <Footer />
        </div>
        
    );
}

export default Home;
