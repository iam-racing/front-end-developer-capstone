import { initializeTimes, updateTimes } from "../../components/BookingPage"

describe('BookingPage Functions', () => {
    describe('initializeTimes', () => {
        test('should return the correct initial available times', () => {
            const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
            const result = initializeTimes();
            expect(result).toEqual(expectedTimes);
        });
    });

    describe('updateTimes', () => {
        test('should return the same state value when no action is dispatched', () => {
            const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
            const action = { type: 'UNKNOWN_ACTION' }; // An action that does not change the state
            
            const result = updateTimes(initialState, action);
            expect(result).toEqual(initialState);
        });

        test('should update available times when UPDATE_TIMES action is dispatched', () => {
            const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
            const action = { type: 'UPDATE_TIMES' };
            const result = updateTimes(initialState, action);
            
            expect(result).toEqual(initializeTimes()); // Should return the initialized times
        });
    });
});
