import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import VerifyPhoneNumber from "./VerifyPhoneNumber";

export default function Register({ status = true, randomParam = null }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        last_name: "",
        gender: "",
        national_code: "",
        phone_number: "",
        password: "",
        password_confirmation: "",
    });

    const [gender, setGender] = useState("");

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
    
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="ثبت نام" />

            {status ? (
                <form
                    onSubmit={submit}
                    className="grid grid-cols-2 text-right items-baseline gap-4 max-w-xl mx-auto" 
                >
                    <div className=" col-start-1 col-end-2 row-start-1">
                        <InputLabel htmlFor="name" value="نام" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            // required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4 col-start-2 col-end-3 row-start-1">
                        <InputLabel htmlFor="last_name" value="نام خانوادگی" />

                        <TextInput
                            id="last_name"
                            name="last_name"
                            value={data.last_name}
                            className="mt-1 block w-full"
                            autoComplete="last_name"
                            // isFocused={true}
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                            // required
                        />

                        <InputError
                            message={errors.last_name}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="gender"
                            className="block font-medium text-gray-700"
                            value="جنسیت"
                        />
                        <select
                            id="gender"
                            name="gender"
                            value={data.gender}
                            onChange={(e) => setData("gender", e.target.value)}
                            className="mt-1 block w-full rounded-md shadow-sm "
                        >
                            <option value="">انتخاب کنید</option>
                            <option value="مرد">مرد</option>
                            <option value="زن">زن</option>
                        </select>
                        <InputError message={errors.gender} className="mt-2" />

                        {/* {gender === "" && (
                            <p className="text-red-500 text-sm mt-1">
                                لطفاً جنسیت را انتخاب کنید.
                            </p>
                        )} */}
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="national_code" value="کد ملی" />
                        <TextInput
                            id="national_code"
                            type="text"
                            name="national_code"
                            value={data.national_code}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) =>
                                setData("national_code", e.target.value)
                            }
                            // required
                        />

                        <InputError
                            message={errors.national_code}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 col-start-1 col-end-3">
                        <InputLabel htmlFor="phone_number" value="شماره تلفن همراه" />
                        <TextInput
                            id="phone_number"
                            type="text"
                            name="phone_number"
                            value={data.phone_number}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) =>
                                setData("phone_number", e.target.value)
                            }
                            // required
                        />

                        <InputError
                            message={errors.phone_number}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 col-start-1 col-end-2  row-start-4">
                        <InputLabel htmlFor="password" value="رمز عبور" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            // required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 col-start-2 col-end-3 row-start-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="تایید رمز عبور"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            // required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex flex-col mt-5">
                        <PrimaryButton disabled={processing}>
                            ثبت نام
                        </PrimaryButton>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <Link
                            href={route("login")}
                            className="text-base flex-1 text-sky-600
                             hover:text-sky-900 
                              
                               "
                        >
                            حساب کاربری دارید؟ وارد شوید
                        </Link>
                    </div>
                </form>
            ) : (
                <VerifyPhoneNumber randomParam={randomParam}></VerifyPhoneNumber>
            )}
        </GuestLayout>
    );
}
