import Link from "next/link";
import products from "@/utils/products";

export default function Footer() {

  return (

    <footer className="bg-black text-white pt-20 pb-10">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

    {/* COMPANY */}

    <div>

      <h2 className="text-3xl font-bold text-red-600 mb-6">
        EKTA Fire Service
      </h2>

      <p className="text-gray-400 leading-8">

        Complete fire safety and suppression solutions
        for industries, offices, malls, hospitals and
        commercial buildings.

      </p>

    </div>



    {/* QUICK LINKS */}

    <div>

      <h3 className="text-2xl font-bold mb-6">
        Quick Links
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>
         <Link
            href="/#home"
            className="hover:text-red-500"
          >
            Home
          </Link>
        </li>

        <li>
          <Link href="/#about" className="hover:text-red-500 scroll-mt-32">
            About
          </Link>
        </li>

        <li>
          <Link href="/#services" className="hover:text-red-500 scroll-mt-32">
            Services
          </Link>
        </li>

        <li>
          <Link href="/#clients" className="hover:text-red-500 scroll-mt-32">
            Clients
          </Link>
        </li>

        <li>
          <Link href="/#contact" className="hover:text-red-500 scroll-mt-32">
            Contact
          </Link>
        </li>

      </ul>

    </div>



    {/* PRODUCTS */}

    <div>

      <h3 className="text-2xl font-bold mb-6">
        Products
      </h3>

      <ul className="space-y-4 text-gray-400">

        {products.slice(0, 6).map((product) => (

          <li key={product.id}>

            <Link
              href={`/products/${product.slug}`}
              className="hover:text-red-500"
            >
              {product.name}
            </Link>

          </li>

        ))}

      </ul>

    </div>



    {/* CONTACT */}

    <div>

      <h3 className="text-2xl font-bold mb-6">
        Contact
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>
          📞 +91 9818761444
        </li>

        <li>
          ✉️ ektafireservice@gmail.com
        </li>

        <li>
          📍 NEAR KRISHNA DHARAM KANTA, NH-8, NAHARPUR
        RUPA, Gurgaon, Haryana, 122001
        </li>

        <li>
          GST No: 06ASHPK1501D1ZF
        </li>

      </ul>

    </div>

  </div>



  {/* BOTTOM */}

<div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500">

  <p>
    © 2026 EKTA Fire Service. All Rights Reserved.
  </p>

  <p className="mt-2 text-sm text-gray-600">
    Protecting Lives, Securing Futures.
  </p>

</div>
</footer>

  )
}