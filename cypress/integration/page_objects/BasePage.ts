import { AppConstants } from "../constants/Constants";

export default class BasePage {

    protected static fillTextInTextField(textFieldLocator: string, text: string) : void {
        cy
            .xpath(textFieldLocator, {timeout : AppConstants.TIMEOUT})
            .should('be.visible').and('be.enabled')
            .clear().type(text);
    }

    protected static selectOptionInDropdown(dropdownLocator: string, selectedOption: string) : void {
        throw new Error('Method not implemented');
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