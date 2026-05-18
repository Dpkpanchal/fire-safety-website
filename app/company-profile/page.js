
export default function CompanyProfilePage() {

  return (

    <>

      <section className="bg-white">

  {/* HERO SECTION */}

  <div className="relative overflow-hidden bg-black text-white">

    <img
      src="/images/company-banner.jpeg"
      alt="EKTA Fire Service"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
    />

    <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">

    

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
        Complete Fire Protection
        <span className="text-red-500"> Solutions</span>
      </h1>

      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-9">
        EKTA Fire Service provides advanced fire safety systems,
        fire extinguishers, suppression systems, installation,
        maintenance and emergency protection services across
        Gurugram & NCR.
      </p>

    </div>

  </div>



  {/* ABOUT COMPANY */}

  <section className="py-24 px-4 md:px-8 bg-white">

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <img
          src="/images/about-fire.jpeg"
          alt="About EKTA Fire Service"
          className="rounded-[32px] shadow-2xl w-full h-[550px] object-cover"
        />

      </div>



      <div>

        <p className="text-red-600 font-bold tracking-[5px] uppercase mb-5">
          About Company
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
          Trusted Fire Safety
          <span className="text-red-600"> Solutions Provider</span>
        </h2>

        <p className="text-gray-600 text-lg leading-9 mb-6">
          EKTA Fire Service is a leading provider of complete fire
          protection systems for commercial buildings, industrial
          facilities, offices, malls, warehouses and residential
          projects.
        </p>

        <p className="text-gray-600 text-lg leading-9 mb-10">
          We specialize in supply, installation, testing,
          commissioning and maintenance of fire extinguishers,
          hydrant systems, suppression systems, fire alarms,
          sprinklers and emergency safety solutions.
        </p>



        <div className="grid grid-cols-2 gap-6">

          <div className="bg-gray-50 rounded-2xl p-7 shadow-lg border border-gray-200">
            <h3 className="text-5xl font-extrabold text-red-600 mb-3">
              10+
            </h3>
            <p className="text-gray-700 text-lg">
              Years Experience
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-7 shadow-lg border border-gray-200">
            <h3 className="text-5xl font-extrabold text-red-600 mb-3">
              500+
            </h3>
            <p className="text-gray-700 text-lg">
              Happy Clients
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-7 shadow-lg border border-gray-200">
            <h3 className="text-5xl font-extrabold text-red-600 mb-3">
              1000+
            </h3>
            <p className="text-gray-700 text-lg">
              Projects Completed
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-7 shadow-lg border border-gray-200">
            <h3 className="text-5xl font-extrabold text-red-600 mb-3">
              24/7
            </h3>
            <p className="text-gray-700 text-lg">
              Emergency Support
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>



  {/* OUR SERVICES */}

  <section className="py-24 bg-gray-50 px-4 md:px-8">

    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">

        <p className="text-red-600 font-bold tracking-[5px] uppercase mb-4">
          Our Services
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Complete Fire Safety Services
        </h2>

      </div>



      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          "Fire Extinguisher Refilling",
          "Fire Alarm Installation",
          "Hydrant System Installation",
          "AMC Maintenance",
          "Fire NOC Consultancy",
          "Sprinkler Systems",
          "Emergency Exit Systems",
          "Industrial Fire Safety"
        ].map((service, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
          >

            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 text-3xl mb-6">
              🔥
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {service}
            </h3>

            <p className="text-gray-600 leading-8">
              Professional fire safety solutions with certified installation and support.
            </p>

          </div>

        ))}

      </div>

    </div>

  </section>



  {/* INDUSTRIES */}

  <section className="py-24 px-4 md:px-8 bg-white">

    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-16">

        <p className="text-red-600 font-bold tracking-[5px] uppercase mb-4">
          Industries We Serve
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Protecting Every Industry
        </h2>

      </div>



      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          "Corporate Offices",
          "Shopping Malls",
          "Industrial Plants",
          "Residential Towers",
          "Hotels & Restaurants",
          "Hospitals",
          "Warehouses",
          "Educational Institutes"
        ].map((item, index) => (

          <div
            key={index}
            className="bg-gray-50 rounded-3xl border border-gray-200 p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >

            <div className="text-5xl mb-5">
              🏢
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              {item}
            </h3>

          </div>

        ))}

      </div>

    </div>

  </section>



  {/* WHY CHOOSE US */}

  <section className="py-24 bg-black text-white px-4 md:px-8">

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <p className="text-red-500 font-bold tracking-[5px] uppercase mb-5">
          Why Choose Us
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
          Reliable Fire Protection
          For Maximum Safety
        </h2>

        <p className="text-gray-300 text-lg leading-9 mb-10">
          We ensure high quality products, certified installations,
          rapid response support and long-term fire safety maintenance.
        </p>



        <div className="grid grid-cols-2 gap-6">

          {[
            "Certified Products",
            "Expert Engineers",
            "Quick Installation",
            "24/7 Support",
            "Govt Compliance",
            "Affordable Pricing"
          ].map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-4 bg-white/10 rounded-2xl p-5"
            >

              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                ✔
              </div>

              <p className="text-lg font-medium">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>



      <div>

        <img
          src="/images/fire-team.jpeg"
          alt="Fire Safety Team"
          className="rounded-[32px] shadow-2xl w-full h-[600px] object-cover"
        />

      </div>

    </div>

  </section>



  {/* CLIENTS */}

  <section className="py-24 px-4 md:px-8 bg-white">

    <div className="max-w-7xl mx-auto text-center">

      <p className="text-red-600 font-bold tracking-[5px] uppercase mb-5">
        Our Clients
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-16">
        Trusted By Leading Brands
      </h2>



      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

        {[
          "/images/client1.jpeg",
          "/images/client2.jpeg",
          "/images/client3.jpeg",
          "/images/client4.jpeg",
          "/images/client5.jpeg",
          "/images/client6.jpeg",
          "/images/client7.jpeg",
          "/images/client8.jpg"
        ].map((logo, index) => (

          <div
            key={index}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >

            <img
              src={logo}
              alt="Client"
              className="h-20 object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-500"
            />

          </div>

        ))}

      </div>

    </div>

  </section>



  {/* CONTACT CTA */}

  <section className="py-24 bg-red-600 text-white text-center px-4 md:px-8">

    <div className="max-w-4xl mx-auto">

      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
        Need Professional Fire Safety Solutions?
      </h2>

      <p className="text-xl text-red-100 leading-9 mb-10">
        Contact EKTA Fire Service today for installation,
        maintenance, inspection and complete fire protection systems.
      </p>



      <div className="flex flex-wrap justify-center gap-6">

        <a
          href="tel:+919818761444"
          className="bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition"
        >
          Call Now
        </a>

        <a
          href="/#contact"
          className="border border-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition"
        >
          Get Free Quote
        </a>

      </div>

    </div>

  </section>

</section>


    </>

  );

}


