import { FaSearch } from 'react-icons/fa';
import image from "../../../src/assets/site_image/download.jpg"
import { useContext } from 'react';
import { AuthContext } from '../../Share/AuthProvider/AuthProvider';



const SearchingSection = () => {
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="flex justify-between">

            <div>
                <label
                    for="UserEmail"
                    className="relative w-[700px] text-2xl bg-slate-200 rounded-full block overflow-hidden  border   py-3 shadow-sm  focus-within:ring-1 "
                >
                    <input
                        type="email"
                        id="UserEmail"
                        placeholder="Email"
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span
                        className="absolute start-3 top-3 -translate-y-1/2  text-gray-600 font-serif font-semibold ml-4  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                    >
                        <div className="flex text-xl ml-20">
                            <FaSearch className="mt-1"></FaSearch>

                            <p className="ml-6">
                                searching...
                            </p>
                        </div>
                    </span>
                </label>
            </div>
            <div className="flex items-center ">
                <svg className="w-10 ml-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z"></path></svg>
                <svg className="w-10 ml-16 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="notification"><path d="M28.59 22.49c-.28-.5-.62-1-1-1.53a9.25 9.25 0 0 1-1.83-3.87l-.42-5.9C25.09 6.62 22.42 2 17.11 2h-2.22c-5.31 0-8 4.62-8.27 9.18l-.42 5.91A9.38 9.38 0 0 1 4.37 21c-.34.52-.68 1-.91 1.45a2.22 2.22 0 0 0-.2 2.33A2.4 2.4 0 0 0 5.46 26h7.72a3 3 0 1 0 5.64 0h7.72a2.4 2.4 0 0 0 2.2-1.26 2.14 2.14 0 0 0-.15-2.25ZM17 27a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm10-3.17c0 .08-.17.17-.42.17H5.46c-.25 0-.38-.09-.42-.17s0-.19.1-.35c.27-.46.58-.94.9-1.42 1-1.44 2-3.08 2.15-4.83l.43-5.91C8.83 7.94 10.6 4 14.89 4h2.22c4.29 0 6.06 3.94 6.27 7.33l.43 5.9C23.93 19 25 20.62 26 22.06c.32.48.63 1 .95 1.51a.25.25 0 0 1 .05.26Z" data-name="39-Notification"></path></svg>
                <img className="w-12 h-12 ml-16 rounded-full" src={image} alt="" />


                <div onClick={handleLogOut}
                    className="inline-block  ml-4 rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                    
                >
                    Log out
                </div>
            </div>
        </div>
    );
};

export default SearchingSection;