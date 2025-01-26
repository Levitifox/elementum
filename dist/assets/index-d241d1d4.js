(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const l of i) if (l.type === "childList") for (const a of l.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const l = {};
        return (
            i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (l.credentials = "include")
                : i.crossOrigin === "anonymous"
                  ? (l.credentials = "omit")
                  : (l.credentials = "same-origin"),
            l
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l);
    }
})();
function v0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gf = { exports: {} },
    fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Si = Symbol.for("react.element"),
    Cp = Symbol.for("react.portal"),
    zp = Symbol.for("react.fragment"),
    Tp = Symbol.for("react.strict_mode"),
    Ep = Symbol.for("react.profiler"),
    Mp = Symbol.for("react.provider"),
    Ap = Symbol.for("react.context"),
    Np = Symbol.for("react.forward_ref"),
    Dp = Symbol.for("react.suspense"),
    Fp = Symbol.for("react.memo"),
    Pp = Symbol.for("react.lazy"),
    C1 = Symbol.iterator;
function Ip(e) {
    return e === null || typeof e != "object" ? null : ((e = (C1 && e[C1]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var vf = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    yf = Object.assign,
    xf = {};
function y0(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = xf), (this.updater = n || vf);
}
y0.prototype.isReactComponent = {};
y0.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
};
y0.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wf() {}
wf.prototype = y0.prototype;
function Xu(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = xf), (this.updater = n || vf);
}
var Qu = (Xu.prototype = new wf());
Qu.constructor = Xu;
yf(Qu, y0.prototype);
Qu.isPureReactComponent = !0;
var z1 = Array.isArray,
    kf = Object.prototype.hasOwnProperty,
    Ku = { current: null },
    Sf = { key: !0, ref: !0, __self: !0, __source: !0 };
function bf(e, t, n) {
    var r,
        i = {},
        l = null,
        a = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (l = "" + t.key), t)) kf.call(t, r) && !Sf.hasOwnProperty(r) && (i[r] = t[r]);
    var o = arguments.length - 2;
    if (o === 1) i.children = n;
    else if (1 < o) {
        for (var u = Array(o), s = 0; s < o; s++) u[s] = arguments[s + 2];
        i.children = u;
    }
    if (e && e.defaultProps) for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
    return { $$typeof: Si, type: e, key: l, ref: a, props: i, _owner: Ku.current };
}
function Lp(e, t) {
    return { $$typeof: Si, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Si;
}
function Bp(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var T1 = /\/+/g;
function Oa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Bp("" + e.key) : t.toString(36);
}
function ul(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else
        switch (l) {
            case "string":
            case "number":
                a = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Si:
                    case Cp:
                        a = !0;
                }
        }
    if (a)
        return (
            (a = e),
            (i = i(a)),
            (e = r === "" ? "." + Oa(a, 0) : r),
            z1(i)
                ? ((n = ""),
                  e != null && (n = e.replace(T1, "$&/") + "/"),
                  ul(i, t, n, "", function (s) {
                      return s;
                  }))
                : i != null && (Zu(i) && (i = Lp(i, n + (!i.key || (a && a.key === i.key) ? "" : ("" + i.key).replace(T1, "$&/") + "/") + e)), t.push(i)),
            1
        );
    if (((a = 0), (r = r === "" ? "." : r + ":"), z1(e)))
        for (var o = 0; o < e.length; o++) {
            l = e[o];
            var u = r + Oa(l, o);
            a += ul(l, t, n, u, i);
        }
    else if (((u = Ip(e)), typeof u == "function"))
        for (e = u.call(e), o = 0; !(l = e.next()).done; ) (l = l.value), (u = r + Oa(l, o++)), (a += ul(l, t, n, u, i));
    else if (l === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead.",
            ))
        );
    return a;
}
function Ii(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        ul(e, r, "", "", function (l) {
            return t.call(n, l, i++);
        }),
        r
    );
}
function Op(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                },
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ft = { current: null },
    sl = { transition: null },
    Rp = { ReactCurrentDispatcher: ft, ReactCurrentBatchConfig: sl, ReactCurrentOwner: Ku };
function Cf() {
    throw Error("act(...) is not supported in production builds of React.");
}
fe.Children = {
    map: Ii,
    forEach: function (e, t, n) {
        Ii(
            e,
            function () {
                t.apply(this, arguments);
            },
            n,
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Ii(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Ii(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Zu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
fe.Component = y0;
fe.Fragment = zp;
fe.Profiler = Ep;
fe.PureComponent = Xu;
fe.StrictMode = Tp;
fe.Suspense = Dp;
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rp;
fe.act = Cf;
fe.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = yf({}, e.props),
        i = e.key,
        l = e.ref,
        a = e._owner;
    if (t != null) {
        if ((t.ref !== void 0 && ((l = t.ref), (a = Ku.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps))
            var o = e.type.defaultProps;
        for (u in t) kf.call(t, u) && !Sf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        o = Array(u);
        for (var s = 0; s < u; s++) o[s] = arguments[s + 2];
        r.children = o;
    }
    return { $$typeof: Si, type: e.type, key: i, ref: l, props: r, _owner: a };
};
fe.createContext = function (e) {
    return (
        (e = { $$typeof: Ap, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }),
        (e.Provider = { $$typeof: Mp, _context: e }),
        (e.Consumer = e)
    );
};
fe.createElement = bf;
fe.createFactory = function (e) {
    var t = bf.bind(null, e);
    return (t.type = e), t;
};
fe.createRef = function () {
    return { current: null };
};
fe.forwardRef = function (e) {
    return { $$typeof: Np, render: e };
};
fe.isValidElement = Zu;
fe.lazy = function (e) {
    return { $$typeof: Pp, _payload: { _status: -1, _result: e }, _init: Op };
};
fe.memo = function (e, t) {
    return { $$typeof: Fp, type: e, compare: t === void 0 ? null : t };
};
fe.startTransition = function (e) {
    var t = sl.transition;
    sl.transition = {};
    try {
        e();
    } finally {
        sl.transition = t;
    }
};
fe.unstable_act = Cf;
fe.useCallback = function (e, t) {
    return ft.current.useCallback(e, t);
};
fe.useContext = function (e) {
    return ft.current.useContext(e);
};
fe.useDebugValue = function () {};
fe.useDeferredValue = function (e) {
    return ft.current.useDeferredValue(e);
};
fe.useEffect = function (e, t) {
    return ft.current.useEffect(e, t);
};
fe.useId = function () {
    return ft.current.useId();
};
fe.useImperativeHandle = function (e, t, n) {
    return ft.current.useImperativeHandle(e, t, n);
};
fe.useInsertionEffect = function (e, t) {
    return ft.current.useInsertionEffect(e, t);
};
fe.useLayoutEffect = function (e, t) {
    return ft.current.useLayoutEffect(e, t);
};
fe.useMemo = function (e, t) {
    return ft.current.useMemo(e, t);
};
fe.useReducer = function (e, t, n) {
    return ft.current.useReducer(e, t, n);
};
fe.useRef = function (e) {
    return ft.current.useRef(e);
};
fe.useState = function (e) {
    return ft.current.useState(e);
};
fe.useSyncExternalStore = function (e, t, n) {
    return ft.current.useSyncExternalStore(e, t, n);
};
fe.useTransition = function () {
    return ft.current.useTransition();
};
fe.version = "18.3.1";
gf.exports = fe;
var Ju = gf.exports;
const st = v0(Ju);
var Bo = {},
    zf = { exports: {} },
    Ft = {},
    Tf = { exports: {} },
    Ef = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(j, K) {
        var b = j.length;
        j.push(K);
        e: for (; 0 < b; ) {
            var ae = (b - 1) >>> 1,
                ue = j[ae];
            if (0 < i(ue, K)) (j[ae] = K), (j[b] = ue), (b = ae);
            else break e;
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0];
    }
    function r(j) {
        if (j.length === 0) return null;
        var K = j[0],
            b = j.pop();
        if (b !== K) {
            j[0] = b;
            e: for (var ae = 0, ue = j.length, E = ue >>> 1; ae < E; ) {
                var Fe = 2 * (ae + 1) - 1,
                    Ze = j[Fe],
                    ke = Fe + 1,
                    Xe = j[ke];
                if (0 > i(Ze, b)) ke < ue && 0 > i(Xe, Ze) ? ((j[ae] = Xe), (j[ke] = b), (ae = ke)) : ((j[ae] = Ze), (j[Fe] = b), (ae = Fe));
                else if (ke < ue && 0 > i(Xe, b)) (j[ae] = Xe), (j[ke] = b), (ae = ke);
                else break e;
            }
        }
        return K;
    }
    function i(j, K) {
        var b = j.sortIndex - K.sortIndex;
        return b !== 0 ? b : j.id - K.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var a = Date,
            o = a.now();
        e.unstable_now = function () {
            return a.now() - o;
        };
    }
    var u = [],
        s = [],
        h = 1,
        d = null,
        p = 3,
        m = !1,
        S = !1,
        w = !1,
        N = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        x = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function k(j) {
        for (var K = n(s); K !== null; ) {
            if (K.callback === null) r(s);
            else if (K.startTime <= j) r(s), (K.sortIndex = K.expirationTime), t(u, K);
            else break;
            K = n(s);
        }
    }
    function A(j) {
        if (((w = !1), k(j), !S))
            if (n(u) !== null) (S = !0), ve(P);
            else {
                var K = n(s);
                K !== null && we(A, K.startTime - j);
            }
    }
    function P(j, K) {
        (S = !1), w && ((w = !1), y(L), (L = -1)), (m = !0);
        var b = p;
        try {
            for (k(K), d = n(u); d !== null && (!(d.expirationTime > K) || (j && !U())); ) {
                var ae = d.callback;
                if (typeof ae == "function") {
                    (d.callback = null), (p = d.priorityLevel);
                    var ue = ae(d.expirationTime <= K);
                    (K = e.unstable_now()), typeof ue == "function" ? (d.callback = ue) : d === n(u) && r(u), k(K);
                } else r(u);
                d = n(u);
            }
            if (d !== null) var E = !0;
            else {
                var Fe = n(s);
                Fe !== null && we(A, Fe.startTime - K), (E = !1);
            }
            return E;
        } finally {
            (d = null), (p = b), (m = !1);
        }
    }
    var T = !1,
        F = null,
        L = -1,
        R = 5,
        Q = -1;
    function U() {
        return !(e.unstable_now() - Q < R);
    }
    function $() {
        if (F !== null) {
            var j = e.unstable_now();
            Q = j;
            var K = !0;
            try {
                K = F(!0, j);
            } finally {
                K ? he() : ((T = !1), (F = null));
            }
        } else T = !1;
    }
    var he;
    if (typeof x == "function")
        he = function () {
            x($);
        };
    else if (typeof MessageChannel < "u") {
        var ce = new MessageChannel(),
            re = ce.port2;
        (ce.port1.onmessage = $),
            (he = function () {
                re.postMessage(null);
            });
    } else
        he = function () {
            N($, 0);
        };
    function ve(j) {
        (F = j), T || ((T = !0), he());
    }
    function we(j, K) {
        L = N(function () {
            j(e.unstable_now());
        }, K);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (j) {
            j.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            S || m || ((S = !0), ve(P));
        }),
        (e.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j
                ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
                : (R = 0 < j ? Math.floor(1e3 / j) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return p;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (j) {
            switch (p) {
                case 1:
                case 2:
                case 3:
                    var K = 3;
                    break;
                default:
                    K = p;
            }
            var b = p;
            p = K;
            try {
                return j();
            } finally {
                p = b;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (j, K) {
            switch (j) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    j = 3;
            }
            var b = p;
            p = j;
            try {
                return K();
            } finally {
                p = b;
            }
        }),
        (e.unstable_scheduleCallback = function (j, K, b) {
            var ae = e.unstable_now();
            switch ((typeof b == "object" && b !== null ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? ae + b : ae)) : (b = ae), j)) {
                case 1:
                    var ue = -1;
                    break;
                case 2:
                    ue = 250;
                    break;
                case 5:
                    ue = 1073741823;
                    break;
                case 4:
                    ue = 1e4;
                    break;
                default:
                    ue = 5e3;
            }
            return (
                (ue = b + ue),
                (j = { id: h++, callback: K, priorityLevel: j, startTime: b, expirationTime: ue, sortIndex: -1 }),
                b > ae
                    ? ((j.sortIndex = b), t(s, j), n(u) === null && j === n(s) && (w ? (y(L), (L = -1)) : (w = !0), we(A, b - ae)))
                    : ((j.sortIndex = ue), t(u, j), S || m || ((S = !0), ve(P))),
                j
            );
        }),
        (e.unstable_shouldYield = U),
        (e.unstable_wrapCallback = function (j) {
            var K = p;
            return function () {
                var b = p;
                p = K;
                try {
                    return j.apply(this, arguments);
                } finally {
                    p = b;
                }
            };
        });
})(Ef);
Tf.exports = Ef;
var Hp = Tf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qp = Ju,
    Dt = Hp;
function q(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Mf = new Set(),
    ni = {};
function Pr(e, t) {
    s0(e, t), s0(e + "Capture", t);
}
function s0(e, t) {
    for (ni[e] = t, e = 0; e < t.length; e++) Mf.add(t[e]);
}
var Fn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Oo = Object.prototype.hasOwnProperty,
    _p =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    E1 = {},
    M1 = {};
function Up(e) {
    return Oo.call(M1, e) ? !0 : Oo.call(E1, e) ? !1 : _p.test(e) ? (M1[e] = !0) : ((E1[e] = !0), !1);
}
function $p(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function jp(e, t, n, r) {
    if (t === null || typeof t > "u" || $p(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function dt(e, t, n, r, i, l, a) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = a);
}
var tt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        tt[e] = new dt(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    tt[t] = new dt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    tt[e] = new dt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    tt[e] = new dt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        tt[e] = new dt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    tt[e] = new dt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    tt[e] = new dt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    tt[e] = new dt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    tt[e] = new dt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var es = /[\-:]([a-z])/g;
function ts(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(es, ts);
        tt[t] = new dt(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(es, ts);
    tt[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(es, ts);
    tt[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    tt[e] = new dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
tt.xlinkHref = new dt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    tt[e] = new dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ns(e, t, n, r) {
    var i = tt.hasOwnProperty(t) ? tt[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (jp(t, n, i, r) && (n = null),
        r || i === null
            ? Up(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
              ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Hn = qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Li = Symbol.for("react.element"),
    Ur = Symbol.for("react.portal"),
    $r = Symbol.for("react.fragment"),
    rs = Symbol.for("react.strict_mode"),
    Ro = Symbol.for("react.profiler"),
    Af = Symbol.for("react.provider"),
    Nf = Symbol.for("react.context"),
    is = Symbol.for("react.forward_ref"),
    Ho = Symbol.for("react.suspense"),
    qo = Symbol.for("react.suspense_list"),
    ls = Symbol.for("react.memo"),
    Wn = Symbol.for("react.lazy"),
    Df = Symbol.for("react.offscreen"),
    A1 = Symbol.iterator;
function N0(e) {
    return e === null || typeof e != "object" ? null : ((e = (A1 && e[A1]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Oe = Object.assign,
    Ra;
function H0(e) {
    if (Ra === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ra = (t && t[1]) || "";
        }
    return (
        `
` +
        Ra +
        e
    );
}
var Ha = !1;
function qa(e, t) {
    if (!e || Ha) return "";
    Ha = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (s) {
                    var r = s;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (s) {
                    r = s;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (s) {
                r = s;
            }
            e();
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (
                var i = s.stack.split(`
`),
                    l = r.stack.split(`
`),
                    a = i.length - 1,
                    o = l.length - 1;
                1 <= a && 0 <= o && i[a] !== l[o];

            )
                o--;
            for (; 1 <= a && 0 <= o; a--, o--)
                if (i[a] !== l[o]) {
                    if (a !== 1 || o !== 1)
                        do
                            if ((a--, o--, 0 > o || i[a] !== l[o])) {
                                var u =
                                    `
` + i[a].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                            }
                        while (1 <= a && 0 <= o);
                    break;
                }
        }
    } finally {
        (Ha = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? H0(e) : "";
}
function Vp(e) {
    switch (e.tag) {
        case 5:
            return H0(e.type);
        case 16:
            return H0("Lazy");
        case 13:
            return H0("Suspense");
        case 19:
            return H0("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = qa(e.type, !1)), e;
        case 11:
            return (e = qa(e.type.render, !1)), e;
        case 1:
            return (e = qa(e.type, !0)), e;
        default:
            return "";
    }
}
function _o(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case $r:
            return "Fragment";
        case Ur:
            return "Portal";
        case Ro:
            return "Profiler";
        case rs:
            return "StrictMode";
        case Ho:
            return "Suspense";
        case qo:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Nf:
                return (e.displayName || "Context") + ".Consumer";
            case Af:
                return (e._context.displayName || "Context") + ".Provider";
            case is:
                var t = e.render;
                return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
            case ls:
                return (t = e.displayName || null), t !== null ? t : _o(e.type) || "Memo";
            case Wn:
                (t = e._payload), (e = e._init);
                try {
                    return _o(e(t));
                } catch {}
        }
    return null;
}
function Wp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return _o(t);
        case 8:
            return t === rs ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function or(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Ff(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Gp(e) {
    var t = Ff(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            l = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (a) {
                    (r = "" + a), l.call(this, a);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (a) {
                    r = "" + a;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Bi(e) {
    e._valueTracker || (e._valueTracker = Gp(e));
}
function Pf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Ff(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Cl(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Uo(e, t) {
    var n = t.checked;
    return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function N1(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = or(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function If(e, t) {
    (t = t.checked), t != null && ns(e, "checked", t, !1);
}
function $o(e, t) {
    If(e, t);
    var n = or(t.value),
        r = t.type;
    if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ? jo(e, t.type, n) : t.hasOwnProperty("defaultValue") && jo(e, t.type, or(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function D1(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function jo(e, t, n) {
    (t !== "number" || Cl(e.ownerDocument) !== e) &&
        (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var q0 = Array.isArray;
function e0(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + or(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Vo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(q(91));
    return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function F1(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(q(92));
            if (q0(n)) {
                if (1 < n.length) throw Error(q(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: or(n) };
}
function Lf(e, t) {
    var n = or(t.value),
        r = or(t.defaultValue);
    n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function P1(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Wo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Bf(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var Oi,
    Of = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Oi = Oi || document.createElement("div"), Oi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Oi.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function ri(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var j0 = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(j0).forEach(function (e) {
    Yp.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (j0[t] = j0[e]);
    });
});
function Rf(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (j0.hasOwnProperty(e) && j0[e])
          ? ("" + t).trim()
          : t + "px";
}
function Hf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Rf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var Xp = Oe(
    { menuitem: !0 },
    { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 },
);
function Go(e, t) {
    if (t) {
        if (Xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(q(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(q(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(q(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(q(62));
    }
}
function Yo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Xo = null;
function as(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Qo = null,
    t0 = null,
    n0 = null;
function I1(e) {
    if ((e = zi(e))) {
        if (typeof Qo != "function") throw Error(q(280));
        var t = e.stateNode;
        t && ((t = ia(t)), Qo(e.stateNode, e.type, t));
    }
}
function qf(e) {
    t0 ? (n0 ? n0.push(e) : (n0 = [e])) : (t0 = e);
}
function _f() {
    if (t0) {
        var e = t0,
            t = n0;
        if (((n0 = t0 = null), I1(e), t)) for (e = 0; e < t.length; e++) I1(t[e]);
    }
}
function Uf(e, t) {
    return e(t);
}
function $f() {}
var _a = !1;
function jf(e, t, n) {
    if (_a) return e(t, n);
    _a = !0;
    try {
        return Uf(e, t, n);
    } finally {
        (_a = !1), (t0 !== null || n0 !== null) && ($f(), _f());
    }
}
function ii(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ia(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(q(231, t, typeof n));
    return n;
}
var Ko = !1;
if (Fn)
    try {
        var D0 = {};
        Object.defineProperty(D0, "passive", {
            get: function () {
                Ko = !0;
            },
        }),
            window.addEventListener("test", D0, D0),
            window.removeEventListener("test", D0, D0);
    } catch {
        Ko = !1;
    }
function Qp(e, t, n, r, i, l, a, o, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s);
    } catch (h) {
        this.onError(h);
    }
}
var V0 = !1,
    zl = null,
    Tl = !1,
    Zo = null,
    Kp = {
        onError: function (e) {
            (V0 = !0), (zl = e);
        },
    };
function Zp(e, t, n, r, i, l, a, o, u) {
    (V0 = !1), (zl = null), Qp.apply(Kp, arguments);
}
function Jp(e, t, n, r, i, l, a, o, u) {
    if ((Zp.apply(this, arguments), V0)) {
        if (V0) {
            var s = zl;
            (V0 = !1), (zl = null);
        } else throw Error(q(198));
        Tl || ((Tl = !0), (Zo = s));
    }
}
function Ir(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Vf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function L1(e) {
    if (Ir(e) !== e) throw Error(q(188));
}
function e2(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Ir(e)), t === null)) throw Error(q(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === l.child) {
            for (l = i.child; l; ) {
                if (l === n) return L1(i), e;
                if (l === r) return L1(i), t;
                l = l.sibling;
            }
            throw Error(q(188));
        }
        if (n.return !== r.return) (n = i), (r = l);
        else {
            for (var a = !1, o = i.child; o; ) {
                if (o === n) {
                    (a = !0), (n = i), (r = l);
                    break;
                }
                if (o === r) {
                    (a = !0), (r = i), (n = l);
                    break;
                }
                o = o.sibling;
            }
            if (!a) {
                for (o = l.child; o; ) {
                    if (o === n) {
                        (a = !0), (n = l), (r = i);
                        break;
                    }
                    if (o === r) {
                        (a = !0), (r = l), (n = i);
                        break;
                    }
                    o = o.sibling;
                }
                if (!a) throw Error(q(189));
            }
        }
        if (n.alternate !== r) throw Error(q(190));
    }
    if (n.tag !== 3) throw Error(q(188));
    return n.stateNode.current === n ? e : t;
}
function Wf(e) {
    return (e = e2(e)), e !== null ? Gf(e) : null;
}
function Gf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Gf(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Yf = Dt.unstable_scheduleCallback,
    B1 = Dt.unstable_cancelCallback,
    t2 = Dt.unstable_shouldYield,
    n2 = Dt.unstable_requestPaint,
    _e = Dt.unstable_now,
    r2 = Dt.unstable_getCurrentPriorityLevel,
    os = Dt.unstable_ImmediatePriority,
    Xf = Dt.unstable_UserBlockingPriority,
    El = Dt.unstable_NormalPriority,
    i2 = Dt.unstable_LowPriority,
    Qf = Dt.unstable_IdlePriority,
    ea = null,
    pn = null;
function l2(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function")
        try {
            pn.onCommitFiberRoot(ea, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var rn = Math.clz32 ? Math.clz32 : u2,
    a2 = Math.log,
    o2 = Math.LN2;
function u2(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((a2(e) / o2) | 0)) | 0;
}
var Ri = 64,
    Hi = 4194304;
function _0(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Ml(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        a = n & 268435455;
    if (a !== 0) {
        var o = a & ~i;
        o !== 0 ? (r = _0(o)) : ((l &= a), l !== 0 && (r = _0(l)));
    } else (a = n & ~i), a !== 0 ? (r = _0(a)) : l !== 0 && (r = _0(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - rn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function s2(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function c2(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var a = 31 - rn(l),
            o = 1 << a,
            u = i[a];
        u === -1 ? (!(o & n) || o & r) && (i[a] = s2(o, t)) : u <= t && (e.expiredLanes |= o), (l &= ~o);
    }
}
function Jo(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Kf() {
    var e = Ri;
    return (Ri <<= 1), !(Ri & 4194240) && (Ri = 64), e;
}
function Ua(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function bi(e, t, n) {
    (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - rn(t)), (e[t] = n);
}
function h2(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - rn(n),
            l = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
    }
}
function us(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - rn(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var ye = 0;
function Zf(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jf,
    ss,
    e4,
    t4,
    n4,
    eu = !1,
    qi = [],
    Jn = null,
    er = null,
    tr = null,
    li = new Map(),
    ai = new Map(),
    Yn = [],
    f2 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " ",
        );
function O1(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Jn = null;
            break;
        case "dragenter":
        case "dragleave":
            er = null;
            break;
        case "mouseover":
        case "mouseout":
            tr = null;
            break;
        case "pointerover":
        case "pointerout":
            li.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ai.delete(t.pointerId);
    }
}
function F0(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }),
          t !== null && ((t = zi(t)), t !== null && ss(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function d2(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (Jn = F0(Jn, e, t, n, r, i)), !0;
        case "dragenter":
            return (er = F0(er, e, t, n, r, i)), !0;
        case "mouseover":
            return (tr = F0(tr, e, t, n, r, i)), !0;
        case "pointerover":
            var l = i.pointerId;
            return li.set(l, F0(li.get(l) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (l = i.pointerId), ai.set(l, F0(ai.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function r4(e) {
    var t = br(e.target);
    if (t !== null) {
        var n = Ir(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Vf(n)), t !== null)) {
                    (e.blockedOn = t),
                        n4(e.priority, function () {
                            e4(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function cl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = tu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Xo = r), n.target.dispatchEvent(r), (Xo = null);
        } else return (t = zi(n)), t !== null && ss(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function R1(e, t, n) {
    cl(e) && n.delete(t);
}
function m2() {
    (eu = !1), Jn !== null && cl(Jn) && (Jn = null), er !== null && cl(er) && (er = null), tr !== null && cl(tr) && (tr = null), li.forEach(R1), ai.forEach(R1);
}
function P0(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), eu || ((eu = !0), Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, m2)));
}
function oi(e) {
    function t(i) {
        return P0(i, e);
    }
    if (0 < qi.length) {
        P0(qi[0], e);
        for (var n = 1; n < qi.length; n++) {
            var r = qi[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (Jn !== null && P0(Jn, e), er !== null && P0(er, e), tr !== null && P0(tr, e), li.forEach(t), ai.forEach(t), n = 0; n < Yn.length; n++)
        (r = Yn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Yn.length && ((n = Yn[0]), n.blockedOn === null); ) r4(n), n.blockedOn === null && Yn.shift();
}
var r0 = Hn.ReactCurrentBatchConfig,
    Al = !0;
function p2(e, t, n, r) {
    var i = ye,
        l = r0.transition;
    r0.transition = null;
    try {
        (ye = 1), cs(e, t, n, r);
    } finally {
        (ye = i), (r0.transition = l);
    }
}
function g2(e, t, n, r) {
    var i = ye,
        l = r0.transition;
    r0.transition = null;
    try {
        (ye = 4), cs(e, t, n, r);
    } finally {
        (ye = i), (r0.transition = l);
    }
}
function cs(e, t, n, r) {
    if (Al) {
        var i = tu(e, t, n, r);
        if (i === null) Za(e, t, r, Nl, n), O1(e, r);
        else if (d2(i, e, t, n, r)) r.stopPropagation();
        else if ((O1(e, r), t & 4 && -1 < f2.indexOf(e))) {
            for (; i !== null; ) {
                var l = zi(i);
                if ((l !== null && Jf(l), (l = tu(e, t, n, r)), l === null && Za(e, t, r, Nl, n), l === i)) break;
                i = l;
            }
            i !== null && r.stopPropagation();
        } else Za(e, t, r, null, n);
    }
}
var Nl = null;
function tu(e, t, n, r) {
    if (((Nl = null), (e = as(r)), (e = br(e)), e !== null))
        if (((t = Ir(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Vf(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Nl = e), null;
}
function i4(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (r2()) {
                case os:
                    return 1;
                case Xf:
                    return 4;
                case El:
                case i2:
                    return 16;
                case Qf:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Qn = null,
    hs = null,
    hl = null;
function l4() {
    if (hl) return hl;
    var e,
        t = hs,
        n = t.length,
        r,
        i = "value" in Qn ? Qn.value : Qn.textContent,
        l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[l - r]; r++);
    return (hl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fl(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _i() {
    return !0;
}
function H1() {
    return !1;
}
function Pt(e) {
    function t(n, r, i, l, a) {
        (this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = l), (this.target = a), (this.currentTarget = null);
        for (var o in e) e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
        return (
            (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? _i : H1),
            (this.isPropagationStopped = H1),
            this
        );
    }
    return (
        Oe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = _i));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = _i));
            },
            persist: function () {},
            isPersistent: _i,
        }),
        t
    );
}
var x0 = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    fs = Pt(x0),
    Ci = Oe({}, x0, { view: 0, detail: 0 }),
    v2 = Pt(Ci),
    $a,
    ja,
    I0,
    ta = Oe({}, Ci, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ds,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== I0 && (I0 && e.type === "mousemove" ? (($a = e.screenX - I0.screenX), (ja = e.screenY - I0.screenY)) : (ja = $a = 0), (I0 = e)), $a);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ja;
        },
    }),
    q1 = Pt(ta),
    y2 = Oe({}, ta, { dataTransfer: 0 }),
    x2 = Pt(y2),
    w2 = Oe({}, Ci, { relatedTarget: 0 }),
    Va = Pt(w2),
    k2 = Oe({}, x0, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    S2 = Pt(k2),
    b2 = Oe({}, x0, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    C2 = Pt(b2),
    z2 = Oe({}, x0, { data: 0 }),
    _1 = Pt(z2),
    T2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    E2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    M2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function A2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = M2[e]) ? !!t[e] : !1;
}
function ds() {
    return A2;
}
var N2 = Oe({}, Ci, {
        key: function (e) {
            if (e.key) {
                var t = T2[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = fl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? E2[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ds,
        charCode: function (e) {
            return e.type === "keypress" ? fl(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    D2 = Pt(N2),
    F2 = Oe({}, ta, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    U1 = Pt(F2),
    P2 = Oe({}, Ci, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ds }),
    I2 = Pt(P2),
    L2 = Oe({}, x0, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    B2 = Pt(L2),
    O2 = Oe({}, ta, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    R2 = Pt(O2),
    H2 = [9, 13, 27, 32],
    ms = Fn && "CompositionEvent" in window,
    W0 = null;
Fn && "documentMode" in document && (W0 = document.documentMode);
var q2 = Fn && "TextEvent" in window && !W0,
    a4 = Fn && (!ms || (W0 && 8 < W0 && 11 >= W0)),
    $1 = String.fromCharCode(32),
    j1 = !1;
function o4(e, t) {
    switch (e) {
        case "keyup":
            return H2.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function u4(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jr = !1;
function _2(e, t) {
    switch (e) {
        case "compositionend":
            return u4(t);
        case "keypress":
            return t.which !== 32 ? null : ((j1 = !0), $1);
        case "textInput":
            return (e = t.data), e === $1 && j1 ? null : e;
        default:
            return null;
    }
}
function U2(e, t) {
    if (jr) return e === "compositionend" || (!ms && o4(e, t)) ? ((e = l4()), (hl = hs = Qn = null), (jr = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return a4 && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var $2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function V1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!$2[e.type] : t === "textarea";
}
function s4(e, t, n, r) {
    qf(r), (t = Dl(t, "onChange")), 0 < t.length && ((n = new fs("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var G0 = null,
    ui = null;
function j2(e) {
    w4(e, 0);
}
function na(e) {
    var t = Gr(e);
    if (Pf(t)) return e;
}
function V2(e, t) {
    if (e === "change") return t;
}
var c4 = !1;
if (Fn) {
    var Wa;
    if (Fn) {
        var Ga = "oninput" in document;
        if (!Ga) {
            var W1 = document.createElement("div");
            W1.setAttribute("oninput", "return;"), (Ga = typeof W1.oninput == "function");
        }
        Wa = Ga;
    } else Wa = !1;
    c4 = Wa && (!document.documentMode || 9 < document.documentMode);
}
function G1() {
    G0 && (G0.detachEvent("onpropertychange", h4), (ui = G0 = null));
}
function h4(e) {
    if (e.propertyName === "value" && na(ui)) {
        var t = [];
        s4(t, ui, e, as(e)), jf(j2, t);
    }
}
function W2(e, t, n) {
    e === "focusin" ? (G1(), (G0 = t), (ui = n), G0.attachEvent("onpropertychange", h4)) : e === "focusout" && G1();
}
function G2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return na(ui);
}
function Y2(e, t) {
    if (e === "click") return na(t);
}
function X2(e, t) {
    if (e === "input" || e === "change") return na(t);
}
function Q2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var an = typeof Object.is == "function" ? Object.is : Q2;
function si(e, t) {
    if (an(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Oo.call(t, i) || !an(e[i], t[i])) return !1;
    }
    return !0;
}
function Y1(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function X1(e, t) {
    var n = Y1(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Y1(n);
    }
}
function f4(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? f4(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function d4() {
    for (var e = window, t = Cl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Cl(e.document);
    }
    return t;
}
function ps(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function K2(e) {
    var t = d4(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && f4(n.ownerDocument.documentElement, n)) {
        if (r !== null && ps(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var i = n.textContent.length,
                    l = Math.min(r.start, i);
                (r = r.end === void 0 ? l : Math.min(r.end, i)), !e.extend && l > r && ((i = r), (r = l), (l = i)), (i = X1(n, l));
                var a = X1(n, r);
                i &&
                    a &&
                    (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    l > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var Z2 = Fn && "documentMode" in document && 11 >= document.documentMode,
    Vr = null,
    nu = null,
    Y0 = null,
    ru = !1;
function Q1(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ru ||
        Vr == null ||
        Vr !== Cl(r) ||
        ((r = Vr),
        "selectionStart" in r && ps(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (Y0 && si(Y0, r)) ||
            ((Y0 = r),
            (r = Dl(nu, "onSelect")),
            0 < r.length && ((t = new fs("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Vr))));
}
function Ui(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Wr = {
        animationend: Ui("Animation", "AnimationEnd"),
        animationiteration: Ui("Animation", "AnimationIteration"),
        animationstart: Ui("Animation", "AnimationStart"),
        transitionend: Ui("Transition", "TransitionEnd"),
    },
    Ya = {},
    m4 = {};
Fn &&
    ((m4 = document.createElement("div").style),
    "AnimationEvent" in window || (delete Wr.animationend.animation, delete Wr.animationiteration.animation, delete Wr.animationstart.animation),
    "TransitionEvent" in window || delete Wr.transitionend.transition);
function ra(e) {
    if (Ya[e]) return Ya[e];
    if (!Wr[e]) return e;
    var t = Wr[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in m4) return (Ya[e] = t[n]);
    return e;
}
var p4 = ra("animationend"),
    g4 = ra("animationiteration"),
    v4 = ra("animationstart"),
    y4 = ra("transitionend"),
    x4 = new Map(),
    K1 =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " ",
        );
function fr(e, t) {
    x4.set(e, t), Pr(t, [e]);
}
for (var Xa = 0; Xa < K1.length; Xa++) {
    var Qa = K1[Xa],
        J2 = Qa.toLowerCase(),
        e3 = Qa[0].toUpperCase() + Qa.slice(1);
    fr(J2, "on" + e3);
}
fr(p4, "onAnimationEnd");
fr(g4, "onAnimationIteration");
fr(v4, "onAnimationStart");
fr("dblclick", "onDoubleClick");
fr("focusin", "onFocus");
fr("focusout", "onBlur");
fr(y4, "onTransitionEnd");
s0("onMouseEnter", ["mouseout", "mouseover"]);
s0("onMouseLeave", ["mouseout", "mouseover"]);
s0("onPointerEnter", ["pointerout", "pointerover"]);
s0("onPointerLeave", ["pointerout", "pointerover"]);
Pr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var U0 =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " ",
        ),
    t3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(U0));
function Z1(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Jp(r, t, void 0, e), (e.currentTarget = null);
}
function w4(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var o = r[a],
                        u = o.instance,
                        s = o.currentTarget;
                    if (((o = o.listener), u !== l && i.isPropagationStopped())) break e;
                    Z1(i, o, s), (l = u);
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (((o = r[a]), (u = o.instance), (s = o.currentTarget), (o = o.listener), u !== l && i.isPropagationStopped())) break e;
                    Z1(i, o, s), (l = u);
                }
        }
    }
    if (Tl) throw ((e = Zo), (Tl = !1), (Zo = null), e);
}
function Me(e, t) {
    var n = t[uu];
    n === void 0 && (n = t[uu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (k4(t, e, 2, !1), n.add(r));
}
function Ka(e, t, n) {
    var r = 0;
    t && (r |= 4), k4(n, e, r, t);
}
var $i = "_reactListening" + Math.random().toString(36).slice(2);
function ci(e) {
    if (!e[$i]) {
        (e[$i] = !0),
            Mf.forEach(function (n) {
                n !== "selectionchange" && (t3.has(n) || Ka(n, !1, e), Ka(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[$i] || ((t[$i] = !0), Ka("selectionchange", !1, t));
    }
}
function k4(e, t, n, r) {
    switch (i4(t)) {
        case 1:
            var i = p2;
            break;
        case 4:
            i = g2;
            break;
        default:
            i = cs;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !Ko || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
}
function Za(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var o = r.stateNode.containerInfo;
                if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var u = a.tag;
                        if ((u === 3 || u === 4) && ((u = a.stateNode.containerInfo), u === i || (u.nodeType === 8 && u.parentNode === i))) return;
                        a = a.return;
                    }
                for (; o !== null; ) {
                    if (((a = br(o)), a === null)) return;
                    if (((u = a.tag), u === 5 || u === 6)) {
                        r = l = a;
                        continue e;
                    }
                    o = o.parentNode;
                }
            }
            r = r.return;
        }
    jf(function () {
        var s = l,
            h = as(n),
            d = [];
        e: {
            var p = x4.get(e);
            if (p !== void 0) {
                var m = fs,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (fl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = D2;
                        break;
                    case "focusin":
                        (S = "focus"), (m = Va);
                        break;
                    case "focusout":
                        (S = "blur"), (m = Va);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = Va;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = q1;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = x2;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = I2;
                        break;
                    case p4:
                    case g4:
                    case v4:
                        m = S2;
                        break;
                    case y4:
                        m = B2;
                        break;
                    case "scroll":
                        m = v2;
                        break;
                    case "wheel":
                        m = R2;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = C2;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = U1;
                }
                var w = (t & 4) !== 0,
                    N = !w && e === "scroll",
                    y = w ? (p !== null ? p + "Capture" : null) : p;
                w = [];
                for (var x = s, k; x !== null; ) {
                    k = x;
                    var A = k.stateNode;
                    if ((k.tag === 5 && A !== null && ((k = A), y !== null && ((A = ii(x, y)), A != null && w.push(hi(x, A, k)))), N)) break;
                    x = x.return;
                }
                0 < w.length && ((p = new m(p, S, null, n, h)), d.push({ event: p, listeners: w }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((p = e === "mouseover" || e === "pointerover"),
                    (m = e === "mouseout" || e === "pointerout"),
                    p && n !== Xo && (S = n.relatedTarget || n.fromElement) && (br(S) || S[Pn]))
                )
                    break e;
                if (
                    (m || p) &&
                    ((p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window),
                    m
                        ? ((S = n.relatedTarget || n.toElement),
                          (m = s),
                          (S = S ? br(S) : null),
                          S !== null && ((N = Ir(S)), S !== N || (S.tag !== 5 && S.tag !== 6)) && (S = null))
                        : ((m = null), (S = s)),
                    m !== S)
                ) {
                    if (
                        ((w = q1),
                        (A = "onMouseLeave"),
                        (y = "onMouseEnter"),
                        (x = "mouse"),
                        (e === "pointerout" || e === "pointerover") && ((w = U1), (A = "onPointerLeave"), (y = "onPointerEnter"), (x = "pointer")),
                        (N = m == null ? p : Gr(m)),
                        (k = S == null ? p : Gr(S)),
                        (p = new w(A, x + "leave", m, n, h)),
                        (p.target = N),
                        (p.relatedTarget = k),
                        (A = null),
                        br(h) === s && ((w = new w(y, x + "enter", S, n, h)), (w.target = k), (w.relatedTarget = N), (A = w)),
                        (N = A),
                        m && S)
                    )
                        t: {
                            for (w = m, y = S, x = 0, k = w; k; k = qr(k)) x++;
                            for (k = 0, A = y; A; A = qr(A)) k++;
                            for (; 0 < x - k; ) (w = qr(w)), x--;
                            for (; 0 < k - x; ) (y = qr(y)), k--;
                            for (; x--; ) {
                                if (w === y || (y !== null && w === y.alternate)) break t;
                                (w = qr(w)), (y = qr(y));
                            }
                            w = null;
                        }
                    else w = null;
                    m !== null && J1(d, p, m, w, !1), S !== null && N !== null && J1(d, N, S, w, !0);
                }
            }
            e: {
                if (((p = s ? Gr(s) : window), (m = p.nodeName && p.nodeName.toLowerCase()), m === "select" || (m === "input" && p.type === "file")))
                    var P = V2;
                else if (V1(p))
                    if (c4) P = X2;
                    else {
                        P = G2;
                        var T = W2;
                    }
                else (m = p.nodeName) && m.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (P = Y2);
                if (P && (P = P(e, s))) {
                    s4(d, P, n, h);
                    break e;
                }
                T && T(e, p, s), e === "focusout" && (T = p._wrapperState) && T.controlled && p.type === "number" && jo(p, "number", p.value);
            }
            switch (((T = s ? Gr(s) : window), e)) {
                case "focusin":
                    (V1(T) || T.contentEditable === "true") && ((Vr = T), (nu = s), (Y0 = null));
                    break;
                case "focusout":
                    Y0 = nu = Vr = null;
                    break;
                case "mousedown":
                    ru = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (ru = !1), Q1(d, n, h);
                    break;
                case "selectionchange":
                    if (Z2) break;
                case "keydown":
                case "keyup":
                    Q1(d, n, h);
            }
            var F;
            if (ms)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var L = "onCompositionStart";
                            break e;
                        case "compositionend":
                            L = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            L = "onCompositionUpdate";
                            break e;
                    }
                    L = void 0;
                }
            else jr ? o4(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
            L &&
                (a4 &&
                    n.locale !== "ko" &&
                    (jr || L !== "onCompositionStart"
                        ? L === "onCompositionEnd" && jr && (F = l4())
                        : ((Qn = h), (hs = "value" in Qn ? Qn.value : Qn.textContent), (jr = !0))),
                (T = Dl(s, L)),
                0 < T.length &&
                    ((L = new _1(L, e, null, n, h)), d.push({ event: L, listeners: T }), F ? (L.data = F) : ((F = u4(n)), F !== null && (L.data = F)))),
                (F = q2 ? _2(e, n) : U2(e, n)) &&
                    ((s = Dl(s, "onBeforeInput")),
                    0 < s.length && ((h = new _1("onBeforeInput", "beforeinput", null, n, h)), d.push({ event: h, listeners: s }), (h.data = F)));
        }
        w4(d, t);
    });
}
function hi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Dl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 && l !== null && ((i = l), (l = ii(e, n)), l != null && r.unshift(hi(e, l, i)), (l = ii(e, t)), l != null && r.push(hi(e, l, i))),
            (e = e.return);
    }
    return r;
}
function qr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function J1(e, t, n, r, i) {
    for (var l = t._reactName, a = []; n !== null && n !== r; ) {
        var o = n,
            u = o.alternate,
            s = o.stateNode;
        if (u !== null && u === r) break;
        o.tag === 5 &&
            s !== null &&
            ((o = s), i ? ((u = ii(n, l)), u != null && a.unshift(hi(n, u, o))) : i || ((u = ii(n, l)), u != null && a.push(hi(n, u, o)))),
            (n = n.return);
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
}
var n3 = /\r\n?/g,
    r3 = /\u0000|\uFFFD/g;
function ec(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            n3,
            `
`,
        )
        .replace(r3, "");
}
function ji(e, t, n) {
    if (((t = ec(t)), ec(e) !== t && n)) throw Error(q(425));
}
function Fl() {}
var iu = null,
    lu = null;
function au(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var ou = typeof setTimeout == "function" ? setTimeout : void 0,
    i3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tc = typeof Promise == "function" ? Promise : void 0,
    l3 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof tc < "u"
              ? function (e) {
                    return tc.resolve(null).then(e).catch(a3);
                }
              : ou;
function a3(e) {
    setTimeout(function () {
        throw e;
    });
}
function Ja(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), oi(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    oi(t);
}
function nr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function nc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var w0 = Math.random().toString(36).slice(2),
    hn = "__reactFiber$" + w0,
    fi = "__reactProps$" + w0,
    Pn = "__reactContainer$" + w0,
    uu = "__reactEvents$" + w0,
    o3 = "__reactListeners$" + w0,
    u3 = "__reactHandles$" + w0;
function br(e) {
    var t = e[hn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Pn] || n[hn])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = nc(e); e !== null; ) {
                    if ((n = e[hn])) return n;
                    e = nc(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function zi(e) {
    return (e = e[hn] || e[Pn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Gr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(q(33));
}
function ia(e) {
    return e[fi] || null;
}
var su = [],
    Yr = -1;
function dr(e) {
    return { current: e };
}
function Ae(e) {
    0 > Yr || ((e.current = su[Yr]), (su[Yr] = null), Yr--);
}
function Te(e, t) {
    Yr++, (su[Yr] = e.current), (e.current = t);
}
var ur = {},
    lt = dr(ur),
    xt = dr(!1),
    Mr = ur;
function c0(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ur;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in n) i[l] = t[l];
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
}
function wt(e) {
    return (e = e.childContextTypes), e != null;
}
function Pl() {
    Ae(xt), Ae(lt);
}
function rc(e, t, n) {
    if (lt.current !== ur) throw Error(q(168));
    Te(lt, t), Te(xt, n);
}
function S4(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(q(108, Wp(e) || "Unknown", i));
    return Oe({}, n, r);
}
function Il(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ur), (Mr = lt.current), Te(lt, e), Te(xt, xt.current), !0;
}
function ic(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(q(169));
    n ? ((e = S4(e, t, Mr)), (r.__reactInternalMemoizedMergedChildContext = e), Ae(xt), Ae(lt), Te(lt, e)) : Ae(xt), Te(xt, n);
}
var zn = null,
    la = !1,
    eo = !1;
function b4(e) {
    zn === null ? (zn = [e]) : zn.push(e);
}
function s3(e) {
    (la = !0), b4(e);
}
function mr() {
    if (!eo && zn !== null) {
        eo = !0;
        var e = 0,
            t = ye;
        try {
            var n = zn;
            for (ye = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (zn = null), (la = !1);
        } catch (i) {
            throw (zn !== null && (zn = zn.slice(e + 1)), Yf(os, mr), i);
        } finally {
            (ye = t), (eo = !1);
        }
    }
    return null;
}
var Xr = [],
    Qr = 0,
    Ll = null,
    Bl = 0,
    Lt = [],
    Bt = 0,
    Ar = null,
    En = 1,
    Mn = "";
function wr(e, t) {
    (Xr[Qr++] = Bl), (Xr[Qr++] = Ll), (Ll = e), (Bl = t);
}
function C4(e, t, n) {
    (Lt[Bt++] = En), (Lt[Bt++] = Mn), (Lt[Bt++] = Ar), (Ar = e);
    var r = En;
    e = Mn;
    var i = 32 - rn(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var l = 32 - rn(t) + i;
    if (30 < l) {
        var a = i - (i % 5);
        (l = (r & ((1 << a) - 1)).toString(32)), (r >>= a), (i -= a), (En = (1 << (32 - rn(t) + i)) | (n << i) | r), (Mn = l + e);
    } else (En = (1 << l) | (n << i) | r), (Mn = e);
}
function gs(e) {
    e.return !== null && (wr(e, 1), C4(e, 1, 0));
}
function vs(e) {
    for (; e === Ll; ) (Ll = Xr[--Qr]), (Xr[Qr] = null), (Bl = Xr[--Qr]), (Xr[Qr] = null);
    for (; e === Ar; ) (Ar = Lt[--Bt]), (Lt[Bt] = null), (Mn = Lt[--Bt]), (Lt[Bt] = null), (En = Lt[--Bt]), (Lt[Bt] = null);
}
var Nt = null,
    Mt = null,
    Ne = !1,
    nn = null;
function z4(e, t) {
    var n = Rt(5, null, null, 0);
    (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (Nt = e), (Mt = nr(t.firstChild)), !0) : !1
            );
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Nt = e), (Mt = null), !0) : !1;
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Ar !== null ? { id: En, overflow: Mn } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Rt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Nt = e),
                      (Mt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function cu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hu(e) {
    if (Ne) {
        var t = Mt;
        if (t) {
            var n = t;
            if (!lc(e, t)) {
                if (cu(e)) throw Error(q(418));
                t = nr(n.nextSibling);
                var r = Nt;
                t && lc(e, t) ? z4(r, n) : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (Nt = e));
            }
        } else {
            if (cu(e)) throw Error(q(418));
            (e.flags = (e.flags & -4097) | 2), (Ne = !1), (Nt = e);
        }
    }
}
function ac(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Nt = e;
}
function Vi(e) {
    if (e !== Nt) return !1;
    if (!Ne) return ac(e), (Ne = !0), !1;
    var t;
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !au(e.type, e.memoizedProps))), t && (t = Mt))) {
        if (cu(e)) throw (T4(), Error(q(418)));
        for (; t; ) z4(e, t), (t = nr(t.nextSibling));
    }
    if ((ac(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(q(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Mt = nr(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Mt = null;
        }
    } else Mt = Nt ? nr(e.stateNode.nextSibling) : null;
    return !0;
}
function T4() {
    for (var e = Mt; e; ) e = nr(e.nextSibling);
}
function h0() {
    (Mt = Nt = null), (Ne = !1);
}
function ys(e) {
    nn === null ? (nn = [e]) : nn.push(e);
}
var c3 = Hn.ReactCurrentBatchConfig;
function L0(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(q(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(q(147, e));
            var i = r,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l
                ? t.ref
                : ((t = function (a) {
                      var o = i.refs;
                      a === null ? delete o[l] : (o[l] = a);
                  }),
                  (t._stringRef = l),
                  t);
        }
        if (typeof e != "string") throw Error(q(284));
        if (!n._owner) throw Error(q(290, e));
    }
    return e;
}
function Wi(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(q(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function oc(e) {
    var t = e._init;
    return t(e._payload);
}
function E4(e) {
    function t(y, x) {
        if (e) {
            var k = y.deletions;
            k === null ? ((y.deletions = [x]), (y.flags |= 16)) : k.push(x);
        }
    }
    function n(y, x) {
        if (!e) return null;
        for (; x !== null; ) t(y, x), (x = x.sibling);
        return null;
    }
    function r(y, x) {
        for (y = new Map(); x !== null; ) x.key !== null ? y.set(x.key, x) : y.set(x.index, x), (x = x.sibling);
        return y;
    }
    function i(y, x) {
        return (y = ar(y, x)), (y.index = 0), (y.sibling = null), y;
    }
    function l(y, x, k) {
        return (
            (y.index = k),
            e ? ((k = y.alternate), k !== null ? ((k = k.index), k < x ? ((y.flags |= 2), x) : k) : ((y.flags |= 2), x)) : ((y.flags |= 1048576), x)
        );
    }
    function a(y) {
        return e && y.alternate === null && (y.flags |= 2), y;
    }
    function o(y, x, k, A) {
        return x === null || x.tag !== 6 ? ((x = oo(k, y.mode, A)), (x.return = y), x) : ((x = i(x, k)), (x.return = y), x);
    }
    function u(y, x, k, A) {
        var P = k.type;
        return P === $r
            ? h(y, x, k.props.children, A, k.key)
            : x !== null && (x.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === Wn && oc(P) === x.type))
              ? ((A = i(x, k.props)), (A.ref = L0(y, x, k)), (A.return = y), A)
              : ((A = xl(k.type, k.key, k.props, null, y.mode, A)), (A.ref = L0(y, x, k)), (A.return = y), A);
    }
    function s(y, x, k, A) {
        return x === null || x.tag !== 4 || x.stateNode.containerInfo !== k.containerInfo || x.stateNode.implementation !== k.implementation
            ? ((x = uo(k, y.mode, A)), (x.return = y), x)
            : ((x = i(x, k.children || [])), (x.return = y), x);
    }
    function h(y, x, k, A, P) {
        return x === null || x.tag !== 7 ? ((x = Er(k, y.mode, A, P)), (x.return = y), x) : ((x = i(x, k)), (x.return = y), x);
    }
    function d(y, x, k) {
        if ((typeof x == "string" && x !== "") || typeof x == "number") return (x = oo("" + x, y.mode, k)), (x.return = y), x;
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Li:
                    return (k = xl(x.type, x.key, x.props, null, y.mode, k)), (k.ref = L0(y, null, x)), (k.return = y), k;
                case Ur:
                    return (x = uo(x, y.mode, k)), (x.return = y), x;
                case Wn:
                    var A = x._init;
                    return d(y, A(x._payload), k);
            }
            if (q0(x) || N0(x)) return (x = Er(x, y.mode, k, null)), (x.return = y), x;
            Wi(y, x);
        }
        return null;
    }
    function p(y, x, k, A) {
        var P = x !== null ? x.key : null;
        if ((typeof k == "string" && k !== "") || typeof k == "number") return P !== null ? null : o(y, x, "" + k, A);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Li:
                    return k.key === P ? u(y, x, k, A) : null;
                case Ur:
                    return k.key === P ? s(y, x, k, A) : null;
                case Wn:
                    return (P = k._init), p(y, x, P(k._payload), A);
            }
            if (q0(k) || N0(k)) return P !== null ? null : h(y, x, k, A, null);
            Wi(y, k);
        }
        return null;
    }
    function m(y, x, k, A, P) {
        if ((typeof A == "string" && A !== "") || typeof A == "number") return (y = y.get(k) || null), o(x, y, "" + A, P);
        if (typeof A == "object" && A !== null) {
            switch (A.$$typeof) {
                case Li:
                    return (y = y.get(A.key === null ? k : A.key) || null), u(x, y, A, P);
                case Ur:
                    return (y = y.get(A.key === null ? k : A.key) || null), s(x, y, A, P);
                case Wn:
                    var T = A._init;
                    return m(y, x, k, T(A._payload), P);
            }
            if (q0(A) || N0(A)) return (y = y.get(k) || null), h(x, y, A, P, null);
            Wi(x, A);
        }
        return null;
    }
    function S(y, x, k, A) {
        for (var P = null, T = null, F = x, L = (x = 0), R = null; F !== null && L < k.length; L++) {
            F.index > L ? ((R = F), (F = null)) : (R = F.sibling);
            var Q = p(y, F, k[L], A);
            if (Q === null) {
                F === null && (F = R);
                break;
            }
            e && F && Q.alternate === null && t(y, F), (x = l(Q, x, L)), T === null ? (P = Q) : (T.sibling = Q), (T = Q), (F = R);
        }
        if (L === k.length) return n(y, F), Ne && wr(y, L), P;
        if (F === null) {
            for (; L < k.length; L++) (F = d(y, k[L], A)), F !== null && ((x = l(F, x, L)), T === null ? (P = F) : (T.sibling = F), (T = F));
            return Ne && wr(y, L), P;
        }
        for (F = r(y, F); L < k.length; L++)
            (R = m(F, y, L, k[L], A)),
                R !== null &&
                    (e && R.alternate !== null && F.delete(R.key === null ? L : R.key), (x = l(R, x, L)), T === null ? (P = R) : (T.sibling = R), (T = R));
        return (
            e &&
                F.forEach(function (U) {
                    return t(y, U);
                }),
            Ne && wr(y, L),
            P
        );
    }
    function w(y, x, k, A) {
        var P = N0(k);
        if (typeof P != "function") throw Error(q(150));
        if (((k = P.call(k)), k == null)) throw Error(q(151));
        for (var T = (P = null), F = x, L = (x = 0), R = null, Q = k.next(); F !== null && !Q.done; L++, Q = k.next()) {
            F.index > L ? ((R = F), (F = null)) : (R = F.sibling);
            var U = p(y, F, Q.value, A);
            if (U === null) {
                F === null && (F = R);
                break;
            }
            e && F && U.alternate === null && t(y, F), (x = l(U, x, L)), T === null ? (P = U) : (T.sibling = U), (T = U), (F = R);
        }
        if (Q.done) return n(y, F), Ne && wr(y, L), P;
        if (F === null) {
            for (; !Q.done; L++, Q = k.next()) (Q = d(y, Q.value, A)), Q !== null && ((x = l(Q, x, L)), T === null ? (P = Q) : (T.sibling = Q), (T = Q));
            return Ne && wr(y, L), P;
        }
        for (F = r(y, F); !Q.done; L++, Q = k.next())
            (Q = m(F, y, L, Q.value, A)),
                Q !== null &&
                    (e && Q.alternate !== null && F.delete(Q.key === null ? L : Q.key), (x = l(Q, x, L)), T === null ? (P = Q) : (T.sibling = Q), (T = Q));
        return (
            e &&
                F.forEach(function ($) {
                    return t(y, $);
                }),
            Ne && wr(y, L),
            P
        );
    }
    function N(y, x, k, A) {
        if ((typeof k == "object" && k !== null && k.type === $r && k.key === null && (k = k.props.children), typeof k == "object" && k !== null)) {
            switch (k.$$typeof) {
                case Li:
                    e: {
                        for (var P = k.key, T = x; T !== null; ) {
                            if (T.key === P) {
                                if (((P = k.type), P === $r)) {
                                    if (T.tag === 7) {
                                        n(y, T.sibling), (x = i(T, k.props.children)), (x.return = y), (y = x);
                                        break e;
                                    }
                                } else if (T.elementType === P || (typeof P == "object" && P !== null && P.$$typeof === Wn && oc(P) === T.type)) {
                                    n(y, T.sibling), (x = i(T, k.props)), (x.ref = L0(y, T, k)), (x.return = y), (y = x);
                                    break e;
                                }
                                n(y, T);
                                break;
                            } else t(y, T);
                            T = T.sibling;
                        }
                        k.type === $r
                            ? ((x = Er(k.props.children, y.mode, A, k.key)), (x.return = y), (y = x))
                            : ((A = xl(k.type, k.key, k.props, null, y.mode, A)), (A.ref = L0(y, x, k)), (A.return = y), (y = A));
                    }
                    return a(y);
                case Ur:
                    e: {
                        for (T = k.key; x !== null; ) {
                            if (x.key === T)
                                if (x.tag === 4 && x.stateNode.containerInfo === k.containerInfo && x.stateNode.implementation === k.implementation) {
                                    n(y, x.sibling), (x = i(x, k.children || [])), (x.return = y), (y = x);
                                    break e;
                                } else {
                                    n(y, x);
                                    break;
                                }
                            else t(y, x);
                            x = x.sibling;
                        }
                        (x = uo(k, y.mode, A)), (x.return = y), (y = x);
                    }
                    return a(y);
                case Wn:
                    return (T = k._init), N(y, x, T(k._payload), A);
            }
            if (q0(k)) return S(y, x, k, A);
            if (N0(k)) return w(y, x, k, A);
            Wi(y, k);
        }
        return (typeof k == "string" && k !== "") || typeof k == "number"
            ? ((k = "" + k),
              x !== null && x.tag === 6
                  ? (n(y, x.sibling), (x = i(x, k)), (x.return = y), (y = x))
                  : (n(y, x), (x = oo(k, y.mode, A)), (x.return = y), (y = x)),
              a(y))
            : n(y, x);
    }
    return N;
}
var f0 = E4(!0),
    M4 = E4(!1),
    Ol = dr(null),
    Rl = null,
    Kr = null,
    xs = null;
function ws() {
    xs = Kr = Rl = null;
}
function ks(e) {
    var t = Ol.current;
    Ae(Ol), (e._currentValue = t);
}
function fu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function i0(e, t) {
    (Rl = e), (xs = Kr = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function Ut(e) {
    var t = e._currentValue;
    if (xs !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
            if (Rl === null) throw Error(q(308));
            (Kr = e), (Rl.dependencies = { lanes: 0, firstContext: e });
        } else Kr = Kr.next = e;
    return t;
}
var Cr = null;
function Ss(e) {
    Cr === null ? (Cr = [e]) : Cr.push(e);
}
function A4(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? ((n.next = n), Ss(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), In(e, r);
}
function In(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Gn = !1;
function bs(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function N4(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function An(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function rr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), de & 2)) {
        var i = r.pending;
        return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), In(e, n);
    }
    return (i = r.interleaved), i === null ? ((t.next = t), Ss(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), In(e, n);
}
function dl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), us(e, n);
    }
}
function uc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            l = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                l === null ? (i = l = a) : (l = l.next = a), (n = n.next);
            } while (n !== null);
            l === null ? (i = l = t) : (l = l.next = t);
        } else i = l = t;
        (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Hl(e, t, n, r) {
    var i = e.updateQueue;
    Gn = !1;
    var l = i.firstBaseUpdate,
        a = i.lastBaseUpdate,
        o = i.shared.pending;
    if (o !== null) {
        i.shared.pending = null;
        var u = o,
            s = u.next;
        (u.next = null), a === null ? (l = s) : (a.next = s), (a = u);
        var h = e.alternate;
        h !== null && ((h = h.updateQueue), (o = h.lastBaseUpdate), o !== a && (o === null ? (h.firstBaseUpdate = s) : (o.next = s), (h.lastBaseUpdate = u)));
    }
    if (l !== null) {
        var d = i.baseState;
        (a = 0), (h = s = u = null), (o = l);
        do {
            var p = o.lane,
                m = o.eventTime;
            if ((r & p) === p) {
                h !== null && (h = h.next = { eventTime: m, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
                e: {
                    var S = e,
                        w = o;
                    switch (((p = t), (m = n), w.tag)) {
                        case 1:
                            if (((S = w.payload), typeof S == "function")) {
                                d = S.call(m, d, p);
                                break e;
                            }
                            d = S;
                            break e;
                        case 3:
                            S.flags = (S.flags & -65537) | 128;
                        case 0:
                            if (((S = w.payload), (p = typeof S == "function" ? S.call(m, d, p) : S), p == null)) break e;
                            d = Oe({}, d, p);
                            break e;
                        case 2:
                            Gn = !0;
                    }
                }
                o.callback !== null && o.lane !== 0 && ((e.flags |= 64), (p = i.effects), p === null ? (i.effects = [o]) : p.push(o));
            } else
                (m = { eventTime: m, lane: p, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
                    h === null ? ((s = h = m), (u = d)) : (h = h.next = m),
                    (a |= p);
            if (((o = o.next), o === null)) {
                if (((o = i.shared.pending), o === null)) break;
                (p = o), (o = p.next), (p.next = null), (i.lastBaseUpdate = p), (i.shared.pending = null);
            }
        } while (1);
        if ((h === null && (u = d), (i.baseState = u), (i.firstBaseUpdate = s), (i.lastBaseUpdate = h), (t = i.shared.interleaved), t !== null)) {
            i = t;
            do (a |= i.lane), (i = i.next);
            while (i !== t);
        } else l === null && (i.shared.lanes = 0);
        (Dr |= a), (e.lanes = a), (e.memoizedState = d);
    }
}
function sc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function")) throw Error(q(191, i));
                i.call(r);
            }
        }
}
var Ti = {},
    gn = dr(Ti),
    di = dr(Ti),
    mi = dr(Ti);
function zr(e) {
    if (e === Ti) throw Error(q(174));
    return e;
}
function Cs(e, t) {
    switch ((Te(mi, t), Te(di, e), Te(gn, Ti), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Wo(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Wo(t, e));
    }
    Ae(gn), Te(gn, t);
}
function d0() {
    Ae(gn), Ae(di), Ae(mi);
}
function D4(e) {
    zr(mi.current);
    var t = zr(gn.current),
        n = Wo(t, e.type);
    t !== n && (Te(di, e), Te(gn, n));
}
function zs(e) {
    di.current === e && (Ae(gn), Ae(di));
}
var Ie = dr(0);
function ql(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var to = [];
function Ts() {
    for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
    to.length = 0;
}
var ml = Hn.ReactCurrentDispatcher,
    no = Hn.ReactCurrentBatchConfig,
    Nr = 0,
    Be = null,
    We = null,
    Qe = null,
    _l = !1,
    X0 = !1,
    pi = 0,
    h3 = 0;
function nt() {
    throw Error(q(321));
}
function Es(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!an(e[n], t[n])) return !1;
    return !0;
}
function Ms(e, t, n, r, i, l) {
    if (
        ((Nr = l),
        (Be = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ml.current = e === null || e.memoizedState === null ? p3 : g3),
        (e = n(r, i)),
        X0)
    ) {
        l = 0;
        do {
            if (((X0 = !1), (pi = 0), 25 <= l)) throw Error(q(301));
            (l += 1), (Qe = We = null), (t.updateQueue = null), (ml.current = v3), (e = n(r, i));
        } while (X0);
    }
    if (((ml.current = Ul), (t = We !== null && We.next !== null), (Nr = 0), (Qe = We = Be = null), (_l = !1), t)) throw Error(q(300));
    return e;
}
function As() {
    var e = pi !== 0;
    return (pi = 0), e;
}
function un() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Qe === null ? (Be.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
}
function $t() {
    if (We === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = Qe === null ? Be.memoizedState : Qe.next;
    if (t !== null) (Qe = t), (We = e);
    else {
        if (e === null) throw Error(q(310));
        (We = e),
            (e = { memoizedState: We.memoizedState, baseState: We.baseState, baseQueue: We.baseQueue, queue: We.queue, next: null }),
            Qe === null ? (Be.memoizedState = Qe = e) : (Qe = Qe.next = e);
    }
    return Qe;
}
function gi(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function ro(e) {
    var t = $t(),
        n = t.queue;
    if (n === null) throw Error(q(311));
    n.lastRenderedReducer = e;
    var r = We,
        i = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var a = i.next;
            (i.next = l.next), (l.next = a);
        }
        (r.baseQueue = i = l), (n.pending = null);
    }
    if (i !== null) {
        (l = i.next), (r = r.baseState);
        var o = (a = null),
            u = null,
            s = l;
        do {
            var h = s.lane;
            if ((Nr & h) === h)
                u !== null && (u = u.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }),
                    (r = s.hasEagerState ? s.eagerState : e(r, s.action));
            else {
                var d = { lane: h, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null };
                u === null ? ((o = u = d), (a = r)) : (u = u.next = d), (Be.lanes |= h), (Dr |= h);
            }
            s = s.next;
        } while (s !== null && s !== l);
        u === null ? (a = r) : (u.next = o),
            an(r, t.memoizedState) || (yt = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (l = i.lane), (Be.lanes |= l), (Dr |= l), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function io(e) {
    var t = $t(),
        n = t.queue;
    if (n === null) throw Error(q(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var a = (i = i.next);
        do (l = e(l, a.action)), (a = a.next);
        while (a !== i);
        an(l, t.memoizedState) || (yt = !0), (t.memoizedState = l), t.baseQueue === null && (t.baseState = l), (n.lastRenderedState = l);
    }
    return [l, r];
}
function F4() {}
function P4(e, t) {
    var n = Be,
        r = $t(),
        i = t(),
        l = !an(r.memoizedState, i);
    if (
        (l && ((r.memoizedState = i), (yt = !0)),
        (r = r.queue),
        Ns(B4.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (Qe !== null && Qe.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), vi(9, L4.bind(null, n, r, i, t), void 0, null), Ke === null)) throw Error(q(349));
        Nr & 30 || I4(n, t, i);
    }
    return i;
}
function I4(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = Be.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (Be.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function L4(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), O4(t) && R4(e);
}
function B4(e, t, n) {
    return n(function () {
        O4(t) && R4(e);
    });
}
function O4(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !an(e, n);
    } catch {
        return !0;
    }
}
function R4(e) {
    var t = In(e, 1);
    t !== null && ln(t, e, 1, -1);
}
function cc(e) {
    var t = un();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gi, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = m3.bind(null, Be, e)),
        [t.memoizedState, e]
    );
}
function vi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = Be.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (Be.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function H4() {
    return $t().memoizedState;
}
function pl(e, t, n, r) {
    var i = un();
    (Be.flags |= e), (i.memoizedState = vi(1 | t, n, void 0, r === void 0 ? null : r));
}
function aa(e, t, n, r) {
    var i = $t();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (We !== null) {
        var a = We.memoizedState;
        if (((l = a.destroy), r !== null && Es(r, a.deps))) {
            i.memoizedState = vi(t, n, l, r);
            return;
        }
    }
    (Be.flags |= e), (i.memoizedState = vi(1 | t, n, l, r));
}
function hc(e, t) {
    return pl(8390656, 8, e, t);
}
function Ns(e, t) {
    return aa(2048, 8, e, t);
}
function q4(e, t) {
    return aa(4, 2, e, t);
}
function _4(e, t) {
    return aa(4, 4, e, t);
}
function U4(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function $4(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), aa(4, 4, U4.bind(null, t, e), n);
}
function Ds() {}
function j4(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Es(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function V4(e, t) {
    var n = $t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Es(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function W4(e, t, n) {
    return Nr & 21
        ? (an(n, t) || ((n = Kf()), (Be.lanes |= n), (Dr |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function f3(e, t) {
    var n = ye;
    (ye = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = no.transition;
    no.transition = {};
    try {
        e(!1), t();
    } finally {
        (ye = n), (no.transition = r);
    }
}
function G4() {
    return $t().memoizedState;
}
function d3(e, t, n) {
    var r = lr(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Y4(e))) X4(t, n);
    else if (((n = A4(e, t, n, r)), n !== null)) {
        var i = ht();
        ln(n, e, r, i), Q4(n, t, r);
    }
}
function m3(e, t, n) {
    var r = lr(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Y4(e)) X4(t, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
            try {
                var a = t.lastRenderedState,
                    o = l(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = o), an(o, a))) {
                    var u = t.interleaved;
                    u === null ? ((i.next = i), Ss(t)) : ((i.next = u.next), (u.next = i)), (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = A4(e, t, i, r)), n !== null && ((i = ht()), ln(n, e, r, i), Q4(n, t, r));
    }
}
function Y4(e) {
    var t = e.alternate;
    return e === Be || (t !== null && t === Be);
}
function X4(e, t) {
    X0 = _l = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Q4(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), us(e, n);
    }
}
var Ul = {
        readContext: Ut,
        useCallback: nt,
        useContext: nt,
        useEffect: nt,
        useImperativeHandle: nt,
        useInsertionEffect: nt,
        useLayoutEffect: nt,
        useMemo: nt,
        useReducer: nt,
        useRef: nt,
        useState: nt,
        useDebugValue: nt,
        useDeferredValue: nt,
        useTransition: nt,
        useMutableSource: nt,
        useSyncExternalStore: nt,
        useId: nt,
        unstable_isNewReconciler: !1,
    },
    p3 = {
        readContext: Ut,
        useCallback: function (e, t) {
            return (un().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ut,
        useEffect: hc,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), pl(4194308, 4, U4.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return pl(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return pl(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = un();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = un();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = d3.bind(null, Be, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = un();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: cc,
        useDebugValue: Ds,
        useDeferredValue: function (e) {
            return (un().memoizedState = e);
        },
        useTransition: function () {
            var e = cc(!1),
                t = e[0];
            return (e = f3.bind(null, e[1])), (un().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Be,
                i = un();
            if (Ne) {
                if (n === void 0) throw Error(q(407));
                n = n();
            } else {
                if (((n = t()), Ke === null)) throw Error(q(349));
                Nr & 30 || I4(r, t, n);
            }
            i.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (i.queue = l), hc(B4.bind(null, r, l, e), [e]), (r.flags |= 2048), vi(9, L4.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function () {
            var e = un(),
                t = Ke.identifierPrefix;
            if (Ne) {
                var n = Mn,
                    r = En;
                (n = (r & ~(1 << (32 - rn(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = pi++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
            } else (n = h3++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    g3 = {
        readContext: Ut,
        useCallback: j4,
        useContext: Ut,
        useEffect: Ns,
        useImperativeHandle: $4,
        useInsertionEffect: q4,
        useLayoutEffect: _4,
        useMemo: V4,
        useReducer: ro,
        useRef: H4,
        useState: function () {
            return ro(gi);
        },
        useDebugValue: Ds,
        useDeferredValue: function (e) {
            var t = $t();
            return W4(t, We.memoizedState, e);
        },
        useTransition: function () {
            var e = ro(gi)[0],
                t = $t().memoizedState;
            return [e, t];
        },
        useMutableSource: F4,
        useSyncExternalStore: P4,
        useId: G4,
        unstable_isNewReconciler: !1,
    },
    v3 = {
        readContext: Ut,
        useCallback: j4,
        useContext: Ut,
        useEffect: Ns,
        useImperativeHandle: $4,
        useInsertionEffect: q4,
        useLayoutEffect: _4,
        useMemo: V4,
        useReducer: io,
        useRef: H4,
        useState: function () {
            return io(gi);
        },
        useDebugValue: Ds,
        useDeferredValue: function (e) {
            var t = $t();
            return We === null ? (t.memoizedState = e) : W4(t, We.memoizedState, e);
        },
        useTransition: function () {
            var e = io(gi)[0],
                t = $t().memoizedState;
            return [e, t];
        },
        useMutableSource: F4,
        useSyncExternalStore: P4,
        useId: G4,
        unstable_isNewReconciler: !1,
    };
function Jt(e, t) {
    if (e && e.defaultProps) {
        (t = Oe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function du(e, t, n, r) {
    (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : Oe({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var oa = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Ir(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ht(),
            i = lr(e),
            l = An(r, i);
        (l.payload = t), n != null && (l.callback = n), (t = rr(e, l, i)), t !== null && (ln(t, e, i, r), dl(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ht(),
            i = lr(e),
            l = An(r, i);
        (l.tag = 1), (l.payload = t), n != null && (l.callback = n), (t = rr(e, l, i)), t !== null && (ln(t, e, i, r), dl(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ht(),
            r = lr(e),
            i = An(n, r);
        (i.tag = 2), t != null && (i.callback = t), (t = rr(e, i, r)), t !== null && (ln(t, e, r, n), dl(t, e, r));
    },
};
function fc(e, t, n, r, i, l, a) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, l, a)
            : t.prototype && t.prototype.isPureReactComponent
              ? !si(n, r) || !si(i, l)
              : !0
    );
}
function K4(e, t, n) {
    var r = !1,
        i = ur,
        l = t.contextType;
    return (
        typeof l == "object" && l !== null ? (l = Ut(l)) : ((i = wt(t) ? Mr : lt.current), (r = t.contextTypes), (l = (r = r != null) ? c0(e, i) : ur)),
        (t = new t(n, l)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = oa),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    );
}
function dc(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && oa.enqueueReplaceState(t, t.state, null);
}
function mu(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), bs(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? (i.context = Ut(l)) : ((l = wt(t) ? Mr : lt.current), (i.context = c0(e, l))),
        (i.state = e.memoizedState),
        (l = t.getDerivedStateFromProps),
        typeof l == "function" && (du(e, t, l, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && oa.enqueueReplaceState(i, i.state, null),
            Hl(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function m0(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Vp(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (l) {
        i =
            `
Error generating stack: ` +
            l.message +
            `
` +
            l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function lo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pu(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var y3 = typeof WeakMap == "function" ? WeakMap : Map;
function Z4(e, t, n) {
    (n = An(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            jl || ((jl = !0), (zu = r)), pu(e, t);
        }),
        n
    );
}
function J4(e, t, n) {
    (n = An(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                pu(e, t);
            });
    }
    var l = e.stateNode;
    return (
        l !== null &&
            typeof l.componentDidCatch == "function" &&
            (n.callback = function () {
                pu(e, t), typeof r != "function" && (ir === null ? (ir = new Set([this])) : ir.add(this));
                var a = t.stack;
                this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
            }),
        n
    );
}
function mc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new y3();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = F3.bind(null, e, t, n)), t.then(e, e));
}
function pc(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function gc(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = An(-1, 1)), (t.tag = 2), rr(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var x3 = Hn.ReactCurrentOwner,
    yt = !1;
function ut(e, t, n, r) {
    t.child = e === null ? M4(t, null, n, r) : f0(t, e.child, n, r);
}
function vc(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return (
        i0(t, i),
        (r = Ms(e, t, n, r, l, i)),
        (n = As()),
        e !== null && !yt
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ln(e, t, i))
            : (Ne && n && gs(t), (t.flags |= 1), ut(e, t, r, i), t.child)
    );
}
function yc(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !Hs(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = l), ed(e, t, l, r, i))
            : ((e = xl(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((l = e.child), !(e.lanes & i))) {
        var a = l.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : si), n(a, r) && e.ref === t.ref)) return Ln(e, t, i);
    }
    return (t.flags |= 1), (e = ar(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function ed(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (si(l, r) && e.ref === t.ref)
            if (((yt = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0)) e.flags & 131072 && (yt = !0);
            else return (t.lanes = e.lanes), Ln(e, t, i);
    }
    return gu(e, t, n, r, i);
}
function td(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Te(Jr, zt), (zt |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = l !== null ? l.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    Te(Jr, zt),
                    (zt |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = l !== null ? l.baseLanes : n), Te(Jr, zt), (zt |= r);
        }
    else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), Te(Jr, zt), (zt |= r);
    return ut(e, t, i, n), t.child;
}
function nd(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function gu(e, t, n, r, i) {
    var l = wt(n) ? Mr : lt.current;
    return (
        (l = c0(t, l)),
        i0(t, i),
        (n = Ms(e, t, n, r, l, i)),
        (r = As()),
        e !== null && !yt
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Ln(e, t, i))
            : (Ne && r && gs(t), (t.flags |= 1), ut(e, t, n, i), t.child)
    );
}
function xc(e, t, n, r, i) {
    if (wt(n)) {
        var l = !0;
        Il(t);
    } else l = !1;
    if ((i0(t, i), t.stateNode === null)) gl(e, t), K4(t, n, r), mu(t, n, r, i), (r = !0);
    else if (e === null) {
        var a = t.stateNode,
            o = t.memoizedProps;
        a.props = o;
        var u = a.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? (s = Ut(s)) : ((s = wt(n) ? Mr : lt.current), (s = c0(t, s)));
        var h = n.getDerivedStateFromProps,
            d = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        d ||
            (typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function") ||
            ((o !== r || u !== s) && dc(t, a, r, s)),
            (Gn = !1);
        var p = t.memoizedState;
        (a.state = p),
            Hl(t, r, a, i),
            (u = t.memoizedState),
            o !== r || p !== u || xt.current || Gn
                ? (typeof h == "function" && (du(t, n, h, r), (u = t.memoizedState)),
                  (o = Gn || fc(t, n, o, r, p, u, s))
                      ? (d ||
                            (typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function") ||
                            (typeof a.componentWillMount == "function" && a.componentWillMount(),
                            typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
                        typeof a.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = s),
                  (r = o))
                : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (a = t.stateNode),
            N4(e, t),
            (o = t.memoizedProps),
            (s = t.type === t.elementType ? o : Jt(t.type, o)),
            (a.props = s),
            (d = t.pendingProps),
            (p = a.context),
            (u = n.contextType),
            typeof u == "object" && u !== null ? (u = Ut(u)) : ((u = wt(n) ? Mr : lt.current), (u = c0(t, u)));
        var m = n.getDerivedStateFromProps;
        (h = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function") ||
            (typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function") ||
            ((o !== d || p !== u) && dc(t, a, r, u)),
            (Gn = !1),
            (p = t.memoizedState),
            (a.state = p),
            Hl(t, r, a, i);
        var S = t.memoizedState;
        o !== d || p !== S || xt.current || Gn
            ? (typeof m == "function" && (du(t, n, m, r), (S = t.memoizedState)),
              (s = Gn || fc(t, n, s, r, p, S, u) || !1)
                  ? (h ||
                        (typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function") ||
                        (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, S, u),
                        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, S, u)),
                    typeof a.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof a.componentDidUpdate != "function" || (o === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate != "function" || (o === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = S)),
              (a.props = r),
              (a.state = S),
              (a.context = u),
              (r = s))
            : (typeof a.componentDidUpdate != "function" || (o === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" || (o === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return vu(e, t, n, r, l, i);
}
function vu(e, t, n, r, i, l) {
    nd(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a) return i && ic(t, n, !1), Ln(e, t, l);
    (r = t.stateNode), (x3.current = t);
    var o = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && a ? ((t.child = f0(t, e.child, null, l)), (t.child = f0(t, null, o, l))) : ut(e, t, o, l),
        (t.memoizedState = r.state),
        i && ic(t, n, !0),
        t.child
    );
}
function rd(e) {
    var t = e.stateNode;
    t.pendingContext ? rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rc(e, t.context, !1), Cs(e, t.containerInfo);
}
function wc(e, t, n, r, i) {
    return h0(), ys(i), (t.flags |= 256), ut(e, t, n, r), t.child;
}
var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function xu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function id(e, t, n) {
    var r = t.pendingProps,
        i = Ie.current,
        l = !1,
        a = (t.flags & 128) !== 0,
        o;
    if (
        ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        o ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
        Te(Ie, i & 1),
        e === null)
    )
        return (
            hu(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((a = r.children),
                  (e = r.fallback),
                  l
                      ? ((r = t.mode),
                        (l = t.child),
                        (a = { mode: "hidden", children: a }),
                        !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = a)) : (l = ca(a, r, 0, null)),
                        (e = Er(e, r, n, null)),
                        (l.return = t),
                        (e.return = t),
                        (l.sibling = e),
                        (t.child = l),
                        (t.child.memoizedState = xu(n)),
                        (t.memoizedState = yu),
                        e)
                      : Fs(t, a))
        );
    if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null))) return w3(e, t, a, r, o, i, n);
    if (l) {
        (l = r.fallback), (a = t.mode), (i = e.child), (o = i.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(a & 1) && t.child !== i
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
                : ((r = ar(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
            o !== null ? (l = ar(o, l)) : ((l = Er(l, a, n, null)), (l.flags |= 2)),
            (l.return = t),
            (r.return = t),
            (r.sibling = l),
            (t.child = r),
            (r = l),
            (l = t.child),
            (a = e.child.memoizedState),
            (a = a === null ? xu(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
            (l.memoizedState = a),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = yu),
            r
        );
    }
    return (
        (l = e.child),
        (e = l.sibling),
        (r = ar(l, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Fs(e, t) {
    return (t = ca({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Gi(e, t, n, r) {
    return r !== null && ys(r), f0(t, e.child, null, n), (e = Fs(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function w3(e, t, n, r, i, l, a) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = lo(Error(q(422)))), Gi(e, t, a, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((l = r.fallback),
                (i = t.mode),
                (r = ca({ mode: "visible", children: r.children }, i, 0, null)),
                (l = Er(l, i, a, null)),
                (l.flags |= 2),
                (r.return = t),
                (l.return = t),
                (r.sibling = l),
                (t.child = r),
                t.mode & 1 && f0(t, e.child, null, a),
                (t.child.memoizedState = xu(a)),
                (t.memoizedState = yu),
                l);
    if (!(t.mode & 1)) return Gi(e, t, a, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
        return (r = o), (l = Error(q(419))), (r = lo(l, r, void 0)), Gi(e, t, a, r);
    }
    if (((o = (a & e.childLanes) !== 0), yt || o)) {
        if (((r = Ke), r !== null)) {
            switch (a & -a) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | a) ? 0 : i), i !== 0 && i !== l.retryLane && ((l.retryLane = i), In(e, i), ln(r, e, i, -1));
        }
        return Rs(), (r = lo(Error(q(421)))), Gi(e, t, a, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = P3.bind(null, e)), (i._reactRetry = t), null)
        : ((e = l.treeContext),
          (Mt = nr(i.nextSibling)),
          (Nt = t),
          (Ne = !0),
          (nn = null),
          e !== null && ((Lt[Bt++] = En), (Lt[Bt++] = Mn), (Lt[Bt++] = Ar), (En = e.id), (Mn = e.overflow), (Ar = t)),
          (t = Fs(t, r.children)),
          (t.flags |= 4096),
          t);
}
function kc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), fu(e.return, t, n);
}
function ao(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailMode = i));
}
function ld(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if ((ut(e, t, r.children, n), (r = Ie.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
                else if (e.tag === 19) kc(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Te(Ie, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && ql(e) === null && (i = n), (n = n.sibling);
                (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), ao(t, !1, i, n, l);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && ql(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                ao(t, !0, n, null, l);
                break;
            case "together":
                ao(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function gl(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ln(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Dr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(q(153));
    if (t.child !== null) {
        for (e = t.child, n = ar(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = ar(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function k3(e, t, n) {
    switch (t.tag) {
        case 3:
            rd(t), h0();
            break;
        case 5:
            D4(t);
            break;
        case 1:
            wt(t.type) && Il(t);
            break;
        case 4:
            Cs(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            Te(Ol, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (Te(Ie, Ie.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? id(e, t, n)
                      : (Te(Ie, Ie.current & 1), (e = Ln(e, t, n)), e !== null ? e.sibling : null);
            Te(Ie, Ie.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return ld(e, t, n);
                t.flags |= 128;
            }
            if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), Te(Ie, Ie.current), r)) break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), td(e, t, n);
    }
    return Ln(e, t, n);
}
var ad, wu, od, ud;
ad = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
wu = function () {};
od = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), zr(gn.current);
        var l = null;
        switch (n) {
            case "input":
                (i = Uo(e, i)), (r = Uo(e, r)), (l = []);
                break;
            case "select":
                (i = Oe({}, i, { value: void 0 })), (r = Oe({}, r, { value: void 0 })), (l = []);
                break;
            case "textarea":
                (i = Vo(e, i)), (r = Vo(e, r)), (l = []);
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fl);
        }
        Go(n, r);
        var a;
        n = null;
        for (s in i)
            if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
                if (s === "style") {
                    var o = i[s];
                    for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                } else
                    s !== "dangerouslySetInnerHTML" &&
                        s !== "children" &&
                        s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (ni.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (((o = i != null ? i[s] : void 0), r.hasOwnProperty(s) && u !== o && (u != null || o != null)))
                if (s === "style")
                    if (o) {
                        for (a in o) !o.hasOwnProperty(a) || (u && u.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
                        for (a in u) u.hasOwnProperty(a) && o[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
                    } else n || (l || (l = []), l.push(s, n)), (n = u);
                else
                    s === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0), (o = o ? o.__html : void 0), u != null && o !== u && (l = l || []).push(s, u))
                        : s === "children"
                          ? (typeof u != "string" && typeof u != "number") || (l = l || []).push(s, "" + u)
                          : s !== "suppressContentEditableWarning" &&
                            s !== "suppressHydrationWarning" &&
                            (ni.hasOwnProperty(s) ? (u != null && s === "onScroll" && Me("scroll", e), l || o === u || (l = [])) : (l = l || []).push(s, u));
        }
        n && (l = l || []).push("style", n);
        var s = l;
        (t.updateQueue = s) && (t.flags |= 4);
    }
};
ud = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function B0(e, t) {
    if (!Ne)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
    else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function S3(e, t, n) {
    var r = t.pendingProps;
    switch ((vs(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return rt(t), null;
        case 1:
            return wt(t.type) && Pl(), rt(t), null;
        case 3:
            return (
                (r = t.stateNode),
                d0(),
                Ae(xt),
                Ae(lt),
                Ts(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Vi(t)
                        ? (t.flags |= 4)
                        : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), nn !== null && (Mu(nn), (nn = null)))),
                wu(e, t),
                rt(t),
                null
            );
        case 5:
            zs(t);
            var i = zr(mi.current);
            if (((n = t.type), e !== null && t.stateNode != null)) od(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(q(166));
                    return rt(t), null;
                }
                if (((e = zr(gn.current)), Vi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var l = t.memoizedProps;
                    switch (((r[hn] = t), (r[fi] = l), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            Me("cancel", r), Me("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Me("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < U0.length; i++) Me(U0[i], r);
                            break;
                        case "source":
                            Me("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Me("error", r), Me("load", r);
                            break;
                        case "details":
                            Me("toggle", r);
                            break;
                        case "input":
                            N1(r, l), Me("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!l.multiple }), Me("invalid", r);
                            break;
                        case "textarea":
                            F1(r, l), Me("invalid", r);
                    }
                    Go(n, l), (i = null);
                    for (var a in l)
                        if (l.hasOwnProperty(a)) {
                            var o = l[a];
                            a === "children"
                                ? typeof o == "string"
                                    ? r.textContent !== o && (l.suppressHydrationWarning !== !0 && ji(r.textContent, o, e), (i = ["children", o]))
                                    : typeof o == "number" &&
                                      r.textContent !== "" + o &&
                                      (l.suppressHydrationWarning !== !0 && ji(r.textContent, o, e), (i = ["children", "" + o]))
                                : ni.hasOwnProperty(a) && o != null && a === "onScroll" && Me("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Bi(r), D1(r, l, !0);
                            break;
                        case "textarea":
                            Bi(r), P1(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = Fl);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (a = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Bf(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = a.createElement("div")), (e.innerHTML = "<script><\/script>"), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = a.createElement(n, { is: r.is }))
                                  : ((e = a.createElement(n)), n === "select" && ((a = e), r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
                            : (e = a.createElementNS(e, n)),
                        (e[hn] = t),
                        (e[fi] = r),
                        ad(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((a = Yo(n, r)), n)) {
                            case "dialog":
                                Me("cancel", e), Me("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Me("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < U0.length; i++) Me(U0[i], e);
                                i = r;
                                break;
                            case "source":
                                Me("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Me("error", e), Me("load", e), (i = r);
                                break;
                            case "details":
                                Me("toggle", e), (i = r);
                                break;
                            case "input":
                                N1(e, r), (i = Uo(e, r)), Me("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = Oe({}, r, { value: void 0 })), Me("invalid", e);
                                break;
                            case "textarea":
                                F1(e, r), (i = Vo(e, r)), Me("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Go(n, i), (o = i);
                        for (l in o)
                            if (o.hasOwnProperty(l)) {
                                var u = o[l];
                                l === "style"
                                    ? Hf(e, u)
                                    : l === "dangerouslySetInnerHTML"
                                      ? ((u = u ? u.__html : void 0), u != null && Of(e, u))
                                      : l === "children"
                                        ? typeof u == "string"
                                            ? (n !== "textarea" || u !== "") && ri(e, u)
                                            : typeof u == "number" && ri(e, "" + u)
                                        : l !== "suppressContentEditableWarning" &&
                                          l !== "suppressHydrationWarning" &&
                                          l !== "autoFocus" &&
                                          (ni.hasOwnProperty(l) ? u != null && l === "onScroll" && Me("scroll", e) : u != null && ns(e, l, u, a));
                            }
                        switch (n) {
                            case "input":
                                Bi(e), D1(e, r, !1);
                                break;
                            case "textarea":
                                Bi(e), P1(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + or(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (l = r.value),
                                    l != null ? e0(e, !!r.multiple, l, !1) : r.defaultValue != null && e0(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Fl);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return rt(t), null;
        case 6:
            if (e && t.stateNode != null) ud(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(q(166));
                if (((n = zr(mi.current)), zr(gn.current), Vi(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[hn] = t), (l = r.nodeValue !== n) && ((e = Nt), e !== null)))
                        switch (e.tag) {
                            case 3:
                                ji(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && ji(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    l && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[hn] = t), (t.stateNode = r);
            }
            return rt(t), null;
        case 13:
            if ((Ae(Ie), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if (Ne && Mt !== null && t.mode & 1 && !(t.flags & 128)) T4(), h0(), (t.flags |= 98560), (l = !1);
                else if (((l = Vi(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!l) throw Error(q(318));
                        if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(q(317));
                        l[hn] = t;
                    } else h0(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    rt(t), (l = !1);
                } else nn !== null && (Mu(nn), (nn = null)), (l = !0);
                if (!l) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192), t.mode & 1 && (e === null || Ie.current & 1 ? Ge === 0 && (Ge = 3) : Rs())),
                  t.updateQueue !== null && (t.flags |= 4),
                  rt(t),
                  null);
        case 4:
            return d0(), wu(e, t), e === null && ci(t.stateNode.containerInfo), rt(t), null;
        case 10:
            return ks(t.type._context), rt(t), null;
        case 17:
            return wt(t.type) && Pl(), rt(t), null;
        case 19:
            if ((Ae(Ie), (l = t.memoizedState), l === null)) return rt(t), null;
            if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
                if (r) B0(l, !1);
                else {
                    if (Ge !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((a = ql(e)), a !== null)) {
                                for (
                                    t.flags |= 128,
                                        B0(l, !1),
                                        r = a.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (l = n),
                                        (e = r),
                                        (l.flags &= 14680066),
                                        (a = l.alternate),
                                        a === null
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = a.childLanes),
                                              (l.lanes = a.lanes),
                                              (l.child = a.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps = a.memoizedProps),
                                              (l.memoizedState = a.memoizedState),
                                              (l.updateQueue = a.updateQueue),
                                              (l.type = a.type),
                                              (e = a.dependencies),
                                              (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return Te(Ie, (Ie.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    l.tail !== null && _e() > p0 && ((t.flags |= 128), (r = !0), B0(l, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = ql(a)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            B0(l, !0),
                            l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ne)
                        )
                            return rt(t), null;
                    } else 2 * _e() - l.renderingStartTime > p0 && n !== 1073741824 && ((t.flags |= 128), (r = !0), B0(l, !1), (t.lanes = 4194304));
                l.isBackwards ? ((a.sibling = t.child), (t.child = a)) : ((n = l.last), n !== null ? (n.sibling = a) : (t.child = a), (l.last = a));
            }
            return l.tail !== null
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = _e()),
                  (t.sibling = null),
                  (n = Ie.current),
                  Te(Ie, r ? (n & 1) | 2 : n & 1),
                  t)
                : (rt(t), null);
        case 22:
        case 23:
            return (
                Os(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? zt & 1073741824 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(q(156, t.tag));
}
function b3(e, t) {
    switch ((vs(t), t.tag)) {
        case 1:
            return wt(t.type) && Pl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return d0(), Ae(xt), Ae(lt), Ts(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return zs(t), null;
        case 13:
            if ((Ae(Ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(q(340));
                h0();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return Ae(Ie), null;
        case 4:
            return d0(), null;
        case 10:
            return ks(t.type._context), null;
        case 22:
        case 23:
            return Os(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Yi = !1,
    it = !1,
    C3 = typeof WeakSet == "function" ? WeakSet : Set,
    X = null;
function Zr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                He(e, t, r);
            }
        else n.current = null;
}
function ku(e, t, n) {
    try {
        n();
    } catch (r) {
        He(e, t, r);
    }
}
var Sc = !1;
function z3(e, t) {
    if (((iu = Al), (e = d4()), ps(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, l.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var a = 0,
                        o = -1,
                        u = -1,
                        s = 0,
                        h = 0,
                        d = e,
                        p = null;
                    t: for (;;) {
                        for (
                            var m;
                            d !== n || (i !== 0 && d.nodeType !== 3) || (o = a + i),
                                d !== l || (r !== 0 && d.nodeType !== 3) || (u = a + r),
                                d.nodeType === 3 && (a += d.nodeValue.length),
                                (m = d.firstChild) !== null;

                        )
                            (p = d), (d = m);
                        for (;;) {
                            if (d === e) break t;
                            if ((p === n && ++s === i && (o = a), p === l && ++h === r && (u = a), (m = d.nextSibling) !== null)) break;
                            (d = p), (p = d.parentNode);
                        }
                        d = m;
                    }
                    n = o === -1 || u === -1 ? null : { start: o, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (lu = { focusedElem: e, selectionRange: n }, Al = !1, X = t; X !== null; )
        if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (X = e);
        else
            for (; X !== null; ) {
                t = X;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (S !== null) {
                                    var w = S.memoizedProps,
                                        N = S.memoizedState,
                                        y = t.stateNode,
                                        x = y.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Jt(t.type, w), N);
                                    y.__reactInternalSnapshotBeforeUpdate = x;
                                }
                                break;
                            case 3:
                                var k = t.stateNode.containerInfo;
                                k.nodeType === 1 ? (k.textContent = "") : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(q(163));
                        }
                } catch (A) {
                    He(t, t.return, A);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (X = e);
                    break;
                }
                X = t.return;
            }
    return (S = Sc), (Sc = !1), S;
}
function Q0(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                (i.destroy = void 0), l !== void 0 && ku(t, n, l);
            }
            i = i.next;
        } while (i !== r);
    }
}
function ua(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Su(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function sd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), sd(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[hn], delete t[fi], delete t[uu], delete t[o3], delete t[u3])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function cd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bc(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || cd(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function bu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Fl));
    else if (r !== 4 && ((e = e.child), e !== null)) for (bu(e, t, n), e = e.sibling; e !== null; ) bu(e, t, n), (e = e.sibling);
}
function Cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (Cu(e, t, n), e = e.sibling; e !== null; ) Cu(e, t, n), (e = e.sibling);
}
var Je = null,
    en = !1;
function Un(e, t, n) {
    for (n = n.child; n !== null; ) hd(e, t, n), (n = n.sibling);
}
function hd(e, t, n) {
    if (pn && typeof pn.onCommitFiberUnmount == "function")
        try {
            pn.onCommitFiberUnmount(ea, n);
        } catch {}
    switch (n.tag) {
        case 5:
            it || Zr(n, t);
        case 6:
            var r = Je,
                i = en;
            (Je = null),
                Un(e, t, n),
                (Je = r),
                (en = i),
                Je !== null &&
                    (en ? ((e = Je), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Je.removeChild(n.stateNode));
            break;
        case 18:
            Je !== null &&
                (en ? ((e = Je), (n = n.stateNode), e.nodeType === 8 ? Ja(e.parentNode, n) : e.nodeType === 1 && Ja(e, n), oi(e)) : Ja(Je, n.stateNode));
            break;
        case 4:
            (r = Je), (i = en), (Je = n.stateNode.containerInfo), (en = !0), Un(e, t, n), (Je = r), (en = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!it && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                i = r = r.next;
                do {
                    var l = i,
                        a = l.destroy;
                    (l = l.tag), a !== void 0 && (l & 2 || l & 4) && ku(n, t, a), (i = i.next);
                } while (i !== r);
            }
            Un(e, t, n);
            break;
        case 1:
            if (!it && (Zr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (o) {
                    He(n, t, o);
                }
            Un(e, t, n);
            break;
        case 21:
            Un(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((it = (r = it) || n.memoizedState !== null), Un(e, t, n), (it = r)) : Un(e, t, n);
            break;
        default:
            Un(e, t, n);
    }
}
function Cc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new C3()),
            t.forEach(function (r) {
                var i = I3.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Zt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e,
                    a = t,
                    o = a;
                e: for (; o !== null; ) {
                    switch (o.tag) {
                        case 5:
                            (Je = o.stateNode), (en = !1);
                            break e;
                        case 3:
                            (Je = o.stateNode.containerInfo), (en = !0);
                            break e;
                        case 4:
                            (Je = o.stateNode.containerInfo), (en = !0);
                            break e;
                    }
                    o = o.return;
                }
                if (Je === null) throw Error(q(160));
                hd(l, a, i), (Je = null), (en = !1);
                var u = i.alternate;
                u !== null && (u.return = null), (i.return = null);
            } catch (s) {
                He(i, t, s);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) fd(t, e), (t = t.sibling);
}
function fd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Zt(t, e), on(e), r & 4)) {
                try {
                    Q0(3, e, e.return), ua(3, e);
                } catch (w) {
                    He(e, e.return, w);
                }
                try {
                    Q0(5, e, e.return);
                } catch (w) {
                    He(e, e.return, w);
                }
            }
            break;
        case 1:
            Zt(t, e), on(e), r & 512 && n !== null && Zr(n, n.return);
            break;
        case 5:
            if ((Zt(t, e), on(e), r & 512 && n !== null && Zr(n, n.return), e.flags & 32)) {
                var i = e.stateNode;
                try {
                    ri(i, "");
                } catch (w) {
                    He(e, e.return, w);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var l = e.memoizedProps,
                    a = n !== null ? n.memoizedProps : l,
                    o = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        o === "input" && l.type === "radio" && l.name != null && If(i, l), Yo(o, a);
                        var s = Yo(o, l);
                        for (a = 0; a < u.length; a += 2) {
                            var h = u[a],
                                d = u[a + 1];
                            h === "style" ? Hf(i, d) : h === "dangerouslySetInnerHTML" ? Of(i, d) : h === "children" ? ri(i, d) : ns(i, h, d, s);
                        }
                        switch (o) {
                            case "input":
                                $o(i, l);
                                break;
                            case "textarea":
                                Lf(i, l);
                                break;
                            case "select":
                                var p = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!l.multiple;
                                var m = l.value;
                                m != null
                                    ? e0(i, !!l.multiple, m, !1)
                                    : p !== !!l.multiple &&
                                      (l.defaultValue != null ? e0(i, !!l.multiple, l.defaultValue, !0) : e0(i, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        i[fi] = l;
                    } catch (w) {
                        He(e, e.return, w);
                    }
            }
            break;
        case 6:
            if ((Zt(t, e), on(e), r & 4)) {
                if (e.stateNode === null) throw Error(q(162));
                (i = e.stateNode), (l = e.memoizedProps);
                try {
                    i.nodeValue = l;
                } catch (w) {
                    He(e, e.return, w);
                }
            }
            break;
        case 3:
            if ((Zt(t, e), on(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    oi(t.containerInfo);
                } catch (w) {
                    He(e, e.return, w);
                }
            break;
        case 4:
            Zt(t, e), on(e);
            break;
        case 13:
            Zt(t, e),
                on(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((l = i.memoizedState !== null),
                    (i.stateNode.isHidden = l),
                    !l || (i.alternate !== null && i.alternate.memoizedState !== null) || (Ls = _e())),
                r & 4 && Cc(e);
            break;
        case 22:
            if (((h = n !== null && n.memoizedState !== null), e.mode & 1 ? ((it = (s = it) || h), Zt(t, e), (it = s)) : Zt(t, e), on(e), r & 8192)) {
                if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !h && e.mode & 1))
                    for (X = e, h = e.child; h !== null; ) {
                        for (d = X = h; X !== null; ) {
                            switch (((p = X), (m = p.child), p.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Q0(4, p, p.return);
                                    break;
                                case 1:
                                    Zr(p, p.return);
                                    var S = p.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        (r = p), (n = p.return);
                                        try {
                                            (t = r), (S.props = t.memoizedProps), (S.state = t.memoizedState), S.componentWillUnmount();
                                        } catch (w) {
                                            He(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Zr(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Tc(d);
                                        continue;
                                    }
                            }
                            m !== null ? ((m.return = p), (X = m)) : Tc(d);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (h === null) {
                            h = d;
                            try {
                                (i = d.stateNode),
                                    s
                                        ? ((l = i.style),
                                          typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : (l.display = "none"))
                                        : ((o = d.stateNode),
                                          (u = d.memoizedProps.style),
                                          (a = u != null && u.hasOwnProperty("display") ? u.display : null),
                                          (o.style.display = Rf("display", a)));
                            } catch (w) {
                                He(e, e.return, w);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (h === null)
                            try {
                                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                            } catch (w) {
                                He(e, e.return, w);
                            }
                    } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        h === d && (h = null), (d = d.return);
                    }
                    h === d && (h = null), (d.sibling.return = d.return), (d = d.sibling);
                }
            }
            break;
        case 19:
            Zt(t, e), on(e), r & 4 && Cc(e);
            break;
        case 21:
            break;
        default:
            Zt(t, e), on(e);
    }
}
function on(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (cd(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(q(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (ri(i, ""), (r.flags &= -33));
                    var l = bc(e);
                    Cu(e, l, i);
                    break;
                case 3:
                case 4:
                    var a = r.stateNode.containerInfo,
                        o = bc(e);
                    bu(e, o, a);
                    break;
                default:
                    throw Error(q(161));
            }
        } catch (u) {
            He(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function T3(e, t, n) {
    (X = e), dd(e);
}
function dd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; X !== null; ) {
        var i = X,
            l = i.child;
        if (i.tag === 22 && r) {
            var a = i.memoizedState !== null || Yi;
            if (!a) {
                var o = i.alternate,
                    u = (o !== null && o.memoizedState !== null) || it;
                o = Yi;
                var s = it;
                if (((Yi = a), (it = u) && !s))
                    for (X = i; X !== null; )
                        (a = X), (u = a.child), a.tag === 22 && a.memoizedState !== null ? Ec(i) : u !== null ? ((u.return = a), (X = u)) : Ec(i);
                for (; l !== null; ) (X = l), dd(l), (l = l.sibling);
                (X = i), (Yi = o), (it = s);
            }
            zc(e);
        } else i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (X = l)) : zc(e);
    }
}
function zc(e) {
    for (; X !== null; ) {
        var t = X;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            it || ua(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !it)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Jt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var l = t.updateQueue;
                            l !== null && sc(t, l, r);
                            break;
                        case 3:
                            var a = t.updateQueue;
                            if (a !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                sc(t, a, n);
                            }
                            break;
                        case 5:
                            var o = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = o;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var s = t.alternate;
                                if (s !== null) {
                                    var h = s.memoizedState;
                                    if (h !== null) {
                                        var d = h.dehydrated;
                                        d !== null && oi(d);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(q(163));
                    }
                it || (t.flags & 512 && Su(t));
            } catch (p) {
                He(t, t.return, p);
            }
        }
        if (t === e) {
            X = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (X = n);
            break;
        }
        X = t.return;
    }
}
function Tc(e) {
    for (; X !== null; ) {
        var t = X;
        if (t === e) {
            X = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (X = n);
            break;
        }
        X = t.return;
    }
}
function Ec(e) {
    for (; X !== null; ) {
        var t = X;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ua(4, t);
                    } catch (u) {
                        He(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            He(t, i, u);
                        }
                    }
                    var l = t.return;
                    try {
                        Su(t);
                    } catch (u) {
                        He(t, l, u);
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Su(t);
                    } catch (u) {
                        He(t, a, u);
                    }
            }
        } catch (u) {
            He(t, t.return, u);
        }
        if (t === e) {
            X = null;
            break;
        }
        var o = t.sibling;
        if (o !== null) {
            (o.return = t.return), (X = o);
            break;
        }
        X = t.return;
    }
}
var E3 = Math.ceil,
    $l = Hn.ReactCurrentDispatcher,
    Ps = Hn.ReactCurrentOwner,
    qt = Hn.ReactCurrentBatchConfig,
    de = 0,
    Ke = null,
    je = null,
    et = 0,
    zt = 0,
    Jr = dr(0),
    Ge = 0,
    yi = null,
    Dr = 0,
    sa = 0,
    Is = 0,
    K0 = null,
    vt = null,
    Ls = 0,
    p0 = 1 / 0,
    Cn = null,
    jl = !1,
    zu = null,
    ir = null,
    Xi = !1,
    Kn = null,
    Vl = 0,
    Z0 = 0,
    Tu = null,
    vl = -1,
    yl = 0;
function ht() {
    return de & 6 ? _e() : vl !== -1 ? vl : (vl = _e());
}
function lr(e) {
    return e.mode & 1
        ? de & 2 && et !== 0
            ? et & -et
            : c3.transition !== null
              ? (yl === 0 && (yl = Kf()), yl)
              : ((e = ye), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : i4(e.type))), e)
        : 1;
}
function ln(e, t, n, r) {
    if (50 < Z0) throw ((Z0 = 0), (Tu = null), Error(q(185)));
    bi(e, n, r),
        (!(de & 2) || e !== Ke) &&
            (e === Ke && (!(de & 2) && (sa |= n), Ge === 4 && Xn(e, et)), kt(e, r), n === 1 && de === 0 && !(t.mode & 1) && ((p0 = _e() + 500), la && mr()));
}
function kt(e, t) {
    var n = e.callbackNode;
    c2(e, t);
    var r = Ml(e, e === Ke ? et : 0);
    if (r === 0) n !== null && B1(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && B1(n), t === 1))
            e.tag === 0 ? s3(Mc.bind(null, e)) : b4(Mc.bind(null, e)),
                l3(function () {
                    !(de & 6) && mr();
                }),
                (n = null);
        else {
            switch (Zf(r)) {
                case 1:
                    n = os;
                    break;
                case 4:
                    n = Xf;
                    break;
                case 16:
                    n = El;
                    break;
                case 536870912:
                    n = Qf;
                    break;
                default:
                    n = El;
            }
            n = kd(n, md.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function md(e, t) {
    if (((vl = -1), (yl = 0), de & 6)) throw Error(q(327));
    var n = e.callbackNode;
    if (l0() && e.callbackNode !== n) return null;
    var r = Ml(e, e === Ke ? et : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Wl(e, r);
    else {
        t = r;
        var i = de;
        de |= 2;
        var l = gd();
        (Ke !== e || et !== t) && ((Cn = null), (p0 = _e() + 500), Tr(e, t));
        do
            try {
                N3();
                break;
            } catch (o) {
                pd(e, o);
            }
        while (1);
        ws(), ($l.current = l), (de = i), je !== null ? (t = 0) : ((Ke = null), (et = 0), (t = Ge));
    }
    if (t !== 0) {
        if ((t === 2 && ((i = Jo(e)), i !== 0 && ((r = i), (t = Eu(e, i)))), t === 1)) throw ((n = yi), Tr(e, 0), Xn(e, r), kt(e, _e()), n);
        if (t === 6) Xn(e, r);
        else {
            if (((i = e.current.alternate), !(r & 30) && !M3(i) && ((t = Wl(e, r)), t === 2 && ((l = Jo(e)), l !== 0 && ((r = l), (t = Eu(e, l)))), t === 1)))
                throw ((n = yi), Tr(e, 0), Xn(e, r), kt(e, _e()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(q(345));
                case 2:
                    kr(e, vt, Cn);
                    break;
                case 3:
                    if ((Xn(e, r), (r & 130023424) === r && ((t = Ls + 500 - _e()), 10 < t))) {
                        if (Ml(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            ht(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = ou(kr.bind(null, e, vt, Cn), t);
                        break;
                    }
                    kr(e, vt, Cn);
                    break;
                case 4:
                    if ((Xn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var a = 31 - rn(r);
                        (l = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~l);
                    }
                    if (
                        ((r = i),
                        (r = _e() - r),
                        (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * E3(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = ou(kr.bind(null, e, vt, Cn), r);
                        break;
                    }
                    kr(e, vt, Cn);
                    break;
                case 5:
                    kr(e, vt, Cn);
                    break;
                default:
                    throw Error(q(329));
            }
        }
    }
    return kt(e, _e()), e.callbackNode === n ? md.bind(null, e) : null;
}
function Eu(e, t) {
    var n = K0;
    return e.current.memoizedState.isDehydrated && (Tr(e, t).flags |= 256), (e = Wl(e, t)), e !== 2 && ((t = vt), (vt = n), t !== null && Mu(t)), e;
}
function Mu(e) {
    vt === null ? (vt = e) : vt.push.apply(vt, e);
}
function M3(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!an(l(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Xn(e, t) {
    for (t &= ~Is, t &= ~sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - rn(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Mc(e) {
    if (de & 6) throw Error(q(327));
    l0();
    var t = Ml(e, 0);
    if (!(t & 1)) return kt(e, _e()), null;
    var n = Wl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Jo(e);
        r !== 0 && ((t = r), (n = Eu(e, r)));
    }
    if (n === 1) throw ((n = yi), Tr(e, 0), Xn(e, t), kt(e, _e()), n);
    if (n === 6) throw Error(q(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), kr(e, vt, Cn), kt(e, _e()), null;
}
function Bs(e, t) {
    var n = de;
    de |= 1;
    try {
        return e(t);
    } finally {
        (de = n), de === 0 && ((p0 = _e() + 500), la && mr());
    }
}
function Fr(e) {
    Kn !== null && Kn.tag === 0 && !(de & 6) && l0();
    var t = de;
    de |= 1;
    var n = qt.transition,
        r = ye;
    try {
        if (((qt.transition = null), (ye = 1), e)) return e();
    } finally {
        (ye = r), (qt.transition = n), (de = t), !(de & 6) && mr();
    }
}
function Os() {
    (zt = Jr.current), Ae(Jr);
}
function Tr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), i3(n)), je !== null))
        for (n = je.return; n !== null; ) {
            var r = n;
            switch ((vs(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Pl();
                    break;
                case 3:
                    d0(), Ae(xt), Ae(lt), Ts();
                    break;
                case 5:
                    zs(r);
                    break;
                case 4:
                    d0();
                    break;
                case 13:
                    Ae(Ie);
                    break;
                case 19:
                    Ae(Ie);
                    break;
                case 10:
                    ks(r.type._context);
                    break;
                case 22:
                case 23:
                    Os();
            }
            n = n.return;
        }
    if (((Ke = e), (je = e = ar(e.current, null)), (et = zt = t), (Ge = 0), (yi = null), (Is = sa = Dr = 0), (vt = K0 = null), Cr !== null)) {
        for (t = 0; t < Cr.length; t++)
            if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    l = n.pending;
                if (l !== null) {
                    var a = l.next;
                    (l.next = i), (r.next = a);
                }
                n.pending = r;
            }
        Cr = null;
    }
    return e;
}
function pd(e, t) {
    do {
        var n = je;
        try {
            if ((ws(), (ml.current = Ul), _l)) {
                for (var r = Be.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                _l = !1;
            }
            if (((Nr = 0), (Qe = We = Be = null), (X0 = !1), (pi = 0), (Ps.current = null), n === null || n.return === null)) {
                (Ge = 1), (yi = t), (je = null);
                break;
            }
            e: {
                var l = e,
                    a = n.return,
                    o = n,
                    u = t;
                if (((t = et), (o.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
                    var s = u,
                        h = o,
                        d = h.tag;
                    if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = h.alternate;
                        p
                            ? ((h.updateQueue = p.updateQueue), (h.memoizedState = p.memoizedState), (h.lanes = p.lanes))
                            : ((h.updateQueue = null), (h.memoizedState = null));
                    }
                    var m = pc(a);
                    if (m !== null) {
                        (m.flags &= -257), gc(m, a, o, l, t), m.mode & 1 && mc(l, s, t), (t = m), (u = s);
                        var S = t.updateQueue;
                        if (S === null) {
                            var w = new Set();
                            w.add(u), (t.updateQueue = w);
                        } else S.add(u);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            mc(l, s, t), Rs();
                            break e;
                        }
                        u = Error(q(426));
                    }
                } else if (Ne && o.mode & 1) {
                    var N = pc(a);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256), gc(N, a, o, l, t), ys(m0(u, o));
                        break e;
                    }
                }
                (l = u = m0(u, o)), Ge !== 4 && (Ge = 2), K0 === null ? (K0 = [l]) : K0.push(l), (l = a);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                            var y = Z4(l, u, t);
                            uc(l, y);
                            break e;
                        case 1:
                            o = u;
                            var x = l.type,
                                k = l.stateNode;
                            if (
                                !(l.flags & 128) &&
                                (typeof x.getDerivedStateFromError == "function" ||
                                    (k !== null && typeof k.componentDidCatch == "function" && (ir === null || !ir.has(k))))
                            ) {
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                                var A = J4(l, o, t);
                                uc(l, A);
                                break e;
                            }
                    }
                    l = l.return;
                } while (l !== null);
            }
            yd(n);
        } catch (P) {
            (t = P), je === n && n !== null && (je = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function gd() {
    var e = $l.current;
    return ($l.current = Ul), e === null ? Ul : e;
}
function Rs() {
    (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Ke === null || (!(Dr & 268435455) && !(sa & 268435455)) || Xn(Ke, et);
}
function Wl(e, t) {
    var n = de;
    de |= 2;
    var r = gd();
    (Ke !== e || et !== t) && ((Cn = null), Tr(e, t));
    do
        try {
            A3();
            break;
        } catch (i) {
            pd(e, i);
        }
    while (1);
    if ((ws(), (de = n), ($l.current = r), je !== null)) throw Error(q(261));
    return (Ke = null), (et = 0), Ge;
}
function A3() {
    for (; je !== null; ) vd(je);
}
function N3() {
    for (; je !== null && !t2(); ) vd(je);
}
function vd(e) {
    var t = wd(e.alternate, e, zt);
    (e.memoizedProps = e.pendingProps), t === null ? yd(e) : (je = t), (Ps.current = null);
}
function yd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = b3(n, t)), n !== null)) {
                (n.flags &= 32767), (je = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Ge = 6), (je = null);
                return;
            }
        } else if (((n = S3(n, t, zt)), n !== null)) {
            je = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            je = t;
            return;
        }
        je = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
}
function kr(e, t, n) {
    var r = ye,
        i = qt.transition;
    try {
        (qt.transition = null), (ye = 1), D3(e, t, n, r);
    } finally {
        (qt.transition = i), (ye = r);
    }
    return null;
}
function D3(e, t, n, r) {
    do l0();
    while (Kn !== null);
    if (de & 6) throw Error(q(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(q(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
        (h2(e, l),
        e === Ke && ((je = Ke = null), (et = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Xi ||
            ((Xi = !0),
            kd(El, function () {
                return l0(), null;
            })),
        (l = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || l)
    ) {
        (l = qt.transition), (qt.transition = null);
        var a = ye;
        ye = 1;
        var o = de;
        (de |= 4),
            (Ps.current = null),
            z3(e, n),
            fd(n, e),
            K2(lu),
            (Al = !!iu),
            (lu = iu = null),
            (e.current = n),
            T3(n),
            n2(),
            (de = o),
            (ye = a),
            (qt.transition = l);
    } else e.current = n;
    if ((Xi && ((Xi = !1), (Kn = e), (Vl = i)), (l = e.pendingLanes), l === 0 && (ir = null), l2(n.stateNode), kt(e, _e()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (jl) throw ((jl = !1), (e = zu), (zu = null), e);
    return Vl & 1 && e.tag !== 0 && l0(), (l = e.pendingLanes), l & 1 ? (e === Tu ? Z0++ : ((Z0 = 0), (Tu = e))) : (Z0 = 0), mr(), null;
}
function l0() {
    if (Kn !== null) {
        var e = Zf(Vl),
            t = qt.transition,
            n = ye;
        try {
            if (((qt.transition = null), (ye = 16 > e ? 16 : e), Kn === null)) var r = !1;
            else {
                if (((e = Kn), (Kn = null), (Vl = 0), de & 6)) throw Error(q(331));
                var i = de;
                for (de |= 4, X = e.current; X !== null; ) {
                    var l = X,
                        a = l.child;
                    if (X.flags & 16) {
                        var o = l.deletions;
                        if (o !== null) {
                            for (var u = 0; u < o.length; u++) {
                                var s = o[u];
                                for (X = s; X !== null; ) {
                                    var h = X;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Q0(8, h, l);
                                    }
                                    var d = h.child;
                                    if (d !== null) (d.return = h), (X = d);
                                    else
                                        for (; X !== null; ) {
                                            h = X;
                                            var p = h.sibling,
                                                m = h.return;
                                            if ((sd(h), h === s)) {
                                                X = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                (p.return = m), (X = p);
                                                break;
                                            }
                                            X = m;
                                        }
                                }
                            }
                            var S = l.alternate;
                            if (S !== null) {
                                var w = S.child;
                                if (w !== null) {
                                    S.child = null;
                                    do {
                                        var N = w.sibling;
                                        (w.sibling = null), (w = N);
                                    } while (w !== null);
                                }
                            }
                            X = l;
                        }
                    }
                    if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (X = a);
                    else
                        e: for (; X !== null; ) {
                            if (((l = X), l.flags & 2048))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Q0(9, l, l.return);
                                }
                            var y = l.sibling;
                            if (y !== null) {
                                (y.return = l.return), (X = y);
                                break e;
                            }
                            X = l.return;
                        }
                }
                var x = e.current;
                for (X = x; X !== null; ) {
                    a = X;
                    var k = a.child;
                    if (a.subtreeFlags & 2064 && k !== null) (k.return = a), (X = k);
                    else
                        e: for (a = x; X !== null; ) {
                            if (((o = X), o.flags & 2048))
                                try {
                                    switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ua(9, o);
                                    }
                                } catch (P) {
                                    He(o, o.return, P);
                                }
                            if (o === a) {
                                X = null;
                                break e;
                            }
                            var A = o.sibling;
                            if (A !== null) {
                                (A.return = o.return), (X = A);
                                break e;
                            }
                            X = o.return;
                        }
                }
                if (((de = i), mr(), pn && typeof pn.onPostCommitFiberRoot == "function"))
                    try {
                        pn.onPostCommitFiberRoot(ea, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (ye = n), (qt.transition = t);
        }
    }
    return !1;
}
function Ac(e, t, n) {
    (t = m0(n, t)), (t = Z4(e, t, 1)), (e = rr(e, t, 1)), (t = ht()), e !== null && (bi(e, 1, t), kt(e, t));
}
function He(e, t, n) {
    if (e.tag === 3) Ac(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ac(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (ir === null || !ir.has(r)))) {
                    (e = m0(n, e)), (e = J4(t, e, 1)), (t = rr(t, e, 1)), (e = ht()), t !== null && (bi(t, 1, e), kt(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function F3(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ht()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ke === e && (et & n) === n && (Ge === 4 || (Ge === 3 && (et & 130023424) === et && 500 > _e() - Ls) ? Tr(e, 0) : (Is |= n)),
        kt(e, t);
}
function xd(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Hi), (Hi <<= 1), !(Hi & 130023424) && (Hi = 4194304)) : (t = 1));
    var n = ht();
    (e = In(e, t)), e !== null && (bi(e, t, n), kt(e, n));
}
function P3(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), xd(e, n);
}
function I3(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(q(314));
    }
    r !== null && r.delete(t), xd(e, n);
}
var wd;
wd = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || xt.current) yt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), k3(e, t, n);
            yt = !!(e.flags & 131072);
        }
    else (yt = !1), Ne && t.flags & 1048576 && C4(t, Bl, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            gl(e, t), (e = t.pendingProps);
            var i = c0(t, lt.current);
            i0(t, n), (i = Ms(null, t, r, e, i, n));
            var l = As();
            return (
                (t.flags |= 1),
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      wt(r) ? ((l = !0), Il(t)) : (l = !1),
                      (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                      bs(t),
                      (i.updater = oa),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      mu(t, r, e, n),
                      (t = vu(null, t, r, !0, l, n)))
                    : ((t.tag = 0), Ne && l && gs(t), ut(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch ((gl(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = B3(r)), (e = Jt(r, e)), i)) {
                    case 0:
                        t = gu(null, t, r, e, n);
                        break e;
                    case 1:
                        t = xc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = vc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = yc(null, t, r, Jt(r.type, e), n);
                        break e;
                }
                throw Error(q(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Jt(r, i)), gu(e, t, r, i, n);
        case 1:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Jt(r, i)), xc(e, t, r, i, n);
        case 3:
            e: {
                if ((rd(t), e === null)) throw Error(q(387));
                (r = t.pendingProps), (l = t.memoizedState), (i = l.element), N4(e, t), Hl(t, r, null, n);
                var a = t.memoizedState;
                if (((r = a.element), l.isDehydrated))
                    if (
                        ((l = {
                            element: r,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions,
                        }),
                        (t.updateQueue.baseState = l),
                        (t.memoizedState = l),
                        t.flags & 256)
                    ) {
                        (i = m0(Error(q(423)), t)), (t = wc(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = m0(Error(q(424)), t)), (t = wc(e, t, r, n, i));
                        break e;
                    } else
                        for (Mt = nr(t.stateNode.containerInfo.firstChild), Nt = t, Ne = !0, nn = null, n = M4(t, null, r, n), t.child = n; n; )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((h0(), r === i)) {
                        t = Ln(e, t, n);
                        break e;
                    }
                    ut(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                D4(t),
                e === null && hu(t),
                (r = t.type),
                (i = t.pendingProps),
                (l = e !== null ? e.memoizedProps : null),
                (a = i.children),
                au(r, i) ? (a = null) : l !== null && au(r, l) && (t.flags |= 32),
                nd(e, t),
                ut(e, t, a, n),
                t.child
            );
        case 6:
            return e === null && hu(t), null;
        case 13:
            return id(e, t, n);
        case 4:
            return Cs(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = f0(t, null, r, n)) : ut(e, t, r, n), t.child;
        case 11:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Jt(r, i)), vc(e, t, r, i, n);
        case 7:
            return ut(e, t, t.pendingProps, n), t.child;
        case 8:
            return ut(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ut(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (l = t.memoizedProps),
                    (a = i.value),
                    Te(Ol, r._currentValue),
                    (r._currentValue = a),
                    l !== null)
                )
                    if (an(l.value, a)) {
                        if (l.children === i.children && !xt.current) {
                            t = Ln(e, t, n);
                            break e;
                        }
                    } else
                        for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                            var o = l.dependencies;
                            if (o !== null) {
                                a = l.child;
                                for (var u = o.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (l.tag === 1) {
                                            (u = An(-1, n & -n)), (u.tag = 2);
                                            var s = l.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var h = s.pending;
                                                h === null ? (u.next = u) : ((u.next = h.next), (h.next = u)), (s.pending = u);
                                            }
                                        }
                                        (l.lanes |= n), (u = l.alternate), u !== null && (u.lanes |= n), fu(l.return, n, t), (o.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (((a = l.return), a === null)) throw Error(q(341));
                                (a.lanes |= n), (o = a.alternate), o !== null && (o.lanes |= n), fu(a, n, t), (a = l.sibling);
                            } else a = l.child;
                            if (a !== null) a.return = l;
                            else
                                for (a = l; a !== null; ) {
                                    if (a === t) {
                                        a = null;
                                        break;
                                    }
                                    if (((l = a.sibling), l !== null)) {
                                        (l.return = a.return), (a = l);
                                        break;
                                    }
                                    a = a.return;
                                }
                            l = a;
                        }
                ut(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (i = t.type), (r = t.pendingProps.children), i0(t, n), (i = Ut(i)), (r = r(i)), (t.flags |= 1), ut(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (i = Jt(r, t.pendingProps)), (i = Jt(r.type, i)), yc(e, t, r, i, n);
        case 15:
            return ed(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Jt(r, i)),
                gl(e, t),
                (t.tag = 1),
                wt(r) ? ((e = !0), Il(t)) : (e = !1),
                i0(t, n),
                K4(t, r, i),
                mu(t, r, i, n),
                vu(null, t, r, !0, e, n)
            );
        case 19:
            return ld(e, t, n);
        case 22:
            return td(e, t, n);
    }
    throw Error(q(156, t.tag));
};
function kd(e, t) {
    return Yf(e, t);
}
function L3(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Rt(e, t, n, r) {
    return new L3(e, t, n, r);
}
function Hs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function B3(e) {
    if (typeof e == "function") return Hs(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === is)) return 11;
        if (e === ls) return 14;
    }
    return 2;
}
function ar(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Rt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function xl(e, t, n, r, i, l) {
    var a = 2;
    if (((r = e), typeof e == "function")) Hs(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else
        e: switch (e) {
            case $r:
                return Er(n.children, i, l, t);
            case rs:
                (a = 8), (i |= 8);
                break;
            case Ro:
                return (e = Rt(12, n, t, i | 2)), (e.elementType = Ro), (e.lanes = l), e;
            case Ho:
                return (e = Rt(13, n, t, i)), (e.elementType = Ho), (e.lanes = l), e;
            case qo:
                return (e = Rt(19, n, t, i)), (e.elementType = qo), (e.lanes = l), e;
            case Df:
                return ca(n, i, l, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Af:
                            a = 10;
                            break e;
                        case Nf:
                            a = 9;
                            break e;
                        case is:
                            a = 11;
                            break e;
                        case ls:
                            a = 14;
                            break e;
                        case Wn:
                            (a = 16), (r = null);
                            break e;
                    }
                throw Error(q(130, e == null ? e : typeof e, ""));
        }
    return (t = Rt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
}
function Er(e, t, n, r) {
    return (e = Rt(7, e, r, t)), (e.lanes = n), e;
}
function ca(e, t, n, r) {
    return (e = Rt(22, e, r, t)), (e.elementType = Df), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function oo(e, t, n) {
    return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function uo(e, t, n) {
    return (
        (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function O3(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ua(0)),
        (this.expirationTimes = Ua(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = Ua(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function qs(e, t, n, r, i, l, a, o, u) {
    return (
        (e = new O3(e, t, n, o, u)),
        t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
        (l = Rt(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        bs(l),
        e
    );
}
function R3(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ur, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Sd(e) {
    if (!e) return ur;
    e = e._reactInternals;
    e: {
        if (Ir(e) !== e || e.tag !== 1) throw Error(q(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (wt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(q(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (wt(n)) return S4(e, n, t);
    }
    return t;
}
function bd(e, t, n, r, i, l, a, o, u) {
    return (
        (e = qs(n, r, !0, e, i, l, a, o, u)),
        (e.context = Sd(null)),
        (n = e.current),
        (r = ht()),
        (i = lr(n)),
        (l = An(r, i)),
        (l.callback = t ?? null),
        rr(n, l, i),
        (e.current.lanes = i),
        bi(e, i, r),
        kt(e, r),
        e
    );
}
function ha(e, t, n, r) {
    var i = t.current,
        l = ht(),
        a = lr(i);
    return (
        (n = Sd(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = An(l, a)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = rr(i, t, a)),
        e !== null && (ln(e, i, a, l), dl(e, i, a)),
        a
    );
}
function Gl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Nc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function _s(e, t) {
    Nc(e, t), (e = e.alternate) && Nc(e, t);
}
function H3() {
    return null;
}
var Cd =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Us(e) {
    this._internalRoot = e;
}
fa.prototype.render = Us.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(q(409));
    ha(e, t, null, null);
};
fa.prototype.unmount = Us.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Fr(function () {
            ha(null, e, null, null);
        }),
            (t[Pn] = null);
    }
};
function fa(e) {
    this._internalRoot = e;
}
fa.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = t4();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Yn.length && t !== 0 && t < Yn[n].priority; n++);
        Yn.splice(n, 0, e), n === 0 && r4(e);
    }
};
function $s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function da(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Dc() {}
function q3(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var s = Gl(a);
                l.call(s);
            };
        }
        var a = bd(t, r, e, 0, null, !1, !1, "", Dc);
        return (e._reactRootContainer = a), (e[Pn] = a.current), ci(e.nodeType === 8 ? e.parentNode : e), Fr(), a;
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var o = r;
        r = function () {
            var s = Gl(u);
            o.call(s);
        };
    }
    var u = qs(e, 0, !1, null, null, !1, !1, "", Dc);
    return (
        (e._reactRootContainer = u),
        (e[Pn] = u.current),
        ci(e.nodeType === 8 ? e.parentNode : e),
        Fr(function () {
            ha(t, u, n, r);
        }),
        u
    );
}
function ma(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var a = l;
        if (typeof i == "function") {
            var o = i;
            i = function () {
                var u = Gl(a);
                o.call(u);
            };
        }
        ha(t, a, e, i);
    } else a = q3(n, t, e, i, r);
    return Gl(a);
}
Jf = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = _0(t.pendingLanes);
                n !== 0 && (us(t, n | 1), kt(t, _e()), !(de & 6) && ((p0 = _e() + 500), mr()));
            }
            break;
        case 13:
            Fr(function () {
                var r = In(e, 1);
                if (r !== null) {
                    var i = ht();
                    ln(r, e, 1, i);
                }
            }),
                _s(e, 1);
    }
};
ss = function (e) {
    if (e.tag === 13) {
        var t = In(e, 134217728);
        if (t !== null) {
            var n = ht();
            ln(t, e, 134217728, n);
        }
        _s(e, 134217728);
    }
};
e4 = function (e) {
    if (e.tag === 13) {
        var t = lr(e),
            n = In(e, t);
        if (n !== null) {
            var r = ht();
            ln(n, e, t, r);
        }
        _s(e, t);
    }
};
t4 = function () {
    return ye;
};
n4 = function (e, t) {
    var n = ye;
    try {
        return (ye = e), t();
    } finally {
        ye = n;
    }
};
Qo = function (e, t, n) {
    switch (t) {
        case "input":
            if (($o(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = ia(r);
                        if (!i) throw Error(q(90));
                        Pf(r), $o(r, i);
                    }
                }
            }
            break;
        case "textarea":
            Lf(e, n);
            break;
        case "select":
            (t = n.value), t != null && e0(e, !!n.multiple, t, !1);
    }
};
Uf = Bs;
$f = Fr;
var _3 = { usingClientEntryPoint: !1, Events: [zi, Gr, ia, qf, _f, Bs] },
    O0 = { findFiberByHostInstance: br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    U3 = {
        bundleType: O0.bundleType,
        version: O0.version,
        rendererPackageName: O0.rendererPackageName,
        rendererConfig: O0.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Hn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Wf(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: O0.findFiberByHostInstance || H3,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qi.isDisabled && Qi.supportsFiber)
        try {
            (ea = Qi.inject(U3)), (pn = Qi);
        } catch {}
}
Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _3;
Ft.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$s(t)) throw Error(q(200));
    return R3(e, t, null, n);
};
Ft.createRoot = function (e, t) {
    if (!$s(e)) throw Error(q(299));
    var n = !1,
        r = "",
        i = Cd;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = qs(e, 1, !1, null, null, n, !1, r, i)),
        (e[Pn] = t.current),
        ci(e.nodeType === 8 ? e.parentNode : e),
        new Us(t)
    );
};
Ft.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(q(188)) : ((e = Object.keys(e).join(",")), Error(q(268, e)));
    return (e = Wf(t)), (e = e === null ? null : e.stateNode), e;
};
Ft.flushSync = function (e) {
    return Fr(e);
};
Ft.hydrate = function (e, t, n) {
    if (!da(t)) throw Error(q(200));
    return ma(null, e, t, !0, n);
};
Ft.hydrateRoot = function (e, t, n) {
    if (!$s(e)) throw Error(q(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = "",
        a = Cd;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
        (t = bd(t, null, e, 1, n ?? null, i, !1, l, a)),
        (e[Pn] = t.current),
        ci(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i);
    return new fa(t);
};
Ft.render = function (e, t, n) {
    if (!da(t)) throw Error(q(200));
    return ma(null, e, t, !1, n);
};
Ft.unmountComponentAtNode = function (e) {
    if (!da(e)) throw Error(q(40));
    return e._reactRootContainer
        ? (Fr(function () {
              ma(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Pn] = null);
              });
          }),
          !0)
        : !1;
};
Ft.unstable_batchedUpdates = Bs;
Ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!da(n)) throw Error(q(200));
    if (e == null || e._reactInternals === void 0) throw Error(q(38));
    return ma(e, t, n, !1, r);
};
Ft.version = "18.3.1-next-f1338f8080-20240426";
function zd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd);
        } catch (e) {
            console.error(e);
        }
}
zd(), (zf.exports = Ft);
var $3 = zf.exports,
    Fc = $3;
(Bo.createRoot = Fc.createRoot), (Bo.hydrateRoot = Fc.hydrateRoot);
const Pc = ["http", "https", "mailto", "tel"];
function j3(e) {
    const t = (e || "").trim(),
        n = t.charAt(0);
    if (n === "#" || n === "/") return t;
    const r = t.indexOf(":");
    if (r === -1) return t;
    let i = -1;
    for (; ++i < Pc.length; ) {
        const l = Pc[i];
        if (r === l.length && t.slice(0, l.length).toLowerCase() === l) return t;
    }
    return (i = t.indexOf("?")), (i !== -1 && r > i) || ((i = t.indexOf("#")), i !== -1 && r > i) ? t : "javascript:void(0)";
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var V3 = function (t) {
    return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
};
const Td = v0(V3);
function J0(e) {
    return !e || typeof e != "object"
        ? ""
        : "position" in e || "type" in e
          ? Ic(e.position)
          : "start" in e || "end" in e
            ? Ic(e)
            : "line" in e || "column" in e
              ? Au(e)
              : "";
}
function Au(e) {
    return Lc(e && e.line) + ":" + Lc(e && e.column);
}
function Ic(e) {
    return Au(e && e.start) + "-" + Au(e && e.end);
}
function Lc(e) {
    return e && typeof e == "number" ? e : 1;
}
class Wt extends Error {
    constructor(t, n, r) {
        const i = [null, null];
        let l = { start: { line: null, column: null }, end: { line: null, column: null } };
        if ((super(), typeof n == "string" && ((r = n), (n = void 0)), typeof r == "string")) {
            const a = r.indexOf(":");
            a === -1 ? (i[1] = r) : ((i[0] = r.slice(0, a)), (i[1] = r.slice(a + 1)));
        }
        n &&
            ("type" in n || "position" in n
                ? n.position && (l = n.position)
                : "start" in n || "end" in n
                  ? (l = n)
                  : ("line" in n || "column" in n) && (l.start = n)),
            (this.name = J0(n) || "1:1"),
            (this.message = typeof t == "object" ? t.message : t),
            (this.stack = ""),
            typeof t == "object" && t.stack && (this.stack = t.stack),
            (this.reason = this.message),
            this.fatal,
            (this.line = l.start.line),
            (this.column = l.start.column),
            (this.position = l),
            (this.source = i[0]),
            (this.ruleId = i[1]),
            this.file,
            this.actual,
            this.expected,
            this.url,
            this.note;
    }
}
Wt.prototype.file = "";
Wt.prototype.name = "";
Wt.prototype.reason = "";
Wt.prototype.message = "";
Wt.prototype.stack = "";
Wt.prototype.fatal = null;
Wt.prototype.column = null;
Wt.prototype.line = null;
Wt.prototype.source = null;
Wt.prototype.ruleId = null;
Wt.prototype.position = null;
const sn = { basename: W3, dirname: G3, extname: Y3, join: X3, sep: "/" };
function W3(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    Ei(e);
    let n = 0,
        r = -1,
        i = e.length,
        l;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--; )
            if (e.charCodeAt(i) === 47) {
                if (l) {
                    n = i + 1;
                    break;
                }
            } else r < 0 && ((l = !0), (r = i + 1));
        return r < 0 ? "" : e.slice(n, r);
    }
    if (t === e) return "";
    let a = -1,
        o = t.length - 1;
    for (; i--; )
        if (e.charCodeAt(i) === 47) {
            if (l) {
                n = i + 1;
                break;
            }
        } else a < 0 && ((l = !0), (a = i + 1)), o > -1 && (e.charCodeAt(i) === t.charCodeAt(o--) ? o < 0 && (r = i) : ((o = -1), (r = a)));
    return n === r ? (r = a) : r < 0 && (r = e.length), e.slice(n, r);
}
function G3(e) {
    if ((Ei(e), e.length === 0)) return ".";
    let t = -1,
        n = e.length,
        r;
    for (; --n; )
        if (e.charCodeAt(n) === 47) {
            if (r) {
                t = n;
                break;
            }
        } else r || (r = !0);
    return t < 0 ? (e.charCodeAt(0) === 47 ? "/" : ".") : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t);
}
function Y3(e) {
    Ei(e);
    let t = e.length,
        n = -1,
        r = 0,
        i = -1,
        l = 0,
        a;
    for (; t--; ) {
        const o = e.charCodeAt(t);
        if (o === 47) {
            if (a) {
                r = t + 1;
                break;
            }
            continue;
        }
        n < 0 && ((a = !0), (n = t + 1)), o === 46 ? (i < 0 ? (i = t) : l !== 1 && (l = 1)) : i > -1 && (l = -1);
    }
    return i < 0 || n < 0 || l === 0 || (l === 1 && i === n - 1 && i === r + 1) ? "" : e.slice(i, n);
}
function X3(...e) {
    let t = -1,
        n;
    for (; ++t < e.length; ) Ei(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : Q3(n);
}
function Q3(e) {
    Ei(e);
    const t = e.charCodeAt(0) === 47;
    let n = K3(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function K3(e, t) {
    let n = "",
        r = 0,
        i = -1,
        l = 0,
        a = -1,
        o,
        u;
    for (; ++a <= e.length; ) {
        if (a < e.length) o = e.charCodeAt(a);
        else {
            if (o === 47) break;
            o = 47;
        }
        if (o === 47) {
            if (!(i === a - 1 || l === 1))
                if (i !== a - 1 && l === 2) {
                    if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (((u = n.lastIndexOf("/")), u !== n.length - 1)) {
                                u < 0 ? ((n = ""), (r = 0)) : ((n = n.slice(0, u)), (r = n.length - 1 - n.lastIndexOf("/"))), (i = a), (l = 0);
                                continue;
                            }
                        } else if (n.length > 0) {
                            (n = ""), (r = 0), (i = a), (l = 0);
                            continue;
                        }
                    }
                    t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
                } else n.length > 0 ? (n += "/" + e.slice(i + 1, a)) : (n = e.slice(i + 1, a)), (r = a - i - 1);
            (i = a), (l = 0);
        } else o === 46 && l > -1 ? l++ : (l = -1);
    }
    return n;
}
function Ei(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Z3 = { cwd: J3 };
function J3() {
    return "/";
}
function Nu(e) {
    return e !== null && typeof e == "object" && e.href && e.origin;
}
function e5(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Nu(e)) {
        const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
    }
    if (e.protocol !== "file:") {
        const t = new TypeError("The URL must be of scheme file");
        throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
    }
    return t5(e);
}
function t5(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length; )
        if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
            const r = t.charCodeAt(n + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
            }
        }
    return decodeURIComponent(t);
}
const so = ["history", "path", "basename", "stem", "extname", "dirname"];
class Ed {
    constructor(t) {
        let n;
        t ? (typeof t == "string" || n5(t) ? (n = { value: t }) : Nu(t) ? (n = { path: t }) : (n = t)) : (n = {}),
            (this.data = {}),
            (this.messages = []),
            (this.history = []),
            (this.cwd = Z3.cwd()),
            this.value,
            this.stored,
            this.result,
            this.map;
        let r = -1;
        for (; ++r < so.length; ) {
            const l = so[r];
            l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
        }
        let i;
        for (i in n) so.includes(i) || (this[i] = n[i]);
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(t) {
        Nu(t) && (t = e5(t)), ho(t, "path"), this.path !== t && this.history.push(t);
    }
    get dirname() {
        return typeof this.path == "string" ? sn.dirname(this.path) : void 0;
    }
    set dirname(t) {
        Bc(this.basename, "dirname"), (this.path = sn.join(t || "", this.basename));
    }
    get basename() {
        return typeof this.path == "string" ? sn.basename(this.path) : void 0;
    }
    set basename(t) {
        ho(t, "basename"), co(t, "basename"), (this.path = sn.join(this.dirname || "", t));
    }
    get extname() {
        return typeof this.path == "string" ? sn.extname(this.path) : void 0;
    }
    set extname(t) {
        if ((co(t, "extname"), Bc(this.dirname, "extname"), t)) {
            if (t.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = sn.join(this.dirname, this.stem + (t || ""));
    }
    get stem() {
        return typeof this.path == "string" ? sn.basename(this.path, this.extname) : void 0;
    }
    set stem(t) {
        ho(t, "stem"), co(t, "stem"), (this.path = sn.join(this.dirname || "", t + (this.extname || "")));
    }
    toString(t) {
        return (this.value || "").toString(t || void 0);
    }
    message(t, n, r) {
        const i = new Wt(t, n, r);
        return this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)), (i.fatal = !1), this.messages.push(i), i;
    }
    info(t, n, r) {
        const i = this.message(t, n, r);
        return (i.fatal = null), i;
    }
    fail(t, n, r) {
        const i = this.message(t, n, r);
        throw ((i.fatal = !0), i);
    }
}
function co(e, t) {
    if (e && e.includes(sn.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + sn.sep + "`");
}
function ho(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
}
function Bc(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function n5(e) {
    return Td(e);
}
function Oc(e) {
    if (e) throw e;
}
var wl = Object.prototype.hasOwnProperty,
    Md = Object.prototype.toString,
    Rc = Object.defineProperty,
    Hc = Object.getOwnPropertyDescriptor,
    qc = function (t) {
        return typeof Array.isArray == "function" ? Array.isArray(t) : Md.call(t) === "[object Array]";
    },
    _c = function (t) {
        if (!t || Md.call(t) !== "[object Object]") return !1;
        var n = wl.call(t, "constructor"),
            r = t.constructor && t.constructor.prototype && wl.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !r) return !1;
        var i;
        for (i in t);
        return typeof i > "u" || wl.call(t, i);
    },
    Uc = function (t, n) {
        Rc && n.name === "__proto__" ? Rc(t, n.name, { enumerable: !0, configurable: !0, value: n.newValue, writable: !0 }) : (t[n.name] = n.newValue);
    },
    $c = function (t, n) {
        if (n === "__proto__")
            if (wl.call(t, n)) {
                if (Hc) return Hc(t, n).value;
            } else return;
        return t[n];
    },
    r5 = function e() {
        var t,
            n,
            r,
            i,
            l,
            a,
            o = arguments[0],
            u = 1,
            s = arguments.length,
            h = !1;
        for (
            typeof o == "boolean" && ((h = o), (o = arguments[1] || {}), (u = 2)), (o == null || (typeof o != "object" && typeof o != "function")) && (o = {});
            u < s;
            ++u
        )
            if (((t = arguments[u]), t != null))
                for (n in t)
                    (r = $c(o, n)),
                        (i = $c(t, n)),
                        o !== i &&
                            (h && i && (_c(i) || (l = qc(i)))
                                ? (l ? ((l = !1), (a = r && qc(r) ? r : [])) : (a = r && _c(r) ? r : {}), Uc(o, { name: n, newValue: e(h, a, i) }))
                                : typeof i < "u" && Uc(o, { name: n, newValue: i }));
        return o;
    };
const jc = v0(r5);
function Du(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function i5() {
    const e = [],
        t = { run: n, use: r };
    return t;
    function n(...i) {
        let l = -1;
        const a = i.pop();
        if (typeof a != "function") throw new TypeError("Expected function as last argument, not " + a);
        o(null, ...i);
        function o(u, ...s) {
            const h = e[++l];
            let d = -1;
            if (u) {
                a(u);
                return;
            }
            for (; ++d < i.length; ) (s[d] === null || s[d] === void 0) && (s[d] = i[d]);
            (i = s), h ? l5(h, o)(...s) : a(null, ...s);
        }
    }
    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), t;
    }
}
function l5(e, t) {
    let n;
    return r;
    function r(...a) {
        const o = e.length > a.length;
        let u;
        o && a.push(i);
        try {
            u = e.apply(this, a);
        } catch (s) {
            const h = s;
            if (o && n) throw h;
            return i(h);
        }
        o || (u && u.then && typeof u.then == "function" ? u.then(l, i) : u instanceof Error ? i(u) : l(u));
    }
    function i(a, ...o) {
        n || ((n = !0), t(a, ...o));
    }
    function l(a) {
        i(null, a);
    }
}
const a5 = Nd().freeze(),
    Ad = {}.hasOwnProperty;
function Nd() {
    const e = i5(),
        t = [];
    let n = {},
        r,
        i = -1;
    return (
        (l.data = a),
        (l.Parser = void 0),
        (l.Compiler = void 0),
        (l.freeze = o),
        (l.attachers = t),
        (l.use = u),
        (l.parse = s),
        (l.stringify = h),
        (l.run = d),
        (l.runSync = p),
        (l.process = m),
        (l.processSync = S),
        l
    );
    function l() {
        const w = Nd();
        let N = -1;
        for (; ++N < t.length; ) w.use(...t[N]);
        return w.data(jc(!0, {}, n)), w;
    }
    function a(w, N) {
        return typeof w == "string"
            ? arguments.length === 2
                ? (po("data", r), (n[w] = N), l)
                : (Ad.call(n, w) && n[w]) || null
            : w
              ? (po("data", r), (n = w), l)
              : n;
    }
    function o() {
        if (r) return l;
        for (; ++i < t.length; ) {
            const [w, ...N] = t[i];
            if (N[0] === !1) continue;
            N[0] === !0 && (N[0] = void 0);
            const y = w.call(l, ...N);
            typeof y == "function" && e.use(y);
        }
        return (r = !0), (i = Number.POSITIVE_INFINITY), l;
    }
    function u(w, ...N) {
        let y;
        if ((po("use", r), w != null))
            if (typeof w == "function") P(w, ...N);
            else if (typeof w == "object") Array.isArray(w) ? A(w) : k(w);
            else throw new TypeError("Expected usable value, not `" + w + "`");
        return y && (n.settings = Object.assign(n.settings || {}, y)), l;
        function x(T) {
            if (typeof T == "function") P(T);
            else if (typeof T == "object")
                if (Array.isArray(T)) {
                    const [F, ...L] = T;
                    P(F, ...L);
                } else k(T);
            else throw new TypeError("Expected usable value, not `" + T + "`");
        }
        function k(T) {
            A(T.plugins), T.settings && (y = Object.assign(y || {}, T.settings));
        }
        function A(T) {
            let F = -1;
            if (T != null)
                if (Array.isArray(T))
                    for (; ++F < T.length; ) {
                        const L = T[F];
                        x(L);
                    }
                else throw new TypeError("Expected a list of plugins, not `" + T + "`");
        }
        function P(T, F) {
            let L = -1,
                R;
            for (; ++L < t.length; )
                if (t[L][0] === T) {
                    R = t[L];
                    break;
                }
            R ? (Du(R[1]) && Du(F) && (F = jc(!0, R[1], F)), (R[1] = F)) : t.push([...arguments]);
        }
    }
    function s(w) {
        l.freeze();
        const N = R0(w),
            y = l.Parser;
        return fo("parse", y), Vc(y, "parse") ? new y(String(N), N).parse() : y(String(N), N);
    }
    function h(w, N) {
        l.freeze();
        const y = R0(N),
            x = l.Compiler;
        return mo("stringify", x), Wc(w), Vc(x, "compile") ? new x(w, y).compile() : x(w, y);
    }
    function d(w, N, y) {
        if ((Wc(w), l.freeze(), !y && typeof N == "function" && ((y = N), (N = void 0)), !y)) return new Promise(x);
        x(null, y);
        function x(k, A) {
            e.run(w, R0(N), P);
            function P(T, F, L) {
                (F = F || w), T ? A(T) : k ? k(F) : y(null, F, L);
            }
        }
    }
    function p(w, N) {
        let y, x;
        return l.run(w, N, k), Gc("runSync", "run", x), y;
        function k(A, P) {
            Oc(A), (y = P), (x = !0);
        }
    }
    function m(w, N) {
        if ((l.freeze(), fo("process", l.Parser), mo("process", l.Compiler), !N)) return new Promise(y);
        y(null, N);
        function y(x, k) {
            const A = R0(w);
            l.run(l.parse(A), A, (T, F, L) => {
                if (T || !F || !L) P(T);
                else {
                    const R = l.stringify(F, L);
                    R == null || (s5(R) ? (L.value = R) : (L.result = R)), P(T, L);
                }
            });
            function P(T, F) {
                T || !F ? k(T) : x ? x(F) : N(null, F);
            }
        }
    }
    function S(w) {
        let N;
        l.freeze(), fo("processSync", l.Parser), mo("processSync", l.Compiler);
        const y = R0(w);
        return l.process(y, x), Gc("processSync", "process", N), y;
        function x(k) {
            (N = !0), Oc(k);
        }
    }
}
function Vc(e, t) {
    return typeof e == "function" && e.prototype && (o5(e.prototype) || t in e.prototype);
}
function o5(e) {
    let t;
    for (t in e) if (Ad.call(e, t)) return !0;
    return !1;
}
function fo(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function mo(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function po(e, t) {
    if (t)
        throw new Error(
            "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
        );
}
function Wc(e) {
    if (!Du(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
}
function Gc(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function R0(e) {
    return u5(e) ? e : new Ed(e);
}
function u5(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function s5(e) {
    return typeof e == "string" || Td(e);
}
const c5 = {};
function h5(e, t) {
    const n = t || c5,
        r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
        i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return Dd(e, r, i);
}
function Dd(e, t, n) {
    if (f5(e)) {
        if ("value" in e) return e.type === "html" && !n ? "" : e.value;
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return Yc(e.children, t, n);
    }
    return Array.isArray(e) ? Yc(e, t, n) : "";
}
function Yc(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) r[i] = Dd(e[i], t, n);
    return r.join("");
}
function f5(e) {
    return !!(e && typeof e == "object");
}
function vn(e, t, n, r) {
    const i = e.length;
    let l = 0,
        a;
    if ((t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t), (n = n > 0 ? n : 0), r.length < 1e4)) (a = Array.from(r)), a.unshift(t, n), e.splice(...a);
    else for (n && e.splice(t, n); l < r.length; ) (a = r.slice(l, l + 1e4)), a.unshift(t, 0), e.splice(...a), (l += 1e4), (t += 1e4);
}
function Ot(e, t) {
    return e.length > 0 ? (vn(e, e.length, 0, t), e) : t;
}
const Xc = {}.hasOwnProperty;
function d5(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length; ) m5(t, e[n]);
    return t;
}
function m5(e, t) {
    let n;
    for (n in t) {
        const i = (Xc.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            l = t[n];
        let a;
        if (l)
            for (a in l) {
                Xc.call(i, a) || (i[a] = []);
                const o = l[a];
                p5(i[a], Array.isArray(o) ? o : o ? [o] : []);
            }
    }
}
function p5(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length; ) (t[n].add === "after" ? e : r).push(t[n]);
    vn(e, 0, 0, r);
}
const g5 =
        /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    fn = pr(/[A-Za-z]/),
    At = pr(/[\dA-Za-z]/),
    v5 = pr(/[#-'*+\--9=?A-Z^-~]/);
function Fu(e) {
    return e !== null && (e < 32 || e === 127);
}
const Pu = pr(/\d/),
    y5 = pr(/[\dA-Fa-f]/),
    x5 = pr(/[!-/:-@[-`{-~]/);
function Z(e) {
    return e !== null && e < -2;
}
function St(e) {
    return e !== null && (e < 0 || e === 32);
}
function pe(e) {
    return e === -2 || e === -1 || e === 32;
}
const w5 = pr(g5),
    k5 = pr(/\s/);
function pr(e) {
    return t;
    function t(n) {
        return n !== null && e.test(String.fromCharCode(n));
    }
}
function ge(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let l = 0;
    return a;
    function a(u) {
        return pe(u) ? (e.enter(n), o(u)) : t(u);
    }
    function o(u) {
        return pe(u) && l++ < i ? (e.consume(u), o) : (e.exit(n), t(u));
    }
}
const S5 = { tokenize: b5 };
function b5(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;
    function r(o) {
        if (o === null) {
            e.consume(o);
            return;
        }
        return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), ge(e, t, "linePrefix");
    }
    function i(o) {
        return e.enter("paragraph"), l(o);
    }
    function l(o) {
        const u = e.enter("chunkText", { contentType: "text", previous: n });
        return n && (n.next = u), (n = u), a(o);
    }
    function a(o) {
        if (o === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(o);
            return;
        }
        return Z(o) ? (e.consume(o), e.exit("chunkText"), l) : (e.consume(o), a);
    }
}
const C5 = { tokenize: z5 },
    Qc = { tokenize: T5 };
function z5(e) {
    const t = this,
        n = [];
    let r = 0,
        i,
        l,
        a;
    return o;
    function o(k) {
        if (r < n.length) {
            const A = n[r];
            return (t.containerState = A[1]), e.attempt(A[0].continuation, u, s)(k);
        }
        return s(k);
    }
    function u(k) {
        if ((r++, t.containerState._closeFlow)) {
            (t.containerState._closeFlow = void 0), i && x();
            const A = t.events.length;
            let P = A,
                T;
            for (; P--; )
                if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
                    T = t.events[P][1].end;
                    break;
                }
            y(r);
            let F = A;
            for (; F < t.events.length; ) (t.events[F][1].end = Object.assign({}, T)), F++;
            return vn(t.events, P + 1, 0, t.events.slice(A)), (t.events.length = F), s(k);
        }
        return o(k);
    }
    function s(k) {
        if (r === n.length) {
            if (!i) return p(k);
            if (i.currentConstruct && i.currentConstruct.concrete) return S(k);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
        }
        return (t.containerState = {}), e.check(Qc, h, d)(k);
    }
    function h(k) {
        return i && x(), y(r), p(k);
    }
    function d(k) {
        return (t.parser.lazy[t.now().line] = r !== n.length), (a = t.now().offset), S(k);
    }
    function p(k) {
        return (t.containerState = {}), e.attempt(Qc, m, S)(k);
    }
    function m(k) {
        return r++, n.push([t.currentConstruct, t.containerState]), p(k);
    }
    function S(k) {
        if (k === null) {
            i && x(), y(0), e.consume(k);
            return;
        }
        return (i = i || t.parser.flow(t.now())), e.enter("chunkFlow", { contentType: "flow", previous: l, _tokenizer: i }), w(k);
    }
    function w(k) {
        if (k === null) {
            N(e.exit("chunkFlow"), !0), y(0), e.consume(k);
            return;
        }
        return Z(k) ? (e.consume(k), N(e.exit("chunkFlow")), (r = 0), (t.interrupt = void 0), o) : (e.consume(k), w);
    }
    function N(k, A) {
        const P = t.sliceStream(k);
        if ((A && P.push(null), (k.previous = l), l && (l.next = k), (l = k), i.defineSkip(k.start), i.write(P), t.parser.lazy[k.start.line])) {
            let T = i.events.length;
            for (; T--; ) if (i.events[T][1].start.offset < a && (!i.events[T][1].end || i.events[T][1].end.offset > a)) return;
            const F = t.events.length;
            let L = F,
                R,
                Q;
            for (; L--; )
                if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
                    if (R) {
                        Q = t.events[L][1].end;
                        break;
                    }
                    R = !0;
                }
            for (y(r), T = F; T < t.events.length; ) (t.events[T][1].end = Object.assign({}, Q)), T++;
            vn(t.events, L + 1, 0, t.events.slice(F)), (t.events.length = T);
        }
    }
    function y(k) {
        let A = n.length;
        for (; A-- > k; ) {
            const P = n[A];
            (t.containerState = P[1]), P[0].exit.call(t, e);
        }
        n.length = k;
    }
    function x() {
        i.write([null]), (l = void 0), (i = void 0), (t.containerState._closeFlow = void 0);
    }
}
function T5(e, t, n) {
    return ge(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Kc(e) {
    if (e === null || St(e) || k5(e)) return 1;
    if (w5(e)) return 2;
}
function js(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) {
        const l = e[i].resolveAll;
        l && !r.includes(l) && ((t = l(t, n)), r.push(l));
    }
    return t;
}
const Iu = { name: "attention", tokenize: M5, resolveAll: E5 };
function E5(e, t) {
    let n = -1,
        r,
        i,
        l,
        a,
        o,
        u,
        s,
        h;
    for (; ++n < e.length; )
        if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            for (r = n; r--; )
                if (
                    e[r][0] === "exit" &&
                    e[r][1].type === "attentionSequence" &&
                    e[r][1]._open &&
                    t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)
                ) {
                    if (
                        (e[r][1]._close || e[n][1]._open) &&
                        (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
                        !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)
                    )
                        continue;
                    u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    const d = Object.assign({}, e[r][1].end),
                        p = Object.assign({}, e[n][1].start);
                    Zc(d, -u),
                        Zc(p, u),
                        (a = { type: u > 1 ? "strongSequence" : "emphasisSequence", start: d, end: Object.assign({}, e[r][1].end) }),
                        (o = { type: u > 1 ? "strongSequence" : "emphasisSequence", start: Object.assign({}, e[n][1].start), end: p }),
                        (l = { type: u > 1 ? "strongText" : "emphasisText", start: Object.assign({}, e[r][1].end), end: Object.assign({}, e[n][1].start) }),
                        (i = { type: u > 1 ? "strong" : "emphasis", start: Object.assign({}, a.start), end: Object.assign({}, o.end) }),
                        (e[r][1].end = Object.assign({}, a.start)),
                        (e[n][1].start = Object.assign({}, o.end)),
                        (s = []),
                        e[r][1].end.offset - e[r][1].start.offset &&
                            (s = Ot(s, [
                                ["enter", e[r][1], t],
                                ["exit", e[r][1], t],
                            ])),
                        (s = Ot(s, [
                            ["enter", i, t],
                            ["enter", a, t],
                            ["exit", a, t],
                            ["enter", l, t],
                        ])),
                        (s = Ot(s, js(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t))),
                        (s = Ot(s, [
                            ["exit", l, t],
                            ["enter", o, t],
                            ["exit", o, t],
                            ["exit", i, t],
                        ])),
                        e[n][1].end.offset - e[n][1].start.offset
                            ? ((h = 2),
                              (s = Ot(s, [
                                  ["enter", e[n][1], t],
                                  ["exit", e[n][1], t],
                              ])))
                            : (h = 0),
                        vn(e, r - 1, n - r + 3, s),
                        (n = r + s.length - h - 2);
                    break;
                }
        }
    for (n = -1; ++n < e.length; ) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e;
}
function M5(e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = Kc(r);
    let l;
    return a;
    function a(u) {
        return (l = u), e.enter("attentionSequence"), o(u);
    }
    function o(u) {
        if (u === l) return e.consume(u), o;
        const s = e.exit("attentionSequence"),
            h = Kc(u),
            d = !h || (h === 2 && i) || n.includes(u),
            p = !i || (i === 2 && h) || n.includes(r);
        return (s._open = !!(l === 42 ? d : d && (i || !p))), (s._close = !!(l === 42 ? p : p && (h || !d))), t(u);
    }
}
function Zc(e, t) {
    (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const A5 = { name: "autolink", tokenize: N5 };
function N5(e, t, n) {
    let r = 0;
    return i;
    function i(m) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
    }
    function l(m) {
        return fn(m) ? (e.consume(m), a) : s(m);
    }
    function a(m) {
        return m === 43 || m === 45 || m === 46 || At(m) ? ((r = 1), o(m)) : s(m);
    }
    function o(m) {
        return m === 58 ? (e.consume(m), (r = 0), u) : (m === 43 || m === 45 || m === 46 || At(m)) && r++ < 32 ? (e.consume(m), o) : ((r = 0), s(m));
    }
    function u(m) {
        return m === 62
            ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t)
            : m === null || m === 32 || m === 60 || Fu(m)
              ? n(m)
              : (e.consume(m), u);
    }
    function s(m) {
        return m === 64 ? (e.consume(m), h) : v5(m) ? (e.consume(m), s) : n(m);
    }
    function h(m) {
        return At(m) ? d(m) : n(m);
    }
    function d(m) {
        return m === 46
            ? (e.consume(m), (r = 0), h)
            : m === 62
              ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t)
              : p(m);
    }
    function p(m) {
        if ((m === 45 || At(m)) && r++ < 63) {
            const S = m === 45 ? p : d;
            return e.consume(m), S;
        }
        return n(m);
    }
}
const pa = { tokenize: D5, partial: !0 };
function D5(e, t, n) {
    return r;
    function r(l) {
        return pe(l) ? ge(e, i, "linePrefix")(l) : i(l);
    }
    function i(l) {
        return l === null || Z(l) ? t(l) : n(l);
    }
}
const Fd = { name: "blockQuote", tokenize: F5, continuation: { tokenize: P5 }, exit: I5 };
function F5(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        if (a === 62) {
            const o = r.containerState;
            return (
                o.open || (e.enter("blockQuote", { _container: !0 }), (o.open = !0)),
                e.enter("blockQuotePrefix"),
                e.enter("blockQuoteMarker"),
                e.consume(a),
                e.exit("blockQuoteMarker"),
                l
            );
        }
        return n(a);
    }
    function l(a) {
        return pe(a)
            ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t)
            : (e.exit("blockQuotePrefix"), t(a));
    }
}
function P5(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        return pe(a) ? ge(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : l(a);
    }
    function l(a) {
        return e.attempt(Fd, t, n)(a);
    }
}
function I5(e) {
    e.exit("blockQuote");
}
const Pd = { name: "characterEscape", tokenize: L5 };
function L5(e, t, n) {
    return r;
    function r(l) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
    }
    function i(l) {
        return x5(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
    }
}
const Jc = document.createElement("i");
function Vs(e) {
    const t = "&" + e + ";";
    Jc.innerHTML = t;
    const n = Jc.textContent;
    return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t ? !1 : n;
}
const Id = { name: "characterReference", tokenize: B5 };
function B5(e, t, n) {
    const r = this;
    let i = 0,
        l,
        a;
    return o;
    function o(d) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), u;
    }
    function u(d) {
        return d === 35
            ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), s)
            : (e.enter("characterReferenceValue"), (l = 31), (a = At), h(d));
    }
    function s(d) {
        return d === 88 || d === 120
            ? (e.enter("characterReferenceMarkerHexadecimal"),
              e.consume(d),
              e.exit("characterReferenceMarkerHexadecimal"),
              e.enter("characterReferenceValue"),
              (l = 6),
              (a = y5),
              h)
            : (e.enter("characterReferenceValue"), (l = 7), (a = Pu), h(d));
    }
    function h(d) {
        if (d === 59 && i) {
            const p = e.exit("characterReferenceValue");
            return a === At && !Vs(r.sliceSerialize(p))
                ? n(d)
                : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
        }
        return a(d) && i++ < l ? (e.consume(d), h) : n(d);
    }
}
const eh = { tokenize: R5, partial: !0 },
    th = { name: "codeFenced", tokenize: O5, concrete: !0 };
function O5(e, t, n) {
    const r = this,
        i = { tokenize: P, partial: !0 };
    let l = 0,
        a = 0,
        o;
    return u;
    function u(T) {
        return s(T);
    }
    function s(T) {
        const F = r.events[r.events.length - 1];
        return (
            (l = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0),
            (o = T),
            e.enter("codeFenced"),
            e.enter("codeFencedFence"),
            e.enter("codeFencedFenceSequence"),
            h(T)
        );
    }
    function h(T) {
        return T === o ? (a++, e.consume(T), h) : a < 3 ? n(T) : (e.exit("codeFencedFenceSequence"), pe(T) ? ge(e, d, "whitespace")(T) : d(T));
    }
    function d(T) {
        return T === null || Z(T)
            ? (e.exit("codeFencedFence"), r.interrupt ? t(T) : e.check(eh, w, A)(T))
            : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), p(T));
    }
    function p(T) {
        return T === null || Z(T)
            ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(T))
            : pe(T)
              ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ge(e, m, "whitespace")(T))
              : T === 96 && T === o
                ? n(T)
                : (e.consume(T), p);
    }
    function m(T) {
        return T === null || Z(T) ? d(T) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), S(T));
    }
    function S(T) {
        return T === null || Z(T) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(T)) : T === 96 && T === o ? n(T) : (e.consume(T), S);
    }
    function w(T) {
        return e.attempt(i, A, N)(T);
    }
    function N(T) {
        return e.enter("lineEnding"), e.consume(T), e.exit("lineEnding"), y;
    }
    function y(T) {
        return l > 0 && pe(T) ? ge(e, x, "linePrefix", l + 1)(T) : x(T);
    }
    function x(T) {
        return T === null || Z(T) ? e.check(eh, w, A)(T) : (e.enter("codeFlowValue"), k(T));
    }
    function k(T) {
        return T === null || Z(T) ? (e.exit("codeFlowValue"), x(T)) : (e.consume(T), k);
    }
    function A(T) {
        return e.exit("codeFenced"), t(T);
    }
    function P(T, F, L) {
        let R = 0;
        return Q;
        function Q(re) {
            return T.enter("lineEnding"), T.consume(re), T.exit("lineEnding"), U;
        }
        function U(re) {
            return (
                T.enter("codeFencedFence"), pe(re) ? ge(T, $, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(re) : $(re)
            );
        }
        function $(re) {
            return re === o ? (T.enter("codeFencedFenceSequence"), he(re)) : L(re);
        }
        function he(re) {
            return re === o ? (R++, T.consume(re), he) : R >= a ? (T.exit("codeFencedFenceSequence"), pe(re) ? ge(T, ce, "whitespace")(re) : ce(re)) : L(re);
        }
        function ce(re) {
            return re === null || Z(re) ? (T.exit("codeFencedFence"), F(re)) : L(re);
        }
    }
}
function R5(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), l);
    }
    function l(a) {
        return r.parser.lazy[r.now().line] ? n(a) : t(a);
    }
}
const go = { name: "codeIndented", tokenize: q5 },
    H5 = { tokenize: _5, partial: !0 };
function q5(e, t, n) {
    const r = this;
    return i;
    function i(s) {
        return e.enter("codeIndented"), ge(e, l, "linePrefix", 4 + 1)(s);
    }
    function l(s) {
        const h = r.events[r.events.length - 1];
        return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? a(s) : n(s);
    }
    function a(s) {
        return s === null ? u(s) : Z(s) ? e.attempt(H5, a, u)(s) : (e.enter("codeFlowValue"), o(s));
    }
    function o(s) {
        return s === null || Z(s) ? (e.exit("codeFlowValue"), a(s)) : (e.consume(s), o);
    }
    function u(s) {
        return e.exit("codeIndented"), t(s);
    }
}
function _5(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        return r.parser.lazy[r.now().line] ? n(a) : Z(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : ge(e, l, "linePrefix", 4 + 1)(a);
    }
    function l(a) {
        const o = r.events[r.events.length - 1];
        return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : Z(a) ? i(a) : n(a);
    }
}
const U5 = { name: "codeText", tokenize: V5, resolve: $5, previous: j5 };
function $5(e) {
    let t = e.length - 4,
        n = 3,
        r,
        i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (r = n; ++r < t; )
            if (e[r][1].type === "codeTextData") {
                (e[n][1].type = "codeTextPadding"), (e[t][1].type = "codeTextPadding"), (n += 2), (t -= 2);
                break;
            }
    }
    for (r = n - 1, t++; ++r <= t; )
        i === void 0
            ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
            : (r === t || e[r][1].type === "lineEnding") &&
              ((e[i][1].type = "codeTextData"),
              r !== i + 2 && ((e[i][1].end = e[r - 1][1].end), e.splice(i + 2, r - i - 2), (t -= r - i - 2), (r = i + 2)),
              (i = void 0));
    return e;
}
function j5(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function V5(e, t, n) {
    let r = 0,
        i,
        l;
    return a;
    function a(d) {
        return e.enter("codeText"), e.enter("codeTextSequence"), o(d);
    }
    function o(d) {
        return d === 96 ? (e.consume(d), r++, o) : (e.exit("codeTextSequence"), u(d));
    }
    function u(d) {
        return d === null
            ? n(d)
            : d === 32
              ? (e.enter("space"), e.consume(d), e.exit("space"), u)
              : d === 96
                ? ((l = e.enter("codeTextSequence")), (i = 0), h(d))
                : Z(d)
                  ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u)
                  : (e.enter("codeTextData"), s(d));
    }
    function s(d) {
        return d === null || d === 32 || d === 96 || Z(d) ? (e.exit("codeTextData"), u(d)) : (e.consume(d), s);
    }
    function h(d) {
        return d === 96 ? (e.consume(d), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : ((l.type = "codeTextData"), s(d));
    }
}
function Ld(e) {
    const t = {};
    let n = -1,
        r,
        i,
        l,
        a,
        o,
        u,
        s;
    for (; ++n < e.length; ) {
        for (; n in t; ) n = t[n];
        if (
            ((r = e[n]),
            n &&
                r[1].type === "chunkFlow" &&
                e[n - 1][1].type === "listItemPrefix" &&
                ((u = r[1]._tokenizer.events),
                (l = 0),
                l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2),
                l < u.length && u[l][1].type === "content"))
        )
            for (; ++l < u.length && u[l][1].type !== "content"; ) u[l][1].type === "chunkText" && ((u[l][1]._isInFirstContentOfListItem = !0), l++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(t, W5(e, n)), (n = t[n]), (s = !0));
        else if (r[1]._container) {
            for (l = n, i = void 0; l-- && ((a = e[l]), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank"); )
                a[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), (a[1].type = "lineEnding"), (i = l));
            i && ((r[1].end = Object.assign({}, e[i][1].start)), (o = e.slice(i, n)), o.unshift(r), vn(e, i, n - i + 1, o));
        }
    }
    return !s;
}
function W5(e, t) {
    const n = e[t][1],
        r = e[t][2];
    let i = t - 1;
    const l = [],
        a = n._tokenizer || r.parser[n.contentType](n.start),
        o = a.events,
        u = [],
        s = {};
    let h,
        d,
        p = -1,
        m = n,
        S = 0,
        w = 0;
    const N = [w];
    for (; m; ) {
        for (; e[++i][1] !== m; );
        l.push(i),
            m._tokenizer ||
                ((h = r.sliceStream(m)),
                m.next || h.push(null),
                d && a.defineSkip(m.start),
                m._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0),
                a.write(h),
                m._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)),
            (d = m),
            (m = m.next);
    }
    for (m = n; ++p < o.length; )
        o[p][0] === "exit" &&
            o[p - 1][0] === "enter" &&
            o[p][1].type === o[p - 1][1].type &&
            o[p][1].start.line !== o[p][1].end.line &&
            ((w = p + 1), N.push(w), (m._tokenizer = void 0), (m.previous = void 0), (m = m.next));
    for (a.events = [], m ? ((m._tokenizer = void 0), (m.previous = void 0)) : N.pop(), p = N.length; p--; ) {
        const y = o.slice(N[p], N[p + 1]),
            x = l.pop();
        u.unshift([x, x + y.length - 1]), vn(e, x, 2, y);
    }
    for (p = -1; ++p < u.length; ) (s[S + u[p][0]] = S + u[p][1]), (S += u[p][1] - u[p][0] - 1);
    return s;
}
const G5 = { tokenize: Q5, resolve: X5 },
    Y5 = { tokenize: K5, partial: !0 };
function X5(e) {
    return Ld(e), e;
}
function Q5(e, t) {
    let n;
    return r;
    function r(o) {
        return e.enter("content"), (n = e.enter("chunkContent", { contentType: "content" })), i(o);
    }
    function i(o) {
        return o === null ? l(o) : Z(o) ? e.check(Y5, a, l)(o) : (e.consume(o), i);
    }
    function l(o) {
        return e.exit("chunkContent"), e.exit("content"), t(o);
    }
    function a(o) {
        return e.consume(o), e.exit("chunkContent"), (n.next = e.enter("chunkContent", { contentType: "content", previous: n })), (n = n.next), i;
    }
}
function K5(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ge(e, l, "linePrefix");
    }
    function l(a) {
        if (a === null || Z(a)) return n(a);
        const o = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4
            ? t(a)
            : e.interrupt(r.parser.constructs.flow, n, t)(a);
    }
}
function Bd(e, t, n, r, i, l, a, o, u) {
    const s = u || Number.POSITIVE_INFINITY;
    let h = 0;
    return d;
    function d(y) {
        return y === 60
            ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), p)
            : y === null || y === 32 || y === 41 || Fu(y)
              ? n(y)
              : (e.enter(r), e.enter(a), e.enter(o), e.enter("chunkString", { contentType: "string" }), w(y));
    }
    function p(y) {
        return y === 62
            ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t)
            : (e.enter(o), e.enter("chunkString", { contentType: "string" }), m(y));
    }
    function m(y) {
        return y === 62 ? (e.exit("chunkString"), e.exit(o), p(y)) : y === null || y === 60 || Z(y) ? n(y) : (e.consume(y), y === 92 ? S : m);
    }
    function S(y) {
        return y === 60 || y === 62 || y === 92 ? (e.consume(y), m) : m(y);
    }
    function w(y) {
        return !h && (y === null || y === 41 || St(y))
            ? (e.exit("chunkString"), e.exit(o), e.exit(a), e.exit(r), t(y))
            : h < s && y === 40
              ? (e.consume(y), h++, w)
              : y === 41
                ? (e.consume(y), h--, w)
                : y === null || y === 32 || y === 40 || Fu(y)
                  ? n(y)
                  : (e.consume(y), y === 92 ? N : w);
    }
    function N(y) {
        return y === 40 || y === 41 || y === 92 ? (e.consume(y), w) : w(y);
    }
}
function Od(e, t, n, r, i, l) {
    const a = this;
    let o = 0,
        u;
    return s;
    function s(m) {
        return e.enter(r), e.enter(i), e.consume(m), e.exit(i), e.enter(l), h;
    }
    function h(m) {
        return o > 999 || m === null || m === 91 || (m === 93 && !u) || (m === 94 && !o && "_hiddenFootnoteSupport" in a.parser.constructs)
            ? n(m)
            : m === 93
              ? (e.exit(l), e.enter(i), e.consume(m), e.exit(i), e.exit(r), t)
              : Z(m)
                ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), h)
                : (e.enter("chunkString", { contentType: "string" }), d(m));
    }
    function d(m) {
        return m === null || m === 91 || m === 93 || Z(m) || o++ > 999 ? (e.exit("chunkString"), h(m)) : (e.consume(m), u || (u = !pe(m)), m === 92 ? p : d);
    }
    function p(m) {
        return m === 91 || m === 92 || m === 93 ? (e.consume(m), o++, d) : d(m);
    }
}
function Rd(e, t, n, r, i, l) {
    let a;
    return o;
    function o(p) {
        return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), (a = p === 40 ? 41 : p), u) : n(p);
    }
    function u(p) {
        return p === a ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(l), s(p));
    }
    function s(p) {
        return p === a
            ? (e.exit(l), u(a))
            : p === null
              ? n(p)
              : Z(p)
                ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), ge(e, s, "linePrefix"))
                : (e.enter("chunkString", { contentType: "string" }), h(p));
    }
    function h(p) {
        return p === a || p === null || Z(p) ? (e.exit("chunkString"), s(p)) : (e.consume(p), p === 92 ? d : h);
    }
    function d(p) {
        return p === a || p === 92 ? (e.consume(p), h) : h(p);
    }
}
function ei(e, t) {
    let n;
    return r;
    function r(i) {
        return Z(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r) : pe(i) ? ge(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
    }
}
function a0(e) {
    return e
        .replace(/[\t\n\r ]+/g, " ")
        .replace(/^ | $/g, "")
        .toLowerCase()
        .toUpperCase();
}
const Z5 = { name: "definition", tokenize: e6 },
    J5 = { tokenize: t6, partial: !0 };
function e6(e, t, n) {
    const r = this;
    let i;
    return l;
    function l(m) {
        return e.enter("definition"), a(m);
    }
    function a(m) {
        return Od.call(r, e, o, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(m);
    }
    function o(m) {
        return (
            (i = a0(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
            m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), u) : n(m)
        );
    }
    function u(m) {
        return St(m) ? ei(e, s)(m) : s(m);
    }
    function s(m) {
        return Bd(
            e,
            h,
            n,
            "definitionDestination",
            "definitionDestinationLiteral",
            "definitionDestinationLiteralMarker",
            "definitionDestinationRaw",
            "definitionDestinationString",
        )(m);
    }
    function h(m) {
        return e.attempt(J5, d, d)(m);
    }
    function d(m) {
        return pe(m) ? ge(e, p, "whitespace")(m) : p(m);
    }
    function p(m) {
        return m === null || Z(m) ? (e.exit("definition"), r.parser.defined.push(i), t(m)) : n(m);
    }
}
function t6(e, t, n) {
    return r;
    function r(o) {
        return St(o) ? ei(e, i)(o) : n(o);
    }
    function i(o) {
        return Rd(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(o);
    }
    function l(o) {
        return pe(o) ? ge(e, a, "whitespace")(o) : a(o);
    }
    function a(o) {
        return o === null || Z(o) ? t(o) : n(o);
    }
}
const n6 = { name: "hardBreakEscape", tokenize: r6 };
function r6(e, t, n) {
    return r;
    function r(l) {
        return e.enter("hardBreakEscape"), e.consume(l), i;
    }
    function i(l) {
        return Z(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
    }
}
const i6 = { name: "headingAtx", tokenize: a6, resolve: l6 };
function l6(e, t) {
    let n = e.length - 2,
        r = 3,
        i,
        l;
    return (
        e[r][1].type === "whitespace" && (r += 2),
        n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
        e[n][1].type === "atxHeadingSequence" && (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) && (n -= r + 1 === n ? 2 : 4),
        n > r &&
            ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
            (l = { type: "chunkText", start: e[r][1].start, end: e[n][1].end, contentType: "text" }),
            vn(e, r, n - r + 1, [
                ["enter", i, t],
                ["enter", l, t],
                ["exit", l, t],
                ["exit", i, t],
            ])),
        e
    );
}
function a6(e, t, n) {
    let r = 0;
    return i;
    function i(h) {
        return e.enter("atxHeading"), l(h);
    }
    function l(h) {
        return e.enter("atxHeadingSequence"), a(h);
    }
    function a(h) {
        return h === 35 && r++ < 6 ? (e.consume(h), a) : h === null || St(h) ? (e.exit("atxHeadingSequence"), o(h)) : n(h);
    }
    function o(h) {
        return h === 35
            ? (e.enter("atxHeadingSequence"), u(h))
            : h === null || Z(h)
              ? (e.exit("atxHeading"), t(h))
              : pe(h)
                ? ge(e, o, "whitespace")(h)
                : (e.enter("atxHeadingText"), s(h));
    }
    function u(h) {
        return h === 35 ? (e.consume(h), u) : (e.exit("atxHeadingSequence"), o(h));
    }
    function s(h) {
        return h === null || h === 35 || St(h) ? (e.exit("atxHeadingText"), o(h)) : (e.consume(h), s);
    }
}
const o6 = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "search",
        "section",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul",
    ],
    nh = ["pre", "script", "style", "textarea"],
    u6 = { name: "htmlFlow", tokenize: f6, resolveTo: h6, concrete: !0 },
    s6 = { tokenize: m6, partial: !0 },
    c6 = { tokenize: d6, partial: !0 };
function h6(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
    return t > 1 && e[t - 2][1].type === "linePrefix" && ((e[t][1].start = e[t - 2][1].start), (e[t + 1][1].start = e[t - 2][1].start), e.splice(t - 2, 2)), e;
}
function f6(e, t, n) {
    const r = this;
    let i, l, a, o, u;
    return s;
    function s(E) {
        return h(E);
    }
    function h(E) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(E), d;
    }
    function d(E) {
        return E === 33
            ? (e.consume(E), p)
            : E === 47
              ? (e.consume(E), (l = !0), w)
              : E === 63
                ? (e.consume(E), (i = 3), r.interrupt ? t : b)
                : fn(E)
                  ? (e.consume(E), (a = String.fromCharCode(E)), N)
                  : n(E);
    }
    function p(E) {
        return E === 45
            ? (e.consume(E), (i = 2), m)
            : E === 91
              ? (e.consume(E), (i = 5), (o = 0), S)
              : fn(E)
                ? (e.consume(E), (i = 4), r.interrupt ? t : b)
                : n(E);
    }
    function m(E) {
        return E === 45 ? (e.consume(E), r.interrupt ? t : b) : n(E);
    }
    function S(E) {
        const Fe = "CDATA[";
        return E === Fe.charCodeAt(o++) ? (e.consume(E), o === Fe.length ? (r.interrupt ? t : $) : S) : n(E);
    }
    function w(E) {
        return fn(E) ? (e.consume(E), (a = String.fromCharCode(E)), N) : n(E);
    }
    function N(E) {
        if (E === null || E === 47 || E === 62 || St(E)) {
            const Fe = E === 47,
                Ze = a.toLowerCase();
            return !Fe && !l && nh.includes(Ze)
                ? ((i = 1), r.interrupt ? t(E) : $(E))
                : o6.includes(a.toLowerCase())
                  ? ((i = 6), Fe ? (e.consume(E), y) : r.interrupt ? t(E) : $(E))
                  : ((i = 7), r.interrupt && !r.parser.lazy[r.now().line] ? n(E) : l ? x(E) : k(E));
        }
        return E === 45 || At(E) ? (e.consume(E), (a += String.fromCharCode(E)), N) : n(E);
    }
    function y(E) {
        return E === 62 ? (e.consume(E), r.interrupt ? t : $) : n(E);
    }
    function x(E) {
        return pe(E) ? (e.consume(E), x) : Q(E);
    }
    function k(E) {
        return E === 47 ? (e.consume(E), Q) : E === 58 || E === 95 || fn(E) ? (e.consume(E), A) : pe(E) ? (e.consume(E), k) : Q(E);
    }
    function A(E) {
        return E === 45 || E === 46 || E === 58 || E === 95 || At(E) ? (e.consume(E), A) : P(E);
    }
    function P(E) {
        return E === 61 ? (e.consume(E), T) : pe(E) ? (e.consume(E), P) : k(E);
    }
    function T(E) {
        return E === null || E === 60 || E === 61 || E === 62 || E === 96
            ? n(E)
            : E === 34 || E === 39
              ? (e.consume(E), (u = E), F)
              : pe(E)
                ? (e.consume(E), T)
                : L(E);
    }
    function F(E) {
        return E === u ? (e.consume(E), (u = null), R) : E === null || Z(E) ? n(E) : (e.consume(E), F);
    }
    function L(E) {
        return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || St(E) ? P(E) : (e.consume(E), L);
    }
    function R(E) {
        return E === 47 || E === 62 || pe(E) ? k(E) : n(E);
    }
    function Q(E) {
        return E === 62 ? (e.consume(E), U) : n(E);
    }
    function U(E) {
        return E === null || Z(E) ? $(E) : pe(E) ? (e.consume(E), U) : n(E);
    }
    function $(E) {
        return E === 45 && i === 2
            ? (e.consume(E), ve)
            : E === 60 && i === 1
              ? (e.consume(E), we)
              : E === 62 && i === 4
                ? (e.consume(E), ae)
                : E === 63 && i === 3
                  ? (e.consume(E), b)
                  : E === 93 && i === 5
                    ? (e.consume(E), K)
                    : Z(E) && (i === 6 || i === 7)
                      ? (e.exit("htmlFlowData"), e.check(s6, ue, he)(E))
                      : E === null || Z(E)
                        ? (e.exit("htmlFlowData"), he(E))
                        : (e.consume(E), $);
    }
    function he(E) {
        return e.check(c6, ce, ue)(E);
    }
    function ce(E) {
        return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), re;
    }
    function re(E) {
        return E === null || Z(E) ? he(E) : (e.enter("htmlFlowData"), $(E));
    }
    function ve(E) {
        return E === 45 ? (e.consume(E), b) : $(E);
    }
    function we(E) {
        return E === 47 ? (e.consume(E), (a = ""), j) : $(E);
    }
    function j(E) {
        if (E === 62) {
            const Fe = a.toLowerCase();
            return nh.includes(Fe) ? (e.consume(E), ae) : $(E);
        }
        return fn(E) && a.length < 8 ? (e.consume(E), (a += String.fromCharCode(E)), j) : $(E);
    }
    function K(E) {
        return E === 93 ? (e.consume(E), b) : $(E);
    }
    function b(E) {
        return E === 62 ? (e.consume(E), ae) : E === 45 && i === 2 ? (e.consume(E), b) : $(E);
    }
    function ae(E) {
        return E === null || Z(E) ? (e.exit("htmlFlowData"), ue(E)) : (e.consume(E), ae);
    }
    function ue(E) {
        return e.exit("htmlFlow"), t(E);
    }
}
function d6(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        return Z(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), l) : n(a);
    }
    function l(a) {
        return r.parser.lazy[r.now().line] ? n(a) : t(a);
    }
}
function m6(e, t, n) {
    return r;
    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(pa, t, n);
    }
}
const p6 = { name: "htmlText", tokenize: g6 };
function g6(e, t, n) {
    const r = this;
    let i, l, a;
    return o;
    function o(b) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), u;
    }
    function u(b) {
        return b === 33 ? (e.consume(b), s) : b === 47 ? (e.consume(b), P) : b === 63 ? (e.consume(b), k) : fn(b) ? (e.consume(b), L) : n(b);
    }
    function s(b) {
        return b === 45 ? (e.consume(b), h) : b === 91 ? (e.consume(b), (l = 0), S) : fn(b) ? (e.consume(b), x) : n(b);
    }
    function h(b) {
        return b === 45 ? (e.consume(b), m) : n(b);
    }
    function d(b) {
        return b === null ? n(b) : b === 45 ? (e.consume(b), p) : Z(b) ? ((a = d), we(b)) : (e.consume(b), d);
    }
    function p(b) {
        return b === 45 ? (e.consume(b), m) : d(b);
    }
    function m(b) {
        return b === 62 ? ve(b) : b === 45 ? p(b) : d(b);
    }
    function S(b) {
        const ae = "CDATA[";
        return b === ae.charCodeAt(l++) ? (e.consume(b), l === ae.length ? w : S) : n(b);
    }
    function w(b) {
        return b === null ? n(b) : b === 93 ? (e.consume(b), N) : Z(b) ? ((a = w), we(b)) : (e.consume(b), w);
    }
    function N(b) {
        return b === 93 ? (e.consume(b), y) : w(b);
    }
    function y(b) {
        return b === 62 ? ve(b) : b === 93 ? (e.consume(b), y) : w(b);
    }
    function x(b) {
        return b === null || b === 62 ? ve(b) : Z(b) ? ((a = x), we(b)) : (e.consume(b), x);
    }
    function k(b) {
        return b === null ? n(b) : b === 63 ? (e.consume(b), A) : Z(b) ? ((a = k), we(b)) : (e.consume(b), k);
    }
    function A(b) {
        return b === 62 ? ve(b) : k(b);
    }
    function P(b) {
        return fn(b) ? (e.consume(b), T) : n(b);
    }
    function T(b) {
        return b === 45 || At(b) ? (e.consume(b), T) : F(b);
    }
    function F(b) {
        return Z(b) ? ((a = F), we(b)) : pe(b) ? (e.consume(b), F) : ve(b);
    }
    function L(b) {
        return b === 45 || At(b) ? (e.consume(b), L) : b === 47 || b === 62 || St(b) ? R(b) : n(b);
    }
    function R(b) {
        return b === 47 ? (e.consume(b), ve) : b === 58 || b === 95 || fn(b) ? (e.consume(b), Q) : Z(b) ? ((a = R), we(b)) : pe(b) ? (e.consume(b), R) : ve(b);
    }
    function Q(b) {
        return b === 45 || b === 46 || b === 58 || b === 95 || At(b) ? (e.consume(b), Q) : U(b);
    }
    function U(b) {
        return b === 61 ? (e.consume(b), $) : Z(b) ? ((a = U), we(b)) : pe(b) ? (e.consume(b), U) : R(b);
    }
    function $(b) {
        return b === null || b === 60 || b === 61 || b === 62 || b === 96
            ? n(b)
            : b === 34 || b === 39
              ? (e.consume(b), (i = b), he)
              : Z(b)
                ? ((a = $), we(b))
                : pe(b)
                  ? (e.consume(b), $)
                  : (e.consume(b), ce);
    }
    function he(b) {
        return b === i ? (e.consume(b), (i = void 0), re) : b === null ? n(b) : Z(b) ? ((a = he), we(b)) : (e.consume(b), he);
    }
    function ce(b) {
        return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || St(b) ? R(b) : (e.consume(b), ce);
    }
    function re(b) {
        return b === 47 || b === 62 || St(b) ? R(b) : n(b);
    }
    function ve(b) {
        return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
    }
    function we(b) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), j;
    }
    function j(b) {
        return pe(b) ? ge(e, K, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : K(b);
    }
    function K(b) {
        return e.enter("htmlTextData"), a(b);
    }
}
const Ws = { name: "labelEnd", tokenize: S6, resolveTo: k6, resolveAll: w6 },
    v6 = { tokenize: b6 },
    y6 = { tokenize: C6 },
    x6 = { tokenize: z6 };
function w6(e) {
    let t = -1;
    for (; ++t < e.length; ) {
        const n = e[t][1];
        (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") &&
            (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), (n.type = "data"), t++);
    }
    return e;
}
function k6(e, t) {
    let n = e.length,
        r = 0,
        i,
        l,
        a,
        o;
    for (; n--; )
        if (((i = e[n][1]), l)) {
            if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
            e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
        } else if (a) {
            if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && ((l = n), i.type !== "labelLink")) {
                r = 2;
                break;
            }
        } else i.type === "labelEnd" && (a = n);
    const u = {
            type: e[l][1].type === "labelLink" ? "link" : "image",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
        },
        s = { type: "label", start: Object.assign({}, e[l][1].start), end: Object.assign({}, e[a][1].end) },
        h = { type: "labelText", start: Object.assign({}, e[l + r + 2][1].end), end: Object.assign({}, e[a - 2][1].start) };
    return (
        (o = [
            ["enter", u, t],
            ["enter", s, t],
        ]),
        (o = Ot(o, e.slice(l + 1, l + r + 3))),
        (o = Ot(o, [["enter", h, t]])),
        (o = Ot(o, js(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, a - 3), t))),
        (o = Ot(o, [["exit", h, t], e[a - 2], e[a - 1], ["exit", s, t]])),
        (o = Ot(o, e.slice(a + 1))),
        (o = Ot(o, [["exit", u, t]])),
        vn(e, l, e.length, o),
        e
    );
}
function S6(e, t, n) {
    const r = this;
    let i = r.events.length,
        l,
        a;
    for (; i--; )
        if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            l = r.events[i][1];
            break;
        }
    return o;
    function o(p) {
        return l
            ? l._inactive
                ? d(p)
                : ((a = r.parser.defined.includes(a0(r.sliceSerialize({ start: l.end, end: r.now() })))),
                  e.enter("labelEnd"),
                  e.enter("labelMarker"),
                  e.consume(p),
                  e.exit("labelMarker"),
                  e.exit("labelEnd"),
                  u)
            : n(p);
    }
    function u(p) {
        return p === 40 ? e.attempt(v6, h, a ? h : d)(p) : p === 91 ? e.attempt(y6, h, a ? s : d)(p) : a ? h(p) : d(p);
    }
    function s(p) {
        return e.attempt(x6, h, d)(p);
    }
    function h(p) {
        return t(p);
    }
    function d(p) {
        return (l._balanced = !0), n(p);
    }
}
function b6(e, t, n) {
    return r;
    function r(d) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i;
    }
    function i(d) {
        return St(d) ? ei(e, l)(d) : l(d);
    }
    function l(d) {
        return d === 41
            ? h(d)
            : Bd(
                  e,
                  a,
                  o,
                  "resourceDestination",
                  "resourceDestinationLiteral",
                  "resourceDestinationLiteralMarker",
                  "resourceDestinationRaw",
                  "resourceDestinationString",
                  32,
              )(d);
    }
    function a(d) {
        return St(d) ? ei(e, u)(d) : h(d);
    }
    function o(d) {
        return n(d);
    }
    function u(d) {
        return d === 34 || d === 39 || d === 40 ? Rd(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : h(d);
    }
    function s(d) {
        return St(d) ? ei(e, h)(d) : h(d);
    }
    function h(d) {
        return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
    }
}
function C6(e, t, n) {
    const r = this;
    return i;
    function i(o) {
        return Od.call(r, e, l, a, "reference", "referenceMarker", "referenceString")(o);
    }
    function l(o) {
        return r.parser.defined.includes(a0(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(o) : n(o);
    }
    function a(o) {
        return n(o);
    }
}
function z6(e, t, n) {
    return r;
    function r(l) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
    }
    function i(l) {
        return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
    }
}
const T6 = { name: "labelStartImage", tokenize: E6, resolveAll: Ws.resolveAll };
function E6(e, t, n) {
    const r = this;
    return i;
    function i(o) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(o), e.exit("labelImageMarker"), l;
    }
    function l(o) {
        return o === 91 ? (e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelImage"), a) : n(o);
    }
    function a(o) {
        return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
    }
}
const M6 = { name: "labelStartLink", tokenize: A6, resolveAll: Ws.resolveAll };
function A6(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), l;
    }
    function l(a) {
        return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
    }
}
const vo = { name: "lineEnding", tokenize: N6 };
function N6(e, t) {
    return n;
    function n(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
    }
}
const kl = { name: "thematicBreak", tokenize: D6 };
function D6(e, t, n) {
    let r = 0,
        i;
    return l;
    function l(s) {
        return e.enter("thematicBreak"), a(s);
    }
    function a(s) {
        return (i = s), o(s);
    }
    function o(s) {
        return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || Z(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
    }
    function u(s) {
        return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), pe(s) ? ge(e, o, "whitespace")(s) : o(s));
    }
}
const pt = { name: "list", tokenize: I6, continuation: { tokenize: L6 }, exit: O6 },
    F6 = { tokenize: R6, partial: !0 },
    P6 = { tokenize: B6, partial: !0 };
function I6(e, t, n) {
    const r = this,
        i = r.events[r.events.length - 1];
    let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        a = 0;
    return o;
    function o(m) {
        const S = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
        if (S === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : Pu(m)) {
            if ((r.containerState.type || ((r.containerState.type = S), e.enter(S, { _container: !0 })), S === "listUnordered"))
                return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(kl, n, s)(m) : s(m);
            if (!r.interrupt || m === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(m);
        }
        return n(m);
    }
    function u(m) {
        return Pu(m) && ++a < 10
            ? (e.consume(m), u)
            : (!r.interrupt || a < 2) && (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46)
              ? (e.exit("listItemValue"), s(m))
              : n(m);
    }
    function s(m) {
        return (
            e.enter("listItemMarker"),
            e.consume(m),
            e.exit("listItemMarker"),
            (r.containerState.marker = r.containerState.marker || m),
            e.check(pa, r.interrupt ? n : h, e.attempt(F6, p, d))
        );
    }
    function h(m) {
        return (r.containerState.initialBlankLine = !0), l++, p(m);
    }
    function d(m) {
        return pe(m) ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), p) : n(m);
    }
    function p(m) {
        return (r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length), t(m);
    }
}
function L6(e, t, n) {
    const r = this;
    return (r.containerState._closeFlow = void 0), e.check(pa, i, l);
    function i(o) {
        return (
            (r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine),
            ge(e, t, "listItemIndent", r.containerState.size + 1)(o)
        );
    }
    function l(o) {
        return r.containerState.furtherBlankLines || !pe(o)
            ? ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), a(o))
            : ((r.containerState.furtherBlankLines = void 0), (r.containerState.initialBlankLine = void 0), e.attempt(P6, t, a)(o));
    }
    function a(o) {
        return (
            (r.containerState._closeFlow = !0),
            (r.interrupt = void 0),
            ge(e, e.attempt(pt, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o)
        );
    }
}
function B6(e, t, n) {
    const r = this;
    return ge(e, i, "listItemIndent", r.containerState.size + 1);
    function i(l) {
        const a = r.events[r.events.length - 1];
        return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(l) : n(l);
    }
}
function O6(e) {
    e.exit(this.containerState.type);
}
function R6(e, t, n) {
    const r = this;
    return ge(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
    function i(l) {
        const a = r.events[r.events.length - 1];
        return !pe(l) && a && a[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
    }
}
const rh = { name: "setextUnderline", tokenize: q6, resolveTo: H6 };
function H6(e, t) {
    let n = e.length,
        r,
        i,
        l;
    for (; n--; )
        if (e[n][0] === "enter") {
            if (e[n][1].type === "content") {
                r = n;
                break;
            }
            e[n][1].type === "paragraph" && (i = n);
        } else e[n][1].type === "content" && e.splice(n, 1), !l && e[n][1].type === "definition" && (l = n);
    const a = { type: "setextHeading", start: Object.assign({}, e[i][1].start), end: Object.assign({}, e[e.length - 1][1].end) };
    return (
        (e[i][1].type = "setextHeadingText"),
        l ? (e.splice(i, 0, ["enter", a, t]), e.splice(l + 1, 0, ["exit", e[r][1], t]), (e[r][1].end = Object.assign({}, e[l][1].end))) : (e[r][1] = a),
        e.push(["exit", a, t]),
        e
    );
}
function q6(e, t, n) {
    const r = this;
    let i;
    return l;
    function l(s) {
        let h = r.events.length,
            d;
        for (; h--; )
            if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
                d = r.events[h][1].type === "paragraph";
                break;
            }
        return !r.parser.lazy[r.now().line] && (r.interrupt || d) ? (e.enter("setextHeadingLine"), (i = s), a(s)) : n(s);
    }
    function a(s) {
        return e.enter("setextHeadingLineSequence"), o(s);
    }
    function o(s) {
        return s === i ? (e.consume(s), o) : (e.exit("setextHeadingLineSequence"), pe(s) ? ge(e, u, "lineSuffix")(s) : u(s));
    }
    function u(s) {
        return s === null || Z(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
    }
}
const _6 = { tokenize: U6 };
function U6(e) {
    const t = this,
        n = e.attempt(
            pa,
            r,
            e.attempt(this.parser.constructs.flowInitial, i, ge(e, e.attempt(this.parser.constructs.flow, i, e.attempt(G5, i)), "linePrefix")),
        );
    return n;
    function r(l) {
        if (l === null) {
            e.consume(l);
            return;
        }
        return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), (t.currentConstruct = void 0), n;
    }
    function i(l) {
        if (l === null) {
            e.consume(l);
            return;
        }
        return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), (t.currentConstruct = void 0), n;
    }
}
const $6 = { resolveAll: qd() },
    j6 = Hd("string"),
    V6 = Hd("text");
function Hd(e) {
    return { tokenize: t, resolveAll: qd(e === "text" ? W6 : void 0) };
    function t(n) {
        const r = this,
            i = this.parser.constructs[e],
            l = n.attempt(i, a, o);
        return a;
        function a(h) {
            return s(h) ? l(h) : o(h);
        }
        function o(h) {
            if (h === null) {
                n.consume(h);
                return;
            }
            return n.enter("data"), n.consume(h), u;
        }
        function u(h) {
            return s(h) ? (n.exit("data"), l(h)) : (n.consume(h), u);
        }
        function s(h) {
            if (h === null) return !0;
            const d = i[h];
            let p = -1;
            if (d)
                for (; ++p < d.length; ) {
                    const m = d[p];
                    if (!m.previous || m.previous.call(r, r.previous)) return !0;
                }
            return !1;
        }
    }
}
function qd(e) {
    return t;
    function t(n, r) {
        let i = -1,
            l;
        for (; ++i <= n.length; )
            l === void 0
                ? n[i] && n[i][1].type === "data" && ((l = i), i++)
                : (!n[i] || n[i][1].type !== "data") &&
                  (i !== l + 2 && ((n[l][1].end = n[i - 1][1].end), n.splice(l + 2, i - l - 2), (i = l + 2)), (l = void 0));
        return e ? e(n, r) : n;
    }
}
function W6(e, t) {
    let n = 0;
    for (; ++n <= e.length; )
        if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1],
                i = t.sliceStream(r);
            let l = i.length,
                a = -1,
                o = 0,
                u;
            for (; l--; ) {
                const s = i[l];
                if (typeof s == "string") {
                    for (a = s.length; s.charCodeAt(a - 1) === 32; ) o++, a--;
                    if (a) break;
                    a = -1;
                } else if (s === -2) (u = !0), o++;
                else if (s !== -1) {
                    l++;
                    break;
                }
            }
            if (o) {
                const s = {
                    type: n === e.length || u || o < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: r.end.line,
                        column: r.end.column - o,
                        offset: r.end.offset - o,
                        _index: r.start._index + l,
                        _bufferIndex: l ? a : r.start._bufferIndex + a,
                    },
                    end: Object.assign({}, r.end),
                };
                (r.end = Object.assign({}, s.start)),
                    r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), (n += 2));
            }
            n++;
        }
    return e;
}
function G6(e, t, n) {
    let r = Object.assign(n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 }, { _index: 0, _bufferIndex: -1 });
    const i = {},
        l = [];
    let a = [],
        o = [];
    const u = { consume: x, enter: k, exit: A, attempt: F(P), check: F(T), interrupt: F(T, { interrupt: !0 }) },
        s = { previous: null, code: null, containerState: {}, events: [], parser: e, sliceStream: m, sliceSerialize: p, now: S, defineSkip: w, write: d };
    let h = t.tokenize.call(s, u);
    return t.resolveAll && l.push(t), s;
    function d(U) {
        return (a = Ot(a, U)), N(), a[a.length - 1] !== null ? [] : (L(t, 0), (s.events = js(l, s.events, s)), s.events);
    }
    function p(U, $) {
        return X6(m(U), $);
    }
    function m(U) {
        return Y6(a, U);
    }
    function S() {
        const { line: U, column: $, offset: he, _index: ce, _bufferIndex: re } = r;
        return { line: U, column: $, offset: he, _index: ce, _bufferIndex: re };
    }
    function w(U) {
        (i[U.line] = U.column), Q();
    }
    function N() {
        let U;
        for (; r._index < a.length; ) {
            const $ = a[r._index];
            if (typeof $ == "string")
                for (U = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === U && r._bufferIndex < $.length; ) y($.charCodeAt(r._bufferIndex));
            else y($);
        }
    }
    function y(U) {
        h = h(U);
    }
    function x(U) {
        Z(U) ? (r.line++, (r.column = 1), (r.offset += U === -3 ? 2 : 1), Q()) : U !== -1 && (r.column++, r.offset++),
            r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === a[r._index].length && ((r._bufferIndex = -1), r._index++)),
            (s.previous = U);
    }
    function k(U, $) {
        const he = $ || {};
        return (he.type = U), (he.start = S()), s.events.push(["enter", he, s]), o.push(he), he;
    }
    function A(U) {
        const $ = o.pop();
        return ($.end = S()), s.events.push(["exit", $, s]), $;
    }
    function P(U, $) {
        L(U, $.from);
    }
    function T(U, $) {
        $.restore();
    }
    function F(U, $) {
        return he;
        function he(ce, re, ve) {
            let we, j, K, b;
            return Array.isArray(ce) ? ue(ce) : "tokenize" in ce ? ue([ce]) : ae(ce);
            function ae(ke) {
                return Xe;
                function Xe(at) {
                    const Xt = at !== null && ke[at],
                        Qt = at !== null && ke.null,
                        z0 = [...(Array.isArray(Xt) ? Xt : Xt ? [Xt] : []), ...(Array.isArray(Qt) ? Qt : Qt ? [Qt] : [])];
                    return ue(z0)(at);
                }
            }
            function ue(ke) {
                return (we = ke), (j = 0), ke.length === 0 ? ve : E(ke[j]);
            }
            function E(ke) {
                return Xe;
                function Xe(at) {
                    return (
                        (b = R()),
                        (K = ke),
                        ke.partial || (s.currentConstruct = ke),
                        ke.name && s.parser.constructs.disable.null.includes(ke.name)
                            ? Ze()
                            : ke.tokenize.call($ ? Object.assign(Object.create(s), $) : s, u, Fe, Ze)(at)
                    );
                }
            }
            function Fe(ke) {
                return U(K, b), re;
            }
            function Ze(ke) {
                return b.restore(), ++j < we.length ? E(we[j]) : ve;
            }
        }
    }
    function L(U, $) {
        U.resolveAll && !l.includes(U) && l.push(U),
            U.resolve && vn(s.events, $, s.events.length - $, U.resolve(s.events.slice($), s)),
            U.resolveTo && (s.events = U.resolveTo(s.events, s));
    }
    function R() {
        const U = S(),
            $ = s.previous,
            he = s.currentConstruct,
            ce = s.events.length,
            re = Array.from(o);
        return { restore: ve, from: ce };
        function ve() {
            (r = U), (s.previous = $), (s.currentConstruct = he), (s.events.length = ce), (o = re), Q();
        }
    }
    function Q() {
        r.line in i && r.column < 2 && ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
    }
}
function Y6(e, t) {
    const n = t.start._index,
        r = t.start._bufferIndex,
        i = t.end._index,
        l = t.end._bufferIndex;
    let a;
    if (n === i) a = [e[n].slice(r, l)];
    else {
        if (((a = e.slice(n, i)), r > -1)) {
            const o = a[0];
            typeof o == "string" ? (a[0] = o.slice(r)) : a.shift();
        }
        l > 0 && a.push(e[i].slice(0, l));
    }
    return a;
}
function X6(e, t) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < e.length; ) {
        const l = e[n];
        let a;
        if (typeof l == "string") a = l;
        else
            switch (l) {
                case -5: {
                    a = "\r";
                    break;
                }
                case -4: {
                    a = `
`;
                    break;
                }
                case -3: {
                    a = `\r
`;
                    break;
                }
                case -2: {
                    a = t ? " " : "	";
                    break;
                }
                case -1: {
                    if (!t && i) continue;
                    a = " ";
                    break;
                }
                default:
                    a = String.fromCharCode(l);
            }
        (i = l === -2), r.push(a);
    }
    return r.join("");
}
const Q6 = { 42: pt, 43: pt, 45: pt, 48: pt, 49: pt, 50: pt, 51: pt, 52: pt, 53: pt, 54: pt, 55: pt, 56: pt, 57: pt, 62: Fd },
    K6 = { 91: Z5 },
    Z6 = { [-2]: go, [-1]: go, 32: go },
    J6 = { 35: i6, 42: kl, 45: [rh, kl], 60: u6, 61: rh, 95: kl, 96: th, 126: th },
    e7 = { 38: Id, 92: Pd },
    t7 = { [-5]: vo, [-4]: vo, [-3]: vo, 33: T6, 38: Id, 42: Iu, 60: [A5, p6], 91: M6, 92: [n6, Pd], 93: Ws, 95: Iu, 96: U5 },
    n7 = { null: [Iu, $6] },
    r7 = { null: [42, 95] },
    i7 = { null: [] },
    l7 = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                attentionMarkers: r7,
                contentInitial: K6,
                disable: i7,
                document: Q6,
                flow: J6,
                flowInitial: Z6,
                insideSpan: n7,
                string: e7,
                text: t7,
            },
            Symbol.toStringTag,
            { value: "Module" },
        ),
    );
function a7(e) {
    const n = d5([l7, ...((e || {}).extensions || [])]),
        r = { defined: [], lazy: {}, constructs: n, content: i(S5), document: i(C5), flow: i(_6), string: i(j6), text: i(V6) };
    return r;
    function i(l) {
        return a;
        function a(o) {
            return G6(r, l, o);
        }
    }
}
const ih = /[\0\t\n\r]/g;
function o7() {
    let e = 1,
        t = "",
        n = !0,
        r;
    return i;
    function i(l, a, o) {
        const u = [];
        let s, h, d, p, m;
        for (l = t + l.toString(a), d = 0, t = "", n && (l.charCodeAt(0) === 65279 && d++, (n = void 0)); d < l.length; ) {
            if (((ih.lastIndex = d), (s = ih.exec(l)), (p = s && s.index !== void 0 ? s.index : l.length), (m = l.charCodeAt(p)), !s)) {
                t = l.slice(d);
                break;
            }
            if (m === 10 && d === p && r) u.push(-3), (r = void 0);
            else
                switch ((r && (u.push(-5), (r = void 0)), d < p && (u.push(l.slice(d, p)), (e += p - d)), m)) {
                    case 0: {
                        u.push(65533), e++;
                        break;
                    }
                    case 9: {
                        for (h = Math.ceil(e / 4) * 4, u.push(-2); e++ < h; ) u.push(-1);
                        break;
                    }
                    case 10: {
                        u.push(-4), (e = 1);
                        break;
                    }
                    default:
                        (r = !0), (e = 1);
                }
            d = p + 1;
        }
        return o && (r && u.push(-5), t && u.push(t), u.push(null)), u;
    }
}
function u7(e) {
    for (; !Ld(e); );
    return e;
}
function _d(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 ||
        n === 11 ||
        (n > 13 && n < 32) ||
        (n > 126 && n < 160) ||
        (n > 55295 && n < 57344) ||
        (n > 64975 && n < 65008) ||
        (n & 65535) === 65535 ||
        (n & 65535) === 65534 ||
        n > 1114111
        ? "�"
        : String.fromCharCode(n);
}
const s7 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function c7(e) {
    return e.replace(s7, h7);
}
function h7(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
        const i = n.charCodeAt(1),
            l = i === 120 || i === 88;
        return _d(n.slice(l ? 2 : 1), l ? 16 : 10);
    }
    return Vs(n) || e;
}
const Ud = {}.hasOwnProperty,
    f7 = function (e, t, n) {
        return (
            typeof t != "string" && ((n = t), (t = void 0)),
            d7(n)(
                u7(
                    a7(n)
                        .document()
                        .write(o7()(e, t, !0)),
                ),
            )
        );
    };
function d7(e) {
    const t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: o(S1),
            autolinkProtocol: U,
            autolinkEmail: U,
            atxHeading: o(E0),
            blockQuote: o(z0),
            characterEscape: U,
            characterReference: U,
            codeFenced: o(Fi),
            codeFencedFenceInfo: u,
            codeFencedFenceMeta: u,
            codeIndented: o(Fi, u),
            codeText: o(La, u),
            codeTextData: U,
            data: U,
            codeFlowValue: U,
            definition: o(T0),
            definitionDestinationString: u,
            definitionLabelString: u,
            definitionTitleString: u,
            emphasis: o(Pi),
            hardBreakEscape: o(Rr),
            hardBreakTrailing: o(Rr),
            htmlFlow: o(vr, u),
            htmlFlowData: U,
            htmlText: o(vr, u),
            htmlTextData: U,
            image: o(Hr),
            label: u,
            link: o(S1),
            listItem: o(xp),
            listItemValue: S,
            listOrdered: o(b1, m),
            listUnordered: o(b1),
            paragraph: o(wp),
            reference: Ze,
            referenceString: u,
            resourceDestinationString: u,
            resourceTitleString: u,
            setextHeading: o(E0),
            strong: o(kp),
            thematicBreak: o(bp),
        },
        exit: {
            atxHeading: h(),
            atxHeadingSequence: F,
            autolink: h(),
            autolinkEmail: Qt,
            autolinkProtocol: Xt,
            blockQuote: h(),
            characterEscapeValue: $,
            characterReferenceMarkerHexadecimal: Xe,
            characterReferenceMarkerNumeric: Xe,
            characterReferenceValue: at,
            codeFenced: h(x),
            codeFencedFence: y,
            codeFencedFenceInfo: w,
            codeFencedFenceMeta: N,
            codeFlowValue: $,
            codeIndented: h(k),
            codeText: h(we),
            codeTextData: $,
            data: $,
            definition: h(),
            definitionDestinationString: T,
            definitionLabelString: A,
            definitionTitleString: P,
            emphasis: h(),
            hardBreakEscape: h(ce),
            hardBreakTrailing: h(ce),
            htmlFlow: h(re),
            htmlFlowData: $,
            htmlText: h(ve),
            htmlTextData: $,
            image: h(K),
            label: ae,
            labelText: b,
            lineEnding: he,
            link: h(j),
            listItem: h(),
            listOrdered: h(),
            listUnordered: h(),
            paragraph: h(),
            referenceString: ke,
            resourceDestinationString: ue,
            resourceTitleString: E,
            resource: Fe,
            setextHeading: h(Q),
            setextHeadingLineSequence: R,
            setextHeadingText: L,
            strong: h(),
            thematicBreak: h(),
        },
    };
    $d(t, (e || {}).mdastExtensions || []);
    const n = {};
    return r;
    function r(I) {
        let W = { type: "root", children: [] };
        const ie = { stack: [W], tokenStack: [], config: t, enter: s, exit: d, buffer: u, resume: p, setData: l, getData: a },
            Se = [];
        let be = -1;
        for (; ++be < I.length; )
            if (I[be][1].type === "listOrdered" || I[be][1].type === "listUnordered")
                if (I[be][0] === "enter") Se.push(be);
                else {
                    const Kt = Se.pop();
                    be = i(I, Kt, be);
                }
        for (be = -1; ++be < I.length; ) {
            const Kt = t[I[be][0]];
            Ud.call(Kt, I[be][1].type) && Kt[I[be][1].type].call(Object.assign({ sliceSerialize: I[be][2].sliceSerialize }, ie), I[be][1]);
        }
        if (ie.tokenStack.length > 0) {
            const Kt = ie.tokenStack[ie.tokenStack.length - 1];
            (Kt[1] || lh).call(ie, void 0, Kt[0]);
        }
        for (
            W.position = {
                start: $n(I.length > 0 ? I[0][1].start : { line: 1, column: 1, offset: 0 }),
                end: $n(I.length > 0 ? I[I.length - 2][1].end : { line: 1, column: 1, offset: 0 }),
            },
                be = -1;
            ++be < t.transforms.length;

        )
            W = t.transforms[be](W) || W;
        return W;
    }
    function i(I, W, ie) {
        let Se = W - 1,
            be = -1,
            Kt = !1,
            _n,
            kn,
            M0,
            A0;
        for (; ++Se <= ie; ) {
            const qe = I[Se];
            if (
                (qe[1].type === "listUnordered" || qe[1].type === "listOrdered" || qe[1].type === "blockQuote"
                    ? (qe[0] === "enter" ? be++ : be--, (A0 = void 0))
                    : qe[1].type === "lineEndingBlank"
                      ? qe[0] === "enter" && (_n && !A0 && !be && !M0 && (M0 = Se), (A0 = void 0))
                      : qe[1].type === "linePrefix" ||
                        qe[1].type === "listItemValue" ||
                        qe[1].type === "listItemMarker" ||
                        qe[1].type === "listItemPrefix" ||
                        qe[1].type === "listItemPrefixWhitespace" ||
                        (A0 = void 0),
                (!be && qe[0] === "enter" && qe[1].type === "listItemPrefix") ||
                    (be === -1 && qe[0] === "exit" && (qe[1].type === "listUnordered" || qe[1].type === "listOrdered")))
            ) {
                if (_n) {
                    let Ba = Se;
                    for (kn = void 0; Ba--; ) {
                        const Sn = I[Ba];
                        if (Sn[1].type === "lineEnding" || Sn[1].type === "lineEndingBlank") {
                            if (Sn[0] === "exit") continue;
                            kn && ((I[kn][1].type = "lineEndingBlank"), (Kt = !0)), (Sn[1].type = "lineEnding"), (kn = Ba);
                        } else if (
                            !(
                                Sn[1].type === "linePrefix" ||
                                Sn[1].type === "blockQuotePrefix" ||
                                Sn[1].type === "blockQuotePrefixWhitespace" ||
                                Sn[1].type === "blockQuoteMarker" ||
                                Sn[1].type === "listItemIndent"
                            )
                        )
                            break;
                    }
                    M0 && (!kn || M0 < kn) && (_n._spread = !0),
                        (_n.end = Object.assign({}, kn ? I[kn][1].start : qe[1].end)),
                        I.splice(kn || Se, 0, ["exit", _n, qe[2]]),
                        Se++,
                        ie++;
                }
                qe[1].type === "listItemPrefix" &&
                    ((_n = { type: "listItem", _spread: !1, start: Object.assign({}, qe[1].start), end: void 0 }),
                    I.splice(Se, 0, ["enter", _n, qe[2]]),
                    Se++,
                    ie++,
                    (M0 = void 0),
                    (A0 = !0));
            }
        }
        return (I[W][1]._spread = Kt), ie;
    }
    function l(I, W) {
        n[I] = W;
    }
    function a(I) {
        return n[I];
    }
    function o(I, W) {
        return ie;
        function ie(Se) {
            s.call(this, I(Se), Se), W && W.call(this, Se);
        }
    }
    function u() {
        this.stack.push({ type: "fragment", children: [] });
    }
    function s(I, W, ie) {
        return this.stack[this.stack.length - 1].children.push(I), this.stack.push(I), this.tokenStack.push([W, ie]), (I.position = { start: $n(W.start) }), I;
    }
    function h(I) {
        return W;
        function W(ie) {
            I && I.call(this, ie), d.call(this, ie);
        }
    }
    function d(I, W) {
        const ie = this.stack.pop(),
            Se = this.tokenStack.pop();
        if (Se) Se[0].type !== I.type && (W ? W.call(this, I, Se[0]) : (Se[1] || lh).call(this, I, Se[0]));
        else throw new Error("Cannot close `" + I.type + "` (" + J0({ start: I.start, end: I.end }) + "): it’s not open");
        return (ie.position.end = $n(I.end)), ie;
    }
    function p() {
        return h5(this.stack.pop());
    }
    function m() {
        l("expectingFirstListItemValue", !0);
    }
    function S(I) {
        if (a("expectingFirstListItemValue")) {
            const W = this.stack[this.stack.length - 2];
            (W.start = Number.parseInt(this.sliceSerialize(I), 10)), l("expectingFirstListItemValue");
        }
    }
    function w() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.lang = I;
    }
    function N() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.meta = I;
    }
    function y() {
        a("flowCodeInside") || (this.buffer(), l("flowCodeInside", !0));
    }
    function x() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        (W.value = I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")), l("flowCodeInside");
    }
    function k() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = I.replace(/(\r?\n|\r)$/g, "");
    }
    function A(I) {
        const W = this.resume(),
            ie = this.stack[this.stack.length - 1];
        (ie.label = W), (ie.identifier = a0(this.sliceSerialize(I)).toLowerCase());
    }
    function P() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.title = I;
    }
    function T() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.url = I;
    }
    function F(I) {
        const W = this.stack[this.stack.length - 1];
        if (!W.depth) {
            const ie = this.sliceSerialize(I).length;
            W.depth = ie;
        }
    }
    function L() {
        l("setextHeadingSlurpLineEnding", !0);
    }
    function R(I) {
        const W = this.stack[this.stack.length - 1];
        W.depth = this.sliceSerialize(I).charCodeAt(0) === 61 ? 1 : 2;
    }
    function Q() {
        l("setextHeadingSlurpLineEnding");
    }
    function U(I) {
        const W = this.stack[this.stack.length - 1];
        let ie = W.children[W.children.length - 1];
        (!ie || ie.type !== "text") && ((ie = Sp()), (ie.position = { start: $n(I.start) }), W.children.push(ie)), this.stack.push(ie);
    }
    function $(I) {
        const W = this.stack.pop();
        (W.value += this.sliceSerialize(I)), (W.position.end = $n(I.end));
    }
    function he(I) {
        const W = this.stack[this.stack.length - 1];
        if (a("atHardBreak")) {
            const ie = W.children[W.children.length - 1];
            (ie.position.end = $n(I.end)), l("atHardBreak");
            return;
        }
        !a("setextHeadingSlurpLineEnding") && t.canContainEols.includes(W.type) && (U.call(this, I), $.call(this, I));
    }
    function ce() {
        l("atHardBreak", !0);
    }
    function re() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = I;
    }
    function ve() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = I;
    }
    function we() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.value = I;
    }
    function j() {
        const I = this.stack[this.stack.length - 1];
        if (a("inReference")) {
            const W = a("referenceType") || "shortcut";
            (I.type += "Reference"), (I.referenceType = W), delete I.url, delete I.title;
        } else delete I.identifier, delete I.label;
        l("referenceType");
    }
    function K() {
        const I = this.stack[this.stack.length - 1];
        if (a("inReference")) {
            const W = a("referenceType") || "shortcut";
            (I.type += "Reference"), (I.referenceType = W), delete I.url, delete I.title;
        } else delete I.identifier, delete I.label;
        l("referenceType");
    }
    function b(I) {
        const W = this.sliceSerialize(I),
            ie = this.stack[this.stack.length - 2];
        (ie.label = c7(W)), (ie.identifier = a0(W).toLowerCase());
    }
    function ae() {
        const I = this.stack[this.stack.length - 1],
            W = this.resume(),
            ie = this.stack[this.stack.length - 1];
        if ((l("inReference", !0), ie.type === "link")) {
            const Se = I.children;
            ie.children = Se;
        } else ie.alt = W;
    }
    function ue() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.url = I;
    }
    function E() {
        const I = this.resume(),
            W = this.stack[this.stack.length - 1];
        W.title = I;
    }
    function Fe() {
        l("inReference");
    }
    function Ze() {
        l("referenceType", "collapsed");
    }
    function ke(I) {
        const W = this.resume(),
            ie = this.stack[this.stack.length - 1];
        (ie.label = W), (ie.identifier = a0(this.sliceSerialize(I)).toLowerCase()), l("referenceType", "full");
    }
    function Xe(I) {
        l("characterReferenceType", I.type);
    }
    function at(I) {
        const W = this.sliceSerialize(I),
            ie = a("characterReferenceType");
        let Se;
        ie ? ((Se = _d(W, ie === "characterReferenceMarkerNumeric" ? 10 : 16)), l("characterReferenceType")) : (Se = Vs(W));
        const be = this.stack.pop();
        (be.value += Se), (be.position.end = $n(I.end));
    }
    function Xt(I) {
        $.call(this, I);
        const W = this.stack[this.stack.length - 1];
        W.url = this.sliceSerialize(I);
    }
    function Qt(I) {
        $.call(this, I);
        const W = this.stack[this.stack.length - 1];
        W.url = "mailto:" + this.sliceSerialize(I);
    }
    function z0() {
        return { type: "blockquote", children: [] };
    }
    function Fi() {
        return { type: "code", lang: null, meta: null, value: "" };
    }
    function La() {
        return { type: "inlineCode", value: "" };
    }
    function T0() {
        return { type: "definition", identifier: "", label: null, title: null, url: "" };
    }
    function Pi() {
        return { type: "emphasis", children: [] };
    }
    function E0() {
        return { type: "heading", depth: void 0, children: [] };
    }
    function Rr() {
        return { type: "break" };
    }
    function vr() {
        return { type: "html", value: "" };
    }
    function Hr() {
        return { type: "image", title: null, url: "", alt: null };
    }
    function S1() {
        return { type: "link", title: null, url: "", children: [] };
    }
    function b1(I) {
        return { type: "list", ordered: I.type === "listOrdered", start: null, spread: I._spread, children: [] };
    }
    function xp(I) {
        return { type: "listItem", spread: I._spread, checked: null, children: [] };
    }
    function wp() {
        return { type: "paragraph", children: [] };
    }
    function kp() {
        return { type: "strong", children: [] };
    }
    function Sp() {
        return { type: "text", value: "" };
    }
    function bp() {
        return { type: "thematicBreak" };
    }
}
function $n(e) {
    return { line: e.line, column: e.column, offset: e.offset };
}
function $d(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
        const r = t[n];
        Array.isArray(r) ? $d(e, r) : m7(e, r);
    }
}
function m7(e, t) {
    let n;
    for (n in t)
        if (Ud.call(t, n)) {
            if (n === "canContainEols") {
                const r = t[n];
                r && e[n].push(...r);
            } else if (n === "transforms") {
                const r = t[n];
                r && e[n].push(...r);
            } else if (n === "enter" || n === "exit") {
                const r = t[n];
                r && Object.assign(e[n], r);
            }
        }
}
function lh(e, t) {
    throw e
        ? new Error(
              "Cannot close `" +
                  e.type +
                  "` (" +
                  J0({ start: e.start, end: e.end }) +
                  "): a different token (`" +
                  t.type +
                  "`, " +
                  J0({ start: t.start, end: t.end }) +
                  ") is open",
          )
        : new Error("Cannot close document, a token (`" + t.type + "`, " + J0({ start: t.start, end: t.end }) + ") is still open");
}
function p7(e) {
    Object.assign(this, {
        Parser: n => {
            const r = this.data("settings");
            return f7(
                n,
                Object.assign({}, r, e, { extensions: this.data("micromarkExtensions") || [], mdastExtensions: this.data("fromMarkdownExtensions") || [] }),
            );
        },
    });
}
function g7(e, t) {
    const n = { type: "element", tagName: "blockquote", properties: {}, children: e.wrap(e.all(t), !0) };
    return e.patch(t, n), e.applyData(t, n);
}
function v7(e, t) {
    const n = { type: "element", tagName: "br", properties: {}, children: [] };
    return (
        e.patch(t, n),
        [
            e.applyData(t, n),
            {
                type: "text",
                value: `
`,
            },
        ]
    );
}
function y7(e, t) {
    const n = t.value
            ? t.value +
              `
`
            : "",
        r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
        i = {};
    r && (i.className = ["language-" + r]);
    let l = { type: "element", tagName: "code", properties: i, children: [{ type: "text", value: n }] };
    return (
        t.meta && (l.data = { meta: t.meta }),
        e.patch(t, l),
        (l = e.applyData(t, l)),
        (l = { type: "element", tagName: "pre", properties: {}, children: [l] }),
        e.patch(t, l),
        l
    );
}
function x7(e, t) {
    const n = { type: "element", tagName: "del", properties: {}, children: e.all(t) };
    return e.patch(t, n), e.applyData(t, n);
}
function w7(e, t) {
    const n = { type: "element", tagName: "em", properties: {}, children: e.all(t) };
    return e.patch(t, n), e.applyData(t, n);
}
function k0(e) {
    const t = [];
    let n = -1,
        r = 0,
        i = 0;
    for (; ++n < e.length; ) {
        const l = e.charCodeAt(n);
        let a = "";
        if (l === 37 && At(e.charCodeAt(n + 1)) && At(e.charCodeAt(n + 2))) i = 2;
        else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (a = String.fromCharCode(l));
        else if (l > 55295 && l < 57344) {
            const o = e.charCodeAt(n + 1);
            l < 56320 && o > 56319 && o < 57344 ? ((a = String.fromCharCode(l, o)), (i = 1)) : (a = "�");
        } else a = String.fromCharCode(l);
        a && (t.push(e.slice(r, n), encodeURIComponent(a)), (r = n + i + 1), (a = "")), i && ((n += i), (i = 0));
    }
    return t.join("") + e.slice(r);
}
function jd(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = k0(n.toLowerCase()),
        i = e.footnoteOrder.indexOf(n);
    let l;
    i === -1 ? (e.footnoteOrder.push(n), (e.footnoteCounts[n] = 1), (l = e.footnoteOrder.length)) : (e.footnoteCounts[n]++, (l = i + 1));
    const a = e.footnoteCounts[n],
        o = {
            type: "element",
            tagName: "a",
            properties: {
                href: "#" + e.clobberPrefix + "fn-" + r,
                id: e.clobberPrefix + "fnref-" + r + (a > 1 ? "-" + a : ""),
                dataFootnoteRef: !0,
                ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(l) }],
        };
    e.patch(t, o);
    const u = { type: "element", tagName: "sup", properties: {}, children: [o] };
    return e.patch(t, u), e.applyData(t, u);
}
function k7(e, t) {
    const n = e.footnoteById;
    let r = 1;
    for (; r in n; ) r++;
    const i = String(r);
    return (
        (n[i] = { type: "footnoteDefinition", identifier: i, children: [{ type: "paragraph", children: t.children }], position: t.position }),
        jd(e, { type: "footnoteReference", identifier: i, position: t.position })
    );
}
function S7(e, t) {
    const n = { type: "element", tagName: "h" + t.depth, properties: {}, children: e.all(t) };
    return e.patch(t, n), e.applyData(t, n);
}
function b7(e, t) {
    if (e.dangerous) {
        const n = { type: "raw", value: t.value };
        return e.patch(t, n), e.applyData(t, n);
    }
    return null;
}
function Vd(e, t) {
    const n = t.referenceType;
    let r = "]";
    if ((n === "collapsed" ? (r += "[]") : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference"))
        return { type: "text", value: "![" + t.alt + r };
    const i = e.all(t),
        l = i[0];
    l && l.type === "text" ? (l.value = "[" + l.value) : i.unshift({ type: "text", value: "[" });
    const a = i[i.length - 1];
    return a && a.type === "text" ? (a.value += r) : i.push({ type: "text", value: r }), i;
}
function C7(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return Vd(e, t);
    const r = { src: k0(n.url || ""), alt: t.alt };
    n.title !== null && n.title !== void 0 && (r.title = n.title);
    const i = { type: "element", tagName: "img", properties: r, children: [] };
    return e.patch(t, i), e.applyData(t, i);
}
function z7(e, t) {
    const n = { src: k0(t.url) };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = { type: "element", tagName: "img", properties: n, children: [] };
    return e.patch(t, r), e.applyData(t, r);
}
function T7(e, t) {
    const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
    e.patch(t, n);
    const r = { type: "element", tagName: "code", properties: {}, children: [n] };
    return e.patch(t, r), e.applyData(t, r);
}
function E7(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return Vd(e, t);
    const r = { href: k0(n.url || "") };
    n.title !== null && n.title !== void 0 && (r.title = n.title);
    const i = { type: "element", tagName: "a", properties: r, children: e.all(t) };
    return e.patch(t, i), e.applyData(t, i);
}
function M7(e, t) {
    const n = { href: k0(t.url) };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = { type: "element", tagName: "a", properties: n, children: e.all(t) };
    return e.patch(t, r), e.applyData(t, r);
}
function A7(e, t, n) {
    const r = e.all(t),
        i = n ? N7(n) : Wd(t),
        l = {},
        a = [];
    if (typeof t.checked == "boolean") {
        const h = r[0];
        let d;
        h && h.type === "element" && h.tagName === "p" ? (d = h) : ((d = { type: "element", tagName: "p", properties: {}, children: [] }), r.unshift(d)),
            d.children.length > 0 && d.children.unshift({ type: "text", value: " " }),
            d.children.unshift({ type: "element", tagName: "input", properties: { type: "checkbox", checked: t.checked, disabled: !0 }, children: [] }),
            (l.className = ["task-list-item"]);
    }
    let o = -1;
    for (; ++o < r.length; ) {
        const h = r[o];
        (i || o !== 0 || h.type !== "element" || h.tagName !== "p") &&
            a.push({
                type: "text",
                value: `
`,
            }),
            h.type === "element" && h.tagName === "p" && !i ? a.push(...h.children) : a.push(h);
    }
    const u = r[r.length - 1];
    u &&
        (i || u.type !== "element" || u.tagName !== "p") &&
        a.push({
            type: "text",
            value: `
`,
        });
    const s = { type: "element", tagName: "li", properties: l, children: a };
    return e.patch(t, s), e.applyData(t, s);
}
function N7(e) {
    let t = !1;
    if (e.type === "list") {
        t = e.spread || !1;
        const n = e.children;
        let r = -1;
        for (; !t && ++r < n.length; ) t = Wd(n[r]);
    }
    return t;
}
function Wd(e) {
    const t = e.spread;
    return t ?? e.children.length > 1;
}
function D7(e, t) {
    const n = {},
        r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
        const a = r[i];
        if (
            a.type === "element" &&
            a.tagName === "li" &&
            a.properties &&
            Array.isArray(a.properties.className) &&
            a.properties.className.includes("task-list-item")
        ) {
            n.className = ["contains-task-list"];
            break;
        }
    }
    const l = { type: "element", tagName: t.ordered ? "ol" : "ul", properties: n, children: e.wrap(r, !0) };
    return e.patch(t, l), e.applyData(t, l);
}
function F7(e, t) {
    const n = { type: "element", tagName: "p", properties: {}, children: e.all(t) };
    return e.patch(t, n), e.applyData(t, n);
}
function P7(e, t) {
    const n = { type: "root", children: e.wrap(e.all(t)) };
    return e.patch(t, n), e.applyData(t, n);
}
function I7(e, t) {
    const n = { type: "element", tagName: "strong", properties: {}, children: e.all(t) };
    return e.patch(t, n), e.applyData(t, n);
}
const Gs = Gd("start"),
    Ys = Gd("end");
function L7(e) {
    return { start: Gs(e), end: Ys(e) };
}
function Gd(e) {
    return t;
    function t(n) {
        const r = (n && n.position && n.position[e]) || {};
        return { line: r.line || null, column: r.column || null, offset: r.offset > -1 ? r.offset : null };
    }
}
function B7(e, t) {
    const n = e.all(t),
        r = n.shift(),
        i = [];
    if (r) {
        const a = { type: "element", tagName: "thead", properties: {}, children: e.wrap([r], !0) };
        e.patch(t.children[0], a), i.push(a);
    }
    if (n.length > 0) {
        const a = { type: "element", tagName: "tbody", properties: {}, children: e.wrap(n, !0) },
            o = Gs(t.children[1]),
            u = Ys(t.children[t.children.length - 1]);
        o.line && u.line && (a.position = { start: o, end: u }), i.push(a);
    }
    const l = { type: "element", tagName: "table", properties: {}, children: e.wrap(i, !0) };
    return e.patch(t, l), e.applyData(t, l);
}
function O7(e, t, n) {
    const r = n ? n.children : void 0,
        l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
        a = n && n.type === "table" ? n.align : void 0,
        o = a ? a.length : t.children.length;
    let u = -1;
    const s = [];
    for (; ++u < o; ) {
        const d = t.children[u],
            p = {},
            m = a ? a[u] : void 0;
        m && (p.align = m);
        let S = { type: "element", tagName: l, properties: p, children: [] };
        d && ((S.children = e.all(d)), e.patch(d, S), (S = e.applyData(t, S))), s.push(S);
    }
    const h = { type: "element", tagName: "tr", properties: {}, children: e.wrap(s, !0) };
    return e.patch(t, h), e.applyData(t, h);
}
function R7(e, t) {
    const n = { type: "element", tagName: "td", properties: {}, children: e.all(t) };
    return e.patch(t, n), e.applyData(t, n);
}
const ah = 9,
    oh = 32;
function H7(e) {
    const t = String(e),
        n = /\r?\n|\r/g;
    let r = n.exec(t),
        i = 0;
    const l = [];
    for (; r; ) l.push(uh(t.slice(i, r.index), i > 0, !0), r[0]), (i = r.index + r[0].length), (r = n.exec(t));
    return l.push(uh(t.slice(i), i > 0, !1)), l.join("");
}
function uh(e, t, n) {
    let r = 0,
        i = e.length;
    if (t) {
        let l = e.codePointAt(r);
        for (; l === ah || l === oh; ) r++, (l = e.codePointAt(r));
    }
    if (n) {
        let l = e.codePointAt(i - 1);
        for (; l === ah || l === oh; ) i--, (l = e.codePointAt(i - 1));
    }
    return i > r ? e.slice(r, i) : "";
}
function q7(e, t) {
    const n = { type: "text", value: H7(String(t.value)) };
    return e.patch(t, n), e.applyData(t, n);
}
function _7(e, t) {
    const n = { type: "element", tagName: "hr", properties: {}, children: [] };
    return e.patch(t, n), e.applyData(t, n);
}
const U7 = {
    blockquote: g7,
    break: v7,
    code: y7,
    delete: x7,
    emphasis: w7,
    footnoteReference: jd,
    footnote: k7,
    heading: S7,
    html: b7,
    imageReference: C7,
    image: z7,
    inlineCode: T7,
    linkReference: E7,
    link: M7,
    listItem: A7,
    list: D7,
    paragraph: F7,
    root: P7,
    strong: I7,
    table: B7,
    tableCell: R7,
    tableRow: O7,
    text: q7,
    thematicBreak: _7,
    toml: Ki,
    yaml: Ki,
    definition: Ki,
    footnoteDefinition: Ki,
};
function Ki() {
    return null;
}
const Xs = function (e) {
    if (e == null) return W7;
    if (typeof e == "string") return V7(e);
    if (typeof e == "object") return Array.isArray(e) ? $7(e) : j7(e);
    if (typeof e == "function") return ga(e);
    throw new Error("Expected function, string, or object as test");
};
function $7(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length; ) t[n] = Xs(e[n]);
    return ga(r);
    function r(...i) {
        let l = -1;
        for (; ++l < t.length; ) if (t[l].call(this, ...i)) return !0;
        return !1;
    }
}
function j7(e) {
    return ga(t);
    function t(n) {
        let r;
        for (r in e) if (n[r] !== e[r]) return !1;
        return !0;
    }
}
function V7(e) {
    return ga(t);
    function t(n) {
        return n && n.type === e;
    }
}
function ga(e) {
    return t;
    function t(n, ...r) {
        return !!(n && typeof n == "object" && "type" in n && e.call(this, n, ...r));
    }
}
function W7() {
    return !0;
}
const G7 = !0,
    sh = !1,
    Y7 = "skip",
    X7 = function (e, t, n, r) {
        typeof t == "function" && typeof n != "function" && ((r = n), (n = t), (t = null));
        const i = Xs(t),
            l = r ? -1 : 1;
        a(e, void 0, [])();
        function a(o, u, s) {
            const h = o && typeof o == "object" ? o : {};
            if (typeof h.type == "string") {
                const p = typeof h.tagName == "string" ? h.tagName : typeof h.name == "string" ? h.name : void 0;
                Object.defineProperty(d, "name", { value: "node (" + (o.type + (p ? "<" + p + ">" : "")) + ")" });
            }
            return d;
            function d() {
                let p = [],
                    m,
                    S,
                    w;
                if ((!t || i(o, u, s[s.length - 1] || null)) && ((p = Q7(n(o, s))), p[0] === sh)) return p;
                if (o.children && p[0] !== Y7)
                    for (S = (r ? o.children.length : -1) + l, w = s.concat(o); S > -1 && S < o.children.length; ) {
                        if (((m = a(o.children[S], S, w)()), m[0] === sh)) return m;
                        S = typeof m[1] == "number" ? m[1] : S + l;
                    }
                return p;
            }
        }
    };
function Q7(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [G7, e] : [e];
}
const va = function (e, t, n, r) {
    typeof t == "function" && typeof n != "function" && ((r = n), (n = t), (t = null)), X7(e, t, i, r);
    function i(l, a) {
        const o = a[a.length - 1];
        return n(l, o ? o.children.indexOf(l) : null, o);
    }
};
function K7(e) {
    return (
        !e ||
        !e.position ||
        !e.position.start ||
        !e.position.start.line ||
        !e.position.start.column ||
        !e.position.end ||
        !e.position.end.line ||
        !e.position.end.column
    );
}
const ch = {}.hasOwnProperty;
function Z7(e) {
    const t = Object.create(null);
    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
    return (
        va(e, "definition", r => {
            const i = hh(r.identifier);
            i && !ch.call(t, i) && (t[i] = r);
        }),
        n
    );
    function n(r) {
        const i = hh(r);
        return i && ch.call(t, i) ? t[i] : null;
    }
}
function hh(e) {
    return String(e || "").toUpperCase();
}
const Yl = {}.hasOwnProperty;
function J7(e, t) {
    const n = t || {},
        r = n.allowDangerousHtml || !1,
        i = {};
    return (
        (a.dangerous = r),
        (a.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix),
        (a.footnoteLabel = n.footnoteLabel || "Footnotes"),
        (a.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
        (a.footnoteLabelProperties = n.footnoteLabelProperties || { className: ["sr-only"] }),
        (a.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
        (a.unknownHandler = n.unknownHandler),
        (a.passThrough = n.passThrough),
        (a.handlers = { ...U7, ...n.handlers }),
        (a.definition = Z7(e)),
        (a.footnoteById = i),
        (a.footnoteOrder = []),
        (a.footnoteCounts = {}),
        (a.patch = e8),
        (a.applyData = t8),
        (a.one = o),
        (a.all = u),
        (a.wrap = r8),
        (a.augment = l),
        va(e, "footnoteDefinition", s => {
            const h = String(s.identifier).toUpperCase();
            Yl.call(i, h) || (i[h] = s);
        }),
        a
    );
    function l(s, h) {
        if (s && "data" in s && s.data) {
            const d = s.data;
            d.hName && (h.type !== "element" && (h = { type: "element", tagName: "", properties: {}, children: [] }), (h.tagName = d.hName)),
                h.type === "element" && d.hProperties && (h.properties = { ...h.properties, ...d.hProperties }),
                "children" in h && h.children && d.hChildren && (h.children = d.hChildren);
        }
        if (s) {
            const d = "type" in s ? s : { position: s };
            K7(d) || (h.position = { start: Gs(d), end: Ys(d) });
        }
        return h;
    }
    function a(s, h, d, p) {
        return Array.isArray(d) && ((p = d), (d = {})), l(s, { type: "element", tagName: h, properties: d || {}, children: p || [] });
    }
    function o(s, h) {
        return Yd(a, s, h);
    }
    function u(s) {
        return Qs(a, s);
    }
}
function e8(e, t) {
    e.position && (t.position = L7(e));
}
function t8(e, t) {
    let n = t;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            l = e.data.hProperties;
        typeof r == "string" && (n.type === "element" ? (n.tagName = r) : (n = { type: "element", tagName: r, properties: {}, children: [] })),
            n.type === "element" && l && (n.properties = { ...n.properties, ...l }),
            "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
    }
    return n;
}
function Yd(e, t, n) {
    const r = t && t.type;
    if (!r) throw new Error("Expected node, got `" + t + "`");
    return Yl.call(e.handlers, r)
        ? e.handlers[r](e, t, n)
        : e.passThrough && e.passThrough.includes(r)
          ? "children" in t
              ? { ...t, children: Qs(e, t) }
              : t
          : e.unknownHandler
            ? e.unknownHandler(e, t, n)
            : n8(e, t);
}
function Qs(e, t) {
    const n = [];
    if ("children" in t) {
        const r = t.children;
        let i = -1;
        for (; ++i < r.length; ) {
            const l = Yd(e, r[i], t);
            if (l) {
                if (
                    i &&
                    r[i - 1].type === "break" &&
                    (!Array.isArray(l) && l.type === "text" && (l.value = l.value.replace(/^\s+/, "")), !Array.isArray(l) && l.type === "element")
                ) {
                    const a = l.children[0];
                    a && a.type === "text" && (a.value = a.value.replace(/^\s+/, ""));
                }
                Array.isArray(l) ? n.push(...l) : n.push(l);
            }
        }
    }
    return n;
}
function n8(e, t) {
    const n = t.data || {},
        r =
            "value" in t && !(Yl.call(n, "hProperties") || Yl.call(n, "hChildren"))
                ? { type: "text", value: t.value }
                : { type: "element", tagName: "div", properties: {}, children: Qs(e, t) };
    return e.patch(t, r), e.applyData(t, r);
}
function r8(e, t) {
    const n = [];
    let r = -1;
    for (
        t &&
        n.push({
            type: "text",
            value: `
`,
        });
        ++r < e.length;

    )
        r &&
            n.push({
                type: "text",
                value: `
`,
            }),
            n.push(e[r]);
    return (
        t &&
            e.length > 0 &&
            n.push({
                type: "text",
                value: `
`,
            }),
        n
    );
}
function i8(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.footnoteOrder.length; ) {
        const r = e.footnoteById[e.footnoteOrder[n]];
        if (!r) continue;
        const i = e.all(r),
            l = String(r.identifier).toUpperCase(),
            a = k0(l.toLowerCase());
        let o = 0;
        const u = [];
        for (; ++o <= e.footnoteCounts[l]; ) {
            const d = {
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + e.clobberPrefix + "fnref-" + a + (o > 1 ? "-" + o : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel,
                },
                children: [{ type: "text", value: "↩" }],
            };
            o > 1 && d.children.push({ type: "element", tagName: "sup", children: [{ type: "text", value: String(o) }] }),
                u.length > 0 && u.push({ type: "text", value: " " }),
                u.push(d);
        }
        const s = i[i.length - 1];
        if (s && s.type === "element" && s.tagName === "p") {
            const d = s.children[s.children.length - 1];
            d && d.type === "text" ? (d.value += " ") : s.children.push({ type: "text", value: " " }), s.children.push(...u);
        } else i.push(...u);
        const h = { type: "element", tagName: "li", properties: { id: e.clobberPrefix + "fn-" + a }, children: e.wrap(i, !0) };
        e.patch(r, h), t.push(h);
    }
    if (t.length !== 0)
        return {
            type: "element",
            tagName: "section",
            properties: { dataFootnotes: !0, className: ["footnotes"] },
            children: [
                {
                    type: "element",
                    tagName: e.footnoteLabelTagName,
                    properties: { ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)), id: "footnote-label" },
                    children: [{ type: "text", value: e.footnoteLabel }],
                },
                {
                    type: "text",
                    value: `
`,
                },
                { type: "element", tagName: "ol", properties: {}, children: e.wrap(t, !0) },
                {
                    type: "text",
                    value: `
`,
                },
            ],
        };
}
function Xd(e, t) {
    const n = J7(e, t),
        r = n.one(e, null),
        i = i8(n);
    return (
        i &&
            r.children.push(
                {
                    type: "text",
                    value: `
`,
                },
                i,
            ),
        Array.isArray(r) ? { type: "root", children: r } : r
    );
}
const l8 = function (e, t) {
        return e && "run" in e ? o8(e, t) : u8(e || t);
    },
    a8 = l8;
function o8(e, t) {
    return (n, r, i) => {
        e.run(Xd(n, t), r, l => {
            i(l);
        });
    };
}
function u8(e) {
    return t => Xd(t, e);
}
var Qd = { exports: {} },
    s8 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    c8 = s8,
    h8 = c8;
function Kd() {}
function Zd() {}
Zd.resetWarningCache = Kd;
var f8 = function () {
    function e(r, i, l, a, o, u) {
        if (u !== h8) {
            var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
            );
            throw ((s.name = "Invariant Violation"), s);
        }
    }
    e.isRequired = e;
    function t() {
        return e;
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Zd,
        resetWarningCache: Kd,
    };
    return (n.PropTypes = n), n;
};
Qd.exports = f8();
var d8 = Qd.exports;
const le = v0(d8);
class Mi {
    constructor(t, n, r) {
        (this.property = t), (this.normal = n), r && (this.space = r);
    }
}
Mi.prototype.property = {};
Mi.prototype.normal = {};
Mi.prototype.space = null;
function Jd(e, t) {
    const n = {},
        r = {};
    let i = -1;
    for (; ++i < e.length; ) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
    return new Mi(n, r, t);
}
function xi(e) {
    return e.toLowerCase();
}
class Gt {
    constructor(t, n) {
        (this.property = t), (this.attribute = n);
    }
}
Gt.prototype.space = null;
Gt.prototype.boolean = !1;
Gt.prototype.booleanish = !1;
Gt.prototype.overloadedBoolean = !1;
Gt.prototype.number = !1;
Gt.prototype.commaSeparated = !1;
Gt.prototype.spaceSeparated = !1;
Gt.prototype.commaOrSpaceSeparated = !1;
Gt.prototype.mustUseProperty = !1;
Gt.prototype.defined = !1;
let m8 = 0;
const oe = Lr(),
    $e = Lr(),
    em = Lr(),
    _ = Lr(),
    ze = Lr(),
    o0 = Lr(),
    Ct = Lr();
function Lr() {
    return 2 ** ++m8;
}
const Lu = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                boolean: oe,
                booleanish: $e,
                commaOrSpaceSeparated: Ct,
                commaSeparated: o0,
                number: _,
                overloadedBoolean: em,
                spaceSeparated: ze,
            },
            Symbol.toStringTag,
            { value: "Module" },
        ),
    ),
    yo = Object.keys(Lu);
class Ks extends Gt {
    constructor(t, n, r, i) {
        let l = -1;
        if ((super(t, n), fh(this, "space", i), typeof r == "number"))
            for (; ++l < yo.length; ) {
                const a = yo[l];
                fh(this, yo[l], (r & Lu[a]) === Lu[a]);
            }
    }
}
Ks.prototype.defined = !0;
function fh(e, t, n) {
    n && (e[t] = n);
}
const p8 = {}.hasOwnProperty;
function S0(e) {
    const t = {},
        n = {};
    let r;
    for (r in e.properties)
        if (p8.call(e.properties, r)) {
            const i = e.properties[r],
                l = new Ks(r, e.transform(e.attributes || {}, r), i, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), (t[r] = l), (n[xi(r)] = r), (n[xi(l.attribute)] = r);
        }
    return new Mi(t, n, e.space);
}
const tm = S0({
        space: "xlink",
        transform(e, t) {
            return "xlink:" + t.slice(5).toLowerCase();
        },
        properties: { xLinkActuate: null, xLinkArcRole: null, xLinkHref: null, xLinkRole: null, xLinkShow: null, xLinkTitle: null, xLinkType: null },
    }),
    nm = S0({
        space: "xml",
        transform(e, t) {
            return "xml:" + t.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
    });
function rm(e, t) {
    return t in e ? e[t] : t;
}
function im(e, t) {
    return rm(e, t.toLowerCase());
}
const lm = S0({ space: "xmlns", attributes: { xmlnsxlink: "xmlns:xlink" }, transform: im, properties: { xmlns: null, xmlnsXLink: null } }),
    am = S0({
        transform(e, t) {
            return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
        },
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: $e,
            ariaAutoComplete: null,
            ariaBusy: $e,
            ariaChecked: $e,
            ariaColCount: _,
            ariaColIndex: _,
            ariaColSpan: _,
            ariaControls: ze,
            ariaCurrent: null,
            ariaDescribedBy: ze,
            ariaDetails: null,
            ariaDisabled: $e,
            ariaDropEffect: ze,
            ariaErrorMessage: null,
            ariaExpanded: $e,
            ariaFlowTo: ze,
            ariaGrabbed: $e,
            ariaHasPopup: null,
            ariaHidden: $e,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: ze,
            ariaLevel: _,
            ariaLive: null,
            ariaModal: $e,
            ariaMultiLine: $e,
            ariaMultiSelectable: $e,
            ariaOrientation: null,
            ariaOwns: ze,
            ariaPlaceholder: null,
            ariaPosInSet: _,
            ariaPressed: $e,
            ariaReadOnly: $e,
            ariaRelevant: null,
            ariaRequired: $e,
            ariaRoleDescription: ze,
            ariaRowCount: _,
            ariaRowIndex: _,
            ariaRowSpan: _,
            ariaSelected: $e,
            ariaSetSize: _,
            ariaSort: null,
            ariaValueMax: _,
            ariaValueMin: _,
            ariaValueNow: _,
            ariaValueText: null,
            role: null,
        },
    }),
    g8 = S0({
        space: "html",
        attributes: { acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv" },
        transform: im,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: o0,
            acceptCharset: ze,
            accessKey: ze,
            action: null,
            allow: null,
            allowFullScreen: oe,
            allowPaymentRequest: oe,
            allowUserMedia: oe,
            alt: null,
            as: null,
            async: oe,
            autoCapitalize: null,
            autoComplete: ze,
            autoFocus: oe,
            autoPlay: oe,
            blocking: ze,
            capture: null,
            charSet: null,
            checked: oe,
            cite: null,
            className: ze,
            cols: _,
            colSpan: null,
            content: null,
            contentEditable: $e,
            controls: oe,
            controlsList: ze,
            coords: _ | o0,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: oe,
            defer: oe,
            dir: null,
            dirName: null,
            disabled: oe,
            download: em,
            draggable: $e,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: oe,
            formTarget: null,
            headers: ze,
            height: _,
            hidden: oe,
            high: _,
            href: null,
            hrefLang: null,
            htmlFor: ze,
            httpEquiv: ze,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: oe,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: oe,
            itemId: null,
            itemProp: ze,
            itemRef: ze,
            itemScope: oe,
            itemType: ze,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: oe,
            low: _,
            manifest: null,
            max: null,
            maxLength: _,
            media: null,
            method: null,
            min: null,
            minLength: _,
            multiple: oe,
            muted: oe,
            name: null,
            nonce: null,
            noModule: oe,
            noValidate: oe,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: oe,
            optimum: _,
            pattern: null,
            ping: ze,
            placeholder: null,
            playsInline: oe,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: oe,
            referrerPolicy: null,
            rel: ze,
            required: oe,
            reversed: oe,
            rows: _,
            rowSpan: _,
            sandbox: ze,
            scope: null,
            scoped: oe,
            seamless: oe,
            selected: oe,
            shadowRootClonable: oe,
            shadowRootDelegatesFocus: oe,
            shadowRootMode: null,
            shape: null,
            size: _,
            sizes: null,
            slot: null,
            span: _,
            spellCheck: $e,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: _,
            step: null,
            style: null,
            tabIndex: _,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: oe,
            useMap: null,
            value: $e,
            width: _,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: ze,
            axis: null,
            background: null,
            bgColor: null,
            border: _,
            borderColor: null,
            bottomMargin: _,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: oe,
            declare: oe,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: _,
            leftMargin: _,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: _,
            marginWidth: _,
            noResize: oe,
            noHref: oe,
            noShade: oe,
            noWrap: oe,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: _,
            rules: null,
            scheme: null,
            scrolling: $e,
            standby: null,
            summary: null,
            text: null,
            topMargin: _,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: _,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: oe,
            disableRemotePlayback: oe,
            prefix: null,
            property: null,
            results: _,
            security: null,
            unselectable: null,
        },
    }),
    v8 = S0({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
        },
        transform: rm,
        properties: {
            about: Ct,
            accentHeight: _,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: _,
            amplitude: _,
            arabicForm: null,
            ascent: _,
            attributeName: null,
            attributeType: null,
            azimuth: _,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: _,
            by: null,
            calcMode: null,
            capHeight: _,
            className: ze,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: _,
            diffuseConstant: _,
            direction: null,
            display: null,
            dur: null,
            divisor: _,
            dominantBaseline: null,
            download: oe,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: _,
            enableBackground: null,
            end: null,
            event: null,
            exponent: _,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: _,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: o0,
            g2: o0,
            glyphName: o0,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: _,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: _,
            horizOriginX: _,
            horizOriginY: _,
            id: null,
            ideographic: _,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: _,
            k: _,
            k1: _,
            k2: _,
            k3: _,
            k4: _,
            kernelMatrix: Ct,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: _,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: _,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: _,
            overlineThickness: _,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: _,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: ze,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: _,
            pointsAtY: _,
            pointsAtZ: _,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Ct,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Ct,
            rev: Ct,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Ct,
            requiredFeatures: Ct,
            requiredFonts: Ct,
            requiredFormats: Ct,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: _,
            specularExponent: _,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: _,
            strikethroughThickness: _,
            string: null,
            stroke: null,
            strokeDashArray: Ct,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: _,
            strokeOpacity: _,
            strokeWidth: null,
            style: null,
            surfaceScale: _,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Ct,
            tabIndex: _,
            tableValues: null,
            target: null,
            targetX: _,
            targetY: _,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Ct,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: _,
            underlineThickness: _,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: _,
            values: null,
            vAlphabetic: _,
            vMathematical: _,
            vectorEffect: null,
            vHanging: _,
            vIdeographic: _,
            version: null,
            vertAdvY: _,
            vertOriginX: _,
            vertOriginY: _,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: _,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
        },
    }),
    y8 = /^data[-\w.:]+$/i,
    dh = /-[a-z]/g,
    x8 = /[A-Z]/g;
function om(e, t) {
    const n = xi(t);
    let r = t,
        i = Gt;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && y8.test(t)) {
        if (t.charAt(4) === "-") {
            const l = t.slice(5).replace(dh, k8);
            r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
        } else {
            const l = t.slice(4);
            if (!dh.test(l)) {
                let a = l.replace(x8, w8);
                a.charAt(0) !== "-" && (a = "-" + a), (t = "data" + a);
            }
        }
        i = Ks;
    }
    return new i(r, t);
}
function w8(e) {
    return "-" + e.toLowerCase();
}
function k8(e) {
    return e.charAt(1).toUpperCase();
}
const mh = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
    },
    um = Jd([nm, tm, lm, am, g8], "html"),
    sm = Jd([nm, tm, lm, am, v8], "svg");
function S8(e) {
    if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
    if (e.allowedElements || e.disallowedElements || e.allowElement)
        return t => {
            va(t, "element", (n, r, i) => {
                const l = i;
                let a;
                if (
                    (e.allowedElements ? (a = !e.allowedElements.includes(n.tagName)) : e.disallowedElements && (a = e.disallowedElements.includes(n.tagName)),
                    !a && e.allowElement && typeof r == "number" && (a = !e.allowElement(n, r, l)),
                    a && typeof r == "number")
                )
                    return e.unwrapDisallowed && n.children ? l.children.splice(r, 1, ...n.children) : l.children.splice(r, 1), r;
            });
        };
}
var cm = { exports: {} },
    xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zs = Symbol.for("react.element"),
    Js = Symbol.for("react.portal"),
    ya = Symbol.for("react.fragment"),
    xa = Symbol.for("react.strict_mode"),
    wa = Symbol.for("react.profiler"),
    ka = Symbol.for("react.provider"),
    Sa = Symbol.for("react.context"),
    b8 = Symbol.for("react.server_context"),
    ba = Symbol.for("react.forward_ref"),
    Ca = Symbol.for("react.suspense"),
    za = Symbol.for("react.suspense_list"),
    Ta = Symbol.for("react.memo"),
    Ea = Symbol.for("react.lazy"),
    C8 = Symbol.for("react.offscreen"),
    hm;
hm = Symbol.for("react.module.reference");
function Yt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Zs:
                switch (((e = e.type), e)) {
                    case ya:
                    case wa:
                    case xa:
                    case Ca:
                    case za:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case b8:
                            case Sa:
                            case ba:
                            case Ea:
                            case Ta:
                            case ka:
                                return e;
                            default:
                                return t;
                        }
                }
            case Js:
                return t;
        }
    }
}
xe.ContextConsumer = Sa;
xe.ContextProvider = ka;
xe.Element = Zs;
xe.ForwardRef = ba;
xe.Fragment = ya;
xe.Lazy = Ea;
xe.Memo = Ta;
xe.Portal = Js;
xe.Profiler = wa;
xe.StrictMode = xa;
xe.Suspense = Ca;
xe.SuspenseList = za;
xe.isAsyncMode = function () {
    return !1;
};
xe.isConcurrentMode = function () {
    return !1;
};
xe.isContextConsumer = function (e) {
    return Yt(e) === Sa;
};
xe.isContextProvider = function (e) {
    return Yt(e) === ka;
};
xe.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zs;
};
xe.isForwardRef = function (e) {
    return Yt(e) === ba;
};
xe.isFragment = function (e) {
    return Yt(e) === ya;
};
xe.isLazy = function (e) {
    return Yt(e) === Ea;
};
xe.isMemo = function (e) {
    return Yt(e) === Ta;
};
xe.isPortal = function (e) {
    return Yt(e) === Js;
};
xe.isProfiler = function (e) {
    return Yt(e) === wa;
};
xe.isStrictMode = function (e) {
    return Yt(e) === xa;
};
xe.isSuspense = function (e) {
    return Yt(e) === Ca;
};
xe.isSuspenseList = function (e) {
    return Yt(e) === za;
};
xe.isValidElementType = function (e) {
    return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === ya ||
        e === wa ||
        e === xa ||
        e === Ca ||
        e === za ||
        e === C8 ||
        (typeof e == "object" &&
            e !== null &&
            (e.$$typeof === Ea ||
                e.$$typeof === Ta ||
                e.$$typeof === ka ||
                e.$$typeof === Sa ||
                e.$$typeof === ba ||
                e.$$typeof === hm ||
                e.getModuleId !== void 0))
    );
};
xe.typeOf = Yt;
cm.exports = xe;
var z8 = cm.exports;
const T8 = v0(z8);
function E8(e) {
    const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
    return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
function ph(e) {
    const t = String(e || "").trim();
    return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function M8(e) {
    return e.join(" ").trim();
}
function gh(e) {
    const t = [],
        n = String(e || "");
    let r = n.indexOf(","),
        i = 0,
        l = !1;
    for (; !l; ) {
        r === -1 && ((r = n.length), (l = !0));
        const a = n.slice(i, r).trim();
        (a || !l) && t.push(a), (i = r + 1), (r = n.indexOf(",", i));
    }
    return t;
}
function A8(e, t) {
    const n = t || {};
    return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
var e1 = { exports: {} },
    vh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    N8 = /\n/g,
    D8 = /^\s*/,
    F8 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    P8 = /^:\s*/,
    I8 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    L8 = /^[;\s]*/,
    B8 = /^\s+|\s+$/g,
    O8 = `
`,
    yh = "/",
    xh = "*",
    Sr = "",
    R8 = "comment",
    H8 = "declaration",
    q8 = function (e, t) {
        if (typeof e != "string") throw new TypeError("First argument must be a string");
        if (!e) return [];
        t = t || {};
        var n = 1,
            r = 1;
        function i(S) {
            var w = S.match(N8);
            w && (n += w.length);
            var N = S.lastIndexOf(O8);
            r = ~N ? S.length - N : r + S.length;
        }
        function l() {
            var S = { line: n, column: r };
            return function (w) {
                return (w.position = new a(S)), s(), w;
            };
        }
        function a(S) {
            (this.start = S), (this.end = { line: n, column: r }), (this.source = t.source);
        }
        a.prototype.content = e;
        function o(S) {
            var w = new Error(t.source + ":" + n + ":" + r + ": " + S);
            if (((w.reason = S), (w.filename = t.source), (w.line = n), (w.column = r), (w.source = e), !t.silent)) throw w;
        }
        function u(S) {
            var w = S.exec(e);
            if (w) {
                var N = w[0];
                return i(N), (e = e.slice(N.length)), w;
            }
        }
        function s() {
            u(D8);
        }
        function h(S) {
            var w;
            for (S = S || []; (w = d()); ) w !== !1 && S.push(w);
            return S;
        }
        function d() {
            var S = l();
            if (!(yh != e.charAt(0) || xh != e.charAt(1))) {
                for (var w = 2; Sr != e.charAt(w) && (xh != e.charAt(w) || yh != e.charAt(w + 1)); ) ++w;
                if (((w += 2), Sr === e.charAt(w - 1))) return o("End of comment missing");
                var N = e.slice(2, w - 2);
                return (r += 2), i(N), (e = e.slice(w)), (r += 2), S({ type: R8, comment: N });
            }
        }
        function p() {
            var S = l(),
                w = u(F8);
            if (w) {
                if ((d(), !u(P8))) return o("property missing ':'");
                var N = u(I8),
                    y = S({ type: H8, property: wh(w[0].replace(vh, Sr)), value: N ? wh(N[0].replace(vh, Sr)) : Sr });
                return u(L8), y;
            }
        }
        function m() {
            var S = [];
            h(S);
            for (var w; (w = p()); ) w !== !1 && (S.push(w), h(S));
            return S;
        }
        return s(), m();
    };
function wh(e) {
    return e ? e.replace(B8, Sr) : Sr;
}
var _8 = q8;
function fm(e, t) {
    var n = null;
    if (!e || typeof e != "string") return n;
    for (var r, i = _8(e), l = typeof t == "function", a, o, u = 0, s = i.length; u < s; u++)
        (r = i[u]), (a = r.property), (o = r.value), l ? t(a, o, r) : o && (n || (n = {}), (n[a] = o));
    return n;
}
e1.exports = fm;
e1.exports.default = fm;
var U8 = e1.exports;
const $8 = v0(U8),
    Bu = {}.hasOwnProperty,
    j8 = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function dm(e, t) {
    const n = [];
    let r = -1,
        i;
    for (; ++r < t.children.length; )
        (i = t.children[r]),
            i.type === "element"
                ? n.push(V8(e, i, r, t))
                : i.type === "text"
                  ? (t.type !== "element" || !j8.has(t.tagName) || !E8(i)) && n.push(i.value)
                  : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
    return n;
}
function V8(e, t, n, r) {
    const i = e.options,
        l = i.transformLinkUri === void 0 ? j3 : i.transformLinkUri,
        a = e.schema,
        o = t.tagName,
        u = {};
    let s = a,
        h;
    if ((a.space === "html" && o === "svg" && ((s = sm), (e.schema = s)), t.properties))
        for (h in t.properties) Bu.call(t.properties, h) && G8(u, h, t.properties[h], e);
    (o === "ol" || o === "ul") && e.listDepth++;
    const d = dm(e, t);
    (o === "ol" || o === "ul") && e.listDepth--, (e.schema = a);
    const p = t.position || { start: { line: null, column: null, offset: null }, end: { line: null, column: null, offset: null } },
        m = i.components && Bu.call(i.components, o) ? i.components[o] : o,
        S = typeof m == "string" || m === st.Fragment;
    if (!T8.isValidElementType(m)) throw new TypeError(`Component for name \`${o}\` not defined or is not renderable`);
    if (
        ((u.key = n),
        o === "a" &&
            i.linkTarget &&
            (u.target =
                typeof i.linkTarget == "function" ? i.linkTarget(String(u.href || ""), t.children, typeof u.title == "string" ? u.title : null) : i.linkTarget),
        o === "a" && l && (u.href = l(String(u.href || ""), t.children, typeof u.title == "string" ? u.title : null)),
        !S && o === "code" && r.type === "element" && r.tagName !== "pre" && (u.inline = !0),
        !S && (o === "h1" || o === "h2" || o === "h3" || o === "h4" || o === "h5" || o === "h6") && (u.level = Number.parseInt(o.charAt(1), 10)),
        o === "img" &&
            i.transformImageUri &&
            (u.src = i.transformImageUri(String(u.src || ""), String(u.alt || ""), typeof u.title == "string" ? u.title : null)),
        !S && o === "li" && r.type === "element")
    ) {
        const w = W8(t);
        (u.checked = w && w.properties ? !!w.properties.checked : null), (u.index = xo(r, t)), (u.ordered = r.tagName === "ol");
    }
    return (
        !S && (o === "ol" || o === "ul") && ((u.ordered = o === "ol"), (u.depth = e.listDepth)),
        (o === "td" || o === "th") && (u.align && (u.style || (u.style = {}), (u.style.textAlign = u.align), delete u.align), S || (u.isHeader = o === "th")),
        !S && o === "tr" && r.type === "element" && (u.isHeader = r.tagName === "thead"),
        i.sourcePos && (u["data-sourcepos"] = Q8(p)),
        !S && i.rawSourcePos && (u.sourcePosition = t.position),
        !S && i.includeElementIndex && ((u.index = xo(r, t)), (u.siblingCount = xo(r))),
        S || (u.node = t),
        d.length > 0 ? st.createElement(m, u, d) : st.createElement(m, u)
    );
}
function W8(e) {
    let t = -1;
    for (; ++t < e.children.length; ) {
        const n = e.children[t];
        if (n.type === "element" && n.tagName === "input") return n;
    }
    return null;
}
function xo(e, t) {
    let n = -1,
        r = 0;
    for (; ++n < e.children.length && e.children[n] !== t; ) e.children[n].type === "element" && r++;
    return r;
}
function G8(e, t, n, r) {
    const i = om(r.schema, t);
    let l = n;
    l == null ||
        l !== l ||
        (Array.isArray(l) && (l = i.commaSeparated ? A8(l) : M8(l)),
        i.property === "style" && typeof l == "string" && (l = Y8(l)),
        i.space && i.property ? (e[Bu.call(mh, i.property) ? mh[i.property] : i.property] = l) : i.attribute && (e[i.attribute] = l));
}
function Y8(e) {
    const t = {};
    try {
        $8(e, n);
    } catch {}
    return t;
    function n(r, i) {
        const l = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
        t[l.replace(/-([a-z])/g, X8)] = i;
    }
}
function X8(e, t) {
    return t.toUpperCase();
}
function Q8(e) {
    return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column].map(String).join("");
}
const kh = {}.hasOwnProperty,
    K8 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    Zi = {
        plugins: { to: "remarkPlugins", id: "change-plugins-to-remarkplugins" },
        renderers: { to: "components", id: "change-renderers-to-components" },
        astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
        allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
        escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
        source: { to: "children", id: "change-source-to-children" },
        allowNode: { to: "allowElement", id: "replace-allownode-allowedtypes-and-disallowedtypes" },
        allowedTypes: { to: "allowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes" },
        disallowedTypes: { to: "disallowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes" },
        includeNodeIndex: { to: "includeElementIndex", id: "change-includenodeindex-to-includeelementindex" },
    };
function mm(e) {
    for (const l in Zi)
        if (kh.call(Zi, l) && kh.call(e, l)) {
            const a = Zi[l];
            console.warn(`[react-markdown] Warning: please ${a.to ? `use \`${a.to}\` instead of` : "remove"} \`${l}\` (see <${K8}#${a.id}> for more info)`),
                delete Zi[l];
        }
    const t = a5()
            .use(p7)
            .use(e.remarkPlugins || [])
            .use(a8, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
            .use(e.rehypePlugins || [])
            .use(S8, e),
        n = new Ed();
    typeof e.children == "string"
        ? (n.value = e.children)
        : e.children !== void 0 &&
          e.children !== null &&
          console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
    const r = t.runSync(t.parse(n), n);
    if (r.type !== "root") throw new TypeError("Expected a `root` node");
    let i = st.createElement(st.Fragment, {}, dm({ options: e, schema: um, listDepth: 0 }, r));
    return e.className && (i = st.createElement("div", { className: e.className }, i)), i;
}
mm.propTypes = {
    children: le.string,
    className: le.string,
    allowElement: le.func,
    allowedElements: le.arrayOf(le.string),
    disallowedElements: le.arrayOf(le.string),
    unwrapDisallowed: le.bool,
    remarkPlugins: le.arrayOf(le.oneOfType([le.object, le.func, le.arrayOf(le.oneOfType([le.bool, le.string, le.object, le.func, le.arrayOf(le.any)]))])),
    rehypePlugins: le.arrayOf(le.oneOfType([le.object, le.func, le.arrayOf(le.oneOfType([le.bool, le.string, le.object, le.func, le.arrayOf(le.any)]))])),
    sourcePos: le.bool,
    rawSourcePos: le.bool,
    skipHtml: le.bool,
    includeElementIndex: le.bool,
    transformLinkUri: le.oneOfType([le.func, le.bool]),
    linkTarget: le.oneOfType([le.func, le.string]),
    transformImageUri: le.func,
    components: le.object,
};
const Z8 = { tokenize: J8, concrete: !0 },
    Sh = { tokenize: eg, partial: !0 };
function J8(e, t, n) {
    const r = this,
        i = r.events[r.events.length - 1],
        l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0;
    let a = 0;
    return o;
    function o(x) {
        return e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), u(x);
    }
    function u(x) {
        return x === 36 ? (e.consume(x), a++, u) : a < 2 ? n(x) : (e.exit("mathFlowFenceSequence"), ge(e, s, "whitespace")(x));
    }
    function s(x) {
        return x === null || Z(x) ? d(x) : (e.enter("mathFlowFenceMeta"), e.enter("chunkString", { contentType: "string" }), h(x));
    }
    function h(x) {
        return x === null || Z(x) ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), d(x)) : x === 36 ? n(x) : (e.consume(x), h);
    }
    function d(x) {
        return e.exit("mathFlowFence"), r.interrupt ? t(x) : e.attempt(Sh, p, N)(x);
    }
    function p(x) {
        return e.attempt({ tokenize: y, partial: !0 }, N, m)(x);
    }
    function m(x) {
        return (l ? ge(e, S, "linePrefix", l + 1) : S)(x);
    }
    function S(x) {
        return x === null ? N(x) : Z(x) ? e.attempt(Sh, p, N)(x) : (e.enter("mathFlowValue"), w(x));
    }
    function w(x) {
        return x === null || Z(x) ? (e.exit("mathFlowValue"), S(x)) : (e.consume(x), w);
    }
    function N(x) {
        return e.exit("mathFlow"), t(x);
    }
    function y(x, k, A) {
        let P = 0;
        return ge(x, T, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
        function T(R) {
            return x.enter("mathFlowFence"), x.enter("mathFlowFenceSequence"), F(R);
        }
        function F(R) {
            return R === 36 ? (P++, x.consume(R), F) : P < a ? A(R) : (x.exit("mathFlowFenceSequence"), ge(x, L, "whitespace")(R));
        }
        function L(R) {
            return R === null || Z(R) ? (x.exit("mathFlowFence"), k(R)) : A(R);
        }
    }
}
function eg(e, t, n) {
    const r = this;
    return i;
    function i(a) {
        return a === null ? t(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), l);
    }
    function l(a) {
        return r.parser.lazy[r.now().line] ? n(a) : t(a);
    }
}
function tg(e) {
    let n = (e || {}).singleDollarTextMath;
    return n == null && (n = !0), { tokenize: r, resolve: ng, previous: rg };
    function r(i, l, a) {
        let o = 0,
            u,
            s;
        return h;
        function h(w) {
            return i.enter("mathText"), i.enter("mathTextSequence"), d(w);
        }
        function d(w) {
            return w === 36 ? (i.consume(w), o++, d) : o < 2 && !n ? a(w) : (i.exit("mathTextSequence"), p(w));
        }
        function p(w) {
            return w === null
                ? a(w)
                : w === 36
                  ? ((s = i.enter("mathTextSequence")), (u = 0), S(w))
                  : w === 32
                    ? (i.enter("space"), i.consume(w), i.exit("space"), p)
                    : Z(w)
                      ? (i.enter("lineEnding"), i.consume(w), i.exit("lineEnding"), p)
                      : (i.enter("mathTextData"), m(w));
        }
        function m(w) {
            return w === null || w === 32 || w === 36 || Z(w) ? (i.exit("mathTextData"), p(w)) : (i.consume(w), m);
        }
        function S(w) {
            return w === 36 ? (i.consume(w), u++, S) : u === o ? (i.exit("mathTextSequence"), i.exit("mathText"), l(w)) : ((s.type = "mathTextData"), m(w));
        }
    }
}
function ng(e) {
    let t = e.length - 4,
        n = 3,
        r,
        i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (r = n; ++r < t; )
            if (e[r][1].type === "mathTextData") {
                (e[t][1].type = "mathTextPadding"), (e[n][1].type = "mathTextPadding"), (n += 2), (t -= 2);
                break;
            }
    }
    for (r = n - 1, t++; ++r <= t; )
        i === void 0
            ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
            : (r === t || e[r][1].type === "lineEnding") &&
              ((e[i][1].type = "mathTextData"),
              r !== i + 2 && ((e[i][1].end = e[r - 1][1].end), e.splice(i + 2, r - i - 2), (t -= r - i - 2), (r = i + 2)),
              (i = void 0));
    return e;
}
function rg(e) {
    return e !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ig(e) {
    return { flow: { 36: Z8 }, text: { 36: tg(e) } };
}
class Tt {
    constructor(t, n, r) {
        (this.lexer = void 0), (this.start = void 0), (this.end = void 0), (this.lexer = t), (this.start = n), (this.end = r);
    }
    static range(t, n) {
        return n ? (!t || !t.loc || !n.loc || t.loc.lexer !== n.loc.lexer ? null : new Tt(t.loc.lexer, t.loc.start, n.loc.end)) : t && t.loc;
    }
}
class _t {
    constructor(t, n) {
        (this.text = void 0), (this.loc = void 0), (this.noexpand = void 0), (this.treatAsRelax = void 0), (this.text = t), (this.loc = n);
    }
    range(t, n) {
        return new _t(n, Tt.range(this, t));
    }
}
class H {
    constructor(t, n) {
        (this.name = void 0), (this.position = void 0), (this.length = void 0), (this.rawMessage = void 0);
        var r = "KaTeX parse error: " + t,
            i,
            l,
            a = n && n.loc;
        if (a && a.start <= a.end) {
            var o = a.lexer.input;
            (i = a.start), (l = a.end), i === o.length ? (r += " at end of input: ") : (r += " at position " + (i + 1) + ": ");
            var u = o.slice(i, l).replace(/[^]/g, "$&̲"),
                s;
            i > 15 ? (s = "…" + o.slice(i - 15, i)) : (s = o.slice(0, i));
            var h;
            l + 15 < o.length ? (h = o.slice(l, l + 15) + "…") : (h = o.slice(l)), (r += s + u + h);
        }
        var d = new Error(r);
        return (d.name = "ParseError"), (d.__proto__ = H.prototype), (d.position = i), i != null && l != null && (d.length = l - i), (d.rawMessage = t), d;
    }
}
H.prototype.__proto__ = Error.prototype;
var lg = function (t, n) {
        return t.indexOf(n) !== -1;
    },
    ag = function (t, n) {
        return t === void 0 ? n : t;
    },
    og = /([A-Z])/g,
    ug = function (t) {
        return t.replace(og, "-$1").toLowerCase();
    },
    sg = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" },
    cg = /[&><"']/g;
function hg(e) {
    return String(e).replace(cg, t => sg[t]);
}
var pm = function e(t) {
        return t.type === "ordgroup" || t.type === "color" ? (t.body.length === 1 ? e(t.body[0]) : t) : t.type === "font" ? e(t.body) : t;
    },
    fg = function (t) {
        var n = pm(t);
        return n.type === "mathord" || n.type === "textord" || n.type === "atom";
    },
    dg = function (t) {
        if (!t) throw new Error("Expected non-null, but got " + String(t));
        return t;
    },
    mg = function (t) {
        var n = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
        return n ? (n[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1]) ? null : n[1].toLowerCase()) : "_relative";
    },
    J = { contains: lg, deflt: ag, escape: hg, hyphenate: ug, getBaseElem: pm, isCharacterBox: fg, protocolFromUrl: mg },
    Sl = {
        displayMode: {
            type: "boolean",
            description:
                "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
            cli: "-d, --display-mode",
        },
        output: {
            type: { enum: ["htmlAndMathml", "html", "mathml"] },
            description: "Determines the markup language of the output.",
            cli: "-F, --format <type>",
        },
        leqno: { type: "boolean", description: "Render display math in leqno style (left-justified tags)." },
        fleqn: { type: "boolean", description: "Render display math flush left." },
        throwOnError: {
            type: "boolean",
            default: !0,
            cli: "-t, --no-throw-on-error",
            cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.",
        },
        errorColor: {
            type: "string",
            default: "#cc0000",
            cli: "-c, --error-color <color>",
            cliDescription:
                "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
            cliProcessor: e => "#" + e,
        },
        macros: {
            type: "object",
            cli: "-m, --macro <def>",
            cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
            cliDefault: [],
            cliProcessor: (e, t) => (t.push(e), t),
        },
        minRuleThickness: {
            type: "number",
            description:
                "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
            processor: e => Math.max(0, e),
            cli: "--min-rule-thickness <size>",
            cliProcessor: parseFloat,
        },
        colorIsTextColor: {
            type: "boolean",
            description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
            cli: "-b, --color-is-text-color",
        },
        strict: {
            type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"],
            description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
            cli: "-S, --strict",
            cliDefault: !1,
        },
        trust: { type: ["boolean", "function"], description: "Trust the input, enabling all HTML features such as \\url.", cli: "-T, --trust" },
        maxSize: {
            type: "number",
            default: 1 / 0,
            description:
                "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
            processor: e => Math.max(0, e),
            cli: "-s, --max-size <n>",
            cliProcessor: parseInt,
        },
        maxExpand: {
            type: "number",
            default: 1e3,
            description:
                "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
            processor: e => Math.max(0, e),
            cli: "-e, --max-expand <n>",
            cliProcessor: e => (e === "Infinity" ? 1 / 0 : parseInt(e)),
        },
        globalGroup: { type: "boolean", cli: !1 },
    };
function pg(e) {
    if (e.default) return e.default;
    var t = e.type,
        n = Array.isArray(t) ? t[0] : t;
    if (typeof n != "string") return n.enum[0];
    switch (n) {
        case "boolean":
            return !1;
        case "string":
            return "";
        case "number":
            return 0;
        case "object":
            return {};
    }
}
class t1 {
    constructor(t) {
        (this.displayMode = void 0),
            (this.output = void 0),
            (this.leqno = void 0),
            (this.fleqn = void 0),
            (this.throwOnError = void 0),
            (this.errorColor = void 0),
            (this.macros = void 0),
            (this.minRuleThickness = void 0),
            (this.colorIsTextColor = void 0),
            (this.strict = void 0),
            (this.trust = void 0),
            (this.maxSize = void 0),
            (this.maxExpand = void 0),
            (this.globalGroup = void 0),
            (t = t || {});
        for (var n in Sl)
            if (Sl.hasOwnProperty(n)) {
                var r = Sl[n];
                this[n] = t[n] !== void 0 ? (r.processor ? r.processor(t[n]) : t[n]) : pg(r);
            }
    }
    reportNonstrict(t, n, r) {
        var i = this.strict;
        if ((typeof i == "function" && (i = i(t, n, r)), !(!i || i === "ignore"))) {
            if (i === !0 || i === "error") throw new H("LaTeX-incompatible input and strict mode is set to 'error': " + (n + " [" + t + "]"), r);
            i === "warn"
                ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (n + " [" + t + "]"))
                : typeof console < "u" &&
                  console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + n + " [" + t + "]"));
        }
    }
    useStrictBehavior(t, n, r) {
        var i = this.strict;
        if (typeof i == "function")
            try {
                i = i(t, n, r);
            } catch {
                i = "error";
            }
        return !i || i === "ignore"
            ? !1
            : i === !0 || i === "error"
              ? !0
              : i === "warn"
                ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (n + " [" + t + "]")), !1)
                : (typeof console < "u" &&
                      console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + n + " [" + t + "]")),
                  !1);
    }
    isTrusted(t) {
        if (t.url && !t.protocol) {
            var n = J.protocolFromUrl(t.url);
            if (n == null) return !1;
            t.protocol = n;
        }
        var r = typeof this.trust == "function" ? this.trust(t) : this.trust;
        return !!r;
    }
}
class jn {
    constructor(t, n, r) {
        (this.id = void 0), (this.size = void 0), (this.cramped = void 0), (this.id = t), (this.size = n), (this.cramped = r);
    }
    sup() {
        return cn[gg[this.id]];
    }
    sub() {
        return cn[vg[this.id]];
    }
    fracNum() {
        return cn[yg[this.id]];
    }
    fracDen() {
        return cn[xg[this.id]];
    }
    cramp() {
        return cn[wg[this.id]];
    }
    text() {
        return cn[kg[this.id]];
    }
    isTight() {
        return this.size >= 2;
    }
}
var n1 = 0,
    Xl = 1,
    u0 = 2,
    Nn = 3,
    wi = 4,
    Ht = 5,
    g0 = 6,
    ct = 7,
    cn = [
        new jn(n1, 0, !1),
        new jn(Xl, 0, !0),
        new jn(u0, 1, !1),
        new jn(Nn, 1, !0),
        new jn(wi, 2, !1),
        new jn(Ht, 2, !0),
        new jn(g0, 3, !1),
        new jn(ct, 3, !0),
    ],
    gg = [wi, Ht, wi, Ht, g0, ct, g0, ct],
    vg = [Ht, Ht, Ht, Ht, ct, ct, ct, ct],
    yg = [u0, Nn, wi, Ht, g0, ct, g0, ct],
    xg = [Nn, Nn, Ht, Ht, ct, ct, ct, ct],
    wg = [Xl, Xl, Nn, Nn, Ht, Ht, ct, ct],
    kg = [n1, Xl, u0, Nn, u0, Nn, u0, Nn],
    te = { DISPLAY: cn[n1], TEXT: cn[u0], SCRIPT: cn[wi], SCRIPTSCRIPT: cn[g0] },
    Ou = [
        {
            name: "latin",
            blocks: [
                [256, 591],
                [768, 879],
            ],
        },
        { name: "cyrillic", blocks: [[1024, 1279]] },
        { name: "armenian", blocks: [[1328, 1423]] },
        { name: "brahmic", blocks: [[2304, 4255]] },
        { name: "georgian", blocks: [[4256, 4351]] },
        {
            name: "cjk",
            blocks: [
                [12288, 12543],
                [19968, 40879],
                [65280, 65376],
            ],
        },
        { name: "hangul", blocks: [[44032, 55215]] },
    ];
function Sg(e) {
    for (var t = 0; t < Ou.length; t++)
        for (var n = Ou[t], r = 0; r < n.blocks.length; r++) {
            var i = n.blocks[r];
            if (e >= i[0] && e <= i[1]) return n.name;
        }
    return null;
}
var bl = [];
Ou.forEach(e => e.blocks.forEach(t => bl.push(...t)));
function gm(e) {
    for (var t = 0; t < bl.length; t += 2) if (e >= bl[t] && e <= bl[t + 1]) return !0;
    return !1;
}
var _r = 80,
    bg = function (t, n) {
        return (
            "M95," +
            (622 + t + n) +
            `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` +
            t / 2.075 +
            " -" +
            t +
            `
c5.3,-9.3,12,-14,20,-14
H400000v` +
            (40 + t) +
            `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` +
            (834 + t) +
            " " +
            n +
            "h400000v" +
            (40 + t) +
            "h-400000z"
        );
    },
    Cg = function (t, n) {
        return (
            "M263," +
            (601 + t + n) +
            `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` +
            t / 2.084 +
            " -" +
            t +
            `
c4.7,-7.3,11,-11,19,-11
H40000v` +
            (40 + t) +
            `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` +
            (1001 + t) +
            " " +
            n +
            "h400000v" +
            (40 + t) +
            "h-400000z"
        );
    },
    zg = function (t, n) {
        return (
            "M983 " +
            (10 + t + n) +
            `
l` +
            t / 3.13 +
            " -" +
            t +
            `
c4,-6.7,10,-10,18,-10 H400000v` +
            (40 + t) +
            `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` +
            (1001 + t) +
            " " +
            n +
            "h400000v" +
            (40 + t) +
            "h-400000z"
        );
    },
    Tg = function (t, n) {
        return (
            "M424," +
            (2398 + t + n) +
            `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` +
            t / 4.223 +
            " -" +
            t +
            `c4,-6.7,10,-10,18,-10 H400000
v` +
            (40 + t) +
            `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` +
            (1001 + t) +
            " " +
            n +
            `
h400000v` +
            (40 + t) +
            "h-400000z"
        );
    },
    Eg = function (t, n) {
        return (
            "M473," +
            (2713 + t + n) +
            `
c339.3,-1799.3,509.3,-2700,510,-2702 l` +
            t / 5.298 +
            " -" +
            t +
            `
c3.3,-7.3,9.3,-11,18,-11 H400000v` +
            (40 + t) +
            `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` +
            (1001 + t) +
            " " +
            n +
            "h400000v" +
            (40 + t) +
            "H1017.7z"
        );
    },
    Mg = function (t) {
        var n = t / 2;
        return "M400000 " + t + " H0 L" + n + " 0 l65 45 L145 " + (t - 80) + " H400000z";
    },
    Ag = function (t, n, r) {
        var i = r - 54 - n - t;
        return (
            "M702 " +
            (t + n) +
            "H400000" +
            (40 + t) +
            `
H742v` +
            i +
            `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` +
            n +
            "H400000v" +
            (40 + t) +
            "H742z"
        );
    },
    Ng = function (t, n, r) {
        n = 1e3 * n;
        var i = "";
        switch (t) {
            case "sqrtMain":
                i = bg(n, _r);
                break;
            case "sqrtSize1":
                i = Cg(n, _r);
                break;
            case "sqrtSize2":
                i = zg(n, _r);
                break;
            case "sqrtSize3":
                i = Tg(n, _r);
                break;
            case "sqrtSize4":
                i = Eg(n, _r);
                break;
            case "sqrtTall":
                i = Ag(n, _r, r);
        }
        return i;
    },
    Dg = function (t, n) {
        switch (t) {
            case "⎜":
                return "M291 0 H417 V" + n + " H291z M291 0 H417 V" + n + " H291z";
            case "∣":
                return "M145 0 H188 V" + n + " H145z M145 0 H188 V" + n + " H145z";
            case "∥":
                return "M145 0 H188 V" + n + " H145z M145 0 H188 V" + n + " H145z" + ("M367 0 H410 V" + n + " H367z M367 0 H410 V" + n + " H367z");
            case "⎟":
                return "M457 0 H583 V" + n + " H457z M457 0 H583 V" + n + " H457z";
            case "⎢":
                return "M319 0 H403 V" + n + " H319z M319 0 H403 V" + n + " H319z";
            case "⎥":
                return "M263 0 H347 V" + n + " H263z M263 0 H347 V" + n + " H263z";
            case "⎪":
                return "M384 0 H504 V" + n + " H384z M384 0 H504 V" + n + " H384z";
            case "⏐":
                return "M312 0 H355 V" + n + " H312z M312 0 H355 V" + n + " H312z";
            case "‖":
                return "M257 0 H300 V" + n + " H257z M257 0 H300 V" + n + " H257z" + ("M478 0 H521 V" + n + " H478z M478 0 H521 V" + n + " H478z");
            default:
                return "";
        }
    },
    bh = {
        doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
        doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
        leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
        leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
        leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
        leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
        leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
        leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
        leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
        leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
        leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
        lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
        leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
        leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
        leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
        longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
        midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
        midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
        oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
        oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
        oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
        oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
        rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
        rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
        rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
        rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
        rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
        rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
        rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
        rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
        rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
        righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
        rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
        rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
        twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
        twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
        tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
        tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
        tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
        tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
        vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
        widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
        widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
        widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
        widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
        widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
        widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
        widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
        widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
        baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
        rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
        baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
        rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
        shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
        shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`,
    },
    Fg = function (t, n) {
        switch (t) {
            case "lbrack":
                return (
                    "M403 1759 V84 H666 V0 H319 V1759 v" +
                    n +
                    ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` +
                    n +
                    " v1759 h84z"
                );
            case "rbrack":
                return (
                    "M347 1759 V0 H0 V84 H263 V1759 v" +
                    n +
                    ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` +
                    n +
                    " v1759 h84z"
                );
            case "vert":
                return (
                    "M145 15 v585 v" +
                    n +
                    ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
                    -n +
                    ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
                    n +
                    " v585 h43z"
                );
            case "doublevert":
                return (
                    "M145 15 v585 v" +
                    n +
                    ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
                    -n +
                    ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
                    n +
                    ` v585 h43z
M367 15 v585 v` +
                    n +
                    ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
                    -n +
                    ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` +
                    n +
                    " v585 h43z"
                );
            case "lfloor":
                return (
                    "M319 602 V0 H403 V602 v" +
                    n +
                    ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` +
                    n +
                    " v1715 H319z"
                );
            case "rfloor":
                return (
                    "M319 602 V0 H403 V602 v" +
                    n +
                    ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` +
                    n +
                    " v1715 H319z"
                );
            case "lceil":
                return (
                    "M403 1759 V84 H666 V0 H319 V1759 v" +
                    n +
                    ` v602 h84z
M403 1759 V0 H319 V1759 v` +
                    n +
                    " v602 h84z"
                );
            case "rceil":
                return (
                    "M347 1759 V0 H0 V84 H263 V1759 v" +
                    n +
                    ` v602 h84z
M347 1759 V0 h-84 V1759 v` +
                    n +
                    " v602 h84z"
                );
            case "lparen":
                return (
                    `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` +
                    (n + 84) +
                    `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` +
                    (n + 92) +
                    `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`
                );
            case "rparen":
                return (
                    `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` +
                    (n + 9) +
                    `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` +
                    (n + 144) +
                    `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`
                );
            default:
                throw new Error("Unknown stretchy delimiter.");
        }
    };
class Ai {
    constructor(t) {
        (this.children = void 0),
            (this.classes = void 0),
            (this.height = void 0),
            (this.depth = void 0),
            (this.maxFontSize = void 0),
            (this.style = void 0),
            (this.children = t),
            (this.classes = []),
            (this.height = 0),
            (this.depth = 0),
            (this.maxFontSize = 0),
            (this.style = {});
    }
    hasClass(t) {
        return J.contains(this.classes, t);
    }
    toNode() {
        for (var t = document.createDocumentFragment(), n = 0; n < this.children.length; n++) t.appendChild(this.children[n].toNode());
        return t;
    }
    toMarkup() {
        for (var t = "", n = 0; n < this.children.length; n++) t += this.children[n].toMarkup();
        return t;
    }
    toText() {
        var t = n => n.toText();
        return this.children.map(t).join("");
    }
}
var dn = {
        "AMS-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.68889, 0, 0, 0.72222],
            66: [0, 0.68889, 0, 0, 0.66667],
            67: [0, 0.68889, 0, 0, 0.72222],
            68: [0, 0.68889, 0, 0, 0.72222],
            69: [0, 0.68889, 0, 0, 0.66667],
            70: [0, 0.68889, 0, 0, 0.61111],
            71: [0, 0.68889, 0, 0, 0.77778],
            72: [0, 0.68889, 0, 0, 0.77778],
            73: [0, 0.68889, 0, 0, 0.38889],
            74: [0.16667, 0.68889, 0, 0, 0.5],
            75: [0, 0.68889, 0, 0, 0.77778],
            76: [0, 0.68889, 0, 0, 0.66667],
            77: [0, 0.68889, 0, 0, 0.94445],
            78: [0, 0.68889, 0, 0, 0.72222],
            79: [0.16667, 0.68889, 0, 0, 0.77778],
            80: [0, 0.68889, 0, 0, 0.61111],
            81: [0.16667, 0.68889, 0, 0, 0.77778],
            82: [0, 0.68889, 0, 0, 0.72222],
            83: [0, 0.68889, 0, 0, 0.55556],
            84: [0, 0.68889, 0, 0, 0.66667],
            85: [0, 0.68889, 0, 0, 0.72222],
            86: [0, 0.68889, 0, 0, 0.72222],
            87: [0, 0.68889, 0, 0, 1],
            88: [0, 0.68889, 0, 0, 0.72222],
            89: [0, 0.68889, 0, 0, 0.72222],
            90: [0, 0.68889, 0, 0, 0.66667],
            107: [0, 0.68889, 0, 0, 0.55556],
            160: [0, 0, 0, 0, 0.25],
            165: [0, 0.675, 0.025, 0, 0.75],
            174: [0.15559, 0.69224, 0, 0, 0.94666],
            240: [0, 0.68889, 0, 0, 0.55556],
            295: [0, 0.68889, 0, 0, 0.54028],
            710: [0, 0.825, 0, 0, 2.33334],
            732: [0, 0.9, 0, 0, 2.33334],
            770: [0, 0.825, 0, 0, 2.33334],
            771: [0, 0.9, 0, 0, 2.33334],
            989: [0.08167, 0.58167, 0, 0, 0.77778],
            1008: [0, 0.43056, 0.04028, 0, 0.66667],
            8245: [0, 0.54986, 0, 0, 0.275],
            8463: [0, 0.68889, 0, 0, 0.54028],
            8487: [0, 0.68889, 0, 0, 0.72222],
            8498: [0, 0.68889, 0, 0, 0.55556],
            8502: [0, 0.68889, 0, 0, 0.66667],
            8503: [0, 0.68889, 0, 0, 0.44445],
            8504: [0, 0.68889, 0, 0, 0.66667],
            8513: [0, 0.68889, 0, 0, 0.63889],
            8592: [-0.03598, 0.46402, 0, 0, 0.5],
            8594: [-0.03598, 0.46402, 0, 0, 0.5],
            8602: [-0.13313, 0.36687, 0, 0, 1],
            8603: [-0.13313, 0.36687, 0, 0, 1],
            8606: [0.01354, 0.52239, 0, 0, 1],
            8608: [0.01354, 0.52239, 0, 0, 1],
            8610: [0.01354, 0.52239, 0, 0, 1.11111],
            8611: [0.01354, 0.52239, 0, 0, 1.11111],
            8619: [0, 0.54986, 0, 0, 1],
            8620: [0, 0.54986, 0, 0, 1],
            8621: [-0.13313, 0.37788, 0, 0, 1.38889],
            8622: [-0.13313, 0.36687, 0, 0, 1],
            8624: [0, 0.69224, 0, 0, 0.5],
            8625: [0, 0.69224, 0, 0, 0.5],
            8630: [0, 0.43056, 0, 0, 1],
            8631: [0, 0.43056, 0, 0, 1],
            8634: [0.08198, 0.58198, 0, 0, 0.77778],
            8635: [0.08198, 0.58198, 0, 0, 0.77778],
            8638: [0.19444, 0.69224, 0, 0, 0.41667],
            8639: [0.19444, 0.69224, 0, 0, 0.41667],
            8642: [0.19444, 0.69224, 0, 0, 0.41667],
            8643: [0.19444, 0.69224, 0, 0, 0.41667],
            8644: [0.1808, 0.675, 0, 0, 1],
            8646: [0.1808, 0.675, 0, 0, 1],
            8647: [0.1808, 0.675, 0, 0, 1],
            8648: [0.19444, 0.69224, 0, 0, 0.83334],
            8649: [0.1808, 0.675, 0, 0, 1],
            8650: [0.19444, 0.69224, 0, 0, 0.83334],
            8651: [0.01354, 0.52239, 0, 0, 1],
            8652: [0.01354, 0.52239, 0, 0, 1],
            8653: [-0.13313, 0.36687, 0, 0, 1],
            8654: [-0.13313, 0.36687, 0, 0, 1],
            8655: [-0.13313, 0.36687, 0, 0, 1],
            8666: [0.13667, 0.63667, 0, 0, 1],
            8667: [0.13667, 0.63667, 0, 0, 1],
            8669: [-0.13313, 0.37788, 0, 0, 1],
            8672: [-0.064, 0.437, 0, 0, 1.334],
            8674: [-0.064, 0.437, 0, 0, 1.334],
            8705: [0, 0.825, 0, 0, 0.5],
            8708: [0, 0.68889, 0, 0, 0.55556],
            8709: [0.08167, 0.58167, 0, 0, 0.77778],
            8717: [0, 0.43056, 0, 0, 0.42917],
            8722: [-0.03598, 0.46402, 0, 0, 0.5],
            8724: [0.08198, 0.69224, 0, 0, 0.77778],
            8726: [0.08167, 0.58167, 0, 0, 0.77778],
            8733: [0, 0.69224, 0, 0, 0.77778],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8737: [0, 0.69224, 0, 0, 0.72222],
            8738: [0.03517, 0.52239, 0, 0, 0.72222],
            8739: [0.08167, 0.58167, 0, 0, 0.22222],
            8740: [0.25142, 0.74111, 0, 0, 0.27778],
            8741: [0.08167, 0.58167, 0, 0, 0.38889],
            8742: [0.25142, 0.74111, 0, 0, 0.5],
            8756: [0, 0.69224, 0, 0, 0.66667],
            8757: [0, 0.69224, 0, 0, 0.66667],
            8764: [-0.13313, 0.36687, 0, 0, 0.77778],
            8765: [-0.13313, 0.37788, 0, 0, 0.77778],
            8769: [-0.13313, 0.36687, 0, 0, 0.77778],
            8770: [-0.03625, 0.46375, 0, 0, 0.77778],
            8774: [0.30274, 0.79383, 0, 0, 0.77778],
            8776: [-0.01688, 0.48312, 0, 0, 0.77778],
            8778: [0.08167, 0.58167, 0, 0, 0.77778],
            8782: [0.06062, 0.54986, 0, 0, 0.77778],
            8783: [0.06062, 0.54986, 0, 0, 0.77778],
            8785: [0.08198, 0.58198, 0, 0, 0.77778],
            8786: [0.08198, 0.58198, 0, 0, 0.77778],
            8787: [0.08198, 0.58198, 0, 0, 0.77778],
            8790: [0, 0.69224, 0, 0, 0.77778],
            8791: [0.22958, 0.72958, 0, 0, 0.77778],
            8796: [0.08198, 0.91667, 0, 0, 0.77778],
            8806: [0.25583, 0.75583, 0, 0, 0.77778],
            8807: [0.25583, 0.75583, 0, 0, 0.77778],
            8808: [0.25142, 0.75726, 0, 0, 0.77778],
            8809: [0.25142, 0.75726, 0, 0, 0.77778],
            8812: [0.25583, 0.75583, 0, 0, 0.5],
            8814: [0.20576, 0.70576, 0, 0, 0.77778],
            8815: [0.20576, 0.70576, 0, 0, 0.77778],
            8816: [0.30274, 0.79383, 0, 0, 0.77778],
            8817: [0.30274, 0.79383, 0, 0, 0.77778],
            8818: [0.22958, 0.72958, 0, 0, 0.77778],
            8819: [0.22958, 0.72958, 0, 0, 0.77778],
            8822: [0.1808, 0.675, 0, 0, 0.77778],
            8823: [0.1808, 0.675, 0, 0, 0.77778],
            8828: [0.13667, 0.63667, 0, 0, 0.77778],
            8829: [0.13667, 0.63667, 0, 0, 0.77778],
            8830: [0.22958, 0.72958, 0, 0, 0.77778],
            8831: [0.22958, 0.72958, 0, 0, 0.77778],
            8832: [0.20576, 0.70576, 0, 0, 0.77778],
            8833: [0.20576, 0.70576, 0, 0, 0.77778],
            8840: [0.30274, 0.79383, 0, 0, 0.77778],
            8841: [0.30274, 0.79383, 0, 0, 0.77778],
            8842: [0.13597, 0.63597, 0, 0, 0.77778],
            8843: [0.13597, 0.63597, 0, 0, 0.77778],
            8847: [0.03517, 0.54986, 0, 0, 0.77778],
            8848: [0.03517, 0.54986, 0, 0, 0.77778],
            8858: [0.08198, 0.58198, 0, 0, 0.77778],
            8859: [0.08198, 0.58198, 0, 0, 0.77778],
            8861: [0.08198, 0.58198, 0, 0, 0.77778],
            8862: [0, 0.675, 0, 0, 0.77778],
            8863: [0, 0.675, 0, 0, 0.77778],
            8864: [0, 0.675, 0, 0, 0.77778],
            8865: [0, 0.675, 0, 0, 0.77778],
            8872: [0, 0.69224, 0, 0, 0.61111],
            8873: [0, 0.69224, 0, 0, 0.72222],
            8874: [0, 0.69224, 0, 0, 0.88889],
            8876: [0, 0.68889, 0, 0, 0.61111],
            8877: [0, 0.68889, 0, 0, 0.61111],
            8878: [0, 0.68889, 0, 0, 0.72222],
            8879: [0, 0.68889, 0, 0, 0.72222],
            8882: [0.03517, 0.54986, 0, 0, 0.77778],
            8883: [0.03517, 0.54986, 0, 0, 0.77778],
            8884: [0.13667, 0.63667, 0, 0, 0.77778],
            8885: [0.13667, 0.63667, 0, 0, 0.77778],
            8888: [0, 0.54986, 0, 0, 1.11111],
            8890: [0.19444, 0.43056, 0, 0, 0.55556],
            8891: [0.19444, 0.69224, 0, 0, 0.61111],
            8892: [0.19444, 0.69224, 0, 0, 0.61111],
            8901: [0, 0.54986, 0, 0, 0.27778],
            8903: [0.08167, 0.58167, 0, 0, 0.77778],
            8905: [0.08167, 0.58167, 0, 0, 0.77778],
            8906: [0.08167, 0.58167, 0, 0, 0.77778],
            8907: [0, 0.69224, 0, 0, 0.77778],
            8908: [0, 0.69224, 0, 0, 0.77778],
            8909: [-0.03598, 0.46402, 0, 0, 0.77778],
            8910: [0, 0.54986, 0, 0, 0.76042],
            8911: [0, 0.54986, 0, 0, 0.76042],
            8912: [0.03517, 0.54986, 0, 0, 0.77778],
            8913: [0.03517, 0.54986, 0, 0, 0.77778],
            8914: [0, 0.54986, 0, 0, 0.66667],
            8915: [0, 0.54986, 0, 0, 0.66667],
            8916: [0, 0.69224, 0, 0, 0.66667],
            8918: [0.0391, 0.5391, 0, 0, 0.77778],
            8919: [0.0391, 0.5391, 0, 0, 0.77778],
            8920: [0.03517, 0.54986, 0, 0, 1.33334],
            8921: [0.03517, 0.54986, 0, 0, 1.33334],
            8922: [0.38569, 0.88569, 0, 0, 0.77778],
            8923: [0.38569, 0.88569, 0, 0, 0.77778],
            8926: [0.13667, 0.63667, 0, 0, 0.77778],
            8927: [0.13667, 0.63667, 0, 0, 0.77778],
            8928: [0.30274, 0.79383, 0, 0, 0.77778],
            8929: [0.30274, 0.79383, 0, 0, 0.77778],
            8934: [0.23222, 0.74111, 0, 0, 0.77778],
            8935: [0.23222, 0.74111, 0, 0, 0.77778],
            8936: [0.23222, 0.74111, 0, 0, 0.77778],
            8937: [0.23222, 0.74111, 0, 0, 0.77778],
            8938: [0.20576, 0.70576, 0, 0, 0.77778],
            8939: [0.20576, 0.70576, 0, 0, 0.77778],
            8940: [0.30274, 0.79383, 0, 0, 0.77778],
            8941: [0.30274, 0.79383, 0, 0, 0.77778],
            8994: [0.19444, 0.69224, 0, 0, 0.77778],
            8995: [0.19444, 0.69224, 0, 0, 0.77778],
            9416: [0.15559, 0.69224, 0, 0, 0.90222],
            9484: [0, 0.69224, 0, 0, 0.5],
            9488: [0, 0.69224, 0, 0, 0.5],
            9492: [0, 0.37788, 0, 0, 0.5],
            9496: [0, 0.37788, 0, 0, 0.5],
            9585: [0.19444, 0.68889, 0, 0, 0.88889],
            9586: [0.19444, 0.74111, 0, 0, 0.88889],
            9632: [0, 0.675, 0, 0, 0.77778],
            9633: [0, 0.675, 0, 0, 0.77778],
            9650: [0, 0.54986, 0, 0, 0.72222],
            9651: [0, 0.54986, 0, 0, 0.72222],
            9654: [0.03517, 0.54986, 0, 0, 0.77778],
            9660: [0, 0.54986, 0, 0, 0.72222],
            9661: [0, 0.54986, 0, 0, 0.72222],
            9664: [0.03517, 0.54986, 0, 0, 0.77778],
            9674: [0.11111, 0.69224, 0, 0, 0.66667],
            9733: [0.19444, 0.69224, 0, 0, 0.94445],
            10003: [0, 0.69224, 0, 0, 0.83334],
            10016: [0, 0.69224, 0, 0, 0.83334],
            10731: [0.11111, 0.69224, 0, 0, 0.66667],
            10846: [0.19444, 0.75583, 0, 0, 0.61111],
            10877: [0.13667, 0.63667, 0, 0, 0.77778],
            10878: [0.13667, 0.63667, 0, 0, 0.77778],
            10885: [0.25583, 0.75583, 0, 0, 0.77778],
            10886: [0.25583, 0.75583, 0, 0, 0.77778],
            10887: [0.13597, 0.63597, 0, 0, 0.77778],
            10888: [0.13597, 0.63597, 0, 0, 0.77778],
            10889: [0.26167, 0.75726, 0, 0, 0.77778],
            10890: [0.26167, 0.75726, 0, 0, 0.77778],
            10891: [0.48256, 0.98256, 0, 0, 0.77778],
            10892: [0.48256, 0.98256, 0, 0, 0.77778],
            10901: [0.13667, 0.63667, 0, 0, 0.77778],
            10902: [0.13667, 0.63667, 0, 0, 0.77778],
            10933: [0.25142, 0.75726, 0, 0, 0.77778],
            10934: [0.25142, 0.75726, 0, 0, 0.77778],
            10935: [0.26167, 0.75726, 0, 0, 0.77778],
            10936: [0.26167, 0.75726, 0, 0, 0.77778],
            10937: [0.26167, 0.75726, 0, 0, 0.77778],
            10938: [0.26167, 0.75726, 0, 0, 0.77778],
            10949: [0.25583, 0.75583, 0, 0, 0.77778],
            10950: [0.25583, 0.75583, 0, 0, 0.77778],
            10955: [0.28481, 0.79383, 0, 0, 0.77778],
            10956: [0.28481, 0.79383, 0, 0, 0.77778],
            57350: [0.08167, 0.58167, 0, 0, 0.22222],
            57351: [0.08167, 0.58167, 0, 0, 0.38889],
            57352: [0.08167, 0.58167, 0, 0, 0.77778],
            57353: [0, 0.43056, 0.04028, 0, 0.66667],
            57356: [0.25142, 0.75726, 0, 0, 0.77778],
            57357: [0.25142, 0.75726, 0, 0, 0.77778],
            57358: [0.41951, 0.91951, 0, 0, 0.77778],
            57359: [0.30274, 0.79383, 0, 0, 0.77778],
            57360: [0.30274, 0.79383, 0, 0, 0.77778],
            57361: [0.41951, 0.91951, 0, 0, 0.77778],
            57366: [0.25142, 0.75726, 0, 0, 0.77778],
            57367: [0.25142, 0.75726, 0, 0, 0.77778],
            57368: [0.25142, 0.75726, 0, 0, 0.77778],
            57369: [0.25142, 0.75726, 0, 0, 0.77778],
            57370: [0.13597, 0.63597, 0, 0, 0.77778],
            57371: [0.13597, 0.63597, 0, 0, 0.77778],
        },
        "Caligraphic-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.68333, 0, 0.19445, 0.79847],
            66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
            67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
            68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
            69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
            70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
            71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
            72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
            73: [0, 0.68333, 0.07382, 0, 0.54452],
            74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
            75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
            76: [0, 0.68333, 0, 0.13889, 0.68972],
            77: [0, 0.68333, 0, 0.13889, 1.2009],
            78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
            79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
            80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
            81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
            82: [0, 0.68333, 0, 0.08334, 0.8475],
            83: [0, 0.68333, 0.075, 0.13889, 0.60556],
            84: [0, 0.68333, 0.25417, 0, 0.54464],
            85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
            86: [0, 0.68333, 0.08222, 0, 0.61278],
            87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
            88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
            89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
            90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
            160: [0, 0, 0, 0, 0.25],
        },
        "Fraktur-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69141, 0, 0, 0.29574],
            34: [0, 0.69141, 0, 0, 0.21471],
            38: [0, 0.69141, 0, 0, 0.73786],
            39: [0, 0.69141, 0, 0, 0.21201],
            40: [0.24982, 0.74947, 0, 0, 0.38865],
            41: [0.24982, 0.74947, 0, 0, 0.38865],
            42: [0, 0.62119, 0, 0, 0.27764],
            43: [0.08319, 0.58283, 0, 0, 0.75623],
            44: [0, 0.10803, 0, 0, 0.27764],
            45: [0.08319, 0.58283, 0, 0, 0.75623],
            46: [0, 0.10803, 0, 0, 0.27764],
            47: [0.24982, 0.74947, 0, 0, 0.50181],
            48: [0, 0.47534, 0, 0, 0.50181],
            49: [0, 0.47534, 0, 0, 0.50181],
            50: [0, 0.47534, 0, 0, 0.50181],
            51: [0.18906, 0.47534, 0, 0, 0.50181],
            52: [0.18906, 0.47534, 0, 0, 0.50181],
            53: [0.18906, 0.47534, 0, 0, 0.50181],
            54: [0, 0.69141, 0, 0, 0.50181],
            55: [0.18906, 0.47534, 0, 0, 0.50181],
            56: [0, 0.69141, 0, 0, 0.50181],
            57: [0.18906, 0.47534, 0, 0, 0.50181],
            58: [0, 0.47534, 0, 0, 0.21606],
            59: [0.12604, 0.47534, 0, 0, 0.21606],
            61: [-0.13099, 0.36866, 0, 0, 0.75623],
            63: [0, 0.69141, 0, 0, 0.36245],
            65: [0, 0.69141, 0, 0, 0.7176],
            66: [0, 0.69141, 0, 0, 0.88397],
            67: [0, 0.69141, 0, 0, 0.61254],
            68: [0, 0.69141, 0, 0, 0.83158],
            69: [0, 0.69141, 0, 0, 0.66278],
            70: [0.12604, 0.69141, 0, 0, 0.61119],
            71: [0, 0.69141, 0, 0, 0.78539],
            72: [0.06302, 0.69141, 0, 0, 0.7203],
            73: [0, 0.69141, 0, 0, 0.55448],
            74: [0.12604, 0.69141, 0, 0, 0.55231],
            75: [0, 0.69141, 0, 0, 0.66845],
            76: [0, 0.69141, 0, 0, 0.66602],
            77: [0, 0.69141, 0, 0, 1.04953],
            78: [0, 0.69141, 0, 0, 0.83212],
            79: [0, 0.69141, 0, 0, 0.82699],
            80: [0.18906, 0.69141, 0, 0, 0.82753],
            81: [0.03781, 0.69141, 0, 0, 0.82699],
            82: [0, 0.69141, 0, 0, 0.82807],
            83: [0, 0.69141, 0, 0, 0.82861],
            84: [0, 0.69141, 0, 0, 0.66899],
            85: [0, 0.69141, 0, 0, 0.64576],
            86: [0, 0.69141, 0, 0, 0.83131],
            87: [0, 0.69141, 0, 0, 1.04602],
            88: [0, 0.69141, 0, 0, 0.71922],
            89: [0.18906, 0.69141, 0, 0, 0.83293],
            90: [0.12604, 0.69141, 0, 0, 0.60201],
            91: [0.24982, 0.74947, 0, 0, 0.27764],
            93: [0.24982, 0.74947, 0, 0, 0.27764],
            94: [0, 0.69141, 0, 0, 0.49965],
            97: [0, 0.47534, 0, 0, 0.50046],
            98: [0, 0.69141, 0, 0, 0.51315],
            99: [0, 0.47534, 0, 0, 0.38946],
            100: [0, 0.62119, 0, 0, 0.49857],
            101: [0, 0.47534, 0, 0, 0.40053],
            102: [0.18906, 0.69141, 0, 0, 0.32626],
            103: [0.18906, 0.47534, 0, 0, 0.5037],
            104: [0.18906, 0.69141, 0, 0, 0.52126],
            105: [0, 0.69141, 0, 0, 0.27899],
            106: [0, 0.69141, 0, 0, 0.28088],
            107: [0, 0.69141, 0, 0, 0.38946],
            108: [0, 0.69141, 0, 0, 0.27953],
            109: [0, 0.47534, 0, 0, 0.76676],
            110: [0, 0.47534, 0, 0, 0.52666],
            111: [0, 0.47534, 0, 0, 0.48885],
            112: [0.18906, 0.52396, 0, 0, 0.50046],
            113: [0.18906, 0.47534, 0, 0, 0.48912],
            114: [0, 0.47534, 0, 0, 0.38919],
            115: [0, 0.47534, 0, 0, 0.44266],
            116: [0, 0.62119, 0, 0, 0.33301],
            117: [0, 0.47534, 0, 0, 0.5172],
            118: [0, 0.52396, 0, 0, 0.5118],
            119: [0, 0.52396, 0, 0, 0.77351],
            120: [0.18906, 0.47534, 0, 0, 0.38865],
            121: [0.18906, 0.47534, 0, 0, 0.49884],
            122: [0.18906, 0.47534, 0, 0, 0.39054],
            160: [0, 0, 0, 0, 0.25],
            8216: [0, 0.69141, 0, 0, 0.21471],
            8217: [0, 0.69141, 0, 0, 0.21471],
            58112: [0, 0.62119, 0, 0, 0.49749],
            58113: [0, 0.62119, 0, 0, 0.4983],
            58114: [0.18906, 0.69141, 0, 0, 0.33328],
            58115: [0.18906, 0.69141, 0, 0, 0.32923],
            58116: [0.18906, 0.47534, 0, 0, 0.50343],
            58117: [0, 0.69141, 0, 0, 0.33301],
            58118: [0, 0.62119, 0, 0, 0.33409],
            58119: [0, 0.47534, 0, 0, 0.50073],
        },
        "Main-Bold": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.35],
            34: [0, 0.69444, 0, 0, 0.60278],
            35: [0.19444, 0.69444, 0, 0, 0.95833],
            36: [0.05556, 0.75, 0, 0, 0.575],
            37: [0.05556, 0.75, 0, 0, 0.95833],
            38: [0, 0.69444, 0, 0, 0.89444],
            39: [0, 0.69444, 0, 0, 0.31944],
            40: [0.25, 0.75, 0, 0, 0.44722],
            41: [0.25, 0.75, 0, 0, 0.44722],
            42: [0, 0.75, 0, 0, 0.575],
            43: [0.13333, 0.63333, 0, 0, 0.89444],
            44: [0.19444, 0.15556, 0, 0, 0.31944],
            45: [0, 0.44444, 0, 0, 0.38333],
            46: [0, 0.15556, 0, 0, 0.31944],
            47: [0.25, 0.75, 0, 0, 0.575],
            48: [0, 0.64444, 0, 0, 0.575],
            49: [0, 0.64444, 0, 0, 0.575],
            50: [0, 0.64444, 0, 0, 0.575],
            51: [0, 0.64444, 0, 0, 0.575],
            52: [0, 0.64444, 0, 0, 0.575],
            53: [0, 0.64444, 0, 0, 0.575],
            54: [0, 0.64444, 0, 0, 0.575],
            55: [0, 0.64444, 0, 0, 0.575],
            56: [0, 0.64444, 0, 0, 0.575],
            57: [0, 0.64444, 0, 0, 0.575],
            58: [0, 0.44444, 0, 0, 0.31944],
            59: [0.19444, 0.44444, 0, 0, 0.31944],
            60: [0.08556, 0.58556, 0, 0, 0.89444],
            61: [-0.10889, 0.39111, 0, 0, 0.89444],
            62: [0.08556, 0.58556, 0, 0, 0.89444],
            63: [0, 0.69444, 0, 0, 0.54305],
            64: [0, 0.69444, 0, 0, 0.89444],
            65: [0, 0.68611, 0, 0, 0.86944],
            66: [0, 0.68611, 0, 0, 0.81805],
            67: [0, 0.68611, 0, 0, 0.83055],
            68: [0, 0.68611, 0, 0, 0.88194],
            69: [0, 0.68611, 0, 0, 0.75555],
            70: [0, 0.68611, 0, 0, 0.72361],
            71: [0, 0.68611, 0, 0, 0.90416],
            72: [0, 0.68611, 0, 0, 0.9],
            73: [0, 0.68611, 0, 0, 0.43611],
            74: [0, 0.68611, 0, 0, 0.59444],
            75: [0, 0.68611, 0, 0, 0.90138],
            76: [0, 0.68611, 0, 0, 0.69166],
            77: [0, 0.68611, 0, 0, 1.09166],
            78: [0, 0.68611, 0, 0, 0.9],
            79: [0, 0.68611, 0, 0, 0.86388],
            80: [0, 0.68611, 0, 0, 0.78611],
            81: [0.19444, 0.68611, 0, 0, 0.86388],
            82: [0, 0.68611, 0, 0, 0.8625],
            83: [0, 0.68611, 0, 0, 0.63889],
            84: [0, 0.68611, 0, 0, 0.8],
            85: [0, 0.68611, 0, 0, 0.88472],
            86: [0, 0.68611, 0.01597, 0, 0.86944],
            87: [0, 0.68611, 0.01597, 0, 1.18888],
            88: [0, 0.68611, 0, 0, 0.86944],
            89: [0, 0.68611, 0.02875, 0, 0.86944],
            90: [0, 0.68611, 0, 0, 0.70277],
            91: [0.25, 0.75, 0, 0, 0.31944],
            92: [0.25, 0.75, 0, 0, 0.575],
            93: [0.25, 0.75, 0, 0, 0.31944],
            94: [0, 0.69444, 0, 0, 0.575],
            95: [0.31, 0.13444, 0.03194, 0, 0.575],
            97: [0, 0.44444, 0, 0, 0.55902],
            98: [0, 0.69444, 0, 0, 0.63889],
            99: [0, 0.44444, 0, 0, 0.51111],
            100: [0, 0.69444, 0, 0, 0.63889],
            101: [0, 0.44444, 0, 0, 0.52708],
            102: [0, 0.69444, 0.10903, 0, 0.35139],
            103: [0.19444, 0.44444, 0.01597, 0, 0.575],
            104: [0, 0.69444, 0, 0, 0.63889],
            105: [0, 0.69444, 0, 0, 0.31944],
            106: [0.19444, 0.69444, 0, 0, 0.35139],
            107: [0, 0.69444, 0, 0, 0.60694],
            108: [0, 0.69444, 0, 0, 0.31944],
            109: [0, 0.44444, 0, 0, 0.95833],
            110: [0, 0.44444, 0, 0, 0.63889],
            111: [0, 0.44444, 0, 0, 0.575],
            112: [0.19444, 0.44444, 0, 0, 0.63889],
            113: [0.19444, 0.44444, 0, 0, 0.60694],
            114: [0, 0.44444, 0, 0, 0.47361],
            115: [0, 0.44444, 0, 0, 0.45361],
            116: [0, 0.63492, 0, 0, 0.44722],
            117: [0, 0.44444, 0, 0, 0.63889],
            118: [0, 0.44444, 0.01597, 0, 0.60694],
            119: [0, 0.44444, 0.01597, 0, 0.83055],
            120: [0, 0.44444, 0, 0, 0.60694],
            121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
            122: [0, 0.44444, 0, 0, 0.51111],
            123: [0.25, 0.75, 0, 0, 0.575],
            124: [0.25, 0.75, 0, 0, 0.31944],
            125: [0.25, 0.75, 0, 0, 0.575],
            126: [0.35, 0.34444, 0, 0, 0.575],
            160: [0, 0, 0, 0, 0.25],
            163: [0, 0.69444, 0, 0, 0.86853],
            168: [0, 0.69444, 0, 0, 0.575],
            172: [0, 0.44444, 0, 0, 0.76666],
            176: [0, 0.69444, 0, 0, 0.86944],
            177: [0.13333, 0.63333, 0, 0, 0.89444],
            184: [0.17014, 0, 0, 0, 0.51111],
            198: [0, 0.68611, 0, 0, 1.04166],
            215: [0.13333, 0.63333, 0, 0, 0.89444],
            216: [0.04861, 0.73472, 0, 0, 0.89444],
            223: [0, 0.69444, 0, 0, 0.59722],
            230: [0, 0.44444, 0, 0, 0.83055],
            247: [0.13333, 0.63333, 0, 0, 0.89444],
            248: [0.09722, 0.54167, 0, 0, 0.575],
            305: [0, 0.44444, 0, 0, 0.31944],
            338: [0, 0.68611, 0, 0, 1.16944],
            339: [0, 0.44444, 0, 0, 0.89444],
            567: [0.19444, 0.44444, 0, 0, 0.35139],
            710: [0, 0.69444, 0, 0, 0.575],
            711: [0, 0.63194, 0, 0, 0.575],
            713: [0, 0.59611, 0, 0, 0.575],
            714: [0, 0.69444, 0, 0, 0.575],
            715: [0, 0.69444, 0, 0, 0.575],
            728: [0, 0.69444, 0, 0, 0.575],
            729: [0, 0.69444, 0, 0, 0.31944],
            730: [0, 0.69444, 0, 0, 0.86944],
            732: [0, 0.69444, 0, 0, 0.575],
            733: [0, 0.69444, 0, 0, 0.575],
            915: [0, 0.68611, 0, 0, 0.69166],
            916: [0, 0.68611, 0, 0, 0.95833],
            920: [0, 0.68611, 0, 0, 0.89444],
            923: [0, 0.68611, 0, 0, 0.80555],
            926: [0, 0.68611, 0, 0, 0.76666],
            928: [0, 0.68611, 0, 0, 0.9],
            931: [0, 0.68611, 0, 0, 0.83055],
            933: [0, 0.68611, 0, 0, 0.89444],
            934: [0, 0.68611, 0, 0, 0.83055],
            936: [0, 0.68611, 0, 0, 0.89444],
            937: [0, 0.68611, 0, 0, 0.83055],
            8211: [0, 0.44444, 0.03194, 0, 0.575],
            8212: [0, 0.44444, 0.03194, 0, 1.14999],
            8216: [0, 0.69444, 0, 0, 0.31944],
            8217: [0, 0.69444, 0, 0, 0.31944],
            8220: [0, 0.69444, 0, 0, 0.60278],
            8221: [0, 0.69444, 0, 0, 0.60278],
            8224: [0.19444, 0.69444, 0, 0, 0.51111],
            8225: [0.19444, 0.69444, 0, 0, 0.51111],
            8242: [0, 0.55556, 0, 0, 0.34444],
            8407: [0, 0.72444, 0.15486, 0, 0.575],
            8463: [0, 0.69444, 0, 0, 0.66759],
            8465: [0, 0.69444, 0, 0, 0.83055],
            8467: [0, 0.69444, 0, 0, 0.47361],
            8472: [0.19444, 0.44444, 0, 0, 0.74027],
            8476: [0, 0.69444, 0, 0, 0.83055],
            8501: [0, 0.69444, 0, 0, 0.70277],
            8592: [-0.10889, 0.39111, 0, 0, 1.14999],
            8593: [0.19444, 0.69444, 0, 0, 0.575],
            8594: [-0.10889, 0.39111, 0, 0, 1.14999],
            8595: [0.19444, 0.69444, 0, 0, 0.575],
            8596: [-0.10889, 0.39111, 0, 0, 1.14999],
            8597: [0.25, 0.75, 0, 0, 0.575],
            8598: [0.19444, 0.69444, 0, 0, 1.14999],
            8599: [0.19444, 0.69444, 0, 0, 1.14999],
            8600: [0.19444, 0.69444, 0, 0, 1.14999],
            8601: [0.19444, 0.69444, 0, 0, 1.14999],
            8636: [-0.10889, 0.39111, 0, 0, 1.14999],
            8637: [-0.10889, 0.39111, 0, 0, 1.14999],
            8640: [-0.10889, 0.39111, 0, 0, 1.14999],
            8641: [-0.10889, 0.39111, 0, 0, 1.14999],
            8656: [-0.10889, 0.39111, 0, 0, 1.14999],
            8657: [0.19444, 0.69444, 0, 0, 0.70277],
            8658: [-0.10889, 0.39111, 0, 0, 1.14999],
            8659: [0.19444, 0.69444, 0, 0, 0.70277],
            8660: [-0.10889, 0.39111, 0, 0, 1.14999],
            8661: [0.25, 0.75, 0, 0, 0.70277],
            8704: [0, 0.69444, 0, 0, 0.63889],
            8706: [0, 0.69444, 0.06389, 0, 0.62847],
            8707: [0, 0.69444, 0, 0, 0.63889],
            8709: [0.05556, 0.75, 0, 0, 0.575],
            8711: [0, 0.68611, 0, 0, 0.95833],
            8712: [0.08556, 0.58556, 0, 0, 0.76666],
            8715: [0.08556, 0.58556, 0, 0, 0.76666],
            8722: [0.13333, 0.63333, 0, 0, 0.89444],
            8723: [0.13333, 0.63333, 0, 0, 0.89444],
            8725: [0.25, 0.75, 0, 0, 0.575],
            8726: [0.25, 0.75, 0, 0, 0.575],
            8727: [-0.02778, 0.47222, 0, 0, 0.575],
            8728: [-0.02639, 0.47361, 0, 0, 0.575],
            8729: [-0.02639, 0.47361, 0, 0, 0.575],
            8730: [0.18, 0.82, 0, 0, 0.95833],
            8733: [0, 0.44444, 0, 0, 0.89444],
            8734: [0, 0.44444, 0, 0, 1.14999],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8739: [0.25, 0.75, 0, 0, 0.31944],
            8741: [0.25, 0.75, 0, 0, 0.575],
            8743: [0, 0.55556, 0, 0, 0.76666],
            8744: [0, 0.55556, 0, 0, 0.76666],
            8745: [0, 0.55556, 0, 0, 0.76666],
            8746: [0, 0.55556, 0, 0, 0.76666],
            8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
            8764: [-0.10889, 0.39111, 0, 0, 0.89444],
            8768: [0.19444, 0.69444, 0, 0, 0.31944],
            8771: [0.00222, 0.50222, 0, 0, 0.89444],
            8773: [0.027, 0.638, 0, 0, 0.894],
            8776: [0.02444, 0.52444, 0, 0, 0.89444],
            8781: [0.00222, 0.50222, 0, 0, 0.89444],
            8801: [0.00222, 0.50222, 0, 0, 0.89444],
            8804: [0.19667, 0.69667, 0, 0, 0.89444],
            8805: [0.19667, 0.69667, 0, 0, 0.89444],
            8810: [0.08556, 0.58556, 0, 0, 1.14999],
            8811: [0.08556, 0.58556, 0, 0, 1.14999],
            8826: [0.08556, 0.58556, 0, 0, 0.89444],
            8827: [0.08556, 0.58556, 0, 0, 0.89444],
            8834: [0.08556, 0.58556, 0, 0, 0.89444],
            8835: [0.08556, 0.58556, 0, 0, 0.89444],
            8838: [0.19667, 0.69667, 0, 0, 0.89444],
            8839: [0.19667, 0.69667, 0, 0, 0.89444],
            8846: [0, 0.55556, 0, 0, 0.76666],
            8849: [0.19667, 0.69667, 0, 0, 0.89444],
            8850: [0.19667, 0.69667, 0, 0, 0.89444],
            8851: [0, 0.55556, 0, 0, 0.76666],
            8852: [0, 0.55556, 0, 0, 0.76666],
            8853: [0.13333, 0.63333, 0, 0, 0.89444],
            8854: [0.13333, 0.63333, 0, 0, 0.89444],
            8855: [0.13333, 0.63333, 0, 0, 0.89444],
            8856: [0.13333, 0.63333, 0, 0, 0.89444],
            8857: [0.13333, 0.63333, 0, 0, 0.89444],
            8866: [0, 0.69444, 0, 0, 0.70277],
            8867: [0, 0.69444, 0, 0, 0.70277],
            8868: [0, 0.69444, 0, 0, 0.89444],
            8869: [0, 0.69444, 0, 0, 0.89444],
            8900: [-0.02639, 0.47361, 0, 0, 0.575],
            8901: [-0.02639, 0.47361, 0, 0, 0.31944],
            8902: [-0.02778, 0.47222, 0, 0, 0.575],
            8968: [0.25, 0.75, 0, 0, 0.51111],
            8969: [0.25, 0.75, 0, 0, 0.51111],
            8970: [0.25, 0.75, 0, 0, 0.51111],
            8971: [0.25, 0.75, 0, 0, 0.51111],
            8994: [-0.13889, 0.36111, 0, 0, 1.14999],
            8995: [-0.13889, 0.36111, 0, 0, 1.14999],
            9651: [0.19444, 0.69444, 0, 0, 1.02222],
            9657: [-0.02778, 0.47222, 0, 0, 0.575],
            9661: [0.19444, 0.69444, 0, 0, 1.02222],
            9667: [-0.02778, 0.47222, 0, 0, 0.575],
            9711: [0.19444, 0.69444, 0, 0, 1.14999],
            9824: [0.12963, 0.69444, 0, 0, 0.89444],
            9825: [0.12963, 0.69444, 0, 0, 0.89444],
            9826: [0.12963, 0.69444, 0, 0, 0.89444],
            9827: [0.12963, 0.69444, 0, 0, 0.89444],
            9837: [0, 0.75, 0, 0, 0.44722],
            9838: [0.19444, 0.69444, 0, 0, 0.44722],
            9839: [0.19444, 0.69444, 0, 0, 0.44722],
            10216: [0.25, 0.75, 0, 0, 0.44722],
            10217: [0.25, 0.75, 0, 0, 0.44722],
            10815: [0, 0.68611, 0, 0, 0.9],
            10927: [0.19667, 0.69667, 0, 0, 0.89444],
            10928: [0.19667, 0.69667, 0, 0, 0.89444],
            57376: [0.19444, 0.69444, 0, 0, 0],
        },
        "Main-BoldItalic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.11417, 0, 0.38611],
            34: [0, 0.69444, 0.07939, 0, 0.62055],
            35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
            37: [0.05556, 0.75, 0.12861, 0, 0.94444],
            38: [0, 0.69444, 0.08528, 0, 0.88555],
            39: [0, 0.69444, 0.12945, 0, 0.35555],
            40: [0.25, 0.75, 0.15806, 0, 0.47333],
            41: [0.25, 0.75, 0.03306, 0, 0.47333],
            42: [0, 0.75, 0.14333, 0, 0.59111],
            43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
            44: [0.19444, 0.14722, 0, 0, 0.35555],
            45: [0, 0.44444, 0.02611, 0, 0.41444],
            46: [0, 0.14722, 0, 0, 0.35555],
            47: [0.25, 0.75, 0.15806, 0, 0.59111],
            48: [0, 0.64444, 0.13167, 0, 0.59111],
            49: [0, 0.64444, 0.13167, 0, 0.59111],
            50: [0, 0.64444, 0.13167, 0, 0.59111],
            51: [0, 0.64444, 0.13167, 0, 0.59111],
            52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
            53: [0, 0.64444, 0.13167, 0, 0.59111],
            54: [0, 0.64444, 0.13167, 0, 0.59111],
            55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
            56: [0, 0.64444, 0.13167, 0, 0.59111],
            57: [0, 0.64444, 0.13167, 0, 0.59111],
            58: [0, 0.44444, 0.06695, 0, 0.35555],
            59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
            61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
            63: [0, 0.69444, 0.11472, 0, 0.59111],
            64: [0, 0.69444, 0.09208, 0, 0.88555],
            65: [0, 0.68611, 0, 0, 0.86555],
            66: [0, 0.68611, 0.0992, 0, 0.81666],
            67: [0, 0.68611, 0.14208, 0, 0.82666],
            68: [0, 0.68611, 0.09062, 0, 0.87555],
            69: [0, 0.68611, 0.11431, 0, 0.75666],
            70: [0, 0.68611, 0.12903, 0, 0.72722],
            71: [0, 0.68611, 0.07347, 0, 0.89527],
            72: [0, 0.68611, 0.17208, 0, 0.8961],
            73: [0, 0.68611, 0.15681, 0, 0.47166],
            74: [0, 0.68611, 0.145, 0, 0.61055],
            75: [0, 0.68611, 0.14208, 0, 0.89499],
            76: [0, 0.68611, 0, 0, 0.69777],
            77: [0, 0.68611, 0.17208, 0, 1.07277],
            78: [0, 0.68611, 0.17208, 0, 0.8961],
            79: [0, 0.68611, 0.09062, 0, 0.85499],
            80: [0, 0.68611, 0.0992, 0, 0.78721],
            81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
            82: [0, 0.68611, 0.02559, 0, 0.85944],
            83: [0, 0.68611, 0.11264, 0, 0.64999],
            84: [0, 0.68611, 0.12903, 0, 0.7961],
            85: [0, 0.68611, 0.17208, 0, 0.88083],
            86: [0, 0.68611, 0.18625, 0, 0.86555],
            87: [0, 0.68611, 0.18625, 0, 1.15999],
            88: [0, 0.68611, 0.15681, 0, 0.86555],
            89: [0, 0.68611, 0.19803, 0, 0.86555],
            90: [0, 0.68611, 0.14208, 0, 0.70888],
            91: [0.25, 0.75, 0.1875, 0, 0.35611],
            93: [0.25, 0.75, 0.09972, 0, 0.35611],
            94: [0, 0.69444, 0.06709, 0, 0.59111],
            95: [0.31, 0.13444, 0.09811, 0, 0.59111],
            97: [0, 0.44444, 0.09426, 0, 0.59111],
            98: [0, 0.69444, 0.07861, 0, 0.53222],
            99: [0, 0.44444, 0.05222, 0, 0.53222],
            100: [0, 0.69444, 0.10861, 0, 0.59111],
            101: [0, 0.44444, 0.085, 0, 0.53222],
            102: [0.19444, 0.69444, 0.21778, 0, 0.4],
            103: [0.19444, 0.44444, 0.105, 0, 0.53222],
            104: [0, 0.69444, 0.09426, 0, 0.59111],
            105: [0, 0.69326, 0.11387, 0, 0.35555],
            106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
            107: [0, 0.69444, 0.11111, 0, 0.53222],
            108: [0, 0.69444, 0.10861, 0, 0.29666],
            109: [0, 0.44444, 0.09426, 0, 0.94444],
            110: [0, 0.44444, 0.09426, 0, 0.64999],
            111: [0, 0.44444, 0.07861, 0, 0.59111],
            112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
            113: [0.19444, 0.44444, 0.105, 0, 0.53222],
            114: [0, 0.44444, 0.11111, 0, 0.50167],
            115: [0, 0.44444, 0.08167, 0, 0.48694],
            116: [0, 0.63492, 0.09639, 0, 0.385],
            117: [0, 0.44444, 0.09426, 0, 0.62055],
            118: [0, 0.44444, 0.11111, 0, 0.53222],
            119: [0, 0.44444, 0.11111, 0, 0.76777],
            120: [0, 0.44444, 0.12583, 0, 0.56055],
            121: [0.19444, 0.44444, 0.105, 0, 0.56166],
            122: [0, 0.44444, 0.13889, 0, 0.49055],
            126: [0.35, 0.34444, 0.11472, 0, 0.59111],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.69444, 0.11473, 0, 0.59111],
            176: [0, 0.69444, 0, 0, 0.94888],
            184: [0.17014, 0, 0, 0, 0.53222],
            198: [0, 0.68611, 0.11431, 0, 1.02277],
            216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
            223: [0.19444, 0.69444, 0.09736, 0, 0.665],
            230: [0, 0.44444, 0.085, 0, 0.82666],
            248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
            305: [0, 0.44444, 0.09426, 0, 0.35555],
            338: [0, 0.68611, 0.11431, 0, 1.14054],
            339: [0, 0.44444, 0.085, 0, 0.82666],
            567: [0.19444, 0.44444, 0.04611, 0, 0.385],
            710: [0, 0.69444, 0.06709, 0, 0.59111],
            711: [0, 0.63194, 0.08271, 0, 0.59111],
            713: [0, 0.59444, 0.10444, 0, 0.59111],
            714: [0, 0.69444, 0.08528, 0, 0.59111],
            715: [0, 0.69444, 0, 0, 0.59111],
            728: [0, 0.69444, 0.10333, 0, 0.59111],
            729: [0, 0.69444, 0.12945, 0, 0.35555],
            730: [0, 0.69444, 0, 0, 0.94888],
            732: [0, 0.69444, 0.11472, 0, 0.59111],
            733: [0, 0.69444, 0.11472, 0, 0.59111],
            915: [0, 0.68611, 0.12903, 0, 0.69777],
            916: [0, 0.68611, 0, 0, 0.94444],
            920: [0, 0.68611, 0.09062, 0, 0.88555],
            923: [0, 0.68611, 0, 0, 0.80666],
            926: [0, 0.68611, 0.15092, 0, 0.76777],
            928: [0, 0.68611, 0.17208, 0, 0.8961],
            931: [0, 0.68611, 0.11431, 0, 0.82666],
            933: [0, 0.68611, 0.10778, 0, 0.88555],
            934: [0, 0.68611, 0.05632, 0, 0.82666],
            936: [0, 0.68611, 0.10778, 0, 0.88555],
            937: [0, 0.68611, 0.0992, 0, 0.82666],
            8211: [0, 0.44444, 0.09811, 0, 0.59111],
            8212: [0, 0.44444, 0.09811, 0, 1.18221],
            8216: [0, 0.69444, 0.12945, 0, 0.35555],
            8217: [0, 0.69444, 0.12945, 0, 0.35555],
            8220: [0, 0.69444, 0.16772, 0, 0.62055],
            8221: [0, 0.69444, 0.07939, 0, 0.62055],
        },
        "Main-Italic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.12417, 0, 0.30667],
            34: [0, 0.69444, 0.06961, 0, 0.51444],
            35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
            37: [0.05556, 0.75, 0.13639, 0, 0.81777],
            38: [0, 0.69444, 0.09694, 0, 0.76666],
            39: [0, 0.69444, 0.12417, 0, 0.30667],
            40: [0.25, 0.75, 0.16194, 0, 0.40889],
            41: [0.25, 0.75, 0.03694, 0, 0.40889],
            42: [0, 0.75, 0.14917, 0, 0.51111],
            43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
            44: [0.19444, 0.10556, 0, 0, 0.30667],
            45: [0, 0.43056, 0.02826, 0, 0.35778],
            46: [0, 0.10556, 0, 0, 0.30667],
            47: [0.25, 0.75, 0.16194, 0, 0.51111],
            48: [0, 0.64444, 0.13556, 0, 0.51111],
            49: [0, 0.64444, 0.13556, 0, 0.51111],
            50: [0, 0.64444, 0.13556, 0, 0.51111],
            51: [0, 0.64444, 0.13556, 0, 0.51111],
            52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
            53: [0, 0.64444, 0.13556, 0, 0.51111],
            54: [0, 0.64444, 0.13556, 0, 0.51111],
            55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
            56: [0, 0.64444, 0.13556, 0, 0.51111],
            57: [0, 0.64444, 0.13556, 0, 0.51111],
            58: [0, 0.43056, 0.0582, 0, 0.30667],
            59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
            61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
            63: [0, 0.69444, 0.1225, 0, 0.51111],
            64: [0, 0.69444, 0.09597, 0, 0.76666],
            65: [0, 0.68333, 0, 0, 0.74333],
            66: [0, 0.68333, 0.10257, 0, 0.70389],
            67: [0, 0.68333, 0.14528, 0, 0.71555],
            68: [0, 0.68333, 0.09403, 0, 0.755],
            69: [0, 0.68333, 0.12028, 0, 0.67833],
            70: [0, 0.68333, 0.13305, 0, 0.65277],
            71: [0, 0.68333, 0.08722, 0, 0.77361],
            72: [0, 0.68333, 0.16389, 0, 0.74333],
            73: [0, 0.68333, 0.15806, 0, 0.38555],
            74: [0, 0.68333, 0.14028, 0, 0.525],
            75: [0, 0.68333, 0.14528, 0, 0.76888],
            76: [0, 0.68333, 0, 0, 0.62722],
            77: [0, 0.68333, 0.16389, 0, 0.89666],
            78: [0, 0.68333, 0.16389, 0, 0.74333],
            79: [0, 0.68333, 0.09403, 0, 0.76666],
            80: [0, 0.68333, 0.10257, 0, 0.67833],
            81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
            82: [0, 0.68333, 0.03868, 0, 0.72944],
            83: [0, 0.68333, 0.11972, 0, 0.56222],
            84: [0, 0.68333, 0.13305, 0, 0.71555],
            85: [0, 0.68333, 0.16389, 0, 0.74333],
            86: [0, 0.68333, 0.18361, 0, 0.74333],
            87: [0, 0.68333, 0.18361, 0, 0.99888],
            88: [0, 0.68333, 0.15806, 0, 0.74333],
            89: [0, 0.68333, 0.19383, 0, 0.74333],
            90: [0, 0.68333, 0.14528, 0, 0.61333],
            91: [0.25, 0.75, 0.1875, 0, 0.30667],
            93: [0.25, 0.75, 0.10528, 0, 0.30667],
            94: [0, 0.69444, 0.06646, 0, 0.51111],
            95: [0.31, 0.12056, 0.09208, 0, 0.51111],
            97: [0, 0.43056, 0.07671, 0, 0.51111],
            98: [0, 0.69444, 0.06312, 0, 0.46],
            99: [0, 0.43056, 0.05653, 0, 0.46],
            100: [0, 0.69444, 0.10333, 0, 0.51111],
            101: [0, 0.43056, 0.07514, 0, 0.46],
            102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
            103: [0.19444, 0.43056, 0.08847, 0, 0.46],
            104: [0, 0.69444, 0.07671, 0, 0.51111],
            105: [0, 0.65536, 0.1019, 0, 0.30667],
            106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
            107: [0, 0.69444, 0.10764, 0, 0.46],
            108: [0, 0.69444, 0.10333, 0, 0.25555],
            109: [0, 0.43056, 0.07671, 0, 0.81777],
            110: [0, 0.43056, 0.07671, 0, 0.56222],
            111: [0, 0.43056, 0.06312, 0, 0.51111],
            112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
            113: [0.19444, 0.43056, 0.08847, 0, 0.46],
            114: [0, 0.43056, 0.10764, 0, 0.42166],
            115: [0, 0.43056, 0.08208, 0, 0.40889],
            116: [0, 0.61508, 0.09486, 0, 0.33222],
            117: [0, 0.43056, 0.07671, 0, 0.53666],
            118: [0, 0.43056, 0.10764, 0, 0.46],
            119: [0, 0.43056, 0.10764, 0, 0.66444],
            120: [0, 0.43056, 0.12042, 0, 0.46389],
            121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
            122: [0, 0.43056, 0.12292, 0, 0.40889],
            126: [0.35, 0.31786, 0.11585, 0, 0.51111],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.66786, 0.10474, 0, 0.51111],
            176: [0, 0.69444, 0, 0, 0.83129],
            184: [0.17014, 0, 0, 0, 0.46],
            198: [0, 0.68333, 0.12028, 0, 0.88277],
            216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
            223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
            230: [0, 0.43056, 0.07514, 0, 0.71555],
            248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
            338: [0, 0.68333, 0.12028, 0, 0.98499],
            339: [0, 0.43056, 0.07514, 0, 0.71555],
            710: [0, 0.69444, 0.06646, 0, 0.51111],
            711: [0, 0.62847, 0.08295, 0, 0.51111],
            713: [0, 0.56167, 0.10333, 0, 0.51111],
            714: [0, 0.69444, 0.09694, 0, 0.51111],
            715: [0, 0.69444, 0, 0, 0.51111],
            728: [0, 0.69444, 0.10806, 0, 0.51111],
            729: [0, 0.66786, 0.11752, 0, 0.30667],
            730: [0, 0.69444, 0, 0, 0.83129],
            732: [0, 0.66786, 0.11585, 0, 0.51111],
            733: [0, 0.69444, 0.1225, 0, 0.51111],
            915: [0, 0.68333, 0.13305, 0, 0.62722],
            916: [0, 0.68333, 0, 0, 0.81777],
            920: [0, 0.68333, 0.09403, 0, 0.76666],
            923: [0, 0.68333, 0, 0, 0.69222],
            926: [0, 0.68333, 0.15294, 0, 0.66444],
            928: [0, 0.68333, 0.16389, 0, 0.74333],
            931: [0, 0.68333, 0.12028, 0, 0.71555],
            933: [0, 0.68333, 0.11111, 0, 0.76666],
            934: [0, 0.68333, 0.05986, 0, 0.71555],
            936: [0, 0.68333, 0.11111, 0, 0.76666],
            937: [0, 0.68333, 0.10257, 0, 0.71555],
            8211: [0, 0.43056, 0.09208, 0, 0.51111],
            8212: [0, 0.43056, 0.09208, 0, 1.02222],
            8216: [0, 0.69444, 0.12417, 0, 0.30667],
            8217: [0, 0.69444, 0.12417, 0, 0.30667],
            8220: [0, 0.69444, 0.1685, 0, 0.51444],
            8221: [0, 0.69444, 0.06961, 0, 0.51444],
            8463: [0, 0.68889, 0, 0, 0.54028],
        },
        "Main-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.27778],
            34: [0, 0.69444, 0, 0, 0.5],
            35: [0.19444, 0.69444, 0, 0, 0.83334],
            36: [0.05556, 0.75, 0, 0, 0.5],
            37: [0.05556, 0.75, 0, 0, 0.83334],
            38: [0, 0.69444, 0, 0, 0.77778],
            39: [0, 0.69444, 0, 0, 0.27778],
            40: [0.25, 0.75, 0, 0, 0.38889],
            41: [0.25, 0.75, 0, 0, 0.38889],
            42: [0, 0.75, 0, 0, 0.5],
            43: [0.08333, 0.58333, 0, 0, 0.77778],
            44: [0.19444, 0.10556, 0, 0, 0.27778],
            45: [0, 0.43056, 0, 0, 0.33333],
            46: [0, 0.10556, 0, 0, 0.27778],
            47: [0.25, 0.75, 0, 0, 0.5],
            48: [0, 0.64444, 0, 0, 0.5],
            49: [0, 0.64444, 0, 0, 0.5],
            50: [0, 0.64444, 0, 0, 0.5],
            51: [0, 0.64444, 0, 0, 0.5],
            52: [0, 0.64444, 0, 0, 0.5],
            53: [0, 0.64444, 0, 0, 0.5],
            54: [0, 0.64444, 0, 0, 0.5],
            55: [0, 0.64444, 0, 0, 0.5],
            56: [0, 0.64444, 0, 0, 0.5],
            57: [0, 0.64444, 0, 0, 0.5],
            58: [0, 0.43056, 0, 0, 0.27778],
            59: [0.19444, 0.43056, 0, 0, 0.27778],
            60: [0.0391, 0.5391, 0, 0, 0.77778],
            61: [-0.13313, 0.36687, 0, 0, 0.77778],
            62: [0.0391, 0.5391, 0, 0, 0.77778],
            63: [0, 0.69444, 0, 0, 0.47222],
            64: [0, 0.69444, 0, 0, 0.77778],
            65: [0, 0.68333, 0, 0, 0.75],
            66: [0, 0.68333, 0, 0, 0.70834],
            67: [0, 0.68333, 0, 0, 0.72222],
            68: [0, 0.68333, 0, 0, 0.76389],
            69: [0, 0.68333, 0, 0, 0.68056],
            70: [0, 0.68333, 0, 0, 0.65278],
            71: [0, 0.68333, 0, 0, 0.78472],
            72: [0, 0.68333, 0, 0, 0.75],
            73: [0, 0.68333, 0, 0, 0.36111],
            74: [0, 0.68333, 0, 0, 0.51389],
            75: [0, 0.68333, 0, 0, 0.77778],
            76: [0, 0.68333, 0, 0, 0.625],
            77: [0, 0.68333, 0, 0, 0.91667],
            78: [0, 0.68333, 0, 0, 0.75],
            79: [0, 0.68333, 0, 0, 0.77778],
            80: [0, 0.68333, 0, 0, 0.68056],
            81: [0.19444, 0.68333, 0, 0, 0.77778],
            82: [0, 0.68333, 0, 0, 0.73611],
            83: [0, 0.68333, 0, 0, 0.55556],
            84: [0, 0.68333, 0, 0, 0.72222],
            85: [0, 0.68333, 0, 0, 0.75],
            86: [0, 0.68333, 0.01389, 0, 0.75],
            87: [0, 0.68333, 0.01389, 0, 1.02778],
            88: [0, 0.68333, 0, 0, 0.75],
            89: [0, 0.68333, 0.025, 0, 0.75],
            90: [0, 0.68333, 0, 0, 0.61111],
            91: [0.25, 0.75, 0, 0, 0.27778],
            92: [0.25, 0.75, 0, 0, 0.5],
            93: [0.25, 0.75, 0, 0, 0.27778],
            94: [0, 0.69444, 0, 0, 0.5],
            95: [0.31, 0.12056, 0.02778, 0, 0.5],
            97: [0, 0.43056, 0, 0, 0.5],
            98: [0, 0.69444, 0, 0, 0.55556],
            99: [0, 0.43056, 0, 0, 0.44445],
            100: [0, 0.69444, 0, 0, 0.55556],
            101: [0, 0.43056, 0, 0, 0.44445],
            102: [0, 0.69444, 0.07778, 0, 0.30556],
            103: [0.19444, 0.43056, 0.01389, 0, 0.5],
            104: [0, 0.69444, 0, 0, 0.55556],
            105: [0, 0.66786, 0, 0, 0.27778],
            106: [0.19444, 0.66786, 0, 0, 0.30556],
            107: [0, 0.69444, 0, 0, 0.52778],
            108: [0, 0.69444, 0, 0, 0.27778],
            109: [0, 0.43056, 0, 0, 0.83334],
            110: [0, 0.43056, 0, 0, 0.55556],
            111: [0, 0.43056, 0, 0, 0.5],
            112: [0.19444, 0.43056, 0, 0, 0.55556],
            113: [0.19444, 0.43056, 0, 0, 0.52778],
            114: [0, 0.43056, 0, 0, 0.39167],
            115: [0, 0.43056, 0, 0, 0.39445],
            116: [0, 0.61508, 0, 0, 0.38889],
            117: [0, 0.43056, 0, 0, 0.55556],
            118: [0, 0.43056, 0.01389, 0, 0.52778],
            119: [0, 0.43056, 0.01389, 0, 0.72222],
            120: [0, 0.43056, 0, 0, 0.52778],
            121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
            122: [0, 0.43056, 0, 0, 0.44445],
            123: [0.25, 0.75, 0, 0, 0.5],
            124: [0.25, 0.75, 0, 0, 0.27778],
            125: [0.25, 0.75, 0, 0, 0.5],
            126: [0.35, 0.31786, 0, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            163: [0, 0.69444, 0, 0, 0.76909],
            167: [0.19444, 0.69444, 0, 0, 0.44445],
            168: [0, 0.66786, 0, 0, 0.5],
            172: [0, 0.43056, 0, 0, 0.66667],
            176: [0, 0.69444, 0, 0, 0.75],
            177: [0.08333, 0.58333, 0, 0, 0.77778],
            182: [0.19444, 0.69444, 0, 0, 0.61111],
            184: [0.17014, 0, 0, 0, 0.44445],
            198: [0, 0.68333, 0, 0, 0.90278],
            215: [0.08333, 0.58333, 0, 0, 0.77778],
            216: [0.04861, 0.73194, 0, 0, 0.77778],
            223: [0, 0.69444, 0, 0, 0.5],
            230: [0, 0.43056, 0, 0, 0.72222],
            247: [0.08333, 0.58333, 0, 0, 0.77778],
            248: [0.09722, 0.52778, 0, 0, 0.5],
            305: [0, 0.43056, 0, 0, 0.27778],
            338: [0, 0.68333, 0, 0, 1.01389],
            339: [0, 0.43056, 0, 0, 0.77778],
            567: [0.19444, 0.43056, 0, 0, 0.30556],
            710: [0, 0.69444, 0, 0, 0.5],
            711: [0, 0.62847, 0, 0, 0.5],
            713: [0, 0.56778, 0, 0, 0.5],
            714: [0, 0.69444, 0, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0, 0, 0.5],
            729: [0, 0.66786, 0, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.75],
            732: [0, 0.66786, 0, 0, 0.5],
            733: [0, 0.69444, 0, 0, 0.5],
            915: [0, 0.68333, 0, 0, 0.625],
            916: [0, 0.68333, 0, 0, 0.83334],
            920: [0, 0.68333, 0, 0, 0.77778],
            923: [0, 0.68333, 0, 0, 0.69445],
            926: [0, 0.68333, 0, 0, 0.66667],
            928: [0, 0.68333, 0, 0, 0.75],
            931: [0, 0.68333, 0, 0, 0.72222],
            933: [0, 0.68333, 0, 0, 0.77778],
            934: [0, 0.68333, 0, 0, 0.72222],
            936: [0, 0.68333, 0, 0, 0.77778],
            937: [0, 0.68333, 0, 0, 0.72222],
            8211: [0, 0.43056, 0.02778, 0, 0.5],
            8212: [0, 0.43056, 0.02778, 0, 1],
            8216: [0, 0.69444, 0, 0, 0.27778],
            8217: [0, 0.69444, 0, 0, 0.27778],
            8220: [0, 0.69444, 0, 0, 0.5],
            8221: [0, 0.69444, 0, 0, 0.5],
            8224: [0.19444, 0.69444, 0, 0, 0.44445],
            8225: [0.19444, 0.69444, 0, 0, 0.44445],
            8230: [0, 0.123, 0, 0, 1.172],
            8242: [0, 0.55556, 0, 0, 0.275],
            8407: [0, 0.71444, 0.15382, 0, 0.5],
            8463: [0, 0.68889, 0, 0, 0.54028],
            8465: [0, 0.69444, 0, 0, 0.72222],
            8467: [0, 0.69444, 0, 0.11111, 0.41667],
            8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
            8476: [0, 0.69444, 0, 0, 0.72222],
            8501: [0, 0.69444, 0, 0, 0.61111],
            8592: [-0.13313, 0.36687, 0, 0, 1],
            8593: [0.19444, 0.69444, 0, 0, 0.5],
            8594: [-0.13313, 0.36687, 0, 0, 1],
            8595: [0.19444, 0.69444, 0, 0, 0.5],
            8596: [-0.13313, 0.36687, 0, 0, 1],
            8597: [0.25, 0.75, 0, 0, 0.5],
            8598: [0.19444, 0.69444, 0, 0, 1],
            8599: [0.19444, 0.69444, 0, 0, 1],
            8600: [0.19444, 0.69444, 0, 0, 1],
            8601: [0.19444, 0.69444, 0, 0, 1],
            8614: [0.011, 0.511, 0, 0, 1],
            8617: [0.011, 0.511, 0, 0, 1.126],
            8618: [0.011, 0.511, 0, 0, 1.126],
            8636: [-0.13313, 0.36687, 0, 0, 1],
            8637: [-0.13313, 0.36687, 0, 0, 1],
            8640: [-0.13313, 0.36687, 0, 0, 1],
            8641: [-0.13313, 0.36687, 0, 0, 1],
            8652: [0.011, 0.671, 0, 0, 1],
            8656: [-0.13313, 0.36687, 0, 0, 1],
            8657: [0.19444, 0.69444, 0, 0, 0.61111],
            8658: [-0.13313, 0.36687, 0, 0, 1],
            8659: [0.19444, 0.69444, 0, 0, 0.61111],
            8660: [-0.13313, 0.36687, 0, 0, 1],
            8661: [0.25, 0.75, 0, 0, 0.61111],
            8704: [0, 0.69444, 0, 0, 0.55556],
            8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
            8707: [0, 0.69444, 0, 0, 0.55556],
            8709: [0.05556, 0.75, 0, 0, 0.5],
            8711: [0, 0.68333, 0, 0, 0.83334],
            8712: [0.0391, 0.5391, 0, 0, 0.66667],
            8715: [0.0391, 0.5391, 0, 0, 0.66667],
            8722: [0.08333, 0.58333, 0, 0, 0.77778],
            8723: [0.08333, 0.58333, 0, 0, 0.77778],
            8725: [0.25, 0.75, 0, 0, 0.5],
            8726: [0.25, 0.75, 0, 0, 0.5],
            8727: [-0.03472, 0.46528, 0, 0, 0.5],
            8728: [-0.05555, 0.44445, 0, 0, 0.5],
            8729: [-0.05555, 0.44445, 0, 0, 0.5],
            8730: [0.2, 0.8, 0, 0, 0.83334],
            8733: [0, 0.43056, 0, 0, 0.77778],
            8734: [0, 0.43056, 0, 0, 1],
            8736: [0, 0.69224, 0, 0, 0.72222],
            8739: [0.25, 0.75, 0, 0, 0.27778],
            8741: [0.25, 0.75, 0, 0, 0.5],
            8743: [0, 0.55556, 0, 0, 0.66667],
            8744: [0, 0.55556, 0, 0, 0.66667],
            8745: [0, 0.55556, 0, 0, 0.66667],
            8746: [0, 0.55556, 0, 0, 0.66667],
            8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
            8764: [-0.13313, 0.36687, 0, 0, 0.77778],
            8768: [0.19444, 0.69444, 0, 0, 0.27778],
            8771: [-0.03625, 0.46375, 0, 0, 0.77778],
            8773: [-0.022, 0.589, 0, 0, 0.778],
            8776: [-0.01688, 0.48312, 0, 0, 0.77778],
            8781: [-0.03625, 0.46375, 0, 0, 0.77778],
            8784: [-0.133, 0.673, 0, 0, 0.778],
            8801: [-0.03625, 0.46375, 0, 0, 0.77778],
            8804: [0.13597, 0.63597, 0, 0, 0.77778],
            8805: [0.13597, 0.63597, 0, 0, 0.77778],
            8810: [0.0391, 0.5391, 0, 0, 1],
            8811: [0.0391, 0.5391, 0, 0, 1],
            8826: [0.0391, 0.5391, 0, 0, 0.77778],
            8827: [0.0391, 0.5391, 0, 0, 0.77778],
            8834: [0.0391, 0.5391, 0, 0, 0.77778],
            8835: [0.0391, 0.5391, 0, 0, 0.77778],
            8838: [0.13597, 0.63597, 0, 0, 0.77778],
            8839: [0.13597, 0.63597, 0, 0, 0.77778],
            8846: [0, 0.55556, 0, 0, 0.66667],
            8849: [0.13597, 0.63597, 0, 0, 0.77778],
            8850: [0.13597, 0.63597, 0, 0, 0.77778],
            8851: [0, 0.55556, 0, 0, 0.66667],
            8852: [0, 0.55556, 0, 0, 0.66667],
            8853: [0.08333, 0.58333, 0, 0, 0.77778],
            8854: [0.08333, 0.58333, 0, 0, 0.77778],
            8855: [0.08333, 0.58333, 0, 0, 0.77778],
            8856: [0.08333, 0.58333, 0, 0, 0.77778],
            8857: [0.08333, 0.58333, 0, 0, 0.77778],
            8866: [0, 0.69444, 0, 0, 0.61111],
            8867: [0, 0.69444, 0, 0, 0.61111],
            8868: [0, 0.69444, 0, 0, 0.77778],
            8869: [0, 0.69444, 0, 0, 0.77778],
            8872: [0.249, 0.75, 0, 0, 0.867],
            8900: [-0.05555, 0.44445, 0, 0, 0.5],
            8901: [-0.05555, 0.44445, 0, 0, 0.27778],
            8902: [-0.03472, 0.46528, 0, 0, 0.5],
            8904: [0.005, 0.505, 0, 0, 0.9],
            8942: [0.03, 0.903, 0, 0, 0.278],
            8943: [-0.19, 0.313, 0, 0, 1.172],
            8945: [-0.1, 0.823, 0, 0, 1.282],
            8968: [0.25, 0.75, 0, 0, 0.44445],
            8969: [0.25, 0.75, 0, 0, 0.44445],
            8970: [0.25, 0.75, 0, 0, 0.44445],
            8971: [0.25, 0.75, 0, 0, 0.44445],
            8994: [-0.14236, 0.35764, 0, 0, 1],
            8995: [-0.14236, 0.35764, 0, 0, 1],
            9136: [0.244, 0.744, 0, 0, 0.412],
            9137: [0.244, 0.745, 0, 0, 0.412],
            9651: [0.19444, 0.69444, 0, 0, 0.88889],
            9657: [-0.03472, 0.46528, 0, 0, 0.5],
            9661: [0.19444, 0.69444, 0, 0, 0.88889],
            9667: [-0.03472, 0.46528, 0, 0, 0.5],
            9711: [0.19444, 0.69444, 0, 0, 1],
            9824: [0.12963, 0.69444, 0, 0, 0.77778],
            9825: [0.12963, 0.69444, 0, 0, 0.77778],
            9826: [0.12963, 0.69444, 0, 0, 0.77778],
            9827: [0.12963, 0.69444, 0, 0, 0.77778],
            9837: [0, 0.75, 0, 0, 0.38889],
            9838: [0.19444, 0.69444, 0, 0, 0.38889],
            9839: [0.19444, 0.69444, 0, 0, 0.38889],
            10216: [0.25, 0.75, 0, 0, 0.38889],
            10217: [0.25, 0.75, 0, 0, 0.38889],
            10222: [0.244, 0.744, 0, 0, 0.412],
            10223: [0.244, 0.745, 0, 0, 0.412],
            10229: [0.011, 0.511, 0, 0, 1.609],
            10230: [0.011, 0.511, 0, 0, 1.638],
            10231: [0.011, 0.511, 0, 0, 1.859],
            10232: [0.024, 0.525, 0, 0, 1.609],
            10233: [0.024, 0.525, 0, 0, 1.638],
            10234: [0.024, 0.525, 0, 0, 1.858],
            10236: [0.011, 0.511, 0, 0, 1.638],
            10815: [0, 0.68333, 0, 0, 0.75],
            10927: [0.13597, 0.63597, 0, 0, 0.77778],
            10928: [0.13597, 0.63597, 0, 0, 0.77778],
            57376: [0.19444, 0.69444, 0, 0, 0],
        },
        "Math-BoldItalic": {
            32: [0, 0, 0, 0, 0.25],
            48: [0, 0.44444, 0, 0, 0.575],
            49: [0, 0.44444, 0, 0, 0.575],
            50: [0, 0.44444, 0, 0, 0.575],
            51: [0.19444, 0.44444, 0, 0, 0.575],
            52: [0.19444, 0.44444, 0, 0, 0.575],
            53: [0.19444, 0.44444, 0, 0, 0.575],
            54: [0, 0.64444, 0, 0, 0.575],
            55: [0.19444, 0.44444, 0, 0, 0.575],
            56: [0, 0.64444, 0, 0, 0.575],
            57: [0.19444, 0.44444, 0, 0, 0.575],
            65: [0, 0.68611, 0, 0, 0.86944],
            66: [0, 0.68611, 0.04835, 0, 0.8664],
            67: [0, 0.68611, 0.06979, 0, 0.81694],
            68: [0, 0.68611, 0.03194, 0, 0.93812],
            69: [0, 0.68611, 0.05451, 0, 0.81007],
            70: [0, 0.68611, 0.15972, 0, 0.68889],
            71: [0, 0.68611, 0, 0, 0.88673],
            72: [0, 0.68611, 0.08229, 0, 0.98229],
            73: [0, 0.68611, 0.07778, 0, 0.51111],
            74: [0, 0.68611, 0.10069, 0, 0.63125],
            75: [0, 0.68611, 0.06979, 0, 0.97118],
            76: [0, 0.68611, 0, 0, 0.75555],
            77: [0, 0.68611, 0.11424, 0, 1.14201],
            78: [0, 0.68611, 0.11424, 0, 0.95034],
            79: [0, 0.68611, 0.03194, 0, 0.83666],
            80: [0, 0.68611, 0.15972, 0, 0.72309],
            81: [0.19444, 0.68611, 0, 0, 0.86861],
            82: [0, 0.68611, 0.00421, 0, 0.87235],
            83: [0, 0.68611, 0.05382, 0, 0.69271],
            84: [0, 0.68611, 0.15972, 0, 0.63663],
            85: [0, 0.68611, 0.11424, 0, 0.80027],
            86: [0, 0.68611, 0.25555, 0, 0.67778],
            87: [0, 0.68611, 0.15972, 0, 1.09305],
            88: [0, 0.68611, 0.07778, 0, 0.94722],
            89: [0, 0.68611, 0.25555, 0, 0.67458],
            90: [0, 0.68611, 0.06979, 0, 0.77257],
            97: [0, 0.44444, 0, 0, 0.63287],
            98: [0, 0.69444, 0, 0, 0.52083],
            99: [0, 0.44444, 0, 0, 0.51342],
            100: [0, 0.69444, 0, 0, 0.60972],
            101: [0, 0.44444, 0, 0, 0.55361],
            102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
            103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
            104: [0, 0.69444, 0, 0, 0.66759],
            105: [0, 0.69326, 0, 0, 0.4048],
            106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
            107: [0, 0.69444, 0.01852, 0, 0.6037],
            108: [0, 0.69444, 0.0088, 0, 0.34815],
            109: [0, 0.44444, 0, 0, 1.0324],
            110: [0, 0.44444, 0, 0, 0.71296],
            111: [0, 0.44444, 0, 0, 0.58472],
            112: [0.19444, 0.44444, 0, 0, 0.60092],
            113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
            114: [0, 0.44444, 0.03194, 0, 0.5287],
            115: [0, 0.44444, 0, 0, 0.53125],
            116: [0, 0.63492, 0, 0, 0.41528],
            117: [0, 0.44444, 0, 0, 0.68102],
            118: [0, 0.44444, 0.03704, 0, 0.56666],
            119: [0, 0.44444, 0.02778, 0, 0.83148],
            120: [0, 0.44444, 0, 0, 0.65903],
            121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
            122: [0, 0.44444, 0.04213, 0, 0.55509],
            160: [0, 0, 0, 0, 0.25],
            915: [0, 0.68611, 0.15972, 0, 0.65694],
            916: [0, 0.68611, 0, 0, 0.95833],
            920: [0, 0.68611, 0.03194, 0, 0.86722],
            923: [0, 0.68611, 0, 0, 0.80555],
            926: [0, 0.68611, 0.07458, 0, 0.84125],
            928: [0, 0.68611, 0.08229, 0, 0.98229],
            931: [0, 0.68611, 0.05451, 0, 0.88507],
            933: [0, 0.68611, 0.15972, 0, 0.67083],
            934: [0, 0.68611, 0, 0, 0.76666],
            936: [0, 0.68611, 0.11653, 0, 0.71402],
            937: [0, 0.68611, 0.04835, 0, 0.8789],
            945: [0, 0.44444, 0, 0, 0.76064],
            946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
            947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
            948: [0, 0.69444, 0.03819, 0, 0.52222],
            949: [0, 0.44444, 0, 0, 0.52882],
            950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
            951: [0.19444, 0.44444, 0.03704, 0, 0.6],
            952: [0, 0.69444, 0.03194, 0, 0.5618],
            953: [0, 0.44444, 0, 0, 0.41204],
            954: [0, 0.44444, 0, 0, 0.66759],
            955: [0, 0.69444, 0, 0, 0.67083],
            956: [0.19444, 0.44444, 0, 0, 0.70787],
            957: [0, 0.44444, 0.06898, 0, 0.57685],
            958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
            959: [0, 0.44444, 0, 0, 0.58472],
            960: [0, 0.44444, 0.03704, 0, 0.68241],
            961: [0.19444, 0.44444, 0, 0, 0.6118],
            962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
            963: [0, 0.44444, 0.03704, 0, 0.68588],
            964: [0, 0.44444, 0.13472, 0, 0.52083],
            965: [0, 0.44444, 0.03704, 0, 0.63055],
            966: [0.19444, 0.44444, 0, 0, 0.74722],
            967: [0.19444, 0.44444, 0, 0, 0.71805],
            968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
            969: [0, 0.44444, 0.03704, 0, 0.71782],
            977: [0, 0.69444, 0, 0, 0.69155],
            981: [0.19444, 0.69444, 0, 0, 0.7125],
            982: [0, 0.44444, 0.03194, 0, 0.975],
            1009: [0.19444, 0.44444, 0, 0, 0.6118],
            1013: [0, 0.44444, 0, 0, 0.48333],
            57649: [0, 0.44444, 0, 0, 0.39352],
            57911: [0.19444, 0.44444, 0, 0, 0.43889],
        },
        "Math-Italic": {
            32: [0, 0, 0, 0, 0.25],
            48: [0, 0.43056, 0, 0, 0.5],
            49: [0, 0.43056, 0, 0, 0.5],
            50: [0, 0.43056, 0, 0, 0.5],
            51: [0.19444, 0.43056, 0, 0, 0.5],
            52: [0.19444, 0.43056, 0, 0, 0.5],
            53: [0.19444, 0.43056, 0, 0, 0.5],
            54: [0, 0.64444, 0, 0, 0.5],
            55: [0.19444, 0.43056, 0, 0, 0.5],
            56: [0, 0.64444, 0, 0, 0.5],
            57: [0.19444, 0.43056, 0, 0, 0.5],
            65: [0, 0.68333, 0, 0.13889, 0.75],
            66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
            67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
            68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
            69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
            70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
            71: [0, 0.68333, 0, 0.08334, 0.78625],
            72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
            73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
            74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
            75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
            76: [0, 0.68333, 0, 0.02778, 0.68056],
            77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
            78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
            79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
            80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
            81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
            82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
            83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
            84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
            85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
            86: [0, 0.68333, 0.22222, 0, 0.58333],
            87: [0, 0.68333, 0.13889, 0, 0.94445],
            88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
            89: [0, 0.68333, 0.22222, 0, 0.58056],
            90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
            97: [0, 0.43056, 0, 0, 0.52859],
            98: [0, 0.69444, 0, 0, 0.42917],
            99: [0, 0.43056, 0, 0.05556, 0.43276],
            100: [0, 0.69444, 0, 0.16667, 0.52049],
            101: [0, 0.43056, 0, 0.05556, 0.46563],
            102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
            103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
            104: [0, 0.69444, 0, 0, 0.57616],
            105: [0, 0.65952, 0, 0, 0.34451],
            106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
            107: [0, 0.69444, 0.03148, 0, 0.5206],
            108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
            109: [0, 0.43056, 0, 0, 0.87801],
            110: [0, 0.43056, 0, 0, 0.60023],
            111: [0, 0.43056, 0, 0.05556, 0.48472],
            112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
            113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
            114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
            115: [0, 0.43056, 0, 0.05556, 0.46875],
            116: [0, 0.61508, 0, 0.08334, 0.36111],
            117: [0, 0.43056, 0, 0.02778, 0.57246],
            118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
            119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
            120: [0, 0.43056, 0, 0.02778, 0.57153],
            121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
            122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
            160: [0, 0, 0, 0, 0.25],
            915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
            916: [0, 0.68333, 0, 0.16667, 0.83334],
            920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
            923: [0, 0.68333, 0, 0.16667, 0.69445],
            926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
            928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
            931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
            933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
            934: [0, 0.68333, 0, 0.08334, 0.66667],
            936: [0, 0.68333, 0.11, 0.05556, 0.61222],
            937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
            945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
            946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
            947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
            948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
            949: [0, 0.43056, 0, 0.08334, 0.46632],
            950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
            951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
            952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
            953: [0, 0.43056, 0, 0.05556, 0.35394],
            954: [0, 0.43056, 0, 0, 0.57616],
            955: [0, 0.69444, 0, 0, 0.58334],
            956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
            957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
            958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
            959: [0, 0.43056, 0, 0.05556, 0.48472],
            960: [0, 0.43056, 0.03588, 0, 0.57003],
            961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
            962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
            963: [0, 0.43056, 0.03588, 0, 0.57141],
            964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
            965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
            966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
            967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
            968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
            969: [0, 0.43056, 0.03588, 0, 0.62245],
            977: [0, 0.69444, 0, 0.08334, 0.59144],
            981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
            982: [0, 0.43056, 0.02778, 0, 0.82813],
            1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
            1013: [0, 0.43056, 0, 0.05556, 0.4059],
            57649: [0, 0.43056, 0, 0.02778, 0.32246],
            57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
        },
        "SansSerif-Bold": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.36667],
            34: [0, 0.69444, 0, 0, 0.55834],
            35: [0.19444, 0.69444, 0, 0, 0.91667],
            36: [0.05556, 0.75, 0, 0, 0.55],
            37: [0.05556, 0.75, 0, 0, 1.02912],
            38: [0, 0.69444, 0, 0, 0.83056],
            39: [0, 0.69444, 0, 0, 0.30556],
            40: [0.25, 0.75, 0, 0, 0.42778],
            41: [0.25, 0.75, 0, 0, 0.42778],
            42: [0, 0.75, 0, 0, 0.55],
            43: [0.11667, 0.61667, 0, 0, 0.85556],
            44: [0.10556, 0.13056, 0, 0, 0.30556],
            45: [0, 0.45833, 0, 0, 0.36667],
            46: [0, 0.13056, 0, 0, 0.30556],
            47: [0.25, 0.75, 0, 0, 0.55],
            48: [0, 0.69444, 0, 0, 0.55],
            49: [0, 0.69444, 0, 0, 0.55],
            50: [0, 0.69444, 0, 0, 0.55],
            51: [0, 0.69444, 0, 0, 0.55],
            52: [0, 0.69444, 0, 0, 0.55],
            53: [0, 0.69444, 0, 0, 0.55],
            54: [0, 0.69444, 0, 0, 0.55],
            55: [0, 0.69444, 0, 0, 0.55],
            56: [0, 0.69444, 0, 0, 0.55],
            57: [0, 0.69444, 0, 0, 0.55],
            58: [0, 0.45833, 0, 0, 0.30556],
            59: [0.10556, 0.45833, 0, 0, 0.30556],
            61: [-0.09375, 0.40625, 0, 0, 0.85556],
            63: [0, 0.69444, 0, 0, 0.51945],
            64: [0, 0.69444, 0, 0, 0.73334],
            65: [0, 0.69444, 0, 0, 0.73334],
            66: [0, 0.69444, 0, 0, 0.73334],
            67: [0, 0.69444, 0, 0, 0.70278],
            68: [0, 0.69444, 0, 0, 0.79445],
            69: [0, 0.69444, 0, 0, 0.64167],
            70: [0, 0.69444, 0, 0, 0.61111],
            71: [0, 0.69444, 0, 0, 0.73334],
            72: [0, 0.69444, 0, 0, 0.79445],
            73: [0, 0.69444, 0, 0, 0.33056],
            74: [0, 0.69444, 0, 0, 0.51945],
            75: [0, 0.69444, 0, 0, 0.76389],
            76: [0, 0.69444, 0, 0, 0.58056],
            77: [0, 0.69444, 0, 0, 0.97778],
            78: [0, 0.69444, 0, 0, 0.79445],
            79: [0, 0.69444, 0, 0, 0.79445],
            80: [0, 0.69444, 0, 0, 0.70278],
            81: [0.10556, 0.69444, 0, 0, 0.79445],
            82: [0, 0.69444, 0, 0, 0.70278],
            83: [0, 0.69444, 0, 0, 0.61111],
            84: [0, 0.69444, 0, 0, 0.73334],
            85: [0, 0.69444, 0, 0, 0.76389],
            86: [0, 0.69444, 0.01528, 0, 0.73334],
            87: [0, 0.69444, 0.01528, 0, 1.03889],
            88: [0, 0.69444, 0, 0, 0.73334],
            89: [0, 0.69444, 0.0275, 0, 0.73334],
            90: [0, 0.69444, 0, 0, 0.67223],
            91: [0.25, 0.75, 0, 0, 0.34306],
            93: [0.25, 0.75, 0, 0, 0.34306],
            94: [0, 0.69444, 0, 0, 0.55],
            95: [0.35, 0.10833, 0.03056, 0, 0.55],
            97: [0, 0.45833, 0, 0, 0.525],
            98: [0, 0.69444, 0, 0, 0.56111],
            99: [0, 0.45833, 0, 0, 0.48889],
            100: [0, 0.69444, 0, 0, 0.56111],
            101: [0, 0.45833, 0, 0, 0.51111],
            102: [0, 0.69444, 0.07639, 0, 0.33611],
            103: [0.19444, 0.45833, 0.01528, 0, 0.55],
            104: [0, 0.69444, 0, 0, 0.56111],
            105: [0, 0.69444, 0, 0, 0.25556],
            106: [0.19444, 0.69444, 0, 0, 0.28611],
            107: [0, 0.69444, 0, 0, 0.53056],
            108: [0, 0.69444, 0, 0, 0.25556],
            109: [0, 0.45833, 0, 0, 0.86667],
            110: [0, 0.45833, 0, 0, 0.56111],
            111: [0, 0.45833, 0, 0, 0.55],
            112: [0.19444, 0.45833, 0, 0, 0.56111],
            113: [0.19444, 0.45833, 0, 0, 0.56111],
            114: [0, 0.45833, 0.01528, 0, 0.37222],
            115: [0, 0.45833, 0, 0, 0.42167],
            116: [0, 0.58929, 0, 0, 0.40417],
            117: [0, 0.45833, 0, 0, 0.56111],
            118: [0, 0.45833, 0.01528, 0, 0.5],
            119: [0, 0.45833, 0.01528, 0, 0.74445],
            120: [0, 0.45833, 0, 0, 0.5],
            121: [0.19444, 0.45833, 0.01528, 0, 0.5],
            122: [0, 0.45833, 0, 0, 0.47639],
            126: [0.35, 0.34444, 0, 0, 0.55],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.69444, 0, 0, 0.55],
            176: [0, 0.69444, 0, 0, 0.73334],
            180: [0, 0.69444, 0, 0, 0.55],
            184: [0.17014, 0, 0, 0, 0.48889],
            305: [0, 0.45833, 0, 0, 0.25556],
            567: [0.19444, 0.45833, 0, 0, 0.28611],
            710: [0, 0.69444, 0, 0, 0.55],
            711: [0, 0.63542, 0, 0, 0.55],
            713: [0, 0.63778, 0, 0, 0.55],
            728: [0, 0.69444, 0, 0, 0.55],
            729: [0, 0.69444, 0, 0, 0.30556],
            730: [0, 0.69444, 0, 0, 0.73334],
            732: [0, 0.69444, 0, 0, 0.55],
            733: [0, 0.69444, 0, 0, 0.55],
            915: [0, 0.69444, 0, 0, 0.58056],
            916: [0, 0.69444, 0, 0, 0.91667],
            920: [0, 0.69444, 0, 0, 0.85556],
            923: [0, 0.69444, 0, 0, 0.67223],
            926: [0, 0.69444, 0, 0, 0.73334],
            928: [0, 0.69444, 0, 0, 0.79445],
            931: [0, 0.69444, 0, 0, 0.79445],
            933: [0, 0.69444, 0, 0, 0.85556],
            934: [0, 0.69444, 0, 0, 0.79445],
            936: [0, 0.69444, 0, 0, 0.85556],
            937: [0, 0.69444, 0, 0, 0.79445],
            8211: [0, 0.45833, 0.03056, 0, 0.55],
            8212: [0, 0.45833, 0.03056, 0, 1.10001],
            8216: [0, 0.69444, 0, 0, 0.30556],
            8217: [0, 0.69444, 0, 0, 0.30556],
            8220: [0, 0.69444, 0, 0, 0.55834],
            8221: [0, 0.69444, 0, 0, 0.55834],
        },
        "SansSerif-Italic": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0.05733, 0, 0.31945],
            34: [0, 0.69444, 0.00316, 0, 0.5],
            35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
            36: [0.05556, 0.75, 0.11156, 0, 0.5],
            37: [0.05556, 0.75, 0.03126, 0, 0.83334],
            38: [0, 0.69444, 0.03058, 0, 0.75834],
            39: [0, 0.69444, 0.07816, 0, 0.27778],
            40: [0.25, 0.75, 0.13164, 0, 0.38889],
            41: [0.25, 0.75, 0.02536, 0, 0.38889],
            42: [0, 0.75, 0.11775, 0, 0.5],
            43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
            44: [0.125, 0.08333, 0, 0, 0.27778],
            45: [0, 0.44444, 0.01946, 0, 0.33333],
            46: [0, 0.08333, 0, 0, 0.27778],
            47: [0.25, 0.75, 0.13164, 0, 0.5],
            48: [0, 0.65556, 0.11156, 0, 0.5],
            49: [0, 0.65556, 0.11156, 0, 0.5],
            50: [0, 0.65556, 0.11156, 0, 0.5],
            51: [0, 0.65556, 0.11156, 0, 0.5],
            52: [0, 0.65556, 0.11156, 0, 0.5],
            53: [0, 0.65556, 0.11156, 0, 0.5],
            54: [0, 0.65556, 0.11156, 0, 0.5],
            55: [0, 0.65556, 0.11156, 0, 0.5],
            56: [0, 0.65556, 0.11156, 0, 0.5],
            57: [0, 0.65556, 0.11156, 0, 0.5],
            58: [0, 0.44444, 0.02502, 0, 0.27778],
            59: [0.125, 0.44444, 0.02502, 0, 0.27778],
            61: [-0.13, 0.37, 0.05087, 0, 0.77778],
            63: [0, 0.69444, 0.11809, 0, 0.47222],
            64: [0, 0.69444, 0.07555, 0, 0.66667],
            65: [0, 0.69444, 0, 0, 0.66667],
            66: [0, 0.69444, 0.08293, 0, 0.66667],
            67: [0, 0.69444, 0.11983, 0, 0.63889],
            68: [0, 0.69444, 0.07555, 0, 0.72223],
            69: [0, 0.69444, 0.11983, 0, 0.59722],
            70: [0, 0.69444, 0.13372, 0, 0.56945],
            71: [0, 0.69444, 0.11983, 0, 0.66667],
            72: [0, 0.69444, 0.08094, 0, 0.70834],
            73: [0, 0.69444, 0.13372, 0, 0.27778],
            74: [0, 0.69444, 0.08094, 0, 0.47222],
            75: [0, 0.69444, 0.11983, 0, 0.69445],
            76: [0, 0.69444, 0, 0, 0.54167],
            77: [0, 0.69444, 0.08094, 0, 0.875],
            78: [0, 0.69444, 0.08094, 0, 0.70834],
            79: [0, 0.69444, 0.07555, 0, 0.73611],
            80: [0, 0.69444, 0.08293, 0, 0.63889],
            81: [0.125, 0.69444, 0.07555, 0, 0.73611],
            82: [0, 0.69444, 0.08293, 0, 0.64584],
            83: [0, 0.69444, 0.09205, 0, 0.55556],
            84: [0, 0.69444, 0.13372, 0, 0.68056],
            85: [0, 0.69444, 0.08094, 0, 0.6875],
            86: [0, 0.69444, 0.1615, 0, 0.66667],
            87: [0, 0.69444, 0.1615, 0, 0.94445],
            88: [0, 0.69444, 0.13372, 0, 0.66667],
            89: [0, 0.69444, 0.17261, 0, 0.66667],
            90: [0, 0.69444, 0.11983, 0, 0.61111],
            91: [0.25, 0.75, 0.15942, 0, 0.28889],
            93: [0.25, 0.75, 0.08719, 0, 0.28889],
            94: [0, 0.69444, 0.0799, 0, 0.5],
            95: [0.35, 0.09444, 0.08616, 0, 0.5],
            97: [0, 0.44444, 0.00981, 0, 0.48056],
            98: [0, 0.69444, 0.03057, 0, 0.51667],
            99: [0, 0.44444, 0.08336, 0, 0.44445],
            100: [0, 0.69444, 0.09483, 0, 0.51667],
            101: [0, 0.44444, 0.06778, 0, 0.44445],
            102: [0, 0.69444, 0.21705, 0, 0.30556],
            103: [0.19444, 0.44444, 0.10836, 0, 0.5],
            104: [0, 0.69444, 0.01778, 0, 0.51667],
            105: [0, 0.67937, 0.09718, 0, 0.23889],
            106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
            107: [0, 0.69444, 0.08336, 0, 0.48889],
            108: [0, 0.69444, 0.09483, 0, 0.23889],
            109: [0, 0.44444, 0.01778, 0, 0.79445],
            110: [0, 0.44444, 0.01778, 0, 0.51667],
            111: [0, 0.44444, 0.06613, 0, 0.5],
            112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
            113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
            114: [0, 0.44444, 0.10836, 0, 0.34167],
            115: [0, 0.44444, 0.0778, 0, 0.38333],
            116: [0, 0.57143, 0.07225, 0, 0.36111],
            117: [0, 0.44444, 0.04169, 0, 0.51667],
            118: [0, 0.44444, 0.10836, 0, 0.46111],
            119: [0, 0.44444, 0.10836, 0, 0.68334],
            120: [0, 0.44444, 0.09169, 0, 0.46111],
            121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
            122: [0, 0.44444, 0.08752, 0, 0.43472],
            126: [0.35, 0.32659, 0.08826, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.67937, 0.06385, 0, 0.5],
            176: [0, 0.69444, 0, 0, 0.73752],
            184: [0.17014, 0, 0, 0, 0.44445],
            305: [0, 0.44444, 0.04169, 0, 0.23889],
            567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
            710: [0, 0.69444, 0.0799, 0, 0.5],
            711: [0, 0.63194, 0.08432, 0, 0.5],
            713: [0, 0.60889, 0.08776, 0, 0.5],
            714: [0, 0.69444, 0.09205, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0.09483, 0, 0.5],
            729: [0, 0.67937, 0.07774, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.73752],
            732: [0, 0.67659, 0.08826, 0, 0.5],
            733: [0, 0.69444, 0.09205, 0, 0.5],
            915: [0, 0.69444, 0.13372, 0, 0.54167],
            916: [0, 0.69444, 0, 0, 0.83334],
            920: [0, 0.69444, 0.07555, 0, 0.77778],
            923: [0, 0.69444, 0, 0, 0.61111],
            926: [0, 0.69444, 0.12816, 0, 0.66667],
            928: [0, 0.69444, 0.08094, 0, 0.70834],
            931: [0, 0.69444, 0.11983, 0, 0.72222],
            933: [0, 0.69444, 0.09031, 0, 0.77778],
            934: [0, 0.69444, 0.04603, 0, 0.72222],
            936: [0, 0.69444, 0.09031, 0, 0.77778],
            937: [0, 0.69444, 0.08293, 0, 0.72222],
            8211: [0, 0.44444, 0.08616, 0, 0.5],
            8212: [0, 0.44444, 0.08616, 0, 1],
            8216: [0, 0.69444, 0.07816, 0, 0.27778],
            8217: [0, 0.69444, 0.07816, 0, 0.27778],
            8220: [0, 0.69444, 0.14205, 0, 0.5],
            8221: [0, 0.69444, 0.00316, 0, 0.5],
        },
        "SansSerif-Regular": {
            32: [0, 0, 0, 0, 0.25],
            33: [0, 0.69444, 0, 0, 0.31945],
            34: [0, 0.69444, 0, 0, 0.5],
            35: [0.19444, 0.69444, 0, 0, 0.83334],
            36: [0.05556, 0.75, 0, 0, 0.5],
            37: [0.05556, 0.75, 0, 0, 0.83334],
            38: [0, 0.69444, 0, 0, 0.75834],
            39: [0, 0.69444, 0, 0, 0.27778],
            40: [0.25, 0.75, 0, 0, 0.38889],
            41: [0.25, 0.75, 0, 0, 0.38889],
            42: [0, 0.75, 0, 0, 0.5],
            43: [0.08333, 0.58333, 0, 0, 0.77778],
            44: [0.125, 0.08333, 0, 0, 0.27778],
            45: [0, 0.44444, 0, 0, 0.33333],
            46: [0, 0.08333, 0, 0, 0.27778],
            47: [0.25, 0.75, 0, 0, 0.5],
            48: [0, 0.65556, 0, 0, 0.5],
            49: [0, 0.65556, 0, 0, 0.5],
            50: [0, 0.65556, 0, 0, 0.5],
            51: [0, 0.65556, 0, 0, 0.5],
            52: [0, 0.65556, 0, 0, 0.5],
            53: [0, 0.65556, 0, 0, 0.5],
            54: [0, 0.65556, 0, 0, 0.5],
            55: [0, 0.65556, 0, 0, 0.5],
            56: [0, 0.65556, 0, 0, 0.5],
            57: [0, 0.65556, 0, 0, 0.5],
            58: [0, 0.44444, 0, 0, 0.27778],
            59: [0.125, 0.44444, 0, 0, 0.27778],
            61: [-0.13, 0.37, 0, 0, 0.77778],
            63: [0, 0.69444, 0, 0, 0.47222],
            64: [0, 0.69444, 0, 0, 0.66667],
            65: [0, 0.69444, 0, 0, 0.66667],
            66: [0, 0.69444, 0, 0, 0.66667],
            67: [0, 0.69444, 0, 0, 0.63889],
            68: [0, 0.69444, 0, 0, 0.72223],
            69: [0, 0.69444, 0, 0, 0.59722],
            70: [0, 0.69444, 0, 0, 0.56945],
            71: [0, 0.69444, 0, 0, 0.66667],
            72: [0, 0.69444, 0, 0, 0.70834],
            73: [0, 0.69444, 0, 0, 0.27778],
            74: [0, 0.69444, 0, 0, 0.47222],
            75: [0, 0.69444, 0, 0, 0.69445],
            76: [0, 0.69444, 0, 0, 0.54167],
            77: [0, 0.69444, 0, 0, 0.875],
            78: [0, 0.69444, 0, 0, 0.70834],
            79: [0, 0.69444, 0, 0, 0.73611],
            80: [0, 0.69444, 0, 0, 0.63889],
            81: [0.125, 0.69444, 0, 0, 0.73611],
            82: [0, 0.69444, 0, 0, 0.64584],
            83: [0, 0.69444, 0, 0, 0.55556],
            84: [0, 0.69444, 0, 0, 0.68056],
            85: [0, 0.69444, 0, 0, 0.6875],
            86: [0, 0.69444, 0.01389, 0, 0.66667],
            87: [0, 0.69444, 0.01389, 0, 0.94445],
            88: [0, 0.69444, 0, 0, 0.66667],
            89: [0, 0.69444, 0.025, 0, 0.66667],
            90: [0, 0.69444, 0, 0, 0.61111],
            91: [0.25, 0.75, 0, 0, 0.28889],
            93: [0.25, 0.75, 0, 0, 0.28889],
            94: [0, 0.69444, 0, 0, 0.5],
            95: [0.35, 0.09444, 0.02778, 0, 0.5],
            97: [0, 0.44444, 0, 0, 0.48056],
            98: [0, 0.69444, 0, 0, 0.51667],
            99: [0, 0.44444, 0, 0, 0.44445],
            100: [0, 0.69444, 0, 0, 0.51667],
            101: [0, 0.44444, 0, 0, 0.44445],
            102: [0, 0.69444, 0.06944, 0, 0.30556],
            103: [0.19444, 0.44444, 0.01389, 0, 0.5],
            104: [0, 0.69444, 0, 0, 0.51667],
            105: [0, 0.67937, 0, 0, 0.23889],
            106: [0.19444, 0.67937, 0, 0, 0.26667],
            107: [0, 0.69444, 0, 0, 0.48889],
            108: [0, 0.69444, 0, 0, 0.23889],
            109: [0, 0.44444, 0, 0, 0.79445],
            110: [0, 0.44444, 0, 0, 0.51667],
            111: [0, 0.44444, 0, 0, 0.5],
            112: [0.19444, 0.44444, 0, 0, 0.51667],
            113: [0.19444, 0.44444, 0, 0, 0.51667],
            114: [0, 0.44444, 0.01389, 0, 0.34167],
            115: [0, 0.44444, 0, 0, 0.38333],
            116: [0, 0.57143, 0, 0, 0.36111],
            117: [0, 0.44444, 0, 0, 0.51667],
            118: [0, 0.44444, 0.01389, 0, 0.46111],
            119: [0, 0.44444, 0.01389, 0, 0.68334],
            120: [0, 0.44444, 0, 0, 0.46111],
            121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
            122: [0, 0.44444, 0, 0, 0.43472],
            126: [0.35, 0.32659, 0, 0, 0.5],
            160: [0, 0, 0, 0, 0.25],
            168: [0, 0.67937, 0, 0, 0.5],
            176: [0, 0.69444, 0, 0, 0.66667],
            184: [0.17014, 0, 0, 0, 0.44445],
            305: [0, 0.44444, 0, 0, 0.23889],
            567: [0.19444, 0.44444, 0, 0, 0.26667],
            710: [0, 0.69444, 0, 0, 0.5],
            711: [0, 0.63194, 0, 0, 0.5],
            713: [0, 0.60889, 0, 0, 0.5],
            714: [0, 0.69444, 0, 0, 0.5],
            715: [0, 0.69444, 0, 0, 0.5],
            728: [0, 0.69444, 0, 0, 0.5],
            729: [0, 0.67937, 0, 0, 0.27778],
            730: [0, 0.69444, 0, 0, 0.66667],
            732: [0, 0.67659, 0, 0, 0.5],
            733: [0, 0.69444, 0, 0, 0.5],
            915: [0, 0.69444, 0, 0, 0.54167],
            916: [0, 0.69444, 0, 0, 0.83334],
            920: [0, 0.69444, 0, 0, 0.77778],
            923: [0, 0.69444, 0, 0, 0.61111],
            926: [0, 0.69444, 0, 0, 0.66667],
            928: [0, 0.69444, 0, 0, 0.70834],
            931: [0, 0.69444, 0, 0, 0.72222],
            933: [0, 0.69444, 0, 0, 0.77778],
            934: [0, 0.69444, 0, 0, 0.72222],
            936: [0, 0.69444, 0, 0, 0.77778],
            937: [0, 0.69444, 0, 0, 0.72222],
            8211: [0, 0.44444, 0.02778, 0, 0.5],
            8212: [0, 0.44444, 0.02778, 0, 1],
            8216: [0, 0.69444, 0, 0, 0.27778],
            8217: [0, 0.69444, 0, 0, 0.27778],
            8220: [0, 0.69444, 0, 0, 0.5],
            8221: [0, 0.69444, 0, 0, 0.5],
        },
        "Script-Regular": {
            32: [0, 0, 0, 0, 0.25],
            65: [0, 0.7, 0.22925, 0, 0.80253],
            66: [0, 0.7, 0.04087, 0, 0.90757],
            67: [0, 0.7, 0.1689, 0, 0.66619],
            68: [0, 0.7, 0.09371, 0, 0.77443],
            69: [0, 0.7, 0.18583, 0, 0.56162],
            70: [0, 0.7, 0.13634, 0, 0.89544],
            71: [0, 0.7, 0.17322, 0, 0.60961],
            72: [0, 0.7, 0.29694, 0, 0.96919],
            73: [0, 0.7, 0.19189, 0, 0.80907],
            74: [0.27778, 0.7, 0.19189, 0, 1.05159],
            75: [0, 0.7, 0.31259, 0, 0.91364],
            76: [0, 0.7, 0.19189, 0, 0.87373],
            77: [0, 0.7, 0.15981, 0, 1.08031],
            78: [0, 0.7, 0.3525, 0, 0.9015],
            79: [0, 0.7, 0.08078, 0, 0.73787],
            80: [0, 0.7, 0.08078, 0, 1.01262],
            81: [0, 0.7, 0.03305, 0, 0.88282],
            82: [0, 0.7, 0.06259, 0, 0.85],
            83: [0, 0.7, 0.19189, 0, 0.86767],
            84: [0, 0.7, 0.29087, 0, 0.74697],
            85: [0, 0.7, 0.25815, 0, 0.79996],
            86: [0, 0.7, 0.27523, 0, 0.62204],
            87: [0, 0.7, 0.27523, 0, 0.80532],
            88: [0, 0.7, 0.26006, 0, 0.94445],
            89: [0, 0.7, 0.2939, 0, 0.70961],
            90: [0, 0.7, 0.24037, 0, 0.8212],
            160: [0, 0, 0, 0, 0.25],
        },
        "Size1-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.35001, 0.85, 0, 0, 0.45834],
            41: [0.35001, 0.85, 0, 0, 0.45834],
            47: [0.35001, 0.85, 0, 0, 0.57778],
            91: [0.35001, 0.85, 0, 0, 0.41667],
            92: [0.35001, 0.85, 0, 0, 0.57778],
            93: [0.35001, 0.85, 0, 0, 0.41667],
            123: [0.35001, 0.85, 0, 0, 0.58334],
            125: [0.35001, 0.85, 0, 0, 0.58334],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.72222, 0, 0, 0.55556],
            732: [0, 0.72222, 0, 0, 0.55556],
            770: [0, 0.72222, 0, 0, 0.55556],
            771: [0, 0.72222, 0, 0, 0.55556],
            8214: [-99e-5, 0.601, 0, 0, 0.77778],
            8593: [1e-5, 0.6, 0, 0, 0.66667],
            8595: [1e-5, 0.6, 0, 0, 0.66667],
            8657: [1e-5, 0.6, 0, 0, 0.77778],
            8659: [1e-5, 0.6, 0, 0, 0.77778],
            8719: [0.25001, 0.75, 0, 0, 0.94445],
            8720: [0.25001, 0.75, 0, 0, 0.94445],
            8721: [0.25001, 0.75, 0, 0, 1.05556],
            8730: [0.35001, 0.85, 0, 0, 1],
            8739: [-0.00599, 0.606, 0, 0, 0.33333],
            8741: [-0.00599, 0.606, 0, 0, 0.55556],
            8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
            8748: [0.306, 0.805, 0.19445, 0, 0.47222],
            8749: [0.306, 0.805, 0.19445, 0, 0.47222],
            8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
            8896: [0.25001, 0.75, 0, 0, 0.83334],
            8897: [0.25001, 0.75, 0, 0, 0.83334],
            8898: [0.25001, 0.75, 0, 0, 0.83334],
            8899: [0.25001, 0.75, 0, 0, 0.83334],
            8968: [0.35001, 0.85, 0, 0, 0.47222],
            8969: [0.35001, 0.85, 0, 0, 0.47222],
            8970: [0.35001, 0.85, 0, 0, 0.47222],
            8971: [0.35001, 0.85, 0, 0, 0.47222],
            9168: [-99e-5, 0.601, 0, 0, 0.66667],
            10216: [0.35001, 0.85, 0, 0, 0.47222],
            10217: [0.35001, 0.85, 0, 0, 0.47222],
            10752: [0.25001, 0.75, 0, 0, 1.11111],
            10753: [0.25001, 0.75, 0, 0, 1.11111],
            10754: [0.25001, 0.75, 0, 0, 1.11111],
            10756: [0.25001, 0.75, 0, 0, 0.83334],
            10758: [0.25001, 0.75, 0, 0, 0.83334],
        },
        "Size2-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.65002, 1.15, 0, 0, 0.59722],
            41: [0.65002, 1.15, 0, 0, 0.59722],
            47: [0.65002, 1.15, 0, 0, 0.81111],
            91: [0.65002, 1.15, 0, 0, 0.47222],
            92: [0.65002, 1.15, 0, 0, 0.81111],
            93: [0.65002, 1.15, 0, 0, 0.47222],
            123: [0.65002, 1.15, 0, 0, 0.66667],
            125: [0.65002, 1.15, 0, 0, 0.66667],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.75, 0, 0, 1],
            732: [0, 0.75, 0, 0, 1],
            770: [0, 0.75, 0, 0, 1],
            771: [0, 0.75, 0, 0, 1],
            8719: [0.55001, 1.05, 0, 0, 1.27778],
            8720: [0.55001, 1.05, 0, 0, 1.27778],
            8721: [0.55001, 1.05, 0, 0, 1.44445],
            8730: [0.65002, 1.15, 0, 0, 1],
            8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
            8748: [0.862, 1.36, 0.44445, 0, 0.55556],
            8749: [0.862, 1.36, 0.44445, 0, 0.55556],
            8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
            8896: [0.55001, 1.05, 0, 0, 1.11111],
            8897: [0.55001, 1.05, 0, 0, 1.11111],
            8898: [0.55001, 1.05, 0, 0, 1.11111],
            8899: [0.55001, 1.05, 0, 0, 1.11111],
            8968: [0.65002, 1.15, 0, 0, 0.52778],
            8969: [0.65002, 1.15, 0, 0, 0.52778],
            8970: [0.65002, 1.15, 0, 0, 0.52778],
            8971: [0.65002, 1.15, 0, 0, 0.52778],
            10216: [0.65002, 1.15, 0, 0, 0.61111],
            10217: [0.65002, 1.15, 0, 0, 0.61111],
            10752: [0.55001, 1.05, 0, 0, 1.51112],
            10753: [0.55001, 1.05, 0, 0, 1.51112],
            10754: [0.55001, 1.05, 0, 0, 1.51112],
            10756: [0.55001, 1.05, 0, 0, 1.11111],
            10758: [0.55001, 1.05, 0, 0, 1.11111],
        },
        "Size3-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [0.95003, 1.45, 0, 0, 0.73611],
            41: [0.95003, 1.45, 0, 0, 0.73611],
            47: [0.95003, 1.45, 0, 0, 1.04445],
            91: [0.95003, 1.45, 0, 0, 0.52778],
            92: [0.95003, 1.45, 0, 0, 1.04445],
            93: [0.95003, 1.45, 0, 0, 0.52778],
            123: [0.95003, 1.45, 0, 0, 0.75],
            125: [0.95003, 1.45, 0, 0, 0.75],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.75, 0, 0, 1.44445],
            732: [0, 0.75, 0, 0, 1.44445],
            770: [0, 0.75, 0, 0, 1.44445],
            771: [0, 0.75, 0, 0, 1.44445],
            8730: [0.95003, 1.45, 0, 0, 1],
            8968: [0.95003, 1.45, 0, 0, 0.58334],
            8969: [0.95003, 1.45, 0, 0, 0.58334],
            8970: [0.95003, 1.45, 0, 0, 0.58334],
            8971: [0.95003, 1.45, 0, 0, 0.58334],
            10216: [0.95003, 1.45, 0, 0, 0.75],
            10217: [0.95003, 1.45, 0, 0, 0.75],
        },
        "Size4-Regular": {
            32: [0, 0, 0, 0, 0.25],
            40: [1.25003, 1.75, 0, 0, 0.79167],
            41: [1.25003, 1.75, 0, 0, 0.79167],
            47: [1.25003, 1.75, 0, 0, 1.27778],
            91: [1.25003, 1.75, 0, 0, 0.58334],
            92: [1.25003, 1.75, 0, 0, 1.27778],
            93: [1.25003, 1.75, 0, 0, 0.58334],
            123: [1.25003, 1.75, 0, 0, 0.80556],
            125: [1.25003, 1.75, 0, 0, 0.80556],
            160: [0, 0, 0, 0, 0.25],
            710: [0, 0.825, 0, 0, 1.8889],
            732: [0, 0.825, 0, 0, 1.8889],
            770: [0, 0.825, 0, 0, 1.8889],
            771: [0, 0.825, 0, 0, 1.8889],
            8730: [1.25003, 1.75, 0, 0, 1],
            8968: [1.25003, 1.75, 0, 0, 0.63889],
            8969: [1.25003, 1.75, 0, 0, 0.63889],
            8970: [1.25003, 1.75, 0, 0, 0.63889],
            8971: [1.25003, 1.75, 0, 0, 0.63889],
            9115: [0.64502, 1.155, 0, 0, 0.875],
            9116: [1e-5, 0.6, 0, 0, 0.875],
            9117: [0.64502, 1.155, 0, 0, 0.875],
            9118: [0.64502, 1.155, 0, 0, 0.875],
            9119: [1e-5, 0.6, 0, 0, 0.875],
            9120: [0.64502, 1.155, 0, 0, 0.875],
            9121: [0.64502, 1.155, 0, 0, 0.66667],
            9122: [-99e-5, 0.601, 0, 0, 0.66667],
            9123: [0.64502, 1.155, 0, 0, 0.66667],
            9124: [0.64502, 1.155, 0, 0, 0.66667],
            9125: [-99e-5, 0.601, 0, 0, 0.66667],
            9126: [0.64502, 1.155, 0, 0, 0.66667],
            9127: [1e-5, 0.9, 0, 0, 0.88889],
            9128: [0.65002, 1.15, 0, 0, 0.88889],
            9129: [0.90001, 0, 0, 0, 0.88889],
            9130: [0, 0.3, 0, 0, 0.88889],
            9131: [1e-5, 0.9, 0, 0, 0.88889],
            9132: [0.65002, 1.15, 0, 0, 0.88889],
            9133: [0.90001, 0, 0, 0, 0.88889],
            9143: [0.88502, 0.915, 0, 0, 1.05556],
            10216: [1.25003, 1.75, 0, 0, 0.80556],
            10217: [1.25003, 1.75, 0, 0, 0.80556],
            57344: [-0.00499, 0.605, 0, 0, 1.05556],
            57345: [-0.00499, 0.605, 0, 0, 1.05556],
            57680: [0, 0.12, 0, 0, 0.45],
            57681: [0, 0.12, 0, 0, 0.45],
            57682: [0, 0.12, 0, 0, 0.45],
            57683: [0, 0.12, 0, 0, 0.45],
        },
        "Typewriter-Regular": {
            32: [0, 0, 0, 0, 0.525],
            33: [0, 0.61111, 0, 0, 0.525],
            34: [0, 0.61111, 0, 0, 0.525],
            35: [0, 0.61111, 0, 0, 0.525],
            36: [0.08333, 0.69444, 0, 0, 0.525],
            37: [0.08333, 0.69444, 0, 0, 0.525],
            38: [0, 0.61111, 0, 0, 0.525],
            39: [0, 0.61111, 0, 0, 0.525],
            40: [0.08333, 0.69444, 0, 0, 0.525],
            41: [0.08333, 0.69444, 0, 0, 0.525],
            42: [0, 0.52083, 0, 0, 0.525],
            43: [-0.08056, 0.53055, 0, 0, 0.525],
            44: [0.13889, 0.125, 0, 0, 0.525],
            45: [-0.08056, 0.53055, 0, 0, 0.525],
            46: [0, 0.125, 0, 0, 0.525],
            47: [0.08333, 0.69444, 0, 0, 0.525],
            48: [0, 0.61111, 0, 0, 0.525],
            49: [0, 0.61111, 0, 0, 0.525],
            50: [0, 0.61111, 0, 0, 0.525],
            51: [0, 0.61111, 0, 0, 0.525],
            52: [0, 0.61111, 0, 0, 0.525],
            53: [0, 0.61111, 0, 0, 0.525],
            54: [0, 0.61111, 0, 0, 0.525],
            55: [0, 0.61111, 0, 0, 0.525],
            56: [0, 0.61111, 0, 0, 0.525],
            57: [0, 0.61111, 0, 0, 0.525],
            58: [0, 0.43056, 0, 0, 0.525],
            59: [0.13889, 0.43056, 0, 0, 0.525],
            60: [-0.05556, 0.55556, 0, 0, 0.525],
            61: [-0.19549, 0.41562, 0, 0, 0.525],
            62: [-0.05556, 0.55556, 0, 0, 0.525],
            63: [0, 0.61111, 0, 0, 0.525],
            64: [0, 0.61111, 0, 0, 0.525],
            65: [0, 0.61111, 0, 0, 0.525],
            66: [0, 0.61111, 0, 0, 0.525],
            67: [0, 0.61111, 0, 0, 0.525],
            68: [0, 0.61111, 0, 0, 0.525],
            69: [0, 0.61111, 0, 0, 0.525],
            70: [0, 0.61111, 0, 0, 0.525],
            71: [0, 0.61111, 0, 0, 0.525],
            72: [0, 0.61111, 0, 0, 0.525],
            73: [0, 0.61111, 0, 0, 0.525],
            74: [0, 0.61111, 0, 0, 0.525],
            75: [0, 0.61111, 0, 0, 0.525],
            76: [0, 0.61111, 0, 0, 0.525],
            77: [0, 0.61111, 0, 0, 0.525],
            78: [0, 0.61111, 0, 0, 0.525],
            79: [0, 0.61111, 0, 0, 0.525],
            80: [0, 0.61111, 0, 0, 0.525],
            81: [0.13889, 0.61111, 0, 0, 0.525],
            82: [0, 0.61111, 0, 0, 0.525],
            83: [0, 0.61111, 0, 0, 0.525],
            84: [0, 0.61111, 0, 0, 0.525],
            85: [0, 0.61111, 0, 0, 0.525],
            86: [0, 0.61111, 0, 0, 0.525],
            87: [0, 0.61111, 0, 0, 0.525],
            88: [0, 0.61111, 0, 0, 0.525],
            89: [0, 0.61111, 0, 0, 0.525],
            90: [0, 0.61111, 0, 0, 0.525],
            91: [0.08333, 0.69444, 0, 0, 0.525],
            92: [0.08333, 0.69444, 0, 0, 0.525],
            93: [0.08333, 0.69444, 0, 0, 0.525],
            94: [0, 0.61111, 0, 0, 0.525],
            95: [0.09514, 0, 0, 0, 0.525],
            96: [0, 0.61111, 0, 0, 0.525],
            97: [0, 0.43056, 0, 0, 0.525],
            98: [0, 0.61111, 0, 0, 0.525],
            99: [0, 0.43056, 0, 0, 0.525],
            100: [0, 0.61111, 0, 0, 0.525],
            101: [0, 0.43056, 0, 0, 0.525],
            102: [0, 0.61111, 0, 0, 0.525],
            103: [0.22222, 0.43056, 0, 0, 0.525],
            104: [0, 0.61111, 0, 0, 0.525],
            105: [0, 0.61111, 0, 0, 0.525],
            106: [0.22222, 0.61111, 0, 0, 0.525],
            107: [0, 0.61111, 0, 0, 0.525],
            108: [0, 0.61111, 0, 0, 0.525],
            109: [0, 0.43056, 0, 0, 0.525],
            110: [0, 0.43056, 0, 0, 0.525],
            111: [0, 0.43056, 0, 0, 0.525],
            112: [0.22222, 0.43056, 0, 0, 0.525],
            113: [0.22222, 0.43056, 0, 0, 0.525],
            114: [0, 0.43056, 0, 0, 0.525],
            115: [0, 0.43056, 0, 0, 0.525],
            116: [0, 0.55358, 0, 0, 0.525],
            117: [0, 0.43056, 0, 0, 0.525],
            118: [0, 0.43056, 0, 0, 0.525],
            119: [0, 0.43056, 0, 0, 0.525],
            120: [0, 0.43056, 0, 0, 0.525],
            121: [0.22222, 0.43056, 0, 0, 0.525],
            122: [0, 0.43056, 0, 0, 0.525],
            123: [0.08333, 0.69444, 0, 0, 0.525],
            124: [0.08333, 0.69444, 0, 0, 0.525],
            125: [0.08333, 0.69444, 0, 0, 0.525],
            126: [0, 0.61111, 0, 0, 0.525],
            127: [0, 0.61111, 0, 0, 0.525],
            160: [0, 0, 0, 0, 0.525],
            176: [0, 0.61111, 0, 0, 0.525],
            184: [0.19445, 0, 0, 0, 0.525],
            305: [0, 0.43056, 0, 0, 0.525],
            567: [0.22222, 0.43056, 0, 0, 0.525],
            711: [0, 0.56597, 0, 0, 0.525],
            713: [0, 0.56555, 0, 0, 0.525],
            714: [0, 0.61111, 0, 0, 0.525],
            715: [0, 0.61111, 0, 0, 0.525],
            728: [0, 0.61111, 0, 0, 0.525],
            730: [0, 0.61111, 0, 0, 0.525],
            770: [0, 0.61111, 0, 0, 0.525],
            771: [0, 0.61111, 0, 0, 0.525],
            776: [0, 0.61111, 0, 0, 0.525],
            915: [0, 0.61111, 0, 0, 0.525],
            916: [0, 0.61111, 0, 0, 0.525],
            920: [0, 0.61111, 0, 0, 0.525],
            923: [0, 0.61111, 0, 0, 0.525],
            926: [0, 0.61111, 0, 0, 0.525],
            928: [0, 0.61111, 0, 0, 0.525],
            931: [0, 0.61111, 0, 0, 0.525],
            933: [0, 0.61111, 0, 0, 0.525],
            934: [0, 0.61111, 0, 0, 0.525],
            936: [0, 0.61111, 0, 0, 0.525],
            937: [0, 0.61111, 0, 0, 0.525],
            8216: [0, 0.61111, 0, 0, 0.525],
            8217: [0, 0.61111, 0, 0, 0.525],
            8242: [0, 0.61111, 0, 0, 0.525],
            9251: [0.11111, 0.21944, 0, 0, 0.525],
        },
    },
    Ji = {
        slant: [0.25, 0.25, 0.25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [0.431, 0.431, 0.431],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [0.677, 0.732, 0.925],
        num2: [0.394, 0.384, 0.387],
        num3: [0.444, 0.471, 0.504],
        denom1: [0.686, 0.752, 1.025],
        denom2: [0.345, 0.344, 0.532],
        sup1: [0.413, 0.503, 0.504],
        sup2: [0.363, 0.431, 0.404],
        sup3: [0.289, 0.286, 0.294],
        sub1: [0.15, 0.143, 0.2],
        sub2: [0.247, 0.286, 0.4],
        supDrop: [0.386, 0.353, 0.494],
        subDrop: [0.05, 0.071, 0.1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [0.25, 0.25, 0.25],
        defaultRuleThickness: [0.04, 0.049, 0.049],
        bigOpSpacing1: [0.111, 0.111, 0.111],
        bigOpSpacing2: [0.166, 0.166, 0.166],
        bigOpSpacing3: [0.2, 0.2, 0.2],
        bigOpSpacing4: [0.6, 0.611, 0.611],
        bigOpSpacing5: [0.1, 0.143, 0.143],
        sqrtRuleThickness: [0.04, 0.04, 0.04],
        ptPerEm: [10, 10, 10],
        doubleRuleSep: [0.2, 0.2, 0.2],
        arrayRuleWidth: [0.04, 0.04, 0.04],
        fboxsep: [0.3, 0.3, 0.3],
        fboxrule: [0.04, 0.04, 0.04],
    },
    Ch = {
        Å: "A",
        Ð: "D",
        Þ: "o",
        å: "a",
        ð: "d",
        þ: "o",
        А: "A",
        Б: "B",
        В: "B",
        Г: "F",
        Д: "A",
        Е: "E",
        Ж: "K",
        З: "3",
        И: "N",
        Й: "N",
        К: "K",
        Л: "N",
        М: "M",
        Н: "H",
        О: "O",
        П: "N",
        Р: "P",
        С: "C",
        Т: "T",
        У: "y",
        Ф: "O",
        Х: "X",
        Ц: "U",
        Ч: "h",
        Ш: "W",
        Щ: "W",
        Ъ: "B",
        Ы: "X",
        Ь: "B",
        Э: "3",
        Ю: "X",
        Я: "R",
        а: "a",
        б: "b",
        в: "a",
        г: "r",
        д: "y",
        е: "e",
        ж: "m",
        з: "e",
        и: "n",
        й: "n",
        к: "n",
        л: "n",
        м: "m",
        н: "n",
        о: "o",
        п: "n",
        р: "p",
        с: "c",
        т: "o",
        у: "y",
        ф: "b",
        х: "x",
        ц: "n",
        ч: "n",
        ш: "w",
        щ: "w",
        ъ: "a",
        ы: "m",
        ь: "a",
        э: "e",
        ю: "m",
        я: "r",
    };
function Pg(e, t) {
    dn[e] = t;
}
function r1(e, t, n) {
    if (!dn[t]) throw new Error("Font metrics not found for font: " + t + ".");
    var r = e.charCodeAt(0),
        i = dn[t][r];
    if ((!i && e[0] in Ch && ((r = Ch[e[0]].charCodeAt(0)), (i = dn[t][r])), !i && n === "text" && gm(r) && (i = dn[t][77]), i))
        return { depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] };
}
var wo = {};
function Ig(e) {
    var t;
    if ((e >= 5 ? (t = 0) : e >= 3 ? (t = 1) : (t = 2), !wo[t])) {
        var n = (wo[t] = { cssEmPerMu: Ji.quad[t] / 18 });
        for (var r in Ji) Ji.hasOwnProperty(r) && (n[r] = Ji[r][t]);
    }
    return wo[t];
}
var Lg = [
        [1, 1, 1],
        [2, 1, 1],
        [3, 1, 1],
        [4, 2, 1],
        [5, 2, 1],
        [6, 3, 1],
        [7, 4, 2],
        [8, 6, 3],
        [9, 7, 6],
        [10, 8, 7],
        [11, 10, 9],
    ],
    zh = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
    Th = function (t, n) {
        return n.size < 2 ? t : Lg[t - 1][n.size - 1];
    };
class Tn {
    constructor(t) {
        (this.style = void 0),
            (this.color = void 0),
            (this.size = void 0),
            (this.textSize = void 0),
            (this.phantom = void 0),
            (this.font = void 0),
            (this.fontFamily = void 0),
            (this.fontWeight = void 0),
            (this.fontShape = void 0),
            (this.sizeMultiplier = void 0),
            (this.maxSize = void 0),
            (this.minRuleThickness = void 0),
            (this._fontMetrics = void 0),
            (this.style = t.style),
            (this.color = t.color),
            (this.size = t.size || Tn.BASESIZE),
            (this.textSize = t.textSize || this.size),
            (this.phantom = !!t.phantom),
            (this.font = t.font || ""),
            (this.fontFamily = t.fontFamily || ""),
            (this.fontWeight = t.fontWeight || ""),
            (this.fontShape = t.fontShape || ""),
            (this.sizeMultiplier = zh[this.size - 1]),
            (this.maxSize = t.maxSize),
            (this.minRuleThickness = t.minRuleThickness),
            (this._fontMetrics = void 0);
    }
    extend(t) {
        var n = {
            style: this.style,
            size: this.size,
            textSize: this.textSize,
            color: this.color,
            phantom: this.phantom,
            font: this.font,
            fontFamily: this.fontFamily,
            fontWeight: this.fontWeight,
            fontShape: this.fontShape,
            maxSize: this.maxSize,
            minRuleThickness: this.minRuleThickness,
        };
        for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
        return new Tn(n);
    }
    havingStyle(t) {
        return this.style === t ? this : this.extend({ style: t, size: Th(this.textSize, t) });
    }
    havingCrampedStyle() {
        return this.havingStyle(this.style.cramp());
    }
    havingSize(t) {
        return this.size === t && this.textSize === t ? this : this.extend({ style: this.style.text(), size: t, textSize: t, sizeMultiplier: zh[t - 1] });
    }
    havingBaseStyle(t) {
        t = t || this.style.text();
        var n = Th(Tn.BASESIZE, t);
        return this.size === n && this.textSize === Tn.BASESIZE && this.style === t ? this : this.extend({ style: t, size: n });
    }
    havingBaseSizing() {
        var t;
        switch (this.style.id) {
            case 4:
            case 5:
                t = 3;
                break;
            case 6:
            case 7:
                t = 1;
                break;
            default:
                t = 6;
        }
        return this.extend({ style: this.style.text(), size: t });
    }
    withColor(t) {
        return this.extend({ color: t });
    }
    withPhantom() {
        return this.extend({ phantom: !0 });
    }
    withFont(t) {
        return this.extend({ font: t });
    }
    withTextFontFamily(t) {
        return this.extend({ fontFamily: t, font: "" });
    }
    withTextFontWeight(t) {
        return this.extend({ fontWeight: t, font: "" });
    }
    withTextFontShape(t) {
        return this.extend({ fontShape: t, font: "" });
    }
    sizingClasses(t) {
        return t.size !== this.size ? ["sizing", "reset-size" + t.size, "size" + this.size] : [];
    }
    baseSizingClasses() {
        return this.size !== Tn.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Tn.BASESIZE] : [];
    }
    fontMetrics() {
        return this._fontMetrics || (this._fontMetrics = Ig(this.size)), this._fontMetrics;
    }
    getColor() {
        return this.phantom ? "transparent" : this.color;
    }
}
Tn.BASESIZE = 6;
var Ru = {
        pt: 1,
        mm: 7227 / 2540,
        cm: 7227 / 254,
        in: 72.27,
        bp: 803 / 800,
        pc: 12,
        dd: 1238 / 1157,
        cc: 14856 / 1157,
        nd: 685 / 642,
        nc: 1370 / 107,
        sp: 1 / 65536,
        px: 803 / 800,
    },
    Bg = { ex: !0, em: !0, mu: !0 },
    vm = function (t) {
        return typeof t != "string" && (t = t.unit), t in Ru || t in Bg || t === "ex";
    },
    Le = function (t, n) {
        var r;
        if (t.unit in Ru) r = Ru[t.unit] / n.fontMetrics().ptPerEm / n.sizeMultiplier;
        else if (t.unit === "mu") r = n.fontMetrics().cssEmPerMu;
        else {
            var i;
            if ((n.style.isTight() ? (i = n.havingStyle(n.style.text())) : (i = n), t.unit === "ex")) r = i.fontMetrics().xHeight;
            else if (t.unit === "em") r = i.fontMetrics().quad;
            else throw new H("Invalid unit: '" + t.unit + "'");
            i !== n && (r *= i.sizeMultiplier / n.sizeMultiplier);
        }
        return Math.min(t.number * r, n.maxSize);
    },
    V = function (t) {
        return +t.toFixed(4) + "em";
    },
    sr = function (t) {
        return t.filter(n => n).join(" ");
    },
    ym = function (t, n, r) {
        if (((this.classes = t || []), (this.attributes = {}), (this.height = 0), (this.depth = 0), (this.maxFontSize = 0), (this.style = r || {}), n)) {
            n.style.isTight() && this.classes.push("mtight");
            var i = n.getColor();
            i && (this.style.color = i);
        }
    },
    xm = function (t) {
        var n = document.createElement(t);
        n.className = sr(this.classes);
        for (var r in this.style) this.style.hasOwnProperty(r) && (n.style[r] = this.style[r]);
        for (var i in this.attributes) this.attributes.hasOwnProperty(i) && n.setAttribute(i, this.attributes[i]);
        for (var l = 0; l < this.children.length; l++) n.appendChild(this.children[l].toNode());
        return n;
    },
    Og = /[\s"'>/=\x00-\x1f]/,
    wm = function (t) {
        var n = "<" + t;
        this.classes.length && (n += ' class="' + J.escape(sr(this.classes)) + '"');
        var r = "";
        for (var i in this.style) this.style.hasOwnProperty(i) && (r += J.hyphenate(i) + ":" + this.style[i] + ";");
        r && (n += ' style="' + J.escape(r) + '"');
        for (var l in this.attributes)
            if (this.attributes.hasOwnProperty(l)) {
                if (Og.test(l)) throw new H("Invalid attribute name '" + l + "'");
                n += " " + l + '="' + J.escape(this.attributes[l]) + '"';
            }
        n += ">";
        for (var a = 0; a < this.children.length; a++) n += this.children[a].toMarkup();
        return (n += "</" + t + ">"), n;
    };
class Ni {
    constructor(t, n, r, i) {
        (this.children = void 0),
            (this.attributes = void 0),
            (this.classes = void 0),
            (this.height = void 0),
            (this.depth = void 0),
            (this.width = void 0),
            (this.maxFontSize = void 0),
            (this.style = void 0),
            ym.call(this, t, r, i),
            (this.children = n || []);
    }
    setAttribute(t, n) {
        this.attributes[t] = n;
    }
    hasClass(t) {
        return J.contains(this.classes, t);
    }
    toNode() {
        return xm.call(this, "span");
    }
    toMarkup() {
        return wm.call(this, "span");
    }
}
class i1 {
    constructor(t, n, r, i) {
        (this.children = void 0),
            (this.attributes = void 0),
            (this.classes = void 0),
            (this.height = void 0),
            (this.depth = void 0),
            (this.maxFontSize = void 0),
            (this.style = void 0),
            ym.call(this, n, i),
            (this.children = r || []),
            this.setAttribute("href", t);
    }
    setAttribute(t, n) {
        this.attributes[t] = n;
    }
    hasClass(t) {
        return J.contains(this.classes, t);
    }
    toNode() {
        return xm.call(this, "a");
    }
    toMarkup() {
        return wm.call(this, "a");
    }
}
class Rg {
    constructor(t, n, r) {
        (this.src = void 0),
            (this.alt = void 0),
            (this.classes = void 0),
            (this.height = void 0),
            (this.depth = void 0),
            (this.maxFontSize = void 0),
            (this.style = void 0),
            (this.alt = n),
            (this.src = t),
            (this.classes = ["mord"]),
            (this.style = r);
    }
    hasClass(t) {
        return J.contains(this.classes, t);
    }
    toNode() {
        var t = document.createElement("img");
        (t.src = this.src), (t.alt = this.alt), (t.className = "mord");
        for (var n in this.style) this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
        return t;
    }
    toMarkup() {
        var t = '<img src="' + J.escape(this.src) + '"' + (' alt="' + J.escape(this.alt) + '"'),
            n = "";
        for (var r in this.style) this.style.hasOwnProperty(r) && (n += J.hyphenate(r) + ":" + this.style[r] + ";");
        return n && (t += ' style="' + J.escape(n) + '"'), (t += "'/>"), t;
    }
}
var Hg = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" };
class jt {
    constructor(t, n, r, i, l, a, o, u) {
        (this.text = void 0),
            (this.height = void 0),
            (this.depth = void 0),
            (this.italic = void 0),
            (this.skew = void 0),
            (this.width = void 0),
            (this.maxFontSize = void 0),
            (this.classes = void 0),
            (this.style = void 0),
            (this.text = t),
            (this.height = n || 0),
            (this.depth = r || 0),
            (this.italic = i || 0),
            (this.skew = l || 0),
            (this.width = a || 0),
            (this.classes = o || []),
            (this.style = u || {}),
            (this.maxFontSize = 0);
        var s = Sg(this.text.charCodeAt(0));
        s && this.classes.push(s + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Hg[this.text]);
    }
    hasClass(t) {
        return J.contains(this.classes, t);
    }
    toNode() {
        var t = document.createTextNode(this.text),
            n = null;
        this.italic > 0 && ((n = document.createElement("span")), (n.style.marginRight = V(this.italic))),
            this.classes.length > 0 && ((n = n || document.createElement("span")), (n.className = sr(this.classes)));
        for (var r in this.style) this.style.hasOwnProperty(r) && ((n = n || document.createElement("span")), (n.style[r] = this.style[r]));
        return n ? (n.appendChild(t), n) : t;
    }
    toMarkup() {
        var t = !1,
            n = "<span";
        this.classes.length && ((t = !0), (n += ' class="'), (n += J.escape(sr(this.classes))), (n += '"'));
        var r = "";
        this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
        for (var i in this.style) this.style.hasOwnProperty(i) && (r += J.hyphenate(i) + ":" + this.style[i] + ";");
        r && ((t = !0), (n += ' style="' + J.escape(r) + '"'));
        var l = J.escape(this.text);
        return t ? ((n += ">"), (n += l), (n += "</span>"), n) : l;
    }
}
class Bn {
    constructor(t, n) {
        (this.children = void 0), (this.attributes = void 0), (this.children = t || []), (this.attributes = n || {});
    }
    toNode() {
        var t = "http://www.w3.org/2000/svg",
            n = document.createElementNS(t, "svg");
        for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && n.setAttribute(r, this.attributes[r]);
        for (var i = 0; i < this.children.length; i++) n.appendChild(this.children[i].toNode());
        return n;
    }
    toMarkup() {
        var t = '<svg xmlns="http://www.w3.org/2000/svg"';
        for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && (t += " " + n + '="' + J.escape(this.attributes[n]) + '"');
        t += ">";
        for (var r = 0; r < this.children.length; r++) t += this.children[r].toMarkup();
        return (t += "</svg>"), t;
    }
}
class cr {
    constructor(t, n) {
        (this.pathName = void 0), (this.alternate = void 0), (this.pathName = t), (this.alternate = n);
    }
    toNode() {
        var t = "http://www.w3.org/2000/svg",
            n = document.createElementNS(t, "path");
        return this.alternate ? n.setAttribute("d", this.alternate) : n.setAttribute("d", bh[this.pathName]), n;
    }
    toMarkup() {
        return this.alternate ? '<path d="' + J.escape(this.alternate) + '"/>' : '<path d="' + J.escape(bh[this.pathName]) + '"/>';
    }
}
class Hu {
    constructor(t) {
        (this.attributes = void 0), (this.attributes = t || {});
    }
    toNode() {
        var t = "http://www.w3.org/2000/svg",
            n = document.createElementNS(t, "line");
        for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && n.setAttribute(r, this.attributes[r]);
        return n;
    }
    toMarkup() {
        var t = "<line";
        for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && (t += " " + n + '="' + J.escape(this.attributes[n]) + '"');
        return (t += "/>"), t;
    }
}
function Eh(e) {
    if (e instanceof jt) return e;
    throw new Error("Expected symbolNode but got " + String(e) + ".");
}
function qg(e) {
    if (e instanceof Ni) return e;
    throw new Error("Expected span<HtmlDomNode> but got " + String(e) + ".");
}
var _g = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
    Ug = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 },
    Ee = { math: {}, text: {} };
function c(e, t, n, r, i, l) {
    (Ee[e][i] = { font: t, group: n, replace: r }), l && r && (Ee[e][r] = Ee[e][i]);
}
var f = "math",
    B = "text",
    g = "main",
    C = "ams",
    De = "accent-token",
    Y = "bin",
    mt = "close",
    b0 = "inner",
    ee = "mathord",
    Ve = "op-token",
    It = "open",
    Ma = "punct",
    z = "rel",
    qn = "spacing",
    M = "textord";
c(f, g, z, "≡", "\\equiv", !0);
c(f, g, z, "≺", "\\prec", !0);
c(f, g, z, "≻", "\\succ", !0);
c(f, g, z, "∼", "\\sim", !0);
c(f, g, z, "⊥", "\\perp");
c(f, g, z, "⪯", "\\preceq", !0);
c(f, g, z, "⪰", "\\succeq", !0);
c(f, g, z, "≃", "\\simeq", !0);
c(f, g, z, "∣", "\\mid", !0);
c(f, g, z, "≪", "\\ll", !0);
c(f, g, z, "≫", "\\gg", !0);
c(f, g, z, "≍", "\\asymp", !0);
c(f, g, z, "∥", "\\parallel");
c(f, g, z, "⋈", "\\bowtie", !0);
c(f, g, z, "⌣", "\\smile", !0);
c(f, g, z, "⊑", "\\sqsubseteq", !0);
c(f, g, z, "⊒", "\\sqsupseteq", !0);
c(f, g, z, "≐", "\\doteq", !0);
c(f, g, z, "⌢", "\\frown", !0);
c(f, g, z, "∋", "\\ni", !0);
c(f, g, z, "∝", "\\propto", !0);
c(f, g, z, "⊢", "\\vdash", !0);
c(f, g, z, "⊣", "\\dashv", !0);
c(f, g, z, "∋", "\\owns");
c(f, g, Ma, ".", "\\ldotp");
c(f, g, Ma, "⋅", "\\cdotp");
c(f, g, M, "#", "\\#");
c(B, g, M, "#", "\\#");
c(f, g, M, "&", "\\&");
c(B, g, M, "&", "\\&");
c(f, g, M, "ℵ", "\\aleph", !0);
c(f, g, M, "∀", "\\forall", !0);
c(f, g, M, "ℏ", "\\hbar", !0);
c(f, g, M, "∃", "\\exists", !0);
c(f, g, M, "∇", "\\nabla", !0);
c(f, g, M, "♭", "\\flat", !0);
c(f, g, M, "ℓ", "\\ell", !0);
c(f, g, M, "♮", "\\natural", !0);
c(f, g, M, "♣", "\\clubsuit", !0);
c(f, g, M, "℘", "\\wp", !0);
c(f, g, M, "♯", "\\sharp", !0);
c(f, g, M, "♢", "\\diamondsuit", !0);
c(f, g, M, "ℜ", "\\Re", !0);
c(f, g, M, "♡", "\\heartsuit", !0);
c(f, g, M, "ℑ", "\\Im", !0);
c(f, g, M, "♠", "\\spadesuit", !0);
c(f, g, M, "§", "\\S", !0);
c(B, g, M, "§", "\\S");
c(f, g, M, "¶", "\\P", !0);
c(B, g, M, "¶", "\\P");
c(f, g, M, "†", "\\dag");
c(B, g, M, "†", "\\dag");
c(B, g, M, "†", "\\textdagger");
c(f, g, M, "‡", "\\ddag");
c(B, g, M, "‡", "\\ddag");
c(B, g, M, "‡", "\\textdaggerdbl");
c(f, g, mt, "⎱", "\\rmoustache", !0);
c(f, g, It, "⎰", "\\lmoustache", !0);
c(f, g, mt, "⟯", "\\rgroup", !0);
c(f, g, It, "⟮", "\\lgroup", !0);
c(f, g, Y, "∓", "\\mp", !0);
c(f, g, Y, "⊖", "\\ominus", !0);
c(f, g, Y, "⊎", "\\uplus", !0);
c(f, g, Y, "⊓", "\\sqcap", !0);
c(f, g, Y, "∗", "\\ast");
c(f, g, Y, "⊔", "\\sqcup", !0);
c(f, g, Y, "◯", "\\bigcirc", !0);
c(f, g, Y, "∙", "\\bullet", !0);
c(f, g, Y, "‡", "\\ddagger");
c(f, g, Y, "≀", "\\wr", !0);
c(f, g, Y, "⨿", "\\amalg");
c(f, g, Y, "&", "\\And");
c(f, g, z, "⟵", "\\longleftarrow", !0);
c(f, g, z, "⇐", "\\Leftarrow", !0);
c(f, g, z, "⟸", "\\Longleftarrow", !0);
c(f, g, z, "⟶", "\\longrightarrow", !0);
c(f, g, z, "⇒", "\\Rightarrow", !0);
c(f, g, z, "⟹", "\\Longrightarrow", !0);
c(f, g, z, "↔", "\\leftrightarrow", !0);
c(f, g, z, "⟷", "\\longleftrightarrow", !0);
c(f, g, z, "⇔", "\\Leftrightarrow", !0);
c(f, g, z, "⟺", "\\Longleftrightarrow", !0);
c(f, g, z, "↦", "\\mapsto", !0);
c(f, g, z, "⟼", "\\longmapsto", !0);
c(f, g, z, "↗", "\\nearrow", !0);
c(f, g, z, "↩", "\\hookleftarrow", !0);
c(f, g, z, "↪", "\\hookrightarrow", !0);
c(f, g, z, "↘", "\\searrow", !0);
c(f, g, z, "↼", "\\leftharpoonup", !0);
c(f, g, z, "⇀", "\\rightharpoonup", !0);
c(f, g, z, "↙", "\\swarrow", !0);
c(f, g, z, "↽", "\\leftharpoondown", !0);
c(f, g, z, "⇁", "\\rightharpoondown", !0);
c(f, g, z, "↖", "\\nwarrow", !0);
c(f, g, z, "⇌", "\\rightleftharpoons", !0);
c(f, C, z, "≮", "\\nless", !0);
c(f, C, z, "", "\\@nleqslant");
c(f, C, z, "", "\\@nleqq");
c(f, C, z, "⪇", "\\lneq", !0);
c(f, C, z, "≨", "\\lneqq", !0);
c(f, C, z, "", "\\@lvertneqq");
c(f, C, z, "⋦", "\\lnsim", !0);
c(f, C, z, "⪉", "\\lnapprox", !0);
c(f, C, z, "⊀", "\\nprec", !0);
c(f, C, z, "⋠", "\\npreceq", !0);
c(f, C, z, "⋨", "\\precnsim", !0);
c(f, C, z, "⪹", "\\precnapprox", !0);
c(f, C, z, "≁", "\\nsim", !0);
c(f, C, z, "", "\\@nshortmid");
c(f, C, z, "∤", "\\nmid", !0);
c(f, C, z, "⊬", "\\nvdash", !0);
c(f, C, z, "⊭", "\\nvDash", !0);
c(f, C, z, "⋪", "\\ntriangleleft");
c(f, C, z, "⋬", "\\ntrianglelefteq", !0);
c(f, C, z, "⊊", "\\subsetneq", !0);
c(f, C, z, "", "\\@varsubsetneq");
c(f, C, z, "⫋", "\\subsetneqq", !0);
c(f, C, z, "", "\\@varsubsetneqq");
c(f, C, z, "≯", "\\ngtr", !0);
c(f, C, z, "", "\\@ngeqslant");
c(f, C, z, "", "\\@ngeqq");
c(f, C, z, "⪈", "\\gneq", !0);
c(f, C, z, "≩", "\\gneqq", !0);
c(f, C, z, "", "\\@gvertneqq");
c(f, C, z, "⋧", "\\gnsim", !0);
c(f, C, z, "⪊", "\\gnapprox", !0);
c(f, C, z, "⊁", "\\nsucc", !0);
c(f, C, z, "⋡", "\\nsucceq", !0);
c(f, C, z, "⋩", "\\succnsim", !0);
c(f, C, z, "⪺", "\\succnapprox", !0);
c(f, C, z, "≆", "\\ncong", !0);
c(f, C, z, "", "\\@nshortparallel");
c(f, C, z, "∦", "\\nparallel", !0);
c(f, C, z, "⊯", "\\nVDash", !0);
c(f, C, z, "⋫", "\\ntriangleright");
c(f, C, z, "⋭", "\\ntrianglerighteq", !0);
c(f, C, z, "", "\\@nsupseteqq");
c(f, C, z, "⊋", "\\supsetneq", !0);
c(f, C, z, "", "\\@varsupsetneq");
c(f, C, z, "⫌", "\\supsetneqq", !0);
c(f, C, z, "", "\\@varsupsetneqq");
c(f, C, z, "⊮", "\\nVdash", !0);
c(f, C, z, "⪵", "\\precneqq", !0);
c(f, C, z, "⪶", "\\succneqq", !0);
c(f, C, z, "", "\\@nsubseteqq");
c(f, C, Y, "⊴", "\\unlhd");
c(f, C, Y, "⊵", "\\unrhd");
c(f, C, z, "↚", "\\nleftarrow", !0);
c(f, C, z, "↛", "\\nrightarrow", !0);
c(f, C, z, "⇍", "\\nLeftarrow", !0);
c(f, C, z, "⇏", "\\nRightarrow", !0);
c(f, C, z, "↮", "\\nleftrightarrow", !0);
c(f, C, z, "⇎", "\\nLeftrightarrow", !0);
c(f, C, z, "△", "\\vartriangle");
c(f, C, M, "ℏ", "\\hslash");
c(f, C, M, "▽", "\\triangledown");
c(f, C, M, "◊", "\\lozenge");
c(f, C, M, "Ⓢ", "\\circledS");
c(f, C, M, "®", "\\circledR");
c(B, C, M, "®", "\\circledR");
c(f, C, M, "∡", "\\measuredangle", !0);
c(f, C, M, "∄", "\\nexists");
c(f, C, M, "℧", "\\mho");
c(f, C, M, "Ⅎ", "\\Finv", !0);
c(f, C, M, "⅁", "\\Game", !0);
c(f, C, M, "‵", "\\backprime");
c(f, C, M, "▲", "\\blacktriangle");
c(f, C, M, "▼", "\\blacktriangledown");
c(f, C, M, "■", "\\blacksquare");
c(f, C, M, "⧫", "\\blacklozenge");
c(f, C, M, "★", "\\bigstar");
c(f, C, M, "∢", "\\sphericalangle", !0);
c(f, C, M, "∁", "\\complement", !0);
c(f, C, M, "ð", "\\eth", !0);
c(B, g, M, "ð", "ð");
c(f, C, M, "╱", "\\diagup");
c(f, C, M, "╲", "\\diagdown");
c(f, C, M, "□", "\\square");
c(f, C, M, "□", "\\Box");
c(f, C, M, "◊", "\\Diamond");
c(f, C, M, "¥", "\\yen", !0);
c(B, C, M, "¥", "\\yen", !0);
c(f, C, M, "✓", "\\checkmark", !0);
c(B, C, M, "✓", "\\checkmark");
c(f, C, M, "ℶ", "\\beth", !0);
c(f, C, M, "ℸ", "\\daleth", !0);
c(f, C, M, "ℷ", "\\gimel", !0);
c(f, C, M, "ϝ", "\\digamma", !0);
c(f, C, M, "ϰ", "\\varkappa");
c(f, C, It, "┌", "\\@ulcorner", !0);
c(f, C, mt, "┐", "\\@urcorner", !0);
c(f, C, It, "└", "\\@llcorner", !0);
c(f, C, mt, "┘", "\\@lrcorner", !0);
c(f, C, z, "≦", "\\leqq", !0);
c(f, C, z, "⩽", "\\leqslant", !0);
c(f, C, z, "⪕", "\\eqslantless", !0);
c(f, C, z, "≲", "\\lesssim", !0);
c(f, C, z, "⪅", "\\lessapprox", !0);
c(f, C, z, "≊", "\\approxeq", !0);
c(f, C, Y, "⋖", "\\lessdot");
c(f, C, z, "⋘", "\\lll", !0);
c(f, C, z, "≶", "\\lessgtr", !0);
c(f, C, z, "⋚", "\\lesseqgtr", !0);
c(f, C, z, "⪋", "\\lesseqqgtr", !0);
c(f, C, z, "≑", "\\doteqdot");
c(f, C, z, "≓", "\\risingdotseq", !0);
c(f, C, z, "≒", "\\fallingdotseq", !0);
c(f, C, z, "∽", "\\backsim", !0);
c(f, C, z, "⋍", "\\backsimeq", !0);
c(f, C, z, "⫅", "\\subseteqq", !0);
c(f, C, z, "⋐", "\\Subset", !0);
c(f, C, z, "⊏", "\\sqsubset", !0);
c(f, C, z, "≼", "\\preccurlyeq", !0);
c(f, C, z, "⋞", "\\curlyeqprec", !0);
c(f, C, z, "≾", "\\precsim", !0);
c(f, C, z, "⪷", "\\precapprox", !0);
c(f, C, z, "⊲", "\\vartriangleleft");
c(f, C, z, "⊴", "\\trianglelefteq");
c(f, C, z, "⊨", "\\vDash", !0);
c(f, C, z, "⊪", "\\Vvdash", !0);
c(f, C, z, "⌣", "\\smallsmile");
c(f, C, z, "⌢", "\\smallfrown");
c(f, C, z, "≏", "\\bumpeq", !0);
c(f, C, z, "≎", "\\Bumpeq", !0);
c(f, C, z, "≧", "\\geqq", !0);
c(f, C, z, "⩾", "\\geqslant", !0);
c(f, C, z, "⪖", "\\eqslantgtr", !0);
c(f, C, z, "≳", "\\gtrsim", !0);
c(f, C, z, "⪆", "\\gtrapprox", !0);
c(f, C, Y, "⋗", "\\gtrdot");
c(f, C, z, "⋙", "\\ggg", !0);
c(f, C, z, "≷", "\\gtrless", !0);
c(f, C, z, "⋛", "\\gtreqless", !0);
c(f, C, z, "⪌", "\\gtreqqless", !0);
c(f, C, z, "≖", "\\eqcirc", !0);
c(f, C, z, "≗", "\\circeq", !0);
c(f, C, z, "≜", "\\triangleq", !0);
c(f, C, z, "∼", "\\thicksim");
c(f, C, z, "≈", "\\thickapprox");
c(f, C, z, "⫆", "\\supseteqq", !0);
c(f, C, z, "⋑", "\\Supset", !0);
c(f, C, z, "⊐", "\\sqsupset", !0);
c(f, C, z, "≽", "\\succcurlyeq", !0);
c(f, C, z, "⋟", "\\curlyeqsucc", !0);
c(f, C, z, "≿", "\\succsim", !0);
c(f, C, z, "⪸", "\\succapprox", !0);
c(f, C, z, "⊳", "\\vartriangleright");
c(f, C, z, "⊵", "\\trianglerighteq");
c(f, C, z, "⊩", "\\Vdash", !0);
c(f, C, z, "∣", "\\shortmid");
c(f, C, z, "∥", "\\shortparallel");
c(f, C, z, "≬", "\\between", !0);
c(f, C, z, "⋔", "\\pitchfork", !0);
c(f, C, z, "∝", "\\varpropto");
c(f, C, z, "◀", "\\blacktriangleleft");
c(f, C, z, "∴", "\\therefore", !0);
c(f, C, z, "∍", "\\backepsilon");
c(f, C, z, "▶", "\\blacktriangleright");
c(f, C, z, "∵", "\\because", !0);
c(f, C, z, "⋘", "\\llless");
c(f, C, z, "⋙", "\\gggtr");
c(f, C, Y, "⊲", "\\lhd");
c(f, C, Y, "⊳", "\\rhd");
c(f, C, z, "≂", "\\eqsim", !0);
c(f, g, z, "⋈", "\\Join");
c(f, C, z, "≑", "\\Doteq", !0);
c(f, C, Y, "∔", "\\dotplus", !0);
c(f, C, Y, "∖", "\\smallsetminus");
c(f, C, Y, "⋒", "\\Cap", !0);
c(f, C, Y, "⋓", "\\Cup", !0);
c(f, C, Y, "⩞", "\\doublebarwedge", !0);
c(f, C, Y, "⊟", "\\boxminus", !0);
c(f, C, Y, "⊞", "\\boxplus", !0);
c(f, C, Y, "⋇", "\\divideontimes", !0);
c(f, C, Y, "⋉", "\\ltimes", !0);
c(f, C, Y, "⋊", "\\rtimes", !0);
c(f, C, Y, "⋋", "\\leftthreetimes", !0);
c(f, C, Y, "⋌", "\\rightthreetimes", !0);
c(f, C, Y, "⋏", "\\curlywedge", !0);
c(f, C, Y, "⋎", "\\curlyvee", !0);
c(f, C, Y, "⊝", "\\circleddash", !0);
c(f, C, Y, "⊛", "\\circledast", !0);
c(f, C, Y, "⋅", "\\centerdot");
c(f, C, Y, "⊺", "\\intercal", !0);
c(f, C, Y, "⋒", "\\doublecap");
c(f, C, Y, "⋓", "\\doublecup");
c(f, C, Y, "⊠", "\\boxtimes", !0);
c(f, C, z, "⇢", "\\dashrightarrow", !0);
c(f, C, z, "⇠", "\\dashleftarrow", !0);
c(f, C, z, "⇇", "\\leftleftarrows", !0);
c(f, C, z, "⇆", "\\leftrightarrows", !0);
c(f, C, z, "⇚", "\\Lleftarrow", !0);
c(f, C, z, "↞", "\\twoheadleftarrow", !0);
c(f, C, z, "↢", "\\leftarrowtail", !0);
c(f, C, z, "↫", "\\looparrowleft", !0);
c(f, C, z, "⇋", "\\leftrightharpoons", !0);
c(f, C, z, "↶", "\\curvearrowleft", !0);
c(f, C, z, "↺", "\\circlearrowleft", !0);
c(f, C, z, "↰", "\\Lsh", !0);
c(f, C, z, "⇈", "\\upuparrows", !0);
c(f, C, z, "↿", "\\upharpoonleft", !0);
c(f, C, z, "⇃", "\\downharpoonleft", !0);
c(f, g, z, "⊶", "\\origof", !0);
c(f, g, z, "⊷", "\\imageof", !0);
c(f, C, z, "⊸", "\\multimap", !0);
c(f, C, z, "↭", "\\leftrightsquigarrow", !0);
c(f, C, z, "⇉", "\\rightrightarrows", !0);
c(f, C, z, "⇄", "\\rightleftarrows", !0);
c(f, C, z, "↠", "\\twoheadrightarrow", !0);
c(f, C, z, "↣", "\\rightarrowtail", !0);
c(f, C, z, "↬", "\\looparrowright", !0);
c(f, C, z, "↷", "\\curvearrowright", !0);
c(f, C, z, "↻", "\\circlearrowright", !0);
c(f, C, z, "↱", "\\Rsh", !0);
c(f, C, z, "⇊", "\\downdownarrows", !0);
c(f, C, z, "↾", "\\upharpoonright", !0);
c(f, C, z, "⇂", "\\downharpoonright", !0);
c(f, C, z, "⇝", "\\rightsquigarrow", !0);
c(f, C, z, "⇝", "\\leadsto");
c(f, C, z, "⇛", "\\Rrightarrow", !0);
c(f, C, z, "↾", "\\restriction");
c(f, g, M, "‘", "`");
c(f, g, M, "$", "\\$");
c(B, g, M, "$", "\\$");
c(B, g, M, "$", "\\textdollar");
c(f, g, M, "%", "\\%");
c(B, g, M, "%", "\\%");
c(f, g, M, "_", "\\_");
c(B, g, M, "_", "\\_");
c(B, g, M, "_", "\\textunderscore");
c(f, g, M, "∠", "\\angle", !0);
c(f, g, M, "∞", "\\infty", !0);
c(f, g, M, "′", "\\prime");
c(f, g, M, "△", "\\triangle");
c(f, g, M, "Γ", "\\Gamma", !0);
c(f, g, M, "Δ", "\\Delta", !0);
c(f, g, M, "Θ", "\\Theta", !0);
c(f, g, M, "Λ", "\\Lambda", !0);
c(f, g, M, "Ξ", "\\Xi", !0);
c(f, g, M, "Π", "\\Pi", !0);
c(f, g, M, "Σ", "\\Sigma", !0);
c(f, g, M, "Υ", "\\Upsilon", !0);
c(f, g, M, "Φ", "\\Phi", !0);
c(f, g, M, "Ψ", "\\Psi", !0);
c(f, g, M, "Ω", "\\Omega", !0);
c(f, g, M, "A", "Α");
c(f, g, M, "B", "Β");
c(f, g, M, "E", "Ε");
c(f, g, M, "Z", "Ζ");
c(f, g, M, "H", "Η");
c(f, g, M, "I", "Ι");
c(f, g, M, "K", "Κ");
c(f, g, M, "M", "Μ");
c(f, g, M, "N", "Ν");
c(f, g, M, "O", "Ο");
c(f, g, M, "P", "Ρ");
c(f, g, M, "T", "Τ");
c(f, g, M, "X", "Χ");
c(f, g, M, "¬", "\\neg", !0);
c(f, g, M, "¬", "\\lnot");
c(f, g, M, "⊤", "\\top");
c(f, g, M, "⊥", "\\bot");
c(f, g, M, "∅", "\\emptyset");
c(f, C, M, "∅", "\\varnothing");
c(f, g, ee, "α", "\\alpha", !0);
c(f, g, ee, "β", "\\beta", !0);
c(f, g, ee, "γ", "\\gamma", !0);
c(f, g, ee, "δ", "\\delta", !0);
c(f, g, ee, "ϵ", "\\epsilon", !0);
c(f, g, ee, "ζ", "\\zeta", !0);
c(f, g, ee, "η", "\\eta", !0);
c(f, g, ee, "θ", "\\theta", !0);
c(f, g, ee, "ι", "\\iota", !0);
c(f, g, ee, "κ", "\\kappa", !0);
c(f, g, ee, "λ", "\\lambda", !0);
c(f, g, ee, "μ", "\\mu", !0);
c(f, g, ee, "ν", "\\nu", !0);
c(f, g, ee, "ξ", "\\xi", !0);
c(f, g, ee, "ο", "\\omicron", !0);
c(f, g, ee, "π", "\\pi", !0);
c(f, g, ee, "ρ", "\\rho", !0);
c(f, g, ee, "σ", "\\sigma", !0);
c(f, g, ee, "τ", "\\tau", !0);
c(f, g, ee, "υ", "\\upsilon", !0);
c(f, g, ee, "ϕ", "\\phi", !0);
c(f, g, ee, "χ", "\\chi", !0);
c(f, g, ee, "ψ", "\\psi", !0);
c(f, g, ee, "ω", "\\omega", !0);
c(f, g, ee, "ε", "\\varepsilon", !0);
c(f, g, ee, "ϑ", "\\vartheta", !0);
c(f, g, ee, "ϖ", "\\varpi", !0);
c(f, g, ee, "ϱ", "\\varrho", !0);
c(f, g, ee, "ς", "\\varsigma", !0);
c(f, g, ee, "φ", "\\varphi", !0);
c(f, g, Y, "∗", "*", !0);
c(f, g, Y, "+", "+");
c(f, g, Y, "−", "-", !0);
c(f, g, Y, "⋅", "\\cdot", !0);
c(f, g, Y, "∘", "\\circ", !0);
c(f, g, Y, "÷", "\\div", !0);
c(f, g, Y, "±", "\\pm", !0);
c(f, g, Y, "×", "\\times", !0);
c(f, g, Y, "∩", "\\cap", !0);
c(f, g, Y, "∪", "\\cup", !0);
c(f, g, Y, "∖", "\\setminus", !0);
c(f, g, Y, "∧", "\\land");
c(f, g, Y, "∨", "\\lor");
c(f, g, Y, "∧", "\\wedge", !0);
c(f, g, Y, "∨", "\\vee", !0);
c(f, g, M, "√", "\\surd");
c(f, g, It, "⟨", "\\langle", !0);
c(f, g, It, "∣", "\\lvert");
c(f, g, It, "∥", "\\lVert");
c(f, g, mt, "?", "?");
c(f, g, mt, "!", "!");
c(f, g, mt, "⟩", "\\rangle", !0);
c(f, g, mt, "∣", "\\rvert");
c(f, g, mt, "∥", "\\rVert");
c(f, g, z, "=", "=");
c(f, g, z, ":", ":");
c(f, g, z, "≈", "\\approx", !0);
c(f, g, z, "≅", "\\cong", !0);
c(f, g, z, "≥", "\\ge");
c(f, g, z, "≥", "\\geq", !0);
c(f, g, z, "←", "\\gets");
c(f, g, z, ">", "\\gt", !0);
c(f, g, z, "∈", "\\in", !0);
c(f, g, z, "", "\\@not");
c(f, g, z, "⊂", "\\subset", !0);
c(f, g, z, "⊃", "\\supset", !0);
c(f, g, z, "⊆", "\\subseteq", !0);
c(f, g, z, "⊇", "\\supseteq", !0);
c(f, C, z, "⊈", "\\nsubseteq", !0);
c(f, C, z, "⊉", "\\nsupseteq", !0);
c(f, g, z, "⊨", "\\models");
c(f, g, z, "←", "\\leftarrow", !0);
c(f, g, z, "≤", "\\le");
c(f, g, z, "≤", "\\leq", !0);
c(f, g, z, "<", "\\lt", !0);
c(f, g, z, "→", "\\rightarrow", !0);
c(f, g, z, "→", "\\to");
c(f, C, z, "≱", "\\ngeq", !0);
c(f, C, z, "≰", "\\nleq", !0);
c(f, g, qn, " ", "\\ ");
c(f, g, qn, " ", "\\space");
c(f, g, qn, " ", "\\nobreakspace");
c(B, g, qn, " ", "\\ ");
c(B, g, qn, " ", " ");
c(B, g, qn, " ", "\\space");
c(B, g, qn, " ", "\\nobreakspace");
c(f, g, qn, null, "\\nobreak");
c(f, g, qn, null, "\\allowbreak");
c(f, g, Ma, ",", ",");
c(f, g, Ma, ";", ";");
c(f, C, Y, "⊼", "\\barwedge", !0);
c(f, C, Y, "⊻", "\\veebar", !0);
c(f, g, Y, "⊙", "\\odot", !0);
c(f, g, Y, "⊕", "\\oplus", !0);
c(f, g, Y, "⊗", "\\otimes", !0);
c(f, g, M, "∂", "\\partial", !0);
c(f, g, Y, "⊘", "\\oslash", !0);
c(f, C, Y, "⊚", "\\circledcirc", !0);
c(f, C, Y, "⊡", "\\boxdot", !0);
c(f, g, Y, "△", "\\bigtriangleup");
c(f, g, Y, "▽", "\\bigtriangledown");
c(f, g, Y, "†", "\\dagger");
c(f, g, Y, "⋄", "\\diamond");
c(f, g, Y, "⋆", "\\star");
c(f, g, Y, "◃", "\\triangleleft");
c(f, g, Y, "▹", "\\triangleright");
c(f, g, It, "{", "\\{");
c(B, g, M, "{", "\\{");
c(B, g, M, "{", "\\textbraceleft");
c(f, g, mt, "}", "\\}");
c(B, g, M, "}", "\\}");
c(B, g, M, "}", "\\textbraceright");
c(f, g, It, "{", "\\lbrace");
c(f, g, mt, "}", "\\rbrace");
c(f, g, It, "[", "\\lbrack", !0);
c(B, g, M, "[", "\\lbrack", !0);
c(f, g, mt, "]", "\\rbrack", !0);
c(B, g, M, "]", "\\rbrack", !0);
c(f, g, It, "(", "\\lparen", !0);
c(f, g, mt, ")", "\\rparen", !0);
c(B, g, M, "<", "\\textless", !0);
c(B, g, M, ">", "\\textgreater", !0);
c(f, g, It, "⌊", "\\lfloor", !0);
c(f, g, mt, "⌋", "\\rfloor", !0);
c(f, g, It, "⌈", "\\lceil", !0);
c(f, g, mt, "⌉", "\\rceil", !0);
c(f, g, M, "\\", "\\backslash");
c(f, g, M, "∣", "|");
c(f, g, M, "∣", "\\vert");
c(B, g, M, "|", "\\textbar", !0);
c(f, g, M, "∥", "\\|");
c(f, g, M, "∥", "\\Vert");
c(B, g, M, "∥", "\\textbardbl");
c(B, g, M, "~", "\\textasciitilde");
c(B, g, M, "\\", "\\textbackslash");
c(B, g, M, "^", "\\textasciicircum");
c(f, g, z, "↑", "\\uparrow", !0);
c(f, g, z, "⇑", "\\Uparrow", !0);
c(f, g, z, "↓", "\\downarrow", !0);
c(f, g, z, "⇓", "\\Downarrow", !0);
c(f, g, z, "↕", "\\updownarrow", !0);
c(f, g, z, "⇕", "\\Updownarrow", !0);
c(f, g, Ve, "∐", "\\coprod");
c(f, g, Ve, "⋁", "\\bigvee");
c(f, g, Ve, "⋀", "\\bigwedge");
c(f, g, Ve, "⨄", "\\biguplus");
c(f, g, Ve, "⋂", "\\bigcap");
c(f, g, Ve, "⋃", "\\bigcup");
c(f, g, Ve, "∫", "\\int");
c(f, g, Ve, "∫", "\\intop");
c(f, g, Ve, "∬", "\\iint");
c(f, g, Ve, "∭", "\\iiint");
c(f, g, Ve, "∏", "\\prod");
c(f, g, Ve, "∑", "\\sum");
c(f, g, Ve, "⨂", "\\bigotimes");
c(f, g, Ve, "⨁", "\\bigoplus");
c(f, g, Ve, "⨀", "\\bigodot");
c(f, g, Ve, "∮", "\\oint");
c(f, g, Ve, "∯", "\\oiint");
c(f, g, Ve, "∰", "\\oiiint");
c(f, g, Ve, "⨆", "\\bigsqcup");
c(f, g, Ve, "∫", "\\smallint");
c(B, g, b0, "…", "\\textellipsis");
c(f, g, b0, "…", "\\mathellipsis");
c(B, g, b0, "…", "\\ldots", !0);
c(f, g, b0, "…", "\\ldots", !0);
c(f, g, b0, "⋯", "\\@cdots", !0);
c(f, g, b0, "⋱", "\\ddots", !0);
c(f, g, M, "⋮", "\\varvdots");
c(B, g, M, "⋮", "\\varvdots");
c(f, g, De, "ˊ", "\\acute");
c(f, g, De, "ˋ", "\\grave");
c(f, g, De, "¨", "\\ddot");
c(f, g, De, "~", "\\tilde");
c(f, g, De, "ˉ", "\\bar");
c(f, g, De, "˘", "\\breve");
c(f, g, De, "ˇ", "\\check");
c(f, g, De, "^", "\\hat");
c(f, g, De, "⃗", "\\vec");
c(f, g, De, "˙", "\\dot");
c(f, g, De, "˚", "\\mathring");
c(f, g, ee, "", "\\@imath");
c(f, g, ee, "", "\\@jmath");
c(f, g, M, "ı", "ı");
c(f, g, M, "ȷ", "ȷ");
c(B, g, M, "ı", "\\i", !0);
c(B, g, M, "ȷ", "\\j", !0);
c(B, g, M, "ß", "\\ss", !0);
c(B, g, M, "æ", "\\ae", !0);
c(B, g, M, "œ", "\\oe", !0);
c(B, g, M, "ø", "\\o", !0);
c(B, g, M, "Æ", "\\AE", !0);
c(B, g, M, "Œ", "\\OE", !0);
c(B, g, M, "Ø", "\\O", !0);
c(B, g, De, "ˊ", "\\'");
c(B, g, De, "ˋ", "\\`");
c(B, g, De, "ˆ", "\\^");
c(B, g, De, "˜", "\\~");
c(B, g, De, "ˉ", "\\=");
c(B, g, De, "˘", "\\u");
c(B, g, De, "˙", "\\.");
c(B, g, De, "¸", "\\c");
c(B, g, De, "˚", "\\r");
c(B, g, De, "ˇ", "\\v");
c(B, g, De, "¨", '\\"');
c(B, g, De, "˝", "\\H");
c(B, g, De, "◯", "\\textcircled");
var km = { "--": !0, "---": !0, "``": !0, "''": !0 };
c(B, g, M, "–", "--", !0);
c(B, g, M, "–", "\\textendash");
c(B, g, M, "—", "---", !0);
c(B, g, M, "—", "\\textemdash");
c(B, g, M, "‘", "`", !0);
c(B, g, M, "‘", "\\textquoteleft");
c(B, g, M, "’", "'", !0);
c(B, g, M, "’", "\\textquoteright");
c(B, g, M, "“", "``", !0);
c(B, g, M, "“", "\\textquotedblleft");
c(B, g, M, "”", "''", !0);
c(B, g, M, "”", "\\textquotedblright");
c(f, g, M, "°", "\\degree", !0);
c(B, g, M, "°", "\\degree");
c(B, g, M, "°", "\\textdegree", !0);
c(f, g, M, "£", "\\pounds");
c(f, g, M, "£", "\\mathsterling", !0);
c(B, g, M, "£", "\\pounds");
c(B, g, M, "£", "\\textsterling", !0);
c(f, C, M, "✠", "\\maltese");
c(B, C, M, "✠", "\\maltese");
var Mh = '0123456789/@."';
for (var ko = 0; ko < Mh.length; ko++) {
    var Ah = Mh.charAt(ko);
    c(f, g, M, Ah, Ah);
}
var Nh = '0123456789!@*()-=+";:?/.,';
for (var So = 0; So < Nh.length; So++) {
    var Dh = Nh.charAt(So);
    c(B, g, M, Dh, Dh);
}
var Ql = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var bo = 0; bo < Ql.length; bo++) {
    var el = Ql.charAt(bo);
    c(f, g, ee, el, el), c(B, g, M, el, el);
}
c(f, C, M, "C", "ℂ");
c(B, C, M, "C", "ℂ");
c(f, C, M, "H", "ℍ");
c(B, C, M, "H", "ℍ");
c(f, C, M, "N", "ℕ");
c(B, C, M, "N", "ℕ");
c(f, C, M, "P", "ℙ");
c(B, C, M, "P", "ℙ");
c(f, C, M, "Q", "ℚ");
c(B, C, M, "Q", "ℚ");
c(f, C, M, "R", "ℝ");
c(B, C, M, "R", "ℝ");
c(f, C, M, "Z", "ℤ");
c(B, C, M, "Z", "ℤ");
c(f, g, ee, "h", "ℎ");
c(B, g, ee, "h", "ℎ");
var ne = "";
for (var ot = 0; ot < Ql.length; ot++) {
    var Re = Ql.charAt(ot);
    (ne = String.fromCharCode(55349, 56320 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56372 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56424 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56580 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56684 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56736 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56788 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56840 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        (ne = String.fromCharCode(55349, 56944 + ot)),
        c(f, g, ee, Re, ne),
        c(B, g, M, Re, ne),
        ot < 26 &&
            ((ne = String.fromCharCode(55349, 56632 + ot)),
            c(f, g, ee, Re, ne),
            c(B, g, M, Re, ne),
            (ne = String.fromCharCode(55349, 56476 + ot)),
            c(f, g, ee, Re, ne),
            c(B, g, M, Re, ne));
}
ne = String.fromCharCode(55349, 56668);
c(f, g, ee, "k", ne);
c(B, g, M, "k", ne);
for (var yr = 0; yr < 10; yr++) {
    var Vn = yr.toString();
    (ne = String.fromCharCode(55349, 57294 + yr)),
        c(f, g, ee, Vn, ne),
        c(B, g, M, Vn, ne),
        (ne = String.fromCharCode(55349, 57314 + yr)),
        c(f, g, ee, Vn, ne),
        c(B, g, M, Vn, ne),
        (ne = String.fromCharCode(55349, 57324 + yr)),
        c(f, g, ee, Vn, ne),
        c(B, g, M, Vn, ne),
        (ne = String.fromCharCode(55349, 57334 + yr)),
        c(f, g, ee, Vn, ne),
        c(B, g, M, Vn, ne);
}
var qu = "ÐÞþ";
for (var Co = 0; Co < qu.length; Co++) {
    var tl = qu.charAt(Co);
    c(f, g, ee, tl, tl), c(B, g, M, tl, tl);
}
var nl = [
        ["mathbf", "textbf", "Main-Bold"],
        ["mathbf", "textbf", "Main-Bold"],
        ["mathnormal", "textit", "Math-Italic"],
        ["mathnormal", "textit", "Math-Italic"],
        ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
        ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
        ["mathscr", "textscr", "Script-Regular"],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["mathfrak", "textfrak", "Fraktur-Regular"],
        ["mathfrak", "textfrak", "Fraktur-Regular"],
        ["mathbb", "textbb", "AMS-Regular"],
        ["mathbb", "textbb", "AMS-Regular"],
        ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
        ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathitsf", "textitsf", "SansSerif-Italic"],
        ["mathitsf", "textitsf", "SansSerif-Italic"],
        ["", "", ""],
        ["", "", ""],
        ["mathtt", "texttt", "Typewriter-Regular"],
        ["mathtt", "texttt", "Typewriter-Regular"],
    ],
    Fh = [
        ["mathbf", "textbf", "Main-Bold"],
        ["", "", ""],
        ["mathsf", "textsf", "SansSerif-Regular"],
        ["mathboldsf", "textboldsf", "SansSerif-Bold"],
        ["mathtt", "texttt", "Typewriter-Regular"],
    ],
    $g = function (t, n) {
        var r = t.charCodeAt(0),
            i = t.charCodeAt(1),
            l = (r - 55296) * 1024 + (i - 56320) + 65536,
            a = n === "math" ? 0 : 1;
        if (119808 <= l && l < 120484) {
            var o = Math.floor((l - 119808) / 26);
            return [nl[o][2], nl[o][a]];
        } else if (120782 <= l && l <= 120831) {
            var u = Math.floor((l - 120782) / 10);
            return [Fh[u][2], Fh[u][a]];
        } else {
            if (l === 120485 || l === 120486) return [nl[0][2], nl[0][a]];
            if (120486 < l && l < 120782) return ["", ""];
            throw new H("Unsupported character: " + t);
        }
    },
    Aa = function (t, n, r) {
        return Ee[r][t] && Ee[r][t].replace && (t = Ee[r][t].replace), { value: t, metrics: r1(t, n, r) };
    },
    tn = function (t, n, r, i, l) {
        var a = Aa(t, n, r),
            o = a.metrics;
        t = a.value;
        var u;
        if (o) {
            var s = o.italic;
            (r === "text" || (i && i.font === "mathit")) && (s = 0), (u = new jt(t, o.height, o.depth, s, o.skew, o.width, l));
        } else
            typeof console < "u" && console.warn("No character metrics " + ("for '" + t + "' in style '" + n + "' and mode '" + r + "'")),
                (u = new jt(t, 0, 0, 0, 0, 0, l));
        if (i) {
            (u.maxFontSize = i.sizeMultiplier), i.style.isTight() && u.classes.push("mtight");
            var h = i.getColor();
            h && (u.style.color = h);
        }
        return u;
    },
    jg = function (t, n, r, i) {
        return (
            i === void 0 && (i = []),
            r.font === "boldsymbol" && Aa(t, "Main-Bold", n).metrics
                ? tn(t, "Main-Bold", n, r, i.concat(["mathbf"]))
                : t === "\\" || Ee[n][t].font === "main"
                  ? tn(t, "Main-Regular", n, r, i)
                  : tn(t, "AMS-Regular", n, r, i.concat(["amsrm"]))
        );
    },
    Vg = function (t, n, r, i, l) {
        return l !== "textord" && Aa(t, "Math-BoldItalic", n).metrics
            ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" }
            : { fontName: "Main-Bold", fontClass: "mathbf" };
    },
    Wg = function (t, n, r) {
        var i = t.mode,
            l = t.text,
            a = ["mord"],
            o = i === "math" || (i === "text" && n.font),
            u = o ? n.font : n.fontFamily,
            s = "",
            h = "";
        if ((l.charCodeAt(0) === 55349 && ([s, h] = $g(l, i)), s.length > 0)) return tn(l, s, i, n, a.concat(h));
        if (u) {
            var d, p;
            if (u === "boldsymbol") {
                var m = Vg(l, i, n, a, r);
                (d = m.fontName), (p = [m.fontClass]);
            } else o ? ((d = Cm[u].fontName), (p = [u])) : ((d = rl(u, n.fontWeight, n.fontShape)), (p = [u, n.fontWeight, n.fontShape]));
            if (Aa(l, d, i).metrics) return tn(l, d, i, n, a.concat(p));
            if (km.hasOwnProperty(l) && d.slice(0, 10) === "Typewriter") {
                for (var S = [], w = 0; w < l.length; w++) S.push(tn(l[w], d, i, n, a.concat(p)));
                return bm(S);
            }
        }
        if (r === "mathord") return tn(l, "Math-Italic", i, n, a.concat(["mathnormal"]));
        if (r === "textord") {
            var N = Ee[i][l] && Ee[i][l].font;
            if (N === "ams") {
                var y = rl("amsrm", n.fontWeight, n.fontShape);
                return tn(l, y, i, n, a.concat("amsrm", n.fontWeight, n.fontShape));
            } else if (N === "main" || !N) {
                var x = rl("textrm", n.fontWeight, n.fontShape);
                return tn(l, x, i, n, a.concat(n.fontWeight, n.fontShape));
            } else {
                var k = rl(N, n.fontWeight, n.fontShape);
                return tn(l, k, i, n, a.concat(k, n.fontWeight, n.fontShape));
            }
        } else throw new Error("unexpected type: " + r + " in makeOrd");
    },
    Gg = (e, t) => {
        if (sr(e.classes) !== sr(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize) return !1;
        if (e.classes.length === 1) {
            var n = e.classes[0];
            if (n === "mbin" || n === "mord") return !1;
        }
        for (var r in e.style) if (e.style.hasOwnProperty(r) && e.style[r] !== t.style[r]) return !1;
        for (var i in t.style) if (t.style.hasOwnProperty(i) && e.style[i] !== t.style[i]) return !1;
        return !0;
    },
    Yg = e => {
        for (var t = 0; t < e.length - 1; t++) {
            var n = e[t],
                r = e[t + 1];
            n instanceof jt &&
                r instanceof jt &&
                Gg(n, r) &&
                ((n.text += r.text),
                (n.height = Math.max(n.height, r.height)),
                (n.depth = Math.max(n.depth, r.depth)),
                (n.italic = r.italic),
                e.splice(t + 1, 1),
                t--);
        }
        return e;
    },
    l1 = function (t) {
        for (var n = 0, r = 0, i = 0, l = 0; l < t.children.length; l++) {
            var a = t.children[l];
            a.height > n && (n = a.height), a.depth > r && (r = a.depth), a.maxFontSize > i && (i = a.maxFontSize);
        }
        (t.height = n), (t.depth = r), (t.maxFontSize = i);
    },
    gt = function (t, n, r, i) {
        var l = new Ni(t, n, r, i);
        return l1(l), l;
    },
    Sm = (e, t, n, r) => new Ni(e, t, n, r),
    Xg = function (t, n, r) {
        var i = gt([t], [], n);
        return (
            (i.height = Math.max(r || n.fontMetrics().defaultRuleThickness, n.minRuleThickness)),
            (i.style.borderBottomWidth = V(i.height)),
            (i.maxFontSize = 1),
            i
        );
    },
    Qg = function (t, n, r, i) {
        var l = new i1(t, n, r, i);
        return l1(l), l;
    },
    bm = function (t) {
        var n = new Ai(t);
        return l1(n), n;
    },
    Kg = function (t, n) {
        return t instanceof Ai ? gt([], [t], n) : t;
    },
    Zg = function (t) {
        if (t.positionType === "individualShift") {
            for (var n = t.children, r = [n[0]], i = -n[0].shift - n[0].elem.depth, l = i, a = 1; a < n.length; a++) {
                var o = -n[a].shift - l - n[a].elem.depth,
                    u = o - (n[a - 1].elem.height + n[a - 1].elem.depth);
                (l = l + o), r.push({ type: "kern", size: u }), r.push(n[a]);
            }
            return { children: r, depth: i };
        }
        var s;
        if (t.positionType === "top") {
            for (var h = t.positionData, d = 0; d < t.children.length; d++) {
                var p = t.children[d];
                h -= p.type === "kern" ? p.size : p.elem.height + p.elem.depth;
            }
            s = h;
        } else if (t.positionType === "bottom") s = -t.positionData;
        else {
            var m = t.children[0];
            if (m.type !== "elem") throw new Error('First child must have type "elem".');
            if (t.positionType === "shift") s = -m.elem.depth - t.positionData;
            else if (t.positionType === "firstBaseline") s = -m.elem.depth;
            else throw new Error("Invalid positionType " + t.positionType + ".");
        }
        return { children: t.children, depth: s };
    },
    Jg = function (t, n) {
        for (var { children: r, depth: i } = Zg(t), l = 0, a = 0; a < r.length; a++) {
            var o = r[a];
            if (o.type === "elem") {
                var u = o.elem;
                l = Math.max(l, u.maxFontSize, u.height);
            }
        }
        l += 2;
        var s = gt(["pstrut"], []);
        s.style.height = V(l);
        for (var h = [], d = i, p = i, m = i, S = 0; S < r.length; S++) {
            var w = r[S];
            if (w.type === "kern") m += w.size;
            else {
                var N = w.elem,
                    y = w.wrapperClasses || [],
                    x = w.wrapperStyle || {},
                    k = gt(y, [s, N], void 0, x);
                (k.style.top = V(-l - m - N.depth)),
                    w.marginLeft && (k.style.marginLeft = w.marginLeft),
                    w.marginRight && (k.style.marginRight = w.marginRight),
                    h.push(k),
                    (m += N.height + N.depth);
            }
            (d = Math.min(d, m)), (p = Math.max(p, m));
        }
        var A = gt(["vlist"], h);
        A.style.height = V(p);
        var P;
        if (d < 0) {
            var T = gt([], []),
                F = gt(["vlist"], [T]);
            F.style.height = V(-d);
            var L = gt(["vlist-s"], [new jt("​")]);
            P = [gt(["vlist-r"], [A, L]), gt(["vlist-r"], [F])];
        } else P = [gt(["vlist-r"], [A])];
        var R = gt(["vlist-t"], P);
        return P.length === 2 && R.classes.push("vlist-t2"), (R.height = p), (R.depth = -d), R;
    },
    e9 = (e, t) => {
        var n = gt(["mspace"], [], t),
            r = Le(e, t);
        return (n.style.marginRight = V(r)), n;
    },
    rl = function (t, n, r) {
        var i = "";
        switch (t) {
            case "amsrm":
                i = "AMS";
                break;
            case "textrm":
                i = "Main";
                break;
            case "textsf":
                i = "SansSerif";
                break;
            case "texttt":
                i = "Typewriter";
                break;
            default:
                i = t;
        }
        var l;
        return (
            n === "textbf" && r === "textit" ? (l = "BoldItalic") : n === "textbf" ? (l = "Bold") : n === "textit" ? (l = "Italic") : (l = "Regular"),
            i + "-" + l
        );
    },
    Cm = {
        mathbf: { variant: "bold", fontName: "Main-Bold" },
        mathrm: { variant: "normal", fontName: "Main-Regular" },
        textit: { variant: "italic", fontName: "Main-Italic" },
        mathit: { variant: "italic", fontName: "Main-Italic" },
        mathnormal: { variant: "italic", fontName: "Math-Italic" },
        mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" },
        mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
        mathcal: { variant: "script", fontName: "Caligraphic-Regular" },
        mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
        mathscr: { variant: "script", fontName: "Script-Regular" },
        mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" },
        mathtt: { variant: "monospace", fontName: "Typewriter-Regular" },
    },
    zm = {
        vec: ["vec", 0.471, 0.714],
        oiintSize1: ["oiintSize1", 0.957, 0.499],
        oiintSize2: ["oiintSize2", 1.472, 0.659],
        oiiintSize1: ["oiiintSize1", 1.304, 0.499],
        oiiintSize2: ["oiiintSize2", 1.98, 0.659],
    },
    t9 = function (t, n) {
        var [r, i, l] = zm[t],
            a = new cr(r),
            o = new Bn([a], { width: V(i), height: V(l), style: "width:" + V(i), viewBox: "0 0 " + 1e3 * i + " " + 1e3 * l, preserveAspectRatio: "xMinYMin" }),
            u = Sm(["overlay"], [o], n);
        return (u.height = l), (u.style.height = V(l)), (u.style.width = V(i)), u;
    },
    D = {
        fontMap: Cm,
        makeSymbol: tn,
        mathsym: jg,
        makeSpan: gt,
        makeSvgSpan: Sm,
        makeLineSpan: Xg,
        makeAnchor: Qg,
        makeFragment: bm,
        wrapFragment: Kg,
        makeVList: Jg,
        makeOrd: Wg,
        makeGlue: e9,
        staticSvg: t9,
        svgData: zm,
        tryCombineChars: Yg,
    },
    Pe = { number: 3, unit: "mu" },
    xr = { number: 4, unit: "mu" },
    bn = { number: 5, unit: "mu" },
    n9 = {
        mord: { mop: Pe, mbin: xr, mrel: bn, minner: Pe },
        mop: { mord: Pe, mop: Pe, mrel: bn, minner: Pe },
        mbin: { mord: xr, mop: xr, mopen: xr, minner: xr },
        mrel: { mord: bn, mop: bn, mopen: bn, minner: bn },
        mopen: {},
        mclose: { mop: Pe, mbin: xr, mrel: bn, minner: Pe },
        mpunct: { mord: Pe, mop: Pe, mrel: bn, mopen: Pe, mclose: Pe, mpunct: Pe, minner: Pe },
        minner: { mord: Pe, mop: Pe, mbin: xr, mrel: bn, mopen: Pe, mpunct: Pe, minner: Pe },
    },
    r9 = { mord: { mop: Pe }, mop: { mord: Pe, mop: Pe }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: Pe }, mpunct: {}, minner: { mop: Pe } },
    Tm = {},
    Kl = {},
    Zl = {};
function G(e) {
    for (
        var { type: t, names: n, props: r, handler: i, htmlBuilder: l, mathmlBuilder: a } = e,
            o = {
                type: t,
                numArgs: r.numArgs,
                argTypes: r.argTypes,
                allowedInArgument: !!r.allowedInArgument,
                allowedInText: !!r.allowedInText,
                allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
                numOptionalArgs: r.numOptionalArgs || 0,
                infix: !!r.infix,
                primitive: !!r.primitive,
                handler: i,
            },
            u = 0;
        u < n.length;
        ++u
    )
        Tm[n[u]] = o;
    t && (l && (Kl[t] = l), a && (Zl[t] = a));
}
function Br(e) {
    var { type: t, htmlBuilder: n, mathmlBuilder: r } = e;
    G({
        type: t,
        names: [],
        props: { numArgs: 0 },
        handler() {
            throw new Error("Should never be called.");
        },
        htmlBuilder: n,
        mathmlBuilder: r,
    });
}
var Jl = function (t) {
        return t.type === "ordgroup" && t.body.length === 1 ? t.body[0] : t;
    },
    Ue = function (t) {
        return t.type === "ordgroup" ? t.body : [t];
    },
    On = D.makeSpan,
    i9 = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
    l9 = ["rightmost", "mrel", "mclose", "mpunct"],
    a9 = { display: te.DISPLAY, text: te.TEXT, script: te.SCRIPT, scriptscript: te.SCRIPTSCRIPT },
    o9 = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" },
    Ye = function (t, n, r, i) {
        i === void 0 && (i = [null, null]);
        for (var l = [], a = 0; a < t.length; a++) {
            var o = me(t[a], n);
            if (o instanceof Ai) {
                var u = o.children;
                l.push(...u);
            } else l.push(o);
        }
        if ((D.tryCombineChars(l), !r)) return l;
        var s = n;
        if (t.length === 1) {
            var h = t[0];
            h.type === "sizing" ? (s = n.havingSize(h.size)) : h.type === "styling" && (s = n.havingStyle(a9[h.style]));
        }
        var d = On([i[0] || "leftmost"], [], n),
            p = On([i[1] || "rightmost"], [], n),
            m = r === "root";
        return (
            Ph(
                l,
                (S, w) => {
                    var N = w.classes[0],
                        y = S.classes[0];
                    N === "mbin" && J.contains(l9, y) ? (w.classes[0] = "mord") : y === "mbin" && J.contains(i9, N) && (S.classes[0] = "mord");
                },
                { node: d },
                p,
                m,
            ),
            Ph(
                l,
                (S, w) => {
                    var N = _u(w),
                        y = _u(S),
                        x = N && y ? (S.hasClass("mtight") ? r9[N][y] : n9[N][y]) : null;
                    if (x) return D.makeGlue(x, s);
                },
                { node: d },
                p,
                m,
            ),
            l
        );
    },
    Ph = function e(t, n, r, i, l) {
        i && t.push(i);
        for (var a = 0; a < t.length; a++) {
            var o = t[a],
                u = Em(o);
            if (u) {
                e(u.children, n, r, null, l);
                continue;
            }
            var s = !o.hasClass("mspace");
            if (s) {
                var h = n(o, r.node);
                h && (r.insertAfter ? r.insertAfter(h) : (t.unshift(h), a++));
            }
            s ? (r.node = o) : l && o.hasClass("newline") && (r.node = On(["leftmost"])),
                (r.insertAfter = (d => p => {
                    t.splice(d + 1, 0, p), a++;
                })(a));
        }
        i && t.pop();
    },
    Em = function (t) {
        return t instanceof Ai || t instanceof i1 || (t instanceof Ni && t.hasClass("enclosing")) ? t : null;
    },
    u9 = function e(t, n) {
        var r = Em(t);
        if (r) {
            var i = r.children;
            if (i.length) {
                if (n === "right") return e(i[i.length - 1], "right");
                if (n === "left") return e(i[0], "left");
            }
        }
        return t;
    },
    _u = function (t, n) {
        return t ? (n && (t = u9(t, n)), o9[t.classes[0]] || null) : null;
    },
    ki = function (t, n) {
        var r = ["nulldelimiter"].concat(t.baseSizingClasses());
        return On(n.concat(r));
    },
    me = function (t, n, r) {
        if (!t) return On();
        if (Kl[t.type]) {
            var i = Kl[t.type](t, n);
            if (r && n.size !== r.size) {
                i = On(n.sizingClasses(r), [i], n);
                var l = n.sizeMultiplier / r.sizeMultiplier;
                (i.height *= l), (i.depth *= l);
            }
            return i;
        } else throw new H("Got group of unknown type: '" + t.type + "'");
    };
function il(e, t) {
    var n = On(["base"], e, t),
        r = On(["strut"]);
    return (r.style.height = V(n.height + n.depth)), n.depth && (r.style.verticalAlign = V(-n.depth)), n.children.unshift(r), n;
}
function Uu(e, t) {
    var n = null;
    e.length === 1 && e[0].type === "tag" && ((n = e[0].tag), (e = e[0].body));
    var r = Ye(e, t, "root"),
        i;
    r.length === 2 && r[1].hasClass("tag") && (i = r.pop());
    for (var l = [], a = [], o = 0; o < r.length; o++)
        if ((a.push(r[o]), r[o].hasClass("mbin") || r[o].hasClass("mrel") || r[o].hasClass("allowbreak"))) {
            for (var u = !1; o < r.length - 1 && r[o + 1].hasClass("mspace") && !r[o + 1].hasClass("newline"); )
                o++, a.push(r[o]), r[o].hasClass("nobreak") && (u = !0);
            u || (l.push(il(a, t)), (a = []));
        } else r[o].hasClass("newline") && (a.pop(), a.length > 0 && (l.push(il(a, t)), (a = [])), l.push(r[o]));
    a.length > 0 && l.push(il(a, t));
    var s;
    n ? ((s = il(Ye(n, t, !0))), (s.classes = ["tag"]), l.push(s)) : i && l.push(i);
    var h = On(["katex-html"], l);
    if ((h.setAttribute("aria-hidden", "true"), s)) {
        var d = s.children[0];
        (d.style.height = V(h.height + h.depth)), h.depth && (d.style.verticalAlign = V(-h.depth));
    }
    return h;
}
function Mm(e) {
    return new Ai(e);
}
class Et {
    constructor(t, n, r) {
        (this.type = void 0),
            (this.attributes = void 0),
            (this.children = void 0),
            (this.classes = void 0),
            (this.type = t),
            (this.attributes = {}),
            (this.children = n || []),
            (this.classes = r || []);
    }
    setAttribute(t, n) {
        this.attributes[t] = n;
    }
    getAttribute(t) {
        return this.attributes[t];
    }
    toNode() {
        var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
        for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
        this.classes.length > 0 && (t.className = sr(this.classes));
        for (var r = 0; r < this.children.length; r++)
            if (this.children[r] instanceof mn && this.children[r + 1] instanceof mn) {
                for (var i = this.children[r].toText() + this.children[++r].toText(); this.children[r + 1] instanceof mn; ) i += this.children[++r].toText();
                t.appendChild(new mn(i).toNode());
            } else t.appendChild(this.children[r].toNode());
        return t;
    }
    toMarkup() {
        var t = "<" + this.type;
        for (var n in this.attributes)
            Object.prototype.hasOwnProperty.call(this.attributes, n) && ((t += " " + n + '="'), (t += J.escape(this.attributes[n])), (t += '"'));
        this.classes.length > 0 && (t += ' class ="' + J.escape(sr(this.classes)) + '"'), (t += ">");
        for (var r = 0; r < this.children.length; r++) t += this.children[r].toMarkup();
        return (t += "</" + this.type + ">"), t;
    }
    toText() {
        return this.children.map(t => t.toText()).join("");
    }
}
class mn {
    constructor(t) {
        (this.text = void 0), (this.text = t);
    }
    toNode() {
        return document.createTextNode(this.text);
    }
    toMarkup() {
        return J.escape(this.toText());
    }
    toText() {
        return this.text;
    }
}
class s9 {
    constructor(t) {
        (this.width = void 0),
            (this.character = void 0),
            (this.width = t),
            t >= 0.05555 && t <= 0.05556
                ? (this.character = " ")
                : t >= 0.1666 && t <= 0.1667
                  ? (this.character = " ")
                  : t >= 0.2222 && t <= 0.2223
                    ? (this.character = " ")
                    : t >= 0.2777 && t <= 0.2778
                      ? (this.character = "  ")
                      : t >= -0.05556 && t <= -0.05555
                        ? (this.character = " ⁣")
                        : t >= -0.1667 && t <= -0.1666
                          ? (this.character = " ⁣")
                          : t >= -0.2223 && t <= -0.2222
                            ? (this.character = " ⁣")
                            : t >= -0.2778 && t <= -0.2777
                              ? (this.character = " ⁣")
                              : (this.character = null);
    }
    toNode() {
        if (this.character) return document.createTextNode(this.character);
        var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
        return t.setAttribute("width", V(this.width)), t;
    }
    toMarkup() {
        return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + V(this.width) + '"/>';
    }
    toText() {
        return this.character ? this.character : " ";
    }
}
var O = { MathNode: Et, TextNode: mn, SpaceNode: s9, newDocumentFragment: Mm },
    Vt = function (t, n, r) {
        return (
            Ee[n][t] &&
                Ee[n][t].replace &&
                t.charCodeAt(0) !== 55349 &&
                !(km.hasOwnProperty(t) && r && ((r.fontFamily && r.fontFamily.slice(4, 6) === "tt") || (r.font && r.font.slice(4, 6) === "tt"))) &&
                (t = Ee[n][t].replace),
            new O.TextNode(t)
        );
    },
    a1 = function (t) {
        return t.length === 1 ? t[0] : new O.MathNode("mrow", t);
    },
    o1 = function (t, n) {
        if (n.fontFamily === "texttt") return "monospace";
        if (n.fontFamily === "textsf")
            return n.fontShape === "textit" && n.fontWeight === "textbf"
                ? "sans-serif-bold-italic"
                : n.fontShape === "textit"
                  ? "sans-serif-italic"
                  : n.fontWeight === "textbf"
                    ? "bold-sans-serif"
                    : "sans-serif";
        if (n.fontShape === "textit" && n.fontWeight === "textbf") return "bold-italic";
        if (n.fontShape === "textit") return "italic";
        if (n.fontWeight === "textbf") return "bold";
        var r = n.font;
        if (!r || r === "mathnormal") return null;
        var i = t.mode;
        if (r === "mathit") return "italic";
        if (r === "boldsymbol") return t.type === "textord" ? "bold" : "bold-italic";
        if (r === "mathbf") return "bold";
        if (r === "mathbb") return "double-struck";
        if (r === "mathsfit") return "sans-serif-italic";
        if (r === "mathfrak") return "fraktur";
        if (r === "mathscr" || r === "mathcal") return "script";
        if (r === "mathsf") return "sans-serif";
        if (r === "mathtt") return "monospace";
        var l = t.text;
        if (J.contains(["\\imath", "\\jmath"], l)) return null;
        Ee[i][l] && Ee[i][l].replace && (l = Ee[i][l].replace);
        var a = D.fontMap[r].fontName;
        return r1(l, a, i) ? D.fontMap[r].variant : null;
    };
function zo(e) {
    if (!e) return !1;
    if (e.type === "mi" && e.children.length === 1) {
        var t = e.children[0];
        return t instanceof mn && t.text === ".";
    } else if (
        e.type === "mo" &&
        e.children.length === 1 &&
        e.getAttribute("separator") === "true" &&
        e.getAttribute("lspace") === "0em" &&
        e.getAttribute("rspace") === "0em"
    ) {
        var n = e.children[0];
        return n instanceof mn && n.text === ",";
    } else return !1;
}
var bt = function (t, n, r) {
        if (t.length === 1) {
            var i = Ce(t[0], n);
            return r && i instanceof Et && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
        }
        for (var l = [], a, o = 0; o < t.length; o++) {
            var u = Ce(t[o], n);
            if (u instanceof Et && a instanceof Et) {
                if (u.type === "mtext" && a.type === "mtext" && u.getAttribute("mathvariant") === a.getAttribute("mathvariant")) {
                    a.children.push(...u.children);
                    continue;
                } else if (u.type === "mn" && a.type === "mn") {
                    a.children.push(...u.children);
                    continue;
                } else if (zo(u) && a.type === "mn") {
                    a.children.push(...u.children);
                    continue;
                } else if (u.type === "mn" && zo(a)) (u.children = [...a.children, ...u.children]), l.pop();
                else if ((u.type === "msup" || u.type === "msub") && u.children.length >= 1 && (a.type === "mn" || zo(a))) {
                    var s = u.children[0];
                    s instanceof Et && s.type === "mn" && ((s.children = [...a.children, ...s.children]), l.pop());
                } else if (a.type === "mi" && a.children.length === 1) {
                    var h = a.children[0];
                    if (h instanceof mn && h.text === "̸" && (u.type === "mo" || u.type === "mi" || u.type === "mn")) {
                        var d = u.children[0];
                        d instanceof mn && d.text.length > 0 && ((d.text = d.text.slice(0, 1) + "̸" + d.text.slice(1)), l.pop());
                    }
                }
            }
            l.push(u), (a = u);
        }
        return l;
    },
    hr = function (t, n, r) {
        return a1(bt(t, n, r));
    },
    Ce = function (t, n) {
        if (!t) return new O.MathNode("mrow");
        if (Zl[t.type]) {
            var r = Zl[t.type](t, n);
            return r;
        } else throw new H("Got group of unknown type: '" + t.type + "'");
    };
function Ih(e, t, n, r, i) {
    var l = bt(e, n),
        a;
    l.length === 1 && l[0] instanceof Et && J.contains(["mrow", "mtable"], l[0].type) ? (a = l[0]) : (a = new O.MathNode("mrow", l));
    var o = new O.MathNode("annotation", [new O.TextNode(t)]);
    o.setAttribute("encoding", "application/x-tex");
    var u = new O.MathNode("semantics", [a, o]),
        s = new O.MathNode("math", [u]);
    s.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && s.setAttribute("display", "block");
    var h = i ? "katex" : "katex-mathml";
    return D.makeSpan([h], [s]);
}
var Am = function (t) {
        return new Tn({ style: t.displayMode ? te.DISPLAY : te.TEXT, maxSize: t.maxSize, minRuleThickness: t.minRuleThickness });
    },
    Nm = function (t, n) {
        if (n.displayMode) {
            var r = ["katex-display"];
            n.leqno && r.push("leqno"), n.fleqn && r.push("fleqn"), (t = D.makeSpan(r, [t]));
        }
        return t;
    },
    c9 = function (t, n, r) {
        var i = Am(r),
            l;
        if (r.output === "mathml") return Ih(t, n, i, r.displayMode, !0);
        if (r.output === "html") {
            var a = Uu(t, i);
            l = D.makeSpan(["katex"], [a]);
        } else {
            var o = Ih(t, n, i, r.displayMode, !1),
                u = Uu(t, i);
            l = D.makeSpan(["katex"], [o, u]);
        }
        return Nm(l, r);
    },
    h9 = function (t, n, r) {
        var i = Am(r),
            l = Uu(t, i),
            a = D.makeSpan(["katex"], [l]);
        return Nm(a, r);
    },
    f9 = {
        widehat: "^",
        widecheck: "ˇ",
        widetilde: "~",
        utilde: "~",
        overleftarrow: "←",
        underleftarrow: "←",
        xleftarrow: "←",
        overrightarrow: "→",
        underrightarrow: "→",
        xrightarrow: "→",
        underbrace: "⏟",
        overbrace: "⏞",
        overgroup: "⏠",
        undergroup: "⏡",
        overleftrightarrow: "↔",
        underleftrightarrow: "↔",
        xleftrightarrow: "↔",
        Overrightarrow: "⇒",
        xRightarrow: "⇒",
        overleftharpoon: "↼",
        xleftharpoonup: "↼",
        overrightharpoon: "⇀",
        xrightharpoonup: "⇀",
        xLeftarrow: "⇐",
        xLeftrightarrow: "⇔",
        xhookleftarrow: "↩",
        xhookrightarrow: "↪",
        xmapsto: "↦",
        xrightharpoondown: "⇁",
        xleftharpoondown: "↽",
        xrightleftharpoons: "⇌",
        xleftrightharpoons: "⇋",
        xtwoheadleftarrow: "↞",
        xtwoheadrightarrow: "↠",
        xlongequal: "=",
        xtofrom: "⇄",
        xrightleftarrows: "⇄",
        xrightequilibrium: "⇌",
        xleftequilibrium: "⇋",
        "\\cdrightarrow": "→",
        "\\cdleftarrow": "←",
        "\\cdlongequal": "=",
    },
    d9 = function (t) {
        var n = new O.MathNode("mo", [new O.TextNode(f9[t.replace(/^\\/, "")])]);
        return n.setAttribute("stretchy", "true"), n;
    },
    m9 = {
        overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
        underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
        xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
        "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
        xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
        "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
        Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
        xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
        xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
        overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
        xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
        overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
        xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
        xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
        "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
        xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
        xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
        overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
        underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
        underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
        xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
        xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
        xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
        xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
        xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
        xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
        overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
        overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
        undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
        xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
        xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
        xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
        xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
        xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716],
    },
    p9 = function (t) {
        return t.type === "ordgroup" ? t.body.length : 1;
    },
    g9 = function (t, n) {
        function r() {
            var o = 4e5,
                u = t.label.slice(1);
            if (J.contains(["widehat", "widecheck", "widetilde", "utilde"], u)) {
                var s = t,
                    h = p9(s.base),
                    d,
                    p,
                    m;
                if (h > 5)
                    u === "widehat" || u === "widecheck"
                        ? ((d = 420), (o = 2364), (m = 0.42), (p = u + "4"))
                        : ((d = 312), (o = 2340), (m = 0.34), (p = "tilde4"));
                else {
                    var S = [1, 1, 2, 2, 3, 3][h];
                    u === "widehat" || u === "widecheck"
                        ? ((o = [0, 1062, 2364, 2364, 2364][S]), (d = [0, 239, 300, 360, 420][S]), (m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][S]), (p = u + S))
                        : ((o = [0, 600, 1033, 2339, 2340][S]),
                          (d = [0, 260, 286, 306, 312][S]),
                          (m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][S]),
                          (p = "tilde" + S));
                }
                var w = new cr(p),
                    N = new Bn([w], { width: "100%", height: V(m), viewBox: "0 0 " + o + " " + d, preserveAspectRatio: "none" });
                return { span: D.makeSvgSpan([], [N], n), minWidth: 0, height: m };
            } else {
                var y = [],
                    x = m9[u],
                    [k, A, P] = x,
                    T = P / 1e3,
                    F = k.length,
                    L,
                    R;
                if (F === 1) {
                    var Q = x[3];
                    (L = ["hide-tail"]), (R = [Q]);
                } else if (F === 2) (L = ["halfarrow-left", "halfarrow-right"]), (R = ["xMinYMin", "xMaxYMin"]);
                else if (F === 3) (L = ["brace-left", "brace-center", "brace-right"]), (R = ["xMinYMin", "xMidYMin", "xMaxYMin"]);
                else
                    throw new Error(
                        `Correct katexImagesData or update code here to support
                    ` +
                            F +
                            " children.",
                    );
                for (var U = 0; U < F; U++) {
                    var $ = new cr(k[U]),
                        he = new Bn([$], { width: "400em", height: V(T), viewBox: "0 0 " + o + " " + P, preserveAspectRatio: R[U] + " slice" }),
                        ce = D.makeSvgSpan([L[U]], [he], n);
                    if (F === 1) return { span: ce, minWidth: A, height: T };
                    (ce.style.height = V(T)), y.push(ce);
                }
                return { span: D.makeSpan(["stretchy"], y, n), minWidth: A, height: T };
            }
        }
        var { span: i, minWidth: l, height: a } = r();
        return (i.height = a), (i.style.height = V(a)), l > 0 && (i.style.minWidth = V(l)), i;
    },
    v9 = function (t, n, r, i, l) {
        var a,
            o = t.height + t.depth + r + i;
        if (/fbox|color|angl/.test(n)) {
            if (((a = D.makeSpan(["stretchy", n], [], l)), n === "fbox")) {
                var u = l.color && l.getColor();
                u && (a.style.borderColor = u);
            }
        } else {
            var s = [];
            /^[bx]cancel$/.test(n) && s.push(new Hu({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })),
                /^x?cancel$/.test(n) && s.push(new Hu({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
            var h = new Bn(s, { width: "100%", height: V(o) });
            a = D.makeSvgSpan([], [h], l);
        }
        return (a.height = o), (a.style.height = V(o)), a;
    },
    Rn = { encloseSpan: v9, mathMLnode: d9, svgSpan: g9 };
function se(e, t) {
    if (!e || e.type !== t) throw new Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
    return e;
}
function u1(e) {
    var t = Na(e);
    if (!t) throw new Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
    return t;
}
function Na(e) {
    return e && (e.type === "atom" || Ug.hasOwnProperty(e.type)) ? e : null;
}
var s1 = (e, t) => {
        var n, r, i;
        e && e.type === "supsub"
            ? ((r = se(e.base, "accent")), (n = r.base), (e.base = n), (i = qg(me(e, t))), (e.base = r))
            : ((r = se(e, "accent")), (n = r.base));
        var l = me(n, t.havingCrampedStyle()),
            a = r.isShifty && J.isCharacterBox(n),
            o = 0;
        if (a) {
            var u = J.getBaseElem(n),
                s = me(u, t.havingCrampedStyle());
            o = Eh(s).skew;
        }
        var h = r.label === "\\c",
            d = h ? l.height + l.depth : Math.min(l.height, t.fontMetrics().xHeight),
            p;
        if (r.isStretchy)
            (p = Rn.svgSpan(r, t)),
                (p = D.makeVList(
                    {
                        positionType: "firstBaseline",
                        children: [
                            { type: "elem", elem: l },
                            {
                                type: "elem",
                                elem: p,
                                wrapperClasses: ["svg-align"],
                                wrapperStyle: o > 0 ? { width: "calc(100% - " + V(2 * o) + ")", marginLeft: V(2 * o) } : void 0,
                            },
                        ],
                    },
                    t,
                ));
        else {
            var m, S;
            r.label === "\\vec"
                ? ((m = D.staticSvg("vec", t)), (S = D.svgData.vec[1]))
                : ((m = D.makeOrd({ mode: r.mode, text: r.label }, t, "textord")), (m = Eh(m)), (m.italic = 0), (S = m.width), h && (d += m.depth)),
                (p = D.makeSpan(["accent-body"], [m]));
            var w = r.label === "\\textcircled";
            w && (p.classes.push("accent-full"), (d = l.height));
            var N = o;
            w || (N -= S / 2),
                (p.style.left = V(N)),
                r.label === "\\textcircled" && (p.style.top = ".2em"),
                (p = D.makeVList(
                    {
                        positionType: "firstBaseline",
                        children: [
                            { type: "elem", elem: l },
                            { type: "kern", size: -d },
                            { type: "elem", elem: p },
                        ],
                    },
                    t,
                ));
        }
        var y = D.makeSpan(["mord", "accent"], [p], t);
        return i ? ((i.children[0] = y), (i.height = Math.max(y.height, i.height)), (i.classes[0] = "mord"), i) : y;
    },
    Dm = (e, t) => {
        var n = e.isStretchy ? Rn.mathMLnode(e.label) : new O.MathNode("mo", [Vt(e.label, e.mode)]),
            r = new O.MathNode("mover", [Ce(e.base, t), n]);
        return r.setAttribute("accent", "true"), r;
    },
    y9 = new RegExp(
        ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(e => "\\" + e).join("|"),
    );
G({
    type: "accent",
    names: [
        "\\acute",
        "\\grave",
        "\\ddot",
        "\\tilde",
        "\\bar",
        "\\breve",
        "\\check",
        "\\hat",
        "\\vec",
        "\\dot",
        "\\mathring",
        "\\widecheck",
        "\\widehat",
        "\\widetilde",
        "\\overrightarrow",
        "\\overleftarrow",
        "\\Overrightarrow",
        "\\overleftrightarrow",
        "\\overgroup",
        "\\overlinesegment",
        "\\overleftharpoon",
        "\\overrightharpoon",
    ],
    props: { numArgs: 1 },
    handler: (e, t) => {
        var n = Jl(t[0]),
            r = !y9.test(e.funcName),
            i = !r || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
        return { type: "accent", mode: e.parser.mode, label: e.funcName, isStretchy: r, isShifty: i, base: n };
    },
    htmlBuilder: s1,
    mathmlBuilder: Dm,
});
G({
    type: "accent",
    names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
    props: { numArgs: 1, allowedInText: !0, allowedInMath: !0, argTypes: ["primitive"] },
    handler: (e, t) => {
        var n = t[0],
            r = e.parser.mode;
        return (
            r === "math" && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), (r = "text")),
            { type: "accent", mode: r, label: e.funcName, isStretchy: !1, isShifty: !0, base: n }
        );
    },
    htmlBuilder: s1,
    mathmlBuilder: Dm,
});
G({
    type: "accentUnder",
    names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
    props: { numArgs: 1 },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = t[0];
        return { type: "accentUnder", mode: n.mode, label: r, base: i };
    },
    htmlBuilder: (e, t) => {
        var n = me(e.base, t),
            r = Rn.svgSpan(e, t),
            i = e.label === "\\utilde" ? 0.12 : 0,
            l = D.makeVList(
                {
                    positionType: "top",
                    positionData: n.height,
                    children: [
                        { type: "elem", elem: r, wrapperClasses: ["svg-align"] },
                        { type: "kern", size: i },
                        { type: "elem", elem: n },
                    ],
                },
                t,
            );
        return D.makeSpan(["mord", "accentunder"], [l], t);
    },
    mathmlBuilder: (e, t) => {
        var n = Rn.mathMLnode(e.label),
            r = new O.MathNode("munder", [Ce(e.base, t), n]);
        return r.setAttribute("accentunder", "true"), r;
    },
});
var ll = e => {
    var t = new O.MathNode("mpadded", e ? [e] : []);
    return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
};
G({
    type: "xArrow",
    names: [
        "\\xleftarrow",
        "\\xrightarrow",
        "\\xLeftarrow",
        "\\xRightarrow",
        "\\xleftrightarrow",
        "\\xLeftrightarrow",
        "\\xhookleftarrow",
        "\\xhookrightarrow",
        "\\xmapsto",
        "\\xrightharpoondown",
        "\\xrightharpoonup",
        "\\xleftharpoondown",
        "\\xleftharpoonup",
        "\\xrightleftharpoons",
        "\\xleftrightharpoons",
        "\\xlongequal",
        "\\xtwoheadrightarrow",
        "\\xtwoheadleftarrow",
        "\\xtofrom",
        "\\xrightleftarrows",
        "\\xrightequilibrium",
        "\\xleftequilibrium",
        "\\\\cdrightarrow",
        "\\\\cdleftarrow",
        "\\\\cdlongequal",
    ],
    props: { numArgs: 1, numOptionalArgs: 1 },
    handler(e, t, n) {
        var { parser: r, funcName: i } = e;
        return { type: "xArrow", mode: r.mode, label: i, body: t[0], below: n[0] };
    },
    htmlBuilder(e, t) {
        var n = t.style,
            r = t.havingStyle(n.sup()),
            i = D.wrapFragment(me(e.body, r, t), t),
            l = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
        i.classes.push(l + "-arrow-pad");
        var a;
        e.below && ((r = t.havingStyle(n.sub())), (a = D.wrapFragment(me(e.below, r, t), t)), a.classes.push(l + "-arrow-pad"));
        var o = Rn.svgSpan(e, t),
            u = -t.fontMetrics().axisHeight + 0.5 * o.height,
            s = -t.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
        (i.depth > 0.25 || e.label === "\\xleftequilibrium") && (s -= i.depth);
        var h;
        if (a) {
            var d = -t.fontMetrics().axisHeight + a.height + 0.5 * o.height + 0.111;
            h = D.makeVList(
                {
                    positionType: "individualShift",
                    children: [
                        { type: "elem", elem: i, shift: s },
                        { type: "elem", elem: o, shift: u },
                        { type: "elem", elem: a, shift: d },
                    ],
                },
                t,
            );
        } else
            h = D.makeVList(
                {
                    positionType: "individualShift",
                    children: [
                        { type: "elem", elem: i, shift: s },
                        { type: "elem", elem: o, shift: u },
                    ],
                },
                t,
            );
        return h.children[0].children[0].children[1].classes.push("svg-align"), D.makeSpan(["mrel", "x-arrow"], [h], t);
    },
    mathmlBuilder(e, t) {
        var n = Rn.mathMLnode(e.label);
        n.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
        var r;
        if (e.body) {
            var i = ll(Ce(e.body, t));
            if (e.below) {
                var l = ll(Ce(e.below, t));
                r = new O.MathNode("munderover", [n, l, i]);
            } else r = new O.MathNode("mover", [n, i]);
        } else if (e.below) {
            var a = ll(Ce(e.below, t));
            r = new O.MathNode("munder", [n, a]);
        } else (r = ll()), (r = new O.MathNode("mover", [n, r]));
        return r;
    },
});
var x9 = D.makeSpan;
function Fm(e, t) {
    var n = Ye(e.body, t, !0);
    return x9([e.mclass], n, t);
}
function Pm(e, t) {
    var n,
        r = bt(e.body, t);
    return (
        e.mclass === "minner"
            ? (n = new O.MathNode("mpadded", r))
            : e.mclass === "mord"
              ? e.isCharacterBox
                  ? ((n = r[0]), (n.type = "mi"))
                  : (n = new O.MathNode("mi", r))
              : (e.isCharacterBox ? ((n = r[0]), (n.type = "mo")) : (n = new O.MathNode("mo", r)),
                e.mclass === "mbin"
                    ? ((n.attributes.lspace = "0.22em"), (n.attributes.rspace = "0.22em"))
                    : e.mclass === "mpunct"
                      ? ((n.attributes.lspace = "0em"), (n.attributes.rspace = "0.17em"))
                      : e.mclass === "mopen" || e.mclass === "mclose"
                        ? ((n.attributes.lspace = "0em"), (n.attributes.rspace = "0em"))
                        : e.mclass === "minner" && ((n.attributes.lspace = "0.0556em"), (n.attributes.width = "+0.1111em"))),
        n
    );
}
G({
    type: "mclass",
    names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
    props: { numArgs: 1, primitive: !0 },
    handler(e, t) {
        var { parser: n, funcName: r } = e,
            i = t[0];
        return { type: "mclass", mode: n.mode, mclass: "m" + r.slice(5), body: Ue(i), isCharacterBox: J.isCharacterBox(i) };
    },
    htmlBuilder: Fm,
    mathmlBuilder: Pm,
});
var Da = e => {
    var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
    return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
};
G({
    type: "mclass",
    names: ["\\@binrel"],
    props: { numArgs: 2 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "mclass", mode: n.mode, mclass: Da(t[0]), body: Ue(t[1]), isCharacterBox: J.isCharacterBox(t[1]) };
    },
});
G({
    type: "mclass",
    names: ["\\stackrel", "\\overset", "\\underset"],
    props: { numArgs: 2 },
    handler(e, t) {
        var { parser: n, funcName: r } = e,
            i = t[1],
            l = t[0],
            a;
        r !== "\\stackrel" ? (a = Da(i)) : (a = "mrel");
        var o = {
                type: "op",
                mode: i.mode,
                limits: !0,
                alwaysHandleSupSub: !0,
                parentIsSupSub: !1,
                symbol: !1,
                suppressBaseShift: r !== "\\stackrel",
                body: Ue(i),
            },
            u = { type: "supsub", mode: l.mode, base: o, sup: r === "\\underset" ? null : l, sub: r === "\\underset" ? l : null };
        return { type: "mclass", mode: n.mode, mclass: a, body: [u], isCharacterBox: J.isCharacterBox(u) };
    },
    htmlBuilder: Fm,
    mathmlBuilder: Pm,
});
G({
    type: "pmb",
    names: ["\\pmb"],
    props: { numArgs: 1, allowedInText: !0 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "pmb", mode: n.mode, mclass: Da(t[0]), body: Ue(t[0]) };
    },
    htmlBuilder(e, t) {
        var n = Ye(e.body, t, !0),
            r = D.makeSpan([e.mclass], n, t);
        return (r.style.textShadow = "0.02em 0.01em 0.04px"), r;
    },
    mathmlBuilder(e, t) {
        var n = bt(e.body, t),
            r = new O.MathNode("mstyle", n);
        return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
    },
});
var w9 = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" },
    Lh = () => ({ type: "styling", body: [], mode: "math", style: "display" }),
    Bh = e => e.type === "textord" && e.text === "@",
    k9 = (e, t) => (e.type === "mathord" || e.type === "atom") && e.text === t;
function S9(e, t, n) {
    var r = w9[e];
    switch (r) {
        case "\\\\cdrightarrow":
        case "\\\\cdleftarrow":
            return n.callFunction(r, [t[0]], [t[1]]);
        case "\\uparrow":
        case "\\downarrow": {
            var i = n.callFunction("\\\\cdleft", [t[0]], []),
                l = { type: "atom", text: r, mode: "math", family: "rel" },
                a = n.callFunction("\\Big", [l], []),
                o = n.callFunction("\\\\cdright", [t[1]], []),
                u = { type: "ordgroup", mode: "math", body: [i, a, o] };
            return n.callFunction("\\\\cdparent", [u], []);
        }
        case "\\\\cdlongequal":
            return n.callFunction("\\\\cdlongequal", [], []);
        case "\\Vert": {
            var s = { type: "textord", text: "\\Vert", mode: "math" };
            return n.callFunction("\\Big", [s], []);
        }
        default:
            return { type: "textord", text: " ", mode: "math" };
    }
}
function b9(e) {
    var t = [];
    for (e.gullet.beginGroup(), e.gullet.macros.set("\\cr", "\\\\\\relax"), e.gullet.beginGroup(); ; ) {
        t.push(e.parseExpression(!1, "\\\\")), e.gullet.endGroup(), e.gullet.beginGroup();
        var n = e.fetch().text;
        if (n === "&" || n === "\\\\") e.consume();
        else if (n === "\\end") {
            t[t.length - 1].length === 0 && t.pop();
            break;
        } else throw new H("Expected \\\\ or \\cr or \\end", e.nextToken);
    }
    for (var r = [], i = [r], l = 0; l < t.length; l++) {
        for (var a = t[l], o = Lh(), u = 0; u < a.length; u++)
            if (!Bh(a[u])) o.body.push(a[u]);
            else {
                r.push(o), (u += 1);
                var s = u1(a[u]).text,
                    h = new Array(2);
                if (((h[0] = { type: "ordgroup", mode: "math", body: [] }), (h[1] = { type: "ordgroup", mode: "math", body: [] }), !("=|.".indexOf(s) > -1)))
                    if ("<>AV".indexOf(s) > -1)
                        for (var d = 0; d < 2; d++) {
                            for (var p = !0, m = u + 1; m < a.length; m++) {
                                if (k9(a[m], s)) {
                                    (p = !1), (u = m);
                                    break;
                                }
                                if (Bh(a[m])) throw new H("Missing a " + s + " character to complete a CD arrow.", a[m]);
                                h[d].body.push(a[m]);
                            }
                            if (p) throw new H("Missing a " + s + " character to complete a CD arrow.", a[u]);
                        }
                    else throw new H('Expected one of "<>AV=|." after @', a[u]);
                var S = S9(s, h, e),
                    w = { type: "styling", body: [S], mode: "math", style: "display" };
                r.push(w), (o = Lh());
            }
        l % 2 === 0 ? r.push(o) : r.shift(), (r = []), i.push(r);
    }
    e.gullet.endGroup(), e.gullet.endGroup();
    var N = new Array(i[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
    return {
        type: "array",
        mode: "math",
        body: i,
        arraystretch: 1,
        addJot: !0,
        rowGaps: [null],
        cols: N,
        colSeparationType: "CD",
        hLinesBeforeRow: new Array(i.length + 1).fill([]),
    };
}
G({
    type: "cdlabel",
    names: ["\\\\cdleft", "\\\\cdright"],
    props: { numArgs: 1 },
    handler(e, t) {
        var { parser: n, funcName: r } = e;
        return { type: "cdlabel", mode: n.mode, side: r.slice(4), label: t[0] };
    },
    htmlBuilder(e, t) {
        var n = t.havingStyle(t.style.sup()),
            r = D.wrapFragment(me(e.label, n, t), t);
        return r.classes.push("cd-label-" + e.side), (r.style.bottom = V(0.8 - r.depth)), (r.height = 0), (r.depth = 0), r;
    },
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mrow", [Ce(e.label, t)]);
        return (
            (n = new O.MathNode("mpadded", [n])),
            n.setAttribute("width", "0"),
            e.side === "left" && n.setAttribute("lspace", "-1width"),
            n.setAttribute("voffset", "0.7em"),
            (n = new O.MathNode("mstyle", [n])),
            n.setAttribute("displaystyle", "false"),
            n.setAttribute("scriptlevel", "1"),
            n
        );
    },
});
G({
    type: "cdlabelparent",
    names: ["\\\\cdparent"],
    props: { numArgs: 1 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "cdlabelparent", mode: n.mode, fragment: t[0] };
    },
    htmlBuilder(e, t) {
        var n = D.wrapFragment(me(e.fragment, t), t);
        return n.classes.push("cd-vert-arrow"), n;
    },
    mathmlBuilder(e, t) {
        return new O.MathNode("mrow", [Ce(e.fragment, t)]);
    },
});
G({
    type: "textord",
    names: ["\\@char"],
    props: { numArgs: 1, allowedInText: !0 },
    handler(e, t) {
        for (var { parser: n } = e, r = se(t[0], "ordgroup"), i = r.body, l = "", a = 0; a < i.length; a++) {
            var o = se(i[a], "textord");
            l += o.text;
        }
        var u = parseInt(l),
            s;
        if (isNaN(u)) throw new H("\\@char has non-numeric argument " + l);
        if (u < 0 || u >= 1114111) throw new H("\\@char with invalid code point " + l);
        return (
            u <= 65535 ? (s = String.fromCharCode(u)) : ((u -= 65536), (s = String.fromCharCode((u >> 10) + 55296, (u & 1023) + 56320))),
            { type: "textord", mode: n.mode, text: s }
        );
    },
});
var Im = (e, t) => {
        var n = Ye(e.body, t.withColor(e.color), !1);
        return D.makeFragment(n);
    },
    Lm = (e, t) => {
        var n = bt(e.body, t.withColor(e.color)),
            r = new O.MathNode("mstyle", n);
        return r.setAttribute("mathcolor", e.color), r;
    };
G({
    type: "color",
    names: ["\\textcolor"],
    props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "original"] },
    handler(e, t) {
        var { parser: n } = e,
            r = se(t[0], "color-token").color,
            i = t[1];
        return { type: "color", mode: n.mode, color: r, body: Ue(i) };
    },
    htmlBuilder: Im,
    mathmlBuilder: Lm,
});
G({
    type: "color",
    names: ["\\color"],
    props: { numArgs: 1, allowedInText: !0, argTypes: ["color"] },
    handler(e, t) {
        var { parser: n, breakOnTokenText: r } = e,
            i = se(t[0], "color-token").color;
        n.gullet.macros.set("\\current@color", i);
        var l = n.parseExpression(!0, r);
        return { type: "color", mode: n.mode, color: i, body: l };
    },
    htmlBuilder: Im,
    mathmlBuilder: Lm,
});
G({
    type: "cr",
    names: ["\\\\"],
    props: { numArgs: 0, numOptionalArgs: 0, allowedInText: !0 },
    handler(e, t, n) {
        var { parser: r } = e,
            i = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null,
            l = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
        return { type: "cr", mode: r.mode, newLine: l, size: i && se(i, "size").value };
    },
    htmlBuilder(e, t) {
        var n = D.makeSpan(["mspace"], [], t);
        return e.newLine && (n.classes.push("newline"), e.size && (n.style.marginTop = V(Le(e.size, t)))), n;
    },
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mspace");
        return e.newLine && (n.setAttribute("linebreak", "newline"), e.size && n.setAttribute("height", V(Le(e.size, t)))), n;
    },
});
var $u = {
        "\\global": "\\global",
        "\\long": "\\\\globallong",
        "\\\\globallong": "\\\\globallong",
        "\\def": "\\gdef",
        "\\gdef": "\\gdef",
        "\\edef": "\\xdef",
        "\\xdef": "\\xdef",
        "\\let": "\\\\globallet",
        "\\futurelet": "\\\\globalfuture",
    },
    Bm = e => {
        var t = e.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(t)) throw new H("Expected a control sequence", e);
        return t;
    },
    C9 = e => {
        var t = e.gullet.popToken();
        return t.text === "=" && ((t = e.gullet.popToken()), t.text === " " && (t = e.gullet.popToken())), t;
    },
    Om = (e, t, n, r) => {
        var i = e.gullet.macros.get(n.text);
        i == null && ((n.noexpand = !0), (i = { tokens: [n], numArgs: 0, unexpandable: !e.gullet.isExpandable(n.text) })), e.gullet.macros.set(t, i, r);
    };
G({
    type: "internal",
    names: ["\\global", "\\long", "\\\\globallong"],
    props: { numArgs: 0, allowedInText: !0 },
    handler(e) {
        var { parser: t, funcName: n } = e;
        t.consumeSpaces();
        var r = t.fetch();
        if ($u[r.text]) return (n === "\\global" || n === "\\\\globallong") && (r.text = $u[r.text]), se(t.parseFunction(), "internal");
        throw new H("Invalid token after macro prefix", r);
    },
});
G({
    type: "internal",
    names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
    props: { numArgs: 0, allowedInText: !0, primitive: !0 },
    handler(e) {
        var { parser: t, funcName: n } = e,
            r = t.gullet.popToken(),
            i = r.text;
        if (/^(?:[\\{}$&#^_]|EOF)$/.test(i)) throw new H("Expected a control sequence", r);
        for (var l = 0, a, o = [[]]; t.gullet.future().text !== "{"; )
            if (((r = t.gullet.popToken()), r.text === "#")) {
                if (t.gullet.future().text === "{") {
                    (a = t.gullet.future()), o[l].push("{");
                    break;
                }
                if (((r = t.gullet.popToken()), !/^[1-9]$/.test(r.text))) throw new H('Invalid argument number "' + r.text + '"');
                if (parseInt(r.text) !== l + 1) throw new H('Argument number "' + r.text + '" out of order');
                l++, o.push([]);
            } else {
                if (r.text === "EOF") throw new H("Expected a macro definition");
                o[l].push(r.text);
            }
        var { tokens: u } = t.gullet.consumeArg();
        return (
            a && u.unshift(a),
            (n === "\\edef" || n === "\\xdef") && ((u = t.gullet.expandTokens(u)), u.reverse()),
            t.gullet.macros.set(i, { tokens: u, numArgs: l, delimiters: o }, n === $u[n]),
            { type: "internal", mode: t.mode }
        );
    },
});
G({
    type: "internal",
    names: ["\\let", "\\\\globallet"],
    props: { numArgs: 0, allowedInText: !0, primitive: !0 },
    handler(e) {
        var { parser: t, funcName: n } = e,
            r = Bm(t.gullet.popToken());
        t.gullet.consumeSpaces();
        var i = C9(t);
        return Om(t, r, i, n === "\\\\globallet"), { type: "internal", mode: t.mode };
    },
});
G({
    type: "internal",
    names: ["\\futurelet", "\\\\globalfuture"],
    props: { numArgs: 0, allowedInText: !0, primitive: !0 },
    handler(e) {
        var { parser: t, funcName: n } = e,
            r = Bm(t.gullet.popToken()),
            i = t.gullet.popToken(),
            l = t.gullet.popToken();
        return Om(t, r, l, n === "\\\\globalfuture"), t.gullet.pushToken(l), t.gullet.pushToken(i), { type: "internal", mode: t.mode };
    },
});
var $0 = function (t, n, r) {
        var i = Ee.math[t] && Ee.math[t].replace,
            l = r1(i || t, n, r);
        if (!l) throw new Error("Unsupported symbol " + t + " and font size " + n + ".");
        return l;
    },
    c1 = function (t, n, r, i) {
        var l = r.havingBaseStyle(n),
            a = D.makeSpan(i.concat(l.sizingClasses(r)), [t], r),
            o = l.sizeMultiplier / r.sizeMultiplier;
        return (a.height *= o), (a.depth *= o), (a.maxFontSize = l.sizeMultiplier), a;
    },
    Rm = function (t, n, r) {
        var i = n.havingBaseStyle(r),
            l = (1 - n.sizeMultiplier / i.sizeMultiplier) * n.fontMetrics().axisHeight;
        t.classes.push("delimcenter"), (t.style.top = V(l)), (t.height -= l), (t.depth += l);
    },
    z9 = function (t, n, r, i, l, a) {
        var o = D.makeSymbol(t, "Main-Regular", l, i),
            u = c1(o, n, i, a);
        return r && Rm(u, i, n), u;
    },
    T9 = function (t, n, r, i) {
        return D.makeSymbol(t, "Size" + n + "-Regular", r, i);
    },
    Hm = function (t, n, r, i, l, a) {
        var o = T9(t, n, l, i),
            u = c1(D.makeSpan(["delimsizing", "size" + n], [o], i), te.TEXT, i, a);
        return r && Rm(u, i, te.TEXT), u;
    },
    To = function (t, n, r) {
        var i;
        n === "Size1-Regular" ? (i = "delim-size1") : (i = "delim-size4");
        var l = D.makeSpan(["delimsizinginner", i], [D.makeSpan([], [D.makeSymbol(t, n, r)])]);
        return { type: "elem", elem: l };
    },
    Eo = function (t, n, r) {
        var i = dn["Size4-Regular"][t.charCodeAt(0)] ? dn["Size4-Regular"][t.charCodeAt(0)][4] : dn["Size1-Regular"][t.charCodeAt(0)][4],
            l = new cr("inner", Dg(t, Math.round(1e3 * n))),
            a = new Bn([l], {
                width: V(i),
                height: V(n),
                style: "width:" + V(i),
                viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * n),
                preserveAspectRatio: "xMinYMin",
            }),
            o = D.makeSvgSpan([], [a], r);
        return (o.height = n), (o.style.height = V(n)), (o.style.width = V(i)), { type: "elem", elem: o };
    },
    ju = 0.008,
    al = { type: "kern", size: -1 * ju },
    E9 = ["|", "\\lvert", "\\rvert", "\\vert"],
    M9 = ["\\|", "\\lVert", "\\rVert", "\\Vert"],
    qm = function (t, n, r, i, l, a) {
        var o,
            u,
            s,
            h,
            d = "",
            p = 0;
        (o = s = h = t), (u = null);
        var m = "Size1-Regular";
        t === "\\uparrow"
            ? (s = h = "⏐")
            : t === "\\Uparrow"
              ? (s = h = "‖")
              : t === "\\downarrow"
                ? (o = s = "⏐")
                : t === "\\Downarrow"
                  ? (o = s = "‖")
                  : t === "\\updownarrow"
                    ? ((o = "\\uparrow"), (s = "⏐"), (h = "\\downarrow"))
                    : t === "\\Updownarrow"
                      ? ((o = "\\Uparrow"), (s = "‖"), (h = "\\Downarrow"))
                      : J.contains(E9, t)
                        ? ((s = "∣"), (d = "vert"), (p = 333))
                        : J.contains(M9, t)
                          ? ((s = "∥"), (d = "doublevert"), (p = 556))
                          : t === "[" || t === "\\lbrack"
                            ? ((o = "⎡"), (s = "⎢"), (h = "⎣"), (m = "Size4-Regular"), (d = "lbrack"), (p = 667))
                            : t === "]" || t === "\\rbrack"
                              ? ((o = "⎤"), (s = "⎥"), (h = "⎦"), (m = "Size4-Regular"), (d = "rbrack"), (p = 667))
                              : t === "\\lfloor" || t === "⌊"
                                ? ((s = o = "⎢"), (h = "⎣"), (m = "Size4-Regular"), (d = "lfloor"), (p = 667))
                                : t === "\\lceil" || t === "⌈"
                                  ? ((o = "⎡"), (s = h = "⎢"), (m = "Size4-Regular"), (d = "lceil"), (p = 667))
                                  : t === "\\rfloor" || t === "⌋"
                                    ? ((s = o = "⎥"), (h = "⎦"), (m = "Size4-Regular"), (d = "rfloor"), (p = 667))
                                    : t === "\\rceil" || t === "⌉"
                                      ? ((o = "⎤"), (s = h = "⎥"), (m = "Size4-Regular"), (d = "rceil"), (p = 667))
                                      : t === "(" || t === "\\lparen"
                                        ? ((o = "⎛"), (s = "⎜"), (h = "⎝"), (m = "Size4-Regular"), (d = "lparen"), (p = 875))
                                        : t === ")" || t === "\\rparen"
                                          ? ((o = "⎞"), (s = "⎟"), (h = "⎠"), (m = "Size4-Regular"), (d = "rparen"), (p = 875))
                                          : t === "\\{" || t === "\\lbrace"
                                            ? ((o = "⎧"), (u = "⎨"), (h = "⎩"), (s = "⎪"), (m = "Size4-Regular"))
                                            : t === "\\}" || t === "\\rbrace"
                                              ? ((o = "⎫"), (u = "⎬"), (h = "⎭"), (s = "⎪"), (m = "Size4-Regular"))
                                              : t === "\\lgroup" || t === "⟮"
                                                ? ((o = "⎧"), (h = "⎩"), (s = "⎪"), (m = "Size4-Regular"))
                                                : t === "\\rgroup" || t === "⟯"
                                                  ? ((o = "⎫"), (h = "⎭"), (s = "⎪"), (m = "Size4-Regular"))
                                                  : t === "\\lmoustache" || t === "⎰"
                                                    ? ((o = "⎧"), (h = "⎭"), (s = "⎪"), (m = "Size4-Regular"))
                                                    : (t === "\\rmoustache" || t === "⎱") && ((o = "⎫"), (h = "⎩"), (s = "⎪"), (m = "Size4-Regular"));
        var S = $0(o, m, l),
            w = S.height + S.depth,
            N = $0(s, m, l),
            y = N.height + N.depth,
            x = $0(h, m, l),
            k = x.height + x.depth,
            A = 0,
            P = 1;
        if (u !== null) {
            var T = $0(u, m, l);
            (A = T.height + T.depth), (P = 2);
        }
        var F = w + k + A,
            L = Math.max(0, Math.ceil((n - F) / (P * y))),
            R = F + L * P * y,
            Q = i.fontMetrics().axisHeight;
        r && (Q *= i.sizeMultiplier);
        var U = R / 2 - Q,
            $ = [];
        if (d.length > 0) {
            var he = R - w - k,
                ce = Math.round(R * 1e3),
                re = Fg(d, Math.round(he * 1e3)),
                ve = new cr(d, re),
                we = (p / 1e3).toFixed(3) + "em",
                j = (ce / 1e3).toFixed(3) + "em",
                K = new Bn([ve], { width: we, height: j, viewBox: "0 0 " + p + " " + ce }),
                b = D.makeSvgSpan([], [K], i);
            (b.height = ce / 1e3), (b.style.width = we), (b.style.height = j), $.push({ type: "elem", elem: b });
        } else {
            if (($.push(To(h, m, l)), $.push(al), u === null)) {
                var ae = R - w - k + 2 * ju;
                $.push(Eo(s, ae, i));
            } else {
                var ue = (R - w - k - A) / 2 + 2 * ju;
                $.push(Eo(s, ue, i)), $.push(al), $.push(To(u, m, l)), $.push(al), $.push(Eo(s, ue, i));
            }
            $.push(al), $.push(To(o, m, l));
        }
        var E = i.havingBaseStyle(te.TEXT),
            Fe = D.makeVList({ positionType: "bottom", positionData: U, children: $ }, E);
        return c1(D.makeSpan(["delimsizing", "mult"], [Fe], E), te.TEXT, i, a);
    },
    Mo = 80,
    Ao = 0.08,
    No = function (t, n, r, i, l) {
        var a = Ng(t, i, r),
            o = new cr(t, a),
            u = new Bn([o], { width: "400em", height: V(n), viewBox: "0 0 400000 " + r, preserveAspectRatio: "xMinYMin slice" });
        return D.makeSvgSpan(["hide-tail"], [u], l);
    },
    A9 = function (t, n) {
        var r = n.havingBaseSizing(),
            i = jm("\\surd", t * r.sizeMultiplier, $m, r),
            l = r.sizeMultiplier,
            a = Math.max(0, n.minRuleThickness - n.fontMetrics().sqrtRuleThickness),
            o,
            u = 0,
            s = 0,
            h = 0,
            d;
        return (
            i.type === "small"
                ? ((h = 1e3 + 1e3 * a + Mo),
                  t < 1 ? (l = 1) : t < 1.4 && (l = 0.7),
                  (u = (1 + a + Ao) / l),
                  (s = (1 + a) / l),
                  (o = No("sqrtMain", u, h, a, n)),
                  (o.style.minWidth = "0.853em"),
                  (d = 0.833 / l))
                : i.type === "large"
                  ? ((h = (1e3 + Mo) * ti[i.size]),
                    (s = (ti[i.size] + a) / l),
                    (u = (ti[i.size] + a + Ao) / l),
                    (o = No("sqrtSize" + i.size, u, h, a, n)),
                    (o.style.minWidth = "1.02em"),
                    (d = 1 / l))
                  : ((u = t + a + Ao),
                    (s = t + a),
                    (h = Math.floor(1e3 * t + a) + Mo),
                    (o = No("sqrtTall", u, h, a, n)),
                    (o.style.minWidth = "0.742em"),
                    (d = 1.056)),
            (o.height = s),
            (o.style.height = V(u)),
            { span: o, advanceWidth: d, ruleWidth: (n.fontMetrics().sqrtRuleThickness + a) * l }
        );
    },
    _m = [
        "(",
        "\\lparen",
        ")",
        "\\rparen",
        "[",
        "\\lbrack",
        "]",
        "\\rbrack",
        "\\{",
        "\\lbrace",
        "\\}",
        "\\rbrace",
        "\\lfloor",
        "\\rfloor",
        "⌊",
        "⌋",
        "\\lceil",
        "\\rceil",
        "⌈",
        "⌉",
        "\\surd",
    ],
    N9 = [
        "\\uparrow",
        "\\downarrow",
        "\\updownarrow",
        "\\Uparrow",
        "\\Downarrow",
        "\\Updownarrow",
        "|",
        "\\|",
        "\\vert",
        "\\Vert",
        "\\lvert",
        "\\rvert",
        "\\lVert",
        "\\rVert",
        "\\lgroup",
        "\\rgroup",
        "⟮",
        "⟯",
        "\\lmoustache",
        "\\rmoustache",
        "⎰",
        "⎱",
    ],
    Um = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
    ti = [0, 1.2, 1.8, 2.4, 3],
    D9 = function (t, n, r, i, l) {
        if (
            (t === "<" || t === "\\lt" || t === "⟨" ? (t = "\\langle") : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle"),
            J.contains(_m, t) || J.contains(Um, t))
        )
            return Hm(t, n, !1, r, i, l);
        if (J.contains(N9, t)) return qm(t, ti[n], !1, r, i, l);
        throw new H("Illegal delimiter: '" + t + "'");
    },
    F9 = [
        { type: "small", style: te.SCRIPTSCRIPT },
        { type: "small", style: te.SCRIPT },
        { type: "small", style: te.TEXT },
        { type: "large", size: 1 },
        { type: "large", size: 2 },
        { type: "large", size: 3 },
        { type: "large", size: 4 },
    ],
    P9 = [{ type: "small", style: te.SCRIPTSCRIPT }, { type: "small", style: te.SCRIPT }, { type: "small", style: te.TEXT }, { type: "stack" }],
    $m = [
        { type: "small", style: te.SCRIPTSCRIPT },
        { type: "small", style: te.SCRIPT },
        { type: "small", style: te.TEXT },
        { type: "large", size: 1 },
        { type: "large", size: 2 },
        { type: "large", size: 3 },
        { type: "large", size: 4 },
        { type: "stack" },
    ],
    I9 = function (t) {
        if (t.type === "small") return "Main-Regular";
        if (t.type === "large") return "Size" + t.size + "-Regular";
        if (t.type === "stack") return "Size4-Regular";
        throw new Error("Add support for delim type '" + t.type + "' here.");
    },
    jm = function (t, n, r, i) {
        for (var l = Math.min(2, 3 - i.style.size), a = l; a < r.length && r[a].type !== "stack"; a++) {
            var o = $0(t, I9(r[a]), "math"),
                u = o.height + o.depth;
            if (r[a].type === "small") {
                var s = i.havingBaseStyle(r[a].style);
                u *= s.sizeMultiplier;
            }
            if (u > n) return r[a];
        }
        return r[r.length - 1];
    },
    Vm = function (t, n, r, i, l, a) {
        t === "<" || t === "\\lt" || t === "⟨" ? (t = "\\langle") : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle");
        var o;
        J.contains(Um, t) ? (o = F9) : J.contains(_m, t) ? (o = $m) : (o = P9);
        var u = jm(t, n, o, i);
        return u.type === "small" ? z9(t, u.style, r, i, l, a) : u.type === "large" ? Hm(t, u.size, r, i, l, a) : qm(t, n, r, i, l, a);
    },
    L9 = function (t, n, r, i, l, a) {
        var o = i.fontMetrics().axisHeight * i.sizeMultiplier,
            u = 901,
            s = 5 / i.fontMetrics().ptPerEm,
            h = Math.max(n - o, r + o),
            d = Math.max((h / 500) * u, 2 * h - s);
        return Vm(t, d, !0, i, l, a);
    },
    Dn = { sqrtImage: A9, sizedDelim: D9, sizeToMaxHeight: ti, customSizedDelim: Vm, leftRightDelim: L9 },
    Oh = {
        "\\bigl": { mclass: "mopen", size: 1 },
        "\\Bigl": { mclass: "mopen", size: 2 },
        "\\biggl": { mclass: "mopen", size: 3 },
        "\\Biggl": { mclass: "mopen", size: 4 },
        "\\bigr": { mclass: "mclose", size: 1 },
        "\\Bigr": { mclass: "mclose", size: 2 },
        "\\biggr": { mclass: "mclose", size: 3 },
        "\\Biggr": { mclass: "mclose", size: 4 },
        "\\bigm": { mclass: "mrel", size: 1 },
        "\\Bigm": { mclass: "mrel", size: 2 },
        "\\biggm": { mclass: "mrel", size: 3 },
        "\\Biggm": { mclass: "mrel", size: 4 },
        "\\big": { mclass: "mord", size: 1 },
        "\\Big": { mclass: "mord", size: 2 },
        "\\bigg": { mclass: "mord", size: 3 },
        "\\Bigg": { mclass: "mord", size: 4 },
    },
    B9 = [
        "(",
        "\\lparen",
        ")",
        "\\rparen",
        "[",
        "\\lbrack",
        "]",
        "\\rbrack",
        "\\{",
        "\\lbrace",
        "\\}",
        "\\rbrace",
        "\\lfloor",
        "\\rfloor",
        "⌊",
        "⌋",
        "\\lceil",
        "\\rceil",
        "⌈",
        "⌉",
        "<",
        ">",
        "\\langle",
        "⟨",
        "\\rangle",
        "⟩",
        "\\lt",
        "\\gt",
        "\\lvert",
        "\\rvert",
        "\\lVert",
        "\\rVert",
        "\\lgroup",
        "\\rgroup",
        "⟮",
        "⟯",
        "\\lmoustache",
        "\\rmoustache",
        "⎰",
        "⎱",
        "/",
        "\\backslash",
        "|",
        "\\vert",
        "\\|",
        "\\Vert",
        "\\uparrow",
        "\\Uparrow",
        "\\downarrow",
        "\\Downarrow",
        "\\updownarrow",
        "\\Updownarrow",
        ".",
    ];
function Fa(e, t) {
    var n = Na(e);
    if (n && J.contains(B9, n.text)) return n;
    throw n ? new H("Invalid delimiter '" + n.text + "' after '" + t.funcName + "'", e) : new H("Invalid delimiter type '" + e.type + "'", e);
}
G({
    type: "delimsizing",
    names: [
        "\\bigl",
        "\\Bigl",
        "\\biggl",
        "\\Biggl",
        "\\bigr",
        "\\Bigr",
        "\\biggr",
        "\\Biggr",
        "\\bigm",
        "\\Bigm",
        "\\biggm",
        "\\Biggm",
        "\\big",
        "\\Big",
        "\\bigg",
        "\\Bigg",
    ],
    props: { numArgs: 1, argTypes: ["primitive"] },
    handler: (e, t) => {
        var n = Fa(t[0], e);
        return { type: "delimsizing", mode: e.parser.mode, size: Oh[e.funcName].size, mclass: Oh[e.funcName].mclass, delim: n.text };
    },
    htmlBuilder: (e, t) => (e.delim === "." ? D.makeSpan([e.mclass]) : Dn.sizedDelim(e.delim, e.size, t, e.mode, [e.mclass])),
    mathmlBuilder: e => {
        var t = [];
        e.delim !== "." && t.push(Vt(e.delim, e.mode));
        var n = new O.MathNode("mo", t);
        e.mclass === "mopen" || e.mclass === "mclose" ? n.setAttribute("fence", "true") : n.setAttribute("fence", "false"), n.setAttribute("stretchy", "true");
        var r = V(Dn.sizeToMaxHeight[e.size]);
        return n.setAttribute("minsize", r), n.setAttribute("maxsize", r), n;
    },
});
function Rh(e) {
    if (!e.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
G({
    type: "leftright-right",
    names: ["\\right"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
        var n = e.parser.gullet.macros.get("\\current@color");
        if (n && typeof n != "string") throw new H("\\current@color set to non-string in \\right");
        return { type: "leftright-right", mode: e.parser.mode, delim: Fa(t[0], e).text, color: n };
    },
});
G({
    type: "leftright",
    names: ["\\left"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
        var n = Fa(t[0], e),
            r = e.parser;
        ++r.leftrightDepth;
        var i = r.parseExpression(!1);
        --r.leftrightDepth, r.expect("\\right", !1);
        var l = se(r.parseFunction(), "leftright-right");
        return { type: "leftright", mode: r.mode, body: i, left: n.text, right: l.delim, rightColor: l.color };
    },
    htmlBuilder: (e, t) => {
        Rh(e);
        for (var n = Ye(e.body, t, !0, ["mopen", "mclose"]), r = 0, i = 0, l = !1, a = 0; a < n.length; a++)
            n[a].isMiddle ? (l = !0) : ((r = Math.max(n[a].height, r)), (i = Math.max(n[a].depth, i)));
        (r *= t.sizeMultiplier), (i *= t.sizeMultiplier);
        var o;
        if ((e.left === "." ? (o = ki(t, ["mopen"])) : (o = Dn.leftRightDelim(e.left, r, i, t, e.mode, ["mopen"])), n.unshift(o), l))
            for (var u = 1; u < n.length; u++) {
                var s = n[u],
                    h = s.isMiddle;
                h && (n[u] = Dn.leftRightDelim(h.delim, r, i, h.options, e.mode, []));
            }
        var d;
        if (e.right === ".") d = ki(t, ["mclose"]);
        else {
            var p = e.rightColor ? t.withColor(e.rightColor) : t;
            d = Dn.leftRightDelim(e.right, r, i, p, e.mode, ["mclose"]);
        }
        return n.push(d), D.makeSpan(["minner"], n, t);
    },
    mathmlBuilder: (e, t) => {
        Rh(e);
        var n = bt(e.body, t);
        if (e.left !== ".") {
            var r = new O.MathNode("mo", [Vt(e.left, e.mode)]);
            r.setAttribute("fence", "true"), n.unshift(r);
        }
        if (e.right !== ".") {
            var i = new O.MathNode("mo", [Vt(e.right, e.mode)]);
            i.setAttribute("fence", "true"), e.rightColor && i.setAttribute("mathcolor", e.rightColor), n.push(i);
        }
        return a1(n);
    },
});
G({
    type: "middle",
    names: ["\\middle"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
        var n = Fa(t[0], e);
        if (!e.parser.leftrightDepth) throw new H("\\middle without preceding \\left", n);
        return { type: "middle", mode: e.parser.mode, delim: n.text };
    },
    htmlBuilder: (e, t) => {
        var n;
        if (e.delim === ".") n = ki(t, []);
        else {
            n = Dn.sizedDelim(e.delim, 1, t, e.mode, []);
            var r = { delim: e.delim, options: t };
            n.isMiddle = r;
        }
        return n;
    },
    mathmlBuilder: (e, t) => {
        var n = e.delim === "\\vert" || e.delim === "|" ? Vt("|", "text") : Vt(e.delim, e.mode),
            r = new O.MathNode("mo", [n]);
        return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
    },
});
var h1 = (e, t) => {
        var n = D.wrapFragment(me(e.body, t), t),
            r = e.label.slice(1),
            i = t.sizeMultiplier,
            l,
            a = 0,
            o = J.isCharacterBox(e.body);
        if (r === "sout") (l = D.makeSpan(["stretchy", "sout"])), (l.height = t.fontMetrics().defaultRuleThickness / i), (a = -0.5 * t.fontMetrics().xHeight);
        else if (r === "phase") {
            var u = Le({ number: 0.6, unit: "pt" }, t),
                s = Le({ number: 0.35, unit: "ex" }, t),
                h = t.havingBaseSizing();
            i = i / h.sizeMultiplier;
            var d = n.height + n.depth + u + s;
            n.style.paddingLeft = V(d / 2 + u);
            var p = Math.floor(1e3 * d * i),
                m = Mg(p),
                S = new Bn([new cr("phase", m)], { width: "400em", height: V(p / 1e3), viewBox: "0 0 400000 " + p, preserveAspectRatio: "xMinYMin slice" });
            (l = D.makeSvgSpan(["hide-tail"], [S], t)), (l.style.height = V(d)), (a = n.depth + u + s);
        } else {
            /cancel/.test(r) ? o || n.classes.push("cancel-pad") : r === "angl" ? n.classes.push("anglpad") : n.classes.push("boxpad");
            var w = 0,
                N = 0,
                y = 0;
            /box/.test(r)
                ? ((y = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness)), (w = t.fontMetrics().fboxsep + (r === "colorbox" ? 0 : y)), (N = w))
                : r === "angl"
                  ? ((y = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness)), (w = 4 * y), (N = Math.max(0, 0.25 - n.depth)))
                  : ((w = o ? 0.2 : 0), (N = w)),
                (l = Rn.encloseSpan(n, r, w, N, t)),
                /fbox|boxed|fcolorbox/.test(r)
                    ? ((l.style.borderStyle = "solid"), (l.style.borderWidth = V(y)))
                    : r === "angl" && y !== 0.049 && ((l.style.borderTopWidth = V(y)), (l.style.borderRightWidth = V(y))),
                (a = n.depth + N),
                e.backgroundColor && ((l.style.backgroundColor = e.backgroundColor), e.borderColor && (l.style.borderColor = e.borderColor));
        }
        var x;
        if (e.backgroundColor)
            x = D.makeVList(
                {
                    positionType: "individualShift",
                    children: [
                        { type: "elem", elem: l, shift: a },
                        { type: "elem", elem: n, shift: 0 },
                    ],
                },
                t,
            );
        else {
            var k = /cancel|phase/.test(r) ? ["svg-align"] : [];
            x = D.makeVList(
                {
                    positionType: "individualShift",
                    children: [
                        { type: "elem", elem: n, shift: 0 },
                        { type: "elem", elem: l, shift: a, wrapperClasses: k },
                    ],
                },
                t,
            );
        }
        return (
            /cancel/.test(r) && ((x.height = n.height), (x.depth = n.depth)),
            /cancel/.test(r) && !o ? D.makeSpan(["mord", "cancel-lap"], [x], t) : D.makeSpan(["mord"], [x], t)
        );
    },
    f1 = (e, t) => {
        var n = 0,
            r = new O.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Ce(e.body, t)]);
        switch (e.label) {
            case "\\cancel":
                r.setAttribute("notation", "updiagonalstrike");
                break;
            case "\\bcancel":
                r.setAttribute("notation", "downdiagonalstrike");
                break;
            case "\\phase":
                r.setAttribute("notation", "phasorangle");
                break;
            case "\\sout":
                r.setAttribute("notation", "horizontalstrike");
                break;
            case "\\fbox":
                r.setAttribute("notation", "box");
                break;
            case "\\angl":
                r.setAttribute("notation", "actuarial");
                break;
            case "\\fcolorbox":
            case "\\colorbox":
                if (
                    ((n = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm),
                    r.setAttribute("width", "+" + 2 * n + "pt"),
                    r.setAttribute("height", "+" + 2 * n + "pt"),
                    r.setAttribute("lspace", n + "pt"),
                    r.setAttribute("voffset", n + "pt"),
                    e.label === "\\fcolorbox")
                ) {
                    var i = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
                    r.setAttribute("style", "border: " + i + "em solid " + String(e.borderColor));
                }
                break;
            case "\\xcancel":
                r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
                break;
        }
        return e.backgroundColor && r.setAttribute("mathbackground", e.backgroundColor), r;
    };
G({
    type: "enclose",
    names: ["\\colorbox"],
    props: { numArgs: 2, allowedInText: !0, argTypes: ["color", "text"] },
    handler(e, t, n) {
        var { parser: r, funcName: i } = e,
            l = se(t[0], "color-token").color,
            a = t[1];
        return { type: "enclose", mode: r.mode, label: i, backgroundColor: l, body: a };
    },
    htmlBuilder: h1,
    mathmlBuilder: f1,
});
G({
    type: "enclose",
    names: ["\\fcolorbox"],
    props: { numArgs: 3, allowedInText: !0, argTypes: ["color", "color", "text"] },
    handler(e, t, n) {
        var { parser: r, funcName: i } = e,
            l = se(t[0], "color-token").color,
            a = se(t[1], "color-token").color,
            o = t[2];
        return { type: "enclose", mode: r.mode, label: i, backgroundColor: a, borderColor: l, body: o };
    },
    htmlBuilder: h1,
    mathmlBuilder: f1,
});
G({
    type: "enclose",
    names: ["\\fbox"],
    props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !0 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "enclose", mode: n.mode, label: "\\fbox", body: t[0] };
    },
});
G({
    type: "enclose",
    names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
    props: { numArgs: 1 },
    handler(e, t) {
        var { parser: n, funcName: r } = e,
            i = t[0];
        return { type: "enclose", mode: n.mode, label: r, body: i };
    },
    htmlBuilder: h1,
    mathmlBuilder: f1,
});
G({
    type: "enclose",
    names: ["\\angl"],
    props: { numArgs: 1, argTypes: ["hbox"], allowedInText: !1 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "enclose", mode: n.mode, label: "\\angl", body: t[0] };
    },
});
var Wm = {};
function yn(e) {
    for (
        var { type: t, names: n, props: r, handler: i, htmlBuilder: l, mathmlBuilder: a } = e,
            o = { type: t, numArgs: r.numArgs || 0, allowedInText: !1, numOptionalArgs: 0, handler: i },
            u = 0;
        u < n.length;
        ++u
    )
        Wm[n[u]] = o;
    l && (Kl[t] = l), a && (Zl[t] = a);
}
var Gm = {};
function v(e, t) {
    Gm[e] = t;
}
function Hh(e) {
    var t = [];
    e.consumeSpaces();
    var n = e.fetch().text;
    for (n === "\\relax" && (e.consume(), e.consumeSpaces(), (n = e.fetch().text)); n === "\\hline" || n === "\\hdashline"; )
        e.consume(), t.push(n === "\\hdashline"), e.consumeSpaces(), (n = e.fetch().text);
    return t;
}
var Pa = e => {
    var t = e.parser.settings;
    if (!t.displayMode) throw new H("{" + e.envName + "} can be used only in display mode.");
};
function d1(e) {
    if (e.indexOf("ed") === -1) return e.indexOf("*") === -1;
}
function gr(e, t, n) {
    var {
        hskipBeforeAndAfter: r,
        addJot: i,
        cols: l,
        arraystretch: a,
        colSeparationType: o,
        autoTag: u,
        singleRow: s,
        emptySingleRow: h,
        maxNumCols: d,
        leqno: p,
    } = t;
    if ((e.gullet.beginGroup(), s || e.gullet.macros.set("\\cr", "\\\\\\relax"), !a)) {
        var m = e.gullet.expandMacroAsText("\\arraystretch");
        if (m == null) a = 1;
        else if (((a = parseFloat(m)), !a || a < 0)) throw new H("Invalid \\arraystretch: " + m);
    }
    e.gullet.beginGroup();
    var S = [],
        w = [S],
        N = [],
        y = [],
        x = u != null ? [] : void 0;
    function k() {
        u && e.gullet.macros.set("\\@eqnsw", "1", !0);
    }
    function A() {
        x &&
            (e.gullet.macros.get("\\df@tag")
                ? (x.push(e.subparse([new _t("\\df@tag")])), e.gullet.macros.set("\\df@tag", void 0, !0))
                : x.push(!!u && e.gullet.macros.get("\\@eqnsw") === "1"));
    }
    for (k(), y.push(Hh(e)); ; ) {
        var P = e.parseExpression(!1, s ? "\\end" : "\\\\");
        e.gullet.endGroup(),
            e.gullet.beginGroup(),
            (P = { type: "ordgroup", mode: e.mode, body: P }),
            n && (P = { type: "styling", mode: e.mode, style: n, body: [P] }),
            S.push(P);
        var T = e.fetch().text;
        if (T === "&") {
            if (d && S.length === d) {
                if (s || o) throw new H("Too many tab characters: &", e.nextToken);
                e.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
            }
            e.consume();
        } else if (T === "\\end") {
            A(),
                S.length === 1 && P.type === "styling" && P.body[0].body.length === 0 && (w.length > 1 || !h) && w.pop(),
                y.length < w.length + 1 && y.push([]);
            break;
        } else if (T === "\\\\") {
            e.consume();
            var F = void 0;
            e.gullet.future().text !== " " && (F = e.parseSizeGroup(!0)), N.push(F ? F.value : null), A(), y.push(Hh(e)), (S = []), w.push(S), k();
        } else throw new H("Expected & or \\\\ or \\cr or \\end", e.nextToken);
    }
    return (
        e.gullet.endGroup(),
        e.gullet.endGroup(),
        {
            type: "array",
            mode: e.mode,
            addJot: i,
            arraystretch: a,
            body: w,
            cols: l,
            rowGaps: N,
            hskipBeforeAndAfter: r,
            hLinesBeforeRow: y,
            colSeparationType: o,
            tags: x,
            leqno: p,
        }
    );
}
function m1(e) {
    return e.slice(0, 1) === "d" ? "display" : "text";
}
var xn = function (t, n) {
        var r,
            i,
            l = t.body.length,
            a = t.hLinesBeforeRow,
            o = 0,
            u = new Array(l),
            s = [],
            h = Math.max(n.fontMetrics().arrayRuleWidth, n.minRuleThickness),
            d = 1 / n.fontMetrics().ptPerEm,
            p = 5 * d;
        if (t.colSeparationType && t.colSeparationType === "small") {
            var m = n.havingStyle(te.SCRIPT).sizeMultiplier;
            p = 0.2778 * (m / n.sizeMultiplier);
        }
        var S = t.colSeparationType === "CD" ? Le({ number: 3, unit: "ex" }, n) : 12 * d,
            w = 3 * d,
            N = t.arraystretch * S,
            y = 0.7 * N,
            x = 0.3 * N,
            k = 0;
        function A(vr) {
            for (var Hr = 0; Hr < vr.length; ++Hr) Hr > 0 && (k += 0.25), s.push({ pos: k, isDashed: vr[Hr] });
        }
        for (A(a[0]), r = 0; r < t.body.length; ++r) {
            var P = t.body[r],
                T = y,
                F = x;
            o < P.length && (o = P.length);
            var L = new Array(P.length);
            for (i = 0; i < P.length; ++i) {
                var R = me(P[i], n);
                F < R.depth && (F = R.depth), T < R.height && (T = R.height), (L[i] = R);
            }
            var Q = t.rowGaps[r],
                U = 0;
            Q && ((U = Le(Q, n)), U > 0 && ((U += x), F < U && (F = U), (U = 0))),
                t.addJot && (F += w),
                (L.height = T),
                (L.depth = F),
                (k += T),
                (L.pos = k),
                (k += F + U),
                (u[r] = L),
                A(a[r + 1]);
        }
        var $ = k / 2 + n.fontMetrics().axisHeight,
            he = t.cols || [],
            ce = [],
            re,
            ve,
            we = [];
        if (t.tags && t.tags.some(vr => vr))
            for (r = 0; r < l; ++r) {
                var j = u[r],
                    K = j.pos - $,
                    b = t.tags[r],
                    ae = void 0;
                b === !0 ? (ae = D.makeSpan(["eqn-num"], [], n)) : b === !1 ? (ae = D.makeSpan([], [], n)) : (ae = D.makeSpan([], Ye(b, n, !0), n)),
                    (ae.depth = j.depth),
                    (ae.height = j.height),
                    we.push({ type: "elem", elem: ae, shift: K });
            }
        for (i = 0, ve = 0; i < o || ve < he.length; ++i, ++ve) {
            for (var ue = he[ve] || {}, E = !0; ue.type === "separator"; ) {
                if (
                    (E || ((re = D.makeSpan(["arraycolsep"], [])), (re.style.width = V(n.fontMetrics().doubleRuleSep)), ce.push(re)),
                    ue.separator === "|" || ue.separator === ":")
                ) {
                    var Fe = ue.separator === "|" ? "solid" : "dashed",
                        Ze = D.makeSpan(["vertical-separator"], [], n);
                    (Ze.style.height = V(k)), (Ze.style.borderRightWidth = V(h)), (Ze.style.borderRightStyle = Fe), (Ze.style.margin = "0 " + V(-h / 2));
                    var ke = k - $;
                    ke && (Ze.style.verticalAlign = V(-ke)), ce.push(Ze);
                } else throw new H("Invalid separator type: " + ue.separator);
                ve++, (ue = he[ve] || {}), (E = !1);
            }
            if (!(i >= o)) {
                var Xe = void 0;
                (i > 0 || t.hskipBeforeAndAfter) &&
                    ((Xe = J.deflt(ue.pregap, p)), Xe !== 0 && ((re = D.makeSpan(["arraycolsep"], [])), (re.style.width = V(Xe)), ce.push(re)));
                var at = [];
                for (r = 0; r < l; ++r) {
                    var Xt = u[r],
                        Qt = Xt[i];
                    if (Qt) {
                        var z0 = Xt.pos - $;
                        (Qt.depth = Xt.depth), (Qt.height = Xt.height), at.push({ type: "elem", elem: Qt, shift: z0 });
                    }
                }
                (at = D.makeVList({ positionType: "individualShift", children: at }, n)),
                    (at = D.makeSpan(["col-align-" + (ue.align || "c")], [at])),
                    ce.push(at),
                    (i < o - 1 || t.hskipBeforeAndAfter) &&
                        ((Xe = J.deflt(ue.postgap, p)), Xe !== 0 && ((re = D.makeSpan(["arraycolsep"], [])), (re.style.width = V(Xe)), ce.push(re)));
            }
        }
        if (((u = D.makeSpan(["mtable"], ce)), s.length > 0)) {
            for (var Fi = D.makeLineSpan("hline", n, h), La = D.makeLineSpan("hdashline", n, h), T0 = [{ type: "elem", elem: u, shift: 0 }]; s.length > 0; ) {
                var Pi = s.pop(),
                    E0 = Pi.pos - $;
                Pi.isDashed ? T0.push({ type: "elem", elem: La, shift: E0 }) : T0.push({ type: "elem", elem: Fi, shift: E0 });
            }
            u = D.makeVList({ positionType: "individualShift", children: T0 }, n);
        }
        if (we.length === 0) return D.makeSpan(["mord"], [u], n);
        var Rr = D.makeVList({ positionType: "individualShift", children: we }, n);
        return (Rr = D.makeSpan(["tag"], [Rr], n)), D.makeFragment([u, Rr]);
    },
    O9 = { c: "center ", l: "left ", r: "right " },
    wn = function (t, n) {
        for (var r = [], i = new O.MathNode("mtd", [], ["mtr-glue"]), l = new O.MathNode("mtd", [], ["mml-eqn-num"]), a = 0; a < t.body.length; a++) {
            for (var o = t.body[a], u = [], s = 0; s < o.length; s++) u.push(new O.MathNode("mtd", [Ce(o[s], n)]));
            t.tags && t.tags[a] && (u.unshift(i), u.push(i), t.leqno ? u.unshift(l) : u.push(l)), r.push(new O.MathNode("mtr", u));
        }
        var h = new O.MathNode("mtable", r),
            d = t.arraystretch === 0.5 ? 0.1 : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
        h.setAttribute("rowspacing", V(d));
        var p = "",
            m = "";
        if (t.cols && t.cols.length > 0) {
            var S = t.cols,
                w = "",
                N = !1,
                y = 0,
                x = S.length;
            S[0].type === "separator" && ((p += "top "), (y = 1)), S[S.length - 1].type === "separator" && ((p += "bottom "), (x -= 1));
            for (var k = y; k < x; k++)
                S[k].type === "align"
                    ? ((m += O9[S[k].align]), N && (w += "none "), (N = !0))
                    : S[k].type === "separator" && N && ((w += S[k].separator === "|" ? "solid " : "dashed "), (N = !1));
            h.setAttribute("columnalign", m.trim()), /[sd]/.test(w) && h.setAttribute("columnlines", w.trim());
        }
        if (t.colSeparationType === "align") {
            for (var A = t.cols || [], P = "", T = 1; T < A.length; T++) P += T % 2 ? "0em " : "1em ";
            h.setAttribute("columnspacing", P.trim());
        } else
            t.colSeparationType === "alignat" || t.colSeparationType === "gather"
                ? h.setAttribute("columnspacing", "0em")
                : t.colSeparationType === "small"
                  ? h.setAttribute("columnspacing", "0.2778em")
                  : t.colSeparationType === "CD"
                    ? h.setAttribute("columnspacing", "0.5em")
                    : h.setAttribute("columnspacing", "1em");
        var F = "",
            L = t.hLinesBeforeRow;
        (p += L[0].length > 0 ? "left " : ""), (p += L[L.length - 1].length > 0 ? "right " : "");
        for (var R = 1; R < L.length - 1; R++) F += L[R].length === 0 ? "none " : L[R][0] ? "dashed " : "solid ";
        return (
            /[sd]/.test(F) && h.setAttribute("rowlines", F.trim()),
            p !== "" && ((h = new O.MathNode("menclose", [h])), h.setAttribute("notation", p.trim())),
            t.arraystretch && t.arraystretch < 1 && ((h = new O.MathNode("mstyle", [h])), h.setAttribute("scriptlevel", "1")),
            h
        );
    },
    Ym = function (t, n) {
        t.envName.indexOf("ed") === -1 && Pa(t);
        var r = [],
            i = t.envName.indexOf("at") > -1 ? "alignat" : "align",
            l = t.envName === "split",
            a = gr(
                t.parser,
                {
                    cols: r,
                    addJot: !0,
                    autoTag: l ? void 0 : d1(t.envName),
                    emptySingleRow: !0,
                    colSeparationType: i,
                    maxNumCols: l ? 2 : void 0,
                    leqno: t.parser.settings.leqno,
                },
                "display",
            ),
            o,
            u = 0,
            s = { type: "ordgroup", mode: t.mode, body: [] };
        if (n[0] && n[0].type === "ordgroup") {
            for (var h = "", d = 0; d < n[0].body.length; d++) {
                var p = se(n[0].body[d], "textord");
                h += p.text;
            }
            (o = Number(h)), (u = o * 2);
        }
        var m = !u;
        a.body.forEach(function (y) {
            for (var x = 1; x < y.length; x += 2) {
                var k = se(y[x], "styling"),
                    A = se(k.body[0], "ordgroup");
                A.body.unshift(s);
            }
            if (m) u < y.length && (u = y.length);
            else {
                var P = y.length / 2;
                if (o < P) throw new H("Too many math in a row: " + ("expected " + o + ", but got " + P), y[0]);
            }
        });
        for (var S = 0; S < u; ++S) {
            var w = "r",
                N = 0;
            S % 2 === 1 ? (w = "l") : S > 0 && m && (N = 1), (r[S] = { type: "align", align: w, pregap: N, postgap: 0 });
        }
        return (a.colSeparationType = m ? "align" : "alignat"), a;
    };
yn({
    type: "array",
    names: ["array", "darray"],
    props: { numArgs: 1 },
    handler(e, t) {
        var n = Na(t[0]),
            r = n ? [t[0]] : se(t[0], "ordgroup").body,
            i = r.map(function (a) {
                var o = u1(a),
                    u = o.text;
                if ("lcr".indexOf(u) !== -1) return { type: "align", align: u };
                if (u === "|") return { type: "separator", separator: "|" };
                if (u === ":") return { type: "separator", separator: ":" };
                throw new H("Unknown column alignment: " + u, a);
            }),
            l = { cols: i, hskipBeforeAndAfter: !0, maxNumCols: i.length };
        return gr(e.parser, l, m1(e.envName));
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
yn({
    type: "array",
    names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
    props: { numArgs: 0 },
    handler(e) {
        var t = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[
                e.envName.replace("*", "")
            ],
            n = "c",
            r = { hskipBeforeAndAfter: !1, cols: [{ type: "align", align: n }] };
        if (e.envName.charAt(e.envName.length - 1) === "*") {
            var i = e.parser;
            if ((i.consumeSpaces(), i.fetch().text === "[")) {
                if ((i.consume(), i.consumeSpaces(), (n = i.fetch().text), "lcr".indexOf(n) === -1)) throw new H("Expected l or c or r", i.nextToken);
                i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), (r.cols = [{ type: "align", align: n }]);
            }
        }
        var l = gr(e.parser, r, m1(e.envName)),
            a = Math.max(0, ...l.body.map(o => o.length));
        return (
            (l.cols = new Array(a).fill({ type: "align", align: n })),
            t ? { type: "leftright", mode: e.mode, body: [l], left: t[0], right: t[1], rightColor: void 0 } : l
        );
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
yn({
    type: "array",
    names: ["smallmatrix"],
    props: { numArgs: 0 },
    handler(e) {
        var t = { arraystretch: 0.5 },
            n = gr(e.parser, t, "script");
        return (n.colSeparationType = "small"), n;
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
yn({
    type: "array",
    names: ["subarray"],
    props: { numArgs: 1 },
    handler(e, t) {
        var n = Na(t[0]),
            r = n ? [t[0]] : se(t[0], "ordgroup").body,
            i = r.map(function (a) {
                var o = u1(a),
                    u = o.text;
                if ("lc".indexOf(u) !== -1) return { type: "align", align: u };
                throw new H("Unknown column alignment: " + u, a);
            });
        if (i.length > 1) throw new H("{subarray} can contain only one column");
        var l = { cols: i, hskipBeforeAndAfter: !1, arraystretch: 0.5 };
        if (((l = gr(e.parser, l, "script")), l.body.length > 0 && l.body[0].length > 1)) throw new H("{subarray} can contain only one column");
        return l;
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
yn({
    type: "array",
    names: ["cases", "dcases", "rcases", "drcases"],
    props: { numArgs: 0 },
    handler(e) {
        var t = {
                arraystretch: 1.2,
                cols: [
                    { type: "align", align: "l", pregap: 0, postgap: 1 },
                    { type: "align", align: "l", pregap: 0, postgap: 0 },
                ],
            },
            n = gr(e.parser, t, m1(e.envName));
        return {
            type: "leftright",
            mode: e.mode,
            body: [n],
            left: e.envName.indexOf("r") > -1 ? "." : "\\{",
            right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
            rightColor: void 0,
        };
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
yn({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Ym, htmlBuilder: xn, mathmlBuilder: wn });
yn({
    type: "array",
    names: ["gathered", "gather", "gather*"],
    props: { numArgs: 0 },
    handler(e) {
        J.contains(["gather", "gather*"], e.envName) && Pa(e);
        var t = {
            cols: [{ type: "align", align: "c" }],
            addJot: !0,
            colSeparationType: "gather",
            autoTag: d1(e.envName),
            emptySingleRow: !0,
            leqno: e.parser.settings.leqno,
        };
        return gr(e.parser, t, "display");
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
yn({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Ym, htmlBuilder: xn, mathmlBuilder: wn });
yn({
    type: "array",
    names: ["equation", "equation*"],
    props: { numArgs: 0 },
    handler(e) {
        Pa(e);
        var t = { autoTag: d1(e.envName), emptySingleRow: !0, singleRow: !0, maxNumCols: 1, leqno: e.parser.settings.leqno };
        return gr(e.parser, t, "display");
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
yn({
    type: "array",
    names: ["CD"],
    props: { numArgs: 0 },
    handler(e) {
        return Pa(e), b9(e.parser);
    },
    htmlBuilder: xn,
    mathmlBuilder: wn,
});
v("\\nonumber", "\\gdef\\@eqnsw{0}");
v("\\notag", "\\nonumber");
G({
    type: "text",
    names: ["\\hline", "\\hdashline"],
    props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
    handler(e, t) {
        throw new H(e.funcName + " valid only within array environment");
    },
});
var qh = Wm;
G({
    type: "environment",
    names: ["\\begin", "\\end"],
    props: { numArgs: 1, argTypes: ["text"] },
    handler(e, t) {
        var { parser: n, funcName: r } = e,
            i = t[0];
        if (i.type !== "ordgroup") throw new H("Invalid environment name", i);
        for (var l = "", a = 0; a < i.body.length; ++a) l += se(i.body[a], "textord").text;
        if (r === "\\begin") {
            if (!qh.hasOwnProperty(l)) throw new H("No such environment: " + l, i);
            var o = qh[l],
                { args: u, optArgs: s } = n.parseArguments("\\begin{" + l + "}", o),
                h = { mode: n.mode, envName: l, parser: n },
                d = o.handler(h, u, s);
            n.expect("\\end", !1);
            var p = n.nextToken,
                m = se(n.parseFunction(), "environment");
            if (m.name !== l) throw new H("Mismatch: \\begin{" + l + "} matched by \\end{" + m.name + "}", p);
            return d;
        }
        return { type: "environment", mode: n.mode, name: l, nameGroup: i };
    },
});
var Xm = (e, t) => {
        var n = e.font,
            r = t.withFont(n);
        return me(e.body, r);
    },
    Qm = (e, t) => {
        var n = e.font,
            r = t.withFont(n);
        return Ce(e.body, r);
    },
    _h = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
G({
    type: "font",
    names: [
        "\\mathrm",
        "\\mathit",
        "\\mathbf",
        "\\mathnormal",
        "\\mathsfit",
        "\\mathbb",
        "\\mathcal",
        "\\mathfrak",
        "\\mathscr",
        "\\mathsf",
        "\\mathtt",
        "\\Bbb",
        "\\bold",
        "\\frak",
    ],
    props: { numArgs: 1, allowedInArgument: !0 },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = Jl(t[0]),
            l = r;
        return l in _h && (l = _h[l]), { type: "font", mode: n.mode, font: l.slice(1), body: i };
    },
    htmlBuilder: Xm,
    mathmlBuilder: Qm,
});
G({
    type: "mclass",
    names: ["\\boldsymbol", "\\bm"],
    props: { numArgs: 1 },
    handler: (e, t) => {
        var { parser: n } = e,
            r = t[0],
            i = J.isCharacterBox(r);
        return { type: "mclass", mode: n.mode, mclass: Da(r), body: [{ type: "font", mode: n.mode, font: "boldsymbol", body: r }], isCharacterBox: i };
    },
});
G({
    type: "font",
    names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
    props: { numArgs: 0, allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n, funcName: r, breakOnTokenText: i } = e,
            { mode: l } = n,
            a = n.parseExpression(!0, i),
            o = "math" + r.slice(1);
        return { type: "font", mode: l, font: o, body: { type: "ordgroup", mode: n.mode, body: a } };
    },
    htmlBuilder: Xm,
    mathmlBuilder: Qm,
});
var Km = (e, t) => {
        var n = t;
        return (
            e === "display"
                ? (n = n.id >= te.SCRIPT.id ? n.text() : te.DISPLAY)
                : e === "text" && n.size === te.DISPLAY.size
                  ? (n = te.TEXT)
                  : e === "script"
                    ? (n = te.SCRIPT)
                    : e === "scriptscript" && (n = te.SCRIPTSCRIPT),
            n
        );
    },
    p1 = (e, t) => {
        var n = Km(e.size, t.style),
            r = n.fracNum(),
            i = n.fracDen(),
            l;
        l = t.havingStyle(r);
        var a = me(e.numer, l, t);
        if (e.continued) {
            var o = 8.5 / t.fontMetrics().ptPerEm,
                u = 3.5 / t.fontMetrics().ptPerEm;
            (a.height = a.height < o ? o : a.height), (a.depth = a.depth < u ? u : a.depth);
        }
        l = t.havingStyle(i);
        var s = me(e.denom, l, t),
            h,
            d,
            p;
        e.hasBarLine
            ? (e.barSize ? ((d = Le(e.barSize, t)), (h = D.makeLineSpan("frac-line", t, d))) : (h = D.makeLineSpan("frac-line", t)),
              (d = h.height),
              (p = h.height))
            : ((h = null), (d = 0), (p = t.fontMetrics().defaultRuleThickness));
        var m, S, w;
        n.size === te.DISPLAY.size || e.size === "display"
            ? ((m = t.fontMetrics().num1), d > 0 ? (S = 3 * p) : (S = 7 * p), (w = t.fontMetrics().denom1))
            : (d > 0 ? ((m = t.fontMetrics().num2), (S = p)) : ((m = t.fontMetrics().num3), (S = 3 * p)), (w = t.fontMetrics().denom2));
        var N;
        if (h) {
            var x = t.fontMetrics().axisHeight;
            m - a.depth - (x + 0.5 * d) < S && (m += S - (m - a.depth - (x + 0.5 * d))),
                x - 0.5 * d - (s.height - w) < S && (w += S - (x - 0.5 * d - (s.height - w)));
            var k = -(x - 0.5 * d);
            N = D.makeVList(
                {
                    positionType: "individualShift",
                    children: [
                        { type: "elem", elem: s, shift: w },
                        { type: "elem", elem: h, shift: k },
                        { type: "elem", elem: a, shift: -m },
                    ],
                },
                t,
            );
        } else {
            var y = m - a.depth - (s.height - w);
            y < S && ((m += 0.5 * (S - y)), (w += 0.5 * (S - y))),
                (N = D.makeVList(
                    {
                        positionType: "individualShift",
                        children: [
                            { type: "elem", elem: s, shift: w },
                            { type: "elem", elem: a, shift: -m },
                        ],
                    },
                    t,
                ));
        }
        (l = t.havingStyle(n)), (N.height *= l.sizeMultiplier / t.sizeMultiplier), (N.depth *= l.sizeMultiplier / t.sizeMultiplier);
        var A;
        n.size === te.DISPLAY.size
            ? (A = t.fontMetrics().delim1)
            : n.size === te.SCRIPTSCRIPT.size
              ? (A = t.havingStyle(te.SCRIPT).fontMetrics().delim2)
              : (A = t.fontMetrics().delim2);
        var P, T;
        return (
            e.leftDelim == null ? (P = ki(t, ["mopen"])) : (P = Dn.customSizedDelim(e.leftDelim, A, !0, t.havingStyle(n), e.mode, ["mopen"])),
            e.continued
                ? (T = D.makeSpan([]))
                : e.rightDelim == null
                  ? (T = ki(t, ["mclose"]))
                  : (T = Dn.customSizedDelim(e.rightDelim, A, !0, t.havingStyle(n), e.mode, ["mclose"])),
            D.makeSpan(["mord"].concat(l.sizingClasses(t)), [P, D.makeSpan(["mfrac"], [N]), T], t)
        );
    },
    g1 = (e, t) => {
        var n = new O.MathNode("mfrac", [Ce(e.numer, t), Ce(e.denom, t)]);
        if (!e.hasBarLine) n.setAttribute("linethickness", "0px");
        else if (e.barSize) {
            var r = Le(e.barSize, t);
            n.setAttribute("linethickness", V(r));
        }
        var i = Km(e.size, t.style);
        if (i.size !== t.style.size) {
            n = new O.MathNode("mstyle", [n]);
            var l = i.size === te.DISPLAY.size ? "true" : "false";
            n.setAttribute("displaystyle", l), n.setAttribute("scriptlevel", "0");
        }
        if (e.leftDelim != null || e.rightDelim != null) {
            var a = [];
            if (e.leftDelim != null) {
                var o = new O.MathNode("mo", [new O.TextNode(e.leftDelim.replace("\\", ""))]);
                o.setAttribute("fence", "true"), a.push(o);
            }
            if ((a.push(n), e.rightDelim != null)) {
                var u = new O.MathNode("mo", [new O.TextNode(e.rightDelim.replace("\\", ""))]);
                u.setAttribute("fence", "true"), a.push(u);
            }
            return a1(a);
        }
        return n;
    };
G({
    type: "genfrac",
    names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
    props: { numArgs: 2, allowedInArgument: !0 },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = t[0],
            l = t[1],
            a,
            o = null,
            u = null,
            s = "auto";
        switch (r) {
            case "\\dfrac":
            case "\\frac":
            case "\\tfrac":
                a = !0;
                break;
            case "\\\\atopfrac":
                a = !1;
                break;
            case "\\dbinom":
            case "\\binom":
            case "\\tbinom":
                (a = !1), (o = "("), (u = ")");
                break;
            case "\\\\bracefrac":
                (a = !1), (o = "\\{"), (u = "\\}");
                break;
            case "\\\\brackfrac":
                (a = !1), (o = "["), (u = "]");
                break;
            default:
                throw new Error("Unrecognized genfrac command");
        }
        switch (r) {
            case "\\dfrac":
            case "\\dbinom":
                s = "display";
                break;
            case "\\tfrac":
            case "\\tbinom":
                s = "text";
                break;
        }
        return { type: "genfrac", mode: n.mode, continued: !1, numer: i, denom: l, hasBarLine: a, leftDelim: o, rightDelim: u, size: s, barSize: null };
    },
    htmlBuilder: p1,
    mathmlBuilder: g1,
});
G({
    type: "genfrac",
    names: ["\\cfrac"],
    props: { numArgs: 2 },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = t[0],
            l = t[1];
        return {
            type: "genfrac",
            mode: n.mode,
            continued: !0,
            numer: i,
            denom: l,
            hasBarLine: !0,
            leftDelim: null,
            rightDelim: null,
            size: "display",
            barSize: null,
        };
    },
});
G({
    type: "infix",
    names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
    props: { numArgs: 0, infix: !0 },
    handler(e) {
        var { parser: t, funcName: n, token: r } = e,
            i;
        switch (n) {
            case "\\over":
                i = "\\frac";
                break;
            case "\\choose":
                i = "\\binom";
                break;
            case "\\atop":
                i = "\\\\atopfrac";
                break;
            case "\\brace":
                i = "\\\\bracefrac";
                break;
            case "\\brack":
                i = "\\\\brackfrac";
                break;
            default:
                throw new Error("Unrecognized infix genfrac command");
        }
        return { type: "infix", mode: t.mode, replaceWith: i, token: r };
    },
});
var Uh = ["display", "text", "script", "scriptscript"],
    $h = function (t) {
        var n = null;
        return t.length > 0 && ((n = t), (n = n === "." ? null : n)), n;
    };
G({
    type: "genfrac",
    names: ["\\genfrac"],
    props: { numArgs: 6, allowedInArgument: !0, argTypes: ["math", "math", "size", "text", "math", "math"] },
    handler(e, t) {
        var { parser: n } = e,
            r = t[4],
            i = t[5],
            l = Jl(t[0]),
            a = l.type === "atom" && l.family === "open" ? $h(l.text) : null,
            o = Jl(t[1]),
            u = o.type === "atom" && o.family === "close" ? $h(o.text) : null,
            s = se(t[2], "size"),
            h,
            d = null;
        s.isBlank ? (h = !0) : ((d = s.value), (h = d.number > 0));
        var p = "auto",
            m = t[3];
        if (m.type === "ordgroup") {
            if (m.body.length > 0) {
                var S = se(m.body[0], "textord");
                p = Uh[Number(S.text)];
            }
        } else (m = se(m, "textord")), (p = Uh[Number(m.text)]);
        return { type: "genfrac", mode: n.mode, numer: r, denom: i, continued: !1, hasBarLine: h, barSize: d, leftDelim: a, rightDelim: u, size: p };
    },
    htmlBuilder: p1,
    mathmlBuilder: g1,
});
G({
    type: "infix",
    names: ["\\above"],
    props: { numArgs: 1, argTypes: ["size"], infix: !0 },
    handler(e, t) {
        var { parser: n, funcName: r, token: i } = e;
        return { type: "infix", mode: n.mode, replaceWith: "\\\\abovefrac", size: se(t[0], "size").value, token: i };
    },
});
G({
    type: "genfrac",
    names: ["\\\\abovefrac"],
    props: { numArgs: 3, argTypes: ["math", "size", "math"] },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = t[0],
            l = dg(se(t[1], "infix").size),
            a = t[2],
            o = l.number > 0;
        return { type: "genfrac", mode: n.mode, numer: i, denom: a, continued: !1, hasBarLine: o, barSize: l, leftDelim: null, rightDelim: null, size: "auto" };
    },
    htmlBuilder: p1,
    mathmlBuilder: g1,
});
var Zm = (e, t) => {
        var n = t.style,
            r,
            i;
        e.type === "supsub"
            ? ((r = e.sup ? me(e.sup, t.havingStyle(n.sup()), t) : me(e.sub, t.havingStyle(n.sub()), t)), (i = se(e.base, "horizBrace")))
            : (i = se(e, "horizBrace"));
        var l = me(i.base, t.havingBaseStyle(te.DISPLAY)),
            a = Rn.svgSpan(i, t),
            o;
        if (
            (i.isOver
                ? ((o = D.makeVList(
                      {
                          positionType: "firstBaseline",
                          children: [
                              { type: "elem", elem: l },
                              { type: "kern", size: 0.1 },
                              { type: "elem", elem: a },
                          ],
                      },
                      t,
                  )),
                  o.children[0].children[0].children[1].classes.push("svg-align"))
                : ((o = D.makeVList(
                      {
                          positionType: "bottom",
                          positionData: l.depth + 0.1 + a.height,
                          children: [
                              { type: "elem", elem: a },
                              { type: "kern", size: 0.1 },
                              { type: "elem", elem: l },
                          ],
                      },
                      t,
                  )),
                  o.children[0].children[0].children[0].classes.push("svg-align")),
            r)
        ) {
            var u = D.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], t);
            i.isOver
                ? (o = D.makeVList(
                      {
                          positionType: "firstBaseline",
                          children: [
                              { type: "elem", elem: u },
                              { type: "kern", size: 0.2 },
                              { type: "elem", elem: r },
                          ],
                      },
                      t,
                  ))
                : (o = D.makeVList(
                      {
                          positionType: "bottom",
                          positionData: u.depth + 0.2 + r.height + r.depth,
                          children: [
                              { type: "elem", elem: r },
                              { type: "kern", size: 0.2 },
                              { type: "elem", elem: u },
                          ],
                      },
                      t,
                  ));
        }
        return D.makeSpan(["mord", i.isOver ? "mover" : "munder"], [o], t);
    },
    R9 = (e, t) => {
        var n = Rn.mathMLnode(e.label);
        return new O.MathNode(e.isOver ? "mover" : "munder", [Ce(e.base, t), n]);
    };
G({
    type: "horizBrace",
    names: ["\\overbrace", "\\underbrace"],
    props: { numArgs: 1 },
    handler(e, t) {
        var { parser: n, funcName: r } = e;
        return { type: "horizBrace", mode: n.mode, label: r, isOver: /^\\over/.test(r), base: t[0] };
    },
    htmlBuilder: Zm,
    mathmlBuilder: R9,
});
G({
    type: "href",
    names: ["\\href"],
    props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n } = e,
            r = t[1],
            i = se(t[0], "url").url;
        return n.settings.isTrusted({ command: "\\href", url: i }) ? { type: "href", mode: n.mode, href: i, body: Ue(r) } : n.formatUnsupportedCmd("\\href");
    },
    htmlBuilder: (e, t) => {
        var n = Ye(e.body, t, !1);
        return D.makeAnchor(e.href, [], n, t);
    },
    mathmlBuilder: (e, t) => {
        var n = hr(e.body, t);
        return n instanceof Et || (n = new Et("mrow", [n])), n.setAttribute("href", e.href), n;
    },
});
G({
    type: "href",
    names: ["\\url"],
    props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n } = e,
            r = se(t[0], "url").url;
        if (!n.settings.isTrusted({ command: "\\url", url: r })) return n.formatUnsupportedCmd("\\url");
        for (var i = [], l = 0; l < r.length; l++) {
            var a = r[l];
            a === "~" && (a = "\\textasciitilde"), i.push({ type: "textord", mode: "text", text: a });
        }
        var o = { type: "text", mode: n.mode, font: "\\texttt", body: i };
        return { type: "href", mode: n.mode, href: r, body: Ue(o) };
    },
});
G({
    type: "hbox",
    names: ["\\hbox"],
    props: { numArgs: 1, argTypes: ["text"], allowedInText: !0, primitive: !0 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "hbox", mode: n.mode, body: Ue(t[0]) };
    },
    htmlBuilder(e, t) {
        var n = Ye(e.body, t, !1);
        return D.makeFragment(n);
    },
    mathmlBuilder(e, t) {
        return new O.MathNode("mrow", bt(e.body, t));
    },
});
G({
    type: "html",
    names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
    props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n, funcName: r, token: i } = e,
            l = se(t[0], "raw").string,
            a = t[1];
        n.settings.strict && n.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
        var o,
            u = {};
        switch (r) {
            case "\\htmlClass":
                (u.class = l), (o = { command: "\\htmlClass", class: l });
                break;
            case "\\htmlId":
                (u.id = l), (o = { command: "\\htmlId", id: l });
                break;
            case "\\htmlStyle":
                (u.style = l), (o = { command: "\\htmlStyle", style: l });
                break;
            case "\\htmlData": {
                for (var s = l.split(","), h = 0; h < s.length; h++) {
                    var d = s[h].split("=");
                    if (d.length !== 2) throw new H("Error parsing key-value for \\htmlData");
                    u["data-" + d[0].trim()] = d[1].trim();
                }
                o = { command: "\\htmlData", attributes: u };
                break;
            }
            default:
                throw new Error("Unrecognized html command");
        }
        return n.settings.isTrusted(o) ? { type: "html", mode: n.mode, attributes: u, body: Ue(a) } : n.formatUnsupportedCmd(r);
    },
    htmlBuilder: (e, t) => {
        var n = Ye(e.body, t, !1),
            r = ["enclosing"];
        e.attributes.class && r.push(...e.attributes.class.trim().split(/\s+/));
        var i = D.makeSpan(r, n, t);
        for (var l in e.attributes) l !== "class" && e.attributes.hasOwnProperty(l) && i.setAttribute(l, e.attributes[l]);
        return i;
    },
    mathmlBuilder: (e, t) => hr(e.body, t),
});
G({
    type: "htmlmathml",
    names: ["\\html@mathml"],
    props: { numArgs: 2, allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n } = e;
        return { type: "htmlmathml", mode: n.mode, html: Ue(t[0]), mathml: Ue(t[1]) };
    },
    htmlBuilder: (e, t) => {
        var n = Ye(e.html, t, !1);
        return D.makeFragment(n);
    },
    mathmlBuilder: (e, t) => hr(e.mathml, t),
});
var Do = function (t) {
    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t)) return { number: +t, unit: "bp" };
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
    if (!n) throw new H("Invalid size: '" + t + "' in \\includegraphics");
    var r = { number: +(n[1] + n[2]), unit: n[3] };
    if (!vm(r)) throw new H("Invalid unit: '" + r.unit + "' in \\includegraphics.");
    return r;
};
G({
    type: "includegraphics",
    names: ["\\includegraphics"],
    props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: !1 },
    handler: (e, t, n) => {
        var { parser: r } = e,
            i = { number: 0, unit: "em" },
            l = { number: 0.9, unit: "em" },
            a = { number: 0, unit: "em" },
            o = "";
        if (n[0])
            for (var u = se(n[0], "raw").string, s = u.split(","), h = 0; h < s.length; h++) {
                var d = s[h].split("=");
                if (d.length === 2) {
                    var p = d[1].trim();
                    switch (d[0].trim()) {
                        case "alt":
                            o = p;
                            break;
                        case "width":
                            i = Do(p);
                            break;
                        case "height":
                            l = Do(p);
                            break;
                        case "totalheight":
                            a = Do(p);
                            break;
                        default:
                            throw new H("Invalid key: '" + d[0] + "' in \\includegraphics.");
                    }
                }
            }
        var m = se(t[0], "url").url;
        return (
            o === "" && ((o = m), (o = o.replace(/^.*[\\/]/, "")), (o = o.substring(0, o.lastIndexOf(".")))),
            r.settings.isTrusted({ command: "\\includegraphics", url: m })
                ? { type: "includegraphics", mode: r.mode, alt: o, width: i, height: l, totalheight: a, src: m }
                : r.formatUnsupportedCmd("\\includegraphics")
        );
    },
    htmlBuilder: (e, t) => {
        var n = Le(e.height, t),
            r = 0;
        e.totalheight.number > 0 && (r = Le(e.totalheight, t) - n);
        var i = 0;
        e.width.number > 0 && (i = Le(e.width, t));
        var l = { height: V(n + r) };
        i > 0 && (l.width = V(i)), r > 0 && (l.verticalAlign = V(-r));
        var a = new Rg(e.src, e.alt, l);
        return (a.height = n), (a.depth = r), a;
    },
    mathmlBuilder: (e, t) => {
        var n = new O.MathNode("mglyph", []);
        n.setAttribute("alt", e.alt);
        var r = Le(e.height, t),
            i = 0;
        if (
            (e.totalheight.number > 0 && ((i = Le(e.totalheight, t) - r), n.setAttribute("valign", V(-i))),
            n.setAttribute("height", V(r + i)),
            e.width.number > 0)
        ) {
            var l = Le(e.width, t);
            n.setAttribute("width", V(l));
        }
        return n.setAttribute("src", e.src), n;
    },
});
G({
    type: "kern",
    names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
    props: { numArgs: 1, argTypes: ["size"], primitive: !0, allowedInText: !0 },
    handler(e, t) {
        var { parser: n, funcName: r } = e,
            i = se(t[0], "size");
        if (n.settings.strict) {
            var l = r[1] === "m",
                a = i.value.unit === "mu";
            l
                ? (a || n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + i.value.unit + " units")),
                  n.mode !== "math" && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode"))
                : a && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
        }
        return { type: "kern", mode: n.mode, dimension: i.value };
    },
    htmlBuilder(e, t) {
        return D.makeGlue(e.dimension, t);
    },
    mathmlBuilder(e, t) {
        var n = Le(e.dimension, t);
        return new O.SpaceNode(n);
    },
});
G({
    type: "lap",
    names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
    props: { numArgs: 1, allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = t[0];
        return { type: "lap", mode: n.mode, alignment: r.slice(5), body: i };
    },
    htmlBuilder: (e, t) => {
        var n;
        e.alignment === "clap" ? ((n = D.makeSpan([], [me(e.body, t)])), (n = D.makeSpan(["inner"], [n], t))) : (n = D.makeSpan(["inner"], [me(e.body, t)]));
        var r = D.makeSpan(["fix"], []),
            i = D.makeSpan([e.alignment], [n, r], t),
            l = D.makeSpan(["strut"]);
        return (
            (l.style.height = V(i.height + i.depth)),
            i.depth && (l.style.verticalAlign = V(-i.depth)),
            i.children.unshift(l),
            (i = D.makeSpan(["thinbox"], [i], t)),
            D.makeSpan(["mord", "vbox"], [i], t)
        );
    },
    mathmlBuilder: (e, t) => {
        var n = new O.MathNode("mpadded", [Ce(e.body, t)]);
        if (e.alignment !== "rlap") {
            var r = e.alignment === "llap" ? "-1" : "-0.5";
            n.setAttribute("lspace", r + "width");
        }
        return n.setAttribute("width", "0px"), n;
    },
});
G({
    type: "styling",
    names: ["\\(", "$"],
    props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
    handler(e, t) {
        var { funcName: n, parser: r } = e,
            i = r.mode;
        r.switchMode("math");
        var l = n === "\\(" ? "\\)" : "$",
            a = r.parseExpression(!1, l);
        return r.expect(l), r.switchMode(i), { type: "styling", mode: r.mode, style: "text", body: a };
    },
});
G({
    type: "text",
    names: ["\\)", "\\]"],
    props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
    handler(e, t) {
        throw new H("Mismatched " + e.funcName);
    },
});
var jh = (e, t) => {
    switch (t.style.size) {
        case te.DISPLAY.size:
            return e.display;
        case te.TEXT.size:
            return e.text;
        case te.SCRIPT.size:
            return e.script;
        case te.SCRIPTSCRIPT.size:
            return e.scriptscript;
        default:
            return e.text;
    }
};
G({
    type: "mathchoice",
    names: ["\\mathchoice"],
    props: { numArgs: 4, primitive: !0 },
    handler: (e, t) => {
        var { parser: n } = e;
        return { type: "mathchoice", mode: n.mode, display: Ue(t[0]), text: Ue(t[1]), script: Ue(t[2]), scriptscript: Ue(t[3]) };
    },
    htmlBuilder: (e, t) => {
        var n = jh(e, t),
            r = Ye(n, t, !1);
        return D.makeFragment(r);
    },
    mathmlBuilder: (e, t) => {
        var n = jh(e, t);
        return hr(n, t);
    },
});
var Jm = (e, t, n, r, i, l, a) => {
        e = D.makeSpan([], [e]);
        var o = n && J.isCharacterBox(n),
            u,
            s;
        if (t) {
            var h = me(t, r.havingStyle(i.sup()), r);
            s = { elem: h, kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - h.depth) };
        }
        if (n) {
            var d = me(n, r.havingStyle(i.sub()), r);
            u = { elem: d, kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - d.height) };
        }
        var p;
        if (s && u) {
            var m = r.fontMetrics().bigOpSpacing5 + u.elem.height + u.elem.depth + u.kern + e.depth + a;
            p = D.makeVList(
                {
                    positionType: "bottom",
                    positionData: m,
                    children: [
                        { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
                        { type: "elem", elem: u.elem, marginLeft: V(-l) },
                        { type: "kern", size: u.kern },
                        { type: "elem", elem: e },
                        { type: "kern", size: s.kern },
                        { type: "elem", elem: s.elem, marginLeft: V(l) },
                        { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
                    ],
                },
                r,
            );
        } else if (u) {
            var S = e.height - a;
            p = D.makeVList(
                {
                    positionType: "top",
                    positionData: S,
                    children: [
                        { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
                        { type: "elem", elem: u.elem, marginLeft: V(-l) },
                        { type: "kern", size: u.kern },
                        { type: "elem", elem: e },
                    ],
                },
                r,
            );
        } else if (s) {
            var w = e.depth + a;
            p = D.makeVList(
                {
                    positionType: "bottom",
                    positionData: w,
                    children: [
                        { type: "elem", elem: e },
                        { type: "kern", size: s.kern },
                        { type: "elem", elem: s.elem, marginLeft: V(l) },
                        { type: "kern", size: r.fontMetrics().bigOpSpacing5 },
                    ],
                },
                r,
            );
        } else return e;
        var N = [p];
        if (u && l !== 0 && !o) {
            var y = D.makeSpan(["mspace"], [], r);
            (y.style.marginRight = V(l)), N.unshift(y);
        }
        return D.makeSpan(["mop", "op-limits"], N, r);
    },
    ep = ["\\smallint"],
    C0 = (e, t) => {
        var n,
            r,
            i = !1,
            l;
        e.type === "supsub" ? ((n = e.sup), (r = e.sub), (l = se(e.base, "op")), (i = !0)) : (l = se(e, "op"));
        var a = t.style,
            o = !1;
        a.size === te.DISPLAY.size && l.symbol && !J.contains(ep, l.name) && (o = !0);
        var u;
        if (l.symbol) {
            var s = o ? "Size2-Regular" : "Size1-Regular",
                h = "";
            if (
                ((l.name === "\\oiint" || l.name === "\\oiiint") && ((h = l.name.slice(1)), (l.name = h === "oiint" ? "\\iint" : "\\iiint")),
                (u = D.makeSymbol(l.name, s, "math", t, ["mop", "op-symbol", o ? "large-op" : "small-op"])),
                h.length > 0)
            ) {
                var d = u.italic,
                    p = D.staticSvg(h + "Size" + (o ? "2" : "1"), t);
                (u = D.makeVList(
                    {
                        positionType: "individualShift",
                        children: [
                            { type: "elem", elem: u, shift: 0 },
                            { type: "elem", elem: p, shift: o ? 0.08 : 0 },
                        ],
                    },
                    t,
                )),
                    (l.name = "\\" + h),
                    u.classes.unshift("mop"),
                    (u.italic = d);
            }
        } else if (l.body) {
            var m = Ye(l.body, t, !0);
            m.length === 1 && m[0] instanceof jt ? ((u = m[0]), (u.classes[0] = "mop")) : (u = D.makeSpan(["mop"], m, t));
        } else {
            for (var S = [], w = 1; w < l.name.length; w++) S.push(D.mathsym(l.name[w], l.mode, t));
            u = D.makeSpan(["mop"], S, t);
        }
        var N = 0,
            y = 0;
        return (
            (u instanceof jt || l.name === "\\oiint" || l.name === "\\oiiint") &&
                !l.suppressBaseShift &&
                ((N = (u.height - u.depth) / 2 - t.fontMetrics().axisHeight), (y = u.italic)),
            i ? Jm(u, n, r, t, a, y, N) : (N && ((u.style.position = "relative"), (u.style.top = V(N))), u)
        );
    },
    Di = (e, t) => {
        var n;
        if (e.symbol) (n = new Et("mo", [Vt(e.name, e.mode)])), J.contains(ep, e.name) && n.setAttribute("largeop", "false");
        else if (e.body) n = new Et("mo", bt(e.body, t));
        else {
            n = new Et("mi", [new mn(e.name.slice(1))]);
            var r = new Et("mo", [Vt("⁡", "text")]);
            e.parentIsSupSub ? (n = new Et("mrow", [n, r])) : (n = Mm([n, r]));
        }
        return n;
    },
    H9 = {
        "∏": "\\prod",
        "∐": "\\coprod",
        "∑": "\\sum",
        "⋀": "\\bigwedge",
        "⋁": "\\bigvee",
        "⋂": "\\bigcap",
        "⋃": "\\bigcup",
        "⨀": "\\bigodot",
        "⨁": "\\bigoplus",
        "⨂": "\\bigotimes",
        "⨄": "\\biguplus",
        "⨆": "\\bigsqcup",
    };
G({
    type: "op",
    names: [
        "\\coprod",
        "\\bigvee",
        "\\bigwedge",
        "\\biguplus",
        "\\bigcap",
        "\\bigcup",
        "\\intop",
        "\\prod",
        "\\sum",
        "\\bigotimes",
        "\\bigoplus",
        "\\bigodot",
        "\\bigsqcup",
        "\\smallint",
        "∏",
        "∐",
        "∑",
        "⋀",
        "⋁",
        "⋂",
        "⋃",
        "⨀",
        "⨁",
        "⨂",
        "⨄",
        "⨆",
    ],
    props: { numArgs: 0 },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = r;
        return i.length === 1 && (i = H9[i]), { type: "op", mode: n.mode, limits: !0, parentIsSupSub: !1, symbol: !0, name: i };
    },
    htmlBuilder: C0,
    mathmlBuilder: Di,
});
G({
    type: "op",
    names: ["\\mathop"],
    props: { numArgs: 1, primitive: !0 },
    handler: (e, t) => {
        var { parser: n } = e,
            r = t[0];
        return { type: "op", mode: n.mode, limits: !1, parentIsSupSub: !1, symbol: !1, body: Ue(r) };
    },
    htmlBuilder: C0,
    mathmlBuilder: Di,
});
var q9 = { "∫": "\\int", "∬": "\\iint", "∭": "\\iiint", "∮": "\\oint", "∯": "\\oiint", "∰": "\\oiiint" };
G({
    type: "op",
    names: [
        "\\arcsin",
        "\\arccos",
        "\\arctan",
        "\\arctg",
        "\\arcctg",
        "\\arg",
        "\\ch",
        "\\cos",
        "\\cosec",
        "\\cosh",
        "\\cot",
        "\\cotg",
        "\\coth",
        "\\csc",
        "\\ctg",
        "\\cth",
        "\\deg",
        "\\dim",
        "\\exp",
        "\\hom",
        "\\ker",
        "\\lg",
        "\\ln",
        "\\log",
        "\\sec",
        "\\sin",
        "\\sinh",
        "\\sh",
        "\\tan",
        "\\tanh",
        "\\tg",
        "\\th",
    ],
    props: { numArgs: 0 },
    handler(e) {
        var { parser: t, funcName: n } = e;
        return { type: "op", mode: t.mode, limits: !1, parentIsSupSub: !1, symbol: !1, name: n };
    },
    htmlBuilder: C0,
    mathmlBuilder: Di,
});
G({
    type: "op",
    names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
    props: { numArgs: 0 },
    handler(e) {
        var { parser: t, funcName: n } = e;
        return { type: "op", mode: t.mode, limits: !0, parentIsSupSub: !1, symbol: !1, name: n };
    },
    htmlBuilder: C0,
    mathmlBuilder: Di,
});
G({
    type: "op",
    names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
    props: { numArgs: 0 },
    handler(e) {
        var { parser: t, funcName: n } = e,
            r = n;
        return r.length === 1 && (r = q9[r]), { type: "op", mode: t.mode, limits: !1, parentIsSupSub: !1, symbol: !0, name: r };
    },
    htmlBuilder: C0,
    mathmlBuilder: Di,
});
var tp = (e, t) => {
        var n,
            r,
            i = !1,
            l;
        e.type === "supsub" ? ((n = e.sup), (r = e.sub), (l = se(e.base, "operatorname")), (i = !0)) : (l = se(e, "operatorname"));
        var a;
        if (l.body.length > 0) {
            for (
                var o = l.body.map(d => {
                        var p = d.text;
                        return typeof p == "string" ? { type: "textord", mode: d.mode, text: p } : d;
                    }),
                    u = Ye(o, t.withFont("mathrm"), !0),
                    s = 0;
                s < u.length;
                s++
            ) {
                var h = u[s];
                h instanceof jt && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
            }
            a = D.makeSpan(["mop"], u, t);
        } else a = D.makeSpan(["mop"], [], t);
        return i ? Jm(a, n, r, t, t.style, 0, 0) : a;
    },
    _9 = (e, t) => {
        for (var n = bt(e.body, t.withFont("mathrm")), r = !0, i = 0; i < n.length; i++) {
            var l = n[i];
            if (!(l instanceof O.SpaceNode))
                if (l instanceof O.MathNode)
                    switch (l.type) {
                        case "mi":
                        case "mn":
                        case "ms":
                        case "mspace":
                        case "mtext":
                            break;
                        case "mo": {
                            var a = l.children[0];
                            l.children.length === 1 && a instanceof O.TextNode ? (a.text = a.text.replace(/\u2212/, "-").replace(/\u2217/, "*")) : (r = !1);
                            break;
                        }
                        default:
                            r = !1;
                    }
                else r = !1;
        }
        if (r) {
            var o = n.map(h => h.toText()).join("");
            n = [new O.TextNode(o)];
        }
        var u = new O.MathNode("mi", n);
        u.setAttribute("mathvariant", "normal");
        var s = new O.MathNode("mo", [Vt("⁡", "text")]);
        return e.parentIsSupSub ? new O.MathNode("mrow", [u, s]) : O.newDocumentFragment([u, s]);
    };
G({
    type: "operatorname",
    names: ["\\operatorname@", "\\operatornamewithlimits"],
    props: { numArgs: 1 },
    handler: (e, t) => {
        var { parser: n, funcName: r } = e,
            i = t[0];
        return { type: "operatorname", mode: n.mode, body: Ue(i), alwaysHandleSupSub: r === "\\operatornamewithlimits", limits: !1, parentIsSupSub: !1 };
    },
    htmlBuilder: tp,
    mathmlBuilder: _9,
});
v("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Br({
    type: "ordgroup",
    htmlBuilder(e, t) {
        return e.semisimple ? D.makeFragment(Ye(e.body, t, !1)) : D.makeSpan(["mord"], Ye(e.body, t, !0), t);
    },
    mathmlBuilder(e, t) {
        return hr(e.body, t, !0);
    },
});
G({
    type: "overline",
    names: ["\\overline"],
    props: { numArgs: 1 },
    handler(e, t) {
        var { parser: n } = e,
            r = t[0];
        return { type: "overline", mode: n.mode, body: r };
    },
    htmlBuilder(e, t) {
        var n = me(e.body, t.havingCrampedStyle()),
            r = D.makeLineSpan("overline-line", t),
            i = t.fontMetrics().defaultRuleThickness,
            l = D.makeVList(
                {
                    positionType: "firstBaseline",
                    children: [
                        { type: "elem", elem: n },
                        { type: "kern", size: 3 * i },
                        { type: "elem", elem: r },
                        { type: "kern", size: i },
                    ],
                },
                t,
            );
        return D.makeSpan(["mord", "overline"], [l], t);
    },
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mo", [new O.TextNode("‾")]);
        n.setAttribute("stretchy", "true");
        var r = new O.MathNode("mover", [Ce(e.body, t), n]);
        return r.setAttribute("accent", "true"), r;
    },
});
G({
    type: "phantom",
    names: ["\\phantom"],
    props: { numArgs: 1, allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n } = e,
            r = t[0];
        return { type: "phantom", mode: n.mode, body: Ue(r) };
    },
    htmlBuilder: (e, t) => {
        var n = Ye(e.body, t.withPhantom(), !1);
        return D.makeFragment(n);
    },
    mathmlBuilder: (e, t) => {
        var n = bt(e.body, t);
        return new O.MathNode("mphantom", n);
    },
});
G({
    type: "hphantom",
    names: ["\\hphantom"],
    props: { numArgs: 1, allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n } = e,
            r = t[0];
        return { type: "hphantom", mode: n.mode, body: r };
    },
    htmlBuilder: (e, t) => {
        var n = D.makeSpan([], [me(e.body, t.withPhantom())]);
        if (((n.height = 0), (n.depth = 0), n.children)) for (var r = 0; r < n.children.length; r++) (n.children[r].height = 0), (n.children[r].depth = 0);
        return (n = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: n }] }, t)), D.makeSpan(["mord"], [n], t);
    },
    mathmlBuilder: (e, t) => {
        var n = bt(Ue(e.body), t),
            r = new O.MathNode("mphantom", n),
            i = new O.MathNode("mpadded", [r]);
        return i.setAttribute("height", "0px"), i.setAttribute("depth", "0px"), i;
    },
});
G({
    type: "vphantom",
    names: ["\\vphantom"],
    props: { numArgs: 1, allowedInText: !0 },
    handler: (e, t) => {
        var { parser: n } = e,
            r = t[0];
        return { type: "vphantom", mode: n.mode, body: r };
    },
    htmlBuilder: (e, t) => {
        var n = D.makeSpan(["inner"], [me(e.body, t.withPhantom())]),
            r = D.makeSpan(["fix"], []);
        return D.makeSpan(["mord", "rlap"], [n, r], t);
    },
    mathmlBuilder: (e, t) => {
        var n = bt(Ue(e.body), t),
            r = new O.MathNode("mphantom", n),
            i = new O.MathNode("mpadded", [r]);
        return i.setAttribute("width", "0px"), i;
    },
});
G({
    type: "raisebox",
    names: ["\\raisebox"],
    props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: !0 },
    handler(e, t) {
        var { parser: n } = e,
            r = se(t[0], "size").value,
            i = t[1];
        return { type: "raisebox", mode: n.mode, dy: r, body: i };
    },
    htmlBuilder(e, t) {
        var n = me(e.body, t),
            r = Le(e.dy, t);
        return D.makeVList({ positionType: "shift", positionData: -r, children: [{ type: "elem", elem: n }] }, t);
    },
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mpadded", [Ce(e.body, t)]),
            r = e.dy.number + e.dy.unit;
        return n.setAttribute("voffset", r), n;
    },
});
G({
    type: "internal",
    names: ["\\relax"],
    props: { numArgs: 0, allowedInText: !0 },
    handler(e) {
        var { parser: t } = e;
        return { type: "internal", mode: t.mode };
    },
});
G({
    type: "rule",
    names: ["\\rule"],
    props: { numArgs: 2, numOptionalArgs: 1, allowedInText: !0, allowedInMath: !0, argTypes: ["size", "size", "size"] },
    handler(e, t, n) {
        var { parser: r } = e,
            i = n[0],
            l = se(t[0], "size"),
            a = se(t[1], "size");
        return { type: "rule", mode: r.mode, shift: i && se(i, "size").value, width: l.value, height: a.value };
    },
    htmlBuilder(e, t) {
        var n = D.makeSpan(["mord", "rule"], [], t),
            r = Le(e.width, t),
            i = Le(e.height, t),
            l = e.shift ? Le(e.shift, t) : 0;
        return (
            (n.style.borderRightWidth = V(r)),
            (n.style.borderTopWidth = V(i)),
            (n.style.bottom = V(l)),
            (n.width = r),
            (n.height = i + l),
            (n.depth = -l),
            (n.maxFontSize = i * 1.125 * t.sizeMultiplier),
            n
        );
    },
    mathmlBuilder(e, t) {
        var n = Le(e.width, t),
            r = Le(e.height, t),
            i = e.shift ? Le(e.shift, t) : 0,
            l = (t.color && t.getColor()) || "black",
            a = new O.MathNode("mspace");
        a.setAttribute("mathbackground", l), a.setAttribute("width", V(n)), a.setAttribute("height", V(r));
        var o = new O.MathNode("mpadded", [a]);
        return i >= 0 ? o.setAttribute("height", V(i)) : (o.setAttribute("height", V(i)), o.setAttribute("depth", V(-i))), o.setAttribute("voffset", V(i)), o;
    },
});
function np(e, t, n) {
    for (var r = Ye(e, t, !1), i = t.sizeMultiplier / n.sizeMultiplier, l = 0; l < r.length; l++) {
        var a = r[l].classes.indexOf("sizing");
        a < 0
            ? Array.prototype.push.apply(r[l].classes, t.sizingClasses(n))
            : r[l].classes[a + 1] === "reset-size" + t.size && (r[l].classes[a + 1] = "reset-size" + n.size),
            (r[l].height *= i),
            (r[l].depth *= i);
    }
    return D.makeFragment(r);
}
var Vh = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
    U9 = (e, t) => {
        var n = t.havingSize(e.size);
        return np(e.body, n, t);
    };
G({
    type: "sizing",
    names: Vh,
    props: { numArgs: 0, allowedInText: !0 },
    handler: (e, t) => {
        var { breakOnTokenText: n, funcName: r, parser: i } = e,
            l = i.parseExpression(!1, n);
        return { type: "sizing", mode: i.mode, size: Vh.indexOf(r) + 1, body: l };
    },
    htmlBuilder: U9,
    mathmlBuilder: (e, t) => {
        var n = t.havingSize(e.size),
            r = bt(e.body, n),
            i = new O.MathNode("mstyle", r);
        return i.setAttribute("mathsize", V(n.sizeMultiplier)), i;
    },
});
G({
    type: "smash",
    names: ["\\smash"],
    props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
    handler: (e, t, n) => {
        var { parser: r } = e,
            i = !1,
            l = !1,
            a = n[0] && se(n[0], "ordgroup");
        if (a)
            for (var o = "", u = 0; u < a.body.length; ++u) {
                var s = a.body[u];
                if (((o = s.text), o === "t")) i = !0;
                else if (o === "b") l = !0;
                else {
                    (i = !1), (l = !1);
                    break;
                }
            }
        else (i = !0), (l = !0);
        var h = t[0];
        return { type: "smash", mode: r.mode, body: h, smashHeight: i, smashDepth: l };
    },
    htmlBuilder: (e, t) => {
        var n = D.makeSpan([], [me(e.body, t)]);
        if (!e.smashHeight && !e.smashDepth) return n;
        if (e.smashHeight && ((n.height = 0), n.children)) for (var r = 0; r < n.children.length; r++) n.children[r].height = 0;
        if (e.smashDepth && ((n.depth = 0), n.children)) for (var i = 0; i < n.children.length; i++) n.children[i].depth = 0;
        var l = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: n }] }, t);
        return D.makeSpan(["mord"], [l], t);
    },
    mathmlBuilder: (e, t) => {
        var n = new O.MathNode("mpadded", [Ce(e.body, t)]);
        return e.smashHeight && n.setAttribute("height", "0px"), e.smashDepth && n.setAttribute("depth", "0px"), n;
    },
});
G({
    type: "sqrt",
    names: ["\\sqrt"],
    props: { numArgs: 1, numOptionalArgs: 1 },
    handler(e, t, n) {
        var { parser: r } = e,
            i = n[0],
            l = t[0];
        return { type: "sqrt", mode: r.mode, body: l, index: i };
    },
    htmlBuilder(e, t) {
        var n = me(e.body, t.havingCrampedStyle());
        n.height === 0 && (n.height = t.fontMetrics().xHeight), (n = D.wrapFragment(n, t));
        var r = t.fontMetrics(),
            i = r.defaultRuleThickness,
            l = i;
        t.style.id < te.TEXT.id && (l = t.fontMetrics().xHeight);
        var a = i + l / 4,
            o = n.height + n.depth + a + i,
            { span: u, ruleWidth: s, advanceWidth: h } = Dn.sqrtImage(o, t),
            d = u.height - s;
        d > n.height + n.depth + a && (a = (a + d - n.height - n.depth) / 2);
        var p = u.height - n.height - a - s;
        n.style.paddingLeft = V(h);
        var m = D.makeVList(
            {
                positionType: "firstBaseline",
                children: [
                    { type: "elem", elem: n, wrapperClasses: ["svg-align"] },
                    { type: "kern", size: -(n.height + p) },
                    { type: "elem", elem: u },
                    { type: "kern", size: s },
                ],
            },
            t,
        );
        if (e.index) {
            var S = t.havingStyle(te.SCRIPTSCRIPT),
                w = me(e.index, S, t),
                N = 0.6 * (m.height - m.depth),
                y = D.makeVList({ positionType: "shift", positionData: -N, children: [{ type: "elem", elem: w }] }, t),
                x = D.makeSpan(["root"], [y]);
            return D.makeSpan(["mord", "sqrt"], [x, m], t);
        } else return D.makeSpan(["mord", "sqrt"], [m], t);
    },
    mathmlBuilder(e, t) {
        var { body: n, index: r } = e;
        return r ? new O.MathNode("mroot", [Ce(n, t), Ce(r, t)]) : new O.MathNode("msqrt", [Ce(n, t)]);
    },
});
var Wh = { display: te.DISPLAY, text: te.TEXT, script: te.SCRIPT, scriptscript: te.SCRIPTSCRIPT };
G({
    type: "styling",
    names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
    props: { numArgs: 0, allowedInText: !0, primitive: !0 },
    handler(e, t) {
        var { breakOnTokenText: n, funcName: r, parser: i } = e,
            l = i.parseExpression(!0, n),
            a = r.slice(1, r.length - 5);
        return { type: "styling", mode: i.mode, style: a, body: l };
    },
    htmlBuilder(e, t) {
        var n = Wh[e.style],
            r = t.havingStyle(n).withFont("");
        return np(e.body, r, t);
    },
    mathmlBuilder(e, t) {
        var n = Wh[e.style],
            r = t.havingStyle(n),
            i = bt(e.body, r),
            l = new O.MathNode("mstyle", i),
            a = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] },
            o = a[e.style];
        return l.setAttribute("scriptlevel", o[0]), l.setAttribute("displaystyle", o[1]), l;
    },
});
var $9 = function (t, n) {
    var r = t.base;
    if (r)
        if (r.type === "op") {
            var i = r.limits && (n.style.size === te.DISPLAY.size || r.alwaysHandleSupSub);
            return i ? C0 : null;
        } else if (r.type === "operatorname") {
            var l = r.alwaysHandleSupSub && (n.style.size === te.DISPLAY.size || r.limits);
            return l ? tp : null;
        } else {
            if (r.type === "accent") return J.isCharacterBox(r.base) ? s1 : null;
            if (r.type === "horizBrace") {
                var a = !t.sub;
                return a === r.isOver ? Zm : null;
            } else return null;
        }
    else return null;
};
Br({
    type: "supsub",
    htmlBuilder(e, t) {
        var n = $9(e, t);
        if (n) return n(e, t);
        var { base: r, sup: i, sub: l } = e,
            a = me(r, t),
            o,
            u,
            s = t.fontMetrics(),
            h = 0,
            d = 0,
            p = r && J.isCharacterBox(r);
        if (i) {
            var m = t.havingStyle(t.style.sup());
            (o = me(i, m, t)), p || (h = a.height - (m.fontMetrics().supDrop * m.sizeMultiplier) / t.sizeMultiplier);
        }
        if (l) {
            var S = t.havingStyle(t.style.sub());
            (u = me(l, S, t)), p || (d = a.depth + (S.fontMetrics().subDrop * S.sizeMultiplier) / t.sizeMultiplier);
        }
        var w;
        t.style === te.DISPLAY ? (w = s.sup1) : t.style.cramped ? (w = s.sup3) : (w = s.sup2);
        var N = t.sizeMultiplier,
            y = V(0.5 / s.ptPerEm / N),
            x = null;
        if (u) {
            var k = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
            (a instanceof jt || k) && (x = V(-a.italic));
        }
        var A;
        if (o && u) {
            (h = Math.max(h, w, o.depth + 0.25 * s.xHeight)), (d = Math.max(d, s.sub2));
            var P = s.defaultRuleThickness,
                T = 4 * P;
            if (h - o.depth - (u.height - d) < T) {
                d = T - (h - o.depth) + u.height;
                var F = 0.8 * s.xHeight - (h - o.depth);
                F > 0 && ((h += F), (d -= F));
            }
            var L = [
                { type: "elem", elem: u, shift: d, marginRight: y, marginLeft: x },
                { type: "elem", elem: o, shift: -h, marginRight: y },
            ];
            A = D.makeVList({ positionType: "individualShift", children: L }, t);
        } else if (u) {
            d = Math.max(d, s.sub1, u.height - 0.8 * s.xHeight);
            var R = [{ type: "elem", elem: u, marginLeft: x, marginRight: y }];
            A = D.makeVList({ positionType: "shift", positionData: d, children: R }, t);
        } else if (o)
            (h = Math.max(h, w, o.depth + 0.25 * s.xHeight)),
                (A = D.makeVList({ positionType: "shift", positionData: -h, children: [{ type: "elem", elem: o, marginRight: y }] }, t));
        else throw new Error("supsub must have either sup or sub.");
        var Q = _u(a, "right") || "mord";
        return D.makeSpan([Q], [a, D.makeSpan(["msupsub"], [A])], t);
    },
    mathmlBuilder(e, t) {
        var n = !1,
            r,
            i;
        e.base && e.base.type === "horizBrace" && ((i = !!e.sup), i === e.base.isOver && ((n = !0), (r = e.base.isOver))),
            e.base && (e.base.type === "op" || e.base.type === "operatorname") && (e.base.parentIsSupSub = !0);
        var l = [Ce(e.base, t)];
        e.sub && l.push(Ce(e.sub, t)), e.sup && l.push(Ce(e.sup, t));
        var a;
        if (n) a = r ? "mover" : "munder";
        else if (e.sub)
            if (e.sup) {
                var s = e.base;
                (s && s.type === "op" && s.limits && t.style === te.DISPLAY) ||
                (s && s.type === "operatorname" && s.alwaysHandleSupSub && (t.style === te.DISPLAY || s.limits))
                    ? (a = "munderover")
                    : (a = "msubsup");
            } else {
                var u = e.base;
                (u && u.type === "op" && u.limits && (t.style === te.DISPLAY || u.alwaysHandleSupSub)) ||
                (u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || t.style === te.DISPLAY))
                    ? (a = "munder")
                    : (a = "msub");
            }
        else {
            var o = e.base;
            (o && o.type === "op" && o.limits && (t.style === te.DISPLAY || o.alwaysHandleSupSub)) ||
            (o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || t.style === te.DISPLAY))
                ? (a = "mover")
                : (a = "msup");
        }
        return new O.MathNode(a, l);
    },
});
Br({
    type: "atom",
    htmlBuilder(e, t) {
        return D.mathsym(e.text, e.mode, t, ["m" + e.family]);
    },
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mo", [Vt(e.text, e.mode)]);
        if (e.family === "bin") {
            var r = o1(e, t);
            r === "bold-italic" && n.setAttribute("mathvariant", r);
        } else
            e.family === "punct" ? n.setAttribute("separator", "true") : (e.family === "open" || e.family === "close") && n.setAttribute("stretchy", "false");
        return n;
    },
});
var rp = { mi: "italic", mn: "normal", mtext: "normal" };
Br({
    type: "mathord",
    htmlBuilder(e, t) {
        return D.makeOrd(e, t, "mathord");
    },
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mi", [Vt(e.text, e.mode, t)]),
            r = o1(e, t) || "italic";
        return r !== rp[n.type] && n.setAttribute("mathvariant", r), n;
    },
});
Br({
    type: "textord",
    htmlBuilder(e, t) {
        return D.makeOrd(e, t, "textord");
    },
    mathmlBuilder(e, t) {
        var n = Vt(e.text, e.mode, t),
            r = o1(e, t) || "normal",
            i;
        return (
            e.mode === "text"
                ? (i = new O.MathNode("mtext", [n]))
                : /[0-9]/.test(e.text)
                  ? (i = new O.MathNode("mn", [n]))
                  : e.text === "\\prime"
                    ? (i = new O.MathNode("mo", [n]))
                    : (i = new O.MathNode("mi", [n])),
            r !== rp[i.type] && i.setAttribute("mathvariant", r),
            i
        );
    },
});
var Fo = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" },
    Po = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
Br({
    type: "spacing",
    htmlBuilder(e, t) {
        if (Po.hasOwnProperty(e.text)) {
            var n = Po[e.text].className || "";
            if (e.mode === "text") {
                var r = D.makeOrd(e, t, "textord");
                return r.classes.push(n), r;
            } else return D.makeSpan(["mspace", n], [D.mathsym(e.text, e.mode, t)], t);
        } else {
            if (Fo.hasOwnProperty(e.text)) return D.makeSpan(["mspace", Fo[e.text]], [], t);
            throw new H('Unknown type of space "' + e.text + '"');
        }
    },
    mathmlBuilder(e, t) {
        var n;
        if (Po.hasOwnProperty(e.text)) n = new O.MathNode("mtext", [new O.TextNode(" ")]);
        else {
            if (Fo.hasOwnProperty(e.text)) return new O.MathNode("mspace");
            throw new H('Unknown type of space "' + e.text + '"');
        }
        return n;
    },
});
var Gh = () => {
    var e = new O.MathNode("mtd", []);
    return e.setAttribute("width", "50%"), e;
};
Br({
    type: "tag",
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mtable", [new O.MathNode("mtr", [Gh(), new O.MathNode("mtd", [hr(e.body, t)]), Gh(), new O.MathNode("mtd", [hr(e.tag, t)])])]);
        return n.setAttribute("width", "100%"), n;
    },
});
var Yh = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" },
    Xh = { "\\textbf": "textbf", "\\textmd": "textmd" },
    j9 = { "\\textit": "textit", "\\textup": "textup" },
    Qh = (e, t) => {
        var n = e.font;
        if (n) {
            if (Yh[n]) return t.withTextFontFamily(Yh[n]);
            if (Xh[n]) return t.withTextFontWeight(Xh[n]);
            if (n === "\\emph") return t.fontShape === "textit" ? t.withTextFontShape("textup") : t.withTextFontShape("textit");
        } else return t;
        return t.withTextFontShape(j9[n]);
    };
G({
    type: "text",
    names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"],
    props: { numArgs: 1, argTypes: ["text"], allowedInArgument: !0, allowedInText: !0 },
    handler(e, t) {
        var { parser: n, funcName: r } = e,
            i = t[0];
        return { type: "text", mode: n.mode, body: Ue(i), font: r };
    },
    htmlBuilder(e, t) {
        var n = Qh(e, t),
            r = Ye(e.body, n, !0);
        return D.makeSpan(["mord", "text"], r, n);
    },
    mathmlBuilder(e, t) {
        var n = Qh(e, t);
        return hr(e.body, n);
    },
});
G({
    type: "underline",
    names: ["\\underline"],
    props: { numArgs: 1, allowedInText: !0 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "underline", mode: n.mode, body: t[0] };
    },
    htmlBuilder(e, t) {
        var n = me(e.body, t),
            r = D.makeLineSpan("underline-line", t),
            i = t.fontMetrics().defaultRuleThickness,
            l = D.makeVList(
                {
                    positionType: "top",
                    positionData: n.height,
                    children: [
                        { type: "kern", size: i },
                        { type: "elem", elem: r },
                        { type: "kern", size: 3 * i },
                        { type: "elem", elem: n },
                    ],
                },
                t,
            );
        return D.makeSpan(["mord", "underline"], [l], t);
    },
    mathmlBuilder(e, t) {
        var n = new O.MathNode("mo", [new O.TextNode("‾")]);
        n.setAttribute("stretchy", "true");
        var r = new O.MathNode("munder", [Ce(e.body, t), n]);
        return r.setAttribute("accentunder", "true"), r;
    },
});
G({
    type: "vcenter",
    names: ["\\vcenter"],
    props: { numArgs: 1, argTypes: ["original"], allowedInText: !1 },
    handler(e, t) {
        var { parser: n } = e;
        return { type: "vcenter", mode: n.mode, body: t[0] };
    },
    htmlBuilder(e, t) {
        var n = me(e.body, t),
            r = t.fontMetrics().axisHeight,
            i = 0.5 * (n.height - r - (n.depth + r));
        return D.makeVList({ positionType: "shift", positionData: i, children: [{ type: "elem", elem: n }] }, t);
    },
    mathmlBuilder(e, t) {
        return new O.MathNode("mpadded", [Ce(e.body, t)], ["vcenter"]);
    },
});
G({
    type: "verb",
    names: ["\\verb"],
    props: { numArgs: 0, allowedInText: !0 },
    handler(e, t, n) {
        throw new H("\\verb ended by end of line instead of matching delimiter");
    },
    htmlBuilder(e, t) {
        for (var n = Kh(e), r = [], i = t.havingStyle(t.style.text()), l = 0; l < n.length; l++) {
            var a = n[l];
            a === "~" && (a = "\\textasciitilde"), r.push(D.makeSymbol(a, "Typewriter-Regular", e.mode, i, ["mord", "texttt"]));
        }
        return D.makeSpan(["mord", "text"].concat(i.sizingClasses(t)), D.tryCombineChars(r), i);
    },
    mathmlBuilder(e, t) {
        var n = new O.TextNode(Kh(e)),
            r = new O.MathNode("mtext", [n]);
        return r.setAttribute("mathvariant", "monospace"), r;
    },
});
var Kh = e => e.body.replace(/ /g, e.star ? "␣" : " "),
    Zn = Tm,
    ip = `[ \r
	]`,
    V9 = "\\\\[a-zA-Z@]+",
    W9 = "\\\\[^\uD800-\uDFFF]",
    G9 = "(" + V9 + ")" + ip + "*",
    Y9 = `\\\\(
|[ \r	]+
?)[ \r	]*`,
    Vu = "[̀-ͯ]",
    X9 = new RegExp(Vu + "+$"),
    Q9 =
        "(" +
        ip +
        "+)|" +
        (Y9 + "|") +
        "([!-\\[\\]-‧‪-퟿豈-￿]" +
        (Vu + "*") +
        "|[\uD800-\uDBFF][\uDC00-\uDFFF]" +
        (Vu + "*") +
        "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" +
        ("|" + G9) +
        ("|" + W9 + ")");
class Zh {
    constructor(t, n) {
        (this.input = void 0),
            (this.settings = void 0),
            (this.tokenRegex = void 0),
            (this.catcodes = void 0),
            (this.input = t),
            (this.settings = n),
            (this.tokenRegex = new RegExp(Q9, "g")),
            (this.catcodes = { "%": 14, "~": 13 });
    }
    setCatcode(t, n) {
        this.catcodes[t] = n;
    }
    lex() {
        var t = this.input,
            n = this.tokenRegex.lastIndex;
        if (n === t.length) return new _t("EOF", new Tt(this, n, n));
        var r = this.tokenRegex.exec(t);
        if (r === null || r.index !== n) throw new H("Unexpected character: '" + t[n] + "'", new _t(t[n], new Tt(this, n, n + 1)));
        var i = r[6] || r[3] || (r[2] ? "\\ " : " ");
        if (this.catcodes[i] === 14) {
            var l = t.indexOf(
                `
`,
                this.tokenRegex.lastIndex,
            );
            return (
                l === -1
                    ? ((this.tokenRegex.lastIndex = t.length),
                      this.settings.reportNonstrict(
                          "commentAtEnd",
                          "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)",
                      ))
                    : (this.tokenRegex.lastIndex = l + 1),
                this.lex()
            );
        }
        return new _t(i, new Tt(this, n, this.tokenRegex.lastIndex));
    }
}
class K9 {
    constructor(t, n) {
        t === void 0 && (t = {}),
            n === void 0 && (n = {}),
            (this.current = void 0),
            (this.builtins = void 0),
            (this.undefStack = void 0),
            (this.current = n),
            (this.builtins = t),
            (this.undefStack = []);
    }
    beginGroup() {
        this.undefStack.push({});
    }
    endGroup() {
        if (this.undefStack.length === 0) throw new H("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
        var t = this.undefStack.pop();
        for (var n in t) t.hasOwnProperty(n) && (t[n] == null ? delete this.current[n] : (this.current[n] = t[n]));
    }
    endGroups() {
        for (; this.undefStack.length > 0; ) this.endGroup();
    }
    has(t) {
        return this.current.hasOwnProperty(t) || this.builtins.hasOwnProperty(t);
    }
    get(t) {
        return this.current.hasOwnProperty(t) ? this.current[t] : this.builtins[t];
    }
    set(t, n, r) {
        if ((r === void 0 && (r = !1), r)) {
            for (var i = 0; i < this.undefStack.length; i++) delete this.undefStack[i][t];
            this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][t] = n);
        } else {
            var l = this.undefStack[this.undefStack.length - 1];
            l && !l.hasOwnProperty(t) && (l[t] = this.current[t]);
        }
        n == null ? delete this.current[t] : (this.current[t] = n);
    }
}
var Z9 = Gm;
v("\\noexpand", function (e) {
    var t = e.popToken();
    return e.isExpandable(t.text) && ((t.noexpand = !0), (t.treatAsRelax = !0)), { tokens: [t], numArgs: 0 };
});
v("\\expandafter", function (e) {
    var t = e.popToken();
    return e.expandOnce(!0), { tokens: [t], numArgs: 0 };
});
v("\\@firstoftwo", function (e) {
    var t = e.consumeArgs(2);
    return { tokens: t[0], numArgs: 0 };
});
v("\\@secondoftwo", function (e) {
    var t = e.consumeArgs(2);
    return { tokens: t[1], numArgs: 0 };
});
v("\\@ifnextchar", function (e) {
    var t = e.consumeArgs(3);
    e.consumeSpaces();
    var n = e.future();
    return t[0].length === 1 && t[0][0].text === n.text ? { tokens: t[1], numArgs: 0 } : { tokens: t[2], numArgs: 0 };
});
v("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
v("\\TextOrMath", function (e) {
    var t = e.consumeArgs(2);
    return e.mode === "text" ? { tokens: t[0], numArgs: 0 } : { tokens: t[1], numArgs: 0 };
});
var Jh = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
v("\\char", function (e) {
    var t = e.popToken(),
        n,
        r = "";
    if (t.text === "'") (n = 8), (t = e.popToken());
    else if (t.text === '"') (n = 16), (t = e.popToken());
    else if (t.text === "`")
        if (((t = e.popToken()), t.text[0] === "\\")) r = t.text.charCodeAt(1);
        else {
            if (t.text === "EOF") throw new H("\\char` missing argument");
            r = t.text.charCodeAt(0);
        }
    else n = 10;
    if (n) {
        if (((r = Jh[t.text]), r == null || r >= n)) throw new H("Invalid base-" + n + " digit " + t.text);
        for (var i; (i = Jh[e.future().text]) != null && i < n; ) (r *= n), (r += i), e.popToken();
    }
    return "\\@char{" + r + "}";
});
var v1 = (e, t, n, r) => {
    var i = e.consumeArg().tokens;
    if (i.length !== 1) throw new H("\\newcommand's first argument must be a macro name");
    var l = i[0].text,
        a = e.isDefined(l);
    if (a && !t) throw new H("\\newcommand{" + l + "} attempting to redefine " + (l + "; use \\renewcommand"));
    if (!a && !n) throw new H("\\renewcommand{" + l + "} when command " + l + " does not yet exist; use \\newcommand");
    var o = 0;
    if (((i = e.consumeArg().tokens), i.length === 1 && i[0].text === "[")) {
        for (var u = "", s = e.expandNextToken(); s.text !== "]" && s.text !== "EOF"; ) (u += s.text), (s = e.expandNextToken());
        if (!u.match(/^\s*[0-9]+\s*$/)) throw new H("Invalid number of arguments: " + u);
        (o = parseInt(u)), (i = e.consumeArg().tokens);
    }
    return (a && r) || e.macros.set(l, { tokens: i, numArgs: o }), "";
};
v("\\newcommand", e => v1(e, !1, !0, !1));
v("\\renewcommand", e => v1(e, !0, !1, !1));
v("\\providecommand", e => v1(e, !0, !0, !0));
v("\\message", e => {
    var t = e.consumeArgs(1)[0];
    return (
        console.log(
            t
                .reverse()
                .map(n => n.text)
                .join(""),
        ),
        ""
    );
});
v("\\errmessage", e => {
    var t = e.consumeArgs(1)[0];
    return (
        console.error(
            t
                .reverse()
                .map(n => n.text)
                .join(""),
        ),
        ""
    );
});
v("\\show", e => {
    var t = e.popToken(),
        n = t.text;
    return console.log(t, e.macros.get(n), Zn[n], Ee.math[n], Ee.text[n]), "";
});
v("\\bgroup", "{");
v("\\egroup", "}");
v("~", "\\nobreakspace");
v("\\lq", "`");
v("\\rq", "'");
v("\\aa", "\\r a");
v("\\AA", "\\r A");
v("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
v("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
v("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
v("ℬ", "\\mathscr{B}");
v("ℰ", "\\mathscr{E}");
v("ℱ", "\\mathscr{F}");
v("ℋ", "\\mathscr{H}");
v("ℐ", "\\mathscr{I}");
v("ℒ", "\\mathscr{L}");
v("ℳ", "\\mathscr{M}");
v("ℛ", "\\mathscr{R}");
v("ℭ", "\\mathfrak{C}");
v("ℌ", "\\mathfrak{H}");
v("ℨ", "\\mathfrak{Z}");
v("\\Bbbk", "\\Bbb{k}");
v("·", "\\cdotp");
v("\\llap", "\\mathllap{\\textrm{#1}}");
v("\\rlap", "\\mathrlap{\\textrm{#1}}");
v("\\clap", "\\mathclap{\\textrm{#1}}");
v("\\mathstrut", "\\vphantom{(}");
v("\\underbar", "\\underline{\\text{#1}}");
v("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
v("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
v("\\ne", "\\neq");
v("≠", "\\neq");
v("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
v("∉", "\\notin");
v("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
v("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
v("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
v("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
v("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
v("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
v("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
v("⟂", "\\perp");
v("‼", "\\mathclose{!\\mkern-0.8mu!}");
v("∌", "\\notni");
v("⌜", "\\ulcorner");
v("⌝", "\\urcorner");
v("⌞", "\\llcorner");
v("⌟", "\\lrcorner");
v("©", "\\copyright");
v("®", "\\textregistered");
v("️", "\\textregistered");
v("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
v("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
v("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
v("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
v("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
v("⋮", "\\vdots");
v("\\varGamma", "\\mathit{\\Gamma}");
v("\\varDelta", "\\mathit{\\Delta}");
v("\\varTheta", "\\mathit{\\Theta}");
v("\\varLambda", "\\mathit{\\Lambda}");
v("\\varXi", "\\mathit{\\Xi}");
v("\\varPi", "\\mathit{\\Pi}");
v("\\varSigma", "\\mathit{\\Sigma}");
v("\\varUpsilon", "\\mathit{\\Upsilon}");
v("\\varPhi", "\\mathit{\\Phi}");
v("\\varPsi", "\\mathit{\\Psi}");
v("\\varOmega", "\\mathit{\\Omega}");
v("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
v("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
v("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
v("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
v("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
v("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
v("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
v("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var ef = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx",
};
v("\\dots", function (e) {
    var t = "\\dotso",
        n = e.expandAfterFuture().text;
    return n in ef ? (t = ef[n]) : (n.slice(0, 4) === "\\not" || (n in Ee.math && J.contains(["bin", "rel"], Ee.math[n].group))) && (t = "\\dotsb"), t;
});
var y1 = {
    ")": !0,
    "]": !0,
    "\\rbrack": !0,
    "\\}": !0,
    "\\rbrace": !0,
    "\\rangle": !0,
    "\\rceil": !0,
    "\\rfloor": !0,
    "\\rgroup": !0,
    "\\rmoustache": !0,
    "\\right": !0,
    "\\bigr": !0,
    "\\biggr": !0,
    "\\Bigr": !0,
    "\\Biggr": !0,
    $: !0,
    ";": !0,
    ".": !0,
    ",": !0,
};
v("\\dotso", function (e) {
    var t = e.future().text;
    return t in y1 ? "\\ldots\\," : "\\ldots";
});
v("\\dotsc", function (e) {
    var t = e.future().text;
    return t in y1 && t !== "," ? "\\ldots\\," : "\\ldots";
});
v("\\cdots", function (e) {
    var t = e.future().text;
    return t in y1 ? "\\@cdots\\," : "\\@cdots";
});
v("\\dotsb", "\\cdots");
v("\\dotsm", "\\cdots");
v("\\dotsi", "\\!\\cdots");
v("\\dotsx", "\\ldots\\,");
v("\\DOTSI", "\\relax");
v("\\DOTSB", "\\relax");
v("\\DOTSX", "\\relax");
v("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
v("\\,", "\\tmspace+{3mu}{.1667em}");
v("\\thinspace", "\\,");
v("\\>", "\\mskip{4mu}");
v("\\:", "\\tmspace+{4mu}{.2222em}");
v("\\medspace", "\\:");
v("\\;", "\\tmspace+{5mu}{.2777em}");
v("\\thickspace", "\\;");
v("\\!", "\\tmspace-{3mu}{.1667em}");
v("\\negthinspace", "\\!");
v("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
v("\\negthickspace", "\\tmspace-{5mu}{.277em}");
v("\\enspace", "\\kern.5em ");
v("\\enskip", "\\hskip.5em\\relax");
v("\\quad", "\\hskip1em\\relax");
v("\\qquad", "\\hskip2em\\relax");
v("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
v("\\tag@paren", "\\tag@literal{({#1})}");
v("\\tag@literal", e => {
    if (e.macros.get("\\df@tag")) throw new H("Multiple \\tag");
    return "\\gdef\\df@tag{\\text{#1}}";
});
v("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
v("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
v("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
v("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
v("\\newline", "\\\\\\relax");
v("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var lp = V(dn["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * dn["Main-Regular"]["A".charCodeAt(0)][1]);
v("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + lp + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
v("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + lp + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
v("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
v("\\@hspace", "\\hskip #1\\relax");
v("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
v("\\ordinarycolon", ":");
v("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
v("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
v("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
v("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
v("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
v("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
v("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
v("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
v("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
v("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
v("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
v("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
v("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
v("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
v("∷", "\\dblcolon");
v("∹", "\\eqcolon");
v("≔", "\\coloneqq");
v("≕", "\\eqqcolon");
v("⩴", "\\Coloneqq");
v("\\ratio", "\\vcentcolon");
v("\\coloncolon", "\\dblcolon");
v("\\colonequals", "\\coloneqq");
v("\\coloncolonequals", "\\Coloneqq");
v("\\equalscolon", "\\eqqcolon");
v("\\equalscoloncolon", "\\Eqqcolon");
v("\\colonminus", "\\coloneq");
v("\\coloncolonminus", "\\Coloneq");
v("\\minuscolon", "\\eqcolon");
v("\\minuscoloncolon", "\\Eqcolon");
v("\\coloncolonapprox", "\\Colonapprox");
v("\\coloncolonsim", "\\Colonsim");
v("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
v("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
v("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
v("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
v("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
v("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
v("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
v("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
v("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
v("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
v("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
v("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
v("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
v("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
v("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
v("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
v("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
v("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
v("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
v("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
v("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
v("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
v("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
v("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
v("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
v("\\imath", "\\html@mathml{\\@imath}{ı}");
v("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
v("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
v("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
v("⟦", "\\llbracket");
v("⟧", "\\rrbracket");
v("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
v("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
v("⦃", "\\lBrace");
v("⦄", "\\rBrace");
v("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
v("⦵", "\\minuso");
v("\\darr", "\\downarrow");
v("\\dArr", "\\Downarrow");
v("\\Darr", "\\Downarrow");
v("\\lang", "\\langle");
v("\\rang", "\\rangle");
v("\\uarr", "\\uparrow");
v("\\uArr", "\\Uparrow");
v("\\Uarr", "\\Uparrow");
v("\\N", "\\mathbb{N}");
v("\\R", "\\mathbb{R}");
v("\\Z", "\\mathbb{Z}");
v("\\alef", "\\aleph");
v("\\alefsym", "\\aleph");
v("\\Alpha", "\\mathrm{A}");
v("\\Beta", "\\mathrm{B}");
v("\\bull", "\\bullet");
v("\\Chi", "\\mathrm{X}");
v("\\clubs", "\\clubsuit");
v("\\cnums", "\\mathbb{C}");
v("\\Complex", "\\mathbb{C}");
v("\\Dagger", "\\ddagger");
v("\\diamonds", "\\diamondsuit");
v("\\empty", "\\emptyset");
v("\\Epsilon", "\\mathrm{E}");
v("\\Eta", "\\mathrm{H}");
v("\\exist", "\\exists");
v("\\harr", "\\leftrightarrow");
v("\\hArr", "\\Leftrightarrow");
v("\\Harr", "\\Leftrightarrow");
v("\\hearts", "\\heartsuit");
v("\\image", "\\Im");
v("\\infin", "\\infty");
v("\\Iota", "\\mathrm{I}");
v("\\isin", "\\in");
v("\\Kappa", "\\mathrm{K}");
v("\\larr", "\\leftarrow");
v("\\lArr", "\\Leftarrow");
v("\\Larr", "\\Leftarrow");
v("\\lrarr", "\\leftrightarrow");
v("\\lrArr", "\\Leftrightarrow");
v("\\Lrarr", "\\Leftrightarrow");
v("\\Mu", "\\mathrm{M}");
v("\\natnums", "\\mathbb{N}");
v("\\Nu", "\\mathrm{N}");
v("\\Omicron", "\\mathrm{O}");
v("\\plusmn", "\\pm");
v("\\rarr", "\\rightarrow");
v("\\rArr", "\\Rightarrow");
v("\\Rarr", "\\Rightarrow");
v("\\real", "\\Re");
v("\\reals", "\\mathbb{R}");
v("\\Reals", "\\mathbb{R}");
v("\\Rho", "\\mathrm{P}");
v("\\sdot", "\\cdot");
v("\\sect", "\\S");
v("\\spades", "\\spadesuit");
v("\\sub", "\\subset");
v("\\sube", "\\subseteq");
v("\\supe", "\\supseteq");
v("\\Tau", "\\mathrm{T}");
v("\\thetasym", "\\vartheta");
v("\\weierp", "\\wp");
v("\\Zeta", "\\mathrm{Z}");
v("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
v("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
v("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
v("\\bra", "\\mathinner{\\langle{#1}|}");
v("\\ket", "\\mathinner{|{#1}\\rangle}");
v("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
v("\\Bra", "\\left\\langle#1\\right|");
v("\\Ket", "\\left|#1\\right\\rangle");
var ap = e => t => {
    var n = t.consumeArg().tokens,
        r = t.consumeArg().tokens,
        i = t.consumeArg().tokens,
        l = t.consumeArg().tokens,
        a = t.macros.get("|"),
        o = t.macros.get("\\|");
    t.macros.beginGroup();
    var u = d => p => {
        e && (p.macros.set("|", a), i.length && p.macros.set("\\|", o));
        var m = d;
        if (!d && i.length) {
            var S = p.future();
            S.text === "|" && (p.popToken(), (m = !0));
        }
        return { tokens: m ? i : r, numArgs: 0 };
    };
    t.macros.set("|", u(!1)), i.length && t.macros.set("\\|", u(!0));
    var s = t.consumeArg().tokens,
        h = t.expandTokens([...l, ...s, ...n]);
    return t.macros.endGroup(), { tokens: h.reverse(), numArgs: 0 };
};
v("\\bra@ket", ap(!1));
v("\\bra@set", ap(!0));
v("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
v("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
v("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
v("\\angln", "{\\angl n}");
v("\\blue", "\\textcolor{##6495ed}{#1}");
v("\\orange", "\\textcolor{##ffa500}{#1}");
v("\\pink", "\\textcolor{##ff00af}{#1}");
v("\\red", "\\textcolor{##df0030}{#1}");
v("\\green", "\\textcolor{##28ae7b}{#1}");
v("\\gray", "\\textcolor{gray}{#1}");
v("\\purple", "\\textcolor{##9d38bd}{#1}");
v("\\blueA", "\\textcolor{##ccfaff}{#1}");
v("\\blueB", "\\textcolor{##80f6ff}{#1}");
v("\\blueC", "\\textcolor{##63d9ea}{#1}");
v("\\blueD", "\\textcolor{##11accd}{#1}");
v("\\blueE", "\\textcolor{##0c7f99}{#1}");
v("\\tealA", "\\textcolor{##94fff5}{#1}");
v("\\tealB", "\\textcolor{##26edd5}{#1}");
v("\\tealC", "\\textcolor{##01d1c1}{#1}");
v("\\tealD", "\\textcolor{##01a995}{#1}");
v("\\tealE", "\\textcolor{##208170}{#1}");
v("\\greenA", "\\textcolor{##b6ffb0}{#1}");
v("\\greenB", "\\textcolor{##8af281}{#1}");
v("\\greenC", "\\textcolor{##74cf70}{#1}");
v("\\greenD", "\\textcolor{##1fab54}{#1}");
v("\\greenE", "\\textcolor{##0d923f}{#1}");
v("\\goldA", "\\textcolor{##ffd0a9}{#1}");
v("\\goldB", "\\textcolor{##ffbb71}{#1}");
v("\\goldC", "\\textcolor{##ff9c39}{#1}");
v("\\goldD", "\\textcolor{##e07d10}{#1}");
v("\\goldE", "\\textcolor{##a75a05}{#1}");
v("\\redA", "\\textcolor{##fca9a9}{#1}");
v("\\redB", "\\textcolor{##ff8482}{#1}");
v("\\redC", "\\textcolor{##f9685d}{#1}");
v("\\redD", "\\textcolor{##e84d39}{#1}");
v("\\redE", "\\textcolor{##bc2612}{#1}");
v("\\maroonA", "\\textcolor{##ffbde0}{#1}");
v("\\maroonB", "\\textcolor{##ff92c6}{#1}");
v("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
v("\\maroonD", "\\textcolor{##ca337c}{#1}");
v("\\maroonE", "\\textcolor{##9e034e}{#1}");
v("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
v("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
v("\\purpleC", "\\textcolor{##aa87ff}{#1}");
v("\\purpleD", "\\textcolor{##7854ab}{#1}");
v("\\purpleE", "\\textcolor{##543b78}{#1}");
v("\\mintA", "\\textcolor{##f5f9e8}{#1}");
v("\\mintB", "\\textcolor{##edf2df}{#1}");
v("\\mintC", "\\textcolor{##e0e5cc}{#1}");
v("\\grayA", "\\textcolor{##f6f7f7}{#1}");
v("\\grayB", "\\textcolor{##f0f1f2}{#1}");
v("\\grayC", "\\textcolor{##e3e5e6}{#1}");
v("\\grayD", "\\textcolor{##d6d8da}{#1}");
v("\\grayE", "\\textcolor{##babec2}{#1}");
v("\\grayF", "\\textcolor{##888d93}{#1}");
v("\\grayG", "\\textcolor{##626569}{#1}");
v("\\grayH", "\\textcolor{##3b3e40}{#1}");
v("\\grayI", "\\textcolor{##21242c}{#1}");
v("\\kaBlue", "\\textcolor{##314453}{#1}");
v("\\kaGreen", "\\textcolor{##71B307}{#1}");
var op = { "^": !0, _: !0, "\\limits": !0, "\\nolimits": !0 };
class J9 {
    constructor(t, n, r) {
        (this.settings = void 0),
            (this.expansionCount = void 0),
            (this.lexer = void 0),
            (this.macros = void 0),
            (this.stack = void 0),
            (this.mode = void 0),
            (this.settings = n),
            (this.expansionCount = 0),
            this.feed(t),
            (this.macros = new K9(Z9, n.macros)),
            (this.mode = r),
            (this.stack = []);
    }
    feed(t) {
        this.lexer = new Zh(t, this.settings);
    }
    switchMode(t) {
        this.mode = t;
    }
    beginGroup() {
        this.macros.beginGroup();
    }
    endGroup() {
        this.macros.endGroup();
    }
    endGroups() {
        this.macros.endGroups();
    }
    future() {
        return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
    }
    popToken() {
        return this.future(), this.stack.pop();
    }
    pushToken(t) {
        this.stack.push(t);
    }
    pushTokens(t) {
        this.stack.push(...t);
    }
    scanArgument(t) {
        var n, r, i;
        if (t) {
            if ((this.consumeSpaces(), this.future().text !== "[")) return null;
            (n = this.popToken()), ({ tokens: i, end: r } = this.consumeArg(["]"]));
        } else ({ tokens: i, start: n, end: r } = this.consumeArg());
        return this.pushToken(new _t("EOF", r.loc)), this.pushTokens(i), n.range(r, "");
    }
    consumeSpaces() {
        for (;;) {
            var t = this.future();
            if (t.text === " ") this.stack.pop();
            else break;
        }
    }
    consumeArg(t) {
        var n = [],
            r = t && t.length > 0;
        r || this.consumeSpaces();
        var i = this.future(),
            l,
            a = 0,
            o = 0;
        do {
            if (((l = this.popToken()), n.push(l), l.text === "{")) ++a;
            else if (l.text === "}") {
                if ((--a, a === -1)) throw new H("Extra }", l);
            } else if (l.text === "EOF") throw new H("Unexpected end of input in a macro argument, expected '" + (t && r ? t[o] : "}") + "'", l);
            if (t && r)
                if ((a === 0 || (a === 1 && t[o] === "{")) && l.text === t[o]) {
                    if ((++o, o === t.length)) {
                        n.splice(-o, o);
                        break;
                    }
                } else o = 0;
        } while (a !== 0 || r);
        return i.text === "{" && n[n.length - 1].text === "}" && (n.pop(), n.shift()), n.reverse(), { tokens: n, start: i, end: l };
    }
    consumeArgs(t, n) {
        if (n) {
            if (n.length !== t + 1) throw new H("The length of delimiters doesn't match the number of args!");
            for (var r = n[0], i = 0; i < r.length; i++) {
                var l = this.popToken();
                if (r[i] !== l.text) throw new H("Use of the macro doesn't match its definition", l);
            }
        }
        for (var a = [], o = 0; o < t; o++) a.push(this.consumeArg(n && n[o + 1]).tokens);
        return a;
    }
    countExpansion(t) {
        if (((this.expansionCount += t), this.expansionCount > this.settings.maxExpand))
            throw new H("Too many expansions: infinite loop or need to increase maxExpand setting");
    }
    expandOnce(t) {
        var n = this.popToken(),
            r = n.text,
            i = n.noexpand ? null : this._getExpansion(r);
        if (i == null || (t && i.unexpandable)) {
            if (t && i == null && r[0] === "\\" && !this.isDefined(r)) throw new H("Undefined control sequence: " + r);
            return this.pushToken(n), !1;
        }
        this.countExpansion(1);
        var l = i.tokens,
            a = this.consumeArgs(i.numArgs, i.delimiters);
        if (i.numArgs) {
            l = l.slice();
            for (var o = l.length - 1; o >= 0; --o) {
                var u = l[o];
                if (u.text === "#") {
                    if (o === 0) throw new H("Incomplete placeholder at end of macro body", u);
                    if (((u = l[--o]), u.text === "#")) l.splice(o + 1, 1);
                    else if (/^[1-9]$/.test(u.text)) l.splice(o, 2, ...a[+u.text - 1]);
                    else throw new H("Not a valid argument number", u);
                }
            }
        }
        return this.pushTokens(l), l.length;
    }
    expandAfterFuture() {
        return this.expandOnce(), this.future();
    }
    expandNextToken() {
        for (;;)
            if (this.expandOnce() === !1) {
                var t = this.stack.pop();
                return t.treatAsRelax && (t.text = "\\relax"), t;
            }
        throw new Error();
    }
    expandMacro(t) {
        return this.macros.has(t) ? this.expandTokens([new _t(t)]) : void 0;
    }
    expandTokens(t) {
        var n = [],
            r = this.stack.length;
        for (this.pushTokens(t); this.stack.length > r; )
            if (this.expandOnce(!0) === !1) {
                var i = this.stack.pop();
                i.treatAsRelax && ((i.noexpand = !1), (i.treatAsRelax = !1)), n.push(i);
            }
        return this.countExpansion(n.length), n;
    }
    expandMacroAsText(t) {
        var n = this.expandMacro(t);
        return n && n.map(r => r.text).join("");
    }
    _getExpansion(t) {
        var n = this.macros.get(t);
        if (n == null) return n;
        if (t.length === 1) {
            var r = this.lexer.catcodes[t];
            if (r != null && r !== 13) return;
        }
        var i = typeof n == "function" ? n(this) : n;
        if (typeof i == "string") {
            var l = 0;
            if (i.indexOf("#") !== -1) for (var a = i.replace(/##/g, ""); a.indexOf("#" + (l + 1)) !== -1; ) ++l;
            for (var o = new Zh(i, this.settings), u = [], s = o.lex(); s.text !== "EOF"; ) u.push(s), (s = o.lex());
            u.reverse();
            var h = { tokens: u, numArgs: l };
            return h;
        }
        return i;
    }
    isDefined(t) {
        return this.macros.has(t) || Zn.hasOwnProperty(t) || Ee.math.hasOwnProperty(t) || Ee.text.hasOwnProperty(t) || op.hasOwnProperty(t);
    }
    isExpandable(t) {
        var n = this.macros.get(t);
        return n != null ? typeof n == "string" || typeof n == "function" || !n.unexpandable : Zn.hasOwnProperty(t) && !Zn[t].primitive;
    }
}
var tf = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,
    ol = Object.freeze({
        "₊": "+",
        "₋": "-",
        "₌": "=",
        "₍": "(",
        "₎": ")",
        "₀": "0",
        "₁": "1",
        "₂": "2",
        "₃": "3",
        "₄": "4",
        "₅": "5",
        "₆": "6",
        "₇": "7",
        "₈": "8",
        "₉": "9",
        ₐ: "a",
        ₑ: "e",
        ₕ: "h",
        ᵢ: "i",
        ⱼ: "j",
        ₖ: "k",
        ₗ: "l",
        ₘ: "m",
        ₙ: "n",
        ₒ: "o",
        ₚ: "p",
        ᵣ: "r",
        ₛ: "s",
        ₜ: "t",
        ᵤ: "u",
        ᵥ: "v",
        ₓ: "x",
        ᵦ: "β",
        ᵧ: "γ",
        ᵨ: "ρ",
        ᵩ: "ϕ",
        ᵪ: "χ",
        "⁺": "+",
        "⁻": "-",
        "⁼": "=",
        "⁽": "(",
        "⁾": ")",
        "⁰": "0",
        "¹": "1",
        "²": "2",
        "³": "3",
        "⁴": "4",
        "⁵": "5",
        "⁶": "6",
        "⁷": "7",
        "⁸": "8",
        "⁹": "9",
        ᴬ: "A",
        ᴮ: "B",
        ᴰ: "D",
        ᴱ: "E",
        ᴳ: "G",
        ᴴ: "H",
        ᴵ: "I",
        ᴶ: "J",
        ᴷ: "K",
        ᴸ: "L",
        ᴹ: "M",
        ᴺ: "N",
        ᴼ: "O",
        ᴾ: "P",
        ᴿ: "R",
        ᵀ: "T",
        ᵁ: "U",
        ⱽ: "V",
        ᵂ: "W",
        ᵃ: "a",
        ᵇ: "b",
        ᶜ: "c",
        ᵈ: "d",
        ᵉ: "e",
        ᶠ: "f",
        ᵍ: "g",
        ʰ: "h",
        ⁱ: "i",
        ʲ: "j",
        ᵏ: "k",
        ˡ: "l",
        ᵐ: "m",
        ⁿ: "n",
        ᵒ: "o",
        ᵖ: "p",
        ʳ: "r",
        ˢ: "s",
        ᵗ: "t",
        ᵘ: "u",
        ᵛ: "v",
        ʷ: "w",
        ˣ: "x",
        ʸ: "y",
        ᶻ: "z",
        ᵝ: "β",
        ᵞ: "γ",
        ᵟ: "δ",
        ᵠ: "ϕ",
        ᵡ: "χ",
        ᶿ: "θ",
    }),
    Io = {
        "́": { text: "\\'", math: "\\acute" },
        "̀": { text: "\\`", math: "\\grave" },
        "̈": { text: '\\"', math: "\\ddot" },
        "̃": { text: "\\~", math: "\\tilde" },
        "̄": { text: "\\=", math: "\\bar" },
        "̆": { text: "\\u", math: "\\breve" },
        "̌": { text: "\\v", math: "\\check" },
        "̂": { text: "\\^", math: "\\hat" },
        "̇": { text: "\\.", math: "\\dot" },
        "̊": { text: "\\r", math: "\\mathring" },
        "̋": { text: "\\H" },
        "̧": { text: "\\c" },
    },
    nf = {
        á: "á",
        à: "à",
        ä: "ä",
        ǟ: "ǟ",
        ã: "ã",
        ā: "ā",
        ă: "ă",
        ắ: "ắ",
        ằ: "ằ",
        ẵ: "ẵ",
        ǎ: "ǎ",
        â: "â",
        ấ: "ấ",
        ầ: "ầ",
        ẫ: "ẫ",
        ȧ: "ȧ",
        ǡ: "ǡ",
        å: "å",
        ǻ: "ǻ",
        ḃ: "ḃ",
        ć: "ć",
        ḉ: "ḉ",
        č: "č",
        ĉ: "ĉ",
        ċ: "ċ",
        ç: "ç",
        ď: "ď",
        ḋ: "ḋ",
        ḑ: "ḑ",
        é: "é",
        è: "è",
        ë: "ë",
        ẽ: "ẽ",
        ē: "ē",
        ḗ: "ḗ",
        ḕ: "ḕ",
        ĕ: "ĕ",
        ḝ: "ḝ",
        ě: "ě",
        ê: "ê",
        ế: "ế",
        ề: "ề",
        ễ: "ễ",
        ė: "ė",
        ȩ: "ȩ",
        ḟ: "ḟ",
        ǵ: "ǵ",
        ḡ: "ḡ",
        ğ: "ğ",
        ǧ: "ǧ",
        ĝ: "ĝ",
        ġ: "ġ",
        ģ: "ģ",
        ḧ: "ḧ",
        ȟ: "ȟ",
        ĥ: "ĥ",
        ḣ: "ḣ",
        ḩ: "ḩ",
        í: "í",
        ì: "ì",
        ï: "ï",
        ḯ: "ḯ",
        ĩ: "ĩ",
        ī: "ī",
        ĭ: "ĭ",
        ǐ: "ǐ",
        î: "î",
        ǰ: "ǰ",
        ĵ: "ĵ",
        ḱ: "ḱ",
        ǩ: "ǩ",
        ķ: "ķ",
        ĺ: "ĺ",
        ľ: "ľ",
        ļ: "ļ",
        ḿ: "ḿ",
        ṁ: "ṁ",
        ń: "ń",
        ǹ: "ǹ",
        ñ: "ñ",
        ň: "ň",
        ṅ: "ṅ",
        ņ: "ņ",
        ó: "ó",
        ò: "ò",
        ö: "ö",
        ȫ: "ȫ",
        õ: "õ",
        ṍ: "ṍ",
        ṏ: "ṏ",
        ȭ: "ȭ",
        ō: "ō",
        ṓ: "ṓ",
        ṑ: "ṑ",
        ŏ: "ŏ",
        ǒ: "ǒ",
        ô: "ô",
        ố: "ố",
        ồ: "ồ",
        ỗ: "ỗ",
        ȯ: "ȯ",
        ȱ: "ȱ",
        ő: "ő",
        ṕ: "ṕ",
        ṗ: "ṗ",
        ŕ: "ŕ",
        ř: "ř",
        ṙ: "ṙ",
        ŗ: "ŗ",
        ś: "ś",
        ṥ: "ṥ",
        š: "š",
        ṧ: "ṧ",
        ŝ: "ŝ",
        ṡ: "ṡ",
        ş: "ş",
        ẗ: "ẗ",
        ť: "ť",
        ṫ: "ṫ",
        ţ: "ţ",
        ú: "ú",
        ù: "ù",
        ü: "ü",
        ǘ: "ǘ",
        ǜ: "ǜ",
        ǖ: "ǖ",
        ǚ: "ǚ",
        ũ: "ũ",
        ṹ: "ṹ",
        ū: "ū",
        ṻ: "ṻ",
        ŭ: "ŭ",
        ǔ: "ǔ",
        û: "û",
        ů: "ů",
        ű: "ű",
        ṽ: "ṽ",
        ẃ: "ẃ",
        ẁ: "ẁ",
        ẅ: "ẅ",
        ŵ: "ŵ",
        ẇ: "ẇ",
        ẘ: "ẘ",
        ẍ: "ẍ",
        ẋ: "ẋ",
        ý: "ý",
        ỳ: "ỳ",
        ÿ: "ÿ",
        ỹ: "ỹ",
        ȳ: "ȳ",
        ŷ: "ŷ",
        ẏ: "ẏ",
        ẙ: "ẙ",
        ź: "ź",
        ž: "ž",
        ẑ: "ẑ",
        ż: "ż",
        Á: "Á",
        À: "À",
        Ä: "Ä",
        Ǟ: "Ǟ",
        Ã: "Ã",
        Ā: "Ā",
        Ă: "Ă",
        Ắ: "Ắ",
        Ằ: "Ằ",
        Ẵ: "Ẵ",
        Ǎ: "Ǎ",
        Â: "Â",
        Ấ: "Ấ",
        Ầ: "Ầ",
        Ẫ: "Ẫ",
        Ȧ: "Ȧ",
        Ǡ: "Ǡ",
        Å: "Å",
        Ǻ: "Ǻ",
        Ḃ: "Ḃ",
        Ć: "Ć",
        Ḉ: "Ḉ",
        Č: "Č",
        Ĉ: "Ĉ",
        Ċ: "Ċ",
        Ç: "Ç",
        Ď: "Ď",
        Ḋ: "Ḋ",
        Ḑ: "Ḑ",
        É: "É",
        È: "È",
        Ë: "Ë",
        Ẽ: "Ẽ",
        Ē: "Ē",
        Ḗ: "Ḗ",
        Ḕ: "Ḕ",
        Ĕ: "Ĕ",
        Ḝ: "Ḝ",
        Ě: "Ě",
        Ê: "Ê",
        Ế: "Ế",
        Ề: "Ề",
        Ễ: "Ễ",
        Ė: "Ė",
        Ȩ: "Ȩ",
        Ḟ: "Ḟ",
        Ǵ: "Ǵ",
        Ḡ: "Ḡ",
        Ğ: "Ğ",
        Ǧ: "Ǧ",
        Ĝ: "Ĝ",
        Ġ: "Ġ",
        Ģ: "Ģ",
        Ḧ: "Ḧ",
        Ȟ: "Ȟ",
        Ĥ: "Ĥ",
        Ḣ: "Ḣ",
        Ḩ: "Ḩ",
        Í: "Í",
        Ì: "Ì",
        Ï: "Ï",
        Ḯ: "Ḯ",
        Ĩ: "Ĩ",
        Ī: "Ī",
        Ĭ: "Ĭ",
        Ǐ: "Ǐ",
        Î: "Î",
        İ: "İ",
        Ĵ: "Ĵ",
        Ḱ: "Ḱ",
        Ǩ: "Ǩ",
        Ķ: "Ķ",
        Ĺ: "Ĺ",
        Ľ: "Ľ",
        Ļ: "Ļ",
        Ḿ: "Ḿ",
        Ṁ: "Ṁ",
        Ń: "Ń",
        Ǹ: "Ǹ",
        Ñ: "Ñ",
        Ň: "Ň",
        Ṅ: "Ṅ",
        Ņ: "Ņ",
        Ó: "Ó",
        Ò: "Ò",
        Ö: "Ö",
        Ȫ: "Ȫ",
        Õ: "Õ",
        Ṍ: "Ṍ",
        Ṏ: "Ṏ",
        Ȭ: "Ȭ",
        Ō: "Ō",
        Ṓ: "Ṓ",
        Ṑ: "Ṑ",
        Ŏ: "Ŏ",
        Ǒ: "Ǒ",
        Ô: "Ô",
        Ố: "Ố",
        Ồ: "Ồ",
        Ỗ: "Ỗ",
        Ȯ: "Ȯ",
        Ȱ: "Ȱ",
        Ő: "Ő",
        Ṕ: "Ṕ",
        Ṗ: "Ṗ",
        Ŕ: "Ŕ",
        Ř: "Ř",
        Ṙ: "Ṙ",
        Ŗ: "Ŗ",
        Ś: "Ś",
        Ṥ: "Ṥ",
        Š: "Š",
        Ṧ: "Ṧ",
        Ŝ: "Ŝ",
        Ṡ: "Ṡ",
        Ş: "Ş",
        Ť: "Ť",
        Ṫ: "Ṫ",
        Ţ: "Ţ",
        Ú: "Ú",
        Ù: "Ù",
        Ü: "Ü",
        Ǘ: "Ǘ",
        Ǜ: "Ǜ",
        Ǖ: "Ǖ",
        Ǚ: "Ǚ",
        Ũ: "Ũ",
        Ṹ: "Ṹ",
        Ū: "Ū",
        Ṻ: "Ṻ",
        Ŭ: "Ŭ",
        Ǔ: "Ǔ",
        Û: "Û",
        Ů: "Ů",
        Ű: "Ű",
        Ṽ: "Ṽ",
        Ẃ: "Ẃ",
        Ẁ: "Ẁ",
        Ẅ: "Ẅ",
        Ŵ: "Ŵ",
        Ẇ: "Ẇ",
        Ẍ: "Ẍ",
        Ẋ: "Ẋ",
        Ý: "Ý",
        Ỳ: "Ỳ",
        Ÿ: "Ÿ",
        Ỹ: "Ỹ",
        Ȳ: "Ȳ",
        Ŷ: "Ŷ",
        Ẏ: "Ẏ",
        Ź: "Ź",
        Ž: "Ž",
        Ẑ: "Ẑ",
        Ż: "Ż",
        ά: "ά",
        ὰ: "ὰ",
        ᾱ: "ᾱ",
        ᾰ: "ᾰ",
        έ: "έ",
        ὲ: "ὲ",
        ή: "ή",
        ὴ: "ὴ",
        ί: "ί",
        ὶ: "ὶ",
        ϊ: "ϊ",
        ΐ: "ΐ",
        ῒ: "ῒ",
        ῑ: "ῑ",
        ῐ: "ῐ",
        ό: "ό",
        ὸ: "ὸ",
        ύ: "ύ",
        ὺ: "ὺ",
        ϋ: "ϋ",
        ΰ: "ΰ",
        ῢ: "ῢ",
        ῡ: "ῡ",
        ῠ: "ῠ",
        ώ: "ώ",
        ὼ: "ὼ",
        Ύ: "Ύ",
        Ὺ: "Ὺ",
        Ϋ: "Ϋ",
        Ῡ: "Ῡ",
        Ῠ: "Ῠ",
        Ώ: "Ώ",
        Ὼ: "Ὼ",
    };
class Ia {
    constructor(t, n) {
        (this.mode = void 0),
            (this.gullet = void 0),
            (this.settings = void 0),
            (this.leftrightDepth = void 0),
            (this.nextToken = void 0),
            (this.mode = "math"),
            (this.gullet = new J9(t, n, this.mode)),
            (this.settings = n),
            (this.leftrightDepth = 0);
    }
    expect(t, n) {
        if ((n === void 0 && (n = !0), this.fetch().text !== t)) throw new H("Expected '" + t + "', got '" + this.fetch().text + "'", this.fetch());
        n && this.consume();
    }
    consume() {
        this.nextToken = null;
    }
    fetch() {
        return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
    }
    switchMode(t) {
        (this.mode = t), this.gullet.switchMode(t);
    }
    parse() {
        this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
        try {
            var t = this.parseExpression(!1);
            return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), t;
        } finally {
            this.gullet.endGroups();
        }
    }
    subparse(t) {
        var n = this.nextToken;
        this.consume(), this.gullet.pushToken(new _t("}")), this.gullet.pushTokens(t);
        var r = this.parseExpression(!1);
        return this.expect("}"), (this.nextToken = n), r;
    }
    parseExpression(t, n) {
        for (var r = []; ; ) {
            this.mode === "math" && this.consumeSpaces();
            var i = this.fetch();
            if (Ia.endOfExpression.indexOf(i.text) !== -1 || (n && i.text === n) || (t && Zn[i.text] && Zn[i.text].infix)) break;
            var l = this.parseAtom(n);
            if (l) {
                if (l.type === "internal") continue;
            } else break;
            r.push(l);
        }
        return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
    }
    handleInfixNodes(t) {
        for (var n = -1, r, i = 0; i < t.length; i++)
            if (t[i].type === "infix") {
                if (n !== -1) throw new H("only one infix operator per group", t[i].token);
                (n = i), (r = t[i].replaceWith);
            }
        if (n !== -1 && r) {
            var l,
                a,
                o = t.slice(0, n),
                u = t.slice(n + 1);
            o.length === 1 && o[0].type === "ordgroup" ? (l = o[0]) : (l = { type: "ordgroup", mode: this.mode, body: o }),
                u.length === 1 && u[0].type === "ordgroup" ? (a = u[0]) : (a = { type: "ordgroup", mode: this.mode, body: u });
            var s;
            return r === "\\\\abovefrac" ? (s = this.callFunction(r, [l, t[n], a], [])) : (s = this.callFunction(r, [l, a], [])), [s];
        } else return t;
    }
    handleSupSubscript(t) {
        var n = this.fetch(),
            r = n.text;
        this.consume(), this.consumeSpaces();
        var i = this.parseGroup(t);
        if (!i) throw new H("Expected group after '" + r + "'", n);
        return i;
    }
    formatUnsupportedCmd(t) {
        for (var n = [], r = 0; r < t.length; r++) n.push({ type: "textord", mode: "text", text: t[r] });
        var i = { type: "text", mode: this.mode, body: n },
            l = { type: "color", mode: this.mode, color: this.settings.errorColor, body: [i] };
        return l;
    }
    parseAtom(t) {
        var n = this.parseGroup("atom", t);
        if (this.mode === "text") return n;
        for (var r, i; ; ) {
            this.consumeSpaces();
            var l = this.fetch();
            if (l.text === "\\limits" || l.text === "\\nolimits") {
                if (n && n.type === "op") {
                    var a = l.text === "\\limits";
                    (n.limits = a), (n.alwaysHandleSupSub = !0);
                } else if (n && n.type === "operatorname") n.alwaysHandleSupSub && (n.limits = l.text === "\\limits");
                else throw new H("Limit controls must follow a math operator", l);
                this.consume();
            } else if (l.text === "^") {
                if (r) throw new H("Double superscript", l);
                r = this.handleSupSubscript("superscript");
            } else if (l.text === "_") {
                if (i) throw new H("Double subscript", l);
                i = this.handleSupSubscript("subscript");
            } else if (l.text === "'") {
                if (r) throw new H("Double superscript", l);
                var o = { type: "textord", mode: this.mode, text: "\\prime" },
                    u = [o];
                for (this.consume(); this.fetch().text === "'"; ) u.push(o), this.consume();
                this.fetch().text === "^" && u.push(this.handleSupSubscript("superscript")), (r = { type: "ordgroup", mode: this.mode, body: u });
            } else if (ol[l.text]) {
                var s = tf.test(l.text),
                    h = [];
                for (h.push(new _t(ol[l.text])), this.consume(); ; ) {
                    var d = this.fetch().text;
                    if (!ol[d] || tf.test(d) !== s) break;
                    h.unshift(new _t(ol[d])), this.consume();
                }
                var p = this.subparse(h);
                s ? (i = { type: "ordgroup", mode: "math", body: p }) : (r = { type: "ordgroup", mode: "math", body: p });
            } else break;
        }
        return r || i ? { type: "supsub", mode: this.mode, base: n, sup: r, sub: i } : n;
    }
    parseFunction(t, n) {
        var r = this.fetch(),
            i = r.text,
            l = Zn[i];
        if (!l) return null;
        if ((this.consume(), n && n !== "atom" && !l.allowedInArgument)) throw new H("Got function '" + i + "' with no arguments" + (n ? " as " + n : ""), r);
        if (this.mode === "text" && !l.allowedInText) throw new H("Can't use function '" + i + "' in text mode", r);
        if (this.mode === "math" && l.allowedInMath === !1) throw new H("Can't use function '" + i + "' in math mode", r);
        var { args: a, optArgs: o } = this.parseArguments(i, l);
        return this.callFunction(i, a, o, r, t);
    }
    callFunction(t, n, r, i, l) {
        var a = { funcName: t, parser: this, token: i, breakOnTokenText: l },
            o = Zn[t];
        if (o && o.handler) return o.handler(a, n, r);
        throw new H("No function handler for " + t);
    }
    parseArguments(t, n) {
        var r = n.numArgs + n.numOptionalArgs;
        if (r === 0) return { args: [], optArgs: [] };
        for (var i = [], l = [], a = 0; a < r; a++) {
            var o = n.argTypes && n.argTypes[a],
                u = a < n.numOptionalArgs;
            ((n.primitive && o == null) || (n.type === "sqrt" && a === 1 && l[0] == null)) && (o = "primitive");
            var s = this.parseGroupOfType("argument to '" + t + "'", o, u);
            if (u) l.push(s);
            else if (s != null) i.push(s);
            else throw new H("Null argument, please report this as a bug");
        }
        return { args: i, optArgs: l };
    }
    parseGroupOfType(t, n, r) {
        switch (n) {
            case "color":
                return this.parseColorGroup(r);
            case "size":
                return this.parseSizeGroup(r);
            case "url":
                return this.parseUrlGroup(r);
            case "math":
            case "text":
                return this.parseArgumentGroup(r, n);
            case "hbox": {
                var i = this.parseArgumentGroup(r, "text");
                return i != null ? { type: "styling", mode: i.mode, body: [i], style: "text" } : null;
            }
            case "raw": {
                var l = this.parseStringGroup("raw", r);
                return l != null ? { type: "raw", mode: "text", string: l.text } : null;
            }
            case "primitive": {
                if (r) throw new H("A primitive argument cannot be optional");
                var a = this.parseGroup(t);
                if (a == null) throw new H("Expected group as " + t, this.fetch());
                return a;
            }
            case "original":
            case null:
            case void 0:
                return this.parseArgumentGroup(r);
            default:
                throw new H("Unknown group type as " + t, this.fetch());
        }
    }
    consumeSpaces() {
        for (; this.fetch().text === " "; ) this.consume();
    }
    parseStringGroup(t, n) {
        var r = this.gullet.scanArgument(n);
        if (r == null) return null;
        for (var i = "", l; (l = this.fetch()).text !== "EOF"; ) (i += l.text), this.consume();
        return this.consume(), (r.text = i), r;
    }
    parseRegexGroup(t, n) {
        for (var r = this.fetch(), i = r, l = "", a; (a = this.fetch()).text !== "EOF" && t.test(l + a.text); ) (i = a), (l += i.text), this.consume();
        if (l === "") throw new H("Invalid " + n + ": '" + r.text + "'", r);
        return r.range(i, l);
    }
    parseColorGroup(t) {
        var n = this.parseStringGroup("color", t);
        if (n == null) return null;
        var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(n.text);
        if (!r) throw new H("Invalid color: '" + n.text + "'", n);
        var i = r[0];
        return /^[0-9a-f]{6}$/i.test(i) && (i = "#" + i), { type: "color-token", mode: this.mode, color: i };
    }
    parseSizeGroup(t) {
        var n,
            r = !1;
        if (
            (this.gullet.consumeSpaces(),
            !t && this.gullet.future().text !== "{"
                ? (n = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))
                : (n = this.parseStringGroup("size", t)),
            !n)
        )
            return null;
        !t && n.text.length === 0 && ((n.text = "0pt"), (r = !0));
        var i = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n.text);
        if (!i) throw new H("Invalid size: '" + n.text + "'", n);
        var l = { number: +(i[1] + i[2]), unit: i[3] };
        if (!vm(l)) throw new H("Invalid unit: '" + l.unit + "'", n);
        return { type: "size", mode: this.mode, value: l, isBlank: r };
    }
    parseUrlGroup(t) {
        this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
        var n = this.parseStringGroup("url", t);
        if ((this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), n == null)) return null;
        var r = n.text.replace(/\\([#$%&~_^{}])/g, "$1");
        return { type: "url", mode: this.mode, url: r };
    }
    parseArgumentGroup(t, n) {
        var r = this.gullet.scanArgument(t);
        if (r == null) return null;
        var i = this.mode;
        n && this.switchMode(n), this.gullet.beginGroup();
        var l = this.parseExpression(!1, "EOF");
        this.expect("EOF"), this.gullet.endGroup();
        var a = { type: "ordgroup", mode: this.mode, loc: r.loc, body: l };
        return n && this.switchMode(i), a;
    }
    parseGroup(t, n) {
        var r = this.fetch(),
            i = r.text,
            l;
        if (i === "{" || i === "\\begingroup") {
            this.consume();
            var a = i === "{" ? "}" : "\\endgroup";
            this.gullet.beginGroup();
            var o = this.parseExpression(!1, a),
                u = this.fetch();
            this.expect(a),
                this.gullet.endGroup(),
                (l = { type: "ordgroup", mode: this.mode, loc: Tt.range(r, u), body: o, semisimple: i === "\\begingroup" || void 0 });
        } else if (((l = this.parseFunction(n, t) || this.parseSymbol()), l == null && i[0] === "\\" && !op.hasOwnProperty(i))) {
            if (this.settings.throwOnError) throw new H("Undefined control sequence: " + i, r);
            (l = this.formatUnsupportedCmd(i)), this.consume();
        }
        return l;
    }
    formLigatures(t) {
        for (var n = t.length - 1, r = 0; r < n; ++r) {
            var i = t[r],
                l = i.text;
            l === "-" &&
                t[r + 1].text === "-" &&
                (r + 1 < n && t[r + 2].text === "-"
                    ? (t.splice(r, 3, { type: "textord", mode: "text", loc: Tt.range(i, t[r + 2]), text: "---" }), (n -= 2))
                    : (t.splice(r, 2, { type: "textord", mode: "text", loc: Tt.range(i, t[r + 1]), text: "--" }), (n -= 1))),
                (l === "'" || l === "`") &&
                    t[r + 1].text === l &&
                    (t.splice(r, 2, { type: "textord", mode: "text", loc: Tt.range(i, t[r + 1]), text: l + l }), (n -= 1));
        }
    }
    parseSymbol() {
        var t = this.fetch(),
            n = t.text;
        if (/^\\verb[^a-zA-Z]/.test(n)) {
            this.consume();
            var r = n.slice(5),
                i = r.charAt(0) === "*";
            if ((i && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1)))
                throw new H(`\\verb assertion failed --
                    please report what input caused this bug`);
            return (r = r.slice(1, -1)), { type: "verb", mode: "text", body: r, star: i };
        }
        nf.hasOwnProperty(n[0]) &&
            !Ee[this.mode][n[0]] &&
            (this.settings.strict &&
                this.mode === "math" &&
                this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + n[0] + '" used in math mode', t),
            (n = nf[n[0]] + n.slice(1)));
        var l = X9.exec(n);
        l && ((n = n.substring(0, l.index)), n === "i" ? (n = "ı") : n === "j" && (n = "ȷ"));
        var a;
        if (Ee[this.mode][n]) {
            this.settings.strict &&
                this.mode === "math" &&
                qu.indexOf(n) >= 0 &&
                this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + n[0] + '" used in math mode', t);
            var o = Ee[this.mode][n].group,
                u = Tt.range(t),
                s;
            if (_g.hasOwnProperty(o)) {
                var h = o;
                s = { type: "atom", mode: this.mode, family: h, loc: u, text: n };
            } else s = { type: o, mode: this.mode, loc: u, text: n };
            a = s;
        } else if (n.charCodeAt(0) >= 128)
            this.settings.strict &&
                (gm(n.charCodeAt(0))
                    ? this.mode === "math" &&
                      this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + n[0] + '" used in math mode', t)
                    : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + n[0] + '"' + (" (" + n.charCodeAt(0) + ")"), t)),
                (a = { type: "textord", mode: "text", loc: Tt.range(t), text: n });
        else return null;
        if ((this.consume(), l))
            for (var d = 0; d < l[0].length; d++) {
                var p = l[0][d];
                if (!Io[p]) throw new H("Unknown accent ' " + p + "'", t);
                var m = Io[p][this.mode] || Io[p].text;
                if (!m) throw new H("Accent " + p + " unsupported in " + this.mode + " mode", t);
                a = { type: "accent", mode: this.mode, loc: Tt.range(t), label: m, isStretchy: !1, isShifty: !0, base: a };
            }
        return a;
    }
}
Ia.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var x1 = function (t, n) {
        if (!(typeof t == "string" || t instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
        var r = new Ia(t, n);
        delete r.gullet.macros.current["\\df@tag"];
        var i = r.parse();
        if ((delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag"))) {
            if (!n.displayMode) throw new H("\\tag works only in display equations");
            i = [{ type: "tag", mode: "text", body: i, tag: r.subparse([new _t("\\df@tag")]) }];
        }
        return i;
    },
    up = function (t, n, r) {
        n.textContent = "";
        var i = w1(t, r).toNode();
        n.appendChild(i);
    };
typeof document < "u" &&
    document.compatMode !== "CSS1Compat" &&
    (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),
    (up = function () {
        throw new H("KaTeX doesn't work in quirks mode.");
    }));
var ev = function (t, n) {
        var r = w1(t, n).toMarkup();
        return r;
    },
    tv = function (t, n) {
        var r = new t1(n);
        return x1(t, r);
    },
    sp = function (t, n, r) {
        if (r.throwOnError || !(t instanceof H)) throw t;
        var i = D.makeSpan(["katex-error"], [new jt(n)]);
        return i.setAttribute("title", t.toString()), i.setAttribute("style", "color:" + r.errorColor), i;
    },
    w1 = function (t, n) {
        var r = new t1(n);
        try {
            var i = x1(t, r);
            return c9(i, t, r);
        } catch (l) {
            return sp(l, t, r);
        }
    },
    nv = function (t, n) {
        var r = new t1(n);
        try {
            var i = x1(t, r);
            return h9(i, t, r);
        } catch (l) {
            return sp(l, t, r);
        }
    },
    rv = "0.16.21",
    iv = { Span: Ni, Anchor: i1, SymbolNode: jt, SvgNode: Bn, PathNode: cr, LineNode: Hu },
    rf = {
        version: rv,
        render: up,
        renderToString: ev,
        ParseError: H,
        SETTINGS_SCHEMA: Sl,
        __parse: tv,
        __renderToDomTree: w1,
        __renderToHTMLTree: nv,
        __setFontMetrics: Pg,
        __defineSymbol: c,
        __defineFunction: G,
        __defineMacro: v,
        __domTree: iv,
    };
function lv(e, t) {
    const n = String(e);
    let r = n.indexOf(t),
        i = r,
        l = 0,
        a = 0;
    if (typeof t != "string") throw new TypeError("Expected substring");
    for (; r !== -1; ) r === i ? ++l > a && (a = l) : (l = 1), (i = r + t.length), (r = n.indexOf(t, i));
    return a;
}
function cp(e) {
    if (!e._compiled) {
        const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
        e._compiled = new RegExp(
            (t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""),
            "g",
        );
    }
    return e._compiled;
}
function av(e, t) {
    return lf(e, t.inConstruct, !0) && !lf(e, t.notInConstruct, !1);
}
function lf(e, t, n) {
    if ((typeof t == "string" && (t = [t]), !t || t.length === 0)) return n;
    let r = -1;
    for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
    return !1;
}
function ov(e, t, n) {
    const r = (n.before || "") + (t || "") + (n.after || ""),
        i = [],
        l = [],
        a = {};
    let o = -1;
    for (; ++o < e.unsafe.length; ) {
        const h = e.unsafe[o];
        if (!av(e.stack, h)) continue;
        const d = cp(h);
        let p;
        for (; (p = d.exec(r)); ) {
            const m = "before" in h || !!h.atBreak,
                S = "after" in h,
                w = p.index + (m ? p[1].length : 0);
            i.includes(w) ? (a[w].before && !m && (a[w].before = !1), a[w].after && !S && (a[w].after = !1)) : (i.push(w), (a[w] = { before: m, after: S }));
        }
    }
    i.sort(uv);
    let u = n.before ? n.before.length : 0;
    const s = r.length - (n.after ? n.after.length : 0);
    for (o = -1; ++o < i.length; ) {
        const h = i[o];
        h < u ||
            h >= s ||
            (h + 1 < s && i[o + 1] === h + 1 && a[h].after && !a[h + 1].before && !a[h + 1].after) ||
            (i[o - 1] === h - 1 && a[h].before && !a[h - 1].before && !a[h - 1].after) ||
            (u !== h && l.push(af(r.slice(u, h), "\\")),
            (u = h),
            /[!-/:-@[-`{-~]/.test(r.charAt(h)) && (!n.encode || !n.encode.includes(r.charAt(h)))
                ? l.push("\\")
                : (l.push("&#x" + r.charCodeAt(h).toString(16).toUpperCase() + ";"), u++));
    }
    return l.push(af(r.slice(u, s), n.after)), l.join("");
}
function uv(e, t) {
    return e - t;
}
function af(e, t) {
    const n = /\\(?=[!-/:-@[-`{-~])/g,
        r = [],
        i = [],
        l = e + t;
    let a = -1,
        o = 0,
        u;
    for (; (u = n.exec(l)); ) r.push(u.index);
    for (; ++a < r.length; ) o !== r[a] && i.push(e.slice(o, r[a])), i.push("\\"), (o = r[a]);
    return i.push(e.slice(o)), i.join("");
}
function sv(e) {
    const t = e || {},
        n = t.now || {};
    let r = t.lineShift || 0,
        i = n.line || 1,
        l = n.column || 1;
    return { move: u, current: a, shift: o };
    function a() {
        return { now: { line: i, column: l }, lineShift: r };
    }
    function o(s) {
        r += s;
    }
    function u(s) {
        const h = s || "",
            d = h.split(/\r?\n|\r/g),
            p = d[d.length - 1];
        return (i += d.length - 1), (l = d.length === 1 ? l + p.length : 1 + p.length + r), h;
    }
}
function cv() {
    return {
        enter: { mathFlow: e, mathFlowFenceMeta: t, mathText: l },
        exit: { mathFlow: i, mathFlowFence: r, mathFlowFenceMeta: n, mathFlowValue: o, mathText: a, mathTextData: o },
    };
    function e(u) {
        this.enter(
            {
                type: "math",
                meta: null,
                value: "",
                data: { hName: "div", hProperties: { className: ["math", "math-display"] }, hChildren: [{ type: "text", value: "" }] },
            },
            u,
        );
    }
    function t() {
        this.buffer();
    }
    function n() {
        const u = this.resume(),
            s = this.stack[this.stack.length - 1];
        s.meta = u;
    }
    function r() {
        this.getData("mathFlowInside") || (this.buffer(), this.setData("mathFlowInside", !0));
    }
    function i(u) {
        const s = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
            h = this.exit(u);
        (h.value = s), (h.data.hChildren[0].value = s), this.setData("mathFlowInside");
    }
    function l(u) {
        this.enter(
            {
                type: "inlineMath",
                value: "",
                data: { hName: "span", hProperties: { className: ["math", "math-inline"] }, hChildren: [{ type: "text", value: "" }] },
            },
            u,
        ),
            this.buffer();
    }
    function a(u) {
        const s = this.resume(),
            h = this.exit(u);
        (h.value = s), (h.data.hChildren[0].value = s);
    }
    function o(u) {
        this.config.enter.data.call(this, u), this.config.exit.data.call(this, u);
    }
}
function hv(e) {
    let t = (e || {}).singleDollarTextMath;
    return (
        t == null && (t = !0),
        (r.peek = i),
        {
            unsafe: [
                { character: "\r", inConstruct: "mathFlowMeta" },
                {
                    character: `
`,
                    inConstruct: "mathFlowMeta",
                },
                { character: "$", after: t ? void 0 : "\\$", inConstruct: "phrasing" },
                { character: "$", inConstruct: "mathFlowMeta" },
                { atBreak: !0, character: "$", after: "\\$" },
            ],
            handlers: { math: n, inlineMath: r },
        }
    );
    function n(l, a, o, u) {
        const s = l.value || "",
            h = sv(u),
            d = "$".repeat(Math.max(lv(s, "$") + 1, 2)),
            p = o.enter("mathFlow");
        let m = h.move(d);
        if (l.meta) {
            const S = o.enter("mathFlowMeta");
            (m += h.move(
                ov(o, l.meta, {
                    before: m,
                    after: `
`,
                    encode: ["$"],
                    ...h.current(),
                }),
            )),
                S();
        }
        return (
            (m += h.move(`
`)),
            s &&
                (m += h.move(
                    s +
                        `
`,
                )),
            (m += h.move(d)),
            p(),
            m
        );
    }
    function r(l, a, o) {
        let u = l.value || "",
            s = 1;
        for (t || s++; new RegExp("(^|[^$])" + "\\$".repeat(s) + "([^$]|$)").test(u); ) s++;
        const h = "$".repeat(s);
        /[^ \r\n]/.test(u) && ((/^[ \r\n]/.test(u) && /[ \r\n]$/.test(u)) || /^\$|\$$/.test(u)) && (u = " " + u + " ");
        let d = -1;
        for (; ++d < o.unsafe.length; ) {
            const p = o.unsafe[d],
                m = cp(p);
            let S;
            if (p.atBreak)
                for (; (S = m.exec(u)); ) {
                    let w = S.index;
                    u.codePointAt(w) === 10 && u.codePointAt(w - 1) === 13 && w--, (u = u.slice(0, w) + " " + u.slice(S.index + 1));
                }
        }
        return h + u + h;
    }
    function i() {
        return "$";
    }
}
function fv(e = {}) {
    const t = this.data();
    n("micromarkExtensions", ig(e)), n("fromMarkdownExtensions", cv()), n("toMarkdownExtensions", hv(e));
    function n(r, i) {
        (t[r] ? t[r] : (t[r] = [])).push(i);
    }
}
const Or = function (e) {
    if (e == null) return k1;
    if (typeof e == "string") return mv(e);
    if (typeof e == "object") return dv(e);
    if (typeof e == "function") return hp(e);
    throw new Error("Expected function, string, or array as test");
};
function dv(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length; ) t[n] = Or(e[n]);
    return hp(r);
    function r(...i) {
        let l = -1;
        for (; ++l < t.length; ) if (t[l].call(this, ...i)) return !0;
        return !1;
    }
}
function mv(e) {
    return t;
    function t(n) {
        return k1(n) && n.tagName === e;
    }
}
function hp(e) {
    return t;
    function t(n, ...r) {
        return k1(n) && !!e.call(this, n, ...r);
    }
}
function k1(e) {
    return !!(e && typeof e == "object" && e.type === "element" && typeof e.tagName == "string");
}
const of = function (e, t, n) {
        const r = Xs(n);
        if (!e || !e.type || !e.children) throw new Error("Expected parent node");
        if (typeof t == "number") {
            if (t < 0 || t === Number.POSITIVE_INFINITY) throw new Error("Expected positive finite number as index");
        } else if (((t = e.children.indexOf(t)), t < 0)) throw new Error("Expected child node or index");
        for (; ++t < e.children.length; ) if (r(e.children[t], t, e)) return e.children[t];
        return null;
    },
    uf = /\n/g,
    sf = /[\t ]+/g,
    Wu = Or("br"),
    pv = Or("p"),
    cf = Or(["th", "td"]),
    hf = Or("tr"),
    gv = Or(["datalist", "head", "noembed", "noframes", "noscript", "rp", "script", "style", "template", "title", kv, Sv]),
    fp = Or([
        "address",
        "article",
        "aside",
        "blockquote",
        "body",
        "caption",
        "center",
        "dd",
        "dialog",
        "dir",
        "dl",
        "dt",
        "div",
        "figure",
        "figcaption",
        "footer",
        "form,",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "html",
        "legend",
        "listing",
        "main",
        "menu",
        "nav",
        "ol",
        "p",
        "plaintext",
        "pre",
        "section",
        "ul",
        "xmp",
    ]);
function vv(e, t = {}) {
    const n = "children" in e ? e.children : [],
        r = fp(e),
        i = pp(e, { whitespace: t.whitespace || "normal", breakBefore: !1, breakAfter: !1 }),
        l = [];
    (e.type === "text" || e.type === "comment") && l.push(...mp(e, { whitespace: i, breakBefore: !0, breakAfter: !0 }));
    let a = -1;
    for (; ++a < n.length; ) l.push(...dp(n[a], e, { whitespace: i, breakBefore: a ? void 0 : r, breakAfter: a < n.length - 1 ? Wu(n[a + 1]) : r }));
    const o = [];
    let u;
    for (a = -1; ++a < l.length; ) {
        const s = l[a];
        typeof s == "number"
            ? u !== void 0 && s > u && (u = s)
            : s &&
              (u !== void 0 &&
                  u > -1 &&
                  o.push(
                      `
`.repeat(u) || " ",
                  ),
              (u = -1),
              o.push(s));
    }
    return o.join("");
}
function dp(e, t, n) {
    return e.type === "element" ? yv(e, t, n) : e.type === "text" ? (n.whitespace === "normal" ? mp(e, n) : xv(e)) : [];
}
function yv(e, t, n) {
    const r = pp(e, n),
        i = e.children || [];
    let l = -1,
        a = [];
    if (gv(e)) return a;
    let o, u;
    for (
        Wu(e) || (hf(e) && of(t, e, hf))
            ? (u = `
`)
            : pv(e)
              ? ((o = 2), (u = 2))
              : fp(e) && ((o = 1), (u = 1));
        ++l < i.length;

    )
        a = a.concat(dp(i[l], e, { whitespace: r, breakBefore: l ? void 0 : o, breakAfter: l < i.length - 1 ? Wu(i[l + 1]) : u }));
    return cf(e) && of(t, e, cf) && a.push("	"), o && a.unshift(o), u && a.push(u), a;
}
function mp(e, t) {
    const n = String(e.value),
        r = [],
        i = [];
    let l = 0;
    for (; l <= n.length; ) {
        uf.lastIndex = l;
        const u = uf.exec(n),
            s = u && "index" in u ? u.index : n.length;
        r.push(
            wv(n.slice(l, s).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), l === 0 ? t.breakBefore : !0, s === n.length ? t.breakAfter : !0),
        ),
            (l = s + 1);
    }
    let a = -1,
        o;
    for (; ++a < r.length; )
        r[a].charCodeAt(r[a].length - 1) === 8203 || (a < r.length - 1 && r[a + 1].charCodeAt(0) === 8203)
            ? (i.push(r[a]), (o = void 0))
            : r[a]
              ? (typeof o == "number" && i.push(o), i.push(r[a]), (o = 0))
              : (a === 0 || a === r.length - 1) && i.push(0);
    return i;
}
function xv(e) {
    return [String(e.value)];
}
function wv(e, t, n) {
    const r = [];
    let i = 0,
        l;
    for (; i < e.length; ) {
        sf.lastIndex = i;
        const a = sf.exec(e);
        (l = a ? a.index : e.length), !i && !l && a && !t && r.push(""), i !== l && r.push(e.slice(i, l)), (i = a ? l + a[0].length : l);
    }
    return i !== l && !n && r.push(""), r.join(" ");
}
function pp(e, t) {
    if (e.type === "element") {
        const n = e.properties || {};
        switch (e.tagName) {
            case "listing":
            case "plaintext":
            case "xmp":
                return "pre";
            case "nobr":
                return "nowrap";
            case "pre":
                return n.wrap ? "pre-wrap" : "pre";
            case "td":
            case "th":
                return n.noWrap ? "nowrap" : t.whitespace;
            case "textarea":
                return "pre-wrap";
        }
    }
    return t.whitespace;
}
function kv(e) {
    return !!(e.properties || {}).hidden;
}
function Sv(e) {
    return e.tagName === "dialog" && !(e.properties || {}).open;
}
const Lo = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
    },
    ff = /[#.]/g;
function bv(e, t) {
    const n = e || "",
        r = {};
    let i = 0,
        l,
        a;
    for (; i < n.length; ) {
        ff.lastIndex = i;
        const o = ff.exec(n),
            u = n.slice(i, o ? o.index : n.length);
        u && (l ? (l === "#" ? (r.id = u) : Array.isArray(r.className) ? r.className.push(u) : (r.className = [u])) : (a = u), (i += u.length)),
            o && ((l = o[0]), i++);
    }
    return { type: "element", tagName: a || t || "div", properties: r, children: [] };
}
const Cv = new Set(["menu", "submit", "reset", "button"]),
    Gu = {}.hasOwnProperty;
function gp(e, t, n) {
    const r = n && Mv(n);
    return function (l, a, ...o) {
        let u = -1,
            s;
        if (l == null) (s = { type: "root", children: [] }), o.unshift(a);
        else if (((s = bv(l, t)), (s.tagName = s.tagName.toLowerCase()), r && Gu.call(r, s.tagName) && (s.tagName = r[s.tagName]), zv(a, s.tagName))) {
            let h;
            for (h in a) Gu.call(a, h) && Tv(e, s.properties, h, a[h]);
        } else o.unshift(a);
        for (; ++u < o.length; ) Yu(s.children, o[u]);
        return s.type === "element" && s.tagName === "template" && ((s.content = { type: "root", children: s.children }), (s.children = [])), s;
    };
}
function zv(e, t) {
    return e == null || typeof e != "object" || Array.isArray(e)
        ? !1
        : t === "input" || !e.type || typeof e.type != "string"
          ? !0
          : "children" in e && Array.isArray(e.children)
            ? !1
            : t === "button"
              ? Cv.has(e.type.toLowerCase())
              : !("value" in e);
}
function Tv(e, t, n, r) {
    const i = om(e, n);
    let l = -1,
        a;
    if (r != null) {
        if (typeof r == "number") {
            if (Number.isNaN(r)) return;
            a = r;
        } else
            typeof r == "boolean"
                ? (a = r)
                : typeof r == "string"
                  ? i.spaceSeparated
                      ? (a = ph(r))
                      : i.commaSeparated
                        ? (a = gh(r))
                        : i.commaOrSpaceSeparated
                          ? (a = ph(gh(r).join(" ")))
                          : (a = df(i, i.property, r))
                  : Array.isArray(r)
                    ? (a = r.concat())
                    : (a = i.property === "style" ? Ev(r) : String(r));
        if (Array.isArray(a)) {
            const o = [];
            for (; ++l < a.length; ) o[l] = df(i, i.property, a[l]);
            a = o;
        }
        i.property === "className" && Array.isArray(t.className) && (a = t.className.concat(a)), (t[i.property] = a);
    }
}
function Yu(e, t) {
    let n = -1;
    if (t != null)
        if (typeof t == "string" || typeof t == "number") e.push({ type: "text", value: String(t) });
        else if (Array.isArray(t)) for (; ++n < t.length; ) Yu(e, t[n]);
        else if (typeof t == "object" && "type" in t) t.type === "root" ? Yu(e, t.children) : e.push(t);
        else throw new Error("Expected node, nodes, or string, got `" + t + "`");
}
function df(e, t, n) {
    if (typeof n == "string") {
        if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
        if ((e.boolean || e.overloadedBoolean) && (n === "" || xi(n) === xi(t))) return !0;
    }
    return n;
}
function Ev(e) {
    const t = [];
    let n;
    for (n in e) Gu.call(e, n) && t.push([n, e[n]].join(": "));
    return t.join("; ");
}
function Mv(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length; ) t[e[n].toLowerCase()] = e[n];
    return t;
}
const Av = gp(um, "div"),
    Nv = [
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "solidColor",
        "textArea",
        "textPath",
    ],
    Dv = gp(sm, "g", Nv);
function Fv(e, t) {
    return (e ? vp(e, t || {}) : void 0) || { type: "root", children: [] };
}
function vp(e, t) {
    const n = Pv(e, t);
    return n && t.afterTransform && t.afterTransform(e, n), n;
}
function Pv(e, t) {
    switch (e.nodeType) {
        case 1:
            return Ov(e, t);
        case 3:
            return Lv(e);
        case 8:
            return Bv(e);
        case 9:
            return mf(e, t);
        case 10:
            return Iv();
        case 11:
            return mf(e, t);
        default:
            return;
    }
}
function mf(e, t) {
    return { type: "root", children: yp(e, t) };
}
function Iv() {
    return { type: "doctype" };
}
function Lv(e) {
    return { type: "text", value: e.nodeValue || "" };
}
function Bv(e) {
    return { type: "comment", value: e.nodeValue || "" };
}
function Ov(e, t) {
    const n = e.namespaceURI,
        r = n === Lo.svg ? Dv : Av,
        i = n === Lo.html ? e.tagName.toLowerCase() : e.tagName,
        l = n === Lo.html && i === "template" ? e.content : e,
        a = e.getAttributeNames(),
        o = {};
    let u = -1;
    for (; ++u < a.length; ) o[a[u]] = e.getAttribute(a[u]) || "";
    return r(i, o, yp(l, t));
}
function yp(e, t) {
    const n = e.childNodes,
        r = [];
    let i = -1;
    for (; ++i < n.length; ) {
        const l = vp(n[i], t);
        l !== void 0 && r.push(l);
    }
    return r;
}
const Rv = new DOMParser();
function Hv(e, t) {
    const n = t != null && t.fragment ? qv(e) : Rv.parseFromString(e, "text/html");
    return Fv(n);
}
function qv(e) {
    const t = document.createElement("template");
    return (t.innerHTML = e), t.content;
}
const pf = Object.assign,
    _v = "rehype-katex";
function Uv(e) {
    const t = e || {},
        n = t.throwOnError || !1;
    return (r, i) => {
        va(r, "element", l => {
            const a = l.properties && Array.isArray(l.properties.className) ? l.properties.className : [],
                o = a.includes("math-inline"),
                u = a.includes("math-display");
            if (!o && !u) return;
            const s = vv(l, { whitespace: "pre" });
            let h;
            try {
                h = rf.renderToString(s, pf({}, t, { displayMode: u, throwOnError: !0 }));
            } catch (p) {
                const m = p,
                    S = n ? "fail" : "message",
                    w = [_v, m.name.toLowerCase()].join(":");
                if ((i[S](m.message, l.position, w), m.name !== "ParseError")) {
                    l.children = [
                        {
                            type: "element",
                            tagName: "span",
                            properties: { className: ["katex-error"], title: String(m), style: "color:" + (t.errorColor || "#cc0000") },
                            children: [{ type: "text", value: s }],
                        },
                    ];
                    return;
                }
                h = rf.renderToString(s, pf({}, t, { displayMode: u, throwOnError: !1, strict: "ignore" }));
            }
            const d = Hv(h, { fragment: !0 });
            l.children = d.children;
        });
    };
}
const $v = () => {
    const [e, t] = Ju.useState(`# Welcome to Markdown Editor

Start typing...`);
    return st.createElement(
        "div",
        { className: "app-container" },
        st.createElement("header", { className: "header" }, "Markdown Editor"),
        st.createElement(
            "div",
            { className: "content-wrapper" },
            st.createElement("textarea", {
                className: "markdown-input",
                value: e,
                onChange: n => t(n.target.value),
                placeholder: "Write your Markdown here...",
            }),
            st.createElement("div", { className: "markdown-preview" }, st.createElement(mm, { children: e, remarkPlugins: [fv], rehypePlugins: [Uv] })),
        ),
    );
};
Bo.createRoot(document.getElementById("root")).render(st.createElement(st.StrictMode, null, st.createElement($v, null)));
