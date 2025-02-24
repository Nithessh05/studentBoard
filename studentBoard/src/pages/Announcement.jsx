import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";

export const Announcement = () => {

    const [showanno,setAnno] = useState(false)
    const [data,setData] = useState("")

    const handleShonAnnouncement = () =>{
        setAnno((prv)=> !prv)
    }

    const announcementData = [
        {
            subject:"",
            image:"",
            body:`Your announcement is text will be hear it best to keep it has brife as possible to make sure it gets read. An emoji to can help . If you had an image it will display at top of`
        }
    ]

  return (
    <>
       <section className=" text-white flex bg-slate-700 justify-center h-screen">

        {
            !showanno && <div className="bg-slate-700  mt-7 h-[90%] rounded-2xl w-[90%] lg:w-[50%] p-2">
            <header className="text-2xl p-1 ">
                <h1 className="pl-2"> Announcement</h1>
            </header>
            <main className="p-2 ">
                <ul className="  h-[80vh] overflow-y-scroll">
                    <li onClick={handleShonAnnouncement} className="relative bg-slate-800 rounded-2xl py-2 lg:py-5 w-[100%] lg:w-[80%] mt-4 px-5">
                        <div className="font-mono">
                            <p className=" text-[15px] lg:w-[70%]">Ms. Philips is away this week. I am going to replae her.</p>
                            <div className="flex mt-5  items-center">
                                <div className="w-5  h-5 rounded-full" >
                                    <RiAdminLine/>
                                </div>
                                <p className="ml-5 ">name</p>
                            </div>
                        </div>
                    </li>
                    
                    <li onClick={handleShonAnnouncement} className="relative bg-slate-800 rounded-2xl py-2 lg:py-5 w-[100%] lg:w-[80%] mt-4 px-5">
                        <div className="font-mono">
                            <p className=" text-[15px] lg:w-[70%]">Ms. Philips is away this week. I am going to replae her.</p>
                            <div className="flex mt-5  items-center">
                                <div className="w-5  h-5 rounded-full" >
                                    <RiAdminLine/>
                                </div>
                                <p className="ml-5 ">name</p>
                            </div>
                        </div>
                    </li>
                    
                    <li  className="relative bg-slate-800 rounded-2xl py-2 lg:py-5 w-[100%] lg:w-[80%] mt-4 px-5">
                        <div className="font-mono">
                            <p className=" text-[15px] lg:w-[70%]">Ms. Philips is away this week. I am going to replae her.</p>
                            <div className="flex mt-5  items-center">
                                <div className="w-5  h-5 rounded-full" >
                                    <RiAdminLine/>
                                </div>
                                <p className="ml-5 ">name</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="relative bg-slate-800 rounded-2xl py-2 lg:py-5 w-[100%] lg:w-[80%] mt-4 px-5">
                        <div className="font-mono">
                            <p className=" text-[15px] lg:w-[70%]">Ms. Philips is away this week. I am going to replae her.</p>
                            <div className="flex mt-5  items-center">
                                <div className="w-5  h-5 rounded-full" >
                                    <RiAdminLine/>
                                </div>
                                <p className="ml-5 ">name</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="relative bg-slate-800 rounded-2xl py-2 lg:py-5 w-[100%] lg:w-[80%] mt-4 px-5">
                        <div className="font-mono">
                            <p className=" text-[15px] lg:w-[70%]">Ms. Philips is away this week. I am going to replae her.</p>
                            <div className="flex mt-5  items-center">
                                <div className="w-5  h-5 rounded-full" >
                                    <RiAdminLine/>
                                </div>
                                <p className="ml-5 ">name</p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="relative bg-slate-800 rounded-2xl py-2 lg:py-5 w-[100%] lg:w-[80%] mt-4 px-5">
                        <div className="font-mono">
                            <p className=" text-[15px] lg:w-[70%]">Ms. Philips is away this week. I am going to replae her.</p>
                            <div className="flex mt-5  items-center">
                                <div className="w-5  h-5 rounded-full" >
                                    <RiAdminLine/>
                                </div>
                                <p className="ml-5 ">name</p>
                            </div>
                        </div>
                    </li>
                    

                </ul>
            </main> 
        </div>
        }
         
            {
                showanno && <main className="h-[60vh] mt-5 bg-slate-100 rounded-2xl w-[90%] lg:w-[50%]">
                    <header>
                        <h1 className="text-2xl text-center font-mono mt-10 text-black">Announcement</h1>
                    </header>
                    <main className="text-black  w-[70%] mx-auto mt-5">
                        <p>{announcementData[0].body}</p>
                    </main>
                    <footer className=" mt-20 text-center">
                        <button onClick={handleShonAnnouncement} className="bg-blue-400 cursor-pointer w-[50%] text-white py-1 px-4 rounded-2xl">Back</button>
                    </footer>
                </main>
            }
        
       </section>
    </>
  )
}
