import {Component, Host, h, Prop} from '@stencil/core';
import {BSSizeType, BSThemeType} from "../../global/type-script/bs-type";

@Component({
  tag: 'bs-pagination',
  styleUrl: 'bs-pagination.scss',
  shadow: true,
})
export class BsPagination {

  /**
   * 主题色
   */
  @Prop() type: BSThemeType = null;
  /**
   * 样式
   */
  @Prop() outline: boolean = false;
  /**
   * 大小
   */
  @Prop() size: BSSizeType = null;
  /**
   * 是否为禁用状态
   */
  @Prop() disabled: boolean = false;
  /**
   * 组件 class 样式
   */
  @Prop({attribute: 'class', reflect: true}) class: string = "";

  render() {
    return (
      <Host class={this.class}>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
          <slot></slot>
        </nav>
      </Host>
    );
  }

}
