import {
	pixelRatio
} from './utils';

const UNI_CANVAS_CONTEXT_MAP = {
	// #ifndef MP-WEIXIN
	fillStyle: 'FillStyle',
	fontSize: 'FontSize',
	globalAlpha: 'GlobalAlpha',
	opacity: 'GlobalAlpha',
	lineCap: 'LineCap',
	lineJoin: 'LineJoin',
	lineWidth: 'LineWidth',
	miterLimit: 'MiterLimit',
	strokeStyle: 'StrokeStyle',
	textAlign: 'TextAlign',
	textBaseline: 'TextBaseline',
	shadow: 'Shadow',
	// #endif
	// #ifdef MP-TOUTIAO
	font: 'FontSize',
	// #endif
};

// 头条小程序目前仅支持 setFontSize
// f2 会将所有属性整合为 font 简写，从中提取 fontSize 支持
const fontSizeReg = /(\d*)px/;
export default (ctx) => {
	ctx.uniTransform = (...agrs) => {
		// #ifdef H5 || APP-PLUS
		if(ctx.draw && agrs[6]) {
			agrs[4] *= pixelRatio
			agrs[5] *= pixelRatio
		}
		// #endif
		ctx.transform(...agrs)
	}
	Object.keys(UNI_CANVAS_CONTEXT_MAP).forEach(key => {
		Object.defineProperty(ctx, key, {
			set(val) {
				const name = `set${UNI_CANVAS_CONTEXT_MAP[key]}`;
				if (!ctx[name]) {
					return;
				}
				if (key === 'font' && fontSizeReg.test(val)) {
					const match = fontSizeReg.exec(val);
					ctx[name](match[1]);
					return;
				}
				if (key === 'shadow' && Array.isArray(val)) {
					ctx[name](...val);
					return;
				}
				ctx[name](val);
			}
		});
	});
	return ctx
}
