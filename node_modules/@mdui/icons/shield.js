import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShield = class IconShield extends LitElement {
    render() {
        return svgTag('<path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>');
    }
};
IconShield.styles = style;
IconShield = __decorate([
    customElement('mdui-icon-shield')
], IconShield);
export { IconShield };
