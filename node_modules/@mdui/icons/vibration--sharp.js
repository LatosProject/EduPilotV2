import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVibration_Sharp = class IconVibration_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM18 3H6v18h12V3zm-2 16H8V5h8v14z"/>');
    }
};
IconVibration_Sharp.styles = style;
IconVibration_Sharp = __decorate([
    customElement('mdui-icon-vibration--sharp')
], IconVibration_Sharp);
export { IconVibration_Sharp };
