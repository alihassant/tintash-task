import { testimonials } from "@/constants/data";
import TestimonialCard from "./component/TestimonialsCard";

export default function Testimonials() {
  return (
    <section className="bg-[#f1fbff] md:px-4">
      <div className="mx-auto max-w-6xl pt-28">
        <h2 className="mb-12 text-center text-3xl font-extrabold">
          <span className="text-[#2E8EFF]">CLIENTS</span>{" "}
          <span className="text-[#391978]">TRUST US</span>
        </h2>
      </div>
      <div className="rounded-tl-[50px] rounded-tr-[50px] bg-[#E5F6FF] px-4 py-16 xl:mx-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
