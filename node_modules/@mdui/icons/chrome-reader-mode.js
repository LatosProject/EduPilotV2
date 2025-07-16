import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChromeReaderMode = class IconChromeReaderMode extends LitElement {
    render() {
        return svgTag('<path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"/>');
    }
};
IconChromeReaderMode.styles = style;
IconChromeReaderMode = __decorate([
    customElement('mdui-icon-chrome-reader-mode')
], IconChromeReaderMode);
export { IconChromeReaderMode };
