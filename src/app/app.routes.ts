import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LancamentoComponent } from './components/pages/lancamento/lancamento.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:"contato",
        component: ContatoComponent
    },
    {
        path:"dashboard",
        component: DashboardComponent
    },
    {
        path:"lancamento",
        component: LancamentoComponent
    }
];
