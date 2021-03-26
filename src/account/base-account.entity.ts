export abstract class BaseAccount {
    private _number: number;
    private _owner: string;

    constructor(accountNumber: number, owner: string) {
        this._number = accountNumber;
        this._owner = owner;
    }
}