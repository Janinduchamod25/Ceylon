import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FeaturesComponent } from './components/features/features.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChatComponent } from './components/chat/chat.component';
import { AboutComponent } from './components/about/about.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CeylonComponent } from './components/ceylon/ceylon.component';
import { AlbumComponent } from './components/album/album.component';
import { GardensComponent } from './components/album/gardens/gardens.component';
import { BeachComponent } from './components/album/beach/beach.component';
import { TreeComponent } from './components/album/tree/tree.component';
import { AncientComponent } from './components/album/ancient/ancient.component';
import { RiverComponent } from './components/album/river/river.component';
import { WaterfallComponent } from './components/album/waterfall/waterfall.component';
import { FoodComponent } from './components/album/food/food.component';
import { CultureComponent } from './components/album/culture/culture.component';
import { ArchitectureComponent } from './components/album/architecture/architecture.component';
import { AnimalsComponent } from './components/album/animals/animals.component';
import { HistoryComponent } from './components/album/history/history.component';
import { EnvironmentComponent } from './components/album/environment/environment.component';
import { TravelComponent } from './components/travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    BlogComponent,
    ChatComponent,
    AboutComponent,
    NotificationsComponent,
    LoginComponent,
    SignUpComponent,
    CeylonComponent,
    AlbumComponent,
    GardensComponent,
    BeachComponent,
    TreeComponent,
    AncientComponent,
    RiverComponent,
    WaterfallComponent,
    FoodComponent,
    CultureComponent,
    ArchitectureComponent,
    AnimalsComponent,
    HistoryComponent,
    EnvironmentComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
