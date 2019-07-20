import { Injectable } from '@angular/core';
import { VenueMesi } from './venue-mesi';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenueMesiService {
  private venueMesiApiAddress = 'http://localhost:8000';

  constructor() { }
}
