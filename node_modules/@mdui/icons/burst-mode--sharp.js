import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBurstMode_Sharp = class IconBurstMode_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M1 5h2v14H1V5zm4 0h2v14H5V5zm18 0H9v14h14V5zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"/>');
    }
};
IconBurstMode_Sharp.styles = style;
IconBurstMode_Sharp = __decorate([
    customElement('mdui-icon-burst-mode--sharp')
], IconBurstMode_Sharp);
export { IconBurstMode_Sharp };
