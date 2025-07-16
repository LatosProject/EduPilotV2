import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForward_Sharp = class IconForward_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 8V4l8 8-8 8v-4H4V8h8z"/>');
    }
};
IconForward_Sharp.styles = style;
IconForward_Sharp = __decorate([
    customElement('mdui-icon-forward--sharp')
], IconForward_Sharp);
export { IconForward_Sharp };
