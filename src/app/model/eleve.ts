export class Eleve {
    public id : number
    static _id : number = 0

    constructor(
        public nom : string,
        public prenom : string, 
        public dateNaissance : Date,
        public lieuNaissance : string,
        public numeroTel : string,
        public email : string,
        public tuteur : string,
        public annee_scolaire : string,
        public etablissement : string,
        public niveau : string,
        public moyenne : number,
        public idDb?: string,

    ){
        this.id = Eleve._id ++
    }
}