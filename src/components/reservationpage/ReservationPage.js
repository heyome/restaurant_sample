import React, { useState } from 'react';
import './ReservationPage.css';

const ReservationPage = () => {
  const [people, setPeople] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform reservation submission logic here
    // You can access the reservation details from the state variables (people, telephone, email, date, time)
    // Example: Send the reservation details to the backend API
    console.log('Reservation submitted!');
    console.log('People:', people);
    console.log('Telephone:', telephone);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Time:', time);
    // Reset the form after submission
    setPeople('');
    setTelephone('');
    setEmail('');
    setDate('');
    setTime('');
    // Show the notification
    setShowNotification(true);
  };

  // Generate time options in 30-minute intervals
  const timeOptions = [];
  const startTime = new Date();
  startTime.setHours(8, 0, 0); // Set starting time to 8:00 AM
  const endTime = new Date();
  endTime.setHours(21, 0, 0); // Set ending time to 9:00 PM

  const intervalMinutes = 30;
  let currentTime = new Date(startTime);

  while (currentTime <= endTime) {
    const timeString = currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    timeOptions.push(
      <option key={timeString} value={timeString}>
        {timeString}
      </option>
    );
    currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
  }

  return (
    <div className="reservation-outer-container">
      <div className="reservation-page-container">
        <h1>Reservation Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="people">Number of People:</label>
            <input
              type="number"
              id="people"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="telephone">Telephone Number:</label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="">Select Time</option>
              {timeOptions}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        {showNotification && <p className="notification">Reservation submitted successfully!</p>}
      </div>
    </div>
  );
};

export default ReservationPage;
