import { YelpVenue } from './yelp-venue';
import { MesiCommentaire } from './mesi-commentaire';

export class VenueMesi {
 knownStatus: boolean;
 bbFriendly: boolean; 
 yelp_id: string;
 espacePoussette: boolean;
 tableLanger: boolean;
 tableLangerMen: boolean;
 menuEnfant: boolean;
 espaceJeu: boolean;
 yelpVenue: YelpVenue;
 wcEnfant: boolean;
 chaiseHaute: boolean;
 nbCommentaires: number;
 commentaires: Array<MesiCommentaire>;
}
