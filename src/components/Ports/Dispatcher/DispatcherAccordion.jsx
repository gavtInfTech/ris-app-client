import React from "react";
import Dispatcher from "./Dispatcher";
import { ports } from "../../infrastructure/ports/data";

export default function DispatcherAccordion({ onUpdate }) {
  return (
    <>
      {ports.map((port, index) => (
        <Dispatcher key={index} portName={port.name} onUpdate={onUpdate} />
      ))}
    </>
  );
}
