import React, { Component } from "react";
import Slider from "react-slick";
import reactLogo from "../assets/react-logo.png"
import bootstrapLogo from "../assets/bootstrap-logo.png"
import daisyLogo from "../assets/daisy-logo.png"
import githubLogo from "../assets/github-logo.png"
import tailwindLogo from "../assets/tailwind-logo.png"

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "align-center text-center",
            centerMode: true,
            infinite: true,
            centerPadding: "250px",
            slidesToShow: 3,
            speed: 500,
        };
        return (
            <div data-aos="fade-left" className="text-white container px-20 py-20">
            <div>
                <h2 className="my-10 text-4xl text-center">Technology Skills</h2>
                <Slider {...settings}>
                    <div >
                            <img className="rounded-full p-5" src={reactLogo }/>
                    </div>
                    <div>
                            <img className="rounded-full p-5" src={bootstrapLogo} />
                    </div>
                    <div>
                            <img className="rounded-full p-5" src={daisyLogo} />
                    </div>
                    <div>
                            <img className="rounded-full p-5" src={tailwindLogo} />
                    </div>
                    <div>
                            <img className="rounded-full p-5" src={githubLogo} />
                    </div>
                </Slider>
            </div>
            </div>
        );
    }
}