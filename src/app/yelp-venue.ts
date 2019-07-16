import {VenueCoordinates} from './venue-coordinates';
import {YelpCategorie} from './yelp-categorie';
import {YelpLocation} from './yelp-location';

export class YelpVenue {
  id: string;
  coordinates: VenueCoordinates;
  image_url: string;
  is_closed: boolean;
  name: string;
  phone: string;
  price: string;
  rating: number;
  review_count: number;
  transactions: any;
  categories: Array<YelpCategorie>;
  location: YelpLocation;
}
