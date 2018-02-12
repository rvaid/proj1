import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HelpComponent} from './help/help.component'

const routes: Routes = [
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'about',
		component:AboutComponent
	},
	{
		path:'help/:id',
		component:HelpComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
