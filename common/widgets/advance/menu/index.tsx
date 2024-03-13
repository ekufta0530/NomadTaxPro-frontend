"use client";

import React, { ReactNode, useState } from "react";
import { Icon } from "common/media/icon";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "utils/helpers/cn";
import { Text } from "common/widgets/basic/text";
import Link from "next/link";
import { MenuTypes } from "types/common";

interface MenuProps extends VariantProps<typeof menuVariants> {
  className?: string;
  children?: ReactNode;
  variant?: "standard";
  size?: "xs";
  title: string;
  data: Array<MenuTypes>;
  onClickMenu?: (id: number) => void;
}

export function Menu({
  className,
  variant,
  size,
  title,
  data,
  onClickMenu,
}: MenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={cn(menuVariants({ variant, size, className }))}>
      <div
        className="flex flex-row justify-between items-center gap-4"
        onClick={handleOpenMenu}
      >
        <Text text={title} as="p" size="md" />
        <Icon icon="ChevronDownBlue" size="xs" />
      </div>
      {open && (
        <div className="shadow-grey border-light-purple bg-white z-[99] absolute min-w-[10rem] p-4 rounded-lg border-[0.1rem] border-solid right-0 top-10">
          <ul
            onClick={() => setOpen(false)}
            className="list-none p-0 hover:cursor-pointer "
          >
            {data?.map(({ id, menu, link }: MenuTypes) => (
              <li
                onClick={() => onClickMenu && onClickMenu(id)}
                key={id}
                className="font-medium py-2 px-4 hover:bg-light-purple hover:text-santa-grey rounded-sm text-sm"
              >
                {link ? (
                  <Link href={link} className="block">
                    {menu}
                  </Link>
                ) : (
                  menu
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const menuVariants = cva("relative flex flex-row justify-start items-center", {
  variants: {
    variant: {
      standard: "",
    },
    size: {
      xs: "",
    },
  },
  defaultVariants: {
    variant: "standard",
    size: "xs",
  },
});
