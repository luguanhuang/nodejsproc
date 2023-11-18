
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function i(s) {
        if (s.ep) return;
        s.ep = !0;
        const r = t(s);
        fetch(s.href, r)
    }
})();

function Xt(n, e) {
    return function() {
        return n.apply(e, arguments)
    }
}
const {
    toString: In
} = Object.prototype, {
    getPrototypeOf: st
} = Object, ke = (n => e => {
    const t = In.call(e);
    return n[t] || (n[t] = t.slice(8, -1).toLowerCase())
})(Object.create(null)), H = n => (n = n.toLowerCase(), e => ke(e) === n), Re = n => e => typeof e === n, {
    isArray: Y
} = Array, ce = Re("undefined");

function Vn(n) {
    return n !== null && !ce(n) && n.constructor !== null && !ce(n.constructor) && R(n.constructor.isBuffer) && n.constructor.isBuffer(n)
}
const Yt = H("ArrayBuffer");

function Mn(n) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && Yt(n.buffer), e
}
const qn = Re("string"),
    R = Re("function"),
    Qt = Re("number"),
    Te = n => n !== null && typeof n == "object",
    zn = n => n === !0 || n === !1,
    be = n => {
        if (ke(n) !== "object") return !1;
        const e = st(n);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n)
    },
    $n = H("Date"),
    jn = H("File"),
    Jn = H("Blob"),
    Wn = H("FileList"),
    Gn = n => Te(n) && R(n.pipe),
    Kn = n => {
        let e;
        return n && (typeof FormData == "function" && n instanceof FormData || R(n.append) && ((e = ke(n)) === "formdata" || e === "object" && R(n.toString) && n.toString() === "[object FormData]"))
    },
    Xn = H("URLSearchParams"),
    Yn = n => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function ue(n, e, {
    allOwnKeys: t = !1
} = {}) {
    if (n === null || typeof n > "u") return;
    let i, s;
    if (typeof n != "object" && (n = [n]), Y(n))
        for (i = 0, s = n.length; i < s; i++) e.call(null, n[i], i, n);
    else {
        const r = t ? Object.getOwnPropertyNames(n) : Object.keys(n),
            o = r.length;
        let a;
        for (i = 0; i < o; i++) a = r[i], e.call(null, n[a], a, n)
    }
}

function Zt(n, e) {
    e = e.toLowerCase();
    const t = Object.keys(n);
    let i = t.length,
        s;
    for (; i-- > 0;)
        if (s = t[i], e === s.toLowerCase()) return s;
    return null
}
const en = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    tn = n => !ce(n) && n !== en;

function qe() {
    const {
        caseless: n
    } = tn(this) && this || {}, e = {}, t = (i, s) => {
        const r = n && Zt(e, s) || s;
        be(e[r]) && be(i) ? e[r] = qe(e[r], i) : be(i) ? e[r] = qe({}, i) : Y(i) ? e[r] = i.slice() : e[r] = i
    };
    for (let i = 0, s = arguments.length; i < s; i++) arguments[i] && ue(arguments[i], t);
    return e
}
const Qn = (n, e, t, {
        allOwnKeys: i
    } = {}) => (ue(e, (s, r) => {
        t && R(s) ? n[r] = Xt(s, t) : n[r] = s
    }, {
        allOwnKeys: i
    }), n),
    Zn = n => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
    ei = (n, e, t, i) => {
        n.prototype = Object.create(e.prototype, i), n.prototype.constructor = n, Object.defineProperty(n, "super", {
            value: e.prototype
        }), t && Object.assign(n.prototype, t)
    },
    ti = (n, e, t, i) => {
        let s, r, o;
        const a = {};
        if (e = e || {}, n == null) return e;
        do {
            for (s = Object.getOwnPropertyNames(n), r = s.length; r-- > 0;) o = s[r], (!i || i(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
            n = t !== !1 && st(n)
        } while (n && (!t || t(n, e)) && n !== Object.prototype);
        return e
    },
    ni = (n, e, t) => {
        n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
        const i = n.indexOf(e, t);
        return i !== -1 && i === t
    },
    ii = n => {
        if (!n) return null;
        if (Y(n)) return n;
        let e = n.length;
        if (!Qt(e)) return null;
        const t = new Array(e);
        for (; e-- > 0;) t[e] = n[e];
        return t
    },
    si = (n => e => n && e instanceof n)(typeof Uint8Array < "u" && st(Uint8Array)),
    ri = (n, e) => {
        const i = (n && n[Symbol.iterator]).call(n);
        let s;
        for (;
            (s = i.next()) && !s.done;) {
            const r = s.value;
            e.call(n, r[0], r[1])
        }
    },
    oi = (n, e) => {
        let t;
        const i = [];
        for (;
            (t = n.exec(e)) !== null;) i.push(t);
        return i
    },
    ai = H("HTMLFormElement"),
    ci = n => n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, i, s) {
        return i.toUpperCase() + s
    }),
    bt = (({
        hasOwnProperty: n
    }) => (e, t) => n.call(e, t))(Object.prototype),
    li = H("RegExp"),
    nn = (n, e) => {
        const t = Object.getOwnPropertyDescriptors(n),
            i = {};
        ue(t, (s, r) => {
            let o;
            (o = e(s, r, n)) !== !1 && (i[r] = o || s)
        }), Object.defineProperties(n, i)
    },
    ui = n => {
        nn(n, (e, t) => {
            if (R(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1) return !1;
            const i = n[t];
            if (R(i)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + t + "'")
                })
            }
        })
    },
    di = (n, e) => {
        const t = {},
            i = s => {
                s.forEach(r => {
                    t[r] = !0
                })
            };
        return Y(n) ? i(n) : i(String(n).split(e)), t
    },
    fi = () => {},
    hi = (n, e) => (n = +n, Number.isFinite(n) ? n : e),
    Pe = "abcdefghijklmnopqrstuvwxyz",
    vt = "0123456789",
    sn = {
        DIGIT: vt,
        ALPHA: Pe,
        ALPHA_DIGIT: Pe + Pe.toUpperCase() + vt
    },
    pi = (n = 16, e = sn.ALPHA_DIGIT) => {
        let t = "";
        const {
            length: i
        } = e;
        for (; n--;) t += e[Math.random() * i | 0];
        return t
    };

function mi(n) {
    return !!(n && R(n.append) && n[Symbol.toStringTag] === "FormData" && n[Symbol.iterator])
}
const _i = n => {
        const e = new Array(10),
            t = (i, s) => {
                if (Te(i)) {
                    if (e.indexOf(i) >= 0) return;
                    if (!("toJSON" in i)) {
                        e[s] = i;
                        const r = Y(i) ? [] : {};
                        return ue(i, (o, a) => {
                            const u = t(o, s + 1);
                            !ce(u) && (r[a] = u)
                        }), e[s] = void 0, r
                    }
                }
                return i
            };
        return t(n, 0)
    },
    gi = H("AsyncFunction"),
    yi = n => n && (Te(n) || R(n)) && R(n.then) && R(n.catch),
    d = {
        isArray: Y,
        isArrayBuffer: Yt,
        isBuffer: Vn,
        isFormData: Kn,
        isArrayBufferView: Mn,
        isString: qn,
        isNumber: Qt,
        isBoolean: zn,
        isObject: Te,
        isPlainObject: be,
        isUndefined: ce,
        isDate: $n,
        isFile: jn,
        isBlob: Jn,
        isRegExp: li,
        isFunction: R,
        isStream: Gn,
        isURLSearchParams: Xn,
        isTypedArray: si,
        isFileList: Wn,
        forEach: ue,
        merge: qe,
        extend: Qn,
        trim: Yn,
        stripBOM: Zn,
        inherits: ei,
        toFlatObject: ti,
        kindOf: ke,
        kindOfTest: H,
        endsWith: ni,
        toArray: ii,
        forEachEntry: ri,
        matchAll: oi,
        isHTMLForm: ai,
        hasOwnProperty: bt,
        hasOwnProp: bt,
        reduceDescriptors: nn,
        freezeMethods: ui,
        toObjectSet: di,
        toCamelCase: ci,
        noop: fi,
        toFiniteNumber: hi,
        findKey: Zt,
        global: en,
        isContextDefined: tn,
        ALPHABET: sn,
        generateString: pi,
        isSpecCompliantForm: mi,
        toJSONObject: _i,
        isAsyncFn: gi,
        isThenable: yi
    };

