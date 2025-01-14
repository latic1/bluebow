// import Image from "next/image";

export const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Unlock</span>
          </span>{" "}
          Seamless Solutions for Every Maritime Need
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          From reliable shipping to comprehensive insurance, we deliver tailored
          solutions to simplify your operations and drive success.
        </p>
      </div>

      <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-2 sm:mx-auto">
        {[
          {
            title: "Shipping",
            description:
              "We provide fast, reliable shipping solutions to ensure your cargo reaches its destination on time, every time.",
            imgUrl: "/img/slied1.jpg",
          },
          {
            title: "Stevedoring",
            description:
              "With expert handling and precision, our stevedoring services ensure smooth and efficient cargo operations.",
            imgUrl: "/img/jjhkjhk.jpeg",
          },
          {
            title: "P&I Insurance",
            description:
              "Comprehensive protection against maritime liabilities, offering you peace of mind and secure operations.",
            imgUrl: "/img/vlad-deep-mCqi3MljC4E-unsplash.jpg",
          },
          {
            title: "Logistics",
            description:
              "End-to-end logistics management tailored to your needs, enabling you to focus on scaling your business.",
            imgUrl: "/img/Logisticsimg.jpeg",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative flex items-end w-full h-60 sm:h-72 rounded-lg shadow-lg bg-gray-50 px-4 pb-5 sm:pb-10 sm:px-6 lg:px-8"
          >
            <div className="absolute inset-0">
              <img
                className="object-cover object-top w-full h-full rounded-lg"
                src={service.imgUrl}
                alt={service.title}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
            <div className="relative z-10 flex items-end">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl text-white">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
