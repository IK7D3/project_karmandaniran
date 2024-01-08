import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-right text-xl text-gray-800 leading-tight">
                    صفحه اصلی
                </h2>
            }
        >
            <Head title="پنل کاربری" />

<div>
            <div
                className="lg:max-w-[760px] screen_size_1:max-w-[840px]
screen_size_2:max-w-[880px] screen_size_3:max-w-[940px] xl:max-w-[1020px] screen_size_4:max-w-[1130px] 2xl:max-w-7xl mx-auto"
            >
            
                    <div className="pt-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className=" bg-white shadow sm:rounded-lg py-10 ">
                        <div className="mx-10">
            <div className="py-12 ">
                <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div
                        className=" overflow-hidden  p-6
                    grid grid-cols-2 text-2xl" 
                    >
                        <p>اخبار</p>
</div>
                    </div>
                    </div></div>
                    </div>
                    </div></div></div>
                    


                        <div className="py-12" >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <p>تبلیغات</p>
                    </div>
                    </div>
                    </div>
                        {/* <Link
                        href={route("profile.edit")}
                            type="button"
                            class="text-white bg-gradient-to-r 
                         from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
                         focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                         font-medium rounded-lg px-5 py-10 text-center mr-2 mb-2"
                        >
                            پروفایل
                        </Link>
                        <Link
                        href={route("transfer_request.index")}
                            type="button"
                            class="text-white bg-gradient-to-r
                         from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
                         focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                         font-medium rounded-lg px-5 py-10 text-center mr-2 mb-2"
                        >
                            درخواست انتقالی
                        </Link> */}


                        {/* <Link
                        href={route("profile.complaints")}
                            type="button"
                            class="text-white bg-gradient-to-r
                         from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
                         focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                         font-medium rounded-lg px-5 py-10 text-center mr-2 mb-2"
                        >
                            ثبت شکایات
                        </Link> */}
                  
            </div>
        </AuthenticatedLayout>
    );
}
