import React, { useState } from 'react'
import Icon from 'react-icons-kit'
import 'react-calendar/dist/Calendar.css'
import { ic_clear } from 'react-icons-kit/md'
import '../../Styles/Account/Doctor/Modal/ManageSchedule/style.scss'


const ManageScheduleModal = ({ show, hidemodal }) => {

    if (show === true) {
        return (
            <div className="manage-schedule-modal">
                <div className="backdrop">
                    <div className="custom-modal-dialog">
                        <div className="card border-0 shadow">
                            <div className="card-header bg-white p-3">
                                <div className="d-flex">
                                    <div><h4>Manage Schedule</h4></div>
                                    <div className="ml-auto">
                                        <button
                                            type="button"
                                            className="btn btn-light rounded-circle shadow-none"
                                            onClick={hidemodal}
                                        >
                                            <Icon icon={ic_clear} size={25} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <h6>Patient Information</h6>
                                        <table className="table table-sm table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>Name:</p></td>
                                                    <td><p>abdullah al mamun</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>age:</p></td>
                                                    <td><p>24 yrs</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>weight:</p></td>
                                                    <td><p>60 kg</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>height:</p></td>
                                                    <td><p>6 feet</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>BP:</p></td>
                                                    <td><p>80/100</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>Deases:</p></td>
                                                    <td><p>fever</p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <h6>Set Schedule</h6>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ManageScheduleModal;