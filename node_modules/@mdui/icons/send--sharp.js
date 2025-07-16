import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSend_Sharp = class IconSend_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7z"/>');
    }
};
IconSend_Sharp.styles = style;
IconSend_Sharp = __decorate([
    customElement('mdui-icon-send--sharp')
], IconSend_Sharp);
export { IconSend_Sharp };
