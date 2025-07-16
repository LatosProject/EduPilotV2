import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignpost_Sharp = class IconSignpost_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2c-.55 0-1 .45-1 1v1H5.5C4.67 4 4 4.67 4 5.5v3c0 .83.67 1.5 1.5 1.5H11v2H6.62c-.4 0-.78.16-1.06.44l-1.5 1.5a1.49 1.49 0 0 0 0 2.12l1.5 1.5c.28.28.66.44 1.06.44H11v3c0 .55.45 1 1 1s1-.45 1-1v-3h5.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13v-2h4.38c.4 0 .78-.16 1.06-.44l1.5-1.5c.59-.59.59-1.54 0-2.12l-1.5-1.5c-.28-.28-.66-.44-1.06-.44H13V3c0-.55-.45-1-1-1z"/>');
    }
};
IconSignpost_Sharp.styles = style;
IconSignpost_Sharp = __decorate([
    customElement('mdui-icon-signpost--sharp')
], IconSignpost_Sharp);
export { IconSignpost_Sharp };