function v(n, e, t, i, s) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), i && (this.request = i), s && (this.response = s)
}
d.inherits(v, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: d.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const rn = v.prototype,
    on = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(n => {
    on[n] = {
        value: n
    }
});
Object.defineProperties(v, on);
Object.defineProperty(rn, "isAxiosError", {
    value: !0
});
v.from = (n, e, t, i, s, r) => {
    const o = Object.create(rn);
    return d.toFlatObject(n, o, function(u) {
        return u !== Error.prototype
    }, a => a !== "isAxiosError"), v.call(o, n.message, e, t, i, s), o.cause = n, o.name = n.name, r && Object.assign(o, r), o
};
const bi = null;

function ze(n) {
    return d.isPlainObject(n) || d.isArray(n)
}

function an(n) {
    return d.endsWith(n, "[]") ? n.slice(0, -2) : n
}

function wt(n, e, t) {
    return n ? n.concat(e).map(function(s, r) {
        return s = an(s), !t && r ? "[" + s + "]" : s
    }).join(t ? "." : "") : e
}

function vi(n) {
    return d.isArray(n) && !n.some(ze)
}
const wi = d.toFlatObject(d, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function Ne(n, e, t) {
    if (!d.isObject(n)) throw new TypeError("target must be an object");
    e = e || new FormData, t = d.toFlatObject(t, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(_, w) {
        return !d.isUndefined(w[_])
    });
    const i = t.metaTokens,
        s = t.visitor || h,
        r = t.dots,
        o = t.indexes,
        u = (t.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(e);
    if (!d.isFunction(s)) throw new TypeError("visitor must be a function");

    function l(m) {
        if (m === null) return "";
        if (d.isDate(m)) return m.toISOString();
        if (!u && d.isBlob(m)) throw new v("Blob is not supported. Use a Buffer instead.");
        return d.isArrayBuffer(m) || d.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m
    }

    function h(m, _, w) {
        let C = m;
        if (m && !w && typeof m == "object") {
            if (d.endsWith(_, "{}")) _ = i ? _ : _.slice(0, -2), m = JSON.stringify(m);
            else if (d.isArray(m) && vi(m) || (d.isFileList(m) || d.endsWith(_, "[]")) && (C = d.toArray(m))) return _ = an(_), C.forEach(function(O, $) {
                !(d.isUndefined(O) || O === null) && e.append(o === !0 ? wt([_], $, r) : o === null ? _ : _ + "[]", l(O))
            }), !1
        }
        return ze(m) ? !0 : (e.append(wt(w, _, r), l(m)), !1)
    }
    const p = [],
        g = Object.assign(wi, {
            defaultVisitor: h,
            convertValue: l,
            isVisitable: ze
        });

    function y(m, _) {
        if (!d.isUndefined(m)) {
            if (p.indexOf(m) !== -1) throw Error("Circular reference detected in " + _.join("."));
            p.push(m), d.forEach(m, function(C, P) {
                (!(d.isUndefined(C) || C === null) && s.call(e, C, d.isString(P) ? P.trim() : P, _, g)) === !0 && y(C, _ ? _.concat(P) : [P])
            }), p.pop()
        }
    }
    if (!d.isObject(n)) throw new TypeError("data must be an object");
    return y(n), e
}

function Et(n) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}

function rt(n, e) {
    this._pairs = [], n && Ne(n, this, e)
}
const cn = rt.prototype;
cn.append = function(e, t) {
    this._pairs.push([e, t])
};
cn.toString = function(e) {
    const t = e ? function(i) {
        return e.call(this, i, Et)
    } : Et;
    return this._pairs.map(function(s) {
        return t(s[0]) + "=" + t(s[1])
    }, "").join("&")
};

function Ei(n) {
    return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function ln(n, e, t) {
    if (!e) return n;
    const i = t && t.encode || Ei,
        s = t && t.serialize;
    let r;
    if (s ? r = s(e, t) : r = d.isURLSearchParams(e) ? e.toString() : new rt(e, t).toString(i), r) {
        const o = n.indexOf("#");
        o !== -1 && (n = n.slice(0, o)), n += (n.indexOf("?") === -1 ? "?" : "&") + r
    }
    return n
}
class Si {
    constructor() {
        this.handlers = []
    }
    use(e, t, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        d.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const St = Si,
    un = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    Ai = typeof URLSearchParams < "u" ? URLSearchParams : rt,
    Ci = typeof FormData < "u" ? FormData : null,
    xi = typeof Blob < "u" ? Blob : null,
    Oi = (() => {
        let n;
        return typeof navigator < "u" && ((n = navigator.product) === "ReactNative" || n === "NativeScript" || n === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    ki = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    N = {
        isBrowser: !0,
        classes: {
            URLSearchParams: Ai,
            FormData: Ci,
            Blob: xi
        },
        isStandardBrowserEnv: Oi,
        isStandardBrowserWebWorkerEnv: ki,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function Ri(n, e) {
    return Ne(n, new N.classes.URLSearchParams, Object.assign({
        visitor: function(t, i, s, r) {
            return N.isNode && d.isBuffer(t) ? (this.append(i, t.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, e))
}

function Ti(n) {
    return d.matchAll(/\w+|\[(\w*)]/g, n).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function Ni(n) {
    const e = {},
        t = Object.keys(n);
    let i;
    const s = t.length;
    let r;
    for (i = 0; i < s; i++) r = t[i], e[r] = n[r];
    return e
}

function dn(n) {
    function e(t, i, s, r) {
        let o = t[r++];
        const a = Number.isFinite(+o),
            u = r >= t.length;
        return o = !o && d.isArray(s) ? s.length : o, u ? (d.hasOwnProp(s, o) ? s[o] = [s[o], i] : s[o] = i, !a) : ((!s[o] || !d.isObject(s[o])) && (s[o] = []), e(t, i, s[o], r) && d.isArray(s[o]) && (s[o] = Ni(s[o])), !a)
    }
    if (d.isFormData(n) && d.isFunction(n.entries)) {
        const t = {};
        return d.forEachEntry(n, (i, s) => {
            e(Ti(i), s, t, 0)
        }), t
    }
    return null
}

function Bi(n, e, t) {
    if (d.isString(n)) try {
        return (e || JSON.parse)(n), d.trim(n)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (t || JSON.stringify)(n)
}
const ot = {
    transitional: un,
    adapter: N.isNode ? "http" : "xhr",
    transformRequest: [function(e, t) {
        const i = t.getContentType() || "",
            s = i.indexOf("application/json") > -1,
            r = d.isObject(e);
        if (r && d.isHTMLForm(e) && (e = new FormData(e)), d.isFormData(e)) return s && s ? JSON.stringify(dn(e)) : e;
        if (d.isArrayBuffer(e) || d.isBuffer(e) || d.isStream(e) || d.isFile(e) || d.isBlob(e)) return e;
        if (d.isArrayBufferView(e)) return e.buffer;
        if (d.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let a;
        if (r) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return Ri(e, this.formSerializer).toString();
            if ((a = d.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return Ne(a ? {
                    "files[]": e
                } : e, u && new u, this.formSerializer)
            }
        }
        return r || s ? (t.setContentType("application/json", !1), Bi(e)) : e
    }],
    transformResponse: [function(e) {
        const t = this.transitional || ot.transitional,
            i = t && t.forcedJSONParsing,
            s = this.responseType === "json";
        if (e && d.isString(e) && (i && !this.responseType || s)) {
            const o = !(t && t.silentJSONParsing) && s;
            try {
                return JSON.parse(e)
            } catch (a) {
                if (o) throw a.name === "SyntaxError" ? v.from(a, v.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: N.classes.FormData,
        Blob: N.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], n => {
    ot.headers[n] = {}
});
const at = ot,
    Li = d.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Pi = n => {
        const e = {};
        let t, i, s;
        return n && n.split(`
`).forEach(function(o) {
            s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), i = o.substring(s + 1).trim(), !(!t || e[t] && Li[t]) && (t === "set-cookie" ? e[t] ? e[t].push(i) : e[t] = [i] : e[t] = e[t] ? e[t] + ", " + i : i)
        }), e
    },
    At = Symbol("internals");

function ee(n) {
    return n && String(n).trim().toLowerCase()
}

function ve(n) {
    return n === !1 || n == null ? n : d.isArray(n) ? n.map(ve) : String(n)
}

function Di(n) {
    const e = Object.create(null),
        t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = t.exec(n);) e[i[1]] = i[2];
    return e
}
const Fi = n => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());

function De(n, e, t, i, s) {
    if (d.isFunction(i)) return i.call(this, e, t);
    if (s && (e = t), !!d.isString(e)) {
        if (d.isString(i)) return e.indexOf(i) !== -1;
        if (d.isRegExp(i)) return i.test(e)
    }
}

function Ui(n) {
    return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, i) => t.toUpperCase() + i)
}

function Hi(n, e) {
    const t = d.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(n, i + t, {
            value: function(s, r, o) {
                return this[i].call(this, e, s, r, o)
            },
            configurable: !0
        })
    })
}
class Be {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, i) {
        const s = this;

        function r(a, u, l) {
            const h = ee(u);
            if (!h) throw new Error("header name must be a non-empty string");
            const p = d.findKey(s, h);
            (!p || s[p] === void 0 || l === !0 || l === void 0 && s[p] !== !1) && (s[p || u] = ve(a))
        }
        const o = (a, u) => d.forEach(a, (l, h) => r(l, h, u));
        return d.isPlainObject(e) || e instanceof this.constructor ? o(e, t) : d.isString(e) && (e = e.trim()) && !Fi(e) ? o(Pi(e), t) : e != null && r(t, e, i), this
    }
    get(e, t) {
        if (e = ee(e), e) {
            const i = d.findKey(this, e);
            if (i) {
                const s = this[i];
                if (!t) return s;
                if (t === !0) return Di(s);
                if (d.isFunction(t)) return t.call(this, s, i);
                if (d.isRegExp(t)) return t.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, t) {
        if (e = ee(e), e) {
            const i = d.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!t || De(this, this[i], i, t)))
        }
        return !1
    }
    delete(e, t) {
        const i = this;
        let s = !1;

        function r(o) {
            if (o = ee(o), o) {
                const a = d.findKey(i, o);
                a && (!t || De(i, i[a], a, t)) && (delete i[a], s = !0)
            }
        }
        return d.isArray(e) ? e.forEach(r) : r(e), s
    }
    clear(e) {
        const t = Object.keys(this);
        let i = t.length,
            s = !1;
        for (; i--;) {
            const r = t[i];
            (!e || De(this, this[r], r, e, !0)) && (delete this[r], s = !0)
        }
        return s
    }
    normalize(e) {
        const t = this,
            i = {};
        return d.forEach(this, (s, r) => {
            const o = d.findKey(i, r);
            if (o) {
                t[o] = ve(s), delete t[r];
                return
            }
            const a = e ? Ui(r) : String(r).trim();
            a !== r && delete t[r], t[a] = ve(s), i[a] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const t = Object.create(null);
        return d.forEach(this, (i, s) => {
            i != null && i !== !1 && (t[s] = e && d.isArray(i) ? i.join(", ") : i)
        }), t
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
        const i = new this(e);
        return t.forEach(s => i.set(s)), i
    }
    static accessor(e) {
        const i = (this[At] = this[At] = {
                accessors: {}
            }).accessors,
            s = this.prototype;

        function r(o) {
            const a = ee(o);
            i[a] || (Hi(s, o), i[a] = !0)
        }
        return d.isArray(e) ? e.forEach(r) : r(e), this
    }
}
Be.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(Be.prototype, ({
    value: n
}, e) => {
    let t = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => n,
        set(i) {
            this[t] = i
        }
    }
});
d.freezeMethods(Be);
const I = Be;

function Fe(n, e) {
    const t = this || at,
        i = e || t,
        s = I.from(i.headers);
    let r = i.data;
    return d.forEach(n, function(a) {
        r = a.call(t, r, s.normalize(), e ? e.status : void 0)
    }), s.normalize(), r
}

function fn(n) {
    return !!(n && n.__CANCEL__)
}

function de(n, e, t) {
    v.call(this, n ?? "canceled", v.ERR_CANCELED, e, t), this.name = "CanceledError"
}
d.inherits(de, v, {
    __CANCEL__: !0
});

function Ii(n, e, t) {
    const i = t.config.validateStatus;
    !t.status || !i || i(t.status) ? n(t) : e(new v("Request failed with status code " + t.status, [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t))
}
const Vi = N.isStandardBrowserEnv ? function() {
    return {
        write: function(t, i, s, r, o, a) {
            const u = [];
            u.push(t + "=" + encodeURIComponent(i)), d.isNumber(s) && u.push("expires=" + new Date(s).toGMTString()), d.isString(r) && u.push("path=" + r), d.isString(o) && u.push("domain=" + o), a === !0 && u.push("secure"), document.cookie = u.join("; ")
        },
        read: function(t) {
            const i = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return i ? decodeURIComponent(i[3]) : null
        },
        remove: function(t) {
            this.write(t, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function Mi(n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}

function qi(n, e) {
    return e ? n.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : n
}

function hn(n, e) {
    return n && !Mi(e) ? qi(n, e) : e
}
const zi = N.isStandardBrowserEnv ? function() {
    const e = /(msie|trident)/i.test(navigator.userAgent),
        t = document.createElement("a");
    let i;

    function s(r) {
        let o = r;
        return e && (t.setAttribute("href", o), o = t.href), t.setAttribute("href", o), {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
        }
    }
    return i = s(window.location.href),
        function(o) {
            const a = d.isString(o) ? s(o) : o;
            return a.protocol === i.protocol && a.host === i.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function $i(n) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
    return e && e[1] || ""
}

function ji(n, e) {
    n = n || 10;
    const t = new Array(n),
        i = new Array(n);
    let s = 0,
        r = 0,
        o;
    return e = e !== void 0 ? e : 1e3,
        function(u) {
            const l = Date.now(),
                h = i[r];
            o || (o = l), t[s] = u, i[s] = l;
            let p = r,
                g = 0;
            for (; p !== s;) g += t[p++], p = p % n;
            if (s = (s + 1) % n, s === r && (r = (r + 1) % n), l - o < e) return;
            const y = h && l - h;
            return y ? Math.round(g * 1e3 / y) : void 0
        }
}

function Ct(n, e) {
    let t = 0;
    const i = ji(50, 250);
    return s => {
        const r = s.loaded,
            o = s.lengthComputable ? s.total : void 0,
            a = r - t,
            u = i(a),
            l = r <= o;
        t = r;
        const h = {
            loaded: r,
            total: o,
            progress: o ? r / o : void 0,
            bytes: a,
            rate: u || void 0,
            estimated: u && o && l ? (o - r) / u : void 0,
            event: s
        };
        h[e ? "download" : "upload"] = !0, n(h)
    }
}
const Ji = typeof XMLHttpRequest < "u",
    Wi = Ji && function(n) {
        return new Promise(function(t, i) {
            let s = n.data;
            const r = I.from(n.headers).normalize(),
                o = n.responseType;
            let a;

            function u() {
                n.cancelToken && n.cancelToken.unsubscribe(a), n.signal && n.signal.removeEventListener("abort", a)
            }
            d.isFormData(s) && (N.isStandardBrowserEnv || N.isStandardBrowserWebWorkerEnv ? r.setContentType(!1) : r.setContentType("multipart/form-data;", !1));
            let l = new XMLHttpRequest;
            if (n.auth) {
                const y = n.auth.username || "",
                    m = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : "";
                r.set("Authorization", "Basic " + btoa(y + ":" + m))
            }
            const h = hn(n.baseURL, n.url);
            l.open(n.method.toUpperCase(), ln(h, n.params, n.paramsSerializer), !0), l.timeout = n.timeout;

            function p() {
                if (!l) return;
                const y = I.from("getAllResponseHeaders" in l && l.getAllResponseHeaders()),
                    _ = {
                        data: !o || o === "text" || o === "json" ? l.responseText : l.response,
                        status: l.status,
                        statusText: l.statusText,
                        headers: y,
                        config: n,
                        request: l
                    };
                Ii(function(C) {
                    t(C), u()
                }, function(C) {
                    i(C), u()
                }, _), l = null
            }
            if ("onloadend" in l ? l.onloadend = p : l.onreadystatechange = function() {
                    !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(p)
                }, l.onabort = function() {
                    l && (i(new v("Request aborted", v.ECONNABORTED, n, l)), l = null)
                }, l.onerror = function() {
                    i(new v("Network Error", v.ERR_NETWORK, n, l)), l = null
                }, l.ontimeout = function() {
                    let m = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
                    const _ = n.transitional || un;
                    n.timeoutErrorMessage && (m = n.timeoutErrorMessage), i(new v(m, _.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED, n, l)), l = null
                }, N.isStandardBrowserEnv) {
                const y = (n.withCredentials || zi(h)) && n.xsrfCookieName && Vi.read(n.xsrfCookieName);
                y && r.set(n.xsrfHeaderName, y)
            }
            s === void 0 && r.setContentType(null), "setRequestHeader" in l && d.forEach(r.toJSON(), function(m, _) {
                l.setRequestHeader(_, m)
            }), d.isUndefined(n.withCredentials) || (l.withCredentials = !!n.withCredentials), o && o !== "json" && (l.responseType = n.responseType), typeof n.onDownloadProgress == "function" && l.addEventListener("progress", Ct(n.onDownloadProgress, !0)), typeof n.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", Ct(n.onUploadProgress)), (n.cancelToken || n.signal) && (a = y => {
                l && (i(!y || y.type ? new de(null, n, l) : y), l.abort(), l = null)
            }, n.cancelToken && n.cancelToken.subscribe(a), n.signal && (n.signal.aborted ? a() : n.signal.addEventListener("abort", a)));
            const g = $i(h);
            if (g && N.protocols.indexOf(g) === -1) {
                i(new v("Unsupported protocol " + g + ":", v.ERR_BAD_REQUEST, n));
                return
            }
            l.send(s || null)
        })
    },
    we = {
        http: bi,
        xhr: Wi
    };
d.forEach(we, (n, e) => {
    if (n) {
        try {
            Object.defineProperty(n, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(n, "adapterName", {
            value: e
        })
    }
});
const pn = {
    getAdapter: n => {
        n = d.isArray(n) ? n : [n];
        const {
            length: e
        } = n;
        let t, i;
        for (let s = 0; s < e && (t = n[s], !(i = d.isString(t) ? we[t.toLowerCase()] : t)); s++);
        if (!i) throw i === !1 ? new v(`Adapter ${t} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(d.hasOwnProp(we, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`);
        if (!d.isFunction(i)) throw new TypeError("adapter is not a function");
        return i
    },
    adapters: we
};

function Ue(n) {
    if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted) throw new de(null, n)
}

function xt(n) {
    return Ue(n), n.headers = I.from(n.headers), n.data = Fe.call(n, n.transformRequest), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), pn.getAdapter(n.adapter || at.adapter)(n).then(function(i) {
        return Ue(n), i.data = Fe.call(n, n.transformResponse, i), i.headers = I.from(i.headers), i
    }, function(i) {
        return fn(i) || (Ue(n), i && i.response && (i.response.data = Fe.call(n, n.transformResponse, i.response), i.response.headers = I.from(i.response.headers))), Promise.reject(i)
    })
}
const Ot = n => n instanceof I ? n.toJSON() : n;

function X(n, e) {
    e = e || {};
    const t = {};

    function i(l, h, p) {
        return d.isPlainObject(l) && d.isPlainObject(h) ? d.merge.call({
            caseless: p
        }, l, h) : d.isPlainObject(h) ? d.merge({}, h) : d.isArray(h) ? h.slice() : h
    }

    function s(l, h, p) {
        if (d.isUndefined(h)) {
            if (!d.isUndefined(l)) return i(void 0, l, p)
        } else return i(l, h, p)
    }

    function r(l, h) {
        if (!d.isUndefined(h)) return i(void 0, h)
    }

    function o(l, h) {
        if (d.isUndefined(h)) {
            if (!d.isUndefined(l)) return i(void 0, l)
        } else return i(void 0, h)
    }

    function a(l, h, p) {
        if (p in e) return i(l, h);
        if (p in n) return i(void 0, l)
    }
    const u = {
        url: r,
        method: r,
        data: r,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (l, h) => s(Ot(l), Ot(h), !0)
    };
    return d.forEach(Object.keys(Object.assign({}, n, e)), function(h) {
        const p = u[h] || s,
            g = p(n[h], e[h], h);
        d.isUndefined(g) && p !== a || (t[h] = g)
    }), t
}
const mn = "1.5.0",
    ct = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
    ct[n] = function(i) {
        return typeof i === n || "a" + (e < 1 ? "n " : " ") + n
    }
});
const kt = {};
ct.transitional = function(e, t, i) {
    function s(r, o) {
        return "[Axios v" + mn + "] Transitional option '" + r + "'" + o + (i ? ". " + i : "")
    }
    return (r, o, a) => {
        if (e === !1) throw new v(s(o, " has been removed" + (t ? " in " + t : "")), v.ERR_DEPRECATED);
        return t && !kt[o] && (kt[o] = !0, console.warn(s(o, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(r, o, a) : !0
    }
};

function Gi(n, e, t) {
    if (typeof n != "object") throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(n);
    let s = i.length;
    for (; s-- > 0;) {
        const r = i[s],
            o = e[r];
        if (o) {
            const a = n[r],
                u = a === void 0 || o(a, r, n);
            if (u !== !0) throw new v("option " + r + " must be " + u, v.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (t !== !0) throw new v("Unknown option " + r, v.ERR_BAD_OPTION)
    }
}
const $e = {
        assertOptions: Gi,
        validators: ct
    },
    V = $e.validators;
class Ce {
    constructor(e) {
        this.defaults = e, this.interceptors = {
            request: new St,
            response: new St
        }
    }
    request(e, t) {
        typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = X(this.defaults, t);
        const {
            transitional: i,
            paramsSerializer: s,
            headers: r
        } = t;
        i !== void 0 && $e.assertOptions(i, {
            silentJSONParsing: V.transitional(V.boolean),
            forcedJSONParsing: V.transitional(V.boolean),
            clarifyTimeoutError: V.transitional(V.boolean)
        }, !1), s != null && (d.isFunction(s) ? t.paramsSerializer = {
            serialize: s
        } : $e.assertOptions(s, {
            encode: V.function,
            serialize: V.function
        }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
        let o = r && d.merge(r.common, r[t.method]);
        r && d.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => {
            delete r[m]
        }), t.headers = I.concat(o, r);
        const a = [];
        let u = !0;
        this.interceptors.request.forEach(function(_) {
            typeof _.runWhen == "function" && _.runWhen(t) === !1 || (u = u && _.synchronous, a.unshift(_.fulfilled, _.rejected))
        });
        const l = [];
        this.interceptors.response.forEach(function(_) {
            l.push(_.fulfilled, _.rejected)
        });
        let h, p = 0,
            g;
        if (!u) {
            const m = [xt.bind(this), void 0];
            for (m.unshift.apply(m, a), m.push.apply(m, l), g = m.length, h = Promise.resolve(t); p < g;) h = h.then(m[p++], m[p++]);
            return h
        }
        g = a.length;
        let y = t;
        for (p = 0; p < g;) {
            const m = a[p++],
                _ = a[p++];
            try {
                y = m(y)
            } catch (w) {
                _.call(this, w);
                break
            }
        }
        try {
            h = xt.call(this, y)
        } catch (m) {
            return Promise.reject(m)
        }
        for (p = 0, g = l.length; p < g;) h = h.then(l[p++], l[p++]);
        return h
    }
    getUri(e) {
        e = X(this.defaults, e);
        const t = hn(e.baseURL, e.url);
        return ln(t, e.params, e.paramsSerializer)
    }
}
d.forEach(["delete", "get", "head", "options"], function(e) {
    Ce.prototype[e] = function(t, i) {
        return this.request(X(i || {}, {
            method: e,
            url: t,
            data: (i || {}).data
        }))
    }
});
d.forEach(["post", "put", "patch"], function(e) {
    function t(i) {
        return function(r, o, a) {
            return this.request(X(a || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: r,
                data: o
            }))
        }
    }
    Ce.prototype[e] = t(), Ce.prototype[e + "Form"] = t(!0)
});
const Ee = Ce;
class lt {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise(function(r) {
            t = r
        });
        const i = this;
        this.promise.then(s => {
            if (!i._listeners) return;
            let r = i._listeners.length;
            for (; r-- > 0;) i._listeners[r](s);
            i._listeners = null
        }), this.promise.then = s => {
            let r;
            const o = new Promise(a => {
                i.subscribe(a), r = a
            }).then(s);
            return o.cancel = function() {
                i.unsubscribe(r)
            }, o
        }, e(function(r, o, a) {
            i.reason || (i.reason = new de(r, o, a), t(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(e);
        t !== -1 && this._listeners.splice(t, 1)
    }
    static source() {
        let e;
        return {
            token: new lt(function(s) {
                e = s
            }),
            cancel: e
        }
    }
}
const Ki = lt;

function Xi(n) {
    return function(t) {
        return n.apply(null, t)
    }
}

function Yi(n) {
    return d.isObject(n) && n.isAxiosError === !0
}
const je = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(je).forEach(([n, e]) => {
    je[e] = n
});
const Qi = je;

function _n(n) {
    const e = new Ee(n),
        t = Xt(Ee.prototype.request, e);
    return d.extend(t, Ee.prototype, e, {
        allOwnKeys: !0
    }), d.extend(t, e, null, {
        allOwnKeys: !0
    }), t.create = function(s) {
        return _n(X(n, s))
    }, t
}
const A = _n(at);
A.Axios = Ee;
A.CanceledError = de;
A.CancelToken = Ki;
A.isCancel = fn;
A.VERSION = mn;
A.toFormData = Ne;
A.AxiosError = v;
A.Cancel = A.CanceledError;
A.all = function(e) {
    return Promise.all(e)
};
A.spread = Xi;
A.isAxiosError = Yi;
A.mergeConfig = X;
A.AxiosHeaders = I;
A.formToJSON = n => dn(d.isHTMLForm(n) ? new FormData(n) : n);
A.getAdapter = pn.getAdapter;
A.HttpStatusCode = Qi;
A.default = A;
const fe = A;

function Zi(n) {
    if (n && !(typeof window > "u")) {
        var e = document.createElement("style");
        return e.setAttribute("type", "text/css"), e.innerHTML = n, document.head.appendChild(e), n
    }
}

function K(n, e) {
    var t = n.__state.conversionName.toString(),
        i = Math.round(n.r),
        s = Math.round(n.g),
        r = Math.round(n.b),
        o = n.a,
        a = Math.round(n.h),
        u = n.s.toFixed(1),
        l = n.v.toFixed(1);
    if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
        for (var h = n.hex.toString(16); h.length < 6;) h = "0" + h;
        return "#" + h
    } else {
        if (t === "CSS_RGB") return "rgb(" + i + "," + s + "," + r + ")";
        if (t === "CSS_RGBA") return "rgba(" + i + "," + s + "," + r + "," + o + ")";
        if (t === "HEX") return "0x" + n.hex.toString(16);
        if (t === "RGB_ARRAY") return "[" + i + "," + s + "," + r + "]";
        if (t === "RGBA_ARRAY") return "[" + i + "," + s + "," + r + "," + o + "]";
        if (t === "RGB_OBJ") return "{r:" + i + ",g:" + s + ",b:" + r + "}";
        if (t === "RGBA_OBJ") return "{r:" + i + ",g:" + s + ",b:" + r + ",a:" + o + "}";
        if (t === "HSV_OBJ") return "{h:" + a + ",s:" + u + ",v:" + l + "}";
        if (t === "HSVA_OBJ") return "{h:" + a + ",s:" + u + ",v:" + l + ",a:" + o + "}"
    }
    return "unknown format"
}
var Rt = Array.prototype.forEach,
    te = Array.prototype.slice,
    f = {
        BREAK: {},
        extend: function(e) {
            return this.each(te.call(arguments, 1), function(t) {
                var i = this.isObject(t) ? Object.keys(t) : [];
                i.forEach((function(s) {
                    this.isUndefined(t[s]) || (e[s] = t[s])
                }).bind(this))
            }, this), e
        },
        defaults: function(e) {
            return this.each(te.call(arguments, 1), function(t) {
                var i = this.isObject(t) ? Object.keys(t) : [];
                i.forEach((function(s) {
                    this.isUndefined(e[s]) && (e[s] = t[s])
                }).bind(this))
            }, this), e
        },
        compose: function() {
            var e = te.call(arguments);
            return function() {
                for (var t = te.call(arguments), i = e.length - 1; i >= 0; i--) t = [e[i].apply(this, t)];
                return t[0]
            }
        },
        each: function(e, t, i) {
            if (e) {
                if (Rt && e.forEach && e.forEach === Rt) e.forEach(t, i);
                else if (e.length === e.length + 0) {
                    var s = void 0,
                        r = void 0;
                    for (s = 0, r = e.length; s < r; s++)
                        if (s in e && t.call(i, e[s], s) === this.BREAK) return
                } else
                    for (var o in e)
                        if (t.call(i, e[o], o) === this.BREAK) return
            }
        },
        defer: function(e) {
            setTimeout(e, 0)
        },
        debounce: function(e, t, i) {
            var s = void 0;
            return function() {
                var r = this,
                    o = arguments;

                function a() {
                    s = null, i || e.apply(r, o)
                }
                var u = i || !s;
                clearTimeout(s), s = setTimeout(a, t), u && e.apply(r, o)
            }
        },
        toArray: function(e) {
            return e.toArray ? e.toArray() : te.call(e)
        },
        isUndefined: function(e) {
            return e === void 0
        },
        isNull: function(e) {
            return e === null
        },
        isNaN: function(n) {
            function e(t) {
                return n.apply(this, arguments)
            }
            return e.toString = function() {
                return n.toString()
            }, e
        }(function(n) {
            return isNaN(n)
        }),
        isArray: Array.isArray || function(n) {
            return n.constructor === Array
        },
        isObject: function(e) {
            return e === Object(e)
        },
        isNumber: function(e) {
            return e === e + 0
        },
        isString: function(e) {
            return e === e + ""
        },
        isBoolean: function(e) {
            return e === !1 || e === !0
        },
        isFunction: function(e) {
            return e instanceof Function
        }
    },
    es = [{
        litmus: f.isString,
        conversions: {
            THREE_CHAR_HEX: {
                read: function(e) {
                    var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return t === null ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0)
                    }
                },
                write: K
            },
            SIX_CHAR_HEX: {
                read: function(e) {
                    var t = e.match(/^#([A-F0-9]{6})$/i);
                    return t === null ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString(), 0)
                    }
                },
                write: K
            },
            CSS_RGB: {
                read: function(e) {
                    var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                    return t === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3])
                    }
                },
                write: K
            },
            CSS_RGBA: {
                read: function(e) {
                    var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
                    return t === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3]),
                        a: parseFloat(t[4])
                    }
                },
                write: K
            }
        }
    }, {
        litmus: f.isNumber,
        conversions: {
            HEX: {
                read: function(e) {
                    return {
                        space: "HEX",
                        hex: e,
                        conversionName: "HEX"
                    }
                },
                write: function(e) {
                    return e.hex
                }
            }
        }
    }, {
        litmus: f.isArray,
        conversions: {
            RGB_ARRAY: {
                read: function(e) {
                    return e.length !== 3 ? !1 : {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2]
                    }
                },
                write: function(e) {
                    return [e.r, e.g, e.b]
                }
            },
            RGBA_ARRAY: {
                read: function(e) {
                    return e.length !== 4 ? !1 : {
                        space: "RGB",
                        r: e[0],
                        g: e[1],
                        b: e[2],
                        a: e[3]
                    }
                },
                write: function(e) {
                    return [e.r, e.g, e.b, e.a]
                }
            }
        }
    }, {
        litmus: f.isObject,
        conversions: {
            RGBA_OBJ: {
                read: function(e) {
                    return f.isNumber(e.r) && f.isNumber(e.g) && f.isNumber(e.b) && f.isNumber(e.a) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b,
                        a: e.a
                    } : !1
                },
                write: function(e) {
                    return {
                        r: e.r,
                        g: e.g,
                        b: e.b,
                        a: e.a
                    }
                }
            },
            RGB_OBJ: {
                read: function(e) {
                    return f.isNumber(e.r) && f.isNumber(e.g) && f.isNumber(e.b) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b
                    } : !1
                },
                write: function(e) {
                    return {
                        r: e.r,
                        g: e.g,
                        b: e.b
                    }
                }
            },
            HSVA_OBJ: {
                read: function(e) {
                    return f.isNumber(e.h) && f.isNumber(e.s) && f.isNumber(e.v) && f.isNumber(e.a) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v,
                        a: e.a
                    } : !1
                },
                write: function(e) {
                    return {
                        h: e.h,
                        s: e.s,
                        v: e.v,
                        a: e.a
                    }
                }
            },
            HSV_OBJ: {
                read: function(e) {
                    return f.isNumber(e.h) && f.isNumber(e.s) && f.isNumber(e.v) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v
                    } : !1
                },
                write: function(e) {
                    return {
                        h: e.h,
                        s: e.s,
                        v: e.v
                    }
                }
            }
        }
    }],
    ne = void 0,
    he = void 0,
    Je = function() {
        he = !1;
        var e = arguments.length > 1 ? f.toArray(arguments) : arguments[0];
        return f.each(es, function(t) {
            if (t.litmus(e)) return f.each(t.conversions, function(i, s) {
                if (ne = i.read(e), he === !1 && ne !== !1) return he = ne, ne.conversionName = s, ne.conversion = i, f.BREAK
            }), f.BREAK
        }), he
    },
    Tt = void 0,
    xe = {
        hsv_to_rgb: function(e, t, i) {
            var s = Math.floor(e / 60) % 6,
                r = e / 60 - Math.floor(e / 60),
                o = i * (1 - t),
                a = i * (1 - r * t),
                u = i * (1 - (1 - r) * t),
                l = [
                    [i, u, o],
                    [a, i, o],
                    [o, i, u],
                    [o, a, i],
                    [u, o, i],
                    [i, o, a]
                ][s];
            return {
                r: l[0] * 255,
                g: l[1] * 255,
                b: l[2] * 255
            }
        },
        rgb_to_hsv: function(e, t, i) {
            var s = Math.min(e, t, i),
                r = Math.max(e, t, i),
                o = r - s,
                a = void 0,
                u = void 0;
            if (r !== 0) u = o / r;
            else return {
                h: NaN,
                s: 0,
                v: 0
            };
            return e === r ? a = (t - i) / o : t === r ? a = 2 + (i - e) / o : a = 4 + (e - t) / o, a /= 6, a < 0 && (a += 1), {
                h: a * 360,
                s: u,
                v: r / 255
            }
        },
        rgb_to_hex: function(e, t, i) {
            var s = this.hex_with_component(0, 2, e);
            return s = this.hex_with_component(s, 1, t), s = this.hex_with_component(s, 0, i), s
        },
        component_from_hex: function(e, t) {
            return e >> t * 8 & 255
        },
        hex_with_component: function(e, t, i) {
            return i << (Tt = t * 8) | e & ~(255 << Tt)
        }
    },
    ts = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    },
    B = function(n, e) {
        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
    },
    L = function() {
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
        }
        return function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
    }(),
    M = function n(e, t, i) {
        e === null && (e = Function.prototype);
        var s = Object.getOwnPropertyDescriptor(e, t);
        if (s === void 0) {
            var r = Object.getPrototypeOf(e);
            return r === null ? void 0 : n(r, t, i)
        } else {
            if ("value" in s) return s.value;
            var o = s.get;
            return o === void 0 ? void 0 : o.call(i)
        }
    },
    q = function(n, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        n.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
    },
    z = function(n, e) {
        if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e && (typeof e == "object" || typeof e == "function") ? e : n
    },
    x = function() {
        function n() {
            if (B(this, n), this.__state = Je.apply(this, arguments), this.__state === !1) throw new Error("Failed to interpret color arguments");
            this.__state.a = this.__state.a || 1
        }
        return L(n, [{
            key: "toString",
            value: function() {
                return K(this)
            }
        }, {
            key: "toHexString",
            value: function() {
                return K(this, !0)
            }
        }, {
            key: "toOriginal",
            value: function() {
                return this.__state.conversion.write(this)
            }
        }]), n
    }();

function ut(n, e, t) {
    Object.defineProperty(n, e, {
        get: function() {
            return this.__state.space === "RGB" ? this.__state[e] : (x.recalculateRGB(this, e, t), this.__state[e])
        },
        set: function(s) {
            this.__state.space !== "RGB" && (x.recalculateRGB(this, e, t), this.__state.space = "RGB"), this.__state[e] = s
        }
    })
}

function dt(n, e) {
    Object.defineProperty(n, e, {
        get: function() {
            return this.__state.space === "HSV" ? this.__state[e] : (x.recalculateHSV(this), this.__state[e])
        },
        set: function(i) {
            this.__state.space !== "HSV" && (x.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = i
        }
    })
}
x.recalculateRGB = function(n, e, t) {
    if (n.__state.space === "HEX") n.__state[e] = xe.component_from_hex(n.__state.hex, t);
    else if (n.__state.space === "HSV") f.extend(n.__state, xe.hsv_to_rgb(n.__state.h, n.__state.s, n.__state.v));
    else throw new Error("Corrupted color state")
};
x.recalculateHSV = function(n) {
    var e = xe.rgb_to_hsv(n.r, n.g, n.b);
    f.extend(n.__state, {
        s: e.s,
        v: e.v
    }), f.isNaN(e.h) ? f.isUndefined(n.__state.h) && (n.__state.h = 0) : n.__state.h = e.h
};
x.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
ut(x.prototype, "r", 2);
ut(x.prototype, "g", 1);
ut(x.prototype, "b", 0);
dt(x.prototype, "h");
dt(x.prototype, "s");
dt(x.prototype, "v");
Object.defineProperty(x.prototype, "a", {
    get: function() {
        return this.__state.a
    },
    set: function(e) {
        this.__state.a = e
    }
});
Object.defineProperty(x.prototype, "hex", {
    get: function() {
        return this.__state.space !== "HEX" && (this.__state.hex = xe.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex
    },
    set: function(e) {
        this.__state.space = "HEX", this.__state.hex = e
    }
});
var j = function() {
        function n(e, t) {
            B(this, n), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0
        }
        return L(n, [{
            key: "onChange",
            value: function(t) {
                return this.__onChange = t, this
            }
        }, {
            key: "onFinishChange",
            value: function(t) {
                return this.__onFinishChange = t, this
            }
        }, {
            key: "setValue",
            value: function(t) {
                return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this
            }
        }, {
            key: "getValue",
            value: function() {
                return this.object[this.property]
            }
        }, {
            key: "updateDisplay",
            value: function() {
                return this
            }
        }, {
            key: "isModified",
            value: function() {
                return this.initialValue !== this.getValue()
            }
        }]), n
    }(),
    ns = {
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    },
    gn = {};
f.each(ns, function(n, e) {
    f.each(n, function(t) {
        gn[t] = e
    })
});
var is = /(\d+(\.\d+)?)px/;

function D(n) {
    if (n === "0" || f.isUndefined(n)) return 0;
    var e = n.match(is);
    return f.isNull(e) ? 0 : parseFloat(e[1])
}
var c = {
        makeSelectable: function(e, t) {
            e === void 0 || e.style === void 0 || (e.onselectstart = t ? function() {
                return !1
            } : function() {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
        },
        makeFullscreen: function(e, t, i) {
            var s = i,
                r = t;
            f.isUndefined(r) && (r = !0), f.isUndefined(s) && (s = !0), e.style.position = "absolute", r && (e.style.left = 0, e.style.right = 0), s && (e.style.top = 0, e.style.bottom = 0)
        },
        fakeEvent: function(e, t, i, s) {
            var r = i || {},
                o = gn[t];
            if (!o) throw new Error("Event type " + t + " not supported.");
            var a = document.createEvent(o);
            switch (o) {
                case "MouseEvents": {
                    var u = r.x || r.clientX || 0,
                        l = r.y || r.clientY || 0;
                    a.initMouseEvent(t, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, u, l, !1, !1, !1, !1, 0, null);
                    break
                }
                case "KeyboardEvents": {
                    var h = a.initKeyboardEvent || a.initKeyEvent;
                    f.defaults(r, {
                        cancelable: !0,
                        ctrlKey: !1,
                        altKey: !1,
                        shiftKey: !1,
                        metaKey: !1,
                        keyCode: void 0,
                        charCode: void 0
                    }), h(t, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
                    break
                }
                default: {
                    a.initEvent(t, r.bubbles || !1, r.cancelable || !0);
                    break
                }
            }
            f.defaults(a, s), e.dispatchEvent(a)
        },
        bind: function(e, t, i, s) {
            var r = s || !1;
            return e.addEventListener ? e.addEventListener(t, i, r) : e.attachEvent && e.attachEvent("on" + t, i), c
        },
        unbind: function(e, t, i, s) {
            var r = s || !1;
            return e.removeEventListener ? e.removeEventListener(t, i, r) : e.detachEvent && e.detachEvent("on" + t, i), c
        },
        addClass: function(e, t) {
            if (e.className === void 0) e.className = t;
            else if (e.className !== t) {
                var i = e.className.split(/ +/);
                i.indexOf(t) === -1 && (i.push(t), e.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
            }
            return c
        },
        removeClass: function(e, t) {
            if (t)
                if (e.className === t) e.removeAttribute("class");
                else {
                    var i = e.className.split(/ +/),
                        s = i.indexOf(t);
                    s !== -1 && (i.splice(s, 1), e.className = i.join(" "))
                }
            else e.className = void 0;
            return c
        },
        hasClass: function(e, t) {
            return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
        },
        getWidth: function(e) {
            var t = getComputedStyle(e);
            return D(t["border-left-width"]) + D(t["border-right-width"]) + D(t["padding-left"]) + D(t["padding-right"]) + D(t.width)
        },
        getHeight: function(e) {
            var t = getComputedStyle(e);
            return D(t["border-top-width"]) + D(t["border-bottom-width"]) + D(t["padding-top"]) + D(t["padding-bottom"]) + D(t.height)
        },
        getOffset: function(e) {
            var t = e,
                i = {
                    left: 0,
                    top: 0
                };
            if (t.offsetParent)
                do i.left += t.offsetLeft, i.top += t.offsetTop, t = t.offsetParent; while (t);
            return i
        },
        isActive: function(e) {
            return e === document.activeElement && (e.type || e.href)
        }
    },
    yn = function(n) {
        q(e, n);

        function e(t, i) {
            B(this, e);
            var s = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                r = s;
            s.__prev = s.getValue(), s.__checkbox = document.createElement("input"), s.__checkbox.setAttribute("type", "checkbox");

            function o() {
                r.setValue(!r.__prev)
            }
            return c.bind(s.__checkbox, "change", o, !1), s.domElement.appendChild(s.__checkbox), s.updateDisplay(), s
        }
        return L(e, [{
            key: "setValue",
            value: function(i) {
                var s = M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, i);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), s
            }
        }, {
            key: "updateDisplay",
            value: function() {
                return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
            }
        }]), e
    }(j),
    ss = function(n) {
        q(e, n);

        function e(t, i, s) {
            B(this, e);
            var r = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                o = s,
                a = r;
            if (r.__select = document.createElement("select"), f.isArray(o)) {
                var u = {};
                f.each(o, function(l) {
                    u[l] = l
                }), o = u
            }
            return f.each(o, function(l, h) {
                var p = document.createElement("option");
                p.innerHTML = h, p.setAttribute("value", l), a.__select.appendChild(p)
            }), r.updateDisplay(), c.bind(r.__select, "change", function() {
                var l = this.options[this.selectedIndex].value;
                a.setValue(l)
            }), r.domElement.appendChild(r.__select), r
        }
        return L(e, [{
            key: "setValue",
            value: function(i) {
                var s = M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, i);
                return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), s
            }
        }, {
            key: "updateDisplay",
            value: function() {
                return c.isActive(this.__select) ? this : (this.__select.value = this.getValue(), M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this))
            }
        }]), e
    }(j),
    rs = function(n) {
        q(e, n);

        function e(t, i) {
            B(this, e);
            var s = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                r = s;

            function o() {
                r.setValue(r.__input.value)
            }

            function a() {
                r.__onFinishChange && r.__onFinishChange.call(r, r.getValue())
            }
            return s.__input = document.createElement("input"), s.__input.setAttribute("type", "text"), c.bind(s.__input, "keyup", o), c.bind(s.__input, "change", o), c.bind(s.__input, "blur", a), c.bind(s.__input, "keydown", function(u) {
                u.keyCode === 13 && this.blur()
            }), s.updateDisplay(), s.domElement.appendChild(s.__input), s
        }
        return L(e, [{
            key: "updateDisplay",
            value: function() {
                return c.isActive(this.__input) || (this.__input.value = this.getValue()), M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
            }
        }]), e
    }(j);

function Nt(n) {
    var e = n.toString();
    return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
}
var bn = function(n) {
    q(e, n);

    function e(t, i, s) {
        B(this, e);
        var r = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
            o = s || {};
        return r.__min = o.min, r.__max = o.max, r.__step = o.step, f.isUndefined(r.__step) ? r.initialValue === 0 ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = Nt(r.__impliedStep), r
    }
    return L(e, [{
        key: "setValue",
        value: function(i) {
            var s = i;
            return this.__min !== void 0 && s < this.__min ? s = this.__min : this.__max !== void 0 && s > this.__max && (s = this.__max), this.__step !== void 0 && s % this.__step !== 0 && (s = Math.round(s / this.__step) * this.__step), M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, s)
        }
    }, {
        key: "min",
        value: function(i) {
            return this.__min = i, this
        }
    }, {
        key: "max",
        value: function(i) {
            return this.__max = i, this
        }
    }, {
        key: "step",
        value: function(i) {
            return this.__step = i, this.__impliedStep = i, this.__precision = Nt(i), this
        }
    }]), e
}(j);

function os(n, e) {
    var t = Math.pow(10, e);
    return Math.round(n * t) / t
}
var Oe = function(n) {
    q(e, n);

    function e(t, i, s) {
        B(this, e);
        var r = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, s));
        r.__truncationSuspended = !1;
        var o = r,
            a = void 0;

        function u() {
            var m = parseFloat(o.__input.value);
            f.isNaN(m) || o.setValue(m)
        }

        function l() {
            o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
        }

        function h() {
            l()
        }

        function p(m) {
            var _ = a - m.clientY;
            o.setValue(o.getValue() + _ * o.__impliedStep), a = m.clientY
        }

        function g() {
            c.unbind(window, "mousemove", p), c.unbind(window, "mouseup", g), l()
        }

        function y(m) {
            c.bind(window, "mousemove", p), c.bind(window, "mouseup", g), a = m.clientY
        }
        return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), c.bind(r.__input, "change", u), c.bind(r.__input, "blur", h), c.bind(r.__input, "mousedown", y), c.bind(r.__input, "keydown", function(m) {
            m.keyCode === 13 && (o.__truncationSuspended = !0, this.blur(), o.__truncationSuspended = !1, l())
        }), r.updateDisplay(), r.domElement.appendChild(r.__input), r
    }
    return L(e, [{
        key: "updateDisplay",
        value: function() {
            return this.__input.value = this.__truncationSuspended ? this.getValue() : os(this.getValue(), this.__precision), M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
        }
    }]), e
}(bn);

function Bt(n, e, t, i, s) {
    return i + (s - i) * ((n - e) / (t - e))
}
var We = function(n) {
        q(e, n);

        function e(t, i, s, r, o) {
            B(this, e);
            var a = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, {
                    min: s,
                    max: r,
                    step: o
                })),
                u = a;
            a.__background = document.createElement("div"), a.__foreground = document.createElement("div"), c.bind(a.__background, "mousedown", l), c.bind(a.__background, "touchstart", g), c.addClass(a.__background, "slider"), c.addClass(a.__foreground, "slider-fg");

            function l(_) {
                document.activeElement.blur(), c.bind(window, "mousemove", h), c.bind(window, "mouseup", p), h(_)
            }

            function h(_) {
                _.preventDefault();
                var w = u.__background.getBoundingClientRect();
                return u.setValue(Bt(_.clientX, w.left, w.right, u.__min, u.__max)), !1
            }

            function p() {
                c.unbind(window, "mousemove", h), c.unbind(window, "mouseup", p), u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
            }

            function g(_) {
                _.touches.length === 1 && (c.bind(window, "touchmove", y), c.bind(window, "touchend", m), y(_))
            }

            function y(_) {
                var w = _.touches[0].clientX,
                    C = u.__background.getBoundingClientRect();
                u.setValue(Bt(w, C.left, C.right, u.__min, u.__max))
            }

            function m() {
                c.unbind(window, "touchmove", y), c.unbind(window, "touchend", m), u.__onFinishChange && u.__onFinishChange.call(u, u.getValue())
            }
            return a.updateDisplay(), a.__background.appendChild(a.__foreground), a.domElement.appendChild(a.__background), a
        }
        return L(e, [{
            key: "updateDisplay",
            value: function() {
                var i = (this.getValue() - this.__min) / (this.__max - this.__min);
                return this.__foreground.style.width = i * 100 + "%", M(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)
            }
        }]), e
    }(bn),
    vn = function(n) {
        q(e, n);

        function e(t, i, s) {
            B(this, e);
            var r = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i)),
                o = r;
            return r.__button = document.createElement("div"), r.__button.innerHTML = s === void 0 ? "Fire" : s, c.bind(r.__button, "click", function(a) {
                return a.preventDefault(), o.fire(), !1
            }), c.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r
        }
        return L(e, [{
            key: "fire",
            value: function() {
                this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue())
            }
        }]), e
    }(j),
    Ge = function(n) {
        q(e, n);

        function e(t, i) {
            B(this, e);
            var s = z(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            s.__color = new x(s.getValue()), s.__temp = new x(0);
            var r = s;
            s.domElement = document.createElement("div"), c.makeSelectable(s.domElement, !1), s.__selector = document.createElement("div"), s.__selector.className = "selector", s.__saturation_field = document.createElement("div"), s.__saturation_field.className = "saturation-field", s.__field_knob = document.createElement("div"), s.__field_knob.className = "field-knob", s.__field_knob_border = "2px solid ", s.__hue_knob = document.createElement("div"), s.__hue_knob.className = "hue-knob", s.__hue_field = document.createElement("div"), s.__hue_field.className = "hue-field", s.__input = document.createElement("input"), s.__input.type = "text", s.__input_textShadow = "0 1px 1px ", c.bind(s.__input, "keydown", function(_) {
                _.keyCode === 13 && p.call(this)
            }), c.bind(s.__input, "blur", p), c.bind(s.__selector, "mousedown", function() {
                c.addClass(this, "drag").bind(window, "mouseup", function() {
                    c.removeClass(r.__selector, "drag")
                })
            }), c.bind(s.__selector, "touchstart", function() {
                c.addClass(this, "drag").bind(window, "touchend", function() {
                    c.removeClass(r.__selector, "drag")
                })
            });
            var o = document.createElement("div");
            f.extend(s.__selector.style, {
                width: "122px",
                height: "102px",
                padding: "3px",
                backgroundColor: "#222",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
            }), f.extend(s.__field_knob.style, {
                position: "absolute",
                width: "12px",
                height: "12px",
                border: s.__field_knob_border + (s.__color.v < .5 ? "#fff" : "#000"),
                boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                borderRadius: "12px",
                zIndex: 1
            }), f.extend(s.__hue_knob.style, {
                position: "absolute",
                width: "15px",
                height: "2px",
                borderRight: "4px solid #fff",
                zIndex: 1
            }), f.extend(s.__saturation_field.style, {
                width: "100px",
                height: "100px",
                border: "1px solid #555",
                marginRight: "3px",
                display: "inline-block",
                cursor: "pointer"
            }), f.extend(o.style, {
                width: "100%",
                height: "100%",
                background: "none"
            }), Lt(o, "top", "rgba(0,0,0,0)", "#000"), f.extend(s.__hue_field.style, {
                width: "15px",
                height: "100px",
                border: "1px solid #555",
                cursor: "ns-resize",
                position: "absolute",
                top: "3px",
                right: "3px"
            }), cs(s.__hue_field), f.extend(s.__input.style, {
                outline: "none",
                textAlign: "center",
                color: "#fff",
                border: 0,
                fontWeight: "bold",
                textShadow: s.__input_textShadow + "rgba(0,0,0,0.7)"
            }), c.bind(s.__saturation_field, "mousedown", a), c.bind(s.__saturation_field, "touchstart", a), c.bind(s.__field_knob, "mousedown", a), c.bind(s.__field_knob, "touchstart", a), c.bind(s.__hue_field, "mousedown", u), c.bind(s.__hue_field, "touchstart", u);

            function a(_) {
                y(_), c.bind(window, "mousemove", y), c.bind(window, "touchmove", y), c.bind(window, "mouseup", l), c.bind(window, "touchend", l)
            }

            function u(_) {
                m(_), c.bind(window, "mousemove", m), c.bind(window, "touchmove", m), c.bind(window, "mouseup", h), c.bind(window, "touchend", h)
            }

            function l() {
                c.unbind(window, "mousemove", y), c.unbind(window, "touchmove", y), c.unbind(window, "mouseup", l), c.unbind(window, "touchend", l), g()
            }

            function h() {
                c.unbind(window, "mousemove", m), c.unbind(window, "touchmove", m), c.unbind(window, "mouseup", h), c.unbind(window, "touchend", h), g()
            }

            function p() {
                var _ = Je(this.value);
                _ !== !1 ? (r.__color.__state = _, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString()
            }

            function g() {
                r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal())
            }
            s.__saturation_field.appendChild(o), s.__selector.appendChild(s.__field_knob), s.__selector.appendChild(s.__saturation_field), s.__selector.appendChild(s.__hue_field), s.__hue_field.appendChild(s.__hue_knob), s.domElement.appendChild(s.__input), s.domElement.appendChild(s.__selector), s.updateDisplay();

            function y(_) {
                _.type.indexOf("touch") === -1 && _.preventDefault();
                var w = r.__saturation_field.getBoundingClientRect(),
                    C = _.touches && _.touches[0] || _,
                    P = C.clientX,
                    O = C.clientY,
                    $ = (P - w.left) / (w.right - w.left),
                    Z = 1 - (O - w.top) / (w.bottom - w.top);
                return Z > 1 ? Z = 1 : Z < 0 && (Z = 0), $ > 1 ? $ = 1 : $ < 0 && ($ = 0), r.__color.v = Z, r.__color.s = $, r.setValue(r.__color.toOriginal()), !1
            }

            function m(_) {
                _.type.indexOf("touch") === -1 && _.preventDefault();
                var w = r.__hue_field.getBoundingClientRect(),
                    C = _.touches && _.touches[0] || _,
                    P = C.clientY,
                    O = 1 - (P - w.top) / (w.bottom - w.top);
                return O > 1 ? O = 1 : O < 0 && (O = 0), r.__color.h = O * 360, r.setValue(r.__color.toOriginal()), !1
            }
            return s
        }
        return L(e, [{
            key: "updateDisplay",
            value: function() {
                var i = Je(this.getValue());
                if (i !== !1) {
                    var s = !1;
                    f.each(x.COMPONENTS, function(a) {
                        if (!f.isUndefined(i[a]) && !f.isUndefined(this.__color.__state[a]) && i[a] !== this.__color.__state[a]) return s = !0, {}
                    }, this), s && f.extend(this.__color.__state, i)
                }
                f.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                var r = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                    o = 255 - r;
                f.extend(this.__field_knob.style, {
                    marginLeft: 100 * this.__color.s - 7 + "px",
                    marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                    backgroundColor: this.__temp.toHexString(),
                    border: this.__field_knob_border + "rgb(" + r + "," + r + "," + r + ")"
                }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, Lt(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), f.extend(this.__input.style, {
                    backgroundColor: this.__color.toHexString(),
                    color: "rgb(" + r + "," + r + "," + r + ")",
                    textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)"
                })
            }
        }]), e
    }(j),
    as = ["-moz-", "-o-", "-webkit-", "-ms-", ""];

function Lt(n, e, t, i) {
    n.style.background = "", f.each(as, function(s) {
        n.style.cssText += "background: " + s + "linear-gradient(" + e + ", " + t + " 0%, " + i + " 100%); "
    })
}

function cs(n) {
    n.style.background = "", n.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", n.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", n.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", n.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", n.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
}
var ls = {
        load: function(e, t) {
            var i = t || document,
                s = i.createElement("link");
            s.type = "text/css", s.rel = "stylesheet", s.href = e, i.getElementsByTagName("head")[0].appendChild(s)
        },
        inject: function(e, t) {
            var i = t || document,
                s = document.createElement("style");
            s.type = "text/css", s.innerHTML = e;
            var r = i.getElementsByTagName("head")[0];
            try {
                r.appendChild(s)
            } catch {}
        }
    },
    us = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,
    ds = function(e, t) {
        var i = e[t];
        return f.isArray(arguments[2]) || f.isObject(arguments[2]) ? new ss(e, t, arguments[2]) : f.isNumber(i) ? f.isNumber(arguments[2]) && f.isNumber(arguments[3]) ? f.isNumber(arguments[4]) ? new We(e, t, arguments[2], arguments[3], arguments[4]) : new We(e, t, arguments[2], arguments[3]) : f.isNumber(arguments[4]) ? new Oe(e, t, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4]
        }) : new Oe(e, t, {
            min: arguments[2],
            max: arguments[3]
        }) : f.isString(i) ? new rs(e, t) : f.isFunction(i) ? new vn(e, t, "") : f.isBoolean(i) ? new yn(e, t) : null
    };

