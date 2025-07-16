import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWhereToVote_Sharp = class IconWhereToVote_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm-1.53 12-3.48-3.48L8.4 9.1l2.07 2.07 5.13-5.14 1.41 1.42L10.47 14z"/>');
    }
};
IconWhereToVote_Sharp.styles = style;
IconWhereToVote_Sharp = __decorate([
    customElement('mdui-icon-where-to-vote--sharp')
], IconWhereToVote_Sharp);
export { IconWhereToVote_Sharp };
