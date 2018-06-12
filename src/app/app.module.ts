import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsComponent } from './components/components.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { DirectivesDirective } from './directives.directive';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomDirectiveExampleComponent } from './custom-directive-example/custom-directive-example.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { PipeNamePipe } from './pipe-name.pipe';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { DataBindingsLabsComponent } from './data-bindings-labs/data-bindings-labs.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsService } from './shared/products.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComponentsComponent,
    SwitchComponentComponent,
    ProductCartComponent,
    DirectivesDirective,
    CustomDirectiveDirective,
    CustomDirectiveExampleComponent,
    TableComponentComponent,
    PipeExampleComponent,
    PipeNamePipe,
    TemplateInterpolationComponent,
    DataBindingsLabsComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
