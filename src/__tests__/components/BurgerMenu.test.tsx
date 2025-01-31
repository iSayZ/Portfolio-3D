import { BurgerMenu } from "@/components/template/BurgerMenu";
import { sections } from "@/config/navigation.config";
import { fireEvent, render, screen } from "@testing-library/react";

// Mock of next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  usePathname: () => "/portfolio",
}));

// Mock of useScrollToSection
const mockScrollTo = jest.fn();
jest.mock("@/hooks/useScrollToSection", () => ({
  useScrollToSection: () => mockScrollTo,
}));

describe("BurgerMenu", () => {
  const renderTaskList = () => {
    return render(<BurgerMenu isScrolled={false} />);
  };

  describe("Burger menu interactions", () => {
    describe("Displaying", () => {
      it("it should must be displayed and visible, not the menu", () => {
        renderTaskList();

        const burgerMenuBtn = screen.getByRole("button");
        expect(burgerMenuBtn).toBeInTheDocument();

        const sheet = screen.queryByRole("dialog");
        expect(sheet).not.toBeInTheDocument();
      });

      it("should open when you click on the burger menu button", async () => {
        renderTaskList();

        const burgerMenuBtn = screen.getByRole("button");
        fireEvent.click(burgerMenuBtn);

        const sheet = await screen.findByRole("dialog");
        expect(sheet).toHaveAttribute("data-state", "open");
      });

      it("should close when the menu is open and you click on the burger menu close button", async () => {
        renderTaskList();

        const burgerMenuBtn = screen.getByRole("button");
        fireEvent.click(burgerMenuBtn);

        const closeButton = screen.getByRole("button", { name: /close/i });
        expect(closeButton).toBeInTheDocument();
        fireEvent.click(closeButton);

        const closedSheet = screen.queryByRole("dialog");
        expect(closedSheet).not.toBeInTheDocument();
      });

      it("should close when the menu is open and you click on the navigation button", async () => {
        renderTaskList();

        sections.forEach((section) => {
          const burgerMenuBtn = screen.getByRole("button");
          fireEvent.click(burgerMenuBtn);

          const navigationBtn = screen.getByRole("button", {
            name: new RegExp(`^${section.name}$`, "i"),
          });

          expect(navigationBtn).toBeInTheDocument();
          fireEvent.click(navigationBtn);

          const closedSheet = screen.queryByRole("dialog");
          expect(closedSheet).not.toBeInTheDocument();
        });
      });
    });

    describe("Navigation behavior", () => {
      it("should call scrollTo with correct section id when clicking on navigation button", async () => {
        renderTaskList();

        const burgerMenuBtn = screen.getByRole("button");
        fireEvent.click(burgerMenuBtn);

        const aboutButton = screen.getByRole("button", { name: /À propos/i });
        fireEvent.click(aboutButton);

        expect(mockScrollTo).toHaveBeenCalledWith("#about");
      });
    });
  });
});
