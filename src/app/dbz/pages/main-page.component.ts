import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters]; // El spread se hace porque como está en un array a pelo en el servicio pues para hacer una copia y no modificar el del servicio directamente
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }

}
