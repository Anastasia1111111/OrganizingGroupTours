import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
// import { InMemoryDataService } from './app/in-memory-data.service';
// import { environment } from './environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // Подключаем мок‑API только в dev
    // ...(environment.production
    //   ? []
    //   : [
    //       importProvidersFrom(
    //         HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //           delay: 400,                 // эмуляция задержки
    //           dataEncapsulation: false,   // возвращать «сырые» данные без обёртки {data: ...}
    //           passThruUnknownUrl: true    // пропускать незнакомые URL к реальному серверу (если есть)
    //         })
    //       )
    //     ])
  ]
}).catch(err => console.error(err));
