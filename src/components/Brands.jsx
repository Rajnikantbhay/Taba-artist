import { BrandLogoComponent } from "./BrandsLogoComponent"
import firstLogo from '../assests/brands/1.svg'
import secondLogo from '../assests/brands/2.svg'
import thirdLogo from '../assests/brands/3.svg'
import fourthLogo from '../assests/brands/4.svg'
import fifthLogo from '../assests/brands/5.svg'
import sixthLogo from '../assests/brands/6.svg'
import seventhLogo from '../assests/brands/7.svg'
import brahmaKumari from '../assests/brands/bramha.svg'

export const Brands = () => {
    return <section className="bg-[hsla(0,0%,100%,0.55)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] w-full py-2 px-6 max-w-[80vw] m-auto rounded-full">
        <div className="flex flex-wrap gap-12 justify-center"><BrandLogoComponent source={firstLogo}/>
            <BrandLogoComponent source={brahmaKumari} />
            <BrandLogoComponent source={secondLogo} />
            <BrandLogoComponent source={thirdLogo} />
            <BrandLogoComponent source={fourthLogo} />
            <BrandLogoComponent source={fifthLogo} />
            {/* <BrandLogoComponent source={sixthLogo} />
            <BrandLogoComponent source={seventhLogo} /> */}
        </div>
    </section>
}

export default Brands;
