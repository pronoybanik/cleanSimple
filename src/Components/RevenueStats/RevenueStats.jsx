import { FaSearch } from 'react-icons/fa';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Sun', price: '76000' },
    { name: 'Mon', price: '47000' },
    { name: 'Tue', price: '65000' },
    { name: 'Web', price: '42000' },
    { name: 'Thu', price: '67800' },
    { name: 'Fri', price: '40000' },
    { name: 'Sat', price: '79000' },
];


const RevenueStats = () => {
    return (
        <section>
            <div className='flex gap-4 '>
                <p className='bg-[#dd99eb] w-5 h-8 rounded-md'></p>
                <p className='text-2xl font-bold'>Revenue stats</p>
            </div>

            <div className='flex gap-2 items-center '>
                <p className='text-3xl font-bold mt-4 mb-6'>2,75,234K total revenue</p><p className='text-gray-500 text-sm'>(This week)</p>
            </div>

            <div className='flex text-center gap-2 '>
                <div
                    className="inline-flex gap-2 self-end rounded mb-2  bg-[#c7f7cd] p-1 text-green-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#04a748]"
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

                    <span className="text-xs font-medium text-[#04a748]"> 48.81% </span>
                </div>
                <div>
                    <p className='text-gray-500'> vs.Previous week</p>
                </div>
            </div>


            <div className='-ml-8  mt-10'>
                <LineChart width={1050} height={400} data={data}>
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={4} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>


            <br />
            <div className='mt-8 flex gap-4 mb-6 text-center'>
                <p className='bg-[#b4b4f7] w-5 h-8 rounded-md'></p>
                <p className='text-2xl font-bold'>Listing overview</p>
                <div className='ml-2 '>

                    <label className="relative -mt-2 w-[400px] text-2xl bg-slate-200 rounded-full block overflow-hidden  border   py-2 shadow-sm  focus-within:ring-1 ">
                        <input
                            type="email"
                            id="UserEmail"
                            placeholder="Email"
                            className="peer h-8 w-full  border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span
                            className="absolute start-3 top-3 -translate-y-1/2  text-gray-600 font-serif font-semibold  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                        >
                            <div className="flex text-xl ml-6">
                                <FaSearch className="mt-1"></FaSearch>

                                <p className="ml-4">
                                    searching...
                                </p>
                            </div>
                        </span>
                    </label>

                </div>


            </div>

        </section>
    );
};

export default RevenueStats;