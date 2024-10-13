"use client";
import React, { use, useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import BookingList from "./_components/BookingList";
import axiosClient from "../../_components/GelobalApi";
import { useQuery } from "react-query";
import Cookies from "js-cookie";
import useAppointmentStore from "../../../hooks/zustand/AppointmentZustand";

function MyBooking() {
  const [userInfo, setUserInfo] = useState([]);
  const { appointments, addAppointment } = useAppointmentStore();

  useEffect(() => {
    const userInf = Cookies.get("tokenLogin");
    if (userInf) {
      const user = JSON.parse(userInf);
      setUserInfo(user);
    }
  }, []);

  const data = appointments?.filter(
    (appointment) => appointment?.email === userInfo.email
  );
  // const { data } = useQuery("bookAppointment", () =>
  //   axiosClient
  //     .get(`/bookAppointment?${userInfo?.email}`)
  //     .then((res) => res.data)
  // );

  // Used To filter User Booking
  const filterUserBooking = (type) => {
    const result = data?.filter((item) =>
      type == "upcoming"
        ? new Date(item.date) >= new Date()
        : new Date(item.date) <= new Date()
    );
    return result;
  };

  return (
    <div className="px-4 sm:px-10  mt-10">
      <h2 className="font-bold text-2xl">My Booking</h2>
      <Tabs defaultValue="upcoming" className="w-full mt-5">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <BookingList
            bookingList={filterUserBooking("upcoming")}
            expired={false}
          />
        </TabsContent>
        <TabsContent value="expired">
          <BookingList
            bookingList={filterUserBooking("expired")}
            expired={true}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
