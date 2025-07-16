import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurtainsClosed_Outlined = class IconCurtainsClosed_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zM13 5v14h-2V5h2zM6 5h3v14H6V5zm9 14V5h3v14h-3z"/>');
    }
};
IconCurtainsClosed_Outlined.styles = style;
IconCurtainsClosed_Outlined = __decorate([
    customElement('mdui-icon-curtains-closed--outlined')
], IconCurtainsClosed_Outlined);
export { IconCurtainsClosed_Outlined };
