import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewCozy_Sharp = class IconViewCozy_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM11.25 16.75h-4v-4h4v4zm0-5.5h-4v-4h4v4zm5.5 5.5h-4v-4h4v4zm0-5.5h-4v-4h4v4z"/>');
    }
};
IconViewCozy_Sharp.styles = style;
IconViewCozy_Sharp = __decorate([
    customElement('mdui-icon-view-cozy--sharp')
], IconViewCozy_Sharp);
export { IconViewCozy_Sharp };
