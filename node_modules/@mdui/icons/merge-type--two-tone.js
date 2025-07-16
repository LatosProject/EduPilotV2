import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMergeType_TwoTone = class IconMergeType_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zm11.407 1.41-3.408-3.407 1.4-1.407 3.41 3.408z"/>');
    }
};
IconMergeType_TwoTone.styles = style;
IconMergeType_TwoTone = __decorate([
    customElement('mdui-icon-merge-type--two-tone')
], IconMergeType_TwoTone);
export { IconMergeType_TwoTone };
