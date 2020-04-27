export default class Szemely {
    private _óra: number;
    private _perc: number;
    private _id: number;
    private _irány: string;

    public get Óra(): number {
        return this._óra;
    }
    public get Perc(): number {
        return this._perc;
    }
    public get Id(): number {
        return this._id;
    }
    public get Irány(): string {
        return this._irány;
    }

    constructor(sor: string) {
        const seged: string[] = sor.split(" ");
        this._óra = parseInt(seged[0]);
        this._perc = parseInt(seged[1]);
        this._id = parseInt(seged[2]);
        this._irány = seged[3];
    }
}
