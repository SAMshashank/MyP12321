import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden">
    {/* Ghost Branding - Right Side Background */}
    <div className="absolute right-0 top-22 bottom-0 w-1/2 flex items-center justify-end opacity-20 pointer-events-none z-0 text-gray-800">
      <svg
        width="420"
        height="503"
        viewBox="0 0 420 503"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-96 h-auto"
      >
        <path
          d="M400.116 794.748C294.008 794.748 199.504 754.791 118.368 675.455C38.6615 597.526 -0.771389 500.487 0.994262 386.984C2.67583 282.665 49.7599 180 130.223 105.298C206.567 34.3175 303.93 -2.57895 404.404 1.22651C514.21 -2.33077 611.741 36.7993 694.307 117.707C771.911 193.816 811.765 292.51 809.578 403.282C805.206 624.743 626.455 768.11 460.484 790.529C439.969 793.342 419.874 794.665 400.116 794.665V794.748ZM390.194 35.6411C303.761 35.6411 220.524 69.063 154.438 130.529C80.869 198.945 37.8207 292.592 36.2232 387.646C34.5416 491.387 70.5273 579.988 143.171 650.968C231.202 737.004 336.384 772.411 455.776 756.362C607.285 735.929 770.482 605.054 774.434 402.785C776.452 300.203 741.139 212.595 669.504 142.359C594.001 68.3185 505.13 32.4975 405.076 35.972H404.404H403.731C399.275 35.8066 394.735 35.7238 390.278 35.7238L390.194 35.6411Z"
          fill="#374151"
          fillOpacity="0.3"
        />
        <path
          d="M525.148 133.094C534.817 137.313 566.01 151.708 582.826 161.883V266.947H566.683C562.899 266.947 551.213 212.761 481.764 165.192C456.456 147.902 424.254 134.831 395.247 134.831C366.239 134.831 343.79 142.773 325.125 158.574C306.544 174.375 297.127 194.23 297.127 218.138C297.127 237.248 305.787 254.455 323.191 269.843C340.511 285.23 373.975 299.79 423.497 313.44C501.102 335.115 553.651 361.835 581.145 393.603C608.386 425.37 622.007 460.777 622.007 499.659C622.007 538.541 612.001 572.79 592.075 599.76C572.064 626.729 548.186 647.99 520.524 663.46C492.694 678.93 457.044 686.706 413.66 686.706C389.025 686.706 363.549 683.232 337.232 676.2C310.916 669.251 283.338 659.489 255.592 644.929C236.506 634.836 205.397 617.05 197.914 612.251V493.868H216.327C217.168 497.095 218.345 501.314 220.363 506.443C238.02 549.13 262.234 585.53 294.1 611.507C326.218 637.732 365.651 655.518 405.925 655.518C440.061 655.518 467.638 645.591 488.658 625.653C509.594 605.716 520.103 583.214 520.103 557.899C520.103 532.585 510.434 511.324 491.012 493.951C471.674 476.661 436.697 460.033 386.334 444.067C337.401 428.431 300.994 413.54 277.116 399.311C253.238 385.082 234.068 365.558 219.775 340.74C205.397 315.839 198.334 290.607 198.334 265.044C198.334 220.454 215.907 182.482 251.052 151.211C286.281 120.023 334.121 104.388 394.658 104.388C427.365 104.388 472.515 110.096 525.316 132.929L525.148 133.094Z"
          fill="#374151"
          fillOpacity="0.3"
        />
      </svg>
    </div>


      <div className="mx-2 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo Section */}
          
            <Link href="/" className="flex items-center space-x-3 mb-8">
            <img
              src="./"
              alt=""
              className="h-226 w-63"
            />
            </Link>
          

          {/* Applications Column */}
          <div>
          <Link href="/" className="flex items-center space-x-3 mb-8">
            <img
              src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              alt="Supreme Group Logo"
              className="h-226 w-63"
            />
            </Link>
            <h3 className="text-sm font-semibold text-gray-800 mb-6">APPLICATIONS</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Automotive
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Filtration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Customised Nonwoven
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="mt-20">
            <h3 className="text-sm font-semibold text-gray-800 mb-6">COMPANY</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Global Competency
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Innovation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  ESG Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* More & Follow Us Column */}
          <div className="mt-20">
            <h3 className="text-sm font-semibold text-gray-800 mb-6">MORE</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-800 mb-6">FOLLOW US</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm ml-20 pl-20"> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;©2024. All Rights Reserved.</p>
          <p className="text-gray-600 text-sm text-center md:text-right">
            Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.
          </p>
        </div>
      </div>
    </footer>
  )
}
