import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CmsRoutingModule } from './cms-routing.module';
import { TaskComponent } from './pages/task/task.component';
import { AdminComponent } from './pages/admin/admin.component'


@NgModule({
    declarations: [
    TaskComponent,
    AdminComponent
  ],
    imports: [
        CommonModule,
        CmsRoutingModule
    ]
})

export class CmsModule { }
