import React from 'react'

export default function SliderComp() {

    const slider_data = [
        {
            id: 1,
            title: "Kathmandu to Lukla Flight",
            description: "Kathmandu to Lukla Flight through regular airlines flight or Helicopter Flight.",
            img: "https://www.plannepal.com/uploads/2022/12/standard/ba71d2935e48626811eaa7f7c84f389c.jpg?ver=1672155708"
        },
        {
            id: 2,
            title: "Nepal Holiday, Nepal Tour Package",
            description: "Tour in Nepal is the best choice for your vacation along with your family, alone or colleagues. Complete list of Nepal Tour packages with best deals.",
            img: "https://www.plannepal.com/uploads/2017/04/standard/f029baa01b5d1cb2ac06ea3743db4d58.jpg?ver=1493221716"
        },
        {
            id: 3,
            title: "Everest Base Camp Helicopter Tour with Landing",
            description: "Everest Base Camp Helicopter Tour with Multiple Landing is one of the exciting day trip to highest mountain. Book Your Everest Helicopter Tour at Best Price.",
            img: "https://www.plannepal.com/uploads/2016/12/standard/39ef6e51859b4ddc54f8a8bd5621882f.jpg?ver=1481983050"
        },
        {
            id: 4,
            title: "Air Tickets - International & Domestic Flights",
            description: "Deals on both International and Domestic flight ticket. We assure you for the quality service on best deal.",
            img: "https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074"
        },
        {
            id: 5,
            title: "Trekking in Nepal Land of Himalayas",
            description: "The Land of Himalayas offers you thrilling, inspiring trekking routes and mountaineering packages all over Nepal.",
            img: "https://www.plannepal.com/uploads/2016/06/standard/1662a6273baad376ae715b499c4f3e99.jpg?ver=1464949812"
        }
    ]

    return (
        <>
            {slider_data.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""} c-item`}
                >
                    <img
                        src={item.img}
                        className="d-block w-100 c-img"
                        alt={`slide ${index + 1}`}
                    />
                    <div className="slide-text">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button className="button11">View More</button>
                    </div>
                </div>
            ))}
        </>

    )
}
