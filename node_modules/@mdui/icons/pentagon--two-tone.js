import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPentagon_TwoTone = class IconPentagon_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z" opacity=".3"/><path d="M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44l7.63 5.34zM2 9l4 12h12l4-12-10-7L2 9z"/>');
    }
};
IconPentagon_TwoTone.styles = style;
IconPentagon_TwoTone = __decorate([
    customElement('mdui-icon-pentagon--two-tone')
], IconPentagon_TwoTone);
export { IconPentagon_TwoTone };
