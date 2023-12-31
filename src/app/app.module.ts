import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BioComponent } from './components/bio/bio.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { LinksGridComponent } from './components/links-grid/links-grid.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { StatsBlockComponent } from './components/stats-block/stats-block.component';
@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    CardComponent,
    CardHeaderComponent,
    LinksGridComponent,
    SearchBarComponent,
    StatsBlockComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
