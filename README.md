# Styland Zeplin Extension

[Zeplin](https://zeplin.io) extension to export Android styles resource with adapted fontFamily path.

## Getting started

Add the extension to your project from extensions.zeplin.io.

## Output

```xml
<resources>
    <style name="SampleTextStyle">
        <item name="android:textSize">20sp</item>
        <item name="android:fontFamily">@font/s_f_pro_text_regular</item>
        <item name="android:lineSpacingExtra">0sp</item>
        <item name="android:textColor">@color/black</item>
    </style>

    <style name="SampleTextStyleWithColor">
        <item name="android:textSize">20sp</item>
        <item name="android:fontFamily">@font/s_f_pro_text_regular</item>
        <item name="android:lineSpacingExtra">0sp</item>
        <item name="android:textColor">@color/red</item>
    </style>
</resources>
```

## Development

This extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create, test and publish extensions.

To learn more about creating Zeplin extensions, [see documentation](https://github.com/zeplin/zeplin-extension-documentation).

## LICENSE

Styliand is available under the MIT license. See the LICENSE file for more info.
