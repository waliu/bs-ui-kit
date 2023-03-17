/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BSGroupType, BSSizeType, BSThemeType } from "./global/type-script/bs-type";
import { BSThemeType as BSThemeType1, Direction } from "./components/bs-cards/bs-cards";
import { BSThemeType as BSThemeType2 } from "./components/bs-cards/bs-cards";
export { BSGroupType, BSSizeType, BSThemeType } from "./global/type-script/bs-type";
export { BSThemeType as BSThemeType1, Direction } from "./components/bs-cards/bs-cards";
export { BSThemeType as BSThemeType2 } from "./components/bs-cards/bs-cards";
export namespace Components {
    interface BaNavbar {
    }
    interface BsAccordion {
    }
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
    interface BsBadge {
        /**
          * 主题色
         */
        "type": BSThemeType;
    }
    interface BsBreadcrumb {
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
        "type": BSThemeType;
    }
    interface BsCards {
        /**
          * 边框颜色
         */
        "borderType": BSThemeType1;
        /**
          * 页脚
         */
        "cardFooter": string;
        /**
          * 页眉
         */
        "cardHeader": string;
        /**
          * 组件 class 样式
         */
        "class": string;
        /**
          * 文字方向：center居中；end：居右；
         */
        "direction": Direction;
        /**
          * 字体颜色
         */
        "textType": BSThemeType1;
        /**
          * 图片url
         */
        "thumb": string;
        /**
          * 主题色
         */
        "type": BSThemeType1;
    }
    interface BsCardsBody {
        /**
          * 标题
         */
        "bodyTitle": string;
        /**
          * 组件 class 样式
         */
        "class": string;
        /**
          * 描述
         */
        "desc": string;
        /**
          * 副标题
         */
        "subtitles": string;
        /**
          * 字体颜色
         */
        "textType": BSThemeType2;
    }
    interface BsCarousel {
    }
    interface BsCollapse {
    }
    interface BsFormControls {
        "label": string;
    }
    interface BsInput {
        /**
          * 输入前的提示内容
         */
        "placeholder": string;
        /**
          * 类型
         */
        "type": string;
    }
    interface BsListGroup {
        /**
          * 不同展示形态：flush去除除底边外边框；Numbered显示编号；horizontal：横向排序；
         */
        "GroupType": BSGroupType;
        /**
          * 组件 class 样式
         */
        "class": string;
        /**
          * 主题色
         */
        "type": BSThemeType;
    }
    interface BsListGroupItem {
        /**
          * 主题色
         */
        "type": BSThemeType;
    }
    interface BsPagination {
    }
    interface BsPlaceholders {
    }
    interface BsPopovers {
    }
    interface BsScrollspy {
    }
    interface BsSpinners {
    }
    interface BsToasts {
    }
    interface BsTooltips {
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
    interface HTMLBaNavbarElement extends Components.BaNavbar, HTMLStencilElement {
    }
    var HTMLBaNavbarElement: {
        prototype: HTMLBaNavbarElement;
        new (): HTMLBaNavbarElement;
    };
    interface HTMLBsAccordionElement extends Components.BsAccordion, HTMLStencilElement {
    }
    var HTMLBsAccordionElement: {
        prototype: HTMLBsAccordionElement;
        new (): HTMLBsAccordionElement;
    };
    interface HTMLBsAlertElement extends Components.BsAlert, HTMLStencilElement {
    }
    var HTMLBsAlertElement: {
        prototype: HTMLBsAlertElement;
        new (): HTMLBsAlertElement;
    };
    interface HTMLBsBadgeElement extends Components.BsBadge, HTMLStencilElement {
    }
    var HTMLBsBadgeElement: {
        prototype: HTMLBsBadgeElement;
        new (): HTMLBsBadgeElement;
    };
    interface HTMLBsBreadcrumbElement extends Components.BsBreadcrumb, HTMLStencilElement {
    }
    var HTMLBsBreadcrumbElement: {
        prototype: HTMLBsBreadcrumbElement;
        new (): HTMLBsBreadcrumbElement;
    };
    interface HTMLBsButtonElement extends Components.BsButton, HTMLStencilElement {
    }
    var HTMLBsButtonElement: {
        prototype: HTMLBsButtonElement;
        new (): HTMLBsButtonElement;
    };
    interface HTMLBsCardsElement extends Components.BsCards, HTMLStencilElement {
    }
    var HTMLBsCardsElement: {
        prototype: HTMLBsCardsElement;
        new (): HTMLBsCardsElement;
    };
    interface HTMLBsCardsBodyElement extends Components.BsCardsBody, HTMLStencilElement {
    }
    var HTMLBsCardsBodyElement: {
        prototype: HTMLBsCardsBodyElement;
        new (): HTMLBsCardsBodyElement;
    };
    interface HTMLBsCarouselElement extends Components.BsCarousel, HTMLStencilElement {
    }
    var HTMLBsCarouselElement: {
        prototype: HTMLBsCarouselElement;
        new (): HTMLBsCarouselElement;
    };
    interface HTMLBsCollapseElement extends Components.BsCollapse, HTMLStencilElement {
    }
    var HTMLBsCollapseElement: {
        prototype: HTMLBsCollapseElement;
        new (): HTMLBsCollapseElement;
    };
    interface HTMLBsFormControlsElement extends Components.BsFormControls, HTMLStencilElement {
    }
    var HTMLBsFormControlsElement: {
        prototype: HTMLBsFormControlsElement;
        new (): HTMLBsFormControlsElement;
    };
    interface HTMLBsInputElement extends Components.BsInput, HTMLStencilElement {
    }
    var HTMLBsInputElement: {
        prototype: HTMLBsInputElement;
        new (): HTMLBsInputElement;
    };
    interface HTMLBsListGroupElement extends Components.BsListGroup, HTMLStencilElement {
    }
    var HTMLBsListGroupElement: {
        prototype: HTMLBsListGroupElement;
        new (): HTMLBsListGroupElement;
    };
    interface HTMLBsListGroupItemElement extends Components.BsListGroupItem, HTMLStencilElement {
    }
    var HTMLBsListGroupItemElement: {
        prototype: HTMLBsListGroupItemElement;
        new (): HTMLBsListGroupItemElement;
    };
    interface HTMLBsPaginationElement extends Components.BsPagination, HTMLStencilElement {
    }
    var HTMLBsPaginationElement: {
        prototype: HTMLBsPaginationElement;
        new (): HTMLBsPaginationElement;
    };
    interface HTMLBsPlaceholdersElement extends Components.BsPlaceholders, HTMLStencilElement {
    }
    var HTMLBsPlaceholdersElement: {
        prototype: HTMLBsPlaceholdersElement;
        new (): HTMLBsPlaceholdersElement;
    };
    interface HTMLBsPopoversElement extends Components.BsPopovers, HTMLStencilElement {
    }
    var HTMLBsPopoversElement: {
        prototype: HTMLBsPopoversElement;
        new (): HTMLBsPopoversElement;
    };
    interface HTMLBsScrollspyElement extends Components.BsScrollspy, HTMLStencilElement {
    }
    var HTMLBsScrollspyElement: {
        prototype: HTMLBsScrollspyElement;
        new (): HTMLBsScrollspyElement;
    };
    interface HTMLBsSpinnersElement extends Components.BsSpinners, HTMLStencilElement {
    }
    var HTMLBsSpinnersElement: {
        prototype: HTMLBsSpinnersElement;
        new (): HTMLBsSpinnersElement;
    };
    interface HTMLBsToastsElement extends Components.BsToasts, HTMLStencilElement {
    }
    var HTMLBsToastsElement: {
        prototype: HTMLBsToastsElement;
        new (): HTMLBsToastsElement;
    };
    interface HTMLBsTooltipsElement extends Components.BsTooltips, HTMLStencilElement {
    }
    var HTMLBsTooltipsElement: {
        prototype: HTMLBsTooltipsElement;
        new (): HTMLBsTooltipsElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ba-navbar": HTMLBaNavbarElement;
        "bs-accordion": HTMLBsAccordionElement;
        "bs-alert": HTMLBsAlertElement;
        "bs-badge": HTMLBsBadgeElement;
        "bs-breadcrumb": HTMLBsBreadcrumbElement;
        "bs-button": HTMLBsButtonElement;
        "bs-cards": HTMLBsCardsElement;
        "bs-cards-body": HTMLBsCardsBodyElement;
        "bs-carousel": HTMLBsCarouselElement;
        "bs-collapse": HTMLBsCollapseElement;
        "bs-form-controls": HTMLBsFormControlsElement;
        "bs-input": HTMLBsInputElement;
        "bs-list-group": HTMLBsListGroupElement;
        "bs-list-group-item": HTMLBsListGroupItemElement;
        "bs-pagination": HTMLBsPaginationElement;
        "bs-placeholders": HTMLBsPlaceholdersElement;
        "bs-popovers": HTMLBsPopoversElement;
        "bs-scrollspy": HTMLBsScrollspyElement;
        "bs-spinners": HTMLBsSpinnersElement;
        "bs-toasts": HTMLBsToastsElement;
        "bs-tooltips": HTMLBsTooltipsElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface BaNavbar {
    }
    interface BsAccordion {
    }
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
    interface BsBadge {
        /**
          * 主题色
         */
        "type"?: BSThemeType;
    }
    interface BsBreadcrumb {
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
        "type"?: BSThemeType;
    }
    interface BsCards {
        /**
          * 边框颜色
         */
        "borderType"?: BSThemeType1;
        /**
          * 页脚
         */
        "cardFooter"?: string;
        /**
          * 页眉
         */
        "cardHeader"?: string;
        /**
          * 组件 class 样式
         */
        "class"?: string;
        /**
          * 文字方向：center居中；end：居右；
         */
        "direction"?: Direction;
        /**
          * 字体颜色
         */
        "textType"?: BSThemeType1;
        /**
          * 图片url
         */
        "thumb"?: string;
        /**
          * 主题色
         */
        "type"?: BSThemeType1;
    }
    interface BsCardsBody {
        /**
          * 标题
         */
        "bodyTitle"?: string;
        /**
          * 组件 class 样式
         */
        "class"?: string;
        /**
          * 描述
         */
        "desc"?: string;
        /**
          * 副标题
         */
        "subtitles"?: string;
        /**
          * 字体颜色
         */
        "textType"?: BSThemeType2;
    }
    interface BsCarousel {
    }
    interface BsCollapse {
    }
    interface BsFormControls {
        "label"?: string;
    }
    interface BsInput {
        /**
          * 输入前的提示内容
         */
        "placeholder"?: string;
        /**
          * 类型
         */
        "type"?: string;
    }
    interface BsListGroup {
        /**
          * 不同展示形态：flush去除除底边外边框；Numbered显示编号；horizontal：横向排序；
         */
        "GroupType"?: BSGroupType;
        /**
          * 组件 class 样式
         */
        "class"?: string;
        /**
          * 主题色
         */
        "type"?: BSThemeType;
    }
    interface BsListGroupItem {
        /**
          * 主题色
         */
        "type"?: BSThemeType;
    }
    interface BsPagination {
    }
    interface BsPlaceholders {
    }
    interface BsPopovers {
    }
    interface BsScrollspy {
    }
    interface BsSpinners {
    }
    interface BsToasts {
    }
    interface BsTooltips {
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
        "ba-navbar": BaNavbar;
        "bs-accordion": BsAccordion;
        "bs-alert": BsAlert;
        "bs-badge": BsBadge;
        "bs-breadcrumb": BsBreadcrumb;
        "bs-button": BsButton;
        "bs-cards": BsCards;
        "bs-cards-body": BsCardsBody;
        "bs-carousel": BsCarousel;
        "bs-collapse": BsCollapse;
        "bs-form-controls": BsFormControls;
        "bs-input": BsInput;
        "bs-list-group": BsListGroup;
        "bs-list-group-item": BsListGroupItem;
        "bs-pagination": BsPagination;
        "bs-placeholders": BsPlaceholders;
        "bs-popovers": BsPopovers;
        "bs-scrollspy": BsScrollspy;
        "bs-spinners": BsSpinners;
        "bs-toasts": BsToasts;
        "bs-tooltips": BsTooltips;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ba-navbar": LocalJSX.BaNavbar & JSXBase.HTMLAttributes<HTMLBaNavbarElement>;
            "bs-accordion": LocalJSX.BsAccordion & JSXBase.HTMLAttributes<HTMLBsAccordionElement>;
            "bs-alert": LocalJSX.BsAlert & JSXBase.HTMLAttributes<HTMLBsAlertElement>;
            "bs-badge": LocalJSX.BsBadge & JSXBase.HTMLAttributes<HTMLBsBadgeElement>;
            "bs-breadcrumb": LocalJSX.BsBreadcrumb & JSXBase.HTMLAttributes<HTMLBsBreadcrumbElement>;
            "bs-button": LocalJSX.BsButton & JSXBase.HTMLAttributes<HTMLBsButtonElement>;
            "bs-cards": LocalJSX.BsCards & JSXBase.HTMLAttributes<HTMLBsCardsElement>;
            "bs-cards-body": LocalJSX.BsCardsBody & JSXBase.HTMLAttributes<HTMLBsCardsBodyElement>;
            "bs-carousel": LocalJSX.BsCarousel & JSXBase.HTMLAttributes<HTMLBsCarouselElement>;
            "bs-collapse": LocalJSX.BsCollapse & JSXBase.HTMLAttributes<HTMLBsCollapseElement>;
            "bs-form-controls": LocalJSX.BsFormControls & JSXBase.HTMLAttributes<HTMLBsFormControlsElement>;
            "bs-input": LocalJSX.BsInput & JSXBase.HTMLAttributes<HTMLBsInputElement>;
            "bs-list-group": LocalJSX.BsListGroup & JSXBase.HTMLAttributes<HTMLBsListGroupElement>;
            "bs-list-group-item": LocalJSX.BsListGroupItem & JSXBase.HTMLAttributes<HTMLBsListGroupItemElement>;
            "bs-pagination": LocalJSX.BsPagination & JSXBase.HTMLAttributes<HTMLBsPaginationElement>;
            "bs-placeholders": LocalJSX.BsPlaceholders & JSXBase.HTMLAttributes<HTMLBsPlaceholdersElement>;
            "bs-popovers": LocalJSX.BsPopovers & JSXBase.HTMLAttributes<HTMLBsPopoversElement>;
            "bs-scrollspy": LocalJSX.BsScrollspy & JSXBase.HTMLAttributes<HTMLBsScrollspyElement>;
            "bs-spinners": LocalJSX.BsSpinners & JSXBase.HTMLAttributes<HTMLBsSpinnersElement>;
            "bs-toasts": LocalJSX.BsToasts & JSXBase.HTMLAttributes<HTMLBsToastsElement>;
            "bs-tooltips": LocalJSX.BsTooltips & JSXBase.HTMLAttributes<HTMLBsTooltipsElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
