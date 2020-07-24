export class Tuteur {
    public id : number
    static _id : number = 0

    constructor(        
        public nom : string,
        public prenom : string,
        public numero : number,
        public email : string)
        {
        this.id = Tuteur._id ++
        } 
}