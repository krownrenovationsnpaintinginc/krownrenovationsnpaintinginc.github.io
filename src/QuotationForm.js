import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function QuotationForm() {
  const [state, handleSubmit] = useForm("mwvwykyo");
  if (state.succeeded) {
    return <p>Thank you for your inquiry. We will respond to you shortly.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input
        type="tel"
        name="number"
        placeholder="Your Phone Number"
        required
      />
      <textarea name="message" placeholder="Project details" required />

      <button type="submit">Send</button>
    </form>
  );
}

export default QuotationForm;
