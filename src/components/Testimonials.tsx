export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "We Could not have been so successful in the Mobile Market without them!",
      author: "Jordan Mendell",
      position: "Head of Mobile & Social Projects",
      company: "HOMA",
    },
    {
      quote:
        "We Could not have been so successful in the Mobile Market without them!",
      author: "Jordan Mendell",
      position: "Head of Mobile & Social Projects",
      company: "HOMA",
    },
    {
      quote:
        "We Could not have been so successful in the Mobile Market without them!",
      author: "Jordan Mendell",
      position: "Head of Mobile & Social Projects",
      company: "HOMA",
    },
  ];

  return (
    <section className="bg-[#f1fbff] md:px-4">
      <div className="mx-auto max-w-6xl pt-28">
        <h2 className="mb-12 text-center text-3xl font-extrabold">
          <span className="text-[#2E8EFF]">CLIENTS</span>{" "}
          <span className="text-[#391978]">TRUST US</span>
        </h2>
      </div>
      <div className="rounded-tl-[50px] rounded-tr-[50px] bg-[#E5F6FF] px-4 py-16 md:mx-16 md:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card flex h-[400px] flex-col items-center rounded-2xl bg-[#d9e9ff] p-6 text-center"
            >
              {/* Diagonal Line */}
              <div className="diagonal-line"></div>

              {/* Inner card div with rounded corners */}
              <div className="rounded-custom relative flex h-[400px] flex-col items-center overflow-hidden rounded-lg bg-[#f8f4fc] p-6 text-center shadow-md">
                {/* Curved Background */}
                <div className="curved-background"></div>

                {/* Quote Icon */}
                <svg
                  width="56"
                  height="36"
                  viewBox="0 0 56 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 mb-4 mt-4"
                >
                  <path
                    d="M12.352 0.0359943L21.372 2.988L17.6 18.896C20.3333 19.4427 22.2467 20.5907 23.34 22.34C24.4333 24.0893 24.98 26.9867 24.98 31.032C24.98 35.8427 24.0507 39.1773 22.192 41.036C20.4427 42.7853 17.2173 43.66 12.516 43.66C8.03333 43.66 4.86267 42.7853 3.004 41.036C1.25467 39.1773 0.38 35.8427 0.38 31.032C0.489334 29.2827 0.653334 27.6973 0.872 26.276C1.2 24.8547 1.692 23.324 2.348 21.684C3.004 20.044 3.87867 17.9667 4.972 15.452L12.352 0.0359943ZM43.184 0.0359943L52.204 2.988L48.432 18.896C51.2747 19.4427 53.2427 20.5907 54.336 22.34C55.4293 24.0893 55.976 26.9867 55.976 31.032C55.976 35.8427 55.0467 39.1773 53.188 41.036C51.4387 42.7853 48.1587 43.66 43.348 43.66C38.8653 43.66 35.7493 42.7853 34 41.036C32.2507 39.1773 31.376 35.8427 31.376 31.032C31.376 29.2827 31.4853 27.6973 31.704 26.276C32.032 24.8547 32.524 23.324 33.18 21.684C33.836 20.044 34.7107 17.9667 35.804 15.452L43.184 0.0359943Z"
                    fill="#642B93"
                  />
                </svg>

                {/* Quote Text */}
                <p className="relative z-10 mb-4 text-lg text-[#642B93]">
                  {testimonial.quote.length < 75
                    ? testimonial.quote
                    : `${testimonial.quote.slice(0, 75)}...`}
                  {``}
                </p>

                {/* Author and Position */}
                <div className="relative z-10 mt-auto">
                  <p className="text-xl font-semibold text-[#7166F3]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#642B93]">
                    {testimonial.position}
                  </p>
                  <hr className="border-t-1 mx-auto my-4 w-1/2 border-gray-300" />
                  <p className="mt-2 text-2xl font-extrabold text-[#3F4EAA]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
