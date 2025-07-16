import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChromeReaderMode_TwoTone = class IconChromeReaderMode_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 6h8v13H3z" opacity=".3"/><path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM11 19H3V6h8v13zm10 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"/>');
    }
};
IconChromeReaderMode_TwoTone.styles = style;
IconChromeReaderMode_TwoTone = __decorate([
    customElement('mdui-icon-chrome-reader-mode--two-tone')
], IconChromeReaderMode_TwoTone);
export { IconChromeReaderMode_TwoTone };
