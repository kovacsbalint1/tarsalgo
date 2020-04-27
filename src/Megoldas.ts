import fs from "fs";
import Szemely from "./Szemely";
import { strict } from "assert";

export default class Megoldas {
    private _szemelyek: Szemely[] = [];

    public _ElsoEsUtolsoEmberAkiBelepett(){
        
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
