// Form.js
import React, { useState } from 'react';
import IntroText from './IntroText';
import ContactInfoText from './ContactInfoText';
import ContactInfo from './ContactInfo';
import CurrentSituationText from './CurrentSituationText';
import CurrentSituation from './CurrentSituation';
import CareerPlansText from './CareerPlansText';
import CareerPlans from './CareerPlans';

function Form() {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    const handleContactInfoPageChange = (nextPageNumber) => {
        setPage(nextPageNumber);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="form">
                    <div className="progressbar"></div>
                    <div className="form-container">
                        {page === 1 && <IntroText onPageChange={nextPage} />}
                        {page === 2 && <ContactInfoText onPageChange={nextPage} />}
                        {page > 2 && page < 8 && <ContactInfo onPageChange={handleContactInfoPageChange} currentPage={page} />}
                        {page === 8 && <CurrentSituationText onPageChange={handleContactInfoPageChange} currentPage={page} />}
                        {page > 8 && page < 15 && <CurrentSituation onPageChange={handleContactInfoPageChange} currentPage={page} />}
                        {page === 15 && <CareerPlansText onPageChange={handleContactInfoPageChange} currentPage={page} />}
                        {page > 15 && <CareerPlans onPageChange={handleContactInfoPageChange} currentPage={page} />}
                    </div>
                    <div className="footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* Conditional rendering for previous button */}
                        {page > 2 && (
                            <div className="btn btn-one left" onClick={prevPage}>
                                <span>Previous</span>
                            </div>
                        )}
                        {/* Conditional rendering for next/proceed button */}
                        {page < 20 && (
                            <div className="btn btn-one right" onClick={nextPage}>
                                <span>{page === 1 || page === 2 || page === 8 || page === 15 ? 'Proceed' : 'Next'}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
