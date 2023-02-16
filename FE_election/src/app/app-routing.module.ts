import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
 
  { path:'etudiant',component: DummyComponent },
  { path:'candidateur',component: DummyComponent },
  { path:'centre_vote',component: DummyComponent },
  { path:'sign up',component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
