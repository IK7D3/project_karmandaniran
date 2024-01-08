import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status , message}) {
    const { data, setData, post, processing, errors } = useForm({
        phone_number: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.phone_number'));
    };

    return (
        <GuestLayout>
            <Head title="فراموشی رمز عبور" />
            {message && <div class="bg-red-100 border border-red-400 text-red-700 
            px-4 py-1 rounded relative mb-4" role="alert">
            <span class="block sm:inline">{message}</span>

</div>}
            
            <div className="mb-4 text-sm text-gray-600 max-w-md mx-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            
            <form onSubmit={submit} className="max-w-md mx-auto flex flex-col lg:flex-row gap-2">
                <TextInput
                    id="phone_number"
                    type="phone_number"
                    name="phone_number"
                    value={data.phone_number}
                    className="mt-1 max-w-xs basis-1/2  border border-sky-400 "
                    isFocused={true}
                    onChange={(e) => setData('phone_number', e.target.value)}
                />
                <InputError message={errors.phone_number} className="mt-2" />

                <div className="flex items-center justify-start mt-2">
                    <PrimaryButton className="text-sm " disabled={processing}>
                        ارسال رمزعبور یکبار مصرف
                    </PrimaryButton>
                </div>
            </form>
            
        </GuestLayout>
    );
}
