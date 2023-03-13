import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TaskComponent } from 'src/app/cms/pages/task/task.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        component: TaskComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CmsRoutingModule { }
