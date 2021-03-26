export declare abstract class BaseAccount {
    private _number;
    private _owner;
    constructor(accountNumber: number, owner: string);
    getDescription(): string;
}
