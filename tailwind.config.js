module.exports = {
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: [
            {
                'cus-light': {
                    'primary': '#10B981',
                    'primary-focus': '#047857',
                    'primary-content': '#ffffff',
                    'secondary': '#F59E0B',
                    'secondary-focus': '#B45309',
                    'secondary-content': '#ffffff',
                    'accent': '#8B5CF6',
                    'accent-focus': '#6D28D9',
                    'accent-content': '#ffffff',
                    'neutral': '#3d4451',
                    'neutral-focus': '#2a2e37',
                    'neutral-content': '#ffffff',
                    'base-100': '#ffffff',
                    'base-200': '#f9fafb',
                    'base-300': '#d1d5db',
                    'base-content': '#1f2937',
                    'info': '#2094f3',
                    'success': '#009485',
                    'warning': '#ff9900',
                    'error': '#ff5724',
                }
            },
            'dark',
            'fores'

        ]
    }
}