export class UserInfo {
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

    // TODO implement builder pattern
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
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