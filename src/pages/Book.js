import DatePicker from "react-date-picker";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  const availableTimes = ["12:00", "12:30", "13:00", "13:30"];

  return (
    <div>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
};

export default Booking;
