import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';

const modules: any[] = [
    MatIconModule
];


@NgModule({
    imports: [CommonModule, ...modules],
    exports: [...modules]
})

export class MaterialModule {}