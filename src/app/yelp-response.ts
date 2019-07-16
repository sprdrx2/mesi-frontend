import { YelpVenue } from './yelp-venue';

export interface YelpResponse {
    total: number;
    businesses: Array<YelpVenue>;
    region: any;
}
