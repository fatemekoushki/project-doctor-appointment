import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Calendar } from "../../../../components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";
import axios from "axios";
import axiosClient from "../../../_components/GelobalApi";
import Cookies from "js-cookie";

import { useToast } from "../../../../hooks/use-toast";

function BookAppointment({ doctor }) {
  const { toast } = useToast();
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const userInf = Cookies.get("tokenLogin");
    if (userInf) {
      const user = JSON.parse(userInf);
      setUserInfo(user);
    }
  }, []);

  useEffect(() => {
    getTime();
  }, []);
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + `:00 AM`,
      });
      timeList.push({
        time: i + `:30 AM `,
      });
    }
    for (let i = 0; i <= 6; i++) {
      timeList.push({
        time: i + `:00 PM`,
      });
      timeList.push({
        time: i + `:30 PM `,
      });
    }
    setTimeSlot(timeList);
  };
  const isPaseDay = (day) => {
    return day <= new Date();
  };
  const saveBooking = () => {
    const data = {
      name: userInfo?.name,
      email: userInfo?.email,
      time: selectedTimeSlot,
      date: date,
      doctorName: doctor.name,
      doctorImg: doctor.img,
    };
    axiosClient.post("bookAppointment", { data: data }).then((res) => {
      if (res) {
        toast({
          description: "Booking Confirmation Send On Email",
        });
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="mt-3 rounde
         d-full"
        >
          Book Appointment
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2  mt-5">
                {/* Calender  */}
                <div className="flex gap-3 flex-col items-baseline ">
                  <h2 className="flex items-center gap-2">
                    <CalendarDays className="text-primary w-5 h-5" />
                    Select Date
                  </h2>

                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPaseDay}
                    className="rounded-md border"
                  />
                </div>
                {/* Time slot  */}
                <div className="mt-3 md:mt-0 ">
                  <h2 className="flex gap-2 items-center mb-3">
                    <Clock className="text-primary w-5 h-5 " />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border border-lg p-5 ">
                    {timeSlot?.map((item, index) => (
                      <h2
                        key={index}
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2 border rounded-full hover:bg-primary text-center hover:text-white ${
                          item.time == selectedTimeSlot &&
                          "bg-primary text-white "
                        }`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <>
              {/* <Button type="button" variant="outline" className="text-red-500 border-red-500" >
              Close
            </Button> */}
              <Button
                onClick={saveBooking}
                type="button"
                disabled={!(date && selectedTimeSlot)}
              >
                Submit
              </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointment;
