import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTrendingFlat_Rounded = class IconTrendingFlat_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m21.65 11.65-2.79-2.79a.501.501 0 0 0-.86.35V11H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"/>');
    }
};
IconTrendingFlat_Rounded.styles = style;
IconTrendingFlat_Rounded = __decorate([
    customElement('mdui-icon-trending-flat--rounded')
], IconTrendingFlat_Rounded);
export { IconTrendingFlat_Rounded };
