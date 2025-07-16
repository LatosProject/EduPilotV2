import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMeetingRoom_Sharp = class IconMeetingRoom_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"/>');
    }
};
IconMeetingRoom_Sharp.styles = style;
IconMeetingRoom_Sharp = __decorate([
    customElement('mdui-icon-meeting-room--sharp')
], IconMeetingRoom_Sharp);
export { IconMeetingRoom_Sharp };
