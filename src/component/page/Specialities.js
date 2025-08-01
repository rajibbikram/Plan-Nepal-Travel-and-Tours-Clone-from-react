import React from 'react'

export default function Specialities() {
    const Specialities = [
        {
            id: 1,
            title: "Tour in NEPAL",
            img: "https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636"
        },
        {
            id: 2,
            title: "Trekking in Nepal",
            img: "https://www.plannepal.com/assets/img/our-specialities/trekking-banner-special.jpg?ver=1465419556"
        },
        {
            id: 3,
            title: "flight booking",
            img: "https://www.plannepal.com/assets/img/our-specialities/flight-book.jpg?ver=1465419604"
        },
    ]

    return (
        <>
            <section className="last-sec">
                <div className="containerr border-top border-dark mt-3 pt-2">
                    <h2 className="text-success text-uppercase fw-bold text-center mt-2 mb-2">Our Specialities</h2>
                    <div className="d-flex  justify-content-between mt-5 mb-5">

                        {
                            Specialities.map((items, index) => (

                                <div className="ce-card" key={index}>
                                    <img src={items.img} alt="img" />
                                    <div className="tour  d-flex  pt-3 pe-5 pb-3 ps-5 text-light">
                                        <div className="tour-title text-uppercase ">{items.title}</div>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
