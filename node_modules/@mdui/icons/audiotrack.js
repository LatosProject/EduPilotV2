import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAudiotrack = class IconAudiotrack extends LitElement {
    render() {
        return svgTag('<path d="M12 3v9.28a4.39 4.39 0 0 0-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>');
    }
};
IconAudiotrack.styles = style;
IconAudiotrack = __decorate([
    customElement('mdui-icon-audiotrack')
], IconAudiotrack);
export { IconAudiotrack };
