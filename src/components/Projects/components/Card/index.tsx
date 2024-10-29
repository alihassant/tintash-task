import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

export default function Card(
  { title, category, image }: ProjectCardProps = {
    title: "GENOPETS",
    category: "Metaverse",
    image: "/placeholder.svg?height=200&width=200",
  },
) {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center p-4 pt-1">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          loading={"eager"}
        />
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="mt-2 flex items-center">
          <span className="mr-2 text-sm text-gray-300">{category}</span>
          <Image
            src={"/projects/apple-icon.svg"}
            alt="Apple Icon"
            height={16}
            width={16}
            className="mr-1 h-4 w-4 text-gray-300"
            loading={"eager"}
          />
          <Image
            src={"/projects/playstore-icon.svg"}
            alt="Apple Icon"
            height={16}
            width={16}
            className="mr-1 h-4 w-4 text-gray-300"
            loading={"eager"}
          />
        </div>
      </div>
    </div>
  );
}