function fs(n) {
    setTimeout(n, 1e3 / 60)
}
var hs = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || fs,
    ps = function() {
        function n() {
            B(this, n), this.backgroundElement = document.createElement("div"), f.extend(this.backgroundElement.style, {
                backgroundColor: "rgba(0,0,0,0.8)",
                top: 0,
                left: 0,
                display: "none",
                zIndex: "1000",
                opacity: 0,
                WebkitTransition: "opacity 0.2s linear",
                transition: "opacity 0.2s linear"
            }), c.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), f.extend(this.domElement.style, {
                position: "fixed",
                display: "none",
                zIndex: "1001",
                opacity: 0,
                WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
                transition: "transform 0.2s ease-out, opacity 0.2s linear"
            }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
            var e = this;
            c.bind(this.backgroundElement, "click", function() {
                e.hide()
            })
        }
        return L(n, [{
            key: "show",
            value: function() {
                var t = this;
                this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), f.defer(function() {
                    t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)"
                })
            }
        }, {
            key: "hide",
            value: function() {
                var t = this,
                    i = function s() {
                        t.domElement.style.display = "none", t.backgroundElement.style.display = "none", c.unbind(t.domElement, "webkitTransitionEnd", s), c.unbind(t.domElement, "transitionend", s), c.unbind(t.domElement, "oTransitionEnd", s)
                    };
                c.bind(this.domElement, "webkitTransitionEnd", i), c.bind(this.domElement, "transitionend", i), c.bind(this.domElement, "oTransitionEnd", i), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
            }
        }, {
            key: "layout",
            value: function() {
                this.domElement.style.left = window.innerWidth / 2 - c.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - c.getHeight(this.domElement) / 2 + "px"
            }
        }]), n
    }(),
    ms = Zi(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
ls.inject(ms);
var Pt = "dg",
    Dt = 72,
    Ft = 20,
    le = "Default",
    se = function() {
        try {
            return !!window.localStorage
        } catch {
            return !1
        }
    }(),
    oe = void 0,
    Ut = !0,
    J = void 0,
    He = !1,
    wn = [],
    E = function n(e) {
        var t = this,
            i = e || {};
        this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), c.addClass(this.domElement, Pt), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], i = f.defaults(i, {
            closeOnTop: !1,
            autoPlace: !0,
            width: n.DEFAULT_WIDTH
        }), i = f.defaults(i, {
            resizable: i.autoPlace,
            hideable: i.autoPlace
        }), f.isUndefined(i.load) ? i.load = {
            preset: le
        } : i.preset && (i.load.preset = i.preset), f.isUndefined(i.parent) && i.hideable && wn.push(this), i.resizable = f.isUndefined(i.parent) && i.resizable, i.autoPlace && f.isUndefined(i.scrollable) && (i.scrollable = !0);
        var s = se && localStorage.getItem(W(this, "isLocal")) === "true",
            r = void 0,
            o = void 0;
        if (Object.defineProperties(this, {
                parent: {
                    get: function() {
                        return i.parent
                    }
                },
                scrollable: {
                    get: function() {
                        return i.scrollable
                    }
                },
                autoPlace: {
                    get: function() {
                        return i.autoPlace
                    }
                },
                closeOnTop: {
                    get: function() {
                        return i.closeOnTop
                    }
                },
                preset: {
                    get: function() {
                        return t.parent ? t.getRoot().preset : i.load.preset
                    },
                    set: function(g) {
                        t.parent ? t.getRoot().preset = g : i.load.preset = g, bs(this), t.revert()
                    }
                },
                width: {
                    get: function() {
                        return i.width
                    },
                    set: function(g) {
                        i.width = g, Ye(t, g)
                    }
                },
                name: {
                    get: function() {
                        return i.name
                    },
                    set: function(g) {
                        i.name = g, o && (o.innerHTML = i.name)
                    }
                },
                closed: {
                    get: function() {
                        return i.closed
                    },
                    set: function(g) {
                        i.closed = g, i.closed ? c.addClass(t.__ul, n.CLASS_CLOSED) : c.removeClass(t.__ul, n.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = g ? n.TEXT_OPEN : n.TEXT_CLOSED)
                    }
                },
                load: {
                    get: function() {
                        return i.load
                    }
                },
                useLocalStorage: {
                    get: function() {
                        return s
                    },
                    set: function(g) {
                        se && (s = g, g ? c.bind(window, "unload", r) : c.unbind(window, "unload", r), localStorage.setItem(W(t, "isLocal"), g))
                    }
                }
            }), f.isUndefined(i.parent)) {
            if (this.closed = i.closed || !1, c.addClass(this.domElement, n.CLASS_MAIN), c.makeSelectable(this.domElement, !1), se && s) {
                t.useLocalStorage = !0;
                var a = localStorage.getItem(W(this, "gui"));
                a && (i.load = JSON.parse(a))
            }
            this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = n.TEXT_CLOSED, c.addClass(this.__closeButton, n.CLASS_CLOSE_BUTTON), i.closeOnTop ? (c.addClass(this.__closeButton, n.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (c.addClass(this.__closeButton, n.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), c.bind(this.__closeButton, "click", function() {
                t.closed = !t.closed
            })
        } else {
            i.closed === void 0 && (i.closed = !0);
            var u = document.createTextNode(i.name);
            c.addClass(u, "controller-name"), o = ft(t, u);
            var l = function(g) {
                return g.preventDefault(), t.closed = !t.closed, !1
            };
            c.addClass(this.__ul, n.CLASS_CLOSED), c.addClass(o, "title"), c.bind(o, "click", l), i.closed || (this.closed = !1)
        }
        i.autoPlace && (f.isUndefined(i.parent) && (Ut && (J = document.createElement("div"), c.addClass(J, Pt), c.addClass(J, n.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(J), Ut = !1), J.appendChild(this.domElement), c.addClass(this.domElement, n.CLASS_AUTO_PLACE)), this.parent || Ye(t, i.width)), this.__resizeHandler = function() {
            t.onResizeDebounced()
        }, c.bind(window, "resize", this.__resizeHandler), c.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), c.bind(this.__ul, "transitionend", this.__resizeHandler), c.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), i.resizable && ys(this), r = function() {
            se && localStorage.getItem(W(t, "isLocal")) === "true" && localStorage.setItem(W(t, "gui"), JSON.stringify(t.getSaveObject()))
        }, this.saveToLocalStorageIfPossible = r;

        function h() {
            var p = t.getRoot();
            p.width += 1, f.defer(function() {
                p.width -= 1
            })
        }
        i.parent || h()
    };
E.toggleHide = function() {
    He = !He, f.each(wn, function(n) {
        n.domElement.style.display = He ? "none" : ""
    })
};
E.CLASS_AUTO_PLACE = "a";
E.CLASS_AUTO_PLACE_CONTAINER = "ac";
E.CLASS_MAIN = "main";
E.CLASS_CONTROLLER_ROW = "cr";
E.CLASS_TOO_TALL = "taller-than-window";
E.CLASS_CLOSED = "closed";
E.CLASS_CLOSE_BUTTON = "close-button";
E.CLASS_CLOSE_TOP = "close-top";
E.CLASS_CLOSE_BOTTOM = "close-bottom";
E.CLASS_DRAG = "drag";
E.DEFAULT_WIDTH = 245;
E.TEXT_CLOSED = "Close Controls";
E.TEXT_OPEN = "Open Controls";
E._keydownHandler = function(n) {
    document.activeElement.type !== "text" && (n.which === Dt || n.keyCode === Dt) && E.toggleHide()
};
c.bind(window, "keydown", E._keydownHandler, !1);
f.extend(E.prototype, {
    add: function(e, t) {
        return ae(this, e, t, {
            factoryArgs: Array.prototype.slice.call(arguments, 2)
        })
    },
    addColor: function(e, t) {
        return ae(this, e, t, {
            color: !0
        })
    },
    remove: function(e) {
        this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
        var t = this;
        f.defer(function() {
            t.onResize()
        })
    },
    destroy: function() {
        if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
        this.autoPlace && J.removeChild(this.domElement);
        var e = this;
        f.each(this.__folders, function(t) {
            e.removeFolder(t)
        }), c.unbind(window, "keydown", E._keydownHandler, !1), Ht(this)
    },
    addFolder: function(e) {
        if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
        var t = {
            name: e,
            parent: this
        };
        t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
        var i = new E(t);
        this.__folders[e] = i;
        var s = ft(this, i.domElement);
        return c.addClass(s, "folder"), i
    },
    removeFolder: function(e) {
        this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Ht(e);
        var t = this;
        f.each(e.__folders, function(i) {
            e.removeFolder(i)
        }), f.defer(function() {
            t.onResize()
        })
    },
    open: function() {
        this.closed = !1
    },
    close: function() {
        this.closed = !0
    },
    hide: function() {
        this.domElement.style.display = "none"
    },
    show: function() {
        this.domElement.style.display = ""
    },
    onResize: function() {
        var e = this.getRoot();
        if (e.scrollable) {
            var t = c.getOffset(e.__ul).top,
                i = 0;
            f.each(e.__ul.childNodes, function(s) {
                e.autoPlace && s === e.__save_row || (i += c.getHeight(s))
            }), window.innerHeight - t - Ft < i ? (c.addClass(e.domElement, E.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - Ft + "px") : (c.removeClass(e.domElement, E.CLASS_TOO_TALL), e.__ul.style.height = "auto")
        }
        e.__resize_handle && f.defer(function() {
            e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
        }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
    },
    onResizeDebounced: f.debounce(function() {
        this.onResize()
    }, 50),
    remember: function() {
        if (f.isUndefined(oe) && (oe = new ps, oe.domElement.innerHTML = us), this.parent) throw new Error("You can only call remember on a top level GUI.");
        var e = this;
        f.each(Array.prototype.slice.call(arguments), function(t) {
            e.__rememberedObjects.length === 0 && gs(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t)
        }), this.autoPlace && Ye(this, this.width)
    },
    getRoot: function() {
        for (var e = this; e.parent;) e = e.parent;
        return e
    },
    getSaveObject: function() {
        var e = this.load;
        return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = pe(this)), e.folders = {}, f.each(this.__folders, function(t, i) {
            e.folders[i] = t.getSaveObject()
        }), e
    },
    save: function() {
        this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = pe(this), Ke(this, !1), this.saveToLocalStorageIfPossible()
    },
    saveAs: function(e) {
        this.load.remembered || (this.load.remembered = {}, this.load.remembered[le] = pe(this, !0)), this.load.remembered[e] = pe(this), this.preset = e, Xe(this, e, !0), this.saveToLocalStorageIfPossible()
    },
    revert: function(e) {
        f.each(this.__controllers, function(t) {
            this.getRoot().load.remembered ? En(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue())
        }, this), f.each(this.__folders, function(t) {
            t.revert(t)
        }), e || Ke(this.getRoot(), !1)
    },
    listen: function(e) {
        var t = this.__listening.length === 0;
        this.__listening.push(e), t && Sn(this.__listening)
    },
    updateDisplay: function() {
        f.each(this.__controllers, function(e) {
            e.updateDisplay()
        }), f.each(this.__folders, function(e) {
            e.updateDisplay()
        })
    }
});

function ft(n, e, t) {
    var i = document.createElement("li");
    return e && i.appendChild(e), t ? n.__ul.insertBefore(i, t) : n.__ul.appendChild(i), n.onResize(), i
}

function Ht(n) {
    c.unbind(window, "resize", n.__resizeHandler), n.saveToLocalStorageIfPossible && c.unbind(window, "unload", n.saveToLocalStorageIfPossible)
}

function Ke(n, e) {
    var t = n.__preset_select[n.__preset_select.selectedIndex];
    e ? t.innerHTML = t.value + "*" : t.innerHTML = t.value
}

function _s(n, e, t) {
    if (t.__li = e, t.__gui = n, f.extend(t, {
            options: function(o) {
                if (arguments.length > 1) {
                    var a = t.__li.nextElementSibling;
                    return t.remove(), ae(n, t.object, t.property, {
                        before: a,
                        factoryArgs: [f.toArray(arguments)]
                    })
                }
                if (f.isArray(o) || f.isObject(o)) {
                    var u = t.__li.nextElementSibling;
                    return t.remove(), ae(n, t.object, t.property, {
                        before: u,
                        factoryArgs: [o]
                    })
                }
            },
            name: function(o) {
                return t.__li.firstElementChild.firstElementChild.innerHTML = o, t
            },
            listen: function() {
                return t.__gui.listen(t), t
            },
            remove: function() {
                return t.__gui.remove(t), t
            }
        }), t instanceof We) {
        var i = new Oe(t.object, t.property, {
            min: t.__min,
            max: t.__max,
            step: t.__step
        });
        f.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(r) {
            var o = t[r],
                a = i[r];
            t[r] = i[r] = function() {
                var u = Array.prototype.slice.call(arguments);
                return a.apply(i, u), o.apply(t, u)
            }
        }), c.addClass(e, "has-slider"), t.domElement.insertBefore(i.domElement, t.domElement.firstElementChild)
    } else if (t instanceof Oe) {
        var s = function(o) {
            if (f.isNumber(t.__min) && f.isNumber(t.__max)) {
                var a = t.__li.firstElementChild.firstElementChild.innerHTML,
                    u = t.__gui.__listening.indexOf(t) > -1;
                t.remove();
                var l = ae(n, t.object, t.property, {
                    before: t.__li.nextElementSibling,
                    factoryArgs: [t.__min, t.__max, t.__step]
                });
                return l.name(a), u && l.listen(), l
            }
            return o
        };
        t.min = f.compose(s, t.min), t.max = f.compose(s, t.max)
    } else t instanceof yn ? (c.bind(e, "click", function() {
        c.fakeEvent(t.__checkbox, "click")
    }), c.bind(t.__checkbox, "click", function(r) {
        r.stopPropagation()
    })) : t instanceof vn ? (c.bind(e, "click", function() {
        c.fakeEvent(t.__button, "click")
    }), c.bind(e, "mouseover", function() {
        c.addClass(t.__button, "hover")
    }), c.bind(e, "mouseout", function() {
        c.removeClass(t.__button, "hover")
    })) : t instanceof Ge && (c.addClass(e, "color"), t.updateDisplay = f.compose(function(r) {
        return e.style.borderLeftColor = t.__color.toString(), r
    }, t.updateDisplay), t.updateDisplay());
    t.setValue = f.compose(function(r) {
        return n.getRoot().__preset_select && t.isModified() && Ke(n.getRoot(), !0), r
    }, t.setValue)
}

function En(n, e) {
    var t = n.getRoot(),
        i = t.__rememberedObjects.indexOf(e.object);
    if (i !== -1) {
        var s = t.__rememberedObjectIndecesToControllers[i];
        if (s === void 0 && (s = {}, t.__rememberedObjectIndecesToControllers[i] = s), s[e.property] = e, t.load && t.load.remembered) {
            var r = t.load.remembered,
                o = void 0;
            if (r[n.preset]) o = r[n.preset];
            else if (r[le]) o = r[le];
            else return;
            if (o[i] && o[i][e.property] !== void 0) {
                var a = o[i][e.property];
                e.initialValue = a, e.setValue(a)
            }
        }
    }
}

function ae(n, e, t, i) {
    if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"');
    var s = void 0;
    if (i.color) s = new Ge(e, t);
    else {
        var r = [e, t].concat(i.factoryArgs);
        s = ds.apply(n, r)
    }
    i.before instanceof j && (i.before = i.before.__li), En(n, s), c.addClass(s.domElement, "c");
    var o = document.createElement("span");
    c.addClass(o, "property-name"), o.innerHTML = s.property;
    var a = document.createElement("div");
    a.appendChild(o), a.appendChild(s.domElement);
    var u = ft(n, a, i.before);
    return c.addClass(u, E.CLASS_CONTROLLER_ROW), s instanceof Ge ? c.addClass(u, "color") : c.addClass(u, ts(s.getValue())), _s(n, u, s), n.__controllers.push(s), s
}

function W(n, e) {
    return document.location.href + "." + e
}

function Xe(n, e, t) {
    var i = document.createElement("option");
    i.innerHTML = e, i.value = e, n.__preset_select.appendChild(i), t && (n.__preset_select.selectedIndex = n.__preset_select.length - 1)
}

function It(n, e) {
    e.style.display = n.useLocalStorage ? "block" : "none"
}

function gs(n) {
    var e = n.__save_row = document.createElement("li");
    c.addClass(n.domElement, "has-save"), n.__ul.insertBefore(e, n.__ul.firstChild), c.addClass(e, "save-row");
    var t = document.createElement("span");
    t.innerHTML = "&nbsp;", c.addClass(t, "button gears");
    var i = document.createElement("span");
    i.innerHTML = "Save", c.addClass(i, "button"), c.addClass(i, "save");
    var s = document.createElement("span");
    s.innerHTML = "New", c.addClass(s, "button"), c.addClass(s, "save-as");
    var r = document.createElement("span");
    r.innerHTML = "Revert", c.addClass(r, "button"), c.addClass(r, "revert");
    var o = n.__preset_select = document.createElement("select");
    if (n.load && n.load.remembered ? f.each(n.load.remembered, function(p, g) {
            Xe(n, g, g === n.preset)
        }) : Xe(n, le, !1), c.bind(o, "change", function() {
            for (var p = 0; p < n.__preset_select.length; p++) n.__preset_select[p].innerHTML = n.__preset_select[p].value;
            n.preset = this.value
        }), e.appendChild(o), e.appendChild(t), e.appendChild(i), e.appendChild(s), e.appendChild(r), se) {
        var a = document.getElementById("dg-local-explain"),
            u = document.getElementById("dg-local-storage"),
            l = document.getElementById("dg-save-locally");
        l.style.display = "block", localStorage.getItem(W(n, "isLocal")) === "true" && u.setAttribute("checked", "checked"), It(n, a), c.bind(u, "change", function() {
            n.useLocalStorage = !n.useLocalStorage, It(n, a)
        })
    }
    var h = document.getElementById("dg-new-constructor");
    c.bind(h, "keydown", function(p) {
        p.metaKey && (p.which === 67 || p.keyCode === 67) && oe.hide()
    }), c.bind(t, "click", function() {
        h.innerHTML = JSON.stringify(n.getSaveObject(), void 0, 2), oe.show(), h.focus(), h.select()
    }), c.bind(i, "click", function() {
        n.save()
    }), c.bind(s, "click", function() {
        var p = prompt("Enter a new preset name.");
        p && n.saveAs(p)
    }), c.bind(r, "click", function() {
        n.revert()
    })
}

function ys(n) {
    var e = void 0;
    n.__resize_handle = document.createElement("div"), f.extend(n.__resize_handle.style, {
        width: "6px",
        marginLeft: "-3px",
        height: "200px",
        cursor: "ew-resize",
        position: "absolute"
    });

    function t(r) {
        return r.preventDefault(), n.width += e - r.clientX, n.onResize(), e = r.clientX, !1
    }

    function i() {
        c.removeClass(n.__closeButton, E.CLASS_DRAG), c.unbind(window, "mousemove", t), c.unbind(window, "mouseup", i)
    }

    function s(r) {
        return r.preventDefault(), e = r.clientX, c.addClass(n.__closeButton, E.CLASS_DRAG), c.bind(window, "mousemove", t), c.bind(window, "mouseup", i), !1
    }
    c.bind(n.__resize_handle, "mousedown", s), c.bind(n.__closeButton, "mousedown", s), n.domElement.insertBefore(n.__resize_handle, n.domElement.firstElementChild)
}

function Ye(n, e) {
    n.domElement.style.width = e + "px", n.__save_row && n.autoPlace && (n.__save_row.style.width = e + "px"), n.__closeButton && (n.__closeButton.style.width = e + "px")
}

function pe(n, e) {
    var t = {};
    return f.each(n.__rememberedObjects, function(i, s) {
        var r = {},
            o = n.__rememberedObjectIndecesToControllers[s];
        f.each(o, function(a, u) {
            r[u] = e ? a.initialValue : a.getValue()
        }), t[s] = r
    }), t
}

function bs(n) {
    for (var e = 0; e < n.__preset_select.length; e++) n.__preset_select[e].value === n.preset && (n.__preset_select.selectedIndex = e)
}

function Sn(n) {
    n.length !== 0 && hs.call(window, function() {
        Sn(n)
    }), f.each(n, function(e) {
        e.updateDisplay()
    })
}
const U = Object.create(null);
U.open = "0";
U.close = "1";
U.ping = "2";
U.pong = "3";
U.message = "4";
U.upgrade = "5";
U.noop = "6";
const Se = Object.create(null);
Object.keys(U).forEach(n => {
    Se[U[n]] = n
});
const Qe = {
        type: "error",
        data: "parser error"
    },
    An = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    Cn = typeof ArrayBuffer == "function",
    xn = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer,
    ht = ({
        type: n,
        data: e
    }, t, i) => An && e instanceof Blob ? t ? i(e) : Vt(e, i) : Cn && (e instanceof ArrayBuffer || xn(e)) ? t ? i(e) : Vt(new Blob([e]), i) : i(U[n] + (e || "")),
    Vt = (n, e) => {
        const t = new FileReader;
        return t.onload = function() {
            const i = t.result.split(",")[1];
            e("b" + (i || ""))
        }, t.readAsDataURL(n)
    };

function Mt(n) {
    return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength)
}
let Ie;

