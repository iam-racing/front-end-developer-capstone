import { useReducer } from 'react';

import BookingForm from "./BookingForm";

export const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// Reducer function to update available times based on selected date
export const updateTimes = (state, action) => {
    // For now, the same times are returned regardless of the date
    // In the future, this can be modified to return different times based on the date
    if (action.type === 'UPDATE_TIMES') {
        return initializeTimes();
    }

    return state;
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <>
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={ availableTimes } dispatch={ dispatch } />
        </>
    );
};

export default BookingPage;