import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPriorityHigh_Rounded = class IconPriorityHigh_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="19" r="2"/><path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
    }
};
IconPriorityHigh_Rounded.styles = style;
IconPriorityHigh_Rounded = __decorate([
    customElement('mdui-icon-priority-high--rounded')
], IconPriorityHigh_Rounded);
export { IconPriorityHigh_Rounded };
