"use client";

import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="scroll-smooth">

      <Navbar />

      {/* HERO SECTION */}

      <section
        id="home"
        className="bg-red-600 text-white py-32 px-6 text-center scroll-mt-32"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Complete Fire Safety Solutions
        </h1>

        <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">
          Fire Extinguishers, Fire Alarm Systems,
          Refilling Services & Industrial Fire Protection
        </p>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          className="inline-block mt-10 bg-white text-red-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-200 transition"
        >
          Get Free Quote
        </a>
      </section>


      {/* SERVICES */}

      <section id="services" className="py-24 px-8 scroll-mt-32">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="shadow-2xl p-10 rounded-3xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl font-bold mb-5">
              Fire Extinguishers
            </h3>

            <p className="text-gray-600 text-lg leading-8">
              Premium quality extinguishers for homes,
              offices and industries.
            </p>
          </div>


          <div className="shadow-2xl p-10 rounded-3xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl font-bold mb-5">
              Refilling Service
            </h3>

            <p className="text-gray-600 text-lg leading-8">
              Fast and certified extinguisher refilling service.
            </p>
          </div>


          <div className="shadow-2xl p-10 rounded-3xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl font-bold mb-5">
              Fire Alarm Systems
            </h3>

            <p className="text-gray-600 text-lg leading-8">
              Advanced fire alarm systems installation & support.
            </p>
          </div>

        </div>

      </section>


      {/* PRODUCTS SLIDER */}

      <section id="products" className="bg-gray-100 py-24 px-8 scroll-mt-32">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Products
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          <SwiperSlide>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="/images/fire1.png"
                alt="Fire Extinguisher"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  ABC Fire Extinguisher
                </h3>

                <p className="text-gray-600">
                  Suitable for commercial & industrial use.
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="/images/fire2.png"
                alt="CO2 Extinguisher"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  CO2 Fire Extinguisher
                </h3>

                <p className="text-gray-600">
                  Ideal for electrical fire protection.
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="/images/fire3.png"
                alt="Fire Alarm"
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Fire Alarm System
                </h3>

                <p className="text-gray-600">
                  Advanced fire detection systems.
                </p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </section>


      {/* ABOUT US */}

      <section
        id="about"
        className="py-24 px-8 bg-white scroll-mt-32"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div>

            <img
              src="/images/about-fire.png"
              alt="About Fire Safety"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />

          </div>


          {/* RIGHT CONTENT */}

          <div>

            <p className="text-red-600 font-bold text-lg mb-4">
              ABOUT US
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Trusted Fire Safety Solutions Provider
            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-6">

              We provide complete fire protection solutions for
              residential, commercial, and industrial properties.
              Our mission is to ensure maximum safety through
              high-quality fire extinguishers, alarm systems,
              refilling services, and fire safety equipment.

            </p>

            <p className="text-gray-600 text-lg leading-9 mb-10">

              With years of experience in the fire safety industry,
              we are committed to delivering reliable products,
              certified services, and professional support to
              protect lives and property.

            </p>


            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-6">

              <div className="shadow-lg rounded-2xl p-6">

                <h3 className="text-4xl font-bold text-red-600 mb-2">
                  10+
                </h3>

                <p className="text-gray-600">
                  Years Experience
                </p>

              </div>


              <div className="shadow-lg rounded-2xl p-6">

                <h3 className="text-4xl font-bold text-red-600 mb-2">
                  500+
                </h3>

                <p className="text-gray-600">
                  Happy Clients
                </p>

              </div>


              <div className="shadow-lg rounded-2xl p-6">

                <h3 className="text-4xl font-bold text-red-600 mb-2">
                  1000+
                </h3>

                <p className="text-gray-600">
                  Products Installed
                </p>

              </div>


              <div className="shadow-lg rounded-2xl p-6">

                <h3 className="text-4xl font-bold text-red-600 mb-2">
                  24/7
                </h3>

                <p className="text-gray-600">
                  Support Service
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CLIENTS SECTION */}

      <section id="clients" className="py-24 px-8 scroll-mt-32">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Clients
        </h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >

          <SwiperSlide>
            <img src="/images/client1.png" className="h-24 mx-auto object-contain" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/client2.png" className="h-24 mx-auto object-contain" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/client3.png" className="h-24 mx-auto object-contain" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/client4.png" className="h-24 mx-auto object-contain" />
          </SwiperSlide>

        </Swiper>

      </section>


      {/* ENQUIRY FORM */}

      <section id="contact" className="bg-red-600 text-white py-24 px-8 scroll-mt-32">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-14">
            Enquiry Form
          </h2>


          <form className="bg-white text-black p-10 rounded-3xl shadow-2xl space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-xl"
            />


            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-4 rounded-xl"
            />


            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded-xl"
            />


            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border p-4 rounded-xl"
            ></textarea>


            <button
              className="bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-red-700 transition"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="bg-black text-white text-center py-10">

        <h2 className="text-3xl font-bold text-red-500 mb-4">
          FireSafe
        </h2>

        <p className="mb-2">
          GST No: 07ABCDE1234F1Z5
        </p>

        <p className="mb-2">
          Delhi, India
        </p>

        <p>
          © 2026 FireSafe. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}