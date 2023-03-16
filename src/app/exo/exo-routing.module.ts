import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { numberParamGuard } from "../guards/common-guards.guard";
import { ChronoComponent } from "./components/chrono/chrono.component";
import { ExoAccueilComponent } from "./components/exo-accueil/exo-accueil.component";
import { ExoDirectiveStructComponent } from "./components/exo-directive-struct/exo-directive-struct.component";
import { ExoDirectiveComponent } from "./components/exo-directive/exo-directive.component";
import { ExoComponent } from "./components/exo/exo.component";
import { RoutingComponent } from "./components/routing/routing.component";
import { StockManagerComponent } from "./components/stock-manager/stock-manager.component";
import {ExoNamesComponent} from "./components/exo-names/exo-names.component";
import {PizzaComponent} from "./components/pizza/pizza.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";


const routes: Routes = [
    { path: '', component: ExoComponent, children: [
        { path: '', redirectTo: 'accueil', pathMatch: 'full'},
        { path: 'accueil', component: ExoAccueilComponent },
        { path: 'chrono', component: ChronoComponent },
        { path: 'directive', component: ExoDirectiveComponent },
        { path: 'dir-struct', component: ExoDirectiveStructComponent },
        { path: 'routing/:nbr', component: RoutingComponent, canMatch:[numberParamGuard('nbr')] },
        { path: 'comm', component: StockManagerComponent },
        { path: 'names', component: ExoNamesComponent},
        { path: 'pizza', component: PizzaComponent},
        { path: 'shopping-list', component: ShoppingListComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
})
export class ExoRoutingModule{
}
