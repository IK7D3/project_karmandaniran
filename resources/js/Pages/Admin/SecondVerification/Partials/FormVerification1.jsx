import React, { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import ReactPaginate from "react-paginate";


const FormVerification1 = ({ data, req }) => {

    const [expandedRows, setExpandedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const itemsPerPage = 5;
    const filteredData = req.filter(
        (item) => item.second_request == 1
    );

   
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    const toggleSubMenu = (rowIndex) => {
        const updatedRows = [...expandedRows];
        updatedRows[rowIndex] = !updatedRows[rowIndex];
        setExpandedRows(updatedRows);
      };

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredData.slice(offset, offset + itemsPerPage);
    return (
        <div class="relative overflow-hidden shadow-md sm:rounded-lg">
            <div className="relative overflow-hidden shadow-md rounded-lg overflow-x-scroll ">

            <table class="w-full text-xs text-right text-gray-500 ">
                <thead class=" bg-amber-200">
                    <tr className="">
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

                    </tr>
                </thead>
                <tbody className="">
                    {currentItems.map((item, rowIndex) => (
                        <>
                    {/* منوی اصلی */}
                            <tr className="bg-teal border-b-2 border-b-gray-100 " >
                                <td
                                className="px-6 py-3 pr-8 cursor-pointer text-teal-600 font-semibold underline"
                                onClick={() => toggleSubMenu(rowIndex)}
                                >
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
                                    {item.second_payment_code}
                                </td>
                                <td className="pr-6 py-5 font-semibold">
                                    <Link
                                        className="text-green-500 "
                                        href={route(
                                            "admin.code_second_step_second_verification",
                                            {
                                                item,
                                                status: item.second_request,
                                            }
                                        )}
                                        method="post"
                                    >
                                        {item.second_request ==
                                        2 ? (
                                            "تایید"
                                        ) : (
                                            <span className="text-red-600">
                                                عدم تایید
                                            </span>
                                        )}
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

                    {/* زیر منو */}
                    {expandedRows[rowIndex] && item.related_data.map((ritem) => (
                                <tr className="bg-teal-50 border-b text-xs ">
                                    
                                    <td className="pr-10">{ritem.id}</td>
                                    <td className="px-6 py-3">{ritem.user.name}</td>
                                    <td className="px-6 py-3">{ritem.user.last_name}</td>
                                    <td className="px-6 py-3"> {ritem.user.national_code}</td>
                                    <td className="px-6 py-3"> {ritem.user.gender}</td>
                                    <td className="px-6 py-3"> {ritem.user.phone_number}</td>
                                    <td className="px-6 py-3"> - </td>
                                    {/* <td className="px-6 py-3"> {ritem.second_payment_code}</td> */}
                                    <td className="px-6 py-3">
                                        -
                                    </td>
                                    <td className="px-6 py-3"> {ritem.city}</td>
                                    <td className="px-6 py-3"> {ritem.origin}</td>
                                    <td className="px-6 py-3"> {ritem.destination_city}</td>
                                    <td className="px-6 py-3"> {ritem.main_destination}</td>
                                    
                                    <td className="px-6 py-3"> {ritem.other_destinations}</td>
                                    <td className="px-6 py-3"> {ritem.degree_of_education}</td>
                                    <td className="px-6 py-3"> {ritem.work_experience}</td>
                                    <td className="px-6 py-3"> {ritem.organizational_position}</td>
                                    <td className="px-6 py-3"> {ritem.type_of_employment}</td>
                                    <td className="px-6 py-3"> {ritem.job_specialization}</td>
                                    <td className="px-6 py-3"> {ritem.job_experiences}</td>
                                </tr>
                            ))}
                        </>
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
