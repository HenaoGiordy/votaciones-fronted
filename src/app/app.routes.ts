import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:"login", component:LoginComponent
    },
    {
        path:"admin", loadComponent : () => import('./core/admin/admin.component'),
        children: [
            {
                path: "dashboard", loadComponent: () => import('./core/admin/dashboard/dashboard.component')
            },
            {
                path: "candidatos", loadComponent : () => import('./core/admin/candidatos/candidatos.component')
            },
            {
                path:"**", redirectTo:"dashboard", pathMatch: "full"
            }
        ]
    },
    {
        path:"**", redirectTo:"/login", pathMatch:"full"
    }
];
