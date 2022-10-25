import Image from "next/image";

export default function AvatarGroup({ images, alts }: { images: string[]; alts: string[] }) {
  return (
    <div className="flex -space-x-2 overflow-hidden">
        {images.map((image, ind) => (
            <img key={ind} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={image} alt={alts[ind] || "image"} />
        ))}
    </div>
  );
}
