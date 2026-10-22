import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero, main landmark and skip link", () => {
  render(<App />);

  const heading = screen.getByRole("heading", { level: 1, name: /Ahmed/i });
  expect(heading).toBeInTheDocument();

  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();

  const skipLink = screen.getByRole("link", { name: /skip to content/i });
  expect(skipLink).toBeInTheDocument();
});

test("renders all local portfolio sections and new skills", () => {
  render(<App />);

  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  expect(screen.getByText(/Selected Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Skills & Experience/i)).toBeInTheDocument();

  // Verify new skills requested by user exist in the DOM (Next.js and TanStack Query appear in Hero stack and Skills)
  expect(screen.getAllByText("Next.js").length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByText("TanStack Query").length).toBeGreaterThanOrEqual(1);
  expect(screen.getByText("Zod")).toBeInTheDocument();
  expect(screen.getAllByText("Tailwind CSS").length).toBeGreaterThanOrEqual(1);
  expect(screen.getByText("Zustand")).toBeInTheDocument();

  // Verify work experience and projects from CV
  expect(screen.getByText(/Nweave Software Development/i)).toBeInTheDocument();
  expect(screen.getByText(/Startup Defenders/i)).toBeInTheDocument();
  expect(screen.getByText(/Real-Time Chat Application/i)).toBeInTheDocument();
  expect(screen.getByText(/Quran-player/i)).toBeInTheDocument();
});
