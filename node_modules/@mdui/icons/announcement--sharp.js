import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAnnouncement_Sharp = class IconAnnouncement_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2zm-9 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>');
    }
};
IconAnnouncement_Sharp.styles = style;
IconAnnouncement_Sharp = __decorate([
    customElement('mdui-icon-announcement--sharp')
], IconAnnouncement_Sharp);
export { IconAnnouncement_Sharp };
