import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuieroSaberMasComponent} from './pages/quiero-saber-mas/quiero-saber-mas.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'voluntariado', component: VoluntariadoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quiero-saber-mas', component: QuieroSaberMasComponent },
];