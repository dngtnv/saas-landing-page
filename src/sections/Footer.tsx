import Image from "next/image";
import logoImage from "@/assets/logosaas.png";
import XIcon from "@/assets/social-x.svg";
import InstagramIcon from "@/assets/social-insta.svg";
import LinkedinIcon from "@/assets/social-linkedin.svg";
import PinterestIcon from "@/assets/social-pin.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-sm text-[#BCBCBC]">
          <div className="relative inline-flex before:absolute before:bottom-0 before:left-0 before:right-0 before:top-2 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
            <Image
              src={logoImage}
              alt="logo"
              width={40}
              height={40}
              className="relative"
            />
          </div>
          <nav className="flex flex-col items-center gap-6 md:flex-row">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </nav>
          <div className="flex gap-4">
            <a href="#">
              <XIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <LinkedinIcon />
            </a>
            <a href="#">
              <PinterestIcon />
            </a>
            <a href="#">
              <YoutubeIcon />
            </a>
          </div>
          <div>&copy; 2024 Your Company, Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
