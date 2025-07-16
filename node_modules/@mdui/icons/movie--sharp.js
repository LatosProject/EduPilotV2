import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMovie_Sharp = class IconMovie_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>');
    }
};
IconMovie_Sharp.styles = style;
IconMovie_Sharp = __decorate([
    customElement('mdui-icon-movie--sharp')
], IconMovie_Sharp);
export { IconMovie_Sharp };
