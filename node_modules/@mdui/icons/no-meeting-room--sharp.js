import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoMeetingRoom_Sharp = class IconNoMeetingRoom_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 6h3v7.88l2 2V4h-5V3H6.12L14 10.88zm-2 5.71V13h-2v-2h1.29L2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41z"/>');
    }
};
IconNoMeetingRoom_Sharp.styles = style;
IconNoMeetingRoom_Sharp = __decorate([
    customElement('mdui-icon-no-meeting-room--sharp')
], IconNoMeetingRoom_Sharp);
export { IconNoMeetingRoom_Sharp };
