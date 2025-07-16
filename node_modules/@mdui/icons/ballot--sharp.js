import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBallot_Sharp = class IconBallot_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm8 4.5H3V3h18v18zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"/>');
    }
};
IconBallot_Sharp.styles = style;
IconBallot_Sharp = __decorate([
    customElement('mdui-icon-ballot--sharp')
], IconBallot_Sharp);
export { IconBallot_Sharp };
