import os
import json

data = {}
data['albums'] = {}
albums = os.fsencode('photos')
for album in os.listdir(albums):
	album_name = os.fsdecode(album);
	data['albums'][album_name] ={
	'title': album_name,
	'photos': []
	}
	for photo in os.listdir(os.path.join(albums,album)):
		photo_name = os.fsdecode(photo)
		data['albums'][album_name]['photos'].append({
			'title': photo_name,
			'album': album_name,
			'src': 'photos/'+album_name+'/'+photo_name,
			'thmbnl': 'photos/'+album_name+'/'+photo_name,
			})
with open('data.JSON','w') as outfile:
	json.dump(data,outfile)
