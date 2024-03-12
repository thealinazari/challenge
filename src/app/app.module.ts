import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './core/services/mock-service/mock.service';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutDirective } from './core/directives/clickOut/click-out.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService, {
      dataEncapsulation: false,
    }),

    // directives
    ClickOutDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
