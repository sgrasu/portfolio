import { Component } from '@angular/core';
import {environment} from '../../environments/environment';
import{ Album } from '../album.model';
import { Photo } from '../photo.model';
import { ConfigService } from '../services/config.service';
import { Masonry } from 'ng-masonry-grid';

@Component({
  selector: 'app-photopage',
  templateUrl: './photopage.component.html',
  styleUrls: ['./photopage.component.css']
})
export class PhotopageComponent {
  title = 'app';
  photos_uri: string = environment.photos_uri;
  albums: Array<Album> = [];
  data: Object;
  filter = "any";
  photos: Array<Photo> = [];
  _masonry: Masonry;
  masonryItems: any[];
  onNgMasonryInit($event: Masonry) {
  	this._masonry = $event;
  }
  shuffle(array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	  }

	  return array;
	}
  	constructor(private configService:ConfigService){
	  	this.configService.getData().subscribe(data => {
	  		var tempPhotos = [];
	  		this.data = data;
	  		console.log(this.photos_uri);
	  		for( var album in data['albums'])
	  		{

	  			this.albums.push(new Album(data['albums'][album].title,
	  				data['albums'][album].photos));
	  			for(var index in data['albums'][album].photos){
	  				var photo = data['albums'][album].photos[index];
	  				tempPhotos.push(new Photo(photo['title'],photo['album'],
	  					this.photos_uri+'/'+photo['src'],
	  					this.photos_uri+'/' + photo['thmbnl']));
	  			}
	  		}
	  		this.photos = this.shuffle(tempPhotos);
	  		console.log(this.photos);
	  	});
	  	// (<any>data).albums.forEach(json_album=>{
	  // });
	}	
	changeFilter(filter: string){
		this.filter = filter;

		console.log(filter);
		setTimeout(()=>{this._masonry.layout()},80);
		window.scrollTo(0,0);
	}

}
