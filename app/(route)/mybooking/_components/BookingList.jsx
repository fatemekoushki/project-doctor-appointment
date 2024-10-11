import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment/moment";
import Image from "next/image";
import React from "react";
import CancelAppointment from "./CancelAppointment";
import axiosClient from "../../../_components/GelobalApi";
import { toast } from "../../../../hooks/use-toast";
import { useMutation, useQueryClient } from "react-query";

function BookingList({ bookingList, expired }) {
  const queryClient = useQueryClient();

  const { mutate: onDeleteBooking } = useMutation(
    (item) => {
      return axiosClient.delete(`/bookAppointment/${item.id}`);
    },
    {
      onSuccess: () => {
        toast({
          description: "Booking Delete Successfully!",
        });
        queryClient.invalidateQueries(["bookAppointment"]);
      },
    }
  );

  return (
    <div>
      {bookingList?.length > 0 ? (
        bookingList.map((item, index) => (
          <div className="flex gap-4 items-center border p-5 m-3 rounded-lg">
            <Image
              src={item.data.doctorImg}
              width={70}
              height={70}
              alt="img-doctor"
              className="rounded-full object-cover h-[70px] w-[70px]"
            />

            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-bold text-[18px]  flex items-center justify-between">
                {item.data.doctorName}
                {!expired && (
                  <CancelAppointment
                    onClickContinue={() => onDeleteBooking(item)}
                  />
                )}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <MapPin className="text-primary h-5 w-5 " /> address
              </h2>
              <h2 className="flex gap-2">
                <Calendar className="text-primary h-5 w-5" /> Appointment On :{" "}
                {moment(item.data.date).format("DD-MM-YYYY")}{" "}
              </h2>
              <h2 className="flex gap-2">
                <Clock className="text-primary h-5 w-5" /> At Time : Time{" "}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-start text-primary font-bold h-15 p-5  ">
          No reservation...
        </div>
      )}
    </div>
  );
}

export default BookingList;
