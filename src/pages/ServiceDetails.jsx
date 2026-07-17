import React from "react";

export default function ServiceDetails() {
  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <button
          className="header-toggle d-xl-none bi bi-list"
          aria-label="Toggle navigation"
        />

        <div className="profile-img">
          <img
            src="/assets/img/my-profile-img.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>

        <a
          href="/"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Alex Smith</h1>
        </a>

        <div className="social-links text-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bi bi-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/#hero">
                <i className="bi bi-house navicon" />
                Home
              </a>
            </li>
            <li>
              <a href="/#about">
                <i className="bi bi-person navicon" /> About
              </a>
            </li>
            <li>
              <a href="/#resume">
                <i className="bi bi-file-earmark-text navicon" /> Resume
              </a>
            </li>
            <li>
              <a href="/#portfolio">
                <i className="bi bi-images navicon" /> Portfolio
              </a>
            </li>
            <li>
              <a href="/#services">
                <i className="bi bi-hdd-stack navicon" /> Services
              </a>
            </li>
            <li>
              <a href="/#contact">
                <i className="bi bi-envelope navicon" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="page-title dark-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Service Details</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Service Details</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="services-list">
                  <a href="#" className="active">
                    Web Design
                  </a>
                  <a href="#">Software Development</a>
                  <a href="#">Product Management</a>
                  <a href="#">Graphic Design</a>
                  <a href="#">Marketing</a>
                </div>

                <h4>Enim qui eos rerum in delectus</h4>
                <p>
                  Nam voluptatem quasi numquam quas fugiat ex temporibus quo
                  est. Quia aut quam quod facere ut non occaecati ut aut.
                  Nesciunt mollitia illum tempore corrupti sed eum reiciendis.
                  Maxime modi rerum.
                </p>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="/assets/img/services.jpg"
                  alt=""
                  className="img-fluid services-img"
                />
                <h3>
                  Temporibus et in vero dicta aut eius lidero plastis trand
                  lined voluptas dolorem ut voluptas
                </h3>
                <p>
                  Blanditiis voluptate odit ex error ea sed officiis deserunt.
                  Cupiditate non consequatur et doloremque consequuntur.
                  Accusantium labore reprehenderit error temporibus saepe
                  perferendis fuga doloribus vero. Qui omnis quo sit.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" />{" "}
                    <span>Aut eum totam accusantium voluptatem.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />{" "}
                    <span>
                      Assumenda et porro nisi nihil nesciunt voluptatibus.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle" />{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea</span>
                  </li>
                </ul>
                <p>
                  Est reprehenderit voluptatem necessitatibus asperiores neque
                  sed ea illo. Deleniti quam sequi optio iste veniam repellat
                  odit. Aut pariatur itaque nesciunt fuga.
                </p>
                <p>
                  Sunt rem odit accusantium omnis perspiciatis officia.
                  Laboriosam aut consequuntur recusandae mollitia doloremque est
                  architecto cupiditate ullam. Quia est ut occaecati fuga.
                  Distinctio ex repellendus eveniet velit sint quia sapiente
                  cumque.
                </p>
              </div>
            </div>
          </div>
        </section>
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

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      <div id="preloader" />
    </>
  );
}
