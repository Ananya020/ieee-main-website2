import React from "react";
import { useEffect, useState } from "react";
import "./Footer.css";

// <footer className="bg-blue-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
//     <div className="text-center flex flex-col items-center">
//         <div>
//             <a
//                 className="flex-none text-sm font-head font-extrabold text-orange"
//                 href="#"
//                 aria-label="Brand"
//             >
//                 <img src="/assets/Logo/IEEE Logo/IEEE SRM SB.png" alt="IEEE SRM SB Logo" className="w-36 h-16" />
//             </a>
//         </div>

//         <div className="mt-3">
//             <p className="mb-2 font-sans font-base text-base sm:text-lg">
//                 We're part of the{' '}
//                 <a
//                     className="font-sans font-bold text-base sm:text-lg hover:text-blue-800"
//                     href="https://www.ieee.org/"
//                 >
//                     IEEE
//                 </a>{' '}
//                 family.
//             </p>
//             <p className="font-sans font-base text-xs sm:text-base">© 2024 IEEE SRM. All rights reserved.</p>
//         </div>

//     </div>
// </footer>

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setIsDarkMode(darkModeMediaQuery.matches);
      const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
        setIsDarkMode(e.matches);
      };
      darkModeMediaQuery.addEventListener("change", handleChange);
      return () =>
        darkModeMediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full py-0 px-2 sm:px-6 lg:px-8 mx-auto dark:bg-black">
        <section className="bg-white text-black my-10 mt-14 overflow-hidden">
          <div className="footers-container">
            <div className="footer">
              <img
                src={
                  isDarkMode
                    ? "/assests/footer/logo_dark.png"
                    : "/assests/footer/logo_light.png"
                }
                alt="IEEE SRM SB logo"
                className="h-[1.5rem] w-full lg:h-[2.8rem] "
              />
            </div>
          </div>
        </section>
        <div className="mx-auto bg-[#D0DAF5] w-[75%] py-[1.5rem] lg:py-[4rem] rounded-lg">
          <div className="col-span-2">
            <div className="flex justify-center items-center w-[80%] mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2 w-full">
                <h4 className="text-xl mb-2 lg:mb-0 lg:text-2xl text-black">
                  Wanna Connect with Us?
                </h4>
                <form>
                  <div className=" flex flex-row items-center gap-2 sm:flex-row sm:gap-3 bg-black rounded-lg p-2 dark:bg-gray-800">
                    <div className="w-full">
                      <label htmlFor="hero-input" className="sr-only">
                        Search
                      </label>
                      <input
                        type="text"
                        id="hero-input"
                        name="hero-input"
                        className="py-2 px-3 pr-[1rem] lg:py-4 lg:px-6 lg:pr-[7rem] bg-black block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-transparent text-white dark:text-white dark:focus:ring-gray-600"
                        placeholder="Enter your email"
                      />
                    </div>
                    <a
                      className="w-auto whitespace-nowrap py-2.5 px-[1rem] lg:py-3.5 lg:px-[1.9rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#188CFF] text-black hover:bg-[#D0DAF5] disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Send
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-4">
          <div className="grid grid-cols-6 lg:grid-cols-5 gap-2">
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[1rem] text-gray-900 text-center dark:text-gray-100">
                IEEE
              </h4>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[1rem]  text-gray-900 text-center dark:text-gray-100">
                About
              </h4>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[1rem]  text-gray-900 text-center dark:text-gray-100">
                Gallery
              </h4>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <h4 className="text-[1rem]  text-gray-900 text-center dark:text-gray-100">
                Activity
              </h4>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <h4 className="text-[1rem]  text-gray-900 text-center dark:text-gray-100">
                Domains
              </h4>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-7">
          <div className="grid grid-cols-6 lg:grid-cols-5 gap-2">
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[1rem]   text-gray-900 text-center dark:text-gray-100">
                Events
              </h4>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[1rem]   text-gray-900 text-center dark:text-gray-100">
                Testimonials
              </h4>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[1rem]   text-gray-900 text-center dark:text-gray-100">
                Sponsor
              </h4>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <h4 className="text-[1rem]   text-gray-900 text-center dark:text-gray-100">
                FAQs
              </h4>
            </div>
            <div className="col-span-3 lg:col-span-1">
              <h4 className="text-[1rem]  text-gray-900 text-center dark:text-gray-100">
                Contact us
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full max-w-[85rem] py-0 pb-6 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center">
            <div className="inline-flex justify-center items-center">
              <img
                src={
                  isDarkMode
                    ? "/assests/logo/IEEE logo/Logo_white.png"
                    : "/assests/logo/IEEE logo/Logo_color.png"
                }
                alt="IEEE SRM SB logo"
                className="w-36 xl:w-36 h-auto"
              />
            </div>
            <div className=" space-x-2">
              <a
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
