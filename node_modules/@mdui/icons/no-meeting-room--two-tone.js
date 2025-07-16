import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoMeetingRoom_TwoTone = class IconNoMeetingRoom_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 5H8.12L12 8.88V6zM7 19h5v-4.46l-5-5z" opacity=".3"/><path d="M12 5v3.88l2 2V6h3v7.88l2 2V4h-5V3H6.12l2 2zM2.41 2.13 1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41L2.41 2.13zM12 19H7V9.54l5 5V19z"/>');
    }
};
IconNoMeetingRoom_TwoTone.styles = style;
IconNoMeetingRoom_TwoTone = __decorate([
    customElement('mdui-icon-no-meeting-room--two-tone')
], IconNoMeetingRoom_TwoTone);
export { IconNoMeetingRoom_TwoTone };
