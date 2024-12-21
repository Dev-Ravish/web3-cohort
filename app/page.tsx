import GenerateSeedButton from "@/components/GenerateSeedButton";
import Navbar from "@/components/reusable/navbar";
import Image from "next/image";



export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col items-center min-h-screen py-4">
      <h1>
        Welcome to the wallet app
      </h1>
      <div className="flex flex-col items-center mt-4">
        <GenerateSeedButton/>
      </div>
    </div>
    </div>

 );
}
