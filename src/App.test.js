import BookingForm from './pages/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
})