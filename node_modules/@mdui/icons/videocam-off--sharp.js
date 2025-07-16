import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideocamOff_Sharp = class IconVideocamOff_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86 2 3.27 4.73 6H3v12h13.73l3 3 1.41-1.41z"/>');
    }
};
IconVideocamOff_Sharp.styles = style;
IconVideocamOff_Sharp = __decorate([
    customElement('mdui-icon-videocam-off--sharp')
], IconVideocamOff_Sharp);
export { IconVideocamOff_Sharp };
