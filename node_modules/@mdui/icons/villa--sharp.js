import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVilla_Sharp = class IconVilla_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 21H3V8l13-5v7H7v11zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2z"/>');
    }
};
IconVilla_Sharp.styles = style;
IconVilla_Sharp = __decorate([
    customElement('mdui-icon-villa--sharp')
], IconVilla_Sharp);
export { IconVilla_Sharp };
