import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "@/components/template/Footer";
import { sections } from "@/config/navigation.config";
import { socialLinks, footerUtilsLinks, cvPath } from "@/config/links.config";

// Mock of useScrollToSection
const mockScrollTo = jest.fn();
jest.mock("@/hooks/useScrollToSection", () => ({
  useScrollToSection: () => mockScrollTo,
}));

describe("Footer Component", () => {
  it("should render all navigation buttons", () => {
    render(<Footer />);
    
    sections.forEach((section) => {
      expect(
        screen.getByRole("button", { name: section.name })
      ).toBeInTheDocument();
    });
  });

  it("should scroll to section when an navigation button is clicked", () => {
    render(<Footer />);

    window.scrollTo = jest.fn();

    sections.forEach((section) => {
        const sectionButton = screen.getByRole("button", { name: section.name })
        expect(sectionButton).toBeInTheDocument();
        
        fireEvent.click(sectionButton);

        expect(mockScrollTo).toHaveBeenCalledWith(section.id);
    });    


  });

  it("should render social media links", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /Github/i })).toHaveAttribute(
      "href",
      socialLinks.github.url
    );

    expect(screen.getByRole("link", { name: /Linkedin/i })).toHaveAttribute(
      "href",
      socialLinks.linkedin.url
    );
  });

  it("should render contact email link", () => {
    render(<Footer />);

    const mailLink = screen.getByRole("link", {
      name: socialLinks.mail.url,
    });

    expect(mailLink).toHaveAttribute("href", `mailto:${socialLinks.mail.url}`);
  });

  it("should render all utility links", () => {
    render(<Footer />);

    Object.entries(footerUtilsLinks).forEach(([_, link]) => {
      expect(
        screen.getByRole("link", { name: link.label })
      ).toHaveAttribute("href", link.url);
    });
  });

  it("should open CV link on click", () => {
    render(<Footer />);

    const cvButton = screen.getByRole("button", { name: /voir \/ télécharger mon cv/i });
    window.open = jest.fn();

    fireEvent.click(cvButton);

    expect(window.open).toHaveBeenCalledWith(cvPath);
  });

  it("should scroll to top when 'Retour en haut' button is clicked", () => {
    render(<Footer />);

    const scrollToTopButton = screen.getByRole("button", { name: /retour en haut/i });
    window.scrollTo = jest.fn();

    fireEvent.click(scrollToTopButton);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
