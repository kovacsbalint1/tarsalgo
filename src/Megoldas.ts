import fs from "fs";
import Szemely from "./Szemely";

export default class Megoldas {
    private _szemelyek: Szemely[] = [];

    public _ElsoEmberAkiBelepett(): number {
        return this._szemelyek[0].Id;
    }
    public _UtolsoEmberAkiBelepett(): number {
        return this._szemelyek[this._szemelyek.length - 1].Id;
    }
    private _letszam = 0;
    private _maxLetszam = 0;
    public _mikorPerc = 0;
    public _mikorOra = 0;
    public _LegtobbenEgyszerreMikor(): void {
        for (let i = 0; i <= this._szemelyek.length - 1; i++) {
            if (this._szemelyek[i].Irány == "be") {
                this._letszam++;
            } else {
                this._letszam--;
            }
            if (this._letszam > this._maxLetszam) {
                this._maxLetszam = this._letszam;
                this._mikorOra = this._szemelyek[i].Óra;
                this._mikorPerc = this._szemelyek[i].Perc;
            }
        }
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
