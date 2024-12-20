import { Injectable } from '@angular/core';
import {Album} from "../../Models/Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }
  albums: Album[] =[]
  addAlbum(album: Album) {
    this.albums.push(album)
  }
}
