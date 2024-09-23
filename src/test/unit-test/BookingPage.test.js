import { initializeTimes, updateTimes } from "../../components/BookingPage";
import { fetchAPI } from "../../bookingAPI"; // Adjust this path as necessary

jest.mock("../../bookingAPI", () => ({
    fetchAPI: jest.fn(),
}));

describe('BookingPage Functions', () => {
    beforeEach(() => {
        // Clear any previous mock calls
        jest.clearAllMocks();
    });

    describe('initializeTimes', () => {
        test('should return the correct initial available times', () => {
            const mockTimes = ['17:00', '18:00', '19:00'];
            fetchAPI.mockReturnValue(mockTimes); // Mock fetchAPI to return predefined times
            
            const result = initializeTimes();
            expect(result).toEqual(mockTimes); // Assert against the mocked times
        });
    });

    describe('updateTimes', () => {
        test('should return the same state value when no action is dispatched', () => {
            const initialState = ['17:00', '18:00', '19:00'];
            const action = { type: 'UNKNOWN_ACTION' };
            
            const result = updateTimes(initialState, action);
            expect(result).toEqual(initialState);
        });

        test('should update available times when UPDATE_TIMES action is dispatched', () => {
            const initialState = ['17:00', '18:00', '19:00'];
            const mockTimes = ['20:00', '21:00', '22:00'];
            fetchAPI.mockReturnValue(mockTimes); // Mock fetchAPI for the specific action
            
            const action = { type: 'UPDATE_TIMES', date: '2024-09-23' }; // Example date
            const result = updateTimes(initialState, action);
            
            expect(result).toEqual(mockTimes); // Assert against the mocked updated times
        });
    });
});
