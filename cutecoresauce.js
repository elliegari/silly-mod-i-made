{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww28600\viewh14200\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // To create a mod:\
// Create a new Javascript file like this one.\
// Add the file to the mods folder on GitHub, or host it somewhere else.\
// https://github.com/R74nCom/sandboxels/tree/main/mods\
\
// To learn about modding, check the wiki: https://sandboxels.wiki.gg/wiki/Modding\
// Or join our Discord: https://r74n.com/discord/\
\
// To add it in the Mod Manager:\
// If it is in the mods folder, you can just use the name of the file. (example_mod.js)\
// If it is hosted somewhere else, you can use the full URL, including the HTTPS://.\
\
// Adding elements:\
elements.cutecore_sauce = \{\
    color: "#ff00dd,\
    behavior: behaviors.LIQUID,\
    category: \'93weapons\'94,\
    state: "liquid",\
    density: 1100,\
    viscosity: 60000,\
\}\
\
elements.goth_sauce = \{\
	color: \'93#434343,\
	behavior: behaviors.LIQUID,\
	category: \'93aesthetics\'94,\
	state: \'93liquid\'94,\
\pard\pardeftab720\partightenfactor0
\cf0 \outl0\strokewidth0 	density: 1100,\
	viscosity: 60000,\
\}\
\
\outl0\strokewidth0 \strokec2 // Changing existing elements:\
\pard\pardeftab720\partightenfactor0
\cf0 elements.water.color = "#ff0000";\
elements.water.behavior = behaviors.WALL;\
\
// Removing elements:\
// Be aware, things may break\
delete elements.ketchup;\
\
// Custom behaviors:\
elements.blue_sand = \{\
    color: "#0000ff",\
    behavior: [\
        "XX|XX|XX",\
        "XX|XX|XX",\
        "M2|M1|M2"\
    ],\
    category: "land",\
    state: "solid"\
\}\
\
// Raw JavaScript behaviors:\
elements.mud.tick = function(pixel) \{\
    if (tryMove(pixel, pixel.x, pixel.y+1)) \{\
        console.log("Moved!");\
    \}\
    else \{\
        console.log("Couldn't move!")\
    \}\
\};\
\
// Create a new tool:\
elements.goth = \{\
    color: \'93#434343,\
    tool: function(pixel) \{\
        if (pixel.element == \'93cutecore_sauce\'94) \{\
            pixel.element = \'93fire\'94\
        \}\
    \},\
    category: "tools",\
\};\
\
// Reactions:\
elements.sugar_stick = \{\
    color: "#ffffff",\
    behavior: behaviors.STURDYPOWDER,\
    reactions: \{\
        "water": \{ elem1:null, elem2:"sugar_water", chance:0.1 \},\
        "salt_water": \{ elem1:null, elem2:"sugar_water", chance:0.1 \}\
    \},\
    state: "solid",\
    density: 1580\
\}\
\
// Add reactions to existing elements:\
// Include this block once to ensure the property exists\
if (!elements.water.reactions) elements.water.reactions = \{\};\
elements.water.reactions.mustard = \{ "elem1":null, "elem2":"mustard_water" \};\
elements.water.reactions.soap = \{ "elem1":null, "elem2":"soapy_water" \};\
\
// Custom element renderers:\
elements.ball.renderer = function(pixel,ctx) \{\
    // Draw three horizontal squares\
    drawSquare(ctx,"#00ff00",pixel.x-1,pixel.y);\
    drawSquare(ctx,"#00ff00",pixel.x,pixel.y);\
    drawSquare(ctx,"#00ff00",pixel.x+1,pixel.y);\
\};\
// See 1.10example.js for more rendering examples.\
}