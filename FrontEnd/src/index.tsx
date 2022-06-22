import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from './app';

const rootElement = document.getElementById("root")!;  //! means that the variable is not null
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);