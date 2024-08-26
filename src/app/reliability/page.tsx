import Hero from "@/components/Hero"
import reliabilityImage from "/public/reliability.jpg"

export default function ProductsPage(){
    return(
        <Hero imageData={reliabilityImage} imageAlt="manual welding" title="Best welding processes" />
    )
}