import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-100 max-w-screen-2xl mx-auto px-4 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10">
            <div className="text-center flex flex-col items-center">
                <div>
                    <a
                        className="flex-none text-sm font-head font-extrabold text-orange"
                        href="#"
                        aria-label="Brand"
                    >
                        <img src="/assets/Logo/IEEE Logo/IEEE SRM SB.png" alt="IEEE SRM SB Logo" className="w-36 h-16" />
                    </a>
                </div>

                <div className="mt-3">
                    <p className="mb-2 font-sans font-base text-base sm:text-lg">
                        We're part of the{' '}
                        <a
                            className="font-sans font-bold text-base sm:text-lg hover:text-blue-800"
                            href="https://www.ieee.org/"
                        >
                            IEEE
                        </a>{' '}
                        family.
                    </p>
                    <p className="font-sans font-base text-xs sm:text-base">© 2024 IEEE SRM. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer