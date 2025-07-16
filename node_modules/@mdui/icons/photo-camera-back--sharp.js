import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhotoCameraBack_Sharp = class IconPhotoCameraBack_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16.83 5 15 3H9L7.17 5H2v16h20V5h-5.17zM6 17l3-4 2.25 3 3-4L18 17H6z"/>');
    }
};
IconPhotoCameraBack_Sharp.styles = style;
IconPhotoCameraBack_Sharp = __decorate([
    customElement('mdui-icon-photo-camera-back--sharp')
], IconPhotoCameraBack_Sharp);
export { IconPhotoCameraBack_Sharp };
