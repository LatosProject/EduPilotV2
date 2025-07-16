import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPunchClock = class IconPunchClock extends LitElement {
    render() {
        return svgTag('<path d="M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 3h8v3H8V3zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z"/>');
    }
};
IconPunchClock.styles = style;
IconPunchClock = __decorate([
    customElement('mdui-icon-punch-clock')
], IconPunchClock);
export { IconPunchClock };
