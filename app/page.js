import Image from "next/image";
import styles from "./page.module.css";
import Navbar from '@/Comonents/Navbar'
import HeroSection from '@/Comonents/Section_2'
import Projects from '@/Comonents/Projccts'
import Skills from '@/Comonents/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "@/Comonents/About";
import Footer from "@/Comonents/Footer";
import Timeline from "@/Comonents/Timeline";

export default function Home() {
  
  return (
   <div className="container-fluid">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   <Projects></Projects>
   <Skills></Skills>
   <AboutMe></AboutMe>
   <Timeline></Timeline>
   <Footer></Footer>
   </div>


  );
}
