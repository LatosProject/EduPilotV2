import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEject_Outlined = class IconEject_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6 2.93 4.4H9.07L12 8.6z"/>');
    }
};
IconEject_Outlined.styles = style;
IconEject_Outlined = __decorate([
    customElement('mdui-icon-eject--outlined')
], IconEject_Outlined);
export { IconEject_Outlined };
