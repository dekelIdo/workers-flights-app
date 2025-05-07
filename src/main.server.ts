import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

export default function render(): Promise<string> {
  return bootstrapApplication(AppComponent, appConfig)
    .then((appRef) => {
      // כאן ניתן להחזיר HTML ידני אם רוצים
      return '<html><body><app-root>Server Rendered</app-root></body></html>';
    });
}
