import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDiscount_Sharp = class IconDiscount_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12.79 21 3 11.21v2.83l9.79 9.79 9.04-9.04-1.42-1.41z"/><path d="m3 9.04 9.79 9.79 9.04-9.04L12.04 0H3v9.04zM7.25 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>');
    }
};
IconDiscount_Sharp.styles = style;
IconDiscount_Sharp = __decorate([
    customElement('mdui-icon-discount--sharp')
], IconDiscount_Sharp);
export { IconDiscount_Sharp };
