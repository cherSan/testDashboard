import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {platformBrowser} from "@angular/platform-browser";
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
