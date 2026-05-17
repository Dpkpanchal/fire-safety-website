"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import products from "@/utils/products";
import Image from "next/image";

export default function Navbar() {

  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);

  return (

   <header className="sticky top-0 z-50 bg-white shadow-md">

      {/* TOP BAR */}

      <div className="bg-black text-white px-4 md:px-8 py-2 flex justify-between text-sm">

        <p>
          GST No: 06ASHPK1501D1ZF
        </p>

        <p>
          📞 +91 9818761444
        </p>

      </div>



      {/* MAIN NAVBAR */}

  <nav className="max-w-7xl mx-auto flex justify-between items-center px-3 md:px-2 h-[78px] md:h-[95px] relative">

  

        {/* LOGO */}

   <Link
      href="/"
      className="flex items-center -ml-2"
    >

   <Image
      src="/images/logo.png"
      alt="EKTA Fire Service"
      width={150}
      height={50}
      priority
      className="
        w-[120px]
        sm:w-[135px]
        md:w-[150px]
        h-auto
        object-contain
      "
    />

    </Link>


        {/* DESKTOP MENU */}

       <div className="hidden lg:flex items-center gap-10 text-[17px] font-semibold">

          <a
            href="/#home"
            className="hover:text-red-600 transition"
          >
            Home
          </a>

          <a
            href="/#about"
            className="hover:text-red-600 transition"
          >
            About
          </a>



          {/* PRODUCTS MEGA MENU */}

          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >

            <button className="flex items-center gap-1 hover:text-red-600 transition">

              Products

              <ChevronDown size={18} />

            </button>



            {/* MEGA MENU */}

            <div
              className={`

              absolute top-full pt-4 right-0

              w-[92vw]
              max-w-[950px]

              bg-white

              rounded-3xl
              shadow-2xl

              p-8

              grid
              grid-cols-3
              gap-8

              border border-gray-100

              transition-all duration-300

              z-50

              ${showMegaMenu
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-5 pointer-events-none"
                }

              `}
            >



              {/* COLUMN 1 */}

              <div>

                <h2 className="text-red-600 text-xl font-bold mb-5 border-b pb-3">
                  Fire Extinguishers
                </h2>

              <ul className="space-y-4 text-gray-700 font-medium">

                  {products
                   .filter(
                      (product) => product.category === "Fire Extinguishers"
                    )
                  .map((product) => (

                    <li key={product.id}>

                      <Link
                        href={`/products/${product.slug}`}
                        className="block hover:text-red-600 transition"
                        onClick={() => setShowMegaMenu(false)}
                      >
                        {product.name}
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>




              {/* COLUMN 2 */}

              <div>

                <h2 className="text-red-600 text-xl font-bold mb-5 border-b pb-3">
                  Fire Suppression
                </h2>

                <ul className="space-y-4 text-gray-700 font-medium">

                  {products
                    .filter(
                      (product) => product.category === "Fire Suppression"
                    )
                    .map((product) => (

                      <li key={product.id}>

                        <Link
                          href={`/products/${product.slug}`}
                          className="block hover:text-red-600 transition"
                          onClick={() => setShowMegaMenu(false)}
                        >
                          {product.name}
                        </Link>

                      </li>

                    ))}

                </ul>



                <h2 className="text-red-600 text-xl font-bold mt-10 mb-5 border-b pb-3">
                  Accessories
                </h2>

                <ul className="space-y-4 text-gray-700 font-medium">

                  {products
                    .filter(
                      (product) => product.category === "Accessories"
                    )
                    .map((product) => (

                      <li key={product.id}>

                        <Link
                          href={`/products/${product.slug}`}
                          className="block hover:text-red-600 transition"
                          onClick={() => setShowMegaMenu(false)}
                        >
                          {product.name}
                        </Link>

                      </li>

                    ))}

                </ul>

              </div>




              {/* COLUMN 3 */}

              <div>

                <h2 className="text-red-600 text-xl font-bold mb-5 border-b pb-3">
                  Watermist / CAFS
                </h2>

                <ul className="space-y-4 text-gray-700 font-medium">

                  {products
                    .filter(
                      (product) => product.category === "Watermist / CAFS"
                    )
                    .map((product) => (

                      <li key={product.id}>

                        <Link
                          href={`/products/${product.slug}`}
                          className="block hover:text-red-600 transition"
                          onClick={() => setShowMegaMenu(false)}
                        >
                          {product.name}
                        </Link>

                      </li>

                    ))}

                </ul>



                {/* IMAGE */}

                <img
                  src="/images/fire-box.png"
                  alt="Fire Product"
                  className="mt-6 rounded-2xl h-40 w-full object-cover shadow-lg"
                />

              </div>

            </div>

          </div>



          <a
            href="/#services"
            className="hover:text-red-600 transition"
          >
            Services
          </a>

          <a
            href="/#clients"
            className="hover:text-red-600 transition"
          >
            Clients
          </a>

          <a
            href="/#contact"
            className="hover:text-red-600 transition"
          >
            Contact
          </a>

        </div>




        {/* MOBILE MENU BUTTON */}

        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >

          {mobileMenu
            ? <X size={24} />
            : <Menu size={24} />
          }

        </button>

      </nav>




      {/* MOBILE MENU */}

      {mobileMenu && (

        <div className="lg:hidden bg-white shadow-xl px-6 pb-8">

          <div className="flex flex-col gap-5 text-lg font-semibold">

            <a
              href="#home"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenu(false)}
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenu(false)}
            >
              Services
            </a>

            <div>

            <button
              onClick={() => setMobileProducts(!mobileProducts)}
              className="
                flex
                items-center
                justify-between
                w-full
                font-semibold
              "
            >

              <span>
                Products
              </span>

              <ChevronDown
                size={18}
                className={`
                  transition-transform duration-300
                  ${mobileProducts ? "rotate-180" : ""}
                `}
              />

            </button>



            {/* MOBILE PRODUCTS LIST */}

            {mobileProducts && (

              <div className="ml-4 mt-4 flex flex-col gap-3">

                {products.map((product) => (

                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={() => {
                      setMobileMenu(false);
                      setMobileProducts(false);
                    }}
                    className="
                      text-gray-700
                      text-base
                      hover:text-red-600
                      transition
                    "
                  >
                    {product.name}
                  </Link>

                ))}

              </div>

            )}

          </div>


            <a
              href="#clients"
              onClick={() => setMobileMenu(false)}
            >
              Clients
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
            >
              Contact
            </a>

          </div>

        </div>

      )}

    </header>

  )
}