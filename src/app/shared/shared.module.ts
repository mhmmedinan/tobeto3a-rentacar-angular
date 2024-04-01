import { NgModule } from "@angular/core";
import { FilterModelPipe } from "./pipes/filter-model-pipe.pipe";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { MenubarModule } from "primeng/menubar";
import { FilterBrandPipe } from "./pipes/filter-brand-pipe.pipe";


@NgModule({
    declarations:[FilterModelPipe,NavbarComponent,FilterBrandPipe],
    exports:[NavbarComponent,FilterModelPipe,FilterBrandPipe],
    imports:[MenubarModule,CommonModule]

})
export class SharedModule{}