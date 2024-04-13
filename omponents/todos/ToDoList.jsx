import { cn } from "@/lib/utils/mergeCss";

function ({ children, className }) {
  return (
  <p className={cn("text-inherit", className)}>
    {children}
 </p>
 )
}

export {  };
