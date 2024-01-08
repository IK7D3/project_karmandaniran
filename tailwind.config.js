import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                vazir: "Vazir",
            },
            screens: {
                'screen_size_1': '1100px',
                'screen_size_2': '1150px',
                'screen_size_3': '1200px',
                'screen_size_4': '1400px',
                // => @media (min-width: 640px) { ... }
          
            
              },
        },
    },

    plugins: [forms],
};
