import Image from "next/image";

export default function Avatar({ src, alt }: { src: string; alt: string }) {
  return (      
    <Image className="w-10 h-10 rounded-full" src={src} alt={alt || "image"} width="35" height="35" />
  );
}
