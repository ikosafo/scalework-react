// ContactInfo.js
import React, { useEffect } from 'react';

function ContactInfo({ onPageChange, currentPage }) {
    useEffect(() => {
        console.log("Current Page:", currentPage);
    }, [currentPage]);

    return (
        <div className="form">
            <div className="progressbar"></div>
            <div class="formTitle">
                <h1>Part 1: Contact information</h1>
            </div>
            <div className="formContainer">
                <div className="body">
                    {currentPage === 3 && (
                        <div className="input-container">
                            <input type="text" className="input-field" placeholder="" />
                            <div className="input-placeholder">Name / Surname</div>
                        </div>
                    )}
                    {currentPage === 4 && (
                        <div className="input-container">
                            <input type="text" className="input-field" placeholder="" />
                            <div className="input-placeholder">Email Address</div>
                        </div>
                    )}
                    {currentPage === 5 && (
                        <div className="input-container">
                            <input type="text" className="input-field" placeholder="" />
                            <div className="input-placeholder">Mobile phone number</div>
                        </div>
                    )}
                    {currentPage === 6 && (
                        <div className="input-container">
                            <input type="text" className="input-field" placeholder="" />
                            <div className="input-placeholder">Zip code</div>
                        </div>
                    )}
                    {currentPage === 7 && (
                        <div className="input-container">
                            <input type="text" className="input-field" placeholder="" />
                            <div className="input-placeholder">City of Residence</div>
                        </div>
                    )}
                </div>
                {/*  <div className="footer" style={{ justifyContent: 'space-between', display: 'flex' }}>
                    {currentPage > 1 && (
                        <div className="btn btn-one left" onClick={() => onPageChange(currentPage - 1)}>
                            <span>Previous</span>
                        </div>
                    )}
                    <div className="btn btn-one right" onClick={() => onPageChange(currentPage + 1)}>
                        <span>{currentPage === 5 ? 'Submit' : 'Next'}</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ContactInfo;
