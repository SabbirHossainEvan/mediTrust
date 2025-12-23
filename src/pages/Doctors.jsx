import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DoctorSection from '../layouts/DoctorsSection';

const Doctors = () => {
    return (
        <div>
            <Navbar />
            <DoctorSection />
            <Footer />
        </div>
    );
}

export default Doctors;
