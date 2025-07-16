import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSos_Sharp = class IconSos_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15.5 7h-7v10h7V7zm-2 8h-3V9h3v6zM1 15h4v-2H1V7h6v2H3v2h4v6H1v-2zm16 0h4v-2h-4V7h6v2h-4v2h4v6h-6v-2z"/>');
    }
};
IconSos_Sharp.styles = style;
IconSos_Sharp = __decorate([
    customElement('mdui-icon-sos--sharp')
], IconSos_Sharp);
export { IconSos_Sharp };
