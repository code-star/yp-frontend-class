# Mortgage calculator assignment

## Introduction

One of Codestar's clients, Rabobank, has asked Codestar to implement a renewed mortgage calculator for their website. This mortgage calculator is used to give potential clients of the rabobank a quick insight in their potential mortgage based on their income.

## Minimum viable product (Sprint definition)

Rabobank wants to go live with this application as soon as possible and had therefore defined a **'Minimal Viable Product'** in the form of the following **'User Stories'**:

* **US1:** As a user I want to be informed about the maximum mortgage I can get based on my income and my partner's income.
* **US2:** As a user I want to be informed about the conditions under which Rabobank will provide customers with a mortgage.
* **US3:** As a user I want to be able to use the mortgage calculalator on my mobile phone in a comfortable way. **'Mobile first'**(min device width = 320px)

## Extra requirements (Backlog, sorted in order of importance)

Rabobank has some extra requirements that would be interesting to implement in case the Minimum Viable Product has been implemented and there is still some space in the budget:

* **US5:** As a user I want to be informed about the current Rabobank mortgage interest percentage. (use the current-mortgage-interest-rate service)
* **US8:** As a user I want to be informed about the maximum mortgage. (use the max-to-loan service)  
* **US6:** As a user I want to be able to use the mortgage calculator on my desktop computer in a comfortable way. (**'Responsive design'**)
* **US7:** As a user I want to be able to use the mortgage calculator on my tablet in a comfortable way. (**'Responsive design'**)
* **US4:** As a user I want to enter my income information by using a slider instead of using a textfield.

## Extra information

* For this assignment Rabobank has developed a **UX** design that has to be leading during implementation.
* The calculation rule for the maximum mortgage is 4,5 * (users gross yearly income + partners gross yearly income).
* The mortgage calculator should have a look and feel based on the Rabobank styleguide as enclosed in the assignment resources (colors / logo).
* The text that describes the mortgage conditions are included in the assignment resources.
* Make sure that throughout your whole application you implement a decent error handling for failing http services and faulty user input etc.

