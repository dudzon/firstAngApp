import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from 'src/shared/data-storage.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage: DataStorageService) { }

  ngOnInit() { }

  onSaveData() {
    this.dataStorage.storeRecipes();
  }
  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
