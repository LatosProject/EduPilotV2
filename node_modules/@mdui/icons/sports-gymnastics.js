import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSportsGymnastics = class IconSportsGymnastics extends LitElement {
    render() {
        return svgTag('<path d="M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1V9z"/>');
    }
};
IconSportsGymnastics.styles = style;
IconSportsGymnastics = __decorate([
    customElement('mdui-icon-sports-gymnastics')
], IconSportsGymnastics);
export { IconSportsGymnastics };
