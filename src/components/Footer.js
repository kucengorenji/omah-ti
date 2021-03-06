import payment from '../assets/payment.png';
import appleLogo from '../assets/apple-logo.png';
import androidLogo from '../assets/android-logo.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';
import snapchat from '../assets/snapchat.png';

const Footer = () => {
  return (
    <>
      <nav className="w-full bg-[#FAFAFA]">
        <div className="flex mx-9">
          <div className="w-full flex">
            <div className="p-9">
              <p className="font-bold pb-2">COMPANY INFO</p>
              <ul>
                <li>About Laura’s Closet </li>
                <li>Social Responsibility</li>
                <li>Affiliate</li>
                <li>Fashion Blogger</li>
              </ul>
            </div>
            <div className="p-9">
              <p className="font-bold pb-2">HELP & SUPPORT</p>
              <ul>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>How to Order</li>
                <li>How to Track</li>
                <li>Size Chart</li>
              </ul>
            </div>
            <div className="p-9">
              <p className="font-bold pb-2">CUSTOMER CARE</p>
              <ul>
                <li>Contact Us</li>
                <li>Payment</li>
                <li>Bonus Point</li>
                <li>Notice</li>
              </ul>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex p-9 justify-between">
              <div className="px-3">
                <p className="font-bold mb-3 ">SOCIALS</p>
                <ul className="flex space-x-3">
                  <li>
                    <a>
                      <img src={facebook} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={twitter} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={instagram} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={snapchat} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={tiktok} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-3">
                <p className="font-bold mb-3 text-center">PLATFORM</p>
                <ul className="flex space-x-3">
                  <li>
                    <a>
                      <img src={androidLogo} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={appleLogo} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-9">
              <form className="w-full">
                <p className="font-bold">
                  SIGN UP FOR LAURAS CLOSET STYLE NEWS
                </p>
                <div className="flex my-2">
                  <input
                    className="border pl-2 w-full  py-2 mr-2"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-gray-800 text-white px-4 py-2">
                    SUBSCRIBE
                  </button>
                </div>

                <p>
                  By clicking the SUBSCRIBE button, you are agreeing to our{' '}
                  <a className="text-blue-500 underline">
                    Privacy & Cookie Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex mx-9">
          <div className="p-9 w-full">
            <p>©2010-2022 Laura’s Closet All Rights Reserved</p>
            <div className="pt-3">
              <ul className="flex space-x-3 ">
                <li className="border-b-2 border-gray-400">Privacy Center</li>
                <li className="border-b-2 border-gray-400">
                  Privacy & Cookie Policy
                </li>
                <li className="border-b-2 border-gray-400">Manage Cookies</li>
              </ul>
            </div>
            <div className="pt-3">
              <ul className="flex space-x-3 ">
                <li className="border-b-2 border-gray-400">
                  Terms & Conditions
                </li>
                <li className="border-b-2 border-gray-400">Copyright Notice</li>
                <li className="border-b-2 border-gray-400">Imprint</li>
              </ul>
            </div>
          </div>
          <div className="p-9 w-full">
            <p className="font-bold mb-3">WE ACCEPT</p>
            <img src={payment} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
