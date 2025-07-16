import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFmdBad_Sharp = class IconFmdBad_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm1 13h-2v-2h2v2zm0-4h-2V6h2v5z"/>');
    }
};
IconFmdBad_Sharp.styles = style;
IconFmdBad_Sharp = __decorate([
    customElement('mdui-icon-fmd-bad--sharp')
], IconFmdBad_Sharp);
export { IconFmdBad_Sharp };
