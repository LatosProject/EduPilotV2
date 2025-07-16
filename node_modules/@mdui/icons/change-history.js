import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChangeHistory = class IconChangeHistory extends LitElement {
    render() {
        return svgTag('<path d="M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z"/>');
    }
};
IconChangeHistory.styles = style;
IconChangeHistory = __decorate([
    customElement('mdui-icon-change-history')
], IconChangeHistory);
export { IconChangeHistory };
