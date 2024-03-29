import React from 'react';
import './about.css';
import Will from "../../images/Wil.png";
import Sharon from "../../images/Sharon.png";
import Jeff from "../../images/Jeff.png";
import Tree2 from "../../images/tree2.png";
import Matthew2 from "../../images/Matt.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <section id="about" className="about text-center">
            <header class="header sub_header">
                <h1 class="header_title">Meet the Yewnity Team</h1>
            </header>
            <div className="row">
                <section class="col-lg-3 col-md-6 col-sm-12 profile jefferey my-5" >
                    <div className="circle">
                        <img className="profile-img rounded-circle hoverable " src={Jeff} alt="jeffrey patterson thumbmmail"></img>
                    </div>
                    <h3 className="my-5">Jeffrey W. Patterson</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <button class="social-list__item0 rounded-pill">
                                <a class="social-list__link" href="https://github.com/jpatterson933">
                                    <i className="fab fa-github"></i>
                                </a>
                            </button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <button class="social-list__item2 rounded-pill">
                                <a class="social-list__link" id="email1" href="mailto:jpatterson933@ucla.edu">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <button class="social-list__item1 rounded-pill">
                                <a class="social-list__link" href="https://www.linkedin.com/in/jefferywpatterson/">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <button class="social-list__item3 rounded-pill">
                                <a class="social-list__link" href="https://facebook.com/">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </section>
                <section class="col-lg-3 col-md-6 col-sm-12 profile my-5">
                    <div class="circle2">
                        <img class="profile-img rounded-circle hoverable" src={Matthew2} alt="matthew john thumbnail"></img>
                    </div>
                    <h3 className="my-5">Matthew A. John</h3>
                    <div class="row">
                        <div class="col-md-3">
                            <button class="social-list__item0 rounded-pill"><a class="social-list__link" href="https://github.com/MattJ900">
                                <i class="fab fa-github"></i>
                            </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item2 rounded-pill">
                                <a class="social-list__link"
                                    id="email2" href="mailto:matthewj.dev">
                                    <i class="fas fa-envelope"></i>
                                </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item1 rounded-pill"><a class="social-list__link" href="https://github.com/MattJ900">
                                <i class="fab fa-linkedin"></i>
                            </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item3 rounded-pill"><a class="social-list__link" href="https://github.com/MattJ900">
                                <i class="fab fa-facebook "></i>
                            </a></button>
                        </div>
                    </div>
                </section>
                <section class="col-lg-3 col-md-6 col-sm-12 profile Sharon my-5">
                    <div class="circle3">
                        <img class="profile-img rounded-circle hoverable" src={Sharon} alt="sharon martinez thumbnail"></img>
                    </div>
                    <h3 className="my-5">Sharon Martinez</h3>
                    <div class="row">
                        <div class="col-md-3">
                            <button class="social-list__item0 rounded-pill"><a class="social-list__link" href="https://github.com/Sharon1106/">
                                <i class="fab fa-github"></i>
                            </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item2 rounded-pill">
                                <a class="social-list__link"
                                    id="email3" href="mailto:martinezsharonr@gmail.com">
                                    <i class="fas fa-envelope"></i>
                                </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item1 rounded-pill"><a class="social-list__link" href="https://www.linkedin.com/in/sharon-martinez-835723205/">
                                <i class="fab fa-linkedin"></i>
                            </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item3 rounded-pill"><a class="social-list__link" href="https://facebook.com/">
                                <i class="fab fa-facebook"></i>
                            </a></button>
                        </div>
                    </div>
                </section>
                <section class="col-lg-3 col-md-6 col-sm-12 profile William my-5">
                    <div class="circle4">
                        <img class="profile-img rounded-circle hoverable" src={Will} alt="william thorne thumbnail"></img>
                    </div>
                    <h3 className="my-5">William Thorne</h3>
                    <div class="row">
                        <div class="col-md-3">
                            <button class="social-list__item0 rounded-pill"><a class="social-list__link" href="https://github.com/IdFightGandhi">
                                <i class="fab fa-github"></i>
                            </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item2 rounded-pill">
                                <a class="social-list__link"
                                    id="email4" href="mailto:williamcthorne@gmail.com">
                                    <i class="fas fa-envelope"></i>
                                </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item1 rounded-pill"><a class="social-list__link" href="https://www.linkedin.com/">
                                <i class="fab fa-linkedin"></i>
                            </a></button>
                        </div>
                        <div class="col-md-3">
                            <button class="social-list__item3 rounded-pill "><a class="social-list__link" href="https://facebook.com/">
                                <i class="fab fa-facebook"></i>
                            </a></button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="row">
                <section className="col-lg-4 col-md-6 col-sm-12">
                    <img className="branches" src={Tree2} alt="sharon martinez thumbnail"></img>
                </section>
                <div className="col-lg-8 col-md-6 col-sm-12 " id="description">
                    <strong><h1 className="my-5"> Our Story</h1>
                        <h4>Written by the Yewnity team</h4>
                        <p> Founded: April 2021, Yewnity deployed by UCLAx web developer rookies. As we learn more about how big an impact we have on our environment and local communities, there are many events and many causes a user can choose from.
                            Yewnity is set on giving the people an online community for their local growing environmental and social affairs. We do this by enabling our users the ability to subscribe, donate, create , and view current issues and charities in their local municipals from their PC or mobile devices.
                            <hr></hr>
                            “When we give cheerfully and accept gratefully, everyone is blessed.”
                            ― Maya Angelou</p>
                        <p>Date 04/16/2021</p></strong>
                </div>
            </div>
        </section >

    )
}

export default About;