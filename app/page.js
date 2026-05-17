"use client";

import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="scroll-smooth">


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

<section
  id="products"
  className="
    bg-gradient-to-b
    from-gray-50
    to-white
    py-24
    px-4
    md:px-8
    scroll-mt-32
  "
>

  {/* HEADING */}

  <div className="text-center mb-16">

    <p className="text-red-600 font-semibold tracking-[4px] uppercase mb-4">
      Our Products
    </p>

    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">

       Fire Safety
      <span className="text-red-600">
        {" "}Solutions
      </span>

    </h2>

    <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-lg leading-8">

      Advanced fire extinguishers, suppression systems,
      alarms and industrial safety equipment designed
      for maximum protection.

    </p>

  </div>



  {/* SLIDER */}

  <Swiper
    slidesPerView={1}
    spaceBetween={24}
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
    className="pb-20"
  >



    {/* CARD 1 */}

    <SwiperSlide>

      <div
      className="
      group
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-500
      border
      border-gray-200
      hover:-translate-y-2
    "
      >

        {/* IMAGE */}

        <div
          className="
            h-[320px]
            bg-white
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          <img
            src="/images/fire1.png"
            alt="ABC Fire Extinguisher"
            className="
              h-full
              w-full
              object-contain
              p-6
              group-hover:scale-105
              transition-transform
              duration-500
            "
          />

        </div>



        {/* CONTENT */}

        <div className="p-7">

          <h3 className="text-[30px] font-bold text-gray-900 mb-4">

            ABC Fire Extinguisher

          </h3>

          <p className="text-gray-600 leading-8 text-[17px] mb-6">

            Suitable for commercial, industrial and
            residential fire safety applications.

          </p>

          <Link
            href="/products/abc-fire-extinguisher"
            className="
              inline-flex
              items-center
              gap-2
              text-red-600
              font-semibold
              hover:gap-4
              transition-all
            "
          >

            View Details →

          </Link>

        </div>

      </div>

    </SwiperSlide>




    {/* CARD 2 */}

    <SwiperSlide>

      <div
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-500
        border
        border-gray-200
        hover:-translate-y-2
      "
      >

        <div
          className="
            h-[320px]
            bg-white
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          <img
            src="/images/co2-fire.png"
            alt="CO2 Fire Extinguisher"
            className="
              h-full
              w-full
              object-contain
              p-6
              group-hover:scale-105
              transition-transform
              duration-500
            "
          />

        </div>

        <div className="p-7">

          <h3 className="text-[30px] font-bold text-gray-900 mb-4">
            CO2 Fire Extinguisher
          </h3>

          <p className="text-gray-600 leading-8 text-[17px] mb-6">
            Ideal for electrical panels, server rooms
            and office fire protection.
          </p>

          <Link
            href="/products/co2-fire-extinguisher"
            className="
              inline-flex
              items-center
              gap-2
              text-red-600
              font-semibold
              hover:gap-4
              transition-all
            "
          >
            View Details →
          </Link>

        </div>

      </div>

    </SwiperSlide>




    {/* CARD 3 */}

    <SwiperSlide>

      <div
       className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-500
        border
        border-gray-200
        hover:-translate-y-2
      "
      >

        <div
          className="
            h-[320px]
            bg-white
            flex
            items-center
            justify-center
          "
        >

          <img
            src="/images/watermist-cafs-250l.png"
            alt="Watermist CAFS"
            className="
              h-full
              w-full
              object-contain
              p-6
              group-hover:scale-105
              transition-transform
              duration-500
            "
          />

        </div>

        <div className="p-7">

          <h3 className="text-[30px] font-bold text-gray-900 mb-4">
            Watermist CAFS System
          </h3>

          <p className="text-gray-600 leading-8 text-[17px] mb-6">
            Advanced industrial fire suppression
            system with rapid cooling technology.
          </p>

          <Link
            href="/products/watermist-cafs-250l"
            className="
              inline-flex
              items-center
              gap-2
              text-red-600
              font-semibold
              hover:gap-4
              transition-all
            "
          >
            View Details →
          </Link>

        </div>

      </div>

    </SwiperSlide>

  </Swiper>

</section>


      {/* ABOUT US */}

<section
  id="about"
  className="
    py-24
    px-4
    md:px-8
    bg-gradient-to-b
    from-white
    to-gray-50
    scroll-mt-32
    overflow-hidden
  "
