import Image from "next/image";

const ModalLoginMainStart = () => {
    return (
        <section id="modal_main" className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex">
            <div id="modal_container" className="m-auto w-4/5 max-w-screen-xl max-h-full bg-slate-300 rounded-md px-28 py-32">
                <div className="grid grid-cols-2 gap-24">
                    <form action="">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>

                        <div >
                            <div className="relative block">
                                <p className="absolute left-3 top-2.5 transition-all duration-[1s]  
                                
                                top-[-11px]
                                ">Email</p>
                                <input type="email"  className="block w-4/5 h-11 px-2 border-solid border-2 border-slate-900 rad rounded-lg bg-clip-padding"/>
                            </div>
                        </div>
                    </form>
                    <div >
                        <h2 className="text-2xl font-bold text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum nobis </h2>
                        <p className="text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eum cupiditate tempore, reprehenderit magni nihil quos </p>
                        <div className="flex  flex-col items-center justify-between ">
                            <Image  className="h-64 mt-14"
                                width={2000}
                                height={2000} 
                                src="https://w.wallhaven.cc/full/j8/wallhaven-j8mo65.jpg" alt="picture" />
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default ModalLoginMainStart;