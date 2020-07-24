import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private snackBar: MatSnackBar,
    ) { }
// SnackBar lors d'une création ou d'une supression  
  openSnackBar(message: string, panelclassarg? : string) {
    let config = new MatSnackBarConfig();
    config.duration = 2000;
    config.verticalPosition = 'top';
    config.panelClass = [panelclassarg]
    this.snackBar.open(message, 'Fermer', config);
  }
}
