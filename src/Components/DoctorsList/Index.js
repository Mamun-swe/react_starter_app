import React from 'react'
import '../../Styles/DoctorsList/style.scss'

import DoctorImg from '../../Assets/doctor.jpg'

const Index = ({ doctors }) => {
    return (
        <div className="doctors-list-component">
            <div className="container">
                <div className="row">

                    {doctors && doctors.map((doctor, i) =>
                        <div className="col-6 col-md-4 col-lg-3" key={i}>
                            <div className="card doctor-card">
                                <div className="card-body">
                                    <div className="img-box rounded-circle">
                                        <img src={DoctorImg} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="content">
                                        <h6>{doctor.username} <span>(medicine)</span></h6>
                                        <p>MBBS, DMC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Index;