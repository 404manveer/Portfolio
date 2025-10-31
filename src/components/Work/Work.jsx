"use client";

import React, { useRef, useState } from "react";
import { projects } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Work = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);
  React.useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [selectedProject]);


  return (
    <section id="work" className="p-4 container font-sans relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        autoHeight={false}
        slidesPerView={3}
        breakpoints={{
          360: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        onBeforeInit={(swiper) => {
          // ✅ Attach custom navigation elements
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          // ✅ Re-initialize navigation after refs are defined
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="rounded-2xl shadow-lg"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="!h-auto flex">
            <div
              onClick={() => handleOpenModal(project)}
              className="flex flex-col h-full border border-white/10 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 w-full"
            >
              {/* Image */}
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.slice(0, 7).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="text-white flex items-center justify-center gap-6 mt-6">
        <button
          ref={prevRef}
          className="size-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-purple-600/20 transition"
        >
          <BiChevronLeft className="text-[2.5rem]" />
        </button>
        <button
          ref={nextRef}
          className="size-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-purple-600/20 transition"
        >
          <BiChevronRight className="text-[2.5rem]" />
        </button>
      </div>

      {/* Modal */}
     {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
    {/* Outer container with scroll for long content */}
    <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
      {/* Close Button */}
      <div className="flex justify-end p-3 sticky top-0 bg-gray-900/90 backdrop-blur-md z-10">
        <button
          onClick={handleCloseModal}
          className="text-white text-3xl font-bold hover:text-purple-500"
        >
          &times;
        </button>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-8 pb-6">
        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full max-h-[22rem] object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {selectedProject.title}
          </h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
            {selectedProject.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-6">
            {selectedProject.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold text-center transition-colors"
            >
              View Code
            </a>
            <a
              href={selectedProject.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold text-center transition-colors"
            >
              View Live
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Work;
