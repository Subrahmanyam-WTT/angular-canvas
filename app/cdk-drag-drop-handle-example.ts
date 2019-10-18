import {Component} from '@angular/core';

/**
 * @title Drag&Drop with a handle
 */
@Component({
  selector: 'cdk-drag-drop-handle-example',
  templateUrl: 'cdk-drag-drop-handle-example.html',
  styleUrls: ['cdk-drag-drop-handle-example.css'],
})
export class CdkDragDropHandleExample {
  enableToolbar:boolean = false;
onBoxClick() {
  this.enableToolbar = !this.enableToolbar;
}
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */