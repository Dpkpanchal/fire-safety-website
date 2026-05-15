export default function Navbar() {
  return (

    <header className="sticky top-0 z-50 bg-white shadow-md">

      {/* TOP BAR */}

      <div className="bg-black text-white px-8 py-2 flex justify-between text-sm">

        <p>
          GST No: 07ABCDE1234F1Z5
        </p>

        <p>
          📞 +91 9999999999
        </p>

      </div>


      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-red-600">
          FireSafe
        </h1>


        <div className="hidden md:flex gap-8 text-lg font-medium">

          <a href="#home" className="hover:text-red-600 transition">
            Home
          </a>

          <a href="#services" className="hover:text-red-600 transition">
            Services
          </a>

          <a href="#products" className="hover:text-red-600 transition">
            Products
          </a>

          <a href="#clients" className="hover:text-red-600 transition">
            Clients
          </a>

          <a href="#about" className="hover:text-red-600 transition">
            About
          </a>

          <a href="#contact" className="hover:text-red-600 transition">
            Contact
          </a>

        </div>

      </nav>

    </header>
  )
}