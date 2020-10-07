import React from 'react';
import Menu from './Menu';
import Footer from './Footer';



const Contact = () => {

  return (
    <div>
      <Menu />

      <div className='main-contact'>
        <div className='contact-container'>

          <div className="contactPage">
            <h1>Contact Us</h1>
            <div className="contacts">
              <div className="contacts-card">
                <div className="contacts-card-icon">

                  <i className="far fa-map"></i>
                </div>

                <span>Address</span>
                <p><a href="https://www.google.com/maps/place/Kigali+Phones+Center+Ltd/@-1.945581,30.059201,13z/data=!4m8!1m2!2m1!1skigali+phone+center!3m4!1s0x19dca418b5e91917:0x2eb7395efbe5f85b!8m2!3d-1.9460244!4d30.0599452?hl=en-US" target="_blank"> KN 4 Ave, Kigali,centenary house 5th floor, Rwanda</a></p>
              </div>
              <div className="contacts-card">
                <div className="contacts-card-icon">

                  <i className="fa fa-envelope-open"></i>
                </div>

                <span>Email Address</span>
                <p><a href="mailto:kigaliphones@gmail.com">kigaliphones@gmail.com</a></p>
              </div>
              <div className="contacts-card">
                <div className="contacts-card-icon">
                  <i className="fa fa-mobile"></i>
                </div>

                <span>Phone</span>
                <p><a href="https://wa.me/message/SJKXVM2EKVS7E1" target="_blank" title="Contact Us">+250 727 311 429</a></p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="form">
              <form method="POST" action="https://formspree.io/kigaliphones@gmail.com" className="contact-form">
                <div className="title">
                  <h1>Get In Touch</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius
                  nunc
                  id
            varius nunc</p>
                </div>
                <div className="input-fields">
                  <input type="text" className="input" placeholder="Name" />
                  <input type="text" className="input" placeholder="Email Address" /> <br />
                  <input type="text" className="input" placeholder="Phone" />
                  <input type="text" className="input" placeholder="Subject" />
                </div>
                <div className="msg">
                  <textarea placeholder="Message"></textarea>
                  <div className="btn">
                    <button>Send</button>
                  </div>
                </div>
              </form>
            </div>
            {/* .googleMap */}
            <div className="googleMap">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe id="gmap_canvas"
                    src="https://maps.google.com/maps?q=kigali%20phone%20center&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                  </iframe>
                  {/* <a href="https://thevpndeal.com/nordvpn-coupon/">nordvpn coupon</a>  */}
                </div>

              </div>
            </div>
            {/* </div> */}

          </div>
        </div>


      </div>
      <Footer />
    </div>


  )
}

export default Contact
