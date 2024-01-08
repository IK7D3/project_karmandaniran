import { Link } from "@inertiajs/react";
import React from "react";

const HomePage = () => {
    return (
        <div className="bg-white font-vazir ">
            <div className="mx-auto   ">
                <div
                    className="justify-start relative isolate overflow-hidden h-screen  
                    bg-sky-950 px-6 pt-16 shadow-2xl
                 
                sm:px-16 md:pt-24 flex gap-y-4 flex-col lg:flex-row lg:gap-x-10 lg:px-24 lg:pt-0 items-center"
                >
                    <div className="w-[20%]">                           
                         <img
                                src="../Logo2.png"
                                className=""
                            ></img>
                            </div>

                    <div className="mx-auto ma  text-center lg:mx-0 lg:basis-3/4 lg:py-32 lg:text-right">
                         
                        <div className="flex flex-col gap-7 items-center lg:items-start">
                           
                            <h2
                                className="text-3xl font-bold tracking-tight text-white 
                            sm:text-4xl mb-2"
                            >
                                باشگاه اداری و استخدامی کارمندان ایران
                            </h2>
                             <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl ">
                            به باشگاه اداری و استخدامی کارمندان ایران ایران خوش آمدید.
                        </h3>
                        </div>
                       
                        {/* <p className="mt-6 text-lg leading-8 text-sky-300">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        </p> */}
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                href={route("register")} // آدرس مسیر ثبت نام
                                className="items-center text-center px-6 py-2
                                bg-sky-100 border border-transparent 
                        rounded-md font-semibold text-base text-sky-950  
                        tracking-normal hover:bg-sky-500 hover:text-white focus:bg-sky-700 
                        active:bg-sky-900
                         focus:outline-none focus:ring-2 focus:ring-sky-500
                          focus:ring-offset-2 
                         transition ease-in-out
                          
                            "
                            >
                                ثبت نام
                            </Link>
                            <Link
                                href={route("login")}
                                type="button"
                                className="items-center text-center px-6 py-2 
                                border border-transparent 
                               rounded-md font-semibold text-base text-white  
                               tracking-wider hover:text-sky-300 
                               
                                
                                transition ease-in-out
                                 
                                   "
                            >
                                <span aria-hidden="true">ورود</span> ← 
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8"></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
