"use client";

import React from "react";
import { Button } from "common/widgets/basic/button";
import { Flex } from "../../flex";
import { ButtonProps } from "types/common";

export interface BtnProps {
  variant?: "rowStartCenter" | "columnStartStart" | "columnStartCenter";
  className?: string;
  data: ButtonProps[];
  onClick?: (id: number) => void;
}

export function Btn({ className, data, onClick, variant }: BtnProps) {
  const onClickBtn = (id: number) => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <Flex variant={variant} className={className}>
      {data?.map(
        ({
          id,
          text,
          link,
          icon,
          position,
          variant,
          classes,
          size,
          title,
          iconWidth,
          iconHeight,
        }: ButtonProps) => (
          <Button
            key={id}
            link={link}
            text={text}
            icon={icon}
            size={size}
            variant={variant}
            className={classes}
            position={position}
            iconWidth={iconWidth}
            iconHeight={iconHeight}
            title={title}
            id={id as string}
            onClick={() => !link && onClickBtn(id as number)}
          />
        )
      )}
    </Flex>
  );
}
