//Start of Class Client Type
class ClientType {
    #id
    #type
    #description

    //Start of Getters
    get id() {
        return this.#id;
    }
    get type() {
        return this.#type;
    }
    get description() {
        return this.#description;
    }
    //End of Getters

    //Start of Setters
    set id(value) {
        this.#id = value;
    }
    set type(value) {
        this.#type = value;
    }
    set description(value) {
        this.#description = value;
    }
    //End of Setters

    //Start of Constructor
    constructor(type, id, description) {
        this.#type = type;
        this.#id = id;
        this.#description = description;
    }
    //End of Constructor

}
//End of Class Client Type