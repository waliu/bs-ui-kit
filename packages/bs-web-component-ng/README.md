### 安装组件
```bash
//依赖组件项目
npm install bs-web-component
//依赖angular组件适配器
npm install bs-web-component-ng
```
### 导入组件

````ts
// 在 module 中倒入组件
import {NgModule} from '@angular/core';

import {BsWebComponentNgModule} from "bs-web-component-ng";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BsWebComponentNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
````

### 消费组件
``````html
<bs-alert
        type="secondary"
        [dismissible]="false"
        message="A simple primary alert—check it out!"
></bs-alert>
``````
