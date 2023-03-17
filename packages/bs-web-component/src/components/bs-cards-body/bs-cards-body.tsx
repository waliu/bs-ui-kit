import {Component, Host, h, Prop} from '@stencil/core';
import {BSThemeType} from "../bs-cards/bs-cards";

@Component({
  tag: 'bs-cards-body',
  styleUrl: 'bs-cards-body.scss',
  shadow: true,
})
export class BsCardsBody {

  /**
   * 标题
   */
  @Prop() bodyTitle: string = null;
  /**
   * 副标题
   */
  @Prop() subtitles: string = null;
  /**
   * 描述
   */
  @Prop() desc: string = null;
  /**
   * 字体颜色
   */
  @Prop() textType: BSThemeType = null;
  /**
   * 组件 class 样式
   */
  @Prop({attribute: 'class', reflect: true}) class: string = "";

  render() {
    return (
      <Host class={this.class}>
        <div class={
          `card-body
          ${this.textType && this.textType.length > 0 ? " text-" + this.textType : ''}
          `
        }>
          {this.bodyTitle && this.bodyTitle.length > 0 ? <h5 class="card-title">{this.bodyTitle}</h5> : ''}
          {this.subtitles && this.subtitles.length > 0 ?
            <h6 class="card-subtitle mb-2 text-muted">{this.subtitles}</h6> : ''}
          {this.desc && this.desc.length > 0 ? <p class="card-text">{this.desc}</p> : ''}
          <slot></slot>
        </div>
      </Host>
    );
  }

}

