import React, { useState } from "react";
import { Menu, X, User, Check, ChevronDown } from "lucide-react";
import { SubscriptionPlans } from "./components/SubscriptionPlan";
import { DeviceManagement } from "./components/DeviceManagement";

export default function DriveLabApp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState("subscription");
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const steps = [
    { id: "location", label: "Location", completed: true },
    { id: "about", label: "About", completed: true },
    { id: "features", label: "Features", completed: true },
    { id: "rules", label: "Rules", completed: true },
    { id: "pricing", label: "Pricing", completed: true },
    { id: "promotion", label: "Promotion", completed: true },
    { id: "pictures", label: "Pictures", completed: true },
    { id: "insurance", label: "Insurance", completed: true },
    { id: "subscription", label: "Subscription", completed: false },
    { id: "device", label: "Device", completed: false },
    { id: "easy-access", label: "Easy Access", completed: false },
  ];

  const currentStepLabel =
    steps.find((s) => s.id === activeStep)?.label || "Subscription";

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="app-header">
        {/* Desktop Header */}
        <div className="desktop-header">
          <div className="header-container">
            <div className="brand-logo">
              <img src="/drivelah.png" alt="logo" className="brand-name" />
            </div>
            <nav className="desktop-nav">
              <p className="nav-item">Learn more</p>
              <p className="nav-item">List your car</p>
              <p className="nav-item">Inbox</p>
              <button className="profile-btn">
                <User size={20} />
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="mobile-container">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="brand-logo">
              <img
                src="/drivelah.png"
                alt="logo"
                className="brand-name-mobile"
              />
            </div>

            <button className="profile-btn-mobile">
              <User size={20} />
            </button>
          </div>

          {/* Optional: Other mobile nav items (like hamburger content) */}
          {mobileMenuOpen && (
            <div className="mobile-nav-menu">
              <p className="nav-item">Learn more</p>
              <p className="nav-item">List your car</p>
              <p className="nav-item">Inbox</p>
            </div>
          )}
        </div>
      </header>
      <div className="mobile-step-wrapper">
        <button
          className="mobile-step-selector"
          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
        >
          <span>{currentStepLabel}</span>
          <ChevronDown
            size={18}
            className={mobileDropdownOpen ? "rotated" : ""}
          />
        </button>

        {mobileDropdownOpen && (
          <div className="mobile-steps-dropdown">
            {steps.map((step) => (
              <button
                key={step.id}
                className={`mobile-step-item ${
                  activeStep === step.id ? "active" : ""
                }`}
                onClick={() => {
                  setActiveStep(step.id);
                  setMobileDropdownOpen(false);
                }}
              >
                <span>{step.label}</span>
                {step.completed && <Check size={16} />}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Layout */}
      <div className="app-layout">
        {/* Desktop Sidebar */}
        <aside className="desktop-sidebar">
          <ul className="sidebar-steps">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`sidebar-step ${
                  activeStep === step.id ? "step-active" : ""
                } ${step.completed ? "step-completed" : ""}`}
                onClick={() => setActiveStep(step.id)}
              >
                <span className="step-text">{step.label}</span>
                {step.completed && <Check size={16} className="step-icon" />}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-area">
          {activeStep === "subscription" && <SubscriptionPlans />}
          {activeStep === "device" && <DeviceManagement />}
          {activeStep !== "subscription" && activeStep !== "device" && (
            <div className="page-content">
              <h1 className="page-title">{currentStepLabel}</h1>
              <p className="page-subtitle">
                Content for {currentStepLabel} section
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
