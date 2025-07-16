import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHdrAuto_Rounded = class IconHdrAuto_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12.04 8.04h-.09l-1.6 4.55h3.29z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 14.41-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2-.38 0-.72-.24-.84-.59z"/>');
    }
};
IconHdrAuto_Rounded.styles = style;
IconHdrAuto_Rounded = __decorate([
    customElement('mdui-icon-hdr-auto--rounded')
], IconHdrAuto_Rounded);
export { IconHdrAuto_Rounded };
