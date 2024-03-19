"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { Input } from "common/widgets/basic/input";
import { Flex } from "common/widgets/advance/flex";
import Image from "next/image";
import { imgs } from "data/static/imgData";
import { Img } from "common/media/img";
import { Icon } from "common/media/icon";
import { Menu } from "common/widgets/advance/menu";
import { dashboardNavMenuData } from "data/static/selectData";
import { http } from "utils/http";
import { API } from "utils/api";
import { useRouter } from "next/navigation";
import { useAuth } from "context/AuthContext";
import { toast } from "react-toastify";
import { Toastify } from "common/loaders/toastify";
import { Backdrop } from "common/widgets/advance/backdrop";
import { Loader } from "common/loaders/loader";
import { Text } from "common/widgets/basic/text";
import Link from "next/link";
const { logo, avatar } = imgs;

export function DashboardNavbar() {
  const router = useRouter();
  const { currentUser, getCurrentUser } = useAuth();
  const imgRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoutUser = async (id: number) => {
    if (id === 2) {
      const { res } = await http.post(API.auth.logout, {});
      if (res.status === 200) {
        localStorage.removeItem("user");
        router.push("/login");
      }
    }
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setIsLoading(true);
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    const { res, data: fileData } = await http.post(API.aws.upload, formData);
    if (res.status === 201) {
      const { res, data } = await http.patch(
        API.auth.profile.updatePic,
        {
          profileUrl: fileData?.file_url,
          userId: currentUser?._id,
        },
        {
          token: currentUser?.token,
        }
      );
      if (res.status === 200) {
        const user = JSON.stringify(data);
        localStorage.setItem("user", user);
        toast.success("Profile Updated Successfully!");
        getCurrentUser(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error(data?.message);
      }
    }
  };

  const onClickProfilePic = () => {
    if (imgRef?.current) {
      (imgRef.current as HTMLInputElement).click();
    }
  };

  return (
    <>
      {isLoading && (
        <Backdrop>
          <div>
            <Text
              size="xl"
              as="p"
              className="text-center"
              text="Please wait while the profile picture is uploading!"
            />
            <Loader loading={isLoading} type="ClimbingBoxLoader" />
          </div>
        </Backdrop>
      )}
      <Flex
        variant="rowBetweenCenter"
        className="w-full flex-wrap justify-center sm:justify-between sm:flex-nowrap mt-5 sm:mt-0"
      >
        <Link href="/dashboard">
          <Image src={logo} alt="logo" />
        </Link>
        <Flex
          variant="rowStartCenter"
          className="shadow-grey-xs pl-5 py-2 pr-1 rounded-full"
        >
          <Input
            variant="rounded-light-grey"
            icon="Search"
            size="xs"
            className="h-10 w-20 sm:w-32"
          />
          <Icon icon="Notification" size="xs" />
          <Icon icon="Info" size="xs" />
          <Img
            img={currentUser?.profileUrl || avatar}
            variant="circle"
            size="md"
            className="min-w-4 min-h-4"
            onClick={onClickProfilePic}
          />
          <input
            type="file"
            style={{ display: "none" }}
            ref={imgRef}
            onChange={(e) => onChangeFile(e)}
            accept="image/*"
          />
          <Menu
            title={currentUser?.firstName || "Loading..."}
            data={dashboardNavMenuData}
            onClickMenu={handleLogoutUser}
          />
          <Toastify />
        </Flex>
      </Flex>
    </>
  );
}
