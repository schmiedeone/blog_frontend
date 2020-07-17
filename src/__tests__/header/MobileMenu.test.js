import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import MobileMenu from "../../components/header/MobileMenu";
import data from "../../utils/data";

describe("MobileMenu", () => {
  test("MobileMenu renders", async () => {
    render(
      <Router>
          <MobileMenu name={data.blogName} />
      </Router>
    );
    expect(await screen.findByText("About")).toBeInTheDocument();
    expect(await screen.findByText("Categories")).toBeInTheDocument();
    expect(await screen.findByText("Authors")).toBeInTheDocument();
    expect(screen.getByLabelText("mobile menu")).toBeInTheDocument();
  });
});


describe("MobileMenu drawer", () => {
  test("MobileMenu operates on click", async () => {
    const onClick = jest.fn();

    render(
      <Router>
          <MobileMenu name={data.blogName} />
      </Router>
    );

    fireEvent(
      screen.getByLabelText('mobile menu button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    fireEvent(
      screen.getByText("Categories"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    
    // expect(onClick).toHaveBeenCalledTimes(1);

    expect(await screen.findByText("About")).toBeInTheDocument();
    expect(await screen.findByText("Categories")).toBeInTheDocument();
    expect(await screen.findByText("Authors")).toBeInTheDocument();
    expect(screen.getByLabelText("mobile menu")).toBeInTheDocument();
  });
});
