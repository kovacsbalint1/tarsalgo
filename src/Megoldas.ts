import fs from "fs";
import Szemely from "./Szemely";

export default class Megoldas {
    private _szemelyek: Szemely[] = [];

    public _ElsoEmberAkiBelepett(): number {
        return this._szemelyek[0].Id;
    }
    public _UtolsoEmberAkiBelepett(): number {
        return this._szemelyek[this._szemelyek.length].Id;
    }
    constructor(file: string) {
        fs.readFileSync(file)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this._szemelyek.push(new Szemely(aktSor));
            });
    }
}
