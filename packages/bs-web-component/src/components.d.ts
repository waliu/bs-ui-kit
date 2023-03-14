/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BSThemeType } from "./components/bs-alert/bs-alert";
import { BSThemeType as BSThemeType1 } from "./components/bs-alert/bs-alert";
import { BSSizeType } from "./components/bs-button/bs-button";
export { BSThemeType } from "./components/bs-alert/bs-alert";
export { BSThemeType as BSThemeType1 } from "./components/bs-alert/bs-alert";
export { BSSizeType } from "./components/bs-button/bs-button";
export namespace Components {
    interface BsAlert {
        /**
          * 样式文件
         */
        "class": string;
        /**
          * 是否显示关闭按钮
         */
        "dismissible": boolean;
        /**
          * 消息内容
         */
        "message": string;
        /**
          * 显示一个图标
         */
        "showIcon": string;
        /**
          * 弹窗类型
         */
        "type": BSThemeType;
    }
    interface BsButton {
        /**
          * 组件 class 样式
         */
        "class": string;
        /**
          * 是否为禁用状态
         */
        "disabled": boolean;
        /**
          * 样式
         */
        "outline": boolean;
        /**
          * 大小
         */
        "size": BSSizeType;
        /**
          * 主题色
         */
        "type": BSThemeType1;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface BsAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBsAlertElement;
}
declare global {
    interface HTMLBsAlertElement extends Components.BsAlert, HTMLStencilElement {
    }
    var HTMLBsAlertElement: {
        prototype: HTMLBsAlertElement;
        new (): HTMLBsAlertElement;
    };
    interface HTMLBsButtonElement extends Components.BsButton, HTMLStencilElement {
    }
    var HTMLBsButtonElement: {
        prototype: HTMLBsButtonElement;
        new (): HTMLBsButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "bs-alert": HTMLBsAlertElement;
        "bs-button": HTMLBsButtonElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface BsAlert {
        /**
          * 样式文件
         */
        "class"?: string;
        /**
          * 是否显示关闭按钮
         */
        "dismissible"?: boolean;
        /**
          * 消息内容
         */
        "message"?: string;
        /**
          * 关闭事件
         */
        "onBsOnClose"?: (event: BsAlertCustomEvent<void>) => void;
        /**
          * 显示一个图标
         */
        "showIcon"?: string;
        /**
          * 弹窗类型
         */
        "type"?: BSThemeType;
    }
    interface BsButton {
        /**
          * 组件 class 样式
         */
        "class"?: string;
        /**
          * 是否为禁用状态
         */
        "disabled"?: boolean;
        /**
          * 样式
         */
        "outline"?: boolean;
        /**
          * 大小
         */
        "size"?: BSSizeType;
        /**
          * 主题色
         */
        "type"?: BSThemeType1;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "bs-alert": BsAlert;
        "bs-button": BsButton;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bs-alert": LocalJSX.BsAlert & JSXBase.HTMLAttributes<HTMLBsAlertElement>;
            "bs-button": LocalJSX.BsButton & JSXBase.HTMLAttributes<HTMLBsButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
