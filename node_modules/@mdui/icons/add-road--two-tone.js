import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddRoad_TwoTone = class IconAddRoad_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2zM18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z"/>');
    }
};
IconAddRoad_TwoTone.styles = style;
IconAddRoad_TwoTone = __decorate([
    customElement('mdui-icon-add-road--two-tone')
], IconAddRoad_TwoTone);
export { IconAddRoad_TwoTone };
