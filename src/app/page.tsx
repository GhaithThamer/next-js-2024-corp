import Hero from "@/components/Hero"
import homeImage from "/public/home.jpg"

export default function ProductsPage(){
    return(
        <Hero imageData={homeImage} imageAlt="car factory" title="Cars manufacturing" />
    )
}