import Hero from "@/components/Hero"
import productsImage from "/public/vercel.svg"

export default function ProductsPage(){
    return(
        <Hero imageData={productsImage} imageAlt="steel factory2" title="Production" />
    )
}