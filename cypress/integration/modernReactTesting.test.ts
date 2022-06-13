import { errorHandlers } from "../../src/mocks/errorHandlers";

it("When clicking on the fetch posts button it should list out the posts", () => {
  cy.visit("/");
  cy.window().should("have.property", "appReady", true);
  cy.findByRole("heading", { name: /Modern React Testing/i, level: 1 }).should(
    "exist"
  );
  cy.findByRole("button", { name: "Fetch Posts" }).click();
  cy.findByLabelText("loading").should("exist");
  cy.findAllByRole("heading", { level: 3 }).should("exist");
});

it("When clicking on the clear posts button it should clear the posts.", () => {
  cy.findByRole("heading", { name: /Modern React Testing/i, level: 1 }).should(
    "exist"
  );
  cy.findByRole("button", { name: "Clear Posts" }).click();
  cy.findAllByRole("heading", { level: 3 }).should("not.exist");
});

it("Display error message when fetch posts data failed", async () => {
  cy.visit("/");
  cy.window().should("have.property", "appReady", true);
  cy.window().then((window: any) => {
    const { worker } = window.msw;
    worker.resetHandlers();
    worker.use(...errorHandlers);
  });
  cy.findByRole("heading", {
    name: /Modern React Testing/i,
    level: 1,
  }).should("exist");
  cy.findByRole("button", { name: "Fetch Posts" }).click();
  cy.findByLabelText("loading").should("exist");
  cy.findByLabelText("Internal server error").should("exist");
});

// describe("When clicking on the fetch posts button it should list out the posts", () => {
//   it("Renders the heading", () => {
//     cy.visit("/");
//     cy.findByRole("heading", { name: /Modern React Testing/i, level: 1 }).should(
//       "exist"
//     );
//   });

//   it("Clicking on the fetch posts button", () => {
//     cy.findByRole("button", { name: 'Fetch Posts' }).click();
//   });

//   it("Renders in the loading state", () => {
//     cy.findByLabelText('loading').should('exist');
//   });

//   it('Should list out the posts', async () => {
//     cy.findAllByRole("heading", { level: 3 }).should('exist');
//   });
// });

// describe("When clicking on the clear posts button it should clear the posts.", () => {
//   it("Renders the heading", () => {
//     cy.findByRole("heading", { name: /Modern React Testing/i, level: 1 }).should(
//       "exist"
//     );
//   });

//   it("Clicking on the clear posts button", () => {
//     cy.findByRole("button", { name: 'Clear Posts' }).click();
//   });

//   it('Should clear the posts', async () => {
//     cy.findAllByRole("heading", { level: 3 }).should('not.exist');
//   });
// });
