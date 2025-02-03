import React from "react";
import './About.css'
import "bootstrap-icons/font/bootstrap-icons.css";


function About() {
    return (
        <>

            <div id="review">
                <h1 style={{ color: "white" }} >What Customers Say</h1>
                <div id="maincard">
                    <div id="ccard">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvR-jSbVVv6I-60w0vJ7yQhGwhTu7O6prSjg&s" alt="" />
                        <h3>Abhiram</h3>
                        <p>Great service! I had an amazing experience parking spot Info. Highly recommended!</p>
                    </div>
                    <div id="ccard">
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-cartoon-image-of-a-bearded-man-with-glasses-image_2876117.jpg" alt="" />
                        <h3>Sai kiran</h3>
                        <p>parking Info made my trip hassle-free! From booking to leaving, everything was well-organized.
                        </p>
                    </div>
                    <div id="ccard">
                        <img src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-600nw-542759665.jpg" alt="" />
                        <h3>michael</h3>
                        <p>Good service and friendly staff. I had a memorable vacation thanks to parking Info's recommendations.
                        </p>
                    </div>
                </div>
            </div>

            <div id="get">
                <div id="gets">
                    <h1>Get in Touch</h1>
                    <p>Contact us for any inquiries or assistance</p>
                    <p>+91600000000</p>
                    <p>Example@gmail.com</p>
                    <p>Hyderabad,india</p>
                </div>
                <form id="getss">
                    <input type="text" name="" id="get1" placeholder="Name" />
                    <input type="text" name="" id="get2" placeholder="Mobile" />
                    <input type="email" placeholder="Email" id="get3" />
                    <textarea name="" id="get4" placeholder="Message" ></textarea>
                    <button id="get5">Send Me</button>
                </form>

            </div>


            <footer id="footer">
                <div id="footers">
                    <h3>parking info</h3>
                    <p>Welcome to parking Info, your go-to source for all your parking  needs. Whether you're looking for
                        exciting vacation packages, reliable travel services, or helpful parking locators, we've got you covered.
                        Plan your next adventure with us!</p>
                    <div id="footeri">
                        <span><i className="bi bi-instagram"></i>Instagram</span>
                        <span><i className="bi bi-facebook"></i>Facebook</span>
                        <span><i className="bi bi-twitter"></i>Twitter</span>
                        <span><i className="bi bi-youtube"></i>Youtube</span>
                    </div>

                </div>
                <div id="footers">
                    <h3>Usefull links</h3>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Book</p>
                    <p>Contact Us</p>
                </div>
                <div id="footers">
                    <h3>Other Links</h3>
                    <p>terms & Conditions</p>
                    <p>Privacy policy</p>
                </div>
            </footer>


        </>


    )
}
export default About;