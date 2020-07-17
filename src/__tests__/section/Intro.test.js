import React from "react";
import { render, screen } from "@testing-library/react";

import Intro from "../../components/section/Intro";

const data = {
  title: "The Title",
  description: "The Description",
  image: [{ url: "/uploads/me_65ebb514cd.jpeg", __typename: "UploadFile" }],
};

describe("Intro", () => {
  test("Render the intro section", () => {
    render(
      <Intro
        title={data.title}
        description={data.description}
        image={data.image}
      />
    )

    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByText(data.description)).toBeInTheDocument();
    expect(screen.getByLabelText("intro")).toBeInTheDocument();
  });
});
