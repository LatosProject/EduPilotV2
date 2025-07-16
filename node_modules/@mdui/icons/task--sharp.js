import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTask_Sharp = class IconTask_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h16V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"/>');
    }
};
IconTask_Sharp.styles = style;
IconTask_Sharp = __decorate([
    customElement('mdui-icon-task--sharp')
], IconTask_Sharp);
export { IconTask_Sharp };
