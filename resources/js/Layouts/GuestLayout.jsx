import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="font-vazir text-right min-h-screen flex flex-col w-full  md:justify-center items-center py-6 sm:pt-0 
        bg-gradient-to-r bg-sky-950 ">
          {/*   <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}

            <div className="mt-2 md:mt-0 flex flex-col-reverse  w-11/12 md:flex-row md:max-w-6xl  bg-white shadow-md overflow-hidden rounded-xl">
                <div className="font-vazir md:basis-1/2 bg-white px-10 py-10 self-center  md:relative top-2/4 rounded-xl">
                    {children}
                </div>
                <div className="  md:basis-1/2 flex flex-col  px-5  py-16 text-right md:justify-center
                bg-gradient-to-tr from-sky-900  to-sky-600 text-white">
                    <h1 className=" text-xl pr-5 font-normal mb-6">
                    کاربر گرامی دقت فرمایید
                    </h1>
                    <ul class="max-w-lg text-justify space-y-1  list-disc list-inside
                     dark:text-gray-400 font-light   text-lg
                      px-8   md:mb-0 w-full text-sky-50">
    <li className="w-full text-sky-50">
    	کد ملی شما به عنوان نام کاربری در این سامانه تعریف شده است.
    </li>
    <li className="w-full text-sky-50">
برای احراز هویت شما یک کد تایید بعد از این مرحله ، به شماره همراه  ثبت شده شما ارسال خواهد شد.
    </li>
    <li className="w-full text-sky-50">
    در این سیستم، کاربر در صورت فراموشی رمز عبور  شماره موبایل خود را وارد می‌کند و در ادامه یک کد تأیید به شماره موبایل ارسال می‌شود. سپس کاربر باید این کد را وارد کرده و تأیید هویت خود را انجام دهد.
    </li>
</ul>
                    
                </div>
            </div>
        </div>
    );
}