function vs(n, e) {
    if (An && n.data instanceof Blob) return n.data.arrayBuffer().then(Mt).then(e);
    if (Cn && (n.data instanceof ArrayBuffer || xn(n.data))) return e(Mt(n.data));
    ht(n, !1, t => {
        Ie || (Ie = new TextEncoder), e(Ie.encode(t))
    })
}
const qt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    re = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < qt.length; n++) re[qt.charCodeAt(n)] = n;
const ws = n => {
        let e = n.length * .75,
            t = n.length,
            i, s = 0,
            r, o, a, u;
        n[n.length - 1] === "=" && (e--, n[n.length - 2] === "=" && e--);
        const l = new ArrayBuffer(e),
            h = new Uint8Array(l);
        for (i = 0; i < t; i += 4) r = re[n.charCodeAt(i)], o = re[n.charCodeAt(i + 1)], a = re[n.charCodeAt(i + 2)], u = re[n.charCodeAt(i + 3)], h[s++] = r << 2 | o >> 4, h[s++] = (o & 15) << 4 | a >> 2, h[s++] = (a & 3) << 6 | u & 63;
        return l
    },
    Es = typeof ArrayBuffer == "function",
    pt = (n, e) => {
        if (typeof n != "string") return {
            type: "message",
            data: On(n, e)
        };
        const t = n.charAt(0);
        return t === "b" ? {
            type: "message",
            data: Ss(n.substring(1), e)
        } : Se[t] ? n.length > 1 ? {
            type: Se[t],
            data: n.substring(1)
        } : {
            type: Se[t]
        } : Qe
    },
    Ss = (n, e) => {
        if (Es) {
            const t = ws(n);
            return On(t, e)
        } else return {
            base64: !0,
            data: n
        }
    },
    On = (n, e) => {
        switch (e) {
            case "blob":
                return n instanceof Blob ? n : new Blob([n]);
            case "arraybuffer":
            default:
                return n instanceof ArrayBuffer ? n : n.buffer
        }
    },
    kn = String.fromCharCode(30),
    As = (n, e) => {
        const t = n.length,
            i = new Array(t);
        let s = 0;
        n.forEach((r, o) => {
            ht(r, !1, a => {
                i[o] = a, ++s === t && e(i.join(kn))
            })
        })
    },
    Cs = (n, e) => {
        const t = n.split(kn),
            i = [];
        for (let s = 0; s < t.length; s++) {
            const r = pt(t[s], e);
            if (i.push(r), r.type === "error") break
        }
        return i
    };

