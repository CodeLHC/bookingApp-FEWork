import axios from "axios";

export const getConferenceDetails = async () => {
  try {
    return axios.get("http://localhost:8000/conference");
  } catch (error) {
    console.error("error getting conference details", error);
  }
};

export const getBookings = async () => {
  try {
    return axios.get("http://localhost:8000/bookings");
  } catch (error) {
    console.error("errors getting all booking details", error);
  }
};

export const postOrder = async (firstName, lastName, email, tickets) => {
  return axios
    .post("http://localhost:8000/order", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      numberOfTickets: tickets,
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

  //   catch (error) {
  //   console.log("error posting order", error);
  // }
};
