import { useState } from "react";
import "./App.css";
import { ReactComponent as Spinner } from "./assets/spinner.svg";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const encoded = new URLSearchParams(data);
    setStatus("loading");
    fetch("http://localhost:3000/", { method: "POST", body: encoded })
      .then(async (response) => {
        if (!response.ok) return setStatus("error");
        return setStatus("success");
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("error");
      });
  };
  return (
    <div className="mx-auto w-full max-w-[550px] bg-white rounded-md shadow-md">
      <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
        {status === "error" &&
          "Something went wrong on our side. Please try again later"}
        {status === "success" && "Your appointment has been booked"}
      </div>
      <h1 className="text-2xl font-bold px-8">Appointment</h1>
      <form className="py-6 px-9" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          label="Name"
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          label="Phone"
          pattern="^\+?\d{0,13}"
        />
        <Input type="date" name="date" label="Date" />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" && <Spinner />}Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
