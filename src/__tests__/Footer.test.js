import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "../components/Footer";

import data from "../utils/data";

const footerText = "Imprint";
describe("Footer", () => {
  test("Footer renders", async () => {
    render(
      <Footer footerText={data.footerText}/>
      );
      expect(screen.getByText(data.footerText.about)).toBeInTheDocument();
      expect(screen.getByText(data.footerText.dataProtection)).toBeInTheDocument();
      expect(screen.getByText(data.footerText.imprint)).toBeInTheDocument();
      expect(screen.getByText(data.footerText.trademark)).toBeInTheDocument();
      expect(screen.getAllByRole("link"))
  });
});
