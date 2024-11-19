const g={}.hasOwnProperty;function z(r,e){const a=e||{};function t(c,...i){let n=t.invalid;const s=t.handlers;if(c&&g.call(c,r)){const m=String(c[r]);n=g.call(s,m)?s[m]:t.unknown}if(n)return n.call(this,c,...i)}return t.handlers=a.handlers||{},t.invalid=a.invalid,t.unknown=a.unknown,t}const p=/["&'<>`]/g,x=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,A=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,O=/[|\\{}()[\]^$+*?.]/g,d=new WeakMap;function h(r,e){if(r=r.replace(e.subset?v(e.subset):p,t),e.subset||e.escapeOnly)return r;return r.replace(x,a).replace(A,t);function a(c,i,n){return e.format((c.charCodeAt(0)-55296)*1024+c.charCodeAt(1)-56320+65536,n.charCodeAt(i+2),e)}function t(c,i,n){return e.format(c.charCodeAt(0),n.charCodeAt(i+1),e)}}function v(r){let e=d.get(r);return e||(e=E(r),d.set(r,e)),e}function E(r){const e=[];let a=-1;for(;++a<r.length;)e.push(r[a].replace(O,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}const b=/[\dA-Fa-f]/;function y(r,e,a){const t="&#x"+r.toString(16).toUpperCase();return a&&e&&!b.test(String.fromCharCode(e))?t:t+";"}const C=/\d/;function S(r,e,a){const t="&#"+String(r);return a&&e&&!C.test(String.fromCharCode(e))?t:t+";"}const w=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],l={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},R=["cent","copy","divide","gt","lt","not","para","times"],f={}.hasOwnProperty,o={};let u;for(u in l)f.call(l,u)&&(o[l[u]]=u);const q=/[^\dA-Za-z]/;function F(r,e,a,t){const c=String.fromCharCode(r);if(f.call(o,c)){const i=o[c],n="&"+i;return a&&w.includes(i)&&!R.includes(i)&&(!t||e&&e!==61&&q.test(String.fromCharCode(e)))?n:n+";"}return""}function T(r,e,a){let t=y(r,e,a.omitOptionalSemicolons),c;if((a.useNamedReferences||a.useShortestReferences)&&(c=F(r,e,a.omitOptionalSemicolons,a.attribute)),(a.useShortestReferences||!c)&&a.useShortestReferences){const i=S(r,e,a.omitOptionalSemicolons);i.length<t.length&&(t=i)}return c&&(!a.useShortestReferences||c.length<t.length)?c:t}function U(r){return"&#x"+r.toString(16).toUpperCase()+";"}function D(r,e){return h(r,Object.assign({format:T},e))}function I(r,e){return h(r,Object.assign({format:U},e))}function P(r,e){const a=String(r);if(typeof e!="string")throw new TypeError("Expected character");let t=0,c=a.indexOf(e);for(;c!==-1;)t++,c=a.indexOf(e,c+e.length);return t}export{w as a,I as b,P as c,D as s,z};