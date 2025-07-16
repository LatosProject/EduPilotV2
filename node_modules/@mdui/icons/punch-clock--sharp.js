import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPunchClock_Sharp = class IconPunchClock_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 6h-3V1H6v5H3v16h18V6zM8 3h8v3H8V3zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z"/>');
    }
};
IconPunchClock_Sharp.styles = style;
IconPunchClock_Sharp = __decorate([
    customElement('mdui-icon-punch-clock--sharp')
], IconPunchClock_Sharp);
export { IconPunchClock_Sharp };
