import {useForm} from "react-hook-form"

const AnnouncementForm = () => {

  const {register,handleSubmit, resetField,formState:{errors}} = useForm()

  const onsubmit = (data) =>{
     console.log(data)
  }

  return (
    <>
      <section className="bg-slate-200  h-screen p-5">
        <div className=" lg:w-[70%] mx-auto" >
          <header className="bg-blue-900 p-3  text-white">
            <h1>Reporting Announcement</h1>
          </header>
          <main className=" bg-white  pt-5 h-[70vh] lg:h-[80vh] ">
            <form onSubmit={handleSubmit(onsubmit)} className=" w-[90%] pb-4  mx-auto ">
              <div className="lg:w-[50%] ">
                <label htmlFor="sub" className="hidden">Subjectr</label>
                <input {...register("subject",{required:true})} className="placeholder:text-black border-2 border-gray-200 focus:border-blue-300 w-full outline-none p-1 rounded-[10px] pl-5 " type="text" id="sub" placeholder="Enter the subject"/>
                { errors.subject && <p className="text-red-500 mt-2 text-[14px]">Subject is required</p>}
              </div>
              <div className="lg:w-[80%] mt-5">
                <label htmlFor="body" className="hidden">body</label>
                 <textarea placeholder="Enter an announcement body" className="placeholder:text-black border-2  border-gray-200 focus:border-blue-300 w-full outline-none p-1 rounded-[10px] pl-5 h-[40vh]" name="" id="body"  { ...register("body",{required:true }) }></textarea>
                 { errors.body && <p className="text-red-500 mt-2 text-[14px] ">Body is required</p>}
              </div>
              <div className=" flex justify-center mb-4  bg-white  text-white mt-[5%]   ">
                <div className="lg:w-[50%]  w-[100%] flex lg:mr-[5%] justify-around">
                   <button className="bg-red-400 w-[40%] lg:w-[25%] text-white px-4 py-1 rounded-2xl cursor-pointer" type="rese">Reset</button>
                   <button className="bg-blue-300 w-[40%] lg:w-[25%] text-white px-4 py-1 rounded-2xl cursor-pointer">Announce</button>
                </div>
              </div>
            </form>
          </main>
        </div>
      </section>
    </>
  )
}

export default AnnouncementForm
