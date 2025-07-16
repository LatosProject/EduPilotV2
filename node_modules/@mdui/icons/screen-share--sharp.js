import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScreenShare_Sharp = class IconScreenShare_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m20 18 2-2V4H2v12l2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"/>');
    }
};
IconScreenShare_Sharp.styles = style;
IconScreenShare_Sharp = __decorate([
    customElement('mdui-icon-screen-share--sharp')
], IconScreenShare_Sharp);
export { IconScreenShare_Sharp };
