import { render,screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

test("Test that heading in Contact us rendered or not",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Test that the text in Contact us rendered or not",()=>{
    render(<Contact/>)
    const linktext=screen.getByText("abhishekyadav7102004@gmail.com");
    expect(linktext).toBeInTheDocument();
})

test("Test that the text in Contact us rendered or not",()=>{
    render(<Contact/>)
    const links=screen.getAllByRole("link")
    expect(links.length).toBeGreaterThan(1);
})
