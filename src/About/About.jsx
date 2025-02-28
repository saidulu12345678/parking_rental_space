import React from "react";
import './About.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function About() {
    return (
        <>
            {/* Review Section with Swiper Carousel */}
            <div id="review">
                <h1 style={{ color: "Black" }}>What Customers Say</h1>
                <Swiper
                    spaceBetween={10} // Reduced space between slides
                    centeredSlides={true}
                    slidesPerView={1} // Show one slide at a time
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div id="ccard">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvR-jSbVVv6I-60w0vJ7yQhGwhTu7O6prSjg&s" alt="Abhiram" />
                            <h3>Abhiram</h3>
                            <p>Great service! I had an amazing experience with parking spot Info. Highly recommended!</p>
                        </div>
                    </SwiperSlide>
                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div id="ccard">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-cartoon-image-of-a-bearded-man-with-glasses-image_2876117.jpg" alt="Sai Kiran" />
                            <h3>Sai Kiran</h3>
                            <p>I love how easy it is to find a spot wherever I go. It’s a reliable service that saves me time and hassle</p>
                        </div>
                    </SwiperSlide>
                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div id="ccard">
                            <img src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-600nw-542759665.jpg" alt="Michael" />
                            <h3>Michael</h3>
                            <p>The parking spots are conveniently located and always clean. I never have to worry about parking when I use this service</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="ccard">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPIQzSJ5NXrt8Q-wIIWRFrs7jfmwyEeaRPg&s" alt="Michael" />
                            <h3>Vicky</h3>
                            <p>It’s great to have peace of mind knowing I have a guaranteed spot. The entire process is smooth from start to finish</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="ccard">
                            <img src="https://imgcdn.stablediffusionweb.com/2024/4/21/ef5c1523-2585-4e05-8a46-76391f68f5c9.jpg" alt="Michael" />
                            <h3>Srikanth</h3>
                            <p>Finding parking has never been easier! The service is dependable, and I always feel safe leaving my car</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Get in Touch Section */}
            <div id="get">
                <div id="gets">
                    <h1>Get in Touch</h1>
                    <p>Contact us for any inquiries or assistance</p>
                    <p>+91600000000</p>
                    <p>Example@gmail.com</p>
                    <p>Hyderabad, India</p>
                </div>
                <form id="getss">
                    <input type="text" name="" id="get1" placeholder="Name" />
                    <input type="text" name="" id="get2" placeholder="Mobile" />
                    <input type="email" placeholder="Email" id="get3" />
                    <textarea name="" id="get4" placeholder="Message"></textarea>
                    <button id="get5">Send Me</button>
                </form>
            </div>

            {/* Footer Section */}
            <footer id="footer">
                <div id="footers">
                    <div id="footer1">
                        <h3>Parking Info</h3>
                        <p>Welcome to Parking Info, your go-to source for all your parking needs. Whether you're looking for exciting vacation packages, reliable travel services, or helpful parking locators, we've got you covered. Plan your next adventure with us!</p>
                        <div id="footericon">
                            <span><i className="bi bi-instagram"></i></span>
                            <span><i className="bi bi-facebook"></i></span>
                            <span><i className="bi bi-twitter"></i></span>
                            <span><i className="bi bi-youtube"></i></span>
                        </div>
                    </div>
                    <div id="footer2">
                        <h3>Useful Links</h3>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Book</p>
                        <p>Contact Us</p>
                    </div>
                    <div id="footer3">
                        <h3>Other Links</h3>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default About;