import React from 'react';
import logo from './Travel-website/images/logo.svg'
import logo1 from './Travel-website/images/logo1.svg'
import logo2 from './Travel-website/images/logo2.svg'
import logo3 from './Travel-website/images/logo3.svg'
import logo4 from './Travel-website/images/logo4.svg'
import play from './Travel-website/images/play.svg'
import person from './Travel-website/images/person.svg'
import air from './Travel-website/icons/airplane-engines-fill.svg'
import coin from './Travel-website/icons/cash-coin.svg'
import send from './Travel-website/icons/send-fill.svg'
import des1 from './Travel-website/icons/des1.svg'
import des2 from './Travel-website/icons/des2.svg'
import des3 from './Travel-website/icons/des3.svg'
import serve from './Travel-website/images/sever.svg'
import plane from './Travel-website/images/plane.svg'
import mike from './Travel-website/images/mike.svg'
import setting from './Travel-website/images/setting.svg'
import landmark from './Travel-website/images/travel-world-landmarks-background-blue-sky-46083021.webp'
import face from './Travel-website/icons/facebook.svg'
import meta from './Travel-website/icons/meta.svg'
import thread from './Travel-website/icons/threads-fill.svg'
import apple from './Travel-website/images/apple.svg'
import store from './Travel-website/images/playstore.svg'
function Travell() {
  return (
    <div>
      <div className='rounded-5 fs-1' style={{ backgroundColor: '' }}>
        <div className="" style={{ backgroundColor: 'whitesmoke', borderRadius: '10px' }}>
          <div className="d-flex  justify-content-around p-5">
            <div><img src={logo} style={{width:"200px"}} alt="" /></div>
            <div className="d-flex fw-bold p-5">
              <p className="px-5 py-2">Destination</p>
              <p className="px-5 py-2">Flights</p>
              <p className="px-5 py-2">Bookings</p>
              <p className="px-5 py-2">Hotels</p>
              <button className="px-5 border border-black py-1 rounded">Sign in</button>
              <p className="px-5 py-2">ENG</p>
            </div>
          </div>
          <section>
            <div className="d-flex justify-content-around">
              <div>
                <h5>Best Destinations around the world</h5>
                <h1 style={{ fontSize: '85px' }} className="fw-bold py-2">Travel, enjoy <br />
                  and live a new <br />
                  and full life</h1>
                <div>
                  <p className="py-1 lh-md">Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

                  <div className="d-flex my-3 align-items-center">
                    <div>
                      <button className="btn btn-warning px-4 ">Find out More</button>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={play} style={{ paddingTop: '20px', cursor: 'pointer', }} alt="" />
                      <p>Play game</p>
                    </div>
                  </div>
                </div>
              </div>
              <img src={person} style={{width:"1000px"}} alt="" />
            </div>
          </section>

          <section className="p-5">
            <div className="text-center">
              <p>CATEGORY</p>
              <h1>We Offer Best Services</h1>
            </div>

            <div className="d-flex justify-content-evenly text-center p-4 my-5" style={{ boxSizing: 'border-box' }}>
              <div className="p-4 lh-base border rounded-4">
                <img src={serve}  alt="" />
                <h5 className="fw-bold py-2">Calculated Weather</h5>
                <p>Built Wicket longer <br /> admire do barton vanity <br /> itself do in it.</p>
              </div>
              <div className="p-4 lh-base border rounded-4">
                <img src={plane}  alt="" />
                <h5 className="fw-bold py-2">Best Flights</h5>
                <p>Built Wicket longer <br /> admire do barton vanity <br /> itself do in it.</p>
              </div>
              <div className="p-4 lh-base border rounded-4">
                <img src={mike} alt="" />
                <h5 className="fw-bold py-2">Local Events</h5>
                <p>Built Wicket longer <br /> admire do barton vanity <br /> itself do in it.</p>
              </div>
              <div className="p-4 lh-base border rounded-4">
                <img src={setting} alt="" />
                <h5 className="fw-bold py-2">Customization</h5>
                <p>Built Wicket longer <br /> admire do barton vanity <br /> itself do in it.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="d-flex justify-content-evenly p-5">
              <div>
                <h4>Easy and Fast</h4>
                <h1 className="fw-bold py-3" style={{ fontSize: '50px' }}>Book your next trip <br />
                  in 3 easy steps</h1>
                <div>
                  <div className="d-flex" style={{ boxSizing: 'border-box' }}>
                    <img style={{ width: '50px' }} className="mx-5" src={air} alt="" />
                    <div>
                      <h5 className="fw-bold">Choose Destination</h5>
                      <p>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <img style={{ width: '50px' }} className="mx-5" src={coin} alt="" />
                    </div>
                    <div>
                      <h5 className="fw-bold">Make Payments</h5>
                      <p>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <img style={{ width: '50px' }} className="mx-5" src={send} alt="" />
                    <div>
                      <h5 className="fw-bold">Reach Airport on Selected Date</h5>
                      <p>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={landmark} style={{ width: '900px', borderRadius: '20px' }} alt="" /></div>
            </div>
          </section>

          <section className="p-5 text-center">
            <h5 className="fw-bold py-3">Top Selling</h5>
            <h1 className="fw-bold py-3">Top Destinations</h1>
            <div className="d-flex justify-content-around py-3">
              <img src={des1} style={{width:"1500px"}} alt="" />
              <img src={des2} style={{width:"1500px"}} alt="" />
              <img src={des3} style={{width:"1500px"}} alt="" />
            </div>
          </section> 

          <section className="p-5">
            <div className="d-flex justify-content-around" style={{ opacity: 0.85 }}>
              <img src={logo}  style={{width:"250px"}}alt="" />
              <img src={logo2} style={{width:"250px"}}  alt="" />
              <img src={logo}  style={{width:"250px"}} alt="" />
              <img src={logo4} style={{width:"250px"}} alt="" />
              <img src={logo2} style={{width:"250px"}}  alt="" />
            </div>
          </section>

          <section className="p-5 m-5 text-start rounded-5" style={{ backgroundColor: 'rgba(223, 215, 249, 1)', height:"500px" }}>
            <h1 className='fw-bold lh-base'>Subscribe to get information, latest news and other <br />
              interesting offers about Jadoo</h1>
            <div className="d-flex  align-self-end">
              <input type="email" className="form-control p-3" style={{ display: 'inline-block', width: '50%' }} placeholder="Enter mail" />
              <button className="btn px-5" style={{ backgroundColor: 'rgba(255, 148, 109, 1)' }}>Subscribe</button>
            </div>
          </section>

          <footer>
            <div className="d-flex justify-content-evenly fw-bold p-5" style={{ boxSizing: 'border-box' }}>
              <div>
                <img src={logo} alt="" />
                <h5 className="py-5">Book your trip in a minute, get full <br />
                  Control for much longer.
                </h5>
              </div>
              <div>
                <h3>Company</h3>
                <p>About</p>
                <p>Career</p>
                <p>Mobile</p>
              </div>
              <div>
                <h3>Contact</h3>
                <p>Phone</p>
                <p>E-mail</p>
                <p>Press/Help</p>
              </div>
              <div>
                <h3>More</h3>
                <p>Airlines</p>
                <p>Airline</p>
                <p>Low for Tips</p>
              </div>
              <div>
                <div className="d-flex justify-content-around">
                  <img style={{ width: '50px' }} className="py-3" src={face} alt="" />
                  <img style={{ width: '50px' }} className="py-3" src={meta} alt="" />
                  <img style={{ width: '50px' }} className="py-3" src={thread} alt="" />
                </div> 
                <h3 className="py-3">Discover our App</h3>
                <div className="d-flex justify-content-between">
                  <img src={apple} alt="" />
                  <img src={store} alt="" />
                </div>
              </div>
            </div>
            <h5 className="fw-bold text-center py-5">All Rights are Reserved &copy; CopyRight 2018</h5>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Travell;
