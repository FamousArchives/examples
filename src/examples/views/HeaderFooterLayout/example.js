/**
 * HeaderFooterLayout
 * ------------------
 *
 * HeaderFooterLayout is a layout which will arrange three renderables
 * into a header and footer area of defined size and a content area
 * of flexible size.
 *
 * In this example we create a basic HeaderFooterLayout and define a 
 * size for the header and footer
 */
define(function(require, exports, module) {
    var Engine             = require("famous/core/Engine");
    var Surface            = require("famous/core/Surface");
    var HeaderFooterLayout = require("famous/views/HeaderFooterLayout");

    var mainContext = Engine.createContext();

    var layout = new HeaderFooterLayout({
        headerSize: 100,
        footerSize: 50
    });

    layout.header.add(new Surface({
        size: [undefined, 100],
        content: "Header",
        classes: ["red-bg"],
        properties: {
            lineHeight: "100px",
            textAlign: "center"
        }
    }));

    layout.content.add(new Surface({
        size: [undefined, undefined],
        content: "Content",
        classes: ["grey-bg"],
        properties: {
            lineHeight: window.innerHeight - 150 + 'px',
            textAlign: "center"
        }
    }));

    layout.footer.add(new Surface({
        size: [undefined, 50],
        content: "Footer",
        classes: ["red-bg"],
        properties: {
            lineHeight: "50px",
            textAlign: "center"
        }
    }));

    mainContext.add(layout);
});
