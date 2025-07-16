import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEventNote_Sharp = class IconEventNote_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 10H7v2h10v-2zm4-7h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11zm-5-5H7v2h7v-2z"/>');
    }
};
IconEventNote_Sharp.styles = style;
IconEventNote_Sharp = __decorate([
    customElement('mdui-icon-event-note--sharp')
], IconEventNote_Sharp);
export { IconEventNote_Sharp };
