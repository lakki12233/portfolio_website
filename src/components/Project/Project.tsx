import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import roadlanepro from "../../assets/roadlanepro.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import kyc from "../../assets/kycBC.jpg";
import burger from "../../assets/onlineBurger.png"
import ovp from "../../assets/ovp.png";
import objectdetection from "../../assets/object_detection_pic.png"
import resumefilter from "../../assets/resumefilter.png"
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

                  <a href="https://github.com/lakki12233/Road-lane-line-detection" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={roadlanepro} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Road Lane Line Detecion</h3>
              <p>
              Road lane line detection is a fundamental task in computer vision that involves identifying and tracking the lanes on a road using image processing techniques. It is a crucial aspect of autonomous driving systems, driver assistance technologies, and road safety. Road lane line detection algorithms typically rely on techniques such as edge detection, Hough transform, and image segmentation to identify and track the lanes. The goal of these algorithms is to detect the lane lines accurately and efficiently in real-time, even under challenging lighting and environmental conditions.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python 3.5</li>
                <li>NumPy</li>
                <li>OpenCV</li>
                <li>Matplotlib</li>
                <li>MoviePy</li>
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

                  <a href="https://github.com/lakki12233/KYC_BLOCKCHAIN" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={kyc} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>KYC VERIFICATION USING BLOCKCHAIN</h3>
              <p>
              The project aims to enhance e-KYC processes in the financial sector by introducing e-KYC TrustBlock, a blockchain-based system with CP-ABE encryption. It ensures security and privacy for cloud-stored KYC documents. By enabling institutions to access previous KYC data through the blockchain, it reduces verification time and redundancy for customers. The system emphasizes encryption and key management, requiring user approval for data sharing and implementing a 25-digit key mechanism for secure access. Overall, it creates a streamlined, secure, and user-controlled e-KYC platform for efficient data sharing among financial institutions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript (Node.js)</li>
                <li>Express.js</li>
                <li>Ganache</li>
                <li>Remix IDE</li>
                <li>MetaMask</li>
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

                  <a href="https://github.com/lakki12233/OrderBurgerOnline_Reactjs" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={burger} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3> Burger Ordering website Frontend</h3>
              <p>
              This project is a frontend-focused online burger ordering platform created using React. It includes essential components like a navigation bar, home page, menu page, about page, and contact page. The application uses React Router for seamless client-side navigation, allowing users to explore different sections without full-page reloads..
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>Reactjs</li>
                <li>bootstrapping</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

         <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/lakki12233/Resume-Filtering-Application" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <img src={resumefilter} alt="pro-img" className="pro-img" />
            <div className="body">
              <h3>Resume Filtering Application</h3>
              <p>
              The Resume Shorter program efficiently filters resumes based on two key conditions: over 3 years of
experience and proficiency in C++ and Java. It automates the initial screening process, saving time
and resources. By analyzing the work experience, the program eliminates candidates with less than
3 years of relevant experience. Recruiters benefit from a streamlined process, as the program identifies
qualified candidates objectively and quickly. The Resume Shorter program optimizes the
recruitment process, ensuring that only the most suitable applicants proceed to subsequent stages.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Reactjs</li>
                <li>JSON</li>
                <li>Docxtemplater</li>
                <li>PizZip</li>     
                <li>FileSaver</li>          
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

                  <a href="https://github.com/lakki12233/MERN_OVP" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={ovp} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Online Video Platform [Full Stack]</h3>
              <p>
              Full Stack Online Video Platform, where users experience seamless registration and secure login through 'JWT' authentication. The interface, powered by 'React Hooks','RESTApi' and 'Context API', offers an interactive and responsive viewing environment. 'Firebase' seamlessly manages movie storage, while 'MongoDB' robustly handles user and content data. Admins navigate a dedicated dashboard for content management, facilitating movie additions, updates, and list creation. An analytical module provides admins with insights into monthly user registration trends, enhancing decision-making for platform improvement. Additionally, our platform incorporates 'Google Dialogflow chatbot' for an enriched user experience on the client page. </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>MERN</li>
                <li>Context API</li>
                <li>JSON Web Tokens</li>
                <li>Firebase</li>
                <li> Google Dialogflow</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


         <ScrollAnimation animateIn="flipInX">
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
              <h3></h3>
              <p>
                 Null
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Blank</li>
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

                  <a href="https://github.com/lakki12233/Object_Dectection" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <img src={objectdetection} alt="pro-img" className="pro-img" />

            </div>
            <hr></hr>
            <div className="body">
              <h3>Object-Detection</h3>
              <p>
              Object detection is a significant aspect of computer vision that enables machines to perceive and understand their visual environment as the field keeps on changing. The present undertaking concentrates on developing Object Detection system utilizing OpenCV Library in combination with MobileNetV3 structure. It helps in knowing where these objects are placed on images or video stream, highlighting the importance of computer vision to real life situations.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li> OpenCV</li>
                <li> NumPy</li>
                <li> Deep Learning</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}