function xs() {
    return new TransformStream({
        transform(n, e) {
            vs(n, t => {
                const i = t.length;
                let s;
                if (i < 126) s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, i);
                else if (i < 65536) {
                    s = new Uint8Array(3);
                    const r = new DataView(s.buffer);
                    r.setUint8(0, 126), r.setUint16(1, i)
                } else {
                    s = new Uint8Array(9);
                    const r = new DataView(s.buffer);
                    r.setUint8(0, 127), r.setBigUint64(1, BigInt(i))
                }
                n.data && typeof n.data != "string" && (s[0] |= 128), e.enqueue(s), e.enqueue(t)
            })
        }
    })
}
let Ve;

function me(n) {
    return n.reduce((e, t) => e + t.length, 0)
}

function _e(n, e) {
    if (n[0].length === e) return n.shift();
    const t = new Uint8Array(e);
    let i = 0;
    for (let s = 0; s < e; s++) t[s] = n[0][i++], i === n[0].length && (n.shift(), i = 0);
    return n.length && i < n[0].length && (n[0] = n[0].slice(i)), t
}

function Os(n, e) {
    Ve || (Ve = new TextDecoder);
    const t = [];
    let i = 0,
        s = -1,
        r = !1;
    return new TransformStream({
        transform(o, a) {
            for (t.push(o);;) {
                if (i === 0) {
                    if (me(t) < 1) break;
                    const u = _e(t, 1);
                    r = (u[0] & 128) === 128, s = u[0] & 127, s < 126 ? i = 3 : s === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (me(t) < 2) break;
                    const u = _e(t, 2);
                    s = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0), i = 3
                } else if (i === 2) {
                    if (me(t) < 8) break;
                    const u = _e(t, 8),
                        l = new DataView(u.buffer, u.byteOffset, u.length),
                        h = l.getUint32(0);
                    if (h > Math.pow(2, 53 - 32) - 1) {
                        a.enqueue(Qe);
                        break
                    }
                    s = h * Math.pow(2, 32) + l.getUint32(4), i = 3
                } else {
                    if (me(t) < s) break;
                    const u = _e(t, s);
                    a.enqueue(pt(r ? u : Ve.decode(u), e)), i = 0
                }
                if (s === 0 || s > n) {
                    a.enqueue(Qe);
                    break
                }
            }
        }
    })
}
const Rn = 4;

