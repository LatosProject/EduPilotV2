import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMoving = class IconMoving extends LitElement {
    render() {
        return svgTag('<path d="M19.71 9.71 22 12V6h-6l2.29 2.29-4.17 4.17a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2 16.59 3.41 18l5.29-5.29a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0l4.19-4.17z"/>');
    }
};
IconMoving.styles = style;
IconMoving = __decorate([
    customElement('mdui-icon-moving')
], IconMoving);
export { IconMoving };
