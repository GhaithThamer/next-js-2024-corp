import performanceImage from "/public/performance.jpg"
import Hero from "@/components/Hero"

export default function PerformancePage(){
    return(
        <Hero imageData={performanceImage} imageAlt="automatic welding" title="automatic welding"/>
    )
}