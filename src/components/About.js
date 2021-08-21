import React from "react";
import andrewPhoto from "../images/andrew-profile.jpeg";
import { Link } from "react-router-dom";
import Cards from "../components/projects/Cards";
import BlogCard from "../components/blog/Cards";
import projectListing from "../components/projects/projectListing.json";
import blogListing from "../components/blog/blogListing.json";
// import trees from 'https://i.imgur.com/1l18YL8.jpg'

const About = () => {
  const ProjectCard = () => {
    const project = projectListing[0];
    return <Cards key={project.id} project={project} />;
  };

  return (
    <div className="about-container">
      <div id="about-div" className="card-div">
        <h2>Andrew Capp</h2>
        <h4>
          Software Engineer at Revature focused on Java, SQL, Spring,
          JavaScript, React, AWS, microservices, and more.
        </h4>
        <img id="about-img" src={andrewPhoto} alt="Andrew Profile" />
        <p className="about-p">
          I am a full-stack web developer with experience creating both
          front-end and back-end components of web applications. I have a Master
          of Business Administration degree from California State University-San
          Bernardino and a Bachelor of Arts in Accounting from Fort Lewis
          College. I transitioned into programming after a thirty-year career as
          director of finance in hospitality to pursue my dream of working as a
          software engineer.
        </p>
        <p className="about-p">
          Prior to working at Revature, I graduated from a full-stack software
          engineering program at Flatiron School where I learned Ruby on Rails,
          JavaScript, React, and more. While at Revature, I worked on several
          projects where I gained experience in back-end technologies such as
          Java, SQL, Spring Framework, and microservice architecture as well as
          front-end technologies such as HTML/CSS, JavaScript, TypeScript, and
          React. In addition, I have experience with DevOps including CI/CD
          pipelines utilizing Jenkins and deploying to Amazon Web Services
          cloud.
        </p>
        <p className="about-p">
          In addition to my web development skills, I spent years honing my
          written and verbal communication skills as a finance leader in
          hospitality. I’m used to working in a fast-paced hotel environment and
          as part of a team. I developed a strong hospitality mindset that the
          customer always comes first – including internal customers. I enjoy
          working in a team environment where I can learn from others and enjoy
          using my skills and experience to create useful applications.
        </p>
        <Link id="resume-link" to="/resume">
          Resume
        </Link>
      </div>
      <div>
        <h2>Latest Project</h2>
        <ProjectCard />
      </div>
      <div>
        <h2>Latest Blog</h2>
      </div>
      <div className="about-div">
        <BlogCard blog={blogListing[0]} />
        <a
          className="blog-link"
          href={blogListing[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Blog in New Tab
        </a>
        {/* <iframe id='blog-iframe' src={blogListing[0].link} title="Blog Post Display" /> */}
      </div>
    </div>
  );
};

export default About;
