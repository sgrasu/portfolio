import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class ConfigService {

  dataUrl = 'assets/data.JSON'
  constructor(private http: HttpClient) { }
 getData(){
 	return this.http.get(this.dataUrl);
 }
}
