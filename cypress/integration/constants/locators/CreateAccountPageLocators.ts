export const CreateAccountPageLocators = {
    PERSONAL_INFORMATION_FIRST_NAME_TEXT_FIELD : "//h3[text()='Your personal information']/parent::div/descendant::label[contains(text(),'First name')]/following-sibling::input",
    PERSONAL_INFORMATION_LAST_NAME_TEXT_FIELD : "//h3[text()='Your personal information']/parent::div/descendant::label[contains(text(),'Last name')]/following-sibling::input",
    PASSWORD_TEXT_FIELD : "//label[contains(text(),'Password')]/following-sibling::input", 
    ADDRESS_TEXT_FIELD : "//label[normalize-space(text())='Address']/following-sibling::input",
    CITY_TEXT_FIELD: "//label[contains(text(),'City')]/following-sibling::input",
    STATE_DROPDOWN_MENU: "//label[contains(text(),'State')]/following-sibling::div/select",
    ZIP_CODE_TEXT_FIELD: "//label[contains(text(),'Zip/Postal Code')]/following-sibling::input",
    COUNTRY_DROPDOWN_MENU: "//label[contains(text(),'Country')]/following-sibling::div/select" ,
    MOBILE_PHONE_TEXT_FIELD: "//label[contains(text(),'Mobile phone')]/following-sibling::input",

    ERROR_MESSAGE_BOX: "//div[@class='alert alert-danger']",
    REGISTER_BUTTON: "//span[contains(text(),'Register')]/parent::button"
} as const;