import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHouse_Sharp = class IconHouse_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>');
    }
};
IconHouse_Sharp.styles = style;
IconHouse_Sharp = __decorate([
    customElement('mdui-icon-house--sharp')
], IconHouse_Sharp);
export { IconHouse_Sharp };
