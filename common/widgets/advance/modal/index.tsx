"use client";

import React, { ReactNode, useState, useEffect } from "react";
import { Flex } from "../flex";
import { Icon } from "common/media/icon";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "utils/helpers/cn";
import { useHashHook } from "utils/hooks/useHashHook";
import { usePathname } from "next/navigation";
import { Icons } from "types/common";
import { useRouter } from "next/navigation";

interface ModalProps extends VariantProps<typeof modalVariants> {
  className?: string;
  children?: ReactNode;
  variant?: "standard";
  name: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: Icons;
}

export function Modal({
  children,
  className,
  variant,
  name,
  size,
  icon,
}: ModalProps) {
  const [open, setOpen] = useState<boolean>(false);
  const hash = useHashHook();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.push(pathname);
  }, [pathname, router]);

  useEffect(() => {
    if (hash === name) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [hash, name]);

  if (open) {
    return (
      <div className="relative overflow-y-scroll overflow-x-hidden after:fixed after:overflow-hidden after:z-[9] after:inset-0 after:bg-backdrop">
        <div className={cn(modalVariants({ variant, size, className }))}>
          <div className="z-[2] relative max-h-screen overflow-y-auto p-4">
            {icon && (
              <Flex variant="rowEndCenter">
                <Icon
                  icon={icon && icon}
                  size="xs"
                  link={pathname}
                  onClick={() => console.log("clicked")}
                />
              </Flex>
            )}
            <div className="mt-2 mb-4"> {children}</div>
          </div>
        </div>
      </div>
    );
  } else return null;
}

const modalVariants = cva("", {
  variants: {
    variant: {
      standard:
        "fixed w-[50rem]  z-[99] block overflow-y-auto overflow-x-hidden -translate-y-1/4 bg-soft-peach shadow-grey mt-4 mb-auto mx-auto rounded-lg top-1/4 inset-x-0",
    },
    size: {
      xs: "w-[95%] md:w-[20rem]",
      sm: "w-[95%] md:w-[30rem]",
      md: "w-[95%] md:w-[40rem]",
      lg: "w-[95%] md:w-[80%] lg:w-[50rem]",
      xl: "w-[95%] md:w-[80%] lg:w-[60rem]",
    },
  },
  defaultVariants: {
    variant: "standard",
    size: "md",
  },
});
