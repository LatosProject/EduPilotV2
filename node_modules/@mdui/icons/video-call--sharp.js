import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoCall_Sharp = class IconVideoCall_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>');
    }
};
IconVideoCall_Sharp.styles = style;
IconVideoCall_Sharp = __decorate([
    customElement('mdui-icon-video-call--sharp')
], IconVideoCall_Sharp);
export { IconVideoCall_Sharp };
