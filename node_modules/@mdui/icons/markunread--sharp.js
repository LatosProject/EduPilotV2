import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkunread_Sharp = class IconMarkunread_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zm-2 4-8 5-8-5V6l8 5 8-5v2z"/>');
    }
};
IconMarkunread_Sharp.styles = style;
IconMarkunread_Sharp = __decorate([
    customElement('mdui-icon-markunread--sharp')
], IconMarkunread_Sharp);
export { IconMarkunread_Sharp };
