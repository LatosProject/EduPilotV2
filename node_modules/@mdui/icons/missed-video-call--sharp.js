import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMissedVideoCall_Sharp = class IconMissedVideoCall_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4zM10 15l-3.89-3.89v2.55H5V9.22h4.44v1.11H6.89l3.11 3.1 4.22-4.22.78.79-5 5z"/>');
    }
};
IconMissedVideoCall_Sharp.styles = style;
IconMissedVideoCall_Sharp = __decorate([
    customElement('mdui-icon-missed-video-call--sharp')
], IconMissedVideoCall_Sharp);
export { IconMissedVideoCall_Sharp };
