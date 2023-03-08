import {Component, h, Event, EventEmitter, Host, Prop} from '@stencil/core';

@Component({
  tag: 'bs-alert',
  styleUrl: 'bs-alert.scss',
  shadow: true,
})
export class BsAlert {
  /**
   * 弹窗类型
   */
  @Prop() type: string = null;
  /**
   * 是否显示关闭按钮
   */
  @Prop() dismissible: boolean = null;
  /**
   * 显示一个图标
   */
  @Prop() showIcon: string = null;
  /**
   * 消息内容
   */
  @Prop() message: string = null;
  /**
   * 样式文件
   */
  @Prop({attribute: 'class', reflect: true}) class: string = "";
  /**
   * 关闭事件
   */
  @Event({
    eventName: 'bsOnClose',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) bsOnClose: EventEmitter<void>;

  bsOnCloseHandler(event) {
    console.log(event)
    this.bsOnClose.emit();
  }

  render() {
    return (
      <Host class={this.class}>
        <div class={`alert${this.type ? " alert-" + this.type : ""}${this.dismissible ? " alert-dismissible" : ""}`}
             role="alert">
          {this.message}
          {this.dismissible ?
            <button
              class="btn-close"
              type="button"
              onClick={(event) => this.bsOnCloseHandler(event)}
            ></button> : ""
          }
          <slot/>
        </div>
      </Host>
    );
  }
}

export type BsAlertType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";