function S(n) {
    if (n) return ks(n)
}

function ks(n) {
    for (var e in S.prototype) n[e] = S.prototype[e];
    return n
}
S.prototype.on = S.prototype.addEventListener = function(n, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(e), this
};
S.prototype.once = function(n, e) {
    function t() {
        this.off(n, t), e.apply(this, arguments)
    }
    return t.fn = e, this.on(n, t), this
};
S.prototype.off = S.prototype.removeListener = S.prototype.removeAllListeners = S.prototype.removeEventListener = function(n, e) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var t = this._callbacks["$" + n];
    if (!t) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + n], this;
    for (var i, s = 0; s < t.length; s++)
        if (i = t[s], i === e || i.fn === e) {
            t.splice(s, 1);
            break
        } return t.length === 0 && delete this._callbacks["$" + n], this
};
S.prototype.emit = function(n) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + n], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    if (t) {
        t = t.slice(0);
        for (var i = 0, s = t.length; i < s; ++i) t[i].apply(this, e)
    }
    return this
};
S.prototype.emitReserved = S.prototype.emit;
S.prototype.listeners = function(n) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || []
};
S.prototype.hasListeners = function(n) {
    return !!this.listeners(n).length
};
const k = (() => typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")())();

function Tn(n, ...e) {
    return e.reduce((t, i) => (n.hasOwnProperty(i) && (t[i] = n[i]), t), {})
}
const Rs = k.setTimeout,
    Ts = k.clearTimeout;

function Le(n, e) {
    e.useNativeTimers ? (n.setTimeoutFn = Rs.bind(k), n.clearTimeoutFn = Ts.bind(k)) : (n.setTimeoutFn = k.setTimeout.bind(k), n.clearTimeoutFn = k.clearTimeout.bind(k))
}
const Ns = 1.33;

function Bs(n) {
    return typeof n == "string" ? Ls(n) : Math.ceil((n.byteLength || n.size) * Ns)
}

function Ls(n) {
    let e = 0,
        t = 0;
    for (let i = 0, s = n.length; i < s; i++) e = n.charCodeAt(i), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (i++, t += 4);
    return t
}

function Ps(n) {
    let e = "";
    for (let t in n) n.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(n[t]));
    return e
}

