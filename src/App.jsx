import { useEffect, useMemo, useState } from "react";
import { Link, Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const navItems = [
  { id: "hero", label: "Home", icon: "bi-house" },
  { id: "about", label: "About", icon: "bi-person" },
  { id: "resume", label: "Resume", icon: "bi-file-earmark-text" },
  { id: "contact", label: "Contact", icon: "bi-envelope" },
];

const typedWords = ["Designer", "Developer", "Freelancer", "Photographer"];

const stats = [
  { icon: "bi-emoji-smile", value: 2, label: "Happy Clients" },
  { icon: "bi-journal-richtext", value: 3, label: "Projects" },
  { icon: "bi-headset", value: 1453, label: "Hours Of Support" },
  { icon: "bi-people", value: 32, label: "Hard Workers" },
];

const skills = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 75 },
  { name: "PHP", value: 80 },
  { name: "WordPress/CMS", value: 90 },
  { name: "Photoshop", value: 55 },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("Designer");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.body.classList.add("index-page");
    return () => {
      document.body.classList.remove("index-page");
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    let currentWord = 0;
    let currentChar = 0;
    let deleting = false;
    let timeoutId;

    const type = () => {
      const fullText = typedWords[currentWord];
      const nextText = deleting
        ? fullText.slice(0, currentChar - 1)
        : fullText.slice(0, currentChar + 1);

      setTypedText(nextText);

      if (!deleting && nextText === fullText) {
        timeoutId = window.setTimeout(() => {
          deleting = true;
          type();
        }, 1500);
      } else if (deleting && nextText === "") {
        deleting = false;
        currentWord = (currentWord + 1) % typedWords.length;
        currentChar = 0;
        timeoutId = window.setTimeout(type, 300);
      } else {
        currentChar = deleting ? currentChar - 1 : currentChar + 1;
        const delay = deleting ? 60 : 120;
        timeoutId = window.setTimeout(type, delay);
      }
    };

    type();
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumeSections = useMemo(
    () => ({
      summary: {
        title: "Summary",
        content:
          "Detail-oriented and highly motivated UI/UX Designer and Web Developer with a strong foundation in building responsive, user-centered digital products from concept to launch.",
        details: ["Phnom Penh, Cambodia", "069395197", "puthik1155@gmail.com"],
      },
      education: {
        title: "Education",
        degree: "Associate Degree in Information Technology",
        date: "2024 - 2026",
        location: "Phnom Penh, Cambodia",
        description:
          "Gained fundamental and practical knowledge in software logic, database systems, and interactive web application frameworks, aligning design theory with technical production execution.",
      },
      experience: {
        title: "Professional Experience",
        role: "Freelance UI/UX Designer & Web Developer",
        date: "2026 - Present",
        location: "Phnom Penh, Cambodia (Remote)",
        responsibilities: [
          "Design and program fully responsive, intuitive websites utilizing HTML, CSS, JavaScript, and PHP.",
          "Architect dynamic content management systems using customized WordPress ecosystems.",
          "Leverage Adobe Photoshop to design custom UI wireframes, high-fidelity mockups, and optimized web graphics.",
          "Troubleshoot front-end layouts and optimize cross-browser compatibility for a seamless user experience.",
        ],
      },
    }),
    [],
  );

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormMessage("Your message has been sent. Thank you!");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <header
        id="header"
        className={`header dark-background d-flex flex-column${menuOpen ? " header-show" : ""}`}
      >
        <button
          type="button"
          className={`header-toggle d-xl-none bi ${menuOpen ? "bi-x" : "bi-list"}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        />

        <div className="profile-img">
          <img
            src="/assets/img/thik.jpg"
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>

        <a
          href="#hero"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Yuth Puthik</h1>
        </a>

        <div className="social-links text-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  activeClass="active"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className={`bi ${item.icon} navicon`} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main">
        <Element name="hero">
          <section id="hero" className="hero section dark-background">
            <img
              src="/assets/img/backPic.jpg"
              alt="Background"
              data-aos="fade-in"
              className=""
            />
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <h2>Yuth Puthik</h2>
              <p>
                I'm <span className="typed">{typedText}</span>
              </p>
            </div>
          </section>
        </Element>

        <Element name="about">
          <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
              <h2>About</h2>
              <p>
                I am a passionate UI/UX Designer and Web Developer dedicated to
                creating visually striking, human-centered digital experiences.
                With a strong foundation in both creative design and clean
                coding, I specialize in bridging the gap between aesthetics and
                functionality to build seamless, high-performance web
                applications.
              </p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                  <img
                    src="/assets/img/backPic.jpg"
                    className="img-fluid"
                    alt="About"
                  />
                </div>
                <div className="col-lg-8 content">
                  <h2>UI/UX Designer &amp; Web Developer.</h2>
                  <p className="fst-italic py-3">
                    Passionate about building intuitive, human-centered web
                    applications by blending creative interface design with
                    clean, responsive code.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Birthday:</strong> <span>1 January 2006</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Website:</strong> <span>www.example.com</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Phone:</strong> <span>069395197</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>City:</strong>{" "}
                          <span>Phnom Penh, Cambodia</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Age:</strong> <span>20</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Degree:</strong> <span>Associate</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Email:</strong>{" "}
                          <span>puthik1155@gmail.com</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Freelance:</strong> <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="py-3">
                    My technical background allows me to handle the entire
                    lifecycle of a web project. I lean on my front-end skills in
                    HTML, CSS, and JavaScript to build interactive, responsive
                    user interfaces, while utilizing PHP and WordPress to
                    deliver robust back-end systems. Combined with visual asset
                    customization in Photoshop, I transform creative concepts
                    into polished, production-ready digital products that
                    perform flawlessly on any device.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              {stats.map((item) => (
                <div className="col-lg-3 col-md-6" key={item.label}>
                  <div className="stats-item">
                    <i className={`bi ${item.icon}`} />
                    <span className="purecounter">{item.value}</span>
                    <p>
                      <strong>{item.label}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="skills section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>
              A snapshot of my technical proficiencies and design capabilities,
              combining creative front-end presentation with functional back-end
              logic.
            </p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              <div className="col-lg-6">
                {skills.slice(0, 3).map((skill) => (
                  <div className="progress" key={skill.name}>
                    <span className="skill">
                      <span>{skill.name}</span>{" "}
                      <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.value}%` }}
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-6">
                {skills.slice(3).map((skill) => (
                  <div className="progress" key={skill.name}>
                    <span className="skill">
                      <span>{skill.name}</span>{" "}
                      <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.value}%` }}
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Element name="resume">
          <section id="resume" className="resume section">
            <div className="container section-title" data-aos="fade-up">
              <h2>Resume</h2>
              <p>
                A comprehensive overview of my academic foundation and
                professional growth. This section details my educational
                background in Information Technology alongside hands-on
                freelance experience designing intuitive user interfaces and
                architecting robust web solutions.
              </p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">
                    {resumeSections.summary.title}
                  </h3>
                  <div className="resume-item pb-0">
                    <h4>Yuth Puthik</h4>
                    <p>
                      <em>{resumeSections.summary.content}</em>
                    </p>
                    <ul>
                      {resumeSections.summary.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="resume-title">
                    {resumeSections.education.title}
                  </h3>
                  <div className="resume-item">
                    <h4>{resumeSections.education.degree}</h4>
                    <h5>{resumeSections.education.date}</h5>
                    <p>
                      <em>{resumeSections.education.location}</em>
                    </p>
                    <p>{resumeSections.education.description}</p>
                  </div>
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className="resume-title">
                    {resumeSections.experience.title}
                  </h3>
                  <div className="resume-item">
                    <h4>{resumeSections.experience.role}</h4>
                    <h5>{resumeSections.experience.date}</h5>
                    <p>
                      <em>{resumeSections.experience.location}</em>
                    </p>
                    <ul>
                      {resumeSections.experience.responsibilities.map(
                        (item) => (
                          <li key={item}>{item}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>
                Have an upcoming digital project or want to discuss a creative
                freelance collaboration? Get in touch using the active
                communication channels below.
              </p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-md-5">
                  <div className="info-wrap">
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="bi bi-geo-alt flex-shrink-0" />
                      <div>
                        <h3>Address</h3>
                        <p>Phnom Penh, Cambodia</p>
                      </div>
                    </div>
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="bi bi-telephone flex-shrink-0" />
                      <div>
                        <h3>Call Us</h3>
                        <p>069395197</p>
                      </div>
                    </div>
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="bi bi-envelope flex-shrink-0" />
                      <div>
                        <h3>Email Us</h3>
                        <p>puthik1155@gmail.com</p>
                      </div>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244307.7297378772!2d104.72147134267675!3d11.576067096057039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh"
                      frameBorder="0"
                      style={{ border: 0, width: "100%", height: 380 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Phnom Penh map"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <form className="php-email-form" onSubmit={handleFormSubmit}>
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label htmlFor="name-field" className="pb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name-field"
                          className="form-control"
                          required
                          value={formState.name}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email-field" className="pb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email-field"
                          className="form-control"
                          required
                          value={formState.email}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="subject-field" className="pb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject-field"
                          className="form-control"
                          required
                          value={formState.subject}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="message-field" className="pb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message-field"
                          rows="10"
                          className="form-control"
                          required
                          value={formState.message}
                          onChange={handleFormChange}
                        />
                      </div>
                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          {formMessage ||
                            "Your message has been sent. Thank you!"}
                        </div>
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Element>
      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">iPortfolio</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed by <a href="https://themewagon.com/">ThemeWagon</a>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up-short" />
        </button>
      )}
    </>
  );
}

export default App;
