import React from 'react'

export default function GuardLast() {
    return (
        <>
            <section className="last mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 last ">
                            <div>
                                <h3 className="text-center text-success fw-bold text-uppercase mb-4">
                                    Guest Testimonials
                                </h3>
                                <div
                                    id="carouselExampleIndicators"
                                    className="carousel slide last_slid"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-indicators">
                                        <div className="carousel-indicators">
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={0}
                                                className="active"
                                                aria-current="true"
                                                aria-label="Slide 1"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={1}
                                                aria-label="Slide 2"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={2}
                                                aria-label="Slide 3"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={3}
                                                aria-label="Slide 4"
                                            />
                                        </div>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="inner_slid carousel-item active ">
                                            <div className="cont d-block text-center p-1 text-light">
                                                <p className="">
                                                    I really enjoyed my trekking with Plan Nepal Travel and
                                                    Tours. The company is very flexible and tries to fullfill
                                                    the wishes of the customers. Everything work out fine. I had
                                                    a very nice and competent guide, staff is very friendly and
                                                    the price for the tours are really decent. I definitely can
                                                    recommend booking with this Nepalese Company.
                                                </p>
                                                <h3>Claudia Fiederle-Fil</h3>
                                            </div>
                                        </div>
                                        <div className="inner_slid carousel-item">
                                            <div className="cont d-block text-center p-1 text-light">
                                                <p className="">
                                                    I really enjoyed my trekking with Plan Nepal Travel and
                                                    Tours. The company is very flexible and tries to fullfill
                                                    the wishes of the customers. Everything work out fine. I had
                                                    a very nice and competent guide, staff is very friendly and
                                                    the price for the tours are really decent. I definitely can
                                                    recommend booking with this Nepalese Company.
                                                </p>
                                                <h3>Claudia Fiederle-Fil</h3>
                                            </div>
                                        </div>
                                        <div className=" inner_slid carousel-item">
                                            <div className="cont d-block text-center p-1 text-light">
                                                <p className="">
                                                    I really enjoyed my trekking with Plan Nepal Travel and
                                                    Tours. The company is very flexible and tries to fullfill
                                                    the wishes of the customers. Everything work out fine. I had
                                                    a very nice and competent guide, staff is very friendly and
                                                    the price for the tours are really decent. I definitely can
                                                    recommend booking with this Nepalese Company.
                                                </p>
                                                <h3>Claudia Fiederle-Fil</h3>
                                            </div>
                                        </div>
                                        <div className="inner_slid carousel-item">
                                            <div className="cont d-block text-center p-1 text-light">
                                                <p className="">
                                                    I really enjoyed my trekking with Plan Nepal Travel and
                                                    Tours. The company is very flexible and tries to fullfill
                                                    the wishes of the customers. Everything work out fine. I had
                                                    a very nice and competent guide, staff is very friendly and
                                                    the price for the tours are really decent. I definitely can
                                                    recommend booking with this Nepalese Company.
                                                </p>
                                                <h3>Claudia Fiederle-Fil</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="accordion" id="planNepalAccordion">
                                <h3 className="text-center text-success fw-bold mb-4">
                                    WHY PLAN NEPAL?
                                </h3>
                                <div className="accordion-item">
                                    <button
                                        className=" d-flex pe-1 ps-1 mb-2"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                    >
                                        <div className="">12 Years of Experience </div>
                                        <i className="fa-solid fa-angle-down" />
                                    </button>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#planNepalAccordion"
                                    >
                                        <div className="accordion-body bg-white border">
                                            We have experience, knowledge for more than 12 years that will
                                            make you come back for more.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
