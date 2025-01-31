import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Image from "next/image";
import Stayudpate from "./update";


export default function Footer(){
    return(
        <main className="bg-[#F0F0F0] relative p-7 md:px-12 w-full h-full   md:h-[400px] flex flex-col  justify-start items-center mt-32">
          
           <span className="absolute  top-[-60px]">
           <Stayudpate />
           </span>
           
        <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start mt-52  md:mt-20 border-b-2 pb-5">
             {/* top div */}
             <div className="w-full md:w-[40%] mt-5">
                <h1 className="text-2xl md:text-3xl font-extrabold">SHOP.CO</h1>
                <p className="mt-2 text-sm">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                  <div className="flex space-x-2 mt-3">
                  <div className="flex space-x-4">
      <Link href="https://www.linkedin.com/in/sarimofficial" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl hover:text-blue-500" />
      </Link>
      <Link href="https://facebook.com/mrsarimofficial" target="_blank" rel="noopener noreferrer">
        <BsFacebook className="text-xl hover:text-blue-700" />
      </Link>
      <Link href="https://instagram.com/mrsarimofficial" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-xl hover:text-pink-500" />
      </Link>
      <Link href="https://github.com/sarimofficial" target="_blank" rel="noopener noreferrer">
        <FaSquareGithub className="text-xl hover:text-gray-800" />
      </Link>
    </div>
                  </div>
             </div>
             {/* bottom div */}
             <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-between md:place-items-center ">
                {/* box1 */}
             <div className="mt-4">
                <h2 className="text-xl">Company</h2>
                <ul className="space-y-1">
                    <li className="font-sans">About</li>
                    <li className="font-sans">Features</li>
                    <li className="font-sans">Works</li>
                    <li className="font-sans">Career</li>
                </ul>
             </div>
             {/* box 2 */}
             <div>
                <h2 className="text-xl mt-4">Help</h2>
                <ul  className="space-y-1">
                    <li className="font-sans">Customer Support</li>
                    <li className="font-sans">Delivery Details</li>
                    <li className="font-sans">Terms & Conditions</li>
                    <li className="font-sans">Privacy Policy</li>
                </ul>
             </div>
             {/* box3 */}
             <div className="space-y-1 mt-4">
                <h2 className="text-xl">FAQ</h2> <ul>
                    <li className="font-sans">Account</li>
                    <li className="font-sans">Manage Deliveries</li>
                    <li className="font-sans">Orders</li>
                    <li className="font-sans">Payments</li>
                </ul>
             </div>
             {/* box4 */}
           <div  className="space-y-1 mt-4">
                <h2 className="text-xl">Resources</h2>
                <ul>
                    <li className="font-sans">Free eBooks</li>
                    <li className="font-sans">Development Tutorial</li>
                    <li className="font-sans">How to - Blog</li>
                    <li className="font-sans">Youtube Playlist </li>
                </ul>
             </div>
             {/* complete */}
             </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row items-center mt-5 md:mt-7 justify-between">
            <p className="text-xs md:text-sm">Shop.co © Made by Muhammad Sarim, All Rights Reserved 2025</p>
            <div className="flex mt-4 md:mt-0">
            <div className="flex mt-4 md:mt-0 space-x-4">
      <Link href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/Visa.png"
          className="w-[40px]"
          width={100}
          height={100}
          alt="Visa"
        />
      </Link>
      <Link href="https://www.apple.com/apple-pay/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/applepay.png"
          className="w-[40px]"
          width={100}
          height={100}
          alt="Apple Pay"
        />
      </Link>
      <Link href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/paypal.png"
          className="w-[40px]"
          width={100}
          height={100}
          alt="PayPal"
        />
      </Link>
      <Link href="https://verifiedbyvisa.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/Badge.png"
          className="w-[40px]"
          width={100}
          height={100}
          alt="Verified Badge"
        />
      </Link>
      <Link href="https://pay.google.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/gpay.png"
          className="w-[40px]"
          width={100}
          height={100}
          alt="Google Pay"
        />
      </Link>
    </div>
            </div>
        </div>
        
        </main>
    )
}

