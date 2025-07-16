import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignTop_TwoTone = class IconVerticalAlignTop_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z"/>');
    }
};
IconVerticalAlignTop_TwoTone.styles = style;
IconVerticalAlignTop_TwoTone = __decorate([
    customElement('mdui-icon-vertical-align-top--two-tone')
], IconVerticalAlignTop_TwoTone);
export { IconVerticalAlignTop_TwoTone };
