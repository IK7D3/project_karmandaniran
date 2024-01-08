import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="ورود" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="max-w-md mx-auto">
            {/* {`@csrf`} */}
                <div>
                    <InputLabel htmlFor="national_code" value="کد ملی" />

                    <TextInput
                        id="national_code"
                        type="text"
                        name="national_code"
                        value={data.national_code}
                        className="mt-1 block w-full "
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) =>
                            setData("national_code", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.national_code}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 ">
                    <InputLabel htmlFor="password" value="رمز عبور" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full "
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className=" mt-6 flex flex-col gap-2 mr-2 items-start">
                    <label className="flex-initial items-start">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className=" mr-2 text-base text-sky-700">
                            مرا به خاطر بسپار
                        </span>
                    </label>

                    
                </div>
                <div className="flex flex-col mt-6 gap-2">
                    <PrimaryButton  disabled={processing}>
                        ورود
                    </PrimaryButton>
                    <div className="mx-auto mt-2 ">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className=" underline text-base text-sky-700 hover:text-sky-900 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-sky-500 "
                            >
                                رمز عبور خود را فراموش کرده اید؟
                            </Link>
                        )}
                    </div>
                    <span className="text-center text-lg mt-8 text-sky-900">
                        آیا حساب کاربری ندارید؟
                    </span>


                    <Link
                        href={route("register")} // آدرس مسیر ثبت نام
                        className="items-center text-center px-4 py-2
                         bg-sky-800 border border-transparent 
                        rounded-md font-semibold text-base 
                        text-white uppercase 
                        tracking-wider hover:bg-sky-950 
                        focus:bg-sky-700 
                        active:bg-sky-900
                         focus:outline-none focus:ring-2 
                         focus:ring-sky-500
                          focus:ring-offset-2 
                         transition ease-in-out
                          
                            "
                    >
                        ثبت نام
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
