import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styleUrls: ["./artista.component.css"],
  providers: [SpotifyService]
})
export class ArtistaComponent implements OnInit {
  private artista: any[];
  private loading: boolean;
  private top_tracks: any[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.artista = [];
    this.top_tracks = [];
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        params.id;
        this.getArtista(params.id);
        this.getArtistTopTracks(params.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  getArtista(id: string) {
    this._spotifyService.getArtista(id).subscribe(
      (_artista: any) => {
        console.log(_artista);
        this.artista = _artista;
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  getArtistTopTracks(id: string) {
    this._spotifyService.getArtistTopTracks(id).subscribe(
      (toptracks: any) => {
        console.log(toptracks);
        this.top_tracks = toptracks;
     
      },

      error => {
        console.log(error);
      }
    );
  }
}
