import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { AvatarComponent } from './avatar/avatar.component';
import {MatMenuModule} from '@angular/material/menu';
import { RegauthComponent } from './regauth/regauth.component';
import {MatInputModule} from '@angular/material/input';
import { SelectdomenComponent } from './selectdomen/selectdomen.component';
import { SelectshablonComponent } from './selectshablon/selectshablon.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatGridTileHarness} from '@angular/material/grid-list/testing';
import { UserpageComponent } from './userpage/userpage.component';
import { ListcatalogComponent } from './listcatalog/listcatalog.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PrimerComponent } from './primer/primer.component';
import { ShapkaComponent } from './shapka/shapka.component';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ConstructorComponent,
    UsersComponent,
    MenuComponent,
    AvatarComponent,
    RegauthComponent,
    SelectdomenComponent,
    SelectshablonComponent,
    UserpageComponent,
    ListcatalogComponent,
    CatalogComponent,
    AddproductComponent,
    PrimerComponent,
    ShapkaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatSliderModule,
  ],
  providers: [MatGridTileHarness],
  bootstrap: [AppComponent]
})
export class AppModule { }
