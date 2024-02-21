import React, { useState } from "react";

import { postOrder } from "../requests/api";

function OrderTickets() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [ticketValue, setTicketValue] = useState(0);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   const confirmOrderButton = (
  //     <button type="submit" disabled={loading}>
  //       {loading ? "Submitting..." : "Confirm your booking"}
  //     </button>
  //   );

  //   const { navigate } = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ firstNameValue, lastNameValue, emailValue, ticketValue });
    postOrder(firstNameValue, lastNameValue, emailValue, ticketValue);
    // Reset form fields after successful submission
    // setFirstNameValue("");
    // setLastNameValue("");
    // setEmailValue("");
    // setTicketValue(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          value={firstNameValue}
          onChange={(e) => setFirstNameValue(e.target.value)}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          value={lastNameValue}
          onChange={(e) => setLastNameValue(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
      </label>
      <label>
        How many tickets:
        <input
          type="number"
          value={ticketValue}
          onChange={(e) => setTicketValue(e.target.value)}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Confirm your booking"}
      </button>
    </form>
  );
}

export default OrderTickets;
