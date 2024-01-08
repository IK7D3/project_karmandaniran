import { Head } from "@inertiajs/react";
import React from "react";
import { AdminDashboardLayout } from "../Layouts/AdminDashboardLayout";
import FormVerification1 from "./Partials/FormVerification1";
import FormVerification2 from "./Partials/FormVerification2";

const ThirdVerification = ({ auth, data }) => {
    console.log(data);
    return (
        <AdminDashboardLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-right text-xl text-gray-800 leading-tight">
                    لیست درخواست های نهایی
                </h2>
            }
        >
            <Head title="درخواست های نهایی" />

            <div className="pt-5">
                <div className="max-w-7xl mx-auto  space-y-6">
                    <div className=" bg-white shadow sm:rounded-lg">
                        <div className="">
                            <div className="max-w-7xl mx-auto  space-y-6">
                                <div className="p-4 sm:p-8   ">
                                <h1 className="mb-1 bg-red-500 p-1 text-center text-white shadow sm:rounded-lg font-semibold text-sm">
                                        لیست افراد در انتظار تایید 
                                    </h1>
                                    <FormVerification1
                                        data={data}
                                    ></FormVerification1>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="max-w-7xl mx-auto  space-y-6">
                                <div className="p-4 sm:p-8   ">
                                    <h1 className="mb-1 bg-green-500 p-1 text-center text-white shadow sm:rounded-lg font-semibold text-sm">
                                        لیست افراد تایید شده
                                    </h1>

                                    <FormVerification2
                                        data={data}
                                    ></FormVerification2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default ThirdVerification;
