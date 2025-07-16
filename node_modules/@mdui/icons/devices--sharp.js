import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDevices_Sharp = class IconDevices_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z"/>');
    }
};
IconDevices_Sharp.styles = style;
IconDevices_Sharp = __decorate([
    customElement('mdui-icon-devices--sharp')
], IconDevices_Sharp);
export { IconDevices_Sharp };
