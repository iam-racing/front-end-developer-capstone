import { useState } from 'react';

const BookingForm = (props) => {
  // Declare state variables for form inputs
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(!date)
    console.log({ date, time, guests, occasion });
    props.submitForm({ date, time, guests, occasion });
    
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        aria-label="Reservation date"
        aria-required="true"
      />
      { !date && <p style={{ color: 'red' }}>{"Please provide a date."}</p>} {/* Error message for date */}

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
        aria-label="Reservation time"
        aria-required="true"
      >
        {props.availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        value={guests} 
        min="1" 
        max="10" 
        onChange={(e) => setGuests(e.target.value)}
        aria-label="Number of guests"
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Occasion"
        aria-required="true"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" disabled={ date == "" } value="Make Your reservation" aria-label="Submit reservation form"/>
    </form>
  );
};

export default BookingForm;