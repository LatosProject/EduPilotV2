import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStraight_TwoTone = class IconStraight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z"/>');
    }
};
IconStraight_TwoTone.styles = style;
IconStraight_TwoTone = __decorate([
    customElement('mdui-icon-straight--two-tone')
], IconStraight_TwoTone);
export { IconStraight_TwoTone };
