import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToc_Outlined = class IconToc_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>');
    }
};
IconToc_Outlined.styles = style;
IconToc_Outlined = __decorate([
    customElement('mdui-icon-toc--outlined')
], IconToc_Outlined);
export { IconToc_Outlined };
