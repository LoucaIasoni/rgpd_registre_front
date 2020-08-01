import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EmbedVideo } from 'ngx-embed-video';
import { HomeComponent } from './components/home/home.components';
import { LoginComponent } from './components/login/login.component';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { TopUserProfileComponent } from './components/top-user-profile/top-user-profile.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolBarComponent } from './components/home/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolBarComponent,
    LoginComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    FooterComponent,
    TopUserProfileComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, 
    PdfViewerModule,
    AgmJsMarkerClustererModule,
    EmbedVideo.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBoupdFuFNMndY872FX5JXTWGmRWYO23GU'}),
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
