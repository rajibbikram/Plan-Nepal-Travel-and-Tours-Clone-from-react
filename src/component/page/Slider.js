import React from 'react'
import SliderComp from './sliderComp'

export default function Slider() {
    return (
        <div
            id="hero-carousel"
            className="slid_div carousel slide"
            data-bs-ride="carousel"
        >
            <div className="slid_div_div carousel-inner">
              <SliderComp />
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#hero-carousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#hero-carousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            <div className="card-item">
                <div className="search text-uppercase p-3 ps-4 pe-4 bg-success text-light">
                    Trip Search
                </div>
                <div
                    className="btom bg-white d-flex p-2
      pt-2 pb-2 ps-4 gap-3 mb-0"
                >
                    <div className="mb-3">
                        <select className="form-select" id="seasonSelect">
                            <option selected="">Seasons</option>
                            <option value="all"> All Year</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="spring">Spring</option>
                            <option value="winter">Winter</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select className="form-select" id="seasonSelect">
                            <option selected="">Seasons</option>
                            <option value="all">All Year</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="spring">Spring</option>
                            <option value="winter">Winter</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select className="form-select" id="seasonSelect">
                            <option selected="">Seasons</option>
                            <option value="all">All Year</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="spring">Spring</option>
                            <option value="winter">Winter</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select className="form-select " id="seasonSelect">
                            <option selected="">Seasons</option>
                            <option value="all">All Year</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="spring">Spring</option>
                            <option value="winter">Winter</option>
                        </select>
                    </div>
                    <button className="btn_search  p-1 ps-5 pe-5  bg-warning  text-light">
                        Search
                    </button>
                </div>
            </div>
        </div>

    )
}
