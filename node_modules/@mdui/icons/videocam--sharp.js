import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideocam_Sharp = class IconVideocam_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z"/>');
    }
};
IconVideocam_Sharp.styles = style;
IconVideocam_Sharp = __decorate([
    customElement('mdui-icon-videocam--sharp')
], IconVideocam_Sharp);
export { IconVideocam_Sharp };
