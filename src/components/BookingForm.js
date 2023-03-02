import { useState } from "react";

export const BookingForm = () => {
  const [date, setDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [tableSize, setTableSize] = useState(0);

  const bookedTimes = ["12:00", "12:30", "13:00", "13:30"];

  return (
    <form
      className="mx-auto max-w-2xl rounded-2xl border-2 my-4 flex p-2 flex-col"
      onSubmit={() => {
        if (typeof fullName !== "string" || fullName.length < 3) {
          alert("Please enter a valid name");
          return;
        }
        if (typeof email !== "string" || email.length < 3) {
          alert("Please enter a valid email");
          return;
        }
        if (typeof time !== "string" || time.length < 3) {
          alert("Please enter a valid time");
          return;
        }

        if (bookedTimes.includes(time)) {
          alert("This time is already booked");
          return;
        }
        alert(`Booking successfull details send to ${email}`);
      }}
    >
      <h1 className="text-2xl font-bold text-center">Booking</h1>
      <label className="text-center label">Please select a date</label>
      <input
        type="date"
        className="input input-primary"
        value={date}
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <label className="text-center label">Please select a time</label>
      <input
        className="input input-primary"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        // Client side validation
        //    |
        //    |
        //    V
        required
        type="time"
      />
      <label className="text-center label">Please select a table size</label>
      <input
        type="number"
        className="input input-primary"
        value={tableSize}
        required
        onChange={(e) => setTableSize(e.target.value)}
      />

      <label className="text-center label">Please enter your full name</label>
      <input
        className="input input-primary"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        // Client side validation
        //    |
        //    |
        //    V
        required
        maxLength={50}
        minLength={7}
      />
      <label className="text-center label">Please enter your email</label>
      <input
        className="input input-primary"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        // Client side validation
        //    |
        //    |
        //    V
        required
        maxLength={50}
        minLength={7}
        type="email"
      />
      <button type="submit" className="btn mt-4 btn-primary">
        Book
      </button>
    </form>
  );
};
