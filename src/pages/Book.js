import DatePicker from "react-date-picker";
import { useState } from "react";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [tableSize, setTableSize] = useState(0);

  return (
    <div>
      <div className="mx-auto max-w-2xl rounded-2xl border-2 my-4 flex p-2 flex-col">
        <h1 className="text-2xl font-bold text-center">Booking</h1>
        <label className="text-center label">Please select a date</label>
        <input
          type="date"
          className="input input-primary"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label className="text-center label">Please select a time</label>
        <input
          type="time"
          className="input input-primary"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label className="text-center label">Please select a table size</label>
        <input
          type="number"
          className="input input-primary"
          value={tableSize}
          onChange={(e) => setTableSize(e.target.value)}
        />

        <label className="text-center label">Please enter your full name</label>
        <input
          className="input input-primary"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label className="text-center label">Please enter your email</label>
        <input
          className="input input-primary"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => alert(`Booking successfull details send to ${email}`)}
          className="btn mt-4 btn-primary"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Booking;
