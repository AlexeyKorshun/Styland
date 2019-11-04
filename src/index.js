function textStyles(context) {
	const textStylesContainer = container(context);
    const containerTextStyles = textStylesContainer.textStyles;
    var styles = containerTextStyles.map(style => `${textStyle(style, textStylesContainer)}`)
    var code = `<resources>
    ${styles.join(`\n\n` + space(4))}
</resources>`
    return {
        code: code,
        language: 'xml',
        filename: 'styles.xml',
    };
}

function exportTextStyles(context) {
	return textStyles(context);
}

function container(context) {
    return context.styleguide == undefined ? context.project : context.styleguide;
}

function textStyle(style, container) {
	var styleBlock = `<style name="${formatName(style.name)}">
        <item name="android:textSize">${textSize(style)}</item>
        <item name="android:fontFamily">${font(style.fontFace)}</item>
        <item name="android:lineSpacingExtra">${lineSpacingExtra(style)}</item>
        <item name="android:textColor">${color(style.color, container)}</item>
    </style>`;
    return styleBlock;
}

function font(fontName) {
	return `@font/${formatFontName(fontName)}`
}

function formatFontName(name) {
	return name.replace(/(?:[A-Z])/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : `_${word.toLowerCase()}`;
    }).replace(/[\-]/g, '')
}

function textSize(style) {
	return `${style.fontSize}sp`;
}

function lineSpacingExtra(style) {
	var value
	if (style.lineHeight == undefined || style.fontSize == undefined) {
		value = 0;
	} else {
		value = style.lineHeight - style.fontSize;
	}
    return `${value}sp`;
}

function color(color, container) {
	if (color == undefined) {
		return '';
	}
	var projectColor = container.findColorEqual(color)
	if (projectColor == undefined) {
		return hexColor(color);
	}
	return `@color/${projectColor.name}`;
}

function hexColor(color) {
	var hexColor = color.toHex()
	return `#${hexColor.a}${hexColor.r}${hexColor.g}${hexColor.b}`;
}

function space(count) {
	return ' '.repeat(count)
}

function formatName(string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return word.toUpperCase();
    }).replace(/[_\-!@#$%^&*/ ]/g, '');
}

export default {
    textStyles,
    exportTextStyles
};
