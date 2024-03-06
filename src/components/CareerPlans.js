import React, { useEffect } from 'react';

function CareerPlans({ onPageChange, currentPage }) {
    useEffect(() => {
        console.log("Current Page:", currentPage);
    }, [currentPage]);

    return (
        <div className="form">
            <div className="progressbar"></div>
            <div class="formTitle">
                <h1>Part 3: Career plans & prior know how</h1>
            </div>
            <div className="formContainer">
                <div className="body">
                    {currentPage === 16 && (
                        <div className="radio-container">
                            <div className="radioLabel">Which career track are you interested in pursuing?</div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="yesfulltime" name="employmentstatus" defaultValue="Yes, full-time" />
                                        <label htmlFor="yesfulltime">Cloud Computing</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="yesparttime" name="employmentstatus" defaultValue="Yes, part-time" />
                                        <label htmlFor="yesparttime">Analytics & AI</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="yesminijob" name="employmentstatus" defaultValue="Yes, mini-job" />
                                        <label htmlFor="yesminijob">I am not sure</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                    {currentPage === 17 && (
                        <div className="radio-container">
                            <div className="radioLabel">Please tell us  how well the following statements describe you</div>
                            <hr />
                            {/*  <div className="row">
                                <div className="col-md-12">
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="workexp-no" name="workexperience" value="No" />
                                        <label htmlFor="workexp-no">No prior work experience</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="workexp-notger" name="workexperience" value="Yes, but not in Germany" />
                                        <label htmlFor="workexp-notger">Yes, but not in Germany</label>
                                    </div>

                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="workexp-oneyger" name="workexperience" value="Yes, less than one year in Germany" />
                                        <label htmlFor="workexp-oneyger">Yes, less than one year in Germany</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="workexp-moreoneyger" name="workexperience" value="Yes, more than one year in Germany" />
                                        <label htmlFor="workexp-moreoneyger">Yes, more than one year in Germany</label>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    )}
                    {/*  {currentPage === 18 && (
                        <div className="input-container">
                            <input type="text" className="input-field" placeholder="" />
                            <div className="input-placeholder">What jobs have you worked in so far? </div>
                        </div>
                    )}
                    {currentPage === 19 && (
                        <div className="radio-container">
                            <div className="radioLabel">What is your highest degree (professional / academic)?</div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="degree-apprenticeship" name="degree" value="Apprenticeship / Vocational Diploma" />
                                        <label htmlFor="degree-apprenticeship">Apprenticeship / Vocational Diploma</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="degree-bachelor" name="degree" value="Bachelor or equivalent" />
                                        <label htmlFor="degree-bachelor">Bachelor or equivalent</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="degree-master" name="degree" value="Master or equivalent" />
                                        <label htmlFor="degree-master">Master or equivalent (e.g. Meister berufsbezogen)</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="degree-phd" name="degree" value="PhD or equivalent" />
                                        <label htmlFor="degree-phd">PhD or equivalent</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="degree-nodegree" name="degree" value="No Degree" />
                                        <label htmlFor="degree-nodegree">No Degree</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-md-12">
                                    <div className="input-container">
                                        <input type="text" className="input-field" placeholder="" />
                                        <div className="input-placeholder">If other, please specify:</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                    {currentPage === 20 && (
                        <div className="radio-container">
                            <div className="radioLabel">Did you already request for a Bildungsgutschein?</div>
                            <div className="row">
                                <hr />
                                <div className="col-md-12">
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="bg-no-appointment" name="bgRequest" value="No" />
                                        <label htmlFor="bg-no-appointment">No, I did not have my appointment</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="bg-no-discussion" name="bgRequest" value="Yes, but not in Germany" />
                                        <label htmlFor="bg-no-discussion">I did have my appointment, but we did not speak about Bildungsgutschein</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="bg-request-pending" name="bgRequest" value="Yes, but not in Germany" />
                                        <label htmlFor="bg-request-pending">Yes, my service agent is willing to give me a Bildungsgutschein</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="bg-requested" name="bgRequest" value="Yes, but not in Germany" />
                                        <label htmlFor="bg-requested">Yes, I already have a Bildungsgutschein</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentPage === 21 && (
                        <div className="radio-container">
                            <div className="radioLabel">Which government body is in charge for your case?</div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="agentur-fur-arbeit" name="governmentBody" value="Agentur für Arbeit" />
                                        <label htmlFor="agentur-fur-arbeit">Agentur für Arbeit</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="job-center" name="governmentBody" value="Job Center" />
                                        <label htmlFor="job-center">Job Center</label>
                                    </div>
                                    <div className="radio-option">
                                        <input type="radio" className='radio' id="unknown-body" name="governmentBody" value="I don't know" />
                                        <label htmlFor="unknown-body">I don't know</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} */}
                </div>

            </div>
        </div>
    );
}

export default CareerPlans;
