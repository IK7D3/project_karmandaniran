import { useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [menuu, setMenuu] = useState(true);
    const [subMenu, setSubmenu] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", function () {
            if (window.innerWidth > 1023) {
                setMenuu(true);
            } else {
                setMenuu(false);
            }
        });
    }, [window.innerWidth]);

    function showSubMenu(){
        setSubmenu((prevState) => !prevState);
    }
    function showmenu() {
        setMenuu((prevState) => !prevState);
    }
    function showmenu2() {
        if (window.innerWidth < 1024 && menuu == true) setMenuu(false);
    }
    return (
        <div
            className="font-vazir flex flex-row-reverse text-right h-screen 
        bg-gradient-to-bl from-sky-200 to-sky-50"
        >
            <div className="w-full ">
                <div className="top-0 left-0 right-0 sticky">
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
                                ></img>

                                <div className="hidden lg:block">{header}</div>
                            </div>
                        </header>
                    )}
                </div>
                <main
                    className="overflow-y-scroll h-[90%]"
                    onClick={() => showmenu2()}
                >
                    {children}
                </main>
            </div>

            {menuu && (
                <div
                    className="fixed lg:static bg-sky-500 shadow-xl border-r-2 lg:border-l-2 lg:border-r-0  border-cyan-200 py-5 
            h-screen "
                >
                    <div className="flex flex-col mb-4">
                        <div className="flex flex-col gap-2 text-center mb-2">
                            <img
                                src="../Logo2.png"
                                className="flex my-1 mx-auto max-w-[7rem] fill-curret
                             text-gray-800"
                            />
                            <span className="flex-1 text-white font-semibold text-lg">
                                باشگاه اداری و استخدامی
                            </span>
                            <span className="flex-1 text-white font-semibold text-lg">
                                کارمندان ایران
                            </span>
                        </div>

                        <div
                            className="my-2 flex flex-col text-right text-sm bg-sky-100 leading-6 mx-2
                            rounded-md px-4 py-2 shadow-lg gap-1.5"
                        >
                            <span className="">نام: {user.name} </span>
                            <span className="">
                                نام خانوادگی: {user.last_name}
                            </span>
                            <span className="">
                                کد ملی: {user.national_code}
                            </span>
                            <span className="">
                                تلفن همراه: {user.phone_number}
                            </span>
                        </div>
                    </div>

                    <div className="relative flex flex-col text-right font-medium w-64">
                        <Link
                            className={
                                route().current("dashboard")
                                    ? " py-3 px-7 border-y-2 border-cyan-200 shadow-xl bg-sky-800 text-white"
                                    : "hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                            }
                            href={route("dashboard")}
                        >
                            صفحه اصلی
                        </Link>

                        <div
                            className={
                                route().current("transfer_request.index")
                                    ? "py-3 px-7 border-b-2 border-cyan-200 cursor-pointer shadow-xl bg-sky-800 text-white"
                                    : "hover:bg-cyan-200 py-3 px-7 cursor-pointer border-b-2 border-cyan-200"
                            }
                            onClick={() => showSubMenu()}
                        >
                              
                            <div className="text-left flex flex-row justify-between">
                            <span>منوی خدمات باشگاه</span>
                                <span className="lg:block hidden">← </span>
                                 </div>
                        </div>
{/* border-sky-800 border-e-2 border-y-2 rounded-l-lg */}
                        {subMenu && <div className="lg:absolute lg:right-full top-1/3  border-cyan-500
                         flex flex-col text-right font-normal lg:w-full lg:rounded-e-xl">
                            <Link
                            className={
                                route().current("transfer_request.index")
                                    ? "py-3 px-7 pr-10 lg:rounded-e-xl bg-cyan-400 border-b-2 border-cyan-200 shadow-xl  text-sky-950"
                                    : "hover:bg-sky-300 py-3 px-7 pr-10 lg:rounded-e-xl bg-cyan-400 border-b-2 border-cyan-200"
                            }
                            href={route("transfer_request.index")}
                        >
                             درخواست نقل و انتقال
                        </Link>
                     
                        </div>}
                        
                        {/* <Link
                            className={
                                route().current("profile.edit")
                                    ? "py-3 px-7 border-b-2 border-cyan-200  shadow-xl bg-sky-800 text-white"
                                    : "hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                            }
                            href={route("profile.edit")}
                        >
                            پروفایل
                        </Link> */}
                        {/* <Link
                        className={
                            route().current("profile.complaints")
                                ? "py-3 px-7 border-b-2 border-cyan-200  shadow-xl bg-sky-800 text-white"
                                : "hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                        }
                        href={route("profile.complaints")}
                    >
                        ثبت شکایات
                    </Link> */}
                        <Link
                            className="text-right hover:bg-cyan-200 py-3 px-7 border-b-2 border-cyan-200"
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            خروج
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

{
    /* document.querySelector(#menu).addEvenLessenr('click',function(){
    document.querySelector(#navbar).classList.toggle('hidden')
})
*/
}
// const screenWidth = window.innerWidth;

// useEffect(() => {
//     function handleResize() {
//         const screenWidth = window.innerWidth;
//         if (screenWidth > 1024) {
//             setMenuu(true);
//         }else{
//             setMenuu(false);
//         }
//     }

//     // اضافه کردن رویداد برای بررسی تغییر اندازه صفحه
//     window.addEventListener("resize", handleResize);

//     // برداشتن رویداد هنگام عدم نیاز
//     return () => {
//         window.removeEventListener("resize", handleResize);
//     };
// }, [window.innerWidth]);
