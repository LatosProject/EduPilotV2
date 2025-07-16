import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAudiotrack_Outlined = class IconAudiotrack_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6zm-2 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>');
    }
};
IconAudiotrack_Outlined.styles = style;
IconAudiotrack_Outlined = __decorate([
    customElement('mdui-icon-audiotrack--outlined')
], IconAudiotrack_Outlined);
export { IconAudiotrack_Outlined };