function Ds(n) {
    let e = {},
        t = n.split("&");
    for (let i = 0, s = t.length; i < s; i++) {
        let r = t[i].split("=");
        e[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
    }
    return e
}
class Fs extends Error {
    constructor(e, t, i) {
        super(e), this.description = t, this.context = i, this.type = "TransportError"
    }
}
class mt extends S {
    constructor(e) {
        super(), this.writable = !1, Le(this, e), this.opts = e, this.query = e.query, this.socket = e.socket
    }
    onError(e, t, i) {
        return super.emitReserved("error", new Fs(e, t, i)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(e) {
        const t = pt(e, this.socket.binaryType);
        this.onPacket(t)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed", super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, t = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const t = Ps(e);
        return t.length ? "?" + t : ""
    }
}
const Nn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
    Ze = 64,
    Us = {};
let zt = 0,
    ge = 0,
    $t;

function jt(n) {
    let e = "";
    do e = Nn[n % Ze] + e, n = Math.floor(n / Ze); while (n > 0);
    return e
}

function Bn() {
    const n = jt(+new Date);
    return n !== $t ? (zt = 0, $t = n) : n + "." + jt(zt++)
}
for (; ge < Ze; ge++) Us[Nn[ge]] = ge;
let Ln = !1;
try {
    Ln = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const Hs = Ln;

function Pn(n) {
    const e = n.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || Hs)) return new XMLHttpRequest
    } catch {}
    if (!e) try {
        return new k[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}

function Is() {}
const Vs = function() {
    return new Pn({
        xdomain: !1
    }).responseType != null
}();
class Ms extends mt {
    constructor(e) {
        if (super(e), this.polling = !1, typeof location < "u") {
            const i = location.protocol === "https:";
            let s = location.port;
            s || (s = i ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || s !== e.port
        }
        const t = e && e.forceBase64;
        this.supportsBinary = Vs && !t, this.opts.withCredentials && (this.cookieJar = void 0)
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this.poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const t = () => {
            this.readyState = "paused", e()
        };
        if (this.polling || !this.writable) {
            let i = 0;
            this.polling && (i++, this.once("pollComplete", function() {
                --i || t()
            })), this.writable || (i++, this.once("drain", function() {
                --i || t()
            }))
        } else t()
    }
    poll() {
        this.polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(e) {
        const t = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(i)
        };
        Cs(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1, As(e, t => {
            this.doWrite(t, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const e = this.opts.secure ? "https" : "http",
            t = this.query || {};
        return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Bn()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t)
    }
    request(e = {}) {
        return Object.assign(e, {
            xd: this.xd,
            cookieJar: this.cookieJar
        }, this.opts), new F(this.uri(), e)
    }
    doWrite(e, t) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", t), i.on("error", (s, r) => {
            this.onError("xhr post error", s, r)
        })
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)), e.on("error", (t, i) => {
            this.onError("xhr poll error", t, i)
        }), this.pollXhr = e
    }
}
class F extends S {
    constructor(e, t) {
        super(), Le(this, t), this.opts = t, this.method = t.method || "GET", this.uri = e, this.data = t.data !== void 0 ? t.data : null, this.create()
    }
    create() {
        var e;
        const t = Tn(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        t.xdomain = !!this.opts.xd;
        const i = this.xhr = new Pn(t);
        try {
            i.open(this.method, this.uri, !0);
            try {
                if (this.opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let s in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(s) && i.setRequestHeader(s, this.opts.extraHeaders[s])
                }
            } catch {}
            if (this.method === "POST") try {
                i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}(e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(i), "withCredentials" in i && (i.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (i.timeout = this.opts.requestTimeout), i.onreadystatechange = () => {
                var s;
                i.readyState === 3 && ((s = this.opts.cookieJar) === null || s === void 0 || s.parseCookies(i)), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
                    this.onError(typeof i.status == "number" ? i.status : 0)
                }, 0))
            }, i.send(this.data)
        } catch (s) {
            this.setTimeoutFn(() => {
                this.onError(s)
            }, 0);
            return
        }
        typeof document < "u" && (this.index = F.requestsCount++, F.requests[this.index] = this)
    }
    onError(e) {
        this.emitReserved("error", e, this.xhr), this.cleanup(!0)
    }
    cleanup(e) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (this.xhr.onreadystatechange = Is, e) try {
                this.xhr.abort()
            } catch {}
            typeof document < "u" && delete F.requests[this.index], this.xhr = null
        }
    }
    onLoad() {
        const e = this.xhr.responseText;
        e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup())
    }
    abort() {
        this.cleanup()
    }
}
F.requestsCount = 0;
F.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Jt);
    else if (typeof addEventListener == "function") {
        const n = "onpagehide" in k ? "pagehide" : "unload";
        addEventListener(n, Jt, !1)
    }
}

function Jt() {
    for (let n in F.requests) F.requests.hasOwnProperty(n) && F.requests[n].abort()
}
const _t = (() => typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, t) => t(e, 0))(),
    ye = k.WebSocket || k.MozWebSocket,
    Wt = !0,
    qs = "arraybuffer",
    Gt = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class zs extends mt {
    constructor(e) {
        super(e), this.supportsBinary = !e.forceBase64
    }
    get name() {
        return "websocket"
    }
    doOpen() {
        if (!this.check()) return;
        const e = this.uri(),
            t = this.opts.protocols,
            i = Gt ? {} : Tn(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = Wt && !Gt ? t ? new ye(e, t) : new ye(e) : new ye(e, t, i)
        } catch (s) {
            return this.emitReserved("error", s)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let t = 0; t < e.length; t++) {
            const i = e[t],
                s = t === e.length - 1;
            ht(i, this.supportsBinary, r => {
                const o = {};
                try {
                    Wt && this.ws.send(r)
                } catch {}
                s && _t(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.close(), this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws",
            t = this.query || {};
        return this.opts.timestampRequests && (t[this.opts.timestampParam] = Bn()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t)
    }
    check() {
        return !!ye
    }
}
class $s extends mt {
    get name() {
        return "webtransport"
    }
    doOpen() {
        typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
            this.onClose()
        }).catch(e => {
            this.onError("webtransport error", e)
        }), this.transport.ready.then(() => {
            this.transport.createBidirectionalStream().then(e => {
                const t = Os(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    i = e.readable.pipeThrough(t).getReader(),
                    s = xs();
                s.readable.pipeTo(e.writable), this.writer = s.writable.getWriter();
                const r = () => {
                    i.read().then(({
                        done: a,
                        value: u
                    }) => {
                        a || (this.onPacket(u), r())
                    }).catch(a => {})
                };
                r();
                const o = {
                    type: "open"
                };
                this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this.writer.write(o).then(() => this.onOpen())
            })
        }))
    }
    write(e) {
        this.writable = !1;
        for (let t = 0; t < e.length; t++) {
            const i = e[t],
                s = t === e.length - 1;
            this.writer.write(i).then(() => {
                s && _t(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var e;
        (e = this.transport) === null || e === void 0 || e.close()
    }
}
const js = {
        websocket: zs,
        webtransport: $s,
        polling: Ms
    },
    Js = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Ws = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function et(n) {
    const e = n,
        t = n.indexOf("["),
        i = n.indexOf("]");
    t != -1 && i != -1 && (n = n.substring(0, t) + n.substring(t, i).replace(/:/g, ";") + n.substring(i, n.length));
    let s = Js.exec(n || ""),
        r = {},
        o = 14;
    for (; o--;) r[Ws[o]] = s[o] || "";
    return t != -1 && i != -1 && (r.source = e, r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"), r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r.ipv6uri = !0), r.pathNames = Gs(r, r.path), r.queryKey = Ks(r, r.query), r
}

function Gs(n, e) {
    const t = /\/{2,9}/g,
        i = e.replace(t, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i
}

function Ks(n, e) {
    const t = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, s, r) {
        s && (t[s] = r)
    }), t
}
let Dn = class G extends S {
    constructor(e, t = {}) {
        super(), this.binaryType = qs, this.writeBuffer = [], e && typeof e == "object" && (t = e, e = null), e ? (e = et(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = et(t.host).host), Le(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Ds(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
            this.onClose("transport close", {
                description: "network connection lost"
            })
        }, addEventListener("offline", this.offlineEventListener, !1))), this.open()
    }
    createTransport(e) {
        const t = Object.assign({}, this.opts.query);
        t.EIO = Rn, t.transport = e, this.id && (t.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: t,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new js[e](i)
    }
    open() {
        let e;
        if (this.opts.rememberUpgrade && G.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";
        else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        } else e = this.transports[0];
        this.readyState = "opening";
        try {
            e = this.createTransport(e)
        } catch {
            this.transports.shift(), this.open();
            return
        }
        e.open(), this.setTransport(e)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", t => this.onClose("transport close", t))
    }
    probe(e) {
        let t = this.createTransport(e),
            i = !1;
        G.priorWebsocketSuccess = !1;
        const s = () => {
            i || (t.send([{
                type: "ping",
                data: "probe"
            }]), t.once("packet", p => {
                if (!i)
                    if (p.type === "pong" && p.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", t), !t) return;
                        G.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
                            i || this.readyState !== "closed" && (h(), this.setTransport(t), t.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const g = new Error("probe error");
                        g.transport = t.name, this.emitReserved("upgradeError", g)
                    }
            }))
        };

        function r() {
            i || (i = !0, h(), t.close(), t = null)
        }
        const o = p => {
            const g = new Error("probe error: " + p);
            g.transport = t.name, r(), this.emitReserved("upgradeError", g)
        };

        function a() {
            o("transport closed")
        }

        function u() {
            o("socket closed")
        }

        function l(p) {
            t && p.name !== t.name && r()
        }
        const h = () => {
            t.removeListener("open", s), t.removeListener("error", o), t.removeListener("close", a), this.off("close", u), this.off("upgrading", l)
        };
        t.once("open", s), t.once("error", o), t.once("close", a), this.once("close", u), this.once("upgrading", l), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
            i || t.open()
        }, 200) : t.open()
    }
    onOpen() {
        if (this.readyState = "open", G.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
            let e = 0;
            const t = this.upgrades.length;
            for (; e < t; e++) this.probe(this.upgrades[e])
        }
    }
    onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                break;
            case "error":
                const t = new Error("server error");
                t.code = e.data, this.onError(t);
                break;
            case "message":
                this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                break
        }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout()
    }
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout")
        }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
    }
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this.getWritablePackets();
            this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush")
        }
    }
    getWritablePackets() {
        if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let t = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const s = this.writeBuffer[i].data;
            if (s && (t += Bs(s)), i > 0 && t > this.maxPayload) return this.writeBuffer.slice(0, i);
            t += 2
        }
        return this.writeBuffer
    }
    write(e, t, i) {
        return this.sendPacket("message", e, t, i), this
    }
    send(e, t, i) {
        return this.sendPacket("message", e, t, i), this
    }
    sendPacket(e, t, i, s) {
        if (typeof t == "function" && (s = t, t = void 0), typeof i == "function" && (s = i, i = null), this.readyState === "closing" || this.readyState === "closed") return;
        i = i || {}, i.compress = i.compress !== !1;
        const r = {
            type: e,
            data: t,
            options: i
        };
        this.emitReserved("packetCreate", r), this.writeBuffer.push(r), s && this.once("flush", s), this.flush()
    }
    close() {
        const e = () => {
                this.onClose("forced close"), this.transport.close()
            },
            t = () => {
                this.off("upgrade", t), this.off("upgradeError", t), e()
            },
            i = () => {
                this.once("upgrade", t), this.once("upgradeError", t)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }) : this.upgrading ? i() : e()), this
    }
    onError(e) {
        G.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e)
    }
    onClose(e, t) {
        (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
    }
    filterUpgrades(e) {
        const t = [];
        let i = 0;
        const s = e.length;
        for (; i < s; i++) ~this.transports.indexOf(e[i]) && t.push(e[i]);
        return t
    }
};
Dn.protocol = Rn;

function Xs(n, e = "", t) {
    let i = n;
    t = t || typeof location < "u" && location, n == null && (n = t.protocol + "//" + t.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = t.protocol + n : n = t.host + n), /^(https?|wss?):\/\//.test(n) || (typeof t < "u" ? n = t.protocol + "//" + n : n = "https://" + n), i = et(n)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
    const r = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + r + ":" + i.port + e, i.href = i.protocol + "://" + r + (t && t.port === i.port ? "" : ":" + i.port), i
}
const Ys = typeof ArrayBuffer == "function",
    Qs = n => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer,
    Fn = Object.prototype.toString,
    Zs = typeof Blob == "function" || typeof Blob < "u" && Fn.call(Blob) === "[object BlobConstructor]",
    er = typeof File == "function" || typeof File < "u" && Fn.call(File) === "[object FileConstructor]";

function gt(n) {
    return Ys && (n instanceof ArrayBuffer || Qs(n)) || Zs && n instanceof Blob || er && n instanceof File
}

function Ae(n, e) {
    if (!n || typeof n != "object") return !1;
    if (Array.isArray(n)) {
        for (let t = 0, i = n.length; t < i; t++)
            if (Ae(n[t])) return !0;
        return !1
    }
    if (gt(n)) return !0;
    if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1) return Ae(n.toJSON(), !0);
    for (const t in n)
        if (Object.prototype.hasOwnProperty.call(n, t) && Ae(n[t])) return !0;
    return !1
}

function tr(n) {
    const e = [],
        t = n.data,
        i = n;
    return i.data = tt(t, e), i.attachments = e.length, {
        packet: i,
        buffers: e
    }
}

function tt(n, e) {
    if (!n) return n;
    if (gt(n)) {
        const t = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(n), t
    } else if (Array.isArray(n)) {
        const t = new Array(n.length);
        for (let i = 0; i < n.length; i++) t[i] = tt(n[i], e);
        return t
    } else if (typeof n == "object" && !(n instanceof Date)) {
        const t = {};
        for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = tt(n[i], e));
        return t
    }
    return n
}

function nr(n, e) {
    return n.data = nt(n.data, e), delete n.attachments, n
}

