import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './common/guards/jwt.interception';
import { ToastrModule } from 'ngx-toastr';
import { DemoMaterialModule } from './shared/material/material.module';
 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,DemoMaterialModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    //   useValue: "/"
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
