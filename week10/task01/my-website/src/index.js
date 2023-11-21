import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <nav>
        <ul className="links">
            <li><a href="https://www.linkedin.com/in/ilhamanovruzova/" target="_blank"><b>LinkedIn</b></a></li>
            <li><a href="https://github.com/apricityyyy" target="_blank"><b>GitHub</b></a></li>
            <li><a href="https://bit.ly/3sfBDoN" target="_blank"><b>Facebook</b></a></li>
            <li><a href="./contactme.html" target="_blank"><b>Contact me now!</b></a></li>
            <li><a href="./questionnaire.html" target="_blank"><b>Questionnaire</b></a></li>
            <li><a href="./photogallery.html" target="_blank"><b>Photo Gallery</b></a></li>
            <li><a href="./personaldigitcard.html" target="_blank"><b>Personal Digital Card</b></a></li>
            <li><a href="https://apricityyyy.github.io/IN/" target="_blank"><b>GitHub Page</b></a></li>
        </ul>
    </nav>

    <h1 style={{textAlign: "center", marginTop: "70px"}}>Ilhama Novruzova 🙋‍♀️</h1>

    <h1 id="titleelement" style={{textAlign: "center"}}>Something here</h1>

    <h4 id="date"></h4>

    <hr />

    <div className="flex-containermain">
        <div><img className="myimage" src="./assets/images/Ilhama (not rounded).jpg" alt="An image of me" /></div>
        <div className="checkingList">
            <ul style={{textDecoration: "none"}}>
                <li>University: <b>ADA University</b></li>
                <li>Major: <b>Computer Science</b></li>
                <li><a style={{color: "black"}}
                        href="mailto:inovruzova16235@ada.edu.az"><b>inovruzova16235@ada.edu.az</b></a></li>
            </ul>
        </div>
        <div className="container"><iframe className="responsive-iframe" src="./contactme.html" name="contactme"
                frameborder="0"></iframe></div>
    </div>

    <hr />

    <ul>
        <li className="sections">
            <a href="./education.html" target="_blank">
                <h2>EDUCATIONAL BACKGROUND</h2>
            </a>
            <hr />
        </li>

        <li>
            <h2>WORK EXPERIENCE</h2>
            <hr />
        </li>

        <ul style={{listStyleType:"square"}}>
            <h3 style={{fontWeight:"normal"}}><i>07/2022 - 12/2022</i> Baku, Azerbaijan</h3>
            <li>
                <h3 style={{fontWeight:"normal"}}> <b>TECHNICAL TRANSLATOR</b> KHAN ACADEMY AZERBAIJAN
                    <hr />
                </h3>
            </li>
            <ol>
                <li>Translated 20 videos in the sphere of computing.</li>
                <li>Referred to terminal dictionaries and IT knowledge for the best explanation of topics in
                    Azerbaijani.
                </li>
                <li>Upgraded educational sources for students from 5th grade to high school in Azerbaijan.</li>
            </ol>

            <h3 style={{fontWeight: "normal"}}><i>03/2022 - 05/2022</i> Baku, Azerbaijan</h3>
            <li>
                <h3 style={{fontWeight:"normal"}}> <b>CONTENT CREATOR</b> TENTER
                    <hr />
                </h3>
            </li>
            <ol>
                <li>Created both Azerbaijani and English versions of C quizzes for the startup.</li>
                <li>Made 400 questions total on 20 main topics of C.</li>
                <li>Met deadlines while maintaining high-quality deliverables.</li>
            </ol>

            <h3 style={{fontWeight:"normal"}}><i>01/2022 - 05/2022</i> Baku, Azerbaijan</h3>
            <li>
                <h3 style={{fontWeight:"normal"}}> <b>WEB DEVELOPMENT INTERN</b> ÖZGÜN YAPI
                    <hr />
                </h3>
            </li>
            <ol>
                <li>Created many projects, e.g, collected the data of applicants, classified them with Excel, and added
                    them
                    to the project website.</li>
                <li>Wrote an article about algorithms for the competition.</li>
                <li>Finished with a distinction certificate.</li>
            </ol>
        </ul>

        <li>
            <h2>DIGITAL SKILLS</h2>
            <hr />
        </li>

        <p>Java | C | C++ | Microsoft Excel | HTML, CSS, JavaScript (Average) | Python | MATLAB</p>

        <li>
            <h2>PROJECTS</h2>
            <hr />
        </li>

        <ul className="projects">


            <h3 style={{fontWeight:"normal"}}><i>04/2023 - 05/2023</i></h3>
            <li>
                <h3>Prediction of Fake Import Declarations<br /><br /></h3>
            </li>


            <h3 style={{fontWeight:"normal"}}><i>05/2023</i></h3>
            <li>
                <h3>Digital Clock<br /><br /></h3>
            </li>


            <h3 style={{fontWeight:"normal"}}><i>05/2022</i></h3>
            <li>
                <h3>Movie Dataset Management<br /><br /></h3>
            </li>

        </ul>

        <li>
            <h2>HONOURS AND AWARDS</h2>
            <hr />
        </li>

        <ul className="honorsandawards">
            <h3 style={{fontWeight:"normal"}}><i>09/2023</i></h3>
            <li>
                <h3>"Elachi" Scholarship - PASHA Holding<br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>07/2023</i></h3>
            <li>
                <h3>CanSat Azerbaijan 2023 - 1st Place – Azercosmos<br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>02/2023 - 06/2023</i></h3>
            <li>
                <h3>Global Korean Scholarship – South Korea<br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>05/2023</i></h3>
            <li>
                <h3>HZT Awards 2023 - 2nd Place – ADA University<br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>12/2021, 05/2022, 12/2022</i></h3>
            <li>
                <h3>Lotfi A. Zadeh List of Honor Scholarship – ADA University<br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>03/2022</i></h3>
            <li>
                <h3>UFAZ Hackathon - Top 6 out of 30 Teams<br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>09/2021</i></h3>
            <li>
                <h3>Presidential Scholarship <br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>05/2021</i></h3>
            <li>
                <h3>IELTS - 7/9 <br /><br /></h3>
            </li>

        </ul>

        <li>
            <h2>NETWORKS AND MEMBERSHIPS</h2>
            <hr />
        </li>

        <ul className="networksandmemberships">
            <h3 style={{fontWeight:"normal"}}><i>07/2022 – CURRENT</i></h3>
            <li>
                <h3>Member of IT and Design Committee at BrainCenters <br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>09/2022 – CURRENT</i></h3>
            <li>
                <h3>Executive Chapter Officer at ADA ACM Club<br /><br /></h3>
            </li>

            <h3 style={{fontWeight:"normal"}}><i>07/2022 – 09/2022</i></h3>
            <li>
                <h3>Mentee for UNDP'S "Women in STEM" mentorship program run by AWiS<br /><br /></h3>
            </li>
        </ul>

        <li>
            <h2>MANAGEMENT AND LEADERSHIP SKILLS</h2>
            <hr />
        </li>

        <ul className="managementandleadership">
            <li>
                <h3>Leader of "Eat or Feed" project</h3>
            </li>
            <p>Visit our <a href="https://www.instagram.com/eatorfeedproject" target="_blank">Instagram page</a> for
                more
                info.</p>
            <br />

            <li>
                <h3>"Hour of Code" Event</h3>
            </li>
            <p>Visit our <a href="https://m.facebook.com/story.php?story_fbid=209601871342287&id=100068774268806"
                    target="_blank">Facebook post</a> for more info.</p>
            <br />

        </ul>

        <li className="sections">
            <a href="./mylists.html" target="_blank">
                <h2>MY LISTS</h2>
            </a>
            <hr />
        </li>

    </ul>
  </>
);
