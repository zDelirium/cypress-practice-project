import { AppConstants } from "../constants/Constants";

export default class UserInfo {

    static UserBuilder = class {
        initEmail: string;
        initPassword: string;
        initFirstName: string;
        initLastName: string;
        initAddress: string;
        initCity: string;
        initState:string = AppConstants.DROPDOWN_INVALID_VALUE;
        initZipCode: string;
        initCountry: string = AppConstants.DROPDOWN_INVALID_VALUE;
        initMobilePhoneNumber: string;

        build() : UserInfo {
            return new UserInfo(this);
        }

        email(email: string) : typeof UserInfo.UserBuilder.prototype {
            this.initEmail = email;
            return this;
        }

        password(password: string) : typeof UserInfo.UserBuilder.prototype {
            this.initPassword = password;
            return this;
        }

        firstName(firstName: string) : typeof UserInfo.UserBuilder.prototype {
            this.initFirstName = firstName;
            return this;
        }

        lastName(lastName: string) : typeof UserInfo.UserBuilder.prototype {
            this.initLastName = lastName;
            return this;
        }

        address(address: string) : typeof UserInfo.UserBuilder.prototype {
            this.initAddress = address;
            return this;
        }

        city(city: string) : typeof UserInfo.UserBuilder.prototype {
            this.initCity = city;
            return this;
        }

        state(state: string) : typeof UserInfo.UserBuilder.prototype {
            this.initState = state;
            return this;
        }

        zipCode(zipCode: string) : typeof UserInfo.UserBuilder.prototype {
            this.initZipCode = zipCode;
            return this;
        }

        country(country: string) : typeof UserInfo.UserBuilder.prototype {
            this.initCountry = country;
            return this;
        }

        mobilePhoneNumber(mobilePhoneNumber: string) : typeof UserInfo.UserBuilder.prototype {
            this.initMobilePhoneNumber = mobilePhoneNumber;
            return this;
        }

    };

    private email: string;
    private password: string;
    private firstName: string;
    private lastName: string;
    private address: string;
    private city: string;
    private state: string;
    private zipCode: string;
    private country: string;
    private mobilePhoneNumber: string;

    constructor(builder: typeof UserInfo.UserBuilder.prototype) {
        this.email = builder.initEmail;
        this.password = builder.initPassword;
        this.firstName = builder.initFirstName;
        this.lastName = builder.initLastName;
        this.address = builder.initAddress;
        this.city = builder.initCity;
        this.state = builder.initState
        this.zipCode = builder.initZipCode;
        this.country = builder.initCountry;
        this.mobilePhoneNumber = builder.initMobilePhoneNumber;
    }

    // Getters
    getEmail() : string { 
        return this.email; 
    }

    getPassword() : string { 
        return this.password; 
    }

    getFirstName() : string  {
        return this.firstName; 
    }

    getLastName() : string {
        return this.lastName;
    }

    getAddress() : string { 
        return this.address; 
    }
    getCity() : string { 
        return this.city; 
    }

    getState() : string { 
        return this.state; 
    }

    getZipCode() : string { 
        return this.zipCode; 
    }

    getCountry() : string { 
        return this.country; 
    }

    getMobilePhoneNumber() : string { 
        return this.mobilePhoneNumber; 
    }

}