import React from "react";
import Logo from "../../assets/logo.png";
import badge1 from "../../assets/Footer/android-badge.png";
import badge2 from "../../assets/Footer/apple-badge.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-area  border border-y-[#EEEEEE] border-x-0 mt-4">
      <div className="section-container">
        <div className="flex  flex-wrap gap-x-[24px] gap-y-[34px] bg-white text-base-content lg:py-20 md:py-10 py-8 ">
          <aside>
            {/* Logo */}
            <div className="xl:max-w-36 lg:max-w-32 md:max-w-28 max-w-20 ">
              <img className=" w-full h-full" src={Logo} alt="logo" />
            </div>
            <p className="text-[14px] font-normal leading-[1.9] tracking-[0.32px] t-hue-base block  md:py-[30px] py-[20px] ">
              Grabit is the biggest market of grocery products. <br />
              Get your daily needs from our store.
            </p>
            <div className="badges flex gap-x-[15px]">
              <img className="w-[140px]" src={badge1} alt="badge" />
              <img className="w-[140px]" src={badge2} alt="badge" />
            </div>
          </aside>
          <nav className="flex-1 flex flex-col capitalize space-y-4">
            <h6 className="  font-medium text-[18px] leading-[1.2] t-hue-dark ">
              category
            </h6>
            <hr className=" border border-[#EEEEEE]" />
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Dried Fruit
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Cookies
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Foods
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Fresh Fruit
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Tuber root
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Vegetables
            </Link>
          </nav>
          <nav className="flex-1 flex flex-col capitalize space-y-4">
            <h6 className="  font-medium text-[18px] leading-[1.2] t-hue-dark ">
              Company
            </h6>
            <hr className=" border border-[#EEEEEE] " />
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              {" "}
              About us
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Delivery
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Legal Notice
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Terms & conditions
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Secure payment
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Contact us
            </Link>
          </nav>
          <nav className="flex-1 flex flex-col capitalize space-y-4">
            <h6 className="  font-medium text-[18px] leading-[1.2] t-hue-dark ">
              Account
            </h6>
            <hr className=" border border-[#EEEEEE] " />
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Sign In
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              View Cart
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Return Policy
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Become a Vendor
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Affiliate Program
            </Link>
            <Link className="link link-hover text-[14px] leading-[1.24] t-hue-base ">
              Payments
            </Link>
          </nav>
          <nav className="flex-1 flex flex-col capitalize space-y-4">
            <h6 className="  font-medium text-[18px] leading-[1.2] t-hue-dark ">
              Contact
            </h6>
            <hr className=" border border-[#EEEEEE] " />
            <Link className="link link-hover flex gap-x-[7px] ">
              <span className="pt-[6px]">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_754)">
                    <path
                      d="M10.135 4.58984C9.29495 4.58984 8.58495 4.87984 8.00495 5.45984C7.42495 6.03984 7.13495 6.74984 7.13495 7.58984C7.13495 8.42984 7.42495 9.13984 8.00495 9.71984C8.58495 10.2998 9.29495 10.5898 10.135 10.5898C10.975 10.5898 11.685 10.2998 12.265 9.71984C12.845 9.13984 13.135 8.42984 13.135 7.58984C13.135 6.74984 12.845 6.03984 12.265 5.45984C11.685 4.87984 10.975 4.58984 10.135 4.58984ZM10.135 9.08984C9.73495 9.08984 9.38495 8.93984 9.08495 8.63984C8.78495 8.33984 8.63495 7.98984 8.63495 7.58984C8.63495 7.18984 8.78495 6.83984 9.08495 6.53984C9.38495 6.23984 9.73495 6.08984 10.135 6.08984C10.535 6.08984 10.885 6.23984 11.185 6.53984C11.485 6.83984 11.635 7.18984 11.635 7.58984C11.635 7.98984 11.485 8.33984 11.185 8.63984C10.885 8.93984 10.535 9.08984 10.135 9.08984ZM10.135 18.0898C9.49495 18.0898 8.88495 17.9498 8.30495 17.6698C7.72495 17.3898 7.25495 16.9698 6.89495 16.4098C4.01495 12.4498 2.57495 9.52984 2.57495 7.64984C2.57495 6.28984 2.91495 5.02984 3.59495 3.86984C4.27495 2.70984 5.19495 1.78984 6.35495 1.10984C7.51495 0.429844 8.77495 0.0898438 10.135 0.0898438C11.495 0.0898438 12.755 0.429844 13.915 1.10984C15.075 1.78984 15.995 2.70984 16.675 3.86984C17.355 5.02984 17.695 6.28984 17.695 7.64984C17.695 9.52984 16.255 12.4498 13.375 16.4098C13.015 16.9698 12.545 17.3898 11.965 17.6698C11.385 17.9498 10.775 18.0898 10.135 18.0898ZM10.135 1.70984C9.05495 1.70984 8.06495 1.97985 7.16495 2.51984C6.26495 3.05984 5.55495 3.77984 5.03495 4.67984C4.51495 5.57984 4.25495 6.56984 4.25495 7.64984C4.25495 8.40984 4.59495 9.45984 5.27495 10.7998C5.95495 12.1398 6.93495 13.7098 8.21495 15.5098C8.45495 15.7898 8.74495 16.0198 9.08495 16.1998C9.42495 16.3798 9.77495 16.4698 10.135 16.4698C10.495 16.4698 10.845 16.3798 11.185 16.1998C11.525 16.0198 11.815 15.7898 12.055 15.5098C13.335 13.7098 14.315 12.1398 14.995 10.7998C15.675 9.45984 16.015 8.40984 16.015 7.64984C16.015 6.56984 15.755 5.57984 15.235 4.67984C14.715 3.77984 14.005 3.05984 13.105 2.51984C12.205 1.97985 11.215 1.70984 10.135 1.70984Z"
                      fill="#5CAF90"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_754">
                      <rect
                        width="18.33"
                        height="18"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.969971 18.0898)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className=" text-[14px] leading-[2] t-hue-base ">2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>

            </Link>
            <Link className="link link-hover flex gap-x-[7px]">
              <span>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4949 2.72984C14.6549 1.88984 13.6849 1.23984 12.5849 0.779844C11.4849 0.319843 10.3549 0.0898438 9.19495 0.0898438C7.55495 0.0898438 6.05495 0.489843 4.69495 1.28984C3.33495 2.08984 2.25495 3.16984 1.45495 4.52984C0.654946 5.88984 0.254946 7.37984 0.254946 8.99984C0.254946 10.6198 0.654946 12.1098 1.45495 13.4698L0.194946 18.0898L4.93495 16.8298C6.25495 17.5498 7.67495 17.9098 9.19495 17.9098C10.7949 17.9098 12.2749 17.5098 13.6349 16.7098C14.9949 15.9098 16.0749 14.8298 16.8749 13.4698C17.6749 12.1098 18.0749 10.6298 18.0749 9.02984C18.0749 7.82984 17.8549 6.68984 17.4149 5.60984C16.9749 4.52984 16.3349 3.56984 15.4949 2.72984ZM9.19495 16.4098C7.83495 16.4098 6.57495 16.0698 5.41495 15.3898L5.11495 15.2098L2.29495 15.9898L3.07495 13.2298L2.89495 12.9298C2.13495 11.7298 1.75495 10.4398 1.75495 9.05984C1.75495 7.67984 2.08495 6.41984 2.74495 5.27984C3.40495 4.13984 4.30495 3.23984 5.44495 2.57984C6.58495 1.91984 7.83495 1.58984 9.19495 1.58984C10.1549 1.58984 11.0949 1.77984 12.0149 2.15984C12.9349 2.53984 13.7449 3.07984 14.4449 3.77984C15.1449 4.47984 15.6749 5.27984 16.0349 6.17984C16.3949 7.07984 16.5749 8.02984 16.5749 9.02984C16.5749 10.3498 16.2449 11.5798 15.5849 12.7198C14.9249 13.8598 14.0249 14.7598 12.8849 15.4198C11.7449 16.0798 10.5149 16.4098 9.19495 16.4098ZM13.2149 10.8898C12.4149 10.4498 11.9349 10.2098 11.7749 10.1698C11.6149 10.1298 11.4949 10.1098 11.4149 10.1098C11.3349 10.1098 11.2749 10.1698 11.2349 10.2898C11.0749 10.4498 10.8349 10.7298 10.5149 11.1298C10.3949 11.2898 10.2349 11.3098 10.0349 11.1898L9.85495 11.1298C9.25495 10.8498 8.71495 10.4998 8.23495 10.0798C7.75495 9.65984 7.33495 9.14984 6.97495 8.54984C6.93495 8.42984 6.92495 8.33984 6.94495 8.27984C6.96495 8.21984 7.01495 8.14984 7.09495 8.06984L7.39495 7.70984C7.47495 7.62984 7.55495 7.52984 7.63495 7.40984V7.34984C7.71495 7.22984 7.71495 7.08984 7.63495 6.92984L6.91495 5.24984C6.87495 5.08984 6.81495 4.98984 6.73495 4.94984C6.65495 4.90984 6.57495 4.88984 6.49495 4.88984H6.01495C5.77495 4.88984 5.57495 4.98984 5.41495 5.18984H5.35495C5.15495 5.42984 5.01495 5.64984 4.93495 5.84984C4.73495 6.20984 4.63495 6.60984 4.63495 7.04984C4.63495 7.48984 4.77495 7.98984 5.05495 8.54984C5.17495 8.82984 5.33495 9.08984 5.53495 9.32984L5.59495 9.38984C5.95495 9.90984 6.35495 10.3898 6.79495 10.8298C7.63495 11.7098 8.49495 12.3298 9.37495 12.6898C9.73495 12.8498 10.1349 12.9998 10.5749 13.1398C11.0149 13.2798 11.4949 13.3098 12.0149 13.2298C12.2549 13.2298 12.5449 13.1198 12.8849 12.8998C13.2249 12.6798 13.4349 12.4498 13.5149 12.2098C13.5949 11.9698 13.6449 11.7498 13.6649 11.5498C13.6849 11.3498 13.6849 11.2198 13.6649 11.1598C13.6449 11.0998 13.5349 11.0298 13.3349 10.9498L13.2149 10.8898Z"
                    fill="#5CAF90"
                  />
                </svg>
               
              </span>
              <p className=" text-[14px] leading-[1.24] t-hue-base flex gap-x-[7px]"> +00 9876543210</p>
            </Link>
            <Link className="link link-hover  flex gap-x-[7px]">
              <span>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.415 0.809629H3.91501C3.23501 0.849628 2.60501 1.02963 2.02501 1.34963C1.44501 1.66963 0.98501 2.11963 0.64501 2.69963C0.30501 3.27963 0.13501 3.90963 0.13501 4.58963V13.5896C0.13501 14.2696 0.30501 14.8996 0.64501 15.4796C0.98501 16.0596 1.44501 16.5096 2.02501 16.8296C2.60501 17.1496 3.21501 17.3296 3.85501 17.3696H14.415C15.055 17.3296 15.665 17.1496 16.245 16.8296C16.825 16.5096 17.285 16.0596 17.625 15.4796C17.965 14.8996 18.135 14.2696 18.135 13.5896V4.58963C18.135 3.90963 17.965 3.27963 17.625 2.69963C17.285 2.11963 16.825 1.66963 16.245 1.34963C15.665 1.02963 15.055 0.849628 14.415 0.809629ZM3.91501 2.30963H14.415C14.855 2.34963 15.265 2.48963 15.645 2.72963C16.025 2.96963 16.295 3.30963 16.455 3.74963L10.755 9.50963C10.315 9.94963 9.77501 10.1696 9.13501 10.1696C8.49501 10.1696 7.95501 9.94963 7.51501 9.50963L1.81501 3.74963C1.97501 3.30963 2.24501 2.96963 2.62501 2.72963C3.00501 2.48963 3.41501 2.36963 3.85501 2.36963L3.91501 2.30963ZM14.415 15.8096H3.91501C3.27501 15.8096 2.73501 15.5996 2.29501 15.1796C1.85501 14.7596 1.63501 14.2296 1.63501 13.5896V5.72963L6.49501 10.5296C6.97501 11.0096 7.53501 11.3396 8.17501 11.5196C8.81501 11.6996 9.45501 11.6996 10.095 11.5196C10.735 11.3396 11.295 11.0096 11.775 10.5296L16.635 5.72963V13.5896C16.635 14.2296 16.415 14.7596 15.975 15.1796C15.535 15.5996 14.995 15.8096 14.355 15.8096H14.415Z"
                    fill="#5CAF90"
                  />
                </svg>
              </span>
                
                <p className=" text-[14px] leading-[1.24] t-hue-base">example@email.com</p>
            </Link>
       
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
