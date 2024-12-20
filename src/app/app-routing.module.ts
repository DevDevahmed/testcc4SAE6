import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from "./Components/albums/albums.component";
import {AddAlbumComponent} from "./Components/add-album/add-album.component";
import {NotFoundComponent} from "./Components/not-found/not-found.component";

const routes: Routes = [
  {path:'Albums',component:AlbumsComponent},
  {path:'AjouterAlbum',component:AddAlbumComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
