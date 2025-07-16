import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNote_Sharp = class IconNote_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z"/>');
    }
};
IconNote_Sharp.styles = style;
IconNote_Sharp = __decorate([
    customElement('mdui-icon-note--sharp')
], IconNote_Sharp);
export { IconNote_Sharp };
