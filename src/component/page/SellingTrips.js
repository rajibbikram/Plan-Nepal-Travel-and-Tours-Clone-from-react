import React from 'react'
import SellingComp from './SellingComp'

export default function SellingTrips() {


    return (
        <>
            <section className="second-sec mb-5 mt-5">
                <div className="containerr">
                    <h2 className="text-success text-uppercase fw-bold text-center mt-2 mb-2">
                        Best selling trips
                    </h2>
                    <div className="containerr py-3">
                        <ul className="nav  mb-4  ul-list" id="trekTabs" role="tablist">
                            <li className="nav-item text-light" role="presentation">
                                <button
                                    className="nav1-link active text-light pb-1 pt-1 pe-5 ps-5"
                                    id="nepal-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nepal"
                                    type="button"
                                    role="tab"
                                >
                                    NEPAL TOUR
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav1-link text-light pb-1 pt-1 pe-5 ps-5"
                                    id="trekking-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#trekking"
                                    type="button"
                                    role="tab"
                                >
                                    NEPAL TREKKING
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav1-link text-light pb-1 pt-1 pe-5 ps-5"
                                    id="adventure-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#adventure"
                                    type="button"
                                    role="tab"
                                >
                                    ADVENTURE ACTIVITIES
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav1-link text-light pb-1 pt-1 pe-5 ps-5"
                                    id="adventure-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#outbound"
                                    type="button"
                                    role="tab"
                                >
                                    OUTBOUND TOURS
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="trekTabsContent">
                            <div className="tab-pane fade show active " id="nepal" role="tabpanel">
                                <SellingComp />
                            </div>

                            {/* <div className="tab-pane fade" id="trekking" role="tabpanel">
                                <SellingComp />
                            </div>
                            <div className="tab-pane fade" id="adventure" role="tabpanel">
                                <SellingComp />
                            </div>
                            <div className="tab-pane fade" id="outbound" role="tabpanel">

                                <SellingComp />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
