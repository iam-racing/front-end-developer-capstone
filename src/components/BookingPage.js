import { useReducer } from 'react';
import { useNavigate } from "react-router-dom";

import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../bookingAPI"

export const initializeTimes = () => { 
    // Call the fetchAPI function with today's date
    const availableTimes = fetchAPI(new Date());

    // Return the available times
    return availableTimes;
};

// Reducer function to update available times based on selected date
export const updateTimes = (state, action) => {
    // For now, the same times are returned regardless of the date
    // In the future, this can be modified to return different times based on the date
    if (action.type === 'UPDATE_TIMES') {
        const availableTimes = fetchAPI(new Date(action.date));
        return availableTimes;
    } else {
        return state;
    }
};

const BookingPage = () => {
    const navigate = useNavigate();

    function submitForm(formData) {
        const result = submitAPI(formData);
        if (result) {
            navigate("/booking-success");
        } else {
          console.error('Form submission failed.');
        }
      };

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <>
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={ availableTimes } dispatch={ dispatch } submitForm={ submitForm } />
        </>
    );
};

export default BookingPage;