import {Component, Host, h, Prop} from '@stencil/core';
import {BSGroupType, BSThemeType} from "../../global/type-script/bs-type";

@Component({
  tag: 'bs-list-group',
  styleUrl: 'bs-list-group.scss',
  shadow: true,
})
export class BsListGroup {
  /**
   * 主题色
   */
  @Prop() type: BSThemeType = null;
  /**
   * 不同展示形态：flush去除除底边外边框；Numbered显示编号；horizontal：横向排序；
   */
  @Prop() GroupType: BSGroupType = null;
  /**
   * 组件 class 样式
   */
  @Prop({attribute: 'class', reflect: true}) class: string = "";

  render() {
    return (
      <Host class={this.class}>
        <ul class={
          `list-group
          ${this.GroupType && this.GroupType.length > 0 ? 'list-group-' + this.GroupType : ''}
        `}>
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
