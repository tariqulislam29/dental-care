import React from 'react';
import "./Appoinment.css"

const Appointment = () => {
    return (
        <div className="my-5">
            <div className="container d-flex justify-content-center py-5">
                <div className="appoinment-item  ">
                    <h1 className="appoinment-title ">
                        Working <span className="text-success">Hours</span></h1>
                    <div className="appoinment-content">
                        <p>Monday</p>
                        <p>10.00 am - 4.00 pm</p>
                    </div>
                    <div className="appoinment-content">
                        <p>Tuesday</p>
                        <p>9.00 am - 3.00 pm</p>
                    </div>
                    <div className="appoinment-content">
                        <p>Wednesday</p>
                        <p>11.00 am - 5.00 pm</p>
                    </div>
                    <div className="appoinment-content">
                        <p>Thursday</p>
                        <p>9.00 am - 3.00 pm</p>
                    </div>
                    <div className="appoinment-content">
                        <p>Friday</p>
                        <p>12.00 am - 6.00 pm</p>
                    </div>
                    <div className="appoinment-content">
                        <p>Saturday</p>
                        <p>10.00 am - 2.00 pm</p>
                    </div>
                    <div className="appoinment-content">
                        <p>Sunday</p>
                        <p>10.00 am - 2.00 pm</p>
                    </div>
                </div>

                <div className="appoinment-item  custom-bg">
                    <h1 className="appoinment-title">
                        Book an <span className="text-success">Appoinment</span>
                    </h1>
                    <div className="appoinment-form">
                        <input type="text" placeholder="Name" className="w-100 mb-2" /><br />
                        <input type="number" placeholder="Phone" className="w-100 mb-2" /><br />

                        <input type="date" className="w-100 mb-2" /><br />
                        <textarea name="" id="" className="w-100"></textarea>

                        <div className="appoinment-button mt-4 text-end">
                            <button className="bg-success text-light rounded">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;