import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChangeHistory_TwoTone = class IconChangeHistory_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 7.77 5.61 18h12.78z" opacity=".3"/><path d="M12 4 2 20h20L12 4zm0 3.77L18.39 18H5.61L12 7.77z"/>');
    }
};
IconChangeHistory_TwoTone.styles = style;
IconChangeHistory_TwoTone = __decorate([
    customElement('mdui-icon-change-history--two-tone')
], IconChangeHistory_TwoTone);
export { IconChangeHistory_TwoTone };
