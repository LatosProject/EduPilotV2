import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRectangle_Sharp = class IconRectangle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 4h20v16H2z"/>');
    }
};
IconRectangle_Sharp.styles = style;
IconRectangle_Sharp = __decorate([
    customElement('mdui-icon-rectangle--sharp')
], IconRectangle_Sharp);
export { IconRectangle_Sharp };
