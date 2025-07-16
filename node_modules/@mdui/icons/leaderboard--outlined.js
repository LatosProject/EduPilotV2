import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLeaderboard_Outlined = class IconLeaderboard_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z"/>');
    }
};
IconLeaderboard_Outlined.styles = style;
IconLeaderboard_Outlined = __decorate([
    customElement('mdui-icon-leaderboard--outlined')
], IconLeaderboard_Outlined);
export { IconLeaderboard_Outlined };
