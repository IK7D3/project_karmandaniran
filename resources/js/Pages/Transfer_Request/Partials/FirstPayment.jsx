import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "@/Components/InputError";

const FirstPayment = ({ auth }) => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            firstPayment: "",
        });

    const submit = (e) => {
        e.preventDefault();
        const id = auth.user.id;
        post(route("transfer_request.pre_store", { id }));
    };
    
    return (
        <form onSubmit={submit} className="flex text-right flex-col p-5">
            
                            <p className="text-green-500 mb-4">اطلاعات شما با موفقیت ثبت شد.</p>
                            
                                <InputLabel
                                    htmlFor="name"
                                    value="کاربر عزیز درخواست شما ثبت گردید جهت بررسی درخواست شما  و همچنین امکان مشاهده لیست افرادی که متقاضی جابجایی یا انتقال هستند لطفا مبلغ 111 ریال را به شماره کارت   1111 بنام آقای .... واریز و کد رهگیری پرداخت را ارسال فرمایید. "
                                    className="mt-2 text-sm text-justify leading-7"
                                />

                                <div className="flex flex-row gap-4 items-center mt-2 max-w-lg ">
                                    <TextInput
                                        id="firstPayment"
                                        type="text"
                                        name="firstPayment"
                                        value={data.firstPayment}
                                        className="max-h-10  p-1.5 pl-10 text-sm  basis-2/3 max-w-[70%]
                             text-gray-900 border border-sky-500 
                             rounded-lg bg-gray-50 focus:ring-blue-500
                              focus:border-blue-500 dark:bg-gray-700 
                              dark:border-gray-600 dark:placeholder-gray-400
                               dark:text-white dark:focus:ring-blue-500
                                dark:focus:border-blue-500"
                                        onChange={(e) =>
                                            setData(
                                                "firstPayment",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                        <PrimaryButton
                                            disabled={processing}
                                            className="basis-1/3 mt-2 text-sm "
                                        >
                                            ارسال
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
                                
                        
        </form>
    );
};

export default FirstPayment;
