#!/usr/bin/env node
import { createRequire as __blaudeCreateRequire } from "module";
const require = __blaudeCreateRequire(import.meta.url);
import {
  require_base64_js
} from "./chunk-YNBJ2UYC.mjs";
import {
  __commonJS
} from "./chunk-O5PZ3G6I.mjs";

// node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/conventions.js
var require_conventions = __commonJS({
  "node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
    "use strict";
    function find(list, predicate, ac) {
      if (ac === void 0) {
        ac = Array.prototype;
      }
      if (list && typeof ac.find === "function") {
        return ac.find.call(list, predicate);
      }
      for (var i = 0; i < list.length; i++) {
        if (Object.prototype.hasOwnProperty.call(list, i)) {
          var item = list[i];
          if (predicate.call(void 0, item, i, list)) {
            return item;
          }
        }
      }
    }
    function freeze(object, oc) {
      if (oc === void 0) {
        oc = Object;
      }
      return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
    }
    function assign(target, source) {
      if (target === null || typeof target !== "object") {
        throw new TypeError("target is not an object");
      }
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
      return target;
    }
    var MIME_TYPE = freeze({
      /**
       * `text/html`, the only mime type that triggers treating an XML document as HTML.
       *
       * @see DOMParser.SupportedType.isHTML
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
       */
      HTML: "text/html",
      /**
       * Helper method to check a mime type if it indicates an HTML document
       *
       * @param {string} [value]
       * @returns {boolean}
       *
       * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/HTML Wikipedia
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
       * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
      isHTML: function(value) {
        return value === MIME_TYPE.HTML;
      },
      /**
       * `application/xml`, the standard mime type for XML documents.
       *
       * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
       * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_APPLICATION: "application/xml",
      /**
       * `text/html`, an alias for `application/xml`.
       *
       * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
       * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
       * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
       */
      XML_TEXT: "text/xml",
      /**
       * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
       * but is parsed as an XML document.
       *
       * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
       * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
       */
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      /**
       * `image/svg+xml`,
       *
       * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
       * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
       * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
       */
      XML_SVG_IMAGE: "image/svg+xml"
    });
    var NAMESPACE = freeze({
      /**
       * The XHTML namespace.
       *
       * @see http://www.w3.org/1999/xhtml
       */
      HTML: "http://www.w3.org/1999/xhtml",
      /**
       * Checks if `uri` equals `NAMESPACE.HTML`.
       *
       * @param {string} [uri]
       *
       * @see NAMESPACE.HTML
       */
      isHTML: function(uri) {
        return uri === NAMESPACE.HTML;
      },
      /**
       * The SVG namespace.
       *
       * @see http://www.w3.org/2000/svg
       */
      SVG: "http://www.w3.org/2000/svg",
      /**
       * The `xml:` namespace.
       *
       * @see http://www.w3.org/XML/1998/namespace
       */
      XML: "http://www.w3.org/XML/1998/namespace",
      /**
       * The `xmlns:` namespace
       *
       * @see https://www.w3.org/2000/xmlns/
       */
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    exports.assign = assign;
    exports.find = find;
    exports.freeze = freeze;
    exports.MIME_TYPE = MIME_TYPE;
    exports.NAMESPACE = NAMESPACE;
  }
});

// node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/dom.js
var require_dom = __commonJS({
  "node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
    var conventions = require_conventions();
    var find = conventions.find;
    var NAMESPACE = conventions.NAMESPACE;
    function notEmptyString(input) {
      return input !== "";
    }
    function splitOnASCIIWhitespace(input) {
      return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
    }
    function orderedSetReducer(current, element) {
      if (!current.hasOwnProperty(element)) {
        current[element] = true;
      }
      return current;
    }
    function toOrderedSet(input) {
      if (!input) return [];
      var list = splitOnASCIIWhitespace(input);
      return Object.keys(list.reduce(orderedSetReducer, {}));
    }
    function arrayIncludes(list) {
      return function(element) {
        return list && list.indexOf(element) !== -1;
      };
    }
    function copy(src, dest) {
      for (var p in src) {
        if (Object.prototype.hasOwnProperty.call(src, p)) {
          dest[p] = src[p];
        }
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function() {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        copy(pt, t2);
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknown Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message) this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      /**
       * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
       * @standard level1
       */
      length: 0,
      /**
       * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
       * @standard level1
       * @param index  unsigned long
       *   Index into the collection.
       * @return Node
       * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
       */
      item: function(index) {
        return index >= 0 && index < this.length ? this[index] : null;
      },
      toString: function(isHTML, nodeFilter) {
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter);
        }
        return buf.join("");
      },
      /**
       * @private
       * @param {function (Node):boolean} predicate
       * @returns {Node[]}
       */
      filter: function(predicate) {
        return Array.prototype.filter.call(this, predicate);
      },
      /**
       * @private
       * @param {Node} item
       * @returns {number}
       */
      indexOf: function(item) {
        return Array.prototype.indexOf.call(this, item);
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc !== inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        if (!list.$$length || ls.length < list.$$length) {
          for (var i = ls.length; i in list; i++) {
            if (Object.prototype.hasOwnProperty.call(list, i)) {
              delete list[i];
            }
          }
        }
        copy(ls, list);
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i] || null;
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = list.length;
      while (i--) {
        if (list[i] === node) {
          return i;
        }
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length++] = newAttr;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i < lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function(key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      /* returns Node */
      removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
      //for level2
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation() {
    }
    DOMImplementation.prototype = {
      /**
       * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
       * The different implementations fairly diverged in what kind of features were reported.
       * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
       *
       * @deprecated It is deprecated and modern browsers return true in all cases.
       *
       * @param {string} feature
       * @param {string} [version]
       * @returns {boolean} always true
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
       * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
       */
      hasFeature: function(feature, version) {
        return true;
      },
      /**
       * Creates an XML Document object of the specified type with its document element.
       *
       * __It behaves slightly different from the description in the living standard__:
       * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
       * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string|null} namespaceURI
       * @param {string} qualifiedName
       * @param {DocumentType=null} doctype
       * @returns {Document}
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype || null;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      /**
       * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
       *
       * __This behavior is slightly different from the in the specs__:
       * - this implementation is not validating names or qualified names
       *   (when parsing XML strings, the SAX parser takes care of that)
       *
       * @param {string} qualifiedName
       * @param {string} [publicId]
       * @param {string} [systemId]
       * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
       * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
       * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
       * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
       *
       * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
       * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
       * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
       */
      createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId || "";
        node.systemId = systemId || "";
        return node;
      }
    };
    function Node() {
    }
    Node.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      // Modified in DOM Level 2:
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      // Modified in DOM Level 2:
      normalize: function() {
        var child = this.firstChild;
        while (child) {
          var next = child.nextSibling;
          if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
            this.removeChild(next);
            child.appendData(next.data);
          } else {
            child.normalize();
            child = next;
          }
        }
      },
      // Introduced in DOM Level 2:
      isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
      },
      // Introduced in DOM Level 2:
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      /**
       * Look up the prefix associated to the given namespace URI, starting from this node.
       * **The default namespace declarations are ignored by this method.**
       * See Namespace Prefix Lookup for details on the algorithm used by this method.
       *
       * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
       *
       * @param {string | null} namespaceURI
       * @returns {string | null}
       * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
       * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
       * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
       * @see https://github.com/xmldom/xmldom/issues/322
       */
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (Object.prototype.hasOwnProperty.call(map, prefix)) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c) {
      return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    function _visitNode(node, callback) {
      if (callback(node)) {
        return true;
      }
      if (node = node.firstChild) {
        do {
          if (_visitNode(node, callback)) {
            return true;
          }
        } while (node = node.nextSibling);
      }
    }
    function Document() {
      this.ownerDocument = this;
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns === NAMESPACE.XMLNS) {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
          delete cs[cs.length];
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      child.parentNode = null;
      child.previousSibling = null;
      child.nextSibling = null;
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function hasValidParentNodeType(node) {
      return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
    }
    function hasInsertableNodeType(node) {
      return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
    }
    function isDocTypeNode(node) {
      return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
    }
    function isElementNode(node) {
      return node && node.nodeType === Node.ELEMENT_NODE;
    }
    function isTextNode(node) {
      return node && node.nodeType === Node.TEXT_NODE;
    }
    function isElementInsertionPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function isElementReplacementPossible(doc, child) {
      var parentChildNodes = doc.childNodes || [];
      function hasElementChildThatIsNotChild(node) {
        return isElementNode(node) && node !== child;
      }
      if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
        return false;
      }
      var docTypeNode = find(parentChildNodes, isDocTypeNode);
      return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
    }
    function assertPreInsertionValidity1to5(parent, node, child) {
      if (!hasValidParentNodeType(parent)) {
        throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
      }
      if (child && child.parentNode !== parent) {
        throw new DOMException(NOT_FOUND_ERR, "child not in parent");
      }
      if (
        // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
        !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
        // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
        // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
        // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
        isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
      ) {
        throw new DOMException(
          HIERARCHY_REQUEST_ERR,
          "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
        );
      }
    }
    function assertPreInsertionValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementInsertionPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        if (find(parentChildNodes, isDocTypeNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
        if (!child && parentElementChild) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
        }
      }
    }
    function assertPreReplacementValidityInDocument(parent, node, child) {
      var parentChildNodes = parent.childNodes || [];
      var nodeChildNodes = node.childNodes || [];
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var nodeChildElements = nodeChildNodes.filter(isElementNode);
        if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
        }
        if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
        }
      }
      if (isElementNode(node)) {
        if (!isElementReplacementPossible(parent, child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
        }
      }
      if (isDocTypeNode(node)) {
        let hasDoctypeChildThatIsNotChild2 = function(node2) {
          return isDocTypeNode(node2) && node2 !== child;
        };
        var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
        if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
        }
        var parentElementChild = find(parentChildNodes, isElementNode);
        if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
        }
      }
    }
    function _insertBefore(parent, node, child, _inDocumentAssertion) {
      assertPreInsertionValidity1to5(parent, node, child);
      if (parent.nodeType === Node.DOCUMENT_NODE) {
        (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
      }
      var cp = node.parentNode;
      if (cp) {
        cp.removeChild(node);
      }
      if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = node.firstChild;
        if (newFirst == null) {
          return node;
        }
        var newLast = node.lastChild;
      } else {
        newFirst = newLast = node;
      }
      var pre = child ? child.previousSibling : parent.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = child;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parent.firstChild = newFirst;
      }
      if (child == null) {
        parent.lastChild = newLast;
      } else {
        child.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parent;
        var targetDoc = parent.ownerDocument || parent;
        _updateOwnerDocument(newFirst, targetDoc);
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parent.ownerDocument || parent, parent);
      if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
        node.firstChild = node.lastChild = null;
      }
      return node;
    }
    function _updateOwnerDocument(node, newOwnerDocument) {
      if (node.ownerDocument === newOwnerDocument) {
        return;
      }
      node.ownerDocument = newOwnerDocument;
      if (node.nodeType === ELEMENT_NODE && node.attributes) {
        for (var i = 0; i < node.attributes.length; i++) {
          var attr = node.attributes.item(i);
          if (attr) {
            attr.ownerDocument = newOwnerDocument;
          }
        }
      }
      var child = node.firstChild;
      while (child) {
        _updateOwnerDocument(child, newOwnerDocument);
        child = child.nextSibling;
      }
    }
    function _appendSingleChild(parentNode, newChild) {
      if (newChild.parentNode) {
        newChild.parentNode.removeChild(newChild);
      }
      newChild.parentNode = parentNode;
      newChild.previousSibling = parentNode.lastChild;
      newChild.nextSibling = null;
      if (newChild.previousSibling) {
        newChild.previousSibling.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      var targetDoc = parentNode.ownerDocument || parentNode;
      _updateOwnerDocument(newChild, targetDoc);
      return newChild;
    }
    Document.prototype = {
      //implementation : null,
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      /**
       * The DocumentType node of the document.
       *
       * @readonly
       * @type DocumentType
       */
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        _insertBefore(this, newChild, refChild);
        _updateOwnerDocument(newChild, this);
        if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return newChild;
      },
      removeChild: function(oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      replaceChild: function(newChild, oldChild) {
        _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
        _updateOwnerDocument(newChild, this);
        if (oldChild) {
          this.removeChild(oldChild);
        }
        if (isElementNode(newChild)) {
          this.documentElement = newChild;
        }
      },
      // Introduced in DOM Level 2:
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      // Introduced in DOM Level 2:
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      /**
       * The `getElementsByClassName` method of `Document` interface returns an array-like object
       * of all child elements which have **all** of the given class name(s).
       *
       * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
       *
       *
       * Warning: This is a live LiveNodeList.
       * Changes in the DOM will reflect in the array as the changes occur.
       * If an element selected by this array no longer qualifies for the selector,
       * it will automatically be removed. Be aware of this for iteration purposes.
       *
       * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
       * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
       */
      getElementsByClassName: function(classNames) {
        var classNamesSet = toOrderedSet(classNames);
        return new LiveNodeList(this, function(base) {
          var ls = [];
          if (classNamesSet.length > 0) {
            _visitNode(base.documentElement, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE) {
                var nodeClassNames = node.getAttribute("class");
                if (nodeClassNames) {
                  var matches = classNames === nodeClassNames;
                  if (!matches) {
                    var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                    matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                  }
                  if (matches) {
                    ls.push(node);
                  }
                }
              }
            });
          }
          return ls;
        });
      },
      //document factory method:
      createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.localName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function(data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      /**
       * Returns a new CDATASection node whose data is `data`.
       *
       * __This implementation differs from the specification:__
       * - calling this method on an HTML document does not throw `NotSupportedError`.
       *
       * @param {string} data
       * @returns {CDATASection}
       * @throws DOMException with code `INVALID_CHARACTER_ERR` if `data` contains `"]]>"`.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection
       * @see https://dom.spec.whatwg.org/#dom-document-createcdatasection
       */
      createCDATASection: function(data) {
        if (data.indexOf("]]>") !== -1) {
          throw new DOMException(INVALID_CHARACTER_ERR, 'data contains "]]>"');
        }
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.nodeName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      createEntityReference: function(name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      // Introduced in DOM Level 2:
      createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      // Introduced in DOM Level 2:
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node);
    function Element() {
      this._nsMap = {};
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      //four real opeartion method
      appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      //get real attribute name,and remove it by removeAttributeNode
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
      },
      appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node);
    function Text() {
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter) {
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
            //{namespace:uri,prefix:''}
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!uri) {
        return false;
      }
      if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix === prefix) {
          return ns.namespace !== uri;
        }
      }
      return true;
    }
    function addSerializedAttribute(buf, qualifiedName, value) {
      buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
      if (!visibleNamespaces) {
        visibleNamespaces = [];
      }
      if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
          if (typeof node == "string") {
            buf.push(node);
            return;
          }
        } else {
          return;
        }
      }
      switch (node.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var len = attrs.length;
          var child = node.firstChild;
          var nodeName = node.tagName;
          isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
          var prefixedNodeName = nodeName;
          if (!isHTML && !node.prefix && node.namespaceURI) {
            var defaultNS;
            for (var ai = 0; ai < attrs.length; ai++) {
              if (attrs.item(ai).name === "xmlns") {
                defaultNS = attrs.item(ai).value;
                break;
              }
            }
            if (!defaultNS) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                  defaultNS = namespace.namespace;
                  break;
                }
              }
            }
            if (defaultNS !== node.namespaceURI) {
              for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                var namespace = visibleNamespaces[nsi];
                if (namespace.namespace === node.namespaceURI) {
                  if (namespace.prefix) {
                    prefixedNodeName = namespace.prefix + ":" + nodeName;
                  }
                  break;
                }
              }
            }
          }
          buf.push("<", prefixedNodeName);
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (attr.prefix == "xmlns") {
              visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
            } else if (attr.nodeName == "xmlns") {
              visibleNamespaces.push({ prefix: "", namespace: attr.value });
            }
          }
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
              var prefix = attr.prefix || "";
              var uri = attr.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
          }
          if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
            var prefix = node.prefix || "";
            var uri = node.namespaceURI;
            addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
            visibleNamespaces.push({ prefix, namespace: uri });
          }
          if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
            buf.push(">");
            if (isHTML && /^script$/i.test(nodeName)) {
              while (child) {
                if (child.data) {
                  buf.push(child.data);
                } else {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                }
                child = child.nextSibling;
              }
            } else {
              while (child) {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                child = child.nextSibling;
              }
            }
            buf.push("</", prefixedNodeName, ">");
          } else {
            buf.push("/>");
          }
          return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var child = node.firstChild;
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
            child = child.nextSibling;
          }
          return;
        case ATTRIBUTE_NODE:
          return addSerializedAttribute(buf, node.name, node.value);
        case TEXT_NODE:
          return buf.push(
            node.data.replace(/[<&>]/g, _xmlEncoder)
          );
        case CDATA_SECTION_NODE:
          return buf.push("<![CDATA[", node.data.replace(/]]>/g, "]]]]><![CDATA[>"), "]]>");
        case COMMENT_NODE:
          return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
          var pubid = node.publicId;
          var sysid = node.systemId;
          buf.push("<!DOCTYPE ", node.name);
          if (pubid) {
            buf.push(" PUBLIC ", pubid);
            if (sysid && sysid != ".") {
              buf.push(" ", sysid);
            }
            buf.push(">");
          } else if (sysid && sysid != ".") {
            buf.push(" SYSTEM ", sysid, ">");
          } else {
            var sub = node.internalSubset;
            if (sub) {
              buf.push(" [", sub, "]");
            }
            buf.push(">");
          }
          return;
        case PROCESSING_INSTRUCTION_NODE:
          return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
          return buf.push("&", node.nodeName, ";");
        //case ENTITY_NODE:
        //case NOTATION_NODE:
        default:
          buf.push("??", node.nodeName);
      }
    }
    function importNode(doc, node, deep) {
      var node2;
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node2 = node.cloneNode(false);
          node2.ownerDocument = doc;
        //var attrs = node2.attributes;
        //var len = attrs.length;
        //for(var i=0;i<len;i++){
        //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
        //}
        case DOCUMENT_FRAGMENT_NODE:
          break;
        case ATTRIBUTE_NODE:
          deep = true;
          break;
      }
      if (!node2) {
        node2 = node.cloneNode(false);
      }
      node2.ownerDocument = doc;
      node2.parentNode = null;
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(importNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function cloneNode(doc, node, deep) {
      var node2 = new node.constructor();
      for (var n in node) {
        if (Object.prototype.hasOwnProperty.call(node, n)) {
          var v = node[n];
          if (typeof v != "object") {
            if (v != node2[n]) {
              node2[n] = v;
            }
          }
        }
      }
      if (node.childNodes) {
        node2.childNodes = new NodeList();
      }
      node2.ownerDocument = doc;
      switch (node2.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var attrs2 = node2.attributes = new NamedNodeMap();
          var len = attrs.length;
          attrs2._ownerElement = node2;
          for (var i = 0; i < len; i++) {
            node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
          }
          break;
          ;
        case ATTRIBUTE_NODE:
          deep = true;
      }
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(cloneNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        let getTextContent2 = function(node) {
          switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              var buf = [];
              node = node.firstChild;
              while (node) {
                if (node.nodeType !== 7 && node.nodeType !== 8) {
                  buf.push(getTextContent2(node));
                }
                node = node.nextSibling;
              }
              return buf.join("");
            default:
              return node.nodeValue;
          }
        };
        getTextContent = getTextContent2;
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            return getTextContent2(this);
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    var getTextContent;
    exports.DocumentType = DocumentType;
    exports.DOMException = DOMException;
    exports.DOMImplementation = DOMImplementation;
    exports.Element = Element;
    exports.Node = Node;
    exports.NodeList = NodeList;
    exports.XMLSerializer = XMLSerializer;
  }
});

// node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/entities.js
var require_entities = __commonJS({
  "node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
    "use strict";
    var freeze = require_conventions().freeze;
    exports.XML_ENTITIES = freeze({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    });
    exports.HTML_ENTITIES = freeze({
      Aacute: "\xC1",
      aacute: "\xE1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xC2",
      acirc: "\xE2",
      acute: "\xB4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xC6",
      aelig: "\xE6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xC0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      AMP: "&",
      amp: "&",
      And: "\u2A53",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apacir: "\u2A6F",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xC5",
      aring: "\xE5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xC3",
      atilde: "\xE3",
      Auml: "\xC4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      Barwed: "\u2306",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      Because: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxDL: "\u2557",
      boxDl: "\u2556",
      boxdL: "\u2555",
      boxdl: "\u2510",
      boxDR: "\u2554",
      boxDr: "\u2553",
      boxdR: "\u2552",
      boxdr: "\u250C",
      boxH: "\u2550",
      boxh: "\u2500",
      boxHD: "\u2566",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxhd: "\u252C",
      boxHU: "\u2569",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxUL: "\u255D",
      boxUl: "\u255C",
      boxuL: "\u255B",
      boxul: "\u2518",
      boxUR: "\u255A",
      boxUr: "\u2559",
      boxuR: "\u2558",
      boxur: "\u2514",
      boxV: "\u2551",
      boxv: "\u2502",
      boxVH: "\u256C",
      boxVh: "\u256B",
      boxvH: "\u256A",
      boxvh: "\u253C",
      boxVL: "\u2563",
      boxVl: "\u2562",
      boxvL: "\u2561",
      boxvl: "\u2524",
      boxVR: "\u2560",
      boxVr: "\u255F",
      boxvR: "\u255E",
      boxvr: "\u251C",
      bprime: "\u2035",
      Breve: "\u02D8",
      breve: "\u02D8",
      brvbar: "\xA6",
      Bscr: "\u212C",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      Cap: "\u22D2",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xC7",
      ccedil: "\xE7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xB8",
      Cedilla: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      CenterDot: "\xB7",
      centerdot: "\xB7",
      Cfr: "\u212D",
      cfr: "\u{1D520}",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      cir: "\u25CB",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xAE",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      Colon: "\u2237",
      colon: ":",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      Conint: "\u222F",
      conint: "\u222E",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      copf: "\u{1D554}",
      coprod: "\u2210",
      Coproduct: "\u2210",
      COPY: "\xA9",
      copy: "\xA9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      Cross: "\u2A2F",
      cross: "\u2717",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      Cup: "\u22D3",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      CupCap: "\u224D",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      Dagger: "\u2021",
      dagger: "\u2020",
      daleth: "\u2138",
      Darr: "\u21A1",
      dArr: "\u21D3",
      darr: "\u2193",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      DD: "\u2145",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xB0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      Diamond: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xA8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      downarrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xC9",
      eacute: "\xE9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      ecir: "\u2256",
      Ecirc: "\xCA",
      ecirc: "\xEA",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      eDot: "\u2251",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xC8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp: "\u2003",
      emsp13: "\u2004",
      emsp14: "\u2005",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      Escr: "\u2130",
      escr: "\u212F",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xD0",
      eth: "\xF0",
      Euml: "\xCB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      ExponentialE: "\u2147",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      ForAll: "\u2200",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      Fscr: "\u2131",
      fscr: "\u{1D4BB}",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      gE: "\u2267",
      ge: "\u2265",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      Gg: "\u22D9",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gl: "\u2277",
      gla: "\u2AA5",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gnE: "\u2269",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      Gt: "\u226B",
      GT: ">",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      hArr: "\u21D4",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      Hfr: "\u210C",
      hfr: "\u{1D525}",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      Hopf: "\u210D",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xCD",
      iacute: "\xED",
      ic: "\u2063",
      Icirc: "\xCE",
      icirc: "\xEE",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      Ifr: "\u2111",
      ifr: "\u{1D526}",
      Igrave: "\xCC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Im: "\u2111",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      Int: "\u222C",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      Iscr: "\u2110",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xCF",
      iuml: "\xEF",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      Lang: "\u27EA",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xAB",
      Larr: "\u219E",
      lArr: "\u21D0",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      lAtail: "\u291B",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lBarr: "\u290E",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      lE: "\u2266",
      le: "\u2264",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      leftarrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      Ll: "\u22D8",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lnE: "\u2268",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftarrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      Lscr: "\u2112",
      lscr: "\u{1D4C1}",
      Lsh: "\u21B0",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      Lt: "\u226A",
      LT: "<",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      Mscr: "\u2133",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      nearhk: "\u2924",
      neArr: "\u21D7",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlarr: "\u219A",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nLeftarrow: "\u21CD",
      nleftarrow: "\u219A",
      nLeftrightarrow: "\u21CE",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      nopf: "\u{1D55F}",
      Not: "\u2AEC",
      not: "\xAC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nRightarrow: "\u21CF",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xD1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nvDash: "\u22AD",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwArr: "\u21D6",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xD3",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      Ocirc: "\xD4",
      ocirc: "\xF4",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xD2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      Or: "\u2A54",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xD8",
      oslash: "\xF8",
      osol: "\u2298",
      Otilde: "\xD5",
      otilde: "\xF5",
      Otimes: "\u2A37",
      otimes: "\u2297",
      otimesas: "\u2A36",
      Ouml: "\xD6",
      ouml: "\xF6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      Popf: "\u2119",
      popf: "\u{1D561}",
      pound: "\xA3",
      Pr: "\u2ABB",
      pr: "\u227A",
      prap: "\u2AB7",
      prcue: "\u227C",
      prE: "\u2AB3",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      Prime: "\u2033",
      prime: "\u2032",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportion: "\u2237",
      Proportional: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      Qopf: "\u211A",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      QUOT: '"',
      quot: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      Rang: "\u27EB",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      rAtail: "\u291C",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      RBarr: "\u2910",
      rBarr: "\u290F",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      Re: "\u211C",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      REG: "\xAE",
      reg: "\xAE",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      Rfr: "\u211C",
      rfr: "\u{1D52F}",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      rightarrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      Ropf: "\u211D",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      Rscr: "\u211B",
      rscr: "\u{1D4C7}",
      Rsh: "\u21B1",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      Sc: "\u2ABC",
      sc: "\u227B",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      sccue: "\u227D",
      scE: "\u2AB4",
      sce: "\u2AB0",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      searhk: "\u2925",
      seArr: "\u21D8",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xAD",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      Square: "\u25A1",
      square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      Sub: "\u22D0",
      sub: "\u2282",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      Subset: "\u22D0",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      sum: "\u2211",
      sung: "\u266A",
      Sup: "\u22D1",
      sup: "\u2283",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      Supset: "\u22D1",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swArr: "\u21D9",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      Therefore: "\u2234",
      therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      thinsp: "\u2009",
      ThinSpace: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xDE",
      thorn: "\xFE",
      Tilde: "\u223C",
      tilde: "\u02DC",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      TRADE: "\u2122",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xDA",
      uacute: "\xFA",
      Uarr: "\u219F",
      uArr: "\u21D1",
      uarr: "\u2191",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xDB",
      ucirc: "\xFB",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xD9",
      ugrave: "\xF9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xA8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      uparrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      updownarrow: "\u2195",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      upsi: "\u03C5",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xDC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      vArr: "\u21D5",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      Vbar: "\u2AEB",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      VDash: "\u22AB",
      Vdash: "\u22A9",
      vDash: "\u22A8",
      vdash: "\u22A2",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      Verbar: "\u2016",
      verbar: "|",
      Vert: "\u2016",
      vert: "|",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      Wedge: "\u22C0",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      Xi: "\u039E",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xDD",
      yacute: "\xFD",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xA5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      Yuml: "\u0178",
      yuml: "\xFF",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      Zfr: "\u2128",
      zfr: "\u{1D537}",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      Zopf: "\u2124",
      zopf: "\u{1D56B}",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    });
    exports.entityMap = exports.HTML_ENTITIES;
  }
});

// node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/sax.js
var require_sax = __commonJS({
  "node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
    var NAMESPACE = require_conventions().NAMESPACE;
    var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype = new Error();
    ParseError.prototype.name = ParseError.name;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse(
          source,
          defaultNSMap,
          entityMap,
          domBuilder,
          this.errorHandler
        );
        domBuilder.endDocument();
      }
    };
    function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (Object.hasOwnProperty.call(entityMap, k)) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source))) {
          lineStart = m.index;
          lineEnd = lineStart + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!source.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source.substr(start));
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 3);
              var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
              var config = parseStack.pop();
              if (end < 0) {
                tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                      domBuilder.endPrefixMapping(prefix);
                    }
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack.push(config);
              }
              end++;
              break;
            // end elment
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
      function addAttribute(qname, value2, startIndex) {
        if (el.attributeNames.hasOwnProperty(qname)) {
          errorHandler.fatalError("Attribute " + qname + " redefined");
        }
        el.addValue(
          qname,
          // @see https://www.w3.org/TR/xml/#AVNormalize
          // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
          // - recursive replacement of (DTD) entity references
          // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
          value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
          startIndex
        );
      }
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c = source.charAt(p);
        switch (c) {
          case "=":
            if (s === S_ATTR) {
              attrName = source.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p);
              }
              start = p + 1;
              p = source.indexOf(c, start);
              if (p > 0) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                break;
              case S_ATTR_SPACE:
                el.closed = true;
                break;
              //case S_EQ:
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              //normal
              case S_ATTR_NOQUOT_VALUE:
              //Compatible state
              case S_ATTR:
                value = source.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value, start);
                } else {
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p;
          /*xml space '\x20' | #x9 | #xD | #xA; */
          case "\x80":
            c = " ";
          default:
            if (c <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                //case S_TAG:void();break;
                //case S_ATTR:void();break;
                //case S_ATTR_NOQUOT_VALUE:void();break;
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            _copy(currentNSMap, currentNSMap = {});
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = NAMESPACE.XMLNS;
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = NAMESPACE.XML;
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
              domBuilder.endPrefixMapping(prefix);
            }
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
          text = text.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source, target) {
      for (var n in source) {
        if (Object.prototype.hasOwnProperty.call(source, n)) {
          target[n] = source[n];
        }
      }
    }
    function parseDCC(source, start, domBuilder, errorHandler) {
      var next = source.charAt(start + 2);
      switch (next) {
        case "-":
          if (source.charAt(start + 3) === "-") {
            var end = source.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source.substr(start + 3, 6) == "CDATA[") {
            var end = source.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = false;
            var sysid = false;
            if (len > 3) {
              if (/^public$/i.test(matchs[2][0])) {
                pubid = matchs[3][0];
                sysid = len > 4 && matchs[4][0];
              } else if (/^system$/i.test(matchs[2][0])) {
                sysid = matchs[3][0];
              }
            }
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(name, pubid, sysid);
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source, start, domBuilder) {
      var end = source.indexOf("?>", start);
      if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes() {
      this.attributeNames = {};
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
      //	,getIndex:function(uri, localName)){
      //		if(localName){
      //
      //		}else{
      //			var qName = uri
      //		}
      //	},
      //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
      //	getType:function(uri,localName){}
      //	getType:function(i){},
    };
    function split(source, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source);
      while (match = reg.exec(source)) {
        buf.push(match);
        if (match[1]) return buf;
      }
    }
    exports.XMLReader = XMLReader;
    exports.ParseError = ParseError;
  }
});

// node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/dom-parser.js
var require_dom_parser = __commonJS({
  "node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
    var conventions = require_conventions();
    var dom = require_dom();
    var entities = require_entities();
    var sax = require_sax();
    var DOMImplementation = dom.DOMImplementation;
    var NAMESPACE = conventions.NAMESPACE;
    var ParseError = sax.ParseError;
    var XMLReader = sax.XMLReader;
    function normalizeLineEndings(input) {
      return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
    }
    function DOMParser(options) {
      this.options = options || { locator: {} };
    }
    DOMParser.prototype.parseFromString = function(source, mimeType) {
      var options = this.options;
      var sax2 = new XMLReader();
      var domBuilder = options.domBuilder || new DOMHandler();
      var errorHandler = options.errorHandler;
      var locator = options.locator;
      var defaultNSMap = options.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax2.domBuilder = options.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = NAMESPACE.HTML;
      }
      defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
      var normalize = options.normalizeLineEndings || normalizeLineEndings;
      if (source && typeof source === "string") {
        sax2.parse(
          normalize(source),
          defaultNSMap,
          entityMap
        );
      } else {
        sax2.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function(msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      //LexicalHandler
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
          this.doc.doctype = dt;
        }
      },
      /**
       * @see org.xml.sax.ErrorHandler
       * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
       */
      warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function(error) {
        throw new ParseError(error, this.locator);
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
      DOMHandler.prototype[key] = function() {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    exports.__DOMHandler = DOMHandler;
    exports.normalizeLineEndings = normalizeLineEndings;
    exports.DOMParser = DOMParser;
  }
});

// node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/@xmldom+xmldom@0.8.12/node_modules/@xmldom/xmldom/lib/index.js"(exports) {
    var dom = require_dom();
    exports.DOMImplementation = dom.DOMImplementation;
    exports.XMLSerializer = dom.XMLSerializer;
    exports.DOMParser = require_dom_parser().DOMParser;
  }
});

// node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/parse.js"(exports) {
    var { DOMParser } = require_lib();
    exports.parse = parse;
    var TEXT_NODE = 3;
    var CDATA_NODE = 4;
    var COMMENT_NODE = 8;
    function shouldIgnoreNode(node) {
      return node.nodeType === TEXT_NODE || node.nodeType === COMMENT_NODE || node.nodeType === CDATA_NODE;
    }
    function isEmptyNode(node) {
      if (!node.childNodes || node.childNodes.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    function invariant(test, message) {
      if (!test) {
        throw new Error(message);
      }
    }
    function parse(xml) {
      var doc = new DOMParser().parseFromString(xml);
      invariant(
        doc.documentElement.nodeName === "plist",
        "malformed document. First element should be <plist>"
      );
      var plist = parsePlistXML(doc.documentElement);
      if (plist.length == 1) plist = plist[0];
      return plist;
    }
    function parsePlistXML(node) {
      var i, new_obj, key, val, new_arr, res, counter, type;
      if (!node)
        return null;
      if (node.nodeName === "plist") {
        new_arr = [];
        if (isEmptyNode(node)) {
          return new_arr;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (!shouldIgnoreNode(node.childNodes[i])) {
            new_arr.push(parsePlistXML(node.childNodes[i]));
          }
        }
        return new_arr;
      } else if (node.nodeName === "dict") {
        new_obj = {};
        key = null;
        counter = 0;
        if (isEmptyNode(node)) {
          return new_obj;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (shouldIgnoreNode(node.childNodes[i])) continue;
          if (counter % 2 === 0) {
            invariant(
              node.childNodes[i].nodeName === "key",
              "Missing key while parsing <dict/>."
            );
            key = parsePlistXML(node.childNodes[i]);
          } else {
            invariant(
              node.childNodes[i].nodeName !== "key",
              'Unexpected key "' + parsePlistXML(node.childNodes[i]) + '" while parsing <dict/>.'
            );
            new_obj[key] = parsePlistXML(node.childNodes[i]);
          }
          counter += 1;
        }
        if (counter % 2 === 1) {
          new_obj[key] = "";
        }
        return new_obj;
      } else if (node.nodeName === "array") {
        new_arr = [];
        if (isEmptyNode(node)) {
          return new_arr;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (!shouldIgnoreNode(node.childNodes[i])) {
            res = parsePlistXML(node.childNodes[i]);
            if (null != res) new_arr.push(res);
          }
        }
        return new_arr;
      } else if (node.nodeName === "#text") {
      } else if (node.nodeName === "key") {
        if (isEmptyNode(node)) {
          return "";
        }
        invariant(
          node.childNodes[0].nodeValue !== "__proto__",
          "__proto__ keys can lead to prototype pollution. More details on CVE-2022-22912"
        );
        return node.childNodes[0].nodeValue;
      } else if (node.nodeName === "string") {
        res = "";
        if (isEmptyNode(node)) {
          return res;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          var type = node.childNodes[i].nodeType;
          if (type === TEXT_NODE || type === CDATA_NODE) {
            res += node.childNodes[i].nodeValue;
          }
        }
        return res;
      } else if (node.nodeName === "integer") {
        invariant(
          !isEmptyNode(node),
          'Cannot parse "" as integer.'
        );
        return parseInt(node.childNodes[0].nodeValue, 10);
      } else if (node.nodeName === "real") {
        invariant(
          !isEmptyNode(node),
          'Cannot parse "" as real.'
        );
        res = "";
        for (i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].nodeType === TEXT_NODE) {
            res += node.childNodes[i].nodeValue;
          }
        }
        return parseFloat(res);
      } else if (node.nodeName === "data") {
        res = "";
        if (isEmptyNode(node)) {
          return Buffer.from(res, "base64");
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].nodeType === TEXT_NODE) {
            res += node.childNodes[i].nodeValue.replace(/\s+/g, "");
          }
        }
        return Buffer.from(res, "base64");
      } else if (node.nodeName === "date") {
        invariant(
          !isEmptyNode(node),
          'Cannot parse "" as Date.'
        );
        return new Date(node.childNodes[0].nodeValue);
      } else if (node.nodeName === "null") {
        return null;
      } else if (node.nodeName === "true") {
        return true;
      } else if (node.nodeName === "false") {
        return false;
      } else {
        throw new Error("Invalid PLIST tag " + node.nodeName);
      }
    }
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/Utility.js
var require_Utility = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/Utility.js"(exports, module) {
    (function() {
      var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
      assign = function(target, ...sources) {
        var i, key, len, source;
        if (isFunction(Object.assign)) {
          Object.assign.apply(null, arguments);
        } else {
          for (i = 0, len = sources.length; i < len; i++) {
            source = sources[i];
            if (source != null) {
              for (key in source) {
                if (!hasProp.call(source, key)) continue;
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
      isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === "[object Function]";
      };
      isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === "function" || ref === "object");
      };
      isArray = function(val) {
        if (isFunction(Array.isArray)) {
          return Array.isArray(val);
        } else {
          return Object.prototype.toString.call(val) === "[object Array]";
        }
      };
      isEmpty = function(val) {
        var key;
        if (isArray(val)) {
          return !val.length;
        } else {
          for (key in val) {
            if (!hasProp.call(val, key)) continue;
            return false;
          }
          return true;
        }
      };
      isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
      };
      getValue = function(obj) {
        if (isFunction(obj.valueOf)) {
          return obj.valueOf();
        } else {
          return obj;
        }
      };
      module.exports.assign = assign;
      module.exports.isFunction = isFunction;
      module.exports.isObject = isObject;
      module.exports.isArray = isArray;
      module.exports.isEmpty = isEmpty;
      module.exports.isPlainObject = isPlainObject;
      module.exports.getValue = getValue;
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMImplementation.js
var require_XMLDOMImplementation = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMImplementation.js"(exports, module) {
    (function() {
      var XMLDOMImplementation;
      module.exports = XMLDOMImplementation = class XMLDOMImplementation {
        // Tests if the DOM implementation implements a specific feature.
        // `feature` package name of the feature to test. In Level 1, the
        //           legal values are "HTML" and "XML" (case-insensitive).
        // `version` version number of the package name to test. 
        //           In Level 1, this is the string "1.0". If the version is 
        //           not specified, supporting any version of the feature will 
        //           cause the method to return true.
        hasFeature(feature, version) {
          return true;
        }
        // Creates a new document type declaration.
        // `qualifiedName` qualified name of the document type to be created
        // `publicId` public identifier of the external subset
        // `systemId` system identifier of the external subset
        createDocumentType(qualifiedName, publicId, systemId) {
          throw new Error("This DOM method is not implemented.");
        }
        // Creates a new document.
        // `namespaceURI` namespace URI of the document element to create
        // `qualifiedName` the qualified name of the document to be created
        // `doctype` the type of document to be created or null
        createDocument(namespaceURI, qualifiedName, doctype) {
          throw new Error("This DOM method is not implemented.");
        }
        // Creates a new HTML document.
        // `title` document title
        createHTMLDocument(title) {
          throw new Error("This DOM method is not implemented.");
        }
        // Returns a specialized object which implements the specialized APIs 
        // of the specified feature and version.
        // `feature` name of the feature requested.
        // `version` version number of the feature to test
        getFeature(feature, version) {
          throw new Error("This DOM method is not implemented.");
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
var require_XMLDOMErrorHandler = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js"(exports, module) {
    (function() {
      var XMLDOMErrorHandler;
      module.exports = XMLDOMErrorHandler = class XMLDOMErrorHandler {
        // Initializes a new instance of `XMLDOMErrorHandler`
        constructor() {
        }
        // Called on the error handler when an error occurs.
        // `error` the error message as a string
        handleError(error) {
          throw new Error(error);
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMStringList.js
var require_XMLDOMStringList = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMStringList.js"(exports, module) {
    (function() {
      var XMLDOMStringList;
      module.exports = XMLDOMStringList = (function() {
        class XMLDOMStringList2 {
          // Initializes a new instance of `XMLDOMStringList`
          // This is just a wrapper around an ordinary
          // JS array.
          // `arr` the array of string values
          constructor(arr) {
            this.arr = arr || [];
          }
          // Returns the indexth item in the collection.
          // `index` index into the collection
          item(index) {
            return this.arr[index] || null;
          }
          // Test if a string is part of this DOMStringList.
          // `str` the string to look for
          contains(str) {
            return this.arr.indexOf(str) !== -1;
          }
        }
        ;
        Object.defineProperty(XMLDOMStringList2.prototype, "length", {
          get: function() {
            return this.arr.length;
          }
        });
        return XMLDOMStringList2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
var require_XMLDOMConfiguration = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js"(exports, module) {
    (function() {
      var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
      XMLDOMErrorHandler = require_XMLDOMErrorHandler();
      XMLDOMStringList = require_XMLDOMStringList();
      module.exports = XMLDOMConfiguration = (function() {
        class XMLDOMConfiguration2 {
          constructor() {
            var clonedSelf;
            this.defaultParams = {
              "canonical-form": false,
              "cdata-sections": false,
              "comments": false,
              "datatype-normalization": false,
              "element-content-whitespace": true,
              "entities": true,
              "error-handler": new XMLDOMErrorHandler(),
              "infoset": true,
              "validate-if-schema": false,
              "namespaces": true,
              "namespace-declarations": true,
              "normalize-characters": false,
              "schema-location": "",
              "schema-type": "",
              "split-cdata-sections": true,
              "validate": false,
              "well-formed": true
            };
            this.params = clonedSelf = Object.create(this.defaultParams);
          }
          // Gets the value of a parameter.
          // `name` name of the parameter
          getParameter(name) {
            if (this.params.hasOwnProperty(name)) {
              return this.params[name];
            } else {
              return null;
            }
          }
          // Checks if setting a parameter to a specific value is supported.
          // `name` name of the parameter
          // `value` parameter value
          canSetParameter(name, value) {
            return true;
          }
          // Sets the value of a parameter.
          // `name` name of the parameter
          // `value` new value or null if the user wishes to unset the parameter
          setParameter(name, value) {
            if (value != null) {
              return this.params[name] = value;
            } else {
              return delete this.params[name];
            }
          }
        }
        ;
        Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
          get: function() {
            return new XMLDOMStringList(Object.keys(this.defaultParams));
          }
        });
        return XMLDOMConfiguration2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/NodeType.js
var require_NodeType = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/NodeType.js"(exports, module) {
    (function() {
      module.exports = {
        Element: 1,
        Attribute: 2,
        Text: 3,
        CData: 4,
        EntityReference: 5,
        EntityDeclaration: 6,
        ProcessingInstruction: 7,
        Comment: 8,
        Document: 9,
        DocType: 10,
        DocumentFragment: 11,
        NotationDeclaration: 12,
        // Numeric codes up to 200 are reserved to W3C for possible future use.
        // Following are types internal to this library:
        Declaration: 201,
        Raw: 202,
        AttributeDeclaration: 203,
        ElementDeclaration: 204,
        Dummy: 205
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLAttribute.js"(exports, module) {
    (function() {
      var NodeType, XMLAttribute, XMLNode;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module.exports = XMLAttribute = (function() {
        class XMLAttribute2 {
          // Initializes a new instance of `XMLAttribute`
          // `parent` the parent node
          // `name` attribute target
          // `value` attribute value
          constructor(parent, name, value) {
            this.parent = parent;
            if (this.parent) {
              this.options = this.parent.options;
              this.stringify = this.parent.stringify;
            }
            if (name == null) {
              throw new Error("Missing attribute name. " + this.debugInfo(name));
            }
            this.name = this.stringify.name(name);
            this.value = this.stringify.attValue(value);
            this.type = NodeType.Attribute;
            this.isId = false;
            this.schemaTypeInfo = null;
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
          }
          // Returns debug string for this node
          debugInfo(name) {
            name = name || this.name;
            if (name == null) {
              return "parent: <" + this.parent.name + ">";
            } else {
              return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
            }
          }
          isEqualNode(node) {
            if (node.namespaceURI !== this.namespaceURI) {
              return false;
            }
            if (node.prefix !== this.prefix) {
              return false;
            }
            if (node.localName !== this.localName) {
              return false;
            }
            if (node.value !== this.value) {
              return false;
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "specified", {
          get: function() {
            return true;
          }
        });
        return XMLAttribute2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
var require_XMLNamedNodeMap = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js"(exports, module) {
    (function() {
      var XMLNamedNodeMap;
      module.exports = XMLNamedNodeMap = (function() {
        class XMLNamedNodeMap2 {
          // Initializes a new instance of `XMLNamedNodeMap`
          // This is just a wrapper around an ordinary
          // JS object.
          // `nodes` the object containing nodes.
          constructor(nodes) {
            this.nodes = nodes;
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return this.nodes = null;
          }
          // DOM Level 1
          getNamedItem(name) {
            return this.nodes[name];
          }
          setNamedItem(node) {
            var oldNode;
            oldNode = this.nodes[node.nodeName];
            this.nodes[node.nodeName] = node;
            return oldNode || null;
          }
          removeNamedItem(name) {
            var oldNode;
            oldNode = this.nodes[name];
            delete this.nodes[name];
            return oldNode || null;
          }
          item(index) {
            return this.nodes[Object.keys(this.nodes)[index]] || null;
          }
          // DOM level 2 functions to be implemented later
          getNamedItemNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
          }
          setNamedItemNS(node) {
            throw new Error("This DOM method is not implemented.");
          }
          removeNamedItemNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented.");
          }
        }
        ;
        Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
          get: function() {
            return Object.keys(this.nodes).length || 0;
          }
        });
        return XMLNamedNodeMap2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLElement.js"(exports, module) {
    (function() {
      var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, hasProp = {}.hasOwnProperty;
      ({ isObject, isFunction, getValue } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLAttribute = require_XMLAttribute();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module.exports = XMLElement = (function() {
        class XMLElement2 extends XMLNode {
          // Initializes a new instance of `XMLElement`
          // `parent` the parent node
          // `name` element name
          // `attributes` an object containing name/value pairs of attributes
          constructor(parent, name, attributes) {
            var child, j, len, ref;
            super(parent);
            if (name == null) {
              throw new Error("Missing element name. " + this.debugInfo());
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.Element;
            this.attribs = {};
            this.schemaTypeInfo = null;
            if (attributes != null) {
              this.attribute(attributes);
            }
            if (parent.type === NodeType.Document) {
              this.isRoot = true;
              this.documentObject = parent;
              parent.rootObject = this;
              if (parent.children) {
                ref = parent.children;
                for (j = 0, len = ref.length; j < len; j++) {
                  child = ref[j];
                  if (child.type === NodeType.DocType) {
                    child.name = this.name;
                    break;
                  }
                }
              }
            }
          }
          // Creates and returns a deep clone of `this`
          clone() {
            var att, attName, clonedSelf, ref;
            clonedSelf = Object.create(this);
            if (clonedSelf.isRoot) {
              clonedSelf.documentObject = null;
            }
            clonedSelf.attribs = {};
            ref = this.attribs;
            for (attName in ref) {
              if (!hasProp.call(ref, attName)) continue;
              att = ref[attName];
              clonedSelf.attribs[attName] = att.clone();
            }
            clonedSelf.children = [];
            this.children.forEach(function(child) {
              var clonedChild;
              clonedChild = child.clone();
              clonedChild.parent = clonedSelf;
              return clonedSelf.children.push(clonedChild);
            });
            return clonedSelf;
          }
          // Adds or modifies an attribute
          // `name` attribute name
          // `value` attribute value
          attribute(name, value) {
            var attName, attValue;
            if (name != null) {
              name = getValue(name);
            }
            if (isObject(name)) {
              for (attName in name) {
                if (!hasProp.call(name, attName)) continue;
                attValue = name[attName];
                this.attribute(attName, attValue);
              }
            } else {
              if (isFunction(value)) {
                value = value.apply();
              }
              if (this.options.keepNullAttributes && value == null) {
                this.attribs[name] = new XMLAttribute(this, name, "");
              } else if (value != null) {
                this.attribs[name] = new XMLAttribute(this, name, value);
              }
            }
            return this;
          }
          // Removes an attribute
          // `name` attribute name
          removeAttribute(name) {
            var attName, j, len;
            if (name == null) {
              throw new Error("Missing attribute name. " + this.debugInfo());
            }
            name = getValue(name);
            if (Array.isArray(name)) {
              for (j = 0, len = name.length; j < len; j++) {
                attName = name[j];
                delete this.attribs[attName];
              }
            } else {
              delete this.attribs[name];
            }
            return this;
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          // `options.allowEmpty` do not self close empty element tags
          toString(options) {
            return this.options.writer.element(this, this.options.writer.filterOptions(options));
          }
          // Aliases
          att(name, value) {
            return this.attribute(name, value);
          }
          a(name, value) {
            return this.attribute(name, value);
          }
          // DOM Level 1
          getAttribute(name) {
            if (this.attribs.hasOwnProperty(name)) {
              return this.attribs[name].value;
            } else {
              return null;
            }
          }
          setAttribute(name, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getAttributeNode(name) {
            if (this.attribs.hasOwnProperty(name)) {
              return this.attribs[name];
            } else {
              return null;
            }
          }
          setAttributeNode(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          removeAttributeNode(oldAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagName(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM Level 2
          getAttributeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setAttributeNS(namespaceURI, qualifiedName, value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          removeAttributeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getAttributeNodeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setAttributeNodeNS(newAttr) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagNameNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          hasAttribute(name) {
            return this.attribs.hasOwnProperty(name);
          }
          hasAttributeNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM Level 3
          setIdAttribute(name, isId) {
            if (this.attribs.hasOwnProperty(name)) {
              return this.attribs[name].isId;
            } else {
              return isId;
            }
          }
          setIdAttributeNS(namespaceURI, localName, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setIdAttributeNode(idAttr, isId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM Level 4
          getElementsByTagName(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagNameNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByClassName(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isEqualNode(node) {
            var i, j, ref;
            if (!super.isEqualNode(node)) {
              return false;
            }
            if (node.namespaceURI !== this.namespaceURI) {
              return false;
            }
            if (node.prefix !== this.prefix) {
              return false;
            }
            if (node.localName !== this.localName) {
              return false;
            }
            if (node.attribs.length !== this.attribs.length) {
              return false;
            }
            for (i = j = 0, ref = this.attribs.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
              if (!this.attribs[i].isEqualNode(node.attribs[i])) {
                return false;
              }
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLElement2.prototype, "tagName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "id", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "className", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "classList", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "attributes", {
          get: function() {
            if (!this.attributeMap || !this.attributeMap.nodes) {
              this.attributeMap = new XMLNamedNodeMap(this.attribs);
            }
            return this.attributeMap;
          }
        });
        return XMLElement2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCharacterData.js
var require_XMLCharacterData = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCharacterData.js"(exports, module) {
    (function() {
      var XMLCharacterData, XMLNode;
      XMLNode = require_XMLNode();
      module.exports = XMLCharacterData = (function() {
        class XMLCharacterData2 extends XMLNode {
          // Initializes a new instance of `XMLCharacterData`
          constructor(parent) {
            super(parent);
            this.value = "";
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // DOM level 1 functions to be implemented later
          substringData(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          appendData(arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          insertData(offset, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          deleteData(offset, count) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          replaceData(offset, count, arg) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isEqualNode(node) {
            if (!super.isEqualNode(node)) {
              return false;
            }
            if (node.data !== this.data) {
              return false;
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLCharacterData2.prototype, "data", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "length", {
          get: function() {
            return this.value.length;
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        return XMLCharacterData2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLCData.js"(exports, module) {
    (function() {
      var NodeType, XMLCData, XMLCharacterData;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLCData = class XMLCData extends XMLCharacterData {
        // Initializes a new instance of `XMLCData`
        // `text` CDATA text
        constructor(parent, text) {
          super(parent);
          if (text == null) {
            throw new Error("Missing CDATA text. " + this.debugInfo());
          }
          this.name = "#cdata-section";
          this.type = NodeType.CData;
          this.value = this.stringify.cdata(text);
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLComment.js"(exports, module) {
    (function() {
      var NodeType, XMLCharacterData, XMLComment;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLComment = class XMLComment extends XMLCharacterData {
        // Initializes a new instance of `XMLComment`
        // `text` comment text
        constructor(parent, text) {
          super(parent);
          if (text == null) {
            throw new Error("Missing comment text. " + this.debugInfo());
          }
          this.name = "#comment";
          this.type = NodeType.Comment;
          this.value = this.stringify.comment(text);
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.comment(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDeclaration.js"(exports, module) {
    (function() {
      var NodeType, XMLDeclaration, XMLNode, isObject;
      ({ isObject } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDeclaration = class XMLDeclaration extends XMLNode {
        // Initializes a new instance of `XMLDeclaration`
        // `parent` the document object
        // `version` A version number string, e.g. 1.0
        // `encoding` Encoding declaration, e.g. UTF-8
        // `standalone` standalone document declaration: true or false
        constructor(parent, version, encoding, standalone) {
          super(parent);
          if (isObject(version)) {
            ({ version, encoding, standalone } = version);
          }
          if (!version) {
            version = "1.0";
          }
          this.type = NodeType.Declaration;
          this.version = this.stringify.xmlVersion(version);
          if (encoding != null) {
            this.encoding = this.stringify.xmlEncoding(encoding);
          }
          if (standalone != null) {
            this.standalone = this.stringify.xmlStandalone(standalone);
          }
        }
        // Converts to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDAttList.js"(exports, module) {
    (function() {
      var NodeType, XMLDTDAttList, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDAttList = class XMLDTDAttList extends XMLNode {
        // Initializes a new instance of `XMLDTDAttList`
        // `parent` the parent `XMLDocType` element
        // `elementName` the name of the element containing this attribute
        // `attributeName` attribute name
        // `attributeType` type of the attribute
        // `defaultValueType` default value type (either #REQUIRED, #IMPLIED,
        //                    #FIXED or #DEFAULT)
        // `defaultValue` default value of the attribute
        //                (only used for #FIXED or #DEFAULT)
        constructor(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          super(parent);
          if (elementName == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (attributeName == null) {
            throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
          }
          if (!attributeType) {
            throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
          }
          if (!defaultValueType) {
            throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
          }
          if (defaultValueType.indexOf("#") !== 0) {
            defaultValueType = "#" + defaultValueType;
          }
          if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
            throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
            throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          this.elementName = this.stringify.name(elementName);
          this.type = NodeType.AttributeDeclaration;
          this.attributeName = this.stringify.name(attributeName);
          this.attributeType = this.stringify.dtdAttType(attributeType);
          if (defaultValue) {
            this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
          }
          this.defaultValueType = defaultValueType;
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDEntity.js"(exports, module) {
    (function() {
      var NodeType, XMLDTDEntity, XMLNode, isObject;
      ({ isObject } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDEntity = (function() {
        class XMLDTDEntity2 extends XMLNode {
          // Initializes a new instance of `XMLDTDEntity`
          // `parent` the parent `XMLDocType` element
          // `pe` whether this is a parameter entity or a general entity
          //      defaults to `false` (general entity)
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          // `value.nData` notation declaration
          constructor(parent, pe, name, value) {
            super(parent);
            if (name == null) {
              throw new Error("Missing DTD entity name. " + this.debugInfo(name));
            }
            if (value == null) {
              throw new Error("Missing DTD entity value. " + this.debugInfo(name));
            }
            this.pe = !!pe;
            this.name = this.stringify.name(name);
            this.type = NodeType.EntityDeclaration;
            if (!isObject(value)) {
              this.value = this.stringify.dtdEntityValue(value);
              this.internal = true;
            } else {
              if (!value.pubID && !value.sysID) {
                throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
              }
              if (value.pubID && !value.sysID) {
                throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
              }
              this.internal = false;
              if (value.pubID != null) {
                this.pubID = this.stringify.dtdPubID(value.pubID);
              }
              if (value.sysID != null) {
                this.sysID = this.stringify.dtdSysID(value.sysID);
              }
              if (value.nData != null) {
                this.nData = this.stringify.dtdNData(value.nData);
              }
              if (this.pe && this.nData) {
                throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
              }
            }
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
          }
        }
        ;
        Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
          get: function() {
            return this.nData || null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
          get: function() {
            return null;
          }
        });
        return XMLDTDEntity2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDElement.js"(exports, module) {
    (function() {
      var NodeType, XMLDTDElement, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDElement = class XMLDTDElement extends XMLNode {
        // Initializes a new instance of `XMLDTDElement`
        // `parent` the parent `XMLDocType` element
        // `name` element name
        // `value` element content (defaults to #PCDATA)
        constructor(parent, name, value) {
          super(parent);
          if (name == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (!value) {
            value = "(#PCDATA)";
          }
          if (Array.isArray(value)) {
            value = "(" + value.join(",") + ")";
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.ElementDeclaration;
          this.value = this.stringify.dtdElementValue(value);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDTDNotation.js"(exports, module) {
    (function() {
      var NodeType, XMLDTDNotation, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDTDNotation = (function() {
        class XMLDTDNotation2 extends XMLNode {
          // Initializes a new instance of `XMLDTDNotation`
          // `parent` the parent `XMLDocType` element
          // `name` the name of the notation
          // `value` an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          constructor(parent, name, value) {
            super(parent);
            if (name == null) {
              throw new Error("Missing DTD notation name. " + this.debugInfo(name));
            }
            if (!value.pubID && !value.sysID) {
              throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.NotationDeclaration;
            if (value.pubID != null) {
              this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
              this.sysID = this.stringify.dtdSysID(value.sysID);
            }
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
          }
        }
        ;
        Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        return XMLDTDNotation2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocType.js"(exports, module) {
    (function() {
      var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject;
      ({ isObject } = require_Utility());
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module.exports = XMLDocType = (function() {
        class XMLDocType2 extends XMLNode {
          // Initializes a new instance of `XMLDocType`
          // `parent` the document object
          // `pubID` public identifier of the external subset
          // `sysID` system identifier of the external subset
          constructor(parent, pubID, sysID) {
            var child, i, len, ref;
            super(parent);
            this.type = NodeType.DocType;
            if (parent.children) {
              ref = parent.children;
              for (i = 0, len = ref.length; i < len; i++) {
                child = ref[i];
                if (child.type === NodeType.Element) {
                  this.name = child.name;
                  break;
                }
              }
            }
            this.documentObject = parent;
            if (isObject(pubID)) {
              ({ pubID, sysID } = pubID);
            }
            if (sysID == null) {
              [sysID, pubID] = [pubID, sysID];
            }
            if (pubID != null) {
              this.pubID = this.stringify.dtdPubID(pubID);
            }
            if (sysID != null) {
              this.sysID = this.stringify.dtdSysID(sysID);
            }
          }
          // Creates an element type declaration
          // `name` element name
          // `value` element content (defaults to #PCDATA)
          element(name, value) {
            var child;
            child = new XMLDTDElement(this, name, value);
            this.children.push(child);
            return this;
          }
          // Creates an attribute declaration
          // `elementName` the name of the element containing this attribute
          // `attributeName` attribute name
          // `attributeType` type of the attribute (defaults to CDATA)
          // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
          //                    #DEFAULT) (defaults to #IMPLIED)
          // `defaultValue` default value of the attribute
          //                (only used for #FIXED or #DEFAULT)
          attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var child;
            child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.children.push(child);
            return this;
          }
          // Creates a general entity declaration
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          // `value.nData` notation declaration
          entity(name, value) {
            var child;
            child = new XMLDTDEntity(this, false, name, value);
            this.children.push(child);
            return this;
          }
          // Creates a parameter entity declaration
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          pEntity(name, value) {
            var child;
            child = new XMLDTDEntity(this, true, name, value);
            this.children.push(child);
            return this;
          }
          // Creates a NOTATION declaration
          // `name` the name of the notation
          // `value` an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          notation(name, value) {
            var child;
            child = new XMLDTDNotation(this, name, value);
            this.children.push(child);
            return this;
          }
          // Converts to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.docType(this, this.options.writer.filterOptions(options));
          }
          // Aliases
          ele(name, value) {
            return this.element(name, value);
          }
          att(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
          }
          ent(name, value) {
            return this.entity(name, value);
          }
          pent(name, value) {
            return this.pEntity(name, value);
          }
          not(name, value) {
            return this.notation(name, value);
          }
          up() {
            return this.root() || this.documentObject;
          }
          isEqualNode(node) {
            if (!super.isEqualNode(node)) {
              return false;
            }
            if (node.name !== this.name) {
              return false;
            }
            if (node.publicId !== this.publicId) {
              return false;
            }
            if (node.systemId !== this.systemId) {
              return false;
            }
            return true;
          }
        }
        ;
        Object.defineProperty(XMLDocType2.prototype, "entities", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.EntityDeclaration && !child.pe) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "notations", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.NotationDeclaration) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        return XMLDocType2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLRaw.js"(exports, module) {
    (function() {
      var NodeType, XMLNode, XMLRaw;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module.exports = XMLRaw = class XMLRaw extends XMLNode {
        // Initializes a new instance of `XMLRaw`
        // `text` raw text
        constructor(parent, text) {
          super(parent);
          if (text == null) {
            throw new Error("Missing raw text. " + this.debugInfo());
          }
          this.type = NodeType.Raw;
          this.value = this.stringify.raw(text);
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.raw(this, this.options.writer.filterOptions(options));
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLText.js"(exports, module) {
    (function() {
      var NodeType, XMLCharacterData, XMLText;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLText = (function() {
        class XMLText2 extends XMLCharacterData {
          // Initializes a new instance of `XMLText`
          // `text` element text
          constructor(parent, text) {
            super(parent);
            if (text == null) {
              throw new Error("Missing element text. " + this.debugInfo());
            }
            this.name = "#text";
            this.type = NodeType.Text;
            this.value = this.stringify.text(text);
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.text(this, this.options.writer.filterOptions(options));
          }
          // DOM level 1 functions to be implemented later
          splitText(offset) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 3 functions to be implemented later
          replaceWholeText(content) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        }
        ;
        Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLText2.prototype, "wholeText", {
          get: function() {
            var next, prev, str;
            str = "";
            prev = this.previousSibling;
            while (prev) {
              str = prev.data + str;
              prev = prev.previousSibling;
            }
            str += this.data;
            next = this.nextSibling;
            while (next) {
              str = str + next.data;
              next = next.nextSibling;
            }
            return str;
          }
        });
        return XMLText2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js"(exports, module) {
    (function() {
      var NodeType, XMLCharacterData, XMLProcessingInstruction;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module.exports = XMLProcessingInstruction = class XMLProcessingInstruction extends XMLCharacterData {
        // Initializes a new instance of `XMLProcessingInstruction`
        // `parent` the parent node
        // `target` instruction target
        // `value` instruction value
        constructor(parent, target, value) {
          super(parent);
          if (target == null) {
            throw new Error("Missing instruction target. " + this.debugInfo());
          }
          this.type = NodeType.ProcessingInstruction;
          this.target = this.stringify.insTarget(target);
          this.name = this.target;
          if (value) {
            this.value = this.stringify.insValue(value);
          }
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
        }
        isEqualNode(node) {
          if (!super.isEqualNode(node)) {
            return false;
          }
          if (node.target !== this.target) {
            return false;
          }
          return true;
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDummy.js
var require_XMLDummy = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDummy.js"(exports, module) {
    (function() {
      var NodeType, XMLDummy, XMLNode;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module.exports = XMLDummy = class XMLDummy extends XMLNode {
        // Initializes a new instance of `XMLDummy`
        // `XMLDummy` is a special node representing a node with 
        // a null value. Dummy nodes are created while recursively
        // building the XML tree. Simply skipping null values doesn't
        // work because that would break the recursive chain.
        constructor(parent) {
          super(parent);
          this.type = NodeType.Dummy;
        }
        // Creates and returns a deep clone of `this`
        clone() {
          return Object.create(this);
        }
        // Converts the XML fragment to string
        // `options.pretty` pretty prints the result
        // `options.indent` indentation for pretty print
        // `options.offset` how many indentations to add to every line for pretty print
        // `options.newline` newline sequence for pretty print
        toString(options) {
          return "";
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNodeList.js
var require_XMLNodeList = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNodeList.js"(exports, module) {
    (function() {
      var XMLNodeList;
      module.exports = XMLNodeList = (function() {
        class XMLNodeList2 {
          // Initializes a new instance of `XMLNodeList`
          // This is just a wrapper around an ordinary
          // JS array.
          // `nodes` the array containing nodes.
          constructor(nodes) {
            this.nodes = nodes;
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return this.nodes = null;
          }
          // DOM Level 1
          item(index) {
            return this.nodes[index] || null;
          }
        }
        ;
        Object.defineProperty(XMLNodeList2.prototype, "length", {
          get: function() {
            return this.nodes.length || 0;
          }
        });
        return XMLNodeList2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/DocumentPosition.js
var require_DocumentPosition = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/DocumentPosition.js"(exports, module) {
    (function() {
      module.exports = {
        Disconnected: 1,
        Preceding: 2,
        Following: 4,
        Contains: 8,
        ContainedBy: 16,
        ImplementationSpecific: 32
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLNode.js"(exports, module) {
    (function() {
      var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, hasProp = {}.hasOwnProperty, splice = [].splice;
      ({ isObject, isFunction, isEmpty, getValue } = require_Utility());
      XMLElement = null;
      XMLCData = null;
      XMLComment = null;
      XMLDeclaration = null;
      XMLDocType = null;
      XMLRaw = null;
      XMLText = null;
      XMLProcessingInstruction = null;
      XMLDummy = null;
      NodeType = null;
      XMLNodeList = null;
      XMLNamedNodeMap = null;
      DocumentPosition = null;
      module.exports = XMLNode = (function() {
        class XMLNode2 {
          // Initializes a new instance of `XMLNode`
          // `parent` the parent node
          constructor(parent1) {
            this.parent = parent1;
            if (this.parent) {
              this.options = this.parent.options;
              this.stringify = this.parent.stringify;
            }
            this.value = null;
            this.children = [];
            this.baseURI = null;
            if (!XMLElement) {
              XMLElement = require_XMLElement();
              XMLCData = require_XMLCData();
              XMLComment = require_XMLComment();
              XMLDeclaration = require_XMLDeclaration();
              XMLDocType = require_XMLDocType();
              XMLRaw = require_XMLRaw();
              XMLText = require_XMLText();
              XMLProcessingInstruction = require_XMLProcessingInstruction();
              XMLDummy = require_XMLDummy();
              NodeType = require_NodeType();
              XMLNodeList = require_XMLNodeList();
              XMLNamedNodeMap = require_XMLNamedNodeMap();
              DocumentPosition = require_DocumentPosition();
            }
          }
          // Sets the parent node of this node and its children recursively
          // `parent` the parent node
          setParent(parent) {
            var child, j, len, ref1, results;
            this.parent = parent;
            if (parent) {
              this.options = parent.options;
              this.stringify = parent.stringify;
            }
            ref1 = this.children;
            results = [];
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              results.push(child.setParent(this));
            }
            return results;
          }
          // Creates a child element node
          // `name` node name or an object describing the XML tree
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          element(name, attributes, text) {
            var childNode, item, j, k, key, lastChild, len, len1, val;
            lastChild = null;
            if (attributes === null && text == null) {
              [attributes, text] = [{}, null];
            }
            if (attributes == null) {
              attributes = {};
            }
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
              [text, attributes] = [attributes, text];
            }
            if (name != null) {
              name = getValue(name);
            }
            if (Array.isArray(name)) {
              for (j = 0, len = name.length; j < len; j++) {
                item = name[j];
                lastChild = this.element(item);
              }
            } else if (isFunction(name)) {
              lastChild = this.element(name.apply());
            } else if (isObject(name)) {
              for (key in name) {
                if (!hasProp.call(name, key)) continue;
                val = name[key];
                if (isFunction(val)) {
                  val = val.apply();
                }
                if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                  lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
                } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                  lastChild = this.dummy();
                } else if (isObject(val) && isEmpty(val)) {
                  lastChild = this.element(key);
                } else if (!this.options.keepNullNodes && val == null) {
                  lastChild = this.dummy();
                } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                  for (k = 0, len1 = val.length; k < len1; k++) {
                    item = val[k];
                    childNode = {};
                    childNode[key] = item;
                    lastChild = this.element(childNode);
                  }
                } else if (isObject(val)) {
                  if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                    lastChild = this.element(val);
                  } else {
                    lastChild = this.element(key);
                    lastChild.element(val);
                  }
                } else {
                  lastChild = this.element(key, val);
                }
              }
            } else if (!this.options.keepNullNodes && text === null) {
              lastChild = this.dummy();
            } else {
              if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
                lastChild = this.text(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
                lastChild = this.cdata(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
                lastChild = this.comment(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
                lastChild = this.raw(text);
              } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
                lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
              } else {
                lastChild = this.node(name, attributes, text);
              }
            }
            if (lastChild == null) {
              throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
            }
            return lastChild;
          }
          // Creates a child element node before the current node
          // `name` node name or an object describing the XML tree
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          insertBefore(name, attributes, text) {
            var child, i, newChild, refChild, removed;
            if (name != null ? name.type : void 0) {
              newChild = name;
              refChild = attributes;
              newChild.setParent(this);
              if (refChild) {
                i = children.indexOf(refChild);
                removed = children.splice(i);
                children.push(newChild);
                Array.prototype.push.apply(children, removed);
              } else {
                children.push(newChild);
              }
              return newChild;
            } else {
              if (this.isRoot) {
                throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
              }
              i = this.parent.children.indexOf(this);
              removed = this.parent.children.splice(i);
              child = this.parent.element(name, attributes, text);
              Array.prototype.push.apply(this.parent.children, removed);
              return child;
            }
          }
          // Creates a child element node after the current node
          // `name` node name or an object describing the XML tree
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          insertAfter(name, attributes, text) {
            var child, i, removed;
            if (this.isRoot) {
              throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
          }
          // Deletes a child element node
          remove() {
            var i, ref1;
            if (this.isRoot) {
              throw new Error("Cannot remove the root element. " + this.debugInfo());
            }
            i = this.parent.children.indexOf(this);
            splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
            return this.parent;
          }
          // Creates a node
          // `name` name of the node
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          node(name, attributes, text) {
            var child;
            if (name != null) {
              name = getValue(name);
            }
            attributes || (attributes = {});
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
              [text, attributes] = [attributes, text];
            }
            child = new XMLElement(this, name, attributes);
            if (text != null) {
              child.text(text);
            }
            this.children.push(child);
            return child;
          }
          // Creates a text node
          // `value` element text
          text(value) {
            var child;
            if (isObject(value)) {
              this.element(value);
            }
            child = new XMLText(this, value);
            this.children.push(child);
            return this;
          }
          // Creates a CDATA node
          // `value` element text without CDATA delimiters
          cdata(value) {
            var child;
            child = new XMLCData(this, value);
            this.children.push(child);
            return this;
          }
          // Creates a comment node
          // `value` comment text
          comment(value) {
            var child;
            child = new XMLComment(this, value);
            this.children.push(child);
            return this;
          }
          // Creates a comment node before the current node
          // `value` comment text
          commentBefore(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Creates a comment node after the current node
          // `value` comment text
          commentAfter(value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.comment(value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Adds unescaped raw text
          // `value` text
          raw(value) {
            var child;
            child = new XMLRaw(this, value);
            this.children.push(child);
            return this;
          }
          // Adds a dummy node
          dummy() {
            var child;
            child = new XMLDummy(this);
            return child;
          }
          // Adds a processing instruction
          // `target` instruction target
          // `value` instruction value
          instruction(target, value) {
            var insTarget, insValue, instruction, j, len;
            if (target != null) {
              target = getValue(target);
            }
            if (value != null) {
              value = getValue(value);
            }
            if (Array.isArray(target)) {
              for (j = 0, len = target.length; j < len; j++) {
                insTarget = target[j];
                this.instruction(insTarget);
              }
            } else if (isObject(target)) {
              for (insTarget in target) {
                if (!hasProp.call(target, insTarget)) continue;
                insValue = target[insTarget];
                this.instruction(insTarget, insValue);
              }
            } else {
              if (isFunction(value)) {
                value = value.apply();
              }
              instruction = new XMLProcessingInstruction(this, target, value);
              this.children.push(instruction);
            }
            return this;
          }
          // Creates a processing instruction node before the current node
          // `target` instruction target
          // `value` instruction value
          instructionBefore(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Creates a processing instruction node after the current node
          // `target` instruction target
          // `value` instruction value
          instructionAfter(target, value) {
            var child, i, removed;
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i + 1);
            child = this.parent.instruction(target, value);
            Array.prototype.push.apply(this.parent.children, removed);
            return this;
          }
          // Creates the xml declaration
          // `version` A version number string, e.g. 1.0
          // `encoding` Encoding declaration, e.g. UTF-8
          // `standalone` standalone document declaration: true or false
          declaration(version, encoding, standalone) {
            var doc, xmldec;
            doc = this.document();
            xmldec = new XMLDeclaration(doc, version, encoding, standalone);
            if (doc.children.length === 0) {
              doc.children.unshift(xmldec);
            } else if (doc.children[0].type === NodeType.Declaration) {
              doc.children[0] = xmldec;
            } else {
              doc.children.unshift(xmldec);
            }
            return doc.root() || doc;
          }
          // Creates the document type declaration
          // `pubID` the public identifier of the external subset
          // `sysID` the system identifier of the external subset
          dtd(pubID, sysID) {
            var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
            doc = this.document();
            doctype = new XMLDocType(doc, pubID, sysID);
            ref1 = doc.children;
            for (i = j = 0, len = ref1.length; j < len; i = ++j) {
              child = ref1[i];
              if (child.type === NodeType.DocType) {
                doc.children[i] = doctype;
                return doctype;
              }
            }
            ref2 = doc.children;
            for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
              child = ref2[i];
              if (child.isRoot) {
                doc.children.splice(i, 0, doctype);
                return doctype;
              }
            }
            doc.children.push(doctype);
            return doctype;
          }
          // Gets the parent node
          up() {
            if (this.isRoot) {
              throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
            }
            return this.parent;
          }
          // Gets the root node
          root() {
            var node;
            node = this;
            while (node) {
              if (node.type === NodeType.Document) {
                return node.rootObject;
              } else if (node.isRoot) {
                return node;
              } else {
                node = node.parent;
              }
            }
          }
          // Gets the node representing the XML document
          document() {
            var node;
            node = this;
            while (node) {
              if (node.type === NodeType.Document) {
                return node;
              } else {
                node = node.parent;
              }
            }
          }
          // Ends the document and converts string
          end(options) {
            return this.document().end(options);
          }
          // Gets the previous node
          prev() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i < 1) {
              throw new Error("Already at the first node. " + this.debugInfo());
            }
            return this.parent.children[i - 1];
          }
          // Gets the next node
          next() {
            var i;
            i = this.parent.children.indexOf(this);
            if (i === -1 || i === this.parent.children.length - 1) {
              throw new Error("Already at the last node. " + this.debugInfo());
            }
            return this.parent.children[i + 1];
          }
          // Imports cloned root from another XML document
          // `doc` the XML document to insert nodes from
          importDocument(doc) {
            var child, clonedRoot, j, len, ref1;
            clonedRoot = doc.root().clone();
            clonedRoot.parent = this;
            clonedRoot.isRoot = false;
            this.children.push(clonedRoot);
            if (this.type === NodeType.Document) {
              clonedRoot.isRoot = true;
              clonedRoot.documentObject = this;
              this.rootObject = clonedRoot;
              if (this.children) {
                ref1 = this.children;
                for (j = 0, len = ref1.length; j < len; j++) {
                  child = ref1[j];
                  if (child.type === NodeType.DocType) {
                    child.name = clonedRoot.name;
                    break;
                  }
                }
              }
            }
            return this;
          }
          // Returns debug string for this node
          debugInfo(name) {
            var ref1, ref2;
            name = name || this.name;
            if (name == null && !((ref1 = this.parent) != null ? ref1.name : void 0)) {
              return "";
            } else if (name == null) {
              return "parent: <" + this.parent.name + ">";
            } else if (!((ref2 = this.parent) != null ? ref2.name : void 0)) {
              return "node: <" + name + ">";
            } else {
              return "node: <" + name + ">, parent: <" + this.parent.name + ">";
            }
          }
          // Aliases
          ele(name, attributes, text) {
            return this.element(name, attributes, text);
          }
          nod(name, attributes, text) {
            return this.node(name, attributes, text);
          }
          txt(value) {
            return this.text(value);
          }
          dat(value) {
            return this.cdata(value);
          }
          com(value) {
            return this.comment(value);
          }
          ins(target, value) {
            return this.instruction(target, value);
          }
          doc() {
            return this.document();
          }
          dec(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
          }
          e(name, attributes, text) {
            return this.element(name, attributes, text);
          }
          n(name, attributes, text) {
            return this.node(name, attributes, text);
          }
          t(value) {
            return this.text(value);
          }
          d(value) {
            return this.cdata(value);
          }
          c(value) {
            return this.comment(value);
          }
          r(value) {
            return this.raw(value);
          }
          i(target, value) {
            return this.instruction(target, value);
          }
          u() {
            return this.up();
          }
          // can be deprecated in a future release
          importXMLBuilder(doc) {
            return this.importDocument(doc);
          }
          // Adds or modifies an attribute.
          // `name` attribute name
          // `value` attribute value
          attribute(name, value) {
            throw new Error("attribute() applies to element nodes only.");
          }
          att(name, value) {
            return this.attribute(name, value);
          }
          a(name, value) {
            return this.attribute(name, value);
          }
          // Removes an attribute
          // `name` attribute name
          removeAttribute(name) {
            throw new Error("attribute() applies to element nodes only.");
          }
          // DOM level 1 functions to be implemented later
          replaceChild(newChild, oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          removeChild(oldChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          appendChild(newChild) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          hasChildNodes() {
            return this.children.length !== 0;
          }
          cloneNode(deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          normalize() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 2
          isSupported(feature, version) {
            return true;
          }
          hasAttributes() {
            return this.attribs.length !== 0;
          }
          // DOM level 3 functions to be implemented later
          compareDocumentPosition(other) {
            var ref, res;
            ref = this;
            if (ref === other) {
              return 0;
            } else if (this.document() !== other.document()) {
              res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
              if (Math.random() < 0.5) {
                res |= DocumentPosition.Preceding;
              } else {
                res |= DocumentPosition.Following;
              }
              return res;
            } else if (ref.isAncestor(other)) {
              return DocumentPosition.Contains | DocumentPosition.Preceding;
            } else if (ref.isDescendant(other)) {
              return DocumentPosition.Contains | DocumentPosition.Following;
            } else if (ref.isPreceding(other)) {
              return DocumentPosition.Preceding;
            } else {
              return DocumentPosition.Following;
            }
          }
          isSameNode(other) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          lookupPrefix(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isDefaultNamespace(namespaceURI) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          lookupNamespaceURI(prefix) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          isEqualNode(node) {
            var i, j, ref1;
            if (node.nodeType !== this.nodeType) {
              return false;
            }
            if (node.children.length !== this.children.length) {
              return false;
            }
            for (i = j = 0, ref1 = this.children.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
              if (!this.children[i].isEqualNode(node.children[i])) {
                return false;
              }
            }
            return true;
          }
          getFeature(feature, version) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          setUserData(key, data, handler) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getUserData(key) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // Returns true if other is an inclusive descendant of node,
          // and false otherwise.
          contains(other) {
            if (!other) {
              return false;
            }
            return other === this || this.isDescendant(other);
          }
          // An object A is called a descendant of an object B, if either A is 
          // a child of B or A is a child of an object C that is a descendant of B.
          isDescendant(node) {
            var child, isDescendantChild, j, len, ref1;
            ref1 = this.children;
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              if (node === child) {
                return true;
              }
              isDescendantChild = child.isDescendant(node);
              if (isDescendantChild) {
                return true;
              }
            }
            return false;
          }
          // An object A is called an ancestor of an object B if and only if
          // B is a descendant of A.
          isAncestor(node) {
            return node.isDescendant(this);
          }
          // An object A is preceding an object B if A and B are in the 
          // same tree and A comes before B in tree order.
          isPreceding(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) {
              return false;
            } else {
              return nodePos < thisPos;
            }
          }
          // An object A is folllowing an object B if A and B are in the 
          // same tree and A comes after B in tree order.
          isFollowing(node) {
            var nodePos, thisPos;
            nodePos = this.treePosition(node);
            thisPos = this.treePosition(this);
            if (nodePos === -1 || thisPos === -1) {
              return false;
            } else {
              return nodePos > thisPos;
            }
          }
          // Returns the preorder position of the given node in the tree, or -1
          // if the node is not in the tree.
          treePosition(node) {
            var found, pos;
            pos = 0;
            found = false;
            this.foreachTreeNode(this.document(), function(childNode) {
              pos++;
              if (!found && childNode === node) {
                return found = true;
              }
            });
            if (found) {
              return pos;
            } else {
              return -1;
            }
          }
          // Depth-first preorder traversal through the XML tree
          foreachTreeNode(node, func) {
            var child, j, len, ref1, res;
            node || (node = this.document());
            ref1 = node.children;
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              if (res = func(child)) {
                return res;
              } else {
                res = this.foreachTreeNode(child, func);
                if (res) {
                  return res;
                }
              }
            }
          }
        }
        ;
        Object.defineProperty(XMLNode2.prototype, "nodeName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeValue", {
          get: function() {
            return this.value;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "parentNode", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "childNodes", {
          get: function() {
            if (!this.childNodeList || !this.childNodeList.nodes) {
              this.childNodeList = new XMLNodeList(this.children);
            }
            return this.childNodeList;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "firstChild", {
          get: function() {
            return this.children[0] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "lastChild", {
          get: function() {
            return this.children[this.children.length - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "previousSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nextSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i + 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
          get: function() {
            return this.document() || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "textContent", {
          get: function() {
            var child, j, len, ref1, str;
            if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
              str = "";
              ref1 = this.children;
              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];
                if (child.textContent) {
                  str += child.textContent;
                }
              }
              return str;
            } else {
              return null;
            }
          },
          set: function(value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        return XMLNode2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringifier.js"(exports, module) {
    (function() {
      var XMLStringifier, hasProp = {}.hasOwnProperty;
      module.exports = XMLStringifier = (function() {
        class XMLStringifier2 {
          // Initializes a new instance of `XMLStringifier`
          // `options.version` The version number string of the XML spec to validate against, e.g. 1.0
          // `options.noDoubleEncoding` whether existing html entities are encoded: true or false
          // `options.stringify` a set of functions to use for converting values to strings
          // `options.noValidation` whether values will be validated and escaped or returned as is
          // `options.invalidCharReplacement` a character to replace invalid characters and disable character validation
          constructor(options) {
            var key, ref, value;
            this.assertLegalChar = this.assertLegalChar.bind(this);
            this.assertLegalName = this.assertLegalName.bind(this);
            options || (options = {});
            this.options = options;
            if (!this.options.version) {
              this.options.version = "1.0";
            }
            ref = options.stringify || {};
            for (key in ref) {
              if (!hasProp.call(ref, key)) continue;
              value = ref[key];
              this[key] = value;
            }
          }
          // Defaults
          name(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalName("" + val || "");
          }
          text(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar(this.textEscape("" + val || ""));
          }
          cdata(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            val = val.replace("]]>", "]]]]><![CDATA[>");
            return this.assertLegalChar(val);
          }
          comment(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (val.match(/--/)) {
              throw new Error("Comment text cannot contain double-hypen: " + val);
            }
            return this.assertLegalChar(val);
          }
          raw(val) {
            if (this.options.noValidation) {
              return val;
            }
            return "" + val || "";
          }
          attValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar(this.attEscape(val = "" + val || ""));
          }
          insTarget(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          insValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (val.match(/\?>/)) {
              throw new Error("Invalid processing instruction value: " + val);
            }
            return this.assertLegalChar(val);
          }
          xmlVersion(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (!val.match(/1\.[0-9]+/)) {
              throw new Error("Invalid version number: " + val);
            }
            return val;
          }
          xmlEncoding(val) {
            if (this.options.noValidation) {
              return val;
            }
            val = "" + val || "";
            if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
              throw new Error("Invalid encoding: " + val);
            }
            return this.assertLegalChar(val);
          }
          xmlStandalone(val) {
            if (this.options.noValidation) {
              return val;
            }
            if (val) {
              return "yes";
            } else {
              return "no";
            }
          }
          dtdPubID(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdSysID(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdElementValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdAttType(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdAttDefault(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdEntityValue(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          dtdNData(val) {
            if (this.options.noValidation) {
              return val;
            }
            return this.assertLegalChar("" + val || "");
          }
          assertLegalChar(str) {
            var regex, res;
            if (this.options.noValidation) {
              return str;
            }
            if (this.options.version === "1.0") {
              regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
              if (this.options.invalidCharReplacement !== void 0) {
                str = str.replace(regex, this.options.invalidCharReplacement);
              } else if (res = str.match(regex)) {
                throw new Error(`Invalid character in string: ${str} at index ${res.index}`);
              }
            } else if (this.options.version === "1.1") {
              regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
              if (this.options.invalidCharReplacement !== void 0) {
                str = str.replace(regex, this.options.invalidCharReplacement);
              } else if (res = str.match(regex)) {
                throw new Error(`Invalid character in string: ${str} at index ${res.index}`);
              }
            }
            return str;
          }
          assertLegalName(str) {
            var regex;
            if (this.options.noValidation) {
              return str;
            }
            str = this.assertLegalChar(str);
            regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
            if (!str.match(regex)) {
              throw new Error(`Invalid character in name: ${str}`);
            }
            return str;
          }
          // Escapes special characters in text
          // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
          // `str` the string to escape
          textEscape(str) {
            var ampregex;
            if (this.options.noValidation) {
              return str;
            }
            ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
            return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
          }
          // Escapes special characters in attribute values
          // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
          // `str` the string to escape
          attEscape(str) {
            var ampregex;
            if (this.options.noValidation) {
              return str;
            }
            ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
            return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
          }
        }
        ;
        XMLStringifier2.prototype.convertAttKey = "@";
        XMLStringifier2.prototype.convertPIKey = "?";
        XMLStringifier2.prototype.convertTextKey = "#text";
        XMLStringifier2.prototype.convertCDataKey = "#cdata";
        XMLStringifier2.prototype.convertCommentKey = "#comment";
        XMLStringifier2.prototype.convertRawKey = "#raw";
        return XMLStringifier2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/WriterState.js
var require_WriterState = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/WriterState.js"(exports, module) {
    (function() {
      module.exports = {
        None: 0,
        OpenTag: 1,
        InsideTag: 2,
        CloseTag: 3
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLWriterBase.js"(exports, module) {
    (function() {
      var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
      ({ assign } = require_Utility());
      NodeType = require_NodeType();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLElement = require_XMLElement();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDummy = require_XMLDummy();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDNotation = require_XMLDTDNotation();
      WriterState = require_WriterState();
      module.exports = XMLWriterBase = class XMLWriterBase {
        // Initializes a new instance of `XMLWriterBase`
        // `options.pretty` pretty prints the result
        // `options.indent` indentation string
        // `options.newline` newline sequence
        // `options.offset` a fixed number of indentations to add to every line
        // `options.width` maximum column width
        // `options.allowEmpty` do not self close empty element tags
        // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
        // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
        constructor(options) {
          var key, ref, value;
          options || (options = {});
          this.options = options;
          ref = options.writer || {};
          for (key in ref) {
            if (!hasProp.call(ref, key)) continue;
            value = ref[key];
            this["_" + key] = this[key];
            this[key] = value;
          }
        }
        // Filters writer options and provides defaults
        // `options` writer options
        filterOptions(options) {
          var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
          options || (options = {});
          options = assign({}, this.options, options);
          filteredOptions = {
            writer: this
          };
          filteredOptions.pretty = options.pretty || false;
          filteredOptions.allowEmpty = options.allowEmpty || false;
          filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
          filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
          filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
          filteredOptions.width = (ref3 = options.width) != null ? ref3 : 0;
          filteredOptions.dontPrettyTextNodes = (ref4 = (ref5 = options.dontPrettyTextNodes) != null ? ref5 : options.dontprettytextnodes) != null ? ref4 : 0;
          filteredOptions.spaceBeforeSlash = (ref6 = (ref7 = options.spaceBeforeSlash) != null ? ref7 : options.spacebeforeslash) != null ? ref6 : "";
          if (filteredOptions.spaceBeforeSlash === true) {
            filteredOptions.spaceBeforeSlash = " ";
          }
          filteredOptions.suppressPrettyCount = 0;
          filteredOptions.user = {};
          filteredOptions.state = WriterState.None;
          return filteredOptions;
        }
        // Returns the indentation string for the current level
        // `node` current node
        // `options` writer options
        // `level` current indentation level
        indent(node, options, level) {
          var indentLevel;
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else if (options.pretty) {
            indentLevel = (level || 0) + options.offset + 1;
            if (indentLevel > 0) {
              return new Array(indentLevel).join(options.indent);
            }
          }
          return "";
        }
        // Returns the newline string
        // `node` current node
        // `options` writer options
        // `level` current indentation level
        endline(node, options, level) {
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else {
            return options.newline;
          }
        }
        attribute(att, options, level) {
          var r;
          this.openAttribute(att, options, level);
          if (options.pretty && options.width > 0) {
            r = att.name + '="' + att.value + '"';
          } else {
            r = " " + att.name + '="' + att.value + '"';
          }
          this.closeAttribute(att, options, level);
          return r;
        }
        cdata(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<![CDATA[";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += "]]>" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        comment(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!-- ";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += " -->" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        declaration(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?xml";
          options.state = WriterState.InsideTag;
          r += ' version="' + node.version + '"';
          if (node.encoding != null) {
            r += ' encoding="' + node.encoding + '"';
          }
          if (node.standalone != null) {
            r += ' standalone="' + node.standalone + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        docType(node, options, level) {
          var child, i, len1, r, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          r += "<!DOCTYPE " + node.root().name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.children.length > 0) {
            r += " [";
            r += this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (i = 0, len1 = ref.length; i < len1; i++) {
              child = ref[i];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += "]";
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        element(node, options, level) {
          var att, attLen, child, childNodeCount, firstChildNode, i, j, len, len1, len2, name, prettySuppressed, r, ratt, ref, ref1, ref2, ref3, rline;
          level || (level = 0);
          prettySuppressed = false;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<" + node.name;
          if (options.pretty && options.width > 0) {
            len = r.length;
            ref = node.attribs;
            for (name in ref) {
              if (!hasProp.call(ref, name)) continue;
              att = ref[name];
              ratt = this.attribute(att, options, level);
              attLen = ratt.length;
              if (len + attLen > options.width) {
                rline = this.indent(node, options, level + 1) + ratt;
                r += this.endline(node, options, level) + rline;
                len = rline.length;
              } else {
                rline = " " + ratt;
                r += rline;
                len += rline.length;
              }
            }
          } else {
            ref1 = node.attribs;
            for (name in ref1) {
              if (!hasProp.call(ref1, name)) continue;
              att = ref1[name];
              r += this.attribute(att, options, level);
            }
          }
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
          })) {
            if (options.allowEmpty) {
              r += ">";
              options.state = WriterState.CloseTag;
              r += "</" + node.name + ">" + this.endline(node, options, level);
            } else {
              options.state = WriterState.CloseTag;
              r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
            r += ">";
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            r += this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            r += "</" + node.name + ">" + this.endline(node, options, level);
          } else {
            if (options.dontPrettyTextNodes) {
              ref2 = node.children;
              for (i = 0, len1 = ref2.length; i < len1; i++) {
                child = ref2[i];
                if ((child.type === NodeType.Text || child.type === NodeType.Raw || child.type === NodeType.CData) && child.value != null) {
                  options.suppressPrettyCount++;
                  prettySuppressed = true;
                  break;
                }
              }
            }
            r += ">" + this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref3 = node.children;
            for (j = 0, len2 = ref3.length; j < len2; j++) {
              child = ref3[j];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += this.indent(node, options, level) + "</" + node.name + ">";
            if (prettySuppressed) {
              options.suppressPrettyCount--;
            }
            r += this.endline(node, options, level);
            options.state = WriterState.None;
          }
          this.closeNode(node, options, level);
          return r;
        }
        writeChildNode(node, options, level) {
          switch (node.type) {
            case NodeType.CData:
              return this.cdata(node, options, level);
            case NodeType.Comment:
              return this.comment(node, options, level);
            case NodeType.Element:
              return this.element(node, options, level);
            case NodeType.Raw:
              return this.raw(node, options, level);
            case NodeType.Text:
              return this.text(node, options, level);
            case NodeType.ProcessingInstruction:
              return this.processingInstruction(node, options, level);
            case NodeType.Dummy:
              return "";
            case NodeType.Declaration:
              return this.declaration(node, options, level);
            case NodeType.DocType:
              return this.docType(node, options, level);
            case NodeType.AttributeDeclaration:
              return this.dtdAttList(node, options, level);
            case NodeType.ElementDeclaration:
              return this.dtdElement(node, options, level);
            case NodeType.EntityDeclaration:
              return this.dtdEntity(node, options, level);
            case NodeType.NotationDeclaration:
              return this.dtdNotation(node, options, level);
            default:
              throw new Error("Unknown XML node type: " + node.constructor.name);
          }
        }
        processingInstruction(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?";
          options.state = WriterState.InsideTag;
          r += node.target;
          if (node.value) {
            r += " " + node.value;
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        raw(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        text(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdAttList(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ATTLIST";
          options.state = WriterState.InsideTag;
          r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
          if (node.defaultValueType !== "#DEFAULT") {
            r += " " + node.defaultValueType;
          }
          if (node.defaultValue) {
            r += ' "' + node.defaultValue + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdElement(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ELEMENT";
          options.state = WriterState.InsideTag;
          r += " " + node.name + " " + node.value;
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdEntity(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ENTITY";
          options.state = WriterState.InsideTag;
          if (node.pe) {
            r += " %";
          }
          r += " " + node.name;
          if (node.value) {
            r += ' "' + node.value + '"';
          } else {
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.nData) {
              r += " NDATA " + node.nData;
            }
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        dtdNotation(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!NOTATION";
          options.state = WriterState.InsideTag;
          r += " " + node.name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.pubID) {
            r += ' PUBLIC "' + node.pubID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        }
        openNode(node, options, level) {
        }
        closeNode(node, options, level) {
        }
        openAttribute(att, options, level) {
        }
        closeAttribute(att, options, level) {
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStringWriter.js"(exports, module) {
    (function() {
      var XMLStringWriter, XMLWriterBase;
      XMLWriterBase = require_XMLWriterBase();
      module.exports = XMLStringWriter = class XMLStringWriter extends XMLWriterBase {
        // Initializes a new instance of `XMLStringWriter`
        // `options.pretty` pretty prints the result
        // `options.indent` indentation string
        // `options.newline` newline sequence
        // `options.offset` a fixed number of indentations to add to every line
        // `options.allowEmpty` do not self close empty element tags
        // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
        // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
        constructor(options) {
          super(options);
        }
        document(doc, options) {
          var child, i, len, r, ref;
          options = this.filterOptions(options);
          r = "";
          ref = doc.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, 0);
          }
          if (options.pretty && r.slice(-options.newline.length) === options.newline) {
            r = r.slice(0, -options.newline.length);
          }
          return r;
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocument.js"(exports, module) {
    (function() {
      var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject;
      ({ isPlainObject } = require_Utility());
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDOMConfiguration = require_XMLDOMConfiguration();
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      module.exports = XMLDocument = (function() {
        class XMLDocument2 extends XMLNode {
          // Initializes a new instance of `XMLDocument`
          // `options.keepNullNodes` whether nodes with null values will be kept
          //     or ignored: true or false
          // `options.keepNullAttributes` whether attributes with null values will be
          //     kept or ignored: true or false
          // `options.ignoreDecorators` whether decorator strings will be ignored when
          //     converting JS objects: true or false
          // `options.separateArrayItems` whether array items are created as separate
          //     nodes when passed as an object value: true or false
          // `options.noDoubleEncoding` whether existing html entities are encoded:
          //     true or false
          // `options.stringify` a set of functions to use for converting values to
          //     strings
          // `options.writer` the default XML writer to use for converting nodes to
          //     string. If the default writer is not set, the built-in XMLStringWriter
          //     will be used instead.
          constructor(options) {
            super(null);
            this.name = "#document";
            this.type = NodeType.Document;
            this.documentURI = null;
            this.domConfig = new XMLDOMConfiguration();
            options || (options = {});
            if (!options.writer) {
              options.writer = new XMLStringWriter();
            }
            this.options = options;
            this.stringify = new XMLStringifier(options);
          }
          // Ends the document and passes it to the given XML writer
          // `writer` is either an XML writer or a plain object to pass to the
          // constructor of the default XML writer. The default writer is assigned when
          // creating the XML document. Following flags are recognized by the
          // built-in XMLStringWriter:
          //   `writer.pretty` pretty prints the result
          //   `writer.indent` indentation for pretty print
          //   `writer.offset` how many indentations to add to every line for pretty print
          //   `writer.newline` newline sequence for pretty print
          end(writer) {
            var writerOptions;
            writerOptions = {};
            if (!writer) {
              writer = this.options.writer;
            } else if (isPlainObject(writer)) {
              writerOptions = writer;
              writer = this.options.writer;
            }
            return writer.document(this, writer.filterOptions(writerOptions));
          }
          // Converts the XML document to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.document(this, this.options.writer.filterOptions(options));
          }
          // DOM level 1 functions to be implemented later
          createElement(tagName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createDocumentFragment() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createTextNode(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createComment(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createCDATASection(data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createProcessingInstruction(target, data) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createAttribute(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createEntityReference(name) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagName(tagname) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 2 functions to be implemented later
          importNode(importedNode, deep) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createElementNS(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createAttributeNS(namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementsByTagNameNS(namespaceURI, localName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          getElementById(elementId) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 3 functions to be implemented later
          adoptNode(source) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          normalizeDocument() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          renameNode(node, namespaceURI, qualifiedName) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          // DOM level 4 functions to be implemented later
          getElementsByClassName(classNames) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createEvent(eventInterface) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createRange() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createNodeIterator(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
          createTreeWalker(root, whatToShow, filter) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        }
        ;
        Object.defineProperty(XMLDocument2.prototype, "implementation", {
          value: new XMLDOMImplementation()
        });
        Object.defineProperty(XMLDocument2.prototype, "doctype", {
          get: function() {
            var child, i, len, ref;
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.DocType) {
                return child;
              }
            }
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "documentElement", {
          get: function() {
            return this.rootObject || null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
          get: function() {
            return false;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].encoding;
            } else {
              return null;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].standalone === "yes";
            } else {
              return false;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].version;
            } else {
              return "1.0";
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "URL", {
          get: function() {
            return this.documentURI;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "origin", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "compatMode", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "characterSet", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "contentType", {
          get: function() {
            return null;
          }
        });
        return XMLDocument2;
      }).call(this);
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLDocumentCB.js"(exports, module) {
    (function() {
      var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
      ({ isObject, isFunction, isPlainObject, getValue } = require_Utility());
      NodeType = require_NodeType();
      XMLDocument = require_XMLDocument();
      XMLElement = require_XMLElement();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLAttribute = require_XMLAttribute();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      WriterState = require_WriterState();
      module.exports = XMLDocumentCB = class XMLDocumentCB {
        // Initializes a new instance of `XMLDocumentCB`
        // `options.keepNullNodes` whether nodes with null values will be kept
        //     or ignored: true or false
        // `options.keepNullAttributes` whether attributes with null values will be
        //     kept or ignored: true or false
        // `options.ignoreDecorators` whether decorator strings will be ignored when
        //     converting JS objects: true or false
        // `options.separateArrayItems` whether array items are created as separate
        //     nodes when passed as an object value: true or false
        // `options.noDoubleEncoding` whether existing html entities are encoded:
        //     true or false
        // `options.stringify` a set of functions to use for converting values to
        //     strings
        // `options.writer` the default XML writer to use for converting nodes to
        //     string. If the default writer is not set, the built-in XMLStringWriter
        //     will be used instead.
        // `onData` the function to be called when a new chunk of XML is output. The
        //          string containing the XML chunk is passed to `onData` as its first
        //          argument, and the current indentation level as its second argument.
        // `onEnd`  the function to be called when the XML document is completed with
        //          `end`. `onEnd` does not receive any arguments.
        constructor(options, onData, onEnd) {
          var writerOptions;
          this.name = "?xml";
          this.type = NodeType.Document;
          options || (options = {});
          writerOptions = {};
          if (!options.writer) {
            options.writer = new XMLStringWriter();
          } else if (isPlainObject(options.writer)) {
            writerOptions = options.writer;
            options.writer = new XMLStringWriter();
          }
          this.options = options;
          this.writer = options.writer;
          this.writerOptions = this.writer.filterOptions(writerOptions);
          this.stringify = new XMLStringifier(options);
          this.onDataCallback = onData || function() {
          };
          this.onEndCallback = onEnd || function() {
          };
          this.currentNode = null;
          this.currentLevel = -1;
          this.openTags = {};
          this.documentStarted = false;
          this.documentCompleted = false;
          this.root = null;
        }
        // Creates a child element node from the given XMLNode
        // `node` the child node
        createChildNode(node) {
          var att, attName, attributes, child, i, len, ref, ref1;
          switch (node.type) {
            case NodeType.CData:
              this.cdata(node.value);
              break;
            case NodeType.Comment:
              this.comment(node.value);
              break;
            case NodeType.Element:
              attributes = {};
              ref = node.attribs;
              for (attName in ref) {
                if (!hasProp.call(ref, attName)) continue;
                att = ref[attName];
                attributes[attName] = att.value;
              }
              this.node(node.name, attributes);
              break;
            case NodeType.Dummy:
              this.dummy();
              break;
            case NodeType.Raw:
              this.raw(node.value);
              break;
            case NodeType.Text:
              this.text(node.value);
              break;
            case NodeType.ProcessingInstruction:
              this.instruction(node.target, node.value);
              break;
            default:
              throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
          }
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            this.createChildNode(child);
            if (child.type === NodeType.Element) {
              this.up();
            }
          }
          return this;
        }
        // Creates a dummy node
        dummy() {
          return this;
        }
        // Creates a node
        // `name` name of the node
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text
        node(name, attributes, text) {
          if (name == null) {
            throw new Error("Missing node name.");
          }
          if (this.root && this.currentLevel === -1) {
            throw new Error("Document can only have one root node. " + this.debugInfo(name));
          }
          this.openCurrent();
          name = getValue(name);
          if (attributes == null) {
            attributes = {};
          }
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            [text, attributes] = [attributes, text];
          }
          this.currentNode = new XMLElement(this, name, attributes);
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          if (text != null) {
            this.text(text);
          }
          return this;
        }
        // Creates a child element node or an element type declaration when called
        // inside the DTD
        // `name` name of the node
        // `attributes` an object containing name/value pairs of attributes
        // `text` element text
        element(name, attributes, text) {
          var child, i, len, oldValidationFlag, ref, root;
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            this.dtdElement(...arguments);
          } else {
            if (Array.isArray(name) || isObject(name) || isFunction(name)) {
              oldValidationFlag = this.options.noValidation;
              this.options.noValidation = true;
              root = new XMLDocument(this.options).element("TEMP_ROOT");
              root.element(name);
              this.options.noValidation = oldValidationFlag;
              ref = root.children;
              for (i = 0, len = ref.length; i < len; i++) {
                child = ref[i];
                this.createChildNode(child);
                if (child.type === NodeType.Element) {
                  this.up();
                }
              }
            } else {
              this.node(name, attributes, text);
            }
          }
          return this;
        }
        // Adds or modifies an attribute
        // `name` attribute name
        // `value` attribute value
        attribute(name, value) {
          var attName, attValue;
          if (!this.currentNode || this.currentNode.children) {
            throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
          }
          if (name != null) {
            name = getValue(name);
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName)) continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (this.options.keepNullAttributes && value == null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        }
        // Creates a text node
        // `value` element text
        text(value) {
          var node;
          this.openCurrent();
          node = new XMLText(this, value);
          this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a CDATA node
        // `value` element text without CDATA delimiters
        cdata(value) {
          var node;
          this.openCurrent();
          node = new XMLCData(this, value);
          this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a comment node
        // `value` comment text
        comment(value) {
          var node;
          this.openCurrent();
          node = new XMLComment(this, value);
          this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Adds unescaped raw text
        // `value` text
        raw(value) {
          var node;
          this.openCurrent();
          node = new XMLRaw(this, value);
          this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Adds a processing instruction
        // `target` instruction target
        // `value` instruction value
        instruction(target, value) {
          var i, insTarget, insValue, len, node;
          this.openCurrent();
          if (target != null) {
            target = getValue(target);
          }
          if (value != null) {
            value = getValue(value);
          }
          if (Array.isArray(target)) {
            for (i = 0, len = target.length; i < len; i++) {
              insTarget = target[i];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget)) continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            node = new XMLProcessingInstruction(this, target, value);
            this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          }
          return this;
        }
        // Creates the xml declaration
        // `version` A version number string, e.g. 1.0
        // `encoding` Encoding declaration, e.g. UTF-8
        // `standalone` standalone document declaration: true or false
        declaration(version, encoding, standalone) {
          var node;
          this.openCurrent();
          if (this.documentStarted) {
            throw new Error("declaration() must be the first node.");
          }
          node = new XMLDeclaration(this, version, encoding, standalone);
          this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates the document type declaration
        // `root`  the name of the root node
        // `pubID` the public identifier of the external subset
        // `sysID` the system identifier of the external subset
        doctype(root, pubID, sysID) {
          this.openCurrent();
          if (root == null) {
            throw new Error("Missing root node name.");
          }
          if (this.root) {
            throw new Error("dtd() must come before the root node.");
          }
          this.currentNode = new XMLDocType(this, pubID, sysID);
          this.currentNode.rootNodeName = root;
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          return this;
        }
        // Creates an element type declaration
        // `name` element name
        // `value` element content (defaults to #PCDATA)
        dtdElement(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDElement(this, name, value);
          this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates an attribute declaration
        // `elementName` the name of the element containing this attribute
        // `attributeName` attribute name
        // `attributeType` type of the attribute (defaults to CDATA)
        // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
        //                    #DEFAULT) (defaults to #IMPLIED)
        // `defaultValue` default value of the attribute
        //                (only used for #FIXED or #DEFAULT)
        attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var node;
          this.openCurrent();
          node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a general entity declaration
        // `name` the name of the entity
        // `value` internal entity value or an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier
        // `value.nData` notation declaration
        entity(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, false, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a parameter entity declaration
        // `name` the name of the entity
        // `value` internal entity value or an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier
        pEntity(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, true, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Creates a NOTATION declaration
        // `name` the name of the notation
        // `value` an object with external entity details
        // `value.pubID` public identifier
        // `value.sysID` system identifier
        notation(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDNotation(this, name, value);
          this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }
        // Gets the parent node
        up() {
          if (this.currentLevel < 0) {
            throw new Error("The document node has no parent.");
          }
          if (this.currentNode) {
            if (this.currentNode.children) {
              this.closeNode(this.currentNode);
            } else {
              this.openNode(this.currentNode);
            }
            this.currentNode = null;
          } else {
            this.closeNode(this.openTags[this.currentLevel]);
          }
          delete this.openTags[this.currentLevel];
          this.currentLevel--;
          return this;
        }
        // Ends the document
        end() {
          while (this.currentLevel >= 0) {
            this.up();
          }
          return this.onEnd();
        }
        // Opens the current parent node
        openCurrent() {
          if (this.currentNode) {
            this.currentNode.children = true;
            return this.openNode(this.currentNode);
          }
        }
        // Writes the opening tag of the current node or the entire node if it has
        // no child nodes
        openNode(node) {
          var att, chunk, name, ref;
          if (!node.isOpen) {
            if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
              this.root = node;
            }
            chunk = "";
            if (node.type === NodeType.Element) {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
              ref = node.attribs;
              for (name in ref) {
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
              }
              chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
              this.writerOptions.state = WriterState.InsideTag;
            } else {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
              if (node.pubID && node.sysID) {
                chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
              } else if (node.sysID) {
                chunk += ' SYSTEM "' + node.sysID + '"';
              }
              if (node.children) {
                chunk += " [";
                this.writerOptions.state = WriterState.InsideTag;
              } else {
                this.writerOptions.state = WriterState.CloseTag;
                chunk += ">";
              }
              chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.onData(chunk, this.currentLevel);
            return node.isOpen = true;
          }
        }
        // Writes the closing tag of the current node
        closeNode(node) {
          var chunk;
          if (!node.isClosed) {
            chunk = "";
            this.writerOptions.state = WriterState.CloseTag;
            if (node.type === NodeType.Element) {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            } else {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.writerOptions.state = WriterState.None;
            this.onData(chunk, this.currentLevel);
            return node.isClosed = true;
          }
        }
        // Called when a new chunk of XML is output
        // `chunk` a string containing the XML chunk
        // `level` current indentation level
        onData(chunk, level) {
          this.documentStarted = true;
          return this.onDataCallback(chunk, level + 1);
        }
        // Called when the XML document is completed
        onEnd() {
          this.documentCompleted = true;
          return this.onEndCallback();
        }
        // Returns debug string
        debugInfo(name) {
          if (name == null) {
            return "";
          } else {
            return "node: <" + name + ">";
          }
        }
        // Node aliases
        ele() {
          return this.element(...arguments);
        }
        nod(name, attributes, text) {
          return this.node(name, attributes, text);
        }
        txt(value) {
          return this.text(value);
        }
        dat(value) {
          return this.cdata(value);
        }
        com(value) {
          return this.comment(value);
        }
        ins(target, value) {
          return this.instruction(target, value);
        }
        dec(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        }
        dtd(root, pubID, sysID) {
          return this.doctype(root, pubID, sysID);
        }
        e(name, attributes, text) {
          return this.element(name, attributes, text);
        }
        n(name, attributes, text) {
          return this.node(name, attributes, text);
        }
        t(value) {
          return this.text(value);
        }
        d(value) {
          return this.cdata(value);
        }
        c(value) {
          return this.comment(value);
        }
        r(value) {
          return this.raw(value);
        }
        i(target, value) {
          return this.instruction(target, value);
        }
        // Attribute aliases
        att() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList(...arguments);
          } else {
            return this.attribute(...arguments);
          }
        }
        a() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList(...arguments);
          } else {
            return this.attribute(...arguments);
          }
        }
        // DTD aliases
        // att() and ele() are defined above
        ent(name, value) {
          return this.entity(name, value);
        }
        pent(name, value) {
          return this.pEntity(name, value);
        }
        not(name, value) {
          return this.notation(name, value);
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/XMLStreamWriter.js"(exports, module) {
    (function() {
      var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLWriterBase = require_XMLWriterBase();
      WriterState = require_WriterState();
      module.exports = XMLStreamWriter = class XMLStreamWriter extends XMLWriterBase {
        // Initializes a new instance of `XMLStreamWriter`
        // `stream` output stream
        // `options.pretty` pretty prints the result
        // `options.indent` indentation string
        // `options.newline` newline sequence
        // `options.offset` a fixed number of indentations to add to every line
        // `options.allowEmpty` do not self close empty element tags
        // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
        // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
        constructor(stream, options) {
          super(options);
          this.stream = stream;
        }
        endline(node, options, level) {
          if (node.isLastRootNode && options.state === WriterState.CloseTag) {
            return "";
          } else {
            return super.endline(node, options, level);
          }
        }
        document(doc, options) {
          var child, i, j, k, len1, len2, ref, ref1, results;
          ref = doc.children;
          for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
            child = ref[i];
            child.isLastRootNode = i === doc.children.length - 1;
          }
          options = this.filterOptions(options);
          ref1 = doc.children;
          results = [];
          for (k = 0, len2 = ref1.length; k < len2; k++) {
            child = ref1[k];
            results.push(this.writeChildNode(child, options, 0));
          }
          return results;
        }
        cdata(node, options, level) {
          return this.stream.write(super.cdata(node, options, level));
        }
        comment(node, options, level) {
          return this.stream.write(super.comment(node, options, level));
        }
        declaration(node, options, level) {
          return this.stream.write(super.declaration(node, options, level));
        }
        docType(node, options, level) {
          var child, j, len1, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          this.stream.write(this.indent(node, options, level));
          this.stream.write("<!DOCTYPE " + node.root().name);
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.children.length > 0) {
            this.stream.write(" [");
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (j = 0, len1 = ref.length; j < len1; j++) {
              child = ref[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write("]");
          }
          options.state = WriterState.CloseTag;
          this.stream.write(options.spaceBeforeSlash + ">");
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        }
        element(node, options, level) {
          var att, attLen, child, childNodeCount, firstChildNode, j, len, len1, name, prettySuppressed, r, ratt, ref, ref1, ref2, rline;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<" + node.name;
          if (options.pretty && options.width > 0) {
            len = r.length;
            ref = node.attribs;
            for (name in ref) {
              if (!hasProp.call(ref, name)) continue;
              att = ref[name];
              ratt = this.attribute(att, options, level);
              attLen = ratt.length;
              if (len + attLen > options.width) {
                rline = this.indent(node, options, level + 1) + ratt;
                r += this.endline(node, options, level) + rline;
                len = rline.length;
              } else {
                rline = " " + ratt;
                r += rline;
                len += rline.length;
              }
            }
          } else {
            ref1 = node.attribs;
            for (name in ref1) {
              if (!hasProp.call(ref1, name)) continue;
              att = ref1[name];
              r += this.attribute(att, options, level);
            }
          }
          this.stream.write(r);
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
          })) {
            if (options.allowEmpty) {
              this.stream.write(">");
              options.state = WriterState.CloseTag;
              this.stream.write("</" + node.name + ">");
            } else {
              options.state = WriterState.CloseTag;
              this.stream.write(options.spaceBeforeSlash + "/>");
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
            this.stream.write(">");
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            this.stream.write("</" + node.name + ">");
          } else {
            this.stream.write(">" + this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref2 = node.children;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              child = ref2[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
          }
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        }
        processingInstruction(node, options, level) {
          return this.stream.write(super.processingInstruction(node, options, level));
        }
        raw(node, options, level) {
          return this.stream.write(super.raw(node, options, level));
        }
        text(node, options, level) {
          return this.stream.write(super.text(node, options, level));
        }
        dtdAttList(node, options, level) {
          return this.stream.write(super.dtdAttList(node, options, level));
        }
        dtdElement(node, options, level) {
          return this.stream.write(super.dtdElement(node, options, level));
        }
        dtdEntity(node, options, level) {
          return this.stream.write(super.dtdEntity(node, options, level));
        }
        dtdNotation(node, options, level) {
          return this.stream.write(super.dtdNotation(node, options, level));
        }
      };
    }).call(exports);
  }
});

// node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/xmlbuilder@15.1.1/node_modules/xmlbuilder/lib/index.js"(exports, module) {
    (function() {
      var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction;
      ({ assign, isFunction } = require_Utility());
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDocument = require_XMLDocument();
      XMLDocumentCB = require_XMLDocumentCB();
      XMLStringWriter = require_XMLStringWriter();
      XMLStreamWriter = require_XMLStreamWriter();
      NodeType = require_NodeType();
      WriterState = require_WriterState();
      module.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) {
          throw new Error("Root element needs a name.");
        }
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
          doc.declaration(options);
          if (options.pubID != null || options.sysID != null) {
            doc.dtd(options);
          }
        }
        return root;
      };
      module.exports.begin = function(options, onData, onEnd) {
        if (isFunction(options)) {
          [onData, onEnd] = [options, onData];
          options = {};
        }
        if (onData) {
          return new XMLDocumentCB(options, onData, onEnd);
        } else {
          return new XMLDocument(options);
        }
      };
      module.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
      };
      module.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
      };
      module.exports.implementation = new XMLDOMImplementation();
      module.exports.nodeType = NodeType;
      module.exports.writerState = WriterState;
    }).call(exports);
  }
});

// node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/build.js
var require_build = __commonJS({
  "node_modules/.pnpm/plist@3.1.0/node_modules/plist/lib/build.js"(exports) {
    var base64 = require_base64_js();
    var xmlbuilder = require_lib2();
    exports.build = build;
    function ISODateString(d) {
      function pad(n) {
        return n < 10 ? "0" + n : n;
      }
      return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "Z";
    }
    var toString = Object.prototype.toString;
    function type(obj) {
      var m = toString.call(obj).match(/\[object (.*)\]/);
      return m ? m[1] : m;
    }
    function build(obj, opts) {
      var XMLHDR = {
        version: "1.0",
        encoding: "UTF-8"
      };
      var XMLDTD = {
        pubid: "-//Apple//DTD PLIST 1.0//EN",
        sysid: "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
      };
      var doc = xmlbuilder.create("plist");
      doc.dec(XMLHDR.version, XMLHDR.encoding, XMLHDR.standalone);
      doc.dtd(XMLDTD.pubid, XMLDTD.sysid);
      doc.att("version", "1.0");
      walk_obj(obj, doc);
      if (!opts) opts = {};
      opts.pretty = opts.pretty !== false;
      return doc.end(opts);
    }
    function walk_obj(next, next_child) {
      var tag_type, i, prop;
      var name = type(next);
      if ("Undefined" == name) {
        return;
      } else if (Array.isArray(next)) {
        next_child = next_child.ele("array");
        for (i = 0; i < next.length; i++) {
          walk_obj(next[i], next_child);
        }
      } else if (Buffer.isBuffer(next)) {
        next_child.ele("data").raw(next.toString("base64"));
      } else if ("Object" == name) {
        next_child = next_child.ele("dict");
        for (prop in next) {
          if (next.hasOwnProperty(prop)) {
            next_child.ele("key").txt(prop);
            walk_obj(next[prop], next_child);
          }
        }
      } else if ("Number" == name) {
        tag_type = next % 1 === 0 ? "integer" : "real";
        next_child.ele(tag_type).txt(next.toString());
      } else if ("BigInt" == name) {
        next_child.ele("integer").txt(next);
      } else if ("Date" == name) {
        next_child.ele("date").txt(ISODateString(new Date(next)));
      } else if ("Boolean" == name) {
        next_child.ele(next ? "true" : "false");
      } else if ("String" == name) {
        next_child.ele("string").txt(next);
      } else if ("ArrayBuffer" == name) {
        next_child.ele("data").raw(base64.fromByteArray(next));
      } else if (next && next.buffer && "ArrayBuffer" == type(next.buffer)) {
        next_child.ele("data").raw(base64.fromByteArray(new Uint8Array(next.buffer), next_child));
      } else if ("Null" === name) {
        next_child.ele("null").txt("");
      }
    }
  }
});

// node_modules/.pnpm/plist@3.1.0/node_modules/plist/index.js
var require_plist = __commonJS({
  "node_modules/.pnpm/plist@3.1.0/node_modules/plist/index.js"(exports) {
    var parserFunctions = require_parse();
    Object.keys(parserFunctions).forEach(function(k) {
      exports[k] = parserFunctions[k];
    });
    var builderFunctions = require_build();
    Object.keys(builderFunctions).forEach(function(k) {
      exports[k] = builderFunctions[k];
    });
  }
});
export default require_plist();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B4bWxkb20reG1sZG9tQDAuOC4xMi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2NvbnZlbnRpb25zLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AeG1sZG9tK3htbGRvbUAwLjguMTIvbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9kb20uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B4bWxkb20reG1sZG9tQDAuOC4xMi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2VudGl0aWVzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9AeG1sZG9tK3htbGRvbUAwLjguMTIvbm9kZV9tb2R1bGVzL0B4bWxkb20veG1sZG9tL2xpYi9zYXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B4bWxkb20reG1sZG9tQDAuOC4xMi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2RvbS1wYXJzZXIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B4bWxkb20reG1sZG9tQDAuOC4xMi9ub2RlX21vZHVsZXMvQHhtbGRvbS94bWxkb20vbGliL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wbGlzdEAzLjEuMC9ub2RlX21vZHVsZXMvcGxpc3QvbGliL3BhcnNlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvVXRpbGl0eS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERPTUltcGxlbWVudGF0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MRE9NRXJyb3JIYW5kbGVyLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MRE9NU3RyaW5nTGlzdC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERPTUNvbmZpZ3VyYXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3htbGJ1aWxkZXJAMTUuMS4xL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9Ob2RlVHlwZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTEF0dHJpYnV0ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTE5hbWVkTm9kZU1hcC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTEVsZW1lbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3htbGJ1aWxkZXJAMTUuMS4xL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxDaGFyYWN0ZXJEYXRhLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MQ0RhdGEuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3htbGJ1aWxkZXJAMTUuMS4xL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxDb21tZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MRGVjbGFyYXRpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3htbGJ1aWxkZXJAMTUuMS4xL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxEVERBdHRMaXN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MRFRERW50aXR5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MRFRERWxlbWVudC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERURE5vdGF0aW9uLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MRG9jVHlwZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTFJhdy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTFRleHQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3htbGJ1aWxkZXJAMTUuMS4xL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3htbGJ1aWxkZXJAMTUuMS4xL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxEdW1teS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTE5vZGVMaXN0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvRG9jdW1lbnRQb3NpdGlvbi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTE5vZGUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3htbGJ1aWxkZXJAMTUuMS4xL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxTdHJpbmdpZmllci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1dyaXRlclN0YXRlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MV3JpdGVyQmFzZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTFN0cmluZ1dyaXRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERvY3VtZW50LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS94bWxidWlsZGVyQDE1LjEuMS9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MRG9jdW1lbnRDQi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTFN0cmVhbVdyaXRlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0veG1sYnVpbGRlckAxNS4xLjEvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL2luZGV4LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wbGlzdEAzLjEuMC9ub2RlX21vZHVsZXMvcGxpc3QvbGliL2J1aWxkLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wbGlzdEAzLjEuMC9ub2RlX21vZHVsZXMvcGxpc3QvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFBvbnlmaWxsIGZvciBgQXJyYXkucHJvdG90eXBlLmZpbmRgIHdoaWNoIGlzIG9ubHkgYXZhaWxhYmxlIGluIEVTNiBydW50aW1lcy5cbiAqXG4gKiBXb3JrcyB3aXRoIGFueXRoaW5nIHRoYXQgaGFzIGEgYGxlbmd0aGAgcHJvcGVydHkgYW5kIGluZGV4IGFjY2VzcyBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgTm9kZUxpc3QuXG4gKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBUXG4gKiBAcGFyYW0ge0FycmF5PFQ+IHwgKHtsZW5ndGg6bnVtYmVyLCBbbnVtYmVyXTogVH0pfSBsaXN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9uIChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBsaXN0OkFycmF5PFQ+IHwgKHtsZW5ndGg6bnVtYmVyLCBbbnVtYmVyXTogVH0pKTpib29sZWFufSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7UGFydGlhbDxQaWNrPEFycmF5Q29uc3RydWN0b3JbJ3Byb3RvdHlwZSddLCAnZmluZCc+Pj99IGFjIGBBcnJheS5wcm90b3R5cGVgIGJ5IGRlZmF1bHQsXG4gKiBcdFx0XHRcdGFsbG93cyBpbmplY3RpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb24gaW4gdGVzdHNcbiAqIEByZXR1cm5zIHtUIHwgdW5kZWZpbmVkfVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmluZFxuICogQHNlZSBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi9tdWx0aXBhZ2UvaW5kZXhlZC1jb2xsZWN0aW9ucy5odG1sI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICovXG5mdW5jdGlvbiBmaW5kKGxpc3QsIHByZWRpY2F0ZSwgYWMpIHtcblx0aWYgKGFjID09PSB1bmRlZmluZWQpIHtcblx0XHRhYyA9IEFycmF5LnByb3RvdHlwZTtcblx0fVxuXHRpZiAobGlzdCAmJiB0eXBlb2YgYWMuZmluZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBhYy5maW5kLmNhbGwobGlzdCwgcHJlZGljYXRlKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxpc3QsIGkpKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0XHRpZiAocHJlZGljYXRlLmNhbGwodW5kZWZpbmVkLCBpdGVtLCBpLCBsaXN0KSkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBcIlNoYWxsb3cgZnJlZXplc1wiIGFuIG9iamVjdCB0byByZW5kZXIgaXQgaW1tdXRhYmxlLlxuICogVXNlcyBgT2JqZWN0LmZyZWV6ZWAgaWYgYXZhaWxhYmxlLFxuICogb3RoZXJ3aXNlIHRoZSBpbW11dGFiaWxpdHkgaXMgb25seSBpbiB0aGUgdHlwZS5cbiAqXG4gKiBJcyB1c2VkIHRvIGNyZWF0ZSBcImVudW0gbGlrZVwiIG9iamVjdHMuXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gb2JqZWN0IHRoZSBvYmplY3QgdG8gZnJlZXplXG4gKiBAcGFyYW0ge1BpY2s8T2JqZWN0Q29uc3RydWN0b3IsICdmcmVlemUnPiA9IE9iamVjdH0gb2MgYE9iamVjdGAgYnkgZGVmYXVsdCxcbiAqIFx0XHRcdFx0YWxsb3dzIHRvIGluamVjdCBjdXN0b20gb2JqZWN0IGNvbnN0cnVjdG9yIGZvciB0ZXN0c1xuICogQHJldHVybnMge1JlYWRvbmx5PFQ+fVxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2ZyZWV6ZVxuICovXG5mdW5jdGlvbiBmcmVlemUob2JqZWN0LCBvYykge1xuXHRpZiAob2MgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9jID0gT2JqZWN0XG5cdH1cblx0cmV0dXJuIG9jICYmIHR5cGVvZiBvYy5mcmVlemUgPT09ICdmdW5jdGlvbicgPyBvYy5mcmVlemUob2JqZWN0KSA6IG9iamVjdFxufVxuXG4vKipcbiAqIFNpbmNlIHdlIGNhbiBub3QgcmVseSBvbiBgT2JqZWN0LmFzc2lnbmAgd2UgcHJvdmlkZSBhIHNpbXBsaWZpZWQgdmVyc2lvblxuICogdGhhdCBpcyBzdWZmaWNpZW50IGZvciBvdXIgbmVlZHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkfSBzb3VyY2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAqIEB0aHJvd3MgVHlwZUVycm9yIGlmIHRhcmdldCBpcyBub3QgYW4gb2JqZWN0XG4gKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG4gKiBAc2VlIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyL211bHRpcGFnZS9mdW5kYW1lbnRhbC1vYmplY3RzLmh0bWwjc2VjLW9iamVjdC5hc3NpZ25cbiAqL1xuZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICh0YXJnZXQgPT09IG51bGwgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXQgaXMgbm90IGFuIG9iamVjdCcpXG5cdH1cblx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG5cdFx0XHR0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG5cdFx0fVxuXHR9XG5cdHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBBbGwgbWltZSB0eXBlcyB0aGF0IGFyZSBhbGxvd2VkIGFzIGlucHV0IHRvIGBET01QYXJzZXIucGFyc2VGcm9tU3RyaW5nYFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcjQXJndW1lbnQwMiBNRE5cbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tcGFyc2Vyc3VwcG9ydGVkdHlwZSBXSEFUV0cgSFRNTCBTcGVjXG4gKiBAc2VlIERPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nXG4gKi9cbnZhciBNSU1FX1RZUEUgPSBmcmVlemUoe1xuXHQvKipcblx0ICogYHRleHQvaHRtbGAsIHRoZSBvbmx5IG1pbWUgdHlwZSB0aGF0IHRyaWdnZXJzIHRyZWF0aW5nIGFuIFhNTCBkb2N1bWVudCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBAc2VlIERPTVBhcnNlci5TdXBwb3J0ZWRUeXBlLmlzSFRNTFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL3RleHQvaHRtbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hUTUwgV2lraXBlZGlhXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTVBhcnNlci9wYXJzZUZyb21TdHJpbmcgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLWRvbXBhcnNlci1wYXJzZWZyb21zdHJpbmcgV0hBVFdHIEhUTUwgU3BlY1xuXHQgKi9cblx0SFRNTDogJ3RleHQvaHRtbCcsXG5cblx0LyoqXG5cdCAqIEhlbHBlciBtZXRob2QgdG8gY2hlY2sgYSBtaW1lIHR5cGUgaWYgaXQgaW5kaWNhdGVzIGFuIEhUTUwgZG9jdW1lbnRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC9odG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFRNTCBXaWtpcGVkaWFcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NUGFyc2VyL3BhcnNlRnJvbVN0cmluZyBNRE5cblx0ICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9keW5hbWljLW1hcmt1cC1pbnNlcnRpb24uaHRtbCNkb20tZG9tcGFyc2VyLXBhcnNlZnJvbXN0cmluZyBcdCAqL1xuXHRpc0hUTUw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZSA9PT0gTUlNRV9UWVBFLkhUTUxcblx0fSxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3htbGAsIHRoZSBzdGFuZGFyZCBtaW1lIHR5cGUgZm9yIFhNTCBkb2N1bWVudHMuXG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvYXBwbGljYXRpb24veG1sIElBTkEgTWltZVR5cGUgcmVnaXN0cmF0aW9uXG5cdCAqIEBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzczMDMjc2VjdGlvbi05LjEgUkZDIDczMDNcblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfQVBQTElDQVRJT046ICdhcHBsaWNhdGlvbi94bWwnLFxuXG5cdC8qKlxuXHQgKiBgdGV4dC9odG1sYCwgYW4gYWxpYXMgZm9yIGBhcHBsaWNhdGlvbi94bWxgLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MzAzI3NlY3Rpb24tOS4yIFJGQyA3MzAzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvdGV4dC94bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9YTUxfYW5kX01JTUUgV2lraXBlZGlhXG5cdCAqL1xuXHRYTUxfVEVYVDogJ3RleHQveG1sJyxcblxuXHQvKipcblx0ICogYGFwcGxpY2F0aW9uL3hodG1sK3htbGAsIGluZGljYXRlcyBhbiBYTUwgZG9jdW1lbnQgdGhhdCBoYXMgdGhlIGRlZmF1bHQgSFRNTCBuYW1lc3BhY2UsXG5cdCAqIGJ1dCBpcyBwYXJzZWQgYXMgYW4gWE1MIGRvY3VtZW50LlxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2FwcGxpY2F0aW9uL3hodG1sK3htbCBJQU5BIE1pbWVUeXBlIHJlZ2lzdHJhdGlvblxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWNyZWF0ZWRvY3VtZW50IFdIQVRXRyBET00gU3BlY1xuXHQgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1hIVE1MIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1hIVE1MX0FQUExJQ0FUSU9OOiAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcblxuXHQvKipcblx0ICogYGltYWdlL3N2Zyt4bWxgLFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL2ltYWdlL3N2Zyt4bWwgSUFOQSBNaW1lVHlwZSByZWdpc3RyYXRpb25cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHMTEvIFczQyBTVkcgMS4xXG5cdCAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NhbGFibGVfVmVjdG9yX0dyYXBoaWNzIFdpa2lwZWRpYVxuXHQgKi9cblx0WE1MX1NWR19JTUFHRTogJ2ltYWdlL3N2Zyt4bWwnLFxufSlcblxuLyoqXG4gKiBOYW1lc3BhY2VzIHRoYXQgYXJlIHVzZWQgaW4gdGhpcyBjb2RlIGJhc2UuXG4gKlxuICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzXG4gKi9cbnZhciBOQU1FU1BBQ0UgPSBmcmVlemUoe1xuXHQvKipcblx0ICogVGhlIFhIVE1MIG5hbWVzcGFjZS5cblx0ICpcblx0ICogQHNlZSBodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXG5cdCAqL1xuXHRIVE1MOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsXG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdXJpYCBlcXVhbHMgYE5BTUVTUEFDRS5IVE1MYC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1cmldXG5cdCAqXG5cdCAqIEBzZWUgTkFNRVNQQUNFLkhUTUxcblx0ICovXG5cdGlzSFRNTDogZnVuY3Rpb24gKHVyaSkge1xuXHRcdHJldHVybiB1cmkgPT09IE5BTUVTUEFDRS5IVE1MXG5cdH0sXG5cblx0LyoqXG5cdCAqIFRoZSBTVkcgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXG5cdCAqL1xuXHRTVkc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cblx0LyoqXG5cdCAqIFRoZSBgeG1sOmAgbmFtZXNwYWNlLlxuXHQgKlxuXHQgKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVxuXHQgKi9cblx0WE1MOiAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJyxcblxuXHQvKipcblx0ICogVGhlIGB4bWxuczpgIG5hbWVzcGFjZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1xuXHQgKi9cblx0WE1MTlM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsXG59KVxuXG5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcbmV4cG9ydHMuZmluZCA9IGZpbmQ7XG5leHBvcnRzLmZyZWV6ZSA9IGZyZWV6ZTtcbmV4cG9ydHMuTUlNRV9UWVBFID0gTUlNRV9UWVBFO1xuZXhwb3J0cy5OQU1FU1BBQ0UgPSBOQU1FU1BBQ0U7XG4iLCAidmFyIGNvbnZlbnRpb25zID0gcmVxdWlyZShcIi4vY29udmVudGlvbnNcIik7XG5cbnZhciBmaW5kID0gY29udmVudGlvbnMuZmluZDtcbnZhciBOQU1FU1BBQ0UgPSBjb252ZW50aW9ucy5OQU1FU1BBQ0U7XG5cbi8qKlxuICogQSBwcmVyZXF1aXNpdGUgZm9yIGBbXS5maWx0ZXJgLCB0byBkcm9wIGVsZW1lbnRzIHRoYXQgYXJlIGVtcHR5XG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBub3RFbXB0eVN0cmluZyAoaW5wdXQpIHtcblx0cmV0dXJuIGlucHV0ICE9PSAnJ1xufVxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzcGxpdC1vbi1hc2NpaS13aGl0ZXNwYWNlXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nW119IChjYW4gYmUgZW1wdHkpXG4gKi9cbmZ1bmN0aW9uIHNwbGl0T25BU0NJSVdoaXRlc3BhY2UoaW5wdXQpIHtcblx0Ly8gVSswMDA5IFRBQiwgVSswMDBBIExGLCBVKzAwMEMgRkYsIFUrMDAwRCBDUiwgVSswMDIwIFNQQUNFXG5cdHJldHVybiBpbnB1dCA/IGlucHV0LnNwbGl0KC9bXFx0XFxuXFxmXFxyIF0rLykuZmlsdGVyKG5vdEVtcHR5U3RyaW5nKSA6IFtdXG59XG5cbi8qKlxuICogQWRkcyBlbGVtZW50IGFzIGEga2V5IHRvIGN1cnJlbnQgaWYgaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4gfCB1bmRlZmluZWQ+fSBjdXJyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudFxuICogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4gfCB1bmRlZmluZWQ+fVxuICovXG5mdW5jdGlvbiBvcmRlcmVkU2V0UmVkdWNlciAoY3VycmVudCwgZWxlbWVudCkge1xuXHRpZiAoIWN1cnJlbnQuaGFzT3duUHJvcGVydHkoZWxlbWVudCkpIHtcblx0XHRjdXJyZW50W2VsZW1lbnRdID0gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gY3VycmVudDtcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNvcmRlcmVkLXNldFxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmZ1bmN0aW9uIHRvT3JkZXJlZFNldChpbnB1dCkge1xuXHRpZiAoIWlucHV0KSByZXR1cm4gW107XG5cdHZhciBsaXN0ID0gc3BsaXRPbkFTQ0lJV2hpdGVzcGFjZShpbnB1dCk7XG5cdHJldHVybiBPYmplY3Qua2V5cyhsaXN0LnJlZHVjZShvcmRlcmVkU2V0UmVkdWNlciwge30pKVxufVxuXG4vKipcbiAqIFVzZXMgYGxpc3QuaW5kZXhPZmAgdG8gaW1wbGVtZW50IHNvbWV0aGluZyBsaWtlIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgLFxuICogd2hpY2ggd2UgY2FuIG5vdCByZWx5IG9uIGJlaW5nIGF2YWlsYWJsZS5cbiAqXG4gKiBAcGFyYW0ge2FueVtdfSBsaXN0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oYW55KTogYm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyAobGlzdCkge1xuXHRyZXR1cm4gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBsaXN0ICYmIGxpc3QuaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG5cdH1cbn1cblxuZnVuY3Rpb24gY29weShzcmMsZGVzdCl7XG5cdGZvcih2YXIgcCBpbiBzcmMpe1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3JjLCBwKSkge1xuXHRcdFx0ZGVzdFtwXSA9IHNyY1twXTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG5eXFx3K1xcLnByb3RvdHlwZVxcLihbX1xcd10rKVxccyo9XFxzKigoPzouKlxce1xccyo/W1xcclxcbl1bXFxzXFxTXSo/Xn0pfFxcUy4qPyg/PVs7XFxyXFxuXSkpOz9cbl5cXHcrXFwucHJvdG90eXBlXFwuKFtfXFx3XSspXFxzKj1cXHMqKFxcUy4qPyg/PVs7XFxyXFxuXSkpOz9cbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoQ2xhc3MsU3VwZXIpe1xuXHR2YXIgcHQgPSBDbGFzcy5wcm90b3R5cGU7XG5cdGlmKCEocHQgaW5zdGFuY2VvZiBTdXBlcikpe1xuXHRcdGZ1bmN0aW9uIHQoKXt9O1xuXHRcdHQucHJvdG90eXBlID0gU3VwZXIucHJvdG90eXBlO1xuXHRcdHQgPSBuZXcgdCgpO1xuXHRcdGNvcHkocHQsdCk7XG5cdFx0Q2xhc3MucHJvdG90eXBlID0gcHQgPSB0O1xuXHR9XG5cdGlmKHB0LmNvbnN0cnVjdG9yICE9IENsYXNzKXtcblx0XHRpZih0eXBlb2YgQ2xhc3MgIT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwidW5rbm93biBDbGFzczpcIitDbGFzcylcblx0XHR9XG5cdFx0cHQuY29uc3RydWN0b3IgPSBDbGFzc1xuXHR9XG59XG5cbi8vIE5vZGUgVHlwZXNcbnZhciBOb2RlVHlwZSA9IHt9XG52YXIgRUxFTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gTm9kZVR5cGUuRUxFTUVOVF9OT0RFICAgICAgICAgICAgICAgID0gMTtcbnZhciBBVFRSSUJVVEVfTk9ERSAgICAgICAgICAgICAgPSBOb2RlVHlwZS5BVFRSSUJVVEVfTk9ERSAgICAgICAgICAgICAgPSAyO1xudmFyIFRFWFRfTk9ERSAgICAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLlRFWFRfTk9ERSAgICAgICAgICAgICAgICAgICA9IDM7XG52YXIgQ0RBVEFfU0VDVElPTl9OT0RFICAgICAgICAgID0gTm9kZVR5cGUuQ0RBVEFfU0VDVElPTl9OT0RFICAgICAgICAgID0gNDtcbnZhciBFTlRJVFlfUkVGRVJFTkNFX05PREUgICAgICAgPSBOb2RlVHlwZS5FTlRJVFlfUkVGRVJFTkNFX05PREUgICAgICAgPSA1O1xudmFyIEVOVElUWV9OT0RFICAgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkVOVElUWV9OT0RFICAgICAgICAgICAgICAgICA9IDY7XG52YXIgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gTm9kZVR5cGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gNztcbnZhciBDT01NRU5UX05PREUgICAgICAgICAgICAgICAgPSBOb2RlVHlwZS5DT01NRU5UX05PREUgICAgICAgICAgICAgICAgPSA4O1xudmFyIERPQ1VNRU5UX05PREUgICAgICAgICAgICAgICA9IE5vZGVUeXBlLkRPQ1VNRU5UX05PREUgICAgICAgICAgICAgICA9IDk7XG52YXIgRE9DVU1FTlRfVFlQRV9OT0RFICAgICAgICAgID0gTm9kZVR5cGUuRE9DVU1FTlRfVFlQRV9OT0RFICAgICAgICAgID0gMTA7XG52YXIgRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAgICAgID0gTm9kZVR5cGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAgICAgID0gMTE7XG52YXIgTk9UQVRJT05fTk9ERSAgICAgICAgICAgICAgID0gTm9kZVR5cGUuTk9UQVRJT05fTk9ERSAgICAgICAgICAgICAgID0gMTI7XG5cbi8vIEV4Y2VwdGlvbkNvZGVcbnZhciBFeGNlcHRpb25Db2RlID0ge31cbnZhciBFeGNlcHRpb25NZXNzYWdlID0ge307XG52YXIgSU5ERVhfU0laRV9FUlIgICAgICAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5JTkRFWF9TSVpFX0VSUiAgICAgICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMV09XCJJbmRleCBzaXplIGVycm9yXCIpLDEpO1xudmFyIERPTVNUUklOR19TSVpFX0VSUiAgICAgICAgICA9IEV4Y2VwdGlvbkNvZGUuRE9NU1RSSU5HX1NJWkVfRVJSICAgICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzJdPVwiRE9NU3RyaW5nIHNpemUgZXJyb3JcIiksMik7XG52YXIgSElFUkFSQ0hZX1JFUVVFU1RfRVJSICAgICAgID0gRXhjZXB0aW9uQ29kZS5ISUVSQVJDSFlfUkVRVUVTVF9FUlIgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbM109XCJIaWVyYXJjaHkgcmVxdWVzdCBlcnJvclwiKSwzKTtcbnZhciBXUk9OR19ET0NVTUVOVF9FUlIgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLldST05HX0RPQ1VNRU5UX0VSUiAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs0XT1cIldyb25nIGRvY3VtZW50XCIpLDQpO1xudmFyIElOVkFMSURfQ0hBUkFDVEVSX0VSUiAgICAgICA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9DSEFSQUNURVJfRVJSICAgICAgID0gKChFeGNlcHRpb25NZXNzYWdlWzVdPVwiSW52YWxpZCBjaGFyYWN0ZXJcIiksNSk7XG52YXIgTk9fREFUQV9BTExPV0VEX0VSUiAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5OT19EQVRBX0FMTE9XRURfRVJSICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbNl09XCJObyBkYXRhIGFsbG93ZWRcIiksNik7XG52YXIgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbN109XCJObyBtb2RpZmljYXRpb24gYWxsb3dlZFwiKSw3KTtcbnZhciBOT1RfRk9VTkRfRVJSICAgICAgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLk5PVF9GT1VORF9FUlIgICAgICAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs4XT1cIk5vdCBmb3VuZFwiKSw4KTtcbnZhciBOT1RfU1VQUE9SVEVEX0VSUiAgICAgICAgICAgPSBFeGNlcHRpb25Db2RlLk5PVF9TVVBQT1JURURfRVJSICAgICAgICAgICA9ICgoRXhjZXB0aW9uTWVzc2FnZVs5XT1cIk5vdCBzdXBwb3J0ZWRcIiksOSk7XG52YXIgSU5VU0VfQVRUUklCVVRFX0VSUiAgICAgICAgID0gRXhjZXB0aW9uQ29kZS5JTlVTRV9BVFRSSUJVVEVfRVJSICAgICAgICAgPSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTBdPVwiQXR0cmlidXRlIGluIHVzZVwiKSwxMCk7XG4vL2xldmVsMlxudmFyIElOVkFMSURfU1RBVEVfRVJSICAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX1NUQVRFX0VSUiAgICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxMV09XCJJbnZhbGlkIHN0YXRlXCIpLDExKTtcbnZhciBTWU5UQVhfRVJSICAgICAgICAgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuU1lOVEFYX0VSUiAgICAgICAgICAgICAgIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTJdPVwiU3ludGF4IGVycm9yXCIpLDEyKTtcbnZhciBJTlZBTElEX01PRElGSUNBVElPTl9FUlIgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSIFx0PSAoKEV4Y2VwdGlvbk1lc3NhZ2VbMTNdPVwiSW52YWxpZCBtb2RpZmljYXRpb25cIiksMTMpO1xudmFyIE5BTUVTUEFDRV9FUlIgICAgICAgICAgICBcdD0gRXhjZXB0aW9uQ29kZS5OQU1FU1BBQ0VfRVJSICAgICAgICAgICBcdD0gKChFeGNlcHRpb25NZXNzYWdlWzE0XT1cIkludmFsaWQgbmFtZXNwYWNlXCIpLDE0KTtcbnZhciBJTlZBTElEX0FDQ0VTU19FUlIgICAgICAgXHQ9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9BQ0NFU1NfRVJSICAgICAgXHQ9ICgoRXhjZXB0aW9uTWVzc2FnZVsxNV09XCJJbnZhbGlkIGFjY2Vzc1wiKSwxNSk7XG5cbi8qKlxuICogRE9NIExldmVsIDJcbiAqIE9iamVjdCBET01FeGNlcHRpb25cbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMC9SRUMtRE9NLUxldmVsLTItQ29yZS0yMDAwMTExMy9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbiAqIEBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLURPTS1MZXZlbC0xL2VjbWEtc2NyaXB0LWxhbmd1YWdlLWJpbmRpbmcuaHRtbFxuICovXG5mdW5jdGlvbiBET01FeGNlcHRpb24oY29kZSwgbWVzc2FnZSkge1xuXHRpZihtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3Ipe1xuXHRcdHZhciBlcnJvciA9IG1lc3NhZ2U7XG5cdH1lbHNle1xuXHRcdGVycm9yID0gdGhpcztcblx0XHRFcnJvci5jYWxsKHRoaXMsIEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV0pO1xuXHRcdHRoaXMubWVzc2FnZSA9IEV4Y2VwdGlvbk1lc3NhZ2VbY29kZV07XG5cdFx0aWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIERPTUV4Y2VwdGlvbik7XG5cdH1cblx0ZXJyb3IuY29kZSA9IGNvZGU7XG5cdGlmKG1lc3NhZ2UpIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZSArIFwiOiBcIiArIG1lc3NhZ2U7XG5cdHJldHVybiBlcnJvcjtcbn07XG5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuY29weShFeGNlcHRpb25Db2RlLERPTUV4Y2VwdGlvbilcblxuLyoqXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvY29yZS5odG1sI0lELTUzNjI5NzE3N1xuICogVGhlIE5vZGVMaXN0IGludGVyZmFjZSBwcm92aWRlcyB0aGUgYWJzdHJhY3Rpb24gb2YgYW4gb3JkZXJlZCBjb2xsZWN0aW9uIG9mIG5vZGVzLCB3aXRob3V0IGRlZmluaW5nIG9yIGNvbnN0cmFpbmluZyBob3cgdGhpcyBjb2xsZWN0aW9uIGlzIGltcGxlbWVudGVkLiBOb2RlTGlzdCBvYmplY3RzIGluIHRoZSBET00gYXJlIGxpdmUuXG4gKiBUaGUgaXRlbXMgaW4gdGhlIE5vZGVMaXN0IGFyZSBhY2Nlc3NpYmxlIHZpYSBhbiBpbnRlZ3JhbCBpbmRleCwgc3RhcnRpbmcgZnJvbSAwLlxuICovXG5mdW5jdGlvbiBOb2RlTGlzdCgpIHtcbn07XG5Ob2RlTGlzdC5wcm90b3R5cGUgPSB7XG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0LiBUaGUgcmFuZ2Ugb2YgdmFsaWQgY2hpbGQgbm9kZSBpbmRpY2VzIGlzIDAgdG8gbGVuZ3RoLTEgaW5jbHVzaXZlLlxuXHQgKiBAc3RhbmRhcmQgbGV2ZWwxXG5cdCAqL1xuXHRsZW5ndGg6MCxcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGluZGV4dGggaXRlbSBpbiB0aGUgY29sbGVjdGlvbi4gSWYgaW5kZXggaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIGxpc3QsIHRoaXMgcmV0dXJucyBudWxsLlxuXHQgKiBAc3RhbmRhcmQgbGV2ZWwxXG5cdCAqIEBwYXJhbSBpbmRleCAgdW5zaWduZWQgbG9uZ1xuXHQgKiAgIEluZGV4IGludG8gdGhlIGNvbGxlY3Rpb24uXG5cdCAqIEByZXR1cm4gTm9kZVxuXHQgKiBcdFRoZSBub2RlIGF0IHRoZSBpbmRleHRoIHBvc2l0aW9uIGluIHRoZSBOb2RlTGlzdCwgb3IgbnVsbCBpZiB0aGF0IGlzIG5vdCBhIHZhbGlkIGluZGV4LlxuXHQgKi9cblx0aXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRyZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubGVuZ3RoID8gdGhpc1tpbmRleF0gOiBudWxsO1xuXHR9LFxuXHR0b1N0cmluZzpmdW5jdGlvbihpc0hUTUwsbm9kZUZpbHRlcil7XG5cdFx0Zm9yKHZhciBidWYgPSBbXSwgaSA9IDA7aTx0aGlzLmxlbmd0aDtpKyspe1xuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcodGhpc1tpXSxidWYsaXNIVE1MLG5vZGVGaWx0ZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLmpvaW4oJycpO1xuXHR9LFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtmdW5jdGlvbiAoTm9kZSk6Ym9vbGVhbn0gcHJlZGljYXRlXG5cdCAqIEByZXR1cm5zIHtOb2RlW119XG5cdCAqL1xuXHRmaWx0ZXI6IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcblx0XHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMsIHByZWRpY2F0ZSk7XG5cdH0sXG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge05vZGV9IGl0ZW1cblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGluZGV4T2Y6IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcywgaXRlbSk7XG5cdH0sXG59O1xuXG5mdW5jdGlvbiBMaXZlTm9kZUxpc3Qobm9kZSxyZWZyZXNoKXtcblx0dGhpcy5fbm9kZSA9IG5vZGU7XG5cdHRoaXMuX3JlZnJlc2ggPSByZWZyZXNoXG5cdF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcbn1cbmZ1bmN0aW9uIF91cGRhdGVMaXZlTGlzdChsaXN0KXtcblx0dmFyIGluYyA9IGxpc3QuX25vZGUuX2luYyB8fCBsaXN0Ll9ub2RlLm93bmVyRG9jdW1lbnQuX2luYztcblx0aWYgKGxpc3QuX2luYyAhPT0gaW5jKSB7XG5cdFx0dmFyIGxzID0gbGlzdC5fcmVmcmVzaChsaXN0Ll9ub2RlKTtcblx0XHRfX3NldF9fKGxpc3QsJ2xlbmd0aCcsbHMubGVuZ3RoKTtcblx0XHRpZiAoIWxpc3QuJCRsZW5ndGggfHwgbHMubGVuZ3RoIDwgbGlzdC4kJGxlbmd0aCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IGxzLmxlbmd0aDsgaSBpbiBsaXN0OyBpKyspIHtcblx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChsaXN0LCBpKSkge1xuXHRcdFx0XHRcdGRlbGV0ZSBsaXN0W2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvcHkobHMsbGlzdCk7XG5cdFx0bGlzdC5faW5jID0gaW5jO1xuXHR9XG59XG5MaXZlTm9kZUxpc3QucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbihpKXtcblx0X3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuXHRyZXR1cm4gdGhpc1tpXSB8fCBudWxsO1xufVxuXG5fZXh0ZW5kcyhMaXZlTm9kZUxpc3QsTm9kZUxpc3QpO1xuXG4vKipcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoZSBOYW1lZE5vZGVNYXAgaW50ZXJmYWNlIGFyZSB1c2VkXG4gKiB0byByZXByZXNlbnQgY29sbGVjdGlvbnMgb2Ygbm9kZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgYnkgbmFtZS5cbiAqIE5vdGUgdGhhdCBOYW1lZE5vZGVNYXAgZG9lcyBub3QgaW5oZXJpdCBmcm9tIE5vZGVMaXN0O1xuICogTmFtZWROb2RlTWFwcyBhcmUgbm90IG1haW50YWluZWQgaW4gYW55IHBhcnRpY3VsYXIgb3JkZXIuXG4gKiBPYmplY3RzIGNvbnRhaW5lZCBpbiBhbiBvYmplY3QgaW1wbGVtZW50aW5nIE5hbWVkTm9kZU1hcCBtYXkgYWxzbyBiZSBhY2Nlc3NlZCBieSBhbiBvcmRpbmFsIGluZGV4LFxuICogYnV0IHRoaXMgaXMgc2ltcGx5IHRvIGFsbG93IGNvbnZlbmllbnQgZW51bWVyYXRpb24gb2YgdGhlIGNvbnRlbnRzIG9mIGEgTmFtZWROb2RlTWFwLFxuICogYW5kIGRvZXMgbm90IGltcGx5IHRoYXQgdGhlIERPTSBzcGVjaWZpZXMgYW4gb3JkZXIgdG8gdGhlc2UgTm9kZXMuXG4gKiBOYW1lZE5vZGVNYXAgb2JqZWN0cyBpbiB0aGUgRE9NIGFyZSBsaXZlLlxuICogdXNlZCBmb3IgYXR0cmlidXRlcyBvciBEb2N1bWVudFR5cGUgZW50aXRpZXNcbiAqL1xuZnVuY3Rpb24gTmFtZWROb2RlTWFwKCkge1xufTtcblxuZnVuY3Rpb24gX2ZpbmROb2RlSW5kZXgobGlzdCxub2RlKXtcblx0dmFyIGkgPSBsaXN0Lmxlbmd0aDtcblx0d2hpbGUoaS0tKXtcblx0XHRpZihsaXN0W2ldID09PSBub2RlKXtyZXR1cm4gaX1cblx0fVxufVxuXG5mdW5jdGlvbiBfYWRkTmFtZWROb2RlKGVsLGxpc3QsbmV3QXR0cixvbGRBdHRyKXtcblx0aWYob2xkQXR0cil7XG5cdFx0bGlzdFtfZmluZE5vZGVJbmRleChsaXN0LG9sZEF0dHIpXSA9IG5ld0F0dHI7XG5cdH1lbHNle1xuXHRcdGxpc3RbbGlzdC5sZW5ndGgrK10gPSBuZXdBdHRyO1xuXHR9XG5cdGlmKGVsKXtcblx0XHRuZXdBdHRyLm93bmVyRWxlbWVudCA9IGVsO1xuXHRcdHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuXHRcdGlmKGRvYyl7XG5cdFx0XHRvbGRBdHRyICYmIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsb2xkQXR0cik7XG5cdFx0XHRfb25BZGRBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIpO1xuXHRcdH1cblx0fVxufVxuZnVuY3Rpb24gX3JlbW92ZU5hbWVkTm9kZShlbCxsaXN0LGF0dHIpe1xuXHQvL2NvbnNvbGUubG9nKCdyZW1vdmUgYXR0cjonK2F0dHIpXG5cdHZhciBpID0gX2ZpbmROb2RlSW5kZXgobGlzdCxhdHRyKTtcblx0aWYoaT49MCl7XG5cdFx0dmFyIGxhc3RJbmRleCA9IGxpc3QubGVuZ3RoLTFcblx0XHR3aGlsZShpPGxhc3RJbmRleCl7XG5cdFx0XHRsaXN0W2ldID0gbGlzdFsrK2ldXG5cdFx0fVxuXHRcdGxpc3QubGVuZ3RoID0gbGFzdEluZGV4O1xuXHRcdGlmKGVsKXtcblx0XHRcdHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuXHRcdFx0aWYoZG9jKXtcblx0XHRcdFx0X29uUmVtb3ZlQXR0cmlidXRlKGRvYyxlbCxhdHRyKTtcblx0XHRcdFx0YXR0ci5vd25lckVsZW1lbnQgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fWVsc2V7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihOT1RfRk9VTkRfRVJSLG5ldyBFcnJvcihlbC50YWdOYW1lKydAJythdHRyKSlcblx0fVxufVxuTmFtZWROb2RlTWFwLnByb3RvdHlwZSA9IHtcblx0bGVuZ3RoOjAsXG5cdGl0ZW06Tm9kZUxpc3QucHJvdG90eXBlLml0ZW0sXG5cdGdldE5hbWVkSXRlbTogZnVuY3Rpb24oa2V5KSB7XG4vL1x0XHRpZihrZXkuaW5kZXhPZignOicpPjAgfHwga2V5ID09ICd4bWxucycpe1xuLy9cdFx0XHRyZXR1cm4gbnVsbDtcbi8vXHRcdH1cblx0XHQvL2NvbnNvbGUubG9nKClcblx0XHR2YXIgaSA9IHRoaXMubGVuZ3RoO1xuXHRcdHdoaWxlKGktLSl7XG5cdFx0XHR2YXIgYXR0ciA9IHRoaXNbaV07XG5cdFx0XHQvL2NvbnNvbGUubG9nKGF0dHIubm9kZU5hbWUsa2V5KVxuXHRcdFx0aWYoYXR0ci5ub2RlTmFtZSA9PSBrZXkpe1xuXHRcdFx0XHRyZXR1cm4gYXR0cjtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHNldE5hbWVkSXRlbTogZnVuY3Rpb24oYXR0cikge1xuXHRcdHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50O1xuXHRcdGlmKGVsICYmIGVsIT10aGlzLl9vd25lckVsZW1lbnQpe1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcblx0XHR9XG5cdFx0dmFyIG9sZEF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbShhdHRyLm5vZGVOYW1lKTtcblx0XHRfYWRkTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIsb2xkQXR0cik7XG5cdFx0cmV0dXJuIG9sZEF0dHI7XG5cdH0sXG5cdC8qIHJldHVybnMgTm9kZSAqL1xuXHRzZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24oYXR0cikgey8vIHJhaXNlczogV1JPTkdfRE9DVU1FTlRfRVJSLE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUixJTlVTRV9BVFRSSUJVVEVfRVJSXG5cdFx0dmFyIGVsID0gYXR0ci5vd25lckVsZW1lbnQsIG9sZEF0dHI7XG5cdFx0aWYoZWwgJiYgZWwhPXRoaXMuX293bmVyRWxlbWVudCl7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKElOVVNFX0FUVFJJQlVURV9FUlIpO1xuXHRcdH1cblx0XHRvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhhdHRyLm5hbWVzcGFjZVVSSSxhdHRyLmxvY2FsTmFtZSk7XG5cdFx0X2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsdGhpcyxhdHRyLG9sZEF0dHIpO1xuXHRcdHJldHVybiBvbGRBdHRyO1xuXHR9LFxuXG5cdC8qIHJldHVybnMgTm9kZSAqL1xuXHRyZW1vdmVOYW1lZEl0ZW06IGZ1bmN0aW9uKGtleSkge1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oa2V5KTtcblx0XHRfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIpO1xuXHRcdHJldHVybiBhdHRyO1xuXG5cblx0fSwvLyByYWlzZXM6IE5PVF9GT1VORF9FUlIsTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSXG5cblx0Ly9mb3IgbGV2ZWwyXG5cdHJlbW92ZU5hbWVkSXRlbU5TOmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSxsb2NhbE5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksbG9jYWxOYW1lKTtcblx0XHRfcmVtb3ZlTmFtZWROb2RlKHRoaXMuX293bmVyRWxlbWVudCx0aGlzLGF0dHIpO1xuXHRcdHJldHVybiBhdHRyO1xuXHR9LFxuXHRnZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcblx0XHR2YXIgaSA9IHRoaXMubGVuZ3RoO1xuXHRcdHdoaWxlKGktLSl7XG5cdFx0XHR2YXIgbm9kZSA9IHRoaXNbaV07XG5cdFx0XHRpZihub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUgJiYgbm9kZS5uYW1lc3BhY2VVUkkgPT0gbmFtZXNwYWNlVVJJKXtcblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xuXG4vKipcbiAqIFRoZSBET01JbXBsZW1lbnRhdGlvbiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgcHJvdmlkaW5nIG1ldGhvZHNcbiAqIHdoaWNoIGFyZSBub3QgZGVwZW5kZW50IG9uIGFueSBwYXJ0aWN1bGFyIGRvY3VtZW50LlxuICogU3VjaCBhbiBvYmplY3QgaXMgcmV0dXJuZWQgYnkgdGhlIGBEb2N1bWVudC5pbXBsZW1lbnRhdGlvbmAgcHJvcGVydHkuXG4gKlxuICogX19UaGUgaW5kaXZpZHVhbCBtZXRob2RzIGRlc2NyaWJlIHRoZSBkaWZmZXJlbmNlcyBjb21wYXJlZCB0byB0aGUgc3BlY3MuX19cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbiBNRE5cbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy1ET00tTGV2ZWwtMS9sZXZlbC1vbmUtY29yZS5odG1sI0lELTEwMjE2MTQ5MCBET00gTGV2ZWwgMSBDb3JlIChJbml0aWFsKVxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItQ29yZS9jb3JlLmh0bWwjSUQtMTAyMTYxNDkwIERPTSBMZXZlbCAyIENvcmVcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvY29yZS5odG1sI0lELTEwMjE2MTQ5MCBET00gTGV2ZWwgMyBDb3JlXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9taW1wbGVtZW50YXRpb24gRE9NIExpdmluZyBTdGFuZGFyZFxuICovXG5mdW5jdGlvbiBET01JbXBsZW1lbnRhdGlvbigpIHtcbn1cblxuRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlID0ge1xuXHQvKipcblx0ICogVGhlIERPTUltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoKSBtZXRob2QgcmV0dXJucyBhIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIGlmIGEgZ2l2ZW4gZmVhdHVyZSBpcyBzdXBwb3J0ZWQuXG5cdCAqIFRoZSBkaWZmZXJlbnQgaW1wbGVtZW50YXRpb25zIGZhaXJseSBkaXZlcmdlZCBpbiB3aGF0IGtpbmQgb2YgZmVhdHVyZXMgd2VyZSByZXBvcnRlZC5cblx0ICogVGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBzcGVjIHNldHRsZWQgdG8gZm9yY2UgdGhpcyBtZXRob2QgdG8gYWx3YXlzIHJldHVybiB0cnVlLCB3aGVyZSB0aGUgZnVuY3Rpb25hbGl0eSB3YXMgYWNjdXJhdGUgYW5kIGluIHVzZS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgSXQgaXMgZGVwcmVjYXRlZCBhbmQgbW9kZXJuIGJyb3dzZXJzIHJldHVybiB0cnVlIGluIGFsbCBjYXNlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt2ZXJzaW9uXVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYWx3YXlzIHRydWVcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vaGFzRmVhdHVyZSBNRE5cblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvUkVDLURPTS1MZXZlbC0xL2xldmVsLW9uZS1jb3JlLmh0bWwjSUQtNUNFRDk0RDcgRE9NIExldmVsIDEgQ29yZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWhhc2ZlYXR1cmUgRE9NIExpdmluZyBTdGFuZGFyZFxuXHQgKi9cblx0aGFzRmVhdHVyZTogZnVuY3Rpb24oZmVhdHVyZSwgdmVyc2lvbikge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIFhNTCBEb2N1bWVudCBvYmplY3Qgb2YgdGhlIHNwZWNpZmllZCB0eXBlIHdpdGggaXRzIGRvY3VtZW50IGVsZW1lbnQuXG5cdCAqXG5cdCAqIF9fSXQgYmVoYXZlcyBzbGlnaHRseSBkaWZmZXJlbnQgZnJvbSB0aGUgZGVzY3JpcHRpb24gaW4gdGhlIGxpdmluZyBzdGFuZGFyZF9fOlxuXHQgKiAtIFRoZXJlIGlzIG5vIGludGVyZmFjZS9jbGFzcyBgWE1MRG9jdW1lbnRgLCBpdCByZXR1cm5zIGEgYERvY3VtZW50YCBpbnN0YW5jZS5cblx0ICogLSBgY29udGVudFR5cGVgLCBgZW5jb2RpbmdgLCBgbW9kZWAsIGBvcmlnaW5gLCBgdXJsYCBmaWVsZHMgYXJlIGN1cnJlbnRseSBub3QgZGVjbGFyZWQuXG5cdCAqIC0gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgdmFsaWRhdGluZyBuYW1lcyBvciBxdWFsaWZpZWQgbmFtZXNcblx0ICogICAod2hlbiBwYXJzaW5nIFhNTCBzdHJpbmdzLCB0aGUgU0FYIHBhcnNlciB0YWtlcyBjYXJlIG9mIHRoYXQpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IG5hbWVzcGFjZVVSSVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcXVhbGlmaWVkTmFtZVxuXHQgKiBAcGFyYW0ge0RvY3VtZW50VHlwZT1udWxsfSBkb2N0eXBlXG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudH1cblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSW1wbGVtZW50YXRpb24vY3JlYXRlRG9jdW1lbnQgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUNvcmUvY29yZS5odG1sI0xldmVsLTItQ29yZS1ET00tY3JlYXRlRG9jdW1lbnQgRE9NIExldmVsIDIgQ29yZSAoaW5pdGlhbClcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb21pbXBsZW1lbnRhdGlvbi1jcmVhdGVkb2N1bWVudCAgRE9NIExldmVsIDIgQ29yZVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jdmFsaWRhdGUtYW5kLWV4dHJhY3QgRE9NOiBWYWxpZGF0ZSBhbmQgZXh0cmFjdFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULU5hbWVTdGFydENoYXIgWE1MIFNwZWM6IE5hbWVzXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC1uYW1lcy8jbnMtcXVhbG5hbWVzIFhNTCBOYW1lc3BhY2VzOiBRdWFsaWZpZWQgbmFtZXNcblx0ICovXG5cdGNyZWF0ZURvY3VtZW50OiBmdW5jdGlvbihuYW1lc3BhY2VVUkksICBxdWFsaWZpZWROYW1lLCBkb2N0eXBlKXtcblx0XHR2YXIgZG9jID0gbmV3IERvY3VtZW50KCk7XG5cdFx0ZG9jLmltcGxlbWVudGF0aW9uID0gdGhpcztcblx0XHRkb2MuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdGRvYy5kb2N0eXBlID0gZG9jdHlwZSB8fCBudWxsO1xuXHRcdGlmIChkb2N0eXBlKXtcblx0XHRcdGRvYy5hcHBlbmRDaGlsZChkb2N0eXBlKTtcblx0XHR9XG5cdFx0aWYgKHF1YWxpZmllZE5hbWUpe1xuXHRcdFx0dmFyIHJvb3QgPSBkb2MuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG5cdFx0XHRkb2MuYXBwZW5kQ2hpbGQocm9vdCk7XG5cdFx0fVxuXHRcdHJldHVybiBkb2M7XG5cdH0sXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgZG9jdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gYHF1YWxpZmllZE5hbWVgLCBgcHVibGljSWRgLCBhbmQgYHN5c3RlbUlkYC5cblx0ICpcblx0ICogX19UaGlzIGJlaGF2aW9yIGlzIHNsaWdodGx5IGRpZmZlcmVudCBmcm9tIHRoZSBpbiB0aGUgc3BlY3NfXzpcblx0ICogLSB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCB2YWxpZGF0aW5nIG5hbWVzIG9yIHF1YWxpZmllZCBuYW1lc1xuXHQgKiAgICh3aGVuIHBhcnNpbmcgWE1MIHN0cmluZ3MsIHRoZSBTQVggcGFyc2VyIHRha2VzIGNhcmUgb2YgdGhhdClcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHF1YWxpZmllZE5hbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IFtwdWJsaWNJZF1cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtzeXN0ZW1JZF1cblx0ICogQHJldHVybnMge0RvY3VtZW50VHlwZX0gd2hpY2ggY2FuIGVpdGhlciBiZSB1c2VkIHdpdGggYERPTUltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50YCB1cG9uIGRvY3VtZW50IGNyZWF0aW9uXG5cdCAqIFx0XHRcdFx0ICBvciBjYW4gYmUgcHV0IGludG8gdGhlIGRvY3VtZW50IHZpYSBtZXRob2RzIGxpa2UgYE5vZGUuaW5zZXJ0QmVmb3JlKClgIG9yIGBOb2RlLnJlcGxhY2VDaGlsZCgpYFxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01JbXBsZW1lbnRhdGlvbi9jcmVhdGVEb2N1bWVudFR5cGUgTUROXG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUNvcmUvY29yZS5odG1sI0xldmVsLTItQ29yZS1ET00tY3JlYXRlRG9jVHlwZSBET00gTGV2ZWwgMiBDb3JlXG5cdCAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24tY3JlYXRlZG9jdW1lbnR0eXBlIERPTSBMaXZpbmcgU3RhbmRhcmRcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI3ZhbGlkYXRlLWFuZC1leHRyYWN0IERPTTogVmFsaWRhdGUgYW5kIGV4dHJhY3Rcblx0ICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1OYW1lU3RhcnRDaGFyIFhNTCBTcGVjOiBOYW1lc1xuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMvI25zLXF1YWxuYW1lcyBYTUwgTmFtZXNwYWNlczogUXVhbGlmaWVkIG5hbWVzXG5cdCAqL1xuXHRjcmVhdGVEb2N1bWVudFR5cGU6IGZ1bmN0aW9uKHF1YWxpZmllZE5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRG9jdW1lbnRUeXBlKCk7XG5cdFx0bm9kZS5uYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLnB1YmxpY0lkID0gcHVibGljSWQgfHwgJyc7XG5cdFx0bm9kZS5zeXN0ZW1JZCA9IHN5c3RlbUlkIHx8ICcnO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBAc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvUkVDLURPTS1MZXZlbC0yLUNvcmUtMjAwMDExMTMvY29yZS5odG1sI0lELTE5NTA2NDEyNDdcbiAqL1xuXG5mdW5jdGlvbiBOb2RlKCkge1xufTtcblxuTm9kZS5wcm90b3R5cGUgPSB7XG5cdGZpcnN0Q2hpbGQgOiBudWxsLFxuXHRsYXN0Q2hpbGQgOiBudWxsLFxuXHRwcmV2aW91c1NpYmxpbmcgOiBudWxsLFxuXHRuZXh0U2libGluZyA6IG51bGwsXG5cdGF0dHJpYnV0ZXMgOiBudWxsLFxuXHRwYXJlbnROb2RlIDogbnVsbCxcblx0Y2hpbGROb2RlcyA6IG51bGwsXG5cdG93bmVyRG9jdW1lbnQgOiBudWxsLFxuXHRub2RlVmFsdWUgOiBudWxsLFxuXHRuYW1lc3BhY2VVUkkgOiBudWxsLFxuXHRwcmVmaXggOiBudWxsLFxuXHRsb2NhbE5hbWUgOiBudWxsLFxuXHQvLyBNb2RpZmllZCBpbiBET00gTGV2ZWwgMjpcblx0aW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG5ld0NoaWxkLCByZWZDaGlsZCl7Ly9yYWlzZXNcblx0XHRyZXR1cm4gX2luc2VydEJlZm9yZSh0aGlzLG5ld0NoaWxkLHJlZkNoaWxkKTtcblx0fSxcblx0cmVwbGFjZUNoaWxkOmZ1bmN0aW9uKG5ld0NoaWxkLCBvbGRDaGlsZCl7Ly9yYWlzZXNcblx0XHRfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLG9sZENoaWxkLCBhc3NlcnRQcmVSZXBsYWNlbWVudFZhbGlkaXR5SW5Eb2N1bWVudCk7XG5cdFx0aWYob2xkQ2hpbGQpe1xuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG5cdFx0fVxuXHR9LFxuXHRyZW1vdmVDaGlsZDpmdW5jdGlvbihvbGRDaGlsZCl7XG5cdFx0cmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLG9sZENoaWxkKTtcblx0fSxcblx0YXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obmV3Q2hpbGQpe1xuXHRcdHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCxudWxsKTtcblx0fSxcblx0aGFzQ2hpbGROb2RlczpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmZpcnN0Q2hpbGQgIT0gbnVsbDtcblx0fSxcblx0Y2xvbmVOb2RlOmZ1bmN0aW9uKGRlZXApe1xuXHRcdHJldHVybiBjbG9uZU5vZGUodGhpcy5vd25lckRvY3VtZW50fHx0aGlzLHRoaXMsZGVlcCk7XG5cdH0sXG5cdC8vIE1vZGlmaWVkIGluIERPTSBMZXZlbCAyOlxuXHRub3JtYWxpemU6ZnVuY3Rpb24oKXtcblx0XHR2YXIgY2hpbGQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0dmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdGlmKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PSBURVhUX05PREUgJiYgY2hpbGQubm9kZVR5cGUgPT0gVEVYVF9OT0RFKXtcblx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZChuZXh0KTtcblx0XHRcdFx0Y2hpbGQuYXBwZW5kRGF0YShuZXh0LmRhdGEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdGNoaWxkLm5vcm1hbGl6ZSgpO1xuXHRcdFx0XHRjaGlsZCA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuICBcdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGlzU3VwcG9ydGVkOmZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pe1xuXHRcdHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShmZWF0dXJlLHZlcnNpb24pO1xuXHR9LFxuICAgIC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG4gICAgaGFzQXR0cmlidXRlczpmdW5jdGlvbigpe1xuICAgIFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGg+MDtcbiAgICB9LFxuXHQvKipcblx0ICogTG9vayB1cCB0aGUgcHJlZml4IGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIG5hbWVzcGFjZSBVUkksIHN0YXJ0aW5nIGZyb20gdGhpcyBub2RlLlxuXHQgKiAqKlRoZSBkZWZhdWx0IG5hbWVzcGFjZSBkZWNsYXJhdGlvbnMgYXJlIGlnbm9yZWQgYnkgdGhpcyBtZXRob2QuKipcblx0ICogU2VlIE5hbWVzcGFjZSBQcmVmaXggTG9va3VwIGZvciBkZXRhaWxzIG9uIHRoZSBhbGdvcml0aG0gdXNlZCBieSB0aGlzIG1ldGhvZC5cblx0ICpcblx0ICogX05vdGU6IFRoZSBpbXBsZW1lbnRhdGlvbiBzZWVtcyB0byBiZSBpbmNvbXBsZXRlIHdoZW4gY29tcGFyZWQgdG8gdGhlIGFsZ29yaXRobSBkZXNjcmliZWQgaW4gdGhlIHNwZWNzLl9cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSBuYW1lc3BhY2VVUklcblx0ICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG5cdCAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvY29yZS5odG1sI05vZGUzLWxvb2t1cE5hbWVzcGFjZVByZWZpeFxuXHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1Db3JlL25hbWVzcGFjZXMtYWxnb3JpdGhtcy5odG1sI2xvb2t1cE5hbWVzcGFjZVByZWZpeEFsZ29cblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1ub2RlLWxvb2t1cHByZWZpeFxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8zMjJcblx0ICovXG4gICAgbG9va3VwUHJlZml4OmZ1bmN0aW9uKG5hbWVzcGFjZVVSSSl7XG4gICAgXHR2YXIgZWwgPSB0aGlzO1xuICAgIFx0d2hpbGUoZWwpe1xuICAgIFx0XHR2YXIgbWFwID0gZWwuX25zTWFwO1xuICAgIFx0XHQvL2NvbnNvbGUuZGlyKG1hcClcbiAgICBcdFx0aWYobWFwKXtcbiAgICBcdFx0XHRmb3IodmFyIG4gaW4gbWFwKXtcblx0XHRcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWFwLCBuKSAmJiBtYXBbbl0gPT09IG5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbjtcblx0XHRcdFx0XHRcdH1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdFx0ZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERT9lbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICBcdH1cbiAgICBcdHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgLy8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMzpcbiAgICBsb29rdXBOYW1lc3BhY2VVUkk6ZnVuY3Rpb24ocHJlZml4KXtcbiAgICBcdHZhciBlbCA9IHRoaXM7XG4gICAgXHR3aGlsZShlbCl7XG4gICAgXHRcdHZhciBtYXAgPSBlbC5fbnNNYXA7XG4gICAgXHRcdC8vY29uc29sZS5kaXIobWFwKVxuICAgIFx0XHRpZihtYXApe1xuICAgIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtYXAsIHByZWZpeCkpe1xuICAgIFx0XHRcdFx0cmV0dXJuIG1hcFtwcmVmaXhdIDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdFx0ZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERT9lbC5vd25lckRvY3VtZW50IDogZWwucGFyZW50Tm9kZTtcbiAgICBcdH1cbiAgICBcdHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgLy8gSW50cm9kdWNlZCBpbiBET00gTGV2ZWwgMzpcbiAgICBpc0RlZmF1bHROYW1lc3BhY2U6ZnVuY3Rpb24obmFtZXNwYWNlVVJJKXtcbiAgICBcdHZhciBwcmVmaXggPSB0aGlzLmxvb2t1cFByZWZpeChuYW1lc3BhY2VVUkkpO1xuICAgIFx0cmV0dXJuIHByZWZpeCA9PSBudWxsO1xuICAgIH1cbn07XG5cblxuZnVuY3Rpb24gX3htbEVuY29kZXIoYyl7XG5cdHJldHVybiBjID09ICc8JyAmJiAnJmx0OycgfHxcbiAgICAgICAgIGMgPT0gJz4nICYmICcmZ3Q7JyB8fFxuICAgICAgICAgYyA9PSAnJicgJiYgJyZhbXA7JyB8fFxuICAgICAgICAgYyA9PSAnXCInICYmICcmcXVvdDsnIHx8XG4gICAgICAgICAnJiMnK2MuY2hhckNvZGVBdCgpKyc7J1xufVxuXG5cbmNvcHkoTm9kZVR5cGUsTm9kZSk7XG5jb3B5KE5vZGVUeXBlLE5vZGUucHJvdG90eXBlKTtcblxuLyoqXG4gKiBAcGFyYW0gY2FsbGJhY2sgcmV0dXJuIHRydWUgZm9yIGNvbnRpbnVlLGZhbHNlIGZvciBicmVha1xuICogQHJldHVybiBib29sZWFuIHRydWU6IGJyZWFrIHZpc2l0O1xuICovXG5mdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUsY2FsbGJhY2spe1xuXHRpZihjYWxsYmFjayhub2RlKSl7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYobm9kZSA9IG5vZGUuZmlyc3RDaGlsZCl7XG5cdFx0ZG97XG5cdFx0XHRpZihfdmlzaXROb2RlKG5vZGUsY2FsbGJhY2spKXtyZXR1cm4gdHJ1ZX1cbiAgICAgICAgfXdoaWxlKG5vZGU9bm9kZS5uZXh0U2libGluZylcbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBEb2N1bWVudCgpe1xuXHR0aGlzLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xufVxuXG5mdW5jdGlvbiBfb25BZGRBdHRyaWJ1dGUoZG9jLGVsLG5ld0F0dHIpe1xuXHRkb2MgJiYgZG9jLl9pbmMrKztcblx0dmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkkgO1xuXHRpZihucyA9PT0gTkFNRVNQQUNFLlhNTE5TKXtcblx0XHQvL3VwZGF0ZSBuYW1lc3BhY2Vcblx0XHRlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXg/bmV3QXR0ci5sb2NhbE5hbWU6JyddID0gbmV3QXR0ci52YWx1ZVxuXHR9XG59XG5cbmZ1bmN0aW9uIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsZWwsbmV3QXR0cixyZW1vdmUpe1xuXHRkb2MgJiYgZG9jLl9pbmMrKztcblx0dmFyIG5zID0gbmV3QXR0ci5uYW1lc3BhY2VVUkkgO1xuXHRpZihucyA9PT0gTkFNRVNQQUNFLlhNTE5TKXtcblx0XHQvL3VwZGF0ZSBuYW1lc3BhY2Vcblx0XHRkZWxldGUgZWwuX25zTWFwW25ld0F0dHIucHJlZml4P25ld0F0dHIubG9jYWxOYW1lOicnXVxuXHR9XG59XG5cbi8qKlxuICogVXBkYXRlcyBgZWwuY2hpbGROb2Rlc2AsIHVwZGF0aW5nIHRoZSBpbmRleGVkIGl0ZW1zIGFuZCBpdCdzIGBsZW5ndGhgLlxuICogUGFzc2luZyBgbmV3Q2hpbGRgIG1lYW5zIGl0IHdpbGwgYmUgYXBwZW5kZWQuXG4gKiBPdGhlcndpc2UgaXQncyBhc3N1bWVkIHRoYXQgYW4gaXRlbSBoYXMgYmVlbiByZW1vdmVkLFxuICogYW5kIGBlbC5maXJzdE5vZGVgIGFuZCBpdCdzIGAubmV4dFNpYmxpbmdgIGFyZSB1c2VkXG4gKiB0byB3YWxrIHRoZSBjdXJyZW50IGxpc3Qgb2YgY2hpbGQgbm9kZXMuXG4gKlxuICogQHBhcmFtIHtEb2N1bWVudH0gZG9jXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge05vZGV9IFtuZXdDaGlsZF1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9vblVwZGF0ZUNoaWxkIChkb2MsIGVsLCBuZXdDaGlsZCkge1xuXHRpZihkb2MgJiYgZG9jLl9pbmMpe1xuXHRcdGRvYy5faW5jKys7XG5cdFx0Ly91cGRhdGUgY2hpbGROb2Rlc1xuXHRcdHZhciBjcyA9IGVsLmNoaWxkTm9kZXM7XG5cdFx0aWYgKG5ld0NoaWxkKSB7XG5cdFx0XHRjc1tjcy5sZW5ndGgrK10gPSBuZXdDaGlsZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdHdoaWxlIChjaGlsZCkge1xuXHRcdFx0XHRjc1tpKytdID0gY2hpbGQ7XG5cdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHR9XG5cdFx0XHRjcy5sZW5ndGggPSBpO1xuXHRcdFx0ZGVsZXRlIGNzW2NzLmxlbmd0aF07XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgY29ubmVjdGlvbnMgYmV0d2VlbiBgcGFyZW50Tm9kZWAgYW5kIGBjaGlsZGBcbiAqIGFuZCBhbnkgZXhpc3RpbmcgYGNoaWxkLnByZXZpb3VzU2libGluZ2Agb3IgYGNoaWxkLm5leHRTaWJsaW5nYC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xMzVcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3htbGRvbS94bWxkb20vaXNzdWVzLzE0NVxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50Tm9kZVxuICogQHBhcmFtIHtOb2RlfSBjaGlsZFxuICogQHJldHVybnMge05vZGV9IHRoZSBjaGlsZCB0aGF0IHdhcyByZW1vdmVkLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gX3JlbW92ZUNoaWxkIChwYXJlbnROb2RlLCBjaGlsZCkge1xuXHR2YXIgcHJldmlvdXMgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG5cdHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdGlmIChwcmV2aW91cykge1xuXHRcdHByZXZpb3VzLm5leHRTaWJsaW5nID0gbmV4dDtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXh0O1xuXHR9XG5cdGlmIChuZXh0KSB7XG5cdFx0bmV4dC5wcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91cztcblx0fSBlbHNlIHtcblx0XHRwYXJlbnROb2RlLmxhc3RDaGlsZCA9IHByZXZpb3VzO1xuXHR9XG5cdGNoaWxkLnBhcmVudE5vZGUgPSBudWxsO1xuXHRjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuXHRjaGlsZC5uZXh0U2libGluZyA9IG51bGw7XG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSk7XG5cdHJldHVybiBjaGlsZDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBgbm9kZWAgY2FuIGJlIGEgcGFyZW50IGZvciBpbnNlcnRpb24uXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBoYXNWYWxpZFBhcmVudE5vZGVUeXBlKG5vZGUpIHtcblx0cmV0dXJuIChcblx0XHRub2RlICYmXG5cdFx0KG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSB8fCBub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpXG5cdCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgYG5vZGVgIGNhbiBiZSBpbnNlcnRlZCBhY2NvcmRpbmcgdG8gaXQncyBgbm9kZVR5cGVgLlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaGFzSW5zZXJ0YWJsZU5vZGVUeXBlKG5vZGUpIHtcblx0cmV0dXJuIChcblx0XHRub2RlICYmXG5cdFx0KGlzRWxlbWVudE5vZGUobm9kZSkgfHxcblx0XHRcdGlzVGV4dE5vZGUobm9kZSkgfHxcblx0XHRcdGlzRG9jVHlwZU5vZGUobm9kZSkgfHxcblx0XHRcdG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuXHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUgfHxcblx0XHRcdG5vZGUubm9kZVR5cGUgPT09IE5vZGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFKVxuXHQpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgbm9kZWAgaXMgYSBET0NUWVBFIG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRG9jVHlwZU5vZGUobm9kZSkge1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIG5vZGUgaXMgYW4gZWxlbWVudFxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50Tm9kZShub2RlKSB7XG5cdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYG5vZGVgIGlzIGEgdGV4dCBub2RlXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1RleHROb2RlKG5vZGUpIHtcblx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZW4gZWxlbWVudCBub2RlIGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgYGNoaWxkYCwgb3IgYXQgdGhlIGVuZCBpZiBjaGlsZCBpcyBmYWxzeSxcbiAqIGFjY29yZGluZyB0byB0aGUgcHJlc2VuY2UgYW5kIHBvc2l0aW9uIG9mIGEgZG9jdHlwZSBub2RlIG9uIHRoZSBzYW1lIGxldmVsLlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvYyBUaGUgZG9jdW1lbnQgbm9kZVxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCB0aGUgbm9kZSB0aGF0IHdvdWxkIGJlY29tZSB0aGUgbmV4dFNpYmxpbmcgaWYgdGhlIGVsZW1lbnQgd291bGQgYmUgaW5zZXJ0ZWRcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgYW4gZWxlbWVudCBjYW4gYmUgaW5zZXJ0ZWQgYmVmb3JlIGNoaWxkXG4gKiBAcHJpdmF0ZVxuICogaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50SW5zZXJ0aW9uUG9zc2libGUoZG9jLCBjaGlsZCkge1xuXHR2YXIgcGFyZW50Q2hpbGROb2RlcyA9IGRvYy5jaGlsZE5vZGVzIHx8IFtdO1xuXHRpZiAoZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0VsZW1lbnROb2RlKSB8fCBpc0RvY1R5cGVOb2RlKGNoaWxkKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR2YXIgZG9jVHlwZU5vZGUgPSBmaW5kKHBhcmVudENoaWxkTm9kZXMsIGlzRG9jVHlwZU5vZGUpO1xuXHRyZXR1cm4gIShjaGlsZCAmJiBkb2NUeXBlTm9kZSAmJiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoZG9jVHlwZU5vZGUpID4gcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgZW4gZWxlbWVudCBub2RlIGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgYGNoaWxkYCwgb3IgYXQgdGhlIGVuZCBpZiBjaGlsZCBpcyBmYWxzeSxcbiAqIGFjY29yZGluZyB0byB0aGUgcHJlc2VuY2UgYW5kIHBvc2l0aW9uIG9mIGEgZG9jdHlwZSBub2RlIG9uIHRoZSBzYW1lIGxldmVsLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZG9jIFRoZSBkb2N1bWVudCBub2RlXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkIHRoZSBub2RlIHRoYXQgd291bGQgYmVjb21lIHRoZSBuZXh0U2libGluZyBpZiB0aGUgZWxlbWVudCB3b3VsZCBiZSBpbnNlcnRlZFxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBhbiBlbGVtZW50IGNhbiBiZSBpbnNlcnRlZCBiZWZvcmUgY2hpbGRcbiAqIEBwcml2YXRlXG4gKiBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICovXG5mdW5jdGlvbiBpc0VsZW1lbnRSZXBsYWNlbWVudFBvc3NpYmxlKGRvYywgY2hpbGQpIHtcblx0dmFyIHBhcmVudENoaWxkTm9kZXMgPSBkb2MuY2hpbGROb2RlcyB8fCBbXTtcblxuXHRmdW5jdGlvbiBoYXNFbGVtZW50Q2hpbGRUaGF0SXNOb3RDaGlsZChub2RlKSB7XG5cdFx0cmV0dXJuIGlzRWxlbWVudE5vZGUobm9kZSkgJiYgbm9kZSAhPT0gY2hpbGQ7XG5cdH1cblxuXHRpZiAoZmluZChwYXJlbnRDaGlsZE5vZGVzLCBoYXNFbGVtZW50Q2hpbGRUaGF0SXNOb3RDaGlsZCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0dmFyIGRvY1R5cGVOb2RlID0gZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0RvY1R5cGVOb2RlKTtcblx0cmV0dXJuICEoY2hpbGQgJiYgZG9jVHlwZU5vZGUgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGRvY1R5cGVOb2RlKSA+IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBTdGVwcyAxLTUgb2YgdGhlIGNoZWNrcyBiZWZvcmUgaW5zZXJ0aW5nIGFuZCBiZWZvcmUgcmVwbGFjaW5nIGEgY2hpbGQgYXJlIHRoZSBzYW1lLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gcGFyZW50IHRoZSBwYXJlbnQgbm9kZSB0byBpbnNlcnQgYG5vZGVgIGludG9cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSB0aGUgbm9kZSB0byBpbnNlcnRcbiAqIEBwYXJhbSB7Tm9kZT19IGNoaWxkIHRoZSBub2RlIHRoYXQgc2hvdWxkIGJlY29tZSB0aGUgYG5leHRTaWJsaW5nYCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHRocm93cyBET01FeGNlcHRpb24gZm9yIHNldmVyYWwgbm9kZSBjb21iaW5hdGlvbnMgdGhhdCB3b3VsZCBjcmVhdGUgYSBET00gdGhhdCBpcyBub3Qgd2VsbC1mb3JtZWQuXG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBpZiBgY2hpbGRgIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3QgYSBjaGlsZCBvZiBgcGFyZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtcmVwbGFjZVxuICovXG5mdW5jdGlvbiBhc3NlcnRQcmVJbnNlcnRpb25WYWxpZGl0eTF0bzUocGFyZW50LCBub2RlLCBjaGlsZCkge1xuXHQvLyAxLiBJZiBgcGFyZW50YCBpcyBub3QgYSBEb2N1bWVudCwgRG9jdW1lbnRGcmFnbWVudCwgb3IgRWxlbWVudCBub2RlLCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdGlmICghaGFzVmFsaWRQYXJlbnROb2RlVHlwZShwYXJlbnQpKSB7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdVbmV4cGVjdGVkIHBhcmVudCBub2RlIHR5cGUgJyArIHBhcmVudC5ub2RlVHlwZSk7XG5cdH1cblx0Ly8gMi4gSWYgYG5vZGVgIGlzIGEgaG9zdC1pbmNsdWRpbmcgaW5jbHVzaXZlIGFuY2VzdG9yIG9mIGBwYXJlbnRgLCB0aGVuIHRocm93IGEgXCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIiBET01FeGNlcHRpb24uXG5cdC8vIG5vdCBpbXBsZW1lbnRlZCFcblx0Ly8gMy4gSWYgYGNoaWxkYCBpcyBub24tbnVsbCBhbmQgaXRzIHBhcmVudCBpcyBub3QgYHBhcmVudGAsIHRoZW4gdGhyb3cgYSBcIk5vdEZvdW5kRXJyb3JcIiBET01FeGNlcHRpb24uXG5cdGlmIChjaGlsZCAmJiBjaGlsZC5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcblx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKE5PVF9GT1VORF9FUlIsICdjaGlsZCBub3QgaW4gcGFyZW50Jyk7XG5cdH1cblx0aWYgKFxuXHRcdC8vIDQuIElmIGBub2RlYCBpcyBub3QgYSBEb2N1bWVudEZyYWdtZW50LCBEb2N1bWVudFR5cGUsIEVsZW1lbnQsIG9yIENoYXJhY3RlckRhdGEgbm9kZSwgdGhlbiB0aHJvdyBhIFwiSGllcmFyY2h5UmVxdWVzdEVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXHRcdCFoYXNJbnNlcnRhYmxlTm9kZVR5cGUobm9kZSkgfHxcblx0XHQvLyA1LiBJZiBlaXRoZXIgYG5vZGVgIGlzIGEgVGV4dCBub2RlIGFuZCBgcGFyZW50YCBpcyBhIGRvY3VtZW50LFxuXHRcdC8vIHRoZSBzYXggcGFyc2VyIGN1cnJlbnRseSBhZGRzIHRvcCBsZXZlbCB0ZXh0IG5vZGVzLCB0aGlzIHdpbGwgYmUgZml4ZWQgaW4gMC45LjBcblx0XHQvLyB8fCAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgJiYgcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG5cdFx0Ly8gb3IgYG5vZGVgIGlzIGEgZG9jdHlwZSBhbmQgYHBhcmVudGAgaXMgbm90IGEgZG9jdW1lbnQsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0XHQoaXNEb2NUeXBlTm9kZShub2RlKSAmJiBwYXJlbnQubm9kZVR5cGUgIT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcblx0KSB7XG5cdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcblx0XHRcdEhJRVJBUkNIWV9SRVFVRVNUX0VSUixcblx0XHRcdCdVbmV4cGVjdGVkIG5vZGUgdHlwZSAnICsgbm9kZS5ub2RlVHlwZSArICcgZm9yIHBhcmVudCBub2RlIHR5cGUgJyArIHBhcmVudC5ub2RlVHlwZVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogU3RlcCA2IG9mIHRoZSBjaGVja3MgYmVmb3JlIGluc2VydGluZyBhbmQgYmVmb3JlIHJlcGxhY2luZyBhIGNoaWxkIGFyZSBkaWZmZXJlbnQuXG4gKlxuICogQHBhcmFtIHtEb2N1bWVudH0gcGFyZW50IHRoZSBwYXJlbnQgbm9kZSB0byBpbnNlcnQgYG5vZGVgIGludG9cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSB0aGUgbm9kZSB0byBpbnNlcnRcbiAqIEBwYXJhbSB7Tm9kZSB8IHVuZGVmaW5lZH0gY2hpbGQgdGhlIG5vZGUgdGhhdCBzaG91bGQgYmVjb21lIHRoZSBgbmV4dFNpYmxpbmdgIG9mIGBub2RlYFxuICogQHJldHVybnMge05vZGV9XG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBmb3Igc2V2ZXJhbCBub2RlIGNvbWJpbmF0aW9ucyB0aGF0IHdvdWxkIGNyZWF0ZSBhIERPTSB0aGF0IGlzIG5vdCB3ZWxsLWZvcm1lZC5cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGlmIGBjaGlsZGAgaXMgcHJvdmlkZWQgYnV0IGlzIG5vdCBhIGNoaWxkIG9mIGBwYXJlbnRgLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1lbnN1cmUtcHJlLWluc2VydGlvbi12YWxpZGl0eVxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtbm9kZS1yZXBsYWNlXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByZUluc2VydGlvblZhbGlkaXR5SW5Eb2N1bWVudChwYXJlbnQsIG5vZGUsIGNoaWxkKSB7XG5cdHZhciBwYXJlbnRDaGlsZE5vZGVzID0gcGFyZW50LmNoaWxkTm9kZXMgfHwgW107XG5cdHZhciBub2RlQ2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcyB8fCBbXTtcblxuXHQvLyBEb2N1bWVudEZyYWdtZW50XG5cdGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcblx0XHR2YXIgbm9kZUNoaWxkRWxlbWVudHMgPSBub2RlQ2hpbGROb2Rlcy5maWx0ZXIoaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gSWYgbm9kZSBoYXMgbW9yZSB0aGFuIG9uZSBlbGVtZW50IGNoaWxkIG9yIGhhcyBhIFRleHQgbm9kZSBjaGlsZC5cblx0XHRpZiAobm9kZUNoaWxkRWxlbWVudHMubGVuZ3RoID4gMSB8fCBmaW5kKG5vZGVDaGlsZE5vZGVzLCBpc1RleHROb2RlKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdNb3JlIHRoYW4gb25lIGVsZW1lbnQgb3IgdGV4dCBpbiBmcmFnbWVudCcpO1xuXHRcdH1cblx0XHQvLyBPdGhlcndpc2UsIGlmIGBub2RlYCBoYXMgb25lIGVsZW1lbnQgY2hpbGQgYW5kIGVpdGhlciBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZCxcblx0XHQvLyBgY2hpbGRgIGlzIGEgZG9jdHlwZSwgb3IgYGNoaWxkYCBpcyBub24tbnVsbCBhbmQgYSBkb2N0eXBlIGlzIGZvbGxvd2luZyBgY2hpbGRgLlxuXHRcdGlmIChub2RlQ2hpbGRFbGVtZW50cy5sZW5ndGggPT09IDEgJiYgIWlzRWxlbWVudEluc2VydGlvblBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0VsZW1lbnQgaW4gZnJhZ21lbnQgY2FuIG5vdCBiZSBpbnNlcnRlZCBiZWZvcmUgZG9jdHlwZScpO1xuXHRcdH1cblx0fVxuXHQvLyBFbGVtZW50XG5cdGlmIChpc0VsZW1lbnROb2RlKG5vZGUpKSB7XG5cdFx0Ly8gYHBhcmVudGAgaGFzIGFuIGVsZW1lbnQgY2hpbGQsIGBjaGlsZGAgaXMgYSBkb2N0eXBlLFxuXHRcdC8vIG9yIGBjaGlsZGAgaXMgbm9uLW51bGwgYW5kIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAoIWlzRWxlbWVudEluc2VydGlvblBvc3NpYmxlKHBhcmVudCwgY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ09ubHkgb25lIGVsZW1lbnQgY2FuIGJlIGFkZGVkIGFuZCBvbmx5IGFmdGVyIGRvY3R5cGUnKTtcblx0XHR9XG5cdH1cblx0Ly8gRG9jdW1lbnRUeXBlXG5cdGlmIChpc0RvY1R5cGVOb2RlKG5vZGUpKSB7XG5cdFx0Ly8gYHBhcmVudGAgaGFzIGEgZG9jdHlwZSBjaGlsZCxcblx0XHRpZiAoZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0RvY1R5cGVOb2RlKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdPbmx5IG9uZSBkb2N0eXBlIGlzIGFsbG93ZWQnKTtcblx0XHR9XG5cdFx0dmFyIHBhcmVudEVsZW1lbnRDaGlsZCA9IGZpbmQocGFyZW50Q2hpbGROb2RlcywgaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gYGNoaWxkYCBpcyBub24tbnVsbCBhbmQgYW4gZWxlbWVudCBpcyBwcmVjZWRpbmcgYGNoaWxkYCxcblx0XHRpZiAoY2hpbGQgJiYgcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKHBhcmVudEVsZW1lbnRDaGlsZCkgPCBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ0RvY3R5cGUgY2FuIG9ubHkgYmUgaW5zZXJ0ZWQgYmVmb3JlIGFuIGVsZW1lbnQnKTtcblx0XHR9XG5cdFx0Ly8gb3IgYGNoaWxkYCBpcyBudWxsIGFuZCBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZC5cblx0XHRpZiAoIWNoaWxkICYmIHBhcmVudEVsZW1lbnRDaGlsZCkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4Y2VwdGlvbihISUVSQVJDSFlfUkVRVUVTVF9FUlIsICdEb2N0eXBlIGNhbiBub3QgYmUgYXBwZW5kZWQgc2luY2UgZWxlbWVudCBpcyBwcmVzZW50Jyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIFN0ZXAgNiBvZiB0aGUgY2hlY2tzIGJlZm9yZSBpbnNlcnRpbmcgYW5kIGJlZm9yZSByZXBsYWNpbmcgYSBjaGlsZCBhcmUgZGlmZmVyZW50LlxuICpcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGUgfCB1bmRlZmluZWR9IGNoaWxkIHRoZSBub2RlIHRoYXQgc2hvdWxkIGJlY29tZSB0aGUgYG5leHRTaWJsaW5nYCBvZiBgbm9kZWBcbiAqIEByZXR1cm5zIHtOb2RlfVxuICogQHRocm93cyBET01FeGNlcHRpb24gZm9yIHNldmVyYWwgbm9kZSBjb21iaW5hdGlvbnMgdGhhdCB3b3VsZCBjcmVhdGUgYSBET00gdGhhdCBpcyBub3Qgd2VsbC1mb3JtZWQuXG4gKiBAdGhyb3dzIERPTUV4Y2VwdGlvbiBpZiBgY2hpbGRgIGlzIHByb3ZpZGVkIGJ1dCBpcyBub3QgYSBjaGlsZCBvZiBgcGFyZW50YC5cbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtZW5zdXJlLXByZS1pbnNlcnRpb24tdmFsaWRpdHlcbiAqIEBzZWUgaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW5vZGUtcmVwbGFjZVxuICovXG5mdW5jdGlvbiBhc3NlcnRQcmVSZXBsYWNlbWVudFZhbGlkaXR5SW5Eb2N1bWVudChwYXJlbnQsIG5vZGUsIGNoaWxkKSB7XG5cdHZhciBwYXJlbnRDaGlsZE5vZGVzID0gcGFyZW50LmNoaWxkTm9kZXMgfHwgW107XG5cdHZhciBub2RlQ2hpbGROb2RlcyA9IG5vZGUuY2hpbGROb2RlcyB8fCBbXTtcblxuXHQvLyBEb2N1bWVudEZyYWdtZW50XG5cdGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcblx0XHR2YXIgbm9kZUNoaWxkRWxlbWVudHMgPSBub2RlQ2hpbGROb2Rlcy5maWx0ZXIoaXNFbGVtZW50Tm9kZSk7XG5cdFx0Ly8gSWYgYG5vZGVgIGhhcyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgY2hpbGQgb3IgaGFzIGEgVGV4dCBub2RlIGNoaWxkLlxuXHRcdGlmIChub2RlQ2hpbGRFbGVtZW50cy5sZW5ndGggPiAxIHx8IGZpbmQobm9kZUNoaWxkTm9kZXMsIGlzVGV4dE5vZGUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ01vcmUgdGhhbiBvbmUgZWxlbWVudCBvciB0ZXh0IGluIGZyYWdtZW50Jyk7XG5cdFx0fVxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYG5vZGVgIGhhcyBvbmUgZWxlbWVudCBjaGlsZCBhbmQgZWl0aGVyIGBwYXJlbnRgIGhhcyBhbiBlbGVtZW50IGNoaWxkIHRoYXQgaXMgbm90IGBjaGlsZGAgb3IgYSBkb2N0eXBlIGlzIGZvbGxvd2luZyBgY2hpbGRgLlxuXHRcdGlmIChub2RlQ2hpbGRFbGVtZW50cy5sZW5ndGggPT09IDEgJiYgIWlzRWxlbWVudFJlcGxhY2VtZW50UG9zc2libGUocGFyZW50LCBjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRWxlbWVudCBpbiBmcmFnbWVudCBjYW4gbm90IGJlIGluc2VydGVkIGJlZm9yZSBkb2N0eXBlJyk7XG5cdFx0fVxuXHR9XG5cdC8vIEVsZW1lbnRcblx0aWYgKGlzRWxlbWVudE5vZGUobm9kZSkpIHtcblx0XHQvLyBgcGFyZW50YCBoYXMgYW4gZWxlbWVudCBjaGlsZCB0aGF0IGlzIG5vdCBgY2hpbGRgIG9yIGEgZG9jdHlwZSBpcyBmb2xsb3dpbmcgYGNoaWxkYC5cblx0XHRpZiAoIWlzRWxlbWVudFJlcGxhY2VtZW50UG9zc2libGUocGFyZW50LCBjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnT25seSBvbmUgZWxlbWVudCBjYW4gYmUgYWRkZWQgYW5kIG9ubHkgYWZ0ZXIgZG9jdHlwZScpO1xuXHRcdH1cblx0fVxuXHQvLyBEb2N1bWVudFR5cGVcblx0aWYgKGlzRG9jVHlwZU5vZGUobm9kZSkpIHtcblx0XHRmdW5jdGlvbiBoYXNEb2N0eXBlQ2hpbGRUaGF0SXNOb3RDaGlsZChub2RlKSB7XG5cdFx0XHRyZXR1cm4gaXNEb2NUeXBlTm9kZShub2RlKSAmJiBub2RlICE9PSBjaGlsZDtcblx0XHR9XG5cblx0XHQvLyBgcGFyZW50YCBoYXMgYSBkb2N0eXBlIGNoaWxkIHRoYXQgaXMgbm90IGBjaGlsZGAsXG5cdFx0aWYgKGZpbmQocGFyZW50Q2hpbGROb2RlcywgaGFzRG9jdHlwZUNoaWxkVGhhdElzTm90Q2hpbGQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKEhJRVJBUkNIWV9SRVFVRVNUX0VSUiwgJ09ubHkgb25lIGRvY3R5cGUgaXMgYWxsb3dlZCcpO1xuXHRcdH1cblx0XHR2YXIgcGFyZW50RWxlbWVudENoaWxkID0gZmluZChwYXJlbnRDaGlsZE5vZGVzLCBpc0VsZW1lbnROb2RlKTtcblx0XHQvLyBvciBhbiBlbGVtZW50IGlzIHByZWNlZGluZyBgY2hpbGRgLlxuXHRcdGlmIChjaGlsZCAmJiBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YocGFyZW50RWxlbWVudENoaWxkKSA8IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCkpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSElFUkFSQ0hZX1JFUVVFU1RfRVJSLCAnRG9jdHlwZSBjYW4gb25seSBiZSBpbnNlcnRlZCBiZWZvcmUgYW4gZWxlbWVudCcpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCB0aGUgcGFyZW50IG5vZGUgdG8gaW5zZXJ0IGBub2RlYCBpbnRvXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgdGhlIG5vZGUgdG8gaW5zZXJ0XG4gKiBAcGFyYW0ge05vZGU9fSBjaGlsZCB0aGUgbm9kZSB0aGF0IHNob3VsZCBiZWNvbWUgdGhlIGBuZXh0U2libGluZ2Agb2YgYG5vZGVgXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIGZvciBzZXZlcmFsIG5vZGUgY29tYmluYXRpb25zIHRoYXQgd291bGQgY3JlYXRlIGEgRE9NIHRoYXQgaXMgbm90IHdlbGwtZm9ybWVkLlxuICogQHRocm93cyBET01FeGNlcHRpb24gaWYgYGNoaWxkYCBpcyBwcm92aWRlZCBidXQgaXMgbm90IGEgY2hpbGQgb2YgYHBhcmVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ub2RlLWVuc3VyZS1wcmUtaW5zZXJ0aW9uLXZhbGlkaXR5XG4gKi9cbmZ1bmN0aW9uIF9pbnNlcnRCZWZvcmUocGFyZW50LCBub2RlLCBjaGlsZCwgX2luRG9jdW1lbnRBc3NlcnRpb24pIHtcblx0Ly8gVG8gZW5zdXJlIHByZS1pbnNlcnRpb24gdmFsaWRpdHkgb2YgYSBub2RlIGludG8gYSBwYXJlbnQgYmVmb3JlIGEgY2hpbGQsIHJ1biB0aGVzZSBzdGVwczpcblx0YXNzZXJ0UHJlSW5zZXJ0aW9uVmFsaWRpdHkxdG81KHBhcmVudCwgbm9kZSwgY2hpbGQpO1xuXG5cdC8vIElmIHBhcmVudCBpcyBhIGRvY3VtZW50LCBhbmQgYW55IG9mIHRoZSBzdGF0ZW1lbnRzIGJlbG93LCBzd2l0Y2hlZCBvbiB0aGUgaW50ZXJmYWNlIG5vZGUgaW1wbGVtZW50cyxcblx0Ly8gYXJlIHRydWUsIHRoZW4gdGhyb3cgYSBcIkhpZXJhcmNoeVJlcXVlc3RFcnJvclwiIERPTUV4Y2VwdGlvbi5cblx0aWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG5cdFx0KF9pbkRvY3VtZW50QXNzZXJ0aW9uIHx8IGFzc2VydFByZUluc2VydGlvblZhbGlkaXR5SW5Eb2N1bWVudCkocGFyZW50LCBub2RlLCBjaGlsZCk7XG5cdH1cblxuXHR2YXIgY3AgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmKGNwKXtcblx0XHRjcC5yZW1vdmVDaGlsZChub2RlKTsvL3JlbW92ZSBhbmQgdXBkYXRlXG5cdH1cblx0aWYobm9kZS5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7XG5cdFx0dmFyIG5ld0ZpcnN0ID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdGlmIChuZXdGaXJzdCA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cdFx0dmFyIG5ld0xhc3QgPSBub2RlLmxhc3RDaGlsZDtcblx0fWVsc2V7XG5cdFx0bmV3Rmlyc3QgPSBuZXdMYXN0ID0gbm9kZTtcblx0fVxuXHR2YXIgcHJlID0gY2hpbGQgPyBjaGlsZC5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnQubGFzdENoaWxkO1xuXG5cdG5ld0ZpcnN0LnByZXZpb3VzU2libGluZyA9IHByZTtcblx0bmV3TGFzdC5uZXh0U2libGluZyA9IGNoaWxkO1xuXG5cblx0aWYocHJlKXtcblx0XHRwcmUubmV4dFNpYmxpbmcgPSBuZXdGaXJzdDtcblx0fWVsc2V7XG5cdFx0cGFyZW50LmZpcnN0Q2hpbGQgPSBuZXdGaXJzdDtcblx0fVxuXHRpZihjaGlsZCA9PSBudWxsKXtcblx0XHRwYXJlbnQubGFzdENoaWxkID0gbmV3TGFzdDtcblx0fWVsc2V7XG5cdFx0Y2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3TGFzdDtcblx0fVxuXHRkb3tcblx0XHRuZXdGaXJzdC5wYXJlbnROb2RlID0gcGFyZW50O1xuXHRcdC8vIFVwZGF0ZSBvd25lckRvY3VtZW50IGZvciBlYWNoIG5vZGUgYmVpbmcgaW5zZXJ0ZWRcblx0XHR2YXIgdGFyZ2V0RG9jID0gcGFyZW50Lm93bmVyRG9jdW1lbnQgfHwgcGFyZW50O1xuXHRcdF91cGRhdGVPd25lckRvY3VtZW50KG5ld0ZpcnN0LCB0YXJnZXREb2MpO1xuXHR9d2hpbGUobmV3Rmlyc3QgIT09IG5ld0xhc3QgJiYgKG5ld0ZpcnN0PSBuZXdGaXJzdC5uZXh0U2libGluZykpXG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudC5vd25lckRvY3VtZW50fHxwYXJlbnQsIHBhcmVudCk7XG5cdC8vY29uc29sZS5sb2cocGFyZW50Lmxhc3RDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKVxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG5cdFx0bm9kZS5maXJzdENoaWxkID0gbm9kZS5sYXN0Q2hpbGQgPSBudWxsO1xuXHR9XG5cdHJldHVybiBub2RlO1xufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHVwZGF0ZXMgdGhlIG93bmVyRG9jdW1lbnQgcHJvcGVydHkgZm9yIGEgbm9kZSBhbmQgYWxsIGl0cyBkZXNjZW5kYW50c1xuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBuZXdPd25lckRvY3VtZW50XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfdXBkYXRlT3duZXJEb2N1bWVudChub2RlLCBuZXdPd25lckRvY3VtZW50KSB7XG5cdGlmIChub2RlLm93bmVyRG9jdW1lbnQgPT09IG5ld093bmVyRG9jdW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdG5vZGUub3duZXJEb2N1bWVudCA9IG5ld093bmVyRG9jdW1lbnQ7XG5cdFxuXHQvLyBVcGRhdGUgYXR0cmlidXRlcyBpZiB0aGlzIGlzIGFuIGVsZW1lbnRcblx0aWYgKG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSAmJiBub2RlLmF0dHJpYnV0ZXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHIgPSBub2RlLmF0dHJpYnV0ZXMuaXRlbShpKTtcblx0XHRcdGlmIChhdHRyKSB7XG5cdFx0XHRcdGF0dHIub3duZXJEb2N1bWVudCA9IG5ld093bmVyRG9jdW1lbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBSZWN1cnNpdmVseSB1cGRhdGUgY2hpbGQgbm9kZXNcblx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHR3aGlsZSAoY2hpbGQpIHtcblx0XHRfdXBkYXRlT3duZXJEb2N1bWVudChjaGlsZCwgbmV3T3duZXJEb2N1bWVudCk7XG5cdFx0Y2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcblx0fVxufVxuXG4vKipcbiAqIEFwcGVuZHMgYG5ld0NoaWxkYCB0byBgcGFyZW50Tm9kZWAuXG4gKiBJZiBgbmV3Q2hpbGRgIGlzIGFscmVhZHkgY29ubmVjdGVkIHRvIGEgYHBhcmVudE5vZGVgIGl0IGlzIGZpcnN0IHJlbW92ZWQgZnJvbSBpdC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS94bWxkb20veG1sZG9tL2lzc3Vlcy8xMzVcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3htbGRvbS94bWxkb20vaXNzdWVzLzE0NVxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnROb2RlXG4gKiBAcGFyYW0ge05vZGV9IG5ld0NoaWxkXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9hcHBlbmRTaW5nbGVDaGlsZCAocGFyZW50Tm9kZSwgbmV3Q2hpbGQpIHtcblx0aWYgKG5ld0NoaWxkLnBhcmVudE5vZGUpIHtcblx0XHRuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcblx0fVxuXHRuZXdDaGlsZC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcblx0bmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdG5ld0NoaWxkLm5leHRTaWJsaW5nID0gbnVsbDtcblx0aWYgKG5ld0NoaWxkLnByZXZpb3VzU2libGluZykge1xuXHRcdG5ld0NoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuXHR9IGVsc2Uge1xuXHRcdHBhcmVudE5vZGUuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuXHR9XG5cdHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG5cdF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSwgbmV3Q2hpbGQpO1xuXHRcblx0Ly8gVXBkYXRlIG93bmVyRG9jdW1lbnQgZm9yIHRoZSBuZXcgY2hpbGQgYW5kIGFsbCBpdHMgZGVzY2VuZGFudHNcblx0dmFyIHRhcmdldERvYyA9IHBhcmVudE5vZGUub3duZXJEb2N1bWVudCB8fCBwYXJlbnROb2RlO1xuXHRfdXBkYXRlT3duZXJEb2N1bWVudChuZXdDaGlsZCwgdGFyZ2V0RG9jKTtcblx0XG5cdHJldHVybiBuZXdDaGlsZDtcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlID0ge1xuXHQvL2ltcGxlbWVudGF0aW9uIDogbnVsbCxcblx0bm9kZU5hbWUgOiAgJyNkb2N1bWVudCcsXG5cdG5vZGVUeXBlIDogIERPQ1VNRU5UX05PREUsXG5cdC8qKlxuXHQgKiBUaGUgRG9jdW1lbnRUeXBlIG5vZGUgb2YgdGhlIGRvY3VtZW50LlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHR5cGUgRG9jdW1lbnRUeXBlXG5cdCAqL1xuXHRkb2N0eXBlIDogIG51bGwsXG5cdGRvY3VtZW50RWxlbWVudCA6ICBudWxsLFxuXHRfaW5jIDogMSxcblxuXHRpbnNlcnRCZWZvcmUgOiAgZnVuY3Rpb24obmV3Q2hpbGQsIHJlZkNoaWxkKXsvL3JhaXNlc1xuXHRcdGlmKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdFx0dmFyIGNoaWxkID0gbmV3Q2hpbGQuZmlyc3RDaGlsZDtcblx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0dmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblx0XHRcdFx0dGhpcy5pbnNlcnRCZWZvcmUoY2hpbGQscmVmQ2hpbGQpO1xuXHRcdFx0XHRjaGlsZCA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3Q2hpbGQ7XG5cdFx0fVxuXHRcdF9pbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsIHJlZkNoaWxkKTtcblx0XHRfdXBkYXRlT3duZXJEb2N1bWVudChuZXdDaGlsZCwgdGhpcyk7XG5cdFx0aWYgKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09PSBudWxsICYmIG5ld0NoaWxkLm5vZGVUeXBlID09PSBFTEVNRU5UX05PREUpIHtcblx0XHRcdHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gbmV3Q2hpbGQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ld0NoaWxkO1xuXHR9LFxuXHRyZW1vdmVDaGlsZCA6ICBmdW5jdGlvbihvbGRDaGlsZCl7XG5cdFx0aWYodGhpcy5kb2N1bWVudEVsZW1lbnQgPT0gb2xkQ2hpbGQpe1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gX3JlbW92ZUNoaWxkKHRoaXMsb2xkQ2hpbGQpO1xuXHR9LFxuXHRyZXBsYWNlQ2hpbGQ6IGZ1bmN0aW9uIChuZXdDaGlsZCwgb2xkQ2hpbGQpIHtcblx0XHQvL3JhaXNlc1xuXHRcdF9pbnNlcnRCZWZvcmUodGhpcywgbmV3Q2hpbGQsIG9sZENoaWxkLCBhc3NlcnRQcmVSZXBsYWNlbWVudFZhbGlkaXR5SW5Eb2N1bWVudCk7XG5cdFx0X3VwZGF0ZU93bmVyRG9jdW1lbnQobmV3Q2hpbGQsIHRoaXMpO1xuXHRcdGlmIChvbGRDaGlsZCkge1xuXHRcdFx0dGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG5cdFx0fVxuXHRcdGlmIChpc0VsZW1lbnROb2RlKG5ld0NoaWxkKSkge1xuXHRcdFx0dGhpcy5kb2N1bWVudEVsZW1lbnQgPSBuZXdDaGlsZDtcblx0XHR9XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGltcG9ydE5vZGUgOiBmdW5jdGlvbihpbXBvcnRlZE5vZGUsZGVlcCl7XG5cdFx0cmV0dXJuIGltcG9ydE5vZGUodGhpcyxpbXBvcnRlZE5vZGUsZGVlcCk7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGdldEVsZW1lbnRCeUlkIDpcdGZ1bmN0aW9uKGlkKXtcblx0XHR2YXIgcnR2ID0gbnVsbDtcblx0XHRfdmlzaXROb2RlKHRoaXMuZG9jdW1lbnRFbGVtZW50LGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0aWYobm9kZS5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUpe1xuXHRcdFx0XHRpZihub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBpZCl7XG5cdFx0XHRcdFx0cnR2ID0gbm9kZTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHJ0djtcblx0fSxcblxuXHQvKipcblx0ICogVGhlIGBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lYCBtZXRob2Qgb2YgYERvY3VtZW50YCBpbnRlcmZhY2UgcmV0dXJucyBhbiBhcnJheS1saWtlIG9iamVjdFxuXHQgKiBvZiBhbGwgY2hpbGQgZWxlbWVudHMgd2hpY2ggaGF2ZSAqKmFsbCoqIG9mIHRoZSBnaXZlbiBjbGFzcyBuYW1lKHMpLlxuXHQgKlxuXHQgKiBSZXR1cm5zIGFuIGVtcHR5IGxpc3QgaWYgYGNsYXNzZU5hbWVzYCBpcyBhbiBlbXB0eSBzdHJpbmcgb3Igb25seSBjb250YWlucyBIVE1MIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMuXG5cdCAqXG5cdCAqXG5cdCAqIFdhcm5pbmc6IFRoaXMgaXMgYSBsaXZlIExpdmVOb2RlTGlzdC5cblx0ICogQ2hhbmdlcyBpbiB0aGUgRE9NIHdpbGwgcmVmbGVjdCBpbiB0aGUgYXJyYXkgYXMgdGhlIGNoYW5nZXMgb2NjdXIuXG5cdCAqIElmIGFuIGVsZW1lbnQgc2VsZWN0ZWQgYnkgdGhpcyBhcnJheSBubyBsb25nZXIgcXVhbGlmaWVzIGZvciB0aGUgc2VsZWN0b3IsXG5cdCAqIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSByZW1vdmVkLiBCZSBhd2FyZSBvZiB0aGlzIGZvciBpdGVyYXRpb24gcHVycG9zZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVzIGlzIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgY2xhc3MgbmFtZShzKSB0byBtYXRjaDsgbXVsdGlwbGUgY2xhc3MgbmFtZXMgYXJlIHNlcGFyYXRlZCBieSAoQVNDSUktKXdoaXRlc3BhY2Vcblx0ICpcblx0ICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvZ2V0RWxlbWVudHNCeUNsYXNzTmFtZVxuXHQgKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1nZXRlbGVtZW50c2J5Y2xhc3NuYW1lXG5cdCAqL1xuXHRnZXRFbGVtZW50c0J5Q2xhc3NOYW1lOiBmdW5jdGlvbihjbGFzc05hbWVzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXNTZXQgPSB0b09yZGVyZWRTZXQoY2xhc3NOYW1lcylcblx0XHRyZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLCBmdW5jdGlvbihiYXNlKSB7XG5cdFx0XHR2YXIgbHMgPSBbXTtcblx0XHRcdGlmIChjbGFzc05hbWVzU2V0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0X3Zpc2l0Tm9kZShiYXNlLmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0XHRcdGlmKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRcdFx0XHR2YXIgbm9kZUNsYXNzTmFtZXMgPSBub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKVxuXHRcdFx0XHRcdFx0Ly8gY2FuIGJlIG51bGwgaWYgdGhlIGF0dHJpYnV0ZSBkb2VzIG5vdCBleGlzdFxuXHRcdFx0XHRcdFx0aWYgKG5vZGVDbGFzc05hbWVzKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGJlZm9yZSBzcGxpdHRpbmcgYW5kIGl0ZXJhdGluZyBqdXN0IGNvbXBhcmUgdGhlbSBmb3IgdGhlIG1vc3QgY29tbW9uIGNhc2Vcblx0XHRcdFx0XHRcdFx0dmFyIG1hdGNoZXMgPSBjbGFzc05hbWVzID09PSBub2RlQ2xhc3NOYW1lcztcblx0XHRcdFx0XHRcdFx0aWYgKCFtYXRjaGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIG5vZGVDbGFzc05hbWVzU2V0ID0gdG9PcmRlcmVkU2V0KG5vZGVDbGFzc05hbWVzKVxuXHRcdFx0XHRcdFx0XHRcdG1hdGNoZXMgPSBjbGFzc05hbWVzU2V0LmV2ZXJ5KGFycmF5SW5jbHVkZXMobm9kZUNsYXNzTmFtZXNTZXQpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmKG1hdGNoZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRscy5wdXNoKG5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBscztcblx0XHR9KTtcblx0fSxcblxuXHQvL2RvY3VtZW50IGZhY3RvcnkgbWV0aG9kOlxuXHRjcmVhdGVFbGVtZW50IDpcdGZ1bmN0aW9uKHRhZ05hbWUpe1xuXHRcdHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuXHRcdG5vZGUubm9kZU5hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUudGFnTmFtZSA9IHRhZ05hbWU7XG5cdFx0bm9kZS5sb2NhbE5hbWUgPSB0YWdOYW1lO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdHZhciBhdHRyc1x0PSBub2RlLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG5cdFx0YXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgOlx0ZnVuY3Rpb24oKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fSxcblx0Y3JlYXRlVGV4dE5vZGUgOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgVGV4dCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUNvbW1lbnQgOlx0ZnVuY3Rpb24oZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQ29tbWVudCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgbmV3IENEQVRBU2VjdGlvbiBub2RlIHdob3NlIGRhdGEgaXMgYGRhdGFgLlxuXHQgKlxuXHQgKiBfX1RoaXMgaW1wbGVtZW50YXRpb24gZGlmZmVycyBmcm9tIHRoZSBzcGVjaWZpY2F0aW9uOl9fXG5cdCAqIC0gY2FsbGluZyB0aGlzIG1ldGhvZCBvbiBhbiBIVE1MIGRvY3VtZW50IGRvZXMgbm90IHRocm93IGBOb3RTdXBwb3J0ZWRFcnJvcmAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhXG5cdCAqIEByZXR1cm5zIHtDREFUQVNlY3Rpb259XG5cdCAqIEB0aHJvd3MgRE9NRXhjZXB0aW9uIHdpdGggY29kZSBgSU5WQUxJRF9DSEFSQUNURVJfRVJSYCBpZiBgZGF0YWAgY29udGFpbnMgYFwiXV0+XCJgLlxuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9jcmVhdGVDREFUQVNlY3Rpb25cblx0ICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1kb2N1bWVudC1jcmVhdGVjZGF0YXNlY3Rpb25cblx0ICovXG5cdGNyZWF0ZUNEQVRBU2VjdGlvbiA6XHRmdW5jdGlvbihkYXRhKXtcblx0XHRpZiAoZGF0YS5pbmRleE9mKCddXT4nKSAhPT0gLTEpIHtcblx0XHRcdHRocm93IG5ldyBET01FeGNlcHRpb24oSU5WQUxJRF9DSEFSQUNURVJfRVJSLCAnZGF0YSBjb250YWlucyBcIl1dPlwiJyk7XG5cdFx0fVxuXHRcdHZhciBub2RlID0gbmV3IENEQVRBU2VjdGlvbigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5hcHBlbmREYXRhKGRhdGEpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbiA6XHRmdW5jdGlvbih0YXJnZXQsZGF0YSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgUHJvY2Vzc2luZ0luc3RydWN0aW9uKCk7XG5cdFx0bm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcblx0XHRub2RlLnRhZ05hbWUgPSBub2RlLm5vZGVOYW1lID0gbm9kZS50YXJnZXQgPSB0YXJnZXQ7XG5cdFx0bm9kZS5ub2RlVmFsdWUgPSBub2RlLmRhdGEgPSBkYXRhO1xuXHRcdHJldHVybiBub2RlO1xuXHR9LFxuXHRjcmVhdGVBdHRyaWJ1dGUgOlx0ZnVuY3Rpb24obmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgQXR0cigpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudFx0PSB0aGlzO1xuXHRcdG5vZGUubmFtZSA9IG5hbWU7XG5cdFx0bm9kZS5ub2RlTmFtZVx0PSBuYW1lO1xuXHRcdG5vZGUubG9jYWxOYW1lID0gbmFtZTtcblx0XHRub2RlLnNwZWNpZmllZCA9IHRydWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdGNyZWF0ZUVudGl0eVJlZmVyZW5jZSA6XHRmdW5jdGlvbihuYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBFbnRpdHlSZWZlcmVuY2UoKTtcblx0XHRub2RlLm93bmVyRG9jdW1lbnRcdD0gdGhpcztcblx0XHRub2RlLm5vZGVOYW1lXHQ9IG5hbWU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGNyZWF0ZUVsZW1lbnROUyA6XHRmdW5jdGlvbihuYW1lc3BhY2VVUkkscXVhbGlmaWVkTmFtZSl7XG5cdFx0dmFyIG5vZGUgPSBuZXcgRWxlbWVudCgpO1xuXHRcdHZhciBwbCA9IHF1YWxpZmllZE5hbWUuc3BsaXQoJzonKTtcblx0XHR2YXIgYXR0cnNcdD0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuXHRcdG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS50YWdOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcblx0XHRpZihwbC5sZW5ndGggPT0gMil7XG5cdFx0XHRub2RlLnByZWZpeCA9IHBsWzBdO1xuXHRcdFx0bm9kZS5sb2NhbE5hbWUgPSBwbFsxXTtcblx0XHR9ZWxzZXtcblx0XHRcdC8vZWwucHJlZml4ID0gbnVsbDtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHR9XG5cdFx0YXR0cnMuX293bmVyRWxlbWVudCA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH0sXG5cdC8vIEludHJvZHVjZWQgaW4gRE9NIExldmVsIDI6XG5cdGNyZWF0ZUF0dHJpYnV0ZU5TIDpcdGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSxxdWFsaWZpZWROYW1lKXtcblx0XHR2YXIgbm9kZSA9IG5ldyBBdHRyKCk7XG5cdFx0dmFyIHBsID0gcXVhbGlmaWVkTmFtZS5zcGxpdCgnOicpO1xuXHRcdG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG5cdFx0bm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0bm9kZS5uYW1lID0gcXVhbGlmaWVkTmFtZTtcblx0XHRub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcblx0XHRub2RlLnNwZWNpZmllZCA9IHRydWU7XG5cdFx0aWYocGwubGVuZ3RoID09IDIpe1xuXHRcdFx0bm9kZS5wcmVmaXggPSBwbFswXTtcblx0XHRcdG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG5cdFx0fWVsc2V7XG5cdFx0XHQvL2VsLnByZWZpeCA9IG51bGw7XG5cdFx0XHRub2RlLmxvY2FsTmFtZSA9IHF1YWxpZmllZE5hbWU7XG5cdFx0fVxuXHRcdHJldHVybiBub2RlO1xuXHR9XG59O1xuX2V4dGVuZHMoRG9jdW1lbnQsTm9kZSk7XG5cblxuZnVuY3Rpb24gRWxlbWVudCgpIHtcblx0dGhpcy5fbnNNYXAgPSB7fTtcbn07XG5FbGVtZW50LnByb3RvdHlwZSA9IHtcblx0bm9kZVR5cGUgOiBFTEVNRU5UX05PREUsXG5cdGhhc0F0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkhPW51bGw7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpO1xuXHRcdHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG5cdH0sXG5cdGdldEF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihuYW1lKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShuYW1lKTtcblx0fSxcblx0c2V0QXR0cmlidXRlIDogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG5cdH0sXG5cdHJlbW92ZUF0dHJpYnV0ZSA6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpXG5cdFx0YXR0ciAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cik7XG5cdH0sXG5cblx0Ly9mb3VyIHJlYWwgb3BlYXJ0aW9uIG1ldGhvZFxuXHRhcHBlbmRDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCl7XG5cdFx0aWYobmV3Q2hpbGQubm9kZVR5cGUgPT09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe1xuXHRcdFx0cmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLG51bGwpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIF9hcHBlbmRTaW5nbGVDaGlsZCh0aGlzLG5ld0NoaWxkKTtcblx0XHR9XG5cdH0sXG5cdHNldEF0dHJpYnV0ZU5vZGUgOiBmdW5jdGlvbihuZXdBdHRyKXtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbShuZXdBdHRyKTtcblx0fSxcblx0c2V0QXR0cmlidXRlTm9kZU5TIDogZnVuY3Rpb24obmV3QXR0cil7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlcy5zZXROYW1lZEl0ZW1OUyhuZXdBdHRyKTtcblx0fSxcblx0cmVtb3ZlQXR0cmlidXRlTm9kZSA6IGZ1bmN0aW9uKG9sZEF0dHIpe1xuXHRcdC8vY29uc29sZS5sb2codGhpcyA9PSBvbGRBdHRyLm93bmVyRWxlbWVudClcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShvbGRBdHRyLm5vZGVOYW1lKTtcblx0fSxcblx0Ly9nZXQgcmVhbCBhdHRyaWJ1dGUgbmFtZSxhbmQgcmVtb3ZlIGl0IGJ5IHJlbW92ZUF0dHJpYnV0ZU5vZGVcblx0cmVtb3ZlQXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0dmFyIG9sZCA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcblx0XHRvbGQgJiYgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZCk7XG5cdH0sXG5cblx0aGFzQXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSE9bnVsbDtcblx0fSxcblx0Z2V0QXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSl7XG5cdFx0dmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSk7XG5cdFx0cmV0dXJuIGF0dHIgJiYgYXR0ci52YWx1ZSB8fCAnJztcblx0fSxcblx0c2V0QXR0cmlidXRlTlMgOiBmdW5jdGlvbihuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIHZhbHVlKXtcblx0XHR2YXIgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpO1xuXHRcdGF0dHIudmFsdWUgPSBhdHRyLm5vZGVWYWx1ZSA9IFwiXCIgKyB2YWx1ZTtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cilcblx0fSxcblx0Z2V0QXR0cmlidXRlTm9kZU5TIDogZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpe1xuXHRcdHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXHR9LFxuXG5cdGdldEVsZW1lbnRzQnlUYWdOYW1lIDogZnVuY3Rpb24odGFnTmFtZSl7XG5cdFx0cmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcyxmdW5jdGlvbihiYXNlKXtcblx0XHRcdHZhciBscyA9IFtdO1xuXHRcdFx0X3Zpc2l0Tm9kZShiYXNlLGZ1bmN0aW9uKG5vZGUpe1xuXHRcdFx0XHRpZihub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFICYmICh0YWdOYW1lID09PSAnKicgfHwgbm9kZS50YWdOYW1lID09IHRhZ05hbWUpKXtcblx0XHRcdFx0XHRscy5wdXNoKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBscztcblx0XHR9KTtcblx0fSxcblx0Z2V0RWxlbWVudHNCeVRhZ05hbWVOUyA6IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKXtcblx0XHRyZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLGZ1bmN0aW9uKGJhc2Upe1xuXHRcdFx0dmFyIGxzID0gW107XG5cdFx0XHRfdmlzaXROb2RlKGJhc2UsZnVuY3Rpb24obm9kZSl7XG5cdFx0XHRcdGlmKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFICYmIChuYW1lc3BhY2VVUkkgPT09ICcqJyB8fCBub2RlLm5hbWVzcGFjZVVSSSA9PT0gbmFtZXNwYWNlVVJJKSAmJiAobG9jYWxOYW1lID09PSAnKicgfHwgbm9kZS5sb2NhbE5hbWUgPT0gbG9jYWxOYW1lKSl7XG5cdFx0XHRcdFx0bHMucHVzaChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbHM7XG5cblx0XHR9KTtcblx0fVxufTtcbkRvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lO1xuRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMgPSBFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TO1xuXG5cbl9leHRlbmRzKEVsZW1lbnQsTm9kZSk7XG5mdW5jdGlvbiBBdHRyKCkge1xufTtcbkF0dHIucHJvdG90eXBlLm5vZGVUeXBlID0gQVRUUklCVVRFX05PREU7XG5fZXh0ZW5kcyhBdHRyLE5vZGUpO1xuXG5cbmZ1bmN0aW9uIENoYXJhY3RlckRhdGEoKSB7XG59O1xuQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUgPSB7XG5cdGRhdGEgOiAnJyxcblx0c3Vic3RyaW5nRGF0YSA6IGZ1bmN0aW9uKG9mZnNldCwgY291bnQpIHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQsIG9mZnNldCtjb3VudCk7XG5cdH0sXG5cdGFwcGVuZERhdGE6IGZ1bmN0aW9uKHRleHQpIHtcblx0XHR0ZXh0ID0gdGhpcy5kYXRhK3RleHQ7XG5cdFx0dGhpcy5ub2RlVmFsdWUgPSB0aGlzLmRhdGEgPSB0ZXh0O1xuXHRcdHRoaXMubGVuZ3RoID0gdGV4dC5sZW5ndGg7XG5cdH0sXG5cdGluc2VydERhdGE6IGZ1bmN0aW9uKG9mZnNldCx0ZXh0KSB7XG5cdFx0dGhpcy5yZXBsYWNlRGF0YShvZmZzZXQsMCx0ZXh0KTtcblxuXHR9LFxuXHRhcHBlbmRDaGlsZDpmdW5jdGlvbihuZXdDaGlsZCl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKEV4Y2VwdGlvbk1lc3NhZ2VbSElFUkFSQ0hZX1JFUVVFU1RfRVJSXSlcblx0fSxcblx0ZGVsZXRlRGF0YTogZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCkge1xuXHRcdHRoaXMucmVwbGFjZURhdGEob2Zmc2V0LGNvdW50LFwiXCIpO1xuXHR9LFxuXHRyZXBsYWNlRGF0YTogZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCwgdGV4dCkge1xuXHRcdHZhciBzdGFydCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMCxvZmZzZXQpO1xuXHRcdHZhciBlbmQgPSB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCtjb3VudCk7XG5cdFx0dGV4dCA9IHN0YXJ0ICsgdGV4dCArIGVuZDtcblx0XHR0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG5cdFx0dGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcblx0fVxufVxuX2V4dGVuZHMoQ2hhcmFjdGVyRGF0YSxOb2RlKTtcbmZ1bmN0aW9uIFRleHQoKSB7XG59O1xuVGV4dC5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjdGV4dFwiLFxuXHRub2RlVHlwZSA6IFRFWFRfTk9ERSxcblx0c3BsaXRUZXh0IDogZnVuY3Rpb24ob2Zmc2V0KSB7XG5cdFx0dmFyIHRleHQgPSB0aGlzLmRhdGE7XG5cdFx0dmFyIG5ld1RleHQgPSB0ZXh0LnN1YnN0cmluZyhvZmZzZXQpO1xuXHRcdHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCBvZmZzZXQpO1xuXHRcdHRoaXMuZGF0YSA9IHRoaXMubm9kZVZhbHVlID0gdGV4dDtcblx0XHR0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuXHRcdHZhciBuZXdOb2RlID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1RleHQpO1xuXHRcdGlmKHRoaXMucGFyZW50Tm9kZSl7XG5cdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHRoaXMubmV4dFNpYmxpbmcpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3Tm9kZTtcblx0fVxufVxuX2V4dGVuZHMoVGV4dCxDaGFyYWN0ZXJEYXRhKTtcbmZ1bmN0aW9uIENvbW1lbnQoKSB7XG59O1xuQ29tbWVudC5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjY29tbWVudFwiLFxuXHRub2RlVHlwZSA6IENPTU1FTlRfTk9ERVxufVxuX2V4dGVuZHMoQ29tbWVudCxDaGFyYWN0ZXJEYXRhKTtcblxuZnVuY3Rpb24gQ0RBVEFTZWN0aW9uKCkge1xufTtcbkNEQVRBU2VjdGlvbi5wcm90b3R5cGUgPSB7XG5cdG5vZGVOYW1lIDogXCIjY2RhdGEtc2VjdGlvblwiLFxuXHRub2RlVHlwZSA6IENEQVRBX1NFQ1RJT05fTk9ERVxufVxuX2V4dGVuZHMoQ0RBVEFTZWN0aW9uLENoYXJhY3RlckRhdGEpO1xuXG5cbmZ1bmN0aW9uIERvY3VtZW50VHlwZSgpIHtcbn07XG5Eb2N1bWVudFR5cGUucHJvdG90eXBlLm5vZGVUeXBlID0gRE9DVU1FTlRfVFlQRV9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRUeXBlLE5vZGUpO1xuXG5mdW5jdGlvbiBOb3RhdGlvbigpIHtcbn07XG5Ob3RhdGlvbi5wcm90b3R5cGUubm9kZVR5cGUgPSBOT1RBVElPTl9OT0RFO1xuX2V4dGVuZHMoTm90YXRpb24sTm9kZSk7XG5cbmZ1bmN0aW9uIEVudGl0eSgpIHtcbn07XG5FbnRpdHkucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX05PREU7XG5fZXh0ZW5kcyhFbnRpdHksTm9kZSk7XG5cbmZ1bmN0aW9uIEVudGl0eVJlZmVyZW5jZSgpIHtcbn07XG5FbnRpdHlSZWZlcmVuY2UucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX1JFRkVSRU5DRV9OT0RFO1xuX2V4dGVuZHMoRW50aXR5UmVmZXJlbmNlLE5vZGUpO1xuXG5mdW5jdGlvbiBEb2N1bWVudEZyYWdtZW50KCkge1xufTtcbkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLm5vZGVOYW1lID1cdFwiI2RvY3VtZW50LWZyYWdtZW50XCI7XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9XHRET0NVTUVOVF9GUkFHTUVOVF9OT0RFO1xuX2V4dGVuZHMoRG9jdW1lbnRGcmFnbWVudCxOb2RlKTtcblxuXG5mdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKSB7XG59XG5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFO1xuX2V4dGVuZHMoUHJvY2Vzc2luZ0luc3RydWN0aW9uLE5vZGUpO1xuZnVuY3Rpb24gWE1MU2VyaWFsaXplcigpe31cbi8qKlxuICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIHNlcmlhbGl6aW5nIGBub2RlYCB0byBYTUwuXG4gKlxuICogX19UaGlzIGltcGxlbWVudGF0aW9uIGRpZmZlcnMgZnJvbSB0aGUgc3BlY2lmaWNhdGlvbjpfX1xuICogLSBDREFUQVNlY3Rpb24gbm9kZXMgd2hvc2UgZGF0YSBjb250YWlucyBgXV0+YCBhcmUgc2VyaWFsaXplZCBieSBzcGxpdHRpbmcgdGhlIHNlY3Rpb25cbiAqICAgYXQgZWFjaCBgXV0+YCBvY2N1cnJlbmNlIChmb2xsb3dpbmcgVzNDIERPTSBMZXZlbCAzIENvcmUgYHNwbGl0LWNkYXRhLXNlY3Rpb25zYFxuICogICBkZWZhdWx0IGJlaGF2aW91cikuIEEgY29uZmlndXJhYmxlIG9wdGlvbiBpcyBub3QgeWV0IGltcGxlbWVudGVkLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtib29sZWFufSBbaXNIdG1sXVxuICogQHBhcmFtIHtmdW5jdGlvbn0gW25vZGVGaWx0ZXJdXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNkb20teG1sc2VyaWFsaXplci1zZXJpYWxpemV0b3N0cmluZ1xuICovXG5YTUxTZXJpYWxpemVyLnByb3RvdHlwZS5zZXJpYWxpemVUb1N0cmluZyA9IGZ1bmN0aW9uKG5vZGUsaXNIdG1sLG5vZGVGaWx0ZXIpe1xuXHRyZXR1cm4gbm9kZVNlcmlhbGl6ZVRvU3RyaW5nLmNhbGwobm9kZSxpc0h0bWwsbm9kZUZpbHRlcik7XG59XG5Ob2RlLnByb3RvdHlwZS50b1N0cmluZyA9IG5vZGVTZXJpYWxpemVUb1N0cmluZztcbmZ1bmN0aW9uIG5vZGVTZXJpYWxpemVUb1N0cmluZyhpc0h0bWwsbm9kZUZpbHRlcil7XG5cdHZhciBidWYgPSBbXTtcblx0dmFyIHJlZk5vZGUgPSB0aGlzLm5vZGVUeXBlID09IDkgJiYgdGhpcy5kb2N1bWVudEVsZW1lbnQgfHwgdGhpcztcblx0dmFyIHByZWZpeCA9IHJlZk5vZGUucHJlZml4O1xuXHR2YXIgdXJpID0gcmVmTm9kZS5uYW1lc3BhY2VVUkk7XG5cblx0aWYodXJpICYmIHByZWZpeCA9PSBudWxsKXtcblx0XHQvL2NvbnNvbGUubG9nKHByZWZpeClcblx0XHR2YXIgcHJlZml4ID0gcmVmTm9kZS5sb29rdXBQcmVmaXgodXJpKTtcblx0XHRpZihwcmVmaXggPT0gbnVsbCl7XG5cdFx0XHQvL2lzSFRNTCA9IHRydWU7XG5cdFx0XHR2YXIgdmlzaWJsZU5hbWVzcGFjZXM9W1xuXHRcdFx0e25hbWVzcGFjZTp1cmkscHJlZml4Om51bGx9XG5cdFx0XHQvL3tuYW1lc3BhY2U6dXJpLHByZWZpeDonJ31cblx0XHRcdF1cblx0XHR9XG5cdH1cblx0c2VyaWFsaXplVG9TdHJpbmcodGhpcyxidWYsaXNIdG1sLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHQvL2NvbnNvbGUubG9nKCcjIyMnLHRoaXMubm9kZVR5cGUsdXJpLHByZWZpeCxidWYuam9pbignJykpXG5cdHJldHVybiBidWYuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuXHR2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG5cdHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcblx0Ly8gQWNjb3JkaW5nIHRvIFtOYW1lc3BhY2VzIGluIFhNTCAxLjBdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzLyNucy11c2luZykgLFxuXHQvLyBhbmQgbW9yZSBzcGVjaWZpY2FsbHkgaHR0cHM6Ly93d3cudzMub3JnL1RSL1JFQy14bWwtbmFtZXMvI25zYy1Ob1ByZWZpeFVuZGVjbCA6XG5cdC8vID4gSW4gYSBuYW1lc3BhY2UgZGVjbGFyYXRpb24gZm9yIGEgcHJlZml4IFsuLi5dLCB0aGUgYXR0cmlidXRlIHZhbHVlIE1VU1QgTk9UIGJlIGVtcHR5LlxuXHQvLyBpbiBhIHNpbWlsYXIgbWFubmVyIFtOYW1lc3BhY2VzIGluIFhNTCAxLjFdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtbmFtZXMxMS8jbnMtdXNpbmcpXG5cdC8vIGFuZCBtb3JlIHNwZWNpZmljYWxseSBodHRwczovL3d3dy53My5vcmcvVFIveG1sLW5hbWVzMTEvI25zYy1OU0RlY2xhcmVkIDpcblx0Ly8gPiBbLi4uXSBGdXJ0aGVybW9yZSwgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBbLi4uXSBtdXN0IG5vdCBiZSBhbiBlbXB0eSBzdHJpbmcuXG5cdC8vIHNvIHNlcmlhbGl6aW5nIGVtcHR5IG5hbWVzcGFjZSB2YWx1ZSBsaWtlIHhtbG5zOmRzPVwiXCIgd291bGQgcHJvZHVjZSBhbiBpbnZhbGlkIFhNTCBkb2N1bWVudC5cblx0aWYgKCF1cmkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKHByZWZpeCA9PT0gXCJ4bWxcIiAmJiB1cmkgPT09IE5BTUVTUEFDRS5YTUwgfHwgdXJpID09PSBOQU1FU1BBQ0UuWE1MTlMpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aFxuXHR3aGlsZSAoaS0tKSB7XG5cdFx0dmFyIG5zID0gdmlzaWJsZU5hbWVzcGFjZXNbaV07XG5cdFx0Ly8gZ2V0IG5hbWVzcGFjZSBwcmVmaXhcblx0XHRpZiAobnMucHJlZml4ID09PSBwcmVmaXgpIHtcblx0XHRcdHJldHVybiBucy5uYW1lc3BhY2UgIT09IHVyaTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG4vKipcbiAqIFdlbGwtZm9ybWVkIGNvbnN0cmFpbnQ6IE5vIDwgaW4gQXR0cmlidXRlIFZhbHVlc1xuICogPiBUaGUgcmVwbGFjZW1lbnQgdGV4dCBvZiBhbnkgZW50aXR5IHJlZmVycmVkIHRvIGRpcmVjdGx5IG9yIGluZGlyZWN0bHlcbiAqID4gaW4gYW4gYXR0cmlidXRlIHZhbHVlIG11c3Qgbm90IGNvbnRhaW4gYSA8LlxuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveG1sMTEvI0NsZWFuQXR0clZhbHNcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNOVC1BdHRWYWx1ZVxuICpcbiAqIExpdGVyYWwgd2hpdGVzcGFjZSBvdGhlciB0aGFuIHNwYWNlIHRoYXQgYXBwZWFyIGluIGF0dHJpYnV0ZSB2YWx1ZXNcbiAqIGFyZSBzZXJpYWxpemVkIGFzIHRoZWlyIGVudGl0eSByZWZlcmVuY2VzLCBzbyB0aGV5IHdpbGwgYmUgcHJlc2VydmVkLlxuICogKEluIGNvbnRyYXN0IHRvIHdoaXRlc3BhY2UgbGl0ZXJhbHMgaW4gdGhlIGlucHV0IHdoaWNoIGFyZSBub3JtYWxpemVkIHRvIHNwYWNlcylcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbDExLyNBVk5vcm1hbGl6ZVxuICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vRE9NLVBhcnNpbmcvI3NlcmlhbGl6aW5nLWFuLWVsZW1lbnQtcy1hdHRyaWJ1dGVzXG4gKi9cbmZ1bmN0aW9uIGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuXHRidWYucHVzaCgnICcsIHF1YWxpZmllZE5hbWUsICc9XCInLCB2YWx1ZS5yZXBsYWNlKC9bPD4mXCJcXHRcXG5cXHJdL2csIF94bWxFbmNvZGVyKSwgJ1wiJylcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplVG9TdHJpbmcobm9kZSxidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpe1xuXHRpZiAoIXZpc2libGVOYW1lc3BhY2VzKSB7XG5cdFx0dmlzaWJsZU5hbWVzcGFjZXMgPSBbXTtcblx0fVxuXG5cdGlmKG5vZGVGaWx0ZXIpe1xuXHRcdG5vZGUgPSBub2RlRmlsdGVyKG5vZGUpO1xuXHRcdGlmKG5vZGUpe1xuXHRcdFx0aWYodHlwZW9mIG5vZGUgPT0gJ3N0cmluZycpe1xuXHRcdFx0XHRidWYucHVzaChub2RlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvL2J1Zi5zb3J0LmFwcGx5KGF0dHJzLCBhdHRyaWJ1dGVTb3J0ZXIpO1xuXHR9XG5cblx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIGxlbiA9IGF0dHJzLmxlbmd0aDtcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0dmFyIG5vZGVOYW1lID0gbm9kZS50YWdOYW1lO1xuXG5cdFx0aXNIVE1MID0gTkFNRVNQQUNFLmlzSFRNTChub2RlLm5hbWVzcGFjZVVSSSkgfHwgaXNIVE1MXG5cblx0XHR2YXIgcHJlZml4ZWROb2RlTmFtZSA9IG5vZGVOYW1lXG5cdFx0aWYgKCFpc0hUTUwgJiYgIW5vZGUucHJlZml4ICYmIG5vZGUubmFtZXNwYWNlVVJJKSB7XG5cdFx0XHR2YXIgZGVmYXVsdE5TXG5cdFx0XHQvLyBsb29rdXAgY3VycmVudCBkZWZhdWx0IG5zIGZyb20gYHhtbG5zYCBhdHRyaWJ1dGVcblx0XHRcdGZvciAodmFyIGFpID0gMDsgYWkgPCBhdHRycy5sZW5ndGg7IGFpKyspIHtcblx0XHRcdFx0aWYgKGF0dHJzLml0ZW0oYWkpLm5hbWUgPT09ICd4bWxucycpIHtcblx0XHRcdFx0XHRkZWZhdWx0TlMgPSBhdHRycy5pdGVtKGFpKS52YWx1ZVxuXHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghZGVmYXVsdE5TKSB7XG5cdFx0XHRcdC8vIGxvb2t1cCBjdXJyZW50IGRlZmF1bHQgbnMgaW4gdmlzaWJsZU5hbWVzcGFjZXNcblx0XHRcdFx0Zm9yICh2YXIgbnNpID0gdmlzaWJsZU5hbWVzcGFjZXMubGVuZ3RoIC0gMTsgbnNpID49IDA7IG5zaS0tKSB7XG5cdFx0XHRcdFx0dmFyIG5hbWVzcGFjZSA9IHZpc2libGVOYW1lc3BhY2VzW25zaV1cblx0XHRcdFx0XHRpZiAobmFtZXNwYWNlLnByZWZpeCA9PT0gJycgJiYgbmFtZXNwYWNlLm5hbWVzcGFjZSA9PT0gbm9kZS5uYW1lc3BhY2VVUkkpIHtcblx0XHRcdFx0XHRcdGRlZmF1bHROUyA9IG5hbWVzcGFjZS5uYW1lc3BhY2Vcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGVmYXVsdE5TICE9PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRmb3IgKHZhciBuc2kgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGggLSAxOyBuc2kgPj0gMDsgbnNpLS0pIHtcblx0XHRcdFx0XHR2YXIgbmFtZXNwYWNlID0gdmlzaWJsZU5hbWVzcGFjZXNbbnNpXVxuXHRcdFx0XHRcdGlmIChuYW1lc3BhY2UubmFtZXNwYWNlID09PSBub2RlLm5hbWVzcGFjZVVSSSkge1xuXHRcdFx0XHRcdFx0aWYgKG5hbWVzcGFjZS5wcmVmaXgpIHtcblx0XHRcdFx0XHRcdFx0cHJlZml4ZWROb2RlTmFtZSA9IG5hbWVzcGFjZS5wcmVmaXggKyAnOicgKyBub2RlTmFtZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRidWYucHVzaCgnPCcsIHByZWZpeGVkTm9kZU5hbWUpO1xuXG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdC8vIGFkZCBuYW1lc3BhY2VzIGZvciBhdHRyaWJ1dGVzXG5cdFx0XHR2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG5cdFx0XHRpZiAoYXR0ci5wcmVmaXggPT0gJ3htbG5zJykge1xuXHRcdFx0XHR2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHsgcHJlZml4OiBhdHRyLmxvY2FsTmFtZSwgbmFtZXNwYWNlOiBhdHRyLnZhbHVlIH0pO1xuXHRcdFx0fWVsc2UgaWYoYXR0ci5ub2RlTmFtZSA9PSAneG1sbnMnKXtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogJycsIG5hbWVzcGFjZTogYXR0ci52YWx1ZSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0dmFyIGF0dHIgPSBhdHRycy5pdGVtKGkpO1xuXHRcdFx0aWYgKG5lZWROYW1lc3BhY2VEZWZpbmUoYXR0cixpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuXHRcdFx0XHR2YXIgcHJlZml4ID0gYXR0ci5wcmVmaXh8fCcnO1xuXHRcdFx0XHR2YXIgdXJpID0gYXR0ci5uYW1lc3BhY2VVUkk7XG5cdFx0XHRcdGFkZFNlcmlhbGl6ZWRBdHRyaWJ1dGUoYnVmLCBwcmVmaXggPyAneG1sbnM6JyArIHByZWZpeCA6IFwieG1sbnNcIiwgdXJpKTtcblx0XHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogcHJlZml4LCBuYW1lc3BhY2U6dXJpIH0pO1xuXHRcdFx0fVxuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoYXR0cixidWYsaXNIVE1MLG5vZGVGaWx0ZXIsdmlzaWJsZU5hbWVzcGFjZXMpO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuYW1lc3BhY2UgZm9yIGN1cnJlbnQgbm9kZVxuXHRcdGlmIChub2RlTmFtZSA9PT0gcHJlZml4ZWROb2RlTmFtZSAmJiBuZWVkTmFtZXNwYWNlRGVmaW5lKG5vZGUsIGlzSFRNTCwgdmlzaWJsZU5hbWVzcGFjZXMpKSB7XG5cdFx0XHR2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXh8fCcnO1xuXHRcdFx0dmFyIHVyaSA9IG5vZGUubmFtZXNwYWNlVVJJO1xuXHRcdFx0YWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIHByZWZpeCA/ICd4bWxuczonICsgcHJlZml4IDogXCJ4bWxuc1wiLCB1cmkpO1xuXHRcdFx0dmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7IHByZWZpeDogcHJlZml4LCBuYW1lc3BhY2U6dXJpIH0pO1xuXHRcdH1cblxuXHRcdGlmKGNoaWxkIHx8IGlzSFRNTCAmJiAhL14oPzptZXRhfGxpbmt8aW1nfGJyfGhyfGlucHV0KSQvaS50ZXN0KG5vZGVOYW1lKSl7XG5cdFx0XHRidWYucHVzaCgnPicpO1xuXHRcdFx0Ly9pZiBpcyBjZGF0YSBjaGlsZCBub2RlXG5cdFx0XHRpZihpc0hUTUwgJiYgL15zY3JpcHQkL2kudGVzdChub2RlTmFtZSkpe1xuXHRcdFx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRcdFx0aWYoY2hpbGQuZGF0YSl7XG5cdFx0XHRcdFx0XHRidWYucHVzaChjaGlsZC5kYXRhKTtcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHNlcmlhbGl6ZVRvU3RyaW5nKGNoaWxkLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMuc2xpY2UoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1lbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdFx0XHRzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzLnNsaWNlKCkpO1xuXHRcdFx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKCc8LycscHJlZml4ZWROb2RlTmFtZSwnPicpO1xuXHRcdH1lbHNle1xuXHRcdFx0YnVmLnB1c2goJy8+Jyk7XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhZGRlZCB2aXNpYmxlIG5hbWVzcGFjZXNcblx0XHQvL3Zpc2libGVOYW1lc3BhY2VzLmxlbmd0aCA9IHN0YXJ0VmlzaWJsZU5hbWVzcGFjZXM7XG5cdFx0cmV0dXJuO1xuXHRjYXNlIERPQ1VNRU5UX05PREU6XG5cdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHR2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cdFx0d2hpbGUoY2hpbGQpe1xuXHRcdFx0c2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcy5zbGljZSgpKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRyZXR1cm4gYWRkU2VyaWFsaXplZEF0dHJpYnV0ZShidWYsIG5vZGUubmFtZSwgbm9kZS52YWx1ZSk7XG5cdGNhc2UgVEVYVF9OT0RFOlxuXHRcdC8qKlxuXHRcdCAqIFRoZSBhbXBlcnNhbmQgY2hhcmFjdGVyICgmKSBhbmQgdGhlIGxlZnQgYW5nbGUgYnJhY2tldCAoPCkgbXVzdCBub3QgYXBwZWFyIGluIHRoZWlyIGxpdGVyYWwgZm9ybSxcblx0XHQgKiBleGNlcHQgd2hlbiB1c2VkIGFzIG1hcmt1cCBkZWxpbWl0ZXJzLCBvciB3aXRoaW4gYSBjb21tZW50LCBhIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIG9yIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKiBJZiB0aGV5IGFyZSBuZWVkZWQgZWxzZXdoZXJlLCB0aGV5IG11c3QgYmUgZXNjYXBlZCB1c2luZyBlaXRoZXIgbnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBvciB0aGUgc3RyaW5nc1xuXHRcdCAqIGAmYW1wO2AgYW5kIGAmbHQ7YCByZXNwZWN0aXZlbHkuXG5cdFx0ICogVGhlIHJpZ2h0IGFuZ2xlIGJyYWNrZXQgKD4pIG1heSBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgc3RyaW5nIFwiICZndDsgXCIsIGFuZCBtdXN0LCBmb3IgY29tcGF0aWJpbGl0eSxcblx0XHQgKiBiZSBlc2NhcGVkIHVzaW5nIGVpdGhlciBgJmd0O2Agb3IgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlIHdoZW4gaXQgYXBwZWFycyBpbiB0aGUgc3RyaW5nIGBdXT5gIGluIGNvbnRlbnQsXG5cdFx0ICogd2hlbiB0aGF0IHN0cmluZyBpcyBub3QgbWFya2luZyB0aGUgZW5kIG9mIGEgQ0RBVEEgc2VjdGlvbi5cblx0XHQgKlxuXHRcdCAqIEluIHRoZSBjb250ZW50IG9mIGVsZW1lbnRzLCBjaGFyYWN0ZXIgZGF0YSBpcyBhbnkgc3RyaW5nIG9mIGNoYXJhY3RlcnNcblx0XHQgKiB3aGljaCBkb2VzIG5vdCBjb250YWluIHRoZSBzdGFydC1kZWxpbWl0ZXIgb2YgYW55IG1hcmt1cFxuXHRcdCAqIGFuZCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBDREFUQS1zZWN0aW9uLWNsb3NlIGRlbGltaXRlciwgYF1dPmAuXG5cdFx0ICpcblx0XHQgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwvI05ULUNoYXJEYXRhXG5cdFx0ICogQHNlZSBodHRwczovL3czYy5naXRodWIuaW8vRE9NLVBhcnNpbmcvI3htbC1zZXJpYWxpemluZy1hLXRleHQtbm9kZVxuXHRcdCAqL1xuXHRcdHJldHVybiBidWYucHVzaChub2RlLmRhdGFcblx0XHRcdC5yZXBsYWNlKC9bPCY+XS9nLF94bWxFbmNvZGVyKVxuXHRcdCk7XG5cdGNhc2UgQ0RBVEFfU0VDVElPTl9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCgnPCFbQ0RBVEFbJywgbm9kZS5kYXRhLnJlcGxhY2UoL11dPi9nLCAnXV1dXT48IVtDREFUQVs+JyksICddXT4nKTtcblx0Y2FzZSBDT01NRU5UX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCBcIjwhLS1cIixub2RlLmRhdGEsXCItLT5cIik7XG5cdGNhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuXHRcdHZhciBwdWJpZCA9IG5vZGUucHVibGljSWQ7XG5cdFx0dmFyIHN5c2lkID0gbm9kZS5zeXN0ZW1JZDtcblx0XHRidWYucHVzaCgnPCFET0NUWVBFICcsbm9kZS5uYW1lKTtcblx0XHRpZihwdWJpZCl7XG5cdFx0XHRidWYucHVzaCgnIFBVQkxJQyAnLCBwdWJpZCk7XG5cdFx0XHRpZiAoc3lzaWQgJiYgc3lzaWQhPScuJykge1xuXHRcdFx0XHRidWYucHVzaCgnICcsIHN5c2lkKTtcblx0XHRcdH1cblx0XHRcdGJ1Zi5wdXNoKCc+Jyk7XG5cdFx0fWVsc2UgaWYoc3lzaWQgJiYgc3lzaWQhPScuJyl7XG5cdFx0XHRidWYucHVzaCgnIFNZU1RFTSAnLCBzeXNpZCwgJz4nKTtcblx0XHR9ZWxzZXtcblx0XHRcdHZhciBzdWIgPSBub2RlLmludGVybmFsU3Vic2V0O1xuXHRcdFx0aWYoc3ViKXtcblx0XHRcdFx0YnVmLnB1c2goXCIgW1wiLHN1YixcIl1cIik7XG5cdFx0XHR9XG5cdFx0XHRidWYucHVzaChcIj5cIik7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0Y2FzZSBQUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREU6XG5cdFx0cmV0dXJuIGJ1Zi5wdXNoKCBcIjw/XCIsbm9kZS50YXJnZXQsXCIgXCIsbm9kZS5kYXRhLFwiPz5cIik7XG5cdGNhc2UgRU5USVRZX1JFRkVSRU5DRV9OT0RFOlxuXHRcdHJldHVybiBidWYucHVzaCggJyYnLG5vZGUubm9kZU5hbWUsJzsnKTtcblx0Ly9jYXNlIEVOVElUWV9OT0RFOlxuXHQvL2Nhc2UgTk9UQVRJT05fTk9ERTpcblx0ZGVmYXVsdDpcblx0XHRidWYucHVzaCgnPz8nLG5vZGUubm9kZU5hbWUpO1xuXHR9XG59XG5mdW5jdGlvbiBpbXBvcnROb2RlKGRvYyxub2RlLGRlZXApe1xuXHR2YXIgbm9kZTI7XG5cdHN3aXRjaCAobm9kZS5ub2RlVHlwZSkge1xuXHRjYXNlIEVMRU1FTlRfTk9ERTpcblx0XHRub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcblx0XHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRcdC8vdmFyIGF0dHJzID0gbm9kZTIuYXR0cmlidXRlcztcblx0XHQvL3ZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG5cdFx0Ly9mb3IodmFyIGk9MDtpPGxlbjtpKyspe1xuXHRcdFx0Ly9ub2RlMi5zZXRBdHRyaWJ1dGVOb2RlTlMoaW1wb3J0Tm9kZShkb2MsYXR0cnMuaXRlbShpKSxkZWVwKSk7XG5cdFx0Ly99XG5cdGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcblx0XHRicmVhaztcblx0Y2FzZSBBVFRSSUJVVEVfTk9ERTpcblx0XHRkZWVwID0gdHJ1ZTtcblx0XHRicmVhaztcblx0Ly9jYXNlIEVOVElUWV9SRUZFUkVOQ0VfTk9ERTpcblx0Ly9jYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcblx0Ly8vL2Nhc2UgVEVYVF9OT0RFOlxuXHQvL2Nhc2UgQ0RBVEFfU0VDVElPTl9OT0RFOlxuXHQvL2Nhc2UgQ09NTUVOVF9OT0RFOlxuXHQvL1x0ZGVlcCA9IGZhbHNlO1xuXHQvL1x0YnJlYWs7XG5cdC8vY2FzZSBET0NVTUVOVF9OT0RFOlxuXHQvL2Nhc2UgRE9DVU1FTlRfVFlQRV9OT0RFOlxuXHQvL2Nhbm5vdCBiZSBpbXBvcnRlZC5cblx0Ly9jYXNlIEVOVElUWV9OT0RFOlxuXHQvL2Nhc2UgTk9UQVRJT05fTk9ERVx1RkYxQVxuXHQvL2NhbiBub3QgaGl0IGluIGxldmVsM1xuXHQvL2RlZmF1bHQ6dGhyb3cgZTtcblx0fVxuXHRpZighbm9kZTIpe1xuXHRcdG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpOy8vZmFsc2Vcblx0fVxuXHRub2RlMi5vd25lckRvY3VtZW50ID0gZG9jO1xuXHRub2RlMi5wYXJlbnROb2RlID0gbnVsbDtcblx0aWYoZGVlcCl7XG5cdFx0dmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXHRcdHdoaWxlKGNoaWxkKXtcblx0XHRcdG5vZGUyLmFwcGVuZENoaWxkKGltcG9ydE5vZGUoZG9jLGNoaWxkLGRlZXApKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub2RlMjtcbn1cbi8vXG4vL3ZhciBfcmVsYXRpb25NYXAgPSB7Zmlyc3RDaGlsZDoxLGxhc3RDaGlsZDoxLHByZXZpb3VzU2libGluZzoxLG5leHRTaWJsaW5nOjEsXG4vL1x0XHRcdFx0XHRhdHRyaWJ1dGVzOjEsY2hpbGROb2RlczoxLHBhcmVudE5vZGU6MSxkb2N1bWVudEVsZW1lbnQ6MSxkb2N0eXBlLH07XG5mdW5jdGlvbiBjbG9uZU5vZGUoZG9jLG5vZGUsZGVlcCl7XG5cdHZhciBub2RlMiA9IG5ldyBub2RlLmNvbnN0cnVjdG9yKCk7XG5cdGZvciAodmFyIG4gaW4gbm9kZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobm9kZSwgbikpIHtcblx0XHRcdHZhciB2ID0gbm9kZVtuXTtcblx0XHRcdGlmICh0eXBlb2YgdiAhPSBcIm9iamVjdFwiKSB7XG5cdFx0XHRcdGlmICh2ICE9IG5vZGUyW25dKSB7XG5cdFx0XHRcdFx0bm9kZTJbbl0gPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmKG5vZGUuY2hpbGROb2Rlcyl7XG5cdFx0bm9kZTIuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuXHR9XG5cdG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cdHN3aXRjaCAobm9kZTIubm9kZVR5cGUpIHtcblx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0dmFyIGF0dHJzXHQ9IG5vZGUuYXR0cmlidXRlcztcblx0XHR2YXIgYXR0cnMyXHQ9IG5vZGUyLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG5cdFx0dmFyIGxlbiA9IGF0dHJzLmxlbmd0aFxuXHRcdGF0dHJzMi5fb3duZXJFbGVtZW50ID0gbm9kZTI7XG5cdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcblx0XHRcdG5vZGUyLnNldEF0dHJpYnV0ZU5vZGUoY2xvbmVOb2RlKGRvYyxhdHRycy5pdGVtKGkpLHRydWUpKTtcblx0XHR9XG5cdFx0YnJlYWs7O1xuXHRjYXNlIEFUVFJJQlVURV9OT0RFOlxuXHRcdGRlZXAgPSB0cnVlO1xuXHR9XG5cdGlmKGRlZXApe1xuXHRcdHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHR3aGlsZShjaGlsZCl7XG5cdFx0XHRub2RlMi5hcHBlbmRDaGlsZChjbG9uZU5vZGUoZG9jLGNoaWxkLGRlZXApKTtcblx0XHRcdGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub2RlMjtcbn1cblxuZnVuY3Rpb24gX19zZXRfXyhvYmplY3Qsa2V5LHZhbHVlKXtcblx0b2JqZWN0W2tleV0gPSB2YWx1ZVxufVxuLy9kbyBkeW5hbWljXG50cnl7XG5cdGlmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSl7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KExpdmVOb2RlTGlzdC5wcm90b3R5cGUsJ2xlbmd0aCcse1xuXHRcdFx0Z2V0OmZ1bmN0aW9uKCl7XG5cdFx0XHRcdF91cGRhdGVMaXZlTGlzdCh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJCRsZW5ndGg7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsJ3RleHRDb250ZW50Jyx7XG5cdFx0XHRnZXQ6ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuIGdldFRleHRDb250ZW50KHRoaXMpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0OmZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRzd2l0Y2godGhpcy5ub2RlVHlwZSl7XG5cdFx0XHRcdGNhc2UgRUxFTUVOVF9OT0RFOlxuXHRcdFx0XHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0XHRcdFx0d2hpbGUodGhpcy5maXJzdENoaWxkKXtcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYoZGF0YSB8fCBTdHJpbmcoZGF0YSkpe1xuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCh0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0dGhpcy5ub2RlVmFsdWUgPSBkYXRhO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdGZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpe1xuXHRcdFx0c3dpdGNoKG5vZGUubm9kZVR5cGUpe1xuXHRcdFx0Y2FzZSBFTEVNRU5UX05PREU6XG5cdFx0XHRjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG5cdFx0XHRcdHZhciBidWYgPSBbXTtcblx0XHRcdFx0bm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcblx0XHRcdFx0d2hpbGUobm9kZSl7XG5cdFx0XHRcdFx0aWYobm9kZS5ub2RlVHlwZSE9PTcgJiYgbm9kZS5ub2RlVHlwZSAhPT04KXtcblx0XHRcdFx0XHRcdGJ1Zi5wdXNoKGdldFRleHRDb250ZW50KG5vZGUpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJ1Zi5qb2luKCcnKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBub2RlLm5vZGVWYWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRfX3NldF9fID0gZnVuY3Rpb24ob2JqZWN0LGtleSx2YWx1ZSl7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHZhbHVlKVxuXHRcdFx0b2JqZWN0WyckJCcra2V5XSA9IHZhbHVlXG5cdFx0fVxuXHR9XG59Y2F0Y2goZSl7Ly9pZThcbn1cblxuLy9pZih0eXBlb2YgcmVxdWlyZSA9PSAnZnVuY3Rpb24nKXtcblx0ZXhwb3J0cy5Eb2N1bWVudFR5cGUgPSBEb2N1bWVudFR5cGU7XG5cdGV4cG9ydHMuRE9NRXhjZXB0aW9uID0gRE9NRXhjZXB0aW9uO1xuXHRleHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gRE9NSW1wbGVtZW50YXRpb247XG5cdGV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5cdGV4cG9ydHMuTm9kZSA9IE5vZGU7XG5cdGV4cG9ydHMuTm9kZUxpc3QgPSBOb2RlTGlzdDtcblx0ZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gWE1MU2VyaWFsaXplcjtcbi8vfVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGZyZWV6ZSA9IHJlcXVpcmUoJy4vY29udmVudGlvbnMnKS5mcmVlemU7XG5cbi8qKlxuICogVGhlIGVudGl0aWVzIHRoYXQgYXJlIHByZWRlZmluZWQgaW4gZXZlcnkgWE1MIGRvY3VtZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDYvUkVDLXhtbDExLTIwMDYwODE2LyNzZWMtcHJlZGVmaW5lZC1lbnQgVzNDIFhNTCAxLjFcbiAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLXhtbC0yMDA4MTEyNi8jc2VjLXByZWRlZmluZWQtZW50IFczQyBYTUwgMS4wXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNQcmVkZWZpbmVkX2VudGl0aWVzX2luX1hNTCBXaWtpcGVkaWFcbiAqL1xuZXhwb3J0cy5YTUxfRU5USVRJRVMgPSBmcmVlemUoe1xuXHRhbXA6ICcmJyxcblx0YXBvczogXCInXCIsXG5cdGd0OiAnPicsXG5cdGx0OiAnPCcsXG5cdHF1b3Q6ICdcIicsXG59KTtcblxuLyoqXG4gKiBBIG1hcCBvZiBhbGwgZW50aXRpZXMgdGhhdCBhcmUgZGV0ZWN0ZWQgaW4gYW4gSFRNTCBkb2N1bWVudC5cbiAqIFRoZXkgY29udGFpbiBhbGwgZW50cmllcyBmcm9tIGBYTUxfRU5USVRJRVNgLlxuICpcbiAqIEBzZWUgWE1MX0VOVElUSUVTXG4gKiBAc2VlIERPTVBhcnNlci5wYXJzZUZyb21TdHJpbmdcbiAqIEBzZWUgRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlLmNyZWF0ZUhUTUxEb2N1bWVudFxuICogQHNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNuYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlcyBXSEFUV0cgSFRNTCg1KSBTcGVjXG4gKiBAc2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvZW50aXRpZXMuanNvbiBKU09OXG4gKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwtZW50aXR5LW5hbWVzLyBXM0MgWE1MIEVudGl0eSBOYW1lc1xuICogQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDQvc2dtbC9lbnRpdGllcy5odG1sIFczQyBIVE1MNC9TR01MXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNDaGFyYWN0ZXJfZW50aXR5X3JlZmVyZW5jZXNfaW5fSFRNTCBXaWtpcGVkaWEgKEhUTUwpXG4gKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xpc3Rfb2ZfWE1MX2FuZF9IVE1MX2NoYXJhY3Rlcl9lbnRpdHlfcmVmZXJlbmNlcyNFbnRpdGllc19yZXByZXNlbnRpbmdfc3BlY2lhbF9jaGFyYWN0ZXJzX2luX1hIVE1MIFdpa3BlZGlhIChYSFRNTClcbiAqL1xuZXhwb3J0cy5IVE1MX0VOVElUSUVTID0gZnJlZXplKHtcblx0QWFjdXRlOiAnXFx1MDBDMScsXG5cdGFhY3V0ZTogJ1xcdTAwRTEnLFxuXHRBYnJldmU6ICdcXHUwMTAyJyxcblx0YWJyZXZlOiAnXFx1MDEwMycsXG5cdGFjOiAnXFx1MjIzRScsXG5cdGFjZDogJ1xcdTIyM0YnLFxuXHRhY0U6ICdcXHUyMjNFXFx1MDMzMycsXG5cdEFjaXJjOiAnXFx1MDBDMicsXG5cdGFjaXJjOiAnXFx1MDBFMicsXG5cdGFjdXRlOiAnXFx1MDBCNCcsXG5cdEFjeTogJ1xcdTA0MTAnLFxuXHRhY3k6ICdcXHUwNDMwJyxcblx0QUVsaWc6ICdcXHUwMEM2Jyxcblx0YWVsaWc6ICdcXHUwMEU2Jyxcblx0YWY6ICdcXHUyMDYxJyxcblx0QWZyOiAnXFx1RDgzNVxcdUREMDQnLFxuXHRhZnI6ICdcXHVEODM1XFx1REQxRScsXG5cdEFncmF2ZTogJ1xcdTAwQzAnLFxuXHRhZ3JhdmU6ICdcXHUwMEUwJyxcblx0YWxlZnN5bTogJ1xcdTIxMzUnLFxuXHRhbGVwaDogJ1xcdTIxMzUnLFxuXHRBbHBoYTogJ1xcdTAzOTEnLFxuXHRhbHBoYTogJ1xcdTAzQjEnLFxuXHRBbWFjcjogJ1xcdTAxMDAnLFxuXHRhbWFjcjogJ1xcdTAxMDEnLFxuXHRhbWFsZzogJ1xcdTJBM0YnLFxuXHRBTVA6ICdcXHUwMDI2Jyxcblx0YW1wOiAnXFx1MDAyNicsXG5cdEFuZDogJ1xcdTJBNTMnLFxuXHRhbmQ6ICdcXHUyMjI3Jyxcblx0YW5kYW5kOiAnXFx1MkE1NScsXG5cdGFuZGQ6ICdcXHUyQTVDJyxcblx0YW5kc2xvcGU6ICdcXHUyQTU4Jyxcblx0YW5kdjogJ1xcdTJBNUEnLFxuXHRhbmc6ICdcXHUyMjIwJyxcblx0YW5nZTogJ1xcdTI5QTQnLFxuXHRhbmdsZTogJ1xcdTIyMjAnLFxuXHRhbmdtc2Q6ICdcXHUyMjIxJyxcblx0YW5nbXNkYWE6ICdcXHUyOUE4Jyxcblx0YW5nbXNkYWI6ICdcXHUyOUE5Jyxcblx0YW5nbXNkYWM6ICdcXHUyOUFBJyxcblx0YW5nbXNkYWQ6ICdcXHUyOUFCJyxcblx0YW5nbXNkYWU6ICdcXHUyOUFDJyxcblx0YW5nbXNkYWY6ICdcXHUyOUFEJyxcblx0YW5nbXNkYWc6ICdcXHUyOUFFJyxcblx0YW5nbXNkYWg6ICdcXHUyOUFGJyxcblx0YW5ncnQ6ICdcXHUyMjFGJyxcblx0YW5ncnR2YjogJ1xcdTIyQkUnLFxuXHRhbmdydHZiZDogJ1xcdTI5OUQnLFxuXHRhbmdzcGg6ICdcXHUyMjIyJyxcblx0YW5nc3Q6ICdcXHUwMEM1Jyxcblx0YW5nemFycjogJ1xcdTIzN0MnLFxuXHRBb2dvbjogJ1xcdTAxMDQnLFxuXHRhb2dvbjogJ1xcdTAxMDUnLFxuXHRBb3BmOiAnXFx1RDgzNVxcdUREMzgnLFxuXHRhb3BmOiAnXFx1RDgzNVxcdURENTInLFxuXHRhcDogJ1xcdTIyNDgnLFxuXHRhcGFjaXI6ICdcXHUyQTZGJyxcblx0YXBFOiAnXFx1MkE3MCcsXG5cdGFwZTogJ1xcdTIyNEEnLFxuXHRhcGlkOiAnXFx1MjI0QicsXG5cdGFwb3M6ICdcXHUwMDI3Jyxcblx0QXBwbHlGdW5jdGlvbjogJ1xcdTIwNjEnLFxuXHRhcHByb3g6ICdcXHUyMjQ4Jyxcblx0YXBwcm94ZXE6ICdcXHUyMjRBJyxcblx0QXJpbmc6ICdcXHUwMEM1Jyxcblx0YXJpbmc6ICdcXHUwMEU1Jyxcblx0QXNjcjogJ1xcdUQ4MzVcXHVEQzlDJyxcblx0YXNjcjogJ1xcdUQ4MzVcXHVEQ0I2Jyxcblx0QXNzaWduOiAnXFx1MjI1NCcsXG5cdGFzdDogJ1xcdTAwMkEnLFxuXHRhc3ltcDogJ1xcdTIyNDgnLFxuXHRhc3ltcGVxOiAnXFx1MjI0RCcsXG5cdEF0aWxkZTogJ1xcdTAwQzMnLFxuXHRhdGlsZGU6ICdcXHUwMEUzJyxcblx0QXVtbDogJ1xcdTAwQzQnLFxuXHRhdW1sOiAnXFx1MDBFNCcsXG5cdGF3Y29uaW50OiAnXFx1MjIzMycsXG5cdGF3aW50OiAnXFx1MkExMScsXG5cdGJhY2tjb25nOiAnXFx1MjI0QycsXG5cdGJhY2tlcHNpbG9uOiAnXFx1MDNGNicsXG5cdGJhY2twcmltZTogJ1xcdTIwMzUnLFxuXHRiYWNrc2ltOiAnXFx1MjIzRCcsXG5cdGJhY2tzaW1lcTogJ1xcdTIyQ0QnLFxuXHRCYWNrc2xhc2g6ICdcXHUyMjE2Jyxcblx0QmFydjogJ1xcdTJBRTcnLFxuXHRiYXJ2ZWU6ICdcXHUyMkJEJyxcblx0QmFyd2VkOiAnXFx1MjMwNicsXG5cdGJhcndlZDogJ1xcdTIzMDUnLFxuXHRiYXJ3ZWRnZTogJ1xcdTIzMDUnLFxuXHRiYnJrOiAnXFx1MjNCNScsXG5cdGJicmt0YnJrOiAnXFx1MjNCNicsXG5cdGJjb25nOiAnXFx1MjI0QycsXG5cdEJjeTogJ1xcdTA0MTEnLFxuXHRiY3k6ICdcXHUwNDMxJyxcblx0YmRxdW86ICdcXHUyMDFFJyxcblx0YmVjYXVzOiAnXFx1MjIzNScsXG5cdEJlY2F1c2U6ICdcXHUyMjM1Jyxcblx0YmVjYXVzZTogJ1xcdTIyMzUnLFxuXHRiZW1wdHl2OiAnXFx1MjlCMCcsXG5cdGJlcHNpOiAnXFx1MDNGNicsXG5cdGJlcm5vdTogJ1xcdTIxMkMnLFxuXHRCZXJub3VsbGlzOiAnXFx1MjEyQycsXG5cdEJldGE6ICdcXHUwMzkyJyxcblx0YmV0YTogJ1xcdTAzQjInLFxuXHRiZXRoOiAnXFx1MjEzNicsXG5cdGJldHdlZW46ICdcXHUyMjZDJyxcblx0QmZyOiAnXFx1RDgzNVxcdUREMDUnLFxuXHRiZnI6ICdcXHVEODM1XFx1REQxRicsXG5cdGJpZ2NhcDogJ1xcdTIyQzInLFxuXHRiaWdjaXJjOiAnXFx1MjVFRicsXG5cdGJpZ2N1cDogJ1xcdTIyQzMnLFxuXHRiaWdvZG90OiAnXFx1MkEwMCcsXG5cdGJpZ29wbHVzOiAnXFx1MkEwMScsXG5cdGJpZ290aW1lczogJ1xcdTJBMDInLFxuXHRiaWdzcWN1cDogJ1xcdTJBMDYnLFxuXHRiaWdzdGFyOiAnXFx1MjYwNScsXG5cdGJpZ3RyaWFuZ2xlZG93bjogJ1xcdTI1QkQnLFxuXHRiaWd0cmlhbmdsZXVwOiAnXFx1MjVCMycsXG5cdGJpZ3VwbHVzOiAnXFx1MkEwNCcsXG5cdGJpZ3ZlZTogJ1xcdTIyQzEnLFxuXHRiaWd3ZWRnZTogJ1xcdTIyQzAnLFxuXHRia2Fyb3c6ICdcXHUyOTBEJyxcblx0YmxhY2tsb3plbmdlOiAnXFx1MjlFQicsXG5cdGJsYWNrc3F1YXJlOiAnXFx1MjVBQScsXG5cdGJsYWNrdHJpYW5nbGU6ICdcXHUyNUI0Jyxcblx0YmxhY2t0cmlhbmdsZWRvd246ICdcXHUyNUJFJyxcblx0YmxhY2t0cmlhbmdsZWxlZnQ6ICdcXHUyNUMyJyxcblx0YmxhY2t0cmlhbmdsZXJpZ2h0OiAnXFx1MjVCOCcsXG5cdGJsYW5rOiAnXFx1MjQyMycsXG5cdGJsazEyOiAnXFx1MjU5MicsXG5cdGJsazE0OiAnXFx1MjU5MScsXG5cdGJsazM0OiAnXFx1MjU5MycsXG5cdGJsb2NrOiAnXFx1MjU4OCcsXG5cdGJuZTogJ1xcdTAwM0RcXHUyMEU1Jyxcblx0Ym5lcXVpdjogJ1xcdTIyNjFcXHUyMEU1Jyxcblx0Yk5vdDogJ1xcdTJBRUQnLFxuXHRibm90OiAnXFx1MjMxMCcsXG5cdEJvcGY6ICdcXHVEODM1XFx1REQzOScsXG5cdGJvcGY6ICdcXHVEODM1XFx1REQ1MycsXG5cdGJvdDogJ1xcdTIyQTUnLFxuXHRib3R0b206ICdcXHUyMkE1Jyxcblx0Ym93dGllOiAnXFx1MjJDOCcsXG5cdGJveGJveDogJ1xcdTI5QzknLFxuXHRib3hETDogJ1xcdTI1NTcnLFxuXHRib3hEbDogJ1xcdTI1NTYnLFxuXHRib3hkTDogJ1xcdTI1NTUnLFxuXHRib3hkbDogJ1xcdTI1MTAnLFxuXHRib3hEUjogJ1xcdTI1NTQnLFxuXHRib3hEcjogJ1xcdTI1NTMnLFxuXHRib3hkUjogJ1xcdTI1NTInLFxuXHRib3hkcjogJ1xcdTI1MEMnLFxuXHRib3hIOiAnXFx1MjU1MCcsXG5cdGJveGg6ICdcXHUyNTAwJyxcblx0Ym94SEQ6ICdcXHUyNTY2Jyxcblx0Ym94SGQ6ICdcXHUyNTY0Jyxcblx0Ym94aEQ6ICdcXHUyNTY1Jyxcblx0Ym94aGQ6ICdcXHUyNTJDJyxcblx0Ym94SFU6ICdcXHUyNTY5Jyxcblx0Ym94SHU6ICdcXHUyNTY3Jyxcblx0Ym94aFU6ICdcXHUyNTY4Jyxcblx0Ym94aHU6ICdcXHUyNTM0Jyxcblx0Ym94bWludXM6ICdcXHUyMjlGJyxcblx0Ym94cGx1czogJ1xcdTIyOUUnLFxuXHRib3h0aW1lczogJ1xcdTIyQTAnLFxuXHRib3hVTDogJ1xcdTI1NUQnLFxuXHRib3hVbDogJ1xcdTI1NUMnLFxuXHRib3h1TDogJ1xcdTI1NUInLFxuXHRib3h1bDogJ1xcdTI1MTgnLFxuXHRib3hVUjogJ1xcdTI1NUEnLFxuXHRib3hVcjogJ1xcdTI1NTknLFxuXHRib3h1UjogJ1xcdTI1NTgnLFxuXHRib3h1cjogJ1xcdTI1MTQnLFxuXHRib3hWOiAnXFx1MjU1MScsXG5cdGJveHY6ICdcXHUyNTAyJyxcblx0Ym94Vkg6ICdcXHUyNTZDJyxcblx0Ym94Vmg6ICdcXHUyNTZCJyxcblx0Ym94dkg6ICdcXHUyNTZBJyxcblx0Ym94dmg6ICdcXHUyNTNDJyxcblx0Ym94Vkw6ICdcXHUyNTYzJyxcblx0Ym94Vmw6ICdcXHUyNTYyJyxcblx0Ym94dkw6ICdcXHUyNTYxJyxcblx0Ym94dmw6ICdcXHUyNTI0Jyxcblx0Ym94VlI6ICdcXHUyNTYwJyxcblx0Ym94VnI6ICdcXHUyNTVGJyxcblx0Ym94dlI6ICdcXHUyNTVFJyxcblx0Ym94dnI6ICdcXHUyNTFDJyxcblx0YnByaW1lOiAnXFx1MjAzNScsXG5cdEJyZXZlOiAnXFx1MDJEOCcsXG5cdGJyZXZlOiAnXFx1MDJEOCcsXG5cdGJydmJhcjogJ1xcdTAwQTYnLFxuXHRCc2NyOiAnXFx1MjEyQycsXG5cdGJzY3I6ICdcXHVEODM1XFx1RENCNycsXG5cdGJzZW1pOiAnXFx1MjA0RicsXG5cdGJzaW06ICdcXHUyMjNEJyxcblx0YnNpbWU6ICdcXHUyMkNEJyxcblx0YnNvbDogJ1xcdTAwNUMnLFxuXHRic29sYjogJ1xcdTI5QzUnLFxuXHRic29saHN1YjogJ1xcdTI3QzgnLFxuXHRidWxsOiAnXFx1MjAyMicsXG5cdGJ1bGxldDogJ1xcdTIwMjInLFxuXHRidW1wOiAnXFx1MjI0RScsXG5cdGJ1bXBFOiAnXFx1MkFBRScsXG5cdGJ1bXBlOiAnXFx1MjI0RicsXG5cdEJ1bXBlcTogJ1xcdTIyNEUnLFxuXHRidW1wZXE6ICdcXHUyMjRGJyxcblx0Q2FjdXRlOiAnXFx1MDEwNicsXG5cdGNhY3V0ZTogJ1xcdTAxMDcnLFxuXHRDYXA6ICdcXHUyMkQyJyxcblx0Y2FwOiAnXFx1MjIyOScsXG5cdGNhcGFuZDogJ1xcdTJBNDQnLFxuXHRjYXBicmN1cDogJ1xcdTJBNDknLFxuXHRjYXBjYXA6ICdcXHUyQTRCJyxcblx0Y2FwY3VwOiAnXFx1MkE0NycsXG5cdGNhcGRvdDogJ1xcdTJBNDAnLFxuXHRDYXBpdGFsRGlmZmVyZW50aWFsRDogJ1xcdTIxNDUnLFxuXHRjYXBzOiAnXFx1MjIyOVxcdUZFMDAnLFxuXHRjYXJldDogJ1xcdTIwNDEnLFxuXHRjYXJvbjogJ1xcdTAyQzcnLFxuXHRDYXlsZXlzOiAnXFx1MjEyRCcsXG5cdGNjYXBzOiAnXFx1MkE0RCcsXG5cdENjYXJvbjogJ1xcdTAxMEMnLFxuXHRjY2Fyb246ICdcXHUwMTBEJyxcblx0Q2NlZGlsOiAnXFx1MDBDNycsXG5cdGNjZWRpbDogJ1xcdTAwRTcnLFxuXHRDY2lyYzogJ1xcdTAxMDgnLFxuXHRjY2lyYzogJ1xcdTAxMDknLFxuXHRDY29uaW50OiAnXFx1MjIzMCcsXG5cdGNjdXBzOiAnXFx1MkE0QycsXG5cdGNjdXBzc206ICdcXHUyQTUwJyxcblx0Q2RvdDogJ1xcdTAxMEEnLFxuXHRjZG90OiAnXFx1MDEwQicsXG5cdGNlZGlsOiAnXFx1MDBCOCcsXG5cdENlZGlsbGE6ICdcXHUwMEI4Jyxcblx0Y2VtcHR5djogJ1xcdTI5QjInLFxuXHRjZW50OiAnXFx1MDBBMicsXG5cdENlbnRlckRvdDogJ1xcdTAwQjcnLFxuXHRjZW50ZXJkb3Q6ICdcXHUwMEI3Jyxcblx0Q2ZyOiAnXFx1MjEyRCcsXG5cdGNmcjogJ1xcdUQ4MzVcXHVERDIwJyxcblx0Q0hjeTogJ1xcdTA0MjcnLFxuXHRjaGN5OiAnXFx1MDQ0NycsXG5cdGNoZWNrOiAnXFx1MjcxMycsXG5cdGNoZWNrbWFyazogJ1xcdTI3MTMnLFxuXHRDaGk6ICdcXHUwM0E3Jyxcblx0Y2hpOiAnXFx1MDNDNycsXG5cdGNpcjogJ1xcdTI1Q0InLFxuXHRjaXJjOiAnXFx1MDJDNicsXG5cdGNpcmNlcTogJ1xcdTIyNTcnLFxuXHRjaXJjbGVhcnJvd2xlZnQ6ICdcXHUyMUJBJyxcblx0Y2lyY2xlYXJyb3dyaWdodDogJ1xcdTIxQkInLFxuXHRjaXJjbGVkYXN0OiAnXFx1MjI5QicsXG5cdGNpcmNsZWRjaXJjOiAnXFx1MjI5QScsXG5cdGNpcmNsZWRkYXNoOiAnXFx1MjI5RCcsXG5cdENpcmNsZURvdDogJ1xcdTIyOTknLFxuXHRjaXJjbGVkUjogJ1xcdTAwQUUnLFxuXHRjaXJjbGVkUzogJ1xcdTI0QzgnLFxuXHRDaXJjbGVNaW51czogJ1xcdTIyOTYnLFxuXHRDaXJjbGVQbHVzOiAnXFx1MjI5NScsXG5cdENpcmNsZVRpbWVzOiAnXFx1MjI5NycsXG5cdGNpckU6ICdcXHUyOUMzJyxcblx0Y2lyZTogJ1xcdTIyNTcnLFxuXHRjaXJmbmludDogJ1xcdTJBMTAnLFxuXHRjaXJtaWQ6ICdcXHUyQUVGJyxcblx0Y2lyc2NpcjogJ1xcdTI5QzInLFxuXHRDbG9ja3dpc2VDb250b3VySW50ZWdyYWw6ICdcXHUyMjMyJyxcblx0Q2xvc2VDdXJseURvdWJsZVF1b3RlOiAnXFx1MjAxRCcsXG5cdENsb3NlQ3VybHlRdW90ZTogJ1xcdTIwMTknLFxuXHRjbHViczogJ1xcdTI2NjMnLFxuXHRjbHVic3VpdDogJ1xcdTI2NjMnLFxuXHRDb2xvbjogJ1xcdTIyMzcnLFxuXHRjb2xvbjogJ1xcdTAwM0EnLFxuXHRDb2xvbmU6ICdcXHUyQTc0Jyxcblx0Y29sb25lOiAnXFx1MjI1NCcsXG5cdGNvbG9uZXE6ICdcXHUyMjU0Jyxcblx0Y29tbWE6ICdcXHUwMDJDJyxcblx0Y29tbWF0OiAnXFx1MDA0MCcsXG5cdGNvbXA6ICdcXHUyMjAxJyxcblx0Y29tcGZuOiAnXFx1MjIxOCcsXG5cdGNvbXBsZW1lbnQ6ICdcXHUyMjAxJyxcblx0Y29tcGxleGVzOiAnXFx1MjEwMicsXG5cdGNvbmc6ICdcXHUyMjQ1Jyxcblx0Y29uZ2RvdDogJ1xcdTJBNkQnLFxuXHRDb25ncnVlbnQ6ICdcXHUyMjYxJyxcblx0Q29uaW50OiAnXFx1MjIyRicsXG5cdGNvbmludDogJ1xcdTIyMkUnLFxuXHRDb250b3VySW50ZWdyYWw6ICdcXHUyMjJFJyxcblx0Q29wZjogJ1xcdTIxMDInLFxuXHRjb3BmOiAnXFx1RDgzNVxcdURENTQnLFxuXHRjb3Byb2Q6ICdcXHUyMjEwJyxcblx0Q29wcm9kdWN0OiAnXFx1MjIxMCcsXG5cdENPUFk6ICdcXHUwMEE5Jyxcblx0Y29weTogJ1xcdTAwQTknLFxuXHRjb3B5c3I6ICdcXHUyMTE3Jyxcblx0Q291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDogJ1xcdTIyMzMnLFxuXHRjcmFycjogJ1xcdTIxQjUnLFxuXHRDcm9zczogJ1xcdTJBMkYnLFxuXHRjcm9zczogJ1xcdTI3MTcnLFxuXHRDc2NyOiAnXFx1RDgzNVxcdURDOUUnLFxuXHRjc2NyOiAnXFx1RDgzNVxcdURDQjgnLFxuXHRjc3ViOiAnXFx1MkFDRicsXG5cdGNzdWJlOiAnXFx1MkFEMScsXG5cdGNzdXA6ICdcXHUyQUQwJyxcblx0Y3N1cGU6ICdcXHUyQUQyJyxcblx0Y3Rkb3Q6ICdcXHUyMkVGJyxcblx0Y3VkYXJybDogJ1xcdTI5MzgnLFxuXHRjdWRhcnJyOiAnXFx1MjkzNScsXG5cdGN1ZXByOiAnXFx1MjJERScsXG5cdGN1ZXNjOiAnXFx1MjJERicsXG5cdGN1bGFycjogJ1xcdTIxQjYnLFxuXHRjdWxhcnJwOiAnXFx1MjkzRCcsXG5cdEN1cDogJ1xcdTIyRDMnLFxuXHRjdXA6ICdcXHUyMjJBJyxcblx0Y3VwYnJjYXA6ICdcXHUyQTQ4Jyxcblx0Q3VwQ2FwOiAnXFx1MjI0RCcsXG5cdGN1cGNhcDogJ1xcdTJBNDYnLFxuXHRjdXBjdXA6ICdcXHUyQTRBJyxcblx0Y3VwZG90OiAnXFx1MjI4RCcsXG5cdGN1cG9yOiAnXFx1MkE0NScsXG5cdGN1cHM6ICdcXHUyMjJBXFx1RkUwMCcsXG5cdGN1cmFycjogJ1xcdTIxQjcnLFxuXHRjdXJhcnJtOiAnXFx1MjkzQycsXG5cdGN1cmx5ZXFwcmVjOiAnXFx1MjJERScsXG5cdGN1cmx5ZXFzdWNjOiAnXFx1MjJERicsXG5cdGN1cmx5dmVlOiAnXFx1MjJDRScsXG5cdGN1cmx5d2VkZ2U6ICdcXHUyMkNGJyxcblx0Y3VycmVuOiAnXFx1MDBBNCcsXG5cdGN1cnZlYXJyb3dsZWZ0OiAnXFx1MjFCNicsXG5cdGN1cnZlYXJyb3dyaWdodDogJ1xcdTIxQjcnLFxuXHRjdXZlZTogJ1xcdTIyQ0UnLFxuXHRjdXdlZDogJ1xcdTIyQ0YnLFxuXHRjd2NvbmludDogJ1xcdTIyMzInLFxuXHRjd2ludDogJ1xcdTIyMzEnLFxuXHRjeWxjdHk6ICdcXHUyMzJEJyxcblx0RGFnZ2VyOiAnXFx1MjAyMScsXG5cdGRhZ2dlcjogJ1xcdTIwMjAnLFxuXHRkYWxldGg6ICdcXHUyMTM4Jyxcblx0RGFycjogJ1xcdTIxQTEnLFxuXHRkQXJyOiAnXFx1MjFEMycsXG5cdGRhcnI6ICdcXHUyMTkzJyxcblx0ZGFzaDogJ1xcdTIwMTAnLFxuXHREYXNodjogJ1xcdTJBRTQnLFxuXHRkYXNodjogJ1xcdTIyQTMnLFxuXHRkYmthcm93OiAnXFx1MjkwRicsXG5cdGRibGFjOiAnXFx1MDJERCcsXG5cdERjYXJvbjogJ1xcdTAxMEUnLFxuXHRkY2Fyb246ICdcXHUwMTBGJyxcblx0RGN5OiAnXFx1MDQxNCcsXG5cdGRjeTogJ1xcdTA0MzQnLFxuXHRERDogJ1xcdTIxNDUnLFxuXHRkZDogJ1xcdTIxNDYnLFxuXHRkZGFnZ2VyOiAnXFx1MjAyMScsXG5cdGRkYXJyOiAnXFx1MjFDQScsXG5cdEREb3RyYWhkOiAnXFx1MjkxMScsXG5cdGRkb3RzZXE6ICdcXHUyQTc3Jyxcblx0ZGVnOiAnXFx1MDBCMCcsXG5cdERlbDogJ1xcdTIyMDcnLFxuXHREZWx0YTogJ1xcdTAzOTQnLFxuXHRkZWx0YTogJ1xcdTAzQjQnLFxuXHRkZW1wdHl2OiAnXFx1MjlCMScsXG5cdGRmaXNodDogJ1xcdTI5N0YnLFxuXHREZnI6ICdcXHVEODM1XFx1REQwNycsXG5cdGRmcjogJ1xcdUQ4MzVcXHVERDIxJyxcblx0ZEhhcjogJ1xcdTI5NjUnLFxuXHRkaGFybDogJ1xcdTIxQzMnLFxuXHRkaGFycjogJ1xcdTIxQzInLFxuXHREaWFjcml0aWNhbEFjdXRlOiAnXFx1MDBCNCcsXG5cdERpYWNyaXRpY2FsRG90OiAnXFx1MDJEOScsXG5cdERpYWNyaXRpY2FsRG91YmxlQWN1dGU6ICdcXHUwMkREJyxcblx0RGlhY3JpdGljYWxHcmF2ZTogJ1xcdTAwNjAnLFxuXHREaWFjcml0aWNhbFRpbGRlOiAnXFx1MDJEQycsXG5cdGRpYW06ICdcXHUyMkM0Jyxcblx0RGlhbW9uZDogJ1xcdTIyQzQnLFxuXHRkaWFtb25kOiAnXFx1MjJDNCcsXG5cdGRpYW1vbmRzdWl0OiAnXFx1MjY2NicsXG5cdGRpYW1zOiAnXFx1MjY2NicsXG5cdGRpZTogJ1xcdTAwQTgnLFxuXHREaWZmZXJlbnRpYWxEOiAnXFx1MjE0NicsXG5cdGRpZ2FtbWE6ICdcXHUwM0REJyxcblx0ZGlzaW46ICdcXHUyMkYyJyxcblx0ZGl2OiAnXFx1MDBGNycsXG5cdGRpdmlkZTogJ1xcdTAwRjcnLFxuXHRkaXZpZGVvbnRpbWVzOiAnXFx1MjJDNycsXG5cdGRpdm9ueDogJ1xcdTIyQzcnLFxuXHRESmN5OiAnXFx1MDQwMicsXG5cdGRqY3k6ICdcXHUwNDUyJyxcblx0ZGxjb3JuOiAnXFx1MjMxRScsXG5cdGRsY3JvcDogJ1xcdTIzMEQnLFxuXHRkb2xsYXI6ICdcXHUwMDI0Jyxcblx0RG9wZjogJ1xcdUQ4MzVcXHVERDNCJyxcblx0ZG9wZjogJ1xcdUQ4MzVcXHVERDU1Jyxcblx0RG90OiAnXFx1MDBBOCcsXG5cdGRvdDogJ1xcdTAyRDknLFxuXHREb3REb3Q6ICdcXHUyMERDJyxcblx0ZG90ZXE6ICdcXHUyMjUwJyxcblx0ZG90ZXFkb3Q6ICdcXHUyMjUxJyxcblx0RG90RXF1YWw6ICdcXHUyMjUwJyxcblx0ZG90bWludXM6ICdcXHUyMjM4Jyxcblx0ZG90cGx1czogJ1xcdTIyMTQnLFxuXHRkb3RzcXVhcmU6ICdcXHUyMkExJyxcblx0ZG91YmxlYmFyd2VkZ2U6ICdcXHUyMzA2Jyxcblx0RG91YmxlQ29udG91ckludGVncmFsOiAnXFx1MjIyRicsXG5cdERvdWJsZURvdDogJ1xcdTAwQTgnLFxuXHREb3VibGVEb3duQXJyb3c6ICdcXHUyMUQzJyxcblx0RG91YmxlTGVmdEFycm93OiAnXFx1MjFEMCcsXG5cdERvdWJsZUxlZnRSaWdodEFycm93OiAnXFx1MjFENCcsXG5cdERvdWJsZUxlZnRUZWU6ICdcXHUyQUU0Jyxcblx0RG91YmxlTG9uZ0xlZnRBcnJvdzogJ1xcdTI3RjgnLFxuXHREb3VibGVMb25nTGVmdFJpZ2h0QXJyb3c6ICdcXHUyN0ZBJyxcblx0RG91YmxlTG9uZ1JpZ2h0QXJyb3c6ICdcXHUyN0Y5Jyxcblx0RG91YmxlUmlnaHRBcnJvdzogJ1xcdTIxRDInLFxuXHREb3VibGVSaWdodFRlZTogJ1xcdTIyQTgnLFxuXHREb3VibGVVcEFycm93OiAnXFx1MjFEMScsXG5cdERvdWJsZVVwRG93bkFycm93OiAnXFx1MjFENScsXG5cdERvdWJsZVZlcnRpY2FsQmFyOiAnXFx1MjIyNScsXG5cdERvd25BcnJvdzogJ1xcdTIxOTMnLFxuXHREb3duYXJyb3c6ICdcXHUyMUQzJyxcblx0ZG93bmFycm93OiAnXFx1MjE5MycsXG5cdERvd25BcnJvd0JhcjogJ1xcdTI5MTMnLFxuXHREb3duQXJyb3dVcEFycm93OiAnXFx1MjFGNScsXG5cdERvd25CcmV2ZTogJ1xcdTAzMTEnLFxuXHRkb3duZG93bmFycm93czogJ1xcdTIxQ0EnLFxuXHRkb3duaGFycG9vbmxlZnQ6ICdcXHUyMUMzJyxcblx0ZG93bmhhcnBvb25yaWdodDogJ1xcdTIxQzInLFxuXHREb3duTGVmdFJpZ2h0VmVjdG9yOiAnXFx1Mjk1MCcsXG5cdERvd25MZWZ0VGVlVmVjdG9yOiAnXFx1Mjk1RScsXG5cdERvd25MZWZ0VmVjdG9yOiAnXFx1MjFCRCcsXG5cdERvd25MZWZ0VmVjdG9yQmFyOiAnXFx1Mjk1NicsXG5cdERvd25SaWdodFRlZVZlY3RvcjogJ1xcdTI5NUYnLFxuXHREb3duUmlnaHRWZWN0b3I6ICdcXHUyMUMxJyxcblx0RG93blJpZ2h0VmVjdG9yQmFyOiAnXFx1Mjk1NycsXG5cdERvd25UZWU6ICdcXHUyMkE0Jyxcblx0RG93blRlZUFycm93OiAnXFx1MjFBNycsXG5cdGRyYmthcm93OiAnXFx1MjkxMCcsXG5cdGRyY29ybjogJ1xcdTIzMUYnLFxuXHRkcmNyb3A6ICdcXHUyMzBDJyxcblx0RHNjcjogJ1xcdUQ4MzVcXHVEQzlGJyxcblx0ZHNjcjogJ1xcdUQ4MzVcXHVEQ0I5Jyxcblx0RFNjeTogJ1xcdTA0MDUnLFxuXHRkc2N5OiAnXFx1MDQ1NScsXG5cdGRzb2w6ICdcXHUyOUY2Jyxcblx0RHN0cm9rOiAnXFx1MDExMCcsXG5cdGRzdHJvazogJ1xcdTAxMTEnLFxuXHRkdGRvdDogJ1xcdTIyRjEnLFxuXHRkdHJpOiAnXFx1MjVCRicsXG5cdGR0cmlmOiAnXFx1MjVCRScsXG5cdGR1YXJyOiAnXFx1MjFGNScsXG5cdGR1aGFyOiAnXFx1Mjk2RicsXG5cdGR3YW5nbGU6ICdcXHUyOUE2Jyxcblx0RFpjeTogJ1xcdTA0MEYnLFxuXHRkemN5OiAnXFx1MDQ1RicsXG5cdGR6aWdyYXJyOiAnXFx1MjdGRicsXG5cdEVhY3V0ZTogJ1xcdTAwQzknLFxuXHRlYWN1dGU6ICdcXHUwMEU5Jyxcblx0ZWFzdGVyOiAnXFx1MkE2RScsXG5cdEVjYXJvbjogJ1xcdTAxMUEnLFxuXHRlY2Fyb246ICdcXHUwMTFCJyxcblx0ZWNpcjogJ1xcdTIyNTYnLFxuXHRFY2lyYzogJ1xcdTAwQ0EnLFxuXHRlY2lyYzogJ1xcdTAwRUEnLFxuXHRlY29sb246ICdcXHUyMjU1Jyxcblx0RWN5OiAnXFx1MDQyRCcsXG5cdGVjeTogJ1xcdTA0NEQnLFxuXHRlRERvdDogJ1xcdTJBNzcnLFxuXHRFZG90OiAnXFx1MDExNicsXG5cdGVEb3Q6ICdcXHUyMjUxJyxcblx0ZWRvdDogJ1xcdTAxMTcnLFxuXHRlZTogJ1xcdTIxNDcnLFxuXHRlZkRvdDogJ1xcdTIyNTInLFxuXHRFZnI6ICdcXHVEODM1XFx1REQwOCcsXG5cdGVmcjogJ1xcdUQ4MzVcXHVERDIyJyxcblx0ZWc6ICdcXHUyQTlBJyxcblx0RWdyYXZlOiAnXFx1MDBDOCcsXG5cdGVncmF2ZTogJ1xcdTAwRTgnLFxuXHRlZ3M6ICdcXHUyQTk2Jyxcblx0ZWdzZG90OiAnXFx1MkE5OCcsXG5cdGVsOiAnXFx1MkE5OScsXG5cdEVsZW1lbnQ6ICdcXHUyMjA4Jyxcblx0ZWxpbnRlcnM6ICdcXHUyM0U3Jyxcblx0ZWxsOiAnXFx1MjExMycsXG5cdGVsczogJ1xcdTJBOTUnLFxuXHRlbHNkb3Q6ICdcXHUyQTk3Jyxcblx0RW1hY3I6ICdcXHUwMTEyJyxcblx0ZW1hY3I6ICdcXHUwMTEzJyxcblx0ZW1wdHk6ICdcXHUyMjA1Jyxcblx0ZW1wdHlzZXQ6ICdcXHUyMjA1Jyxcblx0RW1wdHlTbWFsbFNxdWFyZTogJ1xcdTI1RkInLFxuXHRlbXB0eXY6ICdcXHUyMjA1Jyxcblx0RW1wdHlWZXJ5U21hbGxTcXVhcmU6ICdcXHUyNUFCJyxcblx0ZW1zcDogJ1xcdTIwMDMnLFxuXHRlbXNwMTM6ICdcXHUyMDA0Jyxcblx0ZW1zcDE0OiAnXFx1MjAwNScsXG5cdEVORzogJ1xcdTAxNEEnLFxuXHRlbmc6ICdcXHUwMTRCJyxcblx0ZW5zcDogJ1xcdTIwMDInLFxuXHRFb2dvbjogJ1xcdTAxMTgnLFxuXHRlb2dvbjogJ1xcdTAxMTknLFxuXHRFb3BmOiAnXFx1RDgzNVxcdUREM0MnLFxuXHRlb3BmOiAnXFx1RDgzNVxcdURENTYnLFxuXHRlcGFyOiAnXFx1MjJENScsXG5cdGVwYXJzbDogJ1xcdTI5RTMnLFxuXHRlcGx1czogJ1xcdTJBNzEnLFxuXHRlcHNpOiAnXFx1MDNCNScsXG5cdEVwc2lsb246ICdcXHUwMzk1Jyxcblx0ZXBzaWxvbjogJ1xcdTAzQjUnLFxuXHRlcHNpdjogJ1xcdTAzRjUnLFxuXHRlcWNpcmM6ICdcXHUyMjU2Jyxcblx0ZXFjb2xvbjogJ1xcdTIyNTUnLFxuXHRlcXNpbTogJ1xcdTIyNDInLFxuXHRlcXNsYW50Z3RyOiAnXFx1MkE5NicsXG5cdGVxc2xhbnRsZXNzOiAnXFx1MkE5NScsXG5cdEVxdWFsOiAnXFx1MkE3NScsXG5cdGVxdWFsczogJ1xcdTAwM0QnLFxuXHRFcXVhbFRpbGRlOiAnXFx1MjI0MicsXG5cdGVxdWVzdDogJ1xcdTIyNUYnLFxuXHRFcXVpbGlicml1bTogJ1xcdTIxQ0MnLFxuXHRlcXVpdjogJ1xcdTIyNjEnLFxuXHRlcXVpdkREOiAnXFx1MkE3OCcsXG5cdGVxdnBhcnNsOiAnXFx1MjlFNScsXG5cdGVyYXJyOiAnXFx1Mjk3MScsXG5cdGVyRG90OiAnXFx1MjI1MycsXG5cdEVzY3I6ICdcXHUyMTMwJyxcblx0ZXNjcjogJ1xcdTIxMkYnLFxuXHRlc2RvdDogJ1xcdTIyNTAnLFxuXHRFc2ltOiAnXFx1MkE3MycsXG5cdGVzaW06ICdcXHUyMjQyJyxcblx0RXRhOiAnXFx1MDM5NycsXG5cdGV0YTogJ1xcdTAzQjcnLFxuXHRFVEg6ICdcXHUwMEQwJyxcblx0ZXRoOiAnXFx1MDBGMCcsXG5cdEV1bWw6ICdcXHUwMENCJyxcblx0ZXVtbDogJ1xcdTAwRUInLFxuXHRldXJvOiAnXFx1MjBBQycsXG5cdGV4Y2w6ICdcXHUwMDIxJyxcblx0ZXhpc3Q6ICdcXHUyMjAzJyxcblx0RXhpc3RzOiAnXFx1MjIwMycsXG5cdGV4cGVjdGF0aW9uOiAnXFx1MjEzMCcsXG5cdEV4cG9uZW50aWFsRTogJ1xcdTIxNDcnLFxuXHRleHBvbmVudGlhbGU6ICdcXHUyMTQ3Jyxcblx0ZmFsbGluZ2RvdHNlcTogJ1xcdTIyNTInLFxuXHRGY3k6ICdcXHUwNDI0Jyxcblx0ZmN5OiAnXFx1MDQ0NCcsXG5cdGZlbWFsZTogJ1xcdTI2NDAnLFxuXHRmZmlsaWc6ICdcXHVGQjAzJyxcblx0ZmZsaWc6ICdcXHVGQjAwJyxcblx0ZmZsbGlnOiAnXFx1RkIwNCcsXG5cdEZmcjogJ1xcdUQ4MzVcXHVERDA5Jyxcblx0ZmZyOiAnXFx1RDgzNVxcdUREMjMnLFxuXHRmaWxpZzogJ1xcdUZCMDEnLFxuXHRGaWxsZWRTbWFsbFNxdWFyZTogJ1xcdTI1RkMnLFxuXHRGaWxsZWRWZXJ5U21hbGxTcXVhcmU6ICdcXHUyNUFBJyxcblx0ZmpsaWc6ICdcXHUwMDY2XFx1MDA2QScsXG5cdGZsYXQ6ICdcXHUyNjZEJyxcblx0ZmxsaWc6ICdcXHVGQjAyJyxcblx0Zmx0bnM6ICdcXHUyNUIxJyxcblx0Zm5vZjogJ1xcdTAxOTInLFxuXHRGb3BmOiAnXFx1RDgzNVxcdUREM0QnLFxuXHRmb3BmOiAnXFx1RDgzNVxcdURENTcnLFxuXHRGb3JBbGw6ICdcXHUyMjAwJyxcblx0Zm9yYWxsOiAnXFx1MjIwMCcsXG5cdGZvcms6ICdcXHUyMkQ0Jyxcblx0Zm9ya3Y6ICdcXHUyQUQ5Jyxcblx0Rm91cmllcnRyZjogJ1xcdTIxMzEnLFxuXHRmcGFydGludDogJ1xcdTJBMEQnLFxuXHRmcmFjMTI6ICdcXHUwMEJEJyxcblx0ZnJhYzEzOiAnXFx1MjE1MycsXG5cdGZyYWMxNDogJ1xcdTAwQkMnLFxuXHRmcmFjMTU6ICdcXHUyMTU1Jyxcblx0ZnJhYzE2OiAnXFx1MjE1OScsXG5cdGZyYWMxODogJ1xcdTIxNUInLFxuXHRmcmFjMjM6ICdcXHUyMTU0Jyxcblx0ZnJhYzI1OiAnXFx1MjE1NicsXG5cdGZyYWMzNDogJ1xcdTAwQkUnLFxuXHRmcmFjMzU6ICdcXHUyMTU3Jyxcblx0ZnJhYzM4OiAnXFx1MjE1QycsXG5cdGZyYWM0NTogJ1xcdTIxNTgnLFxuXHRmcmFjNTY6ICdcXHUyMTVBJyxcblx0ZnJhYzU4OiAnXFx1MjE1RCcsXG5cdGZyYWM3ODogJ1xcdTIxNUUnLFxuXHRmcmFzbDogJ1xcdTIwNDQnLFxuXHRmcm93bjogJ1xcdTIzMjInLFxuXHRGc2NyOiAnXFx1MjEzMScsXG5cdGZzY3I6ICdcXHVEODM1XFx1RENCQicsXG5cdGdhY3V0ZTogJ1xcdTAxRjUnLFxuXHRHYW1tYTogJ1xcdTAzOTMnLFxuXHRnYW1tYTogJ1xcdTAzQjMnLFxuXHRHYW1tYWQ6ICdcXHUwM0RDJyxcblx0Z2FtbWFkOiAnXFx1MDNERCcsXG5cdGdhcDogJ1xcdTJBODYnLFxuXHRHYnJldmU6ICdcXHUwMTFFJyxcblx0Z2JyZXZlOiAnXFx1MDExRicsXG5cdEdjZWRpbDogJ1xcdTAxMjInLFxuXHRHY2lyYzogJ1xcdTAxMUMnLFxuXHRnY2lyYzogJ1xcdTAxMUQnLFxuXHRHY3k6ICdcXHUwNDEzJyxcblx0Z2N5OiAnXFx1MDQzMycsXG5cdEdkb3Q6ICdcXHUwMTIwJyxcblx0Z2RvdDogJ1xcdTAxMjEnLFxuXHRnRTogJ1xcdTIyNjcnLFxuXHRnZTogJ1xcdTIyNjUnLFxuXHRnRWw6ICdcXHUyQThDJyxcblx0Z2VsOiAnXFx1MjJEQicsXG5cdGdlcTogJ1xcdTIyNjUnLFxuXHRnZXFxOiAnXFx1MjI2NycsXG5cdGdlcXNsYW50OiAnXFx1MkE3RScsXG5cdGdlczogJ1xcdTJBN0UnLFxuXHRnZXNjYzogJ1xcdTJBQTknLFxuXHRnZXNkb3Q6ICdcXHUyQTgwJyxcblx0Z2VzZG90bzogJ1xcdTJBODInLFxuXHRnZXNkb3RvbDogJ1xcdTJBODQnLFxuXHRnZXNsOiAnXFx1MjJEQlxcdUZFMDAnLFxuXHRnZXNsZXM6ICdcXHUyQTk0Jyxcblx0R2ZyOiAnXFx1RDgzNVxcdUREMEEnLFxuXHRnZnI6ICdcXHVEODM1XFx1REQyNCcsXG5cdEdnOiAnXFx1MjJEOScsXG5cdGdnOiAnXFx1MjI2QicsXG5cdGdnZzogJ1xcdTIyRDknLFxuXHRnaW1lbDogJ1xcdTIxMzcnLFxuXHRHSmN5OiAnXFx1MDQwMycsXG5cdGdqY3k6ICdcXHUwNDUzJyxcblx0Z2w6ICdcXHUyMjc3Jyxcblx0Z2xhOiAnXFx1MkFBNScsXG5cdGdsRTogJ1xcdTJBOTInLFxuXHRnbGo6ICdcXHUyQUE0Jyxcblx0Z25hcDogJ1xcdTJBOEEnLFxuXHRnbmFwcHJveDogJ1xcdTJBOEEnLFxuXHRnbkU6ICdcXHUyMjY5Jyxcblx0Z25lOiAnXFx1MkE4OCcsXG5cdGduZXE6ICdcXHUyQTg4Jyxcblx0Z25lcXE6ICdcXHUyMjY5Jyxcblx0Z25zaW06ICdcXHUyMkU3Jyxcblx0R29wZjogJ1xcdUQ4MzVcXHVERDNFJyxcblx0Z29wZjogJ1xcdUQ4MzVcXHVERDU4Jyxcblx0Z3JhdmU6ICdcXHUwMDYwJyxcblx0R3JlYXRlckVxdWFsOiAnXFx1MjI2NScsXG5cdEdyZWF0ZXJFcXVhbExlc3M6ICdcXHUyMkRCJyxcblx0R3JlYXRlckZ1bGxFcXVhbDogJ1xcdTIyNjcnLFxuXHRHcmVhdGVyR3JlYXRlcjogJ1xcdTJBQTInLFxuXHRHcmVhdGVyTGVzczogJ1xcdTIyNzcnLFxuXHRHcmVhdGVyU2xhbnRFcXVhbDogJ1xcdTJBN0UnLFxuXHRHcmVhdGVyVGlsZGU6ICdcXHUyMjczJyxcblx0R3NjcjogJ1xcdUQ4MzVcXHVEQ0EyJyxcblx0Z3NjcjogJ1xcdTIxMEEnLFxuXHRnc2ltOiAnXFx1MjI3MycsXG5cdGdzaW1lOiAnXFx1MkE4RScsXG5cdGdzaW1sOiAnXFx1MkE5MCcsXG5cdEd0OiAnXFx1MjI2QicsXG5cdEdUOiAnXFx1MDAzRScsXG5cdGd0OiAnXFx1MDAzRScsXG5cdGd0Y2M6ICdcXHUyQUE3Jyxcblx0Z3RjaXI6ICdcXHUyQTdBJyxcblx0Z3Rkb3Q6ICdcXHUyMkQ3Jyxcblx0Z3RsUGFyOiAnXFx1Mjk5NScsXG5cdGd0cXVlc3Q6ICdcXHUyQTdDJyxcblx0Z3RyYXBwcm94OiAnXFx1MkE4NicsXG5cdGd0cmFycjogJ1xcdTI5NzgnLFxuXHRndHJkb3Q6ICdcXHUyMkQ3Jyxcblx0Z3RyZXFsZXNzOiAnXFx1MjJEQicsXG5cdGd0cmVxcWxlc3M6ICdcXHUyQThDJyxcblx0Z3RybGVzczogJ1xcdTIyNzcnLFxuXHRndHJzaW06ICdcXHUyMjczJyxcblx0Z3ZlcnRuZXFxOiAnXFx1MjI2OVxcdUZFMDAnLFxuXHRndm5FOiAnXFx1MjI2OVxcdUZFMDAnLFxuXHRIYWNlazogJ1xcdTAyQzcnLFxuXHRoYWlyc3A6ICdcXHUyMDBBJyxcblx0aGFsZjogJ1xcdTAwQkQnLFxuXHRoYW1pbHQ6ICdcXHUyMTBCJyxcblx0SEFSRGN5OiAnXFx1MDQyQScsXG5cdGhhcmRjeTogJ1xcdTA0NEEnLFxuXHRoQXJyOiAnXFx1MjFENCcsXG5cdGhhcnI6ICdcXHUyMTk0Jyxcblx0aGFycmNpcjogJ1xcdTI5NDgnLFxuXHRoYXJydzogJ1xcdTIxQUQnLFxuXHRIYXQ6ICdcXHUwMDVFJyxcblx0aGJhcjogJ1xcdTIxMEYnLFxuXHRIY2lyYzogJ1xcdTAxMjQnLFxuXHRoY2lyYzogJ1xcdTAxMjUnLFxuXHRoZWFydHM6ICdcXHUyNjY1Jyxcblx0aGVhcnRzdWl0OiAnXFx1MjY2NScsXG5cdGhlbGxpcDogJ1xcdTIwMjYnLFxuXHRoZXJjb246ICdcXHUyMkI5Jyxcblx0SGZyOiAnXFx1MjEwQycsXG5cdGhmcjogJ1xcdUQ4MzVcXHVERDI1Jyxcblx0SGlsYmVydFNwYWNlOiAnXFx1MjEwQicsXG5cdGhrc2Vhcm93OiAnXFx1MjkyNScsXG5cdGhrc3dhcm93OiAnXFx1MjkyNicsXG5cdGhvYXJyOiAnXFx1MjFGRicsXG5cdGhvbXRodDogJ1xcdTIyM0InLFxuXHRob29rbGVmdGFycm93OiAnXFx1MjFBOScsXG5cdGhvb2tyaWdodGFycm93OiAnXFx1MjFBQScsXG5cdEhvcGY6ICdcXHUyMTBEJyxcblx0aG9wZjogJ1xcdUQ4MzVcXHVERDU5Jyxcblx0aG9yYmFyOiAnXFx1MjAxNScsXG5cdEhvcml6b250YWxMaW5lOiAnXFx1MjUwMCcsXG5cdEhzY3I6ICdcXHUyMTBCJyxcblx0aHNjcjogJ1xcdUQ4MzVcXHVEQ0JEJyxcblx0aHNsYXNoOiAnXFx1MjEwRicsXG5cdEhzdHJvazogJ1xcdTAxMjYnLFxuXHRoc3Ryb2s6ICdcXHUwMTI3Jyxcblx0SHVtcERvd25IdW1wOiAnXFx1MjI0RScsXG5cdEh1bXBFcXVhbDogJ1xcdTIyNEYnLFxuXHRoeWJ1bGw6ICdcXHUyMDQzJyxcblx0aHlwaGVuOiAnXFx1MjAxMCcsXG5cdElhY3V0ZTogJ1xcdTAwQ0QnLFxuXHRpYWN1dGU6ICdcXHUwMEVEJyxcblx0aWM6ICdcXHUyMDYzJyxcblx0SWNpcmM6ICdcXHUwMENFJyxcblx0aWNpcmM6ICdcXHUwMEVFJyxcblx0SWN5OiAnXFx1MDQxOCcsXG5cdGljeTogJ1xcdTA0MzgnLFxuXHRJZG90OiAnXFx1MDEzMCcsXG5cdElFY3k6ICdcXHUwNDE1Jyxcblx0aWVjeTogJ1xcdTA0MzUnLFxuXHRpZXhjbDogJ1xcdTAwQTEnLFxuXHRpZmY6ICdcXHUyMUQ0Jyxcblx0SWZyOiAnXFx1MjExMScsXG5cdGlmcjogJ1xcdUQ4MzVcXHVERDI2Jyxcblx0SWdyYXZlOiAnXFx1MDBDQycsXG5cdGlncmF2ZTogJ1xcdTAwRUMnLFxuXHRpaTogJ1xcdTIxNDgnLFxuXHRpaWlpbnQ6ICdcXHUyQTBDJyxcblx0aWlpbnQ6ICdcXHUyMjJEJyxcblx0aWluZmluOiAnXFx1MjlEQycsXG5cdGlpb3RhOiAnXFx1MjEyOScsXG5cdElKbGlnOiAnXFx1MDEzMicsXG5cdGlqbGlnOiAnXFx1MDEzMycsXG5cdEltOiAnXFx1MjExMScsXG5cdEltYWNyOiAnXFx1MDEyQScsXG5cdGltYWNyOiAnXFx1MDEyQicsXG5cdGltYWdlOiAnXFx1MjExMScsXG5cdEltYWdpbmFyeUk6ICdcXHUyMTQ4Jyxcblx0aW1hZ2xpbmU6ICdcXHUyMTEwJyxcblx0aW1hZ3BhcnQ6ICdcXHUyMTExJyxcblx0aW1hdGg6ICdcXHUwMTMxJyxcblx0aW1vZjogJ1xcdTIyQjcnLFxuXHRpbXBlZDogJ1xcdTAxQjUnLFxuXHRJbXBsaWVzOiAnXFx1MjFEMicsXG5cdGluOiAnXFx1MjIwOCcsXG5cdGluY2FyZTogJ1xcdTIxMDUnLFxuXHRpbmZpbjogJ1xcdTIyMUUnLFxuXHRpbmZpbnRpZTogJ1xcdTI5REQnLFxuXHRpbm9kb3Q6ICdcXHUwMTMxJyxcblx0SW50OiAnXFx1MjIyQycsXG5cdGludDogJ1xcdTIyMkInLFxuXHRpbnRjYWw6ICdcXHUyMkJBJyxcblx0aW50ZWdlcnM6ICdcXHUyMTI0Jyxcblx0SW50ZWdyYWw6ICdcXHUyMjJCJyxcblx0aW50ZXJjYWw6ICdcXHUyMkJBJyxcblx0SW50ZXJzZWN0aW9uOiAnXFx1MjJDMicsXG5cdGludGxhcmhrOiAnXFx1MkExNycsXG5cdGludHByb2Q6ICdcXHUyQTNDJyxcblx0SW52aXNpYmxlQ29tbWE6ICdcXHUyMDYzJyxcblx0SW52aXNpYmxlVGltZXM6ICdcXHUyMDYyJyxcblx0SU9jeTogJ1xcdTA0MDEnLFxuXHRpb2N5OiAnXFx1MDQ1MScsXG5cdElvZ29uOiAnXFx1MDEyRScsXG5cdGlvZ29uOiAnXFx1MDEyRicsXG5cdElvcGY6ICdcXHVEODM1XFx1REQ0MCcsXG5cdGlvcGY6ICdcXHVEODM1XFx1REQ1QScsXG5cdElvdGE6ICdcXHUwMzk5Jyxcblx0aW90YTogJ1xcdTAzQjknLFxuXHRpcHJvZDogJ1xcdTJBM0MnLFxuXHRpcXVlc3Q6ICdcXHUwMEJGJyxcblx0SXNjcjogJ1xcdTIxMTAnLFxuXHRpc2NyOiAnXFx1RDgzNVxcdURDQkUnLFxuXHRpc2luOiAnXFx1MjIwOCcsXG5cdGlzaW5kb3Q6ICdcXHUyMkY1Jyxcblx0aXNpbkU6ICdcXHUyMkY5Jyxcblx0aXNpbnM6ICdcXHUyMkY0Jyxcblx0aXNpbnN2OiAnXFx1MjJGMycsXG5cdGlzaW52OiAnXFx1MjIwOCcsXG5cdGl0OiAnXFx1MjA2MicsXG5cdEl0aWxkZTogJ1xcdTAxMjgnLFxuXHRpdGlsZGU6ICdcXHUwMTI5Jyxcblx0SXVrY3k6ICdcXHUwNDA2Jyxcblx0aXVrY3k6ICdcXHUwNDU2Jyxcblx0SXVtbDogJ1xcdTAwQ0YnLFxuXHRpdW1sOiAnXFx1MDBFRicsXG5cdEpjaXJjOiAnXFx1MDEzNCcsXG5cdGpjaXJjOiAnXFx1MDEzNScsXG5cdEpjeTogJ1xcdTA0MTknLFxuXHRqY3k6ICdcXHUwNDM5Jyxcblx0SmZyOiAnXFx1RDgzNVxcdUREMEQnLFxuXHRqZnI6ICdcXHVEODM1XFx1REQyNycsXG5cdGptYXRoOiAnXFx1MDIzNycsXG5cdEpvcGY6ICdcXHVEODM1XFx1REQ0MScsXG5cdGpvcGY6ICdcXHVEODM1XFx1REQ1QicsXG5cdEpzY3I6ICdcXHVEODM1XFx1RENBNScsXG5cdGpzY3I6ICdcXHVEODM1XFx1RENCRicsXG5cdEpzZXJjeTogJ1xcdTA0MDgnLFxuXHRqc2VyY3k6ICdcXHUwNDU4Jyxcblx0SnVrY3k6ICdcXHUwNDA0Jyxcblx0anVrY3k6ICdcXHUwNDU0Jyxcblx0S2FwcGE6ICdcXHUwMzlBJyxcblx0a2FwcGE6ICdcXHUwM0JBJyxcblx0a2FwcGF2OiAnXFx1MDNGMCcsXG5cdEtjZWRpbDogJ1xcdTAxMzYnLFxuXHRrY2VkaWw6ICdcXHUwMTM3Jyxcblx0S2N5OiAnXFx1MDQxQScsXG5cdGtjeTogJ1xcdTA0M0EnLFxuXHRLZnI6ICdcXHVEODM1XFx1REQwRScsXG5cdGtmcjogJ1xcdUQ4MzVcXHVERDI4Jyxcblx0a2dyZWVuOiAnXFx1MDEzOCcsXG5cdEtIY3k6ICdcXHUwNDI1Jyxcblx0a2hjeTogJ1xcdTA0NDUnLFxuXHRLSmN5OiAnXFx1MDQwQycsXG5cdGtqY3k6ICdcXHUwNDVDJyxcblx0S29wZjogJ1xcdUQ4MzVcXHVERDQyJyxcblx0a29wZjogJ1xcdUQ4MzVcXHVERDVDJyxcblx0S3NjcjogJ1xcdUQ4MzVcXHVEQ0E2Jyxcblx0a3NjcjogJ1xcdUQ4MzVcXHVEQ0MwJyxcblx0bEFhcnI6ICdcXHUyMURBJyxcblx0TGFjdXRlOiAnXFx1MDEzOScsXG5cdGxhY3V0ZTogJ1xcdTAxM0EnLFxuXHRsYWVtcHR5djogJ1xcdTI5QjQnLFxuXHRsYWdyYW46ICdcXHUyMTEyJyxcblx0TGFtYmRhOiAnXFx1MDM5QicsXG5cdGxhbWJkYTogJ1xcdTAzQkInLFxuXHRMYW5nOiAnXFx1MjdFQScsXG5cdGxhbmc6ICdcXHUyN0U4Jyxcblx0bGFuZ2Q6ICdcXHUyOTkxJyxcblx0bGFuZ2xlOiAnXFx1MjdFOCcsXG5cdGxhcDogJ1xcdTJBODUnLFxuXHRMYXBsYWNldHJmOiAnXFx1MjExMicsXG5cdGxhcXVvOiAnXFx1MDBBQicsXG5cdExhcnI6ICdcXHUyMTlFJyxcblx0bEFycjogJ1xcdTIxRDAnLFxuXHRsYXJyOiAnXFx1MjE5MCcsXG5cdGxhcnJiOiAnXFx1MjFFNCcsXG5cdGxhcnJiZnM6ICdcXHUyOTFGJyxcblx0bGFycmZzOiAnXFx1MjkxRCcsXG5cdGxhcnJoazogJ1xcdTIxQTknLFxuXHRsYXJybHA6ICdcXHUyMUFCJyxcblx0bGFycnBsOiAnXFx1MjkzOScsXG5cdGxhcnJzaW06ICdcXHUyOTczJyxcblx0bGFycnRsOiAnXFx1MjFBMicsXG5cdGxhdDogJ1xcdTJBQUInLFxuXHRsQXRhaWw6ICdcXHUyOTFCJyxcblx0bGF0YWlsOiAnXFx1MjkxOScsXG5cdGxhdGU6ICdcXHUyQUFEJyxcblx0bGF0ZXM6ICdcXHUyQUFEXFx1RkUwMCcsXG5cdGxCYXJyOiAnXFx1MjkwRScsXG5cdGxiYXJyOiAnXFx1MjkwQycsXG5cdGxiYnJrOiAnXFx1Mjc3MicsXG5cdGxicmFjZTogJ1xcdTAwN0InLFxuXHRsYnJhY2s6ICdcXHUwMDVCJyxcblx0bGJya2U6ICdcXHUyOThCJyxcblx0bGJya3NsZDogJ1xcdTI5OEYnLFxuXHRsYnJrc2x1OiAnXFx1Mjk4RCcsXG5cdExjYXJvbjogJ1xcdTAxM0QnLFxuXHRsY2Fyb246ICdcXHUwMTNFJyxcblx0TGNlZGlsOiAnXFx1MDEzQicsXG5cdGxjZWRpbDogJ1xcdTAxM0MnLFxuXHRsY2VpbDogJ1xcdTIzMDgnLFxuXHRsY3ViOiAnXFx1MDA3QicsXG5cdExjeTogJ1xcdTA0MUInLFxuXHRsY3k6ICdcXHUwNDNCJyxcblx0bGRjYTogJ1xcdTI5MzYnLFxuXHRsZHF1bzogJ1xcdTIwMUMnLFxuXHRsZHF1b3I6ICdcXHUyMDFFJyxcblx0bGRyZGhhcjogJ1xcdTI5NjcnLFxuXHRsZHJ1c2hhcjogJ1xcdTI5NEInLFxuXHRsZHNoOiAnXFx1MjFCMicsXG5cdGxFOiAnXFx1MjI2NicsXG5cdGxlOiAnXFx1MjI2NCcsXG5cdExlZnRBbmdsZUJyYWNrZXQ6ICdcXHUyN0U4Jyxcblx0TGVmdEFycm93OiAnXFx1MjE5MCcsXG5cdExlZnRhcnJvdzogJ1xcdTIxRDAnLFxuXHRsZWZ0YXJyb3c6ICdcXHUyMTkwJyxcblx0TGVmdEFycm93QmFyOiAnXFx1MjFFNCcsXG5cdExlZnRBcnJvd1JpZ2h0QXJyb3c6ICdcXHUyMUM2Jyxcblx0bGVmdGFycm93dGFpbDogJ1xcdTIxQTInLFxuXHRMZWZ0Q2VpbGluZzogJ1xcdTIzMDgnLFxuXHRMZWZ0RG91YmxlQnJhY2tldDogJ1xcdTI3RTYnLFxuXHRMZWZ0RG93blRlZVZlY3RvcjogJ1xcdTI5NjEnLFxuXHRMZWZ0RG93blZlY3RvcjogJ1xcdTIxQzMnLFxuXHRMZWZ0RG93blZlY3RvckJhcjogJ1xcdTI5NTknLFxuXHRMZWZ0Rmxvb3I6ICdcXHUyMzBBJyxcblx0bGVmdGhhcnBvb25kb3duOiAnXFx1MjFCRCcsXG5cdGxlZnRoYXJwb29udXA6ICdcXHUyMUJDJyxcblx0bGVmdGxlZnRhcnJvd3M6ICdcXHUyMUM3Jyxcblx0TGVmdFJpZ2h0QXJyb3c6ICdcXHUyMTk0Jyxcblx0TGVmdHJpZ2h0YXJyb3c6ICdcXHUyMUQ0Jyxcblx0bGVmdHJpZ2h0YXJyb3c6ICdcXHUyMTk0Jyxcblx0bGVmdHJpZ2h0YXJyb3dzOiAnXFx1MjFDNicsXG5cdGxlZnRyaWdodGhhcnBvb25zOiAnXFx1MjFDQicsXG5cdGxlZnRyaWdodHNxdWlnYXJyb3c6ICdcXHUyMUFEJyxcblx0TGVmdFJpZ2h0VmVjdG9yOiAnXFx1Mjk0RScsXG5cdExlZnRUZWU6ICdcXHUyMkEzJyxcblx0TGVmdFRlZUFycm93OiAnXFx1MjFBNCcsXG5cdExlZnRUZWVWZWN0b3I6ICdcXHUyOTVBJyxcblx0bGVmdHRocmVldGltZXM6ICdcXHUyMkNCJyxcblx0TGVmdFRyaWFuZ2xlOiAnXFx1MjJCMicsXG5cdExlZnRUcmlhbmdsZUJhcjogJ1xcdTI5Q0YnLFxuXHRMZWZ0VHJpYW5nbGVFcXVhbDogJ1xcdTIyQjQnLFxuXHRMZWZ0VXBEb3duVmVjdG9yOiAnXFx1Mjk1MScsXG5cdExlZnRVcFRlZVZlY3RvcjogJ1xcdTI5NjAnLFxuXHRMZWZ0VXBWZWN0b3I6ICdcXHUyMUJGJyxcblx0TGVmdFVwVmVjdG9yQmFyOiAnXFx1Mjk1OCcsXG5cdExlZnRWZWN0b3I6ICdcXHUyMUJDJyxcblx0TGVmdFZlY3RvckJhcjogJ1xcdTI5NTInLFxuXHRsRWc6ICdcXHUyQThCJyxcblx0bGVnOiAnXFx1MjJEQScsXG5cdGxlcTogJ1xcdTIyNjQnLFxuXHRsZXFxOiAnXFx1MjI2NicsXG5cdGxlcXNsYW50OiAnXFx1MkE3RCcsXG5cdGxlczogJ1xcdTJBN0QnLFxuXHRsZXNjYzogJ1xcdTJBQTgnLFxuXHRsZXNkb3Q6ICdcXHUyQTdGJyxcblx0bGVzZG90bzogJ1xcdTJBODEnLFxuXHRsZXNkb3RvcjogJ1xcdTJBODMnLFxuXHRsZXNnOiAnXFx1MjJEQVxcdUZFMDAnLFxuXHRsZXNnZXM6ICdcXHUyQTkzJyxcblx0bGVzc2FwcHJveDogJ1xcdTJBODUnLFxuXHRsZXNzZG90OiAnXFx1MjJENicsXG5cdGxlc3NlcWd0cjogJ1xcdTIyREEnLFxuXHRsZXNzZXFxZ3RyOiAnXFx1MkE4QicsXG5cdExlc3NFcXVhbEdyZWF0ZXI6ICdcXHUyMkRBJyxcblx0TGVzc0Z1bGxFcXVhbDogJ1xcdTIyNjYnLFxuXHRMZXNzR3JlYXRlcjogJ1xcdTIyNzYnLFxuXHRsZXNzZ3RyOiAnXFx1MjI3NicsXG5cdExlc3NMZXNzOiAnXFx1MkFBMScsXG5cdGxlc3NzaW06ICdcXHUyMjcyJyxcblx0TGVzc1NsYW50RXF1YWw6ICdcXHUyQTdEJyxcblx0TGVzc1RpbGRlOiAnXFx1MjI3MicsXG5cdGxmaXNodDogJ1xcdTI5N0MnLFxuXHRsZmxvb3I6ICdcXHUyMzBBJyxcblx0TGZyOiAnXFx1RDgzNVxcdUREMEYnLFxuXHRsZnI6ICdcXHVEODM1XFx1REQyOScsXG5cdGxnOiAnXFx1MjI3NicsXG5cdGxnRTogJ1xcdTJBOTEnLFxuXHRsSGFyOiAnXFx1Mjk2MicsXG5cdGxoYXJkOiAnXFx1MjFCRCcsXG5cdGxoYXJ1OiAnXFx1MjFCQycsXG5cdGxoYXJ1bDogJ1xcdTI5NkEnLFxuXHRsaGJsazogJ1xcdTI1ODQnLFxuXHRMSmN5OiAnXFx1MDQwOScsXG5cdGxqY3k6ICdcXHUwNDU5Jyxcblx0TGw6ICdcXHUyMkQ4Jyxcblx0bGw6ICdcXHUyMjZBJyxcblx0bGxhcnI6ICdcXHUyMUM3Jyxcblx0bGxjb3JuZXI6ICdcXHUyMzFFJyxcblx0TGxlZnRhcnJvdzogJ1xcdTIxREEnLFxuXHRsbGhhcmQ6ICdcXHUyOTZCJyxcblx0bGx0cmk6ICdcXHUyNUZBJyxcblx0TG1pZG90OiAnXFx1MDEzRicsXG5cdGxtaWRvdDogJ1xcdTAxNDAnLFxuXHRsbW91c3Q6ICdcXHUyM0IwJyxcblx0bG1vdXN0YWNoZTogJ1xcdTIzQjAnLFxuXHRsbmFwOiAnXFx1MkE4OScsXG5cdGxuYXBwcm94OiAnXFx1MkE4OScsXG5cdGxuRTogJ1xcdTIyNjgnLFxuXHRsbmU6ICdcXHUyQTg3Jyxcblx0bG5lcTogJ1xcdTJBODcnLFxuXHRsbmVxcTogJ1xcdTIyNjgnLFxuXHRsbnNpbTogJ1xcdTIyRTYnLFxuXHRsb2FuZzogJ1xcdTI3RUMnLFxuXHRsb2FycjogJ1xcdTIxRkQnLFxuXHRsb2JyazogJ1xcdTI3RTYnLFxuXHRMb25nTGVmdEFycm93OiAnXFx1MjdGNScsXG5cdExvbmdsZWZ0YXJyb3c6ICdcXHUyN0Y4Jyxcblx0bG9uZ2xlZnRhcnJvdzogJ1xcdTI3RjUnLFxuXHRMb25nTGVmdFJpZ2h0QXJyb3c6ICdcXHUyN0Y3Jyxcblx0TG9uZ2xlZnRyaWdodGFycm93OiAnXFx1MjdGQScsXG5cdGxvbmdsZWZ0cmlnaHRhcnJvdzogJ1xcdTI3RjcnLFxuXHRsb25nbWFwc3RvOiAnXFx1MjdGQycsXG5cdExvbmdSaWdodEFycm93OiAnXFx1MjdGNicsXG5cdExvbmdyaWdodGFycm93OiAnXFx1MjdGOScsXG5cdGxvbmdyaWdodGFycm93OiAnXFx1MjdGNicsXG5cdGxvb3BhcnJvd2xlZnQ6ICdcXHUyMUFCJyxcblx0bG9vcGFycm93cmlnaHQ6ICdcXHUyMUFDJyxcblx0bG9wYXI6ICdcXHUyOTg1Jyxcblx0TG9wZjogJ1xcdUQ4MzVcXHVERDQzJyxcblx0bG9wZjogJ1xcdUQ4MzVcXHVERDVEJyxcblx0bG9wbHVzOiAnXFx1MkEyRCcsXG5cdGxvdGltZXM6ICdcXHUyQTM0Jyxcblx0bG93YXN0OiAnXFx1MjIxNycsXG5cdGxvd2JhcjogJ1xcdTAwNUYnLFxuXHRMb3dlckxlZnRBcnJvdzogJ1xcdTIxOTknLFxuXHRMb3dlclJpZ2h0QXJyb3c6ICdcXHUyMTk4Jyxcblx0bG96OiAnXFx1MjVDQScsXG5cdGxvemVuZ2U6ICdcXHUyNUNBJyxcblx0bG96ZjogJ1xcdTI5RUInLFxuXHRscGFyOiAnXFx1MDAyOCcsXG5cdGxwYXJsdDogJ1xcdTI5OTMnLFxuXHRscmFycjogJ1xcdTIxQzYnLFxuXHRscmNvcm5lcjogJ1xcdTIzMUYnLFxuXHRscmhhcjogJ1xcdTIxQ0InLFxuXHRscmhhcmQ6ICdcXHUyOTZEJyxcblx0bHJtOiAnXFx1MjAwRScsXG5cdGxydHJpOiAnXFx1MjJCRicsXG5cdGxzYXF1bzogJ1xcdTIwMzknLFxuXHRMc2NyOiAnXFx1MjExMicsXG5cdGxzY3I6ICdcXHVEODM1XFx1RENDMScsXG5cdExzaDogJ1xcdTIxQjAnLFxuXHRsc2g6ICdcXHUyMUIwJyxcblx0bHNpbTogJ1xcdTIyNzInLFxuXHRsc2ltZTogJ1xcdTJBOEQnLFxuXHRsc2ltZzogJ1xcdTJBOEYnLFxuXHRsc3FiOiAnXFx1MDA1QicsXG5cdGxzcXVvOiAnXFx1MjAxOCcsXG5cdGxzcXVvcjogJ1xcdTIwMUEnLFxuXHRMc3Ryb2s6ICdcXHUwMTQxJyxcblx0bHN0cm9rOiAnXFx1MDE0MicsXG5cdEx0OiAnXFx1MjI2QScsXG5cdExUOiAnXFx1MDAzQycsXG5cdGx0OiAnXFx1MDAzQycsXG5cdGx0Y2M6ICdcXHUyQUE2Jyxcblx0bHRjaXI6ICdcXHUyQTc5Jyxcblx0bHRkb3Q6ICdcXHUyMkQ2Jyxcblx0bHRocmVlOiAnXFx1MjJDQicsXG5cdGx0aW1lczogJ1xcdTIyQzknLFxuXHRsdGxhcnI6ICdcXHUyOTc2Jyxcblx0bHRxdWVzdDogJ1xcdTJBN0InLFxuXHRsdHJpOiAnXFx1MjVDMycsXG5cdGx0cmllOiAnXFx1MjJCNCcsXG5cdGx0cmlmOiAnXFx1MjVDMicsXG5cdGx0clBhcjogJ1xcdTI5OTYnLFxuXHRsdXJkc2hhcjogJ1xcdTI5NEEnLFxuXHRsdXJ1aGFyOiAnXFx1Mjk2NicsXG5cdGx2ZXJ0bmVxcTogJ1xcdTIyNjhcXHVGRTAwJyxcblx0bHZuRTogJ1xcdTIyNjhcXHVGRTAwJyxcblx0bWFjcjogJ1xcdTAwQUYnLFxuXHRtYWxlOiAnXFx1MjY0MicsXG5cdG1hbHQ6ICdcXHUyNzIwJyxcblx0bWFsdGVzZTogJ1xcdTI3MjAnLFxuXHRNYXA6ICdcXHUyOTA1Jyxcblx0bWFwOiAnXFx1MjFBNicsXG5cdG1hcHN0bzogJ1xcdTIxQTYnLFxuXHRtYXBzdG9kb3duOiAnXFx1MjFBNycsXG5cdG1hcHN0b2xlZnQ6ICdcXHUyMUE0Jyxcblx0bWFwc3RvdXA6ICdcXHUyMUE1Jyxcblx0bWFya2VyOiAnXFx1MjVBRScsXG5cdG1jb21tYTogJ1xcdTJBMjknLFxuXHRNY3k6ICdcXHUwNDFDJyxcblx0bWN5OiAnXFx1MDQzQycsXG5cdG1kYXNoOiAnXFx1MjAxNCcsXG5cdG1ERG90OiAnXFx1MjIzQScsXG5cdG1lYXN1cmVkYW5nbGU6ICdcXHUyMjIxJyxcblx0TWVkaXVtU3BhY2U6ICdcXHUyMDVGJyxcblx0TWVsbGludHJmOiAnXFx1MjEzMycsXG5cdE1mcjogJ1xcdUQ4MzVcXHVERDEwJyxcblx0bWZyOiAnXFx1RDgzNVxcdUREMkEnLFxuXHRtaG86ICdcXHUyMTI3Jyxcblx0bWljcm86ICdcXHUwMEI1Jyxcblx0bWlkOiAnXFx1MjIyMycsXG5cdG1pZGFzdDogJ1xcdTAwMkEnLFxuXHRtaWRjaXI6ICdcXHUyQUYwJyxcblx0bWlkZG90OiAnXFx1MDBCNycsXG5cdG1pbnVzOiAnXFx1MjIxMicsXG5cdG1pbnVzYjogJ1xcdTIyOUYnLFxuXHRtaW51c2Q6ICdcXHUyMjM4Jyxcblx0bWludXNkdTogJ1xcdTJBMkEnLFxuXHRNaW51c1BsdXM6ICdcXHUyMjEzJyxcblx0bWxjcDogJ1xcdTJBREInLFxuXHRtbGRyOiAnXFx1MjAyNicsXG5cdG1ucGx1czogJ1xcdTIyMTMnLFxuXHRtb2RlbHM6ICdcXHUyMkE3Jyxcblx0TW9wZjogJ1xcdUQ4MzVcXHVERDQ0Jyxcblx0bW9wZjogJ1xcdUQ4MzVcXHVERDVFJyxcblx0bXA6ICdcXHUyMjEzJyxcblx0TXNjcjogJ1xcdTIxMzMnLFxuXHRtc2NyOiAnXFx1RDgzNVxcdURDQzInLFxuXHRtc3Rwb3M6ICdcXHUyMjNFJyxcblx0TXU6ICdcXHUwMzlDJyxcblx0bXU6ICdcXHUwM0JDJyxcblx0bXVsdGltYXA6ICdcXHUyMkI4Jyxcblx0bXVtYXA6ICdcXHUyMkI4Jyxcblx0bmFibGE6ICdcXHUyMjA3Jyxcblx0TmFjdXRlOiAnXFx1MDE0MycsXG5cdG5hY3V0ZTogJ1xcdTAxNDQnLFxuXHRuYW5nOiAnXFx1MjIyMFxcdTIwRDInLFxuXHRuYXA6ICdcXHUyMjQ5Jyxcblx0bmFwRTogJ1xcdTJBNzBcXHUwMzM4Jyxcblx0bmFwaWQ6ICdcXHUyMjRCXFx1MDMzOCcsXG5cdG5hcG9zOiAnXFx1MDE0OScsXG5cdG5hcHByb3g6ICdcXHUyMjQ5Jyxcblx0bmF0dXI6ICdcXHUyNjZFJyxcblx0bmF0dXJhbDogJ1xcdTI2NkUnLFxuXHRuYXR1cmFsczogJ1xcdTIxMTUnLFxuXHRuYnNwOiAnXFx1MDBBMCcsXG5cdG5idW1wOiAnXFx1MjI0RVxcdTAzMzgnLFxuXHRuYnVtcGU6ICdcXHUyMjRGXFx1MDMzOCcsXG5cdG5jYXA6ICdcXHUyQTQzJyxcblx0TmNhcm9uOiAnXFx1MDE0NycsXG5cdG5jYXJvbjogJ1xcdTAxNDgnLFxuXHROY2VkaWw6ICdcXHUwMTQ1Jyxcblx0bmNlZGlsOiAnXFx1MDE0NicsXG5cdG5jb25nOiAnXFx1MjI0NycsXG5cdG5jb25nZG90OiAnXFx1MkE2RFxcdTAzMzgnLFxuXHRuY3VwOiAnXFx1MkE0MicsXG5cdE5jeTogJ1xcdTA0MUQnLFxuXHRuY3k6ICdcXHUwNDNEJyxcblx0bmRhc2g6ICdcXHUyMDEzJyxcblx0bmU6ICdcXHUyMjYwJyxcblx0bmVhcmhrOiAnXFx1MjkyNCcsXG5cdG5lQXJyOiAnXFx1MjFENycsXG5cdG5lYXJyOiAnXFx1MjE5NycsXG5cdG5lYXJyb3c6ICdcXHUyMTk3Jyxcblx0bmVkb3Q6ICdcXHUyMjUwXFx1MDMzOCcsXG5cdE5lZ2F0aXZlTWVkaXVtU3BhY2U6ICdcXHUyMDBCJyxcblx0TmVnYXRpdmVUaGlja1NwYWNlOiAnXFx1MjAwQicsXG5cdE5lZ2F0aXZlVGhpblNwYWNlOiAnXFx1MjAwQicsXG5cdE5lZ2F0aXZlVmVyeVRoaW5TcGFjZTogJ1xcdTIwMEInLFxuXHRuZXF1aXY6ICdcXHUyMjYyJyxcblx0bmVzZWFyOiAnXFx1MjkyOCcsXG5cdG5lc2ltOiAnXFx1MjI0MlxcdTAzMzgnLFxuXHROZXN0ZWRHcmVhdGVyR3JlYXRlcjogJ1xcdTIyNkInLFxuXHROZXN0ZWRMZXNzTGVzczogJ1xcdTIyNkEnLFxuXHROZXdMaW5lOiAnXFx1MDAwQScsXG5cdG5leGlzdDogJ1xcdTIyMDQnLFxuXHRuZXhpc3RzOiAnXFx1MjIwNCcsXG5cdE5mcjogJ1xcdUQ4MzVcXHVERDExJyxcblx0bmZyOiAnXFx1RDgzNVxcdUREMkInLFxuXHRuZ0U6ICdcXHUyMjY3XFx1MDMzOCcsXG5cdG5nZTogJ1xcdTIyNzEnLFxuXHRuZ2VxOiAnXFx1MjI3MScsXG5cdG5nZXFxOiAnXFx1MjI2N1xcdTAzMzgnLFxuXHRuZ2Vxc2xhbnQ6ICdcXHUyQTdFXFx1MDMzOCcsXG5cdG5nZXM6ICdcXHUyQTdFXFx1MDMzOCcsXG5cdG5HZzogJ1xcdTIyRDlcXHUwMzM4Jyxcblx0bmdzaW06ICdcXHUyMjc1Jyxcblx0bkd0OiAnXFx1MjI2QlxcdTIwRDInLFxuXHRuZ3Q6ICdcXHUyMjZGJyxcblx0bmd0cjogJ1xcdTIyNkYnLFxuXHRuR3R2OiAnXFx1MjI2QlxcdTAzMzgnLFxuXHRuaEFycjogJ1xcdTIxQ0UnLFxuXHRuaGFycjogJ1xcdTIxQUUnLFxuXHRuaHBhcjogJ1xcdTJBRjInLFxuXHRuaTogJ1xcdTIyMEInLFxuXHRuaXM6ICdcXHUyMkZDJyxcblx0bmlzZDogJ1xcdTIyRkEnLFxuXHRuaXY6ICdcXHUyMjBCJyxcblx0TkpjeTogJ1xcdTA0MEEnLFxuXHRuamN5OiAnXFx1MDQ1QScsXG5cdG5sQXJyOiAnXFx1MjFDRCcsXG5cdG5sYXJyOiAnXFx1MjE5QScsXG5cdG5sZHI6ICdcXHUyMDI1Jyxcblx0bmxFOiAnXFx1MjI2NlxcdTAzMzgnLFxuXHRubGU6ICdcXHUyMjcwJyxcblx0bkxlZnRhcnJvdzogJ1xcdTIxQ0QnLFxuXHRubGVmdGFycm93OiAnXFx1MjE5QScsXG5cdG5MZWZ0cmlnaHRhcnJvdzogJ1xcdTIxQ0UnLFxuXHRubGVmdHJpZ2h0YXJyb3c6ICdcXHUyMUFFJyxcblx0bmxlcTogJ1xcdTIyNzAnLFxuXHRubGVxcTogJ1xcdTIyNjZcXHUwMzM4Jyxcblx0bmxlcXNsYW50OiAnXFx1MkE3RFxcdTAzMzgnLFxuXHRubGVzOiAnXFx1MkE3RFxcdTAzMzgnLFxuXHRubGVzczogJ1xcdTIyNkUnLFxuXHRuTGw6ICdcXHUyMkQ4XFx1MDMzOCcsXG5cdG5sc2ltOiAnXFx1MjI3NCcsXG5cdG5MdDogJ1xcdTIyNkFcXHUyMEQyJyxcblx0bmx0OiAnXFx1MjI2RScsXG5cdG5sdHJpOiAnXFx1MjJFQScsXG5cdG5sdHJpZTogJ1xcdTIyRUMnLFxuXHRuTHR2OiAnXFx1MjI2QVxcdTAzMzgnLFxuXHRubWlkOiAnXFx1MjIyNCcsXG5cdE5vQnJlYWs6ICdcXHUyMDYwJyxcblx0Tm9uQnJlYWtpbmdTcGFjZTogJ1xcdTAwQTAnLFxuXHROb3BmOiAnXFx1MjExNScsXG5cdG5vcGY6ICdcXHVEODM1XFx1REQ1RicsXG5cdE5vdDogJ1xcdTJBRUMnLFxuXHRub3Q6ICdcXHUwMEFDJyxcblx0Tm90Q29uZ3J1ZW50OiAnXFx1MjI2MicsXG5cdE5vdEN1cENhcDogJ1xcdTIyNkQnLFxuXHROb3REb3VibGVWZXJ0aWNhbEJhcjogJ1xcdTIyMjYnLFxuXHROb3RFbGVtZW50OiAnXFx1MjIwOScsXG5cdE5vdEVxdWFsOiAnXFx1MjI2MCcsXG5cdE5vdEVxdWFsVGlsZGU6ICdcXHUyMjQyXFx1MDMzOCcsXG5cdE5vdEV4aXN0czogJ1xcdTIyMDQnLFxuXHROb3RHcmVhdGVyOiAnXFx1MjI2RicsXG5cdE5vdEdyZWF0ZXJFcXVhbDogJ1xcdTIyNzEnLFxuXHROb3RHcmVhdGVyRnVsbEVxdWFsOiAnXFx1MjI2N1xcdTAzMzgnLFxuXHROb3RHcmVhdGVyR3JlYXRlcjogJ1xcdTIyNkJcXHUwMzM4Jyxcblx0Tm90R3JlYXRlckxlc3M6ICdcXHUyMjc5Jyxcblx0Tm90R3JlYXRlclNsYW50RXF1YWw6ICdcXHUyQTdFXFx1MDMzOCcsXG5cdE5vdEdyZWF0ZXJUaWxkZTogJ1xcdTIyNzUnLFxuXHROb3RIdW1wRG93bkh1bXA6ICdcXHUyMjRFXFx1MDMzOCcsXG5cdE5vdEh1bXBFcXVhbDogJ1xcdTIyNEZcXHUwMzM4Jyxcblx0bm90aW46ICdcXHUyMjA5Jyxcblx0bm90aW5kb3Q6ICdcXHUyMkY1XFx1MDMzOCcsXG5cdG5vdGluRTogJ1xcdTIyRjlcXHUwMzM4Jyxcblx0bm90aW52YTogJ1xcdTIyMDknLFxuXHRub3RpbnZiOiAnXFx1MjJGNycsXG5cdG5vdGludmM6ICdcXHUyMkY2Jyxcblx0Tm90TGVmdFRyaWFuZ2xlOiAnXFx1MjJFQScsXG5cdE5vdExlZnRUcmlhbmdsZUJhcjogJ1xcdTI5Q0ZcXHUwMzM4Jyxcblx0Tm90TGVmdFRyaWFuZ2xlRXF1YWw6ICdcXHUyMkVDJyxcblx0Tm90TGVzczogJ1xcdTIyNkUnLFxuXHROb3RMZXNzRXF1YWw6ICdcXHUyMjcwJyxcblx0Tm90TGVzc0dyZWF0ZXI6ICdcXHUyMjc4Jyxcblx0Tm90TGVzc0xlc3M6ICdcXHUyMjZBXFx1MDMzOCcsXG5cdE5vdExlc3NTbGFudEVxdWFsOiAnXFx1MkE3RFxcdTAzMzgnLFxuXHROb3RMZXNzVGlsZGU6ICdcXHUyMjc0Jyxcblx0Tm90TmVzdGVkR3JlYXRlckdyZWF0ZXI6ICdcXHUyQUEyXFx1MDMzOCcsXG5cdE5vdE5lc3RlZExlc3NMZXNzOiAnXFx1MkFBMVxcdTAzMzgnLFxuXHRub3RuaTogJ1xcdTIyMEMnLFxuXHRub3RuaXZhOiAnXFx1MjIwQycsXG5cdG5vdG5pdmI6ICdcXHUyMkZFJyxcblx0bm90bml2YzogJ1xcdTIyRkQnLFxuXHROb3RQcmVjZWRlczogJ1xcdTIyODAnLFxuXHROb3RQcmVjZWRlc0VxdWFsOiAnXFx1MkFBRlxcdTAzMzgnLFxuXHROb3RQcmVjZWRlc1NsYW50RXF1YWw6ICdcXHUyMkUwJyxcblx0Tm90UmV2ZXJzZUVsZW1lbnQ6ICdcXHUyMjBDJyxcblx0Tm90UmlnaHRUcmlhbmdsZTogJ1xcdTIyRUInLFxuXHROb3RSaWdodFRyaWFuZ2xlQmFyOiAnXFx1MjlEMFxcdTAzMzgnLFxuXHROb3RSaWdodFRyaWFuZ2xlRXF1YWw6ICdcXHUyMkVEJyxcblx0Tm90U3F1YXJlU3Vic2V0OiAnXFx1MjI4RlxcdTAzMzgnLFxuXHROb3RTcXVhcmVTdWJzZXRFcXVhbDogJ1xcdTIyRTInLFxuXHROb3RTcXVhcmVTdXBlcnNldDogJ1xcdTIyOTBcXHUwMzM4Jyxcblx0Tm90U3F1YXJlU3VwZXJzZXRFcXVhbDogJ1xcdTIyRTMnLFxuXHROb3RTdWJzZXQ6ICdcXHUyMjgyXFx1MjBEMicsXG5cdE5vdFN1YnNldEVxdWFsOiAnXFx1MjI4OCcsXG5cdE5vdFN1Y2NlZWRzOiAnXFx1MjI4MScsXG5cdE5vdFN1Y2NlZWRzRXF1YWw6ICdcXHUyQUIwXFx1MDMzOCcsXG5cdE5vdFN1Y2NlZWRzU2xhbnRFcXVhbDogJ1xcdTIyRTEnLFxuXHROb3RTdWNjZWVkc1RpbGRlOiAnXFx1MjI3RlxcdTAzMzgnLFxuXHROb3RTdXBlcnNldDogJ1xcdTIyODNcXHUyMEQyJyxcblx0Tm90U3VwZXJzZXRFcXVhbDogJ1xcdTIyODknLFxuXHROb3RUaWxkZTogJ1xcdTIyNDEnLFxuXHROb3RUaWxkZUVxdWFsOiAnXFx1MjI0NCcsXG5cdE5vdFRpbGRlRnVsbEVxdWFsOiAnXFx1MjI0NycsXG5cdE5vdFRpbGRlVGlsZGU6ICdcXHUyMjQ5Jyxcblx0Tm90VmVydGljYWxCYXI6ICdcXHUyMjI0Jyxcblx0bnBhcjogJ1xcdTIyMjYnLFxuXHRucGFyYWxsZWw6ICdcXHUyMjI2Jyxcblx0bnBhcnNsOiAnXFx1MkFGRFxcdTIwRTUnLFxuXHRucGFydDogJ1xcdTIyMDJcXHUwMzM4Jyxcblx0bnBvbGludDogJ1xcdTJBMTQnLFxuXHRucHI6ICdcXHUyMjgwJyxcblx0bnByY3VlOiAnXFx1MjJFMCcsXG5cdG5wcmU6ICdcXHUyQUFGXFx1MDMzOCcsXG5cdG5wcmVjOiAnXFx1MjI4MCcsXG5cdG5wcmVjZXE6ICdcXHUyQUFGXFx1MDMzOCcsXG5cdG5yQXJyOiAnXFx1MjFDRicsXG5cdG5yYXJyOiAnXFx1MjE5QicsXG5cdG5yYXJyYzogJ1xcdTI5MzNcXHUwMzM4Jyxcblx0bnJhcnJ3OiAnXFx1MjE5RFxcdTAzMzgnLFxuXHRuUmlnaHRhcnJvdzogJ1xcdTIxQ0YnLFxuXHRucmlnaHRhcnJvdzogJ1xcdTIxOUInLFxuXHRucnRyaTogJ1xcdTIyRUInLFxuXHRucnRyaWU6ICdcXHUyMkVEJyxcblx0bnNjOiAnXFx1MjI4MScsXG5cdG5zY2N1ZTogJ1xcdTIyRTEnLFxuXHRuc2NlOiAnXFx1MkFCMFxcdTAzMzgnLFxuXHROc2NyOiAnXFx1RDgzNVxcdURDQTknLFxuXHRuc2NyOiAnXFx1RDgzNVxcdURDQzMnLFxuXHRuc2hvcnRtaWQ6ICdcXHUyMjI0Jyxcblx0bnNob3J0cGFyYWxsZWw6ICdcXHUyMjI2Jyxcblx0bnNpbTogJ1xcdTIyNDEnLFxuXHRuc2ltZTogJ1xcdTIyNDQnLFxuXHRuc2ltZXE6ICdcXHUyMjQ0Jyxcblx0bnNtaWQ6ICdcXHUyMjI0Jyxcblx0bnNwYXI6ICdcXHUyMjI2Jyxcblx0bnNxc3ViZTogJ1xcdTIyRTInLFxuXHRuc3FzdXBlOiAnXFx1MjJFMycsXG5cdG5zdWI6ICdcXHUyMjg0Jyxcblx0bnN1YkU6ICdcXHUyQUM1XFx1MDMzOCcsXG5cdG5zdWJlOiAnXFx1MjI4OCcsXG5cdG5zdWJzZXQ6ICdcXHUyMjgyXFx1MjBEMicsXG5cdG5zdWJzZXRlcTogJ1xcdTIyODgnLFxuXHRuc3Vic2V0ZXFxOiAnXFx1MkFDNVxcdTAzMzgnLFxuXHRuc3VjYzogJ1xcdTIyODEnLFxuXHRuc3VjY2VxOiAnXFx1MkFCMFxcdTAzMzgnLFxuXHRuc3VwOiAnXFx1MjI4NScsXG5cdG5zdXBFOiAnXFx1MkFDNlxcdTAzMzgnLFxuXHRuc3VwZTogJ1xcdTIyODknLFxuXHRuc3Vwc2V0OiAnXFx1MjI4M1xcdTIwRDInLFxuXHRuc3Vwc2V0ZXE6ICdcXHUyMjg5Jyxcblx0bnN1cHNldGVxcTogJ1xcdTJBQzZcXHUwMzM4Jyxcblx0bnRnbDogJ1xcdTIyNzknLFxuXHROdGlsZGU6ICdcXHUwMEQxJyxcblx0bnRpbGRlOiAnXFx1MDBGMScsXG5cdG50bGc6ICdcXHUyMjc4Jyxcblx0bnRyaWFuZ2xlbGVmdDogJ1xcdTIyRUEnLFxuXHRudHJpYW5nbGVsZWZ0ZXE6ICdcXHUyMkVDJyxcblx0bnRyaWFuZ2xlcmlnaHQ6ICdcXHUyMkVCJyxcblx0bnRyaWFuZ2xlcmlnaHRlcTogJ1xcdTIyRUQnLFxuXHROdTogJ1xcdTAzOUQnLFxuXHRudTogJ1xcdTAzQkQnLFxuXHRudW06ICdcXHUwMDIzJyxcblx0bnVtZXJvOiAnXFx1MjExNicsXG5cdG51bXNwOiAnXFx1MjAwNycsXG5cdG52YXA6ICdcXHUyMjREXFx1MjBEMicsXG5cdG5WRGFzaDogJ1xcdTIyQUYnLFxuXHRuVmRhc2g6ICdcXHUyMkFFJyxcblx0bnZEYXNoOiAnXFx1MjJBRCcsXG5cdG52ZGFzaDogJ1xcdTIyQUMnLFxuXHRudmdlOiAnXFx1MjI2NVxcdTIwRDInLFxuXHRudmd0OiAnXFx1MDAzRVxcdTIwRDInLFxuXHRudkhhcnI6ICdcXHUyOTA0Jyxcblx0bnZpbmZpbjogJ1xcdTI5REUnLFxuXHRudmxBcnI6ICdcXHUyOTAyJyxcblx0bnZsZTogJ1xcdTIyNjRcXHUyMEQyJyxcblx0bnZsdDogJ1xcdTAwM0NcXHUyMEQyJyxcblx0bnZsdHJpZTogJ1xcdTIyQjRcXHUyMEQyJyxcblx0bnZyQXJyOiAnXFx1MjkwMycsXG5cdG52cnRyaWU6ICdcXHUyMkI1XFx1MjBEMicsXG5cdG52c2ltOiAnXFx1MjIzQ1xcdTIwRDInLFxuXHRud2FyaGs6ICdcXHUyOTIzJyxcblx0bndBcnI6ICdcXHUyMUQ2Jyxcblx0bndhcnI6ICdcXHUyMTk2Jyxcblx0bndhcnJvdzogJ1xcdTIxOTYnLFxuXHRud25lYXI6ICdcXHUyOTI3Jyxcblx0T2FjdXRlOiAnXFx1MDBEMycsXG5cdG9hY3V0ZTogJ1xcdTAwRjMnLFxuXHRvYXN0OiAnXFx1MjI5QicsXG5cdG9jaXI6ICdcXHUyMjlBJyxcblx0T2NpcmM6ICdcXHUwMEQ0Jyxcblx0b2NpcmM6ICdcXHUwMEY0Jyxcblx0T2N5OiAnXFx1MDQxRScsXG5cdG9jeTogJ1xcdTA0M0UnLFxuXHRvZGFzaDogJ1xcdTIyOUQnLFxuXHRPZGJsYWM6ICdcXHUwMTUwJyxcblx0b2RibGFjOiAnXFx1MDE1MScsXG5cdG9kaXY6ICdcXHUyQTM4Jyxcblx0b2RvdDogJ1xcdTIyOTknLFxuXHRvZHNvbGQ6ICdcXHUyOUJDJyxcblx0T0VsaWc6ICdcXHUwMTUyJyxcblx0b2VsaWc6ICdcXHUwMTUzJyxcblx0b2ZjaXI6ICdcXHUyOUJGJyxcblx0T2ZyOiAnXFx1RDgzNVxcdUREMTInLFxuXHRvZnI6ICdcXHVEODM1XFx1REQyQycsXG5cdG9nb246ICdcXHUwMkRCJyxcblx0T2dyYXZlOiAnXFx1MDBEMicsXG5cdG9ncmF2ZTogJ1xcdTAwRjInLFxuXHRvZ3Q6ICdcXHUyOUMxJyxcblx0b2hiYXI6ICdcXHUyOUI1Jyxcblx0b2htOiAnXFx1MDNBOScsXG5cdG9pbnQ6ICdcXHUyMjJFJyxcblx0b2xhcnI6ICdcXHUyMUJBJyxcblx0b2xjaXI6ICdcXHUyOUJFJyxcblx0b2xjcm9zczogJ1xcdTI5QkInLFxuXHRvbGluZTogJ1xcdTIwM0UnLFxuXHRvbHQ6ICdcXHUyOUMwJyxcblx0T21hY3I6ICdcXHUwMTRDJyxcblx0b21hY3I6ICdcXHUwMTREJyxcblx0T21lZ2E6ICdcXHUwM0E5Jyxcblx0b21lZ2E6ICdcXHUwM0M5Jyxcblx0T21pY3JvbjogJ1xcdTAzOUYnLFxuXHRvbWljcm9uOiAnXFx1MDNCRicsXG5cdG9taWQ6ICdcXHUyOUI2Jyxcblx0b21pbnVzOiAnXFx1MjI5NicsXG5cdE9vcGY6ICdcXHVEODM1XFx1REQ0NicsXG5cdG9vcGY6ICdcXHVEODM1XFx1REQ2MCcsXG5cdG9wYXI6ICdcXHUyOUI3Jyxcblx0T3BlbkN1cmx5RG91YmxlUXVvdGU6ICdcXHUyMDFDJyxcblx0T3BlbkN1cmx5UXVvdGU6ICdcXHUyMDE4Jyxcblx0b3BlcnA6ICdcXHUyOUI5Jyxcblx0b3BsdXM6ICdcXHUyMjk1Jyxcblx0T3I6ICdcXHUyQTU0Jyxcblx0b3I6ICdcXHUyMjI4Jyxcblx0b3JhcnI6ICdcXHUyMUJCJyxcblx0b3JkOiAnXFx1MkE1RCcsXG5cdG9yZGVyOiAnXFx1MjEzNCcsXG5cdG9yZGVyb2Y6ICdcXHUyMTM0Jyxcblx0b3JkZjogJ1xcdTAwQUEnLFxuXHRvcmRtOiAnXFx1MDBCQScsXG5cdG9yaWdvZjogJ1xcdTIyQjYnLFxuXHRvcm9yOiAnXFx1MkE1NicsXG5cdG9yc2xvcGU6ICdcXHUyQTU3Jyxcblx0b3J2OiAnXFx1MkE1QicsXG5cdG9TOiAnXFx1MjRDOCcsXG5cdE9zY3I6ICdcXHVEODM1XFx1RENBQScsXG5cdG9zY3I6ICdcXHUyMTM0Jyxcblx0T3NsYXNoOiAnXFx1MDBEOCcsXG5cdG9zbGFzaDogJ1xcdTAwRjgnLFxuXHRvc29sOiAnXFx1MjI5OCcsXG5cdE90aWxkZTogJ1xcdTAwRDUnLFxuXHRvdGlsZGU6ICdcXHUwMEY1Jyxcblx0T3RpbWVzOiAnXFx1MkEzNycsXG5cdG90aW1lczogJ1xcdTIyOTcnLFxuXHRvdGltZXNhczogJ1xcdTJBMzYnLFxuXHRPdW1sOiAnXFx1MDBENicsXG5cdG91bWw6ICdcXHUwMEY2Jyxcblx0b3ZiYXI6ICdcXHUyMzNEJyxcblx0T3ZlckJhcjogJ1xcdTIwM0UnLFxuXHRPdmVyQnJhY2U6ICdcXHUyM0RFJyxcblx0T3ZlckJyYWNrZXQ6ICdcXHUyM0I0Jyxcblx0T3ZlclBhcmVudGhlc2lzOiAnXFx1MjNEQycsXG5cdHBhcjogJ1xcdTIyMjUnLFxuXHRwYXJhOiAnXFx1MDBCNicsXG5cdHBhcmFsbGVsOiAnXFx1MjIyNScsXG5cdHBhcnNpbTogJ1xcdTJBRjMnLFxuXHRwYXJzbDogJ1xcdTJBRkQnLFxuXHRwYXJ0OiAnXFx1MjIwMicsXG5cdFBhcnRpYWxEOiAnXFx1MjIwMicsXG5cdFBjeTogJ1xcdTA0MUYnLFxuXHRwY3k6ICdcXHUwNDNGJyxcblx0cGVyY250OiAnXFx1MDAyNScsXG5cdHBlcmlvZDogJ1xcdTAwMkUnLFxuXHRwZXJtaWw6ICdcXHUyMDMwJyxcblx0cGVycDogJ1xcdTIyQTUnLFxuXHRwZXJ0ZW5rOiAnXFx1MjAzMScsXG5cdFBmcjogJ1xcdUQ4MzVcXHVERDEzJyxcblx0cGZyOiAnXFx1RDgzNVxcdUREMkQnLFxuXHRQaGk6ICdcXHUwM0E2Jyxcblx0cGhpOiAnXFx1MDNDNicsXG5cdHBoaXY6ICdcXHUwM0Q1Jyxcblx0cGhtbWF0OiAnXFx1MjEzMycsXG5cdHBob25lOiAnXFx1MjYwRScsXG5cdFBpOiAnXFx1MDNBMCcsXG5cdHBpOiAnXFx1MDNDMCcsXG5cdHBpdGNoZm9yazogJ1xcdTIyRDQnLFxuXHRwaXY6ICdcXHUwM0Q2Jyxcblx0cGxhbmNrOiAnXFx1MjEwRicsXG5cdHBsYW5ja2g6ICdcXHUyMTBFJyxcblx0cGxhbmt2OiAnXFx1MjEwRicsXG5cdHBsdXM6ICdcXHUwMDJCJyxcblx0cGx1c2FjaXI6ICdcXHUyQTIzJyxcblx0cGx1c2I6ICdcXHUyMjlFJyxcblx0cGx1c2NpcjogJ1xcdTJBMjInLFxuXHRwbHVzZG86ICdcXHUyMjE0Jyxcblx0cGx1c2R1OiAnXFx1MkEyNScsXG5cdHBsdXNlOiAnXFx1MkE3MicsXG5cdFBsdXNNaW51czogJ1xcdTAwQjEnLFxuXHRwbHVzbW46ICdcXHUwMEIxJyxcblx0cGx1c3NpbTogJ1xcdTJBMjYnLFxuXHRwbHVzdHdvOiAnXFx1MkEyNycsXG5cdHBtOiAnXFx1MDBCMScsXG5cdFBvaW5jYXJlcGxhbmU6ICdcXHUyMTBDJyxcblx0cG9pbnRpbnQ6ICdcXHUyQTE1Jyxcblx0UG9wZjogJ1xcdTIxMTknLFxuXHRwb3BmOiAnXFx1RDgzNVxcdURENjEnLFxuXHRwb3VuZDogJ1xcdTAwQTMnLFxuXHRQcjogJ1xcdTJBQkInLFxuXHRwcjogJ1xcdTIyN0EnLFxuXHRwcmFwOiAnXFx1MkFCNycsXG5cdHByY3VlOiAnXFx1MjI3QycsXG5cdHByRTogJ1xcdTJBQjMnLFxuXHRwcmU6ICdcXHUyQUFGJyxcblx0cHJlYzogJ1xcdTIyN0EnLFxuXHRwcmVjYXBwcm94OiAnXFx1MkFCNycsXG5cdHByZWNjdXJseWVxOiAnXFx1MjI3QycsXG5cdFByZWNlZGVzOiAnXFx1MjI3QScsXG5cdFByZWNlZGVzRXF1YWw6ICdcXHUyQUFGJyxcblx0UHJlY2VkZXNTbGFudEVxdWFsOiAnXFx1MjI3QycsXG5cdFByZWNlZGVzVGlsZGU6ICdcXHUyMjdFJyxcblx0cHJlY2VxOiAnXFx1MkFBRicsXG5cdHByZWNuYXBwcm94OiAnXFx1MkFCOScsXG5cdHByZWNuZXFxOiAnXFx1MkFCNScsXG5cdHByZWNuc2ltOiAnXFx1MjJFOCcsXG5cdHByZWNzaW06ICdcXHUyMjdFJyxcblx0UHJpbWU6ICdcXHUyMDMzJyxcblx0cHJpbWU6ICdcXHUyMDMyJyxcblx0cHJpbWVzOiAnXFx1MjExOScsXG5cdHBybmFwOiAnXFx1MkFCOScsXG5cdHBybkU6ICdcXHUyQUI1Jyxcblx0cHJuc2ltOiAnXFx1MjJFOCcsXG5cdHByb2Q6ICdcXHUyMjBGJyxcblx0UHJvZHVjdDogJ1xcdTIyMEYnLFxuXHRwcm9mYWxhcjogJ1xcdTIzMkUnLFxuXHRwcm9mbGluZTogJ1xcdTIzMTInLFxuXHRwcm9mc3VyZjogJ1xcdTIzMTMnLFxuXHRwcm9wOiAnXFx1MjIxRCcsXG5cdFByb3BvcnRpb246ICdcXHUyMjM3Jyxcblx0UHJvcG9ydGlvbmFsOiAnXFx1MjIxRCcsXG5cdHByb3B0bzogJ1xcdTIyMUQnLFxuXHRwcnNpbTogJ1xcdTIyN0UnLFxuXHRwcnVyZWw6ICdcXHUyMkIwJyxcblx0UHNjcjogJ1xcdUQ4MzVcXHVEQ0FCJyxcblx0cHNjcjogJ1xcdUQ4MzVcXHVEQ0M1Jyxcblx0UHNpOiAnXFx1MDNBOCcsXG5cdHBzaTogJ1xcdTAzQzgnLFxuXHRwdW5jc3A6ICdcXHUyMDA4Jyxcblx0UWZyOiAnXFx1RDgzNVxcdUREMTQnLFxuXHRxZnI6ICdcXHVEODM1XFx1REQyRScsXG5cdHFpbnQ6ICdcXHUyQTBDJyxcblx0UW9wZjogJ1xcdTIxMUEnLFxuXHRxb3BmOiAnXFx1RDgzNVxcdURENjInLFxuXHRxcHJpbWU6ICdcXHUyMDU3Jyxcblx0UXNjcjogJ1xcdUQ4MzVcXHVEQ0FDJyxcblx0cXNjcjogJ1xcdUQ4MzVcXHVEQ0M2Jyxcblx0cXVhdGVybmlvbnM6ICdcXHUyMTBEJyxcblx0cXVhdGludDogJ1xcdTJBMTYnLFxuXHRxdWVzdDogJ1xcdTAwM0YnLFxuXHRxdWVzdGVxOiAnXFx1MjI1RicsXG5cdFFVT1Q6ICdcXHUwMDIyJyxcblx0cXVvdDogJ1xcdTAwMjInLFxuXHRyQWFycjogJ1xcdTIxREInLFxuXHRyYWNlOiAnXFx1MjIzRFxcdTAzMzEnLFxuXHRSYWN1dGU6ICdcXHUwMTU0Jyxcblx0cmFjdXRlOiAnXFx1MDE1NScsXG5cdHJhZGljOiAnXFx1MjIxQScsXG5cdHJhZW1wdHl2OiAnXFx1MjlCMycsXG5cdFJhbmc6ICdcXHUyN0VCJyxcblx0cmFuZzogJ1xcdTI3RTknLFxuXHRyYW5nZDogJ1xcdTI5OTInLFxuXHRyYW5nZTogJ1xcdTI5QTUnLFxuXHRyYW5nbGU6ICdcXHUyN0U5Jyxcblx0cmFxdW86ICdcXHUwMEJCJyxcblx0UmFycjogJ1xcdTIxQTAnLFxuXHRyQXJyOiAnXFx1MjFEMicsXG5cdHJhcnI6ICdcXHUyMTkyJyxcblx0cmFycmFwOiAnXFx1Mjk3NScsXG5cdHJhcnJiOiAnXFx1MjFFNScsXG5cdHJhcnJiZnM6ICdcXHUyOTIwJyxcblx0cmFycmM6ICdcXHUyOTMzJyxcblx0cmFycmZzOiAnXFx1MjkxRScsXG5cdHJhcnJoazogJ1xcdTIxQUEnLFxuXHRyYXJybHA6ICdcXHUyMUFDJyxcblx0cmFycnBsOiAnXFx1Mjk0NScsXG5cdHJhcnJzaW06ICdcXHUyOTc0Jyxcblx0UmFycnRsOiAnXFx1MjkxNicsXG5cdHJhcnJ0bDogJ1xcdTIxQTMnLFxuXHRyYXJydzogJ1xcdTIxOUQnLFxuXHRyQXRhaWw6ICdcXHUyOTFDJyxcblx0cmF0YWlsOiAnXFx1MjkxQScsXG5cdHJhdGlvOiAnXFx1MjIzNicsXG5cdHJhdGlvbmFsczogJ1xcdTIxMUEnLFxuXHRSQmFycjogJ1xcdTI5MTAnLFxuXHRyQmFycjogJ1xcdTI5MEYnLFxuXHRyYmFycjogJ1xcdTI5MEQnLFxuXHRyYmJyazogJ1xcdTI3NzMnLFxuXHRyYnJhY2U6ICdcXHUwMDdEJyxcblx0cmJyYWNrOiAnXFx1MDA1RCcsXG5cdHJicmtlOiAnXFx1Mjk4QycsXG5cdHJicmtzbGQ6ICdcXHUyOThFJyxcblx0cmJya3NsdTogJ1xcdTI5OTAnLFxuXHRSY2Fyb246ICdcXHUwMTU4Jyxcblx0cmNhcm9uOiAnXFx1MDE1OScsXG5cdFJjZWRpbDogJ1xcdTAxNTYnLFxuXHRyY2VkaWw6ICdcXHUwMTU3Jyxcblx0cmNlaWw6ICdcXHUyMzA5Jyxcblx0cmN1YjogJ1xcdTAwN0QnLFxuXHRSY3k6ICdcXHUwNDIwJyxcblx0cmN5OiAnXFx1MDQ0MCcsXG5cdHJkY2E6ICdcXHUyOTM3Jyxcblx0cmRsZGhhcjogJ1xcdTI5NjknLFxuXHRyZHF1bzogJ1xcdTIwMUQnLFxuXHRyZHF1b3I6ICdcXHUyMDFEJyxcblx0cmRzaDogJ1xcdTIxQjMnLFxuXHRSZTogJ1xcdTIxMUMnLFxuXHRyZWFsOiAnXFx1MjExQycsXG5cdHJlYWxpbmU6ICdcXHUyMTFCJyxcblx0cmVhbHBhcnQ6ICdcXHUyMTFDJyxcblx0cmVhbHM6ICdcXHUyMTFEJyxcblx0cmVjdDogJ1xcdTI1QUQnLFxuXHRSRUc6ICdcXHUwMEFFJyxcblx0cmVnOiAnXFx1MDBBRScsXG5cdFJldmVyc2VFbGVtZW50OiAnXFx1MjIwQicsXG5cdFJldmVyc2VFcXVpbGlicml1bTogJ1xcdTIxQ0InLFxuXHRSZXZlcnNlVXBFcXVpbGlicml1bTogJ1xcdTI5NkYnLFxuXHRyZmlzaHQ6ICdcXHUyOTdEJyxcblx0cmZsb29yOiAnXFx1MjMwQicsXG5cdFJmcjogJ1xcdTIxMUMnLFxuXHRyZnI6ICdcXHVEODM1XFx1REQyRicsXG5cdHJIYXI6ICdcXHUyOTY0Jyxcblx0cmhhcmQ6ICdcXHUyMUMxJyxcblx0cmhhcnU6ICdcXHUyMUMwJyxcblx0cmhhcnVsOiAnXFx1Mjk2QycsXG5cdFJobzogJ1xcdTAzQTEnLFxuXHRyaG86ICdcXHUwM0MxJyxcblx0cmhvdjogJ1xcdTAzRjEnLFxuXHRSaWdodEFuZ2xlQnJhY2tldDogJ1xcdTI3RTknLFxuXHRSaWdodEFycm93OiAnXFx1MjE5MicsXG5cdFJpZ2h0YXJyb3c6ICdcXHUyMUQyJyxcblx0cmlnaHRhcnJvdzogJ1xcdTIxOTInLFxuXHRSaWdodEFycm93QmFyOiAnXFx1MjFFNScsXG5cdFJpZ2h0QXJyb3dMZWZ0QXJyb3c6ICdcXHUyMUM0Jyxcblx0cmlnaHRhcnJvd3RhaWw6ICdcXHUyMUEzJyxcblx0UmlnaHRDZWlsaW5nOiAnXFx1MjMwOScsXG5cdFJpZ2h0RG91YmxlQnJhY2tldDogJ1xcdTI3RTcnLFxuXHRSaWdodERvd25UZWVWZWN0b3I6ICdcXHUyOTVEJyxcblx0UmlnaHREb3duVmVjdG9yOiAnXFx1MjFDMicsXG5cdFJpZ2h0RG93blZlY3RvckJhcjogJ1xcdTI5NTUnLFxuXHRSaWdodEZsb29yOiAnXFx1MjMwQicsXG5cdHJpZ2h0aGFycG9vbmRvd246ICdcXHUyMUMxJyxcblx0cmlnaHRoYXJwb29udXA6ICdcXHUyMUMwJyxcblx0cmlnaHRsZWZ0YXJyb3dzOiAnXFx1MjFDNCcsXG5cdHJpZ2h0bGVmdGhhcnBvb25zOiAnXFx1MjFDQycsXG5cdHJpZ2h0cmlnaHRhcnJvd3M6ICdcXHUyMUM5Jyxcblx0cmlnaHRzcXVpZ2Fycm93OiAnXFx1MjE5RCcsXG5cdFJpZ2h0VGVlOiAnXFx1MjJBMicsXG5cdFJpZ2h0VGVlQXJyb3c6ICdcXHUyMUE2Jyxcblx0UmlnaHRUZWVWZWN0b3I6ICdcXHUyOTVCJyxcblx0cmlnaHR0aHJlZXRpbWVzOiAnXFx1MjJDQycsXG5cdFJpZ2h0VHJpYW5nbGU6ICdcXHUyMkIzJyxcblx0UmlnaHRUcmlhbmdsZUJhcjogJ1xcdTI5RDAnLFxuXHRSaWdodFRyaWFuZ2xlRXF1YWw6ICdcXHUyMkI1Jyxcblx0UmlnaHRVcERvd25WZWN0b3I6ICdcXHUyOTRGJyxcblx0UmlnaHRVcFRlZVZlY3RvcjogJ1xcdTI5NUMnLFxuXHRSaWdodFVwVmVjdG9yOiAnXFx1MjFCRScsXG5cdFJpZ2h0VXBWZWN0b3JCYXI6ICdcXHUyOTU0Jyxcblx0UmlnaHRWZWN0b3I6ICdcXHUyMUMwJyxcblx0UmlnaHRWZWN0b3JCYXI6ICdcXHUyOTUzJyxcblx0cmluZzogJ1xcdTAyREEnLFxuXHRyaXNpbmdkb3RzZXE6ICdcXHUyMjUzJyxcblx0cmxhcnI6ICdcXHUyMUM0Jyxcblx0cmxoYXI6ICdcXHUyMUNDJyxcblx0cmxtOiAnXFx1MjAwRicsXG5cdHJtb3VzdDogJ1xcdTIzQjEnLFxuXHRybW91c3RhY2hlOiAnXFx1MjNCMScsXG5cdHJubWlkOiAnXFx1MkFFRScsXG5cdHJvYW5nOiAnXFx1MjdFRCcsXG5cdHJvYXJyOiAnXFx1MjFGRScsXG5cdHJvYnJrOiAnXFx1MjdFNycsXG5cdHJvcGFyOiAnXFx1Mjk4NicsXG5cdFJvcGY6ICdcXHUyMTFEJyxcblx0cm9wZjogJ1xcdUQ4MzVcXHVERDYzJyxcblx0cm9wbHVzOiAnXFx1MkEyRScsXG5cdHJvdGltZXM6ICdcXHUyQTM1Jyxcblx0Um91bmRJbXBsaWVzOiAnXFx1Mjk3MCcsXG5cdHJwYXI6ICdcXHUwMDI5Jyxcblx0cnBhcmd0OiAnXFx1Mjk5NCcsXG5cdHJwcG9saW50OiAnXFx1MkExMicsXG5cdHJyYXJyOiAnXFx1MjFDOScsXG5cdFJyaWdodGFycm93OiAnXFx1MjFEQicsXG5cdHJzYXF1bzogJ1xcdTIwM0EnLFxuXHRSc2NyOiAnXFx1MjExQicsXG5cdHJzY3I6ICdcXHVEODM1XFx1RENDNycsXG5cdFJzaDogJ1xcdTIxQjEnLFxuXHRyc2g6ICdcXHUyMUIxJyxcblx0cnNxYjogJ1xcdTAwNUQnLFxuXHRyc3F1bzogJ1xcdTIwMTknLFxuXHRyc3F1b3I6ICdcXHUyMDE5Jyxcblx0cnRocmVlOiAnXFx1MjJDQycsXG5cdHJ0aW1lczogJ1xcdTIyQ0EnLFxuXHRydHJpOiAnXFx1MjVCOScsXG5cdHJ0cmllOiAnXFx1MjJCNScsXG5cdHJ0cmlmOiAnXFx1MjVCOCcsXG5cdHJ0cmlsdHJpOiAnXFx1MjlDRScsXG5cdFJ1bGVEZWxheWVkOiAnXFx1MjlGNCcsXG5cdHJ1bHVoYXI6ICdcXHUyOTY4Jyxcblx0cng6ICdcXHUyMTFFJyxcblx0U2FjdXRlOiAnXFx1MDE1QScsXG5cdHNhY3V0ZTogJ1xcdTAxNUInLFxuXHRzYnF1bzogJ1xcdTIwMUEnLFxuXHRTYzogJ1xcdTJBQkMnLFxuXHRzYzogJ1xcdTIyN0InLFxuXHRzY2FwOiAnXFx1MkFCOCcsXG5cdFNjYXJvbjogJ1xcdTAxNjAnLFxuXHRzY2Fyb246ICdcXHUwMTYxJyxcblx0c2NjdWU6ICdcXHUyMjdEJyxcblx0c2NFOiAnXFx1MkFCNCcsXG5cdHNjZTogJ1xcdTJBQjAnLFxuXHRTY2VkaWw6ICdcXHUwMTVFJyxcblx0c2NlZGlsOiAnXFx1MDE1RicsXG5cdFNjaXJjOiAnXFx1MDE1QycsXG5cdHNjaXJjOiAnXFx1MDE1RCcsXG5cdHNjbmFwOiAnXFx1MkFCQScsXG5cdHNjbkU6ICdcXHUyQUI2Jyxcblx0c2Nuc2ltOiAnXFx1MjJFOScsXG5cdHNjcG9saW50OiAnXFx1MkExMycsXG5cdHNjc2ltOiAnXFx1MjI3RicsXG5cdFNjeTogJ1xcdTA0MjEnLFxuXHRzY3k6ICdcXHUwNDQxJyxcblx0c2RvdDogJ1xcdTIyQzUnLFxuXHRzZG90YjogJ1xcdTIyQTEnLFxuXHRzZG90ZTogJ1xcdTJBNjYnLFxuXHRzZWFyaGs6ICdcXHUyOTI1Jyxcblx0c2VBcnI6ICdcXHUyMUQ4Jyxcblx0c2VhcnI6ICdcXHUyMTk4Jyxcblx0c2VhcnJvdzogJ1xcdTIxOTgnLFxuXHRzZWN0OiAnXFx1MDBBNycsXG5cdHNlbWk6ICdcXHUwMDNCJyxcblx0c2Vzd2FyOiAnXFx1MjkyOScsXG5cdHNldG1pbnVzOiAnXFx1MjIxNicsXG5cdHNldG1uOiAnXFx1MjIxNicsXG5cdHNleHQ6ICdcXHUyNzM2Jyxcblx0U2ZyOiAnXFx1RDgzNVxcdUREMTYnLFxuXHRzZnI6ICdcXHVEODM1XFx1REQzMCcsXG5cdHNmcm93bjogJ1xcdTIzMjInLFxuXHRzaGFycDogJ1xcdTI2NkYnLFxuXHRTSENIY3k6ICdcXHUwNDI5Jyxcblx0c2hjaGN5OiAnXFx1MDQ0OScsXG5cdFNIY3k6ICdcXHUwNDI4Jyxcblx0c2hjeTogJ1xcdTA0NDgnLFxuXHRTaG9ydERvd25BcnJvdzogJ1xcdTIxOTMnLFxuXHRTaG9ydExlZnRBcnJvdzogJ1xcdTIxOTAnLFxuXHRzaG9ydG1pZDogJ1xcdTIyMjMnLFxuXHRzaG9ydHBhcmFsbGVsOiAnXFx1MjIyNScsXG5cdFNob3J0UmlnaHRBcnJvdzogJ1xcdTIxOTInLFxuXHRTaG9ydFVwQXJyb3c6ICdcXHUyMTkxJyxcblx0c2h5OiAnXFx1MDBBRCcsXG5cdFNpZ21hOiAnXFx1MDNBMycsXG5cdHNpZ21hOiAnXFx1MDNDMycsXG5cdHNpZ21hZjogJ1xcdTAzQzInLFxuXHRzaWdtYXY6ICdcXHUwM0MyJyxcblx0c2ltOiAnXFx1MjIzQycsXG5cdHNpbWRvdDogJ1xcdTJBNkEnLFxuXHRzaW1lOiAnXFx1MjI0MycsXG5cdHNpbWVxOiAnXFx1MjI0MycsXG5cdHNpbWc6ICdcXHUyQTlFJyxcblx0c2ltZ0U6ICdcXHUyQUEwJyxcblx0c2ltbDogJ1xcdTJBOUQnLFxuXHRzaW1sRTogJ1xcdTJBOUYnLFxuXHRzaW1uZTogJ1xcdTIyNDYnLFxuXHRzaW1wbHVzOiAnXFx1MkEyNCcsXG5cdHNpbXJhcnI6ICdcXHUyOTcyJyxcblx0c2xhcnI6ICdcXHUyMTkwJyxcblx0U21hbGxDaXJjbGU6ICdcXHUyMjE4Jyxcblx0c21hbGxzZXRtaW51czogJ1xcdTIyMTYnLFxuXHRzbWFzaHA6ICdcXHUyQTMzJyxcblx0c21lcGFyc2w6ICdcXHUyOUU0Jyxcblx0c21pZDogJ1xcdTIyMjMnLFxuXHRzbWlsZTogJ1xcdTIzMjMnLFxuXHRzbXQ6ICdcXHUyQUFBJyxcblx0c210ZTogJ1xcdTJBQUMnLFxuXHRzbXRlczogJ1xcdTJBQUNcXHVGRTAwJyxcblx0U09GVGN5OiAnXFx1MDQyQycsXG5cdHNvZnRjeTogJ1xcdTA0NEMnLFxuXHRzb2w6ICdcXHUwMDJGJyxcblx0c29sYjogJ1xcdTI5QzQnLFxuXHRzb2xiYXI6ICdcXHUyMzNGJyxcblx0U29wZjogJ1xcdUQ4MzVcXHVERDRBJyxcblx0c29wZjogJ1xcdUQ4MzVcXHVERDY0Jyxcblx0c3BhZGVzOiAnXFx1MjY2MCcsXG5cdHNwYWRlc3VpdDogJ1xcdTI2NjAnLFxuXHRzcGFyOiAnXFx1MjIyNScsXG5cdHNxY2FwOiAnXFx1MjI5MycsXG5cdHNxY2FwczogJ1xcdTIyOTNcXHVGRTAwJyxcblx0c3FjdXA6ICdcXHUyMjk0Jyxcblx0c3FjdXBzOiAnXFx1MjI5NFxcdUZFMDAnLFxuXHRTcXJ0OiAnXFx1MjIxQScsXG5cdHNxc3ViOiAnXFx1MjI4RicsXG5cdHNxc3ViZTogJ1xcdTIyOTEnLFxuXHRzcXN1YnNldDogJ1xcdTIyOEYnLFxuXHRzcXN1YnNldGVxOiAnXFx1MjI5MScsXG5cdHNxc3VwOiAnXFx1MjI5MCcsXG5cdHNxc3VwZTogJ1xcdTIyOTInLFxuXHRzcXN1cHNldDogJ1xcdTIyOTAnLFxuXHRzcXN1cHNldGVxOiAnXFx1MjI5MicsXG5cdHNxdTogJ1xcdTI1QTEnLFxuXHRTcXVhcmU6ICdcXHUyNUExJyxcblx0c3F1YXJlOiAnXFx1MjVBMScsXG5cdFNxdWFyZUludGVyc2VjdGlvbjogJ1xcdTIyOTMnLFxuXHRTcXVhcmVTdWJzZXQ6ICdcXHUyMjhGJyxcblx0U3F1YXJlU3Vic2V0RXF1YWw6ICdcXHUyMjkxJyxcblx0U3F1YXJlU3VwZXJzZXQ6ICdcXHUyMjkwJyxcblx0U3F1YXJlU3VwZXJzZXRFcXVhbDogJ1xcdTIyOTInLFxuXHRTcXVhcmVVbmlvbjogJ1xcdTIyOTQnLFxuXHRzcXVhcmY6ICdcXHUyNUFBJyxcblx0c3F1ZjogJ1xcdTI1QUEnLFxuXHRzcmFycjogJ1xcdTIxOTInLFxuXHRTc2NyOiAnXFx1RDgzNVxcdURDQUUnLFxuXHRzc2NyOiAnXFx1RDgzNVxcdURDQzgnLFxuXHRzc2V0bW46ICdcXHUyMjE2Jyxcblx0c3NtaWxlOiAnXFx1MjMyMycsXG5cdHNzdGFyZjogJ1xcdTIyQzYnLFxuXHRTdGFyOiAnXFx1MjJDNicsXG5cdHN0YXI6ICdcXHUyNjA2Jyxcblx0c3RhcmY6ICdcXHUyNjA1Jyxcblx0c3RyYWlnaHRlcHNpbG9uOiAnXFx1MDNGNScsXG5cdHN0cmFpZ2h0cGhpOiAnXFx1MDNENScsXG5cdHN0cm5zOiAnXFx1MDBBRicsXG5cdFN1YjogJ1xcdTIyRDAnLFxuXHRzdWI6ICdcXHUyMjgyJyxcblx0c3ViZG90OiAnXFx1MkFCRCcsXG5cdHN1YkU6ICdcXHUyQUM1Jyxcblx0c3ViZTogJ1xcdTIyODYnLFxuXHRzdWJlZG90OiAnXFx1MkFDMycsXG5cdHN1Ym11bHQ6ICdcXHUyQUMxJyxcblx0c3VibkU6ICdcXHUyQUNCJyxcblx0c3VibmU6ICdcXHUyMjhBJyxcblx0c3VicGx1czogJ1xcdTJBQkYnLFxuXHRzdWJyYXJyOiAnXFx1Mjk3OScsXG5cdFN1YnNldDogJ1xcdTIyRDAnLFxuXHRzdWJzZXQ6ICdcXHUyMjgyJyxcblx0c3Vic2V0ZXE6ICdcXHUyMjg2Jyxcblx0c3Vic2V0ZXFxOiAnXFx1MkFDNScsXG5cdFN1YnNldEVxdWFsOiAnXFx1MjI4NicsXG5cdHN1YnNldG5lcTogJ1xcdTIyOEEnLFxuXHRzdWJzZXRuZXFxOiAnXFx1MkFDQicsXG5cdHN1YnNpbTogJ1xcdTJBQzcnLFxuXHRzdWJzdWI6ICdcXHUyQUQ1Jyxcblx0c3Vic3VwOiAnXFx1MkFEMycsXG5cdHN1Y2M6ICdcXHUyMjdCJyxcblx0c3VjY2FwcHJveDogJ1xcdTJBQjgnLFxuXHRzdWNjY3VybHllcTogJ1xcdTIyN0QnLFxuXHRTdWNjZWVkczogJ1xcdTIyN0InLFxuXHRTdWNjZWVkc0VxdWFsOiAnXFx1MkFCMCcsXG5cdFN1Y2NlZWRzU2xhbnRFcXVhbDogJ1xcdTIyN0QnLFxuXHRTdWNjZWVkc1RpbGRlOiAnXFx1MjI3RicsXG5cdHN1Y2NlcTogJ1xcdTJBQjAnLFxuXHRzdWNjbmFwcHJveDogJ1xcdTJBQkEnLFxuXHRzdWNjbmVxcTogJ1xcdTJBQjYnLFxuXHRzdWNjbnNpbTogJ1xcdTIyRTknLFxuXHRzdWNjc2ltOiAnXFx1MjI3RicsXG5cdFN1Y2hUaGF0OiAnXFx1MjIwQicsXG5cdFN1bTogJ1xcdTIyMTEnLFxuXHRzdW06ICdcXHUyMjExJyxcblx0c3VuZzogJ1xcdTI2NkEnLFxuXHRTdXA6ICdcXHUyMkQxJyxcblx0c3VwOiAnXFx1MjI4MycsXG5cdHN1cDE6ICdcXHUwMEI5Jyxcblx0c3VwMjogJ1xcdTAwQjInLFxuXHRzdXAzOiAnXFx1MDBCMycsXG5cdHN1cGRvdDogJ1xcdTJBQkUnLFxuXHRzdXBkc3ViOiAnXFx1MkFEOCcsXG5cdHN1cEU6ICdcXHUyQUM2Jyxcblx0c3VwZTogJ1xcdTIyODcnLFxuXHRzdXBlZG90OiAnXFx1MkFDNCcsXG5cdFN1cGVyc2V0OiAnXFx1MjI4MycsXG5cdFN1cGVyc2V0RXF1YWw6ICdcXHUyMjg3Jyxcblx0c3VwaHNvbDogJ1xcdTI3QzknLFxuXHRzdXBoc3ViOiAnXFx1MkFENycsXG5cdHN1cGxhcnI6ICdcXHUyOTdCJyxcblx0c3VwbXVsdDogJ1xcdTJBQzInLFxuXHRzdXBuRTogJ1xcdTJBQ0MnLFxuXHRzdXBuZTogJ1xcdTIyOEInLFxuXHRzdXBwbHVzOiAnXFx1MkFDMCcsXG5cdFN1cHNldDogJ1xcdTIyRDEnLFxuXHRzdXBzZXQ6ICdcXHUyMjgzJyxcblx0c3Vwc2V0ZXE6ICdcXHUyMjg3Jyxcblx0c3Vwc2V0ZXFxOiAnXFx1MkFDNicsXG5cdHN1cHNldG5lcTogJ1xcdTIyOEInLFxuXHRzdXBzZXRuZXFxOiAnXFx1MkFDQycsXG5cdHN1cHNpbTogJ1xcdTJBQzgnLFxuXHRzdXBzdWI6ICdcXHUyQUQ0Jyxcblx0c3Vwc3VwOiAnXFx1MkFENicsXG5cdHN3YXJoazogJ1xcdTI5MjYnLFxuXHRzd0FycjogJ1xcdTIxRDknLFxuXHRzd2FycjogJ1xcdTIxOTknLFxuXHRzd2Fycm93OiAnXFx1MjE5OScsXG5cdHN3bndhcjogJ1xcdTI5MkEnLFxuXHRzemxpZzogJ1xcdTAwREYnLFxuXHRUYWI6ICdcXHUwMDA5Jyxcblx0dGFyZ2V0OiAnXFx1MjMxNicsXG5cdFRhdTogJ1xcdTAzQTQnLFxuXHR0YXU6ICdcXHUwM0M0Jyxcblx0dGJyazogJ1xcdTIzQjQnLFxuXHRUY2Fyb246ICdcXHUwMTY0Jyxcblx0dGNhcm9uOiAnXFx1MDE2NScsXG5cdFRjZWRpbDogJ1xcdTAxNjInLFxuXHR0Y2VkaWw6ICdcXHUwMTYzJyxcblx0VGN5OiAnXFx1MDQyMicsXG5cdHRjeTogJ1xcdTA0NDInLFxuXHR0ZG90OiAnXFx1MjBEQicsXG5cdHRlbHJlYzogJ1xcdTIzMTUnLFxuXHRUZnI6ICdcXHVEODM1XFx1REQxNycsXG5cdHRmcjogJ1xcdUQ4MzVcXHVERDMxJyxcblx0dGhlcmU0OiAnXFx1MjIzNCcsXG5cdFRoZXJlZm9yZTogJ1xcdTIyMzQnLFxuXHR0aGVyZWZvcmU6ICdcXHUyMjM0Jyxcblx0VGhldGE6ICdcXHUwMzk4Jyxcblx0dGhldGE6ICdcXHUwM0I4Jyxcblx0dGhldGFzeW06ICdcXHUwM0QxJyxcblx0dGhldGF2OiAnXFx1MDNEMScsXG5cdHRoaWNrYXBwcm94OiAnXFx1MjI0OCcsXG5cdHRoaWNrc2ltOiAnXFx1MjIzQycsXG5cdFRoaWNrU3BhY2U6ICdcXHUyMDVGXFx1MjAwQScsXG5cdHRoaW5zcDogJ1xcdTIwMDknLFxuXHRUaGluU3BhY2U6ICdcXHUyMDA5Jyxcblx0dGhrYXA6ICdcXHUyMjQ4Jyxcblx0dGhrc2ltOiAnXFx1MjIzQycsXG5cdFRIT1JOOiAnXFx1MDBERScsXG5cdHRob3JuOiAnXFx1MDBGRScsXG5cdFRpbGRlOiAnXFx1MjIzQycsXG5cdHRpbGRlOiAnXFx1MDJEQycsXG5cdFRpbGRlRXF1YWw6ICdcXHUyMjQzJyxcblx0VGlsZGVGdWxsRXF1YWw6ICdcXHUyMjQ1Jyxcblx0VGlsZGVUaWxkZTogJ1xcdTIyNDgnLFxuXHR0aW1lczogJ1xcdTAwRDcnLFxuXHR0aW1lc2I6ICdcXHUyMkEwJyxcblx0dGltZXNiYXI6ICdcXHUyQTMxJyxcblx0dGltZXNkOiAnXFx1MkEzMCcsXG5cdHRpbnQ6ICdcXHUyMjJEJyxcblx0dG9lYTogJ1xcdTI5MjgnLFxuXHR0b3A6ICdcXHUyMkE0Jyxcblx0dG9wYm90OiAnXFx1MjMzNicsXG5cdHRvcGNpcjogJ1xcdTJBRjEnLFxuXHRUb3BmOiAnXFx1RDgzNVxcdURENEInLFxuXHR0b3BmOiAnXFx1RDgzNVxcdURENjUnLFxuXHR0b3Bmb3JrOiAnXFx1MkFEQScsXG5cdHRvc2E6ICdcXHUyOTI5Jyxcblx0dHByaW1lOiAnXFx1MjAzNCcsXG5cdFRSQURFOiAnXFx1MjEyMicsXG5cdHRyYWRlOiAnXFx1MjEyMicsXG5cdHRyaWFuZ2xlOiAnXFx1MjVCNScsXG5cdHRyaWFuZ2xlZG93bjogJ1xcdTI1QkYnLFxuXHR0cmlhbmdsZWxlZnQ6ICdcXHUyNUMzJyxcblx0dHJpYW5nbGVsZWZ0ZXE6ICdcXHUyMkI0Jyxcblx0dHJpYW5nbGVxOiAnXFx1MjI1QycsXG5cdHRyaWFuZ2xlcmlnaHQ6ICdcXHUyNUI5Jyxcblx0dHJpYW5nbGVyaWdodGVxOiAnXFx1MjJCNScsXG5cdHRyaWRvdDogJ1xcdTI1RUMnLFxuXHR0cmllOiAnXFx1MjI1QycsXG5cdHRyaW1pbnVzOiAnXFx1MkEzQScsXG5cdFRyaXBsZURvdDogJ1xcdTIwREInLFxuXHR0cmlwbHVzOiAnXFx1MkEzOScsXG5cdHRyaXNiOiAnXFx1MjlDRCcsXG5cdHRyaXRpbWU6ICdcXHUyQTNCJyxcblx0dHJwZXppdW06ICdcXHUyM0UyJyxcblx0VHNjcjogJ1xcdUQ4MzVcXHVEQ0FGJyxcblx0dHNjcjogJ1xcdUQ4MzVcXHVEQ0M5Jyxcblx0VFNjeTogJ1xcdTA0MjYnLFxuXHR0c2N5OiAnXFx1MDQ0NicsXG5cdFRTSGN5OiAnXFx1MDQwQicsXG5cdHRzaGN5OiAnXFx1MDQ1QicsXG5cdFRzdHJvazogJ1xcdTAxNjYnLFxuXHR0c3Ryb2s6ICdcXHUwMTY3Jyxcblx0dHdpeHQ6ICdcXHUyMjZDJyxcblx0dHdvaGVhZGxlZnRhcnJvdzogJ1xcdTIxOUUnLFxuXHR0d29oZWFkcmlnaHRhcnJvdzogJ1xcdTIxQTAnLFxuXHRVYWN1dGU6ICdcXHUwMERBJyxcblx0dWFjdXRlOiAnXFx1MDBGQScsXG5cdFVhcnI6ICdcXHUyMTlGJyxcblx0dUFycjogJ1xcdTIxRDEnLFxuXHR1YXJyOiAnXFx1MjE5MScsXG5cdFVhcnJvY2lyOiAnXFx1Mjk0OScsXG5cdFVicmN5OiAnXFx1MDQwRScsXG5cdHVicmN5OiAnXFx1MDQ1RScsXG5cdFVicmV2ZTogJ1xcdTAxNkMnLFxuXHR1YnJldmU6ICdcXHUwMTZEJyxcblx0VWNpcmM6ICdcXHUwMERCJyxcblx0dWNpcmM6ICdcXHUwMEZCJyxcblx0VWN5OiAnXFx1MDQyMycsXG5cdHVjeTogJ1xcdTA0NDMnLFxuXHR1ZGFycjogJ1xcdTIxQzUnLFxuXHRVZGJsYWM6ICdcXHUwMTcwJyxcblx0dWRibGFjOiAnXFx1MDE3MScsXG5cdHVkaGFyOiAnXFx1Mjk2RScsXG5cdHVmaXNodDogJ1xcdTI5N0UnLFxuXHRVZnI6ICdcXHVEODM1XFx1REQxOCcsXG5cdHVmcjogJ1xcdUQ4MzVcXHVERDMyJyxcblx0VWdyYXZlOiAnXFx1MDBEOScsXG5cdHVncmF2ZTogJ1xcdTAwRjknLFxuXHR1SGFyOiAnXFx1Mjk2MycsXG5cdHVoYXJsOiAnXFx1MjFCRicsXG5cdHVoYXJyOiAnXFx1MjFCRScsXG5cdHVoYmxrOiAnXFx1MjU4MCcsXG5cdHVsY29ybjogJ1xcdTIzMUMnLFxuXHR1bGNvcm5lcjogJ1xcdTIzMUMnLFxuXHR1bGNyb3A6ICdcXHUyMzBGJyxcblx0dWx0cmk6ICdcXHUyNUY4Jyxcblx0VW1hY3I6ICdcXHUwMTZBJyxcblx0dW1hY3I6ICdcXHUwMTZCJyxcblx0dW1sOiAnXFx1MDBBOCcsXG5cdFVuZGVyQmFyOiAnXFx1MDA1RicsXG5cdFVuZGVyQnJhY2U6ICdcXHUyM0RGJyxcblx0VW5kZXJCcmFja2V0OiAnXFx1MjNCNScsXG5cdFVuZGVyUGFyZW50aGVzaXM6ICdcXHUyM0REJyxcblx0VW5pb246ICdcXHUyMkMzJyxcblx0VW5pb25QbHVzOiAnXFx1MjI4RScsXG5cdFVvZ29uOiAnXFx1MDE3MicsXG5cdHVvZ29uOiAnXFx1MDE3MycsXG5cdFVvcGY6ICdcXHVEODM1XFx1REQ0QycsXG5cdHVvcGY6ICdcXHVEODM1XFx1REQ2NicsXG5cdFVwQXJyb3c6ICdcXHUyMTkxJyxcblx0VXBhcnJvdzogJ1xcdTIxRDEnLFxuXHR1cGFycm93OiAnXFx1MjE5MScsXG5cdFVwQXJyb3dCYXI6ICdcXHUyOTEyJyxcblx0VXBBcnJvd0Rvd25BcnJvdzogJ1xcdTIxQzUnLFxuXHRVcERvd25BcnJvdzogJ1xcdTIxOTUnLFxuXHRVcGRvd25hcnJvdzogJ1xcdTIxRDUnLFxuXHR1cGRvd25hcnJvdzogJ1xcdTIxOTUnLFxuXHRVcEVxdWlsaWJyaXVtOiAnXFx1Mjk2RScsXG5cdHVwaGFycG9vbmxlZnQ6ICdcXHUyMUJGJyxcblx0dXBoYXJwb29ucmlnaHQ6ICdcXHUyMUJFJyxcblx0dXBsdXM6ICdcXHUyMjhFJyxcblx0VXBwZXJMZWZ0QXJyb3c6ICdcXHUyMTk2Jyxcblx0VXBwZXJSaWdodEFycm93OiAnXFx1MjE5NycsXG5cdFVwc2k6ICdcXHUwM0QyJyxcblx0dXBzaTogJ1xcdTAzQzUnLFxuXHR1cHNpaDogJ1xcdTAzRDInLFxuXHRVcHNpbG9uOiAnXFx1MDNBNScsXG5cdHVwc2lsb246ICdcXHUwM0M1Jyxcblx0VXBUZWU6ICdcXHUyMkE1Jyxcblx0VXBUZWVBcnJvdzogJ1xcdTIxQTUnLFxuXHR1cHVwYXJyb3dzOiAnXFx1MjFDOCcsXG5cdHVyY29ybjogJ1xcdTIzMUQnLFxuXHR1cmNvcm5lcjogJ1xcdTIzMUQnLFxuXHR1cmNyb3A6ICdcXHUyMzBFJyxcblx0VXJpbmc6ICdcXHUwMTZFJyxcblx0dXJpbmc6ICdcXHUwMTZGJyxcblx0dXJ0cmk6ICdcXHUyNUY5Jyxcblx0VXNjcjogJ1xcdUQ4MzVcXHVEQ0IwJyxcblx0dXNjcjogJ1xcdUQ4MzVcXHVEQ0NBJyxcblx0dXRkb3Q6ICdcXHUyMkYwJyxcblx0VXRpbGRlOiAnXFx1MDE2OCcsXG5cdHV0aWxkZTogJ1xcdTAxNjknLFxuXHR1dHJpOiAnXFx1MjVCNScsXG5cdHV0cmlmOiAnXFx1MjVCNCcsXG5cdHV1YXJyOiAnXFx1MjFDOCcsXG5cdFV1bWw6ICdcXHUwMERDJyxcblx0dXVtbDogJ1xcdTAwRkMnLFxuXHR1d2FuZ2xlOiAnXFx1MjlBNycsXG5cdHZhbmdydDogJ1xcdTI5OUMnLFxuXHR2YXJlcHNpbG9uOiAnXFx1MDNGNScsXG5cdHZhcmthcHBhOiAnXFx1MDNGMCcsXG5cdHZhcm5vdGhpbmc6ICdcXHUyMjA1Jyxcblx0dmFycGhpOiAnXFx1MDNENScsXG5cdHZhcnBpOiAnXFx1MDNENicsXG5cdHZhcnByb3B0bzogJ1xcdTIyMUQnLFxuXHR2QXJyOiAnXFx1MjFENScsXG5cdHZhcnI6ICdcXHUyMTk1Jyxcblx0dmFycmhvOiAnXFx1MDNGMScsXG5cdHZhcnNpZ21hOiAnXFx1MDNDMicsXG5cdHZhcnN1YnNldG5lcTogJ1xcdTIyOEFcXHVGRTAwJyxcblx0dmFyc3Vic2V0bmVxcTogJ1xcdTJBQ0JcXHVGRTAwJyxcblx0dmFyc3Vwc2V0bmVxOiAnXFx1MjI4QlxcdUZFMDAnLFxuXHR2YXJzdXBzZXRuZXFxOiAnXFx1MkFDQ1xcdUZFMDAnLFxuXHR2YXJ0aGV0YTogJ1xcdTAzRDEnLFxuXHR2YXJ0cmlhbmdsZWxlZnQ6ICdcXHUyMkIyJyxcblx0dmFydHJpYW5nbGVyaWdodDogJ1xcdTIyQjMnLFxuXHRWYmFyOiAnXFx1MkFFQicsXG5cdHZCYXI6ICdcXHUyQUU4Jyxcblx0dkJhcnY6ICdcXHUyQUU5Jyxcblx0VmN5OiAnXFx1MDQxMicsXG5cdHZjeTogJ1xcdTA0MzInLFxuXHRWRGFzaDogJ1xcdTIyQUInLFxuXHRWZGFzaDogJ1xcdTIyQTknLFxuXHR2RGFzaDogJ1xcdTIyQTgnLFxuXHR2ZGFzaDogJ1xcdTIyQTInLFxuXHRWZGFzaGw6ICdcXHUyQUU2Jyxcblx0VmVlOiAnXFx1MjJDMScsXG5cdHZlZTogJ1xcdTIyMjgnLFxuXHR2ZWViYXI6ICdcXHUyMkJCJyxcblx0dmVlZXE6ICdcXHUyMjVBJyxcblx0dmVsbGlwOiAnXFx1MjJFRScsXG5cdFZlcmJhcjogJ1xcdTIwMTYnLFxuXHR2ZXJiYXI6ICdcXHUwMDdDJyxcblx0VmVydDogJ1xcdTIwMTYnLFxuXHR2ZXJ0OiAnXFx1MDA3QycsXG5cdFZlcnRpY2FsQmFyOiAnXFx1MjIyMycsXG5cdFZlcnRpY2FsTGluZTogJ1xcdTAwN0MnLFxuXHRWZXJ0aWNhbFNlcGFyYXRvcjogJ1xcdTI3NTgnLFxuXHRWZXJ0aWNhbFRpbGRlOiAnXFx1MjI0MCcsXG5cdFZlcnlUaGluU3BhY2U6ICdcXHUyMDBBJyxcblx0VmZyOiAnXFx1RDgzNVxcdUREMTknLFxuXHR2ZnI6ICdcXHVEODM1XFx1REQzMycsXG5cdHZsdHJpOiAnXFx1MjJCMicsXG5cdHZuc3ViOiAnXFx1MjI4MlxcdTIwRDInLFxuXHR2bnN1cDogJ1xcdTIyODNcXHUyMEQyJyxcblx0Vm9wZjogJ1xcdUQ4MzVcXHVERDREJyxcblx0dm9wZjogJ1xcdUQ4MzVcXHVERDY3Jyxcblx0dnByb3A6ICdcXHUyMjFEJyxcblx0dnJ0cmk6ICdcXHUyMkIzJyxcblx0VnNjcjogJ1xcdUQ4MzVcXHVEQ0IxJyxcblx0dnNjcjogJ1xcdUQ4MzVcXHVEQ0NCJyxcblx0dnN1Ym5FOiAnXFx1MkFDQlxcdUZFMDAnLFxuXHR2c3VibmU6ICdcXHUyMjhBXFx1RkUwMCcsXG5cdHZzdXBuRTogJ1xcdTJBQ0NcXHVGRTAwJyxcblx0dnN1cG5lOiAnXFx1MjI4QlxcdUZFMDAnLFxuXHRWdmRhc2g6ICdcXHUyMkFBJyxcblx0dnppZ3phZzogJ1xcdTI5OUEnLFxuXHRXY2lyYzogJ1xcdTAxNzQnLFxuXHR3Y2lyYzogJ1xcdTAxNzUnLFxuXHR3ZWRiYXI6ICdcXHUyQTVGJyxcblx0V2VkZ2U6ICdcXHUyMkMwJyxcblx0d2VkZ2U6ICdcXHUyMjI3Jyxcblx0d2VkZ2VxOiAnXFx1MjI1OScsXG5cdHdlaWVycDogJ1xcdTIxMTgnLFxuXHRXZnI6ICdcXHVEODM1XFx1REQxQScsXG5cdHdmcjogJ1xcdUQ4MzVcXHVERDM0Jyxcblx0V29wZjogJ1xcdUQ4MzVcXHVERDRFJyxcblx0d29wZjogJ1xcdUQ4MzVcXHVERDY4Jyxcblx0d3A6ICdcXHUyMTE4Jyxcblx0d3I6ICdcXHUyMjQwJyxcblx0d3JlYXRoOiAnXFx1MjI0MCcsXG5cdFdzY3I6ICdcXHVEODM1XFx1RENCMicsXG5cdHdzY3I6ICdcXHVEODM1XFx1RENDQycsXG5cdHhjYXA6ICdcXHUyMkMyJyxcblx0eGNpcmM6ICdcXHUyNUVGJyxcblx0eGN1cDogJ1xcdTIyQzMnLFxuXHR4ZHRyaTogJ1xcdTI1QkQnLFxuXHRYZnI6ICdcXHVEODM1XFx1REQxQicsXG5cdHhmcjogJ1xcdUQ4MzVcXHVERDM1Jyxcblx0eGhBcnI6ICdcXHUyN0ZBJyxcblx0eGhhcnI6ICdcXHUyN0Y3Jyxcblx0WGk6ICdcXHUwMzlFJyxcblx0eGk6ICdcXHUwM0JFJyxcblx0eGxBcnI6ICdcXHUyN0Y4Jyxcblx0eGxhcnI6ICdcXHUyN0Y1Jyxcblx0eG1hcDogJ1xcdTI3RkMnLFxuXHR4bmlzOiAnXFx1MjJGQicsXG5cdHhvZG90OiAnXFx1MkEwMCcsXG5cdFhvcGY6ICdcXHVEODM1XFx1REQ0RicsXG5cdHhvcGY6ICdcXHVEODM1XFx1REQ2OScsXG5cdHhvcGx1czogJ1xcdTJBMDEnLFxuXHR4b3RpbWU6ICdcXHUyQTAyJyxcblx0eHJBcnI6ICdcXHUyN0Y5Jyxcblx0eHJhcnI6ICdcXHUyN0Y2Jyxcblx0WHNjcjogJ1xcdUQ4MzVcXHVEQ0IzJyxcblx0eHNjcjogJ1xcdUQ4MzVcXHVEQ0NEJyxcblx0eHNxY3VwOiAnXFx1MkEwNicsXG5cdHh1cGx1czogJ1xcdTJBMDQnLFxuXHR4dXRyaTogJ1xcdTI1QjMnLFxuXHR4dmVlOiAnXFx1MjJDMScsXG5cdHh3ZWRnZTogJ1xcdTIyQzAnLFxuXHRZYWN1dGU6ICdcXHUwMEREJyxcblx0eWFjdXRlOiAnXFx1MDBGRCcsXG5cdFlBY3k6ICdcXHUwNDJGJyxcblx0eWFjeTogJ1xcdTA0NEYnLFxuXHRZY2lyYzogJ1xcdTAxNzYnLFxuXHR5Y2lyYzogJ1xcdTAxNzcnLFxuXHRZY3k6ICdcXHUwNDJCJyxcblx0eWN5OiAnXFx1MDQ0QicsXG5cdHllbjogJ1xcdTAwQTUnLFxuXHRZZnI6ICdcXHVEODM1XFx1REQxQycsXG5cdHlmcjogJ1xcdUQ4MzVcXHVERDM2Jyxcblx0WUljeTogJ1xcdTA0MDcnLFxuXHR5aWN5OiAnXFx1MDQ1NycsXG5cdFlvcGY6ICdcXHVEODM1XFx1REQ1MCcsXG5cdHlvcGY6ICdcXHVEODM1XFx1REQ2QScsXG5cdFlzY3I6ICdcXHVEODM1XFx1RENCNCcsXG5cdHlzY3I6ICdcXHVEODM1XFx1RENDRScsXG5cdFlVY3k6ICdcXHUwNDJFJyxcblx0eXVjeTogJ1xcdTA0NEUnLFxuXHRZdW1sOiAnXFx1MDE3OCcsXG5cdHl1bWw6ICdcXHUwMEZGJyxcblx0WmFjdXRlOiAnXFx1MDE3OScsXG5cdHphY3V0ZTogJ1xcdTAxN0EnLFxuXHRaY2Fyb246ICdcXHUwMTdEJyxcblx0emNhcm9uOiAnXFx1MDE3RScsXG5cdFpjeTogJ1xcdTA0MTcnLFxuXHR6Y3k6ICdcXHUwNDM3Jyxcblx0WmRvdDogJ1xcdTAxN0InLFxuXHR6ZG90OiAnXFx1MDE3QycsXG5cdHplZXRyZjogJ1xcdTIxMjgnLFxuXHRaZXJvV2lkdGhTcGFjZTogJ1xcdTIwMEInLFxuXHRaZXRhOiAnXFx1MDM5NicsXG5cdHpldGE6ICdcXHUwM0I2Jyxcblx0WmZyOiAnXFx1MjEyOCcsXG5cdHpmcjogJ1xcdUQ4MzVcXHVERDM3Jyxcblx0WkhjeTogJ1xcdTA0MTYnLFxuXHR6aGN5OiAnXFx1MDQzNicsXG5cdHppZ3JhcnI6ICdcXHUyMUREJyxcblx0Wm9wZjogJ1xcdTIxMjQnLFxuXHR6b3BmOiAnXFx1RDgzNVxcdURENkInLFxuXHRac2NyOiAnXFx1RDgzNVxcdURDQjUnLFxuXHR6c2NyOiAnXFx1RDgzNVxcdURDQ0YnLFxuXHR6d2o6ICdcXHUyMDBEJyxcblx0enduajogJ1xcdTIwMEMnLFxufSk7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIGBIVE1MX0VOVElUSUVTYCBpbnN0ZWFkXG4gKiBAc2VlIEhUTUxfRU5USVRJRVNcbiAqL1xuZXhwb3J0cy5lbnRpdHlNYXAgPSBleHBvcnRzLkhUTUxfRU5USVRJRVM7XG4iLCAidmFyIE5BTUVTUEFDRSA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpLk5BTUVTUEFDRTtcblxuLy9bNF0gICBcdE5hbWVTdGFydENoYXJcdCAgIDo6PSAgIFx0XCI6XCIgfCBbQS1aXSB8IFwiX1wiIHwgW2Etel0gfCBbI3hDMC0jeEQ2XSB8IFsjeEQ4LSN4RjZdIHwgWyN4RjgtI3gyRkZdIHwgWyN4MzcwLSN4MzdEXSB8IFsjeDM3Ri0jeDFGRkZdIHwgWyN4MjAwQy0jeDIwMERdIHwgWyN4MjA3MC0jeDIxOEZdIHwgWyN4MkMwMC0jeDJGRUZdIHwgWyN4MzAwMS0jeEQ3RkZdIHwgWyN4RjkwMC0jeEZEQ0ZdIHwgWyN4RkRGMC0jeEZGRkRdIHwgWyN4MTAwMDAtI3hFRkZGRl1cbi8vWzRhXSAgIFx0TmFtZUNoYXJcdCAgIDo6PSAgIFx0TmFtZVN0YXJ0Q2hhciB8IFwiLVwiIHwgXCIuXCIgfCBbMC05XSB8ICN4QjcgfCBbI3gwMzAwLSN4MDM2Rl0gfCBbI3gyMDNGLSN4MjA0MF1cbi8vWzVdICAgXHROYW1lXHQgICA6Oj0gICBcdE5hbWVTdGFydENoYXIgKE5hbWVDaGFyKSpcbnZhciBuYW1lU3RhcnRDaGFyID0gL1tBLVpfYS16XFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF0vLy9cXHUxMDAwMC1cXHVFRkZGRlxudmFyIG5hbWVDaGFyID0gbmV3IFJlZ0V4cChcIltcXFxcLVxcXFwuMC05XCIrbmFtZVN0YXJ0Q2hhci5zb3VyY2Uuc2xpY2UoMSwtMSkrXCJcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MF1cIik7XG52YXIgdGFnTmFtZVBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeJytuYW1lU3RhcnRDaGFyLnNvdXJjZStuYW1lQ2hhci5zb3VyY2UrJyooPzpcXDonK25hbWVTdGFydENoYXIuc291cmNlK25hbWVDaGFyLnNvdXJjZSsnKik/JCcpO1xuLy92YXIgdGFnTmFtZVBhdHRlcm4gPSAvXlthLXpBLVpfXVtcXHdcXC1cXC5dKig/OlxcOlthLXpBLVpfXVtcXHdcXC1cXC5dKik/JC9cbi8vdmFyIGhhbmRsZXJzID0gJ3Jlc29sdmVFbnRpdHksZ2V0RXh0ZXJuYWxTdWJzZXQsY2hhcmFjdGVycyxlbmREb2N1bWVudCxlbmRFbGVtZW50LGVuZFByZWZpeE1hcHBpbmcsaWdub3JhYmxlV2hpdGVzcGFjZSxwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sc2V0RG9jdW1lbnRMb2NhdG9yLHNraXBwZWRFbnRpdHksc3RhcnREb2N1bWVudCxzdGFydEVsZW1lbnQsc3RhcnRQcmVmaXhNYXBwaW5nLG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2wsZXJyb3IsZmF0YWxFcnJvcix3YXJuaW5nLGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxjb21tZW50LGVuZENEQVRBLGVuZERURCxlbmRFbnRpdHksc3RhcnRDREFUQSxzdGFydERURCxzdGFydEVudGl0eScuc3BsaXQoJywnKVxuXG4vL1NfVEFHLFx0U19BVFRSLFx0U19FUSxcdFNfQVRUUl9OT1FVT1RfVkFMVUVcbi8vU19BVFRSX1NQQUNFLFx0U19BVFRSX0VORCxcdFNfVEFHX1NQQUNFLCBTX1RBR19DTE9TRVxudmFyIFNfVEFHID0gMDsvL3RhZyBuYW1lIG9mZmVycmluZ1xudmFyIFNfQVRUUiA9IDE7Ly9hdHRyIG5hbWUgb2ZmZXJyaW5nXG52YXIgU19BVFRSX1NQQUNFPTI7Ly9hdHRyIG5hbWUgZW5kIGFuZCBzcGFjZSBvZmZlclxudmFyIFNfRVEgPSAzOy8vPXNwYWNlP1xudmFyIFNfQVRUUl9OT1FVT1RfVkFMVUUgPSA0Oy8vYXR0ciB2YWx1ZShubyBxdW90IHZhbHVlIG9ubHkpXG52YXIgU19BVFRSX0VORCA9IDU7Ly9hdHRyIHZhbHVlIGVuZCBhbmQgbm8gc3BhY2UocXVvdCBlbmQpXG52YXIgU19UQUdfU1BBQ0UgPSA2Oy8vKGF0dHIgdmFsdWUgZW5kIHx8IHRhZyBlbmQgKSAmJiAoc3BhY2Ugb2ZmZXIpXG52YXIgU19UQUdfQ0xPU0UgPSA3Oy8vY2xvc2VkIGVsPGVsIC8+XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBlcnJvciB0aGF0IHdpbGwgbm90IGJlIGNhdWdodCBieSBYTUxSZWFkZXIgYWthIHRoZSBTQVggcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge2FueT99IGxvY2F0b3IgT3B0aW9uYWwsIGNhbiBwcm92aWRlIGRldGFpbHMgYWJvdXQgdGhlIGxvY2F0aW9uIGluIHRoZSBzb3VyY2VcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJzZUVycm9yKG1lc3NhZ2UsIGxvY2F0b3IpIHtcblx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuXHR0aGlzLmxvY2F0b3IgPSBsb2NhdG9yXG5cdGlmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBQYXJzZUVycm9yKTtcbn1cblBhcnNlRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5QYXJzZUVycm9yLnByb3RvdHlwZS5uYW1lID0gUGFyc2VFcnJvci5uYW1lXG5cbmZ1bmN0aW9uIFhNTFJlYWRlcigpe1xuXG59XG5cblhNTFJlYWRlci5wcm90b3R5cGUgPSB7XG5cdHBhcnNlOmZ1bmN0aW9uKHNvdXJjZSxkZWZhdWx0TlNNYXAsZW50aXR5TWFwKXtcblx0XHR2YXIgZG9tQnVpbGRlciA9IHRoaXMuZG9tQnVpbGRlcjtcblx0XHRkb21CdWlsZGVyLnN0YXJ0RG9jdW1lbnQoKTtcblx0XHRfY29weShkZWZhdWx0TlNNYXAgLGRlZmF1bHROU01hcCA9IHt9KVxuXHRcdHBhcnNlKHNvdXJjZSxkZWZhdWx0TlNNYXAsZW50aXR5TWFwLFxuXHRcdFx0XHRkb21CdWlsZGVyLHRoaXMuZXJyb3JIYW5kbGVyKTtcblx0XHRkb21CdWlsZGVyLmVuZERvY3VtZW50KCk7XG5cdH1cbn1cbmZ1bmN0aW9uIHBhcnNlKHNvdXJjZSxkZWZhdWx0TlNNYXBDb3B5LGVudGl0eU1hcCxkb21CdWlsZGVyLGVycm9ySGFuZGxlcil7XG5cdGZ1bmN0aW9uIGZpeGVkRnJvbUNoYXJDb2RlKGNvZGUpIHtcblx0XHQvLyBTdHJpbmcucHJvdG90eXBlLmZyb21DaGFyQ29kZSBkb2VzIG5vdCBzdXBwb3J0c1xuXHRcdC8vID4gMiBieXRlcyB1bmljb2RlIGNoYXJzIGRpcmVjdGx5XG5cdFx0aWYgKGNvZGUgPiAweGZmZmYpIHtcblx0XHRcdGNvZGUgLT0gMHgxMDAwMDtcblx0XHRcdHZhciBzdXJyb2dhdGUxID0gMHhkODAwICsgKGNvZGUgPj4gMTApXG5cdFx0XHRcdCwgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjb2RlICYgMHgzZmYpO1xuXG5cdFx0XHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdXJyb2dhdGUxLCBzdXJyb2dhdGUyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGVudGl0eVJlcGxhY2VyKGEpe1xuXHRcdHZhciBrID0gYS5zbGljZSgxLC0xKTtcblx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZW50aXR5TWFwLCBrKSkge1xuXHRcdFx0cmV0dXJuIGVudGl0eU1hcFtrXTtcblx0XHR9ZWxzZSBpZihrLmNoYXJBdCgwKSA9PT0gJyMnKXtcblx0XHRcdHJldHVybiBmaXhlZEZyb21DaGFyQ29kZShwYXJzZUludChrLnN1YnN0cigxKS5yZXBsYWNlKCd4JywnMHgnKSkpXG5cdFx0fWVsc2V7XG5cdFx0XHRlcnJvckhhbmRsZXIuZXJyb3IoJ2VudGl0eSBub3QgZm91bmQ6JythKTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBhcHBlbmRUZXh0KGVuZCl7Ly9oYXMgc29tZSBidWdzXG5cdFx0aWYoZW5kPnN0YXJ0KXtcblx0XHRcdHZhciB4dCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsZW5kKS5yZXBsYWNlKC8mIz9cXHcrOy9nLGVudGl0eVJlcGxhY2VyKTtcblx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHN0YXJ0KTtcblx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh4dCwwLGVuZC1zdGFydCk7XG5cdFx0XHRzdGFydCA9IGVuZFxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBwb3NpdGlvbihwLG0pe1xuXHRcdHdoaWxlKHA+PWxpbmVFbmQgJiYgKG0gPSBsaW5lUGF0dGVybi5leGVjKHNvdXJjZSkpKXtcblx0XHRcdGxpbmVTdGFydCA9IG0uaW5kZXg7XG5cdFx0XHRsaW5lRW5kID0gbGluZVN0YXJ0ICsgbVswXS5sZW5ndGg7XG5cdFx0XHRsb2NhdG9yLmxpbmVOdW1iZXIrKztcblx0XHRcdC8vY29uc29sZS5sb2coJ2xpbmUrKzonLGxvY2F0b3Isc3RhcnRQb3MsZW5kUG9zKVxuXHRcdH1cblx0XHRsb2NhdG9yLmNvbHVtbk51bWJlciA9IHAtbGluZVN0YXJ0KzE7XG5cdH1cblx0dmFyIGxpbmVTdGFydCA9IDA7XG5cdHZhciBsaW5lRW5kID0gMDtcblx0dmFyIGxpbmVQYXR0ZXJuID0gLy4qKD86XFxyXFxuP3xcXG4pfC4qJC9nXG5cdHZhciBsb2NhdG9yID0gZG9tQnVpbGRlci5sb2NhdG9yO1xuXG5cdHZhciBwYXJzZVN0YWNrID0gW3tjdXJyZW50TlNNYXA6ZGVmYXVsdE5TTWFwQ29weX1dXG5cdHZhciBjbG9zZU1hcCA9IHt9O1xuXHR2YXIgc3RhcnQgPSAwO1xuXHR3aGlsZSh0cnVlKXtcblx0XHR0cnl7XG5cdFx0XHR2YXIgdGFnU3RhcnQgPSBzb3VyY2UuaW5kZXhPZignPCcsc3RhcnQpO1xuXHRcdFx0aWYodGFnU3RhcnQ8MCl7XG5cdFx0XHRcdGlmKCFzb3VyY2Uuc3Vic3RyKHN0YXJ0KS5tYXRjaCgvXlxccyokLykpe1xuXHRcdFx0XHRcdHZhciBkb2MgPSBkb21CdWlsZGVyLmRvYztcblx0ICAgIFx0XHRcdHZhciB0ZXh0ID0gZG9jLmNyZWF0ZVRleHROb2RlKHNvdXJjZS5zdWJzdHIoc3RhcnQpKTtcblx0ICAgIFx0XHRcdGRvYy5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0ICAgIFx0XHRcdGRvbUJ1aWxkZXIuY3VycmVudEVsZW1lbnQgPSB0ZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmKHRhZ1N0YXJ0PnN0YXJ0KXtcblx0XHRcdFx0YXBwZW5kVGV4dCh0YWdTdGFydCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2goc291cmNlLmNoYXJBdCh0YWdTdGFydCsxKSl7XG5cdFx0XHRjYXNlICcvJzpcblx0XHRcdFx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc+Jyx0YWdTdGFydCszKTtcblx0XHRcdFx0dmFyIHRhZ05hbWUgPSBzb3VyY2Uuc3Vic3RyaW5nKHRhZ1N0YXJ0ICsgMiwgZW5kKS5yZXBsYWNlKC9bIFxcdFxcblxccl0rJC9nLCAnJyk7XG5cdFx0XHRcdHZhciBjb25maWcgPSBwYXJzZVN0YWNrLnBvcCgpO1xuXHRcdFx0XHRpZihlbmQ8MCl7XG5cblx0ICAgICAgICBcdFx0dGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQrMikucmVwbGFjZSgvW1xcczxdLiovLCcnKTtcblx0ICAgICAgICBcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgaXMgbm90IGNvbXBsZXRlOicrY29uZmlnLnRhZ05hbWUpO1xuXHQgICAgICAgIFx0XHRlbmQgPSB0YWdTdGFydCsxK3RhZ05hbWUubGVuZ3RoO1xuXHQgICAgICAgIFx0fWVsc2UgaWYodGFnTmFtZS5tYXRjaCgvXFxzPC8pKXtcblx0ICAgICAgICBcdFx0dGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZSgvW1xcczxdLiovLCcnKTtcblx0ICAgICAgICBcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIit0YWdOYW1lKycgbWF5YmUgbm90IGNvbXBsZXRlJyk7XG5cdCAgICAgICAgXHRcdGVuZCA9IHRhZ1N0YXJ0KzErdGFnTmFtZS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGxvY2FsTlNNYXAgPSBjb25maWcubG9jYWxOU01hcDtcblx0XHRcdFx0dmFyIGVuZE1hdGNoID0gY29uZmlnLnRhZ05hbWUgPT0gdGFnTmFtZTtcblx0XHRcdFx0dmFyIGVuZElnbm9yZUNhc2VNYWNoID0gZW5kTWF0Y2ggfHwgY29uZmlnLnRhZ05hbWUmJmNvbmZpZy50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0ICAgICAgICBpZihlbmRJZ25vcmVDYXNlTWFjaCl7XG5cdFx0ICAgICAgICBcdGRvbUJ1aWxkZXIuZW5kRWxlbWVudChjb25maWcudXJpLGNvbmZpZy5sb2NhbE5hbWUsdGFnTmFtZSk7XG5cdFx0XHRcdFx0aWYobG9jYWxOU01hcCl7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBwcmVmaXggaW4gbG9jYWxOU01hcCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxvY2FsTlNNYXAsIHByZWZpeCkpIHtcblx0XHRcdFx0XHRcdFx0XHRkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZighZW5kTWF0Y2gpe1xuXHRcdCAgICAgICAgICAgIFx0ZXJyb3JIYW5kbGVyLmZhdGFsRXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiK3RhZ05hbWUrJyBpcyBub3QgbWF0Y2ggdGhlIGN1cnJlbnQgc3RhcnQgdGFnTmFtZTonK2NvbmZpZy50YWdOYW1lICk7IC8vIE5vIGtub3duIHRlc3QgY2FzZVxuXHRcdFx0XHRcdH1cblx0XHQgICAgICAgIH1lbHNle1xuXHRcdCAgICAgICAgXHRwYXJzZVN0YWNrLnB1c2goY29uZmlnKVxuXHRcdCAgICAgICAgfVxuXG5cdFx0XHRcdGVuZCsrO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Ly8gZW5kIGVsbWVudFxuXHRcdFx0Y2FzZSAnPyc6Ly8gPD8uLi4/PlxuXHRcdFx0XHRsb2NhdG9yJiZwb3NpdGlvbih0YWdTdGFydCk7XG5cdFx0XHRcdGVuZCA9IHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLHRhZ1N0YXJ0LGRvbUJ1aWxkZXIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJyEnOi8vIDwhZG9jdHlwZSw8IVtDREFUQSw8IS0tXG5cdFx0XHRcdGxvY2F0b3ImJnBvc2l0aW9uKHRhZ1N0YXJ0KTtcblx0XHRcdFx0ZW5kID0gcGFyc2VEQ0Moc291cmNlLHRhZ1N0YXJ0LGRvbUJ1aWxkZXIsZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRsb2NhdG9yJiZwb3NpdGlvbih0YWdTdGFydCk7XG5cdFx0XHRcdHZhciBlbCA9IG5ldyBFbGVtZW50QXR0cmlidXRlcygpO1xuXHRcdFx0XHR2YXIgY3VycmVudE5TTWFwID0gcGFyc2VTdGFja1twYXJzZVN0YWNrLmxlbmd0aC0xXS5jdXJyZW50TlNNYXA7XG5cdFx0XHRcdC8vZWxTdGFydEVuZFxuXHRcdFx0XHR2YXIgZW5kID0gcGFyc2VFbGVtZW50U3RhcnRQYXJ0KHNvdXJjZSx0YWdTdGFydCxlbCxjdXJyZW50TlNNYXAsZW50aXR5UmVwbGFjZXIsZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0dmFyIGxlbiA9IGVsLmxlbmd0aDtcblxuXG5cdFx0XHRcdGlmKCFlbC5jbG9zZWQgJiYgZml4U2VsZkNsb3NlZChzb3VyY2UsZW5kLGVsLnRhZ05hbWUsY2xvc2VNYXApKXtcblx0XHRcdFx0XHRlbC5jbG9zZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmKCFlbnRpdHlNYXAubmJzcCl7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygndW5jbG9zZWQgeG1sIGF0dHJpYnV0ZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihsb2NhdG9yICYmIGxlbil7XG5cdFx0XHRcdFx0dmFyIGxvY2F0b3IyID0gY29weUxvY2F0b3IobG9jYXRvcix7fSk7XG5cdFx0XHRcdFx0Ly90cnl7Ly9hdHRyaWJ1dGUgcG9zaXRpb24gZml4ZWRcblx0XHRcdFx0XHRmb3IodmFyIGkgPSAwO2k8bGVuO2krKyl7XG5cdFx0XHRcdFx0XHR2YXIgYSA9IGVsW2ldO1xuXHRcdFx0XHRcdFx0cG9zaXRpb24oYS5vZmZzZXQpO1xuXHRcdFx0XHRcdFx0YS5sb2NhdG9yID0gY29weUxvY2F0b3IobG9jYXRvcix7fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbUJ1aWxkZXIubG9jYXRvciA9IGxvY2F0b3IyXG5cdFx0XHRcdFx0aWYoYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCkpe1xuXHRcdFx0XHRcdFx0cGFyc2VTdGFjay5wdXNoKGVsKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZihhcHBlbmRFbGVtZW50KGVsLGRvbUJ1aWxkZXIsY3VycmVudE5TTWFwKSl7XG5cdFx0XHRcdFx0XHRwYXJzZVN0YWNrLnB1c2goZWwpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKE5BTUVTUEFDRS5pc0hUTUwoZWwudXJpKSAmJiAhZWwuY2xvc2VkKSB7XG5cdFx0XHRcdFx0ZW5kID0gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLGVuZCxlbC50YWdOYW1lLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW5kKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9Y2F0Y2goZSl7XG5cdFx0XHRpZiAoZSBpbnN0YW5jZW9mIFBhcnNlRXJyb3IpIHtcblx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdH1cblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcignZWxlbWVudCBwYXJzZSBlcnJvcjogJytlKVxuXHRcdFx0ZW5kID0gLTE7XG5cdFx0fVxuXHRcdGlmKGVuZD5zdGFydCl7XG5cdFx0XHRzdGFydCA9IGVuZDtcblx0XHR9ZWxzZXtcblx0XHRcdC8vVE9ETzogXHU4RkQ5XHU5MUNDXHU2NzA5XHU1M0VGXHU4MEZEc2F4XHU1NkRFXHU5MDAwXHVGRjBDXHU2NzA5XHU0RjREXHU3RjZFXHU5NTE5XHU4QkVGXHU5OENFXHU5NjY5XG5cdFx0XHRhcHBlbmRUZXh0KE1hdGgubWF4KHRhZ1N0YXJ0LHN0YXJ0KSsxKTtcblx0XHR9XG5cdH1cbn1cbmZ1bmN0aW9uIGNvcHlMb2NhdG9yKGYsdCl7XG5cdHQubGluZU51bWJlciA9IGYubGluZU51bWJlcjtcblx0dC5jb2x1bW5OdW1iZXIgPSBmLmNvbHVtbk51bWJlcjtcblx0cmV0dXJuIHQ7XG59XG5cbi8qKlxuICogQHNlZSAjYXBwZW5kRWxlbWVudChzb3VyY2UsZWxTdGFydEVuZCxlbCxzZWxmQ2xvc2VkLGVudGl0eVJlcGxhY2VyLGRvbUJ1aWxkZXIscGFyc2VTdGFjayk7XG4gKiBAcmV0dXJuIGVuZCBvZiB0aGUgZWxlbWVudFN0YXJ0UGFydChlbmQgb2YgZWxlbWVudEVuZFBhcnQgZm9yIHNlbGZDbG9zZWQgZWwpXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRWxlbWVudFN0YXJ0UGFydChzb3VyY2Usc3RhcnQsZWwsY3VycmVudE5TTWFwLGVudGl0eVJlcGxhY2VyLGVycm9ySGFuZGxlcil7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBxbmFtZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SW5kZXhcblx0ICovXG5cdGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShxbmFtZSwgdmFsdWUsIHN0YXJ0SW5kZXgpIHtcblx0XHRpZiAoZWwuYXR0cmlidXRlTmFtZXMuaGFzT3duUHJvcGVydHkocW5hbWUpKSB7XG5cdFx0XHRlcnJvckhhbmRsZXIuZmF0YWxFcnJvcignQXR0cmlidXRlICcgKyBxbmFtZSArICcgcmVkZWZpbmVkJylcblx0XHR9XG5cdFx0ZWwuYWRkVmFsdWUoXG5cdFx0XHRxbmFtZSxcblx0XHRcdC8vIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jQVZOb3JtYWxpemVcblx0XHRcdC8vIHNpbmNlIHRoZSB4bWxkb20gc2F4IHBhcnNlciBkb2VzIG5vdCBcImludGVycHJldFwiIERURCB0aGUgZm9sbG93aW5nIGlzIG5vdCBpbXBsZW1lbnRlZDpcblx0XHRcdC8vIC0gcmVjdXJzaXZlIHJlcGxhY2VtZW50IG9mIChEVEQpIGVudGl0eSByZWZlcmVuY2VzXG5cdFx0XHQvLyAtIHRyaW1taW5nIGFuZCBjb2xsYXBzaW5nIG11bHRpcGxlIHNwYWNlcyBpbnRvIGEgc2luZ2xlIG9uZSBmb3IgYXR0cmlidXRlcyB0aGF0IGFyZSBub3Qgb2YgdHlwZSBDREFUQVxuXHRcdFx0dmFsdWUucmVwbGFjZSgvW1xcdFxcblxccl0vZywgJyAnKS5yZXBsYWNlKC8mIz9cXHcrOy9nLCBlbnRpdHlSZXBsYWNlciksXG5cdFx0XHRzdGFydEluZGV4XG5cdFx0KVxuXHR9XG5cdHZhciBhdHRyTmFtZTtcblx0dmFyIHZhbHVlO1xuXHR2YXIgcCA9ICsrc3RhcnQ7XG5cdHZhciBzID0gU19UQUc7Ly9zdGF0dXNcblx0d2hpbGUodHJ1ZSl7XG5cdFx0dmFyIGMgPSBzb3VyY2UuY2hhckF0KHApO1xuXHRcdHN3aXRjaChjKXtcblx0XHRjYXNlICc9Jzpcblx0XHRcdGlmKHMgPT09IFNfQVRUUil7Ly9hdHRyTmFtZVxuXHRcdFx0XHRhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCxwKTtcblx0XHRcdFx0cyA9IFNfRVE7XG5cdFx0XHR9ZWxzZSBpZihzID09PSBTX0FUVFJfU1BBQ0Upe1xuXHRcdFx0XHRzID0gU19FUTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHQvL2ZhdGFsRXJyb3I6IGVxdWFsIG11c3QgYWZ0ZXIgYXR0ck5hbWUgb3Igc3BhY2UgYWZ0ZXIgYXR0ck5hbWVcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgZXF1YWwgbXVzdCBhZnRlciBhdHRyTmFtZScpOyAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ1xcJyc6XG5cdFx0Y2FzZSAnXCInOlxuXHRcdFx0aWYocyA9PT0gU19FUSB8fCBzID09PSBTX0FUVFIgLy98fCBzID09IFNfQVRUUl9TUEFDRVxuXHRcdFx0XHQpey8vZXF1YWxcblx0XHRcdFx0aWYocyA9PT0gU19BVFRSKXtcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKVxuXHRcdFx0XHRcdGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LHApXG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhcnQgPSBwKzE7XG5cdFx0XHRcdHAgPSBzb3VyY2UuaW5kZXhPZihjLHN0YXJ0KVxuXHRcdFx0XHRpZihwPjApe1xuXHRcdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydC0xKTtcblx0XHRcdFx0XHRzID0gU19BVFRSX0VORDtcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0Ly9mYXRhbEVycm9yOiBubyBlbmQgcXVvdCBtYXRjaFxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG5vIGVuZCBcXCcnK2MrJ1xcJyBtYXRjaCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZSBpZihzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpe1xuXHRcdFx0XHR2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG5cdFx0XHRcdGFkZEF0dHJpYnV0ZShhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KTtcblx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrYXR0ck5hbWUrJ1wiIG1pc3NlZCBzdGFydCBxdW90KCcrYysnKSEhJyk7XG5cdFx0XHRcdHN0YXJ0ID0gcCsxO1xuXHRcdFx0XHRzID0gU19BVFRSX0VORFxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8vZmF0YWxFcnJvcjogbm8gZXF1YWwgYmVmb3JlXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignYXR0cmlidXRlIHZhbHVlIG11c3QgYWZ0ZXIgXCI9XCInKTsgLy8gTm8ga25vd24gdGVzdCBjYXNlXG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcvJzpcblx0XHRcdHN3aXRjaChzKXtcblx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTtcblx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRzID1TX1RBR19DTE9TRTtcblx0XHRcdFx0ZWwuY2xvc2VkID0gdHJ1ZTtcblx0XHRcdGNhc2UgU19BVFRSX05PUVVPVF9WQUxVRTpcblx0XHRcdGNhc2UgU19BVFRSOlxuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdFx0ZWwuY2xvc2VkID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvL2Nhc2UgU19FUTpcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSBpbnZhbGlkIGNsb3NlIGNoYXIoJy8nKVwiKSAvLyBObyBrbm93biB0ZXN0IGNhc2Vcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJyc6Ly9lbmQgZG9jdW1lbnRcblx0XHRcdGVycm9ySGFuZGxlci5lcnJvcigndW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcblx0XHRcdGlmKHMgPT0gU19UQUcpe1xuXHRcdFx0XHRlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCxwKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcDtcblx0XHRjYXNlICc+Jzpcblx0XHRcdHN3aXRjaChzKXtcblx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LHApKTtcblx0XHRcdGNhc2UgU19BVFRSX0VORDpcblx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRjYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRicmVhazsvL25vcm1hbFxuXHRcdFx0Y2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOi8vQ29tcGF0aWJsZSBzdGF0ZVxuXHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRcdHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LHApO1xuXHRcdFx0XHRpZih2YWx1ZS5zbGljZSgtMSkgPT09ICcvJyl7XG5cdFx0XHRcdFx0ZWwuY2xvc2VkICA9IHRydWU7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zbGljZSgwLC0xKVxuXHRcdFx0XHR9XG5cdFx0XHRjYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0aWYocyA9PT0gU19BVFRSX1NQQUNFKXtcblx0XHRcdFx0XHR2YWx1ZSA9IGF0dHJOYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSl7XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicrdmFsdWUrJ1wiIG1pc3NlZCBxdW90KFwiKSEnKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoIU5BTUVTUEFDRS5pc0hUTUwoY3VycmVudE5TTWFwWycnXSkgfHwgIXZhbHVlLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKXtcblx0XHRcdFx0XHRcdGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInK3ZhbHVlKydcIiBtaXNzZWQgdmFsdWUhISBcIicrdmFsdWUrJ1wiIGluc3RlYWQhIScpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZSh2YWx1ZSwgdmFsdWUsIHN0YXJ0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBTX0VROlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBtaXNzZWQhIScpO1xuXHRcdFx0fVxuLy9cdFx0XHRjb25zb2xlLmxvZyh0YWdOYW1lLHRhZ05hbWVQYXR0ZXJuLHRhZ05hbWVQYXR0ZXJuLnRlc3QodGFnTmFtZSkpXG5cdFx0XHRyZXR1cm4gcDtcblx0XHQvKnhtbCBzcGFjZSAnXFx4MjAnIHwgI3g5IHwgI3hEIHwgI3hBOyAqL1xuXHRcdGNhc2UgJ1xcdTAwODAnOlxuXHRcdFx0YyA9ICcgJztcblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYoYzw9ICcgJyl7Ly9zcGFjZVxuXHRcdFx0XHRzd2l0Y2gocyl7XG5cdFx0XHRcdGNhc2UgU19UQUc6XG5cdFx0XHRcdFx0ZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQscCkpOy8vdGFnTmFtZVxuXHRcdFx0XHRcdHMgPSBTX1RBR19TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFI6XG5cdFx0XHRcdFx0YXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQscClcblx0XHRcdFx0XHRzID0gU19BVFRSX1NQQUNFO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9OT1FVT1RfVkFMVUU6XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcblx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyt2YWx1ZSsnXCIgbWlzc2VkIHF1b3QoXCIpISEnKTtcblx0XHRcdFx0XHRhZGRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlLCBzdGFydClcblx0XHRcdFx0Y2FzZSBTX0FUVFJfRU5EOlxuXHRcdFx0XHRcdHMgPSBTX1RBR19TUEFDRTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfVEFHX1NQQUNFOlxuXHRcdFx0XHQvL2Nhc2UgU19FUTpcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUl9TUEFDRTpcblx0XHRcdFx0Ly9cdHZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfVEFHX0NMT1NFOlxuXHRcdFx0XHRcdC8vaWdub3JlIHdhcm5pbmdcblx0XHRcdFx0fVxuXHRcdFx0fWVsc2V7Ly9ub3Qgc3BhY2Vcbi8vU19UQUcsXHRTX0FUVFIsXHRTX0VRLFx0U19BVFRSX05PUVVPVF9WQUxVRVxuLy9TX0FUVFJfU1BBQ0UsXHRTX0FUVFJfRU5ELFx0U19UQUdfU1BBQ0UsIFNfVEFHX0NMT1NFXG5cdFx0XHRcdHN3aXRjaChzKXtcblx0XHRcdFx0Ly9jYXNlIFNfVEFHOnZvaWQoKTticmVhaztcblx0XHRcdFx0Ly9jYXNlIFNfQVRUUjp2b2lkKCk7YnJlYWs7XG5cdFx0XHRcdC8vY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOnZvaWQoKTticmVhaztcblx0XHRcdFx0Y2FzZSBTX0FUVFJfU1BBQ0U6XG5cdFx0XHRcdFx0dmFyIHRhZ05hbWUgPSAgZWwudGFnTmFtZTtcblx0XHRcdFx0XHRpZiAoIU5BTUVTUEFDRS5pc0hUTUwoY3VycmVudE5TTWFwWycnXSkgfHwgIWF0dHJOYW1lLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG5cdFx0XHRcdFx0XHRlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJythdHRyTmFtZSsnXCIgbWlzc2VkIHZhbHVlISEgXCInK2F0dHJOYW1lKydcIiBpbnN0ZWFkMiEhJylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWRkQXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSwgc3RhcnQpO1xuXHRcdFx0XHRcdHN0YXJ0ID0gcDtcblx0XHRcdFx0XHRzID0gU19BVFRSO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFNfQVRUUl9FTkQ6XG5cdFx0XHRcdFx0ZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBzcGFjZSBpcyByZXF1aXJlZFwiJythdHRyTmFtZSsnXCIhIScpXG5cdFx0XHRcdGNhc2UgU19UQUdfU1BBQ0U6XG5cdFx0XHRcdFx0cyA9IFNfQVRUUjtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19FUTpcblx0XHRcdFx0XHRzID0gU19BVFRSX05PUVVPVF9WQUxVRTtcblx0XHRcdFx0XHRzdGFydCA9IHA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgU19UQUdfQ0xPU0U6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudHMgY2xvc2VkIGNoYXJhY3RlciAnLycgYW5kICc+JyBtdXN0IGJlIGNvbm5lY3RlZCB0b1wiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0vL2VuZCBvdXRlciBzd2l0Y2hcblx0XHQvL2NvbnNvbGUubG9nKCdwKysnLHApXG5cdFx0cCsrO1xuXHR9XG59XG4vKipcbiAqIEByZXR1cm4gdHJ1ZSBpZiBoYXMgbmV3IG5hbWVzcGFjZSBkZWZpbmVcbiAqL1xuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChlbCxkb21CdWlsZGVyLGN1cnJlbnROU01hcCl7XG5cdHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcblx0dmFyIGxvY2FsTlNNYXAgPSBudWxsO1xuXHQvL3ZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoLTFdLmN1cnJlbnROU01hcDtcblx0dmFyIGkgPSBlbC5sZW5ndGg7XG5cdHdoaWxlKGktLSl7XG5cdFx0dmFyIGEgPSBlbFtpXTtcblx0XHR2YXIgcU5hbWUgPSBhLnFOYW1lO1xuXHRcdHZhciB2YWx1ZSA9IGEudmFsdWU7XG5cdFx0dmFyIG5zcCA9IHFOYW1lLmluZGV4T2YoJzonKTtcblx0XHRpZihuc3A+MCl7XG5cdFx0XHR2YXIgcHJlZml4ID0gYS5wcmVmaXggPSBxTmFtZS5zbGljZSgwLG5zcCk7XG5cdFx0XHR2YXIgbG9jYWxOYW1lID0gcU5hbWUuc2xpY2UobnNwKzEpO1xuXHRcdFx0dmFyIG5zUHJlZml4ID0gcHJlZml4ID09PSAneG1sbnMnICYmIGxvY2FsTmFtZVxuXHRcdH1lbHNle1xuXHRcdFx0bG9jYWxOYW1lID0gcU5hbWU7XG5cdFx0XHRwcmVmaXggPSBudWxsXG5cdFx0XHRuc1ByZWZpeCA9IHFOYW1lID09PSAneG1sbnMnICYmICcnXG5cdFx0fVxuXHRcdC8vY2FuIG5vdCBzZXQgcHJlZml4LGJlY2F1c2UgcHJlZml4ICE9PSAnJ1xuXHRcdGEubG9jYWxOYW1lID0gbG9jYWxOYW1lIDtcblx0XHQvL3ByZWZpeCA9PSBudWxsIGZvciBubyBucyBwcmVmaXggYXR0cmlidXRlXG5cdFx0aWYobnNQcmVmaXggIT09IGZhbHNlKXsvL2hhY2shIVxuXHRcdFx0aWYobG9jYWxOU01hcCA9PSBudWxsKXtcblx0XHRcdFx0bG9jYWxOU01hcCA9IHt9XG5cdFx0XHRcdC8vY29uc29sZS5sb2coY3VycmVudE5TTWFwLDApXG5cdFx0XHRcdF9jb3B5KGN1cnJlbnROU01hcCxjdXJyZW50TlNNYXA9e30pXG5cdFx0XHRcdC8vY29uc29sZS5sb2coY3VycmVudE5TTWFwLDEpXG5cdFx0XHR9XG5cdFx0XHRjdXJyZW50TlNNYXBbbnNQcmVmaXhdID0gbG9jYWxOU01hcFtuc1ByZWZpeF0gPSB2YWx1ZTtcblx0XHRcdGEudXJpID0gTkFNRVNQQUNFLlhNTE5TXG5cdFx0XHRkb21CdWlsZGVyLnN0YXJ0UHJlZml4TWFwcGluZyhuc1ByZWZpeCwgdmFsdWUpXG5cdFx0fVxuXHR9XG5cdHZhciBpID0gZWwubGVuZ3RoO1xuXHR3aGlsZShpLS0pe1xuXHRcdGEgPSBlbFtpXTtcblx0XHR2YXIgcHJlZml4ID0gYS5wcmVmaXg7XG5cdFx0aWYocHJlZml4KXsvL25vIHByZWZpeCBhdHRyaWJ1dGUgaGFzIG5vIG5hbWVzcGFjZVxuXHRcdFx0aWYocHJlZml4ID09PSAneG1sJyl7XG5cdFx0XHRcdGEudXJpID0gTkFNRVNQQUNFLlhNTDtcblx0XHRcdH1pZihwcmVmaXggIT09ICd4bWxucycpe1xuXHRcdFx0XHRhLnVyaSA9IGN1cnJlbnROU01hcFtwcmVmaXggfHwgJyddXG5cblx0XHRcdFx0Ly97Y29uc29sZS5sb2coJyMjIycrYS5xTmFtZSxkb21CdWlsZGVyLmxvY2F0b3Iuc3lzdGVtSWQrJycsY3VycmVudE5TTWFwLGEudXJpKX1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIG5zcCA9IHRhZ05hbWUuaW5kZXhPZignOicpO1xuXHRpZihuc3A+MCl7XG5cdFx0cHJlZml4ID0gZWwucHJlZml4ID0gdGFnTmFtZS5zbGljZSgwLG5zcCk7XG5cdFx0bG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZS5zbGljZShuc3ArMSk7XG5cdH1lbHNle1xuXHRcdHByZWZpeCA9IG51bGw7Ly9pbXBvcnRhbnQhIVxuXHRcdGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWU7XG5cdH1cblx0Ly9ubyBwcmVmaXggZWxlbWVudCBoYXMgZGVmYXVsdCBuYW1lc3BhY2Vcblx0dmFyIG5zID0gZWwudXJpID0gY3VycmVudE5TTWFwW3ByZWZpeCB8fCAnJ107XG5cdGRvbUJ1aWxkZXIuc3RhcnRFbGVtZW50KG5zLGxvY2FsTmFtZSx0YWdOYW1lLGVsKTtcblx0Ly9lbmRQcmVmaXhNYXBwaW5nIGFuZCBzdGFydFByZWZpeE1hcHBpbmcgaGF2ZSBub3QgYW55IGhlbHAgZm9yIGRvbSBidWlsZGVyXG5cdC8vbG9jYWxOU01hcCA9IG51bGxcblx0aWYoZWwuY2xvc2VkKXtcblx0XHRkb21CdWlsZGVyLmVuZEVsZW1lbnQobnMsbG9jYWxOYW1lLHRhZ05hbWUpO1xuXHRcdGlmKGxvY2FsTlNNYXApe1xuXHRcdFx0Zm9yIChwcmVmaXggaW4gbG9jYWxOU01hcCkge1xuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxvY2FsTlNNYXAsIHByZWZpeCkpIHtcblx0XHRcdFx0XHRkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fWVsc2V7XG5cdFx0ZWwuY3VycmVudE5TTWFwID0gY3VycmVudE5TTWFwO1xuXHRcdGVsLmxvY2FsTlNNYXAgPSBsb2NhbE5TTWFwO1xuXHRcdC8vcGFyc2VTdGFjay5wdXNoKGVsKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuZnVuY3Rpb24gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLGVsU3RhcnRFbmQsdGFnTmFtZSxlbnRpdHlSZXBsYWNlcixkb21CdWlsZGVyKXtcblx0aWYoL14oPzpzY3JpcHR8dGV4dGFyZWEpJC9pLnRlc3QodGFnTmFtZSkpe1xuXHRcdHZhciBlbEVuZFN0YXJ0ID0gIHNvdXJjZS5pbmRleE9mKCc8LycrdGFnTmFtZSsnPicsZWxTdGFydEVuZCk7XG5cdFx0dmFyIHRleHQgPSBzb3VyY2Uuc3Vic3RyaW5nKGVsU3RhcnRFbmQrMSxlbEVuZFN0YXJ0KTtcblx0XHRpZigvWyY8XS8udGVzdCh0ZXh0KSl7XG5cdFx0XHRpZigvXnNjcmlwdCQvaS50ZXN0KHRhZ05hbWUpKXtcblx0XHRcdFx0Ly9pZighL1xcXVxcXT4vLnRlc3QodGV4dCkpe1xuXHRcdFx0XHRcdC8vbGV4SGFuZGxlci5zdGFydENEQVRBKCk7XG5cdFx0XHRcdFx0ZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsMCx0ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0Ly9sZXhIYW5kbGVyLmVuZENEQVRBKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGVsRW5kU3RhcnQ7XG5cdFx0XHRcdC8vfVxuXHRcdFx0fS8vfWVsc2V7Ly90ZXh0IGFyZWFcblx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSgvJiM/XFx3KzsvZyxlbnRpdHlSZXBsYWNlcik7XG5cdFx0XHRcdGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LDAsdGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRyZXR1cm4gZWxFbmRTdGFydDtcblx0XHRcdC8vfVxuXG5cdFx0fVxuXHR9XG5cdHJldHVybiBlbFN0YXJ0RW5kKzE7XG59XG5mdW5jdGlvbiBmaXhTZWxmQ2xvc2VkKHNvdXJjZSxlbFN0YXJ0RW5kLHRhZ05hbWUsY2xvc2VNYXApe1xuXHQvL2lmKHRhZ05hbWUgaW4gY2xvc2VNYXApe1xuXHR2YXIgcG9zID0gY2xvc2VNYXBbdGFnTmFtZV07XG5cdGlmKHBvcyA9PSBudWxsKXtcblx0XHQvL2NvbnNvbGUubG9nKHRhZ05hbWUpXG5cdFx0cG9zID0gIHNvdXJjZS5sYXN0SW5kZXhPZignPC8nK3RhZ05hbWUrJz4nKVxuXHRcdGlmKHBvczxlbFN0YXJ0RW5kKXsvL1x1NUZEOFx1OEJCMFx1OTVFRFx1NTQwOFxuXHRcdFx0cG9zID0gc291cmNlLmxhc3RJbmRleE9mKCc8LycrdGFnTmFtZSlcblx0XHR9XG5cdFx0Y2xvc2VNYXBbdGFnTmFtZV0gPXBvc1xuXHR9XG5cdHJldHVybiBwb3M8ZWxTdGFydEVuZDtcblx0Ly99XG59XG5cbmZ1bmN0aW9uIF9jb3B5IChzb3VyY2UsIHRhcmdldCkge1xuXHRmb3IgKHZhciBuIGluIHNvdXJjZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBuKSkge1xuXHRcdFx0dGFyZ2V0W25dID0gc291cmNlW25dO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZURDQyhzb3VyY2Usc3RhcnQsZG9tQnVpbGRlcixlcnJvckhhbmRsZXIpey8vc3VyZSBzdGFydCB3aXRoICc8ISdcblx0dmFyIG5leHQ9IHNvdXJjZS5jaGFyQXQoc3RhcnQrMilcblx0c3dpdGNoKG5leHQpe1xuXHRjYXNlICctJzpcblx0XHRpZihzb3VyY2UuY2hhckF0KHN0YXJ0ICsgMykgPT09ICctJyl7XG5cdFx0XHR2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJy0tPicsc3RhcnQrNCk7XG5cdFx0XHQvL2FwcGVuZCBjb21tZW50IHNvdXJjZS5zdWJzdHJpbmcoNCxlbmQpLy88IS0tXG5cdFx0XHRpZihlbmQ+c3RhcnQpe1xuXHRcdFx0XHRkb21CdWlsZGVyLmNvbW1lbnQoc291cmNlLHN0YXJ0KzQsZW5kLXN0YXJ0LTQpO1xuXHRcdFx0XHRyZXR1cm4gZW5kKzM7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0ZXJyb3JIYW5kbGVyLmVycm9yKFwiVW5jbG9zZWQgY29tbWVudFwiKTtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Ly9lcnJvclxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0ZGVmYXVsdDpcblx0XHRpZihzb3VyY2Uuc3Vic3RyKHN0YXJ0KzMsNikgPT0gJ0NEQVRBWycpe1xuXHRcdFx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCddXT4nLHN0YXJ0KzkpO1xuXHRcdFx0ZG9tQnVpbGRlci5zdGFydENEQVRBKCk7XG5cdFx0XHRkb21CdWlsZGVyLmNoYXJhY3RlcnMoc291cmNlLHN0YXJ0KzksZW5kLXN0YXJ0LTkpO1xuXHRcdFx0ZG9tQnVpbGRlci5lbmRDREFUQSgpXG5cdFx0XHRyZXR1cm4gZW5kKzM7XG5cdFx0fVxuXHRcdC8vPCFET0NUWVBFXG5cdFx0Ly9zdGFydERURChqYXZhLmxhbmcuU3RyaW5nIG5hbWUsIGphdmEubGFuZy5TdHJpbmcgcHVibGljSWQsIGphdmEubGFuZy5TdHJpbmcgc3lzdGVtSWQpXG5cdFx0dmFyIG1hdGNocyA9IHNwbGl0KHNvdXJjZSxzdGFydCk7XG5cdFx0dmFyIGxlbiA9IG1hdGNocy5sZW5ndGg7XG5cdFx0aWYobGVuPjEgJiYgLyFkb2N0eXBlL2kudGVzdChtYXRjaHNbMF1bMF0pKXtcblx0XHRcdHZhciBuYW1lID0gbWF0Y2hzWzFdWzBdO1xuXHRcdFx0dmFyIHB1YmlkID0gZmFsc2U7XG5cdFx0XHR2YXIgc3lzaWQgPSBmYWxzZTtcblx0XHRcdGlmKGxlbj4zKXtcblx0XHRcdFx0aWYoL15wdWJsaWMkL2kudGVzdChtYXRjaHNbMl1bMF0pKXtcblx0XHRcdFx0XHRwdWJpZCA9IG1hdGNoc1szXVswXTtcblx0XHRcdFx0XHRzeXNpZCA9IGxlbj40ICYmIG1hdGNoc1s0XVswXTtcblx0XHRcdFx0fWVsc2UgaWYoL15zeXN0ZW0kL2kudGVzdChtYXRjaHNbMl1bMF0pKXtcblx0XHRcdFx0XHRzeXNpZCA9IG1hdGNoc1szXVswXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dmFyIGxhc3RNYXRjaCA9IG1hdGNoc1tsZW4tMV1cblx0XHRcdGRvbUJ1aWxkZXIuc3RhcnREVEQobmFtZSwgcHViaWQsIHN5c2lkKTtcblx0XHRcdGRvbUJ1aWxkZXIuZW5kRFREKCk7XG5cblx0XHRcdHJldHVybiBsYXN0TWF0Y2guaW5kZXgrbGFzdE1hdGNoWzBdLmxlbmd0aFxuXHRcdH1cblx0fVxuXHRyZXR1cm4gLTE7XG59XG5cblxuXG5mdW5jdGlvbiBwYXJzZUluc3RydWN0aW9uKHNvdXJjZSxzdGFydCxkb21CdWlsZGVyKXtcblx0dmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc/Picsc3RhcnQpO1xuXHRpZihlbmQpe1xuXHRcdHZhciBtYXRjaCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsZW5kKS5tYXRjaCgvXjxcXD8oXFxTKilcXHMqKFtcXHNcXFNdKj8pJC8pO1xuXHRcdGlmKG1hdGNoKXtcblx0XHRcdHZhciBsZW4gPSBtYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRkb21CdWlsZGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihtYXRjaFsxXSwgbWF0Y2hbMl0pIDtcblx0XHRcdHJldHVybiBlbmQrMjtcblx0XHR9ZWxzZXsvL2Vycm9yXG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gRWxlbWVudEF0dHJpYnV0ZXMoKXtcblx0dGhpcy5hdHRyaWJ1dGVOYW1lcyA9IHt9XG59XG5FbGVtZW50QXR0cmlidXRlcy5wcm90b3R5cGUgPSB7XG5cdHNldFRhZ05hbWU6ZnVuY3Rpb24odGFnTmFtZSl7XG5cdFx0aWYoIXRhZ05hbWVQYXR0ZXJuLnRlc3QodGFnTmFtZSkpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHRhZ05hbWU6Jyt0YWdOYW1lKVxuXHRcdH1cblx0XHR0aGlzLnRhZ05hbWUgPSB0YWdOYW1lXG5cdH0sXG5cdGFkZFZhbHVlOmZ1bmN0aW9uKHFOYW1lLCB2YWx1ZSwgb2Zmc2V0KSB7XG5cdFx0aWYoIXRhZ05hbWVQYXR0ZXJuLnRlc3QocU5hbWUpKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhdHRyaWJ1dGU6JytxTmFtZSlcblx0XHR9XG5cdFx0dGhpcy5hdHRyaWJ1dGVOYW1lc1txTmFtZV0gPSB0aGlzLmxlbmd0aDtcblx0XHR0aGlzW3RoaXMubGVuZ3RoKytdID0ge3FOYW1lOnFOYW1lLHZhbHVlOnZhbHVlLG9mZnNldDpvZmZzZXR9XG5cdH0sXG5cdGxlbmd0aDowLFxuXHRnZXRMb2NhbE5hbWU6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0ubG9jYWxOYW1lfSxcblx0Z2V0TG9jYXRvcjpmdW5jdGlvbihpKXtyZXR1cm4gdGhpc1tpXS5sb2NhdG9yfSxcblx0Z2V0UU5hbWU6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0ucU5hbWV9LFxuXHRnZXRVUkk6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0udXJpfSxcblx0Z2V0VmFsdWU6ZnVuY3Rpb24oaSl7cmV0dXJuIHRoaXNbaV0udmFsdWV9XG4vL1x0LGdldEluZGV4OmZ1bmN0aW9uKHVyaSwgbG9jYWxOYW1lKSl7XG4vL1x0XHRpZihsb2NhbE5hbWUpe1xuLy9cbi8vXHRcdH1lbHNle1xuLy9cdFx0XHR2YXIgcU5hbWUgPSB1cmlcbi8vXHRcdH1cbi8vXHR9LFxuLy9cdGdldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VmFsdWUodGhpcy5nZXRJbmRleC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxcbi8vXHRnZXRUeXBlOmZ1bmN0aW9uKHVyaSxsb2NhbE5hbWUpe31cbi8vXHRnZXRUeXBlOmZ1bmN0aW9uKGkpe30sXG59XG5cblxuXG5mdW5jdGlvbiBzcGxpdChzb3VyY2Usc3RhcnQpe1xuXHR2YXIgbWF0Y2g7XG5cdHZhciBidWYgPSBbXTtcblx0dmFyIHJlZyA9IC8nW14nXSsnfFwiW15cIl0rXCJ8W15cXHM8PlxcLz1dKz0/fChcXC8/XFxzKj58PCkvZztcblx0cmVnLmxhc3RJbmRleCA9IHN0YXJ0O1xuXHRyZWcuZXhlYyhzb3VyY2UpOy8vc2tpcCA8XG5cdHdoaWxlKG1hdGNoID0gcmVnLmV4ZWMoc291cmNlKSl7XG5cdFx0YnVmLnB1c2gobWF0Y2gpO1xuXHRcdGlmKG1hdGNoWzFdKXJldHVybiBidWY7XG5cdH1cbn1cblxuZXhwb3J0cy5YTUxSZWFkZXIgPSBYTUxSZWFkZXI7XG5leHBvcnRzLlBhcnNlRXJyb3IgPSBQYXJzZUVycm9yO1xuIiwgInZhciBjb252ZW50aW9ucyA9IHJlcXVpcmUoXCIuL2NvbnZlbnRpb25zXCIpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJylcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJy4vZW50aXRpZXMnKTtcbnZhciBzYXggPSByZXF1aXJlKCcuL3NheCcpO1xuXG52YXIgRE9NSW1wbGVtZW50YXRpb24gPSBkb20uRE9NSW1wbGVtZW50YXRpb247XG5cbnZhciBOQU1FU1BBQ0UgPSBjb252ZW50aW9ucy5OQU1FU1BBQ0U7XG5cbnZhciBQYXJzZUVycm9yID0gc2F4LlBhcnNlRXJyb3I7XG52YXIgWE1MUmVhZGVyID0gc2F4LlhNTFJlYWRlcjtcblxuLyoqXG4gKiBOb3JtYWxpemVzIGxpbmUgZW5kaW5nIGFjY29yZGluZyB0byBodHRwczovL3d3dy53My5vcmcvVFIveG1sMTEvI3NlYy1saW5lLWVuZHM6XG4gKlxuICogPiBYTUwgcGFyc2VkIGVudGl0aWVzIGFyZSBvZnRlbiBzdG9yZWQgaW4gY29tcHV0ZXIgZmlsZXMgd2hpY2gsXG4gKiA+IGZvciBlZGl0aW5nIGNvbnZlbmllbmNlLCBhcmUgb3JnYW5pemVkIGludG8gbGluZXMuXG4gKiA+IFRoZXNlIGxpbmVzIGFyZSB0eXBpY2FsbHkgc2VwYXJhdGVkIGJ5IHNvbWUgY29tYmluYXRpb25cbiAqID4gb2YgdGhlIGNoYXJhY3RlcnMgQ0FSUklBR0UgUkVUVVJOICgjeEQpIGFuZCBMSU5FIEZFRUQgKCN4QSkuXG4gKiA+XG4gKiA+IFRvIHNpbXBsaWZ5IHRoZSB0YXNrcyBvZiBhcHBsaWNhdGlvbnMsIHRoZSBYTUwgcHJvY2Vzc29yIG11c3QgYmVoYXZlXG4gKiA+IGFzIGlmIGl0IG5vcm1hbGl6ZWQgYWxsIGxpbmUgYnJlYWtzIGluIGV4dGVybmFsIHBhcnNlZCBlbnRpdGllcyAoaW5jbHVkaW5nIHRoZSBkb2N1bWVudCBlbnRpdHkpXG4gKiA+IG9uIGlucHV0LCBiZWZvcmUgcGFyc2luZywgYnkgdHJhbnNsYXRpbmcgYWxsIG9mIHRoZSBmb2xsb3dpbmcgdG8gYSBzaW5nbGUgI3hBIGNoYXJhY3RlcjpcbiAqID5cbiAqID4gMS4gdGhlIHR3by1jaGFyYWN0ZXIgc2VxdWVuY2UgI3hEICN4QVxuICogPiAyLiB0aGUgdHdvLWNoYXJhY3RlciBzZXF1ZW5jZSAjeEQgI3g4NVxuICogPiAzLiB0aGUgc2luZ2xlIGNoYXJhY3RlciAjeDg1XG4gKiA+IDQuIHRoZSBzaW5nbGUgY2hhcmFjdGVyICN4MjAyOFxuICogPiA1LiBhbnkgI3hEIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSAjeEEgb3IgI3g4NS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmVFbmRpbmdzKGlucHV0KSB7XG5cdHJldHVybiBpbnB1dFxuXHRcdC5yZXBsYWNlKC9cXHJbXFxuXFx1MDA4NV0vZywgJ1xcbicpXG5cdFx0LnJlcGxhY2UoL1tcXHJcXHUwMDg1XFx1MjAyOF0vZywgJ1xcbicpXG59XG5cbi8qKlxuICogQHR5cGVkZWYgTG9jYXRvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtjb2x1bW5OdW1iZXJdXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2xpbmVOdW1iZXJdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBET01QYXJzZXJPcHRpb25zXG4gKiBAcHJvcGVydHkge0RPTUhhbmRsZXJ9IFtkb21CdWlsZGVyXVxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gW2Vycm9ySGFuZGxlcl1cbiAqIEBwcm9wZXJ0eSB7KHN0cmluZykgPT4gc3RyaW5nfSBbbm9ybWFsaXplTGluZUVuZGluZ3NdIHVzZWQgdG8gcmVwbGFjZSBsaW5lIGVuZGluZ3MgYmVmb3JlIHBhcnNpbmdcbiAqIFx0XHRcdFx0XHRcdGRlZmF1bHRzIHRvIGBub3JtYWxpemVMaW5lRW5kaW5nc2BcbiAqIEBwcm9wZXJ0eSB7TG9jYXRvcn0gW2xvY2F0b3JdXG4gKiBAcHJvcGVydHkge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IFt4bWxuc11cbiAqXG4gKiBAc2VlIG5vcm1hbGl6ZUxpbmVFbmRpbmdzXG4gKi9cblxuLyoqXG4gKiBUaGUgRE9NUGFyc2VyIGludGVyZmFjZSBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byBwYXJzZSBYTUwgb3IgSFRNTCBzb3VyY2UgY29kZVxuICogZnJvbSBhIHN0cmluZyBpbnRvIGEgRE9NIGBEb2N1bWVudGAuXG4gKlxuICogX3htbGRvbSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgc3BlYyBpbiB0aGF0IGl0IGFsbG93cyBhbiBgb3B0aW9uc2AgcGFyYW1ldGVyLFxuICogdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmVoYXZpb3IuX1xuICpcbiAqIEBwYXJhbSB7RE9NUGFyc2VyT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAY29uc3RydWN0b3JcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01QYXJzZXJcbiAqIEBzZWUgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZHluYW1pYy1tYXJrdXAtaW5zZXJ0aW9uLmh0bWwjZG9tLXBhcnNpbmctYW5kLXNlcmlhbGl6YXRpb25cbiAqL1xuZnVuY3Rpb24gRE9NUGFyc2VyKG9wdGlvbnMpe1xuXHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8e2xvY2F0b3I6e319O1xufVxuXG5ET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uKHNvdXJjZSxtaW1lVHlwZSl7XG5cdHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHR2YXIgc2F4ID0gIG5ldyBYTUxSZWFkZXIoKTtcblx0dmFyIGRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgbmV3IERPTUhhbmRsZXIoKTsvL2NvbnRlbnRIYW5kbGVyIGFuZCBMZXhpY2FsSGFuZGxlclxuXHR2YXIgZXJyb3JIYW5kbGVyID0gb3B0aW9ucy5lcnJvckhhbmRsZXI7XG5cdHZhciBsb2NhdG9yID0gb3B0aW9ucy5sb2NhdG9yO1xuXHR2YXIgZGVmYXVsdE5TTWFwID0gb3B0aW9ucy54bWxuc3x8e307XG5cdHZhciBpc0hUTUwgPSAvXFwveD9odG1sPyQvLnRlc3QobWltZVR5cGUpOy8vbWltZVR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodG1sJykgPiAtMTtcbiAgXHR2YXIgZW50aXR5TWFwID0gaXNIVE1MID8gZW50aXRpZXMuSFRNTF9FTlRJVElFUyA6IGVudGl0aWVzLlhNTF9FTlRJVElFUztcblx0aWYobG9jYXRvcil7XG5cdFx0ZG9tQnVpbGRlci5zZXREb2N1bWVudExvY2F0b3IobG9jYXRvcilcblx0fVxuXG5cdHNheC5lcnJvckhhbmRsZXIgPSBidWlsZEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIsZG9tQnVpbGRlcixsb2NhdG9yKTtcblx0c2F4LmRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgZG9tQnVpbGRlcjtcblx0aWYoaXNIVE1MKXtcblx0XHRkZWZhdWx0TlNNYXBbJyddID0gTkFNRVNQQUNFLkhUTUw7XG5cdH1cblx0ZGVmYXVsdE5TTWFwLnhtbCA9IGRlZmF1bHROU01hcC54bWwgfHwgTkFNRVNQQUNFLlhNTDtcblx0dmFyIG5vcm1hbGl6ZSA9IG9wdGlvbnMubm9ybWFsaXplTGluZUVuZGluZ3MgfHwgbm9ybWFsaXplTGluZUVuZGluZ3M7XG5cdGlmIChzb3VyY2UgJiYgdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcblx0XHRzYXgucGFyc2UoXG5cdFx0XHRub3JtYWxpemUoc291cmNlKSxcblx0XHRcdGRlZmF1bHROU01hcCxcblx0XHRcdGVudGl0eU1hcFxuXHRcdClcblx0fSBlbHNlIHtcblx0XHRzYXguZXJyb3JIYW5kbGVyLmVycm9yKCdpbnZhbGlkIGRvYyBzb3VyY2UnKVxuXHR9XG5cdHJldHVybiBkb21CdWlsZGVyLmRvYztcbn1cbmZ1bmN0aW9uIGJ1aWxkRXJyb3JIYW5kbGVyKGVycm9ySW1wbCxkb21CdWlsZGVyLGxvY2F0b3Ipe1xuXHRpZighZXJyb3JJbXBsKXtcblx0XHRpZihkb21CdWlsZGVyIGluc3RhbmNlb2YgRE9NSGFuZGxlcil7XG5cdFx0XHRyZXR1cm4gZG9tQnVpbGRlcjtcblx0XHR9XG5cdFx0ZXJyb3JJbXBsID0gZG9tQnVpbGRlciA7XG5cdH1cblx0dmFyIGVycm9ySGFuZGxlciA9IHt9XG5cdHZhciBpc0NhbGxiYWNrID0gZXJyb3JJbXBsIGluc3RhbmNlb2YgRnVuY3Rpb247XG5cdGxvY2F0b3IgPSBsb2NhdG9yfHx7fVxuXHRmdW5jdGlvbiBidWlsZChrZXkpe1xuXHRcdHZhciBmbiA9IGVycm9ySW1wbFtrZXldO1xuXHRcdGlmKCFmbiAmJiBpc0NhbGxiYWNrKXtcblx0XHRcdGZuID0gZXJyb3JJbXBsLmxlbmd0aCA9PSAyP2Z1bmN0aW9uKG1zZyl7ZXJyb3JJbXBsKGtleSxtc2cpfTplcnJvckltcGw7XG5cdFx0fVxuXHRcdGVycm9ySGFuZGxlcltrZXldID0gZm4gJiYgZnVuY3Rpb24obXNnKXtcblx0XHRcdGZuKCdbeG1sZG9tICcra2V5KyddXFx0Jyttc2crX2xvY2F0b3IobG9jYXRvcikpO1xuXHRcdH18fGZ1bmN0aW9uKCl7fTtcblx0fVxuXHRidWlsZCgnd2FybmluZycpO1xuXHRidWlsZCgnZXJyb3InKTtcblx0YnVpbGQoJ2ZhdGFsRXJyb3InKTtcblx0cmV0dXJuIGVycm9ySGFuZGxlcjtcbn1cblxuLy9jb25zb2xlLmxvZygnI1xcblxcblxcblxcblxcblxcblxcbiMjIyMnKVxuLyoqXG4gKiArQ29udGVudEhhbmRsZXIrRXJyb3JIYW5kbGVyXG4gKiArTGV4aWNhbEhhbmRsZXIrRW50aXR5UmVzb2x2ZXIyXG4gKiAtRGVjbEhhbmRsZXItRFRESGFuZGxlclxuICpcbiAqIERlZmF1bHRIYW5kbGVyOkVudGl0eVJlc29sdmVyLCBEVERIYW5kbGVyLCBDb250ZW50SGFuZGxlciwgRXJyb3JIYW5kbGVyXG4gKiBEZWZhdWx0SGFuZGxlcjI6RGVmYXVsdEhhbmRsZXIsTGV4aWNhbEhhbmRsZXIsIERlY2xIYW5kbGVyLCBFbnRpdHlSZXNvbHZlcjJcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2hlbHBlcnMvRGVmYXVsdEhhbmRsZXIuaHRtbFxuICovXG5mdW5jdGlvbiBET01IYW5kbGVyKCkge1xuICAgIHRoaXMuY2RhdGEgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIHBvc2l0aW9uKGxvY2F0b3Isbm9kZSl7XG5cdG5vZGUubGluZU51bWJlciA9IGxvY2F0b3IubGluZU51bWJlcjtcblx0bm9kZS5jb2x1bW5OdW1iZXIgPSBsb2NhdG9yLmNvbHVtbk51bWJlcjtcbn1cbi8qKlxuICogQHNlZSBvcmcueG1sLnNheC5Db250ZW50SGFuZGxlciNzdGFydERvY3VtZW50XG4gKiBAbGluayBodHRwOi8vd3d3LnNheHByb2plY3Qub3JnL2FwaWRvYy9vcmcveG1sL3NheC9Db250ZW50SGFuZGxlci5odG1sXG4gKi9cbkRPTUhhbmRsZXIucHJvdG90eXBlID0ge1xuXHRzdGFydERvY3VtZW50IDogZnVuY3Rpb24oKSB7XG4gICAgXHR0aGlzLmRvYyA9IG5ldyBET01JbXBsZW1lbnRhdGlvbigpLmNyZWF0ZURvY3VtZW50KG51bGwsIG51bGwsIG51bGwpO1xuICAgIFx0aWYgKHRoaXMubG9jYXRvcikge1xuICAgICAgICBcdHRoaXMuZG9jLmRvY3VtZW50VVJJID0gdGhpcy5sb2NhdG9yLnN5c3RlbUlkO1xuICAgIFx0fVxuXHR9LFxuXHRzdGFydEVsZW1lbnQ6ZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHFOYW1lLCBhdHRycykge1xuXHRcdHZhciBkb2MgPSB0aGlzLmRvYztcblx0ICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxTmFtZXx8bG9jYWxOYW1lKTtcblx0ICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG5cdCAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGVsKTtcblx0ICAgIHRoaXMuY3VycmVudEVsZW1lbnQgPSBlbDtcblxuXHRcdHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsZWwpXG5cdCAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIHZhciBuYW1lc3BhY2VVUkkgPSBhdHRycy5nZXRVUkkoaSk7XG5cdCAgICAgICAgdmFyIHZhbHVlID0gYXR0cnMuZ2V0VmFsdWUoaSk7XG5cdCAgICAgICAgdmFyIHFOYW1lID0gYXR0cnMuZ2V0UU5hbWUoaSk7XG5cdFx0XHR2YXIgYXR0ciA9IGRvYy5jcmVhdGVBdHRyaWJ1dGVOUyhuYW1lc3BhY2VVUkksIHFOYW1lKTtcblx0XHRcdHRoaXMubG9jYXRvciAmJnBvc2l0aW9uKGF0dHJzLmdldExvY2F0b3IoaSksYXR0cik7XG5cdFx0XHRhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSB2YWx1ZTtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZU5vZGUoYXR0cilcblx0ICAgIH1cblx0fSxcblx0ZW5kRWxlbWVudDpmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudEVsZW1lbnRcblx0XHR2YXIgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZTtcblx0XHR0aGlzLmN1cnJlbnRFbGVtZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuXHR9LFxuXHRzdGFydFByZWZpeE1hcHBpbmc6ZnVuY3Rpb24ocHJlZml4LCB1cmkpIHtcblx0fSxcblx0ZW5kUHJlZml4TWFwcGluZzpmdW5jdGlvbihwcmVmaXgpIHtcblx0fSxcblx0cHJvY2Vzc2luZ0luc3RydWN0aW9uOmZ1bmN0aW9uKHRhcmdldCwgZGF0YSkge1xuXHQgICAgdmFyIGlucyA9IHRoaXMuZG9jLmNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpO1xuXHQgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixpbnMpXG5cdCAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGlucyk7XG5cdH0sXG5cdGlnbm9yYWJsZVdoaXRlc3BhY2U6ZnVuY3Rpb24oY2gsIHN0YXJ0LCBsZW5ndGgpIHtcblx0fSxcblx0Y2hhcmFjdGVyczpmdW5jdGlvbihjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuXHRcdGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsYXJndW1lbnRzKVxuXHRcdC8vY29uc29sZS5sb2coY2hhcnMpXG5cdFx0aWYoY2hhcnMpe1xuXHRcdFx0aWYgKHRoaXMuY2RhdGEpIHtcblx0XHRcdFx0dmFyIGNoYXJOb2RlID0gdGhpcy5kb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKGNoYXJzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZVRleHROb2RlKGNoYXJzKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuY3VycmVudEVsZW1lbnQpe1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoYXJOb2RlKTtcblx0XHRcdH1lbHNlIGlmKC9eXFxzKiQvLnRlc3QoY2hhcnMpKXtcblx0XHRcdFx0dGhpcy5kb2MuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuXHRcdFx0XHQvL3Byb2Nlc3MgeG1sXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGNoYXJOb2RlKVxuXHRcdH1cblx0fSxcblx0c2tpcHBlZEVudGl0eTpmdW5jdGlvbihuYW1lKSB7XG5cdH0sXG5cdGVuZERvY3VtZW50OmZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZG9jLm5vcm1hbGl6ZSgpO1xuXHR9LFxuXHRzZXREb2N1bWVudExvY2F0b3I6ZnVuY3Rpb24gKGxvY2F0b3IpIHtcblx0ICAgIGlmKHRoaXMubG9jYXRvciA9IGxvY2F0b3Ipey8vICYmICEoJ2xpbmVOdW1iZXInIGluIGxvY2F0b3IpKXtcblx0ICAgIFx0bG9jYXRvci5saW5lTnVtYmVyID0gMDtcblx0ICAgIH1cblx0fSxcblx0Ly9MZXhpY2FsSGFuZGxlclxuXHRjb21tZW50OmZ1bmN0aW9uKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG5cdFx0Y2hhcnMgPSBfdG9TdHJpbmcuYXBwbHkodGhpcyxhcmd1bWVudHMpXG5cdCAgICB2YXIgY29tbSA9IHRoaXMuZG9jLmNyZWF0ZUNvbW1lbnQoY2hhcnMpO1xuXHQgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvcixjb21tKVxuXHQgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBjb21tKTtcblx0fSxcblxuXHRzdGFydENEQVRBOmZ1bmN0aW9uKCkge1xuXHQgICAgLy91c2VkIGluIGNoYXJhY3RlcnMoKSBtZXRob2RzXG5cdCAgICB0aGlzLmNkYXRhID0gdHJ1ZTtcblx0fSxcblx0ZW5kQ0RBVEE6ZnVuY3Rpb24oKSB7XG5cdCAgICB0aGlzLmNkYXRhID0gZmFsc2U7XG5cdH0sXG5cblx0c3RhcnREVEQ6ZnVuY3Rpb24obmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG5cdFx0dmFyIGltcGwgPSB0aGlzLmRvYy5pbXBsZW1lbnRhdGlvbjtcblx0ICAgIGlmIChpbXBsICYmIGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKSB7XG5cdCAgICAgICAgdmFyIGR0ID0gaW1wbC5jcmVhdGVEb2N1bWVudFR5cGUobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKTtcblx0ICAgICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLGR0KVxuXHQgICAgICAgIGFwcGVuZEVsZW1lbnQodGhpcywgZHQpO1xuXHRcdFx0XHRcdHRoaXMuZG9jLmRvY3R5cGUgPSBkdDtcblx0ICAgIH1cblx0fSxcblx0LyoqXG5cdCAqIEBzZWUgb3JnLnhtbC5zYXguRXJyb3JIYW5kbGVyXG5cdCAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L0Vycm9ySGFuZGxlci5odG1sXG5cdCAqL1xuXHR3YXJuaW5nOmZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Y29uc29sZS53YXJuKCdbeG1sZG9tIHdhcm5pbmddXFx0JytlcnJvcixfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcblx0fSxcblx0ZXJyb3I6ZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCdbeG1sZG9tIGVycm9yXVxcdCcrZXJyb3IsX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG5cdH0sXG5cdGZhdGFsRXJyb3I6ZnVuY3Rpb24oZXJyb3IpIHtcblx0XHR0aHJvdyBuZXcgUGFyc2VFcnJvcihlcnJvciwgdGhpcy5sb2NhdG9yKTtcblx0fVxufVxuZnVuY3Rpb24gX2xvY2F0b3IobCl7XG5cdGlmKGwpe1xuXHRcdHJldHVybiAnXFxuQCcrKGwuc3lzdGVtSWQgfHwnJykrJyNbbGluZTonK2wubGluZU51bWJlcisnLGNvbDonK2wuY29sdW1uTnVtYmVyKyddJ1xuXHR9XG59XG5mdW5jdGlvbiBfdG9TdHJpbmcoY2hhcnMsc3RhcnQsbGVuZ3RoKXtcblx0aWYodHlwZW9mIGNoYXJzID09ICdzdHJpbmcnKXtcblx0XHRyZXR1cm4gY2hhcnMuc3Vic3RyKHN0YXJ0LGxlbmd0aClcblx0fWVsc2V7Ly9qYXZhIHNheCBjb25uZWN0IHdpZHRoIHhtbGRvbSBvbiByaGlubyh3aGF0IGFib3V0OiBcIj8gJiYgIShjaGFycyBpbnN0YW5jZW9mIFN0cmluZylcIilcblx0XHRpZihjaGFycy5sZW5ndGggPj0gc3RhcnQrbGVuZ3RoIHx8IHN0YXJ0KXtcblx0XHRcdHJldHVybiBuZXcgamF2YS5sYW5nLlN0cmluZyhjaGFycyxzdGFydCxsZW5ndGgpKycnO1xuXHRcdH1cblx0XHRyZXR1cm4gY2hhcnM7XG5cdH1cbn1cblxuLypcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L2V4dC9MZXhpY2FsSGFuZGxlci5odG1sXG4gKiB1c2VkIG1ldGhvZCBvZiBvcmcueG1sLnNheC5leHQuTGV4aWNhbEhhbmRsZXI6XG4gKiAgI2NvbW1lbnQoY2hhcnMsIHN0YXJ0LCBsZW5ndGgpXG4gKiAgI3N0YXJ0Q0RBVEEoKVxuICogICNlbmRDREFUQSgpXG4gKiAgI3N0YXJ0RFREKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZClcbiAqXG4gKlxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguZXh0LkxleGljYWxIYW5kbGVyOlxuICogICNlbmREVEQoKVxuICogICNzdGFydEVudGl0eShuYW1lKVxuICogICNlbmRFbnRpdHkobmFtZSlcbiAqXG4gKlxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvZXh0L0RlY2xIYW5kbGVyLmh0bWxcbiAqIElHTk9SRUQgbWV0aG9kIG9mIG9yZy54bWwuc2F4LmV4dC5EZWNsSGFuZGxlclxuICogXHQjYXR0cmlidXRlRGVjbChlTmFtZSwgYU5hbWUsIHR5cGUsIG1vZGUsIHZhbHVlKVxuICogICNlbGVtZW50RGVjbChuYW1lLCBtb2RlbClcbiAqICAjZXh0ZXJuYWxFbnRpdHlEZWNsKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZClcbiAqICAjaW50ZXJuYWxFbnRpdHlEZWNsKG5hbWUsIHZhbHVlKVxuICogQGxpbmsgaHR0cDovL3d3dy5zYXhwcm9qZWN0Lm9yZy9hcGlkb2Mvb3JnL3htbC9zYXgvZXh0L0VudGl0eVJlc29sdmVyMi5odG1sXG4gKiBJR05PUkVEIG1ldGhvZCBvZiBvcmcueG1sLnNheC5FbnRpdHlSZXNvbHZlcjJcbiAqICAjcmVzb2x2ZUVudGl0eShTdHJpbmcgbmFtZSxTdHJpbmcgcHVibGljSWQsU3RyaW5nIGJhc2VVUkksU3RyaW5nIHN5c3RlbUlkKVxuICogICNyZXNvbHZlRW50aXR5KHB1YmxpY0lkLCBzeXN0ZW1JZClcbiAqICAjZ2V0RXh0ZXJuYWxTdWJzZXQobmFtZSwgYmFzZVVSSSlcbiAqIEBsaW5rIGh0dHA6Ly93d3cuc2F4cHJvamVjdC5vcmcvYXBpZG9jL29yZy94bWwvc2F4L0RUREhhbmRsZXIuaHRtbFxuICogSUdOT1JFRCBtZXRob2Qgb2Ygb3JnLnhtbC5zYXguRFRESGFuZGxlclxuICogICNub3RhdGlvbkRlY2wobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7fTtcbiAqICAjdW5wYXJzZWRFbnRpdHlEZWNsKG5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCwgbm90YXRpb25OYW1lKSB7fTtcbiAqL1xuXCJlbmREVEQsc3RhcnRFbnRpdHksZW5kRW50aXR5LGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxyZXNvbHZlRW50aXR5LGdldEV4dGVybmFsU3Vic2V0LG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2xcIi5yZXBsYWNlKC9cXHcrL2csZnVuY3Rpb24oa2V5KXtcblx0RE9NSGFuZGxlci5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9XG59KVxuXG4vKiBQcml2YXRlIHN0YXRpYyBoZWxwZXJzIHRyZWF0ZWQgYmVsb3cgYXMgcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzLCBzbyBkb24ndCBuZWVkIHRvIGFkZCB0aGVzZSB0byB0aGUgcHVibGljIEFQSTsgd2UgbWlnaHQgdXNlIGEgUmVsYXRvciB0byBhbHNvIGdldCByaWQgb2Ygbm9uLXN0YW5kYXJkIHB1YmxpYyBwcm9wZXJ0aWVzICovXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50IChoYW5kZXIsbm9kZSkge1xuICAgIGlmICghaGFuZGVyLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgIGhhbmRlci5kb2MuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGVyLmN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbn0vL2FwcGVuZENoaWxkIGFuZCBzZXRBdHRyaWJ1dGVOUyBhcmUgcHJlZm9ybWFuY2Uga2V5XG5cbmV4cG9ydHMuX19ET01IYW5kbGVyID0gRE9NSGFuZGxlcjtcbmV4cG9ydHMubm9ybWFsaXplTGluZUVuZGluZ3MgPSBub3JtYWxpemVMaW5lRW5kaW5ncztcbmV4cG9ydHMuRE9NUGFyc2VyID0gRE9NUGFyc2VyO1xuIiwgInZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpXG5leHBvcnRzLkRPTUltcGxlbWVudGF0aW9uID0gZG9tLkRPTUltcGxlbWVudGF0aW9uXG5leHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSBkb20uWE1MU2VyaWFsaXplclxuZXhwb3J0cy5ET01QYXJzZXIgPSByZXF1aXJlKCcuL2RvbS1wYXJzZXInKS5ET01QYXJzZXJcbiIsICIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgeyBET01QYXJzZXIgfSA9IHJlcXVpcmUoJ0B4bWxkb20veG1sZG9tJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG52YXIgVEVYVF9OT0RFID0gMztcbnZhciBDREFUQV9OT0RFID0gNDtcbnZhciBDT01NRU5UX05PREUgPSA4O1xuXG5cbi8qKlxuICogV2UgaWdub3JlIHJhdyB0ZXh0ICh1c3VhbGx5IHdoaXRlc3BhY2UpLCA8IS0tIHhtbCBjb21tZW50cyAtLT4sXG4gKiBhbmQgcmF3IENEQVRBIG5vZGVzLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzaG91bGRJZ25vcmVOb2RlIChub2RlKSB7XG4gIHJldHVybiBub2RlLm5vZGVUeXBlID09PSBURVhUX05PREVcbiAgICB8fCBub2RlLm5vZGVUeXBlID09PSBDT01NRU5UX05PREVcbiAgICB8fCBub2RlLm5vZGVUeXBlID09PSBDREFUQV9OT0RFO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBub2RlIGlzIGVtcHR5LiBTb21lIHBsaXN0IGZpbGUgaGFzIHN1Y2ggbm9kZTpcbiAqIDxrZXkgLz5cbiAqIHRoaXMgbm9kZSBzaG91ZCBiZSBpZ25vcmVkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1Rvb1RhbGxOYXRlL3BsaXN0LmpzL2lzc3Vlcy82NlxuICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0VtcHR5Tm9kZShub2RlKXtcbiAgaWYoIW5vZGUuY2hpbGROb2RlcyB8fCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudCh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlcyBhIFBsaXN0IFhNTCBzdHJpbmcuIFJldHVybnMgYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB4bWwgLSB0aGUgWE1MIFN0cmluZyB0byBkZWNvZGVcbiAqIEByZXR1cm5zIHtNaXhlZH0gdGhlIGRlY29kZWQgdmFsdWUgZnJvbSB0aGUgUGxpc3QgWE1MXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlICh4bWwpIHtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoeG1sKTtcbiAgaW52YXJpYW50KFxuICAgIGRvYy5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgPT09ICdwbGlzdCcsXG4gICAgJ21hbGZvcm1lZCBkb2N1bWVudC4gRmlyc3QgZWxlbWVudCBzaG91bGQgYmUgPHBsaXN0PidcbiAgKTtcbiAgdmFyIHBsaXN0ID0gcGFyc2VQbGlzdFhNTChkb2MuZG9jdW1lbnRFbGVtZW50KTtcblxuICAvLyB0aGUgcm9vdCA8cGxpc3Q+IG5vZGUgZ2V0cyBpbnRlcnByZXRlZCBhcyBhbiBBcnJheSxcbiAgLy8gc28gcHVsbCBvdXQgdGhlIGlubmVyIGRhdGEgZmlyc3RcbiAgaWYgKHBsaXN0Lmxlbmd0aCA9PSAxKSBwbGlzdCA9IHBsaXN0WzBdO1xuXG4gIHJldHVybiBwbGlzdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIFhNTCBiYXNlZCBwbGlzdCBkb2N1bWVudCBpbnRvIGEgSlNPTiByZXByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0geG1sX25vZGUgLSBjdXJyZW50IFhNTCBub2RlIGluIHRoZSBwbGlzdFxuICogQHJldHVybnMge01peGVkfSBidWlsdCB1cCBKU09OIG9iamVjdFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VQbGlzdFhNTCAobm9kZSkge1xuICB2YXIgaSwgbmV3X29iaiwga2V5LCB2YWwsIG5ld19hcnIsIHJlcywgY291bnRlciwgdHlwZTtcblxuICBpZiAoIW5vZGUpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdwbGlzdCcpIHtcbiAgICBuZXdfYXJyID0gW107XG4gICAgaWYgKGlzRW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbmV3X2FycjtcbiAgICB9XG4gICAgZm9yIChpPTA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghc2hvdWxkSWdub3JlTm9kZShub2RlLmNoaWxkTm9kZXNbaV0pKSB7XG4gICAgICAgIG5ld19hcnIucHVzaCggcGFyc2VQbGlzdFhNTChub2RlLmNoaWxkTm9kZXNbaV0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld19hcnI7XG4gIH0gZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ2RpY3QnKSB7XG4gICAgbmV3X29iaiA9IHt9O1xuICAgIGtleSA9IG51bGw7XG4gICAgY291bnRlciA9IDA7XG4gICAgaWYgKGlzRW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbmV3X29iajtcbiAgICB9XG4gICAgZm9yIChpPTA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzaG91bGRJZ25vcmVOb2RlKG5vZGUuY2hpbGROb2Rlc1tpXSkpIGNvbnRpbnVlO1xuICAgICAgaWYgKGNvdW50ZXIgJSAyID09PSAwKSB7XG4gICAgICAgIGludmFyaWFudChcbiAgICAgICAgICBub2RlLmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUgPT09ICdrZXknLFxuICAgICAgICAgICdNaXNzaW5nIGtleSB3aGlsZSBwYXJzaW5nIDxkaWN0Lz4uJ1xuICAgICAgICApO1xuICAgICAgICBrZXkgPSBwYXJzZVBsaXN0WE1MKG5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnZhcmlhbnQoXG4gICAgICAgICAgbm9kZS5jaGlsZE5vZGVzW2ldLm5vZGVOYW1lICE9PSAna2V5JyxcbiAgICAgICAgICAnVW5leHBlY3RlZCBrZXkgXCInXG4gICAgICAgICAgICArIHBhcnNlUGxpc3RYTUwobm9kZS5jaGlsZE5vZGVzW2ldKVxuICAgICAgICAgICAgKyAnXCIgd2hpbGUgcGFyc2luZyA8ZGljdC8+LidcbiAgICAgICAgKTtcbiAgICAgICAgbmV3X29ialtrZXldID0gcGFyc2VQbGlzdFhNTChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgICAgY291bnRlciArPSAxO1xuICAgIH1cbiAgICBpZiAoY291bnRlciAlIDIgPT09IDEpIHtcbiAgICAgIG5ld19vYmpba2V5XSA9ICcnO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3X29iajtcblxuICB9IGVsc2UgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdhcnJheScpIHtcbiAgICBuZXdfYXJyID0gW107XG4gICAgaWYgKGlzRW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbmV3X2FycjtcbiAgICB9XG4gICAgZm9yIChpPTA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghc2hvdWxkSWdub3JlTm9kZShub2RlLmNoaWxkTm9kZXNbaV0pKSB7XG4gICAgICAgIHJlcyA9IHBhcnNlUGxpc3RYTUwobm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgaWYgKG51bGwgIT0gcmVzKSBuZXdfYXJyLnB1c2gocmVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld19hcnI7XG5cbiAgfSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09PSAnI3RleHQnKSB7XG4gICAgLy8gVE9ETzogd2hhdCBzaG91bGQgd2UgZG8gd2l0aCB0ZXh0IHR5cGVzPyAoQ0RBVEEgc2VjdGlvbnMpXG5cbiAgfSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09PSAna2V5Jykge1xuICAgIGlmIChpc0VtcHR5Tm9kZShub2RlKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGludmFyaWFudChcbiAgICAgIG5vZGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgIT09ICdfX3Byb3RvX18nLFxuICAgICAgJ19fcHJvdG9fXyBrZXlzIGNhbiBsZWFkIHRvIHByb3RvdHlwZSBwb2xsdXRpb24uIE1vcmUgZGV0YWlscyBvbiBDVkUtMjAyMi0yMjkxMidcbiAgICApO1xuXG4gICAgcmV0dXJuIG5vZGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gIH0gZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXMgPSAnJztcbiAgICBpZiAoaXNFbXB0eU5vZGUobm9kZSkpIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGZvciAoaT0wOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdHlwZSA9IG5vZGUuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZTtcbiAgICAgIGlmICh0eXBlID09PSBURVhUX05PREUgfHwgdHlwZSA9PT0gQ0RBVEFfTk9ERSkge1xuICAgICAgICByZXMgKz0gbm9kZS5jaGlsZE5vZGVzW2ldLm5vZGVWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9IGVsc2UgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdpbnRlZ2VyJykge1xuICAgIGludmFyaWFudChcbiAgICAgICFpc0VtcHR5Tm9kZShub2RlKSxcbiAgICAgICdDYW5ub3QgcGFyc2UgXCJcIiBhcyBpbnRlZ2VyLidcbiAgICApO1xuICAgIHJldHVybiBwYXJzZUludChub2RlLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlLCAxMCk7XG5cbiAgfSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09PSAncmVhbCcpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICAhaXNFbXB0eU5vZGUobm9kZSksXG4gICAgICAnQ2Fubm90IHBhcnNlIFwiXCIgYXMgcmVhbC4nXG4gICAgKTtcbiAgICByZXMgPSAnJztcbiAgICBmb3IgKGk9MDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG5vZGUuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFKSB7XG4gICAgICAgIHJlcyArPSBub2RlLmNoaWxkTm9kZXNbaV0ubm9kZVZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChyZXMpO1xuXG4gIH0gZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ2RhdGEnKSB7XG4gICAgcmVzID0gJyc7XG4gICAgaWYgKGlzRW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20ocmVzLCAnYmFzZTY0Jyk7XG4gICAgfVxuICAgIGZvciAoaT0wOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobm9kZS5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlID09PSBURVhUX05PREUpIHtcbiAgICAgICAgcmVzICs9IG5vZGUuY2hpbGROb2Rlc1tpXS5ub2RlVmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBCdWZmZXIuZnJvbShyZXMsICdiYXNlNjQnKTtcblxuICB9IGVsc2UgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdkYXRlJykge1xuICAgIGludmFyaWFudChcbiAgICAgICFpc0VtcHR5Tm9kZShub2RlKSxcbiAgICAgICdDYW5ub3QgcGFyc2UgXCJcIiBhcyBEYXRlLidcbiAgICApXG4gICAgcmV0dXJuIG5ldyBEYXRlKG5vZGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUpO1xuXG4gIH0gZWxzZSBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSBlbHNlIGlmIChub2RlLm5vZGVOYW1lID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBMSVNUIHRhZyAnICsgbm9kZS5ub2RlTmFtZSk7XG4gIH1cbn1cbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIC8vIENvcGllcyBhbGwgZW51bWVyYWJsZSBvd24gcHJvcGVydGllcyBmcm9tIGBzb3VyY2VzYCB0byBgdGFyZ2V0YFxuICB2YXIgYXNzaWduLCBnZXRWYWx1ZSwgaXNBcnJheSwgaXNFbXB0eSwgaXNGdW5jdGlvbiwgaXNPYmplY3QsIGlzUGxhaW5PYmplY3QsXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIGFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgIHZhciBpLCBrZXksIGxlbiwgc291cmNlO1xuICAgIGlmIChpc0Z1bmN0aW9uKE9iamVjdC5hc3NpZ24pKSB7XG4gICAgICBPYmplY3QuYXNzaWduLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgc291cmNlID0gc291cmNlc1tpXTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICAvLyBEZXRlcm1pbmVzIGlmIGB2YWxgIGlzIGEgRnVuY3Rpb24gb2JqZWN0XG4gIGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gISF2YWwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH07XG5cbiAgLy8gRGV0ZXJtaW5lcyBpZiBgdmFsYCBpcyBhbiBPYmplY3RcbiAgaXNPYmplY3QgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgcmVmO1xuICAgIHJldHVybiAhIXZhbCAmJiAoKHJlZiA9IHR5cGVvZiB2YWwpID09PSAnZnVuY3Rpb24nIHx8IHJlZiA9PT0gJ29iamVjdCcpO1xuICB9O1xuXG4gIC8vIERldGVybWluZXMgaWYgYHZhbGAgaXMgYW4gQXJyYXlcbiAgaXNBcnJheSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKEFycmF5LmlzQXJyYXkpKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuICB9O1xuXG4gIC8vIERldGVybWluZXMgaWYgYHZhbGAgaXMgYW4gZW1wdHkgQXJyYXkgb3IgYW4gT2JqZWN0IHdpdGggbm8gb3duIHByb3BlcnRpZXNcbiAgaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBrZXk7XG4gICAgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuICF2YWwubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiB2YWwpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwodmFsLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIERldGVybWluZXMgaWYgYHZhbGAgaXMgYSBwbGFpbiBPYmplY3RcbiAgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBjdG9yLCBwcm90bztcbiAgICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiAocHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKSkgJiYgKGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcikgJiYgKHR5cGVvZiBjdG9yID09PSAnZnVuY3Rpb24nKSAmJiAoY3RvciBpbnN0YW5jZW9mIGN0b3IpICYmIChGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjdG9yKSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoT2JqZWN0KSk7XG4gIH07XG5cbiAgLy8gR2V0cyB0aGUgcHJpbWl0aXZlIHZhbHVlIG9mIGFuIG9iamVjdFxuICBnZXRWYWx1ZSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9iai52YWx1ZU9mKSkge1xuICAgICAgcmV0dXJuIG9iai52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzLmFzc2lnbiA9IGFzc2lnbjtcblxuICBtb2R1bGUuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuICBtb2R1bGUuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG4gIG1vZHVsZS5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG4gIG1vZHVsZS5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuXG4gIG1vZHVsZS5leHBvcnRzLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0O1xuXG4gIG1vZHVsZS5leHBvcnRzLmdldFZhbHVlID0gZ2V0VmFsdWU7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICAvLyBJbXBsZW1lbnRzIHRoZSBET01JbXBsZW1lbnRhdGlvbiBpbnRlcmZhY2VcbiAgdmFyIFhNTERPTUltcGxlbWVudGF0aW9uO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRE9NSW1wbGVtZW50YXRpb24gPSBjbGFzcyBYTUxET01JbXBsZW1lbnRhdGlvbiB7XG4gICAgLy8gVGVzdHMgaWYgdGhlIERPTSBpbXBsZW1lbnRhdGlvbiBpbXBsZW1lbnRzIGEgc3BlY2lmaWMgZmVhdHVyZS5cblxuICAgIC8vIGBmZWF0dXJlYCBwYWNrYWdlIG5hbWUgb2YgdGhlIGZlYXR1cmUgdG8gdGVzdC4gSW4gTGV2ZWwgMSwgdGhlXG4gICAgLy8gICAgICAgICAgIGxlZ2FsIHZhbHVlcyBhcmUgXCJIVE1MXCIgYW5kIFwiWE1MXCIgKGNhc2UtaW5zZW5zaXRpdmUpLlxuICAgIC8vIGB2ZXJzaW9uYCB2ZXJzaW9uIG51bWJlciBvZiB0aGUgcGFja2FnZSBuYW1lIHRvIHRlc3QuIFxuICAgIC8vICAgICAgICAgICBJbiBMZXZlbCAxLCB0aGlzIGlzIHRoZSBzdHJpbmcgXCIxLjBcIi4gSWYgdGhlIHZlcnNpb24gaXMgXG4gICAgLy8gICAgICAgICAgIG5vdCBzcGVjaWZpZWQsIHN1cHBvcnRpbmcgYW55IHZlcnNpb24gb2YgdGhlIGZlYXR1cmUgd2lsbCBcbiAgICAvLyAgICAgICAgICAgY2F1c2UgdGhlIG1ldGhvZCB0byByZXR1cm4gdHJ1ZS5cbiAgICBoYXNGZWF0dXJlKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYSBuZXcgZG9jdW1lbnQgdHlwZSBkZWNsYXJhdGlvbi5cblxuICAgIC8vIGBxdWFsaWZpZWROYW1lYCBxdWFsaWZpZWQgbmFtZSBvZiB0aGUgZG9jdW1lbnQgdHlwZSB0byBiZSBjcmVhdGVkXG4gICAgLy8gYHB1YmxpY0lkYCBwdWJsaWMgaWRlbnRpZmllciBvZiB0aGUgZXh0ZXJuYWwgc3Vic2V0XG4gICAgLy8gYHN5c3RlbUlkYCBzeXN0ZW0gaWRlbnRpZmllciBvZiB0aGUgZXh0ZXJuYWwgc3Vic2V0XG4gICAgY3JlYXRlRG9jdW1lbnRUeXBlKHF1YWxpZmllZE5hbWUsIHB1YmxpY0lkLCBzeXN0ZW1JZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBhIG5ldyBkb2N1bWVudC5cblxuICAgIC8vIGBuYW1lc3BhY2VVUklgIG5hbWVzcGFjZSBVUkkgb2YgdGhlIGRvY3VtZW50IGVsZW1lbnQgdG8gY3JlYXRlXG4gICAgLy8gYHF1YWxpZmllZE5hbWVgIHRoZSBxdWFsaWZpZWQgbmFtZSBvZiB0aGUgZG9jdW1lbnQgdG8gYmUgY3JlYXRlZFxuICAgIC8vIGBkb2N0eXBlYCB0aGUgdHlwZSBvZiBkb2N1bWVudCB0byBiZSBjcmVhdGVkIG9yIG51bGxcbiAgICBjcmVhdGVEb2N1bWVudChuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIGRvY3R5cGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYSBuZXcgSFRNTCBkb2N1bWVudC5cblxuICAgIC8vIGB0aXRsZWAgZG9jdW1lbnQgdGl0bGVcbiAgICBjcmVhdGVIVE1MRG9jdW1lbnQodGl0bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYSBzcGVjaWFsaXplZCBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGUgc3BlY2lhbGl6ZWQgQVBJcyBcbiAgICAvLyBvZiB0aGUgc3BlY2lmaWVkIGZlYXR1cmUgYW5kIHZlcnNpb24uXG5cbiAgICAvLyBgZmVhdHVyZWAgbmFtZSBvZiB0aGUgZmVhdHVyZSByZXF1ZXN0ZWQuXG4gICAgLy8gYHZlcnNpb25gIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBmZWF0dXJlIHRvIHRlc3RcbiAgICBnZXRGZWF0dXJlKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cblxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi40LjFcbihmdW5jdGlvbigpIHtcbiAgLy8gUmVwcmVzZW50cyB0aGUgZXJyb3IgaGFuZGxlciBmb3IgRE9NIG9wZXJhdGlvbnNcbiAgdmFyIFhNTERPTUVycm9ySGFuZGxlcjtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTERPTUVycm9ySGFuZGxlciA9IGNsYXNzIFhNTERPTUVycm9ySGFuZGxlciB7XG4gICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTERPTUVycm9ySGFuZGxlcmBcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8vIENhbGxlZCBvbiB0aGUgZXJyb3IgaGFuZGxlciB3aGVuIGFuIGVycm9yIG9jY3Vycy5cblxuICAgIC8vIGBlcnJvcmAgdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBzdHJpbmdcbiAgICBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIC8vIFJlcHJlc2VudHMgYSBsaXN0IG9mIHN0cmluZyBlbnRyaWVzXG4gIHZhciBYTUxET01TdHJpbmdMaXN0O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRE9NU3RyaW5nTGlzdCA9IChmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBYTUxET01TdHJpbmdMaXN0IHtcbiAgICAgIC8vIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGBYTUxET01TdHJpbmdMaXN0YFxuICAgICAgLy8gVGhpcyBpcyBqdXN0IGEgd3JhcHBlciBhcm91bmQgYW4gb3JkaW5hcnlcbiAgICAgIC8vIEpTIGFycmF5LlxuXG4gICAgICAvLyBgYXJyYCB0aGUgYXJyYXkgb2Ygc3RyaW5nIHZhbHVlc1xuICAgICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMuYXJyID0gYXJyIHx8IFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5zIHRoZSBpbmRleHRoIGl0ZW0gaW4gdGhlIGNvbGxlY3Rpb24uXG5cbiAgICAgIC8vIGBpbmRleGAgaW5kZXggaW50byB0aGUgY29sbGVjdGlvblxuICAgICAgaXRlbShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJbaW5kZXhdIHx8IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFRlc3QgaWYgYSBzdHJpbmcgaXMgcGFydCBvZiB0aGlzIERPTVN0cmluZ0xpc3QuXG5cbiAgICAgIC8vIGBzdHJgIHRoZSBzdHJpbmcgdG8gbG9vayBmb3JcbiAgICAgIGNvbnRhaW5zKHN0cikge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnIuaW5kZXhPZihzdHIpICE9PSAtMTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc3RyaW5ncyBpbiB0aGUgbGlzdC5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRE9NU3RyaW5nTGlzdC5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnIubGVuZ3RoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFhNTERPTVN0cmluZ0xpc3Q7XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBYTUxET01Db25maWd1cmF0aW9uLCBYTUxET01FcnJvckhhbmRsZXIsIFhNTERPTVN0cmluZ0xpc3Q7XG5cbiAgWE1MRE9NRXJyb3JIYW5kbGVyID0gcmVxdWlyZSgnLi9YTUxET01FcnJvckhhbmRsZXInKTtcblxuICBYTUxET01TdHJpbmdMaXN0ID0gcmVxdWlyZSgnLi9YTUxET01TdHJpbmdMaXN0Jyk7XG5cbiAgLy8gSW1wbGVtZW50cyB0aGUgRE9NQ29uZmlndXJhdGlvbiBpbnRlcmZhY2VcbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxET01Db25maWd1cmF0aW9uID0gKGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzIFhNTERPTUNvbmZpZ3VyYXRpb24ge1xuICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBjbG9uZWRTZWxmO1xuICAgICAgICB0aGlzLmRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICAgICAgXCJjYW5vbmljYWwtZm9ybVwiOiBmYWxzZSxcbiAgICAgICAgICBcImNkYXRhLXNlY3Rpb25zXCI6IGZhbHNlLFxuICAgICAgICAgIFwiY29tbWVudHNcIjogZmFsc2UsXG4gICAgICAgICAgXCJkYXRhdHlwZS1ub3JtYWxpemF0aW9uXCI6IGZhbHNlLFxuICAgICAgICAgIFwiZWxlbWVudC1jb250ZW50LXdoaXRlc3BhY2VcIjogdHJ1ZSxcbiAgICAgICAgICBcImVudGl0aWVzXCI6IHRydWUsXG4gICAgICAgICAgXCJlcnJvci1oYW5kbGVyXCI6IG5ldyBYTUxET01FcnJvckhhbmRsZXIoKSxcbiAgICAgICAgICBcImluZm9zZXRcIjogdHJ1ZSxcbiAgICAgICAgICBcInZhbGlkYXRlLWlmLXNjaGVtYVwiOiBmYWxzZSxcbiAgICAgICAgICBcIm5hbWVzcGFjZXNcIjogdHJ1ZSxcbiAgICAgICAgICBcIm5hbWVzcGFjZS1kZWNsYXJhdGlvbnNcIjogdHJ1ZSxcbiAgICAgICAgICBcIm5vcm1hbGl6ZS1jaGFyYWN0ZXJzXCI6IGZhbHNlLFxuICAgICAgICAgIFwic2NoZW1hLWxvY2F0aW9uXCI6ICcnLFxuICAgICAgICAgIFwic2NoZW1hLXR5cGVcIjogJycsXG4gICAgICAgICAgXCJzcGxpdC1jZGF0YS1zZWN0aW9uc1wiOiB0cnVlLFxuICAgICAgICAgIFwidmFsaWRhdGVcIjogZmFsc2UsXG4gICAgICAgICAgXCJ3ZWxsLWZvcm1lZFwiOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFyYW1zID0gY2xvbmVkU2VsZiA9IE9iamVjdC5jcmVhdGUodGhpcy5kZWZhdWx0UGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0cyB0aGUgdmFsdWUgb2YgYSBwYXJhbWV0ZXIuXG5cbiAgICAgIC8vIGBuYW1lYCBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAgICAgIGdldFBhcmFtZXRlcihuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVja3MgaWYgc2V0dGluZyBhIHBhcmFtZXRlciB0byBhIHNwZWNpZmljIHZhbHVlIGlzIHN1cHBvcnRlZC5cblxuICAgICAgLy8gYG5hbWVgIG5hbWUgb2YgdGhlIHBhcmFtZXRlclxuICAgICAgLy8gYHZhbHVlYCBwYXJhbWV0ZXIgdmFsdWVcbiAgICAgIGNhblNldFBhcmFtZXRlcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0cyB0aGUgdmFsdWUgb2YgYSBwYXJhbWV0ZXIuXG5cbiAgICAgIC8vIGBuYW1lYCBuYW1lIG9mIHRoZSBwYXJhbWV0ZXJcbiAgICAgIC8vIGB2YWx1ZWAgbmV3IHZhbHVlIG9yIG51bGwgaWYgdGhlIHVzZXIgd2lzaGVzIHRvIHVuc2V0IHRoZSBwYXJhbWV0ZXJcbiAgICAgIHNldFBhcmFtZXRlcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkZWxldGUgdGhpcy5wYXJhbXNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBsaXN0IG9mIHBhcmFtZXRlciBuYW1lc1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxET01Db25maWd1cmF0aW9uLnByb3RvdHlwZSwgJ3BhcmFtZXRlck5hbWVzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBYTUxET01TdHJpbmdMaXN0KE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdFBhcmFtcykpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFhNTERPTUNvbmZpZ3VyYXRpb247XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIEVsZW1lbnQ6IDEsXG4gICAgQXR0cmlidXRlOiAyLFxuICAgIFRleHQ6IDMsXG4gICAgQ0RhdGE6IDQsXG4gICAgRW50aXR5UmVmZXJlbmNlOiA1LFxuICAgIEVudGl0eURlY2xhcmF0aW9uOiA2LFxuICAgIFByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcbiAgICBDb21tZW50OiA4LFxuICAgIERvY3VtZW50OiA5LFxuICAgIERvY1R5cGU6IDEwLFxuICAgIERvY3VtZW50RnJhZ21lbnQ6IDExLFxuICAgIE5vdGF0aW9uRGVjbGFyYXRpb246IDEyLFxuICAgIC8vIE51bWVyaWMgY29kZXMgdXAgdG8gMjAwIGFyZSByZXNlcnZlZCB0byBXM0MgZm9yIHBvc3NpYmxlIGZ1dHVyZSB1c2UuXG4gICAgLy8gRm9sbG93aW5nIGFyZSB0eXBlcyBpbnRlcm5hbCB0byB0aGlzIGxpYnJhcnk6XG4gICAgRGVjbGFyYXRpb246IDIwMSxcbiAgICBSYXc6IDIwMixcbiAgICBBdHRyaWJ1dGVEZWNsYXJhdGlvbjogMjAzLFxuICAgIEVsZW1lbnREZWNsYXJhdGlvbjogMjA0LFxuICAgIER1bW15OiAyMDVcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MQXR0cmlidXRlLCBYTUxOb2RlO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICAvLyBSZXByZXNlbnRzIGFuIGF0dHJpYnV0ZVxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTEF0dHJpYnV0ZSA9IChmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBYTUxBdHRyaWJ1dGUge1xuICAgICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTEF0dHJpYnV0ZWBcblxuICAgICAgLy8gYHBhcmVudGAgdGhlIHBhcmVudCBub2RlXG4gICAgICAvLyBgbmFtZWAgYXR0cmlidXRlIHRhcmdldFxuICAgICAgLy8gYHZhbHVlYCBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMucGFyZW50Lm9wdGlvbnM7XG4gICAgICAgICAgdGhpcy5zdHJpbmdpZnkgPSB0aGlzLnBhcmVudC5zdHJpbmdpZnk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYXR0cmlidXRlIG5hbWUuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuc3RyaW5naWZ5Lm5hbWUobmFtZSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5hdHRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkF0dHJpYnV0ZTtcbiAgICAgICAgLy8gRE9NIGxldmVsIDNcbiAgICAgICAgdGhpcy5pc0lkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZW1hVHlwZUluZm8gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZGVlcCBjbG9uZSBvZiBgdGhpc2BcbiAgICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udmVydHMgdGhlIFhNTCBmcmFnbWVudCB0byBzdHJpbmdcblxuICAgICAgLy8gYG9wdGlvbnMucHJldHR5YCBwcmV0dHkgcHJpbnRzIHRoZSByZXN1bHRcbiAgICAgIC8vIGBvcHRpb25zLmluZGVudGAgaW5kZW50YXRpb24gZm9yIHByZXR0eSBwcmludFxuICAgICAgLy8gYG9wdGlvbnMub2Zmc2V0YCBob3cgbWFueSBpbmRlbnRhdGlvbnMgdG8gYWRkIHRvIGV2ZXJ5IGxpbmUgZm9yIHByZXR0eSBwcmludFxuICAgICAgLy8gYG9wdGlvbnMubmV3bGluZWAgbmV3bGluZSBzZXF1ZW5jZSBmb3IgcHJldHR5IHByaW50XG4gICAgICB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud3JpdGVyLmF0dHJpYnV0ZSh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBcbiAgICAgIC8vIFJldHVybnMgZGVidWcgc3RyaW5nIGZvciB0aGlzIG5vZGVcbiAgICAgIGRlYnVnSW5mbyhuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lIHx8IHRoaXMubmFtZTtcbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBcInBhcmVudDogPFwiICsgdGhpcy5wYXJlbnQubmFtZSArIFwiPlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcImF0dHJpYnV0ZToge1wiICsgbmFtZSArIFwifSwgcGFyZW50OiA8XCIgKyB0aGlzLnBhcmVudC5uYW1lICsgXCI+XCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXNFcXVhbE5vZGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5uYW1lc3BhY2VVUkkgIT09IHRoaXMubmFtZXNwYWNlVVJJKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnByZWZpeCAhPT0gdGhpcy5wcmVmaXgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUubG9jYWxOYW1lICE9PSB0aGlzLmxvY2FsTmFtZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS52YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBET00gbGV2ZWwgMVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxBdHRyaWJ1dGUucHJvdG90eXBlLCAnbm9kZVR5cGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEF0dHJpYnV0ZS5wcm90b3R5cGUsICdvd25lckVsZW1lbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBET00gbGV2ZWwgM1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxBdHRyaWJ1dGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBET00gbGV2ZWwgNFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxBdHRyaWJ1dGUucHJvdG90eXBlLCAnbmFtZXNwYWNlVVJJJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEF0dHJpYnV0ZS5wcm90b3R5cGUsICdwcmVmaXgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MQXR0cmlidXRlLnByb3RvdHlwZSwgJ2xvY2FsTmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MQXR0cmlidXRlLnByb3RvdHlwZSwgJ3NwZWNpZmllZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFhNTEF0dHJpYnV0ZTtcblxuICB9KS5jYWxsKHRoaXMpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi40LjFcbihmdW5jdGlvbigpIHtcbiAgLy8gUmVwcmVzZW50cyBhIG1hcCBvZiBub2RlcyBhY2Nlc3NlZCBieSBhIHN0cmluZyBrZXlcbiAgdmFyIFhNTE5hbWVkTm9kZU1hcDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTE5hbWVkTm9kZU1hcCA9IChmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBYTUxOYW1lZE5vZGVNYXAge1xuICAgICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTE5hbWVkTm9kZU1hcGBcbiAgICAgIC8vIFRoaXMgaXMganVzdCBhIHdyYXBwZXIgYXJvdW5kIGFuIG9yZGluYXJ5XG4gICAgICAvLyBKUyBvYmplY3QuXG5cbiAgICAgIC8vIGBub2Rlc2AgdGhlIG9iamVjdCBjb250YWluaW5nIG5vZGVzLlxuICAgICAgY29uc3RydWN0b3Iobm9kZXMpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZGVlcCBjbG9uZSBvZiBgdGhpc2BcblxuICAgICAgY2xvbmUoKSB7XG4gICAgICAgIC8vIHRoaXMgY2xhc3Mgc2hvdWxkIG5vdCBiZSBjbG9uZWQgc2luY2UgaXQgd3JhcHNcbiAgICAgICAgLy8gYXJvdW5kIGEgZ2l2ZW4gb2JqZWN0LiBUaGUgY2FsbGluZyBmdW5jdGlvbiBzaG91bGQgY2hlY2tcbiAgICAgICAgLy8gd2hldGhlciB0aGUgd3JhcHBlZCBvYmplY3QgaXMgbnVsbCBhbmQgc3VwcGx5IGEgbmV3IG9iamVjdFxuICAgICAgICAvLyAoZnJvbSB0aGUgY2xvbmUpLlxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIERPTSBMZXZlbCAxXG4gICAgICBnZXROYW1lZEl0ZW0obmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlc1tuYW1lXTtcbiAgICAgIH1cblxuICAgICAgc2V0TmFtZWRJdGVtKG5vZGUpIHtcbiAgICAgICAgdmFyIG9sZE5vZGU7XG4gICAgICAgIG9sZE5vZGUgPSB0aGlzLm5vZGVzW25vZGUubm9kZU5hbWVdO1xuICAgICAgICB0aGlzLm5vZGVzW25vZGUubm9kZU5hbWVdID0gbm9kZTtcbiAgICAgICAgcmV0dXJuIG9sZE5vZGUgfHwgbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlTmFtZWRJdGVtKG5hbWUpIHtcbiAgICAgICAgdmFyIG9sZE5vZGU7XG4gICAgICAgIG9sZE5vZGUgPSB0aGlzLm5vZGVzW25hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5ub2Rlc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIG9sZE5vZGUgfHwgbnVsbDtcbiAgICAgIH1cblxuICAgICAgaXRlbShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlc1tPYmplY3Qua2V5cyh0aGlzLm5vZGVzKVtpbmRleF1dIHx8IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIERPTSBsZXZlbCAyIGZ1bmN0aW9ucyB0byBiZSBpbXBsZW1lbnRlZCBsYXRlclxuICAgICAgZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIHNldE5hbWVkSXRlbU5TKG5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZU5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgfVxuXG4gICAgfTtcblxuICAgIFxuICAgIC8vIERPTSBsZXZlbCAxXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5hbWVkTm9kZU1hcC5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5ub2RlcykubGVuZ3RoIHx8IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gWE1MTmFtZWROb2RlTWFwO1xuXG4gIH0pLmNhbGwodGhpcyk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTEF0dHJpYnV0ZSwgWE1MRWxlbWVudCwgWE1MTmFtZWROb2RlTWFwLCBYTUxOb2RlLCBnZXRWYWx1ZSwgaXNGdW5jdGlvbiwgaXNPYmplY3QsXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gICh7aXNPYmplY3QsIGlzRnVuY3Rpb24sIGdldFZhbHVlfSA9IHJlcXVpcmUoJy4vVXRpbGl0eScpKTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MQXR0cmlidXRlID0gcmVxdWlyZSgnLi9YTUxBdHRyaWJ1dGUnKTtcblxuICBYTUxOYW1lZE5vZGVNYXAgPSByZXF1aXJlKCcuL1hNTE5hbWVkTm9kZU1hcCcpO1xuXG4gIC8vIFJlcHJlc2VudHMgYW4gZWxlbWVudCBvZiB0aGUgWE1MIGRvY3VtZW50XG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRWxlbWVudCA9IChmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBYTUxFbGVtZW50IGV4dGVuZHMgWE1MTm9kZSB7XG4gICAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MRWxlbWVudGBcblxuICAgICAgLy8gYHBhcmVudGAgdGhlIHBhcmVudCBub2RlXG4gICAgICAvLyBgbmFtZWAgZWxlbWVudCBuYW1lXG4gICAgICAvLyBgYXR0cmlidXRlc2AgYW4gb2JqZWN0IGNvbnRhaW5pbmcgbmFtZS92YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzXG4gICAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBqLCBsZW4sIHJlZjtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZWxlbWVudCBuYW1lLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuc3RyaW5naWZ5Lm5hbWUobmFtZSk7XG4gICAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYXR0cmlicyA9IHt9O1xuICAgICAgICB0aGlzLnNjaGVtYVR5cGVJbmZvID0gbnVsbDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXR0cmlidXRlKGF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBwcm9wZXJ0aWVzIGlmIHRoaXMgaXMgdGhlIHJvb3Qgbm9kZVxuICAgICAgICBpZiAocGFyZW50LnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KSB7XG4gICAgICAgICAgdGhpcy5pc1Jvb3QgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZG9jdW1lbnRPYmplY3QgPSBwYXJlbnQ7XG4gICAgICAgICAgcGFyZW50LnJvb3RPYmplY3QgPSB0aGlzO1xuICAgICAgICAgIC8vIHNldCBkdGQgbmFtZVxuICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJlZiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgICBjaGlsZCA9IHJlZltqXTtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLkRvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYW5kIHJldHVybnMgYSBkZWVwIGNsb25lIG9mIGB0aGlzYFxuXG4gICAgICBjbG9uZSgpIHtcbiAgICAgICAgdmFyIGF0dCwgYXR0TmFtZSwgY2xvbmVkU2VsZiwgcmVmO1xuICAgICAgICBjbG9uZWRTZWxmID0gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICAgICAgLy8gcmVtb3ZlIGRvY3VtZW50IGVsZW1lbnRcbiAgICAgICAgaWYgKGNsb25lZFNlbGYuaXNSb290KSB7XG4gICAgICAgICAgY2xvbmVkU2VsZi5kb2N1bWVudE9iamVjdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xvbmUgYXR0cmlidXRlc1xuICAgICAgICBjbG9uZWRTZWxmLmF0dHJpYnMgPSB7fTtcbiAgICAgICAgcmVmID0gdGhpcy5hdHRyaWJzO1xuICAgICAgICBmb3IgKGF0dE5hbWUgaW4gcmVmKSB7XG4gICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmLCBhdHROYW1lKSkgY29udGludWU7XG4gICAgICAgICAgYXR0ID0gcmVmW2F0dE5hbWVdO1xuICAgICAgICAgIGNsb25lZFNlbGYuYXR0cmlic1thdHROYW1lXSA9IGF0dC5jbG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsb25lIGNoaWxkIG5vZGVzXG4gICAgICAgIGNsb25lZFNlbGYuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgdmFyIGNsb25lZENoaWxkO1xuICAgICAgICAgIGNsb25lZENoaWxkID0gY2hpbGQuY2xvbmUoKTtcbiAgICAgICAgICBjbG9uZWRDaGlsZC5wYXJlbnQgPSBjbG9uZWRTZWxmO1xuICAgICAgICAgIHJldHVybiBjbG9uZWRTZWxmLmNoaWxkcmVuLnB1c2goY2xvbmVkQ2hpbGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZFNlbGY7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZHMgb3IgbW9kaWZpZXMgYW4gYXR0cmlidXRlXG5cbiAgICAgIC8vIGBuYW1lYCBhdHRyaWJ1dGUgbmFtZVxuICAgICAgLy8gYHZhbHVlYCBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIGF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgYXR0TmFtZSwgYXR0VmFsdWU7XG4gICAgICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBuYW1lID0gZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7IC8vIGV4cGFuZCBpZiBvYmplY3RcbiAgICAgICAgICBmb3IgKGF0dE5hbWUgaW4gbmFtZSkge1xuICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwobmFtZSwgYXR0TmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgYXR0VmFsdWUgPSBuYW1lW2F0dE5hbWVdO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUoYXR0TmFtZSwgYXR0VmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5rZWVwTnVsbEF0dHJpYnV0ZXMgJiYgKHZhbHVlID09IG51bGwpKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnNbbmFtZV0gPSBuZXcgWE1MQXR0cmlidXRlKHRoaXMsIG5hbWUsIFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJzW25hbWVdID0gbmV3IFhNTEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmVzIGFuIGF0dHJpYnV0ZVxuXG4gICAgICAvLyBgbmFtZWAgYXR0cmlidXRlIG5hbWVcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgICAgIHZhciBhdHROYW1lLCBqLCBsZW47XG4gICAgICAgIC8vIEFsc28gZGVmaW5lZCBpbiBET00gbGV2ZWwgMVxuICAgICAgICAvLyByZW1vdmVBdHRyaWJ1dGUobmFtZSkgcmVtb3ZlcyBhbiBhdHRyaWJ1dGUgYnkgbmFtZS5cbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYXR0cmlidXRlIG5hbWUuIFwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IGdldFZhbHVlKG5hbWUpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkgeyAvLyBleHBhbmQgaWYgYXJyYXlcbiAgICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSBuYW1lLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBhdHROYW1lID0gbmFtZVtqXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmF0dHJpYnNbYXR0TmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmF0dHJpYnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnZlcnRzIHRoZSBYTUwgZnJhZ21lbnQgdG8gc3RyaW5nXG5cbiAgICAgIC8vIGBvcHRpb25zLnByZXR0eWAgcHJldHR5IHByaW50cyB0aGUgcmVzdWx0XG4gICAgICAvLyBgb3B0aW9ucy5pbmRlbnRgIGluZGVudGF0aW9uIGZvciBwcmV0dHkgcHJpbnRcbiAgICAgIC8vIGBvcHRpb25zLm9mZnNldGAgaG93IG1hbnkgaW5kZW50YXRpb25zIHRvIGFkZCB0byBldmVyeSBsaW5lIGZvciBwcmV0dHkgcHJpbnRcbiAgICAgIC8vIGBvcHRpb25zLm5ld2xpbmVgIG5ld2xpbmUgc2VxdWVuY2UgZm9yIHByZXR0eSBwcmludFxuICAgICAgLy8gYG9wdGlvbnMuYWxsb3dFbXB0eWAgZG8gbm90IHNlbGYgY2xvc2UgZW1wdHkgZWxlbWVudCB0YWdzXG4gICAgICB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud3JpdGVyLmVsZW1lbnQodGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWxpYXNlc1xuICAgICAgYXR0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGEobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgLy8gRE9NIExldmVsIDFcbiAgICAgIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJzW25hbWVdLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGdldEF0dHJpYnV0ZU5vZGUobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlic1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRBdHRyaWJ1dGVOb2RlKG5ld0F0dHIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICByZW1vdmVBdHRyaWJ1dGVOb2RlKG9sZEF0dHIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZShuYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgLy8gRE9NIExldmVsIDJcbiAgICAgIGdldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgc2V0QXR0cmlidXRlTm9kZU5TKG5ld0F0dHIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgaGFzQXR0cmlidXRlKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlicy5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgIH1cblxuICAgICAgaGFzQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBET00gTGV2ZWwgM1xuICAgICAgc2V0SWRBdHRyaWJ1dGUobmFtZSwgaXNJZCkge1xuICAgICAgICBpZiAodGhpcy5hdHRyaWJzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlic1tuYW1lXS5pc0lkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpc0lkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldElkQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIGlzSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBzZXRJZEF0dHJpYnV0ZU5vZGUoaWRBdHRyLCBpc0lkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgLy8gRE9NIExldmVsIDRcbiAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ25hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgaXNFcXVhbE5vZGUobm9kZSkge1xuICAgICAgICB2YXIgaSwgaiwgcmVmO1xuICAgICAgICBpZiAoIXN1cGVyLmlzRXF1YWxOb2RlKG5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLm5hbWVzcGFjZVVSSSAhPT0gdGhpcy5uYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUucHJlZml4ICE9PSB0aGlzLnByZWZpeCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5sb2NhbE5hbWUgIT09IHRoaXMubG9jYWxOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmF0dHJpYnMubGVuZ3RoICE9PSB0aGlzLmF0dHJpYnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSB0aGlzLmF0dHJpYnMubGVuZ3RoIC0gMTsgKDAgPD0gcmVmID8gaiA8PSByZWYgOiBqID49IHJlZik7IGkgPSAwIDw9IHJlZiA/ICsraiA6IC0taikge1xuICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJzW2ldLmlzRXF1YWxOb2RlKG5vZGUuYXR0cmlic1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgLy8gRE9NIGxldmVsIDFcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRWxlbWVudC5wcm90b3R5cGUsICd0YWdOYW1lJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERPTSBsZXZlbCA0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAnbmFtZXNwYWNlVVJJJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAncHJlZml4Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAnbG9jYWxOYW1lJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxFbGVtZW50LnByb3RvdHlwZSwgJ2lkJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAnY2xhc3NOYW1lJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAnY2xhc3NMaXN0Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAnYXR0cmlidXRlcycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGVNYXAgfHwgIXRoaXMuYXR0cmlidXRlTWFwLm5vZGVzKSB7XG4gICAgICAgICAgdGhpcy5hdHRyaWJ1dGVNYXAgPSBuZXcgWE1MTmFtZWROb2RlTWFwKHRoaXMuYXR0cmlicyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTWFwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFhNTEVsZW1lbnQ7XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBYTUxDaGFyYWN0ZXJEYXRhLCBYTUxOb2RlO1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICAvLyBSZXByZXNlbnRzIGEgY2hhcmFjdGVyIGRhdGEgbm9kZVxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTENoYXJhY3RlckRhdGEgPSAoZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgWE1MQ2hhcmFjdGVyRGF0YSBleHRlbmRzIFhNTE5vZGUge1xuICAgICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTENoYXJhY3RlckRhdGFgXG5cbiAgICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgICBzdXBlcihwYXJlbnQpO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGRlZXAgY2xvbmUgb2YgYHRoaXNgXG4gICAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIERPTSBsZXZlbCAxIGZ1bmN0aW9ucyB0byBiZSBpbXBsZW1lbnRlZCBsYXRlclxuICAgICAgc3Vic3RyaW5nRGF0YShvZmZzZXQsIGNvdW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgYXBwZW5kRGF0YShhcmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBpbnNlcnREYXRhKG9mZnNldCwgYXJnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlRGF0YShvZmZzZXQsIGNvdW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgcmVwbGFjZURhdGEob2Zmc2V0LCBjb3VudCwgYXJnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgaXNFcXVhbE5vZGUobm9kZSkge1xuICAgICAgICBpZiAoIXN1cGVyLmlzRXF1YWxOb2RlKG5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmRhdGEgIT09IHRoaXMuZGF0YSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBET00gbGV2ZWwgMVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgJ2RhdGEnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBET00gbGV2ZWwgM1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgJ3RleHRDb250ZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFhNTENoYXJhY3RlckRhdGE7XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MQ0RhdGEsIFhNTENoYXJhY3RlckRhdGE7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MQ2hhcmFjdGVyRGF0YSA9IHJlcXVpcmUoJy4vWE1MQ2hhcmFjdGVyRGF0YScpO1xuXG4gIC8vIFJlcHJlc2VudHMgYSAgQ0RBVEEgbm9kZVxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTENEYXRhID0gY2xhc3MgWE1MQ0RhdGEgZXh0ZW5kcyBYTUxDaGFyYWN0ZXJEYXRhIHtcbiAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MQ0RhdGFgXG5cbiAgICAvLyBgdGV4dGAgQ0RBVEEgdGV4dFxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGV4dCkge1xuICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBDREFUQSB0ZXh0LiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gXCIjY2RhdGEtc2VjdGlvblwiO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuQ0RhdGE7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdHJpbmdpZnkuY2RhdGEodGV4dCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGRlZXAgY2xvbmUgb2YgYHRoaXNgXG4gICAgY2xvbmUoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0cyB0aGUgWE1MIGZyYWdtZW50IHRvIHN0cmluZ1xuXG4gICAgLy8gYG9wdGlvbnMucHJldHR5YCBwcmV0dHkgcHJpbnRzIHRoZSByZXN1bHRcbiAgICAvLyBgb3B0aW9ucy5pbmRlbnRgIGluZGVudGF0aW9uIGZvciBwcmV0dHkgcHJpbnRcbiAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGhvdyBtYW55IGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZSBmb3IgcHJldHR5IHByaW50XG4gICAgLy8gYG9wdGlvbnMubmV3bGluZWAgbmV3bGluZSBzZXF1ZW5jZSBmb3IgcHJldHR5IHByaW50XG4gICAgdG9TdHJpbmcob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuY2RhdGEodGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MQ2hhcmFjdGVyRGF0YSwgWE1MQ29tbWVudDtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBYTUxDaGFyYWN0ZXJEYXRhID0gcmVxdWlyZSgnLi9YTUxDaGFyYWN0ZXJEYXRhJyk7XG5cbiAgLy8gUmVwcmVzZW50cyBhIGNvbW1lbnQgbm9kZVxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTENvbW1lbnQgPSBjbGFzcyBYTUxDb21tZW50IGV4dGVuZHMgWE1MQ2hhcmFjdGVyRGF0YSB7XG4gICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTENvbW1lbnRgXG5cbiAgICAvLyBgdGV4dGAgY29tbWVudCB0ZXh0XG4gICAgY29uc3RydWN0b3IocGFyZW50LCB0ZXh0KSB7XG4gICAgICBzdXBlcihwYXJlbnQpO1xuICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGNvbW1lbnQgdGV4dC4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmFtZSA9IFwiI2NvbW1lbnRcIjtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkNvbW1lbnQ7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdHJpbmdpZnkuY29tbWVudCh0ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZGVlcCBjbG9uZSBvZiBgdGhpc2BcbiAgICBjbG9uZSgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnRzIHRoZSBYTUwgZnJhZ21lbnQgdG8gc3RyaW5nXG5cbiAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgIC8vIGBvcHRpb25zLmluZGVudGAgaW5kZW50YXRpb24gZm9yIHByZXR0eSBwcmludFxuICAgIC8vIGBvcHRpb25zLm9mZnNldGAgaG93IG1hbnkgaW5kZW50YXRpb25zIHRvIGFkZCB0byBldmVyeSBsaW5lIGZvciBwcmV0dHkgcHJpbnRcbiAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5jb21tZW50KHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfVxuXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERlY2xhcmF0aW9uLCBYTUxOb2RlLCBpc09iamVjdDtcblxuICAoe2lzT2JqZWN0fSA9IHJlcXVpcmUoJy4vVXRpbGl0eScpKTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgLy8gUmVwcmVzZW50cyB0aGUgWE1MIGRlY2xhcmF0aW9uXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRGVjbGFyYXRpb24gPSBjbGFzcyBYTUxEZWNsYXJhdGlvbiBleHRlbmRzIFhNTE5vZGUge1xuICAgIC8vIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGBYTUxEZWNsYXJhdGlvbmBcblxuICAgIC8vIGBwYXJlbnRgIHRoZSBkb2N1bWVudCBvYmplY3RcblxuICAgIC8vIGB2ZXJzaW9uYCBBIHZlcnNpb24gbnVtYmVyIHN0cmluZywgZS5nLiAxLjBcbiAgICAvLyBgZW5jb2RpbmdgIEVuY29kaW5nIGRlY2xhcmF0aW9uLCBlLmcuIFVURi04XG4gICAgLy8gYHN0YW5kYWxvbmVgIHN0YW5kYWxvbmUgZG9jdW1lbnQgZGVjbGFyYXRpb246IHRydWUgb3IgZmFsc2VcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHZlcnNpb24sIGVuY29kaW5nLCBzdGFuZGFsb25lKSB7XG4gICAgICBzdXBlcihwYXJlbnQpO1xuICAgICAgLy8gYXJndW1lbnRzIG1heSBhbHNvIGJlIHBhc3NlZCBhcyBhbiBvYmplY3RcbiAgICAgIGlmIChpc09iamVjdCh2ZXJzaW9uKSkge1xuICAgICAgICAoe3ZlcnNpb24sIGVuY29kaW5nLCBzdGFuZGFsb25lfSA9IHZlcnNpb24pO1xuICAgICAgfVxuICAgICAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgICAgIHZlcnNpb24gPSAnMS4wJztcbiAgICAgIH1cbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkRlY2xhcmF0aW9uO1xuICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5zdHJpbmdpZnkueG1sVmVyc2lvbih2ZXJzaW9uKTtcbiAgICAgIGlmIChlbmNvZGluZyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZW5jb2RpbmcgPSB0aGlzLnN0cmluZ2lmeS54bWxFbmNvZGluZyhlbmNvZGluZyk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhbmRhbG9uZSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhbmRhbG9uZSA9IHRoaXMuc3RyaW5naWZ5LnhtbFN0YW5kYWxvbmUoc3RhbmRhbG9uZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgdG8gc3RyaW5nXG5cbiAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgIC8vIGBvcHRpb25zLmluZGVudGAgaW5kZW50YXRpb24gZm9yIHByZXR0eSBwcmludFxuICAgIC8vIGBvcHRpb25zLm9mZnNldGAgaG93IG1hbnkgaW5kZW50YXRpb25zIHRvIGFkZCB0byBldmVyeSBsaW5lIGZvciBwcmV0dHkgcHJpbnRcbiAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5kZWNsYXJhdGlvbih0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgIH1cblxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi40LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIE5vZGVUeXBlLCBYTUxEVERBdHRMaXN0LCBYTUxOb2RlO1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICAvLyBSZXByZXNlbnRzIGFuIGF0dHJpYnV0ZSBsaXN0XG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRFREQXR0TGlzdCA9IGNsYXNzIFhNTERUREF0dExpc3QgZXh0ZW5kcyBYTUxOb2RlIHtcbiAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MRFREQXR0TGlzdGBcblxuICAgIC8vIGBwYXJlbnRgIHRoZSBwYXJlbnQgYFhNTERvY1R5cGVgIGVsZW1lbnRcbiAgICAvLyBgZWxlbWVudE5hbWVgIHRoZSBuYW1lIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhpcyBhdHRyaWJ1dGVcbiAgICAvLyBgYXR0cmlidXRlTmFtZWAgYXR0cmlidXRlIG5hbWVcbiAgICAvLyBgYXR0cmlidXRlVHlwZWAgdHlwZSBvZiB0aGUgYXR0cmlidXRlXG4gICAgLy8gYGRlZmF1bHRWYWx1ZVR5cGVgIGRlZmF1bHQgdmFsdWUgdHlwZSAoZWl0aGVyICNSRVFVSVJFRCwgI0lNUExJRUQsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICNGSVhFRCBvciAjREVGQVVMVClcbiAgICAvLyBgZGVmYXVsdFZhbHVlYCBkZWZhdWx0IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGVcbiAgICAvLyAgICAgICAgICAgICAgICAob25seSB1c2VkIGZvciAjRklYRUQgb3IgI0RFRkFVTFQpXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBlbGVtZW50TmFtZSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVHlwZSwgZGVmYXVsdFZhbHVlVHlwZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICBzdXBlcihwYXJlbnQpO1xuICAgICAgaWYgKGVsZW1lbnROYW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBEVEQgZWxlbWVudCBuYW1lLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIERURCBhdHRyaWJ1dGUgbmFtZS4gXCIgKyB0aGlzLmRlYnVnSW5mbyhlbGVtZW50TmFtZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFhdHRyaWJ1dGVUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgRFREIGF0dHJpYnV0ZSB0eXBlLiBcIiArIHRoaXMuZGVidWdJbmZvKGVsZW1lbnROYW1lKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWRlZmF1bHRWYWx1ZVR5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBEVEQgYXR0cmlidXRlIGRlZmF1bHQuIFwiICsgdGhpcy5kZWJ1Z0luZm8oZWxlbWVudE5hbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWVUeXBlLmluZGV4T2YoJyMnKSAhPT0gMCkge1xuICAgICAgICBkZWZhdWx0VmFsdWVUeXBlID0gJyMnICsgZGVmYXVsdFZhbHVlVHlwZTtcbiAgICAgIH1cbiAgICAgIGlmICghZGVmYXVsdFZhbHVlVHlwZS5tYXRjaCgvXigjUkVRVUlSRUR8I0lNUExJRUR8I0ZJWEVEfCNERUZBVUxUKSQvKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRlZmF1bHQgdmFsdWUgdHlwZTsgZXhwZWN0ZWQ6ICNSRVFVSVJFRCwgI0lNUExJRUQsICNGSVhFRCBvciAjREVGQVVMVC4gXCIgKyB0aGlzLmRlYnVnSW5mbyhlbGVtZW50TmFtZSkpO1xuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWYWx1ZSAmJiAhZGVmYXVsdFZhbHVlVHlwZS5tYXRjaCgvXigjRklYRUR8I0RFRkFVTFQpJC8pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlZmF1bHQgdmFsdWUgb25seSBhcHBsaWVzIHRvICNGSVhFRCBvciAjREVGQVVMVC4gXCIgKyB0aGlzLmRlYnVnSW5mbyhlbGVtZW50TmFtZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50TmFtZSA9IHRoaXMuc3RyaW5naWZ5Lm5hbWUoZWxlbWVudE5hbWUpO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuQXR0cmlidXRlRGVjbGFyYXRpb247XG4gICAgICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSB0aGlzLnN0cmluZ2lmeS5uYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgdGhpcy5hdHRyaWJ1dGVUeXBlID0gdGhpcy5zdHJpbmdpZnkuZHRkQXR0VHlwZShhdHRyaWJ1dGVUeXBlKTtcbiAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5kdGRBdHREZWZhdWx0KGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZVR5cGUgPSBkZWZhdWx0VmFsdWVUeXBlO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnRzIHRoZSBYTUwgZnJhZ21lbnQgdG8gc3RyaW5nXG5cbiAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgIC8vIGBvcHRpb25zLmluZGVudGAgaW5kZW50YXRpb24gZm9yIHByZXR0eSBwcmludFxuICAgIC8vIGBvcHRpb25zLm9mZnNldGAgaG93IG1hbnkgaW5kZW50YXRpb25zIHRvIGFkZCB0byBldmVyeSBsaW5lIGZvciBwcmV0dHkgcHJpbnRcbiAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5kdGRBdHRMaXN0KHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfVxuXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERUREVudGl0eSwgWE1MTm9kZSwgaXNPYmplY3Q7XG5cbiAgKHtpc09iamVjdH0gPSByZXF1aXJlKCcuL1V0aWxpdHknKSk7XG5cbiAgWE1MTm9kZSA9IHJlcXVpcmUoJy4vWE1MTm9kZScpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIC8vIFJlcHJlc2VudHMgYW4gZW50aXR5IGRlY2xhcmF0aW9uIGluIHRoZSBEVERcbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxEVERFbnRpdHkgPSAoZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgWE1MRFRERW50aXR5IGV4dGVuZHMgWE1MTm9kZSB7XG4gICAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MRFRERW50aXR5YFxuXG4gICAgICAvLyBgcGFyZW50YCB0aGUgcGFyZW50IGBYTUxEb2NUeXBlYCBlbGVtZW50XG4gICAgICAvLyBgcGVgIHdoZXRoZXIgdGhpcyBpcyBhIHBhcmFtZXRlciBlbnRpdHkgb3IgYSBnZW5lcmFsIGVudGl0eVxuICAgICAgLy8gICAgICBkZWZhdWx0cyB0byBgZmFsc2VgIChnZW5lcmFsIGVudGl0eSlcbiAgICAgIC8vIGBuYW1lYCB0aGUgbmFtZSBvZiB0aGUgZW50aXR5XG4gICAgICAvLyBgdmFsdWVgIGludGVybmFsIGVudGl0eSB2YWx1ZSBvciBhbiBvYmplY3Qgd2l0aCBleHRlcm5hbCBlbnRpdHkgZGV0YWlsc1xuICAgICAgLy8gYHZhbHVlLnB1YklEYCBwdWJsaWMgaWRlbnRpZmllclxuICAgICAgLy8gYHZhbHVlLnN5c0lEYCBzeXN0ZW0gaWRlbnRpZmllclxuICAgICAgLy8gYHZhbHVlLm5EYXRhYCBub3RhdGlvbiBkZWNsYXJhdGlvblxuICAgICAgY29uc3RydWN0b3IocGFyZW50LCBwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgRFREIGVudGl0eSBuYW1lLiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgRFREIGVudGl0eSB2YWx1ZS4gXCIgKyB0aGlzLmRlYnVnSW5mbyhuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZSA9ICEhcGU7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMuc3RyaW5naWZ5Lm5hbWUobmFtZSk7XG4gICAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkVudGl0eURlY2xhcmF0aW9uO1xuICAgICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5kdGRFbnRpdHlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5pbnRlcm5hbCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCF2YWx1ZS5wdWJJRCAmJiAhdmFsdWUuc3lzSUQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlB1YmxpYyBhbmQvb3Igc3lzdGVtIGlkZW50aWZpZXJzIGFyZSByZXF1aXJlZCBmb3IgYW4gZXh0ZXJuYWwgZW50aXR5LiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbHVlLnB1YklEICYmICF2YWx1ZS5zeXNJRCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3lzdGVtIGlkZW50aWZpZXIgaXMgcmVxdWlyZWQgZm9yIGEgcHVibGljIGV4dGVybmFsIGVudGl0eS4gXCIgKyB0aGlzLmRlYnVnSW5mbyhuYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaW50ZXJuYWwgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodmFsdWUucHViSUQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wdWJJRCA9IHRoaXMuc3RyaW5naWZ5LmR0ZFB1YklEKHZhbHVlLnB1YklEKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbHVlLnN5c0lEICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3lzSUQgPSB0aGlzLnN0cmluZ2lmeS5kdGRTeXNJRCh2YWx1ZS5zeXNJRCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWx1ZS5uRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm5EYXRhID0gdGhpcy5zdHJpbmdpZnkuZHRkTkRhdGEodmFsdWUubkRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5wZSAmJiB0aGlzLm5EYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RhdGlvbiBkZWNsYXJhdGlvbiBpcyBub3QgYWxsb3dlZCBpbiBhIHBhcmFtZXRlciBlbnRpdHkuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0cyB0aGUgWE1MIGZyYWdtZW50IHRvIHN0cmluZ1xuXG4gICAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGhvdyBtYW55IGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZSBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICAgIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZHRkRW50aXR5KHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgLy8gRE9NIGxldmVsIDFcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRFRERW50aXR5LnByb3RvdHlwZSwgJ3B1YmxpY0lkJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHViSUQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRFRERW50aXR5LnByb3RvdHlwZSwgJ3N5c3RlbUlkJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzSUQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRFRERW50aXR5LnByb3RvdHlwZSwgJ25vdGF0aW9uTmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5EYXRhIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBET00gbGV2ZWwgM1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEVERFbnRpdHkucHJvdG90eXBlLCAnaW5wdXRFbmNvZGluZycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERUREVudGl0eS5wcm90b3R5cGUsICd4bWxFbmNvZGluZycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERUREVudGl0eS5wcm90b3R5cGUsICd4bWxWZXJzaW9uJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gWE1MRFRERW50aXR5O1xuXG4gIH0pLmNhbGwodGhpcyk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERUREVsZW1lbnQsIFhNTE5vZGU7XG5cbiAgWE1MTm9kZSA9IHJlcXVpcmUoJy4vWE1MTm9kZScpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIC8vIFJlcHJlc2VudHMgYW4gYXR0cmlidXRlXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRFRERWxlbWVudCA9IGNsYXNzIFhNTERUREVsZW1lbnQgZXh0ZW5kcyBYTUxOb2RlIHtcbiAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MRFRERWxlbWVudGBcblxuICAgIC8vIGBwYXJlbnRgIHRoZSBwYXJlbnQgYFhNTERvY1R5cGVgIGVsZW1lbnRcbiAgICAvLyBgbmFtZWAgZWxlbWVudCBuYW1lXG4gICAgLy8gYHZhbHVlYCBlbGVtZW50IGNvbnRlbnQgKGRlZmF1bHRzIHRvICNQQ0RBVEEpXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBEVEQgZWxlbWVudCBuYW1lLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICcoI1BDREFUQSknO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gJygnICsgdmFsdWUuam9pbignLCcpICsgJyknO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5zdHJpbmdpZnkubmFtZShuYW1lKTtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkVsZW1lbnREZWNsYXJhdGlvbjtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5kdGRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnRzIHRoZSBYTUwgZnJhZ21lbnQgdG8gc3RyaW5nXG5cbiAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgIC8vIGBvcHRpb25zLmluZGVudGAgaW5kZW50YXRpb24gZm9yIHByZXR0eSBwcmludFxuICAgIC8vIGBvcHRpb25zLm9mZnNldGAgaG93IG1hbnkgaW5kZW50YXRpb25zIHRvIGFkZCB0byBldmVyeSBsaW5lIGZvciBwcmV0dHkgcHJpbnRcbiAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5kdGRFbGVtZW50KHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfVxuXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERURE5vdGF0aW9uLCBYTUxOb2RlO1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICAvLyBSZXByZXNlbnRzIGEgTk9UQVRJT04gZW50cnkgaW4gdGhlIERURFxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTERURE5vdGF0aW9uID0gKGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzIFhNTERURE5vdGF0aW9uIGV4dGVuZHMgWE1MTm9kZSB7XG4gICAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MRFRETm90YXRpb25gXG5cbiAgICAgIC8vIGBwYXJlbnRgIHRoZSBwYXJlbnQgYFhNTERvY1R5cGVgIGVsZW1lbnRcbiAgICAgIC8vIGBuYW1lYCB0aGUgbmFtZSBvZiB0aGUgbm90YXRpb25cbiAgICAgIC8vIGB2YWx1ZWAgYW4gb2JqZWN0IHdpdGggZXh0ZXJuYWwgZW50aXR5IGRldGFpbHNcbiAgICAgIC8vIGB2YWx1ZS5wdWJJRGAgcHVibGljIGlkZW50aWZpZXJcbiAgICAgIC8vIGB2YWx1ZS5zeXNJRGAgc3lzdGVtIGlkZW50aWZpZXJcbiAgICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgRFREIG5vdGF0aW9uIG5hbWUuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFsdWUucHViSUQgJiYgIXZhbHVlLnN5c0lEKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHVibGljIG9yIHN5c3RlbSBpZGVudGlmaWVycyBhcmUgcmVxdWlyZWQgZm9yIGFuIGV4dGVybmFsIGVudGl0eS4gXCIgKyB0aGlzLmRlYnVnSW5mbyhuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5zdHJpbmdpZnkubmFtZShuYW1lKTtcbiAgICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuTm90YXRpb25EZWNsYXJhdGlvbjtcbiAgICAgICAgaWYgKHZhbHVlLnB1YklEICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnB1YklEID0gdGhpcy5zdHJpbmdpZnkuZHRkUHViSUQodmFsdWUucHViSUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5zeXNJRCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zeXNJRCA9IHRoaXMuc3RyaW5naWZ5LmR0ZFN5c0lEKHZhbHVlLnN5c0lEKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0cyB0aGUgWE1MIGZyYWdtZW50IHRvIHN0cmluZ1xuXG4gICAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGhvdyBtYW55IGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZSBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICAgIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZHRkTm90YXRpb24odGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBET00gbGV2ZWwgMVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEVEROb3RhdGlvbi5wcm90b3R5cGUsICdwdWJsaWNJZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1YklEO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERURE5vdGF0aW9uLnByb3RvdHlwZSwgJ3N5c3RlbUlkJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzSUQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gWE1MRFRETm90YXRpb247XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MRFREQXR0TGlzdCwgWE1MRFRERWxlbWVudCwgWE1MRFRERW50aXR5LCBYTUxEVEROb3RhdGlvbiwgWE1MRG9jVHlwZSwgWE1MTmFtZWROb2RlTWFwLCBYTUxOb2RlLCBpc09iamVjdDtcblxuICAoe2lzT2JqZWN0fSA9IHJlcXVpcmUoJy4vVXRpbGl0eScpKTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MRFREQXR0TGlzdCA9IHJlcXVpcmUoJy4vWE1MRFREQXR0TGlzdCcpO1xuXG4gIFhNTERUREVudGl0eSA9IHJlcXVpcmUoJy4vWE1MRFRERW50aXR5Jyk7XG5cbiAgWE1MRFRERWxlbWVudCA9IHJlcXVpcmUoJy4vWE1MRFRERWxlbWVudCcpO1xuXG4gIFhNTERURE5vdGF0aW9uID0gcmVxdWlyZSgnLi9YTUxEVEROb3RhdGlvbicpO1xuXG4gIFhNTE5hbWVkTm9kZU1hcCA9IHJlcXVpcmUoJy4vWE1MTmFtZWROb2RlTWFwJyk7XG5cbiAgLy8gUmVwcmVzZW50cyBkb2N0eXBlIGRlY2xhcmF0aW9uXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRG9jVHlwZSA9IChmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBYTUxEb2NUeXBlIGV4dGVuZHMgWE1MTm9kZSB7XG4gICAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MRG9jVHlwZWBcblxuICAgICAgLy8gYHBhcmVudGAgdGhlIGRvY3VtZW50IG9iamVjdFxuXG4gICAgICAvLyBgcHViSURgIHB1YmxpYyBpZGVudGlmaWVyIG9mIHRoZSBleHRlcm5hbCBzdWJzZXRcbiAgICAgIC8vIGBzeXNJRGAgc3lzdGVtIGlkZW50aWZpZXIgb2YgdGhlIGV4dGVybmFsIHN1YnNldFxuICAgICAgY29uc3RydWN0b3IocGFyZW50LCBwdWJJRCwgc3lzSUQpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBpLCBsZW4sIHJlZjtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuRG9jVHlwZTtcbiAgICAgICAgLy8gc2V0IERURCBuYW1lIHRvIHRoZSBuYW1lIG9mIHRoZSByb290IG5vZGVcbiAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICAgIHJlZiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gcmVmW2ldO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gY2hpbGQubmFtZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9jdW1lbnRPYmplY3QgPSBwYXJlbnQ7XG4gICAgICAgIC8vIGFyZ3VtZW50cyBtYXkgYWxzbyBiZSBwYXNzZWQgYXMgYW4gb2JqZWN0XG4gICAgICAgIGlmIChpc09iamVjdChwdWJJRCkpIHtcbiAgICAgICAgICAoe3B1YklELCBzeXNJRH0gPSBwdWJJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN5c0lEID09IG51bGwpIHtcbiAgICAgICAgICBbc3lzSUQsIHB1YklEXSA9IFtwdWJJRCwgc3lzSURdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwdWJJRCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wdWJJRCA9IHRoaXMuc3RyaW5naWZ5LmR0ZFB1YklEKHB1YklEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3lzSUQgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc3lzSUQgPSB0aGlzLnN0cmluZ2lmeS5kdGRTeXNJRChzeXNJRCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlcyBhbiBlbGVtZW50IHR5cGUgZGVjbGFyYXRpb25cblxuICAgICAgLy8gYG5hbWVgIGVsZW1lbnQgbmFtZVxuICAgICAgLy8gYHZhbHVlYCBlbGVtZW50IGNvbnRlbnQgKGRlZmF1bHRzIHRvICNQQ0RBVEEpXG4gICAgICBlbGVtZW50KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBuZXcgWE1MRFRERWxlbWVudCh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGVzIGFuIGF0dHJpYnV0ZSBkZWNsYXJhdGlvblxuXG4gICAgICAvLyBgZWxlbWVudE5hbWVgIHRoZSBuYW1lIG9mIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhpcyBhdHRyaWJ1dGVcbiAgICAgIC8vIGBhdHRyaWJ1dGVOYW1lYCBhdHRyaWJ1dGUgbmFtZVxuICAgICAgLy8gYGF0dHJpYnV0ZVR5cGVgIHR5cGUgb2YgdGhlIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gQ0RBVEEpXG4gICAgICAvLyBgZGVmYXVsdFZhbHVlVHlwZWAgZGVmYXVsdCB2YWx1ZSB0eXBlIChlaXRoZXIgI1JFUVVJUkVELCAjSU1QTElFRCwgI0ZJWEVEIG9yXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgI0RFRkFVTFQpIChkZWZhdWx0cyB0byAjSU1QTElFRClcbiAgICAgIC8vIGBkZWZhdWx0VmFsdWVgIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZVxuICAgICAgLy8gICAgICAgICAgICAgICAgKG9ubHkgdXNlZCBmb3IgI0ZJWEVEIG9yICNERUZBVUxUKVxuICAgICAgYXR0TGlzdChlbGVtZW50TmFtZSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVHlwZSwgZGVmYXVsdFZhbHVlVHlwZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBuZXcgWE1MRFREQXR0TGlzdCh0aGlzLCBlbGVtZW50TmFtZSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVHlwZSwgZGVmYXVsdFZhbHVlVHlwZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBnZW5lcmFsIGVudGl0eSBkZWNsYXJhdGlvblxuXG4gICAgICAvLyBgbmFtZWAgdGhlIG5hbWUgb2YgdGhlIGVudGl0eVxuICAgICAgLy8gYHZhbHVlYCBpbnRlcm5hbCBlbnRpdHkgdmFsdWUgb3IgYW4gb2JqZWN0IHdpdGggZXh0ZXJuYWwgZW50aXR5IGRldGFpbHNcbiAgICAgIC8vIGB2YWx1ZS5wdWJJRGAgcHVibGljIGlkZW50aWZpZXJcbiAgICAgIC8vIGB2YWx1ZS5zeXNJRGAgc3lzdGVtIGlkZW50aWZpZXJcbiAgICAgIC8vIGB2YWx1ZS5uRGF0YWAgbm90YXRpb24gZGVjbGFyYXRpb25cbiAgICAgIGVudGl0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgY2hpbGQ7XG4gICAgICAgIGNoaWxkID0gbmV3IFhNTERUREVudGl0eSh0aGlzLCBmYWxzZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlcyBhIHBhcmFtZXRlciBlbnRpdHkgZGVjbGFyYXRpb25cblxuICAgICAgLy8gYG5hbWVgIHRoZSBuYW1lIG9mIHRoZSBlbnRpdHlcbiAgICAgIC8vIGB2YWx1ZWAgaW50ZXJuYWwgZW50aXR5IHZhbHVlIG9yIGFuIG9iamVjdCB3aXRoIGV4dGVybmFsIGVudGl0eSBkZXRhaWxzXG4gICAgICAvLyBgdmFsdWUucHViSURgIHB1YmxpYyBpZGVudGlmaWVyXG4gICAgICAvLyBgdmFsdWUuc3lzSURgIHN5c3RlbSBpZGVudGlmaWVyXG4gICAgICBwRW50aXR5KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBuZXcgWE1MRFRERW50aXR5KHRoaXMsIHRydWUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBOT1RBVElPTiBkZWNsYXJhdGlvblxuXG4gICAgICAvLyBgbmFtZWAgdGhlIG5hbWUgb2YgdGhlIG5vdGF0aW9uXG4gICAgICAvLyBgdmFsdWVgIGFuIG9iamVjdCB3aXRoIGV4dGVybmFsIGVudGl0eSBkZXRhaWxzXG4gICAgICAvLyBgdmFsdWUucHViSURgIHB1YmxpYyBpZGVudGlmaWVyXG4gICAgICAvLyBgdmFsdWUuc3lzSURgIHN5c3RlbSBpZGVudGlmaWVyXG4gICAgICBub3RhdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgY2hpbGQ7XG4gICAgICAgIGNoaWxkID0gbmV3IFhNTERURE5vdGF0aW9uKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnZlcnRzIHRvIHN0cmluZ1xuXG4gICAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGhvdyBtYW55IGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZSBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICAgIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZG9jVHlwZSh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICAvLyBBbGlhc2VzXG4gICAgICBlbGUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudChuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGF0dChlbGVtZW50TmFtZSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVHlwZSwgZGVmYXVsdFZhbHVlVHlwZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dExpc3QoZWxlbWVudE5hbWUsIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVR5cGUsIGRlZmF1bHRWYWx1ZVR5cGUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGVudChuYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHkobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBwZW50KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBFbnRpdHkobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBub3QobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90YXRpb24obmFtZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB1cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdCgpIHx8IHRoaXMuZG9jdW1lbnRPYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIGlzRXF1YWxOb2RlKG5vZGUpIHtcbiAgICAgICAgaWYgKCFzdXBlci5pc0VxdWFsTm9kZShub2RlKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5uYW1lICE9PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUucHVibGljSWQgIT09IHRoaXMucHVibGljSWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc3lzdGVtSWQgIT09IHRoaXMuc3lzdGVtSWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgLy8gRE9NIGxldmVsIDFcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jVHlwZS5wcm90b3R5cGUsICdlbnRpdGllcycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGlsZCwgaSwgbGVuLCBub2RlcywgcmVmO1xuICAgICAgICBub2RlcyA9IHt9O1xuICAgICAgICByZWYgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZltpXTtcbiAgICAgICAgICBpZiAoKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLkVudGl0eURlY2xhcmF0aW9uKSAmJiAhY2hpbGQucGUpIHtcbiAgICAgICAgICAgIG5vZGVzW2NoaWxkLm5hbWVdID0gY2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWE1MTmFtZWROb2RlTWFwKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2NUeXBlLnByb3RvdHlwZSwgJ25vdGF0aW9ucycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGlsZCwgaSwgbGVuLCBub2RlcywgcmVmO1xuICAgICAgICBub2RlcyA9IHt9O1xuICAgICAgICByZWYgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZltpXTtcbiAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gTm9kZVR5cGUuTm90YXRpb25EZWNsYXJhdGlvbikge1xuICAgICAgICAgICAgbm9kZXNbY2hpbGQubmFtZV0gPSBjaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBYTUxOYW1lZE5vZGVNYXAobm9kZXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRE9NIGxldmVsIDJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jVHlwZS5wcm90b3R5cGUsICdwdWJsaWNJZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1YklEO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY1R5cGUucHJvdG90eXBlLCAnc3lzdGVtSWQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXNJRDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2NUeXBlLnByb3RvdHlwZSwgJ2ludGVybmFsU3Vic2V0Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFhNTERvY1R5cGU7XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MTm9kZSwgWE1MUmF3O1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICAvLyBSZXByZXNlbnRzIGEgIHJhdyBub2RlXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MUmF3ID0gY2xhc3MgWE1MUmF3IGV4dGVuZHMgWE1MTm9kZSB7XG4gICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTFJhd2BcblxuICAgIC8vIGB0ZXh0YCByYXcgdGV4dFxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGV4dCkge1xuICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByYXcgdGV4dC4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLlJhdztcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5yYXcodGV4dCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGRlZXAgY2xvbmUgb2YgYHRoaXNgXG4gICAgY2xvbmUoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0cyB0aGUgWE1MIGZyYWdtZW50IHRvIHN0cmluZ1xuXG4gICAgLy8gYG9wdGlvbnMucHJldHR5YCBwcmV0dHkgcHJpbnRzIHRoZSByZXN1bHRcbiAgICAvLyBgb3B0aW9ucy5pbmRlbnRgIGluZGVudGF0aW9uIGZvciBwcmV0dHkgcHJpbnRcbiAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGhvdyBtYW55IGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZSBmb3IgcHJldHR5IHByaW50XG4gICAgLy8gYG9wdGlvbnMubmV3bGluZWAgbmV3bGluZSBzZXF1ZW5jZSBmb3IgcHJldHR5IHByaW50XG4gICAgdG9TdHJpbmcob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIucmF3KHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfVxuXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTENoYXJhY3RlckRhdGEsIFhNTFRleHQ7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MQ2hhcmFjdGVyRGF0YSA9IHJlcXVpcmUoJy4vWE1MQ2hhcmFjdGVyRGF0YScpO1xuXG4gIC8vIFJlcHJlc2VudHMgYSB0ZXh0IG5vZGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxUZXh0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzIFhNTFRleHQgZXh0ZW5kcyBYTUxDaGFyYWN0ZXJEYXRhIHtcbiAgICAgIC8vIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGBYTUxUZXh0YFxuXG4gICAgICAvLyBgdGV4dGAgZWxlbWVudCB0ZXh0XG4gICAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRleHQpIHtcbiAgICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZWxlbWVudCB0ZXh0LiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiI3RleHRcIjtcbiAgICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuVGV4dDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc3RyaW5naWZ5LnRleHQodGV4dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYW5kIHJldHVybnMgYSBkZWVwIGNsb25lIG9mIGB0aGlzYFxuICAgICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0cyB0aGUgWE1MIGZyYWdtZW50IHRvIHN0cmluZ1xuXG4gICAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGhvdyBtYW55IGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZSBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICAgIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIudGV4dCh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICAvLyBET00gbGV2ZWwgMSBmdW5jdGlvbnMgdG8gYmUgaW1wbGVtZW50ZWQgbGF0ZXJcbiAgICAgIHNwbGl0VGV4dChvZmZzZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBET00gbGV2ZWwgMyBmdW5jdGlvbnMgdG8gYmUgaW1wbGVtZW50ZWQgbGF0ZXJcbiAgICAgIHJlcGxhY2VXaG9sZVRleHQoY29udGVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgLy8gRE9NIGxldmVsIDNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MVGV4dC5wcm90b3R5cGUsICdpc0VsZW1lbnRDb250ZW50V2hpdGVzcGFjZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxUZXh0LnByb3RvdHlwZSwgJ3dob2xlVGV4dCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0LCBwcmV2LCBzdHI7XG4gICAgICAgIHN0ciA9ICcnO1xuICAgICAgICBwcmV2ID0gdGhpcy5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIHdoaWxlIChwcmV2KSB7XG4gICAgICAgICAgc3RyID0gcHJldi5kYXRhICsgc3RyO1xuICAgICAgICAgIHByZXYgPSBwcmV2LnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuICAgICAgICBzdHIgKz0gdGhpcy5kYXRhO1xuICAgICAgICBuZXh0ID0gdGhpcy5uZXh0U2libGluZztcbiAgICAgICAgd2hpbGUgKG5leHQpIHtcbiAgICAgICAgICBzdHIgPSBzdHIgKyBuZXh0LmRhdGE7XG4gICAgICAgICAgbmV4dCA9IG5leHQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBYTUxUZXh0O1xuXG4gIH0pLmNhbGwodGhpcyk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTENoYXJhY3RlckRhdGEsIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBYTUxDaGFyYWN0ZXJEYXRhID0gcmVxdWlyZSgnLi9YTUxDaGFyYWN0ZXJEYXRhJyk7XG5cbiAgLy8gUmVwcmVzZW50cyBhIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBjbGFzcyBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gZXh0ZW5kcyBYTUxDaGFyYWN0ZXJEYXRhIHtcbiAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uYFxuXG4gICAgLy8gYHBhcmVudGAgdGhlIHBhcmVudCBub2RlXG4gICAgLy8gYHRhcmdldGAgaW5zdHJ1Y3Rpb24gdGFyZ2V0XG4gICAgLy8gYHZhbHVlYCBpbnN0cnVjdGlvbiB2YWx1ZVxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgdGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGluc3RydWN0aW9uIHRhcmdldC4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLlByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5zdHJpbmdpZnkuaW5zVGFyZ2V0KHRhcmdldCk7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdHJpbmdpZnkuaW5zVmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYW5kIHJldHVybnMgYSBkZWVwIGNsb25lIG9mIGB0aGlzYFxuICAgIGNsb25lKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgdGhlIFhNTCBmcmFnbWVudCB0byBzdHJpbmdcblxuICAgIC8vIGBvcHRpb25zLnByZXR0eWAgcHJldHR5IHByaW50cyB0aGUgcmVzdWx0XG4gICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgLy8gYG9wdGlvbnMub2Zmc2V0YCBob3cgbWFueSBpbmRlbnRhdGlvbnMgdG8gYWRkIHRvIGV2ZXJ5IGxpbmUgZm9yIHByZXR0eSBwcmludFxuICAgIC8vIGBvcHRpb25zLm5ld2xpbmVgIG5ld2xpbmUgc2VxdWVuY2UgZm9yIHByZXR0eSBwcmludFxuICAgIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud3JpdGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbih0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgIH1cblxuICAgIGlzRXF1YWxOb2RlKG5vZGUpIHtcbiAgICAgIGlmICghc3VwZXIuaXNFcXVhbE5vZGUobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUudGFyZ2V0ICE9PSB0aGlzLnRhcmdldCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MRHVtbXksIFhNTE5vZGU7XG5cbiAgWE1MTm9kZSA9IHJlcXVpcmUoJy4vWE1MTm9kZScpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIC8vIFJlcHJlc2VudHMgYSAgcmF3IG5vZGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxEdW1teSA9IGNsYXNzIFhNTER1bW15IGV4dGVuZHMgWE1MTm9kZSB7XG4gICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTER1bW15YFxuXG4gICAgLy8gYFhNTER1bW15YCBpcyBhIHNwZWNpYWwgbm9kZSByZXByZXNlbnRpbmcgYSBub2RlIHdpdGggXG4gICAgLy8gYSBudWxsIHZhbHVlLiBEdW1teSBub2RlcyBhcmUgY3JlYXRlZCB3aGlsZSByZWN1cnNpdmVseVxuICAgIC8vIGJ1aWxkaW5nIHRoZSBYTUwgdHJlZS4gU2ltcGx5IHNraXBwaW5nIG51bGwgdmFsdWVzIGRvZXNuJ3RcbiAgICAvLyB3b3JrIGJlY2F1c2UgdGhhdCB3b3VsZCBicmVhayB0aGUgcmVjdXJzaXZlIGNoYWluLlxuICAgIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgICAgc3VwZXIocGFyZW50KTtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkR1bW15O1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYW5kIHJldHVybnMgYSBkZWVwIGNsb25lIG9mIGB0aGlzYFxuICAgIGNsb25lKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydHMgdGhlIFhNTCBmcmFnbWVudCB0byBzdHJpbmdcblxuICAgIC8vIGBvcHRpb25zLnByZXR0eWAgcHJldHR5IHByaW50cyB0aGUgcmVzdWx0XG4gICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgLy8gYG9wdGlvbnMub2Zmc2V0YCBob3cgbWFueSBpbmRlbnRhdGlvbnMgdG8gYWRkIHRvIGV2ZXJ5IGxpbmUgZm9yIHByZXR0eSBwcmludFxuICAgIC8vIGBvcHRpb25zLm5ld2xpbmVgIG5ld2xpbmUgc2VxdWVuY2UgZm9yIHByZXR0eSBwcmludFxuICAgIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIC8vIFJlcHJlc2VudHMgYSBsaXN0IG9mIG5vZGVzXG4gIHZhciBYTUxOb2RlTGlzdDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTE5vZGVMaXN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzIFhNTE5vZGVMaXN0IHtcbiAgICAgIC8vIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGBYTUxOb2RlTGlzdGBcbiAgICAgIC8vIFRoaXMgaXMganVzdCBhIHdyYXBwZXIgYXJvdW5kIGFuIG9yZGluYXJ5XG4gICAgICAvLyBKUyBhcnJheS5cblxuICAgICAgLy8gYG5vZGVzYCB0aGUgYXJyYXkgY29udGFpbmluZyBub2Rlcy5cbiAgICAgIGNvbnN0cnVjdG9yKG5vZGVzKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGRlZXAgY2xvbmUgb2YgYHRoaXNgXG5cbiAgICAgIGNsb25lKCkge1xuICAgICAgICAvLyB0aGlzIGNsYXNzIHNob3VsZCBub3QgYmUgY2xvbmVkIHNpbmNlIGl0IHdyYXBzXG4gICAgICAgIC8vIGFyb3VuZCBhIGdpdmVuIGFycmF5LiBUaGUgY2FsbGluZyBmdW5jdGlvbiBzaG91bGQgY2hlY2tcbiAgICAgICAgLy8gd2hldGhlciB0aGUgd3JhcHBlZCBhcnJheSBpcyBudWxsIGFuZCBzdXBwbHkgYSBuZXcgYXJyYXlcbiAgICAgICAgLy8gKGZyb20gdGhlIGNsb25lKS5cbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBET00gTGV2ZWwgMVxuICAgICAgaXRlbShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlc1tpbmRleF0gfHwgbnVsbDtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBET00gbGV2ZWwgMVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxOb2RlTGlzdC5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcy5sZW5ndGggfHwgMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBYTUxOb2RlTGlzdDtcblxuICB9KS5jYWxsKHRoaXMpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi40LjFcbihmdW5jdGlvbigpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgRGlzY29ubmVjdGVkOiAxLFxuICAgIFByZWNlZGluZzogMixcbiAgICBGb2xsb3dpbmc6IDQsXG4gICAgQ29udGFpbnM6IDgsXG4gICAgQ29udGFpbmVkQnk6IDE2LFxuICAgIEltcGxlbWVudGF0aW9uU3BlY2lmaWM6IDMyXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgRG9jdW1lbnRQb3NpdGlvbiwgTm9kZVR5cGUsIFhNTENEYXRhLCBYTUxDb21tZW50LCBYTUxEZWNsYXJhdGlvbiwgWE1MRG9jVHlwZSwgWE1MRHVtbXksIFhNTEVsZW1lbnQsIFhNTE5hbWVkTm9kZU1hcCwgWE1MTm9kZSwgWE1MTm9kZUxpc3QsIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgWE1MUmF3LCBYTUxUZXh0LCBnZXRWYWx1ZSwgaXNFbXB0eSwgaXNGdW5jdGlvbiwgaXNPYmplY3QsXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIHNwbGljZSA9IFtdLnNwbGljZTtcblxuICAoe2lzT2JqZWN0LCBpc0Z1bmN0aW9uLCBpc0VtcHR5LCBnZXRWYWx1ZX0gPSByZXF1aXJlKCcuL1V0aWxpdHknKSk7XG5cbiAgWE1MRWxlbWVudCA9IG51bGw7XG5cbiAgWE1MQ0RhdGEgPSBudWxsO1xuXG4gIFhNTENvbW1lbnQgPSBudWxsO1xuXG4gIFhNTERlY2xhcmF0aW9uID0gbnVsbDtcblxuICBYTUxEb2NUeXBlID0gbnVsbDtcblxuICBYTUxSYXcgPSBudWxsO1xuXG4gIFhNTFRleHQgPSBudWxsO1xuXG4gIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IG51bGw7XG5cbiAgWE1MRHVtbXkgPSBudWxsO1xuXG4gIE5vZGVUeXBlID0gbnVsbDtcblxuICBYTUxOb2RlTGlzdCA9IG51bGw7XG5cbiAgWE1MTmFtZWROb2RlTWFwID0gbnVsbDtcblxuICBEb2N1bWVudFBvc2l0aW9uID0gbnVsbDtcblxuICAvLyBSZXByZXNlbnRzIGEgZ2VuZXJpYyBYTWwgZWxlbWVudFxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTE5vZGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgWE1MTm9kZSB7XG4gICAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MTm9kZWBcblxuICAgICAgLy8gYHBhcmVudGAgdGhlIHBhcmVudCBub2RlXG4gICAgICBjb25zdHJ1Y3RvcihwYXJlbnQxKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50MTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5wYXJlbnQub3B0aW9ucztcbiAgICAgICAgICB0aGlzLnN0cmluZ2lmeSA9IHRoaXMucGFyZW50LnN0cmluZ2lmeTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICB0aGlzLmJhc2VVUkkgPSBudWxsO1xuICAgICAgICAvLyBmaXJzdCBleGVjdXRpb24sIGxvYWQgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIG90aGVyd2lzZVxuICAgICAgICAvLyBjaXJjdWxhciAoc28gd2UgY2FuJ3QgbG9hZCB0aGVtIGF0IHRoZSB0b3ApXG4gICAgICAgIGlmICghWE1MRWxlbWVudCkge1xuICAgICAgICAgIFhNTEVsZW1lbnQgPSByZXF1aXJlKCcuL1hNTEVsZW1lbnQnKTtcbiAgICAgICAgICBYTUxDRGF0YSA9IHJlcXVpcmUoJy4vWE1MQ0RhdGEnKTtcbiAgICAgICAgICBYTUxDb21tZW50ID0gcmVxdWlyZSgnLi9YTUxDb21tZW50Jyk7XG4gICAgICAgICAgWE1MRGVjbGFyYXRpb24gPSByZXF1aXJlKCcuL1hNTERlY2xhcmF0aW9uJyk7XG4gICAgICAgICAgWE1MRG9jVHlwZSA9IHJlcXVpcmUoJy4vWE1MRG9jVHlwZScpO1xuICAgICAgICAgIFhNTFJhdyA9IHJlcXVpcmUoJy4vWE1MUmF3Jyk7XG4gICAgICAgICAgWE1MVGV4dCA9IHJlcXVpcmUoJy4vWE1MVGV4dCcpO1xuICAgICAgICAgIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IHJlcXVpcmUoJy4vWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uJyk7XG4gICAgICAgICAgWE1MRHVtbXkgPSByZXF1aXJlKCcuL1hNTER1bW15Jyk7XG4gICAgICAgICAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG4gICAgICAgICAgWE1MTm9kZUxpc3QgPSByZXF1aXJlKCcuL1hNTE5vZGVMaXN0Jyk7XG4gICAgICAgICAgWE1MTmFtZWROb2RlTWFwID0gcmVxdWlyZSgnLi9YTUxOYW1lZE5vZGVNYXAnKTtcbiAgICAgICAgICBEb2N1bWVudFBvc2l0aW9uID0gcmVxdWlyZSgnLi9Eb2N1bWVudFBvc2l0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgXG4gICAgICAvLyBTZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiB0aGlzIG5vZGUgYW5kIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseVxuXG4gICAgICAvLyBgcGFyZW50YCB0aGUgcGFyZW50IG5vZGVcbiAgICAgIHNldFBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBqLCBsZW4sIHJlZjEsIHJlc3VsdHM7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gcGFyZW50Lm9wdGlvbnM7XG4gICAgICAgICAgdGhpcy5zdHJpbmdpZnkgPSBwYXJlbnQuc3RyaW5naWZ5O1xuICAgICAgICB9XG4gICAgICAgIHJlZjEgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZjFbal07XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGNoaWxkLnNldFBhcmVudCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IG5vZGVcblxuICAgICAgLy8gYG5hbWVgIG5vZGUgbmFtZSBvciBhbiBvYmplY3QgZGVzY3JpYmluZyB0aGUgWE1MIHRyZWVcbiAgICAgIC8vIGBhdHRyaWJ1dGVzYCBhbiBvYmplY3QgY29udGFpbmluZyBuYW1lL3ZhbHVlIHBhaXJzIG9mIGF0dHJpYnV0ZXNcbiAgICAgIC8vIGB0ZXh0YCBlbGVtZW50IHRleHRcbiAgICAgIGVsZW1lbnQobmFtZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgICB2YXIgY2hpbGROb2RlLCBpdGVtLCBqLCBrLCBrZXksIGxhc3RDaGlsZCwgbGVuLCBsZW4xLCB2YWw7XG4gICAgICAgIGxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzID09PSBudWxsICYmICh0ZXh0ID09IG51bGwpKSB7XG4gICAgICAgICAgW2F0dHJpYnV0ZXMsIHRleHRdID0gW3t9LCBudWxsXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSB7XG4gICAgICAgICAgYXR0cmlidXRlcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZXMgPSBnZXRWYWx1ZShhdHRyaWJ1dGVzKTtcbiAgICAgICAgLy8gc3dhcCBhcmd1bWVudCBvcmRlcjogdGV4dCA8LT4gYXR0cmlidXRlc1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgW3RleHQsIGF0dHJpYnV0ZXNdID0gW2F0dHJpYnV0ZXMsIHRleHRdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBuYW1lID0gZ2V0VmFsdWUobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXhwYW5kIGlmIGFycmF5XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuID0gbmFtZS5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgaXRlbSA9IG5hbWVbal07XG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmVsZW1lbnQoaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICAvLyBldmFsdWF0ZSBpZiBmdW5jdGlvblxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24obmFtZSkpIHtcbiAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmVsZW1lbnQobmFtZS5hcHBseSgpKTtcbiAgICAgICAgLy8gZXhwYW5kIGlmIG9iamVjdFxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgICAgZm9yIChrZXkgaW4gbmFtZSkge1xuICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwobmFtZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB2YWwgPSBuYW1lW2tleV07XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWwpKSB7XG4gICAgICAgICAgICAgIC8vIGV2YWx1YXRlIGlmIGZ1bmN0aW9uXG4gICAgICAgICAgICAgIHZhbCA9IHZhbC5hcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXNzaWduIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZURlY29yYXRvcnMgJiYgdGhpcy5zdHJpbmdpZnkuY29udmVydEF0dEtleSAmJiBrZXkuaW5kZXhPZih0aGlzLnN0cmluZ2lmeS5jb252ZXJ0QXR0S2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmF0dHJpYnV0ZShrZXkuc3Vic3RyKHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRBdHRLZXkubGVuZ3RoKSwgdmFsKTtcbiAgICAgICAgICAgIC8vIHNraXAgZW1wdHkgYXJyYXlzXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuc2VwYXJhdGVBcnJheUl0ZW1zICYmIEFycmF5LmlzQXJyYXkodmFsKSAmJiBpc0VtcHR5KHZhbCkpIHtcbiAgICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5kdW1teSgpO1xuICAgICAgICAgICAgLy8gZW1wdHkgb2JqZWN0cyBwcm9kdWNlIG9uZSBub2RlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkgJiYgaXNFbXB0eSh2YWwpKSB7XG4gICAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZWxlbWVudChrZXkpO1xuICAgICAgICAgICAgLy8gc2tpcCBudWxsIGFuZCB1bmRlZmluZWQgbm9kZXNcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5rZWVwTnVsbE5vZGVzICYmICh2YWwgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5kdW1teSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBleHBhbmQgbGlzdCBieSBjcmVhdGluZyBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLnNlcGFyYXRlQXJyYXlJdGVtcyAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgICAgZm9yIChrID0gMCwgbGVuMSA9IHZhbC5sZW5ndGg7IGsgPCBsZW4xOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdmFsW2tdO1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IHt9O1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmVsZW1lbnQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBleHBhbmQgY2hpbGQgbm9kZXMgdW5kZXIgcGFyZW50XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGtleSBpcyAjdGV4dCBleHBhbmQgY2hpbGQgbm9kZXMgdW5kZXIgdGhpcyBub2RlIHRvIHN1cHBvcnQgbWl4ZWQgY29udGVudFxuICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRUZXh0S2V5ICYmIGtleS5pbmRleE9mKHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRUZXh0S2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZWxlbWVudCh2YWwpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZWxlbWVudChrZXkpO1xuICAgICAgICAgICAgICAgIGxhc3RDaGlsZC5lbGVtZW50KHZhbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyB0ZXh0IG5vZGVcbiAgICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5lbGVtZW50KGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIC8vIHNraXAgbnVsbCBub2Rlc1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMua2VlcE51bGxOb2RlcyAmJiB0ZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5kdW1teSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRleHQgbm9kZVxuICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZURlY29yYXRvcnMgJiYgdGhpcy5zdHJpbmdpZnkuY29udmVydFRleHRLZXkgJiYgbmFtZS5pbmRleE9mKHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRUZXh0S2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy50ZXh0KHRleHQpO1xuICAgICAgICAgIC8vIGNkYXRhIG5vZGVcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuaWdub3JlRGVjb3JhdG9ycyAmJiB0aGlzLnN0cmluZ2lmeS5jb252ZXJ0Q0RhdGFLZXkgJiYgbmFtZS5pbmRleE9mKHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRDRGF0YUtleSkgPT09IDApIHtcbiAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuY2RhdGEodGV4dCk7XG4gICAgICAgICAgLy8gY29tbWVudCBub2RlXG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmlnbm9yZURlY29yYXRvcnMgJiYgdGhpcy5zdHJpbmdpZnkuY29udmVydENvbW1lbnRLZXkgJiYgbmFtZS5pbmRleE9mKHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRDb21tZW50S2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5jb21tZW50KHRleHQpO1xuICAgICAgICAgIC8vIHJhdyB0ZXh0IG5vZGVcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuaWdub3JlRGVjb3JhdG9ycyAmJiB0aGlzLnN0cmluZ2lmeS5jb252ZXJ0UmF3S2V5ICYmIG5hbWUuaW5kZXhPZih0aGlzLnN0cmluZ2lmeS5jb252ZXJ0UmF3S2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5yYXcodGV4dCk7XG4gICAgICAgICAgLy8gcHJvY2Vzc2luZyBpbnN0cnVjdGlvblxuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRQSUtleSAmJiBuYW1lLmluZGV4T2YodGhpcy5zdHJpbmdpZnkuY29udmVydFBJS2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5pbnN0cnVjdGlvbihuYW1lLnN1YnN0cih0aGlzLnN0cmluZ2lmeS5jb252ZXJ0UElLZXkubGVuZ3RoKSwgdGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgbm9kZVxuICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5ub2RlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoaWxkID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGFueSBlbGVtZW50cyB3aXRoOiBcIiArIG5hbWUgKyBcIi4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFzdENoaWxkO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCBub2RlIGJlZm9yZSB0aGUgY3VycmVudCBub2RlXG5cbiAgICAgIC8vIGBuYW1lYCBub2RlIG5hbWUgb3IgYW4gb2JqZWN0IGRlc2NyaWJpbmcgdGhlIFhNTCB0cmVlXG4gICAgICAvLyBgYXR0cmlidXRlc2AgYW4gb2JqZWN0IGNvbnRhaW5pbmcgbmFtZS92YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzXG4gICAgICAvLyBgdGV4dGAgZWxlbWVudCB0ZXh0XG4gICAgICBpbnNlcnRCZWZvcmUobmFtZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgICB2YXIgY2hpbGQsIGksIG5ld0NoaWxkLCByZWZDaGlsZCwgcmVtb3ZlZDtcbiAgICAgICAgLy8gRE9NIGxldmVsIDFcbiAgICAgICAgLy8gaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCByZWZDaGlsZCkgaW5zZXJ0cyB0aGUgY2hpbGQgbm9kZSBuZXdDaGlsZCBiZWZvcmUgcmVmQ2hpbGRcbiAgICAgICAgaWYgKG5hbWUgIT0gbnVsbCA/IG5hbWUudHlwZSA6IHZvaWQgMCkge1xuICAgICAgICAgIG5ld0NoaWxkID0gbmFtZTtcbiAgICAgICAgICByZWZDaGlsZCA9IGF0dHJpYnV0ZXM7XG4gICAgICAgICAgbmV3Q2hpbGQuc2V0UGFyZW50KHRoaXMpO1xuICAgICAgICAgIGlmIChyZWZDaGlsZCkge1xuICAgICAgICAgICAgLy8gdGVtcG9yYXJpbHkgcmVtb3ZlIGNoaWxkcmVuIHN0YXJ0aW5nICp3aXRoKiByZWZDaGlsZFxuICAgICAgICAgICAgaSA9IGNoaWxkcmVuLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICAgICAgcmVtb3ZlZCA9IGNoaWxkcmVuLnNwbGljZShpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXcgY2hpbGRcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZGQgYmFjayByZW1vdmVkIGNoaWxkcmVuIGFmdGVyIG5ldyBjaGlsZFxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY2hpbGRyZW4sIHJlbW92ZWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmlzUm9vdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluc2VydCBlbGVtZW50cyBhdCByb290IGxldmVsLiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gdGVtcG9yYXJpbHkgcmVtb3ZlIGNoaWxkcmVuIHN0YXJ0aW5nICp3aXRoKiB0aGlzXG4gICAgICAgICAgaSA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgcmVtb3ZlZCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBhZGQgdGhlIG5ldyBjaGlsZFxuICAgICAgICAgIGNoaWxkID0gdGhpcy5wYXJlbnQuZWxlbWVudChuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBhZGQgYmFjayByZW1vdmVkIGNoaWxkcmVuIGFmdGVyIG5ldyBjaGlsZFxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMucGFyZW50LmNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlcyBhIGNoaWxkIGVsZW1lbnQgbm9kZSBhZnRlciB0aGUgY3VycmVudCBub2RlXG5cbiAgICAgIC8vIGBuYW1lYCBub2RlIG5hbWUgb3IgYW4gb2JqZWN0IGRlc2NyaWJpbmcgdGhlIFhNTCB0cmVlXG4gICAgICAvLyBgYXR0cmlidXRlc2AgYW4gb2JqZWN0IGNvbnRhaW5pbmcgbmFtZS92YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzXG4gICAgICAvLyBgdGV4dGAgZWxlbWVudCB0ZXh0XG4gICAgICBpbnNlcnRBZnRlcihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICAgIHZhciBjaGlsZCwgaSwgcmVtb3ZlZDtcbiAgICAgICAgaWYgKHRoaXMuaXNSb290KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluc2VydCBlbGVtZW50cyBhdCByb290IGxldmVsLiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgcmVtb3ZlIGNoaWxkcmVuIHN0YXJ0aW5nICphZnRlciogdGhpc1xuICAgICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgcmVtb3ZlZCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpICsgMSk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdGhlIG5ldyBjaGlsZFxuICAgICAgICBjaGlsZCA9IHRoaXMucGFyZW50LmVsZW1lbnQobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgYmFjayByZW1vdmVkIGNoaWxkcmVuIGFmdGVyIG5ldyBjaGlsZFxuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLnBhcmVudC5jaGlsZHJlbiwgcmVtb3ZlZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlcyBhIGNoaWxkIGVsZW1lbnQgbm9kZVxuXG4gICAgICByZW1vdmUoKSB7XG4gICAgICAgIHZhciBpLCByZWYxO1xuICAgICAgICBpZiAodGhpcy5pc1Jvb3QpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVtb3ZlIHRoZSByb290IGVsZW1lbnQuIFwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICAgIH1cbiAgICAgICAgaSA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgIHNwbGljZS5hcHBseSh0aGlzLnBhcmVudC5jaGlsZHJlbiwgW2ksIGkgLSBpICsgMV0uY29uY2F0KHJlZjEgPSBbXSkpLCByZWYxO1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBub2RlXG5cbiAgICAgIC8vIGBuYW1lYCBuYW1lIG9mIHRoZSBub2RlXG4gICAgICAvLyBgYXR0cmlidXRlc2AgYW4gb2JqZWN0IGNvbnRhaW5pbmcgbmFtZS92YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzXG4gICAgICAvLyBgdGV4dGAgZWxlbWVudCB0ZXh0XG4gICAgICBub2RlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgICAgdmFyIGNoaWxkO1xuICAgICAgICBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgbmFtZSA9IGdldFZhbHVlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZXMgfHwgKGF0dHJpYnV0ZXMgPSB7fSk7XG4gICAgICAgIGF0dHJpYnV0ZXMgPSBnZXRWYWx1ZShhdHRyaWJ1dGVzKTtcbiAgICAgICAgLy8gc3dhcCBhcmd1bWVudCBvcmRlcjogdGV4dCA8LT4gYXR0cmlidXRlc1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgW3RleHQsIGF0dHJpYnV0ZXNdID0gW2F0dHJpYnV0ZXMsIHRleHRdO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gbmV3IFhNTEVsZW1lbnQodGhpcywgbmFtZSwgYXR0cmlidXRlcyk7XG4gICAgICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICBjaGlsZC50ZXh0KHRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlcyBhIHRleHQgbm9kZVxuXG4gICAgICAvLyBgdmFsdWVgIGVsZW1lbnQgdGV4dFxuICAgICAgdGV4dCh2YWx1ZSkge1xuICAgICAgICB2YXIgY2hpbGQ7XG4gICAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gbmV3IFhNTFRleHQodGhpcywgdmFsdWUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlcyBhIENEQVRBIG5vZGVcblxuICAgICAgLy8gYHZhbHVlYCBlbGVtZW50IHRleHQgd2l0aG91dCBDREFUQSBkZWxpbWl0ZXJzXG4gICAgICBjZGF0YSh2YWx1ZSkge1xuICAgICAgICB2YXIgY2hpbGQ7XG4gICAgICAgIGNoaWxkID0gbmV3IFhNTENEYXRhKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBjb21tZW50IG5vZGVcblxuICAgICAgLy8gYHZhbHVlYCBjb21tZW50IHRleHRcbiAgICAgIGNvbW1lbnQodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoaWxkO1xuICAgICAgICBjaGlsZCA9IG5ldyBYTUxDb21tZW50KHRoaXMsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBjb21tZW50IG5vZGUgYmVmb3JlIHRoZSBjdXJyZW50IG5vZGVcblxuICAgICAgLy8gYHZhbHVlYCBjb21tZW50IHRleHRcbiAgICAgIGNvbW1lbnRCZWZvcmUodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBpLCByZW1vdmVkO1xuICAgICAgICAvLyB0ZW1wb3JhcmlseSByZW1vdmUgY2hpbGRyZW4gc3RhcnRpbmcgKndpdGgqIHRoaXNcbiAgICAgICAgaSA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgIHJlbW92ZWQgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaSk7XG4gICAgICAgIC8vIGFkZCB0aGUgbmV3IGNoaWxkXG4gICAgICAgIGNoaWxkID0gdGhpcy5wYXJlbnQuY29tbWVudCh2YWx1ZSk7XG4gICAgICAgIC8vIGFkZCBiYWNrIHJlbW92ZWQgY2hpbGRyZW4gYWZ0ZXIgbmV3IGNoaWxkXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMucGFyZW50LmNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgYSBjb21tZW50IG5vZGUgYWZ0ZXIgdGhlIGN1cnJlbnQgbm9kZVxuXG4gICAgICAvLyBgdmFsdWVgIGNvbW1lbnQgdGV4dFxuICAgICAgY29tbWVudEFmdGVyKHZhbHVlKSB7XG4gICAgICAgIHZhciBjaGlsZCwgaSwgcmVtb3ZlZDtcbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgcmVtb3ZlIGNoaWxkcmVuIHN0YXJ0aW5nICphZnRlciogdGhpc1xuICAgICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgcmVtb3ZlZCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpICsgMSk7XG4gICAgICAgIC8vIGFkZCB0aGUgbmV3IGNoaWxkXG4gICAgICAgIGNoaWxkID0gdGhpcy5wYXJlbnQuY29tbWVudCh2YWx1ZSk7XG4gICAgICAgIC8vIGFkZCBiYWNrIHJlbW92ZWQgY2hpbGRyZW4gYWZ0ZXIgbmV3IGNoaWxkXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMucGFyZW50LmNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZHMgdW5lc2NhcGVkIHJhdyB0ZXh0XG5cbiAgICAgIC8vIGB2YWx1ZWAgdGV4dFxuICAgICAgcmF3KHZhbHVlKSB7XG4gICAgICAgIHZhciBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBuZXcgWE1MUmF3KHRoaXMsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZHMgYSBkdW1teSBub2RlXG4gICAgICBkdW1teSgpIHtcbiAgICAgICAgdmFyIGNoaWxkO1xuICAgICAgICBjaGlsZCA9IG5ldyBYTUxEdW1teSh0aGlzKTtcbiAgICAgICAgLy8gTm9ybWFsbHkgd2hlbiBhIG5ldyBub2RlIGlzIGNyZWF0ZWQgaXQgaXMgYWRkZWQgdG8gdGhlIGNoaWxkIG5vZGUgY29sbGVjdGlvbi5cbiAgICAgICAgLy8gSG93ZXZlciwgZHVtbXkgbm9kZXMgYXJlIG5ldmVyIGFkZGVkIHRvIHRoZSBYTUwgdHJlZS4gVGhleSBhcmUgY3JlYXRlZCB3aGlsZVxuICAgICAgICAvLyBjb252ZXJ0aW5nIEpTIG9iamVjdHMgdG8gWE1MIG5vZGVzIGluIG9yZGVyIG5vdCB0byBicmVhayB0aGUgcmVjdXJzaXZlIGZ1bmN0aW9uXG4gICAgICAgIC8vIGNoYWluLiBUaGV5IGNhbiBiZSB0aG91Z2h0IG9mIGFzIGludmlzaWJsZSBub2Rlcy4gVGhleSBjYW4gYmUgdHJhdmVyc2VkIHRocm91Z2hcbiAgICAgICAgLy8gYnkgdXNpbmcgcHJldigpLCBuZXh0KCksIHVwKCksIGV0Yy4gZnVuY3Rpb25zIGJ1dCB0aGV5IGRvIG5vdCBleGlzdHMgaW4gdGhlIHRyZWUuXG5cbiAgICAgICAgLy8gQGNoaWxkcmVuLnB1c2ggY2hpbGRcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGRzIGEgcHJvY2Vzc2luZyBpbnN0cnVjdGlvblxuXG4gICAgICAvLyBgdGFyZ2V0YCBpbnN0cnVjdGlvbiB0YXJnZXRcbiAgICAgIC8vIGB2YWx1ZWAgaW5zdHJ1Y3Rpb24gdmFsdWVcbiAgICAgIGluc3RydWN0aW9uKHRhcmdldCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGluc1RhcmdldCwgaW5zVmFsdWUsIGluc3RydWN0aW9uLCBqLCBsZW47XG4gICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgIHRhcmdldCA9IGdldFZhbHVlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9IGdldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7IC8vIGV4cGFuZCBpZiBhcnJheVxuICAgICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHRhcmdldC5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgaW5zVGFyZ2V0ID0gdGFyZ2V0W2pdO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVjdGlvbihpbnNUYXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdCh0YXJnZXQpKSB7IC8vIGV4cGFuZCBpZiBvYmplY3RcbiAgICAgICAgICBmb3IgKGluc1RhcmdldCBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghaGFzUHJvcC5jYWxsKHRhcmdldCwgaW5zVGFyZ2V0KSkgY29udGludWU7XG4gICAgICAgICAgICBpbnNWYWx1ZSA9IHRhcmdldFtpbnNUYXJnZXRdO1xuICAgICAgICAgICAgdGhpcy5pbnN0cnVjdGlvbihpbnNUYXJnZXQsIGluc1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluc3RydWN0aW9uID0gbmV3IFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbih0aGlzLCB0YXJnZXQsIHZhbHVlKTtcbiAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goaW5zdHJ1Y3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGVzIGEgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2RlIGJlZm9yZSB0aGUgY3VycmVudCBub2RlXG5cbiAgICAgIC8vIGB0YXJnZXRgIGluc3RydWN0aW9uIHRhcmdldFxuICAgICAgLy8gYHZhbHVlYCBpbnN0cnVjdGlvbiB2YWx1ZVxuICAgICAgaW5zdHJ1Y3Rpb25CZWZvcmUodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgY2hpbGQsIGksIHJlbW92ZWQ7XG4gICAgICAgIC8vIHRlbXBvcmFyaWx5IHJlbW92ZSBjaGlsZHJlbiBzdGFydGluZyAqd2l0aCogdGhpc1xuICAgICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgcmVtb3ZlZCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpKTtcbiAgICAgICAgLy8gYWRkIHRoZSBuZXcgY2hpbGRcbiAgICAgICAgY2hpbGQgPSB0aGlzLnBhcmVudC5pbnN0cnVjdGlvbih0YXJnZXQsIHZhbHVlKTtcbiAgICAgICAgLy8gYWRkIGJhY2sgcmVtb3ZlZCBjaGlsZHJlbiBhZnRlciBuZXcgY2hpbGRcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5wYXJlbnQuY2hpbGRyZW4sIHJlbW92ZWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlcyBhIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZSBhZnRlciB0aGUgY3VycmVudCBub2RlXG5cbiAgICAgIC8vIGB0YXJnZXRgIGluc3RydWN0aW9uIHRhcmdldFxuICAgICAgLy8gYHZhbHVlYCBpbnN0cnVjdGlvbiB2YWx1ZVxuICAgICAgaW5zdHJ1Y3Rpb25BZnRlcih0YXJnZXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciBjaGlsZCwgaSwgcmVtb3ZlZDtcbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgcmVtb3ZlIGNoaWxkcmVuIHN0YXJ0aW5nICphZnRlciogdGhpc1xuICAgICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgcmVtb3ZlZCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpICsgMSk7XG4gICAgICAgIC8vIGFkZCB0aGUgbmV3IGNoaWxkXG4gICAgICAgIGNoaWxkID0gdGhpcy5wYXJlbnQuaW5zdHJ1Y3Rpb24odGFyZ2V0LCB2YWx1ZSk7XG4gICAgICAgIC8vIGFkZCBiYWNrIHJlbW92ZWQgY2hpbGRyZW4gYWZ0ZXIgbmV3IGNoaWxkXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMucGFyZW50LmNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZXMgdGhlIHhtbCBkZWNsYXJhdGlvblxuXG4gICAgICAvLyBgdmVyc2lvbmAgQSB2ZXJzaW9uIG51bWJlciBzdHJpbmcsIGUuZy4gMS4wXG4gICAgICAvLyBgZW5jb2RpbmdgIEVuY29kaW5nIGRlY2xhcmF0aW9uLCBlLmcuIFVURi04XG4gICAgICAvLyBgc3RhbmRhbG9uZWAgc3RhbmRhbG9uZSBkb2N1bWVudCBkZWNsYXJhdGlvbjogdHJ1ZSBvciBmYWxzZVxuICAgICAgZGVjbGFyYXRpb24odmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpIHtcbiAgICAgICAgdmFyIGRvYywgeG1sZGVjO1xuICAgICAgICBkb2MgPSB0aGlzLmRvY3VtZW50KCk7XG4gICAgICAgIHhtbGRlYyA9IG5ldyBYTUxEZWNsYXJhdGlvbihkb2MsIHZlcnNpb24sIGVuY29kaW5nLCBzdGFuZGFsb25lKTtcbiAgICAgICAgLy8gUmVwbGFjZSBYTUwgZGVjbGFyYXRpb24gaWYgZXhpc3RzLCBvdGhlcndpc2UgaW5zZXJ0IGF0IHRvcFxuICAgICAgICBpZiAoZG9jLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRvYy5jaGlsZHJlbi51bnNoaWZ0KHhtbGRlYyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jLmNoaWxkcmVuWzBdLnR5cGUgPT09IE5vZGVUeXBlLkRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgZG9jLmNoaWxkcmVuWzBdID0geG1sZGVjO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvYy5jaGlsZHJlbi51bnNoaWZ0KHhtbGRlYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRvYy5yb290KCkgfHwgZG9jO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGVzIHRoZSBkb2N1bWVudCB0eXBlIGRlY2xhcmF0aW9uXG5cbiAgICAgIC8vIGBwdWJJRGAgdGhlIHB1YmxpYyBpZGVudGlmaWVyIG9mIHRoZSBleHRlcm5hbCBzdWJzZXRcbiAgICAgIC8vIGBzeXNJRGAgdGhlIHN5c3RlbSBpZGVudGlmaWVyIG9mIHRoZSBleHRlcm5hbCBzdWJzZXRcbiAgICAgIGR0ZChwdWJJRCwgc3lzSUQpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBkb2MsIGRvY3R5cGUsIGksIGosIGssIGxlbiwgbGVuMSwgcmVmMSwgcmVmMjtcbiAgICAgICAgZG9jID0gdGhpcy5kb2N1bWVudCgpO1xuICAgICAgICBkb2N0eXBlID0gbmV3IFhNTERvY1R5cGUoZG9jLCBwdWJJRCwgc3lzSUQpO1xuICAgICAgICByZWYxID0gZG9jLmNoaWxkcmVuO1xuICAgICAgICAvLyBSZXBsYWNlIERURCBpZiBleGlzdHNcbiAgICAgICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWYxW2ldO1xuICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBOb2RlVHlwZS5Eb2NUeXBlKSB7XG4gICAgICAgICAgICBkb2MuY2hpbGRyZW5baV0gPSBkb2N0eXBlO1xuICAgICAgICAgICAgcmV0dXJuIGRvY3R5cGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZjIgPSBkb2MuY2hpbGRyZW47XG4gICAgICAgIC8vIGluc2VydCBiZWZvcmUgcm9vdCBub2RlIGlmIHRoZSByb290IG5vZGUgZXhpc3RzXG4gICAgICAgIGZvciAoaSA9IGsgPSAwLCBsZW4xID0gcmVmMi5sZW5ndGg7IGsgPCBsZW4xOyBpID0gKytrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWYyW2ldO1xuICAgICAgICAgIGlmIChjaGlsZC5pc1Jvb3QpIHtcbiAgICAgICAgICAgIGRvYy5jaGlsZHJlbi5zcGxpY2UoaSwgMCwgZG9jdHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gZG9jdHlwZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlIGFwcGVuZCB0byBlbmRcbiAgICAgICAgZG9jLmNoaWxkcmVuLnB1c2goZG9jdHlwZSk7XG4gICAgICAgIHJldHVybiBkb2N0eXBlO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXRzIHRoZSBwYXJlbnQgbm9kZVxuICAgICAgdXAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUm9vdCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSByb290IG5vZGUgaGFzIG5vIHBhcmVudC4gVXNlIGRvYygpIGlmIHlvdSBuZWVkIHRvIGdldCB0aGUgZG9jdW1lbnQgb2JqZWN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEdldHMgdGhlIHJvb3Qgbm9kZVxuICAgICAgcm9vdCgpIHtcbiAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgIG5vZGUgPSB0aGlzO1xuICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5yb290T2JqZWN0O1xuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5pc1Jvb3QpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEdldHMgdGhlIG5vZGUgcmVwcmVzZW50aW5nIHRoZSBYTUwgZG9jdW1lbnRcbiAgICAgIGRvY3VtZW50KCkge1xuICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgbm9kZSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuZHMgdGhlIGRvY3VtZW50IGFuZCBjb252ZXJ0cyBzdHJpbmdcbiAgICAgIGVuZChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50KCkuZW5kKG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXRzIHRoZSBwcmV2aW91cyBub2RlXG4gICAgICBwcmV2KCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaSA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgIGlmIChpIDwgMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFscmVhZHkgYXQgdGhlIGZpcnN0IG5vZGUuIFwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmNoaWxkcmVuW2kgLSAxXTtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0cyB0aGUgbmV4dCBub2RlXG4gICAgICBuZXh0KCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaSA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgIGlmIChpID09PSAtMSB8fCBpID09PSB0aGlzLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWxyZWFkeSBhdCB0aGUgbGFzdCBub2RlLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlbltpICsgMV07XG4gICAgICB9XG5cbiAgICAgIC8vIEltcG9ydHMgY2xvbmVkIHJvb3QgZnJvbSBhbm90aGVyIFhNTCBkb2N1bWVudFxuXG4gICAgICAvLyBgZG9jYCB0aGUgWE1MIGRvY3VtZW50IHRvIGluc2VydCBub2RlcyBmcm9tXG4gICAgICBpbXBvcnREb2N1bWVudChkb2MpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBjbG9uZWRSb290LCBqLCBsZW4sIHJlZjE7XG4gICAgICAgIGNsb25lZFJvb3QgPSBkb2Mucm9vdCgpLmNsb25lKCk7XG4gICAgICAgIGNsb25lZFJvb3QucGFyZW50ID0gdGhpcztcbiAgICAgICAgY2xvbmVkUm9vdC5pc1Jvb3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNsb25lZFJvb3QpO1xuICAgICAgICAvLyBzZXQgcHJvcGVydGllcyBpZiBpbXBvcnRlZCBlbGVtZW50IGJlY29tZXMgdGhlIHJvb3Qgbm9kZVxuICAgICAgICBpZiAodGhpcy50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCkge1xuICAgICAgICAgIGNsb25lZFJvb3QuaXNSb290ID0gdHJ1ZTtcbiAgICAgICAgICBjbG9uZWRSb290LmRvY3VtZW50T2JqZWN0ID0gdGhpcztcbiAgICAgICAgICB0aGlzLnJvb3RPYmplY3QgPSBjbG9uZWRSb290O1xuICAgICAgICAgIC8vIHNldCBkdGQgbmFtZVxuICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICByZWYxID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgY2hpbGQgPSByZWYxW2pdO1xuICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gTm9kZVR5cGUuRG9jVHlwZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLm5hbWUgPSBjbG9uZWRSb290Lm5hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIFxuICAgICAgLy8gUmV0dXJucyBkZWJ1ZyBzdHJpbmcgZm9yIHRoaXMgbm9kZVxuICAgICAgZGVidWdJbmZvKG5hbWUpIHtcbiAgICAgICAgdmFyIHJlZjEsIHJlZjI7XG4gICAgICAgIG5hbWUgPSBuYW1lIHx8IHRoaXMubmFtZTtcbiAgICAgICAgaWYgKChuYW1lID09IG51bGwpICYmICEoKHJlZjEgPSB0aGlzLnBhcmVudCkgIT0gbnVsbCA/IHJlZjEubmFtZSA6IHZvaWQgMCkpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gXCJwYXJlbnQ6IDxcIiArIHRoaXMucGFyZW50Lm5hbWUgKyBcIj5cIjtcbiAgICAgICAgfSBlbHNlIGlmICghKChyZWYyID0gdGhpcy5wYXJlbnQpICE9IG51bGwgPyByZWYyLm5hbWUgOiB2b2lkIDApKSB7XG4gICAgICAgICAgcmV0dXJuIFwibm9kZTogPFwiICsgbmFtZSArIFwiPlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIm5vZGU6IDxcIiArIG5hbWUgKyBcIj4sIHBhcmVudDogPFwiICsgdGhpcy5wYXJlbnQubmFtZSArIFwiPlwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFsaWFzZXNcbiAgICAgIGVsZShuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgIG5vZChuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHR4dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZGF0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNkYXRhKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29tKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnQodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpbnModGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbih0YXJnZXQsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZG9jKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2N1bWVudCgpO1xuICAgICAgfVxuXG4gICAgICBkZWModmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24odmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpO1xuICAgICAgfVxuXG4gICAgICBlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudChuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgbihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2RhdGEodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBjKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnQodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhdyh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGkodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbih0YXJnZXQsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXAoKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FuIGJlIGRlcHJlY2F0ZWQgaW4gYSBmdXR1cmUgcmVsZWFzZVxuICAgICAgaW1wb3J0WE1MQnVpbGRlcihkb2MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wb3J0RG9jdW1lbnQoZG9jKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkcyBvciBtb2RpZmllcyBhbiBhdHRyaWJ1dGUuXG5cbiAgICAgIC8vIGBuYW1lYCBhdHRyaWJ1dGUgbmFtZVxuICAgICAgLy8gYHZhbHVlYCBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIGF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdHRyaWJ1dGUoKSBhcHBsaWVzIHRvIGVsZW1lbnQgbm9kZXMgb25seS5cIik7XG4gICAgICB9XG5cbiAgICAgIGF0dChuYW1lLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBhKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZXMgYW4gYXR0cmlidXRlXG5cbiAgICAgIC8vIGBuYW1lYCBhdHRyaWJ1dGUgbmFtZVxuICAgICAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlKCkgYXBwbGllcyB0byBlbGVtZW50IG5vZGVzIG9ubHkuXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBET00gbGV2ZWwgMSBmdW5jdGlvbnMgdG8gYmUgaW1wbGVtZW50ZWQgbGF0ZXJcbiAgICAgIHJlcGxhY2VDaGlsZChuZXdDaGlsZCwgb2xkQ2hpbGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICByZW1vdmVDaGlsZChvbGRDaGlsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGFwcGVuZENoaWxkKG5ld0NoaWxkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoICE9PSAwO1xuICAgICAgfVxuXG4gICAgICBjbG9uZU5vZGUoZGVlcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBET00gbGV2ZWwgMlxuICAgICAgaXNTdXBwb3J0ZWQoZmVhdHVyZSwgdmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaGFzQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlicy5sZW5ndGggIT09IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIERPTSBsZXZlbCAzIGZ1bmN0aW9ucyB0byBiZSBpbXBsZW1lbnRlZCBsYXRlclxuICAgICAgY29tcGFyZURvY3VtZW50UG9zaXRpb24ob3RoZXIpIHtcbiAgICAgICAgdmFyIHJlZiwgcmVzO1xuICAgICAgICByZWYgPSB0aGlzO1xuICAgICAgICBpZiAocmVmID09PSBvdGhlcikge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZG9jdW1lbnQoKSAhPT0gb3RoZXIuZG9jdW1lbnQoKSkge1xuICAgICAgICAgIHJlcyA9IERvY3VtZW50UG9zaXRpb24uRGlzY29ubmVjdGVkIHwgRG9jdW1lbnRQb3NpdGlvbi5JbXBsZW1lbnRhdGlvblNwZWNpZmljO1xuICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICByZXMgfD0gRG9jdW1lbnRQb3NpdGlvbi5QcmVjZWRpbmc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyB8PSBEb2N1bWVudFBvc2l0aW9uLkZvbGxvd2luZztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBlbHNlIGlmIChyZWYuaXNBbmNlc3RvcihvdGhlcikpIHtcbiAgICAgICAgICByZXR1cm4gRG9jdW1lbnRQb3NpdGlvbi5Db250YWlucyB8IERvY3VtZW50UG9zaXRpb24uUHJlY2VkaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKHJlZi5pc0Rlc2NlbmRhbnQob3RoZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIERvY3VtZW50UG9zaXRpb24uQ29udGFpbnMgfCBEb2N1bWVudFBvc2l0aW9uLkZvbGxvd2luZztcbiAgICAgICAgfSBlbHNlIGlmIChyZWYuaXNQcmVjZWRpbmcob3RoZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIERvY3VtZW50UG9zaXRpb24uUHJlY2VkaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBEb2N1bWVudFBvc2l0aW9uLkZvbGxvd2luZztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpc1NhbWVOb2RlKG90aGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgbG9va3VwUHJlZml4KG5hbWVzcGFjZVVSSSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBsb29rdXBOYW1lc3BhY2VVUkkocHJlZml4KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgaXNFcXVhbE5vZGUobm9kZSkge1xuICAgICAgICB2YXIgaSwgaiwgcmVmMTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IHRoaXMubm9kZVR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSB0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBqID0gMCwgcmVmMSA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgKDAgPD0gcmVmMSA/IGogPD0gcmVmMSA6IGogPj0gcmVmMSk7IGkgPSAwIDw9IHJlZjEgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5baV0uaXNFcXVhbE5vZGUobm9kZS5jaGlsZHJlbltpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGdldEZlYXR1cmUoZmVhdHVyZSwgdmVyc2lvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIHNldFVzZXJEYXRhKGtleSwgZGF0YSwgaGFuZGxlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGdldFVzZXJEYXRhKGtleSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybnMgdHJ1ZSBpZiBvdGhlciBpcyBhbiBpbmNsdXNpdmUgZGVzY2VuZGFudCBvZiBub2RlLFxuICAgICAgLy8gYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgIGNvbnRhaW5zKG90aGVyKSB7XG4gICAgICAgIGlmICghb3RoZXIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG90aGVyID09PSB0aGlzIHx8IHRoaXMuaXNEZXNjZW5kYW50KG90aGVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gQW4gb2JqZWN0IEEgaXMgY2FsbGVkIGEgZGVzY2VuZGFudCBvZiBhbiBvYmplY3QgQiwgaWYgZWl0aGVyIEEgaXMgXG4gICAgICAvLyBhIGNoaWxkIG9mIEIgb3IgQSBpcyBhIGNoaWxkIG9mIGFuIG9iamVjdCBDIHRoYXQgaXMgYSBkZXNjZW5kYW50IG9mIEIuXG4gICAgICBpc0Rlc2NlbmRhbnQobm9kZSkge1xuICAgICAgICB2YXIgY2hpbGQsIGlzRGVzY2VuZGFudENoaWxkLCBqLCBsZW4sIHJlZjE7XG4gICAgICAgIHJlZjEgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYxLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWYxW2pdO1xuICAgICAgICAgIGlmIChub2RlID09PSBjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlzRGVzY2VuZGFudENoaWxkID0gY2hpbGQuaXNEZXNjZW5kYW50KG5vZGUpO1xuICAgICAgICAgIGlmIChpc0Rlc2NlbmRhbnRDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQW4gb2JqZWN0IEEgaXMgY2FsbGVkIGFuIGFuY2VzdG9yIG9mIGFuIG9iamVjdCBCIGlmIGFuZCBvbmx5IGlmXG4gICAgICAvLyBCIGlzIGEgZGVzY2VuZGFudCBvZiBBLlxuICAgICAgaXNBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmlzRGVzY2VuZGFudCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gQW4gb2JqZWN0IEEgaXMgcHJlY2VkaW5nIGFuIG9iamVjdCBCIGlmIEEgYW5kIEIgYXJlIGluIHRoZSBcbiAgICAgIC8vIHNhbWUgdHJlZSBhbmQgQSBjb21lcyBiZWZvcmUgQiBpbiB0cmVlIG9yZGVyLlxuICAgICAgaXNQcmVjZWRpbmcobm9kZSkge1xuICAgICAgICB2YXIgbm9kZVBvcywgdGhpc1BvcztcbiAgICAgICAgbm9kZVBvcyA9IHRoaXMudHJlZVBvc2l0aW9uKG5vZGUpO1xuICAgICAgICB0aGlzUG9zID0gdGhpcy50cmVlUG9zaXRpb24odGhpcyk7XG4gICAgICAgIGlmIChub2RlUG9zID09PSAtMSB8fCB0aGlzUG9zID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVBvcyA8IHRoaXNQb3M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQW4gb2JqZWN0IEEgaXMgZm9sbGxvd2luZyBhbiBvYmplY3QgQiBpZiBBIGFuZCBCIGFyZSBpbiB0aGUgXG4gICAgICAvLyBzYW1lIHRyZWUgYW5kIEEgY29tZXMgYWZ0ZXIgQiBpbiB0cmVlIG9yZGVyLlxuICAgICAgaXNGb2xsb3dpbmcobm9kZSkge1xuICAgICAgICB2YXIgbm9kZVBvcywgdGhpc1BvcztcbiAgICAgICAgbm9kZVBvcyA9IHRoaXMudHJlZVBvc2l0aW9uKG5vZGUpO1xuICAgICAgICB0aGlzUG9zID0gdGhpcy50cmVlUG9zaXRpb24odGhpcyk7XG4gICAgICAgIGlmIChub2RlUG9zID09PSAtMSB8fCB0aGlzUG9zID09PSAtMSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVBvcyA+IHRoaXNQb3M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJucyB0aGUgcHJlb3JkZXIgcG9zaXRpb24gb2YgdGhlIGdpdmVuIG5vZGUgaW4gdGhlIHRyZWUsIG9yIC0xXG4gICAgICAvLyBpZiB0aGUgbm9kZSBpcyBub3QgaW4gdGhlIHRyZWUuXG4gICAgICB0cmVlUG9zaXRpb24obm9kZSkge1xuICAgICAgICB2YXIgZm91bmQsIHBvcztcbiAgICAgICAgcG9zID0gMDtcbiAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JlYWNoVHJlZU5vZGUodGhpcy5kb2N1bWVudCgpLCBmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgICAgICBwb3MrKztcbiAgICAgICAgICBpZiAoIWZvdW5kICYmIGNoaWxkTm9kZSA9PT0gbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBcbiAgICAgIC8vIERlcHRoLWZpcnN0IHByZW9yZGVyIHRyYXZlcnNhbCB0aHJvdWdoIHRoZSBYTUwgdHJlZVxuICAgICAgZm9yZWFjaFRyZWVOb2RlKG5vZGUsIGZ1bmMpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBqLCBsZW4sIHJlZjEsIHJlcztcbiAgICAgICAgbm9kZSB8fCAobm9kZSA9IHRoaXMuZG9jdW1lbnQoKSk7XG4gICAgICAgIHJlZjEgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYxLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWYxW2pdO1xuICAgICAgICAgIGlmIChyZXMgPSBmdW5jKGNoaWxkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5mb3JlYWNoVHJlZU5vZGUoY2hpbGQsIGZ1bmMpO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8vIERPTSBsZXZlbCAxXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAnbm9kZU5hbWUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAnbm9kZVR5cGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAnbm9kZVZhbHVlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdwYXJlbnROb2RlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAnY2hpbGROb2RlcycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZE5vZGVMaXN0IHx8ICF0aGlzLmNoaWxkTm9kZUxpc3Qubm9kZXMpIHtcbiAgICAgICAgICB0aGlzLmNoaWxkTm9kZUxpc3QgPSBuZXcgWE1MTm9kZUxpc3QodGhpcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlTGlzdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxOb2RlLnByb3RvdHlwZSwgJ2ZpcnN0Q2hpbGQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlblswXSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAnbGFzdENoaWxkJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAncHJldmlvdXNTaWJsaW5nJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGkgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuY2hpbGRyZW5baSAtIDFdIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICduZXh0U2libGluZycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmNoaWxkcmVuW2kgKyAxXSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAnb3duZXJEb2N1bWVudCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50KCkgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERPTSBsZXZlbCAzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hpbGQsIGosIGxlbiwgcmVmMSwgc3RyO1xuICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCB8fCB0aGlzLm5vZGVUeXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgcmVmMSA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmMS5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgY2hpbGQgPSByZWYxW2pdO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgIHN0ciArPSBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFhNTE5vZGU7XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIC8vIENvbnZlcnRzIHZhbHVlcyB0byBzdHJpbmdzXG4gIHZhciBYTUxTdHJpbmdpZmllcixcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxTdHJpbmdpZmllciA9IChmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBYTUxTdHJpbmdpZmllciB7XG4gICAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MU3RyaW5naWZpZXJgXG5cbiAgICAgIC8vIGBvcHRpb25zLnZlcnNpb25gIFRoZSB2ZXJzaW9uIG51bWJlciBzdHJpbmcgb2YgdGhlIFhNTCBzcGVjIHRvIHZhbGlkYXRlIGFnYWluc3QsIGUuZy4gMS4wXG4gICAgICAvLyBgb3B0aW9ucy5ub0RvdWJsZUVuY29kaW5nYCB3aGV0aGVyIGV4aXN0aW5nIGh0bWwgZW50aXRpZXMgYXJlIGVuY29kZWQ6IHRydWUgb3IgZmFsc2VcbiAgICAgIC8vIGBvcHRpb25zLnN0cmluZ2lmeWAgYSBzZXQgb2YgZnVuY3Rpb25zIHRvIHVzZSBmb3IgY29udmVydGluZyB2YWx1ZXMgdG8gc3RyaW5nc1xuICAgICAgLy8gYG9wdGlvbnMubm9WYWxpZGF0aW9uYCB3aGV0aGVyIHZhbHVlcyB3aWxsIGJlIHZhbGlkYXRlZCBhbmQgZXNjYXBlZCBvciByZXR1cm5lZCBhcyBpc1xuICAgICAgLy8gYG9wdGlvbnMuaW52YWxpZENoYXJSZXBsYWNlbWVudGAgYSBjaGFyYWN0ZXIgdG8gcmVwbGFjZSBpbnZhbGlkIGNoYXJhY3RlcnMgYW5kIGRpc2FibGUgY2hhcmFjdGVyIHZhbGlkYXRpb25cbiAgICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGtleSwgcmVmLCB2YWx1ZTtcbiAgICAgICAgLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHN0cmluZyBjb250YWlucyBsZWdhbCBjaGFyYWN0ZXJzXG4gICAgICAgIC8vIEZhaWxzIHdpdGggYW4gZXhjZXB0aW9uIG9uIGVycm9yXG5cbiAgICAgICAgLy8gYHN0cmAgdGhlIHN0cmluZyB0byBjaGVja1xuICAgICAgICB0aGlzLmFzc2VydExlZ2FsQ2hhciA9IHRoaXMuYXNzZXJ0TGVnYWxDaGFyLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBzdHJpbmcgY29udGFpbnMgbGVnYWwgY2hhcmFjdGVycyBmb3IgYSBuYW1lXG4gICAgICAgIC8vIEZhaWxzIHdpdGggYW4gZXhjZXB0aW9uIG9uIGVycm9yXG5cbiAgICAgICAgLy8gYHN0cmAgdGhlIHN0cmluZyB0byBjaGVja1xuICAgICAgICB0aGlzLmFzc2VydExlZ2FsTmFtZSA9IHRoaXMuYXNzZXJ0TGVnYWxOYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnZlcnNpb24pIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMudmVyc2lvbiA9ICcxLjAnO1xuICAgICAgICB9XG4gICAgICAgIHJlZiA9IG9wdGlvbnMuc3RyaW5naWZ5IHx8IHt9O1xuICAgICAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChyZWYsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgIHZhbHVlID0gcmVmW2tleV07XG4gICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRGVmYXVsdHNcbiAgICAgIG5hbWUodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hc3NlcnRMZWdhbE5hbWUoJycgKyB2YWwgfHwgJycpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0KHZhbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKHRoaXMudGV4dEVzY2FwZSgnJyArIHZhbCB8fCAnJykpO1xuICAgICAgfVxuXG4gICAgICBjZGF0YSh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHZhbCA9ICcnICsgdmFsIHx8ICcnO1xuICAgICAgICB2YWwgPSB2YWwucmVwbGFjZSgnXV0+JywgJ11dXV0+PCFbQ0RBVEFbPicpO1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NlcnRMZWdhbENoYXIodmFsKTtcbiAgICAgIH1cblxuICAgICAgY29tbWVudCh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHZhbCA9ICcnICsgdmFsIHx8ICcnO1xuICAgICAgICBpZiAodmFsLm1hdGNoKC8tLS8pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29tbWVudCB0ZXh0IGNhbm5vdCBjb250YWluIGRvdWJsZS1oeXBlbjogXCIgKyB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcih2YWwpO1xuICAgICAgfVxuXG4gICAgICByYXcodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJycgKyB2YWwgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGF0dFZhbHVlKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKHRoaXMuYXR0RXNjYXBlKHZhbCA9ICcnICsgdmFsIHx8ICcnKSk7XG4gICAgICB9XG5cbiAgICAgIGluc1RhcmdldCh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGluc1ZhbHVlKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgdmFsID0gJycgKyB2YWwgfHwgJyc7XG4gICAgICAgIGlmICh2YWwubWF0Y2goL1xcPz4vKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiB2YWx1ZTogXCIgKyB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcih2YWwpO1xuICAgICAgfVxuXG4gICAgICB4bWxWZXJzaW9uKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgdmFsID0gJycgKyB2YWwgfHwgJyc7XG4gICAgICAgIGlmICghdmFsLm1hdGNoKC8xXFwuWzAtOV0rLykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZlcnNpb24gbnVtYmVyOiBcIiArIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cblxuICAgICAgeG1sRW5jb2RpbmcodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICB2YWwgPSAnJyArIHZhbCB8fCAnJztcbiAgICAgICAgaWYgKCF2YWwubWF0Y2goL15bQS1aYS16XSg/OltBLVphLXowLTkuXy1dKSokLykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVuY29kaW5nOiBcIiArIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKHZhbCk7XG4gICAgICB9XG5cbiAgICAgIHhtbFN0YW5kYWxvbmUodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIFwieWVzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwibm9cIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkdGRQdWJJRCh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGR0ZFN5c0lEKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKCcnICsgdmFsIHx8ICcnKTtcbiAgICAgIH1cblxuICAgICAgZHRkRWxlbWVudFZhbHVlKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKCcnICsgdmFsIHx8ICcnKTtcbiAgICAgIH1cblxuICAgICAgZHRkQXR0VHlwZSh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGR0ZEF0dERlZmF1bHQodmFsKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hc3NlcnRMZWdhbENoYXIoJycgKyB2YWwgfHwgJycpO1xuICAgICAgfVxuXG4gICAgICBkdGRFbnRpdHlWYWx1ZSh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGR0ZE5EYXRhKHZhbCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKCcnICsgdmFsIHx8ICcnKTtcbiAgICAgIH1cblxuICAgICAgYXNzZXJ0TGVnYWxDaGFyKHN0cikge1xuICAgICAgICB2YXIgcmVnZXgsIHJlcztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudmVyc2lvbiA9PT0gJzEuMCcpIHtcbiAgICAgICAgICAvLyBWYWxpZCBjaGFyYWN0ZXJzIGZyb20gaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jY2hhcnNldHNcbiAgICAgICAgICAvLyBhbnkgVW5pY29kZSBjaGFyYWN0ZXIsIGV4Y2x1ZGluZyB0aGUgc3Vycm9nYXRlIGJsb2NrcywgRkZGRSwgYW5kIEZGRkYuXG4gICAgICAgICAgLy8gI3g5IHwgI3hBIHwgI3hEIHwgWyN4MjAtI3hEN0ZGXSB8IFsjeEUwMDAtI3hGRkZEXSB8IFsjeDEwMDAwLSN4MTBGRkZGXVxuICAgICAgICAgIC8vIFRoaXMgRVM1IGNvbXBhdGlibGUgUmVnZXhwIGhhcyBiZWVuIGdlbmVyYXRlZCB1c2luZyB0aGUgXCJyZWdlbmVyYXRlXCIgTlBNIG1vZHVsZTpcbiAgICAgICAgICAvLyAgIGxldCB4bWxfMTBfSW52YWxpZENoYXJzID0gcmVnZW5lcmF0ZSgpXG4gICAgICAgICAgLy8gICAgIC5hZGRSYW5nZSgweDAwMDAsIDB4MDAwOClcbiAgICAgICAgICAvLyAgICAgLmFkZCgweDAwMEIsIDB4MDAwQylcbiAgICAgICAgICAvLyAgICAgLmFkZFJhbmdlKDB4MDAwRSwgMHgwMDFGKVxuICAgICAgICAgIC8vICAgICAuYWRkUmFuZ2UoMHhEODAwLCAweERGRkYpXG4gICAgICAgICAgLy8gICAgIC5hZGRSYW5nZSgweEZGRkUsIDB4RkZGRilcbiAgICAgICAgICByZWdleCA9IC9bXFwwLVxceDA4XFx4MEJcXGZcXHgwRS1cXHgxRlxcdUZGRkVcXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS9nO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW52YWxpZENoYXJSZXBsYWNlbWVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShyZWdleCwgdGhpcy5vcHRpb25zLmludmFsaWRDaGFyUmVwbGFjZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzID0gc3RyLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNoYXJhY3RlciBpbiBzdHJpbmc6ICR7c3RyfSBhdCBpbmRleCAke3Jlcy5pbmRleH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnZlcnNpb24gPT09ICcxLjEnKSB7XG4gICAgICAgICAgLy8gVmFsaWQgY2hhcmFjdGVycyBmcm9tIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94bWwxMS8jY2hhcnNldHNcbiAgICAgICAgICAvLyBhbnkgVW5pY29kZSBjaGFyYWN0ZXIsIGV4Y2x1ZGluZyB0aGUgc3Vycm9nYXRlIGJsb2NrcywgRkZGRSwgYW5kIEZGRkYuXG4gICAgICAgICAgLy8gWyN4MS0jeEQ3RkZdIHwgWyN4RTAwMC0jeEZGRkRdIHwgWyN4MTAwMDAtI3gxMEZGRkZdXG4gICAgICAgICAgLy8gVGhpcyBFUzUgY29tcGF0aWJsZSBSZWdleHAgaGFzIGJlZW4gZ2VuZXJhdGVkIHVzaW5nIHRoZSBcInJlZ2VuZXJhdGVcIiBOUE0gbW9kdWxlOlxuICAgICAgICAgIC8vICAgbGV0IHhtbF8xMV9JbnZhbGlkQ2hhcnMgPSByZWdlbmVyYXRlKClcbiAgICAgICAgICAvLyAgICAgLmFkZCgweDAwMDApXG4gICAgICAgICAgLy8gICAgIC5hZGRSYW5nZSgweEQ4MDAsIDB4REZGRilcbiAgICAgICAgICAvLyAgICAgLmFkZFJhbmdlKDB4RkZGRSwgMHhGRkZGKVxuICAgICAgICAgIHJlZ2V4ID0gL1tcXDBcXHVGRkZFXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0vZztcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmludmFsaWRDaGFyUmVwbGFjZW1lbnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocmVnZXgsIHRoaXMub3B0aW9ucy5pbnZhbGlkQ2hhclJlcGxhY2VtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcyA9IHN0ci5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjaGFyYWN0ZXIgaW4gc3RyaW5nOiAke3N0cn0gYXQgaW5kZXggJHtyZXMuaW5kZXh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9XG5cbiAgICAgIGFzc2VydExlZ2FsTmFtZShzdHIpIHtcbiAgICAgICAgdmFyIHJlZ2V4O1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gdGhpcy5hc3NlcnRMZWdhbENoYXIoc3RyKTtcbiAgICAgICAgcmVnZXggPSAvXihbOkEtWl9hLXpcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMENcXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXXxbXFx1RDgwMC1cXHVEQjdGXVtcXHVEQzAwLVxcdURGRkZdKShbXFx4MkRcXC4wLTpBLVpfYS16XFx4QjdcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMENcXHUyMDBEXFx1MjAzRlxcdTIwNDBcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdfFtcXHVEODAwLVxcdURCN0ZdW1xcdURDMDAtXFx1REZGRl0pKiQvO1xuICAgICAgICBpZiAoIXN0ci5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY2hhcmFjdGVyIGluIG5hbWU6ICR7c3RyfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZXMgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIHRleHRcblxuICAgICAgLy8gU2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDAvV0QteG1sLWMxNG4tMjAwMDAxMTkuaHRtbCNjaGFyZXNjYXBpbmdcblxuICAgICAgLy8gYHN0cmAgdGhlIHN0cmluZyB0byBlc2NhcGVcbiAgICAgIHRleHRFc2NhcGUoc3RyKSB7XG4gICAgICAgIHZhciBhbXByZWdleDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgICAgIGFtcHJlZ2V4ID0gdGhpcy5vcHRpb25zLm5vRG91YmxlRW5jb2RpbmcgPyAvKD8hJihsdHxndHxhbXB8YXBvc3xxdW90KTspJi9nIDogLyYvZztcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKGFtcHJlZ2V4LCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoL1xcci9nLCAnJiN4RDsnKTtcbiAgICAgIH1cblxuICAgICAgLy8gRXNjYXBlcyBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gYXR0cmlidXRlIHZhbHVlc1xuXG4gICAgICAvLyBTZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMC9XRC14bWwtYzE0bi0yMDAwMDExOS5odG1sI2NoYXJlc2NhcGluZ1xuXG4gICAgICAvLyBgc3RyYCB0aGUgc3RyaW5nIHRvIGVzY2FwZVxuICAgICAgYXR0RXNjYXBlKHN0cikge1xuICAgICAgICB2YXIgYW1wcmVnZXg7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgICAgICBhbXByZWdleCA9IHRoaXMub3B0aW9ucy5ub0RvdWJsZUVuY29kaW5nID8gLyg/ISYobHR8Z3R8YW1wfGFwb3N8cXVvdCk7KSYvZyA6IC8mL2c7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShhbXByZWdleCwgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC9cXHQvZywgJyYjeDk7JykucmVwbGFjZSgvXFxuL2csICcmI3hBOycpLnJlcGxhY2UoL1xcci9nLCAnJiN4RDsnKTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICAvLyBzdHJpbmdzIHRvIG1hdGNoIHdoaWxlIGNvbnZlcnRpbmcgZnJvbSBKUyBvYmplY3RzXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmNvbnZlcnRBdHRLZXkgPSAnQCc7XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUuY29udmVydFBJS2V5ID0gJz8nO1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmNvbnZlcnRUZXh0S2V5ID0gJyN0ZXh0JztcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5jb252ZXJ0Q0RhdGFLZXkgPSAnI2NkYXRhJztcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5jb252ZXJ0Q29tbWVudEtleSA9ICcjY29tbWVudCc7XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUuY29udmVydFJhd0tleSA9ICcjcmF3JztcblxuICAgIHJldHVybiBYTUxTdHJpbmdpZmllcjtcblxuICB9KS5jYWxsKHRoaXMpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi40LjFcbihmdW5jdGlvbigpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgTm9uZTogMCxcbiAgICBPcGVuVGFnOiAxLFxuICAgIEluc2lkZVRhZzogMixcbiAgICBDbG9zZVRhZzogM1xuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi40LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIE5vZGVUeXBlLCBXcml0ZXJTdGF0ZSwgWE1MQ0RhdGEsIFhNTENvbW1lbnQsIFhNTERUREF0dExpc3QsIFhNTERUREVsZW1lbnQsIFhNTERUREVudGl0eSwgWE1MRFRETm90YXRpb24sIFhNTERlY2xhcmF0aW9uLCBYTUxEb2NUeXBlLCBYTUxEdW1teSwgWE1MRWxlbWVudCwgWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uLCBYTUxSYXcsIFhNTFRleHQsIFhNTFdyaXRlckJhc2UsIGFzc2lnbixcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgKHthc3NpZ259ID0gcmVxdWlyZSgnLi9VdGlsaXR5JykpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTERlY2xhcmF0aW9uID0gcmVxdWlyZSgnLi9YTUxEZWNsYXJhdGlvbicpO1xuXG4gIFhNTERvY1R5cGUgPSByZXF1aXJlKCcuL1hNTERvY1R5cGUnKTtcblxuICBYTUxDRGF0YSA9IHJlcXVpcmUoJy4vWE1MQ0RhdGEnKTtcblxuICBYTUxDb21tZW50ID0gcmVxdWlyZSgnLi9YTUxDb21tZW50Jyk7XG5cbiAgWE1MRWxlbWVudCA9IHJlcXVpcmUoJy4vWE1MRWxlbWVudCcpO1xuXG4gIFhNTFJhdyA9IHJlcXVpcmUoJy4vWE1MUmF3Jyk7XG5cbiAgWE1MVGV4dCA9IHJlcXVpcmUoJy4vWE1MVGV4dCcpO1xuXG4gIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IHJlcXVpcmUoJy4vWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uJyk7XG5cbiAgWE1MRHVtbXkgPSByZXF1aXJlKCcuL1hNTER1bW15Jyk7XG5cbiAgWE1MRFREQXR0TGlzdCA9IHJlcXVpcmUoJy4vWE1MRFREQXR0TGlzdCcpO1xuXG4gIFhNTERUREVsZW1lbnQgPSByZXF1aXJlKCcuL1hNTERUREVsZW1lbnQnKTtcblxuICBYTUxEVERFbnRpdHkgPSByZXF1aXJlKCcuL1hNTERUREVudGl0eScpO1xuXG4gIFhNTERURE5vdGF0aW9uID0gcmVxdWlyZSgnLi9YTUxEVEROb3RhdGlvbicpO1xuXG4gIFdyaXRlclN0YXRlID0gcmVxdWlyZSgnLi9Xcml0ZXJTdGF0ZScpO1xuXG4gIC8vIEJhc2UgY2xhc3MgZm9yIFhNTCB3cml0ZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MV3JpdGVyQmFzZSA9IGNsYXNzIFhNTFdyaXRlckJhc2Uge1xuICAgIC8vIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGBYTUxXcml0ZXJCYXNlYFxuXG4gICAgLy8gYG9wdGlvbnMucHJldHR5YCBwcmV0dHkgcHJpbnRzIHRoZSByZXN1bHRcbiAgICAvLyBgb3B0aW9ucy5pbmRlbnRgIGluZGVudGF0aW9uIHN0cmluZ1xuICAgIC8vIGBvcHRpb25zLm5ld2xpbmVgIG5ld2xpbmUgc2VxdWVuY2VcbiAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGEgZml4ZWQgbnVtYmVyIG9mIGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZVxuICAgIC8vIGBvcHRpb25zLndpZHRoYCBtYXhpbXVtIGNvbHVtbiB3aWR0aFxuICAgIC8vIGBvcHRpb25zLmFsbG93RW1wdHlgIGRvIG5vdCBzZWxmIGNsb3NlIGVtcHR5IGVsZW1lbnQgdGFnc1xuICAgIC8vICdvcHRpb25zLmRvbnRQcmV0dHlUZXh0Tm9kZXMnIGlmIGFueSB0ZXh0IGlzIHByZXNlbnQgaW4gbm9kZSwgZG9uJ3QgaW5kZW50IG9yIExGXG4gICAgLy8gYG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaGAgYWRkIGEgc3BhY2UgYmVmb3JlIHRoZSBjbG9zaW5nIHNsYXNoIG9mIGVtcHR5IGVsZW1lbnRzXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgdmFyIGtleSwgcmVmLCB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgcmVmID0gb3B0aW9ucy53cml0ZXIgfHwge307XG4gICAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWUgPSByZWZba2V5XTtcbiAgICAgICAgdGhpc1tcIl9cIiArIGtleV0gPSB0aGlzW2tleV07XG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbHRlcnMgd3JpdGVyIG9wdGlvbnMgYW5kIHByb3ZpZGVzIGRlZmF1bHRzXG5cbiAgICAvLyBgb3B0aW9uc2Agd3JpdGVyIG9wdGlvbnNcbiAgICBmaWx0ZXJPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHZhciBmaWx0ZXJlZE9wdGlvbnMsIHJlZiwgcmVmMSwgcmVmMiwgcmVmMywgcmVmNCwgcmVmNSwgcmVmNiwgcmVmNztcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgICBvcHRpb25zID0gYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgZmlsdGVyZWRPcHRpb25zID0ge1xuICAgICAgICB3cml0ZXI6IHRoaXNcbiAgICAgIH07XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMucHJldHR5ID0gb3B0aW9ucy5wcmV0dHkgfHwgZmFsc2U7XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMuYWxsb3dFbXB0eSA9IG9wdGlvbnMuYWxsb3dFbXB0eSB8fCBmYWxzZTtcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5pbmRlbnQgPSAocmVmID0gb3B0aW9ucy5pbmRlbnQpICE9IG51bGwgPyByZWYgOiAnICAnO1xuICAgICAgZmlsdGVyZWRPcHRpb25zLm5ld2xpbmUgPSAocmVmMSA9IG9wdGlvbnMubmV3bGluZSkgIT0gbnVsbCA/IHJlZjEgOiAnXFxuJztcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5vZmZzZXQgPSAocmVmMiA9IG9wdGlvbnMub2Zmc2V0KSAhPSBudWxsID8gcmVmMiA6IDA7XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMud2lkdGggPSAocmVmMyA9IG9wdGlvbnMud2lkdGgpICE9IG51bGwgPyByZWYzIDogMDtcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5kb250UHJldHR5VGV4dE5vZGVzID0gKHJlZjQgPSAocmVmNSA9IG9wdGlvbnMuZG9udFByZXR0eVRleHROb2RlcykgIT0gbnVsbCA/IHJlZjUgOiBvcHRpb25zLmRvbnRwcmV0dHl0ZXh0bm9kZXMpICE9IG51bGwgPyByZWY0IDogMDtcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoID0gKHJlZjYgPSAocmVmNyA9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCkgIT0gbnVsbCA/IHJlZjcgOiBvcHRpb25zLnNwYWNlYmVmb3Jlc2xhc2gpICE9IG51bGwgPyByZWY2IDogJyc7XG4gICAgICBpZiAoZmlsdGVyZWRPcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggPT09IHRydWUpIHtcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggPSAnICc7XG4gICAgICB9XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMuc3VwcHJlc3NQcmV0dHlDb3VudCA9IDA7XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMudXNlciA9IHt9O1xuICAgICAgZmlsdGVyZWRPcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgaW5kZW50YXRpb24gc3RyaW5nIGZvciB0aGUgY3VycmVudCBsZXZlbFxuXG4gICAgLy8gYG5vZGVgIGN1cnJlbnQgbm9kZVxuICAgIC8vIGBvcHRpb25zYCB3cml0ZXIgb3B0aW9uc1xuICAgIC8vIGBsZXZlbGAgY3VycmVudCBpbmRlbnRhdGlvbiBsZXZlbFxuICAgIGluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIGluZGVudExldmVsO1xuICAgICAgaWYgKCFvcHRpb25zLnByZXR0eSB8fCBvcHRpb25zLnN1cHByZXNzUHJldHR5Q291bnQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnByZXR0eSkge1xuICAgICAgICBpbmRlbnRMZXZlbCA9IChsZXZlbCB8fCAwKSArIG9wdGlvbnMub2Zmc2V0ICsgMTtcbiAgICAgICAgaWYgKGluZGVudExldmVsID4gMCkge1xuICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkoaW5kZW50TGV2ZWwpLmpvaW4ob3B0aW9ucy5pbmRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgbmV3bGluZSBzdHJpbmdcblxuICAgIC8vIGBub2RlYCBjdXJyZW50IG5vZGVcbiAgICAvLyBgb3B0aW9uc2Agd3JpdGVyIG9wdGlvbnNcbiAgICAvLyBgbGV2ZWxgIGN1cnJlbnQgaW5kZW50YXRpb24gbGV2ZWxcbiAgICBlbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICBpZiAoIW9wdGlvbnMucHJldHR5IHx8IG9wdGlvbnMuc3VwcHJlc3NQcmV0dHlDb3VudCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5uZXdsaW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF0dHJpYnV0ZShhdHQsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHRoaXMub3BlbkF0dHJpYnV0ZShhdHQsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIGlmIChvcHRpb25zLnByZXR0eSAmJiBvcHRpb25zLndpZHRoID4gMCkge1xuICAgICAgICByID0gYXR0Lm5hbWUgKyAnPVwiJyArIGF0dC52YWx1ZSArICdcIic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByID0gJyAnICsgYXR0Lm5hbWUgKyAnPVwiJyArIGF0dC52YWx1ZSArICdcIic7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlQXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgY2RhdGEobm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPCFbQ0RBVEFbJztcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICByICs9IG5vZGUudmFsdWU7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICByICs9ICddXT4nICsgdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgY29tbWVudChub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8IS0tICc7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgciArPSBub2RlLnZhbHVlO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgciArPSAnIC0tPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBkZWNsYXJhdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8P3htbCc7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgciArPSAnIHZlcnNpb249XCInICsgbm9kZS52ZXJzaW9uICsgJ1wiJztcbiAgICAgIGlmIChub2RlLmVuY29kaW5nICE9IG51bGwpIHtcbiAgICAgICAgciArPSAnIGVuY29kaW5nPVwiJyArIG5vZGUuZW5jb2RpbmcgKyAnXCInO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuc3RhbmRhbG9uZSAhPSBudWxsKSB7XG4gICAgICAgIHIgKz0gJyBzdGFuZGFsb25lPVwiJyArIG5vZGUuc3RhbmRhbG9uZSArICdcIic7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICByICs9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICc/Pic7XG4gICAgICByICs9IHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGRvY1R5cGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciBjaGlsZCwgaSwgbGVuMSwgciwgcmVmO1xuICAgICAgbGV2ZWwgfHwgKGxldmVsID0gMCk7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHIgKz0gJzwhRE9DVFlQRSAnICsgbm9kZS5yb290KCkubmFtZTtcbiAgICAgIC8vIGV4dGVybmFsIGlkZW50aWZpZXJcbiAgICAgIGlmIChub2RlLnB1YklEICYmIG5vZGUuc3lzSUQpIHtcbiAgICAgICAgciArPSAnIFBVQkxJQyBcIicgKyBub2RlLnB1YklEICsgJ1wiIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInO1xuICAgICAgfSBlbHNlIGlmIChub2RlLnN5c0lEKSB7XG4gICAgICAgIHIgKz0gJyBTWVNURU0gXCInICsgbm9kZS5zeXNJRCArICdcIic7XG4gICAgICB9XG4gICAgICAvLyBpbnRlcm5hbCBzdWJzZXRcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgciArPSAnIFsnO1xuICAgICAgICByICs9IHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICAgIHJlZiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBpIDwgbGVuMTsgaSsrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgICAgciArPSB0aGlzLndyaXRlQ2hpbGROb2RlKGNoaWxkLCBvcHRpb25zLCBsZXZlbCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgciArPSAnXSc7XG4gICAgICB9XG4gICAgICAvLyBjbG9zZSB0YWdcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gb3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoICsgJz4nO1xuICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBlbGVtZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgYXR0LCBhdHRMZW4sIGNoaWxkLCBjaGlsZE5vZGVDb3VudCwgZmlyc3RDaGlsZE5vZGUsIGksIGosIGxlbiwgbGVuMSwgbGVuMiwgbmFtZSwgcHJldHR5U3VwcHJlc3NlZCwgciwgcmF0dCwgcmVmLCByZWYxLCByZWYyLCByZWYzLCBybGluZTtcbiAgICAgIGxldmVsIHx8IChsZXZlbCA9IDApO1xuICAgICAgcHJldHR5U3VwcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgLy8gb3BlbiB0YWdcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgJzwnICsgbm9kZS5uYW1lO1xuICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgaWYgKG9wdGlvbnMucHJldHR5ICYmIG9wdGlvbnMud2lkdGggPiAwKSB7XG4gICAgICAgIGxlbiA9IHIubGVuZ3RoO1xuICAgICAgICByZWYgPSBub2RlLmF0dHJpYnM7XG4gICAgICAgIGZvciAobmFtZSBpbiByZWYpIHtcbiAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChyZWYsIG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICBhdHQgPSByZWZbbmFtZV07XG4gICAgICAgICAgcmF0dCA9IHRoaXMuYXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICAgIGF0dExlbiA9IHJhdHQubGVuZ3RoO1xuICAgICAgICAgIGlmIChsZW4gKyBhdHRMZW4gPiBvcHRpb25zLndpZHRoKSB7XG4gICAgICAgICAgICBybGluZSA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsICsgMSkgKyByYXR0O1xuICAgICAgICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgcmxpbmU7XG4gICAgICAgICAgICBsZW4gPSBybGluZS5sZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJsaW5lID0gJyAnICsgcmF0dDtcbiAgICAgICAgICAgIHIgKz0gcmxpbmU7XG4gICAgICAgICAgICBsZW4gKz0gcmxpbmUubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVmMSA9IG5vZGUuYXR0cmlicztcbiAgICAgICAgZm9yIChuYW1lIGluIHJlZjEpIHtcbiAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChyZWYxLCBuYW1lKSkgY29udGludWU7XG4gICAgICAgICAgYXR0ID0gcmVmMVtuYW1lXTtcbiAgICAgICAgICByICs9IHRoaXMuYXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGlsZE5vZGVDb3VudCA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgZmlyc3RDaGlsZE5vZGUgPSBjaGlsZE5vZGVDb3VudCA9PT0gMCA/IG51bGwgOiBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgaWYgKGNoaWxkTm9kZUNvdW50ID09PSAwIHx8IG5vZGUuY2hpbGRyZW4uZXZlcnkoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gKGUudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCB8fCBlLnR5cGUgPT09IE5vZGVUeXBlLlJhdyB8fCBlLnR5cGUgPT09IE5vZGVUeXBlLkNEYXRhKSAmJiBlLnZhbHVlID09PSAnJztcbiAgICAgIH0pKSB7XG4gICAgICAgIC8vIGVtcHR5IGVsZW1lbnRcbiAgICAgICAgaWYgKG9wdGlvbnMuYWxsb3dFbXB0eSkge1xuICAgICAgICAgIHIgKz0gJz4nO1xuICAgICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgICByICs9ICc8LycgKyBub2RlLm5hbWUgKyAnPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgICByICs9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICcvPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJldHR5ICYmIGNoaWxkTm9kZUNvdW50ID09PSAxICYmIChmaXJzdENoaWxkTm9kZS50eXBlID09PSBOb2RlVHlwZS5UZXh0IHx8IGZpcnN0Q2hpbGROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlJhdyB8fCBmaXJzdENoaWxkTm9kZS50eXBlID09PSBOb2RlVHlwZS5DRGF0YSkgJiYgKGZpcnN0Q2hpbGROb2RlLnZhbHVlICE9IG51bGwpKSB7XG4gICAgICAgIC8vIGRvIG5vdCBpbmRlbnQgdGV4dC1vbmx5IG5vZGVzXG4gICAgICAgIHIgKz0gJz4nO1xuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgICBvcHRpb25zLnN1cHByZXNzUHJldHR5Q291bnQrKztcbiAgICAgICAgcHJldHR5U3VwcHJlc3NlZCA9IHRydWU7XG4gICAgICAgIHIgKz0gdGhpcy53cml0ZUNoaWxkTm9kZShmaXJzdENoaWxkTm9kZSwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwcmVzc1ByZXR0eUNvdW50LS07XG4gICAgICAgIHByZXR0eVN1cHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICByICs9ICc8LycgKyBub2RlLm5hbWUgKyAnPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgQU5ZIGFyZSBhIHRleHQgbm9kZSwgdGhlbiBzdXBwcmVzcyBwcmV0dHkgbm93XG4gICAgICAgIGlmIChvcHRpb25zLmRvbnRQcmV0dHlUZXh0Tm9kZXMpIHtcbiAgICAgICAgICByZWYyID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4xID0gcmVmMi5sZW5ndGg7IGkgPCBsZW4xOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gcmVmMltpXTtcbiAgICAgICAgICAgIGlmICgoY2hpbGQudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCB8fCBjaGlsZC50eXBlID09PSBOb2RlVHlwZS5SYXcgfHwgY2hpbGQudHlwZSA9PT0gTm9kZVR5cGUuQ0RhdGEpICYmIChjaGlsZC52YWx1ZSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICBvcHRpb25zLnN1cHByZXNzUHJldHR5Q291bnQrKztcbiAgICAgICAgICAgICAgcHJldHR5U3VwcHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjbG9zZSB0aGUgb3BlbmluZyB0YWcsIGFmdGVyIGRlYWxpbmcgd2l0aCBuZXdsaW5lXG4gICAgICAgIHIgKz0gJz4nICsgdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgICAgcmVmMyA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIC8vIGlubmVyIHRhZ3NcbiAgICAgICAgZm9yIChqID0gMCwgbGVuMiA9IHJlZjMubGVuZ3RoOyBqIDwgbGVuMjsgaisrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWYzW2pdO1xuICAgICAgICAgIHIgKz0gdGhpcy53cml0ZUNoaWxkTm9kZShjaGlsZCwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbG9zZSB0YWdcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICByICs9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8LycgKyBub2RlLm5hbWUgKyAnPic7XG4gICAgICAgIGlmIChwcmV0dHlTdXBwcmVzc2VkKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdXBwcmVzc1ByZXR0eUNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIHdyaXRlQ2hpbGROb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkNEYXRhOlxuICAgICAgICAgIHJldHVybiB0aGlzLmNkYXRhKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Db21tZW50OlxuICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1lbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkVsZW1lbnQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudChub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuUmF3OlxuICAgICAgICAgIHJldHVybiB0aGlzLnJhdyhub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuVGV4dDpcbiAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0KG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb246XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc2luZ0luc3RydWN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5EdW1teTpcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRGVjbGFyYXRpb246XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkRvY1R5cGU6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZG9jVHlwZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQXR0cmlidXRlRGVjbGFyYXRpb246XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZHRkQXR0TGlzdChub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRWxlbWVudERlY2xhcmF0aW9uOlxuICAgICAgICAgIHJldHVybiB0aGlzLmR0ZEVsZW1lbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkVudGl0eURlY2xhcmF0aW9uOlxuICAgICAgICAgIHJldHVybiB0aGlzLmR0ZEVudGl0eShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuTm90YXRpb25EZWNsYXJhdGlvbjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5kdGROb3RhdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBYTUwgbm9kZSB0eXBlOiBcIiArIG5vZGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgJzw/JztcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICByICs9IG5vZGUudGFyZ2V0O1xuICAgICAgaWYgKG5vZGUudmFsdWUpIHtcbiAgICAgICAgciArPSAnICcgKyBub2RlLnZhbHVlO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgciArPSBvcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggKyAnPz4nO1xuICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICByYXcobm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgciArPSBub2RlLnZhbHVlO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICB0ZXh0KG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgIHIgKz0gbm9kZS52YWx1ZTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZHRkQXR0TGlzdChub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8IUFUVExJU1QnO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgIHIgKz0gJyAnICsgbm9kZS5lbGVtZW50TmFtZSArICcgJyArIG5vZGUuYXR0cmlidXRlTmFtZSArICcgJyArIG5vZGUuYXR0cmlidXRlVHlwZTtcbiAgICAgIGlmIChub2RlLmRlZmF1bHRWYWx1ZVR5cGUgIT09ICcjREVGQVVMVCcpIHtcbiAgICAgICAgciArPSAnICcgKyBub2RlLmRlZmF1bHRWYWx1ZVR5cGU7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5kZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgciArPSAnIFwiJyArIG5vZGUuZGVmYXVsdFZhbHVlICsgJ1wiJztcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gb3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoICsgJz4nICsgdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZHRkRWxlbWVudChub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8IUVMRU1FTlQnO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgIHIgKz0gJyAnICsgbm9kZS5uYW1lICsgJyAnICsgbm9kZS52YWx1ZTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gb3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoICsgJz4nICsgdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZHRkRW50aXR5KG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgJzwhRU5USVRZJztcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICBpZiAobm9kZS5wZSkge1xuICAgICAgICByICs9ICcgJSc7XG4gICAgICB9XG4gICAgICByICs9ICcgJyArIG5vZGUubmFtZTtcbiAgICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICAgIHIgKz0gJyBcIicgKyBub2RlLnZhbHVlICsgJ1wiJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChub2RlLnB1YklEICYmIG5vZGUuc3lzSUQpIHtcbiAgICAgICAgICByICs9ICcgUFVCTElDIFwiJyArIG5vZGUucHViSUQgKyAnXCIgXCInICsgbm9kZS5zeXNJRCArICdcIic7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5zeXNJRCkge1xuICAgICAgICAgIHIgKz0gJyBTWVNURU0gXCInICsgbm9kZS5zeXNJRCArICdcIic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUubkRhdGEpIHtcbiAgICAgICAgICByICs9ICcgTkRBVEEgJyArIG5vZGUubkRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gb3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoICsgJz4nICsgdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgZHRkTm90YXRpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPCFOT1RBVElPTic7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgciArPSAnICcgKyBub2RlLm5hbWU7XG4gICAgICBpZiAobm9kZS5wdWJJRCAmJiBub2RlLnN5c0lEKSB7XG4gICAgICAgIHIgKz0gJyBQVUJMSUMgXCInICsgbm9kZS5wdWJJRCArICdcIiBcIicgKyBub2RlLnN5c0lEICsgJ1wiJztcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5wdWJJRCkge1xuICAgICAgICByICs9ICcgUFVCTElDIFwiJyArIG5vZGUucHViSUQgKyAnXCInO1xuICAgICAgfSBlbHNlIGlmIChub2RlLnN5c0lEKSB7XG4gICAgICAgIHIgKz0gJyBTWVNURU0gXCInICsgbm9kZS5zeXNJRCArICdcIic7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICByICs9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICc+JyArIHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIG9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7fVxuXG4gICAgY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7fVxuXG4gICAgb3BlbkF0dHJpYnV0ZShhdHQsIG9wdGlvbnMsIGxldmVsKSB7fVxuXG4gICAgY2xvc2VBdHRyaWJ1dGUoYXR0LCBvcHRpb25zLCBsZXZlbCkge31cblxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi40LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIFhNTFN0cmluZ1dyaXRlciwgWE1MV3JpdGVyQmFzZTtcblxuICBYTUxXcml0ZXJCYXNlID0gcmVxdWlyZSgnLi9YTUxXcml0ZXJCYXNlJyk7XG5cbiAgLy8gUHJpbnRzIFhNTCBub2RlcyBhcyBwbGFpbiB0ZXh0XG4gIG1vZHVsZS5leHBvcnRzID0gWE1MU3RyaW5nV3JpdGVyID0gY2xhc3MgWE1MU3RyaW5nV3JpdGVyIGV4dGVuZHMgWE1MV3JpdGVyQmFzZSB7XG4gICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgYFhNTFN0cmluZ1dyaXRlcmBcblxuICAgIC8vIGBvcHRpb25zLnByZXR0eWAgcHJldHR5IHByaW50cyB0aGUgcmVzdWx0XG4gICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBzdHJpbmdcbiAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlXG4gICAgLy8gYG9wdGlvbnMub2Zmc2V0YCBhIGZpeGVkIG51bWJlciBvZiBpbmRlbnRhdGlvbnMgdG8gYWRkIHRvIGV2ZXJ5IGxpbmVcbiAgICAvLyBgb3B0aW9ucy5hbGxvd0VtcHR5YCBkbyBub3Qgc2VsZiBjbG9zZSBlbXB0eSBlbGVtZW50IHRhZ3NcbiAgICAvLyAnb3B0aW9ucy5kb250UHJldHR5VGV4dE5vZGVzJyBpZiBhbnkgdGV4dCBpcyBwcmVzZW50IGluIG5vZGUsIGRvbid0IGluZGVudCBvciBMRlxuICAgIC8vIGBvcHRpb25zLnNwYWNlQmVmb3JlU2xhc2hgIGFkZCBhIHNwYWNlIGJlZm9yZSB0aGUgY2xvc2luZyBzbGFzaCBvZiBlbXB0eSBlbGVtZW50c1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRvY3VtZW50KGRvYywgb3B0aW9ucykge1xuICAgICAgdmFyIGNoaWxkLCBpLCBsZW4sIHIsIHJlZjtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLmZpbHRlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgICByID0gJyc7XG4gICAgICByZWYgPSBkb2MuY2hpbGRyZW47XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgIHIgKz0gdGhpcy53cml0ZUNoaWxkTm9kZShjaGlsZCwgb3B0aW9ucywgMCk7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgbmV3bGluZVxuICAgICAgaWYgKG9wdGlvbnMucHJldHR5ICYmIHIuc2xpY2UoLW9wdGlvbnMubmV3bGluZS5sZW5ndGgpID09PSBvcHRpb25zLm5ld2xpbmUpIHtcbiAgICAgICAgciA9IHIuc2xpY2UoMCwgLW9wdGlvbnMubmV3bGluZS5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjQuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERPTUNvbmZpZ3VyYXRpb24sIFhNTERPTUltcGxlbWVudGF0aW9uLCBYTUxEb2N1bWVudCwgWE1MTm9kZSwgWE1MU3RyaW5nV3JpdGVyLCBYTUxTdHJpbmdpZmllciwgaXNQbGFpbk9iamVjdDtcblxuICAoe2lzUGxhaW5PYmplY3R9ID0gcmVxdWlyZSgnLi9VdGlsaXR5JykpO1xuXG4gIFhNTERPTUltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9YTUxET01JbXBsZW1lbnRhdGlvbicpO1xuXG4gIFhNTERPTUNvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL1hNTERPTUNvbmZpZ3VyYXRpb24nKTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MU3RyaW5naWZpZXIgPSByZXF1aXJlKCcuL1hNTFN0cmluZ2lmaWVyJyk7XG5cbiAgWE1MU3RyaW5nV3JpdGVyID0gcmVxdWlyZSgnLi9YTUxTdHJpbmdXcml0ZXInKTtcblxuICAvLyBSZXByZXNlbnRzIGFuIFhNTCBidWlsZGVyXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRG9jdW1lbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgWE1MRG9jdW1lbnQgZXh0ZW5kcyBYTUxOb2RlIHtcbiAgICAgIC8vIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGBYTUxEb2N1bWVudGBcblxuICAgICAgLy8gYG9wdGlvbnMua2VlcE51bGxOb2Rlc2Agd2hldGhlciBub2RlcyB3aXRoIG51bGwgdmFsdWVzIHdpbGwgYmUga2VwdFxuICAgICAgLy8gICAgIG9yIGlnbm9yZWQ6IHRydWUgb3IgZmFsc2VcbiAgICAgIC8vIGBvcHRpb25zLmtlZXBOdWxsQXR0cmlidXRlc2Agd2hldGhlciBhdHRyaWJ1dGVzIHdpdGggbnVsbCB2YWx1ZXMgd2lsbCBiZVxuICAgICAgLy8gICAgIGtlcHQgb3IgaWdub3JlZDogdHJ1ZSBvciBmYWxzZVxuICAgICAgLy8gYG9wdGlvbnMuaWdub3JlRGVjb3JhdG9yc2Agd2hldGhlciBkZWNvcmF0b3Igc3RyaW5ncyB3aWxsIGJlIGlnbm9yZWQgd2hlblxuICAgICAgLy8gICAgIGNvbnZlcnRpbmcgSlMgb2JqZWN0czogdHJ1ZSBvciBmYWxzZVxuICAgICAgLy8gYG9wdGlvbnMuc2VwYXJhdGVBcnJheUl0ZW1zYCB3aGV0aGVyIGFycmF5IGl0ZW1zIGFyZSBjcmVhdGVkIGFzIHNlcGFyYXRlXG4gICAgICAvLyAgICAgbm9kZXMgd2hlbiBwYXNzZWQgYXMgYW4gb2JqZWN0IHZhbHVlOiB0cnVlIG9yIGZhbHNlXG4gICAgICAvLyBgb3B0aW9ucy5ub0RvdWJsZUVuY29kaW5nYCB3aGV0aGVyIGV4aXN0aW5nIGh0bWwgZW50aXRpZXMgYXJlIGVuY29kZWQ6XG4gICAgICAvLyAgICAgdHJ1ZSBvciBmYWxzZVxuICAgICAgLy8gYG9wdGlvbnMuc3RyaW5naWZ5YCBhIHNldCBvZiBmdW5jdGlvbnMgdG8gdXNlIGZvciBjb252ZXJ0aW5nIHZhbHVlcyB0b1xuICAgICAgLy8gICAgIHN0cmluZ3NcbiAgICAgIC8vIGBvcHRpb25zLndyaXRlcmAgdGhlIGRlZmF1bHQgWE1MIHdyaXRlciB0byB1c2UgZm9yIGNvbnZlcnRpbmcgbm9kZXMgdG9cbiAgICAgIC8vICAgICBzdHJpbmcuIElmIHRoZSBkZWZhdWx0IHdyaXRlciBpcyBub3Qgc2V0LCB0aGUgYnVpbHQtaW4gWE1MU3RyaW5nV3JpdGVyXG4gICAgICAvLyAgICAgd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4gICAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG51bGwpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIiNkb2N1bWVudFwiO1xuICAgICAgICB0aGlzLnR5cGUgPSBOb2RlVHlwZS5Eb2N1bWVudDtcbiAgICAgICAgdGhpcy5kb2N1bWVudFVSSSA9IG51bGw7XG4gICAgICAgIHRoaXMuZG9tQ29uZmlnID0gbmV3IFhNTERPTUNvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICAgICAgaWYgKCFvcHRpb25zLndyaXRlcikge1xuICAgICAgICAgIG9wdGlvbnMud3JpdGVyID0gbmV3IFhNTFN0cmluZ1dyaXRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuc3RyaW5naWZ5ID0gbmV3IFhNTFN0cmluZ2lmaWVyKG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbmRzIHRoZSBkb2N1bWVudCBhbmQgcGFzc2VzIGl0IHRvIHRoZSBnaXZlbiBYTUwgd3JpdGVyXG5cbiAgICAgIC8vIGB3cml0ZXJgIGlzIGVpdGhlciBhbiBYTUwgd3JpdGVyIG9yIGEgcGxhaW4gb2JqZWN0IHRvIHBhc3MgdG8gdGhlXG4gICAgICAvLyBjb25zdHJ1Y3RvciBvZiB0aGUgZGVmYXVsdCBYTUwgd3JpdGVyLiBUaGUgZGVmYXVsdCB3cml0ZXIgaXMgYXNzaWduZWQgd2hlblxuICAgICAgLy8gY3JlYXRpbmcgdGhlIFhNTCBkb2N1bWVudC4gRm9sbG93aW5nIGZsYWdzIGFyZSByZWNvZ25pemVkIGJ5IHRoZVxuICAgICAgLy8gYnVpbHQtaW4gWE1MU3RyaW5nV3JpdGVyOlxuICAgICAgLy8gICBgd3JpdGVyLnByZXR0eWAgcHJldHR5IHByaW50cyB0aGUgcmVzdWx0XG4gICAgICAvLyAgIGB3cml0ZXIuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyAgIGB3cml0ZXIub2Zmc2V0YCBob3cgbWFueSBpbmRlbnRhdGlvbnMgdG8gYWRkIHRvIGV2ZXJ5IGxpbmUgZm9yIHByZXR0eSBwcmludFxuICAgICAgLy8gICBgd3JpdGVyLm5ld2xpbmVgIG5ld2xpbmUgc2VxdWVuY2UgZm9yIHByZXR0eSBwcmludFxuICAgICAgZW5kKHdyaXRlcikge1xuICAgICAgICB2YXIgd3JpdGVyT3B0aW9ucztcbiAgICAgICAgd3JpdGVyT3B0aW9ucyA9IHt9O1xuICAgICAgICBpZiAoIXdyaXRlcikge1xuICAgICAgICAgIHdyaXRlciA9IHRoaXMub3B0aW9ucy53cml0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh3cml0ZXIpKSB7XG4gICAgICAgICAgd3JpdGVyT3B0aW9ucyA9IHdyaXRlcjtcbiAgICAgICAgICB3cml0ZXIgPSB0aGlzLm9wdGlvbnMud3JpdGVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cml0ZXIuZG9jdW1lbnQodGhpcywgd3JpdGVyLmZpbHRlck9wdGlvbnMod3JpdGVyT3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0cyB0aGUgWE1MIGRvY3VtZW50IHRvIHN0cmluZ1xuXG4gICAgICAvLyBgb3B0aW9ucy5wcmV0dHlgIHByZXR0eSBwcmludHMgdGhlIHJlc3VsdFxuICAgICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5vZmZzZXRgIGhvdyBtYW55IGluZGVudGF0aW9ucyB0byBhZGQgdG8gZXZlcnkgbGluZSBmb3IgcHJldHR5IHByaW50XG4gICAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlIGZvciBwcmV0dHkgcHJpbnRcbiAgICAgIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZG9jdW1lbnQodGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gRE9NIGxldmVsIDEgZnVuY3Rpb25zIHRvIGJlIGltcGxlbWVudGVkIGxhdGVyXG4gICAgICBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50KCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGNyZWF0ZVRleHROb2RlKGRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVDb21tZW50KGRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVDREFUQVNlY3Rpb24oZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVBdHRyaWJ1dGUobmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGNyZWF0ZUVudGl0eVJlZmVyZW5jZShuYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnbmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIERPTSBsZXZlbCAyIGZ1bmN0aW9ucyB0byBiZSBpbXBsZW1lbnRlZCBsYXRlclxuICAgICAgaW1wb3J0Tm9kZShpbXBvcnRlZE5vZGUsIGRlZXApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIERPTSBsZXZlbCAzIGZ1bmN0aW9ucyB0byBiZSBpbXBsZW1lbnRlZCBsYXRlclxuICAgICAgYWRvcHROb2RlKHNvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIG5vcm1hbGl6ZURvY3VtZW50KCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmFtZU5vZGUobm9kZSwgbmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cblxuICAgICAgLy8gRE9NIGxldmVsIDQgZnVuY3Rpb25zIHRvIGJlIGltcGxlbWVudGVkIGxhdGVyXG4gICAgICBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVFdmVudChldmVudEludGVyZmFjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGNyZWF0ZVJhbmdlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICAgIGNyZWF0ZU5vZGVJdGVyYXRvcihyb290LCB3aGF0VG9TaG93LCBmaWx0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVUcmVlV2Fsa2VyKHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgLy8gRE9NIGxldmVsIDFcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAnaW1wbGVtZW50YXRpb24nLCB7XG4gICAgICB2YWx1ZTogbmV3IFhNTERPTUltcGxlbWVudGF0aW9uKClcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2N1bWVudC5wcm90b3R5cGUsICdkb2N0eXBlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNoaWxkLCBpLCBsZW4sIHJlZjtcbiAgICAgICAgcmVmID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLkRvY1R5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAnZG9jdW1lbnRFbGVtZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdE9iamVjdCB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRE9NIGxldmVsIDNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAnaW5wdXRFbmNvZGluZycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ3N0cmljdEVycm9yQ2hlY2tpbmcnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAneG1sRW5jb2RpbmcnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggIT09IDAgJiYgdGhpcy5jaGlsZHJlblswXS50eXBlID09PSBOb2RlVHlwZS5EZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuWzBdLmVuY29kaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAneG1sU3RhbmRhbG9uZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmNoaWxkcmVuWzBdLnR5cGUgPT09IE5vZGVUeXBlLkRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bMF0uc3RhbmRhbG9uZSA9PT0gJ3llcyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAneG1sVmVyc2lvbicsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmNoaWxkcmVuWzBdLnR5cGUgPT09IE5vZGVUeXBlLkRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bMF0udmVyc2lvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCIxLjBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRE9NIGxldmVsIDRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAnVVJMJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRVUkk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAnb3JpZ2luJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAnY29tcGF0TW9kZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ2NoYXJhY3RlclNldCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ2NvbnRlbnRUeXBlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gWE1MRG9jdW1lbnQ7XG5cbiAgfSkuY2FsbCh0aGlzKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgV3JpdGVyU3RhdGUsIFhNTEF0dHJpYnV0ZSwgWE1MQ0RhdGEsIFhNTENvbW1lbnQsIFhNTERUREF0dExpc3QsIFhNTERUREVsZW1lbnQsIFhNTERUREVudGl0eSwgWE1MRFRETm90YXRpb24sIFhNTERlY2xhcmF0aW9uLCBYTUxEb2NUeXBlLCBYTUxEb2N1bWVudCwgWE1MRG9jdW1lbnRDQiwgWE1MRWxlbWVudCwgWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uLCBYTUxSYXcsIFhNTFN0cmluZ1dyaXRlciwgWE1MU3RyaW5naWZpZXIsIFhNTFRleHQsIGdldFZhbHVlLCBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNQbGFpbk9iamVjdCxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgKHtpc09iamVjdCwgaXNGdW5jdGlvbiwgaXNQbGFpbk9iamVjdCwgZ2V0VmFsdWV9ID0gcmVxdWlyZSgnLi9VdGlsaXR5JykpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTERvY3VtZW50ID0gcmVxdWlyZSgnLi9YTUxEb2N1bWVudCcpO1xuXG4gIFhNTEVsZW1lbnQgPSByZXF1aXJlKCcuL1hNTEVsZW1lbnQnKTtcblxuICBYTUxDRGF0YSA9IHJlcXVpcmUoJy4vWE1MQ0RhdGEnKTtcblxuICBYTUxDb21tZW50ID0gcmVxdWlyZSgnLi9YTUxDb21tZW50Jyk7XG5cbiAgWE1MUmF3ID0gcmVxdWlyZSgnLi9YTUxSYXcnKTtcblxuICBYTUxUZXh0ID0gcmVxdWlyZSgnLi9YTUxUZXh0Jyk7XG5cbiAgWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gcmVxdWlyZSgnLi9YTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24nKTtcblxuICBYTUxEZWNsYXJhdGlvbiA9IHJlcXVpcmUoJy4vWE1MRGVjbGFyYXRpb24nKTtcblxuICBYTUxEb2NUeXBlID0gcmVxdWlyZSgnLi9YTUxEb2NUeXBlJyk7XG5cbiAgWE1MRFREQXR0TGlzdCA9IHJlcXVpcmUoJy4vWE1MRFREQXR0TGlzdCcpO1xuXG4gIFhNTERUREVudGl0eSA9IHJlcXVpcmUoJy4vWE1MRFRERW50aXR5Jyk7XG5cbiAgWE1MRFRERWxlbWVudCA9IHJlcXVpcmUoJy4vWE1MRFRERWxlbWVudCcpO1xuXG4gIFhNTERURE5vdGF0aW9uID0gcmVxdWlyZSgnLi9YTUxEVEROb3RhdGlvbicpO1xuXG4gIFhNTEF0dHJpYnV0ZSA9IHJlcXVpcmUoJy4vWE1MQXR0cmlidXRlJyk7XG5cbiAgWE1MU3RyaW5naWZpZXIgPSByZXF1aXJlKCcuL1hNTFN0cmluZ2lmaWVyJyk7XG5cbiAgWE1MU3RyaW5nV3JpdGVyID0gcmVxdWlyZSgnLi9YTUxTdHJpbmdXcml0ZXInKTtcblxuICBXcml0ZXJTdGF0ZSA9IHJlcXVpcmUoJy4vV3JpdGVyU3RhdGUnKTtcblxuICAvLyBSZXByZXNlbnRzIGFuIFhNTCBidWlsZGVyXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRG9jdW1lbnRDQiA9IGNsYXNzIFhNTERvY3VtZW50Q0Ige1xuICAgIC8vIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIGBYTUxEb2N1bWVudENCYFxuXG4gICAgLy8gYG9wdGlvbnMua2VlcE51bGxOb2Rlc2Agd2hldGhlciBub2RlcyB3aXRoIG51bGwgdmFsdWVzIHdpbGwgYmUga2VwdFxuICAgIC8vICAgICBvciBpZ25vcmVkOiB0cnVlIG9yIGZhbHNlXG4gICAgLy8gYG9wdGlvbnMua2VlcE51bGxBdHRyaWJ1dGVzYCB3aGV0aGVyIGF0dHJpYnV0ZXMgd2l0aCBudWxsIHZhbHVlcyB3aWxsIGJlXG4gICAgLy8gICAgIGtlcHQgb3IgaWdub3JlZDogdHJ1ZSBvciBmYWxzZVxuICAgIC8vIGBvcHRpb25zLmlnbm9yZURlY29yYXRvcnNgIHdoZXRoZXIgZGVjb3JhdG9yIHN0cmluZ3Mgd2lsbCBiZSBpZ25vcmVkIHdoZW5cbiAgICAvLyAgICAgY29udmVydGluZyBKUyBvYmplY3RzOiB0cnVlIG9yIGZhbHNlXG4gICAgLy8gYG9wdGlvbnMuc2VwYXJhdGVBcnJheUl0ZW1zYCB3aGV0aGVyIGFycmF5IGl0ZW1zIGFyZSBjcmVhdGVkIGFzIHNlcGFyYXRlXG4gICAgLy8gICAgIG5vZGVzIHdoZW4gcGFzc2VkIGFzIGFuIG9iamVjdCB2YWx1ZTogdHJ1ZSBvciBmYWxzZVxuICAgIC8vIGBvcHRpb25zLm5vRG91YmxlRW5jb2RpbmdgIHdoZXRoZXIgZXhpc3RpbmcgaHRtbCBlbnRpdGllcyBhcmUgZW5jb2RlZDpcbiAgICAvLyAgICAgdHJ1ZSBvciBmYWxzZVxuICAgIC8vIGBvcHRpb25zLnN0cmluZ2lmeWAgYSBzZXQgb2YgZnVuY3Rpb25zIHRvIHVzZSBmb3IgY29udmVydGluZyB2YWx1ZXMgdG9cbiAgICAvLyAgICAgc3RyaW5nc1xuICAgIC8vIGBvcHRpb25zLndyaXRlcmAgdGhlIGRlZmF1bHQgWE1MIHdyaXRlciB0byB1c2UgZm9yIGNvbnZlcnRpbmcgbm9kZXMgdG9cbiAgICAvLyAgICAgc3RyaW5nLiBJZiB0aGUgZGVmYXVsdCB3cml0ZXIgaXMgbm90IHNldCwgdGhlIGJ1aWx0LWluIFhNTFN0cmluZ1dyaXRlclxuICAgIC8vICAgICB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cblxuICAgIC8vIGBvbkRhdGFgIHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBhIG5ldyBjaHVuayBvZiBYTUwgaXMgb3V0cHV0LiBUaGVcbiAgICAvLyAgICAgICAgICBzdHJpbmcgY29udGFpbmluZyB0aGUgWE1MIGNodW5rIGlzIHBhc3NlZCB0byBgb25EYXRhYCBhcyBpdHMgZmlyc3RcbiAgICAvLyAgICAgICAgICBhcmd1bWVudCwgYW5kIHRoZSBjdXJyZW50IGluZGVudGF0aW9uIGxldmVsIGFzIGl0cyBzZWNvbmQgYXJndW1lbnQuXG4gICAgLy8gYG9uRW5kYCAgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBYTUwgZG9jdW1lbnQgaXMgY29tcGxldGVkIHdpdGhcbiAgICAvLyAgICAgICAgICBgZW5kYC4gYG9uRW5kYCBkb2VzIG5vdCByZWNlaXZlIGFueSBhcmd1bWVudHMuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgb25EYXRhLCBvbkVuZCkge1xuICAgICAgdmFyIHdyaXRlck9wdGlvbnM7XG4gICAgICB0aGlzLm5hbWUgPSBcIj94bWxcIjtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkRvY3VtZW50O1xuICAgICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgICAgIHdyaXRlck9wdGlvbnMgPSB7fTtcbiAgICAgIGlmICghb3B0aW9ucy53cml0ZXIpIHtcbiAgICAgICAgb3B0aW9ucy53cml0ZXIgPSBuZXcgWE1MU3RyaW5nV3JpdGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qob3B0aW9ucy53cml0ZXIpKSB7XG4gICAgICAgIHdyaXRlck9wdGlvbnMgPSBvcHRpb25zLndyaXRlcjtcbiAgICAgICAgb3B0aW9ucy53cml0ZXIgPSBuZXcgWE1MU3RyaW5nV3JpdGVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy53cml0ZXIgPSBvcHRpb25zLndyaXRlcjtcbiAgICAgIHRoaXMud3JpdGVyT3B0aW9ucyA9IHRoaXMud3JpdGVyLmZpbHRlck9wdGlvbnMod3JpdGVyT3B0aW9ucyk7XG4gICAgICB0aGlzLnN0cmluZ2lmeSA9IG5ldyBYTUxTdHJpbmdpZmllcihvcHRpb25zKTtcbiAgICAgIHRoaXMub25EYXRhQ2FsbGJhY2sgPSBvbkRhdGEgfHwgZnVuY3Rpb24oKSB7fTtcbiAgICAgIHRoaXMub25FbmRDYWxsYmFjayA9IG9uRW5kIHx8IGZ1bmN0aW9uKCkge307XG4gICAgICB0aGlzLmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICAgIHRoaXMuY3VycmVudExldmVsID0gLTE7XG4gICAgICB0aGlzLm9wZW5UYWdzID0ge307XG4gICAgICB0aGlzLmRvY3VtZW50U3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5kb2N1bWVudENvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCBub2RlIGZyb20gdGhlIGdpdmVuIFhNTE5vZGVcblxuICAgIC8vIGBub2RlYCB0aGUgY2hpbGQgbm9kZVxuICAgIGNyZWF0ZUNoaWxkTm9kZShub2RlKSB7XG4gICAgICB2YXIgYXR0LCBhdHROYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZCwgaSwgbGVuLCByZWYsIHJlZjE7XG4gICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkNEYXRhOlxuICAgICAgICAgIHRoaXMuY2RhdGEobm9kZS52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcbiAgICAgICAgICB0aGlzLmNvbW1lbnQobm9kZS52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRWxlbWVudDpcbiAgICAgICAgICBhdHRyaWJ1dGVzID0ge307XG4gICAgICAgICAgcmVmID0gbm9kZS5hdHRyaWJzO1xuICAgICAgICAgIGZvciAoYXR0TmFtZSBpbiByZWYpIHtcbiAgICAgICAgICAgIGlmICghaGFzUHJvcC5jYWxsKHJlZiwgYXR0TmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgYXR0ID0gcmVmW2F0dE5hbWVdO1xuICAgICAgICAgICAgYXR0cmlidXRlc1thdHROYW1lXSA9IGF0dC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ub2RlKG5vZGUubmFtZSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRHVtbXk6XG4gICAgICAgICAgdGhpcy5kdW1teSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLlJhdzpcbiAgICAgICAgICB0aGlzLnJhdyhub2RlLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5UZXh0OlxuICAgICAgICAgIHRoaXMudGV4dChub2RlLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb246XG4gICAgICAgICAgdGhpcy5pbnN0cnVjdGlvbihub2RlLnRhcmdldCwgbm9kZS52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBYTUwgbm9kZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYSBKUyBvYmplY3Q6IFwiICsgbm9kZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHJlZjEgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgLy8gd3JpdGUgY2hpbGQgbm9kZXMgcmVjdXJzaXZlbHlcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGQgPSByZWYxW2ldO1xuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZShjaGlsZCk7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgZHVtbXkgbm9kZVxuXG4gICAgZHVtbXkoKSB7XG4gICAgICAvLyBuby1vcCwganVzdCByZXR1cm4gdGhpc1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBhIG5vZGVcblxuICAgIC8vIGBuYW1lYCBuYW1lIG9mIHRoZSBub2RlXG4gICAgLy8gYGF0dHJpYnV0ZXNgIGFuIG9iamVjdCBjb250YWluaW5nIG5hbWUvdmFsdWUgcGFpcnMgb2YgYXR0cmlidXRlc1xuICAgIC8vIGB0ZXh0YCBlbGVtZW50IHRleHRcbiAgICBub2RlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBub2RlIG5hbWUuXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLmN1cnJlbnRMZXZlbCA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRG9jdW1lbnQgY2FuIG9ubHkgaGF2ZSBvbmUgcm9vdCBub2RlLiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbkN1cnJlbnQoKTtcbiAgICAgIG5hbWUgPSBnZXRWYWx1ZShuYW1lKTtcbiAgICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHtcbiAgICAgICAgYXR0cmlidXRlcyA9IHt9O1xuICAgICAgfVxuICAgICAgYXR0cmlidXRlcyA9IGdldFZhbHVlKGF0dHJpYnV0ZXMpO1xuICAgICAgLy8gc3dhcCBhcmd1bWVudCBvcmRlcjogdGV4dCA8LT4gYXR0cmlidXRlc1xuICAgICAgaWYgKCFpc09iamVjdChhdHRyaWJ1dGVzKSkge1xuICAgICAgICBbdGV4dCwgYXR0cmlidXRlc10gPSBbYXR0cmlidXRlcywgdGV4dF07XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnROb2RlID0gbmV3IFhNTEVsZW1lbnQodGhpcywgbmFtZSwgYXR0cmlidXRlcyk7XG4gICAgICB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgdGhpcy5vcGVuVGFnc1t0aGlzLmN1cnJlbnRMZXZlbF0gPSB0aGlzLmN1cnJlbnROb2RlO1xuICAgICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRleHQodGV4dCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCBub2RlIG9yIGFuIGVsZW1lbnQgdHlwZSBkZWNsYXJhdGlvbiB3aGVuIGNhbGxlZFxuICAgIC8vIGluc2lkZSB0aGUgRFREXG5cbiAgICAvLyBgbmFtZWAgbmFtZSBvZiB0aGUgbm9kZVxuICAgIC8vIGBhdHRyaWJ1dGVzYCBhbiBvYmplY3QgY29udGFpbmluZyBuYW1lL3ZhbHVlIHBhaXJzIG9mIGF0dHJpYnV0ZXNcbiAgICAvLyBgdGV4dGAgZWxlbWVudCB0ZXh0XG4gICAgZWxlbWVudChuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICB2YXIgY2hpbGQsIGksIGxlbiwgb2xkVmFsaWRhdGlvbkZsYWcsIHJlZiwgcm9vdDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRG9jVHlwZSkge1xuICAgICAgICB0aGlzLmR0ZEVsZW1lbnQoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpIHx8IGlzT2JqZWN0KG5hbWUpIHx8IGlzRnVuY3Rpb24obmFtZSkpIHtcbiAgICAgICAgICBvbGRWYWxpZGF0aW9uRmxhZyA9IHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb247XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgICAgICAgcm9vdCA9IG5ldyBYTUxEb2N1bWVudCh0aGlzLm9wdGlvbnMpLmVsZW1lbnQoJ1RFTVBfUk9PVCcpO1xuICAgICAgICAgIHJvb3QuZWxlbWVudChuYW1lKTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uID0gb2xkVmFsaWRhdGlvbkZsYWc7XG4gICAgICAgICAgcmVmID0gcm9vdC5jaGlsZHJlbjtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gcmVmW2ldO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVDaGlsZE5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5vZGUobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEFkZHMgb3IgbW9kaWZpZXMgYW4gYXR0cmlidXRlXG5cbiAgICAvLyBgbmFtZWAgYXR0cmlidXRlIG5hbWVcbiAgICAvLyBgdmFsdWVgIGF0dHJpYnV0ZSB2YWx1ZVxuICAgIGF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIGF0dE5hbWUsIGF0dFZhbHVlO1xuICAgICAgaWYgKCF0aGlzLmN1cnJlbnROb2RlIHx8IHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0KCkgY2FuIG9ubHkgYmUgdXNlZCBpbW1lZGlhdGVseSBhZnRlciBhbiBlbGUoKSBjYWxsIGluIGNhbGxiYWNrIG1vZGUuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgICBuYW1lID0gZ2V0VmFsdWUobmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNPYmplY3QobmFtZSkpIHsgLy8gZXhwYW5kIGlmIG9iamVjdFxuICAgICAgICBmb3IgKGF0dE5hbWUgaW4gbmFtZSkge1xuICAgICAgICAgIGlmICghaGFzUHJvcC5jYWxsKG5hbWUsIGF0dE5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICBhdHRWYWx1ZSA9IG5hbWVbYXR0TmFtZV07XG4gICAgICAgICAgdGhpcy5hdHRyaWJ1dGUoYXR0TmFtZSwgYXR0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5rZWVwTnVsbEF0dHJpYnV0ZXMgJiYgKHZhbHVlID09IG51bGwpKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5hdHRyaWJzW25hbWVdID0gbmV3IFhNTEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Tm9kZS5hdHRyaWJzW25hbWVdID0gbmV3IFhNTEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYSB0ZXh0IG5vZGVcblxuICAgIC8vIGB2YWx1ZWAgZWxlbWVudCB0ZXh0XG4gICAgdGV4dCh2YWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTFRleHQodGhpcywgdmFsdWUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIudGV4dChub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgQ0RBVEEgbm9kZVxuXG4gICAgLy8gYHZhbHVlYCBlbGVtZW50IHRleHQgd2l0aG91dCBDREFUQSBkZWxpbWl0ZXJzXG4gICAgY2RhdGEodmFsdWUpIHtcbiAgICAgIHZhciBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgbm9kZSA9IG5ldyBYTUxDRGF0YSh0aGlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLm9uRGF0YSh0aGlzLndyaXRlci5jZGF0YShub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgY29tbWVudCBub2RlXG5cbiAgICAvLyBgdmFsdWVgIGNvbW1lbnQgdGV4dFxuICAgIGNvbW1lbnQodmFsdWUpIHtcbiAgICAgIHZhciBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgbm9kZSA9IG5ldyBYTUxDb21tZW50KHRoaXMsIHZhbHVlKTtcbiAgICAgIHRoaXMub25EYXRhKHRoaXMud3JpdGVyLmNvbW1lbnQobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQWRkcyB1bmVzY2FwZWQgcmF3IHRleHRcblxuICAgIC8vIGB2YWx1ZWAgdGV4dFxuICAgIHJhdyh2YWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTFJhdyh0aGlzLCB2YWx1ZSk7XG4gICAgICB0aGlzLm9uRGF0YSh0aGlzLndyaXRlci5yYXcobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQWRkcyBhIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25cblxuICAgIC8vIGB0YXJnZXRgIGluc3RydWN0aW9uIHRhcmdldFxuICAgIC8vIGB2YWx1ZWAgaW5zdHJ1Y3Rpb24gdmFsdWVcbiAgICBpbnN0cnVjdGlvbih0YXJnZXQsIHZhbHVlKSB7XG4gICAgICB2YXIgaSwgaW5zVGFyZ2V0LCBpbnNWYWx1ZSwgbGVuLCBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgIHRhcmdldCA9IGdldFZhbHVlKHRhcmdldCk7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IGdldFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHsgLy8gZXhwYW5kIGlmIGFycmF5XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHRhcmdldC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGluc1RhcmdldCA9IHRhcmdldFtpXTtcbiAgICAgICAgICB0aGlzLmluc3RydWN0aW9uKGluc1RhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodGFyZ2V0KSkgeyAvLyBleHBhbmQgaWYgb2JqZWN0XG4gICAgICAgIGZvciAoaW5zVGFyZ2V0IGluIHRhcmdldCkge1xuICAgICAgICAgIGlmICghaGFzUHJvcC5jYWxsKHRhcmdldCwgaW5zVGFyZ2V0KSkgY29udGludWU7XG4gICAgICAgICAgaW5zVmFsdWUgPSB0YXJnZXRbaW5zVGFyZ2V0XTtcbiAgICAgICAgICB0aGlzLmluc3RydWN0aW9uKGluc1RhcmdldCwgaW5zVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5ldyBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGhpcywgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMub25EYXRhKHRoaXMud3JpdGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIHRoZSB4bWwgZGVjbGFyYXRpb25cblxuICAgIC8vIGB2ZXJzaW9uYCBBIHZlcnNpb24gbnVtYmVyIHN0cmluZywgZS5nLiAxLjBcbiAgICAvLyBgZW5jb2RpbmdgIEVuY29kaW5nIGRlY2xhcmF0aW9uLCBlLmcuIFVURi04XG4gICAgLy8gYHN0YW5kYWxvbmVgIHN0YW5kYWxvbmUgZG9jdW1lbnQgZGVjbGFyYXRpb246IHRydWUgb3IgZmFsc2VcbiAgICBkZWNsYXJhdGlvbih2ZXJzaW9uLCBlbmNvZGluZywgc3RhbmRhbG9uZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBpZiAodGhpcy5kb2N1bWVudFN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGVjbGFyYXRpb24oKSBtdXN0IGJlIHRoZSBmaXJzdCBub2RlLlwiKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBuZXcgWE1MRGVjbGFyYXRpb24odGhpcywgdmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIuZGVjbGFyYXRpb24obm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyB0aGUgZG9jdW1lbnQgdHlwZSBkZWNsYXJhdGlvblxuXG4gICAgLy8gYHJvb3RgICB0aGUgbmFtZSBvZiB0aGUgcm9vdCBub2RlXG4gICAgLy8gYHB1YklEYCB0aGUgcHVibGljIGlkZW50aWZpZXIgb2YgdGhlIGV4dGVybmFsIHN1YnNldFxuICAgIC8vIGBzeXNJRGAgdGhlIHN5c3RlbSBpZGVudGlmaWVyIG9mIHRoZSBleHRlcm5hbCBzdWJzZXRcbiAgICBkb2N0eXBlKHJvb3QsIHB1YklELCBzeXNJRCkge1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJvb3Qgbm9kZSBuYW1lLlwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZHRkKCkgbXVzdCBjb21lIGJlZm9yZSB0aGUgcm9vdCBub2RlLlwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBuZXcgWE1MRG9jVHlwZSh0aGlzLCBwdWJJRCwgc3lzSUQpO1xuICAgICAgdGhpcy5jdXJyZW50Tm9kZS5yb290Tm9kZU5hbWUgPSByb290O1xuICAgICAgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwrKztcbiAgICAgIHRoaXMub3BlblRhZ3NbdGhpcy5jdXJyZW50TGV2ZWxdID0gdGhpcy5jdXJyZW50Tm9kZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYW4gZWxlbWVudCB0eXBlIGRlY2xhcmF0aW9uXG5cbiAgICAvLyBgbmFtZWAgZWxlbWVudCBuYW1lXG4gICAgLy8gYHZhbHVlYCBlbGVtZW50IGNvbnRlbnQgKGRlZmF1bHRzIHRvICNQQ0RBVEEpXG4gICAgZHRkRWxlbWVudChuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTERUREVsZW1lbnQodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIuZHRkRWxlbWVudChub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGFuIGF0dHJpYnV0ZSBkZWNsYXJhdGlvblxuXG4gICAgLy8gYGVsZW1lbnROYW1lYCB0aGUgbmFtZSBvZiB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoaXMgYXR0cmlidXRlXG4gICAgLy8gYGF0dHJpYnV0ZU5hbWVgIGF0dHJpYnV0ZSBuYW1lXG4gICAgLy8gYGF0dHJpYnV0ZVR5cGVgIHR5cGUgb2YgdGhlIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gQ0RBVEEpXG4gICAgLy8gYGRlZmF1bHRWYWx1ZVR5cGVgIGRlZmF1bHQgdmFsdWUgdHlwZSAoZWl0aGVyICNSRVFVSVJFRCwgI0lNUExJRUQsICNGSVhFRCBvclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAjREVGQVVMVCkgKGRlZmF1bHRzIHRvICNJTVBMSUVEKVxuICAgIC8vIGBkZWZhdWx0VmFsdWVgIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZVxuICAgIC8vICAgICAgICAgICAgICAgIChvbmx5IHVzZWQgZm9yICNGSVhFRCBvciAjREVGQVVMVClcbiAgICBhdHRMaXN0KGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVUeXBlLCBkZWZhdWx0VmFsdWVUeXBlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHZhciBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgbm9kZSA9IG5ldyBYTUxEVERBdHRMaXN0KHRoaXMsIGVsZW1lbnROYW1lLCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVUeXBlLCBkZWZhdWx0VmFsdWVUeXBlLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIuZHRkQXR0TGlzdChub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgZ2VuZXJhbCBlbnRpdHkgZGVjbGFyYXRpb25cblxuICAgIC8vIGBuYW1lYCB0aGUgbmFtZSBvZiB0aGUgZW50aXR5XG4gICAgLy8gYHZhbHVlYCBpbnRlcm5hbCBlbnRpdHkgdmFsdWUgb3IgYW4gb2JqZWN0IHdpdGggZXh0ZXJuYWwgZW50aXR5IGRldGFpbHNcbiAgICAvLyBgdmFsdWUucHViSURgIHB1YmxpYyBpZGVudGlmaWVyXG4gICAgLy8gYHZhbHVlLnN5c0lEYCBzeXN0ZW0gaWRlbnRpZmllclxuICAgIC8vIGB2YWx1ZS5uRGF0YWAgbm90YXRpb24gZGVjbGFyYXRpb25cbiAgICBlbnRpdHkobmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgbm9kZSA9IG5ldyBYTUxEVERFbnRpdHkodGhpcywgZmFsc2UsIG5hbWUsIHZhbHVlKTtcbiAgICAgIHRoaXMub25EYXRhKHRoaXMud3JpdGVyLmR0ZEVudGl0eShub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIGEgcGFyYW1ldGVyIGVudGl0eSBkZWNsYXJhdGlvblxuXG4gICAgLy8gYG5hbWVgIHRoZSBuYW1lIG9mIHRoZSBlbnRpdHlcbiAgICAvLyBgdmFsdWVgIGludGVybmFsIGVudGl0eSB2YWx1ZSBvciBhbiBvYmplY3Qgd2l0aCBleHRlcm5hbCBlbnRpdHkgZGV0YWlsc1xuICAgIC8vIGB2YWx1ZS5wdWJJRGAgcHVibGljIGlkZW50aWZpZXJcbiAgICAvLyBgdmFsdWUuc3lzSURgIHN5c3RlbSBpZGVudGlmaWVyXG4gICAgcEVudGl0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTERUREVudGl0eSh0aGlzLCB0cnVlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB0aGlzLm9uRGF0YSh0aGlzLndyaXRlci5kdGRFbnRpdHkobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBhIE5PVEFUSU9OIGRlY2xhcmF0aW9uXG5cbiAgICAvLyBgbmFtZWAgdGhlIG5hbWUgb2YgdGhlIG5vdGF0aW9uXG4gICAgLy8gYHZhbHVlYCBhbiBvYmplY3Qgd2l0aCBleHRlcm5hbCBlbnRpdHkgZGV0YWlsc1xuICAgIC8vIGB2YWx1ZS5wdWJJRGAgcHVibGljIGlkZW50aWZpZXJcbiAgICAvLyBgdmFsdWUuc3lzSURgIHN5c3RlbSBpZGVudGlmaWVyXG4gICAgbm90YXRpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgbm9kZSA9IG5ldyBYTUxEVEROb3RhdGlvbih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB0aGlzLm9uRGF0YSh0aGlzLndyaXRlci5kdGROb3RhdGlvbihub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBHZXRzIHRoZSBwYXJlbnQgbm9kZVxuICAgIHVwKCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudExldmVsIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZG9jdW1lbnQgbm9kZSBoYXMgbm8gcGFyZW50LlwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vcGVuTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VOb2RlKHRoaXMub3BlblRhZ3NbdGhpcy5jdXJyZW50TGV2ZWxdKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLm9wZW5UYWdzW3RoaXMuY3VycmVudExldmVsXTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsLS07XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBFbmRzIHRoZSBkb2N1bWVudFxuICAgIGVuZCgpIHtcbiAgICAgIHdoaWxlICh0aGlzLmN1cnJlbnRMZXZlbCA+PSAwKSB7XG4gICAgICAgIHRoaXMudXAoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKCk7XG4gICAgfVxuXG4gICAgLy8gT3BlbnMgdGhlIGN1cnJlbnQgcGFyZW50IG5vZGVcbiAgICBvcGVuQ3VycmVudCgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXcml0ZXMgdGhlIG9wZW5pbmcgdGFnIG9mIHRoZSBjdXJyZW50IG5vZGUgb3IgdGhlIGVudGlyZSBub2RlIGlmIGl0IGhhc1xuICAgIC8vIG5vIGNoaWxkIG5vZGVzXG4gICAgb3Blbk5vZGUobm9kZSkge1xuICAgICAgdmFyIGF0dCwgY2h1bmssIG5hbWUsIHJlZjtcbiAgICAgIGlmICghbm9kZS5pc09wZW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QgJiYgdGhpcy5jdXJyZW50TGV2ZWwgPT09IDAgJiYgbm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICBjaHVuayA9ICcnO1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy53cml0ZXJPcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgICAgICBjaHVuayA9IHRoaXMud3JpdGVyLmluZGVudChub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsKSArICc8JyArIG5vZGUubmFtZTtcbiAgICAgICAgICByZWYgPSBub2RlLmF0dHJpYnM7XG4gICAgICAgICAgZm9yIChuYW1lIGluIHJlZikge1xuICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmLCBuYW1lKSkgY29udGludWU7XG4gICAgICAgICAgICBhdHQgPSByZWZbbmFtZV07XG4gICAgICAgICAgICBjaHVuayArPSB0aGlzLndyaXRlci5hdHRyaWJ1dGUoYXR0LCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2h1bmsgKz0gKG5vZGUuY2hpbGRyZW4gPyAnPicgOiAnLz4nKSArIHRoaXMud3JpdGVyLmVuZGxpbmUobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgdGhpcy53cml0ZXJPcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnOyAvLyBpZiBub2RlLnR5cGUgaXMgTm9kZVR5cGUuRG9jVHlwZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMud3JpdGVyT3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICAgICAgY2h1bmsgPSB0aGlzLndyaXRlci5pbmRlbnQobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCkgKyAnPCFET0NUWVBFICcgKyBub2RlLnJvb3ROb2RlTmFtZTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBleHRlcm5hbCBpZGVudGlmaWVyXG4gICAgICAgICAgaWYgKG5vZGUucHViSUQgJiYgbm9kZS5zeXNJRCkge1xuICAgICAgICAgICAgY2h1bmsgKz0gJyBQVUJMSUMgXCInICsgbm9kZS5wdWJJRCArICdcIiBcIicgKyBub2RlLnN5c0lEICsgJ1wiJztcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuc3lzSUQpIHtcbiAgICAgICAgICAgIGNodW5rICs9ICcgU1lTVEVNIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAvLyBpbnRlcm5hbCBzdWJzZXRcbiAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgY2h1bmsgKz0gJyBbJztcbiAgICAgICAgICAgIHRoaXMud3JpdGVyT3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53cml0ZXJPcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICAgICAgICBjaHVuayArPSAnPic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNodW5rICs9IHRoaXMud3JpdGVyLmVuZGxpbmUobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkRhdGEoY2h1bmssIHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgcmV0dXJuIG5vZGUuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXcml0ZXMgdGhlIGNsb3NpbmcgdGFnIG9mIHRoZSBjdXJyZW50IG5vZGVcbiAgICBjbG9zZU5vZGUobm9kZSkge1xuICAgICAgdmFyIGNodW5rO1xuICAgICAgaWYgKCFub2RlLmlzQ2xvc2VkKSB7XG4gICAgICAgIGNodW5rID0gJyc7XG4gICAgICAgIHRoaXMud3JpdGVyT3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgICAgY2h1bmsgPSB0aGlzLndyaXRlci5pbmRlbnQobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCkgKyAnPC8nICsgbm9kZS5uYW1lICsgJz4nICsgdGhpcy53cml0ZXIuZW5kbGluZShub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsKTsgLy8gaWYgbm9kZS50eXBlIGlzIE5vZGVUeXBlLkRvY1R5cGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaHVuayA9IHRoaXMud3JpdGVyLmluZGVudChub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsKSArICddPicgKyB0aGlzLndyaXRlci5lbmRsaW5lKG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JpdGVyT3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICAgIHRoaXMub25EYXRhKGNodW5rLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIHJldHVybiBub2RlLmlzQ2xvc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgd2hlbiBhIG5ldyBjaHVuayBvZiBYTUwgaXMgb3V0cHV0XG5cbiAgICAvLyBgY2h1bmtgIGEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIFhNTCBjaHVua1xuICAgIC8vIGBsZXZlbGAgY3VycmVudCBpbmRlbnRhdGlvbiBsZXZlbFxuICAgIG9uRGF0YShjaHVuaywgbGV2ZWwpIHtcbiAgICAgIHRoaXMuZG9jdW1lbnRTdGFydGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLm9uRGF0YUNhbGxiYWNrKGNodW5rLCBsZXZlbCArIDEpO1xuICAgIH1cblxuICAgIC8vIENhbGxlZCB3aGVuIHRoZSBYTUwgZG9jdW1lbnQgaXMgY29tcGxldGVkXG4gICAgb25FbmQoKSB7XG4gICAgICB0aGlzLmRvY3VtZW50Q29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIGRlYnVnIHN0cmluZ1xuICAgIGRlYnVnSW5mbyhuYW1lKSB7XG4gICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwibm9kZTogPFwiICsgbmFtZSArIFwiPlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vZGUgYWxpYXNlc1xuICAgIGVsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQoLi4uYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBub2QobmFtZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZShuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KTtcbiAgICB9XG5cbiAgICB0eHQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQodmFsdWUpO1xuICAgIH1cblxuICAgIGRhdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2RhdGEodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tbWVudCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaW5zKHRhcmdldCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9uKHRhcmdldCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGRlYyh2ZXJzaW9uLCBlbmNvZGluZywgc3RhbmRhbG9uZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24odmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpO1xuICAgIH1cblxuICAgIGR0ZChyb290LCBwdWJJRCwgc3lzSUQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvY3R5cGUocm9vdCwgcHViSUQsIHN5c0lEKTtcbiAgICB9XG5cbiAgICBlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgfVxuXG4gICAgbihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpO1xuICAgIH1cblxuICAgIHQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQodmFsdWUpO1xuICAgIH1cblxuICAgIGQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNkYXRhKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21tZW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICByKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYXcodmFsdWUpO1xuICAgIH1cblxuICAgIGkodGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdHJ1Y3Rpb24odGFyZ2V0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gQXR0cmlidXRlIGFsaWFzZXNcbiAgICBhdHQoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkRvY1R5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0TGlzdCguLi5hcmd1bWVudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYSgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRG9jVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRMaXN0KC4uLmFyZ3VtZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUoLi4uYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEVEQgYWxpYXNlc1xuICAgIC8vIGF0dCgpIGFuZCBlbGUoKSBhcmUgZGVmaW5lZCBhYm92ZVxuICAgIGVudChuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50aXR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwZW50KG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wRW50aXR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBub3QobmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vdGF0aW9uKG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgV3JpdGVyU3RhdGUsIFhNTFN0cmVhbVdyaXRlciwgWE1MV3JpdGVyQmFzZSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MV3JpdGVyQmFzZSA9IHJlcXVpcmUoJy4vWE1MV3JpdGVyQmFzZScpO1xuXG4gIFdyaXRlclN0YXRlID0gcmVxdWlyZSgnLi9Xcml0ZXJTdGF0ZScpO1xuXG4gIC8vIFByaW50cyBYTUwgbm9kZXMgdG8gYSBzdHJlYW1cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxTdHJlYW1Xcml0ZXIgPSBjbGFzcyBYTUxTdHJlYW1Xcml0ZXIgZXh0ZW5kcyBYTUxXcml0ZXJCYXNlIHtcbiAgICAvLyBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiBgWE1MU3RyZWFtV3JpdGVyYFxuXG4gICAgLy8gYHN0cmVhbWAgb3V0cHV0IHN0cmVhbVxuICAgIC8vIGBvcHRpb25zLnByZXR0eWAgcHJldHR5IHByaW50cyB0aGUgcmVzdWx0XG4gICAgLy8gYG9wdGlvbnMuaW5kZW50YCBpbmRlbnRhdGlvbiBzdHJpbmdcbiAgICAvLyBgb3B0aW9ucy5uZXdsaW5lYCBuZXdsaW5lIHNlcXVlbmNlXG4gICAgLy8gYG9wdGlvbnMub2Zmc2V0YCBhIGZpeGVkIG51bWJlciBvZiBpbmRlbnRhdGlvbnMgdG8gYWRkIHRvIGV2ZXJ5IGxpbmVcbiAgICAvLyBgb3B0aW9ucy5hbGxvd0VtcHR5YCBkbyBub3Qgc2VsZiBjbG9zZSBlbXB0eSBlbGVtZW50IHRhZ3NcbiAgICAvLyAnb3B0aW9ucy5kb250UHJldHR5VGV4dE5vZGVzJyBpZiBhbnkgdGV4dCBpcyBwcmVzZW50IGluIG5vZGUsIGRvbid0IGluZGVudCBvciBMRlxuICAgIC8vIGBvcHRpb25zLnNwYWNlQmVmb3JlU2xhc2hgIGFkZCBhIHNwYWNlIGJlZm9yZSB0aGUgY2xvc2luZyBzbGFzaCBvZiBlbXB0eSBlbGVtZW50c1xuICAgIGNvbnN0cnVjdG9yKHN0cmVhbSwgb3B0aW9ucykge1xuICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICB0aGlzLnN0cmVhbSA9IHN0cmVhbTtcbiAgICB9XG5cbiAgICBlbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICBpZiAobm9kZS5pc0xhc3RSb290Tm9kZSAmJiBvcHRpb25zLnN0YXRlID09PSBXcml0ZXJTdGF0ZS5DbG9zZVRhZykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3VwZXIuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQoZG9jLCBvcHRpb25zKSB7XG4gICAgICB2YXIgY2hpbGQsIGksIGosIGssIGxlbjEsIGxlbjIsIHJlZiwgcmVmMSwgcmVzdWx0cztcbiAgICAgIHJlZiA9IGRvYy5jaGlsZHJlbjtcbiAgICAgIC8vIHNldCBhIGZsYWcgc28gdGhhdCB3ZSBkb24ndCBpbnNlcnQgYSBuZXdsaW5lIGFmdGVyIHRoZSBsYXN0IHJvb3QgbGV2ZWwgbm9kZSBcbiAgICAgIGZvciAoaSA9IGogPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgaiA8IGxlbjE7IGkgPSArK2opIHtcbiAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgIGNoaWxkLmlzTGFzdFJvb3ROb2RlID0gaSA9PT0gZG9jLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICBvcHRpb25zID0gdGhpcy5maWx0ZXJPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgcmVmMSA9IGRvYy5jaGlsZHJlbjtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoayA9IDAsIGxlbjIgPSByZWYxLmxlbmd0aDsgayA8IGxlbjI7IGsrKykge1xuICAgICAgICBjaGlsZCA9IHJlZjFba107XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLndyaXRlQ2hpbGROb2RlKGNoaWxkLCBvcHRpb25zLCAwKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBjZGF0YShub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKHN1cGVyLmNkYXRhKG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfVxuXG4gICAgY29tbWVudChub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKHN1cGVyLmNvbW1lbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICB9XG5cbiAgICBkZWNsYXJhdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKHN1cGVyLmRlY2xhcmF0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfVxuXG4gICAgZG9jVHlwZShub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIGNoaWxkLCBqLCBsZW4xLCByZWY7XG4gICAgICBsZXZlbCB8fCAobGV2ZWwgPSAwKTtcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICB0aGlzLnN0cmVhbS53cml0ZSh0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgICAgdGhpcy5zdHJlYW0ud3JpdGUoJzwhRE9DVFlQRSAnICsgbm9kZS5yb290KCkubmFtZSk7XG4gICAgICAvLyBleHRlcm5hbCBpZGVudGlmaWVyXG4gICAgICBpZiAobm9kZS5wdWJJRCAmJiBub2RlLnN5c0lEKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCcgUFVCTElDIFwiJyArIG5vZGUucHViSUQgKyAnXCIgXCInICsgbm9kZS5zeXNJRCArICdcIicpO1xuICAgICAgfSBlbHNlIGlmIChub2RlLnN5c0lEKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCcgU1lTVEVNIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInKTtcbiAgICAgIH1cbiAgICAgIC8vIGludGVybmFsIHN1YnNldFxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnIFsnKTtcbiAgICAgICAgdGhpcy5zdHJlYW0ud3JpdGUodGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICAgIHJlZiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWZbal07XG4gICAgICAgICAgdGhpcy53cml0ZUNoaWxkTm9kZShjaGlsZCwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCddJyk7XG4gICAgICB9XG4gICAgICAvLyBjbG9zZSB0YWdcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHRoaXMuc3RyZWFtLndyaXRlKG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICc+Jyk7XG4gICAgICB0aGlzLnN0cmVhbS53cml0ZSh0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgcmV0dXJuIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICB9XG5cbiAgICBlbGVtZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgYXR0LCBhdHRMZW4sIGNoaWxkLCBjaGlsZE5vZGVDb3VudCwgZmlyc3RDaGlsZE5vZGUsIGosIGxlbiwgbGVuMSwgbmFtZSwgcHJldHR5U3VwcHJlc3NlZCwgciwgcmF0dCwgcmVmLCByZWYxLCByZWYyLCBybGluZTtcbiAgICAgIGxldmVsIHx8IChsZXZlbCA9IDApO1xuICAgICAgLy8gb3BlbiB0YWdcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgJzwnICsgbm9kZS5uYW1lO1xuICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgaWYgKG9wdGlvbnMucHJldHR5ICYmIG9wdGlvbnMud2lkdGggPiAwKSB7XG4gICAgICAgIGxlbiA9IHIubGVuZ3RoO1xuICAgICAgICByZWYgPSBub2RlLmF0dHJpYnM7XG4gICAgICAgIGZvciAobmFtZSBpbiByZWYpIHtcbiAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChyZWYsIG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgICBhdHQgPSByZWZbbmFtZV07XG4gICAgICAgICAgcmF0dCA9IHRoaXMuYXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICAgIGF0dExlbiA9IHJhdHQubGVuZ3RoO1xuICAgICAgICAgIGlmIChsZW4gKyBhdHRMZW4gPiBvcHRpb25zLndpZHRoKSB7XG4gICAgICAgICAgICBybGluZSA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsICsgMSkgKyByYXR0O1xuICAgICAgICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgcmxpbmU7XG4gICAgICAgICAgICBsZW4gPSBybGluZS5sZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJsaW5lID0gJyAnICsgcmF0dDtcbiAgICAgICAgICAgIHIgKz0gcmxpbmU7XG4gICAgICAgICAgICBsZW4gKz0gcmxpbmUubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVmMSA9IG5vZGUuYXR0cmlicztcbiAgICAgICAgZm9yIChuYW1lIGluIHJlZjEpIHtcbiAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChyZWYxLCBuYW1lKSkgY29udGludWU7XG4gICAgICAgICAgYXR0ID0gcmVmMVtuYW1lXTtcbiAgICAgICAgICByICs9IHRoaXMuYXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN0cmVhbS53cml0ZShyKTtcbiAgICAgIGNoaWxkTm9kZUNvdW50ID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBmaXJzdENoaWxkTm9kZSA9IGNoaWxkTm9kZUNvdW50ID09PSAwID8gbnVsbCA6IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICBpZiAoY2hpbGROb2RlQ291bnQgPT09IDAgfHwgbm9kZS5jaGlsZHJlbi5ldmVyeShmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiAoZS50eXBlID09PSBOb2RlVHlwZS5UZXh0IHx8IGUudHlwZSA9PT0gTm9kZVR5cGUuUmF3IHx8IGUudHlwZSA9PT0gTm9kZVR5cGUuQ0RhdGEpICYmIGUudmFsdWUgPT09ICcnO1xuICAgICAgfSkpIHtcbiAgICAgICAgLy8gZW1wdHkgZWxlbWVudFxuICAgICAgICBpZiAob3B0aW9ucy5hbGxvd0VtcHR5KSB7XG4gICAgICAgICAgdGhpcy5zdHJlYW0ud3JpdGUoJz4nKTtcbiAgICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICAgICAgdGhpcy5zdHJlYW0ud3JpdGUoJzwvJyArIG5vZGUubmFtZSArICc+Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICcvPicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJldHR5ICYmIGNoaWxkTm9kZUNvdW50ID09PSAxICYmIChmaXJzdENoaWxkTm9kZS50eXBlID09PSBOb2RlVHlwZS5UZXh0IHx8IGZpcnN0Q2hpbGROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlJhdyB8fCBmaXJzdENoaWxkTm9kZS50eXBlID09PSBOb2RlVHlwZS5DRGF0YSkgJiYgKGZpcnN0Q2hpbGROb2RlLnZhbHVlICE9IG51bGwpKSB7XG4gICAgICAgIC8vIGRvIG5vdCBpbmRlbnQgdGV4dC1vbmx5IG5vZGVzXG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCc+Jyk7XG4gICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICAgIG9wdGlvbnMuc3VwcHJlc3NQcmV0dHlDb3VudCsrO1xuICAgICAgICBwcmV0dHlTdXBwcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53cml0ZUNoaWxkTm9kZShmaXJzdENoaWxkTm9kZSwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwcmVzc1ByZXR0eUNvdW50LS07XG4gICAgICAgIHByZXR0eVN1cHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnPC8nICsgbm9kZS5uYW1lICsgJz4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCc+JyArIHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgICByZWYyID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgLy8gaW5uZXIgdGFnc1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMi5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZjJbal07XG4gICAgICAgICAgdGhpcy53cml0ZUNoaWxkTm9kZShjaGlsZCwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbG9zZSB0YWdcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSh0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPC8nICsgbm9kZS5uYW1lICsgJz4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RyZWFtLndyaXRlKHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICByZXR1cm4gdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgIH1cblxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKHN1cGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgIH1cblxuICAgIHJhdyhub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKHN1cGVyLnJhdyhub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgIH1cblxuICAgIHRleHQobm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmVhbS53cml0ZShzdXBlci50ZXh0KG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfVxuXG4gICAgZHRkQXR0TGlzdChub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKHN1cGVyLmR0ZEF0dExpc3Qobm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICB9XG5cbiAgICBkdGRFbGVtZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUoc3VwZXIuZHRkRWxlbWVudChub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgIH1cblxuICAgIGR0ZEVudGl0eShub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKHN1cGVyLmR0ZEVudGl0eShub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgIH1cblxuICAgIGR0ZE5vdGF0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUoc3VwZXIuZHRkTm90YXRpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICB9XG5cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuNC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgV3JpdGVyU3RhdGUsIFhNTERPTUltcGxlbWVudGF0aW9uLCBYTUxEb2N1bWVudCwgWE1MRG9jdW1lbnRDQiwgWE1MU3RyZWFtV3JpdGVyLCBYTUxTdHJpbmdXcml0ZXIsIGFzc2lnbiwgaXNGdW5jdGlvbjtcblxuICAoe2Fzc2lnbiwgaXNGdW5jdGlvbn0gPSByZXF1aXJlKCcuL1V0aWxpdHknKSk7XG5cbiAgWE1MRE9NSW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL1hNTERPTUltcGxlbWVudGF0aW9uJyk7XG5cbiAgWE1MRG9jdW1lbnQgPSByZXF1aXJlKCcuL1hNTERvY3VtZW50Jyk7XG5cbiAgWE1MRG9jdW1lbnRDQiA9IHJlcXVpcmUoJy4vWE1MRG9jdW1lbnRDQicpO1xuXG4gIFhNTFN0cmluZ1dyaXRlciA9IHJlcXVpcmUoJy4vWE1MU3RyaW5nV3JpdGVyJyk7XG5cbiAgWE1MU3RyZWFtV3JpdGVyID0gcmVxdWlyZSgnLi9YTUxTdHJlYW1Xcml0ZXInKTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBXcml0ZXJTdGF0ZSA9IHJlcXVpcmUoJy4vV3JpdGVyU3RhdGUnKTtcblxuICAvLyBDcmVhdGVzIGEgbmV3IGRvY3VtZW50IGFuZCByZXR1cm5zIHRoZSByb290IG5vZGUgZm9yXG4gIC8vIGNoYWluLWJ1aWxkaW5nIHRoZSBkb2N1bWVudCB0cmVlXG5cbiAgLy8gYG5hbWVgIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudFxuXG4gIC8vIGB4bWxkZWMudmVyc2lvbmAgQSB2ZXJzaW9uIG51bWJlciBzdHJpbmcsIGUuZy4gMS4wXG4gIC8vIGB4bWxkZWMuZW5jb2RpbmdgIEVuY29kaW5nIGRlY2xhcmF0aW9uLCBlLmcuIFVURi04XG4gIC8vIGB4bWxkZWMuc3RhbmRhbG9uZWAgc3RhbmRhbG9uZSBkb2N1bWVudCBkZWNsYXJhdGlvbjogdHJ1ZSBvciBmYWxzZVxuXG4gIC8vIGBkb2N0eXBlLnB1YklEYCBwdWJsaWMgaWRlbnRpZmllciBvZiB0aGUgZXh0ZXJuYWwgc3Vic2V0XG4gIC8vIGBkb2N0eXBlLnN5c0lEYCBzeXN0ZW0gaWRlbnRpZmllciBvZiB0aGUgZXh0ZXJuYWwgc3Vic2V0XG5cbiAgLy8gYG9wdGlvbnMuaGVhZGxlc3NgIHdoZXRoZXIgWE1MIGRlY2xhcmF0aW9uIGFuZCBkb2N0eXBlIHdpbGwgYmUgaW5jbHVkZWQ6XG4gIC8vICAgICB0cnVlIG9yIGZhbHNlXG4gIC8vIGBvcHRpb25zLmtlZXBOdWxsTm9kZXNgIHdoZXRoZXIgbm9kZXMgd2l0aCBudWxsIHZhbHVlcyB3aWxsIGJlIGtlcHRcbiAgLy8gICAgIG9yIGlnbm9yZWQ6IHRydWUgb3IgZmFsc2VcbiAgLy8gYG9wdGlvbnMua2VlcE51bGxBdHRyaWJ1dGVzYCB3aGV0aGVyIGF0dHJpYnV0ZXMgd2l0aCBudWxsIHZhbHVlcyB3aWxsIGJlXG4gIC8vICAgICBrZXB0IG9yIGlnbm9yZWQ6IHRydWUgb3IgZmFsc2VcbiAgLy8gYG9wdGlvbnMuaWdub3JlRGVjb3JhdG9yc2Agd2hldGhlciBkZWNvcmF0b3Igc3RyaW5ncyB3aWxsIGJlIGlnbm9yZWQgd2hlblxuICAvLyAgICAgY29udmVydGluZyBKUyBvYmplY3RzOiB0cnVlIG9yIGZhbHNlXG4gIC8vIGBvcHRpb25zLnNlcGFyYXRlQXJyYXlJdGVtc2Agd2hldGhlciBhcnJheSBpdGVtcyBhcmUgY3JlYXRlZCBhcyBzZXBhcmF0ZVxuICAvLyAgICAgbm9kZXMgd2hlbiBwYXNzZWQgYXMgYW4gb2JqZWN0IHZhbHVlOiB0cnVlIG9yIGZhbHNlXG4gIC8vIGBvcHRpb25zLm5vRG91YmxlRW5jb2RpbmdgIHdoZXRoZXIgZXhpc3RpbmcgaHRtbCBlbnRpdGllcyBhcmUgZW5jb2RlZDpcbiAgLy8gICAgIHRydWUgb3IgZmFsc2VcbiAgLy8gYG9wdGlvbnMuc3RyaW5naWZ5YCBhIHNldCBvZiBmdW5jdGlvbnMgdG8gdXNlIGZvciBjb252ZXJ0aW5nIHZhbHVlcyB0b1xuICAvLyAgICAgc3RyaW5nc1xuICAvLyBgb3B0aW9ucy53cml0ZXJgIHRoZSBkZWZhdWx0IFhNTCB3cml0ZXIgdG8gdXNlIGZvciBjb252ZXJ0aW5nIG5vZGVzIHRvXG4gIC8vICAgICBzdHJpbmcuIElmIHRoZSBkZWZhdWx0IHdyaXRlciBpcyBub3Qgc2V0LCB0aGUgYnVpbHQtaW4gWE1MU3RyaW5nV3JpdGVyXG4gIC8vICAgICB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cbiAgbW9kdWxlLmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24obmFtZSwgeG1sZGVjLCBkb2N0eXBlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRvYywgcm9vdDtcbiAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb290IGVsZW1lbnQgbmVlZHMgYSBuYW1lLlwiKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IGFzc2lnbih7fSwgeG1sZGVjLCBkb2N0eXBlLCBvcHRpb25zKTtcbiAgICAvLyBjcmVhdGUgdGhlIGRvY3VtZW50IG5vZGVcbiAgICBkb2MgPSBuZXcgWE1MRG9jdW1lbnQob3B0aW9ucyk7XG4gICAgLy8gYWRkIHRoZSByb290IG5vZGVcbiAgICByb290ID0gZG9jLmVsZW1lbnQobmFtZSk7XG4gICAgLy8gcHJvbG9nXG4gICAgaWYgKCFvcHRpb25zLmhlYWRsZXNzKSB7XG4gICAgICBkb2MuZGVjbGFyYXRpb24ob3B0aW9ucyk7XG4gICAgICBpZiAoKG9wdGlvbnMucHViSUQgIT0gbnVsbCkgfHwgKG9wdGlvbnMuc3lzSUQgIT0gbnVsbCkpIHtcbiAgICAgICAgZG9jLmR0ZChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH07XG5cbiAgLy8gQ3JlYXRlcyBhIG5ldyBkb2N1bWVudCBhbmQgcmV0dXJucyB0aGUgZG9jdW1lbnQgbm9kZSBmb3JcbiAgLy8gY2hhaW4tYnVpbGRpbmcgdGhlIGRvY3VtZW50IHRyZWVcblxuICAvLyBgb3B0aW9ucy5rZWVwTnVsbE5vZGVzYCB3aGV0aGVyIG5vZGVzIHdpdGggbnVsbCB2YWx1ZXMgd2lsbCBiZSBrZXB0XG4gIC8vICAgICBvciBpZ25vcmVkOiB0cnVlIG9yIGZhbHNlXG4gIC8vIGBvcHRpb25zLmtlZXBOdWxsQXR0cmlidXRlc2Agd2hldGhlciBhdHRyaWJ1dGVzIHdpdGggbnVsbCB2YWx1ZXMgd2lsbCBiZVxuICAvLyAgICAga2VwdCBvciBpZ25vcmVkOiB0cnVlIG9yIGZhbHNlXG4gIC8vIGBvcHRpb25zLmlnbm9yZURlY29yYXRvcnNgIHdoZXRoZXIgZGVjb3JhdG9yIHN0cmluZ3Mgd2lsbCBiZSBpZ25vcmVkIHdoZW5cbiAgLy8gICAgIGNvbnZlcnRpbmcgSlMgb2JqZWN0czogdHJ1ZSBvciBmYWxzZVxuICAvLyBgb3B0aW9ucy5zZXBhcmF0ZUFycmF5SXRlbXNgIHdoZXRoZXIgYXJyYXkgaXRlbXMgYXJlIGNyZWF0ZWQgYXMgc2VwYXJhdGVcbiAgLy8gICAgIG5vZGVzIHdoZW4gcGFzc2VkIGFzIGFuIG9iamVjdCB2YWx1ZTogdHJ1ZSBvciBmYWxzZVxuICAvLyBgb3B0aW9ucy5ub0RvdWJsZUVuY29kaW5nYCB3aGV0aGVyIGV4aXN0aW5nIGh0bWwgZW50aXRpZXMgYXJlIGVuY29kZWQ6XG4gIC8vICAgICB0cnVlIG9yIGZhbHNlXG4gIC8vIGBvcHRpb25zLnN0cmluZ2lmeWAgYSBzZXQgb2YgZnVuY3Rpb25zIHRvIHVzZSBmb3IgY29udmVydGluZyB2YWx1ZXMgdG9cbiAgLy8gICAgIHN0cmluZ3NcbiAgLy8gYG9wdGlvbnMud3JpdGVyYCB0aGUgZGVmYXVsdCBYTUwgd3JpdGVyIHRvIHVzZSBmb3IgY29udmVydGluZyBub2RlcyB0b1xuICAvLyAgICAgc3RyaW5nLiBJZiB0aGUgZGVmYXVsdCB3cml0ZXIgaXMgbm90IHNldCwgdGhlIGJ1aWx0LWluIFhNTFN0cmluZ1dyaXRlclxuICAvLyAgICAgd2lsbCBiZSB1c2VkIGluc3RlYWQuXG5cbiAgLy8gYG9uRGF0YWAgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGEgbmV3IGNodW5rIG9mIFhNTCBpcyBvdXRwdXQuIFRoZVxuICAvLyAgICAgICAgICBzdHJpbmcgY29udGFpbmluZyB0aGUgWE1MIGNodW5rIGlzIHBhc3NlZCB0byBgb25EYXRhYCBhcyBpdHMgc2luZ2xlXG4gIC8vICAgICAgICAgIGFyZ3VtZW50LlxuICAvLyBgb25FbmRgICB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFhNTCBkb2N1bWVudCBpcyBjb21wbGV0ZWQgd2l0aFxuICAvLyAgICAgICAgICBgZW5kYC4gYG9uRW5kYCBkb2VzIG5vdCByZWNlaXZlIGFueSBhcmd1bWVudHMuXG4gIG1vZHVsZS5leHBvcnRzLmJlZ2luID0gZnVuY3Rpb24ob3B0aW9ucywgb25EYXRhLCBvbkVuZCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICBbb25EYXRhLCBvbkVuZF0gPSBbb3B0aW9ucywgb25EYXRhXTtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgaWYgKG9uRGF0YSkge1xuICAgICAgcmV0dXJuIG5ldyBYTUxEb2N1bWVudENCKG9wdGlvbnMsIG9uRGF0YSwgb25FbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFhNTERvY3VtZW50KG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cy5zdHJpbmdXcml0ZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBYTUxTdHJpbmdXcml0ZXIob3B0aW9ucyk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMuc3RyZWFtV3JpdGVyID0gZnVuY3Rpb24oc3RyZWFtLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBYTUxTdHJlYW1Xcml0ZXIoc3RyZWFtLCBvcHRpb25zKTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cy5pbXBsZW1lbnRhdGlvbiA9IG5ldyBYTUxET01JbXBsZW1lbnRhdGlvbigpO1xuXG4gIG1vZHVsZS5leHBvcnRzLm5vZGVUeXBlID0gTm9kZVR5cGU7XG5cbiAgbW9kdWxlLmV4cG9ydHMud3JpdGVyU3RhdGUgPSBXcml0ZXJTdGF0ZTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpO1xudmFyIHhtbGJ1aWxkZXIgPSByZXF1aXJlKCd4bWxidWlsZGVyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxuZXhwb3J0cy5idWlsZCA9IGJ1aWxkO1xuXG4vKipcbiAqIEFjY2VwdHMgYSBgRGF0ZWAgaW5zdGFuY2UgYW5kIHJldHVybnMgYW4gSVNPIGRhdGUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZCAtIERhdGUgaW5zdGFuY2UgdG8gc2VyaWFsaXplXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBJU08gZGF0ZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYGRgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBJU09EYXRlU3RyaW5nKGQpe1xuICBmdW5jdGlvbiBwYWQobil7XG4gICAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4gOiBuO1xuICB9XG4gIHJldHVybiBkLmdldFVUQ0Z1bGxZZWFyKCkrJy0nXG4gICAgKyBwYWQoZC5nZXRVVENNb250aCgpKzEpKyctJ1xuICAgICsgcGFkKGQuZ2V0VVRDRGF0ZSgpKSsnVCdcbiAgICArIHBhZChkLmdldFVUQ0hvdXJzKCkpKyc6J1xuICAgICsgcGFkKGQuZ2V0VVRDTWludXRlcygpKSsnOidcbiAgICArIHBhZChkLmdldFVUQ1NlY29uZHMoKSkrJ1onO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludGVybmFsIFwidHlwZVwiIG9mIGBvYmpgIHZpYSB0aGVcbiAqIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClgIHRyaWNrLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9iaiAtIGFueSB2YWx1ZVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGludGVybmFsIFwidHlwZVwiIG5hbWVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5mdW5jdGlvbiB0eXBlIChvYmopIHtcbiAgdmFyIG0gPSB0b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xcW29iamVjdCAoLiopXFxdLyk7XG4gIHJldHVybiBtID8gbVsxXSA6IG07XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gWE1MIHBsaXN0IHN0cmluZyBmcm9tIHRoZSBpbnB1dCBvYmplY3QgYG9iamAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBjb252ZXJ0ZWQgcGxpc3QgWE1MIHN0cmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBidWlsZCAob2JqLCBvcHRzKSB7XG4gIHZhciBYTUxIRFIgPSB7XG4gICAgdmVyc2lvbjogJzEuMCcsXG4gICAgZW5jb2Rpbmc6ICdVVEYtOCdcbiAgfTtcblxuICB2YXIgWE1MRFREID0ge1xuICAgIHB1YmlkOiAnLS8vQXBwbGUvL0RURCBQTElTVCAxLjAvL0VOJyxcbiAgICBzeXNpZDogJ2h0dHA6Ly93d3cuYXBwbGUuY29tL0RURHMvUHJvcGVydHlMaXN0LTEuMC5kdGQnXG4gIH07XG5cbiAgdmFyIGRvYyA9IHhtbGJ1aWxkZXIuY3JlYXRlKCdwbGlzdCcpO1xuXG4gIGRvYy5kZWMoWE1MSERSLnZlcnNpb24sIFhNTEhEUi5lbmNvZGluZywgWE1MSERSLnN0YW5kYWxvbmUpO1xuICBkb2MuZHRkKFhNTERURC5wdWJpZCwgWE1MRFRELnN5c2lkKTtcbiAgZG9jLmF0dCgndmVyc2lvbicsICcxLjAnKTtcblxuICB3YWxrX29iaihvYmosIGRvYyk7XG5cbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIGRlZmF1bHQgYHByZXR0eWAgdG8gYHRydWVgXG4gIG9wdHMucHJldHR5ID0gb3B0cy5wcmV0dHkgIT09IGZhbHNlO1xuICByZXR1cm4gZG9jLmVuZChvcHRzKTtcbn1cblxuLyoqXG4gKiBkZXB0aCBmaXJzdCwgcmVjdXJzaXZlIHRyYXZlcnNhbCBvZiBhIGphdmFzY3JpcHQgb2JqZWN0LiB3aGVuIGNvbXBsZXRlLFxuICogbmV4dF9jaGlsZCBjb250YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgYnVpbGQgWE1MIG9iamVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB3YWxrX29iaihuZXh0LCBuZXh0X2NoaWxkKSB7XG4gIHZhciB0YWdfdHlwZSwgaSwgcHJvcDtcbiAgdmFyIG5hbWUgPSB0eXBlKG5leHQpO1xuXG4gIGlmICgnVW5kZWZpbmVkJyA9PSBuYW1lKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobmV4dCkpIHtcbiAgICBuZXh0X2NoaWxkID0gbmV4dF9jaGlsZC5lbGUoJ2FycmF5Jyk7XG4gICAgZm9yIChpID0gMDsgaSA8IG5leHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHdhbGtfb2JqKG5leHRbaV0sIG5leHRfY2hpbGQpO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihuZXh0KSkge1xuICAgIG5leHRfY2hpbGQuZWxlKCdkYXRhJykucmF3KG5leHQudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcblxuICB9IGVsc2UgaWYgKCdPYmplY3QnID09IG5hbWUpIHtcbiAgICBuZXh0X2NoaWxkID0gbmV4dF9jaGlsZC5lbGUoJ2RpY3QnKTtcbiAgICBmb3IgKHByb3AgaW4gbmV4dCkge1xuICAgICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgbmV4dF9jaGlsZC5lbGUoJ2tleScpLnR4dChwcm9wKTtcbiAgICAgICAgd2Fsa19vYmoobmV4dFtwcm9wXSwgbmV4dF9jaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0gZWxzZSBpZiAoJ051bWJlcicgPT0gbmFtZSkge1xuICAgIC8vIGRldGVjdCBpZiB0aGlzIGlzIGFuIGludGVnZXIgb3IgcmVhbFxuICAgIC8vIFRPRE86IGFkZCBhbiBhYmlsaXR5IHRvIGZvcmNlIG9uZSB3YXkgb3IgYW5vdGhlciB2aWEgYSBcImNhc3RcIlxuICAgIHRhZ190eXBlID0gKG5leHQgJSAxID09PSAwKSA/ICdpbnRlZ2VyJyA6ICdyZWFsJztcbiAgICBuZXh0X2NoaWxkLmVsZSh0YWdfdHlwZSkudHh0KG5leHQudG9TdHJpbmcoKSk7XG5cbiAgfSBlbHNlIGlmICgnQmlnSW50JyA9PSBuYW1lKSB7XG4gICAgbmV4dF9jaGlsZC5lbGUoJ2ludGVnZXInKS50eHQobmV4dCk7XG5cbiAgfSBlbHNlIGlmICgnRGF0ZScgPT0gbmFtZSkge1xuICAgIG5leHRfY2hpbGQuZWxlKCdkYXRlJykudHh0KElTT0RhdGVTdHJpbmcobmV3IERhdGUobmV4dCkpKTtcblxuICB9IGVsc2UgaWYgKCdCb29sZWFuJyA9PSBuYW1lKSB7XG4gICAgbmV4dF9jaGlsZC5lbGUobmV4dCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuXG4gIH0gZWxzZSBpZiAoJ1N0cmluZycgPT0gbmFtZSkge1xuICAgIG5leHRfY2hpbGQuZWxlKCdzdHJpbmcnKS50eHQobmV4dCk7XG5cbiAgfSBlbHNlIGlmICgnQXJyYXlCdWZmZXInID09IG5hbWUpIHtcbiAgICBuZXh0X2NoaWxkLmVsZSgnZGF0YScpLnJhdyhiYXNlNjQuZnJvbUJ5dGVBcnJheShuZXh0KSk7XG5cbiAgfSBlbHNlIGlmIChuZXh0ICYmIG5leHQuYnVmZmVyICYmICdBcnJheUJ1ZmZlcicgPT0gdHlwZShuZXh0LmJ1ZmZlcikpIHtcbiAgICAvLyBhIHR5cGVkIGFycmF5XG4gICAgbmV4dF9jaGlsZC5lbGUoJ2RhdGEnKS5yYXcoYmFzZTY0LmZyb21CeXRlQXJyYXkobmV3IFVpbnQ4QXJyYXkobmV4dC5idWZmZXIpLCBuZXh0X2NoaWxkKSk7XG5cbiAgfSBlbHNlIGlmICgnTnVsbCcgPT09IG5hbWUpIHtcbiAgICBuZXh0X2NoaWxkLmVsZSgnbnVsbCcpLnR4dCgnJyk7XG5cbiAgfVxufVxuIiwgIi8qKlxuICogUGFyc2VyIGZ1bmN0aW9ucy5cbiAqL1xuXG52YXIgcGFyc2VyRnVuY3Rpb25zID0gcmVxdWlyZSgnLi9saWIvcGFyc2UnKTtcbk9iamVjdC5rZXlzKHBhcnNlckZ1bmN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBleHBvcnRzW2tdID0gcGFyc2VyRnVuY3Rpb25zW2tdOyB9KTtcblxuLyoqXG4gKiBCdWlsZGVyIGZ1bmN0aW9ucy5cbiAqL1xuXG52YXIgYnVpbGRlckZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4vbGliL2J1aWxkJyk7XG5PYmplY3Qua2V5cyhidWlsZGVyRnVuY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IGV4cG9ydHNba10gPSBidWlsZGVyRnVuY3Rpb25zW2tdOyB9KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBaUJBLGFBQVMsS0FBSyxNQUFNLFdBQVcsSUFBSTtBQUNsQyxVQUFJLE9BQU8sUUFBVztBQUNyQixhQUFLLE1BQU07QUFBQSxNQUNaO0FBQ0EsVUFBSSxRQUFRLE9BQU8sR0FBRyxTQUFTLFlBQVk7QUFDMUMsZUFBTyxHQUFHLEtBQUssS0FBSyxNQUFNLFNBQVM7QUFBQSxNQUNwQztBQUNBLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDckMsWUFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLE1BQU0sQ0FBQyxHQUFHO0FBQ2xELGNBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsY0FBSSxVQUFVLEtBQUssUUFBVyxNQUFNLEdBQUcsSUFBSSxHQUFHO0FBQzdDLG1CQUFPO0FBQUEsVUFDUjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQWlCQSxhQUFTLE9BQU8sUUFBUSxJQUFJO0FBQzNCLFVBQUksT0FBTyxRQUFXO0FBQ3JCLGFBQUs7QUFBQSxNQUNOO0FBQ0EsYUFBTyxNQUFNLE9BQU8sR0FBRyxXQUFXLGFBQWEsR0FBRyxPQUFPLE1BQU0sSUFBSTtBQUFBLElBQ3BFO0FBZUEsYUFBUyxPQUFPLFFBQVEsUUFBUTtBQUMvQixVQUFJLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVTtBQUNsRCxjQUFNLElBQUksVUFBVSx5QkFBeUI7QUFBQSxNQUM5QztBQUNBLGVBQVMsT0FBTyxRQUFRO0FBQ3ZCLFlBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxRQUFRLEdBQUcsR0FBRztBQUN0RCxpQkFBTyxHQUFHLElBQUksT0FBTyxHQUFHO0FBQUEsUUFDekI7QUFBQSxNQUNEO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFTQSxRQUFJLFlBQVksT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVXRCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWU4sUUFBUSxTQUFVLE9BQU87QUFDeEIsZUFBTyxVQUFVLFVBQVU7QUFBQSxNQUM1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTQSxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BU2pCLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVVix1QkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BU3ZCLGVBQWU7QUFBQSxJQUNoQixDQUFDO0FBT0QsUUFBSSxZQUFZLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNdEIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTTixRQUFRLFNBQVUsS0FBSztBQUN0QixlQUFPLFFBQVEsVUFBVTtBQUFBLE1BQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0EsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9MLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPTCxPQUFPO0FBQUEsSUFDUixDQUFDO0FBRUQsWUFBUSxTQUFTO0FBQ2pCLFlBQVEsT0FBTztBQUNmLFlBQVEsU0FBUztBQUNqQixZQUFRLFlBQVk7QUFDcEIsWUFBUSxZQUFZO0FBQUE7QUFBQTs7O0FDMU1wQjtBQUFBO0FBQUEsUUFBSSxjQUFjO0FBRWxCLFFBQUksT0FBTyxZQUFZO0FBQ3ZCLFFBQUksWUFBWSxZQUFZO0FBTzVCLGFBQVMsZUFBZ0IsT0FBTztBQUMvQixhQUFPLFVBQVU7QUFBQSxJQUNsQjtBQVFBLGFBQVMsdUJBQXVCLE9BQU87QUFFdEMsYUFBTyxRQUFRLE1BQU0sTUFBTSxjQUFjLEVBQUUsT0FBTyxjQUFjLElBQUksQ0FBQztBQUFBLElBQ3RFO0FBU0EsYUFBUyxrQkFBbUIsU0FBUyxTQUFTO0FBQzdDLFVBQUksQ0FBQyxRQUFRLGVBQWUsT0FBTyxHQUFHO0FBQ3JDLGdCQUFRLE9BQU8sSUFBSTtBQUFBLE1BQ3BCO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFPQSxhQUFTLGFBQWEsT0FBTztBQUM1QixVQUFJLENBQUMsTUFBTyxRQUFPLENBQUM7QUFDcEIsVUFBSSxPQUFPLHVCQUF1QixLQUFLO0FBQ3ZDLGFBQU8sT0FBTyxLQUFLLEtBQUssT0FBTyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUN0RDtBQVNBLGFBQVMsY0FBZSxNQUFNO0FBQzdCLGFBQU8sU0FBUyxTQUFTO0FBQ3hCLGVBQU8sUUFBUSxLQUFLLFFBQVEsT0FBTyxNQUFNO0FBQUEsTUFDMUM7QUFBQSxJQUNEO0FBRUEsYUFBUyxLQUFLLEtBQUksTUFBSztBQUN0QixlQUFRLEtBQUssS0FBSTtBQUNoQixZQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUssS0FBSyxDQUFDLEdBQUc7QUFDakQsZUFBSyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQUEsUUFDaEI7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQU1BLGFBQVMsU0FBUyxPQUFNLE9BQU07QUFDN0IsVUFBSSxLQUFLLE1BQU07QUFDZixVQUFHLEVBQUUsY0FBYyxRQUFPO0FBQ3pCLFlBQVNBLEtBQVQsV0FBWTtBQUFBLFFBQUM7QUFBSixnQkFBQUE7QUFBSztBQUNkLFFBQUFBLEdBQUUsWUFBWSxNQUFNO0FBQ3BCLFFBQUFBLEtBQUksSUFBSUEsR0FBRTtBQUNWLGFBQUssSUFBR0EsRUFBQztBQUNULGNBQU0sWUFBWSxLQUFLQTtBQUFBLE1BQ3hCO0FBQ0EsVUFBRyxHQUFHLGVBQWUsT0FBTTtBQUMxQixZQUFHLE9BQU8sU0FBUyxZQUFXO0FBQzdCLGtCQUFRLE1BQU0sbUJBQWlCLEtBQUs7QUFBQSxRQUNyQztBQUNBLFdBQUcsY0FBYztBQUFBLE1BQ2xCO0FBQUEsSUFDRDtBQUdBLFFBQUksV0FBVyxDQUFDO0FBQ2hCLFFBQUksZUFBOEIsU0FBUyxlQUE4QjtBQUN6RSxRQUFJLGlCQUE4QixTQUFTLGlCQUE4QjtBQUN6RSxRQUFJLFlBQThCLFNBQVMsWUFBOEI7QUFDekUsUUFBSSxxQkFBOEIsU0FBUyxxQkFBOEI7QUFDekUsUUFBSSx3QkFBOEIsU0FBUyx3QkFBOEI7QUFDekUsUUFBSSxjQUE4QixTQUFTLGNBQThCO0FBQ3pFLFFBQUksOEJBQThCLFNBQVMsOEJBQThCO0FBQ3pFLFFBQUksZUFBOEIsU0FBUyxlQUE4QjtBQUN6RSxRQUFJLGdCQUE4QixTQUFTLGdCQUE4QjtBQUN6RSxRQUFJLHFCQUE4QixTQUFTLHFCQUE4QjtBQUN6RSxRQUFJLHlCQUE4QixTQUFTLHlCQUE4QjtBQUN6RSxRQUFJLGdCQUE4QixTQUFTLGdCQUE4QjtBQUd6RSxRQUFJLGdCQUFnQixDQUFDO0FBQ3JCLFFBQUksbUJBQW1CLENBQUM7QUFDeEIsUUFBSSxpQkFBOEIsY0FBYyxrQkFBZ0MsaUJBQWlCLENBQUMsSUFBRSxvQkFBb0I7QUFDeEgsUUFBSSxxQkFBOEIsY0FBYyxzQkFBZ0MsaUJBQWlCLENBQUMsSUFBRSx3QkFBd0I7QUFDNUgsUUFBSSx3QkFBOEIsY0FBYyx5QkFBZ0MsaUJBQWlCLENBQUMsSUFBRSwyQkFBMkI7QUFDL0gsUUFBSSxxQkFBOEIsY0FBYyxzQkFBZ0MsaUJBQWlCLENBQUMsSUFBRSxrQkFBa0I7QUFDdEgsUUFBSSx3QkFBOEIsY0FBYyx5QkFBZ0MsaUJBQWlCLENBQUMsSUFBRSxxQkFBcUI7QUFDekgsUUFBSSxzQkFBOEIsY0FBYyx1QkFBZ0MsaUJBQWlCLENBQUMsSUFBRSxtQkFBbUI7QUFDdkgsUUFBSSw4QkFBOEIsY0FBYywrQkFBZ0MsaUJBQWlCLENBQUMsSUFBRSwyQkFBMkI7QUFDL0gsUUFBSSxnQkFBOEIsY0FBYyxpQkFBZ0MsaUJBQWlCLENBQUMsSUFBRSxhQUFhO0FBQ2pILFFBQUksb0JBQThCLGNBQWMscUJBQWdDLGlCQUFpQixDQUFDLElBQUUsaUJBQWlCO0FBQ3JILFFBQUksc0JBQThCLGNBQWMsdUJBQWdDLGlCQUFpQixFQUFFLElBQUUsb0JBQW9CO0FBRXpILFFBQUksb0JBQTRCLGNBQWMscUJBQThCLGlCQUFpQixFQUFFLElBQUUsaUJBQWlCO0FBQ2xILFFBQUksYUFBNEIsY0FBYyxjQUE4QixpQkFBaUIsRUFBRSxJQUFFLGdCQUFnQjtBQUNqSCxRQUFJLDJCQUE0QixjQUFjLDRCQUE4QixpQkFBaUIsRUFBRSxJQUFFLHdCQUF3QjtBQUN6SCxRQUFJLGdCQUE0QixjQUFjLGlCQUE2QixpQkFBaUIsRUFBRSxJQUFFLHFCQUFxQjtBQUNySCxRQUFJLHFCQUE0QixjQUFjLHNCQUE2QixpQkFBaUIsRUFBRSxJQUFFLGtCQUFrQjtBQVFsSCxhQUFTLGFBQWEsTUFBTSxTQUFTO0FBQ3BDLFVBQUcsbUJBQW1CLE9BQU07QUFDM0IsWUFBSSxRQUFRO0FBQUEsTUFDYixPQUFLO0FBQ0osZ0JBQVE7QUFDUixjQUFNLEtBQUssTUFBTSxpQkFBaUIsSUFBSSxDQUFDO0FBQ3ZDLGFBQUssVUFBVSxpQkFBaUIsSUFBSTtBQUNwQyxZQUFHLE1BQU0sa0JBQW1CLE9BQU0sa0JBQWtCLE1BQU0sWUFBWTtBQUFBLE1BQ3ZFO0FBQ0EsWUFBTSxPQUFPO0FBQ2IsVUFBRyxRQUFTLE1BQUssVUFBVSxLQUFLLFVBQVUsT0FBTztBQUNqRCxhQUFPO0FBQUEsSUFDUjtBQUNBLGlCQUFhLFlBQVksTUFBTTtBQUMvQixTQUFLLGVBQWMsWUFBWTtBQU8vQixhQUFTLFdBQVc7QUFBQSxJQUNwQjtBQUNBLGFBQVMsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLcEIsUUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVNQLE1BQU0sU0FBUyxPQUFPO0FBQ3JCLGVBQU8sU0FBUyxLQUFLLFFBQVEsS0FBSyxTQUFTLEtBQUssS0FBSyxJQUFJO0FBQUEsTUFDMUQ7QUFBQSxNQUNBLFVBQVMsU0FBUyxRQUFPLFlBQVc7QUFDbkMsaUJBQVEsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFFLElBQUUsS0FBSyxRQUFPLEtBQUk7QUFDekMsNEJBQWtCLEtBQUssQ0FBQyxHQUFFLEtBQUksUUFBTyxVQUFVO0FBQUEsUUFDaEQ7QUFDQSxlQUFPLElBQUksS0FBSyxFQUFFO0FBQUEsTUFDbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNQSxRQUFRLFNBQVUsV0FBVztBQUM1QixlQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssTUFBTSxTQUFTO0FBQUEsTUFDbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNQSxTQUFTLFNBQVUsTUFBTTtBQUN4QixlQUFPLE1BQU0sVUFBVSxRQUFRLEtBQUssTUFBTSxJQUFJO0FBQUEsTUFDL0M7QUFBQSxJQUNEO0FBRUEsYUFBUyxhQUFhLE1BQUssU0FBUTtBQUNsQyxXQUFLLFFBQVE7QUFDYixXQUFLLFdBQVc7QUFDaEIsc0JBQWdCLElBQUk7QUFBQSxJQUNyQjtBQUNBLGFBQVMsZ0JBQWdCLE1BQUs7QUFDN0IsVUFBSSxNQUFNLEtBQUssTUFBTSxRQUFRLEtBQUssTUFBTSxjQUFjO0FBQ3RELFVBQUksS0FBSyxTQUFTLEtBQUs7QUFDdEIsWUFBSSxLQUFLLEtBQUssU0FBUyxLQUFLLEtBQUs7QUFDakMsZ0JBQVEsTUFBSyxVQUFTLEdBQUcsTUFBTTtBQUMvQixZQUFJLENBQUMsS0FBSyxZQUFZLEdBQUcsU0FBUyxLQUFLLFVBQVU7QUFDaEQsbUJBQVMsSUFBSSxHQUFHLFFBQVEsS0FBSyxNQUFNLEtBQUs7QUFDdkMsZ0JBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxNQUFNLENBQUMsR0FBRztBQUNsRCxxQkFBTyxLQUFLLENBQUM7QUFBQSxZQUNkO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFDQSxhQUFLLElBQUcsSUFBSTtBQUNaLGFBQUssT0FBTztBQUFBLE1BQ2I7QUFBQSxJQUNEO0FBQ0EsaUJBQWEsVUFBVSxPQUFPLFNBQVMsR0FBRTtBQUN4QyxzQkFBZ0IsSUFBSTtBQUNwQixhQUFPLEtBQUssQ0FBQyxLQUFLO0FBQUEsSUFDbkI7QUFFQSxhQUFTLGNBQWEsUUFBUTtBQWE5QixhQUFTLGVBQWU7QUFBQSxJQUN4QjtBQUVBLGFBQVMsZUFBZSxNQUFLLE1BQUs7QUFDakMsVUFBSSxJQUFJLEtBQUs7QUFDYixhQUFNLEtBQUk7QUFDVCxZQUFHLEtBQUssQ0FBQyxNQUFNLE1BQUs7QUFBQyxpQkFBTztBQUFBLFFBQUM7QUFBQSxNQUM5QjtBQUFBLElBQ0Q7QUFFQSxhQUFTLGNBQWMsSUFBRyxNQUFLLFNBQVEsU0FBUTtBQUM5QyxVQUFHLFNBQVE7QUFDVixhQUFLLGVBQWUsTUFBSyxPQUFPLENBQUMsSUFBSTtBQUFBLE1BQ3RDLE9BQUs7QUFDSixhQUFLLEtBQUssUUFBUSxJQUFJO0FBQUEsTUFDdkI7QUFDQSxVQUFHLElBQUc7QUFDTCxnQkFBUSxlQUFlO0FBQ3ZCLFlBQUksTUFBTSxHQUFHO0FBQ2IsWUFBRyxLQUFJO0FBQ04scUJBQVcsbUJBQW1CLEtBQUksSUFBRyxPQUFPO0FBQzVDLDBCQUFnQixLQUFJLElBQUcsT0FBTztBQUFBLFFBQy9CO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFDQSxhQUFTLGlCQUFpQixJQUFHLE1BQUssTUFBSztBQUV0QyxVQUFJLElBQUksZUFBZSxNQUFLLElBQUk7QUFDaEMsVUFBRyxLQUFHLEdBQUU7QUFDUCxZQUFJLFlBQVksS0FBSyxTQUFPO0FBQzVCLGVBQU0sSUFBRSxXQUFVO0FBQ2pCLGVBQUssQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQUEsUUFDbkI7QUFDQSxhQUFLLFNBQVM7QUFDZCxZQUFHLElBQUc7QUFDTCxjQUFJLE1BQU0sR0FBRztBQUNiLGNBQUcsS0FBSTtBQUNOLCtCQUFtQixLQUFJLElBQUcsSUFBSTtBQUM5QixpQkFBSyxlQUFlO0FBQUEsVUFDckI7QUFBQSxRQUNEO0FBQUEsTUFDRCxPQUFLO0FBQ0osY0FBTSxJQUFJLGFBQWEsZUFBYyxJQUFJLE1BQU0sR0FBRyxVQUFRLE1BQUksSUFBSSxDQUFDO0FBQUEsTUFDcEU7QUFBQSxJQUNEO0FBQ0EsaUJBQWEsWUFBWTtBQUFBLE1BQ3hCLFFBQU87QUFBQSxNQUNQLE1BQUssU0FBUyxVQUFVO0FBQUEsTUFDeEIsY0FBYyxTQUFTLEtBQUs7QUFLM0IsWUFBSSxJQUFJLEtBQUs7QUFDYixlQUFNLEtBQUk7QUFDVCxjQUFJLE9BQU8sS0FBSyxDQUFDO0FBRWpCLGNBQUcsS0FBSyxZQUFZLEtBQUk7QUFDdkIsbUJBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxNQUNBLGNBQWMsU0FBUyxNQUFNO0FBQzVCLFlBQUksS0FBSyxLQUFLO0FBQ2QsWUFBRyxNQUFNLE1BQUksS0FBSyxlQUFjO0FBQy9CLGdCQUFNLElBQUksYUFBYSxtQkFBbUI7QUFBQSxRQUMzQztBQUNBLFlBQUksVUFBVSxLQUFLLGFBQWEsS0FBSyxRQUFRO0FBQzdDLHNCQUFjLEtBQUssZUFBYyxNQUFLLE1BQUssT0FBTztBQUNsRCxlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUEsTUFFQSxnQkFBZ0IsU0FBUyxNQUFNO0FBQzlCLFlBQUksS0FBSyxLQUFLLGNBQWM7QUFDNUIsWUFBRyxNQUFNLE1BQUksS0FBSyxlQUFjO0FBQy9CLGdCQUFNLElBQUksYUFBYSxtQkFBbUI7QUFBQSxRQUMzQztBQUNBLGtCQUFVLEtBQUssZUFBZSxLQUFLLGNBQWEsS0FBSyxTQUFTO0FBQzlELHNCQUFjLEtBQUssZUFBYyxNQUFLLE1BQUssT0FBTztBQUNsRCxlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUEsTUFHQSxpQkFBaUIsU0FBUyxLQUFLO0FBQzlCLFlBQUksT0FBTyxLQUFLLGFBQWEsR0FBRztBQUNoQyx5QkFBaUIsS0FBSyxlQUFjLE1BQUssSUFBSTtBQUM3QyxlQUFPO0FBQUEsTUFHUjtBQUFBO0FBQUE7QUFBQSxNQUdBLG1CQUFrQixTQUFTLGNBQWEsV0FBVTtBQUNqRCxZQUFJLE9BQU8sS0FBSyxlQUFlLGNBQWEsU0FBUztBQUNyRCx5QkFBaUIsS0FBSyxlQUFjLE1BQUssSUFBSTtBQUM3QyxlQUFPO0FBQUEsTUFDUjtBQUFBLE1BQ0EsZ0JBQWdCLFNBQVMsY0FBYyxXQUFXO0FBQ2pELFlBQUksSUFBSSxLQUFLO0FBQ2IsZUFBTSxLQUFJO0FBQ1QsY0FBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixjQUFHLEtBQUssYUFBYSxhQUFhLEtBQUssZ0JBQWdCLGNBQWE7QUFDbkUsbUJBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUNBLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQWlCQSxhQUFTLG9CQUFvQjtBQUFBLElBQzdCO0FBRUEsc0JBQWtCLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWdCN0IsWUFBWSxTQUFTLFNBQVMsU0FBUztBQUNyQyxlQUFPO0FBQUEsTUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF1QkEsZ0JBQWdCLFNBQVMsY0FBZSxlQUFlLFNBQVE7QUFDOUQsWUFBSSxNQUFNLElBQUksU0FBUztBQUN2QixZQUFJLGlCQUFpQjtBQUNyQixZQUFJLGFBQWEsSUFBSSxTQUFTO0FBQzlCLFlBQUksVUFBVSxXQUFXO0FBQ3pCLFlBQUksU0FBUTtBQUNYLGNBQUksWUFBWSxPQUFPO0FBQUEsUUFDeEI7QUFDQSxZQUFJLGVBQWM7QUFDakIsY0FBSSxPQUFPLElBQUksZ0JBQWdCLGNBQWMsYUFBYTtBQUMxRCxjQUFJLFlBQVksSUFBSTtBQUFBLFFBQ3JCO0FBQ0EsZUFBTztBQUFBLE1BQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXNCQSxvQkFBb0IsU0FBUyxlQUFlLFVBQVUsVUFBUztBQUM5RCxZQUFJLE9BQU8sSUFBSSxhQUFhO0FBQzVCLGFBQUssT0FBTztBQUNaLGFBQUssV0FBVztBQUNoQixhQUFLLFdBQVcsWUFBWTtBQUM1QixhQUFLLFdBQVcsWUFBWTtBQUU1QixlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFPQSxhQUFTLE9BQU87QUFBQSxJQUNoQjtBQUVBLFNBQUssWUFBWTtBQUFBLE1BQ2hCLFlBQWE7QUFBQSxNQUNiLFdBQVk7QUFBQSxNQUNaLGlCQUFrQjtBQUFBLE1BQ2xCLGFBQWM7QUFBQSxNQUNkLFlBQWE7QUFBQSxNQUNiLFlBQWE7QUFBQSxNQUNiLFlBQWE7QUFBQSxNQUNiLGVBQWdCO0FBQUEsTUFDaEIsV0FBWTtBQUFBLE1BQ1osY0FBZTtBQUFBLE1BQ2YsUUFBUztBQUFBLE1BQ1QsV0FBWTtBQUFBO0FBQUEsTUFFWixjQUFhLFNBQVMsVUFBVSxVQUFTO0FBQ3hDLGVBQU8sY0FBYyxNQUFLLFVBQVMsUUFBUTtBQUFBLE1BQzVDO0FBQUEsTUFDQSxjQUFhLFNBQVMsVUFBVSxVQUFTO0FBQ3hDLHNCQUFjLE1BQU0sVUFBUyxVQUFVLHNDQUFzQztBQUM3RSxZQUFHLFVBQVM7QUFDWCxlQUFLLFlBQVksUUFBUTtBQUFBLFFBQzFCO0FBQUEsTUFDRDtBQUFBLE1BQ0EsYUFBWSxTQUFTLFVBQVM7QUFDN0IsZUFBTyxhQUFhLE1BQUssUUFBUTtBQUFBLE1BQ2xDO0FBQUEsTUFDQSxhQUFZLFNBQVMsVUFBUztBQUM3QixlQUFPLEtBQUssYUFBYSxVQUFTLElBQUk7QUFBQSxNQUN2QztBQUFBLE1BQ0EsZUFBYyxXQUFVO0FBQ3ZCLGVBQU8sS0FBSyxjQUFjO0FBQUEsTUFDM0I7QUFBQSxNQUNBLFdBQVUsU0FBUyxNQUFLO0FBQ3ZCLGVBQU8sVUFBVSxLQUFLLGlCQUFlLE1BQUssTUFBSyxJQUFJO0FBQUEsTUFDcEQ7QUFBQTtBQUFBLE1BRUEsV0FBVSxXQUFVO0FBQ25CLFlBQUksUUFBUSxLQUFLO0FBQ2pCLGVBQU0sT0FBTTtBQUNYLGNBQUksT0FBTyxNQUFNO0FBQ2pCLGNBQUcsUUFBUSxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksV0FBVTtBQUNwRSxpQkFBSyxZQUFZLElBQUk7QUFDckIsa0JBQU0sV0FBVyxLQUFLLElBQUk7QUFBQSxVQUMzQixPQUFLO0FBQ0osa0JBQU0sVUFBVTtBQUNoQixvQkFBUTtBQUFBLFVBQ1Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBO0FBQUEsTUFFQSxhQUFZLFNBQVMsU0FBUyxTQUFRO0FBQ3JDLGVBQU8sS0FBSyxjQUFjLGVBQWUsV0FBVyxTQUFRLE9BQU87QUFBQSxNQUNwRTtBQUFBO0FBQUEsTUFFRyxlQUFjLFdBQVU7QUFDdkIsZUFBTyxLQUFLLFdBQVcsU0FBTztBQUFBLE1BQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZUEsY0FBYSxTQUFTLGNBQWE7QUFDbEMsWUFBSSxLQUFLO0FBQ1QsZUFBTSxJQUFHO0FBQ1IsY0FBSSxNQUFNLEdBQUc7QUFFYixjQUFHLEtBQUk7QUFDTixxQkFBUSxLQUFLLEtBQUk7QUFDbEIsa0JBQUksT0FBTyxVQUFVLGVBQWUsS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxjQUFjO0FBQzVFLHVCQUFPO0FBQUEsY0FDUjtBQUFBLFlBQ0M7QUFBQSxVQUNEO0FBQ0EsZUFBSyxHQUFHLFlBQVksaUJBQWUsR0FBRyxnQkFBZ0IsR0FBRztBQUFBLFFBQzFEO0FBQ0EsZUFBTztBQUFBLE1BQ1I7QUFBQTtBQUFBLE1BRUEsb0JBQW1CLFNBQVMsUUFBTztBQUNsQyxZQUFJLEtBQUs7QUFDVCxlQUFNLElBQUc7QUFDUixjQUFJLE1BQU0sR0FBRztBQUViLGNBQUcsS0FBSTtBQUNOLGdCQUFHLE9BQU8sVUFBVSxlQUFlLEtBQUssS0FBSyxNQUFNLEdBQUU7QUFDcEQscUJBQU8sSUFBSSxNQUFNO0FBQUEsWUFDbEI7QUFBQSxVQUNEO0FBQ0EsZUFBSyxHQUFHLFlBQVksaUJBQWUsR0FBRyxnQkFBZ0IsR0FBRztBQUFBLFFBQzFEO0FBQ0EsZUFBTztBQUFBLE1BQ1I7QUFBQTtBQUFBLE1BRUEsb0JBQW1CLFNBQVMsY0FBYTtBQUN4QyxZQUFJLFNBQVMsS0FBSyxhQUFhLFlBQVk7QUFDM0MsZUFBTyxVQUFVO0FBQUEsTUFDbEI7QUFBQSxJQUNKO0FBR0EsYUFBUyxZQUFZLEdBQUU7QUFDdEIsYUFBTyxLQUFLLE9BQU8sVUFDWCxLQUFLLE9BQU8sVUFDWixLQUFLLE9BQU8sV0FDWixLQUFLLE9BQU8sWUFDWixPQUFLLEVBQUUsV0FBVyxJQUFFO0FBQUEsSUFDN0I7QUFHQSxTQUFLLFVBQVMsSUFBSTtBQUNsQixTQUFLLFVBQVMsS0FBSyxTQUFTO0FBTTVCLGFBQVMsV0FBVyxNQUFLLFVBQVM7QUFDakMsVUFBRyxTQUFTLElBQUksR0FBRTtBQUNqQixlQUFPO0FBQUEsTUFDUjtBQUNBLFVBQUcsT0FBTyxLQUFLLFlBQVc7QUFDekIsV0FBRTtBQUNELGNBQUcsV0FBVyxNQUFLLFFBQVEsR0FBRTtBQUFDLG1CQUFPO0FBQUEsVUFBSTtBQUFBLFFBQ3BDLFNBQU8sT0FBSyxLQUFLO0FBQUEsTUFDckI7QUFBQSxJQUNKO0FBSUEsYUFBUyxXQUFVO0FBQ2xCLFdBQUssZ0JBQWdCO0FBQUEsSUFDdEI7QUFFQSxhQUFTLGdCQUFnQixLQUFJLElBQUcsU0FBUTtBQUN2QyxhQUFPLElBQUk7QUFDWCxVQUFJLEtBQUssUUFBUTtBQUNqQixVQUFHLE9BQU8sVUFBVSxPQUFNO0FBRXpCLFdBQUcsT0FBTyxRQUFRLFNBQU8sUUFBUSxZQUFVLEVBQUUsSUFBSSxRQUFRO0FBQUEsTUFDMUQ7QUFBQSxJQUNEO0FBRUEsYUFBUyxtQkFBbUIsS0FBSSxJQUFHLFNBQVEsUUFBTztBQUNqRCxhQUFPLElBQUk7QUFDWCxVQUFJLEtBQUssUUFBUTtBQUNqQixVQUFHLE9BQU8sVUFBVSxPQUFNO0FBRXpCLGVBQU8sR0FBRyxPQUFPLFFBQVEsU0FBTyxRQUFRLFlBQVUsRUFBRTtBQUFBLE1BQ3JEO0FBQUEsSUFDRDtBQWNBLGFBQVMsZUFBZ0IsS0FBSyxJQUFJLFVBQVU7QUFDM0MsVUFBRyxPQUFPLElBQUksTUFBSztBQUNsQixZQUFJO0FBRUosWUFBSSxLQUFLLEdBQUc7QUFDWixZQUFJLFVBQVU7QUFDYixhQUFHLEdBQUcsUUFBUSxJQUFJO0FBQUEsUUFDbkIsT0FBTztBQUNOLGNBQUksUUFBUSxHQUFHO0FBQ2YsY0FBSSxJQUFJO0FBQ1IsaUJBQU8sT0FBTztBQUNiLGVBQUcsR0FBRyxJQUFJO0FBQ1Ysb0JBQVEsTUFBTTtBQUFBLFVBQ2Y7QUFDQSxhQUFHLFNBQVM7QUFDWixpQkFBTyxHQUFHLEdBQUcsTUFBTTtBQUFBLFFBQ3BCO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFjQSxhQUFTLGFBQWMsWUFBWSxPQUFPO0FBQ3pDLFVBQUksV0FBVyxNQUFNO0FBQ3JCLFVBQUksT0FBTyxNQUFNO0FBQ2pCLFVBQUksVUFBVTtBQUNiLGlCQUFTLGNBQWM7QUFBQSxNQUN4QixPQUFPO0FBQ04sbUJBQVcsYUFBYTtBQUFBLE1BQ3pCO0FBQ0EsVUFBSSxNQUFNO0FBQ1QsYUFBSyxrQkFBa0I7QUFBQSxNQUN4QixPQUFPO0FBQ04sbUJBQVcsWUFBWTtBQUFBLE1BQ3hCO0FBQ0EsWUFBTSxhQUFhO0FBQ25CLFlBQU0sa0JBQWtCO0FBQ3hCLFlBQU0sY0FBYztBQUNwQixxQkFBZSxXQUFXLGVBQWUsVUFBVTtBQUNuRCxhQUFPO0FBQUEsSUFDUjtBQU9BLGFBQVMsdUJBQXVCLE1BQU07QUFDckMsYUFDQyxTQUNDLEtBQUssYUFBYSxLQUFLLGlCQUFpQixLQUFLLGFBQWEsS0FBSywwQkFBMEIsS0FBSyxhQUFhLEtBQUs7QUFBQSxJQUVuSDtBQU9BLGFBQVMsc0JBQXNCLE1BQU07QUFDcEMsYUFDQyxTQUNDLGNBQWMsSUFBSSxLQUNsQixXQUFXLElBQUksS0FDZixjQUFjLElBQUksS0FDbEIsS0FBSyxhQUFhLEtBQUssMEJBQ3ZCLEtBQUssYUFBYSxLQUFLLGdCQUN2QixLQUFLLGFBQWEsS0FBSztBQUFBLElBRTFCO0FBT0EsYUFBUyxjQUFjLE1BQU07QUFDNUIsYUFBTyxRQUFRLEtBQUssYUFBYSxLQUFLO0FBQUEsSUFDdkM7QUFPQSxhQUFTLGNBQWMsTUFBTTtBQUM1QixhQUFPLFFBQVEsS0FBSyxhQUFhLEtBQUs7QUFBQSxJQUN2QztBQU1BLGFBQVMsV0FBVyxNQUFNO0FBQ3pCLGFBQU8sUUFBUSxLQUFLLGFBQWEsS0FBSztBQUFBLElBQ3ZDO0FBWUEsYUFBUywyQkFBMkIsS0FBSyxPQUFPO0FBQy9DLFVBQUksbUJBQW1CLElBQUksY0FBYyxDQUFDO0FBQzFDLFVBQUksS0FBSyxrQkFBa0IsYUFBYSxLQUFLLGNBQWMsS0FBSyxHQUFHO0FBQ2xFLGVBQU87QUFBQSxNQUNSO0FBQ0EsVUFBSSxjQUFjLEtBQUssa0JBQWtCLGFBQWE7QUFDdEQsYUFBTyxFQUFFLFNBQVMsZUFBZSxpQkFBaUIsUUFBUSxXQUFXLElBQUksaUJBQWlCLFFBQVEsS0FBSztBQUFBLElBQ3hHO0FBWUEsYUFBUyw2QkFBNkIsS0FBSyxPQUFPO0FBQ2pELFVBQUksbUJBQW1CLElBQUksY0FBYyxDQUFDO0FBRTFDLGVBQVMsOEJBQThCLE1BQU07QUFDNUMsZUFBTyxjQUFjLElBQUksS0FBSyxTQUFTO0FBQUEsTUFDeEM7QUFFQSxVQUFJLEtBQUssa0JBQWtCLDZCQUE2QixHQUFHO0FBQzFELGVBQU87QUFBQSxNQUNSO0FBQ0EsVUFBSSxjQUFjLEtBQUssa0JBQWtCLGFBQWE7QUFDdEQsYUFBTyxFQUFFLFNBQVMsZUFBZSxpQkFBaUIsUUFBUSxXQUFXLElBQUksaUJBQWlCLFFBQVEsS0FBSztBQUFBLElBQ3hHO0FBZUEsYUFBUywrQkFBK0IsUUFBUSxNQUFNLE9BQU87QUFFNUQsVUFBSSxDQUFDLHVCQUF1QixNQUFNLEdBQUc7QUFDcEMsY0FBTSxJQUFJLGFBQWEsdUJBQXVCLGlDQUFpQyxPQUFPLFFBQVE7QUFBQSxNQUMvRjtBQUlBLFVBQUksU0FBUyxNQUFNLGVBQWUsUUFBUTtBQUN6QyxjQUFNLElBQUksYUFBYSxlQUFlLHFCQUFxQjtBQUFBLE1BQzVEO0FBQ0E7QUFBQTtBQUFBLFFBRUMsQ0FBQyxzQkFBc0IsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSzFCLGNBQWMsSUFBSSxLQUFLLE9BQU8sYUFBYSxLQUFLO0FBQUEsUUFDaEQ7QUFDRCxjQUFNLElBQUk7QUFBQSxVQUNUO0FBQUEsVUFDQSwwQkFBMEIsS0FBSyxXQUFXLDJCQUEyQixPQUFPO0FBQUEsUUFDN0U7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQWVBLGFBQVMscUNBQXFDLFFBQVEsTUFBTSxPQUFPO0FBQ2xFLFVBQUksbUJBQW1CLE9BQU8sY0FBYyxDQUFDO0FBQzdDLFVBQUksaUJBQWlCLEtBQUssY0FBYyxDQUFDO0FBR3pDLFVBQUksS0FBSyxhQUFhLEtBQUssd0JBQXdCO0FBQ2xELFlBQUksb0JBQW9CLGVBQWUsT0FBTyxhQUFhO0FBRTNELFlBQUksa0JBQWtCLFNBQVMsS0FBSyxLQUFLLGdCQUFnQixVQUFVLEdBQUc7QUFDckUsZ0JBQU0sSUFBSSxhQUFhLHVCQUF1QiwyQ0FBMkM7QUFBQSxRQUMxRjtBQUdBLFlBQUksa0JBQWtCLFdBQVcsS0FBSyxDQUFDLDJCQUEyQixRQUFRLEtBQUssR0FBRztBQUNqRixnQkFBTSxJQUFJLGFBQWEsdUJBQXVCLHdEQUF3RDtBQUFBLFFBQ3ZHO0FBQUEsTUFDRDtBQUVBLFVBQUksY0FBYyxJQUFJLEdBQUc7QUFHeEIsWUFBSSxDQUFDLDJCQUEyQixRQUFRLEtBQUssR0FBRztBQUMvQyxnQkFBTSxJQUFJLGFBQWEsdUJBQXVCLHNEQUFzRDtBQUFBLFFBQ3JHO0FBQUEsTUFDRDtBQUVBLFVBQUksY0FBYyxJQUFJLEdBQUc7QUFFeEIsWUFBSSxLQUFLLGtCQUFrQixhQUFhLEdBQUc7QUFDMUMsZ0JBQU0sSUFBSSxhQUFhLHVCQUF1Qiw2QkFBNkI7QUFBQSxRQUM1RTtBQUNBLFlBQUkscUJBQXFCLEtBQUssa0JBQWtCLGFBQWE7QUFFN0QsWUFBSSxTQUFTLGlCQUFpQixRQUFRLGtCQUFrQixJQUFJLGlCQUFpQixRQUFRLEtBQUssR0FBRztBQUM1RixnQkFBTSxJQUFJLGFBQWEsdUJBQXVCLGdEQUFnRDtBQUFBLFFBQy9GO0FBRUEsWUFBSSxDQUFDLFNBQVMsb0JBQW9CO0FBQ2pDLGdCQUFNLElBQUksYUFBYSx1QkFBdUIsc0RBQXNEO0FBQUEsUUFDckc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQWVBLGFBQVMsdUNBQXVDLFFBQVEsTUFBTSxPQUFPO0FBQ3BFLFVBQUksbUJBQW1CLE9BQU8sY0FBYyxDQUFDO0FBQzdDLFVBQUksaUJBQWlCLEtBQUssY0FBYyxDQUFDO0FBR3pDLFVBQUksS0FBSyxhQUFhLEtBQUssd0JBQXdCO0FBQ2xELFlBQUksb0JBQW9CLGVBQWUsT0FBTyxhQUFhO0FBRTNELFlBQUksa0JBQWtCLFNBQVMsS0FBSyxLQUFLLGdCQUFnQixVQUFVLEdBQUc7QUFDckUsZ0JBQU0sSUFBSSxhQUFhLHVCQUF1QiwyQ0FBMkM7QUFBQSxRQUMxRjtBQUVBLFlBQUksa0JBQWtCLFdBQVcsS0FBSyxDQUFDLDZCQUE2QixRQUFRLEtBQUssR0FBRztBQUNuRixnQkFBTSxJQUFJLGFBQWEsdUJBQXVCLHdEQUF3RDtBQUFBLFFBQ3ZHO0FBQUEsTUFDRDtBQUVBLFVBQUksY0FBYyxJQUFJLEdBQUc7QUFFeEIsWUFBSSxDQUFDLDZCQUE2QixRQUFRLEtBQUssR0FBRztBQUNqRCxnQkFBTSxJQUFJLGFBQWEsdUJBQXVCLHNEQUFzRDtBQUFBLFFBQ3JHO0FBQUEsTUFDRDtBQUVBLFVBQUksY0FBYyxJQUFJLEdBQUc7QUFDeEIsWUFBU0MsaUNBQVQsU0FBdUNDLE9BQU07QUFDNUMsaUJBQU8sY0FBY0EsS0FBSSxLQUFLQSxVQUFTO0FBQUEsUUFDeEM7QUFGUyw0Q0FBQUQ7QUFLVCxZQUFJLEtBQUssa0JBQWtCQSw4QkFBNkIsR0FBRztBQUMxRCxnQkFBTSxJQUFJLGFBQWEsdUJBQXVCLDZCQUE2QjtBQUFBLFFBQzVFO0FBQ0EsWUFBSSxxQkFBcUIsS0FBSyxrQkFBa0IsYUFBYTtBQUU3RCxZQUFJLFNBQVMsaUJBQWlCLFFBQVEsa0JBQWtCLElBQUksaUJBQWlCLFFBQVEsS0FBSyxHQUFHO0FBQzVGLGdCQUFNLElBQUksYUFBYSx1QkFBdUIsZ0RBQWdEO0FBQUEsUUFDL0Y7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQVlBLGFBQVMsY0FBYyxRQUFRLE1BQU0sT0FBTyxzQkFBc0I7QUFFakUscUNBQStCLFFBQVEsTUFBTSxLQUFLO0FBSWxELFVBQUksT0FBTyxhQUFhLEtBQUssZUFBZTtBQUMzQyxTQUFDLHdCQUF3QixzQ0FBc0MsUUFBUSxNQUFNLEtBQUs7QUFBQSxNQUNuRjtBQUVBLFVBQUksS0FBSyxLQUFLO0FBQ2QsVUFBRyxJQUFHO0FBQ0wsV0FBRyxZQUFZLElBQUk7QUFBQSxNQUNwQjtBQUNBLFVBQUcsS0FBSyxhQUFhLHdCQUF1QjtBQUMzQyxZQUFJLFdBQVcsS0FBSztBQUNwQixZQUFJLFlBQVksTUFBTTtBQUNyQixpQkFBTztBQUFBLFFBQ1I7QUFDQSxZQUFJLFVBQVUsS0FBSztBQUFBLE1BQ3BCLE9BQUs7QUFDSixtQkFBVyxVQUFVO0FBQUEsTUFDdEI7QUFDQSxVQUFJLE1BQU0sUUFBUSxNQUFNLGtCQUFrQixPQUFPO0FBRWpELGVBQVMsa0JBQWtCO0FBQzNCLGNBQVEsY0FBYztBQUd0QixVQUFHLEtBQUk7QUFDTixZQUFJLGNBQWM7QUFBQSxNQUNuQixPQUFLO0FBQ0osZUFBTyxhQUFhO0FBQUEsTUFDckI7QUFDQSxVQUFHLFNBQVMsTUFBSztBQUNoQixlQUFPLFlBQVk7QUFBQSxNQUNwQixPQUFLO0FBQ0osY0FBTSxrQkFBa0I7QUFBQSxNQUN6QjtBQUNBLFNBQUU7QUFDRCxpQkFBUyxhQUFhO0FBRXRCLFlBQUksWUFBWSxPQUFPLGlCQUFpQjtBQUN4Qyw2QkFBcUIsVUFBVSxTQUFTO0FBQUEsTUFDekMsU0FBTyxhQUFhLFlBQVksV0FBVSxTQUFTO0FBQ25ELHFCQUFlLE9BQU8saUJBQWUsUUFBUSxNQUFNO0FBRW5ELFVBQUksS0FBSyxZQUFZLHdCQUF3QjtBQUM1QyxhQUFLLGFBQWEsS0FBSyxZQUFZO0FBQUEsTUFDcEM7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQVFBLGFBQVMscUJBQXFCLE1BQU0sa0JBQWtCO0FBQ3JELFVBQUksS0FBSyxrQkFBa0Isa0JBQWtCO0FBQzVDO0FBQUEsTUFDRDtBQUVBLFdBQUssZ0JBQWdCO0FBR3JCLFVBQUksS0FBSyxhQUFhLGdCQUFnQixLQUFLLFlBQVk7QUFDdEQsaUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxXQUFXLFFBQVEsS0FBSztBQUNoRCxjQUFJLE9BQU8sS0FBSyxXQUFXLEtBQUssQ0FBQztBQUNqQyxjQUFJLE1BQU07QUFDVCxpQkFBSyxnQkFBZ0I7QUFBQSxVQUN0QjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBR0EsVUFBSSxRQUFRLEtBQUs7QUFDakIsYUFBTyxPQUFPO0FBQ2IsNkJBQXFCLE9BQU8sZ0JBQWdCO0FBQzVDLGdCQUFRLE1BQU07QUFBQSxNQUNmO0FBQUEsSUFDRDtBQWFBLGFBQVMsbUJBQW9CLFlBQVksVUFBVTtBQUNsRCxVQUFJLFNBQVMsWUFBWTtBQUN4QixpQkFBUyxXQUFXLFlBQVksUUFBUTtBQUFBLE1BQ3pDO0FBQ0EsZUFBUyxhQUFhO0FBQ3RCLGVBQVMsa0JBQWtCLFdBQVc7QUFDdEMsZUFBUyxjQUFjO0FBQ3ZCLFVBQUksU0FBUyxpQkFBaUI7QUFDN0IsaUJBQVMsZ0JBQWdCLGNBQWM7QUFBQSxNQUN4QyxPQUFPO0FBQ04sbUJBQVcsYUFBYTtBQUFBLE1BQ3pCO0FBQ0EsaUJBQVcsWUFBWTtBQUN2QixxQkFBZSxXQUFXLGVBQWUsWUFBWSxRQUFRO0FBRzdELFVBQUksWUFBWSxXQUFXLGlCQUFpQjtBQUM1QywyQkFBcUIsVUFBVSxTQUFTO0FBRXhDLGFBQU87QUFBQSxJQUNSO0FBRUEsYUFBUyxZQUFZO0FBQUE7QUFBQSxNQUVwQixVQUFZO0FBQUEsTUFDWixVQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPWixTQUFXO0FBQUEsTUFDWCxpQkFBbUI7QUFBQSxNQUNuQixNQUFPO0FBQUEsTUFFUCxjQUFnQixTQUFTLFVBQVUsVUFBUztBQUMzQyxZQUFHLFNBQVMsWUFBWSx3QkFBdUI7QUFDOUMsY0FBSSxRQUFRLFNBQVM7QUFDckIsaUJBQU0sT0FBTTtBQUNYLGdCQUFJLE9BQU8sTUFBTTtBQUNqQixpQkFBSyxhQUFhLE9BQU0sUUFBUTtBQUNoQyxvQkFBUTtBQUFBLFVBQ1Q7QUFDQSxpQkFBTztBQUFBLFFBQ1I7QUFDQSxzQkFBYyxNQUFNLFVBQVUsUUFBUTtBQUN0Qyw2QkFBcUIsVUFBVSxJQUFJO0FBQ25DLFlBQUksS0FBSyxvQkFBb0IsUUFBUSxTQUFTLGFBQWEsY0FBYztBQUN4RSxlQUFLLGtCQUFrQjtBQUFBLFFBQ3hCO0FBRUEsZUFBTztBQUFBLE1BQ1I7QUFBQSxNQUNBLGFBQWUsU0FBUyxVQUFTO0FBQ2hDLFlBQUcsS0FBSyxtQkFBbUIsVUFBUztBQUNuQyxlQUFLLGtCQUFrQjtBQUFBLFFBQ3hCO0FBQ0EsZUFBTyxhQUFhLE1BQUssUUFBUTtBQUFBLE1BQ2xDO0FBQUEsTUFDQSxjQUFjLFNBQVUsVUFBVSxVQUFVO0FBRTNDLHNCQUFjLE1BQU0sVUFBVSxVQUFVLHNDQUFzQztBQUM5RSw2QkFBcUIsVUFBVSxJQUFJO0FBQ25DLFlBQUksVUFBVTtBQUNiLGVBQUssWUFBWSxRQUFRO0FBQUEsUUFDMUI7QUFDQSxZQUFJLGNBQWMsUUFBUSxHQUFHO0FBQzVCLGVBQUssa0JBQWtCO0FBQUEsUUFDeEI7QUFBQSxNQUNEO0FBQUE7QUFBQSxNQUVBLFlBQWEsU0FBUyxjQUFhLE1BQUs7QUFDdkMsZUFBTyxXQUFXLE1BQUssY0FBYSxJQUFJO0FBQUEsTUFDekM7QUFBQTtBQUFBLE1BRUEsZ0JBQWlCLFNBQVMsSUFBRztBQUM1QixZQUFJLE1BQU07QUFDVixtQkFBVyxLQUFLLGlCQUFnQixTQUFTLE1BQUs7QUFDN0MsY0FBRyxLQUFLLFlBQVksY0FBYTtBQUNoQyxnQkFBRyxLQUFLLGFBQWEsSUFBSSxLQUFLLElBQUc7QUFDaEMsb0JBQU07QUFDTixxQkFBTztBQUFBLFlBQ1I7QUFBQSxVQUNEO0FBQUEsUUFDRCxDQUFDO0FBQ0QsZUFBTztBQUFBLE1BQ1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFtQkEsd0JBQXdCLFNBQVMsWUFBWTtBQUM1QyxZQUFJLGdCQUFnQixhQUFhLFVBQVU7QUFDM0MsZUFBTyxJQUFJLGFBQWEsTUFBTSxTQUFTLE1BQU07QUFDNUMsY0FBSSxLQUFLLENBQUM7QUFDVixjQUFJLGNBQWMsU0FBUyxHQUFHO0FBQzdCLHVCQUFXLEtBQUssaUJBQWlCLFNBQVMsTUFBTTtBQUMvQyxrQkFBRyxTQUFTLFFBQVEsS0FBSyxhQUFhLGNBQWM7QUFDbkQsb0JBQUksaUJBQWlCLEtBQUssYUFBYSxPQUFPO0FBRTlDLG9CQUFJLGdCQUFnQjtBQUVuQixzQkFBSSxVQUFVLGVBQWU7QUFDN0Isc0JBQUksQ0FBQyxTQUFTO0FBQ2Isd0JBQUksb0JBQW9CLGFBQWEsY0FBYztBQUNuRCw4QkFBVSxjQUFjLE1BQU0sY0FBYyxpQkFBaUIsQ0FBQztBQUFBLGtCQUMvRDtBQUNBLHNCQUFHLFNBQVM7QUFDWCx1QkFBRyxLQUFLLElBQUk7QUFBQSxrQkFDYjtBQUFBLGdCQUNEO0FBQUEsY0FDRDtBQUFBLFlBQ0QsQ0FBQztBQUFBLFVBQ0Y7QUFDQSxpQkFBTztBQUFBLFFBQ1IsQ0FBQztBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BR0EsZUFBZ0IsU0FBUyxTQUFRO0FBQ2hDLFlBQUksT0FBTyxJQUFJLFFBQVE7QUFDdkIsYUFBSyxnQkFBZ0I7QUFDckIsYUFBSyxXQUFXO0FBQ2hCLGFBQUssVUFBVTtBQUNmLGFBQUssWUFBWTtBQUNqQixhQUFLLGFBQWEsSUFBSSxTQUFTO0FBQy9CLFlBQUksUUFBUSxLQUFLLGFBQWEsSUFBSSxhQUFhO0FBQy9DLGNBQU0sZ0JBQWdCO0FBQ3RCLGVBQU87QUFBQSxNQUNSO0FBQUEsTUFDQSx3QkFBeUIsV0FBVTtBQUNsQyxZQUFJLE9BQU8sSUFBSSxpQkFBaUI7QUFDaEMsYUFBSyxnQkFBZ0I7QUFDckIsYUFBSyxhQUFhLElBQUksU0FBUztBQUMvQixlQUFPO0FBQUEsTUFDUjtBQUFBLE1BQ0EsZ0JBQWlCLFNBQVMsTUFBSztBQUM5QixZQUFJLE9BQU8sSUFBSSxLQUFLO0FBQ3BCLGFBQUssZ0JBQWdCO0FBQ3JCLGFBQUssV0FBVyxJQUFJO0FBQ3BCLGVBQU87QUFBQSxNQUNSO0FBQUEsTUFDQSxlQUFnQixTQUFTLE1BQUs7QUFDN0IsWUFBSSxPQUFPLElBQUksUUFBUTtBQUN2QixhQUFLLGdCQUFnQjtBQUNyQixhQUFLLFdBQVcsSUFBSTtBQUNwQixlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BYUEsb0JBQXFCLFNBQVMsTUFBSztBQUNsQyxZQUFJLEtBQUssUUFBUSxLQUFLLE1BQU0sSUFBSTtBQUMvQixnQkFBTSxJQUFJLGFBQWEsdUJBQXVCLHFCQUFxQjtBQUFBLFFBQ3BFO0FBQ0EsWUFBSSxPQUFPLElBQUksYUFBYTtBQUM1QixhQUFLLGdCQUFnQjtBQUNyQixhQUFLLFdBQVcsSUFBSTtBQUNwQixlQUFPO0FBQUEsTUFDUjtBQUFBLE1BQ0EsNkJBQThCLFNBQVMsUUFBTyxNQUFLO0FBQ2xELFlBQUksT0FBTyxJQUFJLHNCQUFzQjtBQUNyQyxhQUFLLGdCQUFnQjtBQUNyQixhQUFLLFVBQVUsS0FBSyxXQUFXLEtBQUssU0FBUztBQUM3QyxhQUFLLFlBQVksS0FBSyxPQUFPO0FBQzdCLGVBQU87QUFBQSxNQUNSO0FBQUEsTUFDQSxpQkFBa0IsU0FBUyxNQUFLO0FBQy9CLFlBQUksT0FBTyxJQUFJLEtBQUs7QUFDcEIsYUFBSyxnQkFBZ0I7QUFDckIsYUFBSyxPQUFPO0FBQ1osYUFBSyxXQUFXO0FBQ2hCLGFBQUssWUFBWTtBQUNqQixhQUFLLFlBQVk7QUFDakIsZUFBTztBQUFBLE1BQ1I7QUFBQSxNQUNBLHVCQUF3QixTQUFTLE1BQUs7QUFDckMsWUFBSSxPQUFPLElBQUksZ0JBQWdCO0FBQy9CLGFBQUssZ0JBQWdCO0FBQ3JCLGFBQUssV0FBVztBQUNoQixlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUEsTUFFQSxpQkFBa0IsU0FBUyxjQUFhLGVBQWM7QUFDckQsWUFBSSxPQUFPLElBQUksUUFBUTtBQUN2QixZQUFJLEtBQUssY0FBYyxNQUFNLEdBQUc7QUFDaEMsWUFBSSxRQUFRLEtBQUssYUFBYSxJQUFJLGFBQWE7QUFDL0MsYUFBSyxhQUFhLElBQUksU0FBUztBQUMvQixhQUFLLGdCQUFnQjtBQUNyQixhQUFLLFdBQVc7QUFDaEIsYUFBSyxVQUFVO0FBQ2YsYUFBSyxlQUFlO0FBQ3BCLFlBQUcsR0FBRyxVQUFVLEdBQUU7QUFDakIsZUFBSyxTQUFTLEdBQUcsQ0FBQztBQUNsQixlQUFLLFlBQVksR0FBRyxDQUFDO0FBQUEsUUFDdEIsT0FBSztBQUVKLGVBQUssWUFBWTtBQUFBLFFBQ2xCO0FBQ0EsY0FBTSxnQkFBZ0I7QUFDdEIsZUFBTztBQUFBLE1BQ1I7QUFBQTtBQUFBLE1BRUEsbUJBQW9CLFNBQVMsY0FBYSxlQUFjO0FBQ3ZELFlBQUksT0FBTyxJQUFJLEtBQUs7QUFDcEIsWUFBSSxLQUFLLGNBQWMsTUFBTSxHQUFHO0FBQ2hDLGFBQUssZ0JBQWdCO0FBQ3JCLGFBQUssV0FBVztBQUNoQixhQUFLLE9BQU87QUFDWixhQUFLLGVBQWU7QUFDcEIsYUFBSyxZQUFZO0FBQ2pCLFlBQUcsR0FBRyxVQUFVLEdBQUU7QUFDakIsZUFBSyxTQUFTLEdBQUcsQ0FBQztBQUNsQixlQUFLLFlBQVksR0FBRyxDQUFDO0FBQUEsUUFDdEIsT0FBSztBQUVKLGVBQUssWUFBWTtBQUFBLFFBQ2xCO0FBQ0EsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBQ0EsYUFBUyxVQUFTLElBQUk7QUFHdEIsYUFBUyxVQUFVO0FBQ2xCLFdBQUssU0FBUyxDQUFDO0FBQUEsSUFDaEI7QUFDQSxZQUFRLFlBQVk7QUFBQSxNQUNuQixVQUFXO0FBQUEsTUFDWCxjQUFlLFNBQVMsTUFBSztBQUM1QixlQUFPLEtBQUssaUJBQWlCLElBQUksS0FBRztBQUFBLE1BQ3JDO0FBQUEsTUFDQSxjQUFlLFNBQVMsTUFBSztBQUM1QixZQUFJLE9BQU8sS0FBSyxpQkFBaUIsSUFBSTtBQUNyQyxlQUFPLFFBQVEsS0FBSyxTQUFTO0FBQUEsTUFDOUI7QUFBQSxNQUNBLGtCQUFtQixTQUFTLE1BQUs7QUFDaEMsZUFBTyxLQUFLLFdBQVcsYUFBYSxJQUFJO0FBQUEsTUFDekM7QUFBQSxNQUNBLGNBQWUsU0FBUyxNQUFNLE9BQU07QUFDbkMsWUFBSSxPQUFPLEtBQUssY0FBYyxnQkFBZ0IsSUFBSTtBQUNsRCxhQUFLLFFBQVEsS0FBSyxZQUFZLEtBQUs7QUFDbkMsYUFBSyxpQkFBaUIsSUFBSTtBQUFBLE1BQzNCO0FBQUEsTUFDQSxpQkFBa0IsU0FBUyxNQUFLO0FBQy9CLFlBQUksT0FBTyxLQUFLLGlCQUFpQixJQUFJO0FBQ3JDLGdCQUFRLEtBQUssb0JBQW9CLElBQUk7QUFBQSxNQUN0QztBQUFBO0FBQUEsTUFHQSxhQUFZLFNBQVMsVUFBUztBQUM3QixZQUFHLFNBQVMsYUFBYSx3QkFBdUI7QUFDL0MsaUJBQU8sS0FBSyxhQUFhLFVBQVMsSUFBSTtBQUFBLFFBQ3ZDLE9BQUs7QUFDSixpQkFBTyxtQkFBbUIsTUFBSyxRQUFRO0FBQUEsUUFDeEM7QUFBQSxNQUNEO0FBQUEsTUFDQSxrQkFBbUIsU0FBUyxTQUFRO0FBQ25DLGVBQU8sS0FBSyxXQUFXLGFBQWEsT0FBTztBQUFBLE1BQzVDO0FBQUEsTUFDQSxvQkFBcUIsU0FBUyxTQUFRO0FBQ3JDLGVBQU8sS0FBSyxXQUFXLGVBQWUsT0FBTztBQUFBLE1BQzlDO0FBQUEsTUFDQSxxQkFBc0IsU0FBUyxTQUFRO0FBRXRDLGVBQU8sS0FBSyxXQUFXLGdCQUFnQixRQUFRLFFBQVE7QUFBQSxNQUN4RDtBQUFBO0FBQUEsTUFFQSxtQkFBb0IsU0FBUyxjQUFjLFdBQVU7QUFDcEQsWUFBSSxNQUFNLEtBQUssbUJBQW1CLGNBQWMsU0FBUztBQUN6RCxlQUFPLEtBQUssb0JBQW9CLEdBQUc7QUFBQSxNQUNwQztBQUFBLE1BRUEsZ0JBQWlCLFNBQVMsY0FBYyxXQUFVO0FBQ2pELGVBQU8sS0FBSyxtQkFBbUIsY0FBYyxTQUFTLEtBQUc7QUFBQSxNQUMxRDtBQUFBLE1BQ0EsZ0JBQWlCLFNBQVMsY0FBYyxXQUFVO0FBQ2pELFlBQUksT0FBTyxLQUFLLG1CQUFtQixjQUFjLFNBQVM7QUFDMUQsZUFBTyxRQUFRLEtBQUssU0FBUztBQUFBLE1BQzlCO0FBQUEsTUFDQSxnQkFBaUIsU0FBUyxjQUFjLGVBQWUsT0FBTTtBQUM1RCxZQUFJLE9BQU8sS0FBSyxjQUFjLGtCQUFrQixjQUFjLGFBQWE7QUFDM0UsYUFBSyxRQUFRLEtBQUssWUFBWSxLQUFLO0FBQ25DLGFBQUssaUJBQWlCLElBQUk7QUFBQSxNQUMzQjtBQUFBLE1BQ0Esb0JBQXFCLFNBQVMsY0FBYyxXQUFVO0FBQ3JELGVBQU8sS0FBSyxXQUFXLGVBQWUsY0FBYyxTQUFTO0FBQUEsTUFDOUQ7QUFBQSxNQUVBLHNCQUF1QixTQUFTLFNBQVE7QUFDdkMsZUFBTyxJQUFJLGFBQWEsTUFBSyxTQUFTLE1BQUs7QUFDMUMsY0FBSSxLQUFLLENBQUM7QUFDVixxQkFBVyxNQUFLLFNBQVMsTUFBSztBQUM3QixnQkFBRyxTQUFTLFFBQVEsS0FBSyxZQUFZLGlCQUFpQixZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVM7QUFDakcsaUJBQUcsS0FBSyxJQUFJO0FBQUEsWUFDYjtBQUFBLFVBQ0QsQ0FBQztBQUNELGlCQUFPO0FBQUEsUUFDUixDQUFDO0FBQUEsTUFDRjtBQUFBLE1BQ0Esd0JBQXlCLFNBQVMsY0FBYyxXQUFVO0FBQ3pELGVBQU8sSUFBSSxhQUFhLE1BQUssU0FBUyxNQUFLO0FBQzFDLGNBQUksS0FBSyxDQUFDO0FBQ1YscUJBQVcsTUFBSyxTQUFTLE1BQUs7QUFDN0IsZ0JBQUcsU0FBUyxRQUFRLEtBQUssYUFBYSxpQkFBaUIsaUJBQWlCLE9BQU8sS0FBSyxpQkFBaUIsa0JBQWtCLGNBQWMsT0FBTyxLQUFLLGFBQWEsWUFBVztBQUN4SyxpQkFBRyxLQUFLLElBQUk7QUFBQSxZQUNiO0FBQUEsVUFDRCxDQUFDO0FBQ0QsaUJBQU87QUFBQSxRQUVSLENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRDtBQUNBLGFBQVMsVUFBVSx1QkFBdUIsUUFBUSxVQUFVO0FBQzVELGFBQVMsVUFBVSx5QkFBeUIsUUFBUSxVQUFVO0FBRzlELGFBQVMsU0FBUSxJQUFJO0FBQ3JCLGFBQVMsT0FBTztBQUFBLElBQ2hCO0FBQ0EsU0FBSyxVQUFVLFdBQVc7QUFDMUIsYUFBUyxNQUFLLElBQUk7QUFHbEIsYUFBUyxnQkFBZ0I7QUFBQSxJQUN6QjtBQUNBLGtCQUFjLFlBQVk7QUFBQSxNQUN6QixNQUFPO0FBQUEsTUFDUCxlQUFnQixTQUFTLFFBQVEsT0FBTztBQUN2QyxlQUFPLEtBQUssS0FBSyxVQUFVLFFBQVEsU0FBTyxLQUFLO0FBQUEsTUFDaEQ7QUFBQSxNQUNBLFlBQVksU0FBUyxNQUFNO0FBQzFCLGVBQU8sS0FBSyxPQUFLO0FBQ2pCLGFBQUssWUFBWSxLQUFLLE9BQU87QUFDN0IsYUFBSyxTQUFTLEtBQUs7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsWUFBWSxTQUFTLFFBQU8sTUFBTTtBQUNqQyxhQUFLLFlBQVksUUFBTyxHQUFFLElBQUk7QUFBQSxNQUUvQjtBQUFBLE1BQ0EsYUFBWSxTQUFTLFVBQVM7QUFDN0IsY0FBTSxJQUFJLE1BQU0saUJBQWlCLHFCQUFxQixDQUFDO0FBQUEsTUFDeEQ7QUFBQSxNQUNBLFlBQVksU0FBUyxRQUFRLE9BQU87QUFDbkMsYUFBSyxZQUFZLFFBQU8sT0FBTSxFQUFFO0FBQUEsTUFDakM7QUFBQSxNQUNBLGFBQWEsU0FBUyxRQUFRLE9BQU8sTUFBTTtBQUMxQyxZQUFJLFFBQVEsS0FBSyxLQUFLLFVBQVUsR0FBRSxNQUFNO0FBQ3hDLFlBQUksTUFBTSxLQUFLLEtBQUssVUFBVSxTQUFPLEtBQUs7QUFDMUMsZUFBTyxRQUFRLE9BQU87QUFDdEIsYUFBSyxZQUFZLEtBQUssT0FBTztBQUM3QixhQUFLLFNBQVMsS0FBSztBQUFBLE1BQ3BCO0FBQUEsSUFDRDtBQUNBLGFBQVMsZUFBYyxJQUFJO0FBQzNCLGFBQVMsT0FBTztBQUFBLElBQ2hCO0FBQ0EsU0FBSyxZQUFZO0FBQUEsTUFDaEIsVUFBVztBQUFBLE1BQ1gsVUFBVztBQUFBLE1BQ1gsV0FBWSxTQUFTLFFBQVE7QUFDNUIsWUFBSSxPQUFPLEtBQUs7QUFDaEIsWUFBSSxVQUFVLEtBQUssVUFBVSxNQUFNO0FBQ25DLGVBQU8sS0FBSyxVQUFVLEdBQUcsTUFBTTtBQUMvQixhQUFLLE9BQU8sS0FBSyxZQUFZO0FBQzdCLGFBQUssU0FBUyxLQUFLO0FBQ25CLFlBQUksVUFBVSxLQUFLLGNBQWMsZUFBZSxPQUFPO0FBQ3ZELFlBQUcsS0FBSyxZQUFXO0FBQ2xCLGVBQUssV0FBVyxhQUFhLFNBQVMsS0FBSyxXQUFXO0FBQUEsUUFDdkQ7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFDQSxhQUFTLE1BQUssYUFBYTtBQUMzQixhQUFTLFVBQVU7QUFBQSxJQUNuQjtBQUNBLFlBQVEsWUFBWTtBQUFBLE1BQ25CLFVBQVc7QUFBQSxNQUNYLFVBQVc7QUFBQSxJQUNaO0FBQ0EsYUFBUyxTQUFRLGFBQWE7QUFFOUIsYUFBUyxlQUFlO0FBQUEsSUFDeEI7QUFDQSxpQkFBYSxZQUFZO0FBQUEsTUFDeEIsVUFBVztBQUFBLE1BQ1gsVUFBVztBQUFBLElBQ1o7QUFDQSxhQUFTLGNBQWEsYUFBYTtBQUduQyxhQUFTLGVBQWU7QUFBQSxJQUN4QjtBQUNBLGlCQUFhLFVBQVUsV0FBVztBQUNsQyxhQUFTLGNBQWEsSUFBSTtBQUUxQixhQUFTLFdBQVc7QUFBQSxJQUNwQjtBQUNBLGFBQVMsVUFBVSxXQUFXO0FBQzlCLGFBQVMsVUFBUyxJQUFJO0FBRXRCLGFBQVMsU0FBUztBQUFBLElBQ2xCO0FBQ0EsV0FBTyxVQUFVLFdBQVc7QUFDNUIsYUFBUyxRQUFPLElBQUk7QUFFcEIsYUFBUyxrQkFBa0I7QUFBQSxJQUMzQjtBQUNBLG9CQUFnQixVQUFVLFdBQVc7QUFDckMsYUFBUyxpQkFBZ0IsSUFBSTtBQUU3QixhQUFTLG1CQUFtQjtBQUFBLElBQzVCO0FBQ0EscUJBQWlCLFVBQVUsV0FBVztBQUN0QyxxQkFBaUIsVUFBVSxXQUFXO0FBQ3RDLGFBQVMsa0JBQWlCLElBQUk7QUFHOUIsYUFBUyx3QkFBd0I7QUFBQSxJQUNqQztBQUNBLDBCQUFzQixVQUFVLFdBQVc7QUFDM0MsYUFBUyx1QkFBc0IsSUFBSTtBQUNuQyxhQUFTLGdCQUFlO0FBQUEsSUFBQztBQWV6QixrQkFBYyxVQUFVLG9CQUFvQixTQUFTLE1BQUssUUFBTyxZQUFXO0FBQzNFLGFBQU8sc0JBQXNCLEtBQUssTUFBSyxRQUFPLFVBQVU7QUFBQSxJQUN6RDtBQUNBLFNBQUssVUFBVSxXQUFXO0FBQzFCLGFBQVMsc0JBQXNCLFFBQU8sWUFBVztBQUNoRCxVQUFJLE1BQU0sQ0FBQztBQUNYLFVBQUksVUFBVSxLQUFLLFlBQVksS0FBSyxLQUFLLG1CQUFtQjtBQUM1RCxVQUFJLFNBQVMsUUFBUTtBQUNyQixVQUFJLE1BQU0sUUFBUTtBQUVsQixVQUFHLE9BQU8sVUFBVSxNQUFLO0FBRXhCLFlBQUksU0FBUyxRQUFRLGFBQWEsR0FBRztBQUNyQyxZQUFHLFVBQVUsTUFBSztBQUVqQixjQUFJLG9CQUFrQjtBQUFBLFlBQ3RCLEVBQUMsV0FBVSxLQUFJLFFBQU8sS0FBSTtBQUFBO0FBQUEsVUFFMUI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUNBLHdCQUFrQixNQUFLLEtBQUksUUFBTyxZQUFXLGlCQUFpQjtBQUU5RCxhQUFPLElBQUksS0FBSyxFQUFFO0FBQUEsSUFDbkI7QUFFQSxhQUFTLG9CQUFvQixNQUFNLFFBQVEsbUJBQW1CO0FBQzdELFVBQUksU0FBUyxLQUFLLFVBQVU7QUFDNUIsVUFBSSxNQUFNLEtBQUs7QUFRZixVQUFJLENBQUMsS0FBSztBQUNULGVBQU87QUFBQSxNQUNSO0FBQ0EsVUFBSSxXQUFXLFNBQVMsUUFBUSxVQUFVLE9BQU8sUUFBUSxVQUFVLE9BQU87QUFDekUsZUFBTztBQUFBLE1BQ1I7QUFFQSxVQUFJLElBQUksa0JBQWtCO0FBQzFCLGFBQU8sS0FBSztBQUNYLFlBQUksS0FBSyxrQkFBa0IsQ0FBQztBQUU1QixZQUFJLEdBQUcsV0FBVyxRQUFRO0FBQ3pCLGlCQUFPLEdBQUcsY0FBYztBQUFBLFFBQ3pCO0FBQUEsTUFDRDtBQUNBLGFBQU87QUFBQSxJQUNSO0FBY0EsYUFBUyx1QkFBdUIsS0FBSyxlQUFlLE9BQU87QUFDMUQsVUFBSSxLQUFLLEtBQUssZUFBZSxNQUFNLE1BQU0sUUFBUSxpQkFBaUIsV0FBVyxHQUFHLEdBQUc7QUFBQSxJQUNwRjtBQUVBLGFBQVMsa0JBQWtCLE1BQUssS0FBSSxRQUFPLFlBQVcsbUJBQWtCO0FBQ3ZFLFVBQUksQ0FBQyxtQkFBbUI7QUFDdkIsNEJBQW9CLENBQUM7QUFBQSxNQUN0QjtBQUVBLFVBQUcsWUFBVztBQUNiLGVBQU8sV0FBVyxJQUFJO0FBQ3RCLFlBQUcsTUFBSztBQUNQLGNBQUcsT0FBTyxRQUFRLFVBQVM7QUFDMUIsZ0JBQUksS0FBSyxJQUFJO0FBQ2I7QUFBQSxVQUNEO0FBQUEsUUFDRCxPQUFLO0FBQ0o7QUFBQSxRQUNEO0FBQUEsTUFFRDtBQUVBLGNBQU8sS0FBSyxVQUFTO0FBQUEsUUFDckIsS0FBSztBQUNKLGNBQUksUUFBUSxLQUFLO0FBQ2pCLGNBQUksTUFBTSxNQUFNO0FBQ2hCLGNBQUksUUFBUSxLQUFLO0FBQ2pCLGNBQUksV0FBVyxLQUFLO0FBRXBCLG1CQUFTLFVBQVUsT0FBTyxLQUFLLFlBQVksS0FBSztBQUVoRCxjQUFJLG1CQUFtQjtBQUN2QixjQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxLQUFLLGNBQWM7QUFDakQsZ0JBQUk7QUFFSixxQkFBUyxLQUFLLEdBQUcsS0FBSyxNQUFNLFFBQVEsTUFBTTtBQUN6QyxrQkFBSSxNQUFNLEtBQUssRUFBRSxFQUFFLFNBQVMsU0FBUztBQUNwQyw0QkFBWSxNQUFNLEtBQUssRUFBRSxFQUFFO0FBQzNCO0FBQUEsY0FDRDtBQUFBLFlBQ0Q7QUFDQSxnQkFBSSxDQUFDLFdBQVc7QUFFZix1QkFBUyxNQUFNLGtCQUFrQixTQUFTLEdBQUcsT0FBTyxHQUFHLE9BQU87QUFDN0Qsb0JBQUksWUFBWSxrQkFBa0IsR0FBRztBQUNyQyxvQkFBSSxVQUFVLFdBQVcsTUFBTSxVQUFVLGNBQWMsS0FBSyxjQUFjO0FBQ3pFLDhCQUFZLFVBQVU7QUFDdEI7QUFBQSxnQkFDRDtBQUFBLGNBQ0Q7QUFBQSxZQUNEO0FBQ0EsZ0JBQUksY0FBYyxLQUFLLGNBQWM7QUFDcEMsdUJBQVMsTUFBTSxrQkFBa0IsU0FBUyxHQUFHLE9BQU8sR0FBRyxPQUFPO0FBQzdELG9CQUFJLFlBQVksa0JBQWtCLEdBQUc7QUFDckMsb0JBQUksVUFBVSxjQUFjLEtBQUssY0FBYztBQUM5QyxzQkFBSSxVQUFVLFFBQVE7QUFDckIsdUNBQW1CLFVBQVUsU0FBUyxNQUFNO0FBQUEsa0JBQzdDO0FBQ0E7QUFBQSxnQkFDRDtBQUFBLGNBQ0Q7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUVBLGNBQUksS0FBSyxLQUFLLGdCQUFnQjtBQUU5QixtQkFBUSxJQUFFLEdBQUUsSUFBRSxLQUFJLEtBQUk7QUFFckIsZ0JBQUksT0FBTyxNQUFNLEtBQUssQ0FBQztBQUN2QixnQkFBSSxLQUFLLFVBQVUsU0FBUztBQUMzQixnQ0FBa0IsS0FBSyxFQUFFLFFBQVEsS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLENBQUM7QUFBQSxZQUN6RSxXQUFTLEtBQUssWUFBWSxTQUFRO0FBQ2pDLGdDQUFrQixLQUFLLEVBQUUsUUFBUSxJQUFJLFdBQVcsS0FBSyxNQUFNLENBQUM7QUFBQSxZQUM3RDtBQUFBLFVBQ0Q7QUFFQSxtQkFBUSxJQUFFLEdBQUUsSUFBRSxLQUFJLEtBQUk7QUFDckIsZ0JBQUksT0FBTyxNQUFNLEtBQUssQ0FBQztBQUN2QixnQkFBSSxvQkFBb0IsTUFBSyxRQUFRLGlCQUFpQixHQUFHO0FBQ3hELGtCQUFJLFNBQVMsS0FBSyxVQUFRO0FBQzFCLGtCQUFJLE1BQU0sS0FBSztBQUNmLHFDQUF1QixLQUFLLFNBQVMsV0FBVyxTQUFTLFNBQVMsR0FBRztBQUNyRSxnQ0FBa0IsS0FBSyxFQUFFLFFBQWdCLFdBQVUsSUFBSSxDQUFDO0FBQUEsWUFDekQ7QUFDQSw4QkFBa0IsTUFBSyxLQUFJLFFBQU8sWUFBVyxpQkFBaUI7QUFBQSxVQUMvRDtBQUdBLGNBQUksYUFBYSxvQkFBb0Isb0JBQW9CLE1BQU0sUUFBUSxpQkFBaUIsR0FBRztBQUMxRixnQkFBSSxTQUFTLEtBQUssVUFBUTtBQUMxQixnQkFBSSxNQUFNLEtBQUs7QUFDZixtQ0FBdUIsS0FBSyxTQUFTLFdBQVcsU0FBUyxTQUFTLEdBQUc7QUFDckUsOEJBQWtCLEtBQUssRUFBRSxRQUFnQixXQUFVLElBQUksQ0FBQztBQUFBLFVBQ3pEO0FBRUEsY0FBRyxTQUFTLFVBQVUsQ0FBQyxtQ0FBbUMsS0FBSyxRQUFRLEdBQUU7QUFDeEUsZ0JBQUksS0FBSyxHQUFHO0FBRVosZ0JBQUcsVUFBVSxZQUFZLEtBQUssUUFBUSxHQUFFO0FBQ3ZDLHFCQUFNLE9BQU07QUFDWCxvQkFBRyxNQUFNLE1BQUs7QUFDYixzQkFBSSxLQUFLLE1BQU0sSUFBSTtBQUFBLGdCQUNwQixPQUFLO0FBQ0osb0NBQWtCLE9BQU8sS0FBSyxRQUFRLFlBQVksa0JBQWtCLE1BQU0sQ0FBQztBQUFBLGdCQUM1RTtBQUNBLHdCQUFRLE1BQU07QUFBQSxjQUNmO0FBQUEsWUFDRCxPQUNBO0FBQ0MscUJBQU0sT0FBTTtBQUNYLGtDQUFrQixPQUFPLEtBQUssUUFBUSxZQUFZLGtCQUFrQixNQUFNLENBQUM7QUFDM0Usd0JBQVEsTUFBTTtBQUFBLGNBQ2Y7QUFBQSxZQUNEO0FBQ0EsZ0JBQUksS0FBSyxNQUFLLGtCQUFpQixHQUFHO0FBQUEsVUFDbkMsT0FBSztBQUNKLGdCQUFJLEtBQUssSUFBSTtBQUFBLFVBQ2Q7QUFHQTtBQUFBLFFBQ0QsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUNKLGNBQUksUUFBUSxLQUFLO0FBQ2pCLGlCQUFNLE9BQU07QUFDWCw4QkFBa0IsT0FBTyxLQUFLLFFBQVEsWUFBWSxrQkFBa0IsTUFBTSxDQUFDO0FBQzNFLG9CQUFRLE1BQU07QUFBQSxVQUNmO0FBQ0E7QUFBQSxRQUNELEtBQUs7QUFDSixpQkFBTyx1QkFBdUIsS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLO0FBQUEsUUFDekQsS0FBSztBQWlCSixpQkFBTyxJQUFJO0FBQUEsWUFBSyxLQUFLLEtBQ25CLFFBQVEsVUFBUyxXQUFXO0FBQUEsVUFDOUI7QUFBQSxRQUNELEtBQUs7QUFDSixpQkFBTyxJQUFJLEtBQUssYUFBYSxLQUFLLEtBQUssUUFBUSxRQUFRLGlCQUFpQixHQUFHLEtBQUs7QUFBQSxRQUNqRixLQUFLO0FBQ0osaUJBQU8sSUFBSSxLQUFNLFFBQU8sS0FBSyxNQUFLLEtBQUs7QUFBQSxRQUN4QyxLQUFLO0FBQ0osY0FBSSxRQUFRLEtBQUs7QUFDakIsY0FBSSxRQUFRLEtBQUs7QUFDakIsY0FBSSxLQUFLLGNBQWEsS0FBSyxJQUFJO0FBQy9CLGNBQUcsT0FBTTtBQUNSLGdCQUFJLEtBQUssWUFBWSxLQUFLO0FBQzFCLGdCQUFJLFNBQVMsU0FBTyxLQUFLO0FBQ3hCLGtCQUFJLEtBQUssS0FBSyxLQUFLO0FBQUEsWUFDcEI7QUFDQSxnQkFBSSxLQUFLLEdBQUc7QUFBQSxVQUNiLFdBQVMsU0FBUyxTQUFPLEtBQUk7QUFDNUIsZ0JBQUksS0FBSyxZQUFZLE9BQU8sR0FBRztBQUFBLFVBQ2hDLE9BQUs7QUFDSixnQkFBSSxNQUFNLEtBQUs7QUFDZixnQkFBRyxLQUFJO0FBQ04sa0JBQUksS0FBSyxNQUFLLEtBQUksR0FBRztBQUFBLFlBQ3RCO0FBQ0EsZ0JBQUksS0FBSyxHQUFHO0FBQUEsVUFDYjtBQUNBO0FBQUEsUUFDRCxLQUFLO0FBQ0osaUJBQU8sSUFBSSxLQUFNLE1BQUssS0FBSyxRQUFPLEtBQUksS0FBSyxNQUFLLElBQUk7QUFBQSxRQUNyRCxLQUFLO0FBQ0osaUJBQU8sSUFBSSxLQUFNLEtBQUksS0FBSyxVQUFTLEdBQUc7QUFBQTtBQUFBO0FBQUEsUUFHdkM7QUFDQyxjQUFJLEtBQUssTUFBSyxLQUFLLFFBQVE7QUFBQSxNQUM1QjtBQUFBLElBQ0Q7QUFDQSxhQUFTLFdBQVcsS0FBSSxNQUFLLE1BQUs7QUFDakMsVUFBSTtBQUNKLGNBQVEsS0FBSyxVQUFVO0FBQUEsUUFDdkIsS0FBSztBQUNKLGtCQUFRLEtBQUssVUFBVSxLQUFLO0FBQzVCLGdCQUFNLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU12QixLQUFLO0FBQ0o7QUFBQSxRQUNELEtBQUs7QUFDSixpQkFBTztBQUNQO0FBQUEsTUFlRDtBQUNBLFVBQUcsQ0FBQyxPQUFNO0FBQ1QsZ0JBQVEsS0FBSyxVQUFVLEtBQUs7QUFBQSxNQUM3QjtBQUNBLFlBQU0sZ0JBQWdCO0FBQ3RCLFlBQU0sYUFBYTtBQUNuQixVQUFHLE1BQUs7QUFDUCxZQUFJLFFBQVEsS0FBSztBQUNqQixlQUFNLE9BQU07QUFDWCxnQkFBTSxZQUFZLFdBQVcsS0FBSSxPQUFNLElBQUksQ0FBQztBQUM1QyxrQkFBUSxNQUFNO0FBQUEsUUFDZjtBQUFBLE1BQ0Q7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUlBLGFBQVMsVUFBVSxLQUFJLE1BQUssTUFBSztBQUNoQyxVQUFJLFFBQVEsSUFBSSxLQUFLLFlBQVk7QUFDakMsZUFBUyxLQUFLLE1BQU07QUFDbkIsWUFBSSxPQUFPLFVBQVUsZUFBZSxLQUFLLE1BQU0sQ0FBQyxHQUFHO0FBQ2xELGNBQUksSUFBSSxLQUFLLENBQUM7QUFDZCxjQUFJLE9BQU8sS0FBSyxVQUFVO0FBQ3pCLGdCQUFJLEtBQUssTUFBTSxDQUFDLEdBQUc7QUFDbEIsb0JBQU0sQ0FBQyxJQUFJO0FBQUEsWUFDWjtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUNBLFVBQUcsS0FBSyxZQUFXO0FBQ2xCLGNBQU0sYUFBYSxJQUFJLFNBQVM7QUFBQSxNQUNqQztBQUNBLFlBQU0sZ0JBQWdCO0FBQ3RCLGNBQVEsTUFBTSxVQUFVO0FBQUEsUUFDeEIsS0FBSztBQUNKLGNBQUksUUFBUSxLQUFLO0FBQ2pCLGNBQUksU0FBUyxNQUFNLGFBQWEsSUFBSSxhQUFhO0FBQ2pELGNBQUksTUFBTSxNQUFNO0FBQ2hCLGlCQUFPLGdCQUFnQjtBQUN2QixtQkFBUSxJQUFFLEdBQUUsSUFBRSxLQUFJLEtBQUk7QUFDckIsa0JBQU0saUJBQWlCLFVBQVUsS0FBSSxNQUFNLEtBQUssQ0FBQyxHQUFFLElBQUksQ0FBQztBQUFBLFVBQ3pEO0FBQ0E7QUFBTTtBQUFBLFFBQ1AsS0FBSztBQUNKLGlCQUFPO0FBQUEsTUFDUjtBQUNBLFVBQUcsTUFBSztBQUNQLFlBQUksUUFBUSxLQUFLO0FBQ2pCLGVBQU0sT0FBTTtBQUNYLGdCQUFNLFlBQVksVUFBVSxLQUFJLE9BQU0sSUFBSSxDQUFDO0FBQzNDLGtCQUFRLE1BQU07QUFBQSxRQUNmO0FBQUEsTUFDRDtBQUNBLGFBQU87QUFBQSxJQUNSO0FBRUEsYUFBUyxRQUFRLFFBQU8sS0FBSSxPQUFNO0FBQ2pDLGFBQU8sR0FBRyxJQUFJO0FBQUEsSUFDZjtBQUVBLFFBQUc7QUFDRixVQUFHLE9BQU8sZ0JBQWU7QUFpQ3hCLFlBQVNFLGtCQUFULFNBQXdCLE1BQUs7QUFDNUIsa0JBQU8sS0FBSyxVQUFTO0FBQUEsWUFDckIsS0FBSztBQUFBLFlBQ0wsS0FBSztBQUNKLGtCQUFJLE1BQU0sQ0FBQztBQUNYLHFCQUFPLEtBQUs7QUFDWixxQkFBTSxNQUFLO0FBQ1Ysb0JBQUcsS0FBSyxhQUFXLEtBQUssS0FBSyxhQUFZLEdBQUU7QUFDMUMsc0JBQUksS0FBS0EsZ0JBQWUsSUFBSSxDQUFDO0FBQUEsZ0JBQzlCO0FBQ0EsdUJBQU8sS0FBSztBQUFBLGNBQ2I7QUFDQSxxQkFBTyxJQUFJLEtBQUssRUFBRTtBQUFBLFlBQ25CO0FBQ0MscUJBQU8sS0FBSztBQUFBLFVBQ2I7QUFBQSxRQUNEO0FBaEJTLHlCQUFBQTtBQWhDVCxlQUFPLGVBQWUsYUFBYSxXQUFVLFVBQVM7QUFBQSxVQUNyRCxLQUFJLFdBQVU7QUFDYiw0QkFBZ0IsSUFBSTtBQUNwQixtQkFBTyxLQUFLO0FBQUEsVUFDYjtBQUFBLFFBQ0QsQ0FBQztBQUVELGVBQU8sZUFBZSxLQUFLLFdBQVUsZUFBYztBQUFBLFVBQ2xELEtBQUksV0FBVTtBQUNiLG1CQUFPQSxnQkFBZSxJQUFJO0FBQUEsVUFDM0I7QUFBQSxVQUVBLEtBQUksU0FBUyxNQUFLO0FBQ2pCLG9CQUFPLEtBQUssVUFBUztBQUFBLGNBQ3JCLEtBQUs7QUFBQSxjQUNMLEtBQUs7QUFDSix1QkFBTSxLQUFLLFlBQVc7QUFDckIsdUJBQUssWUFBWSxLQUFLLFVBQVU7QUFBQSxnQkFDakM7QUFDQSxvQkFBRyxRQUFRLE9BQU8sSUFBSSxHQUFFO0FBQ3ZCLHVCQUFLLFlBQVksS0FBSyxjQUFjLGVBQWUsSUFBSSxDQUFDO0FBQUEsZ0JBQ3pEO0FBQ0E7QUFBQSxjQUVEO0FBQ0MscUJBQUssT0FBTztBQUNaLHFCQUFLLFFBQVE7QUFDYixxQkFBSyxZQUFZO0FBQUEsWUFDbEI7QUFBQSxVQUNEO0FBQUEsUUFDRCxDQUFDO0FBb0JELGtCQUFVLFNBQVMsUUFBTyxLQUFJLE9BQU07QUFFbkMsaUJBQU8sT0FBSyxHQUFHLElBQUk7QUFBQSxRQUNwQjtBQUFBLE1BQ0Q7QUFBQSxJQUNELFNBQU8sR0FBRTtBQUFBLElBQ1Q7QUF4Qlc7QUEyQlYsWUFBUSxlQUFlO0FBQ3ZCLFlBQVEsZUFBZTtBQUN2QixZQUFRLG9CQUFvQjtBQUM1QixZQUFRLFVBQVU7QUFDbEIsWUFBUSxPQUFPO0FBQ2YsWUFBUSxXQUFXO0FBQ25CLFlBQVEsZ0JBQWdCO0FBQUE7QUFBQTs7O0FDbDNEekI7QUFBQTtBQUFBO0FBRUEsUUFBSSxTQUFTLHNCQUF5QjtBQVN0QyxZQUFRLGVBQWUsT0FBTztBQUFBLE1BQzdCLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxJQUNQLENBQUM7QUFnQkQsWUFBUSxnQkFBZ0IsT0FBTztBQUFBLE1BQzlCLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLGVBQWU7QUFBQSxNQUNmLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBLE1BQ25CLG9CQUFvQjtBQUFBLE1BQ3BCLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLHNCQUFzQjtBQUFBLE1BQ3RCLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLE1BQ2pCLGtCQUFrQjtBQUFBLE1BQ2xCLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULDBCQUEwQjtBQUFBLE1BQzFCLHVCQUF1QjtBQUFBLE1BQ3ZCLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGlCQUFpQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGlDQUFpQztBQUFBLE1BQ2pDLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGtCQUFrQjtBQUFBLE1BQ2xCLGdCQUFnQjtBQUFBLE1BQ2hCLHdCQUF3QjtBQUFBLE1BQ3hCLGtCQUFrQjtBQUFBLE1BQ2xCLGtCQUFrQjtBQUFBLE1BQ2xCLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLGdCQUFnQjtBQUFBLE1BQ2hCLHVCQUF1QjtBQUFBLE1BQ3ZCLFdBQVc7QUFBQSxNQUNYLGlCQUFpQjtBQUFBLE1BQ2pCLGlCQUFpQjtBQUFBLE1BQ2pCLHNCQUFzQjtBQUFBLE1BQ3RCLGVBQWU7QUFBQSxNQUNmLHFCQUFxQjtBQUFBLE1BQ3JCLDBCQUEwQjtBQUFBLE1BQzFCLHNCQUFzQjtBQUFBLE1BQ3RCLGtCQUFrQjtBQUFBLE1BQ2xCLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxNQUNmLG1CQUFtQjtBQUFBLE1BQ25CLG1CQUFtQjtBQUFBLE1BQ25CLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLGNBQWM7QUFBQSxNQUNkLGtCQUFrQjtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxNQUNYLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLE1BQ2pCLGtCQUFrQjtBQUFBLE1BQ2xCLHFCQUFxQjtBQUFBLE1BQ3JCLG1CQUFtQjtBQUFBLE1BQ25CLGdCQUFnQjtBQUFBLE1BQ2hCLG1CQUFtQjtBQUFBLE1BQ25CLG9CQUFvQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLE1BQ2pCLG9CQUFvQjtBQUFBLE1BQ3BCLFNBQVM7QUFBQSxNQUNULGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGtCQUFrQjtBQUFBLE1BQ2xCLFFBQVE7QUFBQSxNQUNSLHNCQUFzQjtBQUFBLE1BQ3RCLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLG1CQUFtQjtBQUFBLE1BQ25CLHVCQUF1QjtBQUFBLE1BQ3ZCLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLGtCQUFrQjtBQUFBLE1BQ2xCLGtCQUFrQjtBQUFBLE1BQ2xCLGdCQUFnQjtBQUFBLE1BQ2hCLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLE1BQ25CLGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULGdCQUFnQjtBQUFBLE1BQ2hCLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFB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LE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLGVBQWU7QUFBQSxNQUNmLGVBQWU7QUFBQSxNQUNmLG9CQUFvQjtBQUFBLE1BQ3BCLG9CQUFvQjtBQUFBLE1BQ3BCLG9CQUFvQjtBQUFBLE1BQ3BCLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLE1BQ2hCLGdCQUFnQjtBQUFBLE1BQ2hCLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLE1BQ2pCLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxNQUNmLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLHFCQUFxQjtBQUFBLE1BQ3JCLG9CQUFvQjtBQUFBLE1BQ3BCLG1CQUFtQjtBQUFBLE1BQ25CLHVCQUF1QjtBQUFBLE1BQ3ZCLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLHNCQUFzQjtBQUFBLE1BQ3RCLGdCQUFnQjtBQUFBLE1BQ2hCLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNO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LFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLGdCQUFnQjtBQUFBLE1BQ2hCLGtCQUFrQjtBQUFBLE1BQ2xCLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLHNCQUFzQjtBQUFBLE1BQ3RCLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLE1BQ2pCLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULElBQUk7QUFBQSxNQUNKLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLG9CQUFvQjtBQUFBLE1BQ3BCLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLGdCQUFnQjtBQUFBLE1BQ2hCLG9CQUFvQjtBQUFBLE1BQ3BCLHNCQUFzQjtBQUFBLE1BQ3RCLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLG1CQUFtQjtBQUFBLE1BQ25CLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGVBQWU7QUFBQSxNQUNmLHFCQUFxQjtBQUFBLE1BQ3JCLGdCQUFnQjtBQUFBLE1BQ2hCLGNBQWM7QUFBQSxNQUNkLG9CQUFvQjtBQUFBLE1BQ3BCLG9CQUFvQjtBQUFBLE1BQ3BCLGlCQUFpQjtBQUFBLE1BQ2pCLG9CQUFvQjtBQUFBLE1BQ3BCLFlBQVk7QUFBQSxNQUNaLGtCQUFrQjtBQUFBLE1BQ2xCLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLE1BQ2pCLG1CQUFtQjtBQUFBLE1BQ25CLGtCQUFrQjtBQUFBLE1BQ2xCLGlCQUFpQjtBQUFBLE1BQ2pCLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLE1BQ2pCLGVBQWU7QUFBQSxNQUNmLGtCQUFrQjtBQUFBLE1BQ2xCLG9CQUFvQjtBQUFBLE1BQ3BCLG1CQUFtQjtBQUFBLE1BQ25CLGtCQUFrQjtBQUFBLE1BQ2xCLGVBQWU7QUFBQSxNQUNmLGtCQUFrQjtBQUFBLE1BQ2xCLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCLGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLGNBQWM7QUFBQSxNQUNkLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLG9CQUFvQjtBQUFBLE1BQ3BCLGNBQWM7QUFBQSxNQUNkLG1CQUFtQjtBQUFBLE1BQ25CLGdCQUFnQjtBQUFBLE1BQ2hCLHFCQUFxQjtBQUFBLE1BQ3JCLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGlCQUFpQjtBQUFBLE1BQ2pCLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLG9CQUFvQjtBQUFBLE1BQ3BCLGVBQWU7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLGlCQUFpQjtBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLGtCQUFrQjtBQUFBLE1BQ2xCLG1CQUFtQjtBQUFBLE1BQ25CLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxNQUNkLGtCQUFrQjtBQUFBLE1BQ2xCLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLGtCQUFrQjtBQUFBLE1BQ2xCLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGVBQWU7QUFBQSxNQUNmLGVBQWU7QUFBQSxNQUNmLGdCQUFnQjtBQUFBLE1BQ2hCLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLGlCQUFpQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxNQUNWLGlCQUFpQjtBQUFBLE1BQ2pCLGtCQUFrQjtBQUFBLE1BQ2xCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLG1CQUFtQjtBQUFBLE1BQ25CLGVBQWU7QUFBQSxNQUNmLGVBQWU7QUFBQSxNQUNmLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNU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T0FBTyxjQUFjLElBQUksQ0FBQztBQUFBLE1BRXZELFdBQVcsUUFBUSxLQUFLLFVBQVUsaUJBQWlCLEtBQUssS0FBSyxNQUFNLEdBQUc7QUFFcEUsbUJBQVcsSUFBSSxNQUFNLEVBQUUsSUFBSSxPQUFPLGNBQWMsSUFBSSxXQUFXLEtBQUssTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUFBLE1BRTFGLFdBQVcsV0FBVyxNQUFNO0FBQzFCLG1CQUFXLElBQUksTUFBTSxFQUFFLElBQUksRUFBRTtBQUFBLE1BRS9CO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQzlJQTtBQUFBO0FBSUEsUUFBSSxrQkFBa0I7QUFDdEIsV0FBTyxLQUFLLGVBQWUsRUFBRSxRQUFRLFNBQVUsR0FBRztBQUFFLGNBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDO0FBQUEsSUFBRyxDQUFDO0FBTXRGLFFBQUksbUJBQW1CO0FBQ3ZCLFdBQU8sS0FBSyxnQkFBZ0IsRUFBRSxRQUFRLFNBQVUsR0FBRztBQUFFLGNBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDO0FBQUEsSUFBRyxDQUFDO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsidCIsICJoYXNEb2N0eXBlQ2hpbGRUaGF0SXNOb3RDaGlsZCIsICJub2RlIiwgImdldFRleHRDb250ZW50IiwgImEiLCAiZW5kIiwgInZhbHVlIiwgInNheCIsICJYTUxET01TdHJpbmdMaXN0IiwgIlhNTERPTUNvbmZpZ3VyYXRpb24iLCAiWE1MQXR0cmlidXRlIiwgIlhNTE5hbWVkTm9kZU1hcCIsICJYTUxFbGVtZW50IiwgIlhNTENoYXJhY3RlckRhdGEiLCAiWE1MRFRERW50aXR5IiwgIlhNTERURE5vdGF0aW9uIiwgIlhNTERvY1R5cGUiLCAiWE1MVGV4dCIsICJYTUxOb2RlTGlzdCIsICJYTUxOb2RlIiwgIlhNTFN0cmluZ2lmaWVyIiwgIlhNTERvY3VtZW50IiwgInJlcXVpcmVfbGliIl0KfQo=
