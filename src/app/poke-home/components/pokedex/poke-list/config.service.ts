import { Injectable } from '@angular/core';
import {MatPaginatorIntl } from '@angular/material/paginator';
@Injectable({
  providedIn: 'root',
})
export class Config extends MatPaginatorIntl {
 itemsPerPageLabel ="Items por pagina";
 nextPageLabel:"siguiente"
 
}