import image from '../../../src/assets/site_image/icons8-active-directory-50.png'
import image1 from '../../../src/assets/site_image/dribble.png'
import image2 from '../../../src/assets/site_image/icons8-expired-48.png'
import image3 from '../../../src/assets/site_image/icons8-pokeball-50.png'


const Cards = () => {

    return (
        <section>
            <div className='mt-8 flex gap-4'>
                <p className='bg-[#b4b4f7] w-5 h-8 rounded-md'></p>
                <p className='text-2xl font-bold'>Listing overview</p>
                <div className='ml-10 '>
                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className=" w-full  border-2 px-12 py-2 -mt-1 rounded-full border-gray-300 text-gray-700 sm:text-sm"
                    >
                        <option value=""> Last 7 Days</option>
                        <option value="">Albert King</option>
                    </select>
                </div>


            </div>
            <div className='grid grid-cols-5 gap-2 mt-10'>

                {/* 1st */}
                <div className="relative   bg-[#F0F8FF] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#99c2e5] w-12 h-12 p-2 rounded-3xl  ' src={image} alt="" />

                        <div>
                            <h1 className='text-lg  text-black'>Active listings</h1>
                            <h2 className='text-3xl font-bold text-black'>2455</h2>
                            <h3 className='text-xs mt-2 text-black'>458 this week</h3>
                        </div>
                    </div>

                    <span
                        className="rounded-full font-medium "
                    >
                        <svg className='w-8 h-8  ml-4' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="menu"><path d="M12,7c1.1040039-0.0014038,1.9985962-0.8959961,2-2c0-1.1045532-0.8954468-2-2-2s-2,0.8954468-2,2S10.8954468,7,12,7z M12,4c0.552124,0.0003662,0.9996338,0.447876,1,1c0,0.5523071-0.4476929,1-1,1s-1-0.4476929-1-1S11.4476929,4,12,4z M12,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,10.8954468,13.1045532,10,12,10z M12,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,12.5523071,12.5523071,13,12,13z M12,17c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,17.8954468,13.1045532,17,12,17z M12,20c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,19.5523071,12.5523071,20,12,20z"></path></svg>
                    </span>
                </div>
                {/* 2nd */}
                <div className="relative  bg-[#E6E6FA] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#a2a2f0] w-12 h-12 p-2 rounded-3xl  ' src={image1} alt="" />

                        <div>
                            <h1 className='text-xl text-black'>Draft listing</h1>
                            <h2 className='text-3xl font-bold text-black'>655</h2>
                            <h3 className='text-xs mt-2 text-black'>258 this week</h3>
                        </div>
                    </div>

                    <span
                        className="rounded-full  font-medium "
                    >
                        <svg className='w-8 h-8  ml-4' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="menu"><path d="M12,7c1.1040039-0.0014038,1.9985962-0.8959961,2-2c0-1.1045532-0.8954468-2-2-2s-2,0.8954468-2,2S10.8954468,7,12,7z M12,4c0.552124,0.0003662,0.9996338,0.447876,1,1c0,0.5523071-0.4476929,1-1,1s-1-0.4476929-1-1S11.4476929,4,12,4z M12,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,10.8954468,13.1045532,10,12,10z M12,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,12.5523071,12.5523071,13,12,13z M12,17c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,17.8954468,13.1045532,17,12,17z M12,20c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,19.5523071,12.5523071,20,12,20z"></path></svg>
                    </span>
                </div>
                {/* 3rd  */}
                <div className="relative  bg-[#f3d6b2] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#f3b76e] w-12 h-12 p-2 rounded-3xl  ' src={image2} alt="" />

                        <div>
                            <h1 className='text-xl text-black'>Expired listings</h1>
                            <h2 className='text-3xl font-bold text-black'>355</h2>
                            <h3 className='text-xs mt-2 text-black'>108 this week</h3>
                        </div>
                    </div>

                    <span
                        className="rounded-full  font-medium "
                    >
                        <svg className='w-8 h-8  ml-4' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="menu"><path d="M12,7c1.1040039-0.0014038,1.9985962-0.8959961,2-2c0-1.1045532-0.8954468-2-2-2s-2,0.8954468-2,2S10.8954468,7,12,7z M12,4c0.552124,0.0003662,0.9996338,0.447876,1,1c0,0.5523071-0.4476929,1-1,1s-1-0.4476929-1-1S11.4476929,4,12,4z M12,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,10.8954468,13.1045532,10,12,10z M12,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,12.5523071,12.5523071,13,12,13z M12,17c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,17.8954468,13.1045532,17,12,17z M12,20c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,19.5523071,12.5523071,20,12,20z"></path></svg>
                    </span>
                </div>
                {/* 4 */}
                <div className="relative  bg-[#f7f0c2] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#f3e65a] w-12 h-12 p-2 rounded-3xl  ' src={image3} alt="" />

                        <div>
                            <h1 className='text-xl text-black'>inaction listings</h1>
                            <h2 className='text-3xl font-bold text-black'>155</h2>
                            <h3 className='text-xs mt-2 text-black'>69 this week</h3>
                        </div>
                    </div>

                    <span
                        className="rounded-full  font-medium "
                    >
                        <svg className='w-8 h-8  ml-4' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="menu"><path d="M12,7c1.1040039-0.0014038,1.9985962-0.8959961,2-2c0-1.1045532-0.8954468-2-2-2s-2,0.8954468-2,2S10.8954468,7,12,7z M12,4c0.552124,0.0003662,0.9996338,0.447876,1,1c0,0.5523071-0.4476929,1-1,1s-1-0.4476929-1-1S11.4476929,4,12,4z M12,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,10.8954468,13.1045532,10,12,10z M12,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,12.5523071,12.5523071,13,12,13z M12,17c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,17.8954468,13.1045532,17,12,17z M12,20c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,19.5523071,12.5523071,20,12,20z"></path></svg>
                    </span>
                </div>
                {/* 5 */}
                <div className="relative  bg-[#cfbdf3] flex items-start justify-between rounded-xl border border-gray-100  shadow-xl sm:p-6 lg:p-8">
                    <div className=" text-gray-500 flex gap-8">

                        <img className='bg-[#a075f7] w-12 h-12 p-2 rounded-3xl  ' src={image3} alt="" />

                        <div>
                            <h1 className='text-xl text-black'>Sold out</h1>
                            <h2 className='text-3xl font-bold text-black'>657</h2>
                            <h3 className='text-xs mt-2 text-black'>47 this week</h3>
                        </div>
                    </div>

                    <span
                        className="rounded-full  font-medium "
                    >
                        <svg className='w-8 h-8  ml-4' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="menu"><path d="M12,7c1.1040039-0.0014038,1.9985962-0.8959961,2-2c0-1.1045532-0.8954468-2-2-2s-2,0.8954468-2,2S10.8954468,7,12,7z M12,4c0.552124,0.0003662,0.9996338,0.447876,1,1c0,0.5523071-0.4476929,1-1,1s-1-0.4476929-1-1S11.4476929,4,12,4z M12,10c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,10.8954468,13.1045532,10,12,10z M12,13c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,12.5523071,12.5523071,13,12,13z M12,17c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C14,17.8954468,13.1045532,17,12,17z M12,20c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C13,19.5523071,12.5523071,20,12,20z"></path></svg>
                    </span>
                </div>

            </div>
        </section>
    );
};

export default Cards;