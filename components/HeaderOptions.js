import HeaderOptionsingular from "./HeaderOptionsingular";
import { MapIcon,DotsVerticalIcon,NewspaperIcon, PhotographIcon,PlayIcon,SearchIcon } from '@heroicons/react/outline';

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base 
        lg:justify-start lg:space-x-36 lg:pl-52 border-b">
               {/* Left Section  */}
             <div className="flex space-x-6">
                 <HeaderOptionsingular Icon={SearchIcon} title="All" selected />
                 <HeaderOptionsingular Icon={PhotographIcon} title="Images"  />
                 <HeaderOptionsingular Icon={PlayIcon} title="Videos"  />
                 <HeaderOptionsingular Icon={NewspaperIcon} title="News"  />
                 <HeaderOptionsingular Icon={MapIcon} title="Maps"  />
                 <HeaderOptionsingular Icon={DotsVerticalIcon} title="More"  />

             </div>


               {/* Right Section  */}
               <div className="flex space-x-4 ">
                   <p className="link">Settings</p>
                   <p className="link">Tools</p>
               </div>
        </div>
    )
}

export default HeaderOptions;
