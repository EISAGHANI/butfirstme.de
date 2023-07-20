import Footer from "@/components/footer"
import Header from "@/components/header"
import Membership from "@/components/membership"
import Navbar from "@/components/navbar"
import ServicesCarousel from "@/components/servicescarousel"
import TopNavbar from "@/components/topnavbar";





export default function Home() {
  return (
    <>
    <TopNavbar/>
    <Navbar/>
    <Header/>
    <ServicesCarousel/>
    {/* <Membership/> */}

    <Footer/>


    
     
    </>
  )
}
