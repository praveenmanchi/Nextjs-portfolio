import Link from "next/link";
import Counter from "./Counter";


const counterData = [
  { id: 1, text: "Years Of Experience", value: "5", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "50", valueType: "plus" },
  { id: 3, text: "Client Satisfactions", value: "99", valueType: "percent" },
];

const Hero = () => {
  return (
      <>
      <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-7">
              <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
                <span className="h2">Hello, i’m </span>
                <h1>
                  Praveen Manchi
                </h1>
                {/* <h5>
                Praveen Manchi
              </h5> */}
                <p>
                I am a designer focusing on design systems, interaction, and motion. Blending design and technology I love to create emotional and human-friendly solutions.
                </p>
                <div className="hero-btns">
                  <Link legacyBehavior
                        href="https://s466bgvk1segjdyf.public.blob.vercel-storage.com/Praveen_UX:UI-eOllNt4bdoNyGMRabZsjlv1tFIstLS.pdf">
                    <a className="theme-btn">
                      Download Resume <i className="far fa-angle-right"/>
                    </a>
                  </Link>
                  {/* <Link legacyBehavior href="/contact">
                  <a className="read-more">
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-5 order-lg-3">
              <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
                {counterData.map((count) => (
                    <div className="counter-item counter-text-wrap" key={count.id}>
                      <Counter end={count.value} extraClass={count.valueType}/>
                      <span className="counter-title">{count.text}</span>
                    </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              {/* <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/me.png" alt="Author" />
              <div className="progress-shape">
                <img
                  src="assets/images/hero/progress-shape.png"
                  alt="Progress"
                />
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
        </div>
      </section>
      </>
  );
};
export default Hero;

export const Hero2 = () => {
  return (
      <div
          className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}

  <div id="home" className="hero-area-two pt-150 rel z-2">
    <div className="container rel z-3">
      <div className="hero-two-content">
          <span className="sub-title wow fadeInLeft delay-0-1s">
            <i className="flaticon-asterisk-1"/> UI/UX Designer
          </span>
        <span className="title wow fadeInLeft delay-0-2s">
            Hello <small>i,m</small>
          </span>
        <span className="name wow fadeInRight delay-0-4s">henry gayle</span>
        <span className="designations wow fadeInLeft delay-0-6s">
            <span>Ux</span> Designer
          </span>
      </div>
      <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <div className="bg-circle" />
              <img src="assets/images/hero/hero-two.png" alt="Author" />
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down">
        <img src="assets/images/hero/scroll-down.png" alt="" />
      </a>
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
    </div>
      </div>
  );
};
