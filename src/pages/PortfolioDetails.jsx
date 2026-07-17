import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioDetails() {
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

        <Link
          to="/"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Alex Smith</h1>
        </Link>

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
            <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">Portfolio Details</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper init-swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/app-1.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/product-1.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/branding-1.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/books-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="portfolio-info"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Client</strong>: ASU Company
                    </li>
                    <li>
                      <strong>Project date</strong>: 01 March, 2020
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="#">www.example.com</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="portfolio-description"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim.
                  </p>
                </div>
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
