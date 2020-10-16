import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../Styles/Account/Doctor/SideMenu/style.scss'
import { Icon } from 'react-icons-kit'
import {
    ic_home,
    ic_apps,
    ic_people,
    ic_lock
} from 'react-icons-kit/md'

import ProfileImg from '../../Assets/doctor.jpg'
import { ic_edit } from 'react-icons-kit/md'

const SideMenu = () => {

    return (
        <div className="side-menu">

            {/* Header */}
            <div className="header">
                <div className="d-flex">
                    <div className="img-box rounded-circle">
                        <img src={ProfileImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="content">
                        <p>mamun</p>
                        <small>MBBS</small>
                    </div>
                    <div className="ml-auto">
                        <Link
                            to="/"
                            type="button"
                            className="btn btn-light rounded-circle shadow-none"
                        >
                            <Icon icon={ic_edit} size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="body">
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/">
                    <Icon icon={ic_home} size={20} />
                    <span>home</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/doctor/">
                    <Icon icon={ic_apps} size={20} />
                    <span>dashboard</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/doctor/requests">
                    <Icon icon={ic_people} size={20} />
                    <span>patient requests</span>
                </NavLink>

                <button
                    type="button"
                    className="btn btn-block shadow-none"
                >
                    <Icon icon={ic_lock} size={20} />
                    <span>logout</span>
                </button>
            </div>

        </div>
    );
};

export default SideMenu;