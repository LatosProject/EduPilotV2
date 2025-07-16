import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompare_Outlined = class IconCompare_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
    }
};
IconCompare_Outlined.styles = style;
IconCompare_Outlined = __decorate([
    customElement('mdui-icon-compare--outlined')
], IconCompare_Outlined);
export { IconCompare_Outlined };
