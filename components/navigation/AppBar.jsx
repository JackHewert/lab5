import { cn } from '@/lib/utils/mergeCss/mergeCss'

function AppBar({ children, className }) {
	return <nav className={cn('text-inherit', className)}>{children}</nav>
}

export default AppBar
