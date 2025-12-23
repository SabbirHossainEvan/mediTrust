import React from 'react';
import Navbar from '../components/Navbar';
import UserProfileDetails from '../components/UserProfileDetails';
import Footer from '../components/Footer';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <UserProfileDetails />
            <Footer />
        </div>
    );
}

export default Profile;
