import Image from "next/image";

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
      <div className="rounded-tl-[50px] rounded-tr-[50px] bg-[#E5F6FF] px-4 py-16 xl:mx-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card flex min-h-[400px] flex-col items-center rounded-2xl bg-[#d9e9ff] p-6 text-center"
            >
              {/* Diagonal Line */}
              <div className="diagonal-line"></div>

              {/* Inner card div with rounded corners */}
              <div className="rounded-custom relative flex min-h-[400px] flex-col items-center overflow-hidden rounded-lg bg-[#f8f4fc] p-6 text-center shadow-md">
                {/* Curved Background */}
                <div className="curved-background"></div>

                {/* Quote Icon */}
                <Image
                  src="/quote.svg"
                  width={40}
                  height={40}
                  alt="Quote Icon"
                  className="relative z-10 mb-4 mt-4"
                />

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
