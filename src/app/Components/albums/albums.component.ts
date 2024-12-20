import { Component } from '@angular/core';
import {AlbumsService} from "../Services/albums.service";
import {Album} from "../../Models/Album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  album: Album[] = [];


  constructor(private _menu: AlbumsService) {
    // Access the menu array directly from the injected service instance
    this.album = this._menu.albums;
  }
  filterByArchived() {
    // Filters the menu where the 'approved' property is true
    return this.album.filter((p) => p.archived === 0);
  }

}
