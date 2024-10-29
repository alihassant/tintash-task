import Image from "next/image";

interface AboutUsCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center sm:mt-8">
      <div className="flex max-h-24 w-full items-center justify-center rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-[#6858d3] to-[#2f2b9f]">
        <Image
          src={imageSrc}
          alt={title}
          width={150}
          height={150}
          className="-translate-y-6"
          loading={"eager"}
        />
      </div>
      <div className="flex min-h-28 w-full flex-col items-center justify-center bg-[#3350B7] py-5">
        <p className="pb-3 text-white">{title}</p>
        <p className="text-3xl font-extrabold text-white">{description}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
