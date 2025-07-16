import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTopic_TwoTone = class IconTopic_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 18H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z" opacity=".3"/><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16.77c.68 0 1.23-.56 1.23-1.23V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-2-6H6v-2h12v2zm-4 4H6v-2h8v2z"/>');
    }
};
IconTopic_TwoTone.styles = style;
IconTopic_TwoTone = __decorate([
    customElement('mdui-icon-topic--two-tone')
], IconTopic_TwoTone);
export { IconTopic_TwoTone };
