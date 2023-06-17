import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Configuration des routes de l'application
const routes: Routes = [
  {
    path: 'home',// Chemin d'accès pour la page "home"
    // Chargement paresseux du module de la page "home"
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',// Chemin d'accès par défaut
    redirectTo: 'home',// Redirection vers la page "home"
    pathMatch: 'full' // Correspondance complète du chemin
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
];
// Configuration du module de routage avec les routes définies
@NgModule({
  imports: [
    // Configuration du module de routage avec les routes définies
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]// Exportation du module de routage pour une utilisation dans d'autres modules
})
export class AppRoutingModule { }
