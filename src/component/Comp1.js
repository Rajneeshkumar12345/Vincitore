import React from "react";
import "./Comp1.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "../img/Group 1.png";
import img1 from "../img/Limelight.png";
import img2 from "../img/Group 8.png";
import img3 from "../img/Rectangle 39.png";
import img4 from "../img/Rectangle 40.png";
import img5 from "../img/Services.png";
import img6 from "../img/Projects.png";
import img14 from "../img/Rectangle 14.png";
import img15 from "../img/Rectangle 15.png";
import img16 from "../img/Rectangle 16.png";
import img17 from "../img/Rectangle 17.png";
import Subtract from "../img/Subtract.png";
import Subtract1 from "../img/Subtract (1).png";
import Clients from "../img/Clients.png";
import bk from "../img/bk.png";
import Comp2 from "./Comp2";

function Comp1() {
  return (
    <>
      <div className="Main">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              <img src={img} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span class="navbar-toggler-icon"></span> */}
              <GiHamburgerMenu className="text-white" />
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
              <form class="d-flex">
                <h6 className="text-white">Reach Us</h6>
                <HiMenuAlt3 className="text-white" />
              </form>
            </div>
          </div>
        </nav>

        <section className="sec1">
          <div className="div1">
            <h1 className="Centered">WELCOME TO</h1>
            <h1 className="Centered1">DESIGN</h1>
            <div className="Centered2">
              <img src={img1} />
            </div>
            {/* <div className="bk text-center" style={{marginTop:"10rem"}}  >
                <img src={bk}/>
            </div> */}
          </div>
        </section>

        <section className="Section2">
          <div className="Number1">
            <h1 className="t1">We are post production </h1>
            <h1 className="t2">enthusiastics from</h1>

            <p className="p1">
              Integer bibendum sit amet risus at porttitor. Nullam egestas ut
              diam eget hendrerit. Nullam tortor libero, vehicula eget ligula
              placerat, egestas porta dolor. Suspendisse vehicula varius ipsum,
              eget pellentesque magna vulputate nec. In viverra sit amet mauris
              vel placerat.
            </p>
          </div>
        </section>

        <section className="Section3" style={{ marginTop: "7rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="Explore">Explore a new</h1>
                <h1 className="Explore1">universe of </h1>
                <h1 className="Explore2">Creative services.</h1>
                <p className="text-white mt-3">
                  Integer bibendum sit amet risus at porttitor. Nullam egestas
                  ut diam eget <br></br> hendrerit. Nullam tortor libero,
                  vehicula eget ligula placerat, egestas porta <br></br> dolor.
                  Suspendisse vehicula varius ipsum, eget pellentesque magna{" "}
                  <br></br> vulputate nec. In viverra sit amet mauris vel
                  placerat.
                </p>
                <img src={img2} />
              </div>
              <div className="col-md-4">
                <div className="row text-center">
                  <div className="col-md-12 text-white">
                    <h1 className="Number156">156+</h1>
                    <p>Delivered Creative Projects</p>
                  </div>
                </div>
                <div className="row text-center" style={{ marginTop: "7rem" }}>
                  <div className="col-md-12 text-white">
                    <h1 className="Number156">100+</h1>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="about-section">
          <div class="container">
            <div class="row">
              <div class="content-column  col-md-6 col-sm-12 order-2">
                <div class="inner-column">
                  <div class="sec-title">
                    <h1 className="text-white" style={{ marginLeft: "-10rem" }}>
                      What we serve
                    </h1>
                    <img
                      src={img5}
                      height="100"
                      style={{ marginTop: "-5rem" }}
                    />
                    <h2
                      className="text-white"
                      style={{ marginLeft: "-.5rem", marginTop: "3rem" }}
                    >
                      TV Commercial Ads
                    </h2>
                    <p className="text-white" style={{ marginTop: "-.5rem" }}>
                      We design and post produce TV commercial ads for <br></br>{" "}
                      various corporate entities, with a team of experienced{" "}
                      <br></br> designers and editors.
                    </p>

                    <h2
                      className="text-white "
                      style={{ marginLeft: "-.5rem", marginTop: "3rem" }}
                    >
                      Documentaries & Short Films
                    </h2>
                    <p className="text-white" style={{ marginTop: "-.5rem" }}>
                      Shooting and editing large scale as well as small scale{" "}
                      <br></br>
                      Doumentaries & Short Films.
                    </p>

                    <h2
                      className="text-white"
                      style={{ marginLeft: "-.5rem", marginTop: "3rem" }}
                    >
                      Corporate Video
                    </h2>
                    <p className="text-white" style={{ marginTop: "-.5rem" }}>
                      Shooting and editing of professional Corporate Videos for{" "}
                      <br></br>
                      various corporate entities of both macro and micro scale.
                    </p>

                    <h2
                      className="text-white"
                      style={{ marginLeft: "-.5rem", marginTop: "3rem" }}
                    >
                      2D Animations & Motion Graphics
                    </h2>
                    <p className="text-white" style={{ marginTop: "-.5rem" }}>
                      Developing and designing of 2D Animations & Motion{" "}
                      <br></br>
                      Graphics. Creation of smooth motion graphic videos for{" "}
                      <br></br>
                      various corporate entities.
                    </p>
                  </div>
                </div>
              </div>
              <div class="image-column  col-md-6 col-sm-12">
                <div class="inner-column wow fadeInLeft">
                  <figure class="image-1">
                    <a href="" class="lightbox-image" data-fancybox="images">
                      <img src={img3} className="img-fluid" alt="" />
                    </a>
                  </figure>
                  <figure class="image-2">
                    <a href="" class="lightbox-image" data-fancybox="images">
                      <img src={img4} alt="" />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="circle10">
        <img src={Subtract1} className="img-fluid"/>
       </div>
       
 
        <section className="Section5">
          <div className="container">
            <h1 className="text-white">Our Latest</h1>
            <img
              src={img6}
              height="80"
              style={{ marginTop: "-2rem", marginLeft: "-5px" }}
            />
            <p className="text-white mt-3">
              Integer bibendum sit amet risus at porttitor. Nullam egestas ut
              diam eget <br></br> hendrerit. Nullam tortor libero, vehicula eget
              ligula placerat, egestas porta <br></br> dolor. Suspendisse
              vehicula varius ipsum.
            </p>

            <div className="Image mt-5">
              <div className="row">
                <div className="col-md-4">
                  <img src={img14} className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <img src={img15} className="img-fluid" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <img src={img17} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                      <img src={img16} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Section6 mt-5">
            <div className="container">
                <div className="our_main mb-5">
                <h1 className="Our">Our</h1>
                <img src={Clients} height="80" style={{marginTop:"-2.2rem"}}/>
                </div>
                <Comp2/>
            </div>
           
        </section>


        <div className="circle10">
        <img src={Subtract} className="img-fluid"/>
       </div>
        <footer class="footer-06">
          <div class="container">
            <div class="row align-items-center align-items-stretch mb-5">
              <div class="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center">
                <div class="w-100">
                  <h3 class="heading-section text-white">Subscribe Newsletter</h3>
                  <span class="subheading text-white">
                    Subscribe News Letter Email Address Subscribe Subscribe our
                    Newsletter to have Quick updates from Deisgn LimeLite
                  </span>
                </div>
              </div>
              <div class="col-md-8 py-4 py-md-5 d-flex align-items-center pl-md-5 aside-stretch-right">
                <form action="#" class="subscribe-form w-100">
                  <div class="form-group d-flex">
                    <input
                      type="text"
                      class="form-control rounded-left"
                      placeholder="Enter email address"
                    />
                    <button type="submit" class="form-control submit">
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
 
                <div class="row text-white">
                  <div class="col-md-3 mb-md-0 mb-4">
                    <h2 class="footer-heading">Quick Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          About Us 
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted ">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Our Services
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Our Clients
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Latest Blogs
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 mb-md-0 mb-4">
                    <h2 class="footer-heading">Helpful Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Privay Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 mb-md-0 mb-4">
                    <h2 class="footer-heading">Social Links</h2>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Linked In
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Skype
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 mb-md-0 mb-4">
                    <h2 class="footer-heading">Guidelines</h2>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Logo Guide
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Design Guide
                        </a>
                      </li>
                      <li>
                        <a href="#" class="py-1 d-block text-muted">
                          <span class="ion-ios-checkmark-circle-outline mr-2"></span>
                          Format Guides
                        </a>
                      </li>
                    </ul>
                  </div>    
                </div>
                <hr></hr>
                <div className="row mt-5">
                    <div className="col-md-3">
                    <img src={img} />   
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3 text-white">
                        <p>+91 234 567 8910|</p>
                    </div>
                    <div className="col-md-3 text-white">
                        <p>info@designlimelight.com</p>
                    </div>
                </div>
                <div className="para mt-3" style={{color:"#7e8185"}}>
                    <p>Integer bibendum sit amet risus at porttitor. Nullam egestas ut diam eget hendrerit. Nullam tortor libero, vehicula eget ligula placerat, egestas porta dolor. Suspendisse vehicula varius ipsum, eget pellentesque magna vulputate nec. In viverra sit amet mauris vel placerat. Integer consectetur magna nunc, in dapibus massa ornare ac. Maecenas mauris nisi, auctor quis ligula a, tempus convallis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum arcu diam, non pharetra risus porta sit amet. Aliquam rutrum enim ante,</p>
                </div>
            
            <div className="last mb-3" style={{color:"#7e8185"}}>
                <p>© 2006 - 2022 Design LimeLight®, All rights reserved.</p>
            </div>
  
    
          </div>
        </footer>
      </div>
    </>
  );
}

export default Comp1;
