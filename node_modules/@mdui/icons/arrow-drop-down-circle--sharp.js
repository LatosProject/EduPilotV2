import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropDownCircle_Sharp = class IconArrowDropDownCircle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13-4-4h8l-4 4z"/>');
    }
};
IconArrowDropDownCircle_Sharp.styles = style;
IconArrowDropDownCircle_Sharp = __decorate([
    customElement('mdui-icon-arrow-drop-down-circle--sharp')
], IconArrowDropDownCircle_Sharp);
export { IconArrowDropDownCircle_Sharp };
