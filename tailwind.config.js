/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'in-and-out': {
                  '0%, 100%': { opacity: 1},
                  '50%': { opacity: 0},
                }
            },
            animation: {
                'in-and-out': 'in-and-out 5s ease-in-out infinite',
                'slow-spin': 'spin 30s linear infinite'
            },
        },
        colors: {
            charcoal: {
                DEFAULT: '#373f47',
                100: '#0b0d0e',
                200: '#16191d',
                300: '#21262b',
                400: '#2c333a',
                500: '#373f47',
                600: '#596673',
                700: '#7d8c9b',
                800: '#a9b3bc',
                900: '#d4d9de',
            },
            dark_moss_green: {
                DEFAULT: '#58641d',
                100: '#111406',
                200: '#23280b',
                300: '#343b11',
                400: '#464f17',
                500: '#58641d',
                600: '#8b9e2e',
                700: '#b6cb4d',
                800: '#cfdd88',
                900: '#e7eec4',
            },
            timberwolf: {
                DEFAULT: '#d3d0cb',
                100: '#2d2a26',
                200: '#59544c',
                300: '#867f72',
                400: '#aca79e',
                500: '#d3d0cb',
                600: '#dbd9d5',
                700: '#e4e3e0',
                800: '#edecea',
                900: '#f6f6f5',
            },
            flame: {
                DEFAULT: '#d36135',
                100: '#2b130a',
                200: '#572613',
                300: '#82391d',
                400: '#ae4d26',
                500: '#d36135',
                600: '#dc825e',
                700: '#e5a187',
                800: '#edc0af',
                900: '#f6e0d7',
            },
            penn_red: {
                DEFAULT: '#95190c',
                100: '#1e0502',
                200: '#3c0a05',
                300: '#5b1007',
                400: '#79150a',
                500: '#95190c',
                600: '#d72511',
                700: '#ef503f',
                800: '#f58a7f',
                900: '#fac5bf',
            },
        },
    },
    plugins: [
        require('tailwindcss-3d'),
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    'animate-delay': (value) => ({
                        animationDelay: value,
                    })
                },
                {
                    values: theme('transitionDelay')
                }
            )
        })
    ],
}
