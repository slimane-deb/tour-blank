import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // {
    // path: 'places',
    // children: [
    //   {
    //     path: '',
    //     loadChildren: './pages/places/places.module#PlacesPageModule'
    //   },
    //   {
    //     path: ':placeId',
    //     loadChildren: './pages/places/place-detail/place-detail.module#PlaceDetailPageModule'
    //   }
    // ]
  // },
  { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: 'places',
    children: [
      {
        path: '',
        loadChildren: './pages/places/places.module#PlacesPageModule'
      }
    ]
  },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
