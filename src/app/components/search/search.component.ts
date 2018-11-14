import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  private artistas: any[];
  private loading: boolean;
  constructor(private _spotifyService: SpotifyService) {
    this.artistas = [];
  }
 
  ngOnInit() {}

  buscar(valorbusqueda: string) {
    this.loading = true;
    this._spotifyService.getArtistas(valorbusqueda).subscribe(
      (resBus: any) => {
        this.artistas = resBus;
        this.loading = false;
        console.log(resBus);
      },
      error => {
        console.log(error);
      }
    );
  }
}
