import {Routes} from '@angular/router'
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';
export const appRoutes : Routes= [
    {path :'exam', component:ExamComponent},
    {path :'result', component:ResultComponent},
    {path: '', redirectTo:'/exam', pathMatch:'full'}
];