import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
export const AdminDashboardLayout = ({ user, header, children }) => {
    const [menuu, setMenuu] = useState(true);
    useEffect(() => {
        window.addEventListener("resize", function () {
            if (window.innerWidth > 1023) {
                setMenuu(true);
            } else {
                setMenuu(false);
            }
        });
    },[window.innerWidth]);

    function showmenu() {
        setMenuu((prevState) => !prevState);
    }
    function showmenu2() {
        if(window.innerWidth < 1024 && menuu == true)
            setMenuu(false);
    }
    return (
        <div
            className=" flex flex-row-reverse text-right h-screen overflow-hidden 
        bg-gradient-to-tr from-sky-100 to-slate-50"
        >
            <div className="w-full ">
                <div className="top-0 left-0 right-0 sticky z-10">
                    {/* <div className="text-center bg-yellow-300 mx-auto py-2">
                        اخبار
                    </div> */}
                    {header && (
                        <header className="bg-white shadow">
                            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                            <img
                                    class="w-6 text-sky-800 dark:text-white lg:hidden"
                                    aria-hidden="true"
                                    src="../menu-icon.svg"
                                    // viewBox="0 0 17 14"
                                    onClick={() => showmenu()}
                                >
                            
                                </img>

                                <div className="hidden lg:block">{header}</div>
                            </div>
                        </header>
                    )}
                </div>
                <main className="h-full overflow-y-scroll pb-10  lg:max-w-[760px] screen_size_1:max-w-[840px]
screen_size_2:max-w-[880px] screen_size_3:max-w-[940px] xl:max-w-[1020px] screen_size_4:max-w-[1130px] 2xl:max-w-7xl mx-auto" onClick={() => showmenu2()}>{children}</main>
            </div>

{menuu && 
 <div className="fixed lg:static z-20 bg-sky-500 shadow-xl border-r-2 lg:border-l-2 lg:border-r-0 border-cyan-200 py-5 h-screen">
                <div className="flex flex-col mb-4">
                <div className="flex flex-col gap-2 text-center mb-2">
                            <img src="../Logo2.png" className="flex my-1 mx-auto max-w-[7rem] fill-curret
                             text-gray-800" />
                            <span className="flex-1 text-white font-semibold text-lg">
                                باشگاه اداری و استخدامی
                            </span>
                            <span className="flex-1 text-white font-semibold text-lg">
                                کارمندان ایران
                            </span>
                        </div>
                    <div className="flex flex-col gap-2 text-center mb-2">
                        {/* <ApplicationLogo className="flex h-8 w-auto  fill-current text-gray-800" /> */}
                        <span className="flex-1 text-lg font-light">
                            مدیریت
                        </span>
                    </div>

                    <div
                        className="my-5 flex flex-col text-right text-sm bg-sky-100 leading-6 mx-2
                            rounded-md px-4 py-2 shadow-lg"
                    >
                        <span className="">{user.name}</span>
                        <span className="">{user.national_code}</span>
                    </div>
                </div>

                <div className="flex flex-col text-right font-medium w-64">
                    <Link
                        className={
                            route().current("admin.dashboard")
                                ? " py-3 px-7 border-y-2 border-cyan-200 shadow-xl bg-sky-800 text-white"
                                : "hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                        }
                        href={route("admin.dashboard")}
                    >
                        صفحه اصلی
                    </Link>
                    <Link
                        className={
                            route().current("admin.code_first_step")
                                ? "py-3 px-7 border-b-2 border-cyan-200  shadow-xl bg-sky-800 text-white"
                                : "hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                        }
                        href={route("admin.code_first_step")}
                    >
                           درخواست های اولیه 
                    </Link>
                    <Link
                        className={
                            route().current("admin.code_second_step")
                                ? "py-3 px-7 border-b-2 border-cyan-200  shadow-xl bg-sky-800 text-white"
                                : "hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                        }
                        href={route("admin.code_second_step")}
                    >
                         درخواست های مشاوره
                    </Link>
                    <Link
                        className={
                            route().current("admin.code_third_step")
                                ? "py-3 px-7 border-b-2 border-cyan-200  shadow-xl bg-sky-800 text-white"
                                : "hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                        }
                        href={route("admin.code_third_step")}
                    >
                         تایید نهایی درخواست ها
                    </Link>
                    <Link
                        className="text-right hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        خروج
                    </Link>
                </div>
            </div>}
           
        </div>
    );
};
