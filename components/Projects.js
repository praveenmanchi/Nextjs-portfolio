import Link from "next/link";
import { track } from "@vercel/analytics";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Discover My <span>Casestudies</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="blog-item wow fadeInUp delay-0-2s">
          
          <div className="content" 
          style={{backgroundImage: "url('assets/images/Casestudies/benz/banner_benz.png')", backgroundSize: 'cover', height: '696px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '30px'}}
          >
            {/* <div className="image">
              <img
                src="assets/images/Casestudies/benz/benz banner.png"
                alt="Blog"
              />
            </div> */}

            <span className="sub-title">Product Design</span>
            <h2>
              
                AMG Driving academy
              
            </h2>
            <p>
              AMG Driving academy, a car racing event organizer is planning to
              build a new platform to host their upcoming car racing event. The
              platform aims to provide a comprehensive solution for the
              participants, spectators, and event organizers to engage with each
              other before, during, and after the event.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="tag-coulds badges">
              <Link legacyBehavior href=".#">
                web UI
              </Link>
              <Link legacyBehavior href="#">
                Figma
              </Link>
              <Link legacyBehavior href="#">
                Branding
              </Link>
              <Link legacyBehavior href="#">
                Mobile App
              </Link>
              <Link legacyBehavior href="#">
                Branding
              </Link>
              <Link legacyBehavior href="#">
                B2C, B2B
              </Link>
            </div>
            
            </div>
            <div className="project-btn text-center wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/bestornothing">
                <a className="theme-btn floatright">
                  View <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <p></p>
          </div>
        </div>

        <div className="blog-item wow fadeInUp delay-0-2s">
          <div className="content" 
          style={{backgroundImage: "url('assets/images/Casestudies/cisco/banner_cisco.png')", backgroundSize: 'cover', height: '696px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '30px'}}
          >
            {/* <div className="image">
              <img
                src="assets/images/Casestudies/benz/benz banner.png"
                alt="Blog"
              />
            </div> */}

            <span className="sub-title">Web UI Design</span>
            <h2>
              Food Delivery for Senior Citizens
            </h2>
            <p>
            Food Delivery Website for seniors. This innovative platform is
            designed with simplicity and accessibility in mind, ensuring that
            our elderly population can easily order delicious meals from the
            comfort of their homes. Innovation with compassionate service to
            empower our seniors and promote digital inclusion.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="tag-coulds badges">
              <Link legacyBehavior href=".#">
              Web UI Design
              </Link>
              <Link legacyBehavior href="#">
              Accessibility
              </Link>
              <Link legacyBehavior href="#">
              B2C
              </Link>
              <Link legacyBehavior href="#">
              Data Visualization
              </Link>
            </div>
            
            </div>
            <div className="project-btn text-center wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/ciscofoods">
                <a className="theme-btn floatright">
                  View <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <p></p>
          </div>
        </div>

        {/* <div className="blog-item wow fadeInUp delay-0-2s">
          <div className="image">
            <img src="assets/images/Casestudies/cisco/main-2.png" alt="Blog" />
          </div>
          <div className="content">
            <span className="sub-title">Web UI Design</span>
            <h2>
              <Link legacyBehavior href="/ciscofoods">
                Food Delivery for Senior Citizens
              </Link>
            </h2>
            <p>
              Food Delivery Website for seniors. This innovative platform is
              designed with simplicity and accessibility in mind, ensuring that
              our elderly population can easily order delicious meals from the
              comfort of their homes. Innovation with compassionate service to
              empower our seniors and promote digital inclusion.
            </p>
            <div className="tag-coulds badges">
              <Link className="pe-none" legacyBehavior href=".#">
                Web UI Design
              </Link>
              <Link legacyBehavior href="#">
                Accessibility
              </Link>
              <Link legacyBehavior href="#">
                B2C
              </Link>
              <Link legacyBehavior href="#">
                Data Visualization
              </Link>
            </div>
            <p></p>
            <div className="project-btn text-center wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/ciscofoods">
                <a className="theme-btn floatright">
                  View <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="blog-item wow fadeInUp delay-0-2s">
          
          <div className="content" 
          style={{backgroundImage: "url('/assets/images/Casestudies/ATC/00-3.jpg')", backgroundSize: 'cover', height: '696px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '30px'}}
          >
            {/* <div className="image">
              <img
                src="assets/images/Casestudies/benz/benz banner.png"
                alt="Blog"
              />
            </div> */}

            <span className="sub-title">Product Design</span>
            <h2>
              
            Replacing ATC with Digital Tower Interfaces
              
            </h2>
            <p>
            This UX case study explores the implementation of digital tower
              interfaces in airport operations, focusing on their pivotal role
              in enhancing air traffic controllers' capabilities. Through
              user-centric design processes, including research, wireframing,
              and iterative testing, the study demonstrates how intuitive
              interfaces improve situational awareness, streamline operations,
              and elevate the overall airport experience.
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="tag-coulds badges">
              <Link legacyBehavior href=".#">
              Figma
              </Link>
              <Link legacyBehavior href="#">
              B2B tool
              </Link>
              <Link legacyBehavior href="#">
              HMI
              </Link>
              <Link legacyBehavior href="#">
              Usability
              </Link>
              <Link legacyBehavior href="#">
              AR
              </Link>
            </div>
            
            </div>
            <div className="project-btn text-center wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/atc-digitaltower">
                <a className="theme-btn floatright">
                  View <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <p></p>
          </div>
        </div>

        {/* <div className="blog-item wow fadeInUp delay-0-2s">
          <div className="image">
            <img src="/assets/images/Casestudies/ATC/00-3.jpg" alt="Blog" />
          </div>
          <div className="content">
            <span className="sub-title">Product Design</span>
            <h2>
              <Link legacyBehavior href="/atc-digitaltower">
                Replacing ATC with Digital Tower Interfaces
              </Link>
            </h2>
            <p>
              This UX case study explores the implementation of digital tower
              interfaces in airport operations, focusing on their pivotal role
              in enhancing air traffic controllers' capabilities. Through
              user-centric design processes, including research, wireframing,
              and iterative testing, the study demonstrates how intuitive
              interfaces improve situational awareness, streamline operations,
              and elevate the overall airport experience.
            </p>
            <div className="tag-coulds badges">
              <Link legacyBehavior href="#">
                Figma
              </Link>
              <Link legacyBehavior href="#">
                B2B tool
              </Link>
              <Link legacyBehavior href="#">
                HMI
              </Link>
              <Link legacyBehavior href="#">
                Usability
              </Link>
              <Link legacyBehavior href="#">
                VR
              </Link>
            </div>
            <p></p>
            <div className="project-btn text-center wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/atc-digitaltower">
                <a className="theme-btn floatright">
                  View <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="blog-item wow fadeInUp delay-0-2s">
          <div className="image">
            <img src="assets/images/Casestudies/abc/group2.png" alt="Blog" />
          </div>
          <div className="content">
            <span className="sub-title">Product Design</span>
            <h2>
              <Link legacyBehavior href="/abc">
                Redesigning a BI Analytics Configuration
              </Link>
            </h2>
            <p>
              The UI will showcase a redesigned user interface for the
              configuration screen of ABC Data Analytics Suite application. The
              redesign aims to improve usability, navigation, and overall user
              experience while aligning with modern UI trends and best
              practices.
            </p>
            <div className="tag-coulds badges">
              <Link legacyBehavior href=".#">
                Web UI Design
              </Link>
              <Link legacyBehavior href="#">
                XD
              </Link>
              <Link legacyBehavior href="#">
                B2B
              </Link>
              <Link legacyBehavior href="#">
                Usability
              </Link>
            </div>
            <p></p>
            <div className="project-btn text-center wow fadeInUp delay-0-2s">
              <Link legacyBehavior href="/abc">
                <a className="theme-btn floatright">
                  View <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/casestudies">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Projects;

export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="/project-details">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
