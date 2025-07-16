import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPriorityHigh_TwoTone = class IconPriorityHigh_TwoTone extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>');
    }
};
IconPriorityHigh_TwoTone.styles = style;
IconPriorityHigh_TwoTone = __decorate([
    customElement('mdui-icon-priority-high--two-tone')
], IconPriorityHigh_TwoTone);
export { IconPriorityHigh_TwoTone };
