import React, { useState, useEffect } from "react";

export default function GateKeeper() {
  const [address, setAddress] = useState(false);
  const [ready, setReady] = useState(false);
  const submitAddress = () => {
    console.log(address)
    setReady(true);
  };
    return (
      <div
          className={'matrix'}>
            <h1> GateKeeper </h1>
            <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Enter metaverse address" />
            <div className="button" onClick={() => submitAddress()}>Teleport</div>
          </div>
    );
  }
  