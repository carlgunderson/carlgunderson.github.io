import react from 'eslint-plugin-react'

export default [
	{
		rules: {
			semi: 'error',
			'prefer-const': 'error'
		}
	},
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		plugins: {
			react,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
		},
	},
]
