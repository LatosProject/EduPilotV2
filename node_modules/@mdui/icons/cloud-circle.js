import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCloudCircle = class IconCloudCircle extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01A3.98 3.98 0 0 1 12 7c2.21 0 4 1.79 4 4h.5a2.5 2.5 0 0 1 0 5z"/>');
    }
};
IconCloudCircle.styles = style;
IconCloudCircle = __decorate([
    customElement('mdui-icon-cloud-circle')
], IconCloudCircle);
export { IconCloudCircle };
