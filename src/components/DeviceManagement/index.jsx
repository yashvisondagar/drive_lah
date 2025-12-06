import React, { useState } from "react";

export const DeviceManagement = () => {
  const [device1BringOwn, setDevice1BringOwn] = useState(false);
  const [device2BringOwn, setDevice2BringOwn] = useState(false);

  return (
    <div className="page-content">
      <h1 className="page-title">Device management</h1>
      <p className="page-subtitle">
        Add details of the device, if any already installed on your car. If
        none, then continue to next step.
      </p>{" "}
      <div className="device-card">
        <h3 className="device-title">Device 1</h3>
        <div className="row-1" style={{ display: "flex", gap: "20px" }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Device type</label>
            <select className="form-select">
              <option>Primary GPS</option>
              <option>Secondary GPS</option>
            </select>
          </div>

          <div className="toggle-row" style={{ flexShrink: 0 }}>
            <div className="toggle-info">
              <label className="toggle-label">Bringing your own device?</label>
              <p className="toggle-desc">
                Toggle this on if you are bringing your own device.
              </p>
            </div>
            <button
              className={`toggle-switch ${device1BringOwn ? "toggle-on" : ""}`}
              onClick={() => setDevice1BringOwn(!device1BringOwn)}
            >
              <span className="toggle-slider"></span>
            </button>
          </div>
        </div>

        {device1BringOwn && (
          <div className="row-2" style={{ display: "flex", gap: "20px" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Serial number</label>
              <input
                type="text"
                placeholder="Enter the serial number of the device"
                className="form-input"
              />
            </div>

            <div className="upload-section" style={{ flex: 1 }}>
              <label className="form-label">
                Upload an image of the device
              </label>
              <button className="upload-btn">
                <h4>Click to upload</h4>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="device-card">
        <h3 className="device-title">Device 2</h3>

        {/* 1st ROW → device type + toggle */}
        <div className="row-1" style={{ display: "flex", gap: "20px" }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Device type</label>
            <select className="form-select">
              <option>Secondary GPS</option>
              <option>Primary GPS</option>
            </select>
          </div>

          <div className="toggle-row" style={{ flexShrink: 0 }}>
            <div className="toggle-info">
              <label className="toggle-label">Bringing your own device?</label>
              <p className="toggle-desc">
                Toggle this on if you are bringing your own device.
              </p>
            </div>
            <button
              className={`toggle-switch ${device2BringOwn ? "toggle-on" : ""}`}
              onClick={() => setDevice2BringOwn(!device2BringOwn)}
            >
              <span className="toggle-slider"></span>
            </button>
          </div>
        </div>

        {device2BringOwn && (
          <div className="row-2" style={{ display: "flex", gap: "20px" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Serial number</label>
              <input
                type="text"
                placeholder="Enter the serial number of the device"
                className="form-input"
              />
            </div>

            <div className="upload-section" style={{ flex: 1 }}>
              <label className="form-label">
                Upload an image of the device
              </label>
              <button className="upload-btn">
                <h4>Click to upload</h4>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="device-card">
        <h3 className="device-title">Device 3</h3>

        {/* 1st ROW → device type + toggle */}
        <div className="row-1" style={{ display: "flex", gap: "20px" }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label">Device type</label>
            <select className="form-select">
              <option>Secondary GPS</option>
              <option>Primary GPS</option>
              <option>Drive mate Go</option>
            </select>
          </div>

          <div className="toggle-row" style={{ flexShrink: 0 }}>
            <div className="toggle-info">
              <label className="toggle-label">Bringing your own device?</label>
              <p className="toggle-desc">
                Toggle this on if you are bringing your own device.
              </p>
            </div>
            <button
              className={`toggle-switch ${device2BringOwn ? "toggle-on" : ""}`}
              onClick={() => setDevice2BringOwn(!device2BringOwn)}
            >
              <span className="toggle-slider"></span>
            </button>
          </div>
        </div>

        {device2BringOwn && (
          <div className="row-2" style={{ display: "flex", gap: "20px" }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Serial number</label>
              <input
                type="text"
                placeholder="Enter the serial number of the device"
                className="form-input"
              />
            </div>

            <div className="upload-section" style={{ flex: 1 }}>
              <label className="form-label">
                Upload an image of the device
              </label>
              <button className="upload-btn">
                <h4>Click to upload</h4>
              </button>
            </div>
          </div>
        )}
      </div>
      <button className="btn-next">Next</button>
    </div>
  );
};
