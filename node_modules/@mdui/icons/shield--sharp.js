import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShield_Sharp = class IconShield_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>');
    }
};
IconShield_Sharp.styles = style;
IconShield_Sharp = __decorate([
    customElement('mdui-icon-shield--sharp')
], IconShield_Sharp);
export { IconShield_Sharp };
