import * as React from "react";

import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level = 2, className, ...props },
  ref,
) {
  const headingClassName = cn("font-semibold tracking-wide", className);

  switch (level) {
    case 1:
      return React.createElement("h1", { ref, className: headingClassName, ...props });
    case 2:
      return React.createElement("h2", { ref, className: headingClassName, ...props });
    case 3:
      return React.createElement("h3", { ref, className: headingClassName, ...props });
    case 4:
      return React.createElement("h4", { ref, className: headingClassName, ...props });
    case 5:
      return React.createElement("h5", { ref, className: headingClassName, ...props });
    case 6:
      return React.createElement("h6", { ref, className: headingClassName, ...props });
    default:
      return React.createElement("h2", { ref, className: headingClassName, ...props });
  }
});
