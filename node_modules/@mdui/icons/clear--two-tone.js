import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconClear_TwoTone = class IconClear_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>');
    }
};
IconClear_TwoTone.styles = style;
IconClear_TwoTone = __decorate([
    customElement('mdui-icon-clear--two-tone')
], IconClear_TwoTone);
export { IconClear_TwoTone };
