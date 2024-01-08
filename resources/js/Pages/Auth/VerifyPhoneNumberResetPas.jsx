import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage } from "@inertiajs/react";
import Timer from "@/Components/Timer";
import { useEffect, useState } from "react";

export default function VerifyPhoneNumberResetPas({ status, randomParam }) {
    const { data, setData, post, processing, errors } = useForm({
        verify_phone_number: "",

    });

    const [errorMessage, setErrorMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (data.verify_phone_number == randomParam) {
            setData("token", randomParam);
            post(route('password.reset', { token: randomParam }));
        } else {
            setErrorMessage("مقدار وارد شده صحیح نیست");
        }
    };

    // if (!second_status) {
    //     window.location.reload();
    // }
    const [remainingTime, setRemainingTime] = useState(60);

    useEffect(() => {
        const timer = setTimeout(() => {
          if (remainingTime > 0) {
            setRemainingTime((prevTime) => prevTime - 1);
          }
        }, 1000);
      
        return () => clearTimeout(timer);
      }, [remainingTime]);

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const submitTimerOut = () => {


        post(route("password.request"));
        // post(route("register"));

            // console.log("t");
    };
    return (
        <GuestLayout>
        <div className="px-5 text-center">
            <Head title="ثبت نام" />
            {errorMessage && (
              <div class="bg-red-100 border border-red-400 text-red-700
              px-4 py-1 rounded mb-3" role="alert">
              <span class="">{errorMessage}</span>
            </div>
            
      )}
            <div className="mb-4 font-semibold text-base text-gray-600">
                کد ارسال شده به شماره همراه را در کادر ذیل وارد نمایید
            </div>

            {/* {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )} */}

            <form onSubmit={submit} className="mx-auto flex flex-row-reverse gap-4 items-center text-center justify-center">
               
                    <div className="=">
                        <TextInput
                            id="verify_phone_number"
                            type="number"
                            name="verify_phone_number"
                            value={data.verify_phone_number}
                            className="block w-full text-left text-lg "
                            isFocused={true}
                            required
                            onChange={(e) =>
                                setData("verify_phone_number", e.target.value)
                            }
                        />
                        
      
                    </div>
                
                <div className=" = mt-2">
                    {remainingTime !==0 &&(
                        <PrimaryButton className="w-36" disabled={processing}>
                        تایید
                    </PrimaryButton>
                    )}
                    {remainingTime === 0 && (
                    <PrimaryButton className="w-36" onClick={() => submitTimerOut()}>
                        ارسال مجدد
                    </PrimaryButton>
                )}
                
                </div>
            </form>
            <div className=" basis-2/3">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
            
                </div>
                        <div className="">
                {remainingTime !==0 ?(
                    <p>
                    زمان باقی‌مانده: {minutes} دقیقه و {seconds} ثانیه
                </p>
                ):(
                    <p>.کد ارسالی منقضی شد؛ لطفا دوباره تلاش نمایید</p>
                )}
                
              {/*   {remainingTime === 0 && (
                    <PrimaryButton className="mb-11" onClick={() => submitTimerOut()}>
                        ارسال مجدد
                    </PrimaryButton>
                )} */}
                </div>
            </div>
        </div>
        </GuestLayout>
    );
}
