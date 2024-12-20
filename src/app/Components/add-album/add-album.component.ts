import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlbumsService} from "../Services/albums.service";

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  constructor(private _album: AlbumsService) {
  }
  Album: FormGroup = new FormGroup({

    titre:new FormControl('',[Validators.required]),
    creationDate:new FormControl(''),
    archived:new FormControl(''),
    coverPicture:new FormControl('',[ Validators.minLength(5)]),
    photos:new FormControl('')


  })
  get titre (){
    return this.Album.get('titre') }
  get creationDate (){
    return this.Album.get('creationDate')
  }
  get archived (){
    return this.Album.get('archived')
  }
  get coverPicture(){
    return this.Album.get('coverPicture')
  }
  get photos (){
    return this.Album.get('photos')
  }
  add() {
    console.log(this.Album.value);
    const newAlbum = {
      ...this.Album.value,
      archived:0,

    };
    this._album.addAlbum(newAlbum);
    console.log('Updated album list:', this._album.albums);
    this.Album.reset();
 /* add() {
    console.log(this.Album.value);
    console.log(this.Album.getRawValue());
    /*this.residence.patchValue({
      name:'test'
    })
    console.log(this.residence.getRawValue());*/
    this.Album.reset()
  }
}