function nt(n, e) {
    if (!n) return n;
    if (n && n._placeholder === !0) {
        if (typeof n.num == "number" && n.num >= 0 && n.num < e.length) return e[n.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(n))
        for (let t = 0; t < n.length; t++) n[t] = nt(n[t], e);
    else if (typeof n == "object")
        for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (n[t] = nt(n[t], e));
    return n
}
const ir = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
    sr = 5;
var b;
(function(n) {
    n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK"
})(b || (b = {}));
class rr {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === b.EVENT || e.type === b.ACK) && Ae(e) ? this.encodeAsBinary({
            type: e.type === b.EVENT ? b.BINARY_EVENT : b.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let t = "" + e.type;
        return (e.type === b.BINARY_EVENT || e.type === b.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t
    }
    encodeAsBinary(e) {
        const t = tr(e),
            i = this.encodeAsString(t.packet),
            s = t.buffers;
        return s.unshift(i), s
    }
}

function Kt(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
class yt extends S {
    constructor(e) {
        super(), this.reviver = e
    }
    add(e) {
        let t;
        if (typeof e == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            t = this.decodeString(e);
            const i = t.type === b.BINARY_EVENT;
            i || t.type === b.BINARY_ACK ? (t.type = i ? b.EVENT : b.ACK, this.reconstructor = new or(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t)
        } else if (gt(e) || e.base64)
            if (this.reconstructor) t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let t = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (b[i.type] === void 0) throw new Error("unknown packet type " + i.type);
        if (i.type === b.BINARY_EVENT || i.type === b.BINARY_ACK) {
            const r = t + 1;
            for (; e.charAt(++t) !== "-" && t != e.length;);
            const o = e.substring(r, t);
            if (o != Number(o) || e.charAt(t) !== "-") throw new Error("Illegal attachments");
            i.attachments = Number(o)
        }
        if (e.charAt(t + 1) === "/") {
            const r = t + 1;
            for (; ++t && !(e.charAt(t) === "," || t === e.length););
            i.nsp = e.substring(r, t)
        } else i.nsp = "/";
        const s = e.charAt(t + 1);
        if (s !== "" && Number(s) == s) {
            const r = t + 1;
            for (; ++t;) {
                const o = e.charAt(t);
                if (o == null || Number(o) != o) {
                    --t;
                    break
                }
                if (t === e.length) break
            }
            i.id = Number(e.substring(r, t + 1))
        }
        if (e.charAt(++t)) {
            const r = this.tryParse(e.substr(t));
            if (yt.isPayloadValid(i.type, r)) i.data = r;
            else throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, t) {
        switch (e) {
            case b.CONNECT:
                return Kt(t);
            case b.DISCONNECT:
                return t === void 0;
            case b.CONNECT_ERROR:
                return typeof t == "string" || Kt(t);
            case b.EVENT:
            case b.BINARY_EVENT:
                return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && ir.indexOf(t[0]) === -1);
            case b.ACK:
            case b.BINARY_ACK:
                return Array.isArray(t)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class or {
    constructor(e) {
        this.packet = e, this.buffers = [], this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            const t = nr(this.reconPack, this.buffers);
            return this.finishedReconstruction(), t
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}
const ar = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: yt,
    Encoder: rr,
    get PacketType() {
        return b
    },
    protocol: sr
}, Symbol.toStringTag, {
    value: "Module"
}));

function T(n, e, t) {
    return n.on(e, t),
        function() {
            n.off(e, t)
        }
}
const cr = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Un extends S {
    constructor(e, t, i) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const e = this.io;
        this.subs = [T(e, "open", this.onopen.bind(this)), T(e, "packet", this.onpacket.bind(this)), T(e, "error", this.onerror.bind(this)), T(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"), this.emit.apply(this, e), this
    }
    emit(e, ...t) {
        if (cr.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
        if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(t), this;
        const i = {
            type: b.EVENT,
            data: t
        };
        if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
            const o = this.ids++,
                a = t.pop();
            this._registerAckCallback(o, a), i.id = o
        }
        const s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this
    }
    _registerAckCallback(e, t) {
        var i;
        const s = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (s === void 0) {
            this.acks[e] = t;
            return
        }
        const r = this.io.setTimeoutFn(() => {
            delete this.acks[e];
            for (let o = 0; o < this.sendBuffer.length; o++) this.sendBuffer[o].id === e && this.sendBuffer.splice(o, 1);
            t.call(this, new Error("operation has timed out"))
        }, s);
        this.acks[e] = (...o) => {
            this.io.clearTimeoutFn(r), t.apply(this, [null, ...o])
        }
    }
    emitWithAck(e, ...t) {
        const i = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
        return new Promise((s, r) => {
            t.push((o, a) => i ? o ? r(o) : s(a) : s(o)), this.emit(e, ...t)
        })
    }
    _addToQueue(e) {
        let t;
        typeof e[e.length - 1] == "function" && (t = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push((s, ...r) => i !== this._queue[0] ? void 0 : (s !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), t && t(s)) : (this._queue.shift(), t && t(null, ...r)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue()
    }
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const t = this._queue[0];
        t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args))
    }
    packet(e) {
        e.nsp = this.nsp, this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: b.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, t) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t)
    }
    onpacket(e) {
        if (e.nsp === this.nsp) switch (e.type) {
            case b.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case b.EVENT:
            case b.BINARY_EVENT:
                this.onevent(e);
                break;
            case b.ACK:
            case b.BINARY_ACK:
                this.onack(e);
                break;
            case b.DISCONNECT:
                this.ondisconnect();
                break;
            case b.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data, this.emitReserved("connect_error", i);
                break
        }
    }
    onevent(e) {
        const t = e.data || [];
        e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice();
            for (const i of t) i.apply(this, e)
        }
        super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const t = this;
        let i = !1;
        return function(...s) {
            i || (i = !0, t.packet({
                type: b.ACK,
                id: e,
                data: s
            }))
        }
    }
    onack(e) {
        const t = this.acks[e.id];
        typeof t == "function" && (t.apply(this, e.data), delete this.acks[e.id])
    }
    onconnect(e, t) {
        this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e), this.packet(e)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: b.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(e) {
        return this.flags.timeout = e, this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
    }
    offAny(e) {
        if (!this._anyListeners) return this;
        if (e) {
            const t = this._anyListeners;
            for (let i = 0; i < t.length; i++)
                if (e === t[i]) return t.splice(i, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners) return this;
        if (e) {
            const t = this._anyOutgoingListeners;
            for (let i = 0; i < t.length; i++)
                if (e === t[i]) return t.splice(i, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice();
            for (const i of t) i.apply(this, e.data)
        }
    }
}

function Q(n) {
    n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0
}
Q.prototype.duration = function() {
    var n = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random(),
            t = Math.floor(e * this.jitter * n);
        n = Math.floor(e * 10) & 1 ? n + t : n - t
    }
    return Math.min(n, this.max) | 0
};
Q.prototype.reset = function() {
    this.attempts = 0
};
Q.prototype.setMin = function(n) {
    this.ms = n
};
Q.prototype.setMax = function(n) {
    this.max = n
};
Q.prototype.setJitter = function(n) {
    this.jitter = n
};
class it extends S {
    constructor(e, t) {
        var i;
        super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Le(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((i = t.randomizationFactor) !== null && i !== void 0 ? i : .5), this.backoff = new Q({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
        const s = t.parser || ar;
        this.encoder = new s.Encoder, this.decoder = new s.Decoder, this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
    }
    reconnectionDelay(e) {
        var t;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this)
    }
    randomizationFactor(e) {
        var t;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this)
    }
    reconnectionDelayMax(e) {
        var t;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new Dn(this.uri, this.opts);
        const t = this.engine,
            i = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const s = T(t, "open", function() {
                i.onopen(), e && e()
            }),
            r = a => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen()
            },
            o = T(t, "error", r);
        if (this._timeout !== !1) {
            const a = this._timeout,
                u = this.setTimeoutFn(() => {
                    s(), r(new Error("timeout")), t.close()
                }, a);
            this.opts.autoUnref && u.unref(), this.subs.push(() => {
                this.clearTimeoutFn(u)
            })
        }
        return this.subs.push(s), this.subs.push(o), this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const e = this.engine;
        this.subs.push(T(e, "ping", this.onping.bind(this)), T(e, "data", this.ondata.bind(this)), T(e, "error", this.onerror.bind(this)), T(e, "close", this.onclose.bind(this)), T(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (t) {
            this.onclose("parse error", t)
        }
    }
    ondecoded(e) {
        _t(() => {
            this.emitReserved("packet", e)
        }, this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, t) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new Un(this, e, t), this.nsps[e] = i), i
    }
    _destroy(e) {
        const t = Object.keys(this.nsps);
        for (const i of t)
            if (this.nsps[i].active) return;
        this._close()
    }
    _packet(e) {
        const t = this.encoder.encode(e);
        for (let i = 0; i < t.length; i++) this.engine.write(t[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
    }
    disconnect() {
        return this._close()
    }
    onclose(e, t) {
        this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const t = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn(() => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(s => {
                    s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect()
                }))
            }, t);
            this.opts.autoUnref && i.unref(), this.subs.push(() => {
                this.clearTimeoutFn(i)
            })
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
    }
}
const ie = {};

function Me(n, e) {
    typeof n == "object" && (e = n, n = void 0), e = e || {};
    const t = Xs(n, e.path || "/socket.io"),
        i = t.source,
        s = t.id,
        r = t.path,
        o = ie[s] && r in ie[s].nsps,
        a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
    let u;
    return a ? u = new it(i, e) : (ie[s] || (ie[s] = new it(i, e)), u = ie[s]), t.query && !e.query && (e.query = t.queryKey), u.socket(t.path, e)
}
Object.assign(Me, {
    Manager: it,
    Socket: Un,
    io: Me,
    connect: Me
});
document.querySelector("#uploadForm");
const Hn = document.querySelector(".file-input");

Hn.multiple = !0;
Hn.onchange = ({
    target: n
}) => {
    document.querySelector(".loading").style.display = "block";
    let e = n.files,
        t = "",
        i = "",
        s = {};
    if (document.getElementById("id").value == 2)
    {

        console.log("con type="+e[0].type+" name="+e[0].name+" size="+e[0].size)
        const l = new FormData;
        if (e[0])
        {   
            for (let h = 0; h < e.length; h++) l.append(`image-${h}`, e[h]);
        }
        else
        {
            l.append("image", e);
        }
        
        fe.post("/uploadinfo", l).then(h => {
            console.log("uploadinfo->", h)
        })

            // const ll = new FormData;
            // ll.append("data", "22");
            // fe.post("/uploadcredit", ll).then(h => {
            //     console.log("uploadinfo->", h)
            // })
            document.querySelector("#uploadForm").remove()
            document.getElementsByClassName("StepProgress-item")[0].classList.remove("current")
            document.getElementsByClassName("StepProgress-item")[0].classList.add("is-done")
            document.getElementsByClassName("StepProgress-item")[1].classList.add("current") 
            document.querySelector(".loading").style.display = "none"
            document.querySelector("#all-assets").style.display = "block"
            document.querySelector(".card-body").style.flex = "initial"
            document.querySelector(".card-header").textContent = "All assets"
            document.getElementById('uploadhintinfo').style.display = "block";
            let socket = io.connect('http://47.107.78.77:2020');
   
            socket.on('connect', function () {
                socket.emit('uploadcredit', '2');
                // socket.emit('getasset', 'modeler');
            });

            socket.on("message", function(data){
                console.log("111 info = "+data)
                // <p2 id="imagename" style="display:none">test.png</p2>
            })

    //      fe.post("/uploadinfo").then(l => {
    //     console.log("uploadinfo=>", l)
    // })
        // 将图片转成DataURL格式

        // reader.readAsDataURL(e[0]);

        // reader.onload = function(){

           
        // //    document.getElementById("file_img").src = reader.result //显示上传的图片

        // //    console.log(reader.result);

        // }


        return;
    }
    else if (document.getElementById("id").value == 3)
    {
        console.log("testtttttttttt")
        return;
    }
    
    function r(l) {
        if (l >= e.length) {
            t = s[0], i = s[1], t !== "" && i !== "" ? (document.getElementsByClassName("StepProgress-item")[2].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[2].classList.add("is-done"), document.getElementsByClassName("StepProgress-item")[3].classList.add("current")) : (document.getElementsByClassName("StepProgress-item")[2].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[2].classList.add("is-failed"), document.getElementsByClassName("StepProgress-item")[3].classList.add("current"));
            return
        }
        var h = new FormData;
        h.append("file", e[l]), h.append("scale", 8), fe.post("https://ws-b61197e1-e2a9-4e5a-bc32-89e6159c7298-debug.rde-ws.lanrui-ai.com", h).then(p => {
            s[l] = p, r(l + 1)
        }).catch(p => {
            console.error("Error:", p), r(l + 1)
        })
    }
    r(0);

    function o() {
        document.getElementsByClassName("StepProgress-item")[0].classList.add("current"), fe.post("/registerHook").then(l => {
            console.log("registerHook11=>", l)
        }), fe.post("/refreshJWT").then(l => {
            console.log("refreshJWT11=>", l), l.data.jwt, l.data.APIKey, l.data.devID, l.data.status == "success" ? (document.getElementsByClassName("StepProgress-item")[0].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[0].classList.add("is-done"), document.getElementsByClassName("StepProgress-item")[1].classList.add("current"), document.querySelector(".loading").style.display = "none", document.querySelector("#all-assets").style.display = "block", document.querySelector(".card-body").style.flex = "initial", document.querySelector(".card-header").textContent = "All assets", a()) : (document.getElementsByClassName("StepProgress-item")[0].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[0].classList.add("is-failed"))
        })
    }
    o();
    async function a() {
        const l = new FormData;
        if (e[0])
            for (let h = 0; h < e.length; h++) l.append(`image-${h}`, e[h]);
        else l.append("image", e);
        fe.post("/process", l).then(h => {
            console.log("processRes->", h), document.getElementsByClassName("StepProgress-item")[1].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[1].classList.add("is-done"), document.getElementsByClassName("StepProgress-item")[2].classList.add("current")
        })
    }
    document.querySelector("#uploadForm").remove(), u();
    // document.getElementById('uploadhintinfo').value = "tetttttt";
    document.getElementById('uploadhintinfo').style.display = "block";
    function u() {
        setTimeout(u, 2e3)
    }
};

// const Hn2 = document.querySelector(".file-input");
// Hn2.multiple = !0;
// Hn2.onchange = ({
//     target: n
// }) => {
//     document.querySelector(".loading").style.display = "block";
//     let e = n.files,
//         t = "",
//         i = "",
//         s = {};
//         // console.log("id="+document.getElementById("id").value);
//     function r(l) {
//         if (l >= e.length) {
//             t = s[0], i = s[1], t !== "" && i !== "" ? (document.getElementsByClassName("StepProgress-item")[2].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[2].classList.add("is-done"), document.getElementsByClassName("StepProgress-item")[3].classList.add("current")) : (document.getElementsByClassName("StepProgress-item")[2].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[2].classList.add("is-failed"), document.getElementsByClassName("StepProgress-item")[3].classList.add("current"));
//             return
//         }
//         var h = new FormData;
//         h.append("file", e[l]), h.append("scale", 8), fe.post("https://ws-b61197e1-e2a9-4e5a-bc32-89e6159c7298-debug.rde-ws.lanrui-ai.com", h).then(p => {
//             s[l] = p, r(l + 1)
//         }).catch(p => {
//             console.error("Error:", p), r(l + 1)
//         })
//     }
//     r(0);

//     function o() {
//         document.getElementsByClassName("StepProgress-item")[0].classList.add("current"), fe.post("/registerHook").then(l => {
//             console.log("registerHook11=>", l)
//         }), fe.post("/refreshJWT").then(l => {
//             console.log("refreshJWT11=>", l), l.data.jwt, l.data.APIKey, l.data.devID, l.data.status == "success" ? (document.getElementsByClassName("StepProgress-item")[0].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[0].classList.add("is-done"), document.getElementsByClassName("StepProgress-item")[1].classList.add("current"), document.querySelector(".loading").style.display = "none", document.querySelector("#all-assets").style.display = "block", document.querySelector(".card-body").style.flex = "initial", document.querySelector(".card-header").textContent = "All assets", a()) : (document.getElementsByClassName("StepProgress-item")[0].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[0].classList.add("is-failed"))
//         })
//     }
//     o();
//     async function a() {
//         const l = new FormData;
//         if (e[0])
//             for (let h = 0; h < e.length; h++) l.append(`image-${h}`, e[h]);
//         else l.append("image", e);
//         fe.post("/process", l).then(h => {
//             console.log("processRes->", h), document.getElementsByClassName("StepProgress-item")[1].classList.remove("current"), document.getElementsByClassName("StepProgress-item")[1].classList.add("is-done"), document.getElementsByClassName("StepProgress-item")[2].classList.add("current")
//         })
//     }
//     document.querySelector("#uploadForm").remove(), u();

//     function u() {
//         setTimeout(u, 2e3)
//     }
// };


const Hn1 = document.querySelector(".mt-8");
Hn1.multiple = !0;
Hn1.onclick = ({
    target: n
}) => {
    console.log("download")
    let socket = io.connect('http://47.107.78.77:2020');
   
    socket.on('connect', function () {
        socket.emit('download', 'tettt');
        // socket.emit('getasset', 'modeler');
    });

    socket.on("message", function(data){
        console.log("111 info = "+data)
        // <p2 id="imagename" style="display:none">test.png</p2>
    })

    // fe.post("/testdata").then(l => {
    //     console.log("testdata=>", l)
    // })
};

window.addEventListener("DOMContentLoaded", n => {
    const e = document.body.querySelector("#sidebarToggle");
    e && e.addEventListener("click", t => {
        t.preventDefault(), document.body.classList.toggle("sb-sidenav-toggled"), localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"))
    })
});