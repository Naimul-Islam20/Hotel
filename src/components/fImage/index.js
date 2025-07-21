"use client";

import Image from "next/image";

export default function HeroImagePage() {
  return (
    <div className="relative w-full aspect-[5/2] sm:aspect-[27/9]">
  <Image
    src="/exc/footer.jpg"
    alt="Hero"
    fill
    className="object-cover object-center"
  />
</div>

  );
}
