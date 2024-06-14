import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharectresComponent } from './pages/charectres/charectres.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, CharectresComponent,  SideBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  isMenuOpen = false;

  updateMenuOpen(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
  genericHamburgerLine = 'bg-zinc-600	block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ';
  toggleMenu="transition-all duration-500 ease-out bg-slate-50 fixed h-full z-[100] border-r-2 border-gray-200 pr-2 "
}
