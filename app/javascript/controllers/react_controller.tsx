// app/javascript/controllers/react_controller.ts

import { Controller } from "@hotwired/stimulus";
import { createRoot } from "react-dom/client";
import MainApp from "../components/MainApp";

export default class extends Controller {
  static readonly targets = ["root"];
  declare readonly rootTarget: HTMLElement;

  connect() {
    console.log("Stimulus controller React connecté !");
    createRoot(this.rootTarget).render(<MainApp />);
  }
}

