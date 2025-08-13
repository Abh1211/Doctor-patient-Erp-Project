import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    50:  '#f5f9ff',
                    100: '#e6f3ff',
                    200: '#bfe0ff',
                    300: '#8fc7ff',
                    400: '#4d9bff',
                    500: '#2563eb',
                    600: '#1e4bd1',
                    700: '#1739a3',
                    800: '#112a7a',
                    900: '#0b1c52',
                },
                brand: '#10b981', // example single color
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
