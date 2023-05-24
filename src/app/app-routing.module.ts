import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { RegauthComponent } from './regauth/regauth.component';
import { SelectdomenComponent } from './selectdomen/selectdomen.component';
import { SelectshablonComponent } from './selectshablon/selectshablon.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ListcatalogComponent } from './listcatalog/listcatalog.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UsersComponent } from './users/users.component';
import { PrimerComponent } from './primer/primer.component';
import { ShapkaComponent } from './shapka/shapka.component';


const routes: Routes = [
  { path: '',redirectTo: '/info', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
  { path: 'regauth', component: RegauthComponent },
  { path: 'selectdomen', component: SelectdomenComponent },
  { path: 'selectshablon', component: SelectshablonComponent },
  { path: 'constructor', component: ConstructorComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'listcatalog', component: ListcatalogComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'users', component: UsersComponent },
  { path: 'primer', component: PrimerComponent },
  { path: 'shapka', component: ShapkaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
