import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TestComponent } from '../test/test.component';

const appRoutes: Routes = [
  { path: 'test',        component: TestComponent },
  { path: '',   redirectTo: '/test', pathMatch: 'full' },
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
