export class VenueMesiFilter {
    hasKnownStatus: boolean;
    hasEspacePoussette: boolean;
    hasTableLanger: boolean;
    hasTableLangerMen: boolean;
    hasMenuEnfant: boolean;
    hasEspaceJeu: boolean;

    constructor() {
        this.reset();
    }

    reset() {
        this.hasKnownStatus = false;
        this.hasEspacePoussette = false;
        this.hasTableLanger = false;
        this.hasTableLangerMen = false;
        this.hasMenuEnfant = false;
        this.hasEspaceJeu = false;
    }

}