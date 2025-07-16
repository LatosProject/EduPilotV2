import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewCompactAlt_Sharp = class IconViewCompactAlt_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM11.5 16.5h-4v-4h4v4zm0-5h-4v-4h4v4zm5 5h-4v-4h4v4zm0-5h-4v-4h4v4z"/>');
    }
};
IconViewCompactAlt_Sharp.styles = style;
IconViewCompactAlt_Sharp = __decorate([
    customElement('mdui-icon-view-compact-alt--sharp')
], IconViewCompactAlt_Sharp);
export { IconViewCompactAlt_Sharp };
