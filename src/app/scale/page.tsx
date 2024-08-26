import Hero from "@/components/Hero"
import scaleImage from "/public/scale.jpg"

export default function ProductsPage(){
    return(
        <Hero imageData={scaleImage} imageAlt="steel factory" title="Steel production" />
    )
}