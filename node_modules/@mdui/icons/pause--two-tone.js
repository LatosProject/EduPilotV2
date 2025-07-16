import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPause_TwoTone = class IconPause_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>');
    }
};
IconPause_TwoTone.styles = style;
IconPause_TwoTone = __decorate([
    customElement('mdui-icon-pause--two-tone')
], IconPause_TwoTone);
export { IconPause_TwoTone };
