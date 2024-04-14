import { cn } from "@/lib/utils/mergeCss/mergeCss";

function ({ children, className }) {
  return (
    <p className={cn("text-inherit", className)}>
      {children}
    </p>
  )
}

export { };
