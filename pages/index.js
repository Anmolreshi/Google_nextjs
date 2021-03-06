import Head from 'next/head';
import Avatar from '../components/Avatar';
import Image from "next/image";
import {MicrophoneIcon,ViewGridIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/outline';
import Footer from '../components/Footer';
import { useRef } from 'react';
import {useRouter} from 'next/router';

export default function Home()
 {
    const router= useRouter();
    const searchInputRef=useRef(null);
    const search =(e)=>{
    e.preventDefault();
    const term=searchInputRef.current.value;
    if(!term) 
    return;
     router.push(`/search?term=${term}`);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER  */}
           <header className="flex w-full p-5 justify-between text-sm text-gray-700">
             {/* Left  */}
             <div className="flex space-x-4 items-center">
              <p className="link">About</p>
              <p className="link">Store</p>
             </div>
             {/* Right */}
             <div className="flex space-x-4 items-center">
               <p className="link">Gmail</p>
               <p className="link">Images</p>

               {/* Icon */}
               <ViewGridIcon className="h-10 w-10
                p-2 rounded-full hover:bg-gray-100
                 cursor-pointer"/>

               {/* Avatar */}

               <Avatar url="data:image/jpeg;base64,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"
               />
             </div>
           </header>
      {/* BODY  */}
         <form className="flex flex-col items-center mt-39 flex-grow w-4/5">
           <Image 
           src='https://images.news18.com/ibnlive/uploads/2015/09/new-google-logo-010915.png'
           height={200}
           width={300}
           />
           <div className="flex w-full
            mt-5 hover:shadow-lg
             focus-within:shadow-lg
             max-w-md
             rounded-full border border-gray-200 px-5 py-3 items-center 
             sm:max-w-xl lg:max-w-2xl">
             <SearchIcon 
             className="h-5 mr-3 text-gray-500" />
             <input ref={searchInputRef} type="text" className="flex-grow  focus:outline-none "/>
             <MicrophoneIcon
              className="h-5"/>
           </div>
           <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
             <button onClick={search} className="btn">Google Search</button>
             <button onClick={search} className="btn">I'm Feeling Lucky</button>
           </div>
         </form>

       

      {/* FOOTER  */}
      <Footer/>
    </div>
  )
}
