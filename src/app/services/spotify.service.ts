import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable()
export class SpotifyService {
  constructor(private _http: HttpClient) {
    console.log("servicio de spotify jalando");
  }

  getQuery(query: string) {
    const url = "https://api.spotify.com/v1/" + query;

    let headers = new HttpHeaders({
      Authorization:
        "Bearer BQB3F5k5nIElF_eh-ZlhxbN19y01ZbHAlDFr-V3-QHEqBsQleTrdN0cnojkAIDmWdKp0dQanRxWQcg3jpIaeonFfnyz2WsgC-ApF0v8x-PDZ6I7eafw6dwKIp2iCUnPRaPr11XIyDMoINkXm3g"
    });

    return this._http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    let query = "browse/new-releases?limit=20";

    return this.getQuery(query).pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }

  getArtistas(artistabus: string): Observable<any> {
    let query = `search?q=${artistabus}&type=artist&market=MX&offset=0&limit=15`;

    return this.getQuery(query).pipe(
      map(data => {
        return data["artists"].items;
      })
    );
  }

  getArtista(id: string): Observable<any> {
    let query = `artists/${id}`;
    return this.getQuery(query);
  }

  getArtistTopTracks(id: string): Observable<any> {
    let query = `artists/${id}/top-tracks?country=MX`;
    return this.getQuery(query).pipe(
      map(data => {
        return data["tracks"];
      })
    );
  }
}
