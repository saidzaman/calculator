const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const calculator_page = require("./calculator_page.js");

Given("I am on google calculator", () => {
  calculator_page.goToGoogleCalculator();
});

When("I click on 0", () => {
  calculator_page.pressZero();
});

When("I click on 1", () => {
  calculator_page.pressOne();
});

When("I click on 2", () => {
  calculator_page.pressTwo();
});

When("I click on 3", () => {
  calculator_page.pressThree();
});

When("I click on 4", () => {
  calculator_page.pressFour();
});

When("I click on 5", () => {
  calculator_page.pressFive();
});

When("I click on 6", () => {
  calculator_page.pressSix();
});

When("I click on 7", () => {
  calculator_page.pressSeven();
});

When("I click on 8", () => {
  calculator_page.pressEight();
});

When("I click on 9", () => {
  calculator_page.pressNine();
});

When("I click on +", () => {
  calculator_page.pressPlus();
});

When("I click on =", () => {
  calculator_page.pressEqual();
});

When("I click on -", () => {
  calculator_page.pressMinus();
});

When("I click on x", () => {
  calculator_page.pressMultiply();
});

When("I click on ÷", () => {
  calculator_page.pressDivision();
});

When("I click on CE", () => {
  calculator_page.pressCE();
});

When("I click on AC", () => {
  calculator_page.pressAC();
});

When("I click on Decimal", () => {
  calculator_page.pressDecimal();
});

Then("I should see {string}", (number) => {
  calculator_page.shouldSee(number);
});