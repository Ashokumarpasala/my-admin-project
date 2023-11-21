import React from 'react';
import image from './images/download.jpg'

const Portfolio = () => {
  return (
    <div className='' style={{backgroundColor:""}}>
    <div className="fs-1 " >
      <style>
        {`
          /* Mobile Devices (up to 767px) */
          @media only screen and (max-width: 767px) {
            /* CSS rules for mobile devices go here */
          }

          /* Tablets (768px to 991px) */
          @media only screen and (min-width: 768px) and (max-width: 991px) {
            /* CSS rules for tablets go here */
          }

          /* Desktops and Larger Screens (992px and above) */
          @media only screen and (min-width: 992px) {
            /* CSS rules for desktops and larger screens go here */
          }


          .container {
            max-width: 1200px;
            margin: auto;
          }

          header {
            background-color: #3498db;
            color: #fff;
            padding: 30px;
            text-align: center;
            display: flex;
            justify-content: space-between;
          }

          header h1 {
            margin: 0;
            font-size: 2em;
          }

          header nav ul {
            list-style: none;
            padding: 0;
          }

          header nav ul li {
            display: inline-block;
            margin: 0 10px;
          }

          header nav ul li a {
            text-decoration: none;
            color: #fff;
          }

          section {
            padding: 20px;
          }

          section h2 {
            color: #3498db;
          }

          #about {
            background-color: #2ecc71;
            color: #fff;
            padding: 40px;
            display: flex;
            justify-content: space-around;
          }

          #about h2 {
            font-size: 40px;
          }

          #about img {
            border-radius: 20px;
          }

          #about p {
            font-size: 1.2em;
          }

          #education {
            background-color: #f9f9f9;
          }

          #education p {
            font-size: 1.2em;
          }

          #skills {
            background-color: #2ecc71;
          }

          #skills ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          #skills ul li {
            display: inline-block;
            margin: 0 10px;
            background-color: #3498db;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            display: flex;
            margin: 3px;
          }

          #projects {
            background-color: #f9f9f9;
            padding: 30px;
          }

          #projects span {
            font-size: 20px;
            text-decoration: none;
            font-weight: bolder;
          }

          #projects .project {
            border: 1px solid #ccc;
            padding: 20px;
            margin: 10px;
          }

          #contact {
            background-color: #2ecc71;
            color: #fff;
            padding: 40px;
          }

          #contact h2 {
            font-size: 30px;
          }

          #contact form input,
          #contact form textarea {
            width: 85%;
            margin: 15px;
            margin-bottom: 10px;
            padding: 15px;
            border-radius: 5px;
            border: none;
          }

          #contact form button {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            padding: 15px;
            display: block;
            border-radius: 5px;
          }

          footer {
            text-align: center;
            padding: 20px;
            background-color: #3498db;
          }

          footer p {
            font-weight: bolder;
          }
        `}
      </style>

      <header className='p-5 '>
        <div className='text-start lh-base'>

        <h1 className='fw-bold lh-base' style={{ fontSize: '80px' }}>BRAD TRAVERSIE</h1>
        <h2>Email: brad@gmail.com</h2>
        <h2>Contact: 00-2222-575757</h2>
        </div>
        <nav>
          <ul className=''>
            <li><a className='fw-bold px-4' href="#about">About</a></li>
            <li><a className='fw-bold px-4' href="#education">Education</a></li>
            <li><a className='fw-bold px-4' href="#skills">Skills</a></li>
            <li><a className='fw-bold px-4' href="#projects">Projects</a></li>
            <li><a className='fw-bold px-4' href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <div className=''>
          <h2 className='' style={{fontSize:"50px"}}>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam nesciunt ratione cupiditate fuga, Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae dolor ratione laudantium, incidunt corporis, explicabo excepturi ad maiores voluptates doloremque deleniti architecto consectetur quos! <br /> quasi cum quidem labore sapiente in adipisci, vero nulla, nobis eligendi quos ipsum blanditiis? Quae, odit.</p>
        </div>
        <img src={image} style={{width:"100%"}} alt="" />
      </section>

      <section id="education" className='fs-1 p-5'>
        <h1 className='card p-4' style={{fontSize:"50px"}}>Education</h1>
        <table class="table table-hover p-5">
  <thead className='fs-1'>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Collage Name</th>
      <th scope="col">Specialization</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  <tbody className='fs-1 '>
    <tr className=''>
      <th scope="row">1</th>
      <td>NSRIT</td>
      <td>Mechnical Engineering</td>
      <td>86 %</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>APT collage</td>
      <td>Automobile Engineering</td>
      <td>83 %</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Miramir High School</td>
      <td>CBSJ</td>
      <td>95 %</td>
    </tr>
  </tbody>
</table>
      </section>

      <section id="skills">
        <h2 className='card p-4 my-2 m-4' style={{fontSize:"50px"}}>Skills</h2>
        <ul className='my-2'>
          <li className='m-4'>HTML</li>
          <li className='m-4'>CSS/Sass</li>
          <li className='m-4'>JavaScript</li>
          <li className='m-4' >Bootstrap</li>
          <li className='m-4'>Bootstrap</li>
          <li className='m-4'>React Js</li>
          <li className='m-4'>API Integration</li>
          <li className='m-4'>Rest API</li>
          <li className='m-4'>TailWind css</li>
        </ul>
      </section>

      <section id="projects">
        <h2 className='text-dark fw-bold' style={{fontSize:"50px"}}>My Projects</h2>
        <a href="https://github.com/Ashokumarpasala?tab=repositories" target="_blank"><span>Project Link</span>: https://github.com/Ashokumarpasala?tab=repositories</a>
      </section>

      <section id="contact">
        <h2 style={{fontSize:"50px"}}>Contact Me</h2>
        <form action="">
          <input type="email" placeholder="Enter Email" />
          <textarea name="" placeholder="Enter Message" id="" cols="30" rows="10"></textarea>
          <button className='fw-bold'>Contact Me</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 resumebuilder@support.com. All Rights are Reserved</p>
      </footer>
    </div>
    </div>
  );
};

export default Portfolio;
