import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom"; // Added for potential navigation options

const Error = () => {
  const error = useRouteError();

  // Handle potential missing error data gracefully
  if (!error) {
    return <div>An error occurred, but details are unavailable.</div>;
  }

  // Extract error details for display
  const { status, statusText } = error;

  // Optionally customize error messages based on status code
  // (example for 404 Not Found)
  let errorMessage = statusText;
  if (status === 404) {
    errorMessage = "The requested page could not be found.";
  }

  // Provide user-friendly suggestions or links for navigation
  const suggestedActions = (
    <div>
      <Link to="/">Go to Homepage</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong.</h1>
      <h3>
        Error {status}: {errorMessage}
      </h3>
      <p>We apologize for the inconvenience.</p>
      {suggestedActions}
    </div>
  );
};

export default Error;
