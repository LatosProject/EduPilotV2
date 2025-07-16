import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPinDrop_Sharp = class IconPinDrop_Sharp extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M5 20h14v2H5v-2zm7-13c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4zm0-5c3.27 0 7 2.46 7 7.15 0 3.12-2.33 6.41-7 9.85-4.67-3.44-7-6.73-7-9.85C5 4.46 8.73 2 12 2z"/>');
    }
};
IconPinDrop_Sharp.styles = style;
IconPinDrop_Sharp = __decorate([
    customElement('mdui-icon-pin-drop--sharp')
], IconPinDrop_Sharp);
export { IconPinDrop_Sharp };
