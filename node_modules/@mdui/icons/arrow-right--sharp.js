import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowRight_Sharp = class IconArrowRight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m10 17 5-5-5-5v10z"/>');
    }
};
IconArrowRight_Sharp.styles = style;
IconArrowRight_Sharp = __decorate([
    customElement('mdui-icon-arrow-right--sharp')
], IconArrowRight_Sharp);
export { IconArrowRight_Sharp };
