// src/sections/Projects/Projects.jsx
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <Swiper
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 3500, // Time between slides in ms
          disableOnInteraction: false, // Keeps autoplay going after user interacts
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <div className="project-card">
            <h3>Job Tracker</h3>
            <p>A job tracking app to organize and monitor applications.</p>
            <p>
              <strong>Tech:</strong> React, Express, MongoDB
            </p>
            <div className="project-links">
              <a href="https://github.com/Josefbautista94/SBA319" target="_blank">
                GitHub
              </a>
              <a href="https://demo.com" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-card">
            <h3>Pokédex App</h3>
            <p>Search and explore Pokémon using a public API.</p>
            <p>
              <strong>Tech:</strong> HTML, JS, Axios
            </p>
            <div className="project-links">
              <a href="https://github.com/Josefbautista94/Pokdex-App" target="_blank">
                GitHub
              </a>
              <a href="https://demo.com" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-card">
            <h3>Crime Tracker NYC</h3>
            <p>Explore real-time NYC crime data on an interactive map.</p>
            <p>
              <strong>Tech:</strong> HTML, JS, Axios, MongoDB, Express
            </p>
            <div className="project-links">
              <a href="https://github.com/Josefbautista94/Capstone-Frontend" target="_blank">
                GitHub
              </a>
              <a href="https://demo.com" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
