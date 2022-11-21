//Start of Class Account Type
class AccountType {
    #id
    #type

    //Start of Getters
    get id() { 
        return this.#id 
    }
    get type() { 
        return this.#type 
    }
    //End of Getters

    //Start of Setters
    set type(value) { 
        this.#type = value
    }
    set id(value) { 
        this.#id = value
    }
    //End of Setters

    //Start of Constructor
    constructor(type, id) {
        this.#type = type;
        this.#id = id;
    }
    //End of Constructor
}
//End of Class Account Type
