import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../../components/BookingForm';

describe('BookingForm Component', () => {
const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const mockDispatch = jest.fn();

  beforeEach(() => {
    mockDispatch.mockClear(); // Clear mock between tests
  });

  test('renders the form with initial state', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
      />
    );

    // Check that all input fields and labels are rendered
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Submit reservation form/i)).toBeInTheDocument();
  });
})
