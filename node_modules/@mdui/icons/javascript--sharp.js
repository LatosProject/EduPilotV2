import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconJavascript_Sharp = class IconJavascript_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 15v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15h-5zM9 9v4.5H7.5v-1H6V15h4.5V9H9z"/>');
    }
};
IconJavascript_Sharp.styles = style;
IconJavascript_Sharp = __decorate([
    customElement('mdui-icon-javascript--sharp')
], IconJavascript_Sharp);
export { IconJavascript_Sharp };
