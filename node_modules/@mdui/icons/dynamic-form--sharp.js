import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDynamicForm_Sharp = class IconDynamicForm_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 20v-9h-2V4h7l-2 5h2l-5 11zm-2-7v7H2v-7h13zm-8.75 2.75h-1.5v1.5h1.5v-1.5zM13 4v7H2V4h11zM6.25 6.75h-1.5v1.5h1.5v-1.5z"/>');
    }
};
IconDynamicForm_Sharp.styles = style;
IconDynamicForm_Sharp = __decorate([
    customElement('mdui-icon-dynamic-form--sharp')
], IconDynamicForm_Sharp);
export { IconDynamicForm_Sharp };
