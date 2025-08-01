import React from 'react'

export default function Greate() {


    const user = [
        "Nepal Family Holiday",
        "Nepal Vacation Tour",
        "Sunrise/Sunset Tour",
        "Chitwan Safari Tour",
        "Kathmandu Valley Trek",
        "Bhutan Tour Package",
        "Tibet Tour Package"
    ];
    return (
        <section class="first-sec mt-5 ">
            <div className="containerr mt-5">
                <div className="row ">
                    <div className="col-lg-9 md-6 text-justify mb-5">
                        <h2 className=" head2  p-2 text-uppercase text-light">
                            Dear Travellers, Namaste and Welcome
                        </h2>
                        <p className="mt-4">
                            Plan Nepal Travels &amp; Tours (p.) Ltd. a leading online travel agency
                            in Nepal. A Destination Management Company in Nepal, We are one of key
                            travel agents in Nepal that brings tours of "Incredible Nepal", the
                            country that has mystified the world for centuries. Your tour to Nepal,
                            a colorfully diverse country, will enchant you with the beauty of its
                            Culture, Mountain and Nature. These tours to Nepal will enrich you with
                            its culture, heritage, wildlife, flora &amp; fauna, folklore, festivals,
                            spirituality, philosophy and at the same time surprise you with its
                            modernity. Nepal tour &amp; travel packages also offers the welcoming
                            smile of hospitable people who make it a must experience destination.
                        </p>
                        <div className="text-end">
                            <button className="btn p-2 ps-3  pe-3 text-end">
                                {" "}
                                View More
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h2 className="head  p-2 text-uppercase text-light">
                            Featured Packages
                        </h2>
                        <ul className="list-unstyled ps-4 mt-4 ">

                            {
                                user.map((items, index) => (
                                    <li key={index}>
                                        <span><i class="fa-solid fa-arrow-right"></i>   </span><a href="/">{items}</a>
                                    </li>
                                ))
                            }


                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}
