import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom';
import Travell from './Travell'
import Portfilo from './Portfilo'
import Space from './Space';
import Hotel from './Hotel';
import CardApp from './Re-create-images-to-react-code/src/CardApp'
import HealthApp from './Health-care-managment-responsive-web-page/src/HealthApp';
import BankApp from './responsive-banking-wepage-with-routing/src/BankApp';
import BankCard from './responsive-banking-wepage-with-routing/src/components/BankCard';
import VoterApp from './voters-website-responsive/src/VoterApp';
import ResumeApp from './Resume-Builder-website/src/ResumeApp';
import EmailApp from './Email-project/src/EmailApp';
import Compose from './Email-project/src/components/Compose';
import Inbox from './Email-project/src/components/Inbox';
import StarComponents from './Email-project/src/components/StarComponents';
import Sent from './Email-project/src/components/Sent';
function Home() {
  return (
    <Router>
    <div className='' style={{height:"100vh", backgroundColor:"lightgray"}}>
            <div className='col border rounded-4 p-3 m-2 card '>
                <div className="d-flex justify-content-between">
<div className='d-flex'>

             <img className='rounded-5' src="https://cdn5.f-cdn.com/contestentries/1733723/34450464/5e4399f7569bd_thumb900.jpg" style={{width:"250px"}} alt="" />
              <h1 className='px-4'><span className='text-primary fw-bold' style={{fontSize:"70px"}}>ADMIN</span><br /> Control Panel</h1>
</div>
                <div className='d-flex p-4 align-items-center'>
                   <img style={{width:"150px"}} src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="" />
                  <h1 className='lh-base fs-1 fw-bold'>Admin Login </h1>
                </div>
                </div>
            </div>
        <div class="row ">
            <div class="col-2 ">
                <div className=" m-2 card rounded-4 py-4 p-3" >
                  <div className="d-flex align-items-center">

                  <img style={{width:"150px"}} src="https://img.freepik.com/premium-vector/continuous-line-building-city-logo-design_15473-14266.jpg" alt="" />
                  <h1 className='fw-bold fs-1 p-3'>Website List</h1>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    {/* portfilo website */}
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/ProtflioWebsite'>ProtflioWebsite</Link> </h3>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    {/* initial display */}
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/'> Travell Webpage</Link></h3>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/resume-builder'>Resume Builder Project</Link></h3>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/Health'> Health care Managment Website</Link></h3>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/Space'>Space website page</Link> </h3>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/Voter'> Voter Website</Link></h3>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/Banking'>Banking website</Link> </h3>
                  </div>
                  <div className="card hovercard my-3 p-3">
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/cardwebsite'>card website</Link> </h3>
                  </div>
                  <div className="card my-3 p-3">
                    <h3 className='fw-bold'><Link style={{textDecoration:"none", color:"black"}} to='/email-website'>side-Bar Email website</Link> </h3>
                  </div>
                </div>
            </div>
            <div class="col-10">
                <div className=" card m-2 rounded-4" style={{height:"85vh", overflow:"scroll", overflowX:"hidden"}}>
                        <Routes>
                            <Route path='/ProtflioWebsite' element={<Portfilo />} />
                            <Route exact path='/' element={<Travell />} />
                            <Route path='/Space' element={<Space />} />
                            <Route path='/Hotel' element={<Hotel />} />
                            <Route path='/cardwebsite' element={<CardApp />} />
                            <Route path='/Health' element={<HealthApp />} />
                            <Route path='/Banking' element={<BankApp />} />
                            <Route exact path='/targetBank' element={<BankCard />}/>
                            <Route exact path='/Voter' element={<VoterApp />}/>
                            <Route exact path='/resume-builder' element={<ResumeApp />}/>
                            <Route path='/usersList' element={<Form />} />
                            <Route path='/email-website' element={<EmailApp />} />
                            <Route exact path='/compose' element={<Compose />} />
                            <Route exact path='/inbox' element={<Inbox />} />
                            <Route exact path='/important-emails' element={<StarComponents />} />
                            <Route exact path='/sent-emails' element={<Sent />} />
                        </Routes>
                </div>
            </div>
        </div>
    </div>
   </Router>
  )
}

export default Home
