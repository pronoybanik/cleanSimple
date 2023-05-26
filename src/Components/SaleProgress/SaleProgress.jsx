
const SaleProgress = () => {
    return (
        <section className="w-[400px]  ">
            <div className="flex gap-4">
                <p className='bg-[#f3d6b2] w-5 h-8 rounded-md'></p>
                <p className='text-2xl font-bold'>Listing overview</p>
            </div>
            <br />
            {/* cards... */}
            <section>
                {/* 1 st card */}
                <div className="relative   bg-[#F0F8FF] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#99c2e5] w-12 h-12 p-2 rounded-3xl  ' src='' alt="" />

                        <div>
                            <h1 className='text-xl font-semibold text-black'>Clothing & shoes</h1>
                            <h2 className='text-sm  text-black'>Men & women</h2>

                            <div>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="75"
                                    className="block rounded-full mt-1 bg-gray-200"
                                >
                                    <span
                                        className="block h-3 border-2 rounded-full bg-[#99c2e5]"
                                    // style={${``}}
                                    // style={{ backgroundColor: `width: 75%` }}
                                    ></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="inline-flex gap-2 self-end rounded mb-7 bg-[#c2dcf3] p-1 text-green-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>

                        <span className="text-xs font-medium"> 67.81% </span>
                    </div>
                </div>
                {/* 2 nd card*/}
                <div className="relative mt-4  bg-[#f7f0c2] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#99c2e5] w-12 h-12 p-2 rounded-3xl  ' src='' alt="" />

                        <div>
                            <h1 className='text-xl font-semibold text-black'>Clothing & shoes</h1>
                            <h2 className='text-sm  text-black'>Men & women</h2>

                            <div>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="75"
                                    className="block rounded-full mt-1 bg-gray-200"
                                >
                                    <span
                                        className="block h-3 border-2 rounded-full bg-[#ddc41f]"
                                    // style={${``}}
                                    // style={{ backgroundColor: `width: 75%` }}
                                    ></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="inline-flex gap-2 self-end rounded mb-7 bg-[#f8ea8d] p-1 text-green-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#8d7b06]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>

                        <span className="text-xs font-medium text-[#8d7b06]"> 48.81% </span>
                    </div>
                </div>
                {/* 3rd card */}
                <div className="relative mt-4  bg-[#E6E6FA] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#99c2e5] w-12 h-12 p-2 rounded-3xl  ' src='' alt="" />

                        <div>
                            <h1 className='text-xl font-semibold text-black'>Clothing & shoes</h1>
                            <h2 className='text-sm  text-black'>Men & women</h2>

                            <div>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="75"
                                    className="block rounded-full mt-1 bg-gray-200"
                                >
                                    <span
                                        className="block h-3 border-2 rounded-full bg-[#8989f8]"
                                    // style={${``}}
                                    // style={{ backgroundColor: `width: 75%` }}
                                    ></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="inline-flex gap-2 self-end rounded mb-7 bg-[#9595f7] p-1 text-green-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#4444e9]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>

                        <span className="text-xs font-medium text-[#2b2beb]"> 48.81% </span>
                    </div>
                </div>
                {/* 4 th card */}
                <div className="relative mt-4  bg-[#f3d6b2] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#99c2e5] w-12 h-12 p-2 rounded-3xl  ' src='' alt="" />

                        <div>
                            <h1 className='text-xl font-semibold text-black'>Clothing & shoes</h1>
                            <h2 className='text-sm  text-black'>Men & women</h2>

                            <div>

                                <span
                                    role="progressbar"
                                    aria-labelledby="ProgressLabel"
                                    aria-valuenow="75"
                                    className="block rounded-full mt-1 bg-gray-200"
                                >
                                    <span
                                        className="block h-3 border-2 rounded-full bg-[#eba34c]"
                                    // style={${``}}
                                    // style={{ backgroundColor: `width: 75%` }}
                                    ></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="inline-flex gap-2 self-end rounded mb-7 bg-[#eba34c] p-1 text-green-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#8b520d]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                        </svg>

                        <span className="text-xs font-medium text-[#8b520d]"> 48.81% </span>
                    </div>
                </div>

            </section>
        </section >
    );
};

export default SaleProgress;