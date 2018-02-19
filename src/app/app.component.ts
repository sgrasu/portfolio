import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import{ Album } from './album.model';
import { Photo } from './photo.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  photos_uri: string = environment.photos_uri;
  albums: Array<Album> = [];
  data: Object;
  photos: Array<Photo> = [];
  constructor(private configService:ConfigService){
  	this.configService.getData().subscribe(data => {
  		this.data = data;
  		console.log(this.photos_uri);
  		for( var album in data['albums'])
  		{

  			this.albums.push(new Album(data['albums'][album].title,
  				data['albums'][album].photos));
  			for(var index in data['albums'][album].photos){
  				var photo = data['albums'][album].photos[index];
  				this.photos.push(new Photo(photo['title'],photo['album'],
  					this.photos_uri+'/'+photo['src'],
  					this.photos_uri+'/' + photo['thmbnl']));
  			}
  		}
  		console.log(this.photos);
  	});
  	// (<any>data).albums.forEach(json_album=>{
  // });
}
}
