import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getNewReleases(){
    const headers=new HttpHeaders({
      'Authorization':'Bearer BQDNme_JuAjrGGmVx3IMSZarq4XXCncULiPrlIPfIRwTLCWRRFHtn6MxZdelvXURwv43B1wjScHCHkkMMe0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
  }
}
