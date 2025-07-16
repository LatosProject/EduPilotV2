import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDynamicForm_TwoTone = class IconDynamicForm_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 9h7V6H4v3zm0 9h9v-3H4v3z" opacity=".3"/><path d="M13 11H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h9v7zM4 9h7V6H4v3zm11 11H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h11v7zM4 18h9v-3H4v3zm18-9h-2l2-5h-7v7h2v9l5-11zM4.75 17.25h1.5v-1.5h-1.5v1.5zm0-9h1.5v-1.5h-1.5v1.5z"/>');
    }
};
IconDynamicForm_TwoTone.styles = style;
IconDynamicForm_TwoTone = __decorate([
    customElement('mdui-icon-dynamic-form--two-tone')
], IconDynamicForm_TwoTone);
export { IconDynamicForm_TwoTone };
