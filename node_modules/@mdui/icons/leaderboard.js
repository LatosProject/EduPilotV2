import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLeaderboard = class IconLeaderboard extends LitElement {
    render() {
        return svgTag('<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>');
    }
};
IconLeaderboard.styles = style;
IconLeaderboard = __decorate([
    customElement('mdui-icon-leaderboard')
], IconLeaderboard);
export { IconLeaderboard };
