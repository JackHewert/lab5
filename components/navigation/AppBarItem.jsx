import { cn } from '@/lib/utils/mergeCss/mergeCss'

function AppBarItem({ children, className }) {
	return <div className={cn('text-inherit', className)}>{children}</div>
}

export default AppBarItem
