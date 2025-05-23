"use client";
import Attribution from "./attribution";
import { useState } from "react";

export default function Home() {
  const [sequence, setSequence] = useState<number>(1);

  const steps = [
    { id: 1, name: "Your info" },
    { id: 2, name: "Select plan" },
    { id: 3, name: "Add-ons" },
    { id: 4, name: "Summary" },
    { id: 5, name: "Thank you!" },
  ];

  const goPreviousSequence = () => {
    if (sequence > 1) {
      setSequence(sequence - 1);
    }
  };
  const goNextSequence = () => {
    if (sequence < 5) {
      setSequence(sequence + 1);
    }
  };

  return (
    <div>
      <div className="sidebar">
        {steps.map((step) => (
          <div key={step.id} className="sidebar__step">
            <span className={sequence === step.id ? "active" : ""}>
              Step {step.id}
            </span>
            <span>{step.name}</span>
          </div>
        ))}
      </div>
      <span>currentsequence: {sequence}</span>
      {/*
<!-- Sidebar start -->

    Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary

    <!-- Sidebar end -->

    <!-- Step 1 start -->

    Personal info Please provide your name, email address, and phone number.
    Name e.g. Stephen King Email Address e.g. stephenking@lorem.com Phone Number
    e.g. +1 234 567 890 Next Step

    <!-- Step 1 end -->

    <!-- Step 2 start -->

    Select your plan You have the option of monthly or yearly billing. Arcade
    $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next Step

    <!-- Step 2 end -->

    <!-- Step 3 start -->

    Pick add-ons Add-ons help enhance your gaming experience. Online service
    Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save
    +$2/mo Customizable Profile Custom theme on your profile +$2/mo Go Back Next
    Step

    <!-- Step 3 end -->

    <!-- Step 4 start -->

    Finishing up Double-check everything looks OK before confirming.

    <!-- Dynamically add subscription and add-on selections here -->

    Total (per month/year) Go Back Confirm

    <!-- Step 4 end -->

    <!-- Step 5 start -->

    Thank you! Thanks for confirming your subscription! We hope you have fun
    using our platform. If you ever need support, please feel free to email us
    at support@loremgaming.com.

    <!-- Step 5 end -->
*/}
      <button className="border" onClick={goPreviousSequence}>
        Go previous
      </button>
      <button className="border" onClick={goNextSequence}>
        Go next
      </button>
      <Attribution />
    </div>
  );
}
