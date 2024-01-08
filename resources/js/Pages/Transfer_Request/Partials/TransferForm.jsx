import React, { useEffect, useState } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import InputError from "@/Components/InputError";
import { Combobox } from "@headlessui/react";
const TransferForm = ({ auth, cities }) => {
    const [selectedCity, setSelectedCity] = useState(cities[0].title);
    const [selectedDestinationCity, setSelectedDestinationCity] = useState(cities[0].title);
        
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: auth.user.name,
            last_name: auth.user.last_name,
            national_code: auth.user.national_code,
            phone_number: auth.user.phone_number,
            degree_of_education: "",
            work_experience: "",
            type_of_employment: "",
            organizational_position: "",
            user_number: "",
            job_specialization: "",
            job_experiences: "",
            city: selectedCity,
            destination_city: selectedDestinationCity,
            origin: "",
            main_destination: "",
            other_destinations: "",
        });

    useEffect(() => {
        setData("city", selectedCity);
    }, [selectedCity]);
    
    useEffect(() => {
        setData("destination_city", selectedDestinationCity);
    }, [selectedDestinationCity]);
    

    const submit = (e) => {
        e.preventDefault();
      
        const confirmed = window.confirm("آیا از اطلاعات خود مطمئن هستید؟");
        
        if (confirmed) {
          post(route("transfer_request.store"));
        }
      };
    // console.log(auth.user.gstarter);

    const [query, setQuery] = useState("");

    const filteredPeople =
        query === ""
            ? cities
            : cities.filter((person) => {
                  return person.title.includes(query);
              });

    return (
        <form
            onSubmit={submit}
            className="flex text-right flex-col p-5 max-w-4xl mx-auto"
        >
            <div className="flex flex-col ">
                <div className="sm:flex sm:flex-row">
                    {/* نام */}
                    <div className="sm:basis-1/2 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="name"
                            value="نام"
                            className="text-sm"
                        />

                        <TextInput
                            id="name"
                            type=""
                            readOnly
                            name="name"
                            value={auth.user.name}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                        />
                    </div>

                    {/* نام خانوادگی */}
                    <div className="sm:basis-1/2 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="last_name"
                            value="نام خانوادگی"
                            className="text-sm"
                        />

                        <TextInput
                            id="last_name"
                            type=""
                            readOnly
                            name="last_name"
                            value={auth.user.last_name}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                        />
                    </div>

                    {/* <div className="sm:flex sm:flex-row-reverse"> */}
                    {/* کد ملی */}
                    <div className="sm:basis-1/2 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="national_code"
                            value="کد ملی"
                            className="text-sm"
                        />

                        <TextInput
                            id="national_code"
                            type=""
                            readOnly
                            name="national_code"
                            value={auth.user.national_code}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                        />
                    </div>

                    {/* شماره تماس */}
                    <div className="sm:basis-1/2 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="phone_number"
                            value="شماره تماس"
                            className="text-sm"
                        />

                        <TextInput
                            id="phone_number"
                            type=""
                            readOnly
                            name="phone_number"
                            value={auth.user.phone_number}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                        />
                    </div>
                    {/* </div> */}
                </div>

                <div className="sm:flex sm:flex-row">
                    {/* مدرک تحصیلی */}
                    <div className="sm:basis-1/4 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="degree_of_education"
                            value="مدرک تحصیلی"
                            className="text-sm"
                        />

                        <TextInput
                            id="degree_of_education"
                            type="text"
                            name="degree_of_education"
                            value={auth.user.degree_of_education}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("degree_of_education", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.degree_of_education}
                            className="mt-2 mr-2"
                        />
                    </div>

                    {/* میزان سابقه کار */}
                    <div className="sm:basis-1/4 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="work_experience"
                            value="میزان سابقه کار"
                            className="text-sm"
                        />

                        <TextInput
                            id="work_experience"
                            type="text"
                            name="work_experience"
                            value={auth.user.work_experience}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("work_experience", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.work_experience}
                            className="mt-2 mr-2"
                        />
                    </div>

                    {/* نوع استخدام */}
                    <div className="sm:basis-1/4 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="type_of_employment"
                            value="نوع استخدام"
                            className="text-sm"
                        />

                        <TextInput
                            id="type_of_employment"
                            type="text"
                            name="type_of_employment"
                            value={auth.user.type_of_employment}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("type_of_employment", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.type_of_employment}
                            className="mt-2 mr-2"
                        />
                    </div>

                    {/* پست سازمانی */}
                    <div className="sm:basis-1/4 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="organizational_position"
                            value="پست سازمانی"
                            className="text-sm"
                        />

                        <TextInput
                            id="organizational_position"
                            type="text"
                            name="organizational_position"
                            value={auth.user.organizational_position}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData(
                                    "organizational_position",
                                    e.target.value
                                )
                            }
                        />
                        <InputError
                            message={errors.organizational_position}
                            className="mt-2 mr-2"
                        />
                    </div>
                </div>

                

                <div className="sm:flex sm:flex-row">
                    {/* شهر مبداء */}
                    <div
                        className="basis-1/4 text-right flex flex-col 
                    items-start mx-2 mt-5 text-xs relative"
                    >
                        <InputLabel
                            htmlFor="origin"
                            value="شهر مبداء"
                            className="text-sm"
                        />

                        <Combobox
                            value={selectedCity}
                            onChange={setSelectedCity}
                        >
                            <Combobox.Input
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                className="w-full px-5 text-right text-xs mt-2
        text-gray-900 border border-teal-500 
        rounded-lg bg-gray-50 focus:ring-blue-500
         focus:border-blue-500 dark:bg-gray-700 
         dark:border-gray-600 dark:placeholder-gray-400
          dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500 "
                            />
                            <Combobox.Options className="absolute top-[95%] rounded-lg bg-white p-2  mt-1 w-full max-h-56 overflow-scroll ">
                                {filteredPeople.map((person) => (
                                    <Combobox.Option
                                        className="py-2 border-b-2 cursor-pointer"
                                        key={person.id}
                                        value={person.title}
                                    >
                                        {person.title}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Combobox>
                        <InputError
                            message={errors.city}
                            className="mt-2 mr-2"
                        />
                    </div>

                    {/* مبدا */}
                    <div
                        className="basis-2/4 text-right flex flex-col 
                    items-start mx-2 mt-5 text-xs"
                    >
                        <InputLabel
                            htmlFor="origin"
                            value="مبداء : نام سازمان / اداره / دانشگاه"
                            className="text-sm"
                        />

                        <TextInput
                            id="origin"
                            type="text"
                            name="origin"
                            value={data.origin}
                            require
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) => setData("origin", e.target.value)}
                        />
                        <InputError
                            message={errors.origin}
                            className="mt-2 mr-2"
                        />
                    </div>

                    {/*شهر مقصد*/}
                    <div className="relative basis-1/4 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="main_destination"
                            value="شهر مقصد"
                            className="text-sm"
                        />

                        <Combobox
                            value={selectedDestinationCity}
                            onChange={setSelectedDestinationCity}
                        >
                            <Combobox.Input
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                className="w-full px-5 text-right text-xs mt-2
                            text-gray-900 border border-teal-500 
                            rounded-lg bg-gray-50 focus:ring-blue-500
                            focus:border-blue-500 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500 "
                            />
                            <Combobox.Options className="absolute top-[95%] rounded-lg bg-white p-2  mt-1 w-full max-h-56 overflow-scroll ">
                                {filteredPeople.map((person) => (
                                    <Combobox.Option
                                        className="py-2 border-b-2 cursor-pointer"
                                        key={person.id}
                                        value={person.title}
                                    >
                                        {person.title}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Combobox>

                        <InputError
                            message={errors.main_destination}
                            className="mt-2 mr-2"
                        />
                    </div>
                </div>

                <div className="sm:flex sm:flex-row">
                    {/* مقصد اصلی */}
                    <div className="basis-1/2 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="main_destination"
                            value="مقصد اصلی : نام سازمان / اداره / دانشگاه"
                            className="text-sm"
                        />

                        <TextInput
                            id="main_destination"
                            type="text"
                            name="main_destination"
                            value={auth.user.main_destination}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500  
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("main_destination", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.main_destination}
                            className="mt-2 mr-2"
                        />
                    </div>

                    {/* سایر مقاصد */}
                    <div className="basis-3/5  text-right flex flex-col items-start mx-2 mt-5 text-xs col-span-2">
                        <InputLabel
                            htmlFor="other_destinations"
                            value="مقاصد دیگر را به ترتیب اولویت پشت سر هم وارد نمایید"
                            className="text-sm"
                        />

                        <TextInput
                            id="other_destinations"
                            type="text"
                            placeholder="... مثال: دانشگاه تهران، اداراه آب تهران"
                            name="other_destinations"
                            value={auth.user.other_destinations}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("other_destinations", e.target.value)
                            }
                        />
                    </div>
                </div>
                {/* <div className=" text-right flex-col mx-10">
                    <InputLabel
                        htmlFor="origin_University_Search"
                        value="دانشگاه مبداء را جستجو کنید"
                    />
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <TextInput
                            id="origin_University_Search"
                            type="search"
                            name="origin_University_Search"
                            value={data.originUniversity}
                            className="block w-full p-4 pl-10 text-sm
                                     text-gray-900 border border-gray-300 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            placeholder=" ... دانشگاه تهران"
                            onChange={(e) =>
                                setData("originUniversity", e.target.value)
                            }
                            required
                        />
                    </div>
                </div>
                <div className=" text-right flex-col mx-10">
                    <InputLabel
                        htmlFor="origin_University_Search"
                        value="دانشگاه مبداء را جستجو کنید"
                    />
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <TextInput
                            id="origin_University_Search"
                            type="search"
                            name="origin_University_Search"
                            value={data.originUniversity}
                            className="block w-full p-4 pl-10 text-sm
                                     text-gray-900 border border-gray-300 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            placeholder=" ... دانشگاه تهران"
                            onChange={(e) =>
                                setData("originUniversity", e.target.value)
                            }
                            required
                        />
                    </div>
                </div> */}

                <div className="sm:flex sm:flex-row">
                    {/* شماره مستخدم */}
                    <div className="sm:basis-1/4 text-right flex flex-col
                     items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="user_number"
                            value="شماره مستخدم"
                            className="text-sm"
                        />

                        <TextInput
                            id="user_number"
                            type="text"
                            placeholder="اختیاری"
                            name="user_number"
                            value={auth.user.user_number}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500  
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("user_number", e.target.value)
                            }
                        />
                    </div>

                    {/* تخصص شغلی */}
                    <div className="sm:basis-1/4 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="job_specialization"
                            value="تخصص شغلی"
                            className="text-sm"
                        />

                        <TextInput
                            id="job_specialization"
                            type="text"
                            placeholder="اختیاری"
                            name="job_specialization"
                            value={auth.user.job_specialization}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("job_specialization", e.target.value)
                            }
                        />
                    </div>

                    {/* تجارب شغلی */}
                    <div className="sm:basis-1/4 text-right flex flex-col items-start mx-2 mt-5 text-xs">
                        <InputLabel
                            htmlFor="job_experiences"
                            value="تجارب شغلی"
                            className="text-sm"
                        />

                        <TextInput
                            id="job_experiences"
                            type="text"
                            placeholder="اختیاری"
                            name="job_experiences"
                            value={auth.user.job_experiences}
                            className="block w-full p-2 pl-10 text-xs
                                     text-gray-900 border border-teal-500 
                                     rounded-lg bg-gray-50 focus:ring-blue-500
                                      focus:border-blue-500 dark:bg-gray-700 
                                      dark:border-gray-600 dark:placeholder-gray-400
                                       dark:text-white dark:focus:ring-blue-500
                                        dark:focus:border-blue-500"
                            onChange={(e) =>
                                setData("job_experiences", e.target.value)
                            }
                        />
                    </div>

                    <div className="sm:basis-1/4 mx-2 mt-10 text-left flex items-center gap-4">
                <PrimaryButton disabled={processing} className="w-full text-sm">
                    ثبت درخواست
                </PrimaryButton>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-1"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">ذخیره شد</p>
                </Transition>
            </div>
                </div>
            </div>

            
        </form>
    );
};

export default TransferForm;
