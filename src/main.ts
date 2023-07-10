import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { RootComponent } from './root/root/root.component';

bootstrapApplication(RootComponent, {
  providers: [provideProtractorTestingSupport()],
}).catch((err) => console.error(err));
