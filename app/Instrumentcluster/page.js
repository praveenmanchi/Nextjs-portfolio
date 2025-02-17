import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import ScrollTop from "@/components/ScrollTop";
import Link from "next/link";
import Image from "next/image";


// export const metadata = {
//   title: "AMG Driving Academy",
// };

export const metadata = {
  title: {
    // template: "Praveen Manchi || %s",
    default:"Instrument Cluster", // a default is required when creating a template
  },
  openGraph: {
    images: ['https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/benz-og.png'],
  },
  description: "A UI for car's instrument cluster houses the various displays and indicators that enable a driver to operate the vehicle. Among these are several gauges – often a speedometer, odometer, tachometer, oil pressure gauge, fuel gauge, etc. – as well as various indicators for system malfunctions and warnings.",
};

const ProjectDetails = () => {
  
  return (
    <NoxfolioLayout onePageMenu={true}>
      {/* <PageBanner pageName={"Mobile Application Design"} /> */}
      {/* ProjectDetails Area start */}
      <section className="Projects-details-area  pb-130 rpb-100 rel z-1">
      <div className="Projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <Image
              src="/assets/images/Casestudies/Instrumentcluster/instrument cluster_small.png"
              alt="Project Details"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        <div className="container">
          
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>Instrument Cluster</h3>
                <p className="big-letter">
                Bestaş's digital instrument clusters employ high-resolution screens that provide a canvas for an immersive visual experience. Unlike analog counterparts, digital clusters allow for dynamic visualization of data. This includes the ability to display intricate graphics, animations, and customizable layouts that put essential information front and center. Drivers have the freedom to configure the cluster to their preferences, ensuring that the most relevant information is readily available.
                </p>
                {/* <p>
                AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event.
                </p> */}
                <ul className="list-style-one two-column mt-50 mb-40">
                  <li>UX &amp; UI Designing</li>
                  <li>Branding</li>
                  <li>Prototype </li>
                  <li>HMI</li>
                  {/* <li>Mobile Apps Design</li>
                  <li>System &amp; Guide</li>
                  <li>Graphics Design</li>
                  <li>Content Management</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp delay-0-4s">
              <div
                className="project-details-info rmb-55"
                style={{
                  backgroundImage:
                    "url(/assets/images/benz/1.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>Product Design</h5>
                </div>
                <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>Personal Mockup</h5>
                </div>
                <div className="pd-info-item">
                  <span>Tools Used</span>
                  <div style={{ display: "flex", gap: "30px" }}>
                    {/* <img src="assets/images/skills/skill1.svg" alt="Tool Icon 1" width="30" height="30" /> */}
                    <Image src="assets/images/skills/skill2.svg" alt="Tool Icon 2" width="30" height="30" />
                    <Image src="assets/images/skills/skill3.svg" alt="Tool Icon 3" width="30" height="30" />
                    {/* <img src="assets/images/skills/skill4.svg" alt="Tool Icon 4" width="30" height="30" />
                    <img src="assets/images/skills/skill5.svg" alt="Tool Icon 5" width="30" height="30" /> */}
                  </div>
                </div>
                <div className="pd-info-item">
                  <span>Published</span>
                  <h5>March 21, 2021</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
            <h3 className="title mb-25">Project Summery</h3>
            <p>
              
            A UI for car's instrument cluster houses the various displays and indicators that enable a driver to operate the vehicle. Among these are several gauges – often a speedometer, odometer, tachometer, oil pressure gauge, fuel gauge, etc. – as well as various indicators for system malfunctions and warnings.
            </p>
          </div>
          <div className="row pb-15">
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/Casestudies/Instrumentcluster/instrument cluster .jpg"
                  alt="Project Middle"
                  width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            {/* <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="/assets/images/benz/3.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/benz/4.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
              <iframe width="100%" height="700"
                src="https://miro.com/app/embed/uXjVO6G7kMw=/?pres=1&frameId=3458764556934523919&embedId=634206250766"
                frameBorder="0" scrolling="no" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/benz/5.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
              <iframe width="100%" height="700"
                src="https://miro.com/app/embed/uXjVO6G7kMw=/?pres=1&frameId=3458764556935056038&embedId=347979214595"
                frameBorder="0" scrolling="no" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/benz/5.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/benz/6.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
              <iframe width="100%" height="700"
                src="https://miro.com/app/embed/uXjVO6G7kMw=/?pres=1&frameId=3458764556930073563&embedId=228051356671"
                frameBorder="0" scrolling="no" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/benz/7.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
              <iframe width="100%" height="700"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fk5F1bQ0lJCJXdz3XWBp2ci%2FDo-best-or-nothing%3Ftype%3Ddesign%26node-id%3D1%253A2%26t%3DrQA5nrTDnCorjyp5-1"
                frameBorder="0" scrolling="no" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/benz/8.png"
                  alt="Project Middle"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
              <iframe width="100%" height="700"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk5F1bQ0lJCJXdz3XWBp2ci%2FDo-best-or-nothing%3Fpage-id%3D1%253A2%26type%3Ddesign%26node-id%3D1-224424%26viewport%3D370%252C626%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A224424%26show-proto-sidebar%3D1"
                frameBorder="0" scrolling="no" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <img
                  src="/assets/images/benz/9.png"
                  alt="Project Middle"
                />
              </div>
            </div> */}
          </div>
          
          {/* <div className="tag-share py-30 wow fadeInUp delay-0-2s">
            <div className="item">
              <b>Tags</b>
              <div className="tag-coulds">
                <Link legacyBehavior href="blog">
                  Design
                </Link>
                <Link legacyBehavior href="blog">
                  Figma
                </Link>
                <Link legacyBehavior href="blog">
                  Apps
                </Link>
              </div>
            </div>
            <div className="item">
              <b>Share</b>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div> */}
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
      {/* Project Details Area end */}
      {/* Related Projects Area start */}
      {/* <section className="related-Projects-area pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Related Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-2s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/Projects/related-project1.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Graphics Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Brand Identity Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-4s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/Projects/related-project2.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Mobile Apps Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-6s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/Projects/related-project3.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Dashboard Development
                    </Link>
                  </h4>
                </div>
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
      </section> */}
      <ScrollTop />
    </NoxfolioLayout>
  );
};
export default ProjectDetails;
