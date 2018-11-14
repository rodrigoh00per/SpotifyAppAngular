import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.css"]
})
export class TarjetasComponent implements OnInit {
  @Input()
  items: any[];
  constructor(private _router: Router) {
    this.items = [];
  }

  ngOnInit() {}
  verArtista(item: any) {
    let id;
    console.log(item);
    if (item.type == "album") {
      id = item.artists[0].id;
      this._router.navigate(["artist", id]);
    } else {
      id = item.id;
      this._router.navigate(["artist", id]);
    }
    console.log(id);
  }
}
