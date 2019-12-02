import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { LogInComponent } from '../log-in/log-in.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { OrderNewComponent } from '../order-new/order-new.component';
import { OrderEditComponent } from '../order-edit/order-edit.component';
import { UserRole } from 'src/domain/user-role';
import { RoleGuard } from '../guard/role.guard';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LogInComponent,
    data: {
      roles: [UserRole.Guest],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'orders',
    component: OrderListComponent,
    data: {
      roles: [UserRole.Admin, UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'orders/new',
    component: OrderNewComponent,
    data: {
      roles: [UserRole.User],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'orders/:id',
    component: OrderDetailComponent,
  },
  {
    path: 'orders/:id/edit',
    component: OrderEditComponent,
    data: {
      roles: [UserRole.Admin],
    },
    canActivate: [RoleGuard],
  },
  {
    path: 'products',
    component: ProductListComponent,
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