>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">




    {/* LEFT IMAGE */}

    <div className="relative">

      <div
        className="
          overflow-hidden
          rounded-[32px]
          shadow-2xl
          border
          border-gray-200
          bg-white
        "
      >

        <img
          src="/images/about-fire.png"
          alt="About Fire Safety"
          className="
            w-full
            h-[520px]
            object-cover
            hover:scale-105
            transition-all
            duration-700
          "
        />

      </div>



      {/* FLOATING EXPERIENCE CARD */}

      <div
        className="
          absolute
          bottom-6
          left-6
          bg-white
          shadow-xl
          rounded-2xl
          px-7
          py-5
          border
          border-gray-200
        "
      >

        <h3 className="text-4xl font-extrabold text-red-600">
          10+
        </h3>

        <p className="text-gray-700 font-medium">
          Years Experience
        </p>

      </div>

    </div>





    {/* RIGHT CONTENT */}

    <div>

      {/* SUBTITLE */}

      <p
        className="
          text-red-600
          font-bold
          tracking-[5px]
          uppercase
          mb-5
        "
      >
        About Us
      </p>



      {/* TITLE */}

      <h2
        className="
          max-w-[700px]
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-extrabold
          leading-tight
          text-gray-900
          mb-8
        "
      >

        Trusted Fire
        <span className="text-red-600">
          {" "}Safety Solutions
        </span>

        <br />

        For Every Industry

      </h2>



      {/* DESCRIPTION */}

      <p
        className="
          text-gray-600
          text-[17px]
          leading-8
          mb-6
        "
      >

        We provide complete fire protection solutions
        for residential, commercial, and industrial
        properties with certified products and expert
        installation services.

      </p>

      <p
        className="
          text-gray-600
          text-[17px]
          leading-8
          mb-12
        "
      >

        Our mission is to deliver advanced fire safety
        systems, reliable maintenance services and
        emergency protection solutions that safeguard
        lives and property.

      </p>




      {/* STATS */}

      <div className="grid grid-cols-2 gap-6">

        {/* CARD 1 */}

        <div
          className="
            bg-white
            border
            border-gray-200
            shadow-lg
            rounded-2xl
            p-7
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          <h3 className="text-5xl font-extrabold text-red-600 mb-3">
            500+
          </h3>

          <p className="text-gray-700 text-lg">
            Happy Clients
          </p>

        </div>



        {/* CARD 2 */}

        <div
          className="
            bg-white
            border
            border-gray-200
            shadow-lg
            rounded-2xl
            p-7
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          <h3 className="text-5xl font-extrabold text-red-600 mb-3">
            1000+
          </h3>

          <p className="text-gray-700 text-lg">
            Products Installed
          </p>

        </div>



        {/* CARD 3 */}

        <div
          className="
            bg-white
            border
            border-gray-200
            shadow-lg
            rounded-2xl
            p-7
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          <h3 className="text-5xl font-extrabold text-red-600 mb-3">
            24/7
          </h3>

          <p className="text-gray-700 text-lg">
            Support Service
          </p>

        </div>



        {/* CARD 4 */}

        <div
          className="
            bg-white
            border
            border-gray-200
            shadow-lg
            rounded-2xl
            p-7
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          <h3 className="text-5xl font-extrabold text-red-600 mb-3">
            ISO
          </h3>

          <p className="text-gray-700 text-lg">
            Certified Products
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* CLIENTS SECTION */}

   <section
  id="clients"
  className="
    py-24
    px-4
    md:px-8
    bg-gradient-to-b
    from-gray-50
    to-white
    scroll-mt-32
    overflow-hidden
  "
>

  <div className="max-w-7xl mx-auto">




    {/* HEADING */}

    <div className="text-center mb-16">

      <p
        className="
          text-red-600
          font-bold
          tracking-[4px]
          uppercase
          mb-4
        "
      >
        Our Clients
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-gray-900
          leading-tight
        "
      >

        Trusted By
        <span className="text-red-600">
          {" "}Leading Brands
        </span>

      </h2>

      <p
        className="
          text-gray-500
          mt-6
          max-w-3xl
          mx-auto
          text-lg
          leading-8
        "
      >

        We proudly provide fire safety solutions
        across luxury residential projects,
        commercial towers, malls, corporate offices
        and industrial facilities in Gurugram & NCR.

      </p>

    </div>




    {/* CLIENTS SLIDER */}

    <Swiper
      slidesPerView={2}
      spaceBetween={24}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      className="pb-10"
    >



      {/* CLIENT 1 */}

      <SwiperSlide>

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            h-40
            flex
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            p-6
          "
        >

          <img
            src="/images/client1.jpeg"
            alt="DLF Cyber City"
            className="
              max-h-20
              object-contain
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

        </div>

      </SwiperSlide>




      {/* CLIENT 2 */}

      <SwiperSlide>

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            h-40
            flex
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            p-6
          "
        >

          <img
            src="/images/client2.jpeg"
            alt="M3M"
            className="
              max-h-20
              object-contain
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

        </div>

      </SwiperSlide>




      {/* CLIENT 3 */}

      <SwiperSlide>

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            h-40
            flex
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            p-6
          "
        >

          <img
            src="/images/client3.jpeg"
            alt="Ambience Mall"
            className="
              max-h-20
              object-contain
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

        </div>

      </SwiperSlide>




      {/* CLIENT 4 */}

      <SwiperSlide>

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            h-40
            flex
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            p-6
          "
        >

          <img
            src="/images/client4.jpeg"
            alt="Vatika"
            className="
              max-h-20
              object-contain
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

        </div>

      </SwiperSlide>




      {/* CLIENT 5 */}

      <SwiperSlide>

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            h-40
            flex
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            p-6
          "
        >

          <img
            src="/images/client5.jpeg"
            alt="DLF Camellias"
            className="
              max-h-20
              object-contain
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

        </div>

      </SwiperSlide>




      {/* CLIENT 6 */}

      <SwiperSlide>

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            h-40
            flex
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            p-6
          "
        >

          <img
            src="/images/client6.jpeg"
            alt="Elan"
            className="
              max-h-20
              object-contain
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

        </div>

      </SwiperSlide>




      {/* CLIENT 7 */}

      <SwiperSlide>

        <div
          className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            h-40
            flex
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            p-6
          "
        >

          <img
            src="/images/client7.jpeg"
            alt="Unitech"
            className="
              max-h-20
              object-contain
              grayscale
              hover:grayscale-0
              transition-all
              duration-500
            "
          />

        </div>

      </SwiperSlide>






    </Swiper>

  </div>

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




    </main>
  );
}