import React from 'react';
import logo from './Space-website-landing-page/images/logo.svg'
import grl from './Space-website-landing-page/images/spacegirl.svg'
import main from './Space-website-landing-page/images/main.svg'
import card1 from './Space-website-landing-page/images/cardimgaes/card1.svg'
import nasq from './Space-website-landing-page/images/logos/astro.svg'
import des from './Space-website-landing-page/images/logos/boeing.svg'
import mis from './Space-website-landing-page/images/logos/nasdaq.svg'
import les from './Space-website-landing-page/images/logos/space.svg'
import btmimg from './Space-website-landing-page/images/bottomimg.svg'
import commuty from './Space-website-landing-page/images/community.svg'

const Space = () => {
  return (
    <div className=''>
    <div className="px-5 rounded-4" style={{ backgroundColor: 'white', color: 'black' }}>
      <nav className="d-flex justify-content-between  p-5">
        <div>
          <img src={logo} style={{width:"500px"}} alt="" />
        </div>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <h6 className="fs-1 fw-bold px-4">Stay Connected</h6>
            <h6 className="fs-1 fw-bold px-4">Education</h6>
            <h6 className="fs-1 fw-bold px-4">Community</h6>
            <h6 className="fs-1 fw-bold px-4">About Us</h6>
          </div>
          <button className="btn btn-dark px-5  fs-1 p-3">Sign In</button>
        </div>
      </nav>

      <section className="my-5 p-5" style={{ backgroundImage: `url(${main})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '1000px', borderRadius: '20px', color: 'white' }}>
        <h1 className="p-5 m-5 lh-2" style={{ fontSize: '155px' }}>Unveiling the <br /> Wonders of <br /> the Universe</h1>
      </section>

      <div style={{ width: '50%' }}>
        <p className='fs-1 fw-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem illum quos natus amet deleniti nobis facere aperiam nesciunt aut iusto quaerat dolores modi cupiditate itaque, optio minima ut neque laboriosam magnam eius! Fuga nobis iusto impedit nam, suscipit fugiat perspiciatis magnam, officia eum exercitationem aperiam quod! Debitis, ad doloribus.</p>
      </div>

      <section>
        <div className="d-flex justify-content-between align-items-center my-4">
          <div className="d-flex justify-content-between mx-5" style={{ width: '500px' }}>
            <button className="btn btn-dark px-3">Get Started</button>
            <h6>Watch the Videos <span><img src={card1} alt="" /></span></h6>
          </div>
          <div className="mx-5" style={{ width: '400px', height: '150px', backgroundColor: 'black', borderRadius: '20px', color: 'white' }}>
            <div className="d-flex align-items-center m-2 px-1">
              <img src={card1} alt="" className="px-3" />
              <p className="py-2 my-2">Total Time in Space</p>
            </div>
            <h5 className="mx-3 px-3">352D <span className="px-3">5H</span> <span className="px-3">49M</span> <span className="px-3">20S</span></h5>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-around py-5">
        <img src={nasq} style={{width:"400px"}} alt="" />
        <img src={des}  style={{width:"400px"}} alt="" />
        <img src={mis}  style={{width:"400px"}} alt="" />
        <img src={les}  style={{width:"400px"}}alt="" />
      </section>

      <section className="d-flex justify-content-around fs-1 my-5 m-5">
        <h1 className="fw-bold" style={{ fontSize: '80px' }}>Join our vibrant community of <br /> space enthusiasts</h1>
        <div>
          <div className="card fw-bold">
            <div className="row row-cols-2">
              <div className="card col py-4 p-5">
                <div className='' style={{ backgroundColor: 'aqua', width: '50px', height: '50px', borderRadius: '15px' }}></div>
                <h6 className="py-3 fw-bold">Astronomy 101</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Quisquam illum fugit iusto fugiat quas magni!</p>
              </div>
              <div className="card col p-5 py-4">
                <div className='' style={{ backgroundColor: 'aqua', width: '50px', height: '50px', borderRadius: '15px' }}></div>
                <h6 className="py-3 fw-bolder">Astronomy 101</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Quisquam illum fugit iusto fugiat quas magni!</p>
              </div>
              <div className="card col p-5 py-4">
                <div className='' style={{ backgroundColor: 'aqua', width: '50px', height: '50px', borderRadius: '15px' }}></div>
                <h6 className="py-3 fw-bolder">Astronomy 101</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Quisquam illum fugit iusto fugiat quas magni!</p>
              </div>
              <div className="card col p-5 py-4">
                <div className='' style={{ backgroundColor: 'aqua', width: '50px', height: '50px', borderRadius: '15px' }}></div>
                <h6 className="py-3 fw-bold">Astronomy 101</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Quisquam illum fugit iusto fugiat quas magni!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style={{ backgroundImage: `url(${btmimg})`, backgroundSize: 'cover', height: '800px', color: 'white', textAlign: 'center', borderRadius: '30px' }}>
          <h1 className="py-5 px-5 fw-bold lh-base" style={{ fontSize: '100px' }}>We are committed to making space <br /> science accessible to all. Explore our <br /> educational resources, including</h1>
        </div>
        <div className="d-flex justify-content-around fw-bold fs-1">
          <div className="py-5 p-5" style={{ backgroundColor: 'whitesmoke', width: '850px', height: '620px', borderRadius: '30px', position: 'relative', top: '-120px' }}>
            <h1 className="fw-bold lh-base" style={{ color: 'rgba(169, 194, 203, 1)', fontSize: '100px' }}>0.1</h1>
            <h5 className="fw-bold">Online free courses and tutorials</h5>
            <p className="py-3">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
          </div>
          <div className="py-5 p-5" style={{ backgroundColor: 'whitesmoke', width: '850px', height: '620px', borderRadius: '30px', position: 'relative', top: '-120px' }}>
            <h1 className="fw-bold lh-base" style={{ color: 'rgba(169, 194, 203, 1)', fontSize: '100px' }}>0.2</h1>
            <h5 className="fw-bold">Online free courses and tutorials</h5>
            <p className="py-3">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
          </div>
          <div className="py-5 p-5" style={{ backgroundColor: 'whitesmoke', width: '850px', height: '620px', borderRadius: '30px', position: 'relative', top: '-120px' }}>
            <h1 className="fw-bold lh-base" style={{ color: 'rgba(169, 194, 203, 1)', fontSize: '100px' }}>0.3</h1>
            <h5 className="fw-bold">Online free courses and tutorials</h5>
            <p className="py-3">Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
          </div>
        </div>
      </section>

      <section style={{ backgroundImage: `url(${commuty})`, backgroundSize: 'cover', width: '100%', height: '800px', color: 'white', paddingTop: '100px' }} className="px-5 fs-1">
        <h1 style={{ fontSize: '150px', fontWeight: 'bold' }}>Join our community</h1>
        <p className="py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eos repudiandae provident <br /> perspiciatis cumque. Quidem!</p>
        <div>
          <input type="text" placeholder="Enter your email" className="form-control p-4 px-3" style={{ width: '500px', display: 'inline-block' }} />
          <button className=" btn px-4 mx-3 fs-1 p-2" style={{ backgroundColor: 'rgba(169, 194, 203, 1)' }}>Subscribe</button>
        </div>
      </section>

      <footer className="d-flex justify-content-between py-5 m-5 fw-bold">
        <img src={logo} style={{width:"500px"}} alt="" />
        <div className="d-flex">
          <h6 className="fs-1 fw-bold px-5">Stay Connected</h6>
          <h6 className="fs-1 fw-bold px-5">Education</h6>
          <h6 className="fs-1 fw-bold px-5">Community</h6>
          <h6 className="fs-1 fw-bold px-5">About Us</h6>
        </div>
        <div className="d-flex">
          <h6 className="fw-bold fs-1 px-3">Privacy policy</h6>
          <h6 className="fw-bold fs-1 px-3">Terms & Agreements</h6>
        </div>
      </footer>

      <a href="#">
        <h6 className='fs-1 ' style={{ textAlign: 'center' }}>[contact@Space.com].</h6>
      </a>

      {/* <img src={grl} alt="" style={{ position: 'relative', top: '-2850px', left: '2580px', width: '1000px' }} /> */}
    </div>
    </div>
  );
};

export default Space;
