//Start of Class Amount
class Account {
        #id
        #accountType
        #clientType
        #fullNameClient
        #DNIClient
        #amount
        #entryDate


        //Start of Getters
        get id() {
                return this.#id;
        }
        get accountType() {
                return this.#accountType;
        }
        get clientType() {
                return this.#clientType;
        }
        get fullNameClient() {
                return this.#fullNameClient;
        }
        get DNIClient() {
                return this.#DNIClient;
        }
        get amount() {
                return this.#amount;
        }
        get entryDate() {
                return this.#entryDate;
        }
        //End of Getters

        //Start of Setters
        set id(value) {
                this.#id = value;
        }
        set accountType(value) {
                this.#accountType = new AccountType(accountType);;
        }
        set clientType(value) {
                this.#clientType = new ClientType(clientType);
        }
        set fullNameClient(value) {
                this.#fullNameClient = value;
        }
        set DNIClient(value) {
                this.#DNIClient = value;
        }
        set amount(value) {
                this.#amount = value;
        }
        set entryDate(value) {
                this.#entryDate = value;
        }
        //End of Setters

        //Start ofConstructor
        constructor(id, accountType, clientType, fullNameClient, DNIClient, amount, entryDate) {
                this.#id = id;
                this.#accountType = accountType;
                this.#clientType = clientType;
                this.#fullNameClient = fullNameClient;
                this.#DNIClient = DNIClient;
                this.#amount = amount;
                this.#entryDate = entryDate;
        }
        //End of constructor

        toJSON() {
                return {
                        id : this.#id,
                        dni : this.#DNIClient,
                        name : this.#fullNameClient,
                        account : this.#accountType,
                        amount  : this.#amount,
                        client: this.#clientType,
                        entryDate : this.#entryDate
                }
        }
}
//End of Class Amount