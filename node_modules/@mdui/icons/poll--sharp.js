import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPoll_Sharp = class IconPoll_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm6 14H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>');
    }
};
IconPoll_Sharp.styles = style;
IconPoll_Sharp = __decorate([
    customElement('mdui-icon-poll--sharp')
], IconPoll_Sharp);
export { IconPoll_Sharp };
