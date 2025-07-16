import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPriorityHigh_Sharp = class IconPriorityHigh_Sharp extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>');
    }
};
IconPriorityHigh_Sharp.styles = style;
IconPriorityHigh_Sharp = __decorate([
    customElement('mdui-icon-priority-high--sharp')
], IconPriorityHigh_Sharp);
export { IconPriorityHigh_Sharp };
