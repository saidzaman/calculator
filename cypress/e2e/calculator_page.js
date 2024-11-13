const locators = require("./locator.js");
exports.goToGoogleCalculator = () => {
  cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  cy.visit("/search?q=calculator");
  cy.get(locators.equal_button).should("exist");
};

exports.pressZero = () => {
  cy.get(locators.zero_button).click();
}

exports.pressOne = () => {
  cy.get(locators.one_button).click();
}

exports.pressTwo = () => {
  cy.get(locators.two_button).click();
}

exports.pressThree = () => {
  cy.get(locators.three_button).click();
}

exports.pressFour = () => {
  cy.get(locators.four_button).click();
}

exports.pressFive = () => {
  cy.get(locators.five_button).click();
}

exports.pressSix = () => {
  cy.get(locators.six_button).click();
}

exports.pressSeven = () => {
  cy.get(locators.seven_button).click();
}

exports.pressEight = () => {
  cy.get(locators.eight_button).click();
}

exports.pressNine = () => {
  cy.get(locators.nine_button).click();
}

exports.pressPlus = () => {
  cy.get(locators.plus_button).click();
}

exports.pressMinus = () => {
  cy.get(locators.minus_button).click();
}

exports.pressMultiply = () => {
  cy.get(locators.multiply_button).click();
}

exports.pressDivision = () => {
  cy.get(locators.division_button).click();
}

exports.pressEqual = () => {
  cy.get(locators.equal_button).click();
}

exports.pressCE = () => {
  cy.get(locators.CE_button).click();
}

exports.pressAC = () => {
  cy.get(locators.AC_button).click();
}

exports.pressDecimal = () => {
  cy.get(locators.decimal_button).click();
}

exports.shouldSee = (text) => {
  cy.get(locators.calculator_display).should("have.text", text);
}