import { useEffect, useState } from "react";
import About from "./About"
import Skill from "./Skill";
import Project from "./Project";

const Home = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {                               // this function runs when the component is loaded, or when the state of the component changes
    //     setCount(count + 1);

    //     return () => alert('goodbye components');   // the function being returned runs when the component is destroyed/removed from the ui AKA: teardown function
    // }, [count]);                                    // dependency array contains count, means this function will be called anytime count changes


    return (

        <>
            <h1>JACOB JOHNSTONE</h1>
            <h3>B.E.Sc</h3>
            <div className="about-section">
                <About />
                <img className="some-cool-hobby-collection"></img>
            </div>
            <h2>Skills</h2>
            <div className="skills-section">
                <div>
                    <Skill title="Software Development" description="Best practices, OOP, Version control:Java, JavaScript, Typescript, Python"/>
                </div>
                <div>
                    <Skill title="Fullstack Development" description="Web applications built with HTML, CSS, JS, and React : Supported by RESTful APIs, Express backends, and both relational and NoSQL databases"/>
                </div>
                <div>
                    <Skill title="AI Driven Solutions" description="Taking advantage of PyTorch, advancing steps within the field of healthcare"/>
                </div>
            </div>
            <h2>Projects</h2>
            <div className="projects-section">
                <Project title="Project 1 - Image Translation for Medical Students" features={["Translated plastic, model heart images into realistic looking heart images", "Implemented rapid image translation allowing rapid streaming from a camera"]} />
                <Project title="Project 2 - Relational Database Design and Implementation" features={["Relational database designed and implemented to be optimized, with dumby data used for testing purposes", "Able to track member statistics such as workout frequencies and class registrations enabling more business decision to be made more effectively"]}/>
            </div>
            <h2>Education</h2>
            <div className="education-section">
                <h4>The University of Western Ontario</h4>
                <div>September 2020 - April 2024</div>
                <h5>Relevant Coursework</h5>
                <div>Web Technologies, Database Management Systems, Data Structures and Algorithms, Operating Systems, Artificial Intelligence, Software Engineering Design, Information Secuirty, Software Testing</div>
            </div>
        </>

    )
}

export default Home;