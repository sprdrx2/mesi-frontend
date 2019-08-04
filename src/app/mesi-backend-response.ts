import { VenueMesi } from './venue-mesi';

export class MesiBackendResponse {
	bbFriendlyVenues: Array<VenueMesi>;
	bbNotFriendlyVenues: Array<VenueMesi>;
	unknownStatusVenues: Array<VenueMesi>;
}
