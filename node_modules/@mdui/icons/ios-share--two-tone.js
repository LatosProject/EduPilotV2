import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIosShare_TwoTone = class IconIosShare_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V10a2 2 0 0 0-2-2z"/><path d="M11 16h2V5h3l-4-4-4 4h3z"/>');
    }
};
IconIosShare_TwoTone.styles = style;
IconIosShare_TwoTone = __decorate([
    customElement('mdui-icon-ios-share--two-tone')
], IconIosShare_TwoTone);
export { IconIosShare_TwoTone };
