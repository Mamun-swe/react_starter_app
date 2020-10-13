import React, { useState, useEffect } from 'react'
import '../../Styles/Home/style.scss'
import axios from 'axios'
import { apiURL } from '../../Utils/apiURL'

import NavbarComponent from '../../Components/Navbar/Index'
import SearchComponent from '../../Components/Search/Index'
import DoctorsListComponent from '../../Components/DoctorsList/Index'
import FooterCompoent from '../../Components/Footer/Index'

import SearchPeopleImg from '../../Assets/Static/people_search.png'

const Index = () => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            alert('Geolocation is not supported');
            return;
        }

        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        // Fetch Doctors
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`${apiURL}users`)
                setDoctors(response.data)
            } catch (error) {
                if (error) console.log(error.response)
            }
        }
        fetchDoctors()
    }, [])


    return (
        <div className="home">
            <NavbarComponent />

            {/* Header Banner */}
            <div className="header py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 content d-none d-lg-block">
                            <h1>Search Doctor</h1>
                            <h5>Choose your nearest specialist.</h5>
                        </div>
                        <div className="col-12 col-lg-6 image-column text-center">
                            <img src={SearchPeopleImg} alt="..." />
                        </div>
                        <div className="col-12 col-lg-6 content d-lg-none text-center">
                            <h1>Search Doctor</h1>
                            <h5>Choose nearest doctor.</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Component */}
            <SearchComponent lat={latitude} lang={longitude} />

            {/* Nearest or Suggested Doctors */}
            <div className="suggested-doctors">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Nearest Doctors</h2>
                        </div>
                    </div>
                </div>
                <DoctorsListComponent doctors={doctors} />
            </div>


            <h1>Home</h1>
            <p>Lat: {latitude}</p>
            <p>Lang: {longitude}</p>
            <FooterCompoent />
        </div>
    );
};

export default Index;