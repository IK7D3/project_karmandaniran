import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import ReactPaginate from "react-paginate";
import InputLabel from "@/Components/InputLabel";

const FormVerification1 = ({ data }) => {
    const [showOnlyInitialRequests, setShowOnlyInitialRequests] =
        useState(false);
   
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const filteredData =  data.filter(item => item.third_request == 1);
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleCheckboxChange = () => {
        setShowOnlyInitialRequests(!showOnlyInitialRequests);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredData.slice(offset, offset + itemsPerPage);



    
    // const submit = (e) => {
    //     e.preventDefault();
    
    //     post(route("transfer_request.store"));
    // };
    

    // console.log(currentItems);
    
    return (
        <div class="relative overflow-hidden shadow-md sm:rounded-lg ">
            <div className="relative overflow-hidden shadow-md rounded-lg overflow-x-scroll ">

            <table class="w-full text-xs text-right text-gray-500 ">
                <thead class=" bg-amber-200">
                    <tr>
                    <th scope="col" class="px-6  py-3">
                            
                            <div className="w-20">شناسه</div>

                        </th>
                        <th scope="col" class="px-6  py-3">
                            
                            <div className="w-20">نام</div>

                        </th>
                        <th scope="col" class="px-6  py-3">
                            <div className="w-20">نام خانوادگی</div>
                        </th>
                        <th scope="col" class="px-6  py-3 ">
                            <div className="w-20">کد ملی</div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <div className="w-20">جنسیت</div>
                            </th>
                        <th scope="col" class="px-6 py-3 ">
                        <div className="w-20">شماره تماس</div>
                        </th>
                        <th scope="col" class=" px-6 py-3 ">
                        <div className="w-24">کد پیگیری پرداخت</div>
                        </th>
                        <th scope="col" class="px-6 py-3">
                        <div className="w-20">تعیین وضعیت</div>
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
                        {/* <th scope="col" class="p-4">
                            <div class="flex items-center">
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
                        </th> */}
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {currentItems.map((item) => (
                        <tr class="bg-white border-b ">
                           
                           <td className="px-6 pr-8  py-3">
                                    {item.id}
                                </td>
                            <td className="px-6 py-3">
                                    {item.form.user.name}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.user.last_name}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.user.national_code}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.user.gender}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.user.phone_number}
                                </td>
                                <td className="px-6 py-3">
                                    {item.third_payment_code}
                                </td>
                                <td class="px-6 py-5 font-semibold">
                                <Link 
                                    className="text-green-500 "
                                    href={route("admin.code_third_step_third_verification", { item,  status: item.third_request})}
                                    method="post"
                                >
                                    {item.third_request == 2 ? "تایید" : <span className="text-red-600">عدم تایید</span>}
                                </Link>
                            </td>
                                <td className="px-6 py-3">
                                    {item.form.city}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.origin}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.destination_city}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.main_destination}
                                </td>
                                
                            <td className="px-6 py-3">
                                    {item.form.other_destinations}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.degree_of_education}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.work_experience}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.organizational_position}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.type_of_employment}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.job_specialization}
                                </td>
                                <td className="px-6 py-3">
                                    {item.form.job_experiences}
                                </td>
                        </tr>
                    ))}
    
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
        </div>
    );
    };
    
    export default FormVerification1;