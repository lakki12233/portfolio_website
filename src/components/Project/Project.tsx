import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import java from "../../assets/javapro.png";
import ScrollAnimation from "react-animate-on-scroll";
import sociopedia from "../../assets/sociopedia.png";
import weatherphoto from "../../assets/weatherapi.png"
import fiver from "../../assets/fiver.png";
import fakeproduct from "../../assets/fakeproduct.png"
export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">



        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="first">
              <header>
                <svg width="20" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">

                  <a href="githublink" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={java} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Billing Mangement Application</h3>
              <p>
                The Java-based Billing Management System is designed to automate and organize financial transactions efficiently. Leveraging the robust features of Java, the system prioritizes scalability, reliability, and ease of maintenance. It streamlines billing processes, offering a comprehensive solution for managing financial transactions with the goal of enhancing efficiency and ensuring a robust and sustainable platform.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JAVA</li>
                <li>Mysql</li>
                <li>AWT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="first">
              <header>
                <svg width="20" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">

                  <a href="https://github.com/lokirj7/sociopedia" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={sociopedia} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Socio Pedia Platform</h3>
              <p>
                The social media application is built using ReactJS, React Router, Formik+Yup, Redux Toolkit, and Redux Persist on the front-end. The back-end is powered by NodeJS, ExpressJS, and Mongoose with MongoDB as the database. Security features include hashing, salting, and JWT for user authentication. React Dropzone and Multer handle file uploads. Following the MVC architecture, the application offers functionalities like posting, liking, commenting, and adding friends through a RESTful API, providing users with a comprehensive and interactive social media experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="first">
              <header>
                <svg width="20" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">

                  <a href="https://github.com/lokirj7/WeatherApp" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={weatherphoto} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Weather Application</h3>
              <p>
                The Weather Map API application provides real-time weather information using various APIs and technologies.The application leverages weather APIs to fetch and present current weather conditions, forecasts, and other relevant information. Users can interact with the map to explore weather details for different locations, providing a visually intuitive and informative weather tracking experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Weatherapi</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="first">
              <header>
                <svg width="20" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">

                  <a href="https://github.com/lokirj7/Freelance-Platform/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={fiver} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Freelance Platform</h3>
              <p>
                The Freelance Platform, powered by ReactJS and NodeJS technologies, seamlessly connects businesses with freelancers across digital service categories. With a dynamic front-end using Vite and Saas, it allows freelancers to showcase their skills, facilitates secure communication through chat facilities, and ensures smooth transactions via the integrated Stripe Gateway. Enhanced by Redux Toolkit and JWT Authentication, the platform provides a user-friendly and secure environment for efficient collaboration and payment processing between businesses and freelancers. </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Reactjs</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Mongoose</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="first">
              <header>
                <svg width="20" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">

                  <a href="https://github.com/lokirj7/Fake-Product-Detection" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={fakeproduct} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Fake Product Identification</h3>
              <p>
                The project integrates React, Node.js, Ethereum, and Hyperledger Fabric to secure product identification and combat counterfeiting in the supply chain. Utilizing technologies like Ganache, Truffle, Bcrypt, and Metamask, it ensures authenticity by assigning unique identifiers to products on the blockchain. Enhanced security features, such as JWT, OAuth 2.0, and RBAC, contribute to a robust system for tamper-proof and transparent product tracking. The goal is to provide a reliable solution for verifying product authenticity throughout the supply chain.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Solidity</li>
                <li> Ethereum</li>
                <li> ganache</li>
                <li> Metamask.</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}