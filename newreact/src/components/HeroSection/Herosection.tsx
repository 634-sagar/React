import { HeroImg } from "../../image"

const HeroSection = () => {
    return (
        <div className="relative h-[600px]">
            <img src={HeroImg} alt="banner" className="h-full w-full absolute object-cover" />

            <div className="absolute dark:bg-black/50 bg-white/20 inset-0">
                <div className=" container flex items-center h-full" >
                    <div className="space-y-5">
                        <div >
                            <span className="section-btn">New Arrivals 2026</span>
                        </div>
                            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">Discover Your Perfect Style</h1>
                            <p className="text-xs text-gray-300">explore our latest collection of trendy fashion. Quality meets affordability.</p>

                            <div className="flex gap-3 flex-col sm:flex-row">
                                <button className="primary-btn">shop now</button>
                                <button className="secondary-btn">view collection</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection