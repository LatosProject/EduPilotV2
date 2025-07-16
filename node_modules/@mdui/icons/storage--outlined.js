import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStorage_Outlined = class IconStorage_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/>');
    }
};
IconStorage_Outlined.styles = style;
IconStorage_Outlined = __decorate([
    customElement('mdui-icon-storage--outlined')
], IconStorage_Outlined);
export { IconStorage_Outlined };
