import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconContentPaste_Sharp = class IconContentPaste_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 2h-6.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H3v20h18V2zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>');
    }
};
IconContentPaste_Sharp.styles = style;
IconContentPaste_Sharp = __decorate([
    customElement('mdui-icon-content-paste--sharp')
], IconContentPaste_Sharp);
export { IconContentPaste_Sharp };
