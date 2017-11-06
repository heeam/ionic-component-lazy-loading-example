import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosPage } from './todos';
import { OrderByPipeModule } from '../../pipes/order-by/order-by.module';

@NgModule({
	declarations: [
		TodosPage,
	],
	imports: [
		IonicPageModule.forChild(TodosPage),
    OrderByPipeModule,
	],
})
export class TodosPageModule {}
