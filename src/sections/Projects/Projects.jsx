// src/sections/Projects/Projects.jsx
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
      >
        <SwiperSlide>
          <div className="project-card">
            <h3>Job Tracker</h3>
            <p>A Job tracking app app.</p>
            <p><strong>Tech:</strong> React, Express, MongoDB</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank">GitHub</a>
              <a href="https://demo.com" target="_blank">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-card">
            <h3>Pokédex App</h3>
            <p>Search and explore Pokémon with an API.</p>
            <p><strong>Tech:</strong> HTML, JS, Axios</p>
            <div className="project-links">
              <a href="https://github.com/" target="_blank">GitHub</a>
              <a href="https://demo.com" target="_blank">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more <SwiperSlide> elements here */}
      </Swiper>
    </section>
  );
}

