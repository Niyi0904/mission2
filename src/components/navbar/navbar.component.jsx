import { IoLocationOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";


const Navbar = ({bg}) => (
    <div style={{backgroundColor: `${bg}`}} className="border-b-2 w-full text-white text-md font-medium">
        <div className="mx-44 flex justify-between py-5">
            <div>The Home of the issachars</div>

            <div className="flex space-x-4 min-w-[53%]">
                <div className="flex gap-3 min-w-[28%]">
                    <button><IoLocationOutline />
                    </button>
                    <p>Olororo, Ojoo, Ibadan</p>
                </div>

                <div className="flex gap-3 min-w-[20%]">
                    <button><IoIosPhonePortrait />
                    </button>
                    <p>08080854818</p>
                </div>

                <div className="flex gap-3 min-w-[30%]">
                    <button><TfiEmail />
                    </button>
                    <p>mivmandate2010@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
)

export default Navbar; 