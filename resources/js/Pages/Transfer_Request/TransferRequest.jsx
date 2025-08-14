import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import FirstPayment from "./Partials/FirstPayment";
import ShowForms from "./Partials/ShowForms";
import ShowReForms from "./Partials/ShowReForms";
import ThirdPayment from "./Partials/ThirdPayment";
import TransferForm from "./Partials/TransferForm";

export default function TransferRequest({
    first_request,
    second_third_request,
    auth,
    data,
    req,
    cities,
}) {
    if(second_third_request == null){
        second_third_request = {
            second_request: 0
        }
    }
    const user = usePage().props.auth.user;

    console.log("this er: ", user.national_code);
    console.log("thig: ",req);
    const formData = data.filter((item) => item.user_id != user.id);
    const reFormData = formData.filter(
        (item) =>
            !req.some((reqItem) =>
                reqItem.related_data.some((ritem) => ritem.id == item.id)
            )
    );

    // console.log("reegq: ", req);
    useEffect(() => {
        setShowForms(false);
    }, [reFormData.length]);

    

    const [showForms, setShowForms] = useState(false);
    const reStore = () => {
        post(route("transfer_re_request.store"));
    };
    const handleClick = () => {
        if (reFormData.length != 0) setShowForms(true);
        else setShowForms(false);
    };



  
    const filteredData = req;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    درخواست انتقالی
                </h2>
            }
        >
            <Head title="درخواست انتقالی" />
            <div
                className="lg:max-w-[760px] screen_size_1:max-w-[840px]
