import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPause_Outlined = class IconPause_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>');
    }
};
IconPause_Outlined.styles = style;
IconPause_Outlined = __decorate([
    customElement('mdui-icon-pause--outlined')
], IconPause_Outlined);
export { IconPause_Outlined };
