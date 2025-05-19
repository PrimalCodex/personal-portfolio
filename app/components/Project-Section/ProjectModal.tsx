import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Navigation, Pagination} from "swiper/modules";

interface ProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  description: string;
  images: string[];
  github?: string;
  tech: string[];
}

export default function ProjectModal({
  isOpen,
  closeModal,
  title,
  description,
  images,
  github,
  tech,
}: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-30"/>
        <div className="fixed max-h-full inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left
            align-middle shadow-xl transition-all">
              <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 mb-4">
                {title}
              </Dialog.Title>
              <p className="text-gray-700 mb-4">{description}</p>

              <div className="mb-4 relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  pagination={{clickable: true}}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="rounded-md"
                >
                  {images.map((src, i) => (
                    <SwiperSlide key={i}>
                      <img src={src} alt={`Screenshot ${i + -1}`} className="w-full rounded-md"/>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className="swiper-button-prev text-4xl hover:scale-105 text-gray-500 text-center text-gray size-15 absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 bg-blend-darken rounded-full shadow-md ">
                  ‹
                </button>
                <button
                  className="swiper-button-next text-4xl hover:scale-105 text-gray-500 size-15 absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 bg-blend-darken rounded-full shadow-md hover:elev">
                  ›
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t, i) => (
                  <span key={i} className="bg-gray-100 text-sm text-gray-700 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              {github ? (
                <a
                  //projects Link
                  href={github}
                  target="_blank"
                  className="inline-block mt-2 text-blue-600 hover:underline"
                >
                  🔗 View GitHub Repository
                </a>
              ) : (
                <p className="text-gray-500 text-sm mt-2">Source code available on request.</p>
              )}

              <div className="mt-6">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
