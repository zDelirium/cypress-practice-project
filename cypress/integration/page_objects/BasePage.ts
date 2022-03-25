import { AppConstants } from "../constants/Constants";

export default class BasePage {

    protected static fillTextInTextField(textFieldLocator: string, text: string) : void {
        cy
            .xpath(textFieldLocator, {timeout : AppConstants.TIMEOUT})
            .should('be.visible').and('be.enabled')
            .clear().type(text, { parseSpecialCharSequences: false });
    }

    protected static selectOptionInDropdown(dropdownLocator: string, selectedOption: string) : void {
        cy
            .xpath(dropdownLocator, { timeout : AppConstants.TIMEOUT })
            .should('exist').and('be.enabled')
            .select(selectedOption);
    }

    protected static clickButton(buttonLocator: string) : void {
        cy
            .xpath(buttonLocator, {timeout : AppConstants.TIMEOUT})
            .should('be.visible')
            .click();
        
    }

    protected static expectTextInElement(locator: string, text: string) : void {
        cy
            .xpath(locator, {timeout : AppConstants.TIMEOUT})
            .should('be.visible')
            .contains(text);
    }

    protected static expectElementToBeVisible(locator: string) : void {
        cy
            .xpath(locator, {timeout : AppConstants.TIMEOUT})
            .should('be.visible');
    }

    protected static expectElementToNotExist(locator: string) : void {
        cy
            .xpath(locator, {timeout : AppConstants.TIMEOUT})
            .should('not.exist');
    }

}