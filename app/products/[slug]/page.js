import products from "@/utils/products";

export default async function ProductDetail({ params }) {

  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {

    return (

      <div className="text-center py-32">

        <h1 className="text-5xl font-bold">
          Product Not Found
        </h1>

      </div>

    )

  }



  return (

    <section className="py-24 px-8 scroll-mt-32">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* IMAGE */}

        <div className="w-full h-[450px] bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6"
          />

        </div>



        {/* CONTENT */}

        <div>

          <p className="text-red-600 font-bold text-lg mb-4">

            {product.category}

          </p>



          <h1 className="text-5xl font-bold mb-8">

            {product.name}

          </h1>



          <p className="text-gray-600 text-lg leading-9 mb-10">

            {product.description}

          </p>



          {/* FEATURES */}

          <div className="mb-10">

            <h2 className="text-3xl font-bold mb-6">
              Features
            </h2>

            <ul className="space-y-4">

              {product.features.map((feature, index) => (

                <li
                  key={index}
                  className="bg-gray-100 px-5 py-4 rounded-xl"
                >
                  ✅ {feature}
                </li>

              ))}

            </ul>

          </div>



          {/* SPECIFICATIONS */}

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Specifications
            </h2>



            <div className="border rounded-2xl overflow-hidden">

              {Object.entries(product.specifications).map(
                ([key, value]) => (

                  <div
                    key={key}
                    className="flex justify-between border-b px-6 py-4"
                  >

                    <span className="font-semibold">
                      {key}
                    </span>

                    <span className="text-gray-600">
                      {value}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>



          {/* BUTTON */}

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block mt-10 bg-red-600 text-white px-10 py-4 rounded-xl text-lg font-bold"
          >
            Enquire Now
          </a>

        </div>

      </div>

    </section>

  )

}