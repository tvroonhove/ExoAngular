import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoDirectiveComponent } from './components/exo-directive/exo-directive.component';
import { ExoDirectiveStructComponent } from './components/exo-directive-struct/exo-directive-struct.component';
import { ExoRdmColorDirective } from './directives/exo-rdm-color.directive';
import { ChronoComponent } from './components/chrono/chrono.component';
import { ConvertSecPipe } from './pipes/convert-sec.pipe';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './components/exo/exo.component';
import { ExoAccueilComponent } from './components/exo-accueil/exo-accueil.component';
import { RoutingComponent } from './components/routing/routing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StockManagerComponent } from './components/stock-manager/stock-manager.component';
import { InventaireComponent } from './components/stock-manager/inventaire/inventaire.component';
import { EnVenteComponent } from './components/stock-manager/en-vente/en-vente.component';
import { ExoNamesComponent } from './components/exo-names/exo-names.component';
import { ExoNamesFormComponent } from './components/exo-names/exo-names-form/exo-names-form.component';
import { ExoNamesListComponent } from './components/exo-names/exo-names-list/exo-names-list.component';
import {NameService} from "../services/name.service";
import { PizzaComponent } from './components/pizza/pizza.component';
import {PizzaService} from "../services/pizza.service";
import {ShoppingListService} from "../services/shopping-list.service";
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    ExoDirectiveComponent,
    ExoDirectiveStructComponent,
    ExoRdmColorDirective,
    ConvertSecPipe,
    ChronoComponent,
    ExoComponent,
    ExoAccueilComponent,
    RoutingComponent,
    StockManagerComponent,
    InventaireComponent,
    EnVenteComponent,
    ExoNamesComponent,
    ExoNamesFormComponent,
    ExoNamesListComponent,
    PizzaComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    NameService,
    PizzaService,
    ShoppingListService
  ]
})
export class ExoModule { }
