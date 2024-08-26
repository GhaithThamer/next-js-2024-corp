import { StaticImageData } from "next/image";
import Image from "next/image"

interface HeroProps {
    imageData: StaticImageData,
    imageAlt: string,
    title: string,
}


export default function Hero({ title, imageData, imageAlt }: HeroProps) {
    return (
        <div className="relative h-screen">
            <div className=" absolute inset-0 -z-10">
                <Image
                    src={imageData}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: "cover" }} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900">

                <div className="pt-48 flex justify-center items-center">
                    <h1 className="text-white text-6xl">{title}</h1>
                </div>
            </div>

        </div>
    )
}