function Result$Err$0$(param0) {
  this._0 = param0;
}
Result$Err$0$.prototype.$tag = 0;
Result$Err$0$.prototype.$name = "Err";
function Result$Ok$0$(param0) {
  this._0 = param0;
}
Result$Ok$0$.prototype.$tag = 1;
Result$Ok$0$.prototype.$name = "Ok";
function Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$tag = 1;
Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure.prototype.$name = "moonbitlang/core/builtin.Failure.Failure";
function Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(param0) {
  this._0 = param0;
}
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$tag = 0;
Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError.prototype.$name = "moonbitlang/core/strconv.StrConvError.StrConvError";
const $9223372036854775807L = { hi: 2147483647, lo: -1 };
const $10L = { hi: 0, lo: 10 };
const $1L = { hi: 0, lo: 1 };
const $16L = { hi: 0, lo: 16 };
const $_9223372036854775808L = { hi: -2147483648, lo: 0 };
function Result$Err$1$(param0) {
  this._0 = param0;
}
Result$Err$1$.prototype.$tag = 0;
Result$Err$1$.prototype.$name = "Err";
function Result$Ok$1$(param0) {
  this._0 = param0;
}
Result$Ok$1$.prototype.$tag = 1;
Result$Ok$1$.prototype.$name = "Ok";
function Result$Err$2$(param0) {
  this._0 = param0;
}
Result$Err$2$.prototype.$tag = 0;
Result$Err$2$.prototype.$name = "Err";
function Result$Ok$2$(param0) {
  this._0 = param0;
}
Result$Ok$2$.prototype.$tag = 1;
Result$Ok$2$.prototype.$name = "Ok";
function Result$Err$3$(param0) {
  this._0 = param0;
}
Result$Err$3$.prototype.$tag = 0;
Result$Err$3$.prototype.$name = "Err";
function Result$Ok$3$(param0) {
  this._0 = param0;
}
Result$Ok$3$.prototype.$tag = 1;
Result$Ok$3$.prototype.$name = "Ok";
const $0L = { hi: 0, lo: 0 };
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function Result$Err$4$(param0) {
  this._0 = param0;
}
Result$Err$4$.prototype.$tag = 0;
Result$Err$4$.prototype.$name = "Err";
function Result$Ok$4$(param0) {
  this._0 = param0;
}
Result$Ok$4$.prototype.$tag = 1;
Result$Ok$4$.prototype.$name = "Ok";
function Result$Err$5$(param0) {
  this._0 = param0;
}
Result$Err$5$.prototype.$tag = 0;
Result$Err$5$.prototype.$name = "Err";
function Result$Ok$5$(param0) {
  this._0 = param0;
}
Result$Ok$5$.prototype.$tag = 1;
Result$Ok$5$.prototype.$name = "Ok";
function Result$Err$6$(param0) {
  this._0 = param0;
}
Result$Err$6$.prototype.$tag = 0;
Result$Err$6$.prototype.$name = "Err";
function Result$Ok$6$(param0) {
  this._0 = param0;
}
Result$Ok$6$.prototype.$tag = 1;
Result$Ok$6$.prototype.$name = "Ok";
function Result$Err$7$(param0) {
  this._0 = param0;
}
Result$Err$7$.prototype.$tag = 0;
Result$Err$7$.prototype.$name = "Err";
function Result$Ok$7$(param0) {
  this._0 = param0;
}
Result$Ok$7$.prototype.$tag = 1;
Result$Ok$7$.prototype.$name = "Ok";
function Result$Err$8$(param0) {
  this._0 = param0;
}
Result$Err$8$.prototype.$tag = 0;
Result$Err$8$.prototype.$name = "Err";
function Result$Ok$8$(param0) {
  this._0 = param0;
}
Result$Ok$8$.prototype.$tag = 1;
Result$Ok$8$.prototype.$name = "Ok";
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = b;
  }
  return arr;
}
const moonbitlang$core$builtin$$JSArray$push = (arr, val) => { arr.push(val); };
const moonbitlang$core$builtin$$get_int64_wasm_helper = function f() {   if (f._exports) return f._exports;   return f._exports = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports; };
const moonbitlang$core$builtin$$MyInt64$compare = (a, b) => {   const ahi = a.hi;   const bhi = b.hi;   if (ahi < bhi) {     return -1;   }   if (ahi > bhi) {     return 1;   }   const alo = a.lo >>> 0;   const blo = b.lo >>> 0;   if (alo < blo) {     return -1;   }   if (alo > blo) {     return 1;   }   return 0; };
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http = { $tag: 0, $name: "Http" };
const $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https = { $tag: 1, $name: "Https" };
function $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other.prototype.$name = "Other";
function Result$Err$9$(param0) {
  this._0 = param0;
}
Result$Err$9$.prototype.$tag = 0;
Result$Err$9$.prototype.$name = "Err";
function Result$Ok$9$(param0) {
  this._0 = param0;
}
Result$Ok$9$.prototype.$tag = 1;
Result$Ok$9$.prototype.$name = "Ok";
const rami3l$js$45$ffi$js$$Value$is_null = (n) => Object.is(n, null);
const Option$None$10$ = { $tag: 0, $name: "None" };
function Option$Some$10$(param0) {
  this._0 = param0;
}
Option$Some$10$.prototype.$tag = 1;
Option$Some$10$.prototype.$name = "Some";
const Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener = (target, type, listener) => target.addEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$EventTarget$remove_event_listener = (target, type, listener) => target.removeEventListener(type, listener);
const Yoorkin$rabbit$45$tea$dom$$Element$to_html_element = (x) => x instanceof HTMLElement ? x : null;
const Yoorkin$rabbit$45$tea$dom$$Element$append_children = (self, child) => self.append(child);
const Yoorkin$rabbit$45$tea$dom$$Element$set_attribute = (self,attr,value) => self.setAttribute(attr, value);
const Yoorkin$rabbit$45$tea$dom$$Element$remove_attribute = (self,attr) => self.removeAttribute(attr);
const Yoorkin$rabbit$45$tea$dom$$Element$set_property = (self,prop,value) => self[prop] = value;
const Yoorkin$rabbit$45$tea$dom$$Element$remove_property = (self,prop) => delete self[prop];
const Yoorkin$rabbit$45$tea$dom$$Element$get_property = (self,prop) => self[prop];
const Yoorkin$rabbit$45$tea$dom$$Element$set_inner_html = (self,html) => self.innerHTML = html;
const Yoorkin$rabbit$45$tea$dom$$HTMLElement$set_style = (self,key,value) => self.style[key] = value;
const Yoorkin$rabbit$45$tea$dom$$HTMLElement$remove_style = (self,key) => self.style[key] = '';
const Yoorkin$rabbit$45$tea$dom$$Event$prevent_default = (self) => self.preventDefault();
const Yoorkin$rabbit$45$tea$dom$$Event$stop_propagation = (self) => self.stopPropagation();
const Yoorkin$rabbit$45$tea$dom$$Window$current_url = (self) => { return self.location.href; };
const Yoorkin$rabbit$45$tea$dom$$window = () => window;
const Yoorkin$rabbit$45$tea$dom$$Window$to_event_target = (x) => x;
const Yoorkin$rabbit$45$tea$dom$$document = () => document;
const Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id = (doc,id) => doc.getElementById(id);
const Yoorkin$rabbit$45$tea$dom$$Document$create_element = (doc,tag) => doc.createElement(tag);
const Yoorkin$rabbit$45$tea$dom$$Document$create_text_node = (doc,str) => doc.createTextNode(str);
const Yoorkin$rabbit$45$tea$dom$$Node$to_element = (x) => x.nodeType===1 ? x : null;
const Yoorkin$rabbit$45$tea$dom$$Node$to_event_target = (x) => x;
const Yoorkin$rabbit$45$tea$dom$$Element$to_node = (x) => x;
const Yoorkin$rabbit$45$tea$dom$$Node$append_child = (p,c) => p.appendChild(c);
const Yoorkin$rabbit$45$tea$dom$$Node$remove_child = (p,c) => p.removeChild(c);
const Yoorkin$rabbit$45$tea$dom$$Node$replace_child = (p,n,o) => p.replaceChild(n,o);
const Yoorkin$rabbit$45$tea$dom$$Node$insert_before = (p,value,before) => p.insertBefore(value,before);
const Yoorkin$rabbit$45$tea$dom$$Node$nth_child = (x,i) => {     const r = x.childNodes[i];     if (r === undefined) throw new Error(`nth_child: index ${i} out of bounds, length=${x.childNodes.length}`);    return r;  };
const Yoorkin$rabbit$45$tea$dom$$Node$count_child = (x) => x.childNodes.length;
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$11$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$11$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$11$.prototype.$name = "Node";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$11$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$11$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$ExternalNode$11$.prototype.$name = "ExternalNode";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$11$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$11$.prototype.$name = "Text";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$11$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$11$.prototype.$name = "AttrEvent";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$11$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrStyle$11$.prototype.$name = "AttrStyle";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$11$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$11$.prototype.$name = "AttrString";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$11$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrProperty$11$.prototype.$name = "AttrProperty";
function $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$Internal(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$Internal.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$Internal.prototype.$name = "Internal";
function $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$External(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$External.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$External.prototype.$name = "External";
const Option$None$12$ = { $tag: 0, $name: "None" };
function Option$Some$12$(param0) {
  this._0 = param0;
}
Option$Some$12$.prototype.$tag = 1;
Option$Some$12$.prototype.$name = "Some";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$11$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$11$.prototype.$name = "AttrRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$11$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$11$.prototype.$name = "AttrAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$11$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$11$.prototype.$name = "StyleAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$11$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$11$.prototype.$name = "StyleRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$11$.prototype.$tag = 4;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$11$.prototype.$name = "PropertyAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$11$.prototype.$tag = 5;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$11$.prototype.$name = "PropertyRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$11$.prototype.$tag = 6;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$11$.prototype.$name = "EventRemove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$11$.prototype.$tag = 7;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$11$.prototype.$name = "EventAdd";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$11$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$11$.prototype.$name = "Drop";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$11$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Remove$11$.prototype.$name = "Remove";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$11$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$11$.prototype.$name = "Replace";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$11$.prototype.$tag = 3;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$InsertBefore$11$.prototype.$name = "InsertBefore";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$11$.prototype.$tag = 4;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$11$.prototype.$name = "Append";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$11$.prototype.$tag = 5;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$11$.prototype.$name = "Update";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$11$(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$11$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$11$.prototype.$name = "UpdateNode";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$11$(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$11$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$11$.prototype.$name = "UpdateText";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$11$.prototype.$tag = 0;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$11$.prototype.$name = "Normal";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$11$(param0) {
  this._0 = param0;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$11$.prototype.$tag = 1;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$HandleEvent$11$.prototype.$name = "HandleEvent";
function $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$11$(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$11$.prototype.$tag = 2;
$64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Custom$11$.prototype.$name = "Custom";
function Option$Some$13$(param0) {
  this._0 = param0;
}
Option$Some$13$.prototype.$tag = 1;
Option$Some$13$.prototype.$name = "Some";
const moonbitlang$core$strconv$$base_err_str = "invalid base";
const moonbitlang$core$strconv$$range_err_str = "value out of range";
const moonbitlang$core$strconv$$syntax_err_str = "invalid syntax";
function moonbitlang$core$strconv$$base_err$0$() {
  return new Result$Err$0$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$base_err_str));
}
function moonbitlang$core$strconv$$check_and_consume_base(view, base) {
  let rest;
  _L: {
    let rest$2;
    _L$2: {
      let rest$3;
      _L$3: {
        let rest$4;
        _L$4: {
          if (moonbitlang$core$string$$String$char_length_ge(view.str, 2, view.start, view.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char(view.str, 0, view.start, view.end));
            if (_x === 48) {
              const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(view.str, moonbitlang$core$string$$String$offset_of_nth_char(view.str, 1, view.start, view.end));
              switch (_x$2) {
                case 120: {
                  const _tmp = view.str;
                  const _bind = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                  let _tmp$2;
                  if (_bind === undefined) {
                    _tmp$2 = view.end;
                  } else {
                    const _Some = _bind;
                    _tmp$2 = _Some;
                  }
                  const _tmp$3 = _tmp$2;
                  const _x$3 = { str: _tmp, start: _tmp$3, end: view.end };
                  rest$4 = _x$3;
                  break _L$4;
                }
                case 88: {
                  const _tmp$4 = view.str;
                  const _bind$2 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                  let _tmp$5;
                  if (_bind$2 === undefined) {
                    _tmp$5 = view.end;
                  } else {
                    const _Some = _bind$2;
                    _tmp$5 = _Some;
                  }
                  const _tmp$6 = _tmp$5;
                  const _x$4 = { str: _tmp$4, start: _tmp$6, end: view.end };
                  rest$4 = _x$4;
                  break _L$4;
                }
                case 111: {
                  const _tmp$7 = view.str;
                  const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                  let _tmp$8;
                  if (_bind$3 === undefined) {
                    _tmp$8 = view.end;
                  } else {
                    const _Some = _bind$3;
                    _tmp$8 = _Some;
                  }
                  const _tmp$9 = _tmp$8;
                  const _x$5 = { str: _tmp$7, start: _tmp$9, end: view.end };
                  rest$3 = _x$5;
                  break _L$3;
                }
                case 79: {
                  const _tmp$10 = view.str;
                  const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                  let _tmp$11;
                  if (_bind$4 === undefined) {
                    _tmp$11 = view.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$11 = _Some;
                  }
                  const _tmp$12 = _tmp$11;
                  const _x$6 = { str: _tmp$10, start: _tmp$12, end: view.end };
                  rest$3 = _x$6;
                  break _L$3;
                }
                case 98: {
                  const _tmp$13 = view.str;
                  const _bind$5 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                  let _tmp$14;
                  if (_bind$5 === undefined) {
                    _tmp$14 = view.end;
                  } else {
                    const _Some = _bind$5;
                    _tmp$14 = _Some;
                  }
                  const _tmp$15 = _tmp$14;
                  const _x$7 = { str: _tmp$13, start: _tmp$15, end: view.end };
                  rest$2 = _x$7;
                  break _L$2;
                }
                case 66: {
                  const _tmp$16 = view.str;
                  const _bind$6 = moonbitlang$core$string$$String$offset_of_nth_char(view.str, 2, view.start, view.end);
                  let _tmp$17;
                  if (_bind$6 === undefined) {
                    _tmp$17 = view.end;
                  } else {
                    const _Some = _bind$6;
                    _tmp$17 = _Some;
                  }
                  const _tmp$18 = _tmp$17;
                  const _x$8 = { str: _tmp$16, start: _tmp$18, end: view.end };
                  rest$2 = _x$8;
                  break _L$2;
                }
                default: {
                  rest = view;
                  break _L;
                }
              }
            } else {
              rest = view;
              break _L;
            }
          } else {
            rest = view;
            break _L;
          }
        }
        _L$5: {
          switch (base) {
            case 0: {
              break _L$5;
            }
            case 16: {
              break _L$5;
            }
            default: {
              return moonbitlang$core$strconv$$base_err$0$();
            }
          }
        }
        return new Result$Ok$0$({ _0: 16, _1: rest$4, _2: true });
      }
      _L$4: {
        switch (base) {
          case 0: {
            break _L$4;
          }
          case 8: {
            break _L$4;
          }
          default: {
            return moonbitlang$core$strconv$$base_err$0$();
          }
        }
      }
      return new Result$Ok$0$({ _0: 8, _1: rest$3, _2: true });
    }
    _L$3: {
      switch (base) {
        case 0: {
          break _L$3;
        }
        case 2: {
          break _L$3;
        }
        default: {
          return moonbitlang$core$strconv$$base_err$0$();
        }
      }
    }
    return new Result$Ok$0$({ _0: 2, _1: rest$2, _2: true });
  }
  return base === 0 ? new Result$Ok$0$({ _0: 10, _1: rest, _2: false }) : base >= 2 && base <= 36 ? new Result$Ok$0$({ _0: base, _1: rest, _2: false }) : moonbitlang$core$strconv$$base_err$0$();
}
function moonbitlang$core$strconv$$overflow_threshold(base, neg) {
  return !neg ? (base === 10 ? moonbitlang$core$builtin$$Add$op_add$1$(moonbitlang$core$builtin$$Div$op_div$1$($9223372036854775807L, $10L), $1L) : base === 16 ? moonbitlang$core$builtin$$Add$op_add$1$(moonbitlang$core$builtin$$Div$op_div$1$($9223372036854775807L, $16L), $1L) : moonbitlang$core$builtin$$Add$op_add$1$(moonbitlang$core$builtin$$Div$op_div$1$($9223372036854775807L, moonbitlang$core$int$$Int$to_int64(base)), $1L)) : base === 10 ? moonbitlang$core$builtin$$Div$op_div$1$($_9223372036854775808L, $10L) : base === 16 ? moonbitlang$core$builtin$$Div$op_div$1$($_9223372036854775808L, $16L) : moonbitlang$core$builtin$$Div$op_div$1$($_9223372036854775808L, moonbitlang$core$int$$Int$to_int64(base));
}
function moonbitlang$core$strconv$$range_err$2$() {
  return new Result$Err$1$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$range_err$1$() {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$range_err_str));
}
function moonbitlang$core$strconv$$syntax_err$3$() {
  return new Result$Err$3$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$syntax_err$1$() {
  return new Result$Err$2$(new Error$moonbitlang$47$core$47$strconv$46$StrConvError$46$StrConvError(moonbitlang$core$strconv$$syntax_err_str));
}
function moonbitlang$core$strconv$$parse_int64(str, base) {
  if (moonbitlang$core$builtin$$op_notequal$4$(str, "")) {
    let _bind;
    let rest;
    _L: {
      _L$2: {
        const _arg = moonbitlang$core$string$$String$view$46$start_offset$46$default();
        const _arg$2 = moonbitlang$core$string$$String$view$46$end_offset$46$default(str);
        const _bind$2 = moonbitlang$core$string$$String$view(str, _arg, _arg$2);
        if (moonbitlang$core$string$$String$char_length_ge(_bind$2.str, 1, _bind$2.start, _bind$2.end)) {
          const _x = moonbitlang$core$string$$String$unsafe_char_at(_bind$2.str, moonbitlang$core$string$$String$offset_of_nth_char(_bind$2.str, 0, _bind$2.start, _bind$2.end));
          switch (_x) {
            case 43: {
              const _tmp = _bind$2.str;
              const _bind$3 = moonbitlang$core$string$$String$offset_of_nth_char(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$2;
              if (_bind$3 === undefined) {
                _tmp$2 = _bind$2.end;
              } else {
                const _Some = _bind$3;
                _tmp$2 = _Some;
              }
              const _tmp$3 = _tmp$2;
              const _x$2 = { str: _tmp, start: _tmp$3, end: _bind$2.end };
              _bind = { _0: false, _1: _x$2 };
              break;
            }
            case 45: {
              const _tmp$4 = _bind$2.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_bind$2.str, 1, _bind$2.start, _bind$2.end);
              let _tmp$5;
              if (_bind$4 === undefined) {
                _tmp$5 = _bind$2.end;
              } else {
                const _Some = _bind$4;
                _tmp$5 = _Some;
              }
              const _tmp$6 = _tmp$5;
              const _x$3 = { str: _tmp$4, start: _tmp$6, end: _bind$2.end };
              _bind = { _0: true, _1: _x$3 };
              break;
            }
            default: {
              rest = _bind$2;
              break _L$2;
            }
          }
        } else {
          rest = _bind$2;
          break _L$2;
        }
        break _L;
      }
      _bind = { _0: false, _1: rest };
    }
    const _neg = _bind._0;
    const _rest = _bind._1;
    const _bind$2 = moonbitlang$core$strconv$$check_and_consume_base(_rest, base);
    let _bind$3;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _bind$3 = _ok._0;
    } else {
      return _bind$2;
    }
    const _num_base = _bind$3._0;
    const _rest$2 = _bind$3._1;
    const _allow_underscore = _bind$3._2;
    const overflow_threshold = moonbitlang$core$strconv$$overflow_threshold(_num_base, _neg);
    let has_digit;
    if (moonbitlang$core$string$$String$char_length_ge(_rest$2.str, 1, _rest$2.start, _rest$2.end)) {
      const _x = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char(_rest$2.str, 0, _rest$2.start, _rest$2.end));
      if (_x >= 48 && _x <= 57) {
        has_digit = true;
      } else {
        if (_x >= 97 && _x <= 122) {
          has_digit = true;
        } else {
          if (_x >= 65 && _x <= 90) {
            has_digit = true;
          } else {
            if (moonbitlang$core$string$$String$char_length_ge(_rest$2.str, 2, _rest$2.start, _rest$2.end)) {
              if (_x === 95) {
                const _x$2 = moonbitlang$core$string$$String$unsafe_char_at(_rest$2.str, moonbitlang$core$string$$String$offset_of_nth_char(_rest$2.str, 1, _rest$2.start, _rest$2.end));
                has_digit = _x$2 >= 48 && _x$2 <= 57 ? true : _x$2 >= 97 && _x$2 <= 122 ? true : _x$2 >= 65 && _x$2 <= 90;
              } else {
                has_digit = false;
              }
            } else {
              has_digit = false;
            }
          }
        }
      }
    } else {
      has_digit = false;
    }
    if (has_digit) {
      let _tmp;
      let _tmp$2 = _rest$2;
      let _tmp$3 = $0L;
      let _tmp$4 = _allow_underscore;
      while (true) {
        const _param = _tmp$2;
        const _param$2 = _tmp$3;
        const _param$3 = _tmp$4;
        let acc;
        let rest$2;
        let c;
        _L$2: {
          if (moonbitlang$core$string$$String$char_length_eq(_param.str, 1, _param.start, _param.end)) {
            const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 0, _param.start, _param.end));
            if (_x === 95) {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$1$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            } else {
              const _tmp$5 = _param.str;
              const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
              let _tmp$6;
              if (_bind$4 === undefined) {
                _tmp$6 = _param.end;
              } else {
                const _Some = _bind$4;
                _tmp$6 = _Some;
              }
              const _tmp$7 = _tmp$6;
              const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param.end };
              acc = _param$2;
              rest$2 = _x$2;
              c = _x;
              break _L$2;
            }
          } else {
            if (moonbitlang$core$string$$String$char_length_ge(_param.str, 1, _param.start, _param.end)) {
              const _x = moonbitlang$core$string$$String$unsafe_char_at(_param.str, moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 0, _param.start, _param.end));
              if (_x === 95) {
                if (_param$3 === false) {
                  const _bind$4 = moonbitlang$core$strconv$$syntax_err$1$();
                  if (_bind$4.$tag === 1) {
                    const _ok = _bind$4;
                    _tmp = _ok._0;
                    break;
                  } else {
                    return _bind$4;
                  }
                } else {
                  const _tmp$5 = _param.str;
                  const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
                  let _tmp$6;
                  if (_bind$4 === undefined) {
                    _tmp$6 = _param.end;
                  } else {
                    const _Some = _bind$4;
                    _tmp$6 = _Some;
                  }
                  const _tmp$7 = _tmp$6;
                  const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param.end };
                  _tmp$2 = _x$2;
                  _tmp$4 = false;
                  continue;
                }
              } else {
                const _tmp$5 = _param.str;
                const _bind$4 = moonbitlang$core$string$$String$offset_of_nth_char(_param.str, 1, _param.start, _param.end);
                let _tmp$6;
                if (_bind$4 === undefined) {
                  _tmp$6 = _param.end;
                } else {
                  const _Some = _bind$4;
                  _tmp$6 = _Some;
                }
                const _tmp$7 = _tmp$6;
                const _x$2 = { str: _tmp$5, start: _tmp$7, end: _param.end };
                acc = _param$2;
                rest$2 = _x$2;
                c = _x;
                break _L$2;
              }
            } else {
              _tmp = _param$2;
              break;
            }
          }
        }
        const c$2 = c;
        let d;
        if (c$2 >= 48 && c$2 <= 57) {
          d = c$2 - 48 | 0;
        } else {
          if (c$2 >= 97 && c$2 <= 122) {
            d = c$2 + -87 | 0;
          } else {
            if (c$2 >= 65 && c$2 <= 90) {
              d = c$2 + -55 | 0;
            } else {
              const _bind$4 = moonbitlang$core$strconv$$syntax_err$3$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                d = _ok._0;
              } else {
                return _bind$4;
              }
            }
          }
        }
        if (d < _num_base) {
          if (_neg) {
            if (moonbitlang$core$builtin$$op_ge$1$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Sub$op_sub$1$(moonbitlang$core$builtin$$Mul$op_mul$1$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_le$1$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$1$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$1$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          } else {
            if (moonbitlang$core$builtin$$op_lt$1$(acc, overflow_threshold)) {
              const next_acc = moonbitlang$core$builtin$$Add$op_add$1$(moonbitlang$core$builtin$$Mul$op_mul$1$(acc, moonbitlang$core$int$$Int$to_int64(_num_base)), moonbitlang$core$int$$Int$to_int64(d));
              if (moonbitlang$core$builtin$$op_ge$1$(next_acc, acc)) {
                _tmp$2 = rest$2;
                _tmp$3 = next_acc;
                _tmp$4 = true;
                continue;
              } else {
                const _bind$4 = moonbitlang$core$strconv$$range_err$1$();
                if (_bind$4.$tag === 1) {
                  const _ok = _bind$4;
                  _tmp = _ok._0;
                  break;
                } else {
                  return _bind$4;
                }
              }
            } else {
              const _bind$4 = moonbitlang$core$strconv$$range_err$1$();
              if (_bind$4.$tag === 1) {
                const _ok = _bind$4;
                _tmp = _ok._0;
                break;
              } else {
                return _bind$4;
              }
            }
          }
        } else {
          const _bind$4 = moonbitlang$core$strconv$$syntax_err$1$();
          if (_bind$4.$tag === 1) {
            const _ok = _bind$4;
            _tmp = _ok._0;
            break;
          } else {
            return _bind$4;
          }
        }
      }
      return new Result$Ok$2$(_tmp);
    } else {
      return moonbitlang$core$strconv$$syntax_err$1$();
    }
  } else {
    return moonbitlang$core$strconv$$syntax_err$1$();
  }
}
function moonbitlang$core$strconv$$parse_int(str, base) {
  const _bind = moonbitlang$core$strconv$$parse_int64(str, base);
  let n;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    n = _ok._0;
  } else {
    return _bind;
  }
  if (moonbitlang$core$builtin$$op_lt$1$(n, moonbitlang$core$int$$Int$to_int64(-2147483648)) || moonbitlang$core$builtin$$op_gt$1$(n, moonbitlang$core$int$$Int$to_int64(2147483647))) {
    const _bind$2 = moonbitlang$core$strconv$$range_err$2$();
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _ok._0;
    } else {
      return _bind$2;
    }
  }
  return new Result$Ok$3$(moonbitlang$core$int64$$Int64$to_int(n));
}
function moonbitlang$core$strconv$$parse_int$46$base$46$default() {
  return 0;
}
function moonbitlang$core$string$$StringView$len(self) {
  return self.end - self.start | 0;
}
function moonbitlang$core$string$$String$view(self, start_offset, end_offset) {
  return start_offset >= 0 && (start_offset <= end_offset && end_offset <= self.length) ? { str: self, start: start_offset, end: end_offset } : moonbitlang$core$builtin$$abort$5$("Invalid index for View");
}
function moonbitlang$core$string$$String$view$46$start_offset$46$default() {
  return 0;
}
function moonbitlang$core$string$$String$view$46$end_offset$46$default(self) {
  return self.length;
}
function moonbitlang$core$string$$is_trailing_surrogate(c) {
  return 56320 <= c && c <= 57343;
}
function moonbitlang$core$string$$String$offset_of_nth_char_backward(self, n, start_offset, end_offset) {
  let char_count = 0;
  let utf16_offset = end_offset;
  while (true) {
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const _tmp = utf16_offset - 1 | 0;
      const c = self.charCodeAt(_tmp);
      if (moonbitlang$core$string$$is_trailing_surrogate(c)) {
        utf16_offset = utf16_offset - 2 | 0;
      } else {
        utf16_offset = utf16_offset - 1 | 0;
      }
      char_count = char_count + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
}
function moonbitlang$core$string$$is_leading_surrogate(c) {
  return 55296 <= c && c <= 56319;
}
function moonbitlang$core$string$$String$offset_of_nth_char_forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let utf16_offset = start_offset;
    let char_count = 0;
    while (true) {
      if (utf16_offset < end_offset && char_count < n) {
        const _tmp = utf16_offset;
        const c = self.charCodeAt(_tmp);
        if (moonbitlang$core$string$$is_leading_surrogate(c)) {
          utf16_offset = utf16_offset + 2 | 0;
        } else {
          utf16_offset = utf16_offset + 1 | 0;
        }
        char_count = char_count + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
  } else {
    return moonbitlang$core$builtin$$abort$6$("Invalid start index");
  }
}
function moonbitlang$core$string$$String$offset_of_nth_char(self, i, start_offset, end_offset) {
  return i >= 0 ? moonbitlang$core$string$$String$offset_of_nth_char_forward(self, i, start_offset, end_offset) : moonbitlang$core$string$$String$offset_of_nth_char_backward(self, -i, start_offset, end_offset);
}
function moonbitlang$core$string$$StringView$unsafe_charcode_at(self, index) {
  const _tmp = self.str;
  const _tmp$2 = self.start + index | 0;
  return _tmp.charCodeAt(_tmp$2);
}
function moonbitlang$core$string$$String$char_length_eq(self, len, start_offset, end_offset) {
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
          const _tmp$4 = index + 2 | 0;
          const _tmp$5 = count + 1 | 0;
          _tmp = _tmp$4;
          _tmp$2 = _tmp$5;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = count + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return count === len && index === end_offset;
    }
  }
}
function moonbitlang$core$string$$String$char_length_ge(self, len, start_offset, end_offset) {
  let _tmp = start_offset;
  let _tmp$2 = 0;
  while (true) {
    const index = _tmp;
    const count = _tmp$2;
    if (index < end_offset && count < len) {
      const c1 = self.charCodeAt(index);
      if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < end_offset) {
        const _tmp$3 = index + 1 | 0;
        const c2 = self.charCodeAt(_tmp$3);
        if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
          const _tmp$4 = index + 2 | 0;
          const _tmp$5 = count + 1 | 0;
          _tmp = _tmp$4;
          _tmp$2 = _tmp$5;
          continue;
        } else {
          moonbitlang$core$builtin$$abort$2$("invalid surrogate pair");
        }
      }
      const _tmp$3 = index + 1 | 0;
      const _tmp$4 = count + 1 | 0;
      _tmp = _tmp$3;
      _tmp$2 = _tmp$4;
      continue;
    } else {
      return count >= len;
    }
  }
}
function moonbitlang$core$string$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$concat(strings, separator) {
  if (strings.length === 0) {
    return "";
  } else {
    const _hd = strings[0];
    const _x = moonbitlang$core$array$$Array$op_as_view$4$(strings, 1, strings.length - 0 | 0);
    let size_hint = _hd.length;
    const _len = moonbitlang$core$array$$ArrayView$length$4$(_x);
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const s = _x.buf[_x.start + _i | 0];
        size_hint = size_hint + (s.length + separator.length | 0) | 0;
        _tmp = _i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    size_hint = size_hint << 1;
    const buf = moonbitlang$core$builtin$$StringBuilder$new(size_hint);
    moonbitlang$core$builtin$$Logger$write_string$7$(buf, _hd);
    if (separator === "") {
      const _len$2 = moonbitlang$core$array$$ArrayView$length$4$(_x);
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _x.buf[_x.start + _i | 0];
          moonbitlang$core$builtin$$Logger$write_string$7$(buf, s);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _len$2 = moonbitlang$core$array$$ArrayView$length$4$(_x);
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const s = _x.buf[_x.start + _i | 0];
          moonbitlang$core$builtin$$Logger$write_string$7$(buf, separator);
          moonbitlang$core$builtin$$Logger$write_string$7$(buf, s);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
  }
}
function moonbitlang$core$string$$String$iter(self) {
  return moonbitlang$core$builtin$$Iter$new$8$((yield_) => {
    const len = self.length;
    let _tmp = 0;
    while (true) {
      const index = _tmp;
      if (index < len) {
        const c1 = self.charCodeAt(index);
        if (moonbitlang$core$string$$is_leading_surrogate(c1) && (index + 1 | 0) < len) {
          const _tmp$2 = index + 1 | 0;
          const c2 = self.charCodeAt(_tmp$2);
          if (moonbitlang$core$string$$is_trailing_surrogate(c2)) {
            const c = moonbitlang$core$string$$code_point_of_surrogate_pair(c1, c2);
            const _bind = yield_(c);
            if (_bind === 1) {
              _tmp = index + 2 | 0;
              continue;
            } else {
              return 0;
            }
          }
        }
        const _bind = yield_(c1);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = index + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$string$$String$is_empty(self) {
  return self === "";
}
function moonbitlang$core$string$$StringView$find(self, str) {
  const len = moonbitlang$core$string$$StringView$len(self);
  const sub_len = moonbitlang$core$string$$StringView$len(str);
  if (sub_len > 0) {
    if (sub_len <= len) {
      const max_idx = len - sub_len | 0;
      const first = moonbitlang$core$string$$StringView$unsafe_charcode_at(str, 0);
      let i = 0;
      while (true) {
        if (i <= max_idx) {
          while (true) {
            if (i < len && moonbitlang$core$string$$StringView$unsafe_charcode_at(self, i) !== first) {
              i = i + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          if (i <= max_idx) {
            let _tmp = 1;
            while (true) {
              const j = _tmp;
              if (j < sub_len) {
                if (moonbitlang$core$string$$StringView$unsafe_charcode_at(self, i + j | 0) !== moonbitlang$core$string$$StringView$unsafe_charcode_at(str, j)) {
                  break;
                }
                _tmp = j + 1 | 0;
                continue;
              } else {
                return i;
              }
            }
          }
          i = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return undefined;
    } else {
      return undefined;
    }
  } else {
    return 0;
  }
}
function moonbitlang$core$string$$String$split(self, separator) {
  const len = self.length;
  const sep_len = separator.length;
  if (sep_len === 0) {
    const _bind = moonbitlang$core$string$$String$iter(self);
    return (_p) => _bind((_p$2) => _p(String.fromCodePoint(_p$2)));
  }
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    let start = 0;
    while (true) {
      if (start < len) {
        const _arg = start;
        const _arg$2 = moonbitlang$core$string$$String$view$46$end_offset$46$default(self);
        const _tmp = moonbitlang$core$string$$String$view(self, _arg, _arg$2);
        const _arg$3 = moonbitlang$core$string$$String$view$46$start_offset$46$default();
        const _arg$4 = moonbitlang$core$string$$String$view$46$end_offset$46$default(separator);
        const _bind = moonbitlang$core$string$$StringView$find(_tmp, moonbitlang$core$string$$String$view(separator, _arg$3, _arg$4));
        if (_bind === undefined) {
          if (moonbitlang$core$builtin$$Eq$op_equal$9$(yield_(moonbitlang$core$string$$String$substring(self, start, undefined)), 0)) {
            return 0;
          }
          return 1;
        } else {
          const _Some = _bind;
          const _end = _Some;
          const end = start + _end | 0;
          if (moonbitlang$core$builtin$$Eq$op_equal$9$(yield_(moonbitlang$core$string$$String$substring(self, start, end)), 0)) {
            return 0;
          }
          start = end + sep_len | 0;
        }
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$string$$String$concat(self, separator) {
  return moonbitlang$core$string$$concat(self, separator);
}
function moonbitlang$core$array$$ArrayView$iter$4$(self) {
  return moonbitlang$core$builtin$$Iter$new$4$((yield_) => {
    const _len = moonbitlang$core$array$$ArrayView$length$4$(self);
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self.buf[self.start + _i | 0];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$array$$Array$makei$10$(length, value) {
  if (length <= 0) {
    return [];
  } else {
    const array = moonbitlang$core$array$$Array$make$10$(length, value(0));
    let _tmp = 1;
    while (true) {
      const i = _tmp;
      if (i < length) {
        moonbitlang$core$array$$Array$op_set$10$(array, i, value(i));
        _tmp = i + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return array;
  }
}
function moonbitlang$core$array$$ArrayView$map$11$(self, f) {
  if (moonbitlang$core$array$$ArrayView$length$10$(self) === 0) {
    return [];
  }
  return moonbitlang$core$array$$Array$makei$10$(moonbitlang$core$array$$ArrayView$length$10$(self), (i) => f(moonbitlang$core$array$$ArrayView$op_get$10$(self, i)));
}
function moonbitlang$core$array$$Array$push_iter$12$(self, iter) {
  iter((x) => {
    moonbitlang$core$array$$Array$push$12$(self, x);
    return 1;
  });
}
function moonbitlang$core$math$$maximum$3$(x, y) {
  return x > y ? x : y;
}
function moonbitlang$core$option$$Option$map$13$(self, f) {
  if (self === undefined) {
    return undefined;
  } else {
    const _Some = self;
    const _t = _Some;
    return f(_t);
  }
}
function moonbitlang$core$builtin$$Eq$op_equal$9$(_x_2446, _x_2447) {
  if (_x_2446 === 0) {
    if (_x_2447 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (_x_2447 === 1) {
      return true;
    } else {
      return false;
    }
  }
}
function moonbitlang$core$builtin$$abort$14$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$15$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$3$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$5$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$2$(msg) {
  $panic();
}
function moonbitlang$core$builtin$$abort$10$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$abort$6$(msg) {
  return $panic();
}
function moonbitlang$core$builtin$$rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function moonbitlang$core$builtin$$StringBuilder$new(size_hint) {
  return { val: "" };
}
function moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$StringBuilder$to_string(self) {
  return self.val;
}
function moonbitlang$core$builtin$$fail$16$(msg, loc) {
  return new Result$Err$4$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${moonbitlang$core$builtin$$Show$to_string$17$(loc)} ${moonbitlang$core$builtin$$Show$to_string$4$(msg)}`));
}
function moonbitlang$core$builtin$$fail$18$(msg, loc) {
  return new Result$Err$5$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${moonbitlang$core$builtin$$Show$to_string$17$(loc)} ${moonbitlang$core$builtin$$Show$to_string$4$(msg)}`));
}
function moonbitlang$core$builtin$$fail$19$(msg, loc) {
  return new Result$Err$6$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${moonbitlang$core$builtin$$Show$to_string$17$(loc)} ${moonbitlang$core$builtin$$Show$to_string$4$(msg)}`));
}
function moonbitlang$core$builtin$$fail$20$(msg, loc) {
  return new Result$Err$7$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${moonbitlang$core$builtin$$Show$to_string$17$(loc)} ${moonbitlang$core$builtin$$Show$to_string$4$(msg)}`));
}
function moonbitlang$core$builtin$$fail$21$(msg, loc) {
  return new Result$Err$8$(new Error$moonbitlang$47$core$47$builtin$46$Failure$46$Failure(`FAILED: ${moonbitlang$core$builtin$$Show$to_string$17$(loc)} ${moonbitlang$core$builtin$$Show$to_string$4$(msg)}`));
}
function moonbitlang$core$builtin$$op_notequal$4$(x, y) {
  return !(x === y);
}
function moonbitlang$core$builtin$$op_lt$1$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$1$(self_, other) < 0;
}
function moonbitlang$core$builtin$$Logger$write_char$7$(self, ch) {
  const _bind = self;
  _bind.val = `${_bind.val}${String.fromCodePoint(ch)}`;
}
function moonbitlang$core$builtin$$op_gt$1$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$1$(self_, other) > 0;
}
function moonbitlang$core$builtin$$op_le$1$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$1$(self_, other) <= 0;
}
function moonbitlang$core$builtin$$is_leading_surrogate(c) {
  return 55296 <= c && c <= 56319;
}
function moonbitlang$core$builtin$$op_ge$1$(self_, other) {
  return moonbitlang$core$builtin$$Compare$compare$1$(self_, other) >= 0;
}
function moonbitlang$core$builtin$$code_point_of_surrogate_pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function moonbitlang$core$string$$String$unsafe_char_at(self, index) {
  const c1 = self.charCodeAt(index);
  if (moonbitlang$core$builtin$$is_leading_surrogate(c1)) {
    const _tmp = index + 1 | 0;
    const c2 = self.charCodeAt(_tmp);
    return moonbitlang$core$builtin$$code_point_of_surrogate_pair(c1, c2);
  } else {
    return c1;
  }
}
function moonbitlang$core$builtin$$Logger$write_string$7$(self, str) {
  const _bind = self;
  _bind.val = `${_bind.val}${str}`;
}
function moonbitlang$core$builtin$$MyInt64$from_int(value) {
  return { hi: value >> 31 & -1, lo: value | 0 };
}
function moonbitlang$core$int$$Int$to_int64(self) {
  return moonbitlang$core$builtin$$MyInt64$from_int(self);
}
function moonbitlang$core$builtin$$MyInt64$to_int(self) {
  return self.lo;
}
function moonbitlang$core$int64$$Int64$to_int(self) {
  return moonbitlang$core$builtin$$MyInt64$to_int(self);
}
function moonbitlang$core$builtin$$output$46$abs$124$2187(n) {
  return n < 0 ? 0 - n | 0 : n;
}
function moonbitlang$core$builtin$$output$46$write_digits$124$2189(_env, num) {
  const logger = _env._1;
  const radix = _env._0;
  const num2 = num / radix | 0;
  if (num2 !== 0) {
    moonbitlang$core$builtin$$output$46$write_digits$124$2189(_env, num2);
  }
  const _tmp = moonbitlang$core$builtin$$output$46$abs$124$2187(num % radix | 0);
  $bound_check("0123456789abcdefghijklmnopqrstuvwxyz", _tmp);
  logger.method_2(logger.self, "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(_tmp));
}
function moonbitlang$core$int$$Int$output(self, logger, radix) {
  if (self < 0) {
    logger.method_2(logger.self, 45);
  }
  const _env = { _0: radix, _1: logger };
  moonbitlang$core$builtin$$output$46$write_digits$124$2189(_env, moonbitlang$core$builtin$$output$46$abs$124$2187(self));
}
function moonbitlang$core$int$$Int$output_size_hint(radix) {
  return radix >= 2 && radix < 7 ? 36 : radix >= 8 && radix < 15 ? 18 : radix >= 16 && radix <= 36 ? 10 : moonbitlang$core$builtin$$abort$3$("radix must be between 2 and 36");
}
function moonbitlang$core$builtin$$Show$output$22$(self, logger) {
  logger.method_0(logger.self, self);
}
function moonbitlang$core$string$$String$substring(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  return start >= 0 && (start <= end$2 && end$2 <= len) ? self.substring(start, end$2) : $panic();
}
function moonbitlang$core$builtin$$Logger$write_substring$7$(self, str, start, len) {
  const _bind = self;
  _bind.val = `${_bind.val}${moonbitlang$core$string$$String$substring(str, start, start + len | 0)}`;
}
function moonbitlang$core$builtin$$Hasher$combine$4$(self, value) {
  moonbitlang$core$builtin$$Hash$hash_combine$4$(value, self);
}
function moonbitlang$core$builtin$$power_2_above(x, n) {
  let _tmp = x;
  while (true) {
    const i = _tmp;
    if (i >= n) {
      return i;
    }
    const next = i << 1;
    if (next < 0) {
      return i;
    }
    _tmp = next;
    continue;
  }
}
function moonbitlang$core$builtin$$calc_grow_threshold(capacity) {
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function moonbitlang$core$builtin$$Map$new$23$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined });
  const _bind$5 = undefined;
  const _bind$6 = undefined;
  return { entries: _bind$3, list: _bind$4, size: 0, capacity: capacity$2, capacity_mask: _bind, growAt: _bind$2, head: _bind$5, tail: _bind$6 };
}
function moonbitlang$core$builtin$$Map$new$24$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined });
  const _bind$5 = undefined;
  const _bind$6 = undefined;
  return { entries: _bind$3, list: _bind$4, size: 0, capacity: capacity$2, capacity_mask: _bind, growAt: _bind$2, head: _bind$5, tail: _bind$6 };
}
function moonbitlang$core$builtin$$Map$new$25$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined });
  const _bind$5 = undefined;
  const _bind$6 = undefined;
  return { entries: _bind$3, list: _bind$4, size: 0, capacity: capacity$2, capacity_mask: _bind, growAt: _bind$2, head: _bind$5, tail: _bind$6 };
}
function moonbitlang$core$builtin$$Map$new$26$(capacity) {
  const capacity$2 = moonbitlang$core$builtin$$power_2_above(8, capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = moonbitlang$core$builtin$$calc_grow_threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = $make_array_len_and_init(capacity$2, { prev: undefined, next: undefined });
  const _bind$5 = undefined;
  const _bind$6 = undefined;
  return { entries: _bind$3, list: _bind$4, size: 0, capacity: capacity$2, capacity_mask: _bind, growAt: _bind$2, head: _bind$5, tail: _bind$6 };
}
function moonbitlang$core$array$$Array$each$27$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$28$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$19$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$29$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$20$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$array$$Array$each$30$(self, f) {
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$23$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _tail = _Some;
    const _tmp = self.list;
    const _tmp$2 = _tail.idx;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2].next = entry;
    const _tmp$3 = self.list;
    const _tmp$4 = entry.idx;
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4].prev = _tail;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$24$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _tail = _Some;
    const _tmp = self.list;
    const _tmp$2 = _tail.idx;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2].next = entry;
    const _tmp$3 = self.list;
    const _tmp$4 = entry.idx;
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4].prev = _tail;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$25$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _tail = _Some;
    const _tmp = self.list;
    const _tmp$2 = _tail.idx;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2].next = entry;
    const _tmp$3 = self.list;
    const _tmp$4 = entry.idx;
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4].prev = _tail;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$add_entry_to_tail$26$(self, entry) {
  const _bind = self.tail;
  if (_bind === undefined) {
    self.head = entry;
    self.tail = entry;
    return;
  } else {
    const _Some = _bind;
    const _tail = _Some;
    const _tmp = self.list;
    const _tmp$2 = _tail.idx;
    $bound_check(_tmp, _tmp$2);
    _tmp[_tmp$2].next = entry;
    const _tmp$3 = self.list;
    const _tmp$4 = entry.idx;
    $bound_check(_tmp$3, _tmp$4);
    _tmp$3[_tmp$4].prev = _tail;
    self.tail = entry;
    return;
  }
}
function moonbitlang$core$builtin$$Map$set$23$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$23$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$31$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, _param$2);
    const _bind = _tmp$5[_param$2];
    if (_bind === undefined) {
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, _param$2);
      _tmp$6[_param$2] = _param$3;
      const _tmp$7 = self.list;
      $bound_check(_tmp$7, _param$2);
      _tmp$7[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$23$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      const _tmp$6 = self.list;
      const _tmp$7 = _curr_entry.idx;
      $bound_check(_tmp$6, _tmp$7);
      const curr_node = _tmp$6[_tmp$7];
      if (_curr_entry.hash === _param$3.hash && _curr_entry.key === _param$3.key) {
        _curr_entry.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _curr_entry.psl) {
        const _tmp$8 = self.entries;
        $bound_check(_tmp$8, _param$2);
        _tmp$8[_param$2] = _param$3;
        const _tmp$9 = self.list;
        $bound_check(_tmp$9, _param$2);
        _tmp$9[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _curr_entry.psl = _curr_entry.psl + 1 | 0;
        const _tmp$10 = _param + 1 | 0;
        const _tmp$11 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$10;
        _tmp$2 = _tmp$11;
        _tmp$3 = _curr_entry;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$8 = _param + 1 | 0;
        const _tmp$9 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$8;
        _tmp$2 = _tmp$9;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$24$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$24$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$31$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, _param$2);
    const _bind = _tmp$5[_param$2];
    if (_bind === undefined) {
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, _param$2);
      _tmp$6[_param$2] = _param$3;
      const _tmp$7 = self.list;
      $bound_check(_tmp$7, _param$2);
      _tmp$7[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$24$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      const _tmp$6 = self.list;
      const _tmp$7 = _curr_entry.idx;
      $bound_check(_tmp$6, _tmp$7);
      const curr_node = _tmp$6[_tmp$7];
      if (_curr_entry.hash === _param$3.hash && _curr_entry.key === _param$3.key) {
        _curr_entry.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _curr_entry.psl) {
        const _tmp$8 = self.entries;
        $bound_check(_tmp$8, _param$2);
        _tmp$8[_param$2] = _param$3;
        const _tmp$9 = self.list;
        $bound_check(_tmp$9, _param$2);
        _tmp$9[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _curr_entry.psl = _curr_entry.psl + 1 | 0;
        const _tmp$10 = _param + 1 | 0;
        const _tmp$11 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$10;
        _tmp$2 = _tmp$11;
        _tmp$3 = _curr_entry;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$8 = _param + 1 | 0;
        const _tmp$9 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$8;
        _tmp$2 = _tmp$9;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$25$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$25$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$31$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, _param$2);
    const _bind = _tmp$5[_param$2];
    if (_bind === undefined) {
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, _param$2);
      _tmp$6[_param$2] = _param$3;
      const _tmp$7 = self.list;
      $bound_check(_tmp$7, _param$2);
      _tmp$7[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$25$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      const _tmp$6 = self.list;
      const _tmp$7 = _curr_entry.idx;
      $bound_check(_tmp$6, _tmp$7);
      const curr_node = _tmp$6[_tmp$7];
      if (_curr_entry.hash === _param$3.hash && _curr_entry.key === _param$3.key) {
        _curr_entry.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _curr_entry.psl) {
        const _tmp$8 = self.entries;
        $bound_check(_tmp$8, _param$2);
        _tmp$8[_param$2] = _param$3;
        const _tmp$9 = self.list;
        $bound_check(_tmp$9, _param$2);
        _tmp$9[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _curr_entry.psl = _curr_entry.psl + 1 | 0;
        const _tmp$10 = _param + 1 | 0;
        const _tmp$11 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$10;
        _tmp$2 = _tmp$11;
        _tmp$3 = _curr_entry;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$8 = _param + 1 | 0;
        const _tmp$9 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$8;
        _tmp$2 = _tmp$9;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$set$26$(self, key, value) {
  if (self.size >= self.growAt) {
    moonbitlang$core$builtin$$Map$grow$26$(self);
  }
  const hash = moonbitlang$core$builtin$$Hash$hash$31$(key);
  const insert_entry = { idx: -1, psl: 0, hash: hash, key: key, value: value };
  const list_node = { prev: undefined, next: undefined };
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  let _tmp$3 = insert_entry;
  let _tmp$4 = list_node;
  while (true) {
    const _param = _tmp;
    const _param$2 = _tmp$2;
    const _param$3 = _tmp$3;
    const _param$4 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, _param$2);
    const _bind = _tmp$5[_param$2];
    if (_bind === undefined) {
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, _param$2);
      _tmp$6[_param$2] = _param$3;
      const _tmp$7 = self.list;
      $bound_check(_tmp$7, _param$2);
      _tmp$7[_param$2] = _param$4;
      _param$3.idx = _param$2;
      moonbitlang$core$builtin$$Map$add_entry_to_tail$26$(self, insert_entry);
      self.size = self.size + 1 | 0;
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      const _tmp$6 = self.list;
      const _tmp$7 = _curr_entry.idx;
      $bound_check(_tmp$6, _tmp$7);
      const curr_node = _tmp$6[_tmp$7];
      if (_curr_entry.hash === _param$3.hash && _curr_entry.key === _param$3.key) {
        _curr_entry.value = _param$3.value;
        break;
      }
      if (_param$3.psl > _curr_entry.psl) {
        const _tmp$8 = self.entries;
        $bound_check(_tmp$8, _param$2);
        _tmp$8[_param$2] = _param$3;
        const _tmp$9 = self.list;
        $bound_check(_tmp$9, _param$2);
        _tmp$9[_param$2] = _param$4;
        _param$3.idx = _param$2;
        _curr_entry.psl = _curr_entry.psl + 1 | 0;
        const _tmp$10 = _param + 1 | 0;
        const _tmp$11 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$10;
        _tmp$2 = _tmp$11;
        _tmp$3 = _curr_entry;
        _tmp$4 = curr_node;
        continue;
      } else {
        _param$3.psl = _param$3.psl + 1 | 0;
        const _tmp$8 = _param + 1 | 0;
        const _tmp$9 = (_param$2 + 1 | 0) & self.capacity_mask;
        _tmp = _tmp$8;
        _tmp$2 = _tmp$9;
        continue;
      }
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$23$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _idx = _x.idx;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$23$(self, _key, _value);
      $bound_check(old_list, _idx);
      _tmp = old_list[_idx].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$24$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _idx = _x.idx;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$24$(self, _key, _value);
      $bound_check(old_list, _idx);
      _tmp = old_list[_idx].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$25$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _idx = _x.idx;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$25$(self, _key, _value);
      $bound_check(old_list, _idx);
      _tmp = old_list[_idx].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$grow$26$(self) {
  const old_head = self.head;
  const old_list = self.list;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.list = $make_array_len_and_init(new_capacity, { prev: undefined, next: undefined });
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.growAt = moonbitlang$core$builtin$$calc_grow_threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = undefined;
  let _tmp = old_head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _idx = _x.idx;
      const _key = _x.key;
      const _value = _x.value;
      moonbitlang$core$builtin$$Map$set$26$(self, _key, _value);
      $bound_check(old_list, _idx);
      _tmp = old_list[_idx].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$from_array$23$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$23$(arr.length);
  moonbitlang$core$array$$Array$each$19$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$23$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$24$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$24$(arr.length);
  moonbitlang$core$array$$Array$each$29$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$24$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$25$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$25$(arr.length);
  moonbitlang$core$array$$Array$each$20$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$25$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$from_array$26$(arr) {
  const m = moonbitlang$core$builtin$$Map$new$26$(arr.length);
  moonbitlang$core$array$$Array$each$30$(arr, (e) => {
    moonbitlang$core$builtin$$Map$set$26$(m, e._0, e._1);
  });
  return m;
}
function moonbitlang$core$builtin$$Map$get$26$(self, key) {
  const hash = moonbitlang$core$builtin$$Hash$hash$31$(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      const _tmp$4 = i + 1 | 0;
      const _tmp$5 = (idx + 1 | 0) & self.capacity_mask;
      _tmp = _tmp$4;
      _tmp$2 = _tmp$5;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$contains$26$(self, key) {
  const _bind = moonbitlang$core$builtin$$Map$get$26$(self, key);
  return !(_bind === undefined);
}
function moonbitlang$core$option$$Option$unwrap$32$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$33$(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some._0;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$34$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$option$$Option$unwrap$35$(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    const _x = _Some;
    return _x;
  }
}
function moonbitlang$core$builtin$$Map$each$25$(self, f) {
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _idx = _x.idx;
      f(_key, _value);
      const _tmp$2 = self.list;
      $bound_check(_tmp$2, _idx);
      _tmp = _tmp$2[_idx].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Map$each$24$(self, f) {
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      return;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _idx = _x.idx;
      f(_key, _value);
      const _tmp$2 = self.list;
      $bound_check(_tmp$2, _idx);
      _tmp = _tmp$2[_idx].next;
      continue;
    }
  }
}
function moonbitlang$core$builtin$$Iter$new$4$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$12$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$27$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter$new$8$(f) {
  return f;
}
function moonbitlang$core$builtin$$Iter2$new$26$(f) {
  return f;
}
function moonbitlang$core$builtin$$Map$iter2$26$(self) {
  return moonbitlang$core$builtin$$Iter2$new$26$((yield_) => {
    let _tmp = self.head;
    while (true) {
      const _param = _tmp;
      if (_param === undefined) {
        return 1;
      } else {
        const _Some = _param;
        const _x = _Some;
        const _key = _x.key;
        const _value = _x.value;
        const _idx = _x.idx;
        const _bind = yield_(_key, _value);
        if (_bind === 1) {
          const _tmp$2 = self.list;
          $bound_check(_tmp$2, _idx);
          _tmp = _tmp$2[_idx].next;
          continue;
        } else {
          return 0;
        }
      }
    }
  });
}
function moonbitlang$core$builtin$$Map$to_array$23$(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const _param = _tmp;
    if (_param === undefined) {
      break;
    } else {
      const _Some = _param;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _idx = _x.idx;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      const _tmp$2 = self.list;
      $bound_check(_tmp$2, _idx);
      _tmp = _tmp$2[_idx].next;
      continue;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Map$from_iter$26$(iter) {
  const m = moonbitlang$core$builtin$$Map$from_array$26$([]);
  iter((e) => {
    moonbitlang$core$builtin$$Map$set$26$(m, e._0, e._1);
    return 1;
  });
  return m;
}
function moonbitlang$core$array$$ArrayView$length$4$(self) {
  return self.len;
}
function moonbitlang$core$array$$ArrayView$length$10$(self) {
  return self.len;
}
function moonbitlang$core$array$$ArrayView$op_get$10$(self, index) {
  if (index >= 0 && index < self.len) {
    const _tmp = self.buf;
    const _tmp$2 = self.start + index | 0;
    $bound_check(_tmp, _tmp$2);
    return _tmp[_tmp$2];
  } else {
    return moonbitlang$core$builtin$$abort$10$(`index out of bounds: the len is from 0 to ${moonbitlang$core$builtin$$Show$to_string$3$(self.len)} but the index is ${moonbitlang$core$builtin$$Show$to_string$3$(index)}`);
  }
}
function moonbitlang$core$array$$Array$op_as_view$4$(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end < 0 ? len + _end | 0 : _end;
  }
  const start$2 = start < 0 ? len + start | 0 : start;
  return start$2 >= 0 && (start$2 <= end$2 && end$2 <= len) ? { buf: self, start: start$2, len: end$2 - start$2 | 0 } : moonbitlang$core$builtin$$abort$15$("View index out of bounds");
}
function moonbitlang$core$array$$Array$push$36$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$12$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$37$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$4$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$array$$Array$push$38$(self, value) {
  moonbitlang$core$builtin$$JSArray$push(self, value);
}
function moonbitlang$core$builtin$$Hasher$new(seed) {
  return { acc: (seed >>> 0) + (374761393 >>> 0) | 0 };
}
function moonbitlang$core$builtin$$Hasher$new$46$seed$46$default() {
  return 0;
}
function moonbitlang$core$builtin$$Hasher$consume4(self, input) {
  self.acc = Math.imul(moonbitlang$core$builtin$$rotl((self.acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function moonbitlang$core$builtin$$Hasher$combine_uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  moonbitlang$core$builtin$$Hasher$consume4(self, value);
}
function moonbitlang$core$builtin$$Hasher$combine_string(self, value) {
  const _end1546 = value.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _end1546) {
      moonbitlang$core$builtin$$Hasher$combine_uint(self, value.charCodeAt(i));
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function moonbitlang$core$builtin$$Hasher$avalanche(self) {
  let acc = self.acc;
  acc = acc ^ (acc >>> 15 | 0);
  acc = Math.imul(acc, -2048144777) | 0;
  acc = acc ^ (acc >>> 13 | 0);
  acc = Math.imul(acc, -1028477379) | 0;
  acc = acc ^ (acc >>> 16 | 0);
  return acc;
}
function moonbitlang$core$builtin$$Hasher$finalize(self) {
  return moonbitlang$core$builtin$$Hasher$avalanche(self);
}
function moonbitlang$core$builtin$$Hash$hash_combine$4$(self, hasher) {
  moonbitlang$core$builtin$$Hasher$combine_string(hasher, self);
}
function moonbitlang$core$int$$Int$to_string(self, radix) {
  const buf = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$int$$Int$output_size_hint(radix));
  moonbitlang$core$int$$Int$output(self, { self: buf, method_0: moonbitlang$core$builtin$$Logger$write_string$7$, method_1: moonbitlang$core$builtin$$Logger$write_substring$7$, method_2: moonbitlang$core$builtin$$Logger$write_char$7$ }, radix);
  return moonbitlang$core$builtin$$StringBuilder$to_string(buf);
}
function moonbitlang$core$int$$Int$to_string$46$radix$46$default() {
  return 10;
}
function moonbitlang$core$builtin$$Show$to_string$3$(self) {
  return moonbitlang$core$int$$Int$to_string(self, 10);
}
function moonbitlang$core$array$$Array$map$39$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$40$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$map$41$(self, f) {
  const arr = new Array(self.length);
  const _len = self.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const v = self[_i];
      arr[_i] = f(v);
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$array$$Array$make$10$(len, elem) {
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = elem;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function moonbitlang$core$builtin$$Show$to_string$4$(self) {
  return self;
}
function moonbitlang$core$array$$Array$iter$12$(self) {
  return moonbitlang$core$builtin$$Iter$new$12$((yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$array$$Array$iter$27$(self) {
  return moonbitlang$core$builtin$$Iter$new$27$((yield_) => {
    const _len = self.length;
    let _tmp = 0;
    while (true) {
      const _i = _tmp;
      if (_i < _len) {
        const v = self[_i];
        const _bind = yield_(v);
        if (_bind === 1) {
        } else {
          return 0;
        }
        _tmp = _i + 1 | 0;
        continue;
      } else {
        return 1;
      }
    }
  });
}
function moonbitlang$core$builtin$$Hash$hash$31$(self) {
  const _self = moonbitlang$core$builtin$$Hasher$new(moonbitlang$core$builtin$$Hasher$new$46$seed$46$default());
  moonbitlang$core$builtin$$Hasher$combine$4$(_self, self);
  return moonbitlang$core$builtin$$Hasher$finalize(_self);
}
function moonbitlang$core$builtin$$Show$to_string$17$(self) {
  const logger = moonbitlang$core$builtin$$StringBuilder$new(moonbitlang$core$builtin$$StringBuilder$new$46$size_hint$46$default());
  moonbitlang$core$builtin$$Show$output$22$(self, { self: logger, method_0: moonbitlang$core$builtin$$Logger$write_string$7$, method_1: moonbitlang$core$builtin$$Logger$write_substring$7$, method_2: moonbitlang$core$builtin$$Logger$write_char$7$ });
  return moonbitlang$core$builtin$$StringBuilder$to_string(logger);
}
function moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, bhi, blo) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const lo = _alo + blo | 0;
  const s = lo >> 31;
  const as_ = _alo >> 31;
  const bs = blo >> 31;
  const c = (as_ & bs | ~s & (as_ ^ bs)) & 1;
  const hi = (_ahi + bhi | 0) + c | 0;
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$op_add$42$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, other.hi, other.lo);
}
function moonbitlang$core$builtin$$Sub$op_sub$42$(self, other) {
  return other.lo === 0 ? { hi: self.hi - other.hi | 0, lo: self.lo } : moonbitlang$core$builtin$$MyInt64$add_hi_lo(self, ~other.hi, ~other.lo + 1 | 0);
}
function moonbitlang$core$builtin$$Mul$op_mul$42$(self, other) {
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const ahi = _ahi;
  const alo = _alo;
  const bhi = _bhi;
  const blo = _blo;
  const a48 = ahi >>> 16 | 0;
  const a32 = ahi & 65535;
  const a16 = alo >>> 16 | 0;
  const a00 = alo & 65535;
  const b48 = bhi >>> 16 | 0;
  const b32 = bhi & 65535;
  const b16 = blo >>> 16 | 0;
  const b00 = blo & 65535;
  const c00 = Math.imul(a00, b00) | 0;
  const c16 = c00 >>> 16 | 0;
  const c00$2 = c00 & 65535;
  const c16$2 = (c16 >>> 0) + ((Math.imul(a16, b00) | 0) >>> 0) | 0;
  const c32 = c16$2 >>> 16 | 0;
  const c16$3 = c16$2 & 65535;
  const c16$4 = (c16$3 >>> 0) + ((Math.imul(a00, b16) | 0) >>> 0) | 0;
  const c32$2 = (c32 >>> 0) + ((c16$4 >>> 16 | 0) >>> 0) | 0;
  const c16$5 = c16$4 & 65535;
  const c32$3 = (c32$2 >>> 0) + ((Math.imul(a32, b00) | 0) >>> 0) | 0;
  const c48 = c32$3 >>> 16 | 0;
  const c32$4 = c32$3 & 65535;
  const c32$5 = (c32$4 >>> 0) + ((Math.imul(a16, b16) | 0) >>> 0) | 0;
  const c48$2 = (c48 >>> 0) + ((c32$5 >>> 16 | 0) >>> 0) | 0;
  const c32$6 = c32$5 & 65535;
  const c32$7 = (c32$6 >>> 0) + ((Math.imul(a00, b32) | 0) >>> 0) | 0;
  const c48$3 = (c48$2 >>> 0) + ((c32$7 >>> 16 | 0) >>> 0) | 0;
  const c32$8 = c32$7 & 65535;
  const c48$4 = (((((((c48$3 >>> 0) + ((Math.imul(a48, b00) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a32, b16) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a16, b32) | 0) >>> 0) | 0) >>> 0) + ((Math.imul(a00, b48) | 0) >>> 0) | 0;
  const c48$5 = c48$4 & 65535;
  return { hi: c48$5 << 16 | c32$8, lo: c16$5 << 16 | c00$2 };
}
function moonbitlang$core$builtin$$Div$op_div$42$(self, other) {
  const exports = moonbitlang$core$builtin$$get_int64_wasm_helper();
  const _ahi = self.hi;
  const _alo = self.lo;
  const _bhi = other.hi;
  const _blo = other.lo;
  const _func = exports.div_s;
  const lo = _func(_alo, _ahi, _blo, _bhi);
  const _func$2 = exports.get_high;
  const hi = _func$2();
  return { hi: hi, lo: lo };
}
function moonbitlang$core$builtin$$Add$op_add$1$(self, other) {
  return moonbitlang$core$builtin$$Add$op_add$42$(self, other);
}
function moonbitlang$core$builtin$$Sub$op_sub$1$(self, other) {
  return moonbitlang$core$builtin$$Sub$op_sub$42$(self, other);
}
function moonbitlang$core$builtin$$Mul$op_mul$1$(self, other) {
  return moonbitlang$core$builtin$$Mul$op_mul$42$(self, other);
}
function moonbitlang$core$builtin$$Div$op_div$1$(self, other) {
  return moonbitlang$core$builtin$$Div$op_div$42$(self, other);
}
function moonbitlang$core$builtin$$Compare$compare$1$(self, other) {
  return moonbitlang$core$builtin$$MyInt64$compare(self, other);
}
function moonbitlang$core$builtin$$Eq$op_equal$43$(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function moonbitlang$core$array$$Array$op_set$10$(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function moonbitlang$core$builtin$$Iter$run$27$(self, f) {
  const _func = self;
  return _func(f);
}
function moonbitlang$core$builtin$$Iter$map$44$(self, f) {
  return (yield_) => moonbitlang$core$builtin$$Iter$run$27$(self, (a) => yield_(f(a)));
}
function moonbitlang$core$builtin$$Iter$collect$4$(self) {
  const result = [];
  self((_p) => {
    moonbitlang$core$array$$Array$push$4$(result, _p);
    return 1;
  });
  return result;
}
function moonbitlang$core$builtin$$Eq$op_equal$45$(_x_79, _x_80) {
  let _x0_81;
  let _y0_82;
  _L: {
    switch (_x_79.$tag) {
      case 0: {
        if (_x_80.$tag === 0) {
          return true;
        } else {
          return false;
        }
      }
      case 1: {
        if (_x_80.$tag === 1) {
          return true;
        } else {
          return false;
        }
      }
      default: {
        const _Other = _x_79;
        const _$42$x0_81 = _Other._0;
        if (_x_80.$tag === 2) {
          const _Other$2 = _x_80;
          const _$42$y0_82 = _Other$2._0;
          _x0_81 = _$42$x0_81;
          _y0_82 = _$42$y0_82;
          break _L;
        } else {
          return false;
        }
      }
    }
  }
  return _x0_81 === _y0_82;
}
function Yoorkin$rabbit$45$tea$url$$parse(url) {
  let protocol;
  let remain;
  _L: {
    let _bind;
    let remain$2;
    _L$2: {
      _L$3: {
        let x;
        let remain$3;
        _L$4: {
          _L$5: {
            let remain$4;
            _L$6: {
              _L$7: {
                let remain$5;
                _L$8: {
                  _L$9: {
                    const _bind$2 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$String$split(url, "://"));
                    if (_bind$2.length === 2) {
                      const _x = _bind$2[0];
                      switch (_x) {
                        case "http": {
                          const _remain = _bind$2[1];
                          remain$5 = _remain;
                          break _L$9;
                        }
                        case "https": {
                          const _remain$2 = _bind$2[1];
                          remain$4 = _remain$2;
                          break _L$7;
                        }
                        default: {
                          const _remain$3 = _bind$2[1];
                          x = _x;
                          remain$3 = _remain$3;
                          break _L$5;
                        }
                      }
                    } else {
                      if (_bind$2.length === 1) {
                        const _remain = _bind$2[0];
                        remain$2 = _remain;
                        break _L$3;
                      } else {
                        const _bind$3 = moonbitlang$core$builtin$$fail$21$("Invalid protocol", "/Users/yorkin/source/moonbit/moonbit-frontend/rabbit-reactor/test/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:56:10-56:35");
                        if (_bind$3.$tag === 1) {
                          const _ok = _bind$3;
                          _bind = _ok._0;
                        } else {
                          return _bind$3;
                        }
                      }
                    }
                    break _L$8;
                  }
                  _bind = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Http, _1: remain$5 };
                }
                break _L$6;
              }
              _bind = { _0: $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Https, _1: remain$4 };
            }
            break _L$4;
          }
          _bind = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(x), _1: remain$3 };
        }
        break _L$2;
      }
      _bind = { _0: new $64$Yoorkin$47$rabbit$45$tea$47$url$46$Protocol$Other(""), _1: remain$2 };
    }
    const _protocol = _bind._0;
    const _remain = _bind._1;
    protocol = _protocol;
    remain = _remain;
    break _L;
  }
  let mid;
  let query_and_fragment;
  _L$2: {
    let _bind;
    let mid$2;
    _L$3: {
      _L$4: {
        let mid$3;
        let remain$2;
        _L$5: {
          _L$6: {
            const _bind$2 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$String$split(remain, "?"));
            if (_bind$2.length === 2) {
              const _mid = _bind$2[0];
              const _remain = _bind$2[1];
              mid$3 = _mid;
              remain$2 = _remain;
              break _L$6;
            } else {
              if (_bind$2.length === 1) {
                const _mid = _bind$2[0];
                mid$2 = _mid;
                break _L$4;
              } else {
                const _bind$3 = moonbitlang$core$builtin$$fail$19$("Invalid host", "/Users/yorkin/source/moonbit/moonbit-frontend/rabbit-reactor/test/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:61:10-61:31");
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _bind = _ok._0;
                } else {
                  return _bind$3;
                }
              }
            }
            break _L$5;
          }
          _bind = { _0: mid$3, _1: remain$2 };
        }
        break _L$3;
      }
      _bind = { _0: mid$2, _1: "" };
    }
    const _mid = _bind._0;
    const _query_and_fragment = _bind._1;
    mid = _mid;
    query_and_fragment = _query_and_fragment;
    break _L$2;
  }
  let mid_part;
  let fragment1;
  _L$3: {
    let _bind;
    let mid$2;
    _L$4: {
      _L$5: {
        let mid$3;
        let fragment;
        _L$6: {
          _L$7: {
            const _bind$2 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$String$split(mid, "#"));
            if (_bind$2.length === 2) {
              const _mid = _bind$2[0];
              const _fragment = _bind$2[1];
              mid$3 = _mid;
              fragment = _fragment;
              break _L$7;
            } else {
              if (_bind$2.length === 1) {
                const _mid = _bind$2[0];
                mid$2 = _mid;
                break _L$5;
              } else {
                const _bind$3 = moonbitlang$core$builtin$$fail$20$("Invalid fragment", "/Users/yorkin/source/moonbit/moonbit-frontend/rabbit-reactor/test/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:66:10-66:35");
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _bind = _ok._0;
                } else {
                  return _bind$3;
                }
              }
            }
            break _L$6;
          }
          _bind = { _0: mid$3, _1: fragment };
        }
        break _L$4;
      }
      _bind = { _0: mid$2, _1: undefined };
    }
    const _mid_part = _bind._0;
    const _fragment1 = _bind._1;
    mid_part = _mid_part;
    fragment1 = _fragment1;
    break _L$3;
  }
  let mid$2;
  let path;
  _L$4: {
    let _bind;
    let paths;
    let mid$3;
    _L$5: {
      _L$6: {
        let mid$4;
        _L$7: {
          _L$8: {
            const _bind$2 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$String$split(mid_part, "/"));
            if (_bind$2.length === 1) {
              const _mid = _bind$2[0];
              mid$4 = _mid;
              break _L$8;
            } else {
              if (_bind$2.length >= 1) {
                const _mid = _bind$2[0];
                const _x = moonbitlang$core$array$$Array$op_as_view$4$(_bind$2, 1, _bind$2.length - 0 | 0);
                paths = _x;
                mid$3 = _mid;
                break _L$6;
              } else {
                const _bind$3 = moonbitlang$core$builtin$$fail$19$("Invalid host", "/Users/yorkin/source/moonbit/moonbit-frontend/rabbit-reactor/test/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:72:10-72:31");
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _bind = _ok._0;
                } else {
                  return _bind$3;
                }
              }
            }
            break _L$7;
          }
          _bind = { _0: mid$4, _1: "" };
        }
        break _L$5;
      }
      _bind = { _0: mid$3, _1: moonbitlang$core$string$$String$concat(moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$array$$ArrayView$iter$4$(paths)), "/") };
    }
    const _mid = _bind._0;
    const _path = _bind._1;
    mid$2 = _mid;
    path = _path;
    break _L$4;
  }
  let host;
  let port;
  _L$5: {
    let _bind;
    let host$2;
    _L$6: {
      _L$7: {
        let host$3;
        let port$2;
        _L$8: {
          _L$9: {
            const _bind$2 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$String$split(mid$2, ":"));
            if (_bind$2.length === 2) {
              const _host = _bind$2[0];
              const _port = _bind$2[1];
              host$3 = _host;
              port$2 = _port;
              break _L$9;
            } else {
              if (_bind$2.length === 1) {
                const _host = _bind$2[0];
                host$2 = _host;
                break _L$7;
              } else {
                const _bind$3 = moonbitlang$core$builtin$$fail$18$("Invalid host", "/Users/yorkin/source/moonbit/moonbit-frontend/rabbit-reactor/test/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:86:10-86:31");
                if (_bind$3.$tag === 1) {
                  const _ok = _bind$3;
                  _bind = _ok._0;
                } else {
                  return _bind$3;
                }
              }
            }
            break _L$8;
          }
          let port$3;
          let _try_err;
          _L$10: {
            _L$11: {
              const _bind$2 = moonbitlang$core$strconv$$parse_int(port$2, moonbitlang$core$strconv$$parse_int$46$base$46$default());
              let _bind$3;
              if (_bind$2.$tag === 1) {
                const _ok = _bind$2;
                _bind$3 = _ok._0;
              } else {
                const _err = _bind$2;
                const _tmp = _err._0;
                _try_err = _tmp;
                break _L$11;
              }
              const number = _bind$3;
              port$3 = number;
              break _L$10;
            }
            port$3 = undefined;
          }
          _bind = { _0: host$3, _1: port$3 };
        }
        break _L$6;
      }
      _bind = { _0: host$2, _1: undefined };
    }
    const _host = _bind._0;
    const _port = _bind._1;
    host = _host;
    port = _port;
    break _L$5;
  }
  let query;
  let fragment2;
  _L$6: {
    let _bind;
    let query$2;
    _L$7: {
      _L$8: {
        let query$3;
        let fragment;
        _L$9: {
          _L$10: {
            const _bind$2 = moonbitlang$core$builtin$$Iter$collect$4$(moonbitlang$core$string$$String$split(query_and_fragment, "#"));
            if (_bind$2.length === 2) {
              const _query = _bind$2[0];
              const _fragment = _bind$2[1];
              query$3 = _query;
              fragment = _fragment;
              break _L$10;
            } else {
              if (_bind$2.length === 1) {
                const _query = _bind$2[0];
                query$2 = _query;
                break _L$8;
              } else {
                if (_bind$2.length === 0) {
                  _bind = { _0: undefined, _1: undefined };
                } else {
                  const _bind$3 = moonbitlang$core$builtin$$fail$16$("Invalid query", "/Users/yorkin/source/moonbit/moonbit-frontend/rabbit-reactor/test/.mooncakes/Yoorkin/rabbit-tea/src/url/url.mbt:92:10-92:32");
                  if (_bind$3.$tag === 1) {
                    const _ok = _bind$3;
                    _bind = _ok._0;
                  } else {
                    return _bind$3;
                  }
                }
              }
            }
            break _L$9;
          }
          _bind = { _0: query$3, _1: fragment };
        }
        break _L$7;
      }
      _bind = moonbitlang$core$string$$String$is_empty(query$2) ? { _0: undefined, _1: undefined } : { _0: query$2, _1: undefined };
    }
    const _query = _bind._0;
    const _fragment2 = _bind._1;
    query = _query;
    fragment2 = _fragment2;
    break _L$6;
  }
  let fragment;
  let f;
  _L$7: {
    _L$8: {
      let f$2;
      _L$9: {
        _L$10: {
          let f1;
          let f2;
          _L$11: {
            _L$12: {
              if (fragment1 === undefined) {
                if (fragment2 === undefined) {
                  fragment = undefined;
                } else {
                  const _Some = fragment2;
                  const _f = _Some;
                  f = _f;
                  break _L$8;
                }
              } else {
                const _Some = fragment1;
                const _f1 = _Some;
                if (fragment2 === undefined) {
                  f$2 = _f1;
                  break _L$10;
                } else {
                  const _Some$2 = fragment2;
                  const _f2 = _Some$2;
                  f1 = _f1;
                  f2 = _f2;
                  break _L$12;
                }
              }
              break _L$11;
            }
            fragment = `${f1}#${f2}`;
          }
          break _L$9;
        }
        fragment = f$2;
      }
      break _L$7;
    }
    fragment = f;
  }
  return new Result$Ok$9$({ protocol: protocol, host: host, port: port, path: path, query: query, fragment: fragment });
}
function rami3l$js$45$ffi$js$$Nullable$to_option$33$(self) {
  return !rami3l$js$45$ffi$js$$Value$is_null(self) ? new Option$Some$10$(self) : Option$None$10$;
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$get_on_url_request$46$(self) {
  return self.on_url_request;
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(self, message) {
  let cmd;
  let model;
  _L: {
    const _func = self.update;
    const _bind = _func(message, self.model);
    const _cmd = _bind._0;
    const _model = _bind._1;
    cmd = _cmd;
    model = _model;
    break _L;
  }
  self.model = model;
  const _func = self.view;
  const view = _func(self.model);
  const _func$2 = self.after_update;
  _func$2(view);
  Yoorkin$rabbit$45$tea$browser$$Sandbox$launch$46$(self, cmd);
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$launch$46$(self, cmd) {
  const f = cmd;
  const update = (m) => {
    Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(self, m);
  };
  f(moonbitlang$core$option$$Option$unwrap$35$(self.predefined), update);
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$refersh$46$(self) {
  const _func = self.view;
  const view = _func(self.model);
  const _func$2 = self.after_update;
  _func$2(view);
}
function Yoorkin$rabbit$45$tea$browser$$Sandbox$new$47$(model, update, view, after_update, url_changed, url_request) {
  const sandbox = { model: model, update: update, view: view, after_update: after_update, on_url_changed: url_changed, on_url_request: url_request, predefined: undefined };
  let on_url_changed;
  let f;
  _L: {
    _L$2: {
      if (url_changed === undefined) {
        on_url_changed = (_x) => {
        };
      } else {
        const _Some = url_changed;
        const _f = _Some;
        f = _f;
        break _L$2;
      }
      break _L;
    }
    on_url_changed = (url) => {
      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, f(url));
    };
  }
  let on_url_request;
  let f$2;
  _L$2: {
    _L$3: {
      if (url_request === undefined) {
        on_url_request = (_x) => {
        };
      } else {
        const _Some = url_request;
        const _f = _Some;
        f$2 = _f;
        break _L$3;
      }
      break _L$2;
    }
    on_url_request = (url) => {
      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, f$2(url));
    };
  }
  Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener(Yoorkin$rabbit$45$tea$dom$$Window$to_event_target(Yoorkin$rabbit$45$tea$dom$$window()), "popstate", (_event) => {
    let url;
    _L$3: {
      const _bind = Yoorkin$rabbit$45$tea$url$$parse(Yoorkin$rabbit$45$tea$dom$$Window$current_url(Yoorkin$rabbit$45$tea$dom$$window()));
      if (_bind.$tag === 1) {
        const _Ok = _bind;
        const _url = _Ok._0;
        url = _url;
        break _L$3;
      } else {
        $panic();
        return;
      }
    }
    on_url_changed(url);
  });
  sandbox.predefined = { on_url_changed: on_url_changed, on_url_request: on_url_request };
  return sandbox;
}
function Yoorkin$rabbit$45$tea$browser$$none$48$() {
  return (_param1, _param2) => {
  };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$node$48$(tag, attrs, childrens) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Node$11$(tag, attrs, childrens, []);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$text$48$(value) {
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Node$Text$11$(value);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$is_same_type$48$(x, y) {
  switch (x.$tag) {
    case 0: {
      if (y.$tag === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (y.$tag === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (y.$tag === 3) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (y.$tag === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function Yoorkin$rabbit$45$tea$internal$vdom$$on$48$(event, handler) {
  return { _0: event, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrEvent$11$(handler) };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$attribute$48$(key, value) {
  return { _0: key, _1: new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrValue$AttrString$11$(value) };
}
function Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$46$(self, sandbox) {
  const attach_attrs = (attrs, element, generated_listeners) => {
    moonbitlang$core$array$$Array$each$27$(attrs, (_param1) => {
      let key;
      let value;
      _L: {
        let key$2;
        let value$2;
        _L$2: {
          let key$3;
          let value$3;
          _L$3: {
            let event;
            let handler;
            _L$4: {
              const _x = _param1;
              const _event = _x._0;
              const _x$2 = _x._1;
              switch (_x$2.$tag) {
                case 0: {
                  const _AttrEvent = _x$2;
                  const _handler = _AttrEvent._0;
                  event = _event;
                  handler = _handler;
                  break _L$4;
                }
                case 2: {
                  const _AttrString = _x$2;
                  const _value = _AttrString._0;
                  key$3 = _event;
                  value$3 = _value;
                  break _L$3;
                }
                case 1: {
                  const _AttrStyle = _x$2;
                  const _value$2 = _AttrStyle._0;
                  key$2 = _event;
                  value$2 = _value$2;
                  break _L$2;
                }
                default: {
                  const _AttrProperty = _x$2;
                  const _value$3 = _AttrProperty._0;
                  key = _event;
                  value = _value$3;
                  break _L;
                }
              }
            }
            let listener;
            let stop_propagation;
            let msg;
            let prevent_default;
            _L$5: {
              _L$6: {
                let f;
                _L$7: {
                  _L$8: {
                    let msg$2;
                    _L$9: {
                      switch (handler.$tag) {
                        case 0: {
                          const _Normal = handler;
                          const _msg = _Normal._0;
                          msg$2 = _msg;
                          break _L$9;
                        }
                        case 1: {
                          const _HandleEvent = handler;
                          const _f = _HandleEvent._0;
                          f = _f;
                          break _L$8;
                        }
                        default: {
                          const _Custom = handler;
                          const _msg$2 = _Custom._0;
                          const _stop_propagation = _Custom._1;
                          const _prevent_default = _Custom._2;
                          stop_propagation = _stop_propagation;
                          msg = _msg$2;
                          prevent_default = _prevent_default;
                          break _L$6;
                        }
                      }
                    }
                    listener = (_event) => {
                      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, msg$2);
                    };
                    break _L$7;
                  }
                  listener = (event$2) => {
                    Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, f(event$2));
                  };
                }
                break _L$5;
              }
              listener = (event$2) => {
                if (stop_propagation) {
                  Yoorkin$rabbit$45$tea$dom$$Event$stop_propagation(event$2);
                }
                if (prevent_default) {
                  Yoorkin$rabbit$45$tea$dom$$Event$prevent_default(event$2);
                }
                Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, msg);
              };
            }
            Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener(Yoorkin$rabbit$45$tea$dom$$Node$to_event_target(Yoorkin$rabbit$45$tea$dom$$Element$to_node(element)), event, listener);
            moonbitlang$core$array$$Array$push$36$(generated_listeners, { _0: event, _1: listener });
            return;
          }
          Yoorkin$rabbit$45$tea$dom$$Element$set_attribute(element, key$3, value$3);
          return;
        }
        Yoorkin$rabbit$45$tea$dom$$HTMLElement$set_style(Yoorkin$rabbit$45$tea$dom$$Element$to_html_element(element), key$2, value$2);
        return;
      }
      Yoorkin$rabbit$45$tea$dom$$Element$set_property(element, key, value);
    });
  };
  let value;
  _L: {
    let width;
    let node;
    let attrs;
    let height;
    _L$2: {
      let childrens;
      let tag;
      let attrs$2;
      let listeners;
      _L$3: {
        switch (self.$tag) {
          case 0: {
            const _Node = self;
            const _tag = _Node._0;
            const _attrs = _Node._1;
            const _childrens = _Node._2;
            const _listeners = _Node._3;
            childrens = _childrens;
            tag = _tag;
            attrs$2 = _attrs;
            listeners = _listeners;
            break _L$3;
          }
          case 1: {
            const _ExternalNode = self;
            const _node = _ExternalNode._0;
            const _attrs$2 = _ExternalNode._1;
            const _width = _ExternalNode._2;
            const _height = _ExternalNode._3;
            width = _width;
            node = _node;
            attrs = _attrs$2;
            height = _height;
            break _L$2;
          }
          case 2: {
            const _Text = self;
            const _value = _Text._0;
            value = _value;
            break _L;
          }
          default: {
            return Yoorkin$rabbit$45$tea$dom$$Element$to_node(Yoorkin$rabbit$45$tea$dom$$Document$create_text_node(Yoorkin$rabbit$45$tea$dom$$document(), ""));
          }
        }
      }
      const element = Yoorkin$rabbit$45$tea$dom$$Document$create_element(Yoorkin$rabbit$45$tea$dom$$document(), tag);
      attach_attrs(attrs$2, element, listeners);
      let url_request;
      _L$4: {
        _L$5: {
          const _bind = Yoorkin$rabbit$45$tea$browser$$Sandbox$get_on_url_request$46$(sandbox);
          if (_bind === undefined) {
          } else {
            const _Some = _bind;
            const _url_request = _Some;
            if (tag === "a") {
              url_request = _url_request;
              break _L$5;
            }
          }
          break _L$4;
        }
        Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener(Yoorkin$rabbit$45$tea$dom$$Node$to_event_target(Yoorkin$rabbit$45$tea$dom$$Element$to_node(element)), "click", (event) => {
          Yoorkin$rabbit$45$tea$dom$$Event$prevent_default(event);
          const href = Yoorkin$rabbit$45$tea$dom$$Element$get_property(element, "href");
          let curr;
          _L$6: {
            const _bind = Yoorkin$rabbit$45$tea$url$$parse(Yoorkin$rabbit$45$tea$dom$$Window$current_url(Yoorkin$rabbit$45$tea$dom$$window()));
            if (_bind.$tag === 1) {
              const _Ok = _bind;
              const _curr = _Ok._0;
              curr = _curr;
              break _L$6;
            } else {
              $panic();
              return;
            }
          }
          let next;
          _L$7: {
            const _bind = Yoorkin$rabbit$45$tea$url$$parse(href);
            if (_bind.$tag === 1) {
              const _Ok = _bind;
              const _next = _Ok._0;
              next = _next;
              break _L$7;
            } else {
              $panic();
              return;
            }
          }
          const request = moonbitlang$core$builtin$$Eq$op_equal$45$(curr.protocol, next.protocol) && (curr.host === next.host && moonbitlang$core$builtin$$Eq$op_equal$43$(curr.port, next.port)) ? new $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$Internal(next) : new $64$Yoorkin$47$rabbit$45$tea$47$browser$46$UrlRequest$External(href);
          Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, url_request(request));
        });
      }
      const _arr = childrens;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const child = _arr[_i];
          Yoorkin$rabbit$45$tea$dom$$Node$append_child(Yoorkin$rabbit$45$tea$dom$$Element$to_node(element), Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$46$(child, sandbox));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      return Yoorkin$rabbit$45$tea$dom$$Element$to_node(element);
    }
    let xs;
    _L$3: {
      _L$4: {
        const _bind = attrs.val;
        if (_bind.$tag === 1) {
          const _Some = _bind;
          const _xs = _Some._0;
          xs = _xs;
          break _L$4;
        }
        break _L$3;
      }
      attach_attrs(xs, moonbitlang$core$option$$Option$unwrap$33$(rami3l$js$45$ffi$js$$Nullable$to_option$33$(Yoorkin$rabbit$45$tea$dom$$Node$to_element(node))), []);
      attrs.val = Option$None$12$;
    }
    const element = Yoorkin$rabbit$45$tea$dom$$Document$create_element(Yoorkin$rabbit$45$tea$dom$$document(), "div");
    Yoorkin$rabbit$45$tea$dom$$HTMLElement$set_style(Yoorkin$rabbit$45$tea$dom$$Element$to_html_element(element), "width", moonbitlang$core$int$$Int$to_string(width, moonbitlang$core$int$$Int$to_string$46$radix$46$default()));
    Yoorkin$rabbit$45$tea$dom$$HTMLElement$set_style(Yoorkin$rabbit$45$tea$dom$$Element$to_html_element(element), "height", moonbitlang$core$int$$Int$to_string(height, moonbitlang$core$int$$Int$to_string$46$radix$46$default()));
    Yoorkin$rabbit$45$tea$dom$$Element$append_children(element, moonbitlang$core$option$$Option$unwrap$33$(rami3l$js$45$ffi$js$$Nullable$to_option$33$(Yoorkin$rabbit$45$tea$dom$$Node$to_element(node))));
    return Yoorkin$rabbit$45$tea$dom$$Element$to_node(element);
  }
  return Yoorkin$rabbit$45$tea$dom$$Element$to_node(Yoorkin$rabbit$45$tea$dom$$Document$create_text_node(Yoorkin$rabbit$45$tea$dom$$document(), value));
}
function Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$48$(old, new_, listeners) {
  const old_map = moonbitlang$core$builtin$$Map$from_iter$26$(moonbitlang$core$builtin$$Iter$map$44$(moonbitlang$core$array$$Array$iter$27$(old), (attr) => attr));
  const new_map = moonbitlang$core$builtin$$Map$from_iter$26$(moonbitlang$core$builtin$$Iter$map$44$(moonbitlang$core$array$$Array$iter$27$(new_), (attr) => attr));
  const result = [];
  const _arr = listeners;
  const _len = _arr.length;
  let _tmp = 0;
  while (true) {
    const _i = _tmp;
    if (_i < _len) {
      const x = _arr[_i];
      moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventRemove$11$(x._0, x._1));
      _tmp = _i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind = moonbitlang$core$builtin$$Map$iter2$26$(old_map);
  _bind((key, value) => {
    let value$2;
    _L: {
      _L$2: {
        let value$3;
        _L$3: {
          _L$4: {
            let value$4;
            _L$5: {
              _L$6: {
                switch (value.$tag) {
                  case 0: {
                    break;
                  }
                  case 1: {
                    const _AttrStyle = value;
                    const _value = _AttrStyle._0;
                    value$4 = _value;
                    break _L$6;
                  }
                  case 2: {
                    const _AttrString = value;
                    const _value$2 = _AttrString._0;
                    value$3 = _value$2;
                    break _L$4;
                  }
                  default: {
                    const _AttrProperty = value;
                    const _value$3 = _AttrProperty._0;
                    value$2 = _value$3;
                    break _L$2;
                  }
                }
                break _L$5;
              }
              if (moonbitlang$core$builtin$$Map$contains$26$(new_map, key)) {
                let value_new;
                _L$7: {
                  _L$8: {
                    const _bind$2 = moonbitlang$core$option$$Option$unwrap$34$(moonbitlang$core$builtin$$Map$get$26$(new_map, key));
                    if (_bind$2.$tag === 1) {
                      const _AttrStyle = _bind$2;
                      const _value_new = _AttrStyle._0;
                      value_new = _value_new;
                      break _L$8;
                    } else {
                      $panic();
                    }
                    break _L$7;
                  }
                  if (moonbitlang$core$builtin$$op_notequal$4$(value$4, value_new)) {
                    moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$11$(key, value_new));
                  }
                }
              } else {
                moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleRemove$11$(key));
              }
            }
            break _L$3;
          }
          if (moonbitlang$core$builtin$$Map$contains$26$(new_map, key)) {
            let value_new;
            _L$5: {
              _L$6: {
                const _bind$2 = moonbitlang$core$option$$Option$unwrap$34$(moonbitlang$core$builtin$$Map$get$26$(new_map, key));
                if (_bind$2.$tag === 2) {
                  const _AttrString = _bind$2;
                  const _value_new = _AttrString._0;
                  value_new = _value_new;
                  break _L$6;
                } else {
                  $panic();
                }
                break _L$5;
              }
              if (moonbitlang$core$builtin$$op_notequal$4$(value$3, value_new)) {
                moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$11$(key, value_new));
              }
            }
          } else {
            moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrRemove$11$(key));
          }
        }
        break _L;
      }
      if (moonbitlang$core$builtin$$Map$contains$26$(new_map, key)) {
        let value_new;
        _L$3: {
          _L$4: {
            const _bind$2 = moonbitlang$core$option$$Option$unwrap$34$(moonbitlang$core$builtin$$Map$get$26$(new_map, key));
            if (_bind$2.$tag === 3) {
              const _AttrProperty = _bind$2;
              const _value_new = _AttrProperty._0;
              value_new = _value_new;
              break _L$4;
            } else {
              $panic();
            }
            break _L$3;
          }
          if (moonbitlang$core$builtin$$op_notequal$4$(value$2, value_new)) {
            moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$11$(key, value_new));
          }
        }
      } else {
        moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyRemove$11$(key));
      }
    }
    return 1;
  });
  const _bind$2 = moonbitlang$core$builtin$$Map$iter2$26$(new_map);
  _bind$2((key, value) => {
    let value$2;
    _L: {
      _L$2: {
        let value$3;
        _L$3: {
          _L$4: {
            let value$4;
            _L$5: {
              _L$6: {
                let handler;
                _L$7: {
                  switch (value.$tag) {
                    case 0: {
                      const _AttrEvent = value;
                      const _handler = _AttrEvent._0;
                      handler = _handler;
                      break _L$7;
                    }
                    case 1: {
                      const _AttrStyle = value;
                      const _value = _AttrStyle._0;
                      value$4 = _value;
                      break _L$6;
                    }
                    case 2: {
                      const _AttrString = value;
                      const _value$2 = _AttrString._0;
                      value$3 = _value$2;
                      break _L$4;
                    }
                    default: {
                      const _AttrProperty = value;
                      const _value$3 = _AttrProperty._0;
                      value$2 = _value$3;
                      break _L$2;
                    }
                  }
                }
                moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$EventAdd$11$(key, handler));
                break _L$5;
              }
              if (!moonbitlang$core$builtin$$Map$contains$26$(old_map, key)) {
                moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$StyleAdd$11$(key, value$4));
              }
            }
            break _L$3;
          }
          if (!moonbitlang$core$builtin$$Map$contains$26$(old_map, key)) {
            moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$AttrAdd$11$(key, value$3));
          }
        }
        break _L;
      }
      if (!moonbitlang$core$builtin$$Map$contains$26$(old_map, key)) {
        moonbitlang$core$array$$Array$push$37$(result, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$AttrsUpdate$PropertyAdd$11$(key, value$2));
      }
    }
    return 1;
  });
  return result;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$48$(old, new_) {
  let childrens_old;
  if (old.$tag === 0) {
    const _Node = old;
    const _childrens = _Node._2;
    childrens_old = _childrens;
  } else {
    childrens_old = moonbitlang$core$builtin$$abort$14$("old is not a node or fragment");
  }
  let childrens_new;
  if (new_.$tag === 0) {
    const _Node = new_;
    const _childrens = _Node._2;
    childrens_new = _childrens;
  } else {
    childrens_new = moonbitlang$core$builtin$$abort$14$("new is not a node or fragment");
  }
  return childrens_old.length === 0 && childrens_new.length === 0 ? [] : Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$48$(childrens_old, childrens_new);
}
function Yoorkin$rabbit$45$tea$internal$vdom$$diff_without_key$48$(old, new_) {
  const aux = (xs, ys, patches, index) => {
    let _tmp = xs;
    let _tmp$2 = ys;
    let _tmp$3 = patches;
    let _tmp$4 = index;
    while (true) {
      const xs$2 = _tmp;
      const ys$2 = _tmp$2;
      const patches$2 = _tmp$3;
      const index$2 = _tmp$4;
      let x;
      let tl1;
      let tl2;
      let y;
      _L: {
        let l;
        _L$2: {
          let tl;
          _L$3: {
            if (xs$2.len === 0) {
              if (ys$2.len === 0) {
                return;
              } else {
                tl = ys$2;
                break _L$3;
              }
            } else {
              if (ys$2.len === 0) {
                l = xs$2;
                break _L$2;
              } else {
                const _x = xs$2.buf[xs$2.start + 0 | 0];
                const _bind = 1;
                const _tmp$5 = xs$2.buf;
                const _tmp$6 = _bind + xs$2.start | 0;
                const _some = xs$2.len - 0 | 0;
                const _x$2 = { buf: _tmp$5, start: _tmp$6, len: _some - _bind | 0 };
                const _y = ys$2.buf[ys$2.start + 0 | 0];
                const _bind$2 = 1;
                const _tmp$7 = ys$2.buf;
                const _tmp$8 = _bind$2 + ys$2.start | 0;
                const _some$2 = ys$2.len - 0 | 0;
                const _x$3 = { buf: _tmp$7, start: _tmp$8, len: _some$2 - _bind$2 | 0 };
                x = _x;
                tl1 = _x$2;
                tl2 = _x$3;
                y = _y;
                break _L;
              }
            }
          }
          moonbitlang$core$array$$Array$push$38$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Append$11$(moonbitlang$core$array$$ArrayView$map$11$(tl, (x$2) => x$2)));
          return;
        }
        moonbitlang$core$array$$Array$push$38$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Drop$11$(index$2, moonbitlang$core$array$$ArrayView$length$10$(l)));
        return;
      }
      if (Yoorkin$rabbit$45$tea$internal$vdom$$is_same_type$48$(x, y)) {
        let value_a;
        let value_b;
        _L$2: {
          _L$3: {
            let listeners;
            let taga;
            let xattrs;
            let yattrs;
            let tagb;
            let new_listeners;
            _L$4: {
              _L$5: {
                switch (x.$tag) {
                  case 0: {
                    const _Node = x;
                    const _taga = _Node._0;
                    const _xattrs = _Node._1;
                    const _listeners = _Node._3;
                    if (y.$tag === 0) {
                      const _Node$2 = y;
                      const _tagb = _Node$2._0;
                      const _yattrs = _Node$2._1;
                      const _new_listeners = _Node$2._3;
                      listeners = _listeners;
                      taga = _taga;
                      xattrs = _xattrs;
                      yattrs = _yattrs;
                      tagb = _tagb;
                      new_listeners = _new_listeners;
                      break _L$5;
                    }
                    break;
                  }
                  case 1: {
                    if (y.$tag === 1) {
                      moonbitlang$core$array$$Array$push$38$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$11$(index$2, y));
                    }
                    break;
                  }
                  case 2: {
                    const _Text = x;
                    const _value_a = _Text._0;
                    if (y.$tag === 2) {
                      const _Text$2 = y;
                      const _value_b = _Text$2._0;
                      value_a = _value_a;
                      value_b = _value_b;
                      break _L$3;
                    }
                    break;
                  }
                }
                break _L$4;
              }
              if (taga === tagb) {
                const attrs_patches = Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$48$(xattrs, yattrs, listeners);
                const childs_patches = Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$48$(x, y);
                if (attrs_patches.length > 0 || childs_patches.length > 0) {
                  moonbitlang$core$array$$Array$push$38$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$11$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$11$(index$2, attrs_patches, childs_patches, new_listeners)));
                }
              } else {
                moonbitlang$core$array$$Array$push$38$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$11$(index$2, y));
              }
            }
            break _L$2;
          }
          if (moonbitlang$core$builtin$$op_notequal$4$(value_a, value_b)) {
            moonbitlang$core$array$$Array$push$38$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$11$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateText$11$(index$2, value_b)));
          }
        }
      } else {
        moonbitlang$core$array$$Array$push$38$(patches$2, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Replace$11$(index$2, y));
      }
      const _tmp$5 = index$2 + 1 | 0;
      _tmp = tl1;
      _tmp$2 = tl2;
      _tmp$4 = _tmp$5;
      continue;
    }
  };
  const patches = [];
  aux({ buf: old, start: 0, len: old.length }, { buf: new_, start: 0, len: new_.length }, patches, 0);
  return patches;
}
function Yoorkin$rabbit$45$tea$internal$vdom$$diff$48$(root_old, root_new) {
  let attrs_old;
  let listeners;
  _L: {
    if (root_old.$tag === 0) {
      const _Node = root_old;
      const _attrs_old = _Node._1;
      const _listeners = _Node._3;
      attrs_old = _attrs_old;
      listeners = _listeners;
      break _L;
    } else {
      return $panic();
    }
  }
  let attrs_new;
  _L$2: {
    if (root_new.$tag === 0) {
      const _Node = root_new;
      const _attrs_new = _Node._1;
      attrs_new = _attrs_new;
      break _L$2;
    } else {
      return $panic();
    }
  }
  return new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Patch$Update$11$(new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Update$UpdateNode$11$(0, Yoorkin$rabbit$45$tea$internal$vdom$$attrs_diff$48$(attrs_old, attrs_new, listeners), Yoorkin$rabbit$45$tea$internal$vdom$$do_diff$48$(root_old, root_new), []));
}
function Yoorkin$rabbit$45$tea$internal$vdom$$Node$patch$46$(self, old, sandbox, mount) {
  const patches = Yoorkin$rabbit$45$tea$internal$vdom$$diff$48$(old, self);
  const aux = (patches$2, current) => {
    let update;
    _L: {
      let nodes;
      _L$2: {
        let index;
        let node;
        _L$3: {
          let index$2;
          let node$2;
          _L$4: {
            let index$3;
            _L$5: {
              let index$4;
              let length;
              _L$6: {
                switch (patches$2.$tag) {
                  case 0: {
                    const _Drop = patches$2;
                    const _index = _Drop._0;
                    const _length = _Drop._1;
                    index$4 = _index;
                    length = _length;
                    break _L$6;
                  }
                  case 1: {
                    const _Remove = patches$2;
                    const _index$2 = _Remove._0;
                    index$3 = _index$2;
                    break _L$5;
                  }
                  case 2: {
                    const _Replace = patches$2;
                    const _index$3 = _Replace._0;
                    const _node = _Replace._1;
                    index$2 = _index$3;
                    node$2 = _node;
                    break _L$4;
                  }
                  case 3: {
                    const _InsertBefore = patches$2;
                    const _index$4 = _InsertBefore._0;
                    const _node$2 = _InsertBefore._1;
                    index = _index$4;
                    node = _node$2;
                    break _L$3;
                  }
                  case 4: {
                    const _Append = patches$2;
                    const _nodes = _Append._0;
                    nodes = _nodes;
                    break _L$2;
                  }
                  default: {
                    const _Update = patches$2;
                    const _update = _Update._0;
                    update = _update;
                    break _L;
                  }
                }
              }
              const _start131 = 0;
              const _end132 = length;
              let _tmp = _start131;
              while (true) {
                const i = _tmp;
                if (i < _end132) {
                  Yoorkin$rabbit$45$tea$dom$$Node$remove_child(current, Yoorkin$rabbit$45$tea$dom$$Node$nth_child(current, index$4));
                  _tmp = i + 1 | 0;
                  continue;
                } else {
                  return;
                }
              }
            }
            Yoorkin$rabbit$45$tea$dom$$Node$remove_child(current, Yoorkin$rabbit$45$tea$dom$$Node$nth_child(current, index$3));
            return;
          }
          Yoorkin$rabbit$45$tea$dom$$Node$replace_child(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$46$(node$2, sandbox), Yoorkin$rabbit$45$tea$dom$$Node$nth_child(current, index$2));
          return;
        }
        if (Yoorkin$rabbit$45$tea$dom$$Node$count_child(current) === 0) {
          Yoorkin$rabbit$45$tea$dom$$Node$append_child(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$46$(node, sandbox));
          return;
        } else {
          Yoorkin$rabbit$45$tea$dom$$Node$insert_before(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$46$(node, sandbox), Yoorkin$rabbit$45$tea$dom$$Node$nth_child(current, index));
          return;
        }
      }
      const _arr = nodes;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const node = _arr[_i];
          Yoorkin$rabbit$45$tea$dom$$Node$append_child(current, Yoorkin$rabbit$45$tea$internal$vdom$$Node$to_node$46$(node, sandbox));
          _tmp = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    let index;
    let value;
    _L$2: {
      let childs_patches;
      let index$2;
      let attrs_patches;
      let new_listeners;
      _L$3: {
        if (update.$tag === 0) {
          const _UpdateNode = update;
          const _index = _UpdateNode._0;
          const _attrs_patches = _UpdateNode._1;
          const _childs_patches = _UpdateNode._2;
          const _new_listeners = _UpdateNode._3;
          childs_patches = _childs_patches;
          index$2 = _index;
          attrs_patches = _attrs_patches;
          new_listeners = _new_listeners;
          break _L$3;
        } else {
          const _UpdateText = update;
          const _index = _UpdateText._0;
          const _value = _UpdateText._1;
          index = _index;
          value = _value;
          break _L$2;
        }
      }
      const node = Yoorkin$rabbit$45$tea$dom$$Node$nth_child(current, index$2);
      const element = Yoorkin$rabbit$45$tea$dom$$Node$to_element(node);
      const _arr = attrs_patches;
      const _len = _arr.length;
      let _tmp = 0;
      while (true) {
        const _i = _tmp;
        if (_i < _len) {
          const patch = _arr[_i];
          let key;
          let handler;
          _L$4: {
            _L$5: {
              let key$2;
              let listener;
              _L$6: {
                _L$7: {
                  let key$3;
                  _L$8: {
                    _L$9: {
                      let key$4;
                      let value$2;
                      _L$10: {
                        _L$11: {
                          let key$5;
                          _L$12: {
                            _L$13: {
                              let key$6;
                              let value$3;
                              _L$14: {
                                _L$15: {
                                  let key$7;
                                  let value$4;
                                  _L$16: {
                                    _L$17: {
                                      let key$8;
                                      _L$18: {
                                        switch (patch.$tag) {
                                          case 0: {
                                            const _AttrRemove = patch;
                                            const _key = _AttrRemove._0;
                                            key$8 = _key;
                                            break _L$18;
                                          }
                                          case 1: {
                                            const _AttrAdd = patch;
                                            const _key$2 = _AttrAdd._0;
                                            const _value = _AttrAdd._1;
                                            key$7 = _key$2;
                                            value$4 = _value;
                                            break _L$17;
                                          }
                                          case 2: {
                                            const _StyleAdd = patch;
                                            const _key$3 = _StyleAdd._0;
                                            const _value$2 = _StyleAdd._1;
                                            key$6 = _key$3;
                                            value$3 = _value$2;
                                            break _L$15;
                                          }
                                          case 3: {
                                            const _StyleRemove = patch;
                                            const _key$4 = _StyleRemove._0;
                                            key$5 = _key$4;
                                            break _L$13;
                                          }
                                          case 4: {
                                            const _PropertyAdd = patch;
                                            const _key$5 = _PropertyAdd._0;
                                            const _value$3 = _PropertyAdd._1;
                                            key$4 = _key$5;
                                            value$2 = _value$3;
                                            break _L$11;
                                          }
                                          case 5: {
                                            const _PropertyRemove = patch;
                                            const _key$6 = _PropertyRemove._0;
                                            key$3 = _key$6;
                                            break _L$9;
                                          }
                                          case 6: {
                                            const _EventRemove = patch;
                                            const _key$7 = _EventRemove._0;
                                            const _listener = _EventRemove._1;
                                            key$2 = _key$7;
                                            listener = _listener;
                                            break _L$7;
                                          }
                                          default: {
                                            const _EventAdd = patch;
                                            const _key$8 = _EventAdd._0;
                                            const _handler = _EventAdd._1;
                                            key = _key$8;
                                            handler = _handler;
                                            break _L$5;
                                          }
                                        }
                                      }
                                      Yoorkin$rabbit$45$tea$dom$$Element$remove_attribute(element, key$8);
                                      break _L$16;
                                    }
                                    Yoorkin$rabbit$45$tea$dom$$Element$set_attribute(element, key$7, value$4);
                                  }
                                  break _L$14;
                                }
                                Yoorkin$rabbit$45$tea$dom$$HTMLElement$set_style(Yoorkin$rabbit$45$tea$dom$$Element$to_html_element(element), key$6, value$3);
                              }
                              break _L$12;
                            }
                            Yoorkin$rabbit$45$tea$dom$$HTMLElement$remove_style(Yoorkin$rabbit$45$tea$dom$$Element$to_html_element(element), key$5);
                          }
                          break _L$10;
                        }
                        Yoorkin$rabbit$45$tea$dom$$Element$set_property(element, key$4, value$2);
                      }
                      break _L$8;
                    }
                    Yoorkin$rabbit$45$tea$dom$$Element$remove_property(element, key$3);
                  }
                  break _L$6;
                }
                Yoorkin$rabbit$45$tea$dom$$EventTarget$remove_event_listener(Yoorkin$rabbit$45$tea$dom$$Node$to_event_target(Yoorkin$rabbit$45$tea$dom$$Element$to_node(element)), key$2, listener);
              }
              break _L$4;
            }
            let listener;
            let stop_propagation;
            let msg;
            let prevent_default;
            _L$6: {
              _L$7: {
                let f;
                _L$8: {
                  _L$9: {
                    let msg$2;
                    _L$10: {
                      switch (handler.$tag) {
                        case 0: {
                          const _Normal = handler;
                          const _msg = _Normal._0;
                          msg$2 = _msg;
                          break _L$10;
                        }
                        case 1: {
                          const _HandleEvent = handler;
                          const _f = _HandleEvent._0;
                          f = _f;
                          break _L$9;
                        }
                        default: {
                          const _Custom = handler;
                          const _msg$2 = _Custom._0;
                          const _stop_propagation = _Custom._1;
                          const _prevent_default = _Custom._2;
                          stop_propagation = _stop_propagation;
                          msg = _msg$2;
                          prevent_default = _prevent_default;
                          break _L$7;
                        }
                      }
                    }
                    listener = (_event) => {
                      Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, msg$2);
                    };
                    break _L$8;
                  }
                  listener = (event) => {
                    Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, f(event));
                  };
                }
                break _L$6;
              }
              listener = (event) => {
                if (stop_propagation) {
                  Yoorkin$rabbit$45$tea$dom$$Event$stop_propagation(event);
                }
                if (prevent_default) {
                  Yoorkin$rabbit$45$tea$dom$$Event$prevent_default(event);
                }
                Yoorkin$rabbit$45$tea$browser$$Sandbox$update$46$(sandbox, msg);
              };
            }
            Yoorkin$rabbit$45$tea$dom$$EventTarget$add_event_listener(Yoorkin$rabbit$45$tea$dom$$Node$to_event_target(Yoorkin$rabbit$45$tea$dom$$Element$to_node(element)), key, listener);
            moonbitlang$core$array$$Array$push$36$(new_listeners, { _0: key, _1: listener });
          }
          _tmp = _i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _arr$2 = childs_patches;
      const _len$2 = _arr$2.length;
      let _tmp$2 = 0;
      while (true) {
        const _i = _tmp$2;
        if (_i < _len$2) {
          const patch = _arr$2[_i];
          aux(patch, node);
          _tmp$2 = _i + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    const text_node = Yoorkin$rabbit$45$tea$dom$$Document$create_text_node(Yoorkin$rabbit$45$tea$dom$$document(), value);
    Yoorkin$rabbit$45$tea$dom$$Node$replace_child(current, Yoorkin$rabbit$45$tea$dom$$Element$to_node(text_node), Yoorkin$rabbit$45$tea$dom$$Node$nth_child(current, index));
  };
  const root = Yoorkin$rabbit$45$tea$dom$$Element$to_node(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), mount));
  aux(patches, root);
}
function Yoorkin$rabbit$45$tea$html$$node$48$(tag, attributes, childrens) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$node$48$(tag, moonbitlang$core$array$$Array$map$39$(attributes, (x) => x), moonbitlang$core$array$$Array$map$40$(childrens, (x) => x));
}
function Yoorkin$rabbit$45$tea$html$$T$to_virtual_dom$48$(self) {
  return Yoorkin$rabbit$45$tea$html$$node$48$("root", [], [self]);
}
function Yoorkin$rabbit$45$tea$html$$attribute$48$(key, value) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$attribute$48$(key, value);
}
function Yoorkin$rabbit$45$tea$html$$new$48$(tag, attrs, style, class_, id, optional_attrs, attributes, optional_attributes, events, childrens) {
  const attrs$2 = moonbitlang$core$array$$Array$map$41$(moonbitlang$core$builtin$$Map$to_array$23$(attrs), (p) => Yoorkin$rabbit$45$tea$html$$attribute$48$(p._0, p._1));
  moonbitlang$core$array$$Array$push_iter$12$(attrs$2, moonbitlang$core$array$$Array$iter$12$(attributes));
  moonbitlang$core$array$$Array$each$28$(optional_attributes, (_param1) => {
    let attr;
    _L: {
      if (_param1 === undefined) {
        return;
      } else {
        const _Some = _param1;
        const _attr = _Some;
        attr = _attr;
        break _L;
      }
    }
    moonbitlang$core$array$$Array$push$12$(attrs$2, attr);
  });
  moonbitlang$core$builtin$$Map$each$25$(optional_attrs, (_param2, _param3) => {
    let k;
    let v;
    _L: {
      if (_param3 === undefined) {
        return;
      } else {
        const _Some = _param3;
        const _v = _Some;
        k = _param2;
        v = _v;
        break _L;
      }
    }
    moonbitlang$core$array$$Array$push$12$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$48$(k, v));
  });
  let style$2;
  _L: {
    _L$2: {
      if (style.$tag === 1) {
        const _Some = style;
        const _style = _Some._0;
        style$2 = _style;
        break _L$2;
      }
      break _L;
    }
    moonbitlang$core$array$$Array$push$12$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$48$("style", moonbitlang$core$string$$String$concat(style$2, ";")));
  }
  let class$2;
  _L$2: {
    _L$3: {
      if (class_ === undefined) {
      } else {
        const _Some = class_;
        const _class = _Some;
        class$2 = _class;
        break _L$3;
      }
      break _L$2;
    }
    moonbitlang$core$array$$Array$push$12$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$48$("class", class$2));
  }
  let id$2;
  _L$3: {
    _L$4: {
      if (id === undefined) {
      } else {
        const _Some = id;
        const _id = _Some;
        id$2 = _id;
        break _L$4;
      }
      break _L$3;
    }
    moonbitlang$core$array$$Array$push$12$(attrs$2, Yoorkin$rabbit$45$tea$html$$attribute$48$("id", id$2));
  }
  moonbitlang$core$builtin$$Map$each$24$(events, (_param4, _param5) => {
    let k;
    let v;
    _L$4: {
      if (_param5 === undefined) {
        return;
      } else {
        const _Some = _param5;
        const _v = _Some;
        k = _param4;
        v = _v;
        break _L$4;
      }
    }
    moonbitlang$core$array$$Array$push$12$(attrs$2, Yoorkin$rabbit$45$tea$internal$vdom$$on$48$(k, new $64$Yoorkin$47$rabbit$45$tea$47$internal$47$vdom$46$Handler$Normal$11$(v)));
  });
  return Yoorkin$rabbit$45$tea$html$$node$48$(tag, attrs$2, childrens);
}
function Yoorkin$rabbit$45$tea$html$$new$46$optional_attrs$46$default$48$() {
  return moonbitlang$core$builtin$$Map$from_array$25$([]);
}
function Yoorkin$rabbit$45$tea$html$$new$46$attributes$46$default$48$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$new$46$optional_attributes$46$default$48$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$new$46$events$46$default$48$() {
  return moonbitlang$core$builtin$$Map$from_array$24$([]);
}
function Yoorkin$rabbit$45$tea$html$$h1$48$(style, id, class_, childrens) {
  return Yoorkin$rabbit$45$tea$html$$new$48$("h1", moonbitlang$core$builtin$$Map$from_array$23$([]), new Option$Some$13$(style), class_, id, Yoorkin$rabbit$45$tea$html$$new$46$optional_attrs$46$default$48$(), Yoorkin$rabbit$45$tea$html$$new$46$attributes$46$default$48$(), Yoorkin$rabbit$45$tea$html$$new$46$optional_attributes$46$default$48$(), Yoorkin$rabbit$45$tea$html$$new$46$events$46$default$48$(), childrens);
}
function Yoorkin$rabbit$45$tea$html$$h1$46$style$46$default$48$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$div$48$(style, id, class_, click, childrens) {
  return Yoorkin$rabbit$45$tea$html$$new$48$("div", moonbitlang$core$builtin$$Map$from_array$23$([]), new Option$Some$13$(style), class_, id, Yoorkin$rabbit$45$tea$html$$new$46$optional_attrs$46$default$48$(), Yoorkin$rabbit$45$tea$html$$new$46$attributes$46$default$48$(), Yoorkin$rabbit$45$tea$html$$new$46$optional_attributes$46$default$48$(), moonbitlang$core$builtin$$Map$from_array$24$([{ _0: "click", _1: moonbitlang$core$option$$Option$map$13$(click, (m) => m) }]), childrens);
}
function Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$48$() {
  return [];
}
function Yoorkin$rabbit$45$tea$html$$text$48$(str) {
  return Yoorkin$rabbit$45$tea$internal$vdom$$text$48$(str);
}
function Yoorkin$rabbit$45$tea$$none$48$() {
  return Yoorkin$rabbit$45$tea$browser$$none$48$();
}
function Yoorkin$rabbit$45$tea$$startup$49$(model, update, view, mount) {
  Yoorkin$rabbit$45$tea$dom$$Element$set_inner_html(Yoorkin$rabbit$45$tea$dom$$Document$get_element_by_id(Yoorkin$rabbit$45$tea$dom$$document(), mount), "<div></div>");
  const sandbox = { val: undefined };
  const curr_dom = { val: Yoorkin$rabbit$45$tea$internal$vdom$$node$48$("div", [], []) };
  const after_update = (html) => {
    let sandbox$2;
    _L: {
      const _bind = sandbox.val;
      if (_bind === undefined) {
        $panic();
        return;
      } else {
        const _Some = _bind;
        const _sandbox = _Some;
        sandbox$2 = _sandbox;
        break _L;
      }
    }
    const new_dom = Yoorkin$rabbit$45$tea$html$$T$to_virtual_dom$48$(html);
    Yoorkin$rabbit$45$tea$internal$vdom$$Node$patch$46$(new_dom, curr_dom.val, sandbox$2, mount);
    curr_dom.val = new_dom;
  };
  sandbox.val = Yoorkin$rabbit$45$tea$browser$$Sandbox$new$47$(model, update, view, after_update, undefined, undefined);
  Yoorkin$rabbit$45$tea$browser$$Sandbox$refersh$46$(moonbitlang$core$option$$Option$unwrap$32$(sandbox.val));
}
function Yoorkin$rabbit$45$tea$$startup$46$mount$46$default$49$() {
  return "app";
}
function username$rabbit$45$tea$45$tailwind$views$$button$48$(value, msg) {
  const class_ = " p-4 bg-pink-200 w-24 rounded-lg select-none text-center \n hover:-translate-y-1 hover:shadow-lg active:bg-pink-300 \n active:shadow-sm transition-all";
  return Yoorkin$rabbit$45$tea$html$$div$48$(Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$48$(), undefined, class_, msg, [Yoorkin$rabbit$45$tea$html$$text$48$(value)]);
}
function username$rabbit$45$tea$45$tailwind$main$$update(msg, model) {
  if (msg === 0) {
    return { _0: Yoorkin$rabbit$45$tea$$none$48$(), _1: { count: model.count + 1 | 0 } };
  } else {
    return { _0: Yoorkin$rabbit$45$tea$$none$48$(), _1: { count: moonbitlang$core$math$$maximum$3$(0, model.count - 1 | 0) } };
  }
}
function username$rabbit$45$tea$45$tailwind$main$$view(model) {
  return Yoorkin$rabbit$45$tea$html$$div$48$(Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$48$(), undefined, "w-[600px] h-[100px] m-10", undefined, [Yoorkin$rabbit$45$tea$html$$h1$48$(Yoorkin$rabbit$45$tea$html$$h1$46$style$46$default$48$(), undefined, "text-2xl font-bold text-center select-none", [Yoorkin$rabbit$45$tea$html$$text$48$(moonbitlang$core$builtin$$Show$to_string$3$(model.count))]), Yoorkin$rabbit$45$tea$html$$div$48$(Yoorkin$rabbit$45$tea$html$$div$46$style$46$default$48$(), undefined, "flex justify-center gap-8 m-8", undefined, [username$rabbit$45$tea$45$tailwind$views$$button$48$("+", 0), username$rabbit$45$tea$45$tailwind$views$$button$48$("-", 1)])]);
}
(() => {
  const model = { count: 0 };
  Yoorkin$rabbit$45$tea$$startup$49$(model, username$rabbit$45$tea$45$tailwind$main$$update, username$rabbit$45$tea$45$tailwind$main$$view, Yoorkin$rabbit$45$tea$$startup$46$mount$46$default$49$());
})();
//# sourceMappingURL=main.js.map
