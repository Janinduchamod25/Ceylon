import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import {HomeComponent} from "./components/home/home.component";
import {BlogComponent} from "./components/blog/blog.component";
import { ChatComponent } from './components/chat/chat.component';
import { AboutComponent } from './components/about/about.component';
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {LoginComponent} from "./components/login/login.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CeylonComponent } from './components/ceylon/ceylon.component';
import { AlbumComponent } from './components/album/album.component';
import { AncientComponent } from './components/album/ancient/ancient.component';
import {AnimalsComponent} from "./components/album/animals/animals.component";
import {ArchitectureComponent} from "./components/album/architecture/architecture.component";
import {BeachComponent} from "./components/album/beach/beach.component";
import {CultureComponent} from "./components/album/culture/culture.component";
import {EnvironmentComponent} from "./components/album/environment/environment.component";
import {FoodComponent} from "./components/album/food/food.component";
import {GardensComponent} from "./components/album/gardens/gardens.component";
import {HistoryComponent} from "./components/album/history/history.component";
import {RiverComponent} from "./components/album/river/river.component";
import { TreeComponent } from './components/album/tree/tree.component';
import { WaterfallComponent } from './components/album/waterfall/waterfall.component';
import { TravelComponent } from './components/travel/travel.component';

let riverComponent;
const routes: Routes = [
  {path: '', redirectTo: '/ceylon', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'features', component:FeaturesComponent},
  {path:'blog', component:BlogComponent},
  {path:'chat', component:ChatComponent},
  {path:'about', component:AboutComponent},
  {path:'notifications', component:NotificationsComponent},
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'ceylon', component:CeylonComponent},
  {path:'travel', component:TravelComponent},
  {path:'album', component:AlbumComponent, children:[
      {path:'ancient', component:AncientComponent},
      {path:'animals', component:AnimalsComponent},
      {path:'architecture', component:ArchitectureComponent},
      {path:'beach', component:BeachComponent},
      {path:'culture', component:CultureComponent},
      {path:'environment', component:EnvironmentComponent},
      {path:'food', component:FoodComponent},
      {path:'gardens', component:GardensComponent},
      {path:'history', component:HistoryComponent},
      {path:'river', component:RiverComponent},
      {path:'tree', component:TreeComponent},
      {path:'waterfall', component:WaterfallComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
