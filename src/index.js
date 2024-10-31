import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Импорт вашего основного компонента

const container = document.getElementById("root");
const root = createRoot(container); // создаем корень
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
