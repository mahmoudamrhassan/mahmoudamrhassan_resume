import Image from "next/image";
import styles from "./page.module.css";
import Navbar from '@/Comonents/Navbar'
import HeroSection from '@/Comonents/Section_2'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
   <>
   <Navbar></Navbar>
   <HeroSection></HeroSection>
   </>
  );
}
