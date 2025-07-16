import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBolt_Rounded = class IconBolt_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M10.67 21c-.35 0-.62-.31-.57-.66L11 14H7.5c-.88 0-.33-.75-.31-.78 1.26-2.23 3.15-5.53 5.65-9.93a.577.577 0 0 1 1.07.37l-.9 6.34h3.51c.4 0 .62.19.4.66-3.29 5.74-5.2 9.09-5.75 10.05-.1.18-.29.29-.5.29z"/>');
    }
};
IconBolt_Rounded.styles = style;
IconBolt_Rounded = __decorate([
    customElement('mdui-icon-bolt--rounded')
], IconBolt_Rounded);
export { IconBolt_Rounded };
