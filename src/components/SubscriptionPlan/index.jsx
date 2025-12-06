import React, { useState } from "react";
import { Check } from "lucide-react";

export const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("best");
  const [selectedAddons, setSelectedAddons] = useState([]);

  const plans = {
    just: {
      title: "Just mates",
      price: "Free",
      features: [
        { icon: "location.svg", text: "Bring your own GPS" },
        {
          icon: "mileage.svg",
          text: "Mileage reporting to be done",
        },
        { icon: "lock.svg", text: "In-person key handover to guests" },
      ],
    },

    good: {
      title: "Good mates",
      price: "$10",
      period: "/month",
      features: [
        { icon: "location.svg", text: "Primary GPS included" },
        { icon: "mileage.svg", text: "Automated mileage calculations" },
        { icon: "lock.svg", text: "In-person key handover to guests" },
      ],
    },

    best: {
      title: "Best mates",
      price: "$30",
      period: "/month",
      features: [
        { icon: "location.svg", text: "Keyless access technology" },
        { icon: "mileage.svg", text: "Automated mileage calculations" },
        { icon: "lock.svg", text: "Remote handover to guests" },
      ],
    },
  };

  const addons = [
    { id: "gps", name: "BYO secondary GPS", price: "$5/month" },
    {
      id: "insurance",
      name: "Between trip insurance",
      status: "Coming soon",
      disabled: true,
    },
  ];

  // const toggleAddon = (addonId) => {
  //   // setSelectedAddons((prev) =>
  //   //   prev.includes(addonId)
  //   //     ? prev.filter((id) => id !== addonId)
  //   //     : [...prev, addonId]
  //   // );
  //   if (addonId === "insurance") return; // coming soon (disabled)

  //   setSelectedAddons([addonId]); // always keep only one selected
  // };
  const toggleAddon = (addonId) => {
    const addon = addons.find((a) => a.id === addonId);

    if (addon?.disabled) return; // prevent selecting "Coming soon"

    setSelectedAddons([addonId]); // only one addon active
  };

  return (
    <div className="page-content">
      <h1 className="page-title">Subscription plan</h1>
      <p className="page-subtitle">
        Select the ideal subscription plan for your listing.
      </p>

      <h2 className="section-heading">Select your plan</h2>

      <div className="plans-grid">
        {Object.entries(plans).map(([key, plan]) => (
          <div
            key={key}
            className={`plan-box ${
              selectedPlan === key ? "plan-selected" : ""
            }`}
            onClick={() => setSelectedPlan(key)}
          >
            <h3 className="plan-name">{plan.title}</h3>
            <ul className="feature-list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <img src={feature.icon} alt="" className="feature-icon" />
                  <span className="feature-text">{feature.text}</span>
                </li>
              ))}
            </ul>

            <div className="plan-pricing">
              <span className="price-amount">{plan.price}</span>
              {plan.period && (
                <span className="price-period">{plan.period}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Select add-ons for your subscription</h2>

      <div className="addons-list">
        {addons.map((addon) => (
          <div
            key={addon.id}
            className={`addon-box ${
              selectedAddons.includes(addon.id) ? "addon-selected" : ""
            } ${addon.disabled ? "addon-disabled" : ""}`}
            onClick={() => !addon.disabled && toggleAddon(addon.id)}
          >
            <div className="addon-content">
              <span className="addon-title">{addon.name}</span>
              {addon.price && (
                <span className="addon-pricing"> - {addon.price}</span>
              )}
              {addon.status && (
                <span className="addon-badge">{addon.status}</span>
              )}
            </div>
            <div
              className={`checkbox-circle ${
                selectedAddons.includes(addon.id) ? "checkbox-active" : ""
              }`}
            >
              {selectedAddons.includes(addon.id) && <Check size={14} />}
            </div>
          </div>
        ))}
      </div>

      <div className="card-details-section">
        <h2 className="section-heading">Add card details</h2>
        {/* <div className="card-inputs">
          <input
            type="text"
            placeholder="1234 5678 1234 5678"
            className="card-input"
          />

          <input type="text" placeholder="MM/YY" className="card-input-small" />
          <input type="text" placeholder="CVC" className="card-input-small" />
        </div> */}
        <div class="card-box">
          <i class="fa-solid fa-credit-card card-icon"></i>
          <input
            type="text"
            placeholder="1234 5678 1234 5678"
            class="card-field number"
          />
          {/* <div class="small-fields"> */}
          <input
            type="text"
            placeholder="MM/YY  CVV"
            class="card-field small"
          />
          {/* </div> */}
        </div>

        <p className="card-disclaimer">
          You will not be charged right now. Subscription will only start once
          your listing is published and live.
        </p>
      </div>

      <div className="info-box">
        <p className="info-para">
          Learn more about the plans here -{" "}
          <a href="#" className="info-link">
            What is the right plan for me?
          </a>
        </p>
        <p className="info-para">
          You will be able to switch between plans easily later as well. Speak
          to our host success team if you need any clarifications.
        </p>
      </div>

      <button className="btn-next">Next</button>
    </div>
  );
};
