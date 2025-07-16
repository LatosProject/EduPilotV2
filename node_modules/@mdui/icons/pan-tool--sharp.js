import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPanTool_Sharp = class IconPanTool_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 4v20H10.02L1 14.83 2.9 13 8 15.91V3h3v8h1V0h3v11h1V1h3v10h1V4h3z"/>');
    }
};
IconPanTool_Sharp.styles = style;
IconPanTool_Sharp = __decorate([
    customElement('mdui-icon-pan-tool--sharp')
], IconPanTool_Sharp);
export { IconPanTool_Sharp };
