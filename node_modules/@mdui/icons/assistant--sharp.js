import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAssistant_Sharp = class IconAssistant_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 2H3v18h6l3 3 3-3h6V2zm-7.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11l-4.12 1.88z"/>');
    }
};
IconAssistant_Sharp.styles = style;
IconAssistant_Sharp = __decorate([
    customElement('mdui-icon-assistant--sharp')
], IconAssistant_Sharp);
export { IconAssistant_Sharp };
