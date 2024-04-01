import { FaBell, FaUser } from "react-icons/fa";

export default function NavBar() {
    return (
        <div className="absolute top-4 left-0 right-4 py-4 px-6 flex justify-end items-center">
            {/* Notification Icon */}
            <div className="bg-white bg-opacity-30 p-1 mr-4 p-3 rounded-md">
            <FaBell className="w-8 h-8" />
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-30 p-2 rounded-md">
                {/* Dropdown */}
                <div>
                    {/* User Name */}
                    <div className="text-sm text-white">John Doe</div>
                    {/* User Email */}
                    <div className="text-xs text-gray-300">john.doe@example.com</div>
                </div>
                {/* Your dropdown menu goes here */}
                <div className="rounded-full p-1">
                    {/* User Icon */}
                    <FaUser className="w-8 h-8 rounded-full" />
                </div>
            </div>
        </div>
    )
}