var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 
// Copyright (C) Microsoft. All rights reserved.
//
var Common;
(function (Common) {
    (function (KeyCodes) {
        KeyCodes[KeyCodes["BACKSPACE"] = 8] = "BACKSPACE";
        KeyCodes[KeyCodes["TAB"] = 9] = "TAB";
        KeyCodes[KeyCodes["ENTER"] = 13] = "ENTER";
        KeyCodes[KeyCodes["SHIFT"] = 16] = "SHIFT";
        KeyCodes[KeyCodes["CONTROL"] = 17] = "CONTROL";
        KeyCodes[KeyCodes["ALT"] = 18] = "ALT";
        KeyCodes[KeyCodes["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        KeyCodes[KeyCodes["ESCAPE"] = 27] = "ESCAPE";
        KeyCodes[KeyCodes["SPACE"] = 32] = "SPACE";
        KeyCodes[KeyCodes["PAGE_UP"] = 33] = "PAGE_UP";
        KeyCodes[KeyCodes["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        KeyCodes[KeyCodes["END"] = 35] = "END";
        KeyCodes[KeyCodes["HOME"] = 36] = "HOME";
        KeyCodes[KeyCodes["ARROW_LEFT"] = 37] = "ARROW_LEFT";
        KeyCodes[KeyCodes["ARROW_FIRST"] = 37] = "ARROW_FIRST";
        KeyCodes[KeyCodes["ARROW_UP"] = 38] = "ARROW_UP";
        KeyCodes[KeyCodes["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
        KeyCodes[KeyCodes["ARROW_DOWN"] = 40] = "ARROW_DOWN";
        KeyCodes[KeyCodes["ARROW_LAST"] = 40] = "ARROW_LAST";
        KeyCodes[KeyCodes["INSERT"] = 45] = "INSERT";
        KeyCodes[KeyCodes["DELETE"] = 46] = "DELETE";
        KeyCodes[KeyCodes["A"] = 65] = "A";
        KeyCodes[KeyCodes["B"] = 66] = "B";
        KeyCodes[KeyCodes["C"] = 67] = "C";
        KeyCodes[KeyCodes["D"] = 68] = "D";
        KeyCodes[KeyCodes["E"] = 69] = "E";
        KeyCodes[KeyCodes["F"] = 70] = "F";
        KeyCodes[KeyCodes["G"] = 71] = "G";
        KeyCodes[KeyCodes["H"] = 72] = "H";
        KeyCodes[KeyCodes["I"] = 73] = "I";
        KeyCodes[KeyCodes["J"] = 74] = "J";
        KeyCodes[KeyCodes["K"] = 75] = "K";
        KeyCodes[KeyCodes["L"] = 76] = "L";
        KeyCodes[KeyCodes["M"] = 77] = "M";
        KeyCodes[KeyCodes["N"] = 78] = "N";
        KeyCodes[KeyCodes["O"] = 79] = "O";
        KeyCodes[KeyCodes["P"] = 80] = "P";
        KeyCodes[KeyCodes["Q"] = 81] = "Q";
        KeyCodes[KeyCodes["R"] = 82] = "R";
        KeyCodes[KeyCodes["S"] = 83] = "S";
        KeyCodes[KeyCodes["T"] = 84] = "T";
        KeyCodes[KeyCodes["U"] = 85] = "U";
        KeyCodes[KeyCodes["V"] = 86] = "V";
        KeyCodes[KeyCodes["W"] = 87] = "W";
        KeyCodes[KeyCodes["X"] = 88] = "X";
        KeyCodes[KeyCodes["Y"] = 89] = "Y";
        KeyCodes[KeyCodes["Z"] = 90] = "Z";
        KeyCodes[KeyCodes["MENU"] = 93] = "MENU";
        KeyCodes[KeyCodes["PLUS"] = 107] = "PLUS";
        KeyCodes[KeyCodes["MINUS"] = 109] = "MINUS";
        KeyCodes[KeyCodes["F1"] = 112] = "F1";
        KeyCodes[KeyCodes["F2"] = 113] = "F2";
        KeyCodes[KeyCodes["F3"] = 114] = "F3";
        KeyCodes[KeyCodes["F4"] = 115] = "F4";
        KeyCodes[KeyCodes["F5"] = 116] = "F5";
        KeyCodes[KeyCodes["F6"] = 117] = "F6";
        KeyCodes[KeyCodes["F7"] = 118] = "F7";
        KeyCodes[KeyCodes["F8"] = 119] = "F8";
        KeyCodes[KeyCodes["F9"] = 120] = "F9";
        KeyCodes[KeyCodes["F10"] = 121] = "F10";
        KeyCodes[KeyCodes["F11"] = 122] = "F11";
        KeyCodes[KeyCodes["F12"] = 123] = "F12";
        KeyCodes[KeyCodes["COMMA"] = 188] = "COMMA";
        KeyCodes[KeyCodes["PERIOD"] = 190] = "PERIOD";
    })(Common.KeyCodes || (Common.KeyCodes = {}));
    var KeyCodes = Common.KeyCodes;
    (function (MouseButtons) {
        MouseButtons[MouseButtons["LEFT_BUTTON"] = 0] = "LEFT_BUTTON";
        MouseButtons[MouseButtons["MIDDLE_BUTTON"] = 1] = "MIDDLE_BUTTON";
        MouseButtons[MouseButtons["RIGHT_BUTTON"] = 2] = "RIGHT_BUTTON";
    })(Common.MouseButtons || (Common.MouseButtons = {}));
    var MouseButtons = Common.MouseButtons;
    function blockBrowserAccelerators() {
        // Prevent the default F5 refresh, default F6 address bar focus, and default SHIFT + F10 context menu
        document.addEventListener("keydown", function (e) {
            if (e.keyCode === Common.KeyCodes.F5 ||
                e.keyCode === Common.KeyCodes.F6 ||
                (e.keyCode === Common.KeyCodes.F10 && e.shiftKey) ||
                (e.keyCode === Common.KeyCodes.F && e.ctrlKey)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        });
        // Prevent the default context menu
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        // Prevent mouse wheel zoom
        window.addEventListener("mousewheel", function (e) {
            if (e.ctrlKey) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        });
    }
    Common.blockBrowserAccelerators = blockBrowserAccelerators;
})(Common || (Common = {}));
// 
// Copyright (C) Microsoft. All rights reserved.
//
// From "Q11W_PerfTools\src\bptoob\PerfTools\Script\MemoryAnalyzer\js\controls\control.str"
var Common;
(function (Common) {
    var Controls;
    (function (Controls) {
        // Create a new control with the given root HTMLElement. If the root is not
        // provided, a default <div> root is used.
        var Control = (function () {
            function Control(root) {
                this._rootElement = root;
                if (typeof this._rootElement === "undefined") {
                    // We must have a root element to start with, default to a div.
                    // This can change at any time by setting the property rootElement.
                    this._rootElement = document.createElement("div");
                    this._rootElement.style.width = this._rootElement.style.height = "100%";
                }
                else if (this._rootElement === null) {
                    throw new Error("Invalid root element for Control.");
                }
            }
            Control.prototype.appendChild = function (child) {
                this._rootElement.appendChild(child.rootElement);
                child.parent = this;
            };
            Control.prototype.removeChild = function (child) {
                if (child.rootElement.parentElement) {
                    this._rootElement.removeChild(child.rootElement);
                    child.parent = null;
                }
            };
            Object.defineProperty(Control.prototype, "rootElement", {
                get: function () { return this._rootElement; },
                set: function (newRoot) {
                    if (!newRoot) {
                        throw new Error("Invalid root");
                    }
                    var oldRoot = this._rootElement;
                    this._rootElement = newRoot;
                    if (oldRoot && oldRoot.parentNode) {
                        oldRoot.parentNode.replaceChild(newRoot, oldRoot);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Control.prototype, "parent", {
                get: function () { return this._parent; },
                set: function (newParent) {
                    if (this._parent !== newParent) {
                        this._parent = newParent;
                        if (this._parent && !this._parent.rootElement.contains(this._rootElement)) {
                            this._parent.appendChild(this);
                        }
                        this.onParentChanged();
                    }
                },
                enumerable: true,
                configurable: true
            });
            // overridable
            Control.prototype.onParentChanged = function () {
            };
            return Control;
        }());
        Controls.Control = Control;
    })(Controls = Common.Controls || (Common.Controls = {}));
})(Common || (Common = {}));
//
// Copyright (C) Microsoft. All rights reserved.
//
/// <reference path="KeyCodes.ts" />
/// <reference path="control.ts" />
var Common;
(function (Common) {
    var Controls;
    (function (Controls) {
        var Grid;
        (function (Grid) {
            /**
             * Internal Grid Utility types
             */
            var Utility;
            (function (Utility) {
                var TreeNodeSort = (function () {
                    function TreeNodeSort() {
                    }
                    TreeNodeSort.stableReverse = function (array, comparer) {
                        var result = [];
                        for (var index = array.length - 1; index >= 0; index--) {
                            // Try to find the range of the sequential equal items, so we just need to find
                            // the index of the first different item
                            var firstDiffIndex = index - 1;
                            for (; firstDiffIndex >= 0; firstDiffIndex--) {
                                if (0 !== comparer(array[firstDiffIndex], array[index])) {
                                    break;
                                }
                            }
                            for (var equalIndex = firstDiffIndex + 1; equalIndex <= index; equalIndex++) {
                                result.push(array[equalIndex]);
                            }
                            index = firstDiffIndex + 1;
                        }
                        for (var index = 0; index < result.length; index++) {
                            array[index] = result[index];
                        }
                    };
                    TreeNodeSort.defaultComparer = function (column, order, rowA, rowB) {
                        var v1 = rowA[column.index], v2 = rowB[column.index];
                        if (typeof v1 === "undefined" || v1 === null) {
                            if (typeof v2 === "undefined" || v2 === null) {
                                return 0;
                            }
                            else {
                                return -1;
                            }
                        }
                        else if (typeof v2 === "undefined" || v2 === null) {
                            return 1;
                        }
                        return v1.toString().toLocaleUpperCase().localeCompare(v2.toString().toLocaleUpperCase());
                    };
                    TreeNodeSort.sortComparer = function (sortOrder, sortColumns, rowA, rowB) {
                        for (var i = 0; i < sortOrder.length; i++) {
                            var orderInfo = sortOrder[i];
                            var column = sortColumns[i];
                            var comparer = column.comparer || Utility.TreeNodeSort.defaultComparer;
                            var result = comparer(column, orderInfo.order, rowA, rowB);
                            if (result === 0) {
                                continue;
                            }
                            else if (orderInfo.order === "desc") {
                                return -result;
                            }
                            else {
                                return result;
                            }
                        }
                        return 0;
                    };
                    return TreeNodeSort;
                }());
                Utility.TreeNodeSort = TreeNodeSort;
            })(Utility = Grid.Utility || (Grid.Utility = {}));
            var TreeInfo = (function () {
                function TreeInfo(gridData, expandStates, toggleFunction) {
                    this.gridData = gridData;
                    this.expandStates = expandStates;
                    this.toggleFunction = toggleFunction;
                }
                return TreeInfo;
            }());
            Grid.TreeInfo = TreeInfo;
            var ColumnInfoSortLabels = (function () {
                function ColumnInfoSortLabels(sortedAscending, sortedDescending) {
                    this.sortedAscending = sortedAscending;
                    this.sortedDescending = sortedDescending;
                }
                return ColumnInfoSortLabels;
            }());
            Grid.ColumnInfoSortLabels = ColumnInfoSortLabels;
            var ColumnInfo = (function () {
                function ColumnInfo(index, text, tooltip, width, canSortBy, sortLabels, getColumnValue, getCellCSSClass, comparer, defaultSortOrder) {
                    this.index = index;
                    this.text = text;
                    this.tooltip = tooltip;
                    this.width = width;
                    this.canSortBy = canSortBy;
                    this.sortLabels = sortLabels || new ColumnInfoSortLabels("", "");
                    this.getColumnValue = getColumnValue;
                    this.getCellCSSClass = getCellCSSClass;
                    this.comparer = comparer;
                    this.hasHTMLContent = false;
                    this.defaultSortOrder = defaultSortOrder || "asc";
                    this.maxTooltipLineLength = ColumnInfo.DEFAULT_MAX_TOOLTIP_LINE_LENGTH;
                }
                ColumnInfo.DEFAULT_MAX_TOOLTIP_LINE_LENGTH = 64; // default tooltip line length
                return ColumnInfo;
            }());
            Grid.ColumnInfo = ColumnInfo;
            // This class is used by TFS Grid to config how the data are sorted.
            // So we have to follow TFS Grid's convention to construct this class.
            // e.g.
            //  "index" is the name of the property used for sorting
            //  "order" is either "asc" or "desc"
            var SortOrderInfo = (function () {
                function SortOrderInfo(index, order) {
                    this.index = index;
                    this.order = order;
                }
                return SortOrderInfo;
            }());
            Grid.SortOrderInfo = SortOrderInfo;
            // To ensure sorting only siblings, we need to convert the flat list to tree.
            // This class is used to represent a node in the tree.
            var TreeNode = (function () {
                function TreeNode(data, expandState) {
                    this.data = data;
                    this.expandState = expandState;
                    this.children = [];
                }
                return TreeNode;
            }());
            Grid.TreeNode = TreeNode;
            var GutterOptions = (function () {
                function GutterOptions(icon, checkbox) {
                    this.icon = icon;
                    this.checkbox = checkbox;
                }
                return GutterOptions;
            }());
            Grid.GutterOptions = GutterOptions;
            var GridOptions = (function () {
                function GridOptions(childDataCallback, columns, sortOrders, editCellCallback, allowMultipleSelection) {
                    this.childDataCallback = childDataCallback;
                    this.columns = columns;
                    this.sortOrders = sortOrders;
                    // Set defaults for the grid
                    this.gridName = "";
                    this.gridRole = "treegrid";
                    this.allowMultiSelect = allowMultipleSelection || false;
                    this.allowSortOnMultiColumns = false;
                    this.asyncInit = true;
                    this.autoSort = true;
                    this.coreCssClass = "grid";
                    this.cssClass = "";
                    this.canvasClass = "grid-canvas";
                    this.headerElementClass = "grid-header";
                    this.headerColumnElementClass = "grid-header-column";
                    this.rowClass = "grid-row";
                    this.rowNormalClass = "grid-row-normal";
                    this.rowSelectedClass = "grid-row-selected";
                    this.rowSelectedBlurClass = "grid-row-selected-blur";
                    this.rowCurrentClass = "grid-row-current";
                    this.cellClass = "grid-cell";
                    this.cellRole = "gridcell";
                    this.expandStates = [];
                    this.extendViewportBy = 3;
                    this.gutter = new GutterOptions();
                    this.header = true;
                    this.height = "100%";
                    this.initialSelection = false;
                    this.keepSelection = false;
                    this.payloadSize = 200;
                    this.source = null;
                    this.editCellCallback = editCellCallback;
                    this.overflowColumn = false;
                    this.focusable = true;
                }
                return GridOptions;
            }());
            Grid.GridOptions = GridOptions;
            var RowIndexInfo = (function () {
                function RowIndexInfo(rowIndex, dataIndex) {
                    this.rowIndex = rowIndex;
                    this.dataIndex = dataIndex;
                }
                return RowIndexInfo;
            }());
            Grid.RowIndexInfo = RowIndexInfo;
            var Size = (function () {
                function Size(width, height) {
                    this.width = width;
                    this.height = height;
                }
                return Size;
            }());
            Grid.Size = Size;
            var Range = (function () {
                function Range(start, end) {
                    this.start = start;
                    this.end = end;
                }
                return Range;
            }());
            var ColumnSizing = (function () {
                function ColumnSizing(active, index, originalWidth, origin) {
                    this.active = active;
                    this.index = index;
                    this.originalWidth = originalWidth;
                    this.origin = origin;
                }
                return ColumnSizing;
            }());
            var GridControl = (function (_super) {
                __extends(GridControl, _super);
                function GridControl(root, options) {
                    _super.call(this, root);
                    this._uID = GridControl.CURRENT_UID++;
                    // Set the options
                    this._options = options;
                    // Set the UI elements to null as we check for this later
                    this._canvas = null;
                    this._contentSpacer = null;
                    this._element = null;
                    this._focus = null;
                    this._gutter = null;
                    this._gutterHeader = null;
                    this._header = null;
                    this._headerCanvas = null;
                    // Initialize the data
                    this._dataSource = [];
                    // Note: this._rows is the number of visible rows the control is showing not the number of actual rows
                    this._rows = {};
                    this._columns = [];
                    this._expandStates = null;
                    this._expandedCount = 0;
                    this._sortOrder = [];
                    this._rowInfoMap = {};
                    this._editCellCallback = null;
                    // Initialize the selection
                    this._selectedRows = null;
                    this._selectionStart = -1;
                    this._selectionCount = 0;
                    this._selectedIndex = -1;
                    this._active = false;
                    this._activeAriaId = null;
                    this._getChildDataCallback = null;
                    // Initialize the layout
                    this._canvasHeight = 300;
                    this._canvasWidth = 300;
                    this._contentSize = null;
                    this._measurements = {};
                    // Note: this._count is the length of _dataSource including any placeholder rows
                    this._count = 0;
                    this._indentIndex = 0;
                    this._indentLevels = null;
                    this._visibleRange = [];
                    this._columnSizing = null;
                    this._sizingElement = null;
                    this._copyInProgress = false;
                    // Initialize the scrolling
                    this._resetScroll = false;
                    this._ignoreScroll = false;
                    this._scrollCausedByHeader = false;
                    this._scrollCausedByCanvas = false;
                    this._scrollTop = 0;
                    this._scrollLeft = 0;
                    this._cancelable = null;
                    // Initialize the theme attributes
                    this._updateThemeAttributes();
                    // Initialize the grid
                    this.initialize();
                }
                GridControl._setTooltip = function (element, value, height, maxTooltipLength) {
                    maxTooltipLength = maxTooltipLength || ColumnInfo.DEFAULT_MAX_TOOLTIP_LINE_LENGTH;
                    if (maxTooltipLength !== -1) {
                        value = this._textSplit(value, maxTooltipLength); // split tooltips that are too long
                    }
                    if (Microsoft.Plugin.Tooltip.defaultTooltipContentToHTML) {
                        value = value.replace(/[<>]/g, function ($0, $1, $2) { return ($0 === "<") ? "&lt;" : "&gt;"; }); // replace <, > by &lt, &gt                
                        value = value.replace("\r\n", "<br/>"); // replace new-line by <br/>
                    }
                    var tooltip = { content: value, height: height, contentContainsHTML: Microsoft.Plugin.Tooltip.defaultTooltipContentToHTML };
                    element.setAttribute("data-plugin-vs-tooltip", JSON.stringify(tooltip));
                };
                GridControl.prototype.getSelectionCount = function () {
                    return this._selectionCount;
                };
                GridControl.prototype.getElement = function () {
                    return this._element;
                };
                GridControl.prototype.setAriaDescription = function (description) {
                    this._ariaDescription = description;
                };
                GridControl.prototype.initializeDataSource = function () {
                    var canvas;
                    if (this._resetScroll) {
                        this._ignoreScroll = true;
                        try {
                            canvas = this._canvas;
                            canvas.scrollTop = 0;
                            canvas.scrollLeft = 0;
                            this._scrollLeft = 0;
                            this._scrollTop = 0;
                            this._resetScroll = false;
                        }
                        finally {
                            this._ignoreScroll = false;
                        }
                    }
                    return this.setDataSource(this._options.source, this._options.expandStates, this._options.columns, this._options.sortOrders)
                        .then(this._initializeDataSourceComplete.bind(this));
                };
                GridControl.prototype.activateWithDynamicData = function (count) {
                    this.setDataSource([], [], this._options.columns, null);
                    this._count = count;
                    this._expandedCount = count;
                    this._expandStates = [0];
                };
                // NOTE: The returned promise will represent the action after the layout of the datasource data 
                // only if the grid option 'asyncInit' is set to false.
                GridControl.prototype.setDataSource = function (source, expandStates, columns, sortOrder, selectedIndex) {
                    var _this = this;
                    var i, l, count;
                    this._dataSource = source || [];
                    this._count = count = this._dataSource.length;
                    if (expandStates) {
                        this._expandStates = expandStates;
                        this._indentLevels = GridControl.expand(expandStates);
                    }
                    else {
                        this._indentLevels = null;
                        this._expandStates = null;
                    }
                    this._expandedCount = count;
                    this._updateRanges();
                    this._columns = [];
                    this._columnHeaderIds = {};
                    if (columns) {
                        // columns are optional.
                        // Default implementations for column functions, bound as lambda function objects to preserve "this" context
                        var defaultGetCellContents = function (rowInfo, dataIndex, expandedState, level, column, indentIndex, columnOrder) {
                            return _this._drawCell(rowInfo, dataIndex, expandedState, level, column, indentIndex, columnOrder);
                        };
                        var defaultGetHeaderCellContents = function (column, columnOrder) {
                            return _this._drawHeaderCellValue(column, columnOrder);
                        };
                        var defaultGetColumnValue = function (dataIndex, columnIndex, columnOrder) {
                            return _this.getColumnValue(dataIndex, columnIndex, columnOrder);
                        };
                        for (i = 0, l = columns.length; i < l; i++) {
                            var column = columns[i];
                            // Column value default settings
                            column.index = typeof (column.index) !== "undefined" ? column.index : String(i);
                            column.canSortBy = column.canSortBy !== false;
                            column.canMove = column.canMove !== false;
                            column.width = typeof (column.width) !== "undefined" ? column.width : 100;
                            // Column drawing default implementations
                            column.getCellContents = column.getCellContents || defaultGetCellContents;
                            column.getHeaderCellContents = column.getHeaderCellContents || defaultGetHeaderCellContents;
                            column.getColumnValue = column.getColumnValue || defaultGetColumnValue;
                            this._columns.push(column);
                            this._columnHeaderIds[column.index] = this._getId() + "_header_" + i;
                        }
                    }
                    this._sortOrder = [];
                    if (sortOrder) {
                        for (i = 0, l = sortOrder.length; i < l; i++) {
                            var columnSortOrder = sortOrder[i];
                            if (columnSortOrder.order !== "desc") {
                                columnSortOrder.order = "asc";
                            }
                            this._sortOrder.push(columnSortOrder);
                        }
                    }
                    this._clearSelection();
                    this._determineIndentIndex();
                    if (this._options.asyncInit) {
                        window.setTimeout(function () { return _this._layoutAfterSetDataSource(selectedIndex); }, 0);
                    }
                    else {
                        this._layoutAfterSetDataSource(selectedIndex);
                    }
                    return Microsoft.Plugin.Promise.wrap(null);
                };
                /**
                 * Gets the information about a row associated with the given data index
                 * @param dataIndex The data index for the record to retrieve
                 * @returns A rowInfo object containing the rowIndex, dataIndex and a jQuery wrapper for the actual row
                 */
                GridControl.prototype.getRowInfo = function (dataIndex) {
                    return this._rows[dataIndex];
                };
                GridControl.prototype.getRowData = function (dataIndex) {
                    /// <summary>Gets the data being used to display the row at the provided data index.</summary>
                    /// <param name="dataIndex" type="number">The data index for the record to retrieve.</param>
                    /// <returns type="object">Data being used to display the row.<returns>
                    return this._dataSource[dataIndex];
                };
                GridControl.prototype.getRowDataIndex = function (data) {
                    return this._dataSource.indexOf(data);
                };
                /**
                 * Gets the columns currently being displayed in the grid.
                 */
                GridControl.prototype.getColumns = function () {
                    return this._columns || [];
                };
                /**
                 * Gets the current sort order being used in the grid.
                 */
                GridControl.prototype.getSortOrder = function () {
                    return this._sortOrder || [];
                };
                GridControl.prototype.getSortColumns = function (sortOrders) {
                    sortOrders = sortOrders || this.getSortOrder();
                    return this._getSortColumns(sortOrders);
                };
                GridControl.prototype._updateRanges = function () {
                    var i = 0, first = 0, l = this._count, newRanges = [], count = 0;
                    if (this._expandStates) {
                        while (i < l) {
                            var state = this._expandStates[i];
                            if (state < 0) {
                                newRanges[newRanges.length] = new Range(first, i);
                                count += (i - first) + 1;
                                i += 1 - state;
                                first = i;
                            }
                            else {
                                i++;
                            }
                        }
                        if (first < l) {
                            newRanges[newRanges.length] = new Range(first, l - 1);
                            count += (l - first);
                        }
                    }
                    else {
                        count = l;
                        newRanges[newRanges.length] = new Range(0, count);
                    }
                    this._expandedCount = count;
                    this._visibleRange = newRanges;
                };
                GridControl.prototype.expandNode = function (dataIndex) {
                    var _this = this;
                    if (this._dataSource[dataIndex + 1].isPlaceholder) {
                        this._getChildDataCallback(this._dataSource[dataIndex], function (dynamicData) {
                            if (dynamicData !== null) {
                                _this._adjustForDynamicData(dynamicData.itemsWithPlaceholders, dynamicData.expandStates, dataIndex);
                            }
                        });
                    }
                    if (this._expandStates) {
                        var state = this._getExpandState(dataIndex);
                        if (state < 0) {
                            this._expandStates[dataIndex] = -state;
                            this._updateRanges();
                            var row = this._rows[dataIndex];
                            if (row) {
                                row.isDirty = true;
                            }
                            this._onExpandedCollapsed(true, dataIndex);
                        }
                    }
                };
                GridControl.prototype.collapseNode = function (dataIndex) {
                    if (this._expandStates) {
                        var state = this._expandStates[dataIndex];
                        if (state > 0) {
                            this._expandStates[dataIndex] = -state;
                            this._updateRanges();
                            var row = this._rows[dataIndex];
                            if (row) {
                                row.isDirty = true;
                            }
                            this._onExpandedCollapsed(false, dataIndex);
                        }
                    }
                };
                GridControl.prototype.expandAllNodes = function () {
                    var i = 0, l = this._count, states = this._expandStates, result = false, rows = this._rows;
                    if (states) {
                        while (i < l) {
                            var state = states[i];
                            if (state < 0) {
                                states[i] = -state;
                                result = true;
                                var row = rows[i];
                                if (row) {
                                    row.isDirty = true;
                                }
                            }
                            i++;
                        }
                        if (result) {
                            this._updateRanges();
                            this._onExpandedCollapsed(true);
                        }
                    }
                    return result;
                };
                GridControl.prototype.collapseAllNodes = function () {
                    var i = 0, l = this._count, states = this._expandStates, result = false, rows = this._rows;
                    if (states) {
                        while (i < l) {
                            var state = states[i];
                            if (state > 0) {
                                states[i] = -state;
                                result = true;
                                var row = rows[i];
                                if (row) {
                                    row.isDirty = true;
                                }
                            }
                            i++;
                        }
                        if (result) {
                            this._updateRanges();
                            this._onExpandedCollapsed(false);
                        }
                    }
                    return result;
                };
                GridControl.prototype.expandAll = function () {
                    var _this = this;
                    this._updateExpansionStateAndRedraw(function () { return _this.expandAllNodes(); });
                };
                GridControl.prototype.collapseAll = function () {
                    var _this = this;
                    this._updateExpansionStateAndRedraw(function () { return _this.collapseAllNodes(); });
                };
                GridControl.prototype.tryToggle = function (expand, shiftKey) {
                    var state;
                    if (!this._expandStates || this._selectedIndex < 0 || this.getExpandedCount() <= 0) {
                        return false;
                    }
                    var dataIndex = this._getDataIndex(this._selectedIndex);
                    var row = this._rows[dataIndex];
                    if (!row) {
                        return false;
                    }
                    state = this._getExpandState(dataIndex);
                    if (state !== 0) {
                        if (expand) {
                            if (state < 0) {
                                this.expandNode(dataIndex);
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            if (state > 0) {
                                this.collapseNode(dataIndex);
                            }
                            else {
                                return false;
                            }
                        }
                        this._clearSelection();
                        this._addSelection(this._selectedIndex);
                        this._layoutContentSpacer();
                        this._redraw();
                        return true;
                    }
                    return false;
                };
                GridControl.prototype.calculateVisibleRowIndices = function (top, bottom) {
                    var count = this.getExpandedCount() - 1, rh = this._measurements.rowHeight;
                    return {
                        first: Math.min(count, Math.max(0, Math.ceil(top / rh))),
                        last: Math.min(count, Math.floor(bottom / rh) - 1)
                    };
                };
                GridControl.prototype.getSelectedRowIntoView = function (force) {
                    return this._getRowIntoView(this._selectedIndex, force);
                };
                GridControl.prototype.getSelectedRowIntoViewCenter = function () {
                    return this._getRowIntoViewCenter(this._selectedIndex);
                };
                GridControl.prototype.getSelectedRows = function () {
                    return this._selectedRows;
                };
                GridControl.prototype.cacheRows = function (aboveRange, visibleRange, belowRange) {
                };
                GridControl.prototype.updateRow = function (rowIndex, dataIndex) {
                    var expandedState = 0, level = 0;
                    if (typeof dataIndex === "undefined" || dataIndex < 0) {
                        dataIndex = this._getDataIndex(rowIndex);
                    }
                    else if (typeof rowIndex === "undefined" || rowIndex < 0) {
                        rowIndex = this._getRowIndex(dataIndex);
                    }
                    var rowInfo = this._rows[dataIndex];
                    if (rowInfo) {
                        if (this._expandStates) {
                            expandedState = this._getExpandState(dataIndex);
                            level = this.indentLevel(dataIndex);
                        }
                        this._updateRow(rowInfo, rowIndex, dataIndex, expandedState, level);
                    }
                };
                GridControl.prototype.layout = function () {
                    this._measureCanvasSize();
                    this._cleanUpRows();
                    this._fixScrollPos();
                    this._layoutContentSpacer();
                    this._updateViewport();
                    this._layoutHeader();
                    this._drawHeader();
                };
                GridControl.prototype.redraw = function () {
                    this._fixScrollPos();
                    this._redraw(true);
                };
                /**
                 * Gets the value for a column. The default use of the return value is to
                 * convert it to a string and set it as the cell's text value.
                 * @param dataIndex The index for the row data in the data source
                 * @param columnIndex The index of the column's data in the row's data array
                 * @param columnOrder The index of the column in the grid's column array. This is the current visible order of the column
                 */
                GridControl.prototype.getColumnValue = function (dataIndex, columnIndex, columnOrder) {
                    return this._dataSource[dataIndex][columnIndex];
                };
                GridControl.prototype.getColumnText = function (dataIndex, column, columnOrder) {
                    var text;
                    var value = column.getColumnValue(dataIndex, column.index, columnOrder, this._dataSource);
                    if (typeof value !== "string") {
                        text = GridControl.convertValueToDisplayString(value, column.format);
                    }
                    else {
                        text = value;
                    }
                    column.maxLength = Math.max(column.maxLength || 0, text.length);
                    return text;
                };
                GridControl.prototype.getSelectedRowIndex = function () {
                    return this._selectionCount > 0 ? this._selectedIndex : -1;
                };
                GridControl.prototype.setSelectedRowIndex = function (selectedRowIndex) {
                    this._clearSelection();
                    this._addSelection(selectedRowIndex);
                };
                GridControl.prototype.getSelectedDataIndex = function () {
                    return this._getDataIndex(this.getSelectedRowIndex());
                };
                GridControl.prototype.getSelectedDataIndices = function () {
                    var index, rows = this._selectedRows, indices = [];
                    if (rows) {
                        for (index in rows) {
                            indices[indices.length] = rows[index];
                        }
                    }
                    return indices;
                };
                /**
                 * Ensures that an item (identified by a data index) has an associated row by
                 * expanding any enclosing collapsed rows. Returns the rowIndex of the associated row.
                 * @param dataIndex The data index of the item to ensure is expanded
                 */
                GridControl.prototype.ensureDataIndexExpanded = function (dataIndex) {
                    var rowIndex = this._getRowIndex(dataIndex);
                    while (rowIndex < 0 || (dataIndex > 0 && rowIndex === 0)) {
                        this.expandNode(this._getDataIndex(-rowIndex));
                        rowIndex = this._getRowIndex(dataIndex);
                    }
                    return rowIndex;
                };
                /**
                 * Sets the selected item in the grid by the data index.
                 * Optionally ensure that the item is not hidden by collapsed rows.
                 * @param dataIndex The data index of item to show
                 * @param expandNodes If true all containing collapsed nodes will be expanded
                 */
                GridControl.prototype.setSelectedDataIndex = function (dataIndex, expandNodes) {
                    var rowIndex = expandNodes ? this.ensureDataIndexExpanded(dataIndex) : this._getRowIndex(dataIndex);
                    this.setSelectedRowIndex(rowIndex);
                };
                GridControl.prototype.selectionChanged = function (selectedIndex, selectedCount, selectedRows) {
                };
                GridControl.prototype.selectedIndexChanged = function (selectedRowIndex, selectedDataIndex) {
                };
                GridControl.prototype.onSort = function (sortOrder, sortColumns) {
                    if (this._options.autoSort) {
                        this._trySorting(sortOrder, sortColumns);
                        this._sortOrder = sortOrder;
                        this.layout();
                    }
                    // Refresh UI after the sort
                    return true;
                };
                GridControl.prototype.getRowInfoFromEvent = function (e, selector) {
                    var element = this.findClosestElement(e.target, selector);
                    if (element) {
                        return this._rowInfoMap[element.id];
                    }
                    else {
                        return null;
                    }
                };
                /**
                 * Gets the collection of expand states for the grid.
                 */
                GridControl.prototype.getExpandStates = function () {
                    return this._expandStates;
                };
                GridControl.prototype.options = function () {
                    return this._options;
                };
                GridControl.prototype.getExpandedCount = function () {
                    return this._expandedCount;
                };
                GridControl.prototype.setCounts = function (n) {
                    this._expandedCount = n;
                    this._count = n;
                };
                GridControl.prototype.updateCounts = function (n) {
                    this._expandedCount += n;
                    this._count += n;
                };
                GridControl.prototype.getVisibleRowIndices = function () {
                    return this._getVisibleRowIndices();
                };
                GridControl.prototype.addEventListenerToCanvas = function (eventString, caller, handler) {
                    var handlerExecutor = function () {
                        handler.apply(caller, arguments);
                    };
                    this._canvas.addEventListener(eventString, handlerExecutor);
                };
                GridControl.prototype.onSelectRow = function (rowIndex) {
                };
                /**
                 * Widens all rows to width, or the row with the widest content.
                 */
                GridControl.prototype.widenRows = function (minWidth) {
                    var padding = 4;
                    // Get the widest width
                    for (var row in this._canvas.children) {
                        if (row === "0")
                            continue;
                        if (this._canvas.children.hasOwnProperty(row) && this._canvas.children[row].children) {
                            var rowWidth = 0;
                            for (var cell in this._canvas.children[row].children) {
                                if (this._canvas.children[row].children.hasOwnProperty(cell)) {
                                    rowWidth += this._canvas.children[row].children[cell].scrollWidth;
                                }
                            }
                            if (minWidth < rowWidth + padding) {
                                minWidth = rowWidth + padding;
                            }
                        }
                    }
                    for (var row in this._canvas.children) {
                        if (row === "0")
                            continue;
                        if (this._canvas.children.hasOwnProperty(row) && this._canvas.children[row].children) {
                            var rowElement = this._canvas.children[row];
                            rowElement.style.width = minWidth + "px";
                        }
                    }
                };
                GridControl.prototype.canvasClientWidth = function () {
                    return this._canvas.clientWidth;
                };
                GridControl.prototype.markRowDirty = function (dataIndex) {
                    if (this._rows[dataIndex]) {
                        this._rows[dataIndex].isDirty = true;
                    }
                };
                GridControl.prototype.getMeasurements = function () {
                    return this._measurements;
                };
                /**
                 * derived class could implement this function and provide custom row height
                 */
                GridControl.prototype.getRowTop = function (rowIndex) {
                    return (rowIndex * this._measurements.rowHeight);
                };
                GridControl.prototype.getTotalDataHeight = function () {
                    return this.getExpandedCount() * this._measurements.rowHeight;
                };
                GridControl.prototype.isActive = function () {
                    return this._active;
                };
                GridControl.prototype.getHeaderHeight = function () {
                    return this._options.header ? this._header.clientHeight : 0;
                };
                GridControl.prototype.onCtrlC = function () {
                };
                GridControl.prototype.onF12 = function () {
                };
                GridControl.prototype.onCtrlG = function () {
                };
                GridControl.prototype.isEmpty = function () {
                    for (var index in this._rows) {
                        var numIndex = parseInt(index);
                        if (this._rows.hasOwnProperty(numIndex)) {
                            return false;
                        }
                    }
                    return true;
                };
                GridControl.prototype.getCanvas = function () {
                    return this._canvas;
                };
                // row selection and mouse hover events
                GridControl.prototype.updateMouseOverRowStyle = function (row) { };
                GridControl.prototype.updateMouseOutRowStyle = function (row) { };
                GridControl.prototype.updateSelectedRowStyle = function (row) { };
                GridControl.prototype.updateUnselectedRowStyle = function (row) { };
                GridControl.prototype.onTreeIconMouseOver = function (e) { };
                GridControl.prototype.onTreeIconMouseOut = function (e) { };
                GridControl.expand = function (states) {
                    var result = [];
                    if (states.length > 0) {
                        var stack = [];
                        var currState = { level: 1, origCount: states.length, remainingCount: states.length };
                        stack.push(currState);
                        var i = 0;
                        while (i < states.length) {
                            result.push(currState.level);
                            currState.remainingCount--;
                            while (currState.remainingCount === 0) {
                                stack.pop();
                                if (stack.length == 0) {
                                    if (i === (states.length - 1)) {
                                        break;
                                    }
                                    else {
                                        throw new Error("invalid descendant counts, nesting not possible");
                                    }
                                }
                                var newState = stack[stack.length - 1];
                                newState.remainingCount -= currState.origCount;
                                currState = newState;
                                if (currState.remainingCount < 0) {
                                    throw new Error("invalid descendant counts, cannot convert to indentation levels");
                                }
                            }
                            var nextCount = Math.abs(states[i]);
                            if (nextCount > 0) {
                                var nextItem = { level: result[result.length - 1] + 1, origCount: nextCount, remainingCount: nextCount };
                                stack.push(nextItem);
                                currState = nextItem;
                            }
                            i++;
                        }
                        if (stack.length > 0) {
                            throw new Error("invalid descendant counts, more input expected");
                        }
                    }
                    return result;
                };
                GridControl.prototype._getExpandState = function (dataIndex) {
                    var result = 0;
                    if (this._expandStates) {
                        if (typeof (this._expandStates[dataIndex]) === "number") {
                            result = this._expandStates[dataIndex];
                        }
                    }
                    return result;
                };
                GridControl.prototype._clearSelection = function () {
                    this._selectionCount = 0;
                    this._selectedRows = null;
                    this._activeAriaId = null;
                };
                /**
                 * Highlights the row at the specified rowIndex
                 * @param rowIndex Index of the row in the visible source (taking the expand/collapse states into account)
                 * @param dataIndex Index of the row in the overall source
                 * @param options Specifies options such as:
                 *    - keepSelectionStart: Keepd the rowIndex as the basis for range selection
                 *    - doNotFireEvent: Prevents firing events
                 *    - toggle: Toggles the row in the selection
                 */
                GridControl.prototype._addSelection = function (rowIndex, dataIndex, options) {
                    var keepSelectionStart = options && options.keepSelectionStart, doNotFireEvent = options && options.doNotFireEvent, toggle = options && options.toggle;
                    if (this._options.allowMultiSelect === false) {
                        keepSelectionStart = false;
                        this._clearSelection();
                    }
                    if (!this._selectedRows) {
                        this._selectedRows = {};
                    }
                    if (rowIndex >= 0) {
                        var add = true;
                        if (!(this._selectedRows.hasOwnProperty(rowIndex))) {
                            // If not selected before increasing selection count
                            this._selectionCount++;
                        }
                        else if (toggle) {
                            // If the row already exists in the selection and toggle is enabled
                            // removing it from the selection
                            add = false;
                            this._selectionCount = Math.max(0, this._selectionCount - 1);
                            delete this._selectedRows[rowIndex];
                        }
                        if (typeof (dataIndex) !== "number") {
                            // If the dataIndex is not specified, finding it by using visible rowIndex
                            dataIndex = this._getDataIndex(rowIndex);
                        }
                        if (add) {
                            this._selectedRows[rowIndex] = dataIndex;
                        }
                        this._selectedIndex = rowIndex;
                        this._updateAriaAttribute();
                        if (this._selectionStart < 0 || !keepSelectionStart) {
                            this._selectionStart = rowIndex;
                        }
                    }
                    else {
                        dataIndex = -1;
                        this._selectedIndex = -1;
                    }
                    if (!doNotFireEvent) {
                        this._updateSelectionStyles();
                        this._selectionChanged();
                        this._selectedIndexChanged(this._selectedIndex, dataIndex);
                    }
                    if (rowIndex >= 0) {
                        this.onSelectRow(rowIndex);
                    }
                };
                GridControl.prototype.checkUpdateActive = function (rowInfo) {
                    if (this._selectionCount > 0 && rowInfo.rowIndex === this._selectedIndex && rowInfo.row) {
                        this.updateActive(rowInfo.row);
                    }
                };
                GridControl.prototype.updateActive = function (row) {
                    try {
                        row.setActive();
                    }
                    catch (err) {
                    }
                };
                /**
                * This is especially necessary for screen readers to read each
                * row when the selection changes.
                */
                GridControl.prototype._updateAriaAttribute = function () {
                    var dataIndex = this._getDataIndex(this._selectedIndex);
                    if (dataIndex != null) {
                        // Getting row info using data index
                        var rowInfo = this.getRowInfo(dataIndex);
                        if (!rowInfo || !rowInfo.row) {
                            // The row is not created yet. 
                            // The next time the canvas redraws update the aria label
                            this._updateAriaOnViewportUpdate = true;
                        }
                        else {
                            var id = rowInfo.row.getAttribute("id");
                            if (id !== this._activeAriaId) {
                                // Setting active element attribute
                                var ariaLabel = this._getAriaLabelForRow(rowInfo);
                                rowInfo.row.setAttribute("aria-label", ariaLabel);
                                this._activeAriaId = id;
                            }
                            if (this._active) {
                                // Don't set focus here. Focus is set through click 
                                // events and onFocus will call this method. Instead
                                // just set the row as the active element
                                this.checkUpdateActive(rowInfo);
                            }
                        }
                    }
                };
                GridControl.prototype._getAriaLabelForRow = function (rowInfo) {
                    var ariaLabel = "";
                    var rowIndex = rowInfo.rowIndex;
                    var dataIndex = rowInfo.dataIndex;
                    var expandedState = 0, level = 0;
                    if (this._expandStates) {
                        expandedState = this._expandStates[dataIndex];
                        level = this._indentLevels[dataIndex];
                    }
                    var columns = this._columns;
                    for (var i = 0, l = columns.length; i < l; i++) {
                        var column = columns[i];
                        if (column.hidden) {
                            continue;
                        }
                        var cellText = column.text + ", " + this.getColumnText(dataIndex, column, i);
                        if (ariaLabel) {
                            ariaLabel += ", ";
                        }
                        ariaLabel += cellText;
                    }
                    return ariaLabel;
                };
                GridControl.prototype._updateSelectionStyles = function () {
                    var _this = this;
                    var updateFunc = function () {
                        var dataIndex, selectedRows = _this._selectedRows, focusIndex = _this._selectedIndex, rows = _this._rows;
                        for (dataIndex in rows) {
                            var rowInfo = rows[dataIndex];
                            _this._updateRowSelectionStyle(rowInfo, selectedRows, focusIndex);
                        }
                    };
                    if (!this._options.allowMultiSelect) {
                        updateFunc();
                    }
                    else {
                        if (this._delayedUpdateSelectionCookie) {
                            window.clearImmediate(this._delayedUpdateSelectionCookie);
                        }
                        this._delayedUpdateSelectionCookie = window.setImmediate(function () {
                            _this._delayedUpdateSelectionCookie = 0;
                            updateFunc();
                        });
                    }
                };
                GridControl.prototype._updateRowSelectionStyle = function (rowInfo, selectedRows, focusIndex) {
                    var rowIndex = rowInfo.rowIndex;
                    var rowElement = rowInfo.row;
                    var gutterElement = rowInfo.gutterRow;
                    rowElement.classList.remove(this._options.rowSelectedClass);
                    rowElement.classList.remove(this._options.rowSelectedBlurClass);
                    rowElement.classList.remove(this._options.rowCurrentClass);
                    rowElement.setAttribute("aria-selected", "false");
                    this.updateUnselectedRowStyle(rowInfo);
                    if (gutterElement) {
                        gutterElement.classList.remove("grid-gutter-row-selected");
                        gutterElement.classList.remove("grid-gutter-row-selected-blur");
                        gutterElement.classList.remove("grid-gutter-row-current");
                        gutterElement.querySelector("input.checkbox").setAttribute("checked", String(false));
                    }
                    if (selectedRows && selectedRows.hasOwnProperty(rowIndex)) {
                        if (gutterElement) {
                            gutterElement.querySelector("input.checkbox").setAttribute("checked", String(true));
                        }
                        if (this._active) {
                            rowElement.classList.add(this._options.rowSelectedClass);
                            this.updateSelectedRowStyle(rowInfo);
                            if (gutterElement) {
                                gutterElement.classList.add("grid-gutter-row-selected");
                            }
                        }
                        else {
                            rowElement.classList.add(this._options.rowSelectedBlurClass);
                            if (gutterElement) {
                                gutterElement.classList.add("grid-gutter-row-selected-blur");
                            }
                        }
                        rowElement.setAttribute("aria-selected", "true");
                    }
                    if (rowIndex === focusIndex) {
                        rowElement.classList.add(this._options.rowCurrentClass);
                        if (gutterElement) {
                            gutterElement.classList.add("grid-gutter-row-current");
                        }
                    }
                };
                GridControl.prototype.focus = function (timeout) {
                    if (!this._options.focusable) {
                        return;
                    }
                    var focusableElement = this._focus;
                    var doSetFocus = function () {
                        try {
                            focusableElement.focus();
                        }
                        catch (ex) {
                        }
                    };
                    if (typeof timeout === "undefined") {
                        doSetFocus();
                    }
                    else {
                        window.setTimeout(function () {
                            doSetFocus();
                        }, timeout);
                    }
                };
                GridControl.prototype._onContainerMouseDown = function (e) {
                    var targetElement = e.target;
                    if (targetElement.classList.contains("grid-edit-box")) {
                        return;
                    }
                    if (this._options.focusable) {
                        this.focus(10);
                    }
                };
                GridControl.prototype._onContainerResize = function (e) {
                    this.layout();
                };
                GridControl.prototype._applyColumnSizing = function (columnIndex, initialWidth, finish) {
                    var domColumnIndex = this._getVisibleColumnIndex(columnIndex) + 1, // Add 1 because DOM nth-child selector use 1-based (not 0-based) indices
                    column = this._columns[columnIndex], columnSizeChanged = false;
                    initialWidth = initialWidth || -1;
                    if (column) {
                        columnSizeChanged = column.width !== initialWidth;
                        var columnDiv = this.rootElement.querySelector(".grid-header-canvas ." + this._options.headerColumnElementClass + ":nth-child(" + domColumnIndex + ")");
                        columnDiv.style.width = column.width + "px";
                    }
                    if (finish === true) {
                        if (columnSizeChanged) {
                            this.layout();
                        }
                        this._onColumnResize(column);
                    }
                };
                GridControl.prototype._trySorting = function (sortOrder, sortColumns) {
                    var _this = this;
                    if (!sortColumns) {
                        sortColumns = this._getSortColumns(sortOrder);
                    }
                    // Archive the selected datas and rows before sorting,
                    // as we will try to recover them after sorting.
                    var selectedDatas = [], sumOfSelectedRowIndices = 0;
                    for (var rowIndex in this._selectedRows) {
                        var dataIndex = this._selectedRows[rowIndex];
                        var data = this._dataSource[dataIndex];
                        if (data) {
                            selectedDatas.push(data);
                            sumOfSelectedRowIndices += parseInt(rowIndex);
                        }
                    }
                    // Convert the arrays to tree as we only sort the siblings
                    var rootNode = new TreeNode(null, null);
                    GridControl.addItemsToTree(this._dataSource, this._expandStates, 0, this._dataSource.length, rootNode);
                    // Sort the siblings
                    if (this._sortOrder &&
                        this._sortOrder.length === 1 &&
                        sortOrder.length === 1 &&
                        this._sortOrder[0] !== sortOrder[0] &&
                        this._sortOrder[0].index === sortOrder[0].index) {
                        // If only the ordering is different, we just need to reverse the siblings, which is much faster than sort
                        if (this._sortOrder[0].order !== sortOrder[0].order) {
                            GridControl.walkTree(rootNode, function (node) {
                                Utility.TreeNodeSort.stableReverse(node.children, function (v1, v2) {
                                    return Utility.TreeNodeSort.sortComparer(sortOrder, sortColumns, v1.data, v2.data);
                                });
                            });
                        }
                    }
                    else {
                        GridControl.walkTree(rootNode, function (node) {
                            node.children.sort(function (v1, v2) {
                                return Utility.TreeNodeSort.sortComparer(sortOrder, sortColumns, v1.data, v2.data);
                            });
                        });
                    }
                    // Convert the sorted tree back to arrays
                    // Note the root node is excluded from the array as it's used only to build up the tree struct
                    this._dataSource = [];
                    this._expandStates = [];
                    for (var i = 0; i < rootNode.children.length; i++) {
                        GridControl.walkTree(rootNode.children[i], function (node) {
                            _this._dataSource.push(node.data);
                            _this._expandStates.push(node.expandState);
                        });
                    }
                    this._indentLevels = GridControl.expand(this._expandStates);
                    this._updateRanges();
                    // Recover the selected rows, which means the objects selected before sorting should be selected after sorting
                    if (this._selectionCount > 0) {
                        this._clearSelection();
                        var sumOfNewSelectedRowIndices = 0;
                        for (var i = 0; i < selectedDatas.length; i++) {
                            var dataIndex = this._dataSource.indexOf(selectedDatas[i]);
                            if (dataIndex >= 0) {
                                var dataRowIndex = this._getRowIndex(dataIndex);
                                this._addSelection(dataRowIndex, dataIndex);
                                sumOfNewSelectedRowIndices += dataRowIndex;
                            }
                        }
                        // Update scroller's top to ensure the selected row is still visible at the same offset of the screen.
                        // In case there are multiple selections, use the average row index to calculate the offset.
                        // TFS Grid will validate the scroller's top before redraw the rows, so we don't need to worry
                        // about if this scroller's top exceeds the boundary.
                        this._scrollTop += (sumOfNewSelectedRowIndices - sumOfSelectedRowIndices) / this._selectionCount * this._measurements.rowHeight;
                    }
                };
                GridControl.prototype.findClosestElement = function (element, selector) {
                    // Stop if we reach our container
                    var stop = this._element.parentNode;
                    // Find the closest matching element
                    var closest = element;
                    while (closest && closest !== stop) {
                        if (closest.msMatchesSelector(selector)) {
                            return closest;
                        }
                        closest = closest.parentNode;
                    }
                    return closest;
                };
                GridControl.prototype.fireCustomEvent = function (element, eventName, args) {
                    // Create the event and attach custom data
                    var customEvent = document.createEvent("Event");
                    customEvent.initEvent(eventName, true, true);
                    customEvent.customData = args;
                    // Fire the event via the DOM
                    element.dispatchEvent(customEvent);
                };
                GridControl.prototype.createElementWithClass = function (tagName, className) {
                    // Create the element using the DOM
                    var element = document.createElement(tagName);
                    // Add a class name
                    if (className) {
                        element.className = className;
                    }
                    return element;
                };
                GridControl.prototype._attachEvents = function () {
                    var _this = this;
                    window.addEventListener("resize", function (e) { return _this._onContainerResize(e); });
                    this._element.addEventListener("mousedown", function (e) { return _this._onContainerMouseDown(e); });
                    this._element.addEventListener("keydown", function (e) { return _this._onKeyDown(e); });
                    Microsoft.Plugin.Theme.addEventListener("themechanged", function (e) { return _this._onThemeChanged(e); });
                    if (this._options.focusable) {
                        this._focus.addEventListener("focus", function (e) { return _this._onFocus(e); });
                        this._focus.addEventListener("blur", function (e) { return _this._onBlur(e); });
                    }
                    this._canvas.addEventListener("mousedown", function (e) { return _this._onRowMouseDown(e); });
                    this._canvas.addEventListener("dblclick", function (e) { return _this._onEditCell(e); });
                    this._canvas.addEventListener("scroll", function (e) { return _this._onCanvasScroll(e); });
                    this._canvas.addEventListener("selectstart", function () { return false; });
                    if (this._header) {
                        // Binding the necessary events for column move, resize and sort
                        this._header.addEventListener("mousedown", function (e) { return _this._onHeaderMouseDown(e); });
                        this._header.addEventListener("mouseup", function (e) { return _this._onHeaderMouseUp(e); });
                        this._header.addEventListener("click", function (e) { return _this._onHeaderClick(e); });
                        this._header.addEventListener("dblclick", function (e) { return _this._onHeaderDblClick(e); });
                        this._header.addEventListener("scroll", function (e) { return _this._onHeaderScroll(e); });
                    }
                    if (this._gutter) {
                        this._gutter.addEventListener("click", function (e) { return _this._onGutterClick(e); });
                        this._gutter.addEventListener("mouseover", function (e) {
                            var row = this.findClosestElement(e.target, ".grid-gutter-row");
                            if (row) {
                                row.classList.add("grid-gutter-row-hover");
                            }
                        }.bind(this));
                        this._gutter.addEventListener("mouseout", function (e) {
                            var row = this.findClosestElement(e.target, ".grid-gutter-row");
                            if (row) {
                                row.classList.remove("grid-gutter-row-hover");
                            }
                        }.bind(this));
                    }
                };
                GridControl.prototype._getDataIndex = function (visibleIndex) {
                    var i, l, lastIndex = -1, ranges = this._visibleRange, range;
                    if (visibleIndex < 0) {
                        return -1;
                    }
                    for (i = 0, l = ranges.length; i < l; i++) {
                        range = ranges[i];
                        lastIndex += range.end - range.start + 1;
                        if (visibleIndex <= lastIndex) {
                            return range.end - lastIndex + visibleIndex;
                        }
                    }
                    return visibleIndex;
                };
                GridControl.prototype._getRowIndex = function (dataIndex) {
                    var i, l, result = 0, ranges = this._visibleRange, range;
                    for (i = 0, l = ranges.length; i < l; i++) {
                        range = ranges[i];
                        if (dataIndex >= range.start) {
                            if (dataIndex <= range.end) {
                                return result + dataIndex - range.start;
                            }
                        }
                        else {
                            break;
                        }
                        result += range.end - range.start + 1;
                    }
                    return -Math.max(0, result - 1);
                };
                GridControl.prototype._updateViewport = function (includeNonDirtyRows) {
                    var resultCount = this._count, above = [], below = [], visible = [], states = this._expandStates || [], maxIndex = this.getExpandedCount() - 1;
                    var visibleIndices = this._getVisibleRowIndices();
                    var firstIndex = visibleIndices.first;
                    var lastIndex = visibleIndices.last;
                    // expand viewport by 3 rows for smooth scrolling
                    firstIndex = Math.max(0, firstIndex - this._options.extendViewportBy);
                    lastIndex = Math.min(maxIndex, lastIndex + this._options.extendViewportBy);
                    // make sure we are using all of our payload size
                    var cachingStart = Math.max(0, firstIndex - this._options.payloadSize);
                    var cachingEnd = Math.min(maxIndex, lastIndex + this._options.payloadSize);
                    var dataIndex = this._getDataIndex(cachingStart);
                    var lastVisible = firstIndex;
                    for (var i = cachingStart; i <= cachingEnd && dataIndex < resultCount; i++) {
                        if (i < firstIndex) {
                            above[above.length] = new RowIndexInfo(i, dataIndex);
                        }
                        else if (i > lastIndex) {
                            below[below.length] = new RowIndexInfo(i, dataIndex);
                        }
                        else {
                            visible[visible.length] = new RowIndexInfo(i, dataIndex);
                            lastVisible = i;
                        }
                        var nodeState = states[dataIndex]; // nodeState might be undefined
                        if (nodeState < 0) {
                            dataIndex += (1 - nodeState);
                        }
                        else {
                            dataIndex++;
                        }
                    }
                    this.cacheRows(above, visible, below);
                    this._drawRows(visible, includeNonDirtyRows);
                    if (this._updateAriaOnViewportUpdate) {
                        this._updateAriaOnViewportUpdate = false;
                        this._updateAriaAttribute();
                    }
                };
                GridControl.prototype._drawRows = function (visibleRange, includeNonDirtyRows) {
                    var _this = this;
                    var states = this._expandStates, expandedState = 0, level = 0, hasGutter = this._gutter, canvasDom = this._canvas, gutterCanvasDom, updateRow;
                    // Create the document fragements for manipulating the dom
                    var fragment = document.createDocumentFragment();
                    var gutterFragment = null;
                    if (hasGutter) {
                        gutterCanvasDom = this._gutter;
                        gutterFragment = document.createDocumentFragment();
                    }
                    // Get the rows
                    var oldRows = this._rows;
                    var newRows = {};
                    this._rows = newRows;
                    // Loop through all the visible data
                    var visibleRowCount = visibleRange.length;
                    for (var i = 0; i < visibleRowCount; i++) {
                        var range = visibleRange[i];
                        var rowIndex = range.rowIndex;
                        var dataIndex = range.dataIndex;
                        var row = oldRows[dataIndex];
                        if (row) {
                            this.updateMouseOutRowStyle(row);
                            updateRow = (row.rowIndex !== rowIndex);
                            if (updateRow) {
                                row.rowIndex = rowIndex;
                            }
                            else {
                                updateRow = row.isDirty;
                                delete row.isDirty;
                            }
                            if (includeNonDirtyRows) {
                                updateRow = true;
                            }
                        }
                        else {
                            updateRow = true;
                            var rowElement = this.createElementWithClass("div", this._options.rowClass);
                            rowElement.id = this._getId() + "_row_" + dataIndex;
                            rowElement.setAttribute("role", "row");
                            rowElement.classList.add(this._options.rowNormalClass);
                            // setup mouseover/mouseout events
                            rowElement.addEventListener("mouseover", function (e) {
                                // skip mouseover for the row children elements
                                var target = e.target;
                                var related = e.relatedTarget;
                                if (target && related && (related.parentElement === target || target.parentElement === related))
                                    return;
                                var rowInfo = _this.getRowInfoFromEvent(e, "." + _this._options.rowClass);
                                if (rowInfo) {
                                    _this.updateMouseOverRowStyle(rowInfo);
                                }
                            }, false);
                            rowElement.addEventListener("mouseout", function (e) {
                                // skip mouseout for the row children elements
                                var target = e.target;
                                var related = e.relatedTarget;
                                if (target && related && (related.parentElement === target || target.parentElement === related))
                                    return;
                                var rowInfo = _this.getRowInfoFromEvent(e, "." + _this._options.rowClass);
                                if (rowInfo) {
                                    _this.updateMouseOutRowStyle(rowInfo);
                                }
                            }, false);
                            var rowInfo = { rowIndex: rowIndex, dataIndex: dataIndex, row: rowElement };
                            if (hasGutter) {
                                var gutterRowElement = this.createElementWithClass("div", "grid-gutter-row grid-gutter-row-normal");
                                gutterRowElement.id = "gtr_" + rowElement.id;
                                this._rowInfoMap[gutterRowElement.id] = rowInfo;
                                rowInfo.gutterRow = gutterRowElement;
                            }
                            this._rowInfoMap[rowElement.id] = rowInfo;
                            row = rowInfo;
                        }
                        fragment.appendChild(row.row);
                        if (hasGutter && row.gutterRow) {
                            gutterFragment.appendChild(row.gutterRow);
                        }
                        newRows[dataIndex] = row;
                        if (updateRow) {
                            if (states) {
                                expandedState = this._getExpandState(dataIndex);
                                level = this.indentLevel(dataIndex);
                            }
                            this._updateRow(row, rowIndex, dataIndex, expandedState, level);
                        }
                        if (rowElement) {
                            rowElement.setAttribute("aria-rowindex", row.dataIndex.toString());
                            rowElement.setAttribute("aria-level", (level + 1).toString());
                            if (expandedState !== 0) {
                                rowElement.setAttribute("aria-expanded", expandedState > 0 ? "true" : "false");
                            }
                            rowElement.onfocus = function (e) { return _this._onRowElementFocus(e); };
                            rowElement.onblur = function (e) { return _this._onRowElementBlur(e); };
                        }
                    }
                    var insertBeforeElement;
                    var insertBeforeGutterElement;
                    // use a new var here, since foreach insists on the string type
                    for (var oldRowIdx in oldRows) {
                        row = oldRows[oldRowIdx]; // javascript auto-coerces to a number index
                        if (hasGutter) {
                            insertBeforeGutterElement = row.gutterRow.nextElementSibling;
                            if (row.gutterRow.parentElement) {
                                delete this._rowInfoMap[row.gutterRow.id];
                                row.gutterRow.parentElement.removeChild(row.gutterRow);
                            }
                        }
                        insertBeforeElement = row.row.nextElementSibling;
                        if (row.row.parentElement) {
                            delete this._rowInfoMap[row.row.id];
                            this._cleanUpCells(row);
                            row.row.parentElement.removeChild(row.row);
                        }
                    }
                    for (var newRowIdx in newRows) {
                        if (oldRows[newRowIdx]) {
                            delete oldRows[newRowIdx];
                        }
                    }
                    if (insertBeforeElement && insertBeforeElement.parentElement === canvasDom) {
                        canvasDom.insertBefore(fragment, insertBeforeElement);
                    }
                    else {
                        canvasDom.appendChild(fragment);
                    }
                    this._updateDynamicRowsStyle(visibleRange);
                    if (hasGutter) {
                        if (insertBeforeGutterElement && insertBeforeGutterElement.parentElement === gutterCanvasDom) {
                            gutterCanvasDom.insertBefore(gutterFragment, insertBeforeGutterElement);
                        }
                        else {
                            gutterCanvasDom.appendChild(gutterFragment);
                        }
                    }
                };
                GridControl.prototype.getColumnPixelIndent = function (level) {
                    return level * GridControl.INDENT_PER_LEVEL;
                };
                GridControl.prototype.addTreeIconWithIndent = function (cellElement, expandedState, level, column, dataIndex) {
                    var _this = this;
                    var indent = (this.getColumnPixelIndent(level) - 13);
                    column.indentOffset = indent;
                    if (expandedState !== 0) {
                        var treeIcon = this.createElementWithClass("div", "icon grid-tree-icon");
                        treeIcon.style.left = indent + "px";
                        cellElement.appendChild(treeIcon);
                        if (expandedState > 0) {
                            treeIcon.classList.add("icon-tree-expanded");
                        }
                        else {
                            treeIcon.classList.add("icon-tree-collapsed");
                        }
                        treeIcon.addEventListener("mouseover", function (e) { _this.onTreeIconMouseOver(e); });
                        treeIcon.addEventListener("mouseout", function (e) { _this.onTreeIconMouseOut(e); });
                    }
                    var hotPathState = dataIndex ? this.getColumnValue(dataIndex, "HotPathState", -1) : null;
                    var hotPathIndent = 0;
                    if (hotPathState === "HotItem" || hotPathState === "HotPath") {
                        var hotPathIcon = this.createElementWithClass("div", "icon grid-tree-icon");
                        hotPathIcon.style.left = (indent + 13) + "px";
                        cellElement.appendChild(hotPathIcon);
                        hotPathIndent = 13;
                        if (hotPathState === "HotItem") {
                            hotPathIcon.classList.add("hot-item-icon");
                        }
                        else if (hotPathState === "HotPath") {
                            hotPathIcon.classList.add("hot-path-icon");
                        }
                    }
                    cellElement.style.textIndent = (this.getColumnPixelIndent(level) + hotPathIndent) + "px";
                };
                /**
                * Default implementation for creating the contents of a given cell.
                *
                * Custom Drawn Columns:
                * If you want a custom drawn column, then the preferred method is to set a "getCellContents" property
                * on the column to a function that takes the same parameters as this function and returns an html element
                * object that represents the contents.
                * @param rowInfo The information about grid row that is being rendered.
                * @param dataIndex The index of the row.
                * @param expandedState Number of children in the tree under this row recursively.
                * @param level The hierarchy level of the row.
                * @param column Information about the column that is being rendered.
                * @param indentIndex Index of the column that is used for the indentation.
                * @param columnOrder The display order of the column.
                * @returns Returns html element representing the requested grid cell. The first returned element will be appended
                *          to the row (unless the function returns
                */
                GridControl.prototype._drawCell = function (rowInfo, dataIndex, expandedState, level, column, indentIndex, columnOrder) {
                    var width = column.width || 20, href;
                    var cellElement = this.createElementWithClass("div", this._options.cellClass);
                    cellElement.style.width = isNaN(width) ? String(width) : width + "px";
                    if (typeof column.hrefIndex !== "undefined") {
                        href = this.getColumnValue(dataIndex, column.hrefIndex, -1);
                    }
                    var value = this.getColumnText(dataIndex, column, columnOrder);
                    // Set the tooltip. No tooltip in case it is HTML as it can be set from the HTML itself
                    if (!column.hasHTMLContent) {
                        GridControl._setTooltip(cellElement, value, 65, column.maxTooltipLineLength);
                    }
                    if (href) {
                        var link = document.createElement("a");
                        link.setAttribute("href", href);
                        link.innerText = value;
                        cellElement.appendChild(link);
                    }
                    else {
                        if (value) {
                            if (column.hasHTMLContent) {
                                cellElement.innerHTML = value;
                            }
                            else {
                                cellElement.innerText = value;
                            }
                        }
                        else {
                            // add non-breaking whitespace to ensure the cell has the same height as non-empty cells
                            cellElement.innerHTML = "&nbsp;";
                        }
                    }
                    if (columnOrder === indentIndex && level > 0) {
                        this.addTreeIconWithIndent(cellElement, expandedState, level, column, dataIndex);
                    }
                    if (column.getCellCSSClass) {
                        var cellStyle = column.getCellCSSClass(dataIndex, column.index, columnOrder, this._dataSource);
                        if (cellStyle) {
                            var styles = cellStyle.trim().split(" ");
                            for (var index = 0; index < styles.length; index++) {
                                cellElement.classList.add(styles[index]);
                            }
                        }
                    }
                    if (column.rowCss) {
                        cellElement.classList.add(column.rowCss);
                    }
                    return cellElement;
                };
                GridControl.prototype._onRowMouseDown = function (e) {
                    var rowInfo = this.getRowInfoFromEvent(e, "." + this._options.rowClass);
                    if (rowInfo) {
                        var targetElement = e.target;
                        if (e.which === 1 && targetElement.classList.contains("grid-tree-icon")) {
                            this._onToggle(rowInfo);
                        }
                        else {
                            this._selectRow(rowInfo.rowIndex, rowInfo.dataIndex, {
                                ctrl: e.ctrlKey,
                                shift: e.shiftKey,
                                rightClick: e.which === 3
                            });
                        }
                    }
                };
                GridControl.prototype._onBlur = function (e) {
                    if (e) {
                        var targetElement = e.target;
                        if (targetElement.classList.contains("grid-edit-box")) {
                            e.stopPropagation();
                            return;
                        }
                    }
                    this._active = false;
                    this._updateSelectionStyles();
                };
                GridControl.prototype._onFocus = function (e) {
                    var targetElement = e.target;
                    if (targetElement.classList.contains("grid-edit-box")) {
                        e.stopEventPropagation();
                        return;
                    }
                    this._active = true;
                    this._updateSelectionStyles();
                    this._updateAriaAttribute();
                };
                GridControl.prototype._onCanvasFocus = function (e) {
                };
                GridControl.prototype._onRowElementFocus = function (e) {
                    return this._onFocus(e);
                };
                GridControl.prototype._onRowElementBlur = function (e) {
                    return this._onBlur(e);
                };
                GridControl.prototype._onKeyDown = function (e) {
                    var bounds = { lo: -1, hi: -1 }, keyCode = Common.KeyCodes, canvas = this._canvas;
                    if (this._copyInProgress) {
                        if (e.keyCode === keyCode.ESCAPE) {
                            if (this._cancelable) {
                                this._cancelable.cancel();
                            }
                        }
                        // Cancelling this key
                        return false;
                    }
                    if (this._count > 0) {
                        bounds = { lo: 0, hi: this.getExpandedCount() - 1 };
                    }
                    if (this._selectedIndex < 0) {
                        this._addSelection(bounds.lo);
                    }
                    switch (e.keyCode) {
                        case Common.KeyCodes.A:
                            if (e.ctrlKey) {
                                this._selectAll();
                            }
                            else {
                                return true;
                            }
                            break;
                        case Common.KeyCodes.C:
                            if (e.ctrlKey) {
                                this.onCtrlC();
                            }
                            break;
                        case Common.KeyCodes.F12:
                            if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
                                this.onF12();
                            }
                            break;
                        case Common.KeyCodes.G:
                            if (e.ctrlKey) {
                                this.onCtrlG();
                            }
                            break;
                        case Common.KeyCodes.ARROW_DOWN:
                            this._clearSelection();
                            if (e.ctrlKey) {
                                if (e.shiftKey) {
                                    this._addSelectionRange(bounds.hi);
                                }
                                else {
                                    this._addSelection(bounds.hi);
                                }
                            }
                            else {
                                if (e.shiftKey) {
                                    this._addSelectionRange(Math.min(this._selectedIndex + 1, bounds.hi));
                                }
                                else {
                                    this._addSelection(Math.min(this._selectedIndex + 1, bounds.hi));
                                }
                            }
                            break;
                        case Common.KeyCodes.ARROW_UP:
                            this._clearSelection();
                            if (e.ctrlKey) {
                                if (e.shiftKey) {
                                    this._addSelectionRange(bounds.lo);
                                }
                                else {
                                    this._addSelection(bounds.lo);
                                }
                            }
                            else {
                                if (e.shiftKey) {
                                    this._addSelectionRange(Math.max(this._selectedIndex - 1, bounds.lo));
                                }
                                else {
                                    this._addSelection(Math.max(this._selectedIndex - 1, bounds.lo));
                                }
                            }
                            break;
                        case Common.KeyCodes.PAGE_DOWN:
                        case Common.KeyCodes.PAGE_UP:
                            var span = canvas.clientHeight;
                            var rowsPerPage = Math.floor(span / this._measurements.rowHeight);
                            this._clearSelection();
                            if (e.keyCode === Common.KeyCodes.PAGE_DOWN) {
                                if (e.shiftKey) {
                                    this._addSelectionRange(Math.min(this._selectedIndex + rowsPerPage, bounds.hi));
                                }
                                else {
                                    this._addSelection(Math.min(this._selectedIndex + rowsPerPage, bounds.hi));
                                }
                            }
                            else {
                                if (e.shiftKey) {
                                    this._addSelectionRange(Math.max(this._selectedIndex - rowsPerPage, bounds.lo));
                                }
                                else {
                                    this._addSelection(Math.max(this._selectedIndex - rowsPerPage, bounds.lo));
                                }
                            }
                            break;
                        case Common.KeyCodes.ARROW_RIGHT:
                            this._clearSelection();
                            if (!this.tryToggle(true, e.shiftKey)) {
                                if (e.shiftKey) {
                                    this._addSelectionRange(Math.min(this._selectedIndex + 1, bounds.hi));
                                }
                                else {
                                    this._addSelection(Math.min(this._selectedIndex + 1, bounds.hi));
                                }
                            }
                            else {
                                this._addSelection(this._selectedIndex);
                                // When doing expand/ collapse rows are added/ deleted in DOM but currently selected row stays the same.
                                // This causes screen reader (Narrator) lose currently selected row as an active element.
                                // Calling "layout" makes Narrator catch selected row as an active element again.
                                this.layout();
                            }
                            break;
                        case Common.KeyCodes.ARROW_LEFT:
                            this._clearSelection();
                            if (!this.tryToggle(false, e.shiftKey)) {
                                if (e.shiftKey) {
                                    this._addSelectionRange(Math.max(this._selectedIndex - 1, bounds.lo));
                                }
                                else {
                                    this._addSelection(Math.max(this._selectedIndex - 1, bounds.lo));
                                }
                            }
                            else {
                                this._addSelection(this._selectedIndex);
                                // See comment for KeyCodes.ARROW_RIGHT case.
                                this.layout();
                            }
                            break;
                        case Common.KeyCodes.HOME:
                            this._clearSelection();
                            if (e.shiftKey) {
                                this._addSelectionRange(bounds.lo);
                            }
                            else {
                                this._addSelection(bounds.lo);
                            }
                            break;
                        case Common.KeyCodes.END:
                            this._clearSelection();
                            if (e.shiftKey) {
                                this._addSelectionRange(bounds.hi);
                            }
                            else {
                                this._addSelection(bounds.hi);
                            }
                            break;
                        case Common.KeyCodes.TAB:
                            var activeElementClasses = document.activeElement.classList;
                            if (e.shiftKey) {
                                if (activeElementClasses.contains("grid-cell")) {
                                    document.activeElement.parentElement.focus();
                                }
                                else if (activeElementClasses.contains("grid-row")) {
                                    this._headerCanvas.lastChild.focus();
                                    e.preventDefault();
                                    return false;
                                }
                            }
                            else if (activeElementClasses.contains("grid-cell")) {
                                // Jump focus back to the rows if Narrator has moved into the cells.
                                document.activeElement.parentElement.focus();
                            }
                            this.getSelectedRowIntoView();
                            return true; // Allow default behaviour to occur such that tab navigation works properly.
                        case Common.KeyCodes.ESCAPE:
                            var activeElementClasses = document.activeElement.classList;
                            if (activeElementClasses.contains("grid-cell")) {
                                document.activeElement.parentElement.focus();
                            }
                            else if (activeElementClasses.contains("grid-row")) {
                                this._headerCanvas.firstElementChild.focus();
                            }
                            break;
                    }
                    this.getSelectedRowIntoView();
                    e.preventDefault();
                    return false;
                };
                GridControl.prototype._onThemeChanged = function (e) {
                    var oldFontSize = this._textFontPx;
                    this._updateThemeAttributes();
                    if (this._textFontPx !== oldFontSize && this._textFontPx !== 0 && oldFontSize !== 0) {
                        // Update row and text heights for new font size.
                        // TODO: This is a workaround. The correct fix is to get rid of storing measurements in pixels at all.
                        this._measurements.rowHeight = this._measurements.rowHeight * this._textFontPx / oldFontSize;
                        this._measurements.textLineHeight = this._measurements.textLineHeight * this._textFontPx / oldFontSize;
                        this.redraw();
                    }
                };
                GridControl.prototype._onToggle = function (rowInfo) {
                    if (this._expandStates) {
                        var state = this._getExpandState(rowInfo.dataIndex);
                        if (state !== 0) {
                            if (state > 0) {
                                this.collapseNode(rowInfo.dataIndex);
                            }
                            else if (state < 0) {
                                this.expandNode(rowInfo.dataIndex);
                            }
                            this._clearSelection();
                            this._addSelection(Math.min(rowInfo.rowIndex, this.getExpandedCount() - 1), rowInfo.dataIndex);
                            this._layoutContentSpacer();
                            this._redraw();
                        }
                    }
                };
                GridControl.prototype._onExpandedCollapsed = function (isExpanded, dataIndex) {
                    this.fireCustomEvent(this._element, GridControl.EVENT_ROW_EXPANDED_COLLAPSED, [{ isExpanded: isExpanded, dataIndex: dataIndex }]);
                };
                GridControl.prototype.indentLevel = function (i) {
                    return this._indentLevels[i];
                };
                GridControl.prototype.setVisibleRange = function (range) {
                    this._visibleRange = range;
                };
                GridControl.addItemsToTree = function (dataSource, // TFS Grid's _dataSource
                    expandStates, // TFS Grid's _expandStates
                    start, // start index of the sub array
                    count, // length of the sub array
                    parentNode // parent node of all the items in the sub array
                    ) {
                    var end = Math.min(start + count, dataSource.length);
                    for (var i = start; i < end; i++) {
                        var node = new TreeNode(dataSource[i], expandStates[i]);
                        var childrenCount = Math.abs(node.expandState);
                        if (childrenCount > 0) {
                            GridControl.addItemsToTree(dataSource, expandStates, i + 1, childrenCount, node);
                            i += childrenCount;
                        }
                        parentNode.children.push(node);
                    }
                };
                GridControl.walkTree = function (tree, visit) {
                    if (visit) {
                        visit(tree);
                        var numChildren = 0;
                        var children = tree.children;
                        if (children && (numChildren = children.length)) {
                            for (var i = 0; i < numChildren; i++) {
                                var item = children[i];
                                GridControl.walkTree(item, visit);
                            }
                        }
                    }
                };
                GridControl.makeElementUnselectable = function (element) {
                    element.setAttribute("unselectable", "on");
                    var elements = element.querySelectorAll("*");
                    for (var i = 0; i < elements.length; i++) {
                        var e = elements[i];
                        switch (e.tagName) {
                            case "IFRAME":
                            case "TEXTAREA":
                            case "INPUT":
                            case "SELECT":
                                break;
                            default:
                                e.setAttribute("unselectable", "on");
                        }
                    }
                };
                /**
                 * Converts this number to a string in the current culture's locale
                 * without specifying a precision. So, for example, with Spanish culture,
                 * (3) gets translated to "3", and (3.1416) becomes "3,1416". The jQuery's
                 * localeFormat requires a precision (the default is "2" if not specified).
                 * So 3.localeFormat("N") become "3,00".
                 * @param includeGroupSeparators includeGroupSeparators of type boolean, if true,
                 *  use locale-specific group separators (i.e. 3,000) in the output
                 * @param cultureInfo cultureInfo of type Sys.CultureInfo Culture info (CurrentCulture if not specified)
                 * @returns String
                 */
                GridControl.toDecimalLocaleString = function (value, includeGroupSeparators, cultureInfo) {
                    var zeroPad = function (str, count, left) {
                        for (var l = str.length; l < count; l++) {
                            str = (left ? ("0" + str) : (str + "0"));
                        }
                        return str;
                    };
                    var exponent, nf, split, numberString = value.toString(), right = "";
                    if (cultureInfo) {
                        nf = cultureInfo.numberFormat;
                    }
                    else {
                        nf = Microsoft.Plugin.Culture.NumberFormat;
                    }
                    split = numberString.split(/e/i);
                    numberString = split[0];
                    exponent = (split.length > 1 ? parseInt(split[1], 10) : 0);
                    split = numberString.split(".");
                    numberString = split[0];
                    right = split.length > 1 ? split[1] : "";
                    if (exponent > 0) {
                        right = zeroPad(right, exponent, false);
                        numberString += right.slice(0, exponent);
                        right = right.substr(exponent);
                    }
                    else if (exponent < 0) {
                        exponent = -exponent;
                        numberString = zeroPad(numberString, exponent + 1, true);
                        right = numberString.slice(-exponent, numberString.length) + right;
                        numberString = numberString.slice(0, -exponent);
                    }
                    if (right.length > 0) {
                        right = nf.NumberDecimalSeparator + right;
                    }
                    if (includeGroupSeparators === true) {
                        var groupSizes = nf.NumberGroupSizes, sep = nf.NumberGroupSeparator, curSize = groupSizes[0], curGroupIndex = 1, stringIndex = numberString.length - 1, ret = "";
                        while (stringIndex >= 0) {
                            if (curSize === 0 || curSize > stringIndex) {
                                if (ret.length > 0) {
                                    return numberString.slice(0, stringIndex + 1) + sep + ret + right;
                                }
                                else {
                                    return numberString.slice(0, stringIndex + 1) + right;
                                }
                            }
                            if (ret.length > 0) {
                                ret = numberString.slice(stringIndex - curSize + 1, stringIndex + 1) + sep + ret;
                            }
                            else {
                                ret = numberString.slice(stringIndex - curSize + 1, stringIndex + 1);
                            }
                            stringIndex -= curSize;
                            if (curGroupIndex < groupSizes.length) {
                                curSize = groupSizes[curGroupIndex];
                                curGroupIndex++;
                            }
                        }
                        return numberString.slice(0, stringIndex + 1) + sep + ret + right;
                    }
                    else {
                        return numberString + right;
                    }
                };
                /**
                 * Converts the specified value to a display string.
                 * @param value The value to convert.
                 */
                GridControl.convertValueToDisplayString = function (value, format) {
                    if (value != null) {
                        if (typeof value === "string") {
                            return value;
                        }
                        else if (value instanceof Date) {
                            return value.toLocaleString(Microsoft.Plugin.Culture.lang, format);
                        }
                        else if (typeof value === "number") {
                            if (format) {
                                return value.toLocaleString(Microsoft.Plugin.Culture.lang, format);
                            }
                            else {
                                return GridControl.toDecimalLocaleString(value);
                            }
                        }
                        else if (typeof value === "boolean") {
                            return value ? "True" : "False";
                        }
                        else {
                            return value.toString();
                        }
                    }
                    return "";
                };
                GridControl._textSplit = function (str, limit) {
                    var NewLine = "\r\n";
                    if (str.indexOf(NewLine) >= 0)
                        return str; // strange ... it seems the string already has formating. Do nothing
                    if (str.length <= limit)
                        return str; // the string is already short enough
                    // try to break the string
                    var breakPositon = str.lastIndexOf(" ", limit); // search backward for a whitespace    
                    if (breakPositon !== -1) {
                        // replace the whitespace by NewLine
                        str = str.substring(0, breakPositon) + NewLine + str.substring(breakPositon + 1);
                    }
                    else {
                        // cannot put a whitespace - break the string "as is"
                        breakPositon = limit;
                        str = str.substring(0, breakPositon) + NewLine + str.substring(breakPositon);
                    }
                    // continue recursively in the string tail    
                    var next = breakPositon + NewLine.length;
                    return str.substring(0, next) + this._textSplit(str.substring(next), limit);
                };
                /**
                 * Use a formula of unknown origin to guess the width of a string in
                 * pixels based on the text height and the number of characters.
                 *
                 * @param textLength The length of the string in characters
                 * @param textHeight The offsetHeight of the text
                 * @returns The approximate width of the string in pixels
                 */
                GridControl._approximateTextWidth = function (textLength, textHeight) {
                    var ratio = 1.1 + 0.7 * Math.exp(-textLength / 20);
                    return Math.round(textLength * ratio * textHeight);
                };
                GridControl.prototype.initialize = function () {
                    // Create the grid element
                    this._element = document.createElement("div");
                    this._element.tabIndex = 0;
                    this._element.setAttribute("aria-label", this._options.gridName);
                    this._element.setAttribute("role", this._options.gridRole);
                    this._element.className = this._options.coreCssClass;
                    this._element.style.height = this._options.height;
                    this._element.setAttribute("role", "treegrid");
                    if (this._options.allowMultiSelect) {
                        this._element.setAttribute("aria-multiselectable", "true");
                    }
                    if (this._options.ariaLabel) {
                        this._element.setAttribute("aria-label", this._options.ariaLabel);
                    }
                    this.rootElement.appendChild(this._element);
                    // Build the grid dom
                    this._buildDom();
                    this._contentSize = new Size(300, 400);
                    this._takeMeasurements();
                    this._getChildDataCallback = this._options.childDataCallback || null;
                    this._editCellCallback = this._options.editCellCallback || null;
                    // Attach events takes a long time to execute.
                    if (this._options.asyncInit) {
                        window.setTimeout(function () {
                            this._attachEvents();
                        }.bind(this), 10);
                    }
                    else {
                        this._attachEvents();
                    }
                    this.initializeDataSource().done();
                };
                GridControl.prototype._cleanUpCells = function (row) {
                    if (this._options.cellCleanUpCallback) {
                        var rowRoot = row.row;
                        if (rowRoot && rowRoot.hasChildNodes()) {
                            var children = rowRoot.children;
                            for (var i = 0; i < children.length; i++) {
                                this._options.cellCleanUpCallback(children.item(i));
                            }
                        }
                    }
                };
                GridControl.prototype._getId = function () {
                    return "grid_" + this._uID;
                };
                GridControl.prototype._enhance = function (element) {
                    this._buildDom();
                };
                GridControl.prototype._buildDom = function () {
                    var fragment = document.createDocumentFragment();
                    var gutterOptions = this._options.gutter;
                    var gutterVisible = gutterOptions && (gutterOptions.icon || gutterOptions.checkbox);
                    // Create the canvas div
                    this._canvas = document.createElement("div");
                    this._canvas.setAttribute("role", this._options.gridRole);
                    this._canvas.className = this._options.canvasClass;
                    // Create the content spacer div
                    this._contentSpacer = document.createElement("div");
                    this._contentSpacer.className = "grid-content-spacer";
                    this._canvas.appendChild(this._contentSpacer);
                    // Create the header
                    if (this._options.header) {
                        this._element.classList.add("has-header");
                        this._header = document.createElement("div");
                        this._header.className = this._options.headerElementClass;
                        this._header.setAttribute("role", "row");
                        this._headerCanvas = document.createElement("div");
                        this._headerCanvas.className = "grid-header-canvas";
                        this._header.appendChild(this._headerCanvas);
                        fragment.appendChild(this._header);
                    }
                    if (this._options.focusable) {
                        // Create the focus div
                        this._focus = document.createElement("div");
                        this._focus.className = "grid-focus";
                        this._focus.setAttribute("tabIndex", "0");
                        fragment.appendChild(this._focus);
                    }
                    // Create the gutter
                    if (gutterVisible) {
                        this._element.classList.add("has-gutter");
                        this._gutter = document.createElement("div");
                        this._gutter.className = "grid-gutter";
                        this._canvas.appendChild(this._gutter);
                        if (this._header) {
                            this._gutterHeader = document.createElement("div");
                            this._gutterHeader.className = "grid-gutter-header";
                            this._header.appendChild(this._gutterHeader);
                        }
                    }
                    fragment.appendChild(this._canvas);
                    this._element.appendChild(fragment);
                };
                GridControl.prototype._mergeExpandStates = function (parentIndex, oldExpandStates, newExpandStates) {
                    var netIncreaseInExpandStates = newExpandStates.length - 1; // minus 1 because placeholder will be gone
                    oldExpandStates.splice(parentIndex + 1, 1); // remove placeholder
                    for (var i = 0; i <= netIncreaseInExpandStates; i++) {
                        oldExpandStates.splice(parentIndex + i + 1, 0, newExpandStates[i]);
                    }
                    var countSinceLastParent = 0;
                    for (var i = parentIndex; i >= 0; i--) {
                        var origValue = oldExpandStates[i];
                        if (Math.abs(origValue) > countSinceLastParent) {
                            if (origValue < 0) {
                                oldExpandStates[i] = origValue - netIncreaseInExpandStates;
                            }
                            else {
                                oldExpandStates[i] = origValue + netIncreaseInExpandStates;
                            }
                            countSinceLastParent = 0;
                        }
                        else {
                            countSinceLastParent++;
                        }
                    }
                };
                GridControl.prototype._takeMeasurements = function () {
                    var cssClass = this._options.coreCssClass;
                    if (this._options.cssClass) {
                        cssClass += " " + this._options.cssClass;
                    }
                    // Create the hidden measurements div
                    var measurementContainer = this.createElementWithClass("div", cssClass);
                    measurementContainer.style.position = "absolute";
                    measurementContainer.style.left = "-5000px";
                    measurementContainer.style.top = "-5000px";
                    measurementContainer.style.width = "1000px";
                    measurementContainer.style.height = "500px";
                    document.body.appendChild(measurementContainer);
                    // Create the row and cell
                    var row = this.createElementWithClass("div", this._options.rowClass);
                    row.classList.add(this._options.rowNormalClass);
                    measurementContainer.appendChild(row);
                    var cell = this.createElementWithClass("div", this._options.cellClass);
                    cell.style.width = "100px";
                    cell.innerText = "1";
                    row.appendChild(cell);
                    // Measure row and cell
                    this._measurements.rowHeight = row.offsetHeight;
                    this._measurements.cellOffset = cell.offsetWidth - 100;
                    // Measure the height of one line of text, this is needed when we want to calculate the height of multiline text
                    cell.innerText = "1\n1";
                    this._measurements.textLineHeight = row.offsetHeight - this._measurements.rowHeight;
                    // Create the text
                    var textUnit = this.createElementWithClass("div");
                    textUnit.style.overflow = "hidden";
                    textUnit.style.width = "1em";
                    textUnit.style.height = "1ex";
                    cell.appendChild(textUnit);
                    // Measure the text
                    this._measurements.unitEx = textUnit.offsetHeight;
                    // Create the gutter
                    var gutter = this.createElementWithClass("div", "grid-gutter");
                    gutter.appendChild(this.createElementWithClass("div", "grid-gutter-row grid-gutter-row-selected"));
                    measurementContainer.appendChild(gutter);
                    // Measure the gutter
                    if (this._gutter) {
                        this._measurements.gutterWidth = gutter.clientWidth;
                    }
                    else {
                        this._measurements.gutterWidth = 0;
                    }
                    measurementContainer.style.overflow = "scroll";
                    this._measurements.scrollbarWidth = measurementContainer.offsetWidth - measurementContainer.clientWidth;
                    // Remove the hidden element
                    document.body.removeChild(measurementContainer);
                };
                GridControl.prototype._initializeDataSourceComplete = function () {
                    if (this.getExpandedCount() > 0) {
                        if (this._options.keepSelection && this._selectedIndex >= 0) {
                            this._selectRow(Math.min(this._selectedIndex, this.getExpandedCount() - 1));
                        }
                        else {
                            this._selectRow(this._options.initialSelection !== false ? 0 : -1);
                        }
                    }
                    else {
                        this.setSelectedRowIndex(-1);
                    }
                };
                GridControl.prototype._layoutAfterSetDataSource = function (selectedIndex) {
                    this.layout();
                    this._ensureSelectedIndex(selectedIndex);
                };
                /**
                 * Modifies the datasource and expandStates to either insert new data or remove
                 * placeholder if no new rows were returned
                 */
                GridControl.prototype._adjustForDynamicData = function (newRows, newExpandStates, parentIndex) {
                    this._dataSource.splice(parentIndex + 1, 1);
                    for (var i = 0; i < newRows.length; i++) {
                        this._dataSource.splice(parentIndex + i + 1, 0, newRows[i]);
                    }
                    this._mergeExpandStates(parentIndex, this._expandStates, newExpandStates);
                    var count = this._dataSource.length;
                    this._count = count;
                    if (this._expandStates) {
                        this._indentLevels = GridControl.expand(this._expandStates);
                    }
                    else {
                        this._indentLevels = null;
                    }
                    this._expandedCount = count;
                    this._updateRanges();
                    this._determineIndentIndex();
                    this.layout();
                };
                /**
                 * Ensures that the selected index is correctly set. That is, it will be a noop if the index doesnt change
                 * and will handle indexes that are out of bounds.
                 * @param index OPTIONAL: The index to select
                 */
                GridControl.prototype._ensureSelectedIndex = function (index) {
                    var oldSelectedIndex = this._selectedIndex;
                    if (typeof index === "number") {
                        this._selectedIndex = index;
                    }
                    if (this._selectedIndex >= 0) {
                        if (this._count <= this._selectedIndex) {
                            this._selectedIndex = this._count - 1;
                        }
                        if (this._selectedIndex !== oldSelectedIndex) {
                            this._addSelection(this._selectedIndex);
                        }
                    }
                };
                GridControl.prototype._determineIndentIndex = function () {
                    var _columns = this._columns, i, l;
                    for (i = 0, l = _columns.length; i < l; i++) {
                        if (_columns[i].indent) {
                            this._indentIndex = i;
                            return;
                        }
                    }
                    this._indentIndex = 0;
                };
                GridControl.prototype._updateExpansionStateAndRedraw = function (action) {
                    var dataIndex, oldSelectedIndex = this._selectedIndex;
                    if (oldSelectedIndex >= 0) {
                        dataIndex = this._getDataIndex(oldSelectedIndex);
                    }
                    action(); // expand or collapse all
                    if (oldSelectedIndex >= 0) {
                        this._clearSelection();
                        this._addSelection(Math.abs(this._getRowIndex(dataIndex)));
                    }
                    this._layoutContentSpacer();
                    this._redraw();
                };
                GridControl.prototype._getVisibleRowIndices = function () {
                    var top = this._scrollTop, bottom = top + this._canvasHeight;
                    return this.calculateVisibleRowIndices(top, bottom);
                };
                GridControl.prototype._getRowIntoView = function (rowIndex, force) {
                    if (force) {
                        // update view port will be called when scrolling happen
                        var index = Math.max(0, Math.min(rowIndex || 0, this.getExpandedCount() - 1));
                        this._canvas.scrollTop = this.getRowTop(index);
                        return true;
                    }
                    var visibleIndices = this._getVisibleRowIndices();
                    var firstIndex = visibleIndices.first;
                    var lastIndex = visibleIndices.last;
                    var count = lastIndex - firstIndex;
                    if (rowIndex < firstIndex || rowIndex > lastIndex) {
                        if (this._selectedIndex > firstIndex) {
                            // set last visible
                            firstIndex = Math.max(rowIndex - count, 0);
                        }
                        else {
                            firstIndex = Math.max(0, Math.min(rowIndex + count, this.getExpandedCount() - 1) - count);
                        }
                        // update view port will be called when scrolling happen
                        this._canvas.scrollTop = this.getRowTop(firstIndex);
                        return true;
                    }
                    return false;
                };
                GridControl.prototype._getRowIntoViewCenter = function (rowIndex) {
                    var scrollTop = this.getRowTop(rowIndex);
                    scrollTop = scrollTop - this._canvasHeight / 2;
                    var maxScrollTop = this._canvas.scrollHeight - this._canvasHeight;
                    if (scrollTop > maxScrollTop) {
                        scrollTop = maxScrollTop;
                    }
                    var minScrollTop = 0;
                    if (scrollTop < minScrollTop) {
                        scrollTop = minScrollTop;
                    }
                    if (this._canvas.scrollTop != scrollTop) {
                        this._canvas.scrollTop = scrollTop;
                        return true;
                    }
                    return false;
                };
                GridControl.prototype._cleanUpRows = function () {
                    var rows = this._rows, hasGutter = this._gutter, dataIndex; // dataIndex is untyped due to foreach returning strings, and rows[] autocoercing to number indices
                    for (dataIndex in rows) {
                        var row = rows[dataIndex];
                        if (row.row.parentElement) {
                            this._cleanUpCells(row);
                            row.row.parentElement.removeChild(row.row);
                            delete this._rowInfoMap[row.row.id];
                        }
                        if (hasGutter && row.gutterRow.parentElement) {
                            row.gutterRow.parentElement.removeChild(row.gutterRow);
                            delete this._rowInfoMap[row.gutterRow.id];
                        }
                    }
                    this._rows = {};
                };
                /**
                 * make updates that can be done only AFTER the rows are placed to the DOM
                 */
                GridControl.prototype._updateDynamicRowsStyle = function (range) {
                    for (var rowIdx = 0; rowIdx < range.length; rowIdx++) {
                        var row = this._rows[range[rowIdx].dataIndex];
                        if (row) {
                            // remove tooltips from the cells that don't have overflow, this prevents duplicate information displayed by a cell and its tooltip
                            var cells = row.row.children;
                            for (var cellIdx = 0; cellIdx < cells.length; cellIdx++) {
                                // See if the column has explicitly said to always enable the tooltip. If so skip it.
                                var columnInfo = this._columns[cellIdx];
                                if (columnInfo && columnInfo.alwaysEnableTooltip) {
                                    continue;
                                }
                                var cell = cells[cellIdx];
                                var overflow = cell.scrollWidth > cell.offsetWidth;
                                if (!overflow) {
                                    cell.removeAttribute("data-plugin-vs-tooltip");
                                }
                            }
                            // Make sure we reset the active row so that 
                            // aria is looking at the correct row
                            this.checkUpdateActive(row);
                        }
                    }
                };
                GridControl.prototype._updateRow = function (rowInfo, rowIndex, dataIndex, expandedState, level) {
                    var indentIndex = this._indentIndex;
                    if (this._gutter) {
                        var gutterOptions = this._options.gutter;
                        var gutterRow = rowInfo.gutterRow;
                        var gutterRowElem = gutterRow.firstElementChild;
                        gutterRowElem.style.top = this.getRowTop(rowIndex) + "px";
                        gutterRowElem.style.left = "0px";
                        gutterRowElem.style.width = (this._measurements.gutterWidth) + "px";
                        gutterRowElem.style.height = (this._measurements.rowHeight) + "px";
                        if (gutterOptions.checkbox) {
                            var gutterCheckbox = this.createElementWithClass("input", "checkbox " + (gutterOptions.checkbox.cssClass || ""));
                            gutterCheckbox.setAttribute("type", "checkbox");
                            var gutterCheckboxCellElem = this.createElementWithClass("div", "grid-gutter-cell grid-gutter-checkbox");
                            gutterCheckboxCellElem.appendChild(gutterCheckbox[0]);
                            gutterRowElem.appendChild(gutterCheckboxCellElem);
                        }
                        if (gutterOptions.icon) {
                            var gutterIconCss = "grid-gutter-cell grid-gutter-icon ";
                            if (typeof gutterOptions.icon.cssClass !== "undefined") {
                                gutterIconCss += gutterOptions.icon.cssClass + " ";
                            }
                            if (typeof gutterOptions.icon.index !== "undefined") {
                                gutterIconCss += (this.getColumnValue(dataIndex, gutterOptions.icon.index, -1) || "") + " ";
                            }
                            if (gutterOptions.icon.ownerDraw !== false) {
                                gutterIconCss += (this._getGutterIconClass(rowIndex, dataIndex, expandedState, level) || "");
                            }
                            var gutterIconElem = this.createElementWithClass("div", gutterIconCss);
                            gutterRowElem.appendChild(gutterIconElem);
                        }
                        this._drawGutterCell(rowInfo, rowIndex, dataIndex, expandedState, level);
                    }
                    this._cleanUpCells(rowInfo);
                    var rowElement = rowInfo.row;
                    rowElement.innerHTML = "";
                    rowElement.style.top = this.getRowTop(rowIndex) + "px";
                    rowElement.style.left = this._measurements.gutterWidth + "px";
                    rowElement.style.height = (this._measurements.rowHeight) + "px";
                    if (this._options.overflowColumn === false) {
                        rowElement.style.width = isNaN(this._contentSize.width) ? "" : (this._contentSize.width + 2) + "px";
                    }
                    else {
                        // When overflow column is present row length could be larger than contentSize (will fit the parent canvas size)
                        // so don't set row width. Set minWidth for cases where row length exceeds canvas size so that we 
                        // can scroll to the part of the row outside the canvas
                        rowElement.style.minWidth = isNaN(this._contentSize.width) ? "" : (this._contentSize.width + 2) + "px";
                    }
                    var columns = this._columns;
                    for (var i = 0, l = columns.length; i < l; i++) {
                        var column = columns[i];
                        if (column.hidden) {
                            continue;
                        }
                        var cellElement = column.getCellContents(rowInfo, dataIndex, expandedState, level, column, indentIndex, i);
                        if (cellElement) {
                            cellElement.setAttribute("role", this._options.cellRole);
                            cellElement.setAttribute("aria-describedby", this._columnHeaderIds[column.index]);
                            rowElement.appendChild(cellElement);
                        }
                    }
                    if (this._gutter) {
                        GridControl.makeElementUnselectable(gutterRowElem);
                    }
                    this._updateRowSelectionStyle(rowInfo, this._selectedRows, this._selectedIndex);
                    if (expandedState !== 0) {
                        rowElement.setAttribute("aria-expanded", expandedState > 0 ? "true" : "false");
                    }
                };
                GridControl.prototype._getGutterIconClass = function (rowIndex, dataIndex, expandedState, level) {
                    return "";
                };
                GridControl.prototype._drawGutterCell = function (rowInfo, rowIndex, dataIndex, expandedState, level) {
                };
                GridControl.prototype._drawHeader = function () {
                    var _this = this;
                    var columns = this._columns, sortOrder = this._sortOrder;
                    if (this._header) {
                        var fragment = document.createDocumentFragment();
                        for (var i = 0, l = columns.length; i < l; i++) {
                            var column = columns[i];
                            if (column.hidden) {
                                continue;
                            }
                            var headerElement = this.createElementWithClass("div", this._options.headerColumnElementClass);
                            headerElement.setAttribute("tabindex", "0");
                            headerElement.setAttribute("aria-label", column.text);
                            headerElement.setAttribute("role", "columnheader");
                            headerElement.setAttribute("id", "header_id_" + column.index);
                            headerElement.addEventListener("keydown", function (e) { return _this._onHeaderKeydown(e); });
                            // Creating header cell which corresponds to this column
                            GridControl._setTooltip(headerElement, column.tooltip, 65, column.maxTooltipLineLength);
                            // Adjusting the width of the column
                            headerElement.style.width = (column.width || 20) + "px";
                            headerElement._data = { columnIndex: i, header: true };
                            // Creating the separator element for column resize
                            var seperatorElement = this.createElementWithClass("div", "separator");
                            if (column.fixed) {
                                // Don't show resize cursor for fixed size columns
                                seperatorElement.style.cursor = "auto";
                            }
                            seperatorElement._data = { columnIndex: i, separator: true };
                            headerElement.appendChild(seperatorElement);
                            // Add an element for cell's value
                            var headerCellElement = column.getHeaderCellContents(column, i);
                            if (column.headerCss) {
                                headerCellElement.classList.add(column.headerCss);
                            }
                            // TODO: Remove this when daytona fixes parent tooltip bug
                            if (column.tooltip) {
                                GridControl._setTooltip(headerCellElement, column.tooltip, 65, column.maxTooltipLineLength);
                            }
                            headerElement.appendChild(headerCellElement);
                            // Creating the sort element for enabling the sort operation when it's clicked
                            var sortElement = this.createElementWithClass("div", "sort-handle");
                            sortOrder.forEach(function (element, index, array) {
                                if (element.index === column.index) {
                                    if (element.order === "asc") {
                                        // Sorted asc. Font family is set to Marlett which will convert 5 to asc arrow.
                                        sortElement.innerHTML = GridControl.ASCENDING_ARROW;
                                        sortElement.setAttribute("aria-label", column.sortLabels.sortedAscending);
                                    }
                                    else if (element.order === "desc") {
                                        // Sorted desc. Font family is set to Marlett which will convert 6 to desc arrow.
                                        sortElement.innerHTML = GridControl.DESCENDING_ARROW;
                                        sortElement.setAttribute("aria-label", column.sortLabels.sortedDescending);
                                    }
                                    sortElement.setAttribute("role", "img");
                                    return false;
                                }
                            });
                            headerElement.appendChild(sortElement);
                            fragment.appendChild(headerElement);
                        }
                        this._headerCanvas.innerHTML = "";
                        this._headerCanvas.appendChild(fragment);
                        GridControl.makeElementUnselectable(this._header);
                    }
                };
                GridControl.prototype._drawHeaderCellValue = function (column, columnOrder) {
                    // Create the element
                    var cellElement = document.createElement("div");
                    cellElement.id = this._columnHeaderIds[column.index];
                    cellElement.classList.add("title");
                    if (column.hasHTMLContent) {
                        cellElement.innerHTML = column.text || "&nbsp;";
                    }
                    else {
                        cellElement.innerText = column.text || "";
                    }
                    // Check if this is an indented title
                    if (columnOrder === this._indentIndex && !(typeof this._indentLevels === "undefined" || this._indentLevels === null)) {
                        cellElement.classList.add("indented-title");
                    }
                    return cellElement;
                };
                GridControl.prototype._layoutContentSpacer = function () {
                    var width = 0, columns = this._columns;
                    for (var i = 0, l = columns.length; i < l; i++) {
                        if (columns[i].hidden) {
                            continue;
                        }
                        width += (columns[i].width || 20) + this._measurements.cellOffset;
                    }
                    // TODO: Magic number 2 here means 1px left border + 1px right border. Come up with a
                    // better solution for this. We might set the box model to content-box but borders don't
                    // fit very well in this case. If we don't apply this hack, cells don't fit in the row
                    // and last cell breaks into next line.
                    width = width + 2;
                    var height = Math.max(1, this.getTotalDataHeight()); // we need vertical scroll bar even if there is no result
                    this._contentSpacer.style.width = width + "px";
                    this._contentSpacer.style.height = height + "px";
                    if (this._gutter) {
                        this._gutter.style.height = height + "px";
                    }
                    this._ignoreScroll = true;
                    try {
                        var scrollTop = Math.max(0, Math.min(this._scrollTop, height - this._canvasHeight));
                        if (scrollTop !== this._scrollTop) {
                            this._scrollTop = scrollTop;
                            this._canvas.scrollTop = scrollTop;
                        }
                        var scrollLeft = Math.max(0, Math.min(this._scrollLeft, width - this._canvasWidth));
                        if (scrollLeft !== this._scrollLeft) {
                            this._scrollLeft = scrollLeft;
                            this._canvas.scrollLeft = scrollLeft;
                        }
                    }
                    finally {
                        this._ignoreScroll = false;
                    }
                    this._contentSize.width = width;
                    this._contentSize.height = height;
                };
                GridControl.prototype._layoutHeader = function () {
                    if (this._header) {
                        this._header.scrollLeft = this._measurements.gutterWidth + this._scrollLeft;
                    }
                    if (this._gutter) {
                        this._gutter.style.left = this._scrollLeft + "px";
                    }
                };
                GridControl.prototype._fixScrollPos = function () {
                    var oldIgnoreScroll = this._ignoreScroll;
                    this._ignoreScroll = true;
                    try {
                        this._canvas.scrollLeft = this._scrollLeft;
                        this._canvas.scrollTop = this._scrollTop;
                    }
                    finally {
                        this._ignoreScroll = oldIgnoreScroll;
                    }
                };
                GridControl.prototype._redraw = function (includeNonDirtyRows) {
                    this._layoutHeader();
                    this._updateViewport(includeNonDirtyRows);
                };
                GridControl.prototype._selectRow = function (rowIndex, dataIndex, options) {
                    var ctrl = options && options.ctrl, shift = options && options.shift, rightClick = options && options.rightClick;
                    if (ctrl) {
                        // If ctrl key is pressed, selecting or deselecting only the row at rowIndex
                        this._addSelection(rowIndex, dataIndex, { toggle: true });
                    }
                    else if (shift) {
                        // If shift key is pressed, selecting the rows starting from selection start until the row at rowIndex
                        this._clearSelection();
                        this._addSelectionRange(rowIndex, dataIndex);
                    }
                    else if (rightClick) {
                        if (!this._selectedRows || !(this._selectedRows.hasOwnProperty(rowIndex))) {
                            // Right-clicked a previously unselected row, select that row
                            this._clearSelection();
                            this._addSelection(rowIndex, dataIndex);
                        }
                        else {
                            // Right-clicked a previously selected row. Just update the selection index.
                            this._selectedIndex = rowIndex;
                            this._updateAriaAttribute();
                        }
                    }
                    else {
                        // Just selecting the single row at rowIndex
                        this._clearSelection();
                        this._addSelection(rowIndex, dataIndex);
                    }
                };
                GridControl.prototype._selectAll = function () {
                    // Since we do not have a property that tells us the number of 
                    // rows we have, we need to count all the non-placeholder rows.
                    var lastRowIndex = 0;
                    for (var dataIndex = 0, len = this._dataSource.length; dataIndex < len; ++dataIndex) {
                        var row = this._dataSource[dataIndex];
                        if (row && !row.isPlaceholder) {
                            ++lastRowIndex;
                        }
                    }
                    lastRowIndex--; // Index is inclusive, subtract 1 so that we don't go past the end
                    if (lastRowIndex >= 0 && this._options.allowMultiSelect !== false) {
                        // Clearing the selection first
                        this._clearSelection();
                        this._selectionStart = 0;
                        // Saving the selected rowIndex
                        var prevIndex = Math.max(0, this._selectedIndex);
                        this._addSelectionRange(lastRowIndex, undefined, { doNotFireEvent: true });
                        // Restoring the selected rowIndex
                        this._selectedIndex = prevIndex;
                        this._updateSelectionStyles();
                        this._selectionChanged();
                    }
                };
                /**
                 * Highlights the rows beginning from the selection start until the row at the specified rowIndex
                 * @param rowIndex Index of the row in the visible source (taking the expand/collapse states into account)
                 * @param dataIndex Index of the row in the overall source
                 */
                GridControl.prototype._addSelectionRange = function (rowIndex, dataIndex, options) {
                    var doNotFireEvent = options && options.doNotFireEvent, prevSelectedDataIndex = -1, selectedDataIndex;
                    if (this._options.allowMultiSelect === false) {
                        this._addSelection(rowIndex, dataIndex);
                    }
                    else {
                        if (this._selectedRows) {
                            prevSelectedDataIndex = this._selectedRows[this._selectedIndex];
                        }
                        if (this._selectionStart < 0) {
                            this._selectionStart = rowIndex;
                        }
                        var start = Math.min(this._selectionStart, rowIndex);
                        var end = Math.max(this._selectionStart, rowIndex);
                        if (typeof (dataIndex) !== "number" || start !== rowIndex) {
                            // If the dataIndex is not specified or rowIndex is different than start,
                            // finding it by using visible rowIndex
                            dataIndex = this._getDataIndex(start);
                        }
                        for (var i = start; i <= end; i++) {
                            this._addSelection(i, dataIndex, { keepSelectionStart: true, doNotFireEvent: true });
                            if (i === rowIndex) {
                                selectedDataIndex = dataIndex;
                            }
                            if (typeof (dataIndex) === "number") {
                                var nodeState = this._getExpandState(dataIndex);
                                dataIndex += nodeState < 0 ? 1 - nodeState : 1;
                            }
                        }
                        // Setting selected index to index of last selected row
                        this._selectedIndex = rowIndex;
                        this._updateAriaAttribute();
                        if (!doNotFireEvent) {
                            this._updateSelectionStyles();
                            this._selectionChanged();
                            if (prevSelectedDataIndex !== selectedDataIndex) {
                                this._selectedIndexChanged(this._selectedIndex, selectedDataIndex);
                            }
                        }
                    }
                };
                GridControl.prototype._selectionChanged = function () {
                    this.selectionChanged(this._selectedIndex, this._selectionCount, this._selectedRows);
                    this.fireCustomEvent(this._element, "selectionchanged", [{ selectedIndex: this._selectedIndex, selectedCount: this._selectionCount, selectedRows: this._selectedRows }]);
                };
                GridControl.prototype._selectedIndexChanged = function (selectedRowIndex, selectedDataIndex) {
                    this.selectedIndexChanged(selectedRowIndex, selectedDataIndex);
                    this.fireCustomEvent(this._element, GridControl.EVENT_SELECTED_INDEX_CHANGED, [selectedRowIndex, selectedDataIndex]);
                };
                GridControl.prototype._measureCanvasSize = function () {
                    this._canvasHeight = this._canvas.clientHeight;
                    this._canvasWidth = this._canvas.clientWidth;
                };
                GridControl.prototype._setupMoveEvents = function () {
                    var _this = this;
                    document.addEventListener("mousemove", function (e) { return _this._onDocumentMouseMove(e); });
                    document.addEventListener("mouseup", function (e) { return _this._onDocumentMouseUp(e); });
                };
                GridControl.prototype._clearMoveEvents = function () {
                    document.removeEventListener("mousemove", null, true);
                    document.removeEventListener("mouseup", null, true);
                };
                GridControl.prototype._onDocumentMouseMove = function (e) {
                    var columnSizing = this._columnSizing;
                    // Checking whether column sizing has started or not
                    if (columnSizing && columnSizing.active === true) {
                        var delta = e.pageX - columnSizing.origin;
                        var newWidth = Math.max(15, columnSizing.originalWidth + delta);
                        var column = this._columns[columnSizing.index];
                        column.width = newWidth;
                        this._applyColumnSizing(columnSizing.index);
                        this._moveSizingElement(columnSizing.index);
                    }
                };
                GridControl.prototype._onDocumentMouseUp = function (e) {
                    var _this = this;
                    window.setTimeout(function () {
                        _this._tryFinishColumnSizing(false);
                    }, 0);
                    return false;
                };
                GridControl.prototype._onHeaderMouseDown = function (e) {
                    // We should support header operations only for left mouse button
                    if (e.which !== 1) {
                        return true;
                    }
                    var separator = this.findClosestElement(e.target, ".separator");
                    if (separator && separator._data) {
                        var columnIndex = separator._data.columnIndex;
                        var column = this._columns[columnIndex];
                        if (!column.fixed) {
                            this._columnSizing = new ColumnSizing(true, columnIndex, column.width, e.pageX);
                            this._moveSizingElement(columnIndex);
                            this._setupMoveEvents();
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            return false;
                        }
                    }
                };
                GridControl.prototype._onHeaderMouseUp = function (e) {
                    return false;
                };
                GridControl.prototype._onHeaderClick = function (e) {
                    var headerColumn = this.findClosestElement(e.target, "." + this._options.headerColumnElementClass);
                    if (headerColumn) {
                        if (!this._columnSizing) {
                            var separator = this.findClosestElement(e.target, ".separator");
                            if (separator && separator._data) {
                                return false;
                            }
                            else if (headerColumn._data) {
                                var columnIndex = headerColumn._data.columnIndex;
                                var column = this._columns[columnIndex];
                                if (column.canSortBy && !column.fixed) {
                                    this._sortBy(column, e.shiftKey);
                                }
                            }
                        }
                    }
                };
                GridControl.prototype._onHeaderDblClick = function (e) {
                    // Determine whether the element is a separator
                    var separator = this.findClosestElement(e.target, ".separator");
                    if (separator && separator._data) {
                        // Cancel any pending sizing/moving events triggered by the double-click's first click
                        this._tryFinishColumnSizing(true);
                        var columnIndex = separator._data.columnIndex;
                        var column = this._columns[columnIndex];
                        // Initialize maxWidth with the width of a 3-character string
                        var minimumCharacterLength = 3;
                        var maxWidthInPx = GridControl._approximateTextWidth(minimumCharacterLength, this._measurements.unitEx);
                        var expandedCount = this.getExpandedCount();
                        // Loop through all rows in this column whose ancestors have not been collapsed
                        // and find the width of the widest one.
                        for (var currRow = 0; currRow < expandedCount; currRow++) {
                            var currCellTextWidthInPx = 0;
                            var rowDataIndex = this._getDataIndex(currRow);
                            // If the column is indented, add the indentation amount to the width
                            if (column.indent) {
                                currCellTextWidthInPx += this.getColumnPixelIndent(this._indentLevels[rowDataIndex]);
                            }
                            var cellTextLength = this.getColumnText(rowDataIndex, column, -1 /* not used */).length;
                            if (!column.indent && cellTextLength <= minimumCharacterLength) {
                                // This cell will be below the minimum width anyway, so skip the rest of the computation
                                continue;
                            }
                            currCellTextWidthInPx += GridControl._approximateTextWidth(cellTextLength, this._measurements.unitEx);
                            maxWidthInPx = Math.max(maxWidthInPx, currCellTextWidthInPx);
                        }
                        var originalWidth = column.width;
                        column.width = maxWidthInPx;
                        this._applyColumnSizing(columnIndex, originalWidth, true);
                        return false;
                    }
                };
                GridControl.prototype._onHeaderScroll = function (e) {
                    if (this._scrollCausedByCanvas) {
                        // Ignore this scroll event.
                        this._scrollCausedByCanvas = false;
                    }
                    else {
                        this._resetScroll = true;
                        this._scrollCausedByHeader = true;
                        this._scrollLeft = this._header.scrollLeft;
                        this._fixScrollPos();
                    }
                    return false;
                };
                GridControl.prototype._onHeaderKeydown = function (e) {
                    if (e.keyCode == Common.KeyCodes.ARROW_DOWN || e.keyCode == Common.KeyCodes.ARROW_UP ||
                        e.keyCode == Common.KeyCodes.ARROW_LEFT || e.keyCode == Common.KeyCodes.ARROW_RIGHT) {
                        e.stopPropagation();
                        e.preventDefault();
                        return false;
                    }
                    else if (e.keyCode == Common.KeyCodes.ENTER) {
                        var origFocus = this._focus;
                        var result = this._onHeaderClick(e);
                        origFocus.focus();
                        return result;
                    }
                };
                GridControl.prototype._moveSizingElement = function (columnIndex) {
                    var left = this._measurements.gutterWidth;
                    if (!this._sizingElement) {
                        // If there is no sizing element around, creating one
                        if (columnIndex < 0) {
                            return;
                        }
                        this._sizingElement = this.createElementWithClass("div", "grid-column-sizing");
                        this._canvas.appendChild(this._sizingElement);
                    }
                    this._sizingElement.style.height = (this._canvas.clientHeight - 1) + "px";
                    this._sizingElement.style.top = this._scrollTop + "px";
                    if (columnIndex < 0) {
                        this._sizingElement.style.left = "-5000px";
                        this._sizingElement.style.top = "-5000px";
                        this._sizingElement.style.height = 0 + "px";
                    }
                    else {
                        var i = 0;
                        while (i <= columnIndex) {
                            var column = this._columns[i++];
                            if (!column.hidden) {
                                left += column.width;
                            }
                        }
                        this._sizingElement.style.left = (left - 1) + "px";
                    }
                };
                /**
                 * Given a column index will provide the visible index of this column. That is, it will take in to consideration any
                 * hidden columns and omit them from the index count.
                 * @param columnIndex The 0-based global column index
                 * @returns The 0-based visible column index
                 */
                GridControl.prototype._getVisibleColumnIndex = function (columnIndex) {
                    var columnCounter = 0, visibleColumnIndex = 0, length = this._columns.length;
                    if (this._columns[columnIndex].hidden) {
                        return -1; // If the column is hidden then it has no visible index
                    }
                    while (columnCounter < columnIndex) {
                        if (!this._columns[columnCounter].hidden) {
                            visibleColumnIndex++;
                        }
                        columnCounter++;
                    }
                    return visibleColumnIndex;
                };
                GridControl.prototype._onColumnResize = function (column) {
                    this.fireCustomEvent(this._element, "columnresize", [column]);
                };
                GridControl.prototype._tryFinishColumnSizing = function (cancel) {
                    var columnSizing = this._columnSizing;
                    if (columnSizing) {
                        if (columnSizing.active === true) {
                            if (!cancel) {
                                this._applyColumnSizing(columnSizing.index, columnSizing.originalWidth, true);
                            }
                            this._moveSizingElement(-1);
                        }
                        this._columnSizing = null;
                        this._clearMoveEvents();
                    }
                };
                GridControl.prototype._getSortColumns = function (sortOrders) {
                    var columns = this._columns, sortColumns = [];
                    for (var i = 0, l = sortOrders.length; i < l; i++) {
                        var sortOrder = sortOrders[i];
                        for (var j = 0; j < columns.length; ++j) {
                            var column = columns[j];
                            if (column.index === sortOrder.index) {
                                sortColumns.push(column);
                                break;
                            }
                        }
                    }
                    return sortColumns;
                };
                GridControl.prototype._sortBy = function (column, add) {
                    var sortOrder = this._sortOrder.slice(0), found = false;
                    if (column) {
                        for (var i = 0, l = sortOrder.length; i < l; i++) {
                            var sc = sortOrder[i];
                            if (sc.index === column.index) {
                                sortOrder.splice(i, 1);
                                found = true;
                                break;
                            }
                        }
                        var sc;
                        if (found) {
                            sc = new SortOrderInfo(sc.index, sc.order === "asc" ? "desc" : "asc");
                        }
                        else {
                            sc = new SortOrderInfo(column.index, column.defaultSortOrder);
                        }
                        if (add && this._options.allowSortOnMultiColumns) {
                            sortOrder.push(sc);
                        }
                        else {
                            sortOrder = [sc];
                        }
                    }
                    if (this._options.onBeforeSortCallback) {
                        // The callee may modify the sort order.
                        this._options.onBeforeSortCallback(sortOrder);
                    }
                    var sortColumns = this._getSortColumns(sortOrder);
                    this._onSort(sortOrder, sortColumns);
                };
                GridControl.prototype._onSort = function (sortOrder, sortColumns) {
                    if (this.onSort(sortOrder, sortColumns) !== false) {
                        this.fireCustomEvent(this._element, "sort", [{ sortOrder: sortOrder, sortColumns: sortColumns }]);
                    }
                };
                GridControl.prototype._onCanvasScroll = function (e) {
                    var canvas = this._canvas;
                    this._scrollLeft = canvas.scrollLeft;
                    this._scrollTop = canvas.scrollTop;
                    if (this._scrollCausedByHeader) {
                        // Ignore this scroll event.
                        this._scrollCausedByHeader = false;
                    }
                    else {
                        this._resetScroll = true;
                        this._scrollCausedByCanvas = true;
                        if (!this._ignoreScroll) {
                            // Don't reset scroll when the user is naviagting via cell
                            var focusElement;
                            if (document.activeElement && document.activeElement.classList.contains("grid-cell")) {
                                focusElement = document.activeElement;
                            }
                            this._redraw();
                            if (focusElement) {
                                focusElement.focus();
                            }
                        }
                    }
                    return false;
                };
                GridControl.prototype._getClickedCell = function (e) {
                    return this.findClosestElement(e.target, ".grid-cell");
                };
                GridControl.prototype._createEditCellBox = function (rowDataIndex, columnIndex, editElement, editCallback) {
                    var previousValue = editElement.innerText;
                    var editBox = this.createElementWithClass("input", "grid-edit-box");
                    editBox.setAttribute("type", "text");
                    editBox.setAttribute("value", previousValue);
                    function commitValue(e) {
                        var data = editBox.value;
                        editElement.innerText = data;
                        // Call the watch window edit call back to change the value
                        if (editCallback) {
                            editCallback(data, rowDataIndex, columnIndex);
                            e.stopPropagation();
                            e.preventDefault();
                            return false;
                        }
                    }
                    editBox.addEventListener("focusout", function (e) {
                        commitValue(e);
                    });
                    editBox.addEventListener("keydown", function (e) {
                        if (e.keyCode === Common.KeyCodes.ENTER) {
                            commitValue(e);
                        }
                        else if (e.keyCode === Common.KeyCodes.ESCAPE) {
                            editElement.innerText = previousValue;
                            e.stopPropagation();
                            e.preventDefault();
                            return false;
                        }
                    });
                    // Clear the html content
                    editElement.innerHTML = "";
                    // Add the text box
                    editElement.appendChild(editBox);
                    // Select the text and set focus
                    editBox.select();
                    editBox.focus();
                };
                GridControl.prototype._onEditCell = function (e) {
                    var targetElement = e.target;
                    if (!targetElement.classList.contains("grid-tree-icon")) {
                        var cellElement = this._getClickedCell(e);
                        if (cellElement && cellElement.classList.contains("grid-cell-editable")) {
                            // Obtain the row information
                            var rowInfo = this.getRowInfoFromEvent(e, "." + this._options.rowClass);
                            if (rowInfo) {
                                var cells = rowInfo.row.children;
                                var totalCells = cells.length;
                                var columnIndex = -1;
                                // Obtain which cell number was selected to edit
                                for (var index = 0; index < totalCells; index++) {
                                    if (cellElement === cells[index]) {
                                        columnIndex = index;
                                    }
                                }
                                // Create a text box for editing the cell
                                this._createEditCellBox(rowInfo.dataIndex, columnIndex, cellElement, this._editCellCallback);
                            }
                        }
                    }
                };
                GridControl.prototype._onGutterClick = function (e) {
                    var rowInfo = this.getRowInfoFromEvent(e, ".grid-gutter-row"), target;
                    if (rowInfo) {
                        if (!this._selectedRows || typeof (this._selectedRows[rowInfo.rowIndex]) !== "number") {
                            this._selectRow(rowInfo.rowIndex, rowInfo.dataIndex);
                        }
                    }
                };
                GridControl.prototype._updateThemeAttributes = function () {
                    // Update font size
                    var currentFontSize = Microsoft.Plugin.Theme.getValue("plugin-font-size");
                    if (currentFontSize.indexOf("px") !== -1) {
                        this._textFontPx = parseInt(currentFontSize.substring(0, currentFontSize.indexOf("px")));
                    }
                    else if (currentFontSize.indexOf("pt") !== -1) {
                        // 0.75 is the approximate factor for converting font from 'pt' to 'px'
                        this._textFontPx = Math.round(parseInt(currentFontSize.substring(0, currentFontSize.indexOf("pt"))) / 0.75);
                    }
                    else {
                        // This is unexpected. We are in a bad state now.
                        this._textFontPx = 0;
                    }
                };
                GridControl.EVENT_ROW_EXPANDED_COLLAPSED = "rowExpandedCollapsed";
                GridControl.MAX_COPY_SIZE = 1000;
                GridControl.PAYLOAD_SIZE = 200;
                GridControl.EVENT_SELECTED_INDEX_CHANGED = "selectedIndexChanged";
                GridControl.INDENT_PER_LEVEL = 16; // TODO: magic number?
                GridControl.ASCENDING_ARROW = "5"; // Marlett font will convert it into ascending arrow.
                GridControl.DESCENDING_ARROW = "6"; // Marlett font will convert it into descending arrow.
                GridControl.CURRENT_UID = 0;
                return GridControl;
            }(Controls.Control));
            Grid.GridControl = GridControl;
        })(Grid = Controls.Grid || (Controls.Grid = {}));
    })(Controls = Common.Controls || (Common.Controls = {}));
})(Common || (Common = {}));
/// <reference path="control.ts" />
/// <reference path="KeyCodes.ts" />
var Common;
(function (Common) {
    var Controls;
    (function (Controls) {
        (function (GridSplitterDirection) {
            GridSplitterDirection[GridSplitterDirection["Horizontal"] = 0] = "Horizontal";
            GridSplitterDirection[GridSplitterDirection["Vertical"] = 1] = "Vertical";
        })(Controls.GridSplitterDirection || (Controls.GridSplitterDirection = {}));
        var GridSplitterDirection = Controls.GridSplitterDirection;
        var GridSplitterControl = (function (_super) {
            __extends(GridSplitterControl, _super);
            function GridSplitterControl(splitterElement, minSize, callback) {
                _super.call(this, splitterElement);
                this._direction = null;
                this._minSize = (typeof minSize === "number" && minSize > 0) ? minSize : GridSplitterControl._gridSplitterDefaultMinSize;
                this._callback = callback;
                // Add the correct class for the grid splitter
                if (!this.rootElement.contains(GridSplitterControl._gridSplitterClass)) {
                    this.rootElement.classList.add(GridSplitterControl._gridSplitterClass);
                }
                // Create the resizer
                this._resizerDisplay = document.createElement("div");
                this._resizerDisplay.className = GridSplitterControl._gridSplitterClass + " " + GridSplitterControl._gridSplitterResizerClass;
                this._resizerDisplay.style.position = "relative";
                this._resizerDisplay.style.display = "none";
                this.rootElement.appendChild(this._resizerDisplay);
                // Attach the initial handler
                this.rootElement.addEventListener("mousedown", this.onMouseDown.bind(this));
                this.rootElement.addEventListener("keyup", this.onKeyPress.bind(this));
            }
            Object.defineProperty(GridSplitterControl.prototype, "direction", {
                get: function () {
                    if (this._direction === null) {
                        this._direction = this.getSplitterDirection();
                    }
                    return this._direction;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridSplitterControl.prototype, "gridCSS", {
                get: function () {
                    if (!this._gridCSS) {
                        this._gridCSS = this.getParentGridCSS();
                    }
                    return this._gridCSS;
                },
                enumerable: true,
                configurable: true
            });
            GridSplitterControl.prototype.getSplitterDirection = function () {
                // Set the direction using the class
                var direction;
                if (this.rootElement.classList.contains(GridSplitterControl._gridSplitterVerticalClass)) {
                    direction = GridSplitterDirection.Vertical;
                }
                else if (this.rootElement.classList.contains(GridSplitterControl._gridSplitterHorizontalClass)) {
                    direction = GridSplitterDirection.Horizontal;
                }
                else {
                    // No defined class, so base it off of size
                    if (this.rootElement.clientWidth > this.rootElement.clientHeight) {
                        direction = GridSplitterDirection.Vertical;
                    }
                    else {
                        direction = GridSplitterDirection.Horizontal;
                    }
                }
                // Set the info for this direction
                if (direction == GridSplitterDirection.Vertical) {
                    // currentStyle is IE only and not defined in lib.d.ts so cast to any
                    this._gridIndex = parseInt(this.rootElement.currentStyle.msGridRow, 10) - 1;
                    this._resizerDisplay.className += " " + GridSplitterControl._gridSplitterClass + "-Vertical";
                }
                else {
                    // currentStyle is IE only and not defined in lib.d.ts so cast to any
                    this._gridIndex = parseInt(this.rootElement.currentStyle.msGridColumn, 10) - 1;
                    this._resizerDisplay.className += " " + GridSplitterControl._gridSplitterClass + "-Horizontal";
                }
                return direction;
            };
            GridSplitterControl.prototype.getParentGridCSS = function () {
                // Get the css based off of direction
                if (this.direction === GridSplitterDirection.Vertical) {
                    // currentStyle is IE only and not defined in lib.d.ts so cast to any
                    return this.rootElement.parentElement.currentStyle.msGridRows;
                }
                else {
                    // currentStyle is IE only and not defined in lib.d.ts so cast to any
                    return this.rootElement.parentElement.currentStyle.msGridColumns;
                }
            };
            GridSplitterControl.prototype.calculateGridInfo = function () {
                // Obtain the grid css (not our cached version, in case it changed) that we can parse to determine the size ratios
                this._gridCSS = this.getParentGridCSS();
                if (!this._gridCSS) {
                    throw new Error(Microsoft.Plugin.Resources.getErrorString("JSPerf.1019"));
                }
                // Get the 2 parts that this splitter is splitting
                this._gridCSSParts = this._gridCSS.split(" ");
                if (this._gridCSSParts.length >= this._gridIndex && this._gridIndex > 0) {
                    var previous = this._gridCSSParts[this._gridIndex - 1];
                    var current = this._gridCSSParts[this._gridIndex];
                    // Ensure the grid is using fraction units
                    if (previous.indexOf("fr") === -1 || current.indexOf("fr") === -1) {
                        throw new Error(Microsoft.Plugin.Resources.getErrorString("JSPerf.1020"));
                    }
                    // Set the total size that these 2 items occupy in the grid
                    this._gridCSSTotal = (parseFloat(previous) + parseFloat(current));
                }
                else {
                    throw new Error(Microsoft.Plugin.Resources.getErrorString("JSPerf.1021"));
                }
            };
            GridSplitterControl.prototype.onMouseMove = function (e) {
                // Get the new position of the resizer
                var mousePosition = (this.direction === GridSplitterDirection.Vertical ? e.pageY : e.pageX);
                // Get the elements that the resizer is confined to
                var previous = this.rootElement.previousElementSibling;
                var next = this.rootElement.nextElementSibling;
                var min = 0;
                var max = 0;
                // Keep the resizer inside the grid
                if (this.direction === GridSplitterDirection.Vertical) {
                    min = previous.offsetTop + this._minSize;
                    max = next.offsetTop + next.offsetHeight - this._minSize;
                }
                else {
                    min = previous.offsetLeft + this._minSize;
                    max = next.offsetLeft + next.offsetWidth - this._minSize;
                }
                // Get the new position of the resizer
                var newPostion = mousePosition;
                if (mousePosition < min) {
                    newPostion = min;
                }
                else if (mousePosition > max) {
                    newPostion = max;
                }
                this._endPosition = newPostion;
                // Move the resizer
                var displayPosition = newPostion - this._startPosition;
                if (this.direction === GridSplitterDirection.Vertical) {
                    this._resizerDisplay.style.top = displayPosition + "px";
                }
                else {
                    this._resizerDisplay.style.left = displayPosition + "px";
                }
                // Prevent highlighting text while resizing
                e.stopImmediatePropagation();
                e.preventDefault();
            };
            GridSplitterControl.prototype.onMouseUp = function (e) {
                // Hide the resizing div
                this._resizerDisplay.style.display = "none";
                this.rootElement.style.removeProperty("background-color");
                // Reset the cursor
                document.body.style.cursor = this._previousCursor;
                // Move the splitter based on the position change
                var changeInPosition = (this._endPosition - this._startPosition);
                this.moveSplitter(changeInPosition);
                // Remove the mouse event listeners
                document.removeEventListener("mousemove", this._mouseMoveListener, true);
                document.removeEventListener("mouseup", this._mouseUpListener, true);
                // Prevent highlighting text while resizing
                e.stopImmediatePropagation();
                e.preventDefault();
            };
            GridSplitterControl.prototype.onMouseDown = function (e) {
                // Get the initial grid css
                this.calculateGridInfo();
                // Set the cursor
                this._previousCursor = document.body.style.cursor;
                // Cast to any since currentStyle is IE only
                document.body.style.cursor = this.rootElement.currentStyle.cursor;
                // Get the start position
                this._startPosition = (this.direction === GridSplitterDirection.Vertical ? e.pageY : e.pageX);
                // Reset the resizer to the start position
                this.rootElement.style.backgroundColor = "transparent";
                this._resizerDisplay.style.display = "block";
                this._resizerDisplay.style.top = "0";
                this._resizerDisplay.style.left = "0";
                // Store the callbacks so we can remove them later
                this._mouseMoveListener = this.onMouseMove.bind(this);
                this._mouseUpListener = this.onMouseUp.bind(this);
                // Listen for mouse events
                document.addEventListener("mousemove", this._mouseMoveListener, true);
                document.addEventListener("mouseup", this._mouseUpListener, true);
                // Prevent highlighting text while resizing
                e.stopImmediatePropagation();
                e.preventDefault();
            };
            GridSplitterControl.prototype.onKeyPress = function (e) {
                // determine movement arrow keys based on splitter direction
                var downKeyCode;
                var upKeyCode;
                if (this.getSplitterDirection() == GridSplitterDirection.Vertical) {
                    downKeyCode = Common.KeyCodes.ARROW_DOWN;
                    upKeyCode = Common.KeyCodes.ARROW_UP;
                }
                else {
                    downKeyCode = Common.KeyCodes.ARROW_RIGHT;
                    upKeyCode = Common.KeyCodes.ARROW_LEFT;
                }
                if (e.keyCode != downKeyCode && e.keyCode != upKeyCode) {
                    // a non-movement event
                    return;
                }
                // compute the change in position
                var expanding = e.keyCode == downKeyCode;
                var changeInPosition = this.sizePrevious + this.sizeCurrent;
                changeInPosition *= expanding ? 1 : -1;
                changeInPosition *= GridSplitterControl._gridSplitterArrowMoveRatio;
                // update the splitter position
                this.calculateGridInfo();
                this.moveSplitter(changeInPosition);
                // We have handled the event
                e.stopImmediatePropagation();
                e.preventDefault();
            };
            GridSplitterControl.prototype.moveSplitter = function (changeInPosition) {
                var ratioCurrent = (this.sizeCurrent - changeInPosition) / (this.sizePrevious + this.sizeCurrent);
                // Ensure that we have a valid size
                if (ratioCurrent > 0 && ratioCurrent < 1) {
                    // Calculate the new sizes
                    var newSizePrevious = (1 - ratioCurrent) * this._gridCSSTotal;
                    var newSizeCurrent = ratioCurrent * this._gridCSSTotal;
                    // Build up the new css
                    var newGridCSS = "";
                    for (var i = 0; i < this._gridCSSParts.length; i++) {
                        if (i === this._gridIndex - 1) {
                            newGridCSS += newSizePrevious + "fr";
                        }
                        else if (i === this._gridIndex) {
                            newGridCSS += newSizeCurrent + "fr";
                        }
                        else {
                            newGridCSS += this._gridCSSParts[i];
                        }
                        if (i < this._gridCSSParts.length - 1) {
                            newGridCSS += " ";
                        }
                    }
                    // Set the css
                    if (this.direction === GridSplitterDirection.Vertical) {
                        this.rootElement.parentElement.style.msGridRows = newGridCSS;
                    }
                    else {
                        this.rootElement.parentElement.style.msGridColumns = newGridCSS;
                    }
                    this._gridCSS = newGridCSS;
                    if (this._callback && typeof (this._callback) == "function") {
                        this._callback();
                    }
                }
            };
            Object.defineProperty(GridSplitterControl.prototype, "sizePrevious", {
                get: function () {
                    var elem = this.rootElement.previousElementSibling;
                    return this.computeSize(elem);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GridSplitterControl.prototype, "sizeCurrent", {
                get: function () {
                    var elem = this.rootElement.nextElementSibling;
                    return this.computeSize(elem);
                },
                enumerable: true,
                configurable: true
            });
            GridSplitterControl.prototype.computeSize = function (elem) {
                return this.direction == GridSplitterDirection.Vertical ? elem.clientHeight : elem.clientWidth;
            };
            GridSplitterControl._gridSplitterClass = "gridSplitter";
            GridSplitterControl._gridSplitterResizerClass = "gridSplitter-Resizer";
            GridSplitterControl._gridSplitterVerticalClass = "gridSplitter-Vertical";
            GridSplitterControl._gridSplitterHorizontalClass = "gridSplitter-Horizontal";
            GridSplitterControl._gridSplitterDefaultMinSize = 100;
            GridSplitterControl._gridSplitterArrowMoveRatio = .02;
            return GridSplitterControl;
        }(Common.Controls.Control));
        Controls.GridSplitterControl = GridSplitterControl;
    })(Controls = Common.Controls || (Common.Controls = {}));
})(Common || (Common = {}));
// 
// Copyright (C) Microsoft. All rights reserved.
//
/// <reference path="gridControl.ts" />
var Common;
(function (Common) {
    var Controls;
    (function (Controls) {
        var DynamicGrid;
        (function (DynamicGrid) {
            var CacheNode = (function () {
                function CacheNode(value, gcGeneration) {
                    this.value = value;
                    this.gcGeneration = gcGeneration;
                }
                return CacheNode;
            }());
            var ProxyArray = (function () {
                function ProxyArray(adaptor, gate, cacheSize) {
                    this.GCMaxGeneration = 10;
                    this._adaptor = adaptor;
                    this._gate = gate;
                    this._cacheSize = cacheSize;
                    this._size = 0;
                    this._dataSourceGeneration = 0;
                    this._manualGcEnabled = false;
                    this.flushCache();
                }
                ProxyArray.prototype.init = function (done) {
                    var _this = this;
                    this._adaptor._call(this._gate + "Count").done(function (count) {
                        _this._size = count;
                        done();
                    });
                };
                ProxyArray.prototype.adaptor = function () {
                    return this._adaptor;
                };
                ProxyArray.prototype.size = function () {
                    return this._size;
                };
                ProxyArray.prototype.flushCache = function () {
                    delete this._cache;
                    this._cache = [];
                    this._gcGeneration = 0;
                    this._objsInCurrentGCGeneration = 0;
                    this._dataSourceGeneration++;
                };
                ProxyArray.prototype.cache = function (indices, done) {
                    var _this = this;
                    var ask = [];
                    var needUpdate = false;
                    if (!this._manualGcEnabled) {
                        this.collectGarbage();
                    }
                    indices.every(function (index) {
                        if (_this._cache[index]) {
                            // don't allow the object be GC collected immediatelly
                            _this._cache[index].gcGeneration = _this._gcGeneration;
                            needUpdate = needUpdate || _this._cache[index].value === null;
                        }
                        else {
                            needUpdate = true;
                            ask.push(index);
                        }
                        return true;
                    });
                    if (ask.length === 0) {
                        done(needUpdate);
                    }
                    else {
                        // we have something to ask                
                        for (var i = 0; i < ask.length; i++) {
                            this._cache[ask[i]] = new CacheNode(null, 0); // temp value saying that the cache of some index is in "progress"
                        }
                        this._adaptor._call(this._gate, ask).done(function (values) {
                            for (var i = 0; i < ask.length; i++) {
                                if (_this._cache[ask[i]]) {
                                    delete _this._cache[ask[i]];
                                }
                                _this._cache[ask[i]] = new CacheNode(values[i], _this._gcGeneration);
                                _this._objsInCurrentGCGeneration++;
                            }
                            done(needUpdate);
                        });
                    }
                };
                // If we fail to get the value, the callback will not be called.
                ProxyArray.prototype.get = function (index, func) {
                    this.tryGet(index, func, null);
                };
                // If we fail to get the value, the failureFunc callback will be called instead.
                ProxyArray.prototype.tryGet = function (index, func, failureFunc) {
                    var _this = this;
                    var currentDS = this.dataSourceGeneration();
                    this.cache([index], function (needUpdate) {
                        // By checking the DS generation we skip the queries that came from the previous "incarnation" of the array
                        if (currentDS === _this.dataSourceGeneration() && _this._cache[index].value) {
                            func(_this._cache[index].value, needUpdate);
                        }
                        else if (failureFunc) {
                            failureFunc();
                        }
                    });
                };
                // Returns true if an entry exists at the specified index, false otherwise.
                // This method is required to find out if an entry exists without querying C#.
                ProxyArray.prototype.isCached = function (index) {
                    if (this._cache[index])
                        return true;
                    return false;
                };
                // This function helps elliminating array callbacks that are comming from a previos version/generation of the data source
                ProxyArray.prototype.dataSourceGeneration = function () {
                    return this._dataSourceGeneration;
                };
                // DANGEROUS: This function allows you to enable/disable automatic Garbage collection supported by Proxy Array. Users setting this
                // to true should handle garbage collection of the cache on their own making sure it doesn't grow beyond the JS heap size.
                ProxyArray.prototype.toggleManualGarbageCollection = function (value) {
                    this._manualGcEnabled = value;
                };
                ProxyArray.prototype.collectGarbage = function () {
                    var keys = Object.keys(this._cache);
                    if (keys.length > this._cacheSize) {
                        this._gcGeneration = (this._gcGeneration + 1) % this.GCMaxGeneration;
                        for (var i = 0; i < keys.length; i++) {
                            if (this._cache[keys[i]].gcGeneration === this._gcGeneration) {
                                delete this._cache[keys[i]];
                            }
                        }
                    }
                    if (this._objsInCurrentGCGeneration > this._cacheSize / this.GCMaxGeneration) {
                        // move to the next generation
                        this._gcGeneration = (this._gcGeneration + 1) % this.GCMaxGeneration;
                        this._objsInCurrentGCGeneration = 0;
                    }
                };
                return ProxyArray;
            }());
            DynamicGrid.ProxyArray = ProxyArray;
            /// TreePath is a wrapper for tree path array that includes several useful methods. "export" because we use it with GridControl
            var TreePath = (function () {
                function TreePath(path) {
                    this.path = path;
                    this.externalPath = false;
                }
                TreePath.prototype.at = function (i) {
                    if (i < 0 || i >= this.length())
                        throw Error("invalid index");
                    return this.path[i];
                };
                TreePath.prototype.length = function () {
                    return this.path.length;
                };
                TreePath.prototype.head = function () {
                    if (this.length() === 0)
                        throw Error("path is empty");
                    return this.path[0];
                };
                TreePath.prototype.last = function () {
                    if (this.length() === 0)
                        throw Error("path is empty");
                    return this.path[this.length() - 1];
                };
                TreePath.prototype.tail = function () {
                    if (this.length() === 0)
                        throw Error("path is empty");
                    return new TreePath(this.path.slice(1, this.length()));
                };
                TreePath.prototype.chop = function () {
                    if (this.length() === 0)
                        throw Error("path is empty");
                    return new TreePath(this.path.slice(0, this.length() - 1));
                };
                TreePath.prototype.concat = function (tp) {
                    this.path = this.path.concat(tp.path);
                };
                // A very important method! Without toString all grid control this._row manipulations would fail
                TreePath.prototype.toString = function () {
                    return this.path.toString();
                };
                return TreePath;
            }());
            DynamicGrid.TreePath = TreePath;
            /// Double linked tree using to store the information about expanded items 
            var GridTreeNode = (function () {
                function GridTreeNode(index, size, parent) {
                    this.index = index;
                    this.size = size;
                    this.children = [];
                    this.parent = parent || null;
                }
                GridTreeNode.prototype.totalSize = function () {
                    var total = this.size;
                    this.children.forEach(function (c) {
                        total += c.totalSize();
                    });
                    return total;
                };
                GridTreeNode.prototype.sort = function () {
                    this.children.sort(function (x, y) { return x.index - y.index; });
                };
                GridTreeNode.prototype.addChild = function (node) {
                    this.children.push(node);
                    // the children have to be soreted by index. Without sorting findPathByRow cannot work coorectly
                    this.sort();
                };
                GridTreeNode.prototype.remove = function () {
                    var _this = this;
                    var newChildren = [];
                    this.parent.children.forEach(function (c) {
                        if (c.index !== _this.index) {
                            newChildren.push(c);
                        }
                    });
                    this.parent.children = newChildren;
                    delete this;
                    // remove child doesn't brake the sorting order, so we don't need to call this.parent.sort() here
                };
                GridTreeNode.prototype.find = function (path) {
                    // recursive tree search
                    var node = null;
                    if (path.length() === 0) {
                        node = this; // empty patch matches everything
                    }
                    else {
                        // look a child
                        var head = path.head();
                        var tail = path.tail();
                        this.children.every(function (child) {
                            if (child.index === head) {
                                node = child.find(tail);
                            }
                            return !node;
                        });
                    }
                    return node;
                };
                GridTreeNode.prototype.findPathByRow = function (row) {
                    // hidden assumption - the children are soreted by their indices
                    var childPath = null;
                    this.children.every(function (c) {
                        if (c.index >= row) {
                            // found before expanded child
                            return false; // break
                        }
                        var childSize = c.totalSize();
                        if (c.index < row && row <= c.index + childSize) {
                            // inside a child node
                            childPath = c.findPathByRow(row - c.index - 1);
                            row = c.index;
                            return false; // break
                        }
                        else {
                            // after a child node
                            row -= childSize;
                            return true; // continue
                        }
                    });
                    var path = new TreePath([row]);
                    if (childPath !== null) {
                        path.concat(childPath);
                    }
                    return path;
                };
                GridTreeNode.prototype.findRowIndexByTreePath = function (treePath) {
                    var rowCount = -1;
                    var lastIndex = 0;
                    var tree = this;
                    var tempPath = new TreePath([]);
                    for (var i = 0; i < treePath.path.length; i++) {
                        tree.children.forEach(function (c) {
                            if (c.index < treePath.path[i]) {
                                rowCount += (c.index + c.totalSize()) - lastIndex;
                                lastIndex = c.index;
                            }
                            else if (c.index === treePath.path[i] && i < treePath.path.length - 1) {
                                tree = c;
                                rowCount += c.index - lastIndex + 1;
                                lastIndex = 0;
                                return false; // break
                            }
                        });
                        tempPath.path.push(treePath.path[i]);
                    }
                    return rowCount + treePath.last() - lastIndex + 1;
                };
                return GridTreeNode;
            }());
            // The tree that represents expanded items
            var ExpandedItemsTree = (function () {
                function ExpandedItemsTree(dataArray, updateView) {
                    this._dataArray = dataArray;
                    this._tree = new GridTreeNode(undefined, dataArray.size());
                    this._updateView = updateView;
                }
                ExpandedItemsTree.prototype.expand = function (path, size) {
                    var node = this._tree.find(path.chop());
                    if (node === null)
                        throw Error("expand: invalid path " + path.path);
                    node.addChild(new GridTreeNode(path.last(), size, node));
                };
                ExpandedItemsTree.prototype.collapse = function (path) {
                    var node = this._tree.find(path);
                    if (node === null)
                        throw Error("expand: invalid path " + path.path);
                    var size = node.totalSize();
                    node.remove();
                    return size;
                };
                ExpandedItemsTree.prototype.findPathByRow = function (row) {
                    return this._tree.findPathByRow(row);
                };
                ExpandedItemsTree.prototype.findRowIndexByTreePath = function (path) {
                    return this._tree.findRowIndexByTreePath(path);
                };
                ExpandedItemsTree.prototype.expansionStatus = function (treePath) {
                    var _this = this;
                    var expStatus = -1;
                    var node = this._tree.find(treePath);
                    if (node) {
                        expStatus = node.totalSize();
                    }
                    else {
                        this._dataArray.get(treePath.path, function (row, needUpdate) {
                            if (needUpdate) {
                                _this.cacheViewWindow(treePath);
                                _this._updateView();
                                expStatus = 0;
                            }
                            else if (row) {
                                expStatus = (row.SubItemsCount === 0) ? 0 : -1;
                            }
                        });
                    }
                    return expStatus;
                };
                ExpandedItemsTree.prototype.cacheViewWindow = function (treePath, done) {
                    var rowsCount = 0;
                    var parentPath = treePath.chop();
                    if (parentPath.length() === 0) {
                        rowsCount = this._dataArray.size();
                    }
                    else {
                        var parent = this._tree.find(parentPath);
                        if (parent) {
                            rowsCount = parent.size;
                        }
                    }
                    var ViewWindowSize = 50;
                    var path = treePath.path.slice(0); // clone            
                    var from = Math.max(0, path[path.length - 1] - ViewWindowSize);
                    var to = Math.min(rowsCount - 1, path[path.length - 1] + ViewWindowSize);
                    var paths = [];
                    for (var i = from; i <= to; i++) {
                        path[path.length - 1] = i;
                        paths.push(path.slice(0));
                    }
                    if (paths.length > 0) {
                        this._dataArray.cache(paths, function (needUpdate) { if (done)
                            done(needUpdate); });
                    }
                };
                ExpandedItemsTree.prototype.getValueAndCache = function (treePath, done) {
                    var _this = this;
                    // If the value exists in the cache, return it through the callback.
                    if (this._dataArray.isCached(treePath.path)) {
                        this._dataArray.get(treePath.path, done);
                    }
                    else {
                        // Since this is a cache miss, cache all nearby values. This will allow subsequent reads to hit and minimize IPC.
                        this.cacheViewWindow(treePath, function (needUpdating) {
                            _this._dataArray.get(treePath.path, done);
                        });
                    }
                };
                return ExpandedItemsTree;
            }());
            DynamicGrid.ExpandedItemsTree = ExpandedItemsTree;
            // Grid viewer with dynamic data source. We limit the number of rows due to an ugly IE bug that doesn't allow 
            // scrollbar for more than 60K items (bug 574995).
            var DynamicGridViewer = (function (_super) {
                __extends(DynamicGridViewer, _super);
                function DynamicGridViewer(dataArray, root, options) {
                    var _this = this;
                    _super.call(this, root, options);
                    this.MaxRows = 50000;
                    // Register the Context Menu
                    if (options._contextMenuOptions) {
                        // Wrap around the callbacks of each context menu item, to allow focus on the grid once the user clicks on a context menu item.
                        options._contextMenuOptions.forEach(function (contextMenuItem) {
                            if (contextMenuItem.callback) {
                                var oldContextMenuItemCallback = contextMenuItem.callback;
                                contextMenuItem.callback = function (menuId, menuItem) {
                                    oldContextMenuItemCallback(menuId, menuItem);
                                    // Simulate the action of _onContainerMouseDown
                                    // 10 is the timeout used in _onContainerMouseDown in gridControl.ts
                                    _this.focus(10);
                                };
                            }
                        });
                        this._contextMenu = Microsoft.Plugin.ContextMenu.create(options._contextMenuOptions, null, null, null, function () { });
                        this._contextMenuActive = false;
                        this._onDismissContextMenu = this._onDismissContextMenu.bind(this);
                        this._contextMenu.addEventListener("dismiss", this._onDismissContextMenu);
                    }
                    this._dataArray = dataArray;
                    this.activateWithDynamicData(dataArray.size());
                    this._expandedPaths = new ExpandedItemsTree(dataArray, function () { _this.scheduleUpdate(); });
                    this._waitingForUpdate = false;
                }
                DynamicGridViewer.prototype.IsWaitingForUpdate = function () {
                    return this._waitingForUpdate;
                };
                DynamicGridViewer.prototype.getExpandedPaths = function () {
                    return this._expandedPaths;
                };
                DynamicGridViewer.prototype.getExpandedCount = function () {
                    return Math.min(_super.prototype.getExpandedCount.call(this), this.MaxRows);
                };
                DynamicGridViewer.prototype.flush = function () {
                    var _this = this;
                    this._dataArray.flushCache();
                    // "close" all expanded paths
                    delete this._expandedPaths;
                    this._expandedPaths = new ExpandedItemsTree(this._dataArray, function () { _this.scheduleUpdate(); });
                };
                DynamicGridViewer.prototype.refresh = function () {
                    var _this = this;
                    this.flush();
                    this._dataArray.init(function () {
                        _this._firstLevelCount = _this._dataArray.size();
                        _this.setCounts(_this._firstLevelCount);
                        _this.scheduleUpdate();
                    });
                };
                DynamicGridViewer.prototype.adaptor = function () {
                    return this._dataArray.adaptor();
                };
                DynamicGridViewer.prototype.getColumnValue = function (dataIndex, columnIndex, columnOrder) {
                    var _this = this;
                    var treePath = dataIndex;
                    if (treePath) {
                        var row = null;
                        if (this._waitingForUpdate) {
                            return this.translateColumn(null, columnIndex);
                        }
                        if (treePath.externalPath) {
                            return this.translateExternalPathColumn(treePath, columnIndex);
                        }
                        this._dataArray.get(treePath.path, function (value, needUpdate) {
                            row = value;
                            if (needUpdate) {
                                _this.scheduleUpdate();
                            }
                        });
                        if (row) {
                            row.path = treePath; // row.path allows to get row position in the grid
                            return this.translateColumn(row, columnIndex);
                        }
                        else {
                            this.cacheViewWindow(treePath, function (needUpdate) {
                                if (needUpdate) {
                                    _this.scheduleUpdate();
                                }
                            });
                            return this.translateColumn(row, columnIndex);
                        }
                    }
                    else {
                        _super.prototype.getColumnValue.call(this, dataIndex, columnIndex, columnOrder);
                    }
                };
                DynamicGridViewer.prototype.translateColumn = function (row, index) {
                    return row && row[index] !== undefined ? row[index] : "";
                };
                DynamicGridViewer.prototype.translateExternalPathColumn = function (treePath, index) {
                    return "";
                };
                DynamicGridViewer.prototype._attachEvents = function () {
                    _super.prototype._attachEvents.call(this);
                    // Register the Context Menu Handler
                    if (this._contextMenu)
                        this.addEventListenerToCanvas("contextmenu", this, this._onContextMenu);
                };
                /*protected*/ DynamicGridViewer.prototype._onFocus = function (e) {
                    // This sets the highlight on the 0th row if there isn't already any row previously selected.
                    // Necessary in the case of tabbing to the grid control. The first row is activated only if 
                    // the grid doesn't have anything already selected, the grid isn't empty and the "grid-focus" 
                    // element (that is the anchor of grid focus events) becomes selected. 
                    var target = e.target;
                    if (this.getSelectionCount() === 0 && !this.isEmpty() && target.classList.contains("grid-focus")) {
                        this.setSelectedRowIndex(0);
                    }
                    _super.prototype._onFocus.call(this, e);
                };
                /*protected*/ DynamicGridViewer.prototype._onKeyDown = function (e) {
                    // Handle tabs
                    switch (e.keyCode) {
                        case Common.KeyCodes.F10:
                            // Shift + F10 should show the Context Menu
                            if (e.shiftKey) {
                                this._onContextMenu(e);
                                return false;
                            }
                            break;
                        case Common.KeyCodes.MENU:
                            this._onContextMenu(e);
                            return false;
                        case Common.KeyCodes.A:
                            // Disable Ctrl+A (select all), since the grid data is virtualized (only a subset of data is cached).
                            // Unless a sub class enables MultiSelection
                            if (e.ctrlKey && !this.options().allowMultiSelect) {
                                return false;
                            }
                            break;
                    }
                    return _super.prototype._onKeyDown.call(this, e);
                };
                DynamicGridViewer.prototype._onBlur = function (e) {
                    // So that the current selection does not lose focus
                    if (!this._contextMenuActive) {
                        _super.prototype._onBlur.call(this, e);
                    }
                };
                DynamicGridViewer.prototype.initializeContextMenu = function (dataIndex) {
                    return true;
                };
                DynamicGridViewer.prototype.getRowTextString = function (dataIndex) {
                    var row = null;
                    this._dataArray.get(dataIndex, function (value, needUpdate) {
                        row = value;
                    });
                    if (!row)
                        return null;
                    // Build the data separated by tabs
                    var i;
                    var columns = this.getColumns();
                    var rowText = this.translateColumn(row, columns[0].index);
                    for (i = 1; i < columns.length; i++) {
                        rowText = rowText + "\t" + this.translateColumn(row, columns[i].index);
                    }
                    return rowText;
                };
                // Displays the Context Menu
                DynamicGridViewer.prototype._onContextMenu = function (e) {
                    if (this._contextMenu) {
                        // Try to get the closest row
                        var rowInfo;
                        var xPos = 0;
                        var yPos = 0;
                        if (e.type === "contextmenu") {
                            var mouseEvent = e;
                            // dobule keydown of menu key produces contextmenu event again with zero clientX and clientY - skip such events
                            if (mouseEvent.clientX && mouseEvent.clientY) {
                                rowInfo = this.getRowInfoFromEvent(e, ".grid-row");
                                xPos = mouseEvent.clientX;
                                yPos = mouseEvent.clientY;
                            }
                        }
                        else if (e.type === "keydown" && this.isActive()) {
                            var selectedIndex = this.getSelectedDataIndex();
                            // open context menu near the current row
                            if (e.target) {
                                var target = e.target;
                                var rect = target.getBoundingClientRect();
                                xPos = Math.round(rect.left);
                                yPos = Math.round(rect.bottom);
                            }
                            rowInfo = this.getRowInfo(selectedIndex);
                        }
                        if (!rowInfo)
                            return;
                        if (this.initializeContextMenu(rowInfo.dataIndex)) {
                            // Set focus on the clicked row. This is required because in some cases with quick keyboard navigation,
                            // the highlight of the selected row may offshoot the clicked one.
                            this._clearSelection();
                            this._addSelection(rowInfo.rowIndex);
                            this._contextMenuActive = true;
                            this._contextMenu.show(xPos, yPos);
                        }
                    }
                };
                DynamicGridViewer.prototype._onDismissContextMenu = function () {
                    this._contextMenuActive = false;
                    this._onBlur(null);
                };
                DynamicGridViewer.prototype.cacheViewWindow = function (treePath, done) {
                    this._expandedPaths.cacheViewWindow(treePath, done);
                };
                // This method gets the value specified by treePath.
                // If it's a cache miss, it will query C# and cache the range of values nearby and return the required value. Subsequent reads will hit.
                // If it's a cache hit it will just return the value.
                // Named getValue since the caller need not know that the caching is taking place.
                DynamicGridViewer.prototype.getValue = function (treePath, done) {
                    this._expandedPaths.getValueAndCache(treePath, done);
                };
                /*protected*/ DynamicGridViewer.prototype._updateViewport = function (includeNonDirtyRows) {
                    if (this.rootElement.style.display === "none") {
                        // To improve performace we don't update an invisible controls. When becomes visible ut will be updated automatically.
                        return;
                    }
                    var visibleIndices = this.getVisibleRowIndices();
                    var firstIndex = visibleIndices.first;
                    var lastIndex = visibleIndices.last;
                    var visible = [];
                    firstIndex = Math.max(0, firstIndex - this.options().extendViewportBy);
                    lastIndex = Math.min(this.getExpandedCount() - 1, lastIndex + this.options().extendViewportBy);
                    for (var i = firstIndex; i <= lastIndex; i++) {
                        var path = this.findPathByRow(i);
                        if (i >= this.getExpandedCount() - 1 && this.getExpandedCount() < _super.prototype.getExpandedCount.call(this)) {
                            path.externalPath = true; // "external" path that is out of grid limits
                        }
                        visible.push(new Common.Controls.Grid.RowIndexInfo(i, path));
                    }
                    this._drawRows(visible, includeNonDirtyRows);
                };
                DynamicGridViewer.prototype.findPathByRow = function (row) {
                    return this._expandedPaths.findPathByRow(row);
                };
                DynamicGridViewer.prototype.findRowIndexByTreePath = function (path) {
                    return this._expandedPaths.findRowIndexByTreePath(path);
                };
                DynamicGridViewer.prototype._getDataIndex = function (visibleIndex) {
                    return this.findPathByRow(visibleIndex);
                };
                DynamicGridViewer.prototype._getExpandState = function (dataIndex) {
                    var path = dataIndex;
                    if (this._waitingForUpdate)
                        return 0;
                    return this._expandedPaths.expansionStatus(path);
                };
                DynamicGridViewer.prototype.indentLevel = function (indent) {
                    var path = indent;
                    return path.length();
                };
                DynamicGridViewer.prototype.expandNode = function (treePath) {
                    var _this = this;
                    this._dataArray.get(treePath.path, function (row, needUpdate) {
                        _this._expandedPaths.expand(treePath, row.SubItemsCount);
                        _this.updateCounts(row.SubItemsCount);
                        _this.markRowDirty(treePath.path);
                        if (needUpdate) {
                            _this.scheduleUpdate();
                        }
                    });
                };
                DynamicGridViewer.prototype.collapseNode = function (path) {
                    this.updateCounts(-this._expandedPaths.collapse(path));
                    this.markRowDirty(path.path);
                    this.scheduleUpdate();
                };
                DynamicGridViewer.prototype.scheduleUpdate = function (callback) {
                    var _this = this;
                    if (this._updateInterval) {
                        window.clearTimeout(this._updateInterval);
                    }
                    this._waitingForUpdate = true;
                    this._updateInterval = window.setTimeout(function () {
                        _this._waitingForUpdate = false;
                        _this._updateInterval = 0;
                        _this.layout();
                        if (callback)
                            callback();
                    }, 100);
                };
                DynamicGridViewer.prototype._updateRanges = function () {
                    this.setVisibleRange([[0, this.getExpandedCount()]]);
                };
                DynamicGridViewer.prototype.getFirstLevelCount = function () {
                    return this._firstLevelCount;
                };
                return DynamicGridViewer;
            }(Common.Controls.Grid.GridControl));
            DynamicGrid.DynamicGridViewer = DynamicGridViewer;
            var DynamicGridViewerOptions = (function (_super) {
                __extends(DynamicGridViewerOptions, _super);
                function DynamicGridViewerOptions(contextMenuOptions, childDataCallback, columns, sortOrders, editCellCallback, allowMultipleSelection) {
                    _super.call(this, childDataCallback, columns, sortOrders, editCellCallback, allowMultipleSelection);
                    this._contextMenuOptions = contextMenuOptions;
                }
                return DynamicGridViewerOptions;
            }(Common.Controls.Grid.GridOptions));
            DynamicGrid.DynamicGridViewerOptions = DynamicGridViewerOptions;
        })(DynamicGrid = Controls.DynamicGrid || (Controls.DynamicGrid = {}));
    })(Controls = Common.Controls || (Common.Controls = {}));
})(Common || (Common = {}));

// SIG // Begin signature block
// SIG // MIIoQQYJKoZIhvcNAQcCoIIoMjCCKC4CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // FZByWRUO4RZtZq4sAG4CfmGqHWMdlToWghaq1Jr4ZIGg
// SIG // gg12MIIF9DCCA9ygAwIBAgITMwAABARsdAb/VysncgAA
// SIG // AAAEBDANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTI0MDkxMjIwMTExNFoX
// SIG // DTI1MDkxMTIwMTExNFowdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // tCg32mOdDA6rBBnZSMwxwXegqiDEUFlvQH9Sxww07hY3
// SIG // w7L52tJxLg0mCZjcszQddI6W4NJYb5E9QM319kyyE0l8
// SIG // EvA/pgcxgljDP8E6XIlgVf6W40ms286Cr0azaA1f7vaJ
// SIG // jjNhGsMqOSSSXTZDNnfKs5ENG0bkXeB2q5hrp0qLsm/T
// SIG // WO3oFjeROZVHN2tgETswHR3WKTm6QjnXgGNj+V6rSZJO
// SIG // /WkTqc8NesAo3Up/KjMwgc0e67x9llZLxRyyMWUBE9co
// SIG // T2+pUZqYAUDZ84nR1djnMY3PMDYiA84Gw5JpceeED38O
// SIG // 0cEIvKdX8uG8oQa047+evMfDRr94MG9EWwIDAQABo4IB
// SIG // czCCAW8wHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFPIboTWxEw1PmVpZS+AzTDwo
// SIG // oxFOMEUGA1UdEQQ+MDykOjA4MR4wHAYDVQQLExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xFjAUBgNVBAUTDTIzMDAx
// SIG // Mis1MDI5MjMwHwYDVR0jBBgwFoAUSG5k5VAF04KqFzc3
// SIG // IrVtqMp1ApUwVAYDVR0fBE0wSzBJoEegRYZDaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9jcmwvTWlj
// SIG // Q29kU2lnUENBMjAxMV8yMDExLTA3LTA4LmNybDBhBggr
// SIG // BgEFBQcBAQRVMFMwUQYIKwYBBQUHMAKGRWh0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWlj
// SIG // Q29kU2lnUENBMjAxMV8yMDExLTA3LTA4LmNydDAMBgNV
// SIG // HRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4ICAQCI5g/S
// SIG // KUFb3wdUHob6Qhnu0Hk0JCkO4925gzI8EqhS+K4umnvS
// SIG // BU3acsJ+bJprUiMimA59/5x7WhJ9F9TQYy+aD9AYwMtb
// SIG // KsQ/rst+QflfML+Rq8YTAyT/JdkIy7R/1IJUkyIS6srf
// SIG // G1AKlX8n6YeAjjEb8MI07wobQp1F1wArgl2B1mpTqHND
// SIG // lNqBjfpjySCScWjUHNbIwbDGxiFr93JoEh5AhJqzL+8m
// SIG // onaXj7elfsjzIpPnl8NyH2eXjTojYC9a2c4EiX0571Ko
// SIG // mhENF3RtR25A7/X7+gk6upuE8tyMy4sBkl2MUSF08U+E
// SIG // 2LOVcR8trhYxV1lUi9CdgEU2CxODspdcFwxdT1+G8YNc
// SIG // gzHyjx3BNSI4nOZcdSnStUpGhCXbaOIXfvtOSfQX/UwJ
// SIG // oruhCugvTnub0Wna6CQiturglCOMyIy/6hu5rMFvqk9A
// SIG // ltIJ0fSR5FwljW6PHHDJNbCWrZkaEgIn24M2mG1M/Ppb
// SIG // /iF8uRhbgJi5zWxo2nAdyDBqWvpWxYIoee/3yIWpquVY
// SIG // cYGhJp/1I1sq/nD4gBVrk1SKX7Do2xAMMO+cFETTNSJq
// SIG // fTSSsntTtuBLKRB5mw5qglHKuzapDiiBuD1Zt4QwxA/1
// SIG // kKcyQ5L7uBayG78kxlVNNbyrIOFH3HYmdH0Pv1dIX/Mq
// SIG // 7avQpAfIiLpOWwcbjzCCB3owggVioAMCAQICCmEOkNIA
// SIG // AAAAAAMwDQYJKoZIhvcNAQELBQAwgYgxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jvc29mdCBSb290
// SIG // IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDExMB4XDTEx
// SIG // MDcwODIwNTkwOVoXDTI2MDcwODIxMDkwOVowfjELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEoMCYGA1UEAxMfTWljcm9zb2Z0
// SIG // IENvZGUgU2lnbmluZyBQQ0EgMjAxMTCCAiIwDQYJKoZI
// SIG // hvcNAQEBBQADggIPADCCAgoCggIBAKvw+nIQHC6t2G6q
// SIG // ghBNNLrytlghn0IbKmvpWlCquAY4GgRJun/DDB7dN2vG
// SIG // EtgL8DjCmQawyDnVARQxQtOJDXlkh36UYCRsr55JnOlo
// SIG // XtLfm1OyCizDr9mpK656Ca/XllnKYBoF6WZ26DJSJhIv
// SIG // 56sIUM+zRLdd2MQuA3WraPPLbfM6XKEW9Ea64DhkrG5k
// SIG // NXimoGMPLdNAk/jj3gcN1Vx5pUkp5w2+oBN3vpQ97/vj
// SIG // K1oQH01WKKJ6cuASOrdJXtjt7UORg9l7snuGG9k+sYxd
// SIG // 6IlPhBryoS9Z5JA7La4zWMW3Pv4y07MDPbGyr5I4ftKd
// SIG // gCz1TlaRITUlwzluZH9TupwPrRkjhMv0ugOGjfdf8NBS
// SIG // v4yUh7zAIXQlXxgotswnKDglmDlKNs98sZKuHCOnqWbs
// SIG // YR9q4ShJnV+I4iVd0yFLPlLEtVc/JAPw0XpbL9Uj43Bd
// SIG // D1FGd7P4AOG8rAKCX9vAFbO9G9RVS+c5oQ/pI0m8GLhE
// SIG // fEXkwcNyeuBy5yTfv0aZxe/CHFfbg43sTUkwp6uO3+xb
// SIG // n6/83bBm4sGXgXvt1u1L50kppxMopqd9Z4DmimJ4X7Iv
// SIG // hNdXnFy/dygo8e1twyiPLI9AN0/B4YVEicQJTMXUpUMv
// SIG // dJX3bvh4IFgsE11glZo+TzOE2rCIF96eTvSWsLxGoGyY
// SIG // 0uDWiIwLAgMBAAGjggHtMIIB6TAQBgkrBgEEAYI3FQEE
// SIG // AwIBADAdBgNVHQ4EFgQUSG5k5VAF04KqFzc3IrVtqMp1
// SIG // ApUwGQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYD
// SIG // VR0PBAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0j
// SIG // BBgwFoAUci06AjGQQ7kUBU7h6qfHMdEjiTQwWgYDVR0f
// SIG // BFMwUTBPoE2gS4ZJaHR0cDovL2NybC5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0
// SIG // MjAxMV8yMDExXzAzXzIyLmNybDBeBggrBgEFBQcBAQRS
// SIG // MFAwTgYIKwYBBQUHMAKGQmh0dHA6Ly93d3cubWljcm9z
// SIG // b2Z0LmNvbS9wa2kvY2VydHMvTWljUm9vQ2VyQXV0MjAx
// SIG // MV8yMDExXzAzXzIyLmNydDCBnwYDVR0gBIGXMIGUMIGR
// SIG // BgkrBgEEAYI3LgMwgYMwPwYIKwYBBQUHAgEWM2h0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvZG9jcy9w
// SIG // cmltYXJ5Y3BzLmh0bTBABggrBgEFBQcCAjA0HjIgHQBM
// SIG // AGUAZwBhAGwAXwBwAG8AbABpAGMAeQBfAHMAdABhAHQA
// SIG // ZQBtAGUAbgB0AC4gHTANBgkqhkiG9w0BAQsFAAOCAgEA
// SIG // Z/KGpZjgVHkaLtPYdGcimwuWEeFjkplCln3SeQyQwWVf
// SIG // Liw++MNy0W2D/r4/6ArKO79HqaPzadtjvyI1pZddZYSQ
// SIG // fYtGUFXYDJJ80hpLHPM8QotS0LD9a+M+By4pm+Y9G6XU
// SIG // tR13lDni6WTJRD14eiPzE32mkHSDjfTLJgJGKsKKELuk
// SIG // qQUMm+1o+mgulaAqPyprWEljHwlpblqYluSD9MCP80Yr
// SIG // 3vw70L01724lruWvJ+3Q3fMOr5kol5hNDj0L8giJ1h/D
// SIG // Mhji8MUtzluetEk5CsYKwsatruWy2dsViFFFWDgycSca
// SIG // f7H0J/jeLDogaZiyWYlobm+nt3TDQAUGpgEqKD6CPxNN
// SIG // ZgvAs0314Y9/HG8VfUWnduVAKmWjw11SYobDHWM2l4bf
// SIG // 2vP48hahmifhzaWX0O5dY0HjWwechz4GdwbRBrF1HxS+
// SIG // YWG18NzGGwS+30HHDiju3mUv7Jf2oVyW2ADWoUa9WfOX
// SIG // pQlLSBCZgB/QACnFsZulP0V3HjXG0qKin3p6IvpIlR+r
// SIG // +0cjgPWe+L9rt0uX4ut1eBrs6jeZeRhL/9azI2h15q/6
// SIG // /IvrC4DqaTuv/DDtBEyO3991bWORPdGdVk5Pv4BXIqF4
// SIG // ETIheu9BCrE/+6jMpF3BoYibV3FWTkhFwELJm3ZbCoBI
// SIG // a/15n8G9bW1qyVJzEw16UM0xghojMIIaHwIBATCBlTB+
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQDEx9NaWNy
// SIG // b3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDExAhMzAAAE
// SIG // BGx0Bv9XKydyAAAAAAQEMA0GCWCGSAFlAwQCAQUAoIGu
// SIG // MBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisG
// SIG // AQQBgjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3
// SIG // DQEJBDEiBCAq/0HUnHTf6EvlS82zQzVDtw6JVQD22wKn
// SIG // OFcV5jNZIzBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBp
// SIG // AGMAcgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAF8a7B4x
// SIG // /16Q2I8ttbS/T4HIeJ+N78MtIqDSU+lyDlz4NYgUp1WB
// SIG // jn/mUHCps2AhZKx9tKTP5aqTNpen3aX0iD2o/rKYCDGK
// SIG // d5NpZKOAUIAFT2FKHeGUg0d70Z0n7dJP0F85qyYF71Ck
// SIG // yVAhEvREYe+c6NpZnyttl7iI6a3inKAB7DdNxiwE+/ty
// SIG // SSek4fJWtrC63G3BiJ+KtpB+dEbJnwLe4jpjFcsh+trQ
// SIG // pri+5n1GjstxaWjHeLwxhFiMGMmLesJLxyC8UzU9GdIx
// SIG // DS9KpU4jTOY21RsqL6m7dSqA0E7Fk+ue9azdvUWxdKvu
// SIG // sO+Vku/vcMZD4418n5ejyLDv/6ihghetMIIXqQYKKwYB
// SIG // BAGCNwMDATGCF5kwgheVBgkqhkiG9w0BBwKggheGMIIX
// SIG // ggIBAzEPMA0GCWCGSAFlAwQCAQUAMIIBWgYLKoZIhvcN
// SIG // AQkQAQSgggFJBIIBRTCCAUECAQEGCisGAQQBhFkKAwEw
// SIG // MTANBglghkgBZQMEAgEFAAQg7sSGca/8fhuxHRZTh1GG
// SIG // vI0u1IbwGqtEignj1+ozQM8CBmguYsmpehgTMjAyNTA1
// SIG // MjgwMDE3MDEuNjg3WjAEgAIB9KCB2aSB1jCB0zELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0
// SIG // IElyZWxhbmQgT3BlcmF0aW9ucyBMaW1pdGVkMScwJQYD
// SIG // VQQLEx5uU2hpZWxkIFRTUyBFU046NkYxQS0wNUUwLUQ5
// SIG // NDcxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFNlcnZpY2WgghH7MIIHKDCCBRCgAwIBAgITMwAAAfwY
// SIG // oK/MaVqHOgABAAAB/DANBgkqhkiG9w0BAQsFADB8MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0yNDA3MjUx
// SIG // ODMxMTRaFw0yNTEwMjIxODMxMTRaMIHTMQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJl
// SIG // bGFuZCBPcGVyYXRpb25zIExpbWl0ZWQxJzAlBgNVBAsT
// SIG // Hm5TaGllbGQgVFNTIEVTTjo2RjFBLTA1RTAtRDk0NzEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoC
// SIG // ggIBAKdQwCi8aW0HD1WDx5SR8lu1uZQWYyVlg4zH5eVs
// SIG // obgMpT/yw5toW+MplJkspldBBUUHJjPAcqcI4Vj/Be8e
// SIG // IjvPHfvRmfTEJjYd40g6IYV14H/KzjRAMnwj1ZiczO8r
// SIG // bLq2fcaHG7hC+/j+xJCMKDrjBZUxdhv87qsdRPsADbJa
// SIG // T6j6W/DwuegUMYCQiNSzheZZNwHjye/Di92sPzXZZL3V
// SIG // Zd1YAUj1+DWsLd1IFKH7j5/3Kfb8CigcLiFkBBWfN+xl
// SIG // 1yE7IXdjH7OqGH8VxLZo9kgRhIcVbO8REblhm9HCumn8
// SIG // u52ipG2SNr9VKrMbmbfeK5/3stsp77p5cdEev2+pzZAt
// SIG // azkwH1pabAI/0Jc8jOrmE0sWGQtmFsy220ZdJUbUs/uE
// SIG // 3aVFP6AGUgfmPrNdkapoM4u0VcTXCNpZv/7AhJugOt5w
// SIG // iQoGLTPiy3vaU7IZf1n/Djrj0EYgPrLU7IPPQThvbW5W
// SIG // s9pH3jpGH+YXR/KYQG7jrg0H6+rOWGulvr2c+hNGbHp8
// SIG // 4tDrTH+UQmtoQA2FYFMQ/oKwvBKbX1nlQFoGAmkBYXjT
// SIG // f2RjUDJJO/Fet8qDwX3yRALvgecZUz2KIo1HaPTV6LyZ
// SIG // qBl4+kfE4LKPkD2gBhysQmx2tUC/QEjBdzrNY66IAhxo
// SIG // spH6dXShp5gOcCU+jcewXnZUg7AJAgMBAAGjggFJMIIB
// SIG // RTAdBgNVHQ4EFgQUmPGlK7FGs4cQch+/XYYkAi/+0HYw
// SIG // HwYDVR0jBBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIw
// SIG // XwYDVR0fBFgwVjBUoFKgUIZOaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jcmwvTWljcm9zb2Z0JTIw
// SIG // VGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwG
// SIG // CCsGAQUFBwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9jZXJ0cy9N
// SIG // aWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAx
// SIG // MCgxKS5jcnQwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8E
// SIG // DDAKBggrBgEFBQcDCDAOBgNVHQ8BAf8EBAMCB4AwDQYJ
// SIG // KoZIhvcNAQELBQADggIBAE+7LP2QGdG02hbK7IiWHf/y
// SIG // 0OiJim/SWUiokcPcbPIcJOWP+84oJ/YBrcHkQoQtpSfB
// SIG // lUR4KxZAcQAo7rj6a0s/1GF+5+dtiSnLnZ1riHhNad9A
// SIG // Wa6j0zp7HA/fA2YuljUwMpp2ku4reagIDSJ63gCW01Nn
// SIG // AKLCaHlwB6+dGIEhpZiTPnDepmCwC+k0xTLRWCa6SvUz
// SIG // OUcoeXmZpulEyZxoNI7daRf9rvD0nc93Q8uwxeygyWnd
// SIG // qh8WTkbzN5PVfGJ9ySOWCz7i7KNiebN36V8glYEf4avO
// SIG // oOc43fW0UcsogvIiyJvzfeauh1lbAnsknra6n7A8mFkr
// SIG // cC/eocuwyMiy+YofGBTHdAHZr00aMpZgA7isBNk0Ak7z
// SIG // 545y5O8qSVtvbde2MmuFfiZc+eLAZz1O5CHmGbL1E/mC
// SIG // oMpD9UAfqfrlHUR+nu/VWos/onsFqyCWeLV5AzJi9tZ4
// SIG // dI/ufBNXnAGA70+geMhSHqJ8QP+hpfV7OyS3IjwiAuoR
// SIG // nZYohAacmHlBdKIWRZ+zSkLvNCGdI3eddVgNm6usfWlK
// SIG // v8xcn/BIMPnbp1I9SrTaFqau1biamqXJGLJr5pmB2Vwo
// SIG // ytRLrO1dSPml46wWLqsjPUKXhWVOFNNWBteblsFAmo9L
// SIG // mZWof0RkmDHfOMvQwqjqX3ihOjyzJO4S54b3DkK58T+p
// SIG // MIIHcTCCBVmgAwIBAgITMwAAABXF52ueAptJmQAAAAAA
// SIG // FTANBgkqhkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEyMDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2Vy
// SIG // dGlmaWNhdGUgQXV0aG9yaXR5IDIwMTAwHhcNMjEwOTMw
// SIG // MTgyMjI1WhcNMzAwOTMwMTgzMjI1WjB8MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0EgMjAxMDCCAiIwDQYJKoZIhvcNAQEB
// SIG // BQADggIPADCCAgoCggIBAOThpkzntHIhC3miy9ckeb0O
// SIG // 1YLT/e6cBwfSqWxOdcjKNVf2AX9sSuDivbk+F2Az/1xP
// SIG // x2b3lVNxWuJ+Slr+uDZnhUYjDLWNE893MsAQGOhgfWpS
// SIG // g0S3po5GawcU88V29YZQ3MFEyHFcUTE3oAo4bo3t1w/Y
// SIG // JlN8OWECesSq/XJprx2rrPY2vjUmZNqYO7oaezOtgFt+
// SIG // jBAcnVL+tuhiJdxqD89d9P6OU8/W7IVWTe/dvI2k45GP
// SIG // sjksUZzpcGkNyjYtcI4xyDUoveO0hyTD4MmPfrVUj9z6
// SIG // BVWYbWg7mka97aSueik3rMvrg0XnRm7KMtXAhjBcTyzi
// SIG // YrLNueKNiOSWrAFKu75xqRdbZ2De+JKRHh09/SDPc31B
// SIG // mkZ1zcRfNN0Sidb9pSB9fvzZnkXftnIv231fgLrbqn42
// SIG // 7DZM9ituqBJR6L8FA6PRc6ZNN3SUHDSCD/AQ8rdHGO2n
// SIG // 6Jl8P0zbr17C89XYcz1DTsEzOUyOArxCaC4Q6oRRRuLR
// SIG // vWoYWmEBc8pnol7XKHYC4jMYctenIPDC+hIK12NvDMk2
// SIG // ZItboKaDIV1fMHSRlJTYuVD5C4lh8zYGNRiER9vcG9H9
// SIG // stQcxWv2XFJRXRLbJbqvUAV6bMURHXLvjflSxIUXk8A8
// SIG // FdsaN8cIFRg/eKtFtvUeh17aj54WcmnGrnu3tz5q4i6t
// SIG // AgMBAAGjggHdMIIB2TASBgkrBgEEAYI3FQEEBQIDAQAB
// SIG // MCMGCSsGAQQBgjcVAgQWBBQqp1L+ZMSavoKRPEY1Kc8Q
// SIG // /y8E7jAdBgNVHQ4EFgQUn6cVXQBeYl2D9OXSZacbUzUZ
// SIG // 6XIwXAYDVR0gBFUwUzBRBgwrBgEEAYI3TIN9AQEwQTA/
// SIG // BggrBgEFBQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraW9wcy9Eb2NzL1JlcG9zaXRvcnkuaHRtMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMBkGCSsGAQQBgjcUAgQM
// SIG // HgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMB
// SIG // Af8EBTADAQH/MB8GA1UdIwQYMBaAFNX2VsuP6KJcYmjR
// SIG // PZSQW9fOmhjEMFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6
// SIG // Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1
// SIG // Y3RzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNybDBa
// SIG // BggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // Um9vQ2VyQXV0XzIwMTAtMDYtMjMuY3J0MA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQCdVX38Kq3hLB9nATEkW+Geckv8qW/q
// SIG // XBS2Pk5HZHixBpOXPTEztTnXwnE2P9pkbHzQdTltuw8x
// SIG // 5MKP+2zRoZQYIu7pZmc6U03dmLq2HnjYNi6cqYJWAAOw
// SIG // Bb6J6Gngugnue99qb74py27YP0h1AdkY3m2CDPVtI1Tk
// SIG // eFN1JFe53Z/zjj3G82jfZfakVqr3lbYoVSfQJL1AoL8Z
// SIG // thISEV09J+BAljis9/kpicO8F7BUhUKz/AyeixmJ5/AL
// SIG // aoHCgRlCGVJ1ijbCHcNhcy4sa3tuPywJeBTpkbKpW99J
// SIG // o3QMvOyRgNI95ko+ZjtPu4b6MhrZlvSP9pEB9s7GdP32
// SIG // THJvEKt1MMU0sHrYUP4KWN1APMdUbZ1jdEgssU5HLcEU
// SIG // BHG/ZPkkvnNtyo4JvbMBV0lUZNlz138eW0QBjloZkWsN
// SIG // n6Qo3GcZKCS6OEuabvshVGtqRRFHqfG3rsjoiV5PndLQ
// SIG // THa1V1QJsWkBRH58oWFsc/4Ku+xBZj1p/cvBQUl+fpO+
// SIG // y/g75LcVv7TOPqUxUYS8vwLBgqJ7Fx0ViY1w/ue10Cga
// SIG // iQuPNtq6TPmb/wrpNPgkNWcr4A245oyZ1uEi6vAnQj0l
// SIG // lOZ0dFtq0Z4+7X6gMTN9vMvpe784cETRkPHIqzqKOghi
// SIG // f9lwY1NNje6CbaUFEMFxBmoQtB1VM1izoXBm8qGCA1Yw
// SIG // ggI+AgEBMIIBAaGB2aSB1jCB0zELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQg
// SIG // T3BlcmF0aW9ucyBMaW1pdGVkMScwJQYDVQQLEx5uU2hp
// SIG // ZWxkIFRTUyBFU046NkYxQS0wNUUwLUQ5NDcxJTAjBgNV
// SIG // BAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2Wi
// SIG // IwoBATAHBgUrDgMCGgMVAE5BKSVzmqiNsH6gbMODS1cK
// SIG // mKqqoIGDMIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEm
// SIG // MCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENB
// SIG // IDIwMTAwDQYJKoZIhvcNAQELBQACBQDr4MnVMCIYDzIw
// SIG // MjUwNTI3MjMzMTMzWhgPMjAyNTA1MjgyMzMxMzNaMHQw
// SIG // OgYKKwYBBAGEWQoEATEsMCowCgIFAOvgydUCAQAwBwIB
// SIG // AAICJOQwBwIBAAICErwwCgIFAOviG1UCAQAwNgYKKwYB
// SIG // BAGEWQoEAjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgCAQAC
// SIG // AwehIKEKMAgCAQACAwGGoDANBgkqhkiG9w0BAQsFAAOC
// SIG // AQEAfoBmwNXqkt7ch7JrpARwWkD30eAy7dCiU4hT+09H
// SIG // IH5tavcTLlq+hMD3hQLDCY8h5LrjxKl8H42m/hiP/o6Q
// SIG // ZHEtOUVFzkltQXgxnGoNY+ywz9lE6T0hQGsD0Aen8QI3
// SIG // ikTMsqnxKkp7R1XAhsJpuNoIjDM2EV34xzHdomGQAt1y
// SIG // spyJ4yy8Bb06dH/XGe3J4MME8Iq+1ytdfbCBXS91X4zv
// SIG // xymZq+dJNe5eb1iwyDtKy/qUoDpT5QTCTJoGX7LH3A+y
// SIG // Tgv+HH4/n+cEPTlu4rLsX5cgQTZ7s+O8m97E2oZkZ8mD
// SIG // FII/uWBQqNrUdWZ1jviQ4RMnApCcC4C31KxjjTGCBA0w
// SIG // ggQJAgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
// SIG // BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
// SIG // MDEwAhMzAAAB/Bigr8xpWoc6AAEAAAH8MA0GCWCGSAFl
// SIG // AwQCAQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcN
// SIG // AQkQAQQwLwYJKoZIhvcNAQkEMSIEIG5H6YR5RLDnlRTn
// SIG // ZoIbbsA9BNFarlVwAmzBLr+vUVg5MIH6BgsqhkiG9w0B
// SIG // CRACLzGB6jCB5zCB5DCBvQQglUKvkLvv4fwTlT+MMHlM
// SIG // Gx7glIYfk+4at3eTAmjRLWIwgZgwgYCkfjB8MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAfwYoK/MaVqH
// SIG // OgABAAAB/DAiBCD53ySLZ6dVtjgouEXbRMz2vTnW56X0
// SIG // Cb4umdt1eg+sIjANBgkqhkiG9w0BAQsFAASCAgCj5dge
// SIG // 181B+vfHcSrlfC0pkPNP7V+YmD7LRuapZFt+FqiJAbW5
// SIG // mV86f5yPKa3Q+quk0q+Mz5rYYnMnnefJ8HcEkJh8sR4F
// SIG // RIm2rtz0NIFD3OCjV3d/iPPR9aolcLJAiBa/E6IYppNp
// SIG // XqQqGca50oyvRMySiEoE7k/9M+l3ckTfTipwk7hfShkN
// SIG // /QZhTTzuirnaDnVXYkddPyBXm8ws4fV/oCQo4WhdLffB
// SIG // Oe3YxgAC3pMQBEzZpVChuzRWb8wNkBJNWJI4d8l8dqgg
// SIG // j2/trEqg7K/XuWbd/+izwWzwPmvz6y6KePY9vuYkP5v9
// SIG // Qdx6D/WkPV2KnnacD62wLiiReM2npW7boS2nL+dIWR1X
// SIG // DTDdHFLufECr0nnJL8wOFz3F5KVGigSMH4xpTVY084Fj
// SIG // GzLkALZW6CYL+x/ybgw1J586puuDc4b95hLjUFsxmo5v
// SIG // vlluIU1ROjiZF3FcL16ssi/AzKcHK2U4m6r0WGJDELl+
// SIG // vPVPzYQNfE3EI7HznpNm4juOlh9DRpqTc2AyvxSqnGhp
// SIG // uspEmWSaSrb1chqRjwH0c082yvCzqsg71kPCMMycSPcu
// SIG // NaDrUIDGOschTGxvON5mf7KbYc+qWDnr3lvqRQwTxufZ
// SIG // hAYGAze7NV2tydohLQ02NLN9ymzcvsCFt4g3R1kJEK1f
// SIG // 2iCLGCjerWqMMy3gOA==
// SIG // End signature block
