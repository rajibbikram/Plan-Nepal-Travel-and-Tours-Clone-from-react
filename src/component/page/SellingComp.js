import React from 'react'

export default function SellingComp() {


    const topiCard = [
        {
            id: 1,
            img: "https://www.plannepal.com/uploads/2016/06/thumb/2313845d75957a1459be96c335822d0f.jpg?ver=1464857285",
            dis: ["NEPAL FAMILY TOUR", "10 DAYS"]
        },
        {
            id: 2,
            img: "https://www.plannepal.com/uploads/2017/04/thumb/0d11d5f96cd2d9cec72fd589a63deb15.jpg?ver=1493264796",
            dis: ["NEPAL FAMILY TOUR", "10 DAYS"]
        },
        {
            id: 3,
            img: "https://www.plannepal.com/uploads/2016/06/thumb/46f253292afc8b66132c97011e209f31.jpg?ver=1464951312",
            dis: ["NEPAL FAMILY TOUR", "10 DAYS"]
        },
        {
            id: 4,
            img: "https://www.plannepal.com/uploads/2017/04/thumb/94a60e15344f2b4e7125ebea2db2ae99.jpg?ver=1493134595",
            dis: ["NEPAL FAMILY TOUR", "10 DAYS"]
        },
        {
            id: 5,
            img: "https://www.plannepal.com/uploads/2020/07/thumb/42168985d711c6fb04d32c02f3c40500.jpg?ver=1595993929",
            dis: ["NEPAL FAMILY TOUR", "10 DAYS"]
        },
        {
            id: 6,
            img: "https://www.plannepal.com/uploads/2017/07/thumb/88d4333467901c81ae60df7c83fae9fb.jpg?ver=1499950863",
            dis: ["NEPAL FAMILY TOUR", "10 DAYS"]
        },
    ];

    return (
        <>
            {
                topiCard.map((items, index) => (
                    <div className="row">
                        <div className="cea col-lg-4">
                            <div className="trips-card">
                                <img src={items.img} alt="Nepal Tour" />
                                <div className="tour  d-flex justify-content-between  text-light">
                                    <div className="tour-title pt-2 pb-2">{items.dis[0]}</div>
                                    <div className="tour-days  pt-2 pb-2">{items.dis[1]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </>
    )
}
