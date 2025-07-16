import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChair_Sharp = class IconChair_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 13h10V7h3V3H4v4h3z"/><path d="M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3V9z"/>');
    }
};
IconChair_Sharp.styles = style;
IconChair_Sharp = __decorate([
    customElement('mdui-icon-chair--sharp')
], IconChair_Sharp);
export { IconChair_Sharp };
