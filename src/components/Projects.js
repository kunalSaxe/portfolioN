import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Traq from "../assets/img/Traq.png";
import Rama from "../assets/img/rama.png";
import kriticards from "../assets/img/kriticards.png";
import glasskart from "../assets/img/glasskart.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import KunalSaxenaResume from "../assets/resume/KunalSaxenaResume.pdf"
export const Projects = () => {
  const projects = [
    {
      title: "Mantra Traq",
      description:
        "Mantra Traq is a project management platform designed to enhance team collaboration. I led the backend development using the NestJS framework, integrating secure authentication and role-based access control with Keycloak.",
      imgUrl: Traq,
    },
    {
      title: "Glasskart",
      description: "Design & Development",
      imgUrl: glasskart,
    },
    {
      title: "B2B PROJECT",
      description: "Design & Development",
      imgUrl: kriticards,
    },
    {
      title: "Ecommerce",
      description: "Design & Development",
      imgUrl: Rama,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A selection of projects showcasing my expertise in web
                    development, database management, and API integration.
                    Focused on delivering scalable and user-centric applications
                    using frameworks like NestJS, TypeORM, and Bootstrap.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
  <Nav
    variant="pills"
    className="nav-pills mb-5 justify-content-center align-items-center flex-wrap"
    id="pills-tab"
  >
    <Nav.Item>
      <Nav.Link eventKey="first">Tab 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="second">Let's Connect</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link
        eventKey="third"
        as="a"
        href={KunalSaxenaResume}
        type="application/pdf"
        download
        className="btn btn-outline-primary"
      >
        Download Resume
      </Nav.Link>
    </Nav.Item>
  </Nav>
  
  <Tab.Content
    id="slideInUp"
    className={
      isVisible ? "animate__animated animate__slideInUp" : ""
    }
  >
    {/* Tab contents go here */}
  {/* </Tab.Content> */}


                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
