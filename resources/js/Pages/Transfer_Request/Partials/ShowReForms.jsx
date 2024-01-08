import React, { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { router, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import ReactPaginate from "react-paginate";
import InputLabel from "@/Components/InputLabel";

const ShowReForms = ({ data }) => {
    // const user = usePage().props.auth.user;
    // console.log(user);
    console.log("usepage: ", usePage().props.auth.user);
    const [currentPage, setCurrentPage] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const [values, setValues] = useState({
        // user: usePage().props.auth.user,
        user: usePage().props.second_third_request,
        checkedItems: [],
        price: 0,
        secondPayment: "",
    });

    const handleCheckboxChange = (e) => {
        const key = e.id;
        const newCheckedItems = [...values.checkedItems];
        let newPrice = values.price;

        if (newCheckedItems.includes(key)) {
            newCheckedItems.splice(newCheckedItems.indexOf(key), 1);
            newPrice -= 5;
        } else {
            if (newCheckedItems.length > 4) {
                setErrorMessage("تعداد موارد انتخاب شده بیشتر از حد مجاز است");
            } else {
                newCheckedItems.push(key);
                newPrice += 5;
            }
        }
        setValues((prevValues) => ({
            ...prevValues,
            checkedItems: newCheckedItems,
            price: newPrice,
        }));
    };

    //   console.log("newP: ", values.price);
    const itemsPerPage = 5;
    console.log("data:",data);
    const pageCount = Math.ceil(
        data.filter(
            (item) =>
                item.main_destination !== null &&
                item.main_destination !== undefined
        ).length / itemsPerPage
    );

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = data
        .filter(
            (item) =>
                item.main_destination !== null &&
                item.main_destination !== undefined
        )
        .slice(offset, offset + itemsPerPage);

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/transfer_request/user_re_requests", values);
    }

    //   console.log(values.checkedItems);
    return (
        <form onSubmit={handleSubmit} className="flex flex-col ">
            <div>
                {errorMessage && (
                    <p className="mb-1 bg-red-500 p-1 text-center text-white shadow rounded-lg font- text-sm">
                        {errorMessage}
                    </p>
                )}
                {/* سایر کدهای JSX */}
            </div>
            <p className="text-sky-950 mb-4 px-5 py-3 text-justify leading-8">
                کاربر عزیز شما می توانید جهت انجام مشاوره تخصصی ، افراد مد نظر
                خود را که در این فرم با کد شناسه مشخص شده اند را انتخاب نمایید.
                بعد از انتخاب حداکثر 5 نفر از لیست مبلغ 1111 ریال را به شماره
                کارت 1111 بنام آقای ..... جهت انجام مشاوره و شروع فرایند واریز
                نمایید و کد پیگیری را ارسال نمایید و منتظر پیامک تایید باشید.بعد
                از تایید پیامک کارشناسان ما با شما تماس خواهند گرفت.
            </p>

            <div className="relative overflow-hidden shadow-md rounded-lg overflow-x-scroll ">
                <table className="w-full text-xs text-right text-gray-500">
                    <thead className=" bg-amber-200">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="items-center hidden">
                                    <TextInput
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded
                                     focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800
                                      dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
                                      dark:border-gray-600"
                                    />
                                    <label
                                        for="checkbox-all-search"
                                        class="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" class="px-6  py-3">
                                                <div className="w-20">شناسه</div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                            <div className="w-20">جنسیت</div>
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                        <div className="w-20">شهر مبداء</div>
                        </th>
                        <th scope="col" class="px-6 py-3 ">
                        <div className="w-20">سازمان مبداء</div>
                        </th>
                        <th scope="col" class="px-6 py-3 ">
                            <div className="w-20">شهر مقصد</div>
                        </th>
                        <th scope="col" class="px-6 py-3 ">
                            <div className="w-20">سازمان مقاصد</div>
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                            <div className="w-20">سایر مقاصد</div>
                        </th>
                        <th scope="col" class="px-6  py-3">
                        <div className="w-20">مدرک تحصیلی</div>
                        </th>
                        <th scope="col" class="px-6  py-3">
                        <div className="w-20">سابقه کار</div>
                        </th>
                        <th scope="col" class="px-6  py-3">
                        <div className="w-20">پست سازمانی</div>
                        </th>
                        <th scope="col" class="px-6  py-3">
                        <div className="w-20">نوع استخدام</div>
                        </th>
                        <th scope="col" class="px-6  py-3">
                        <div className="w-20">تخصص شغلی</div>
                        </th>
                        <th scope="col" class="px-6  py-3">
                        <div className="w-20">تجارب شغلی</div>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr class="bg-white border-b ">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <TextInput
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            checked={values.checkedItems.includes(
                                                item.id
                                            )}
                                            onChange={() =>
                                                handleCheckboxChange(item)
                                            }
                                        />
                                        <label
                                            for="checkbox-table-search-1"
                                            className="sr-only"
                                        >
                                            checkbox
                                        </label>
                                    </div>
                                </td>

                                <td className="px-6 py-3">{item.id}</td>

                                <td className="px-6 py-3">{item.gender}</td>

                                <td className="px-6 py-3">
                                    {item.city}
                                </td>
                                <td className="px-6 py-3">
                                    {item.origin}
                                </td>
                                <td className="px-6 py-3">
                                    {item.destination_city}
                                </td>
                                <td className="px-6 py-3">
                                    {item.main_destination}
                                </td>

                                <td className="px-6 py-3">
                                    {item.other_destinations}
                                </td>

                                <td className="px-6 py-3">
                                    {item.degree_of_education}
                                </td>
                                <td className="px-6 py-3">
                                    {item.work_experience}
                                </td>
                                <td className="px-6 py-3">
                                    {item.organizational_position}
                                </td>
                                <td className="px-6 py-3">
                                    {item.type_of_employment}
                                </td>
                                <td className="px-6 py-3">
                                    {item.job_specialization}
                                </td>
                                <td className="px-6 py-3">
                                    {item.job_experiences}
                                </td>
                                
                            </tr>
                        ))}

                        {/* <td class="px-6 py-4">Silver</td>
                        <td class="px-6 py-4">Laptop</td>
                        <td class="px-6 py-4">$2999</td> */}
                    </tbody>
                </table>
            </div>
            <div
                className="bg-cyan-950 py-2 px-5
             flex flex-row-reverse  text-sm text-left rounded-b-lg"
            >
                {/* ... */}

                <ReactPaginate
                    previousLabel={"قبلی"}
                    previousClassName={
                        "text-white uppercase tracking-wider hover:text-amber-200   transition  ease-in-out duration-150"
                    }
                    nextLabel={"بعدی"}
                    nextClassName={
                        "text-white uppercase tracking-wider hover:text-amber-200   transition  ease-in-out duration-150"
                    }
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    pageClassName="hidden"
                    pageLinkClassName="hidden"
                    // containerClassName={"pagination"}
                    // activeClassName={"active"}
                    className=" basis-1/2  flex flex-row justify-start gap-4 font-vazir text-right
                    
                    items-center px-4 py-2border
               
                 border-transparent 
                rounded-md font-semibold  "
                />
                <div
                    className="basis-1/2
                items-center px-4 py-2border
               
                border-transparent 
               rounded-md font-semibold  text-white uppercase 
               tracking-wider  
                focus:outline-none focus:ring-2 focus:ring-indigo-500 
                focus:ring-offset-2 transition 
                ease-in-out duration-150"
                >
                    صفحه {currentPage + 1} از {pageCount}
                </div>
            </div>
            <div className="flex flex-row text-right items-center mt-5 gap-6">
            <InputLabel
                        htmlFor="secondPayment"
                        className="text-sm pr-1 lg:text-base text-blue-950 basis-3/4
                         text-justify"
                        value={`برای مشاهده و تکمیل فرم درخواست، مبلغ ${
                            values.price * 10000
                        } تومان را پرداخت، و کد پیگیری را در کادر زیر وارد نمایید`}
                    />
                <p className="basis-1/4 bg-emerald-400 px-1 py-1 md:py-2 w-fit 
                 text-white shadow 
                rounded-md  text-xs">
                    {`مبلغ پرداخت : ${values.price * 10000} `}
                </p>
            </div>
            <div className=" mt-2  flex flex-row max-w-md gap-2 items-center">
                <div className=" ">
                    <PrimaryButton className="w-f mt-2  sm:text-sm  text-[11px]">
                        تایید و ارسال
                    </PrimaryButton>
                </div>

                <div className="basis-4/6 text-left max-w-[50%]">
                
                    <TextInput
                        id="secondPayment"
                        type="text"
                        name="secondPayment"
                        required
                        value={values.secondPayment}
                        className="  text-sm mt-0 w-full
                             text-gray-900 border border-red-500
                             rounded-lg bg-gray-50 focus:ring-blue-500
                              focus:border-blue-500 dark:bg-gray-700 
                              dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-blue-500
                                dark:focus:border-blue-500"
                        onChange={(e) =>
                            setValues((prevValues) => ({
                                ...prevValues,
                                secondPayment: e.target.value,
                            }))
                        }
                    />
                </div>
                {/* <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-1"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">ذخیره شد</p>
                </Transition> */}
            </div>
        </form>
    );
};

export default ShowReForms;
