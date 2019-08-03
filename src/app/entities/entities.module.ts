import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { EntitiesComponent } from "./entities.component";
import { EntitiesRoutingModule } from "./entities-routing.module";

@NgModule({
  declarations: [EntitiesComponent],
  imports: [CommonModule, EntitiesRoutingModule],
  providers:[DatePipe]
})
export class EntitiesModule {}
