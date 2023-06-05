import React from "react";
import "./resume.css";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";

function Resume() {
  return (
    <div className="resume_main">
      <h1 className="resume_title">Resume</h1>
      <div className="resume_container">
        <div className="resume_header">
          <h1>
            Juwan <br /> Hollingsworth
          </h1>
          <h3>
            📩: Jhollingsworth5@student.clayton.edu | 📞: [redacted] | 📍
            Atlanta, GA 30303
          </h3>
          <hr />
        </div>
        <div className="resume_body">
          <div className="resume_row">
            <div className="link" id="label">
              LINKS:
            </div>
            <div className="link" id="content">
              linkedin.com
            </div>
          </div>
          <div className="resume_row">
            <div className="objective" id="label">
              OBJECTIVE:
            </div>
            <div className="objective" id="content">
              Junior Software Engineer dedicated to improving skills through
              hands-on learning and development. Proficient in mobile and
              desktop development environments. Adept in Java, JavaScript,
              Python and other programming languages with the ability to produce
              clean and concise code. Well- organized, goal-driven and
              collaborative. A team player with strong communication and
              analytical abilities.
            </div>
          </div>
          <div className="resume_row">
            <div className="education" id="label">
              EDUCATION:
            </div>
            <div className="education" id="content">
              Clayton State University, Atlanta, GA <br />
              Bachelor of Science: Computer Science
            </div>
          </div>
          <div className="resume_row">
            <div className="coursework" id="label">
              COURSE-WORK:
            </div>
            <div className="coursework" id="content">
              • Data Structures and Algorithms <br />
              • Computer Organization and Architecture <br />• Operating Systems{" "}
              <br />• Programming Languages
              <br /> • Theory of Computing <br />• Professional and Technical
              Writing
            </div>
          </div>
          <div className="resume_row">
            <div className="projects" id="label">
              PROJECTS:
            </div>
            <div className="projects" id="content">
              ACM “Magic Mirror” Project | ACM – Clayton State U. Fall 2022 •
              ACM “Magic Mirror” was a project that came to fruition Fall 2022
              with the help of myself and a fellow ACM colleague. We wrote grant
              that funded the efforts of this project. My responsibilities
              included project management, setting up communication channels,
              technical writing, configuring both hardware and software
              components, and educating fellow colleagues of technology used
              throughout the project. This project was recently presented and on
              display at the 2022 ACM MSE Conference in Gatlinburg, TN.
            </div>
          </div>
          <div className="resume_row">
            <div className="certs" id="label">
              AWARDS/CERTIFICATIONS:
            </div>
            <div className="certs" id="content">
              • AWS Certified Cloud Practitioner Completion Date: In Progress
            </div>
          </div>
          <div className="resume_row">
            <div className="work" id="label">
              WORK HISTORY:
            </div>
            <div className="work" id="content">
              Mentorship Program | Intuit Mailchimp – Atlanta, GA Aug 2022 -
              Current • Mailchimp's Launchpad Program helps students adapt to
              technical, social, and business expectations of the 21st century
              workforce. • Over the course of my senior semester I partnered
              with multiple departments of Mailchimp for insightful conversation
              and hands on experience surrounding the technology industry.
              Software Engineer Intern | Cox Automotive – Atlanta, GA May - Aug
              2022 • Contribute production level code used in beta launch. •
              Debug and test both front and backend codebase using Jest, Test
              Café, Applitools. • Research, investigate and fix a wide range of
              technical issues using Devtools. • Proactively learn about new
              technologies, methodologies, and skills on the fly. • Collaborate
              with senior leaders & developers to achieve successful beta
              launch. • Utilize APIs and API software such as Postman and
              Swagger. • Utilize Git & GitHub for version control, PRs, & repo
              management. • Produce software documentation specifically mapping
              data points across the application as a reference for new members
              to the team. • Assist new team members in setting up development
              environments. • Query, maintain and update database system using
              MongoDB. • Implement/work with AWS products such as s3 buckets,
              lambdas, etc. Web Development Intern | Spark Social – Atlanta, GA
              05/2021 - 08/2021 • Developed user interfaces with modern
              JavaScript frameworks, HTML5 and CSS3. • Troubleshot and debugged
              code ensuring compatibility with devices, browsers, and operating
              systems. • Utilized scripting languages, content creation tools,
              management tools, and digital media to design web sites.
            </div>
          </div>
          <div className="resume_row">
            <div className="skills" id="label">
              TECHNICAL SKILLS:
            </div>
            <div className="skills" id="content">
              • Programming • Database • Web Design • Operating Systems • Office
              Resources Java, JavaScript, Python, Typescript Skilled in noSQL –
              SQL, PHP HTML, CSS, XML, React Windows OS, Mac OS Microsoft Office
              Suite
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <AnchorLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className="arrow" src={arrow} />
        </AnchorLink>
      </div>
    </div>
  );
}

export default Resume;
