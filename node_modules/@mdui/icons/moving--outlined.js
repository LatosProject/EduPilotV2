import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMoving_Outlined = class IconMoving_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 9.42V12h2V6h-6v2h2.58l-4.46 4.46a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2 16.59 3.41 18l5.29-5.29a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0L20 9.42z"/>');
    }
};
IconMoving_Outlined.styles = style;
IconMoving_Outlined = __decorate([
    customElement('mdui-icon-moving--outlined')
], IconMoving_Outlined);
export { IconMoving_Outlined };
