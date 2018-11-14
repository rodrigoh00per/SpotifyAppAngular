import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [SpotifyService]
})
export class HomeComponent implements OnInit {
  private nuevasCanciones: any[];
  private loading:boolean;
  private error:boolean;
  private mensajeerror:string;
  constructor(private _spotifyService: SpotifyService) {
    this.nuevasCanciones = [];
  this.error=false;
  }

  ngOnInit() {
    this.loading=true;
    this._spotifyService.getNewReleases().subscribe(
      (releases: any) => {
        this.nuevasCanciones = releases;
this.loading=false;
        console.log(this.nuevasCanciones);
      },
      err => {
        console.log(err.error.error.message);
        this.error=true;
        this.mensajeerror=err.error.error.message;
      }
    );
 
  }
}

//CODIGO DE CONSUMO BASICO DE UN API
/*private pais:any[];
  constructor(private _http: HttpClient) {
    this._http.get("https://restcountries.eu/rest/v2/lang/es").subscribe(
      (res:any) => {
        this.pais=res;
        console.log(this.pais);
      },
      error => {
        console.log(error);
      }
    );
  }*/
