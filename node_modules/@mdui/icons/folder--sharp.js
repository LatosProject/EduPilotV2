import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolder_Sharp = class IconFolder_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 4H2v16h20V6H12l-2-2z"/>');
    }
};
IconFolder_Sharp.styles = style;
IconFolder_Sharp = __decorate([
    customElement('mdui-icon-folder--sharp')
], IconFolder_Sharp);
export { IconFolder_Sharp };
