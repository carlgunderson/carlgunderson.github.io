import { CSSProperties, type FC, type PropsWithChildren } from 'react'

interface TextProps extends PropsWithChildren {
	// extend all possible text css props
	align?: 'left' | 'center' | 'right'
	fontWeight?: number
	gutterBottom?: boolean
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	css?: CSSProperties
	style?: CSSProperties
	className?: string
	
}

const Text: FC<TextProps> = ({ children, ...props }) => {
	return (
		<p
			{...props}
		>
			{children}
		</p>
	)
}

export default Text
