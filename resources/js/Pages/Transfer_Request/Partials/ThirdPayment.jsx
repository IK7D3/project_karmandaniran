import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "@/Components/InputError";

const ThirdPayment = ({ auth }) => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            thirdPayment: "",
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("final_transfer_request.pre_store"));
    };
    return (
        <form onSubmit={submit} className="flex text-right flex-col p-5">
            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className=" bg-white shadow sm:rounded-lg py-5 ">
                        <div className="mx-10">
                            <div className=" text-right flex-col ">
                                <InputLabel
                                    htmlFor="name"
                                    value="برای نهایی ساختن درخواست خود مبلغ را پرداخت و کد پیگیری را وارد نمایید."
                                    className="text-sm"
                                />

                                <TextInput
                                    id="thirdPayment"
                                    type="text"
                                    name="thirdPayment"
                                    required
                                    value={data.thirdPayment}
                                    className="block w-full p-2 pl-10 text-sm max-w-sm
                             text-gray-900 border border-gray-300 
                             rounded-lg bg-gray-50 focus:ring-blue-500
                              focus:border-blue-500 dark:bg-gray-700 
                              dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-blue-500
                                dark:focus:border-blue-500"
                                    onChange={(e) =>
                                        setData("thirdPayment", e.target.value)
                                    }
                                    
                                />
                            </div>
                       

                        <div className=" mt-2 text-left  flex items-center gap-4">
                            <PrimaryButton
                                disabled={processing}
                                className="w-52 text-sm"
                            >
                                تایید و ارسال
                            </PrimaryButton>
                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-1"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600">
                                    ذخیره شد
                                </p>
                            </Transition>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ThirdPayment;
