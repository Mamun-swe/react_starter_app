import React, { useState } from 'react'
import '../../../Styles/Account/Doctor/master.scss'
import { Switch, Route } from 'react-router-dom'

import SideMenuComponent from '../../../Components/Doctor/SideMenu'
import DashboardIndex from './Dashboard/Index'
import RequestsIndex from './Requests/Index'
import Icon from 'react-icons-kit'
import { ic_dehaze } from 'react-icons-kit/md'


const Master = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="master">
            {/* Mobile Navbar */}
            <div className="mobile-navbar d-lg-none p-3">
                <div className="d-flex">
                    <div><p>mamun</p></div>
                    <div className="ml-auto">
                        <button
                            type="button"
                            className="btn btn-light rounded-circle shadow-none"
                            onClick={() => setShow(true)}
                        >
                            <Icon icon={ic_dehaze} size={25} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-flex">

                {/* Sidebar */}
                <div className="sidebar">
                    <div
                        className={show ? "backdrop open-backdrop" : "backdrop"}
                        onClick={() => setShow(false)}
                    ></div>
                    <div className={show ? "main-sidebar open-main-sidebar" : "main-sidebar"}>
                        <SideMenuComponent />
                    </div>
                </div>

                {/* Main */}
                <div className="main flex-fill">
                    <Switch>
                        <Route exact path="/doctor/" component={DashboardIndex} />
                        <Route exact path="/doctor/requests" component={RequestsIndex} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Master;