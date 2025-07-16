import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartDisplay_Sharp = class IconSmartDisplay_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM9.5 16.5v-9l7 4.5-7 4.5z"/>');
    }
};
IconSmartDisplay_Sharp.styles = style;
IconSmartDisplay_Sharp = __decorate([
    customElement('mdui-icon-smart-display--sharp')
], IconSmartDisplay_Sharp);
export { IconSmartDisplay_Sharp };
