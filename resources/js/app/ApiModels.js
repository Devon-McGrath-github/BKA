var FrontEndLibrary;
(function (FrontEndLibrary) {
    var Models;
    (function (Models) {
        var Tiling;
        (function (Tiling) {
            (function (TileWidths) {
                TileWidths[TileWidths["FullWidth"] = 0] = "FullWidth";
                TileWidths[TileWidths["HalfWidth"] = 1] = "HalfWidth";
                TileWidths[TileWidths["ThirdWidth"] = 2] = "ThirdWidth";
                TileWidths[TileWidths["QuarterWidth"] = 3] = "QuarterWidth";
            })(Tiling.TileWidths || (Tiling.TileWidths = {}));
            var TileWidths = Tiling.TileWidths;
            (function (TileRowType) {
                TileRowType[TileRowType["Full"] = 0] = "Full";
                TileRowType[TileRowType["HalfQuarterQuarter"] = 1] = "HalfQuarterQuarter";
                TileRowType[TileRowType["HalfHalf"] = 2] = "HalfHalf";
                TileRowType[TileRowType["QuarterQuarterHalf"] = 3] = "QuarterQuarterHalf";
                TileRowType[TileRowType["QuarterQuarterQuarterQuarter"] = 4] = "QuarterQuarterQuarterQuarter";
            })(Tiling.TileRowType || (Tiling.TileRowType = {}));
            var TileRowType = Tiling.TileRowType;
        })(Tiling = Models.Tiling || (Models.Tiling = {}));
    })(Models = FrontEndLibrary.Models || (FrontEndLibrary.Models = {}));
})(FrontEndLibrary || (FrontEndLibrary = {}));
var System;
(function (System) {
    (function (UriHostNameType) {
        UriHostNameType[UriHostNameType["Unknown"] = 0] = "Unknown";
        UriHostNameType[UriHostNameType["Basic"] = 1] = "Basic";
        UriHostNameType[UriHostNameType["Dns"] = 2] = "Dns";
        UriHostNameType[UriHostNameType["IPv4"] = 3] = "IPv4";
        UriHostNameType[UriHostNameType["IPv6"] = 4] = "IPv6";
    })(System.UriHostNameType || (System.UriHostNameType = {}));
    var UriHostNameType = System.UriHostNameType;
})(System || (System = {}));
//# sourceMappingURL=ApiModels.js.map