screen_size_2:max-w-[880px] screen_size_3:max-w-[940px] xl:max-w-[1020px] screen_size_4:max-w-[1130px] 2xl:max-w-7xl mx-auto"
            >
                {first_request.initial_request == 0 ? (
                    
                    <TransferForm
                        first_request={first_request}
                        auth={auth}
                        cities={cities}
                    />
                    
                ) : first_request.initial_request == 1 ? (
                    <div className="pt-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className=" bg-white shadow sm:rounded-lg py-10 ">
                        <div className="mx-10">
                                <FirstPayment auth={auth}></FirstPayment>
                                <div className="flex justify-end px-10">
                                    <Link
                                    href={route("transfer_re_request.store", { first_request: first_request })}
                                            className="mt-16 md:h-fit cursor-pointer md:max-w-xs sm:w-1/3
                                            text-center    py-2 px-7 border-y-2 shadow-xl
                                        border-b-2 
                                        bg-emerald-500 border
                                            font-vazir
                                            border-transparent 
                                            rounded-md font-semibold text-base text-white uppercase 
                                            tracking-wider hover:bg-emerald-600 focus:bg-emerald-700
                                            active:bg-emerald-900
                                            focus:outline-none focus:ring-2 focus:ring-emerald-500 
                                            focus:ring-offset-2 transition 
                                            ease-in-out duration-150"
                                                                
                                                               >
                                            درخواست مجدد
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                ) : first_request.initial_request == 2 ? (
                    <div className="pt-5">
                        <div className=" mx-auto px-4 lg:px-8 space-y-6">
                            <div className="p-4 sm:p-8 bg-white text-sky-950 shadow rounded-lg leading-10">
                                <p>کد پیگیری شما با موفقیت ارسال شد.</p>
                                <p>
                                    بعد از تایید کد توسط مدیریت، مرحله بعدی در
                                    همین صفحه برای شما فعال می شود.
                                </p>
                                <p className="text-orange-400 font-semibold">
                                    کاربر عزیز منتظر دریافت پیامک تایید پرداخت
                                    خود باشید.
                                </p>
                                <div className="flex justify-end px-10">
                                    <Link
                                    href={route("transfer_re_request.store", { first_request: first_request })}
                                            className="mt-10 md:h-fit cursor-pointer md:max-w-xs sm:w-1/3
                                            text-center    py-2 px-7 border-y-2 shadow-xl
                                        border-b-2 
                                        bg-emerald-500 border
                                            font-vazir
                                            border-transparent 
                                            rounded-md font-semibold text-base text-white uppercase 
                                            tracking-wider hover:bg-emerald-600 focus:bg-emerald-700
                                            active:bg-emerald-900
                                            focus:outline-none focus:ring-2 focus:ring-emerald-500 
                                            focus:ring-offset-2 transition 
                                            ease-in-out duration-150"
                                                                
                                                               >
                                            درخواست مجدد
                                        </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ) : first_request.initial_request == 3 ? (
                    <div className="pt-5">
                        <div className=" mx-auto px-4 lg:px-8 space-y-6">
                            <div className="p-8 sm:p-8 bg-emerald-500 shadow rounded-lg">
                                <p className="text-white">
                                    اطلاعات مرحله اول شما با موفقیت تکمیل شد.
                                </p>
                                <div className="flex flex-row justify-end gap-5">
                                    {second_third_request.second_request != 2 ? (
                                        first_request.appel == 0 ? 
                                            (<div className="flex  ">
                                            <Link
                                            href={route("transfer_request.appel", { first_request: first_request })}
                                         // onClick={() => handleAppel()}
                                                    className="mt-16 md:h-fit cursor-pointer md:max-w-xs 
                                                    text-center    py-2 px-7 border-y-2 shadow-xl
                                                border-b-2 
                                                bg-orange-400 border
                                                    font-vazir
                                                    border-transparent 
                                                    rounded-md font-semibold text-base text-white uppercase 
                                                    tracking-wider hover:bg-orange-600 focus:bg-orange-700
                                                    active:bg-orange-900
                                                    focus:outline-none focus:ring-2 focus:ring-orange-500 
                                                    focus:ring-offset-2 transition 
                                                    ease-in-out duration-150"
                                                      >
                                                    درخواست فراخوان
                                                </Link>
                                        </div>)
                                        :(<div className="flex  ">
                                        <Link
                                        href={route("transfer_re_request.appel", { first_request: first_request })}
                                     //    onClick={() => handelappel()}
                                                className="mt-16 md:h-fit cursor-pointer  
                                                text-center    py-2 px-7 border-y-2 shadow-xl
                                            border-b-2 
                                            bg-amber-400 border
                                                font-vazir
                                                border-transparent 
                                                rounded-md font-semibold text-base text-white uppercase 
                                                tracking-wider hover:bg-amber-600 focus:bg-amber-700
                                                active:bg-amber-900
                                                focus:outline-none focus:ring-2 focus:ring-amber-500 
                                                focus:ring-offset-2 transition 
                                                ease-in-out duration-150"
                                                  >
                                                درخواست فراخوان شما ثبت شد(برای لغو، کلیک کنید)
                                            </Link>
                                    </div>)
                                        
                                    ):(null)}
                               
                                
                                <div className="flex  ">
                                    <Link
                                    href={route("transfer_re_request.store", { first_request: first_request })}
                                            className="mt-16 md:h-fit cursor-pointer md:max-w-xs 
                                            text-center    py-2 px-7 border-y-2 shadow-xl
                                        border-b-2 
                                        bg-sky-400 border
                                            font-vazir
                                            border-transparent 
                                            rounded-md font-semibold text-base text-white uppercase 
                                            tracking-wider hover:bg-sky-600 focus:bg-sky-700
                                            active:bg-sky-900
                                            focus:outline-none focus:ring-2 focus:ring-sky-500 
                                            focus:ring-offset-2 transition 
                                            ease-in-out duration-150"
                                                                
                                                               >
                                            درخواست مجدد
                                        </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}

                {first_request.initial_request == 3 &&
                    (second_third_request.second_request == 0 ? (
                        <div className="py-5 ">
                            <div className=" mx-auto px-4 lg:px-8 space-y-6">
                                <div className="p-4 sm:p-8 bg-white shadow rounded-lg">
                                    <ShowForms data={formData} />
                                </div>
                            </div>
                        </div>
                    ) : second_third_request.second_request == 1 ? (
                        <div className="pt-5">
                            <div className=" mx-auto px-4 lg:px-8 space-y-6">
                                <div className="p-4 sm:p-8 bg-white shadow rounded-lg leading-8">
                                    <p>درخواست های شما به شرح زیر میباشد:</p>

                                    <div class="relative overflow-hidden shadow-md rounded-lg my-3 overflow-x-scroll">
                                        <table class="w-full text-xs text-right text-gray-500 ">
                                            <thead class=" bg-amber-200">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            شناسه
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3"
                                                    >
                                                        <div className="w-20">
                                                            تاریخ ثبت
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            شهر مبداء
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            سازمان مبداء
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            شهر مقصد
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            سازمان مقاصد
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3"
                                                    >
                                                        <div className="w-20">
                                                            سایر مقاصد
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            مدرک تحصیلی
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            سابقه کار
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            پست سازمانی
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            نوع استخدام
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            تخصص شغلی
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            تجارب شغلی
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="font-medium">
                                                {filteredData.map((item) =>
                                                    item.related_data.map(
                                                        (ritem) => (
                                                            <>
                                                                <tr className=" border-b text-xs ">
                                                                    <td className="px-6 py-3 pr-8">
                                                                        {
                                                                            ritem.id
                                                                        }
                                                                    </td>

                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            item.second_request_start_date
                                                                        }
                                                                    </td>

                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.city
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.origin
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.destination_city
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.main_destination
                                                                        }
                                                                    </td>

                                                                    <td className="px-6 py-3">
                                                                        {
                                                                            ritem.other_destinations
                                                                        }
                                                                    </td>

                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.degree_of_education
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.work_experience
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.organizational_position
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.type_of_employment
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.job_specialization
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.job_experiences
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex flex-col gap-2 md:flex-row md:items-end  ">
                                            <div>
                                        <p>کد پیگیری شما با موفقیت ارسال شد.</p>

                                        <p className="pl-2">
                                            بعد از تایید کد توسط مدیریت، مرحله بعدی
                                            در همین صفحه برای شما فعال می شود.
                                        </p>
                                        <p className="text-orange-400 font-semibold">
                                            کاربر عزیز منتظر دریافت پیامک تایید
                                            پرداخت خود باشید.
                                        </p>
                                        </div>
                                        <div
                                            className="md:h-fit cursor-pointer md:max-w-xs sm:w-1/3
                                            text-center mx-auto  mb-5 py-2 px-7 border-y-2 shadow-xl
                                        border-b-2 
                                        bg-sky-400 border
                                            font-vazir
                                            border-transparent 
                                            rounded-md font-semibold text-base text-white uppercase 
                                            tracking-wider hover:bg-sky-600 focus:bg-sky-700
                                            active:bg-sky-900
                                            focus:outline-none focus:ring-2 focus:ring-sky-500 
                                            focus:ring-offset-2 transition 
                                            ease-in-out duration-150"
                                            onClick={() => handleClick()}
                                        >
                                            درخواست مجدد
                                        </div>
                                        
                                    </div>
                                    
                                    {showForms && (
                                            <div className="mt-10"><ShowReForms data={reFormData}  /></div>
                                        )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="pt-5">
                            <div className="mx-auto px-4 lg:px-7 space-y-6">
                                <div className=" p-8 sm:p-8 bg-emerald-500 shadow rounded-lg">
                                    <p className="text-white pb-3">
                                       درخواست شما با موفقیت انجام شد.
                                    </p>
                                    <div
                                        class="overflow-hidden shadow-md rounded-lg my-3 bg-white
                                 overflow-x-scroll"
                                    >
                                        <table class=" text-xs text-right text-gray-500  ">
                                            <thead class=" bg-amber-200">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            شناسه
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3"
                                                    >
                                                        <div className="w-20">
                                                            تاریخ ثبت
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            شهر مبداء
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            سازمان مبداء
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            شهر مقصد
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3 "
                                                    >
                                                        <div className="w-20">
                                                            سازمان مقاصد
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        class="px-6 py-3"
                                                    >
                                                        <div className="w-20">
                                                            سایر مقاصد
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            مدرک تحصیلی
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            سابقه کار
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            پست سازمانی
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            نوع استخدام
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            تخصص شغلی
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        class="px-6  py-3"
                                                    >
                                                        <div className="w-20">
                                                            تجارب شغلی
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className=" font-medium ">
                                                {filteredData.map((item) =>
                                                    item.related_data.map(
                                                        (ritem) => (
                                                            <>
                                                                <tr className=" border-b text-xs ">
                                                                    <td className="px-6 py-3 pr-8">
                                                                        {
                                                                            ritem.id
                                                                        }
                                                                    </td>

                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            item.second_request_start_date
                                                                        }
                                                                    </td>

                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.city
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.origin
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.destination_city
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.main_destination
                                                                        }
                                                                    </td>

                                                                    <td className="px-6 py-3">
                                                                        {
                                                                            ritem.other_destinations
                                                                        }
                                                                    </td>

                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.degree_of_education
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.work_experience
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.organizational_position
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.type_of_employment
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.job_specialization
                                                                        }
                                                                    </td>
                                                                    <td className="px-6  py-3">
                                                                        {
                                                                            ritem.job_experiences
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        )
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                {second_third_request.second_request == 2 &&
                    (second_third_request.third_request == 0 ? (
                        <div className="py-5 ">
                            <div className=" mx-auto px-4 lg:px-8 space-y-6">
                                <div className=" sm:p-8 bg-white shadow rounded-lg">
                                    <ThirdPayment data={data} />
                                </div>
                            </div>
                        </div>
                    ) : second_third_request.third_request == 1 ? (
                        <div className="pt-5">
                            <div className=" mx-auto px-4 lg:px-8 space-y-6 ">
                                <div className="p-4  sm:p-8 bg-white shadow rounded-lg leading-10">
                                    <p>کد پیگیری شما با موفقیت ارسال شد.</p>
                                    <p>
                                        بعد از تایید کد توسط مدیریت، مرحله بعدی
                                        در همین صفحه برای شما فعال می شود.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="pt-5">
                            <div className=" mx-auto px-4 lg:px-8 space-y-6">
                                <div className="p-8 sm:p-8 bg-emerald-500 shadow rounded-lg">
                                    <p className="text-white">
                                        اطلاعات مرحله سوم شما با موفقیت تکمیل
                                        شد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </AuthenticatedLayout>
    );
}

{
    /* <div className="leading-8 text-right">
<p>
    شما از{" "}
    <span className="font-semibold">
        {auth.user.origin_university}
    </span>{" "}
    به{" "}
    <span className="font-semibold">
        {auth.user.destination_university}
    </span>{" "}
    درخواست انتقالی داده اید.
    <span className="invisible">ا</span>
</p>
<p>.منتظر تماس تیم ما باشید</p>
</div> */
}

// {auth.user.initial_request == 0 ? (
//     <div className="pt-10">
//         <div className=" mx-auto px-4 lg:px-8 space-y-6">
//             <div className="p-4 sm:p-8 bg-white shadow rounded-lg">
//                 <TransferForm auth={auth} />
//             </div>
//         </div>
//     </div>
// ) : (
//     <div className="pt-10">
//         <div className=" mx-auto px-4 lg:px-8 space-y-6">
//             <div className="p-4 sm:p-8 bg-white shadow rounded-lg">
//                 <p>اطلاعات مرحله اول شما با موفقیت تکمیل شد</p>
//                 {/* {setSecond(1)} */}
//             </div>
//         </div>
//     </div>
// )}
