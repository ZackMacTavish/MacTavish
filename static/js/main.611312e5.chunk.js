(this.webpackJsonpmactavish=this.webpackJsonpmactavish||[]).push([[0],{52:function(n,e,t){},53:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var i,c,s,r,a,o=t(5),l=t.n(o),d=t(41),j=t.n(d),h=(t(52),t(20)),x=t(13),b=(t(53),t(8)),v=t(9),p=t(1),O=v.a.div(i||(i=Object(b.a)(["\n z-index: 2000;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    border: none;\n    background-color: #8888888f;\n   pointer-events: none;\n    overflow: hidden;\n    transform: translate3d(0,0,0);\n    position: fixed;\n   "]))),g=function(){var n=l.a.useRef(null);return l.a.useEffect((function(){document.addEventListener("mousemove",(function(e){var t=e.clientX,i=e.clientY,c=t-n.current.clientWidth/2,s=i-n.current.clientHeight/2;n.current.style.transform="translate3d(".concat(c,"px, ").concat(s,"px, 0)")}))}),[]),Object(p.jsx)(O,{ref:n})},f=t.p+"static/media/Final-M-SinglePiece.bb399667.svg",u=v.a.div(c||(c=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nbackground-color:rgba(0,0,0,0) ;\nposition: fixed;\nwidth: 100vw;\nheight: 8vh;\nz-index: 1000;\n"]))),m=v.a.ul(s||(s=Object(b.a)(["\ndisplay: flex;\nwidth: 100vw;\njustify-content: flex-end;\nlist-style-type: none;\ntext-decoration: none;\npadding: 5vw;\n"]))),w=v.a.div(r||(r=Object(b.a)(["\nfont-weight: 800;\npadding-right: 4vw;\nfont-size:  1.2rem;\ncolor: #a6d1ca;\n-webkit-transition: all 2s ease;\n  -moz-transition: all 2s ease;\n  -o-transition: all 2s ease;\n  transition: all 2s ease;\n\n&:hover{\n    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);\n    \n}\n\n"]))),y=v.a.img(a||(a=Object(b.a)(["\nwidth: clamp(50px, 2.6vw, 90px);\npadding-left: 5vw;\n-webkit-transition: all 2s ease;\n  -moz-transition: all 2s ease;\n  -o-transition: all 2s ease;\n  transition: all 2s ease;\n\n\n&:hover {\n    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);\n    \n}\n\n"])));function I(){return Object(p.jsxs)(u,{children:[Object(p.jsx)(h.b,{style:{cursor:"none"},to:"/",children:Object(p.jsx)(y,{src:f})}),Object(p.jsxs)(m,{children:[Object(p.jsx)(h.b,{style:{textDecoration:"none",cursor:"none"},to:"/Art",children:Object(p.jsx)(w,{children:"Art"})}),Object(p.jsx)(w,{children:"Design"}),Object(p.jsx)(w,{children:"About"})]})]})}var k,z,C=t(0),D=t(2),S=t(3),T=t(4),_=t(12),M=t(11),A=t(31),N=t(66),G=Object(N.a)({uTime:0,uColor:new M.Color(0,0,0),uTexture:new M.Texture},"\n      precision mediump float;\n      varying vec2 vUv;\n      varying float vWave;\n      uniform float uTime;\n      //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1611474117(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1611474117(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1611474117(vec4 x) {\n     return mod289_1611474117(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1611474117(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1611474117 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1611474117 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1611474117;\n  vec3 i1 = min( g_1611474117.xyz, l.zxy );\n  vec3 i2 = max( g_1611474117.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1611474117.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1611474117(i);\n  vec4 p = permute_1611474117( permute_1611474117( permute_1611474117(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1611474117.wyz - D_1611474117.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1611474117 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1611474117 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1611474117.xy,h.z);\n  vec3 p3 = vec3(a1_1611474117.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1611474117(vec4(dot(p0_1611474117,p0_1611474117), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1611474117 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1611474117,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n      void main() {\n        vUv = uv;\n        vec3 pos = position;\n        float noiseFreq = 2.0;\n        float noiseAmp = 0.4;\n        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);\n        pos.z += snoise3(noisePos) * noiseAmp;\n        vWave = pos.z;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  \n      }\n    ","\n      precision mediump float;\n      uniform vec3 uColor;\n      uniform float uTime;\n      uniform sampler2D uTexture;\n      varying vec2 vUv;\n      varying float vWave;\n      void main() {\n        float wave = vWave * 0.1;\n        vec3 texture = texture2D(uTexture, vUv + wave).rgb;\n        gl_FragColor = vec4(texture, 1.0); \n      }\n    ");Object(A.b)({WaveShaderMaterial:G});var P,L,B,E,R,F,W,V,Y,U,q=v.a.div(k||(k=Object(b.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nwidth: 100vw;\nheight: 100vh;\nbackground-color: #89aea9;\n"]))),H=v.a.div(z||(z=Object(b.a)(["\nbox-sizing: border-box;\nwidth: 100vw;\n\nheight: 100vh;\nmargin: 0;\npadding: 0;\n"]))),K=function(){var n=Object(o.useRef)();Object(A.c)((function(e){var t=e.clock;return n.current.uTime=t.getElapsedTime()}));var e=Object(A.d)(M.TextureLoader,["https://i.postimg.cc/CL8DLVQP/Black-Turtleneck-popart-01.jpg"]),t=Object(_.a)(e,1)[0];return Object(p.jsxs)("mesh",{children:[Object(p.jsx)("planeBufferGeometry",{args:[.8,.8,16,16]}),Object(p.jsx)("waveShaderMaterial",{uColor:"blue",ref:n,uTexture:t})]})},J=function(){return Object(p.jsx)(q,{children:Object(p.jsx)(H,{children:Object(p.jsx)(A.a,{camera:{fov:12,position:[0,0,5]},children:Object(p.jsx)(o.Suspense,{fallback:null,children:Object(p.jsx)(K,{})})})})})},X=t.p+"static/media/House-Web.fc656db2.png",Q=t.p+"static/media/dribbble.f58b1b84.svg",Z=t.p+"static/media/github.e96a021f.svg",$=t.p+"static/media/instagram.911649b2.svg",nn=t.p+"static/media/linkedin.3c6e7812.svg",en=v.a.div(P||(P=Object(b.a)(["\nposition: absolute;\nbottom: 2vw;\ndisplay: flex;\nwidth: 100vw;\njustify-content: center;\n\n\n"]))),tn=v.a.img(L||(L=Object(b.a)(["\npadding: 1vw;\nwidth: clamp(24px, 2vw, 60px);\n-webkit-transition: all 1s ease;\n  -moz-transition: all 1s ease;\n  -o-transition: all 1s ease;\n  transition: all 1s ease;\n\n\n&:hover{\n    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);\n \n\n}\n\n\n"])));function cn(){return Object(p.jsxs)(en,{children:[Object(p.jsx)(h.b,{to:"https://dribbble.com/Zmactavish",children:Object(p.jsx)(tn,{src:Q})}),Object(p.jsx)(tn,{src:Z}),Object(p.jsx)(tn,{src:$}),Object(p.jsx)(tn,{src:nn})]})}var sn,rn,an,on,ln,dn,jn,hn,xn,bn,vn,pn,On,gn,fn,un,mn,wn,yn,In,kn=v.a.div(B||(B=Object(b.a)(["\noverflow-y: hidden;\nwidth: 100vw;\n\n"]))),zn=v.a.h1(E||(E=Object(b.a)(["\ndisplay: flex;\npadding-top: 10vw;\nz-index: 200;\nposition: absolute;\nfont-size: 11rem;\npadding-left: 10vw;\nfont-weight: 800;\ncolor: white;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),Cn=v.a.div(R||(R=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nheight: 85vh;\nwidth: 100vw;\nbackground-color:",";\n"])),(function(n){return n.Backgroundcolor})),Dn=v.a.div(F||(F=Object(b.a)(["\nposition: absolute;\nright: 2vw;\nfont-family: 'Space Grotesk', sans-serif;\nfont-weight: 500;\nfont-size: 2.7rem;\nwidth: 40vw;\ncolor: white;\n"]))),Sn=v.a.div(W||(W=Object(b.a)(["\nposition: absolute;\nleft: 3vw;\nfont-family: 'Space Grotesk', sans-serif;\nfont-weight: 500;\nfont-size: 2.7rem;\nwidth: 40vw;\ncolor: white;\n"]))),Tn=v.a.img(V||(V=Object(b.a)(["\nwidth: 50vw;\npadding-left: 2vw;\n"]))),_n=v.a.ul(Y||(Y=Object(b.a)(["\ncolor: white;\nposition: absolute;\nright: 3vw;\nfont-size: 3rem;\nlist-style-type: none;\ntext-align: right;\n"]))),Mn=v.a.li(U||(U=Object(b.a)(['\nalign-items: center;\npadding-bottom: 2vh;\nfont-weight: 500;\n\n  &:after {\n    content:"";\n    display: inline-block;\n    width: clamp(20px, 17vw, 500px);\n  height: 10px;\n  margin-bottom: 5px;\n  margin-left: 1vw;\n  background: white;\n  }\n\n  &:hover {\n    content:"";\n   opacity: 0.8;\n  }\n']))),An=function(n){Object(S.a)(t,n);var e=Object(T.a)(t);function t(){return Object(C.a)(this,t),e.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(kn,{children:[Object(p.jsxs)(zn,{children:["Storytelling ",Object(p.jsx)("br",{}),"through Art"]}),Object(p.jsx)(J,{}),Object(p.jsxs)(Cn,{Backgroundcolor:"#89aea9",children:[Object(p.jsx)(Tn,{src:X}),Object(p.jsx)(Dn,{children:"Throughout my life I\u2019ve lived in 24 different houses. My current work focuses on nostalgia, memory, and past experiences."})]}),Object(p.jsxs)(Cn,{Backgroundcolor:"#89aea9",children:[Object(p.jsx)(Sn,{children:"Art gives me the freedom to share my story. Explore the work I\u2019ve made in the past."}),Object(p.jsxs)(_n,{children:[Object(p.jsx)(Mn,{children:"DWELLING"}),Object(p.jsx)(h.b,{style:{textDecoration:"none",color:"white"},to:"/Composition",children:Object(p.jsx)(Mn,{children:"COMPOSITION"})}),Object(p.jsx)(Mn,{children:"PAINTINGS"}),Object(p.jsx)(Mn,{children:"COLLAGE"}),Object(p.jsx)(Mn,{children:"PRINTMAKING"}),Object(p.jsx)(Mn,{children:"PHOTO"}),Object(p.jsx)(Mn,{children:"3D"})]})]})]})})}}]),t}(l.a.Component),Nn=An,Gn=t.p+"static/media/FullCover.e7b25680.png",Pn=t.p+"static/media/Render1.523c5c8c.png",Ln=t.p+"static/media/Artbook.5823747d.png",Bn=t.p+"static/media/Orbital.445643aa.jpeg",En=t.p+"static/media/Spraypaintwash.575f7283.png",Rn=t.p+"static/media/Render2.b109b4bf.png",Fn=t.p+"static/media/Twin1.bb8d3dd1.jpeg",Wn=t.p+"static/media/Twin2.7f17290e.jpeg",Vn=t.p+"static/media/Staircases.efb817b0.jpg",Yn=t.p+"static/media/heartwhite.1906a98d.jpeg",Un=t.p+"static/media/heartblack.a3ef146a.jpg",qn=t.p+"static/media/Birds.3795d71d.jpg",Hn=t.p+"static/media/Brooklyn.7934253e.jpg",Kn=t.p+"static/media/Coney.3b7a1b93.jpg",Jn=t.p+"static/media/Brooklyn2.b0da43be.jpg",Xn=t.p+"static/media/Render4.37edc263.png",Qn=t.p+"static/media/Rug.e3d8fa06.jpg",Zn=t.p+"static/media/Mash1.fde8984a.png",$n=t.p+"static/media/Mash2.ff8f5477.png",ne=t.p+"static/media/Render5.81dcb358.png",ee=t.p+"static/media/Mash3.a268da5b.png",te=t.p+"static/media/Mash4.a5427d90.png",ie=t.p+"static/media/Mash5.37a6774e.png",ce=t.p+"static/media/Mattos.b52a51e2.png",se=t.p+"static/media/No.3.13699040.png",re=v.a.div(sn||(sn=Object(b.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100vw;\nheight: 100vh;\noverflow: hidden;\n"]))),ae=v.a.img(rn||(rn=Object(b.a)(["\nwidth: 60vw;\n\n"]))),oe=v.a.img(an||(an=Object(b.a)(["\ngrid-row-start: 1;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),le=v.a.img(on||(on=Object(b.a)(["\ngrid-row-start: 1;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: auto;\nwidth: 40vw;\nalign-self: flex-end;\n"]))),de=v.a.img(ln||(ln=Object(b.a)(["\ngrid-row-start: 1;\ngrid-column-start: 3;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),je=v.a.div(dn||(dn=Object(b.a)(["\ngrid-row-start: 2;\ngrid-column-start: 2;\njustify-self: flex-start;\ncolor: #626262;\npadding: 0;\nmargin: 0;\nline-height: 0.6;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),he=v.a.img(jn||(jn=Object(b.a)(["\ngrid-row-start: 3;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),xe=v.a.img(hn||(hn=Object(b.a)(["\ngrid-row-start: 5;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),be=v.a.img(xn||(xn=Object(b.a)(["\nwidth: 100vw;\nheight: auto;\nbackground-size: contain;\n"]))),ve=v.a.div(bn||(bn=Object(b.a)(["\nposition: absolute;\nright: 3vw;\nfont-family: 'Space Grotesk', sans-serif;\nfont-weight: 500;\nfont-size: 2.7rem;\nwidth: 40vw;\ncolor: #626262;\n"]))),pe=v.a.div(vn||(vn=Object(b.a)(["\ndisplay: grid;\ngrid-template-columns: 10vw 40vw 40vw 10vw;\ngrid-template-rows: ",";\npadding-top: 5vh;\nbackground-color:",";\n"])),(function(n){return n.Grids}),(function(n){return n.Backgroundcolor})),Oe=v.a.div(pn||(pn=Object(b.a)(["\ndisplay: grid;\ngrid-template-columns:  10vw 40vw 40vw 10vw;\ngrid-template-rows: 85vh 7vh 85vh 7vh;\npadding-top: 5vh;\nbackground-color:",";\n"])),(function(n){return n.Backgroundcolor})),ge=v.a.div(On||(On=Object(b.a)(["\ndisplay: grid;\ngrid-template-columns:  10vw 40vw 40vw 10vw;\ngrid-template-rows: 85vh 10vh 15vh;\npadding-top: 5vh;\nbackground-color:",";\n"])),(function(n){return n.Backgroundcolor})),fe=v.a.div(gn||(gn=Object(b.a)(["\ndisplay: grid;\ngrid-template-columns:  10vw 40vw 40vw 10vw;\ngrid-template-rows: 85vh 10vh;\npadding-top: 5vh;\nbackground-color:",";\n"])),(function(n){return n.Backgroundcolor})),ue=v.a.div(fn||(fn=Object(b.a)(["\ndisplay: grid;\ngrid-column-start: 3;\ngrid-row-start: 1;\nalign-self: flex-end;\npadding: 0;\nmargin: 0;\npadding-left: 4.5vw;\nline-height: 0;\ncolor: #626262;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),me=v.a.div(un||(un=Object(b.a)(["\ndisplay: grid;\ngrid-column-start: 3;\ngrid-row-start: 3;\nalign-self: flex-end;\npadding: 0;\nmargin: 0;\npadding-left: 4.5vw;\nline-height: 0;\ncolor: #626262;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),we=v.a.div(mn||(mn=Object(b.a)(["\ndisplay: grid;\ngrid-column-start: 3;\ngrid-row-start: 5;\nalign-self: flex-end;\npadding: 0;\nmargin: 0;\npadding-left: 4.5vw;\nline-height: 0;\ncolor: #626262;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),ye=v.a.h1(wn||(wn=Object(b.a)(["\nfont-weight: 700;\nfont-size: 2.5rem;\n"]))),Ie=v.a.h3(yn||(yn=Object(b.a)(["\nfont-weight: 500;\nfont-size: 2rem;\n"]))),ke=v.a.h2(In||(In=Object(b.a)(["\nfont-weight: 400;\nfont-size: 1.4rem;\n"])));function ze(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(re,{children:Object(p.jsx)(ae,{src:Gn})}),Object(p.jsx)(be,{src:Pn}),Object(p.jsxs)(Cn,{children:[Object(p.jsx)(Tn,{src:Ln}),Object(p.jsx)(ve,{children:"Composition was my first solo art exhibition. I released a limited edition of 30 copies of a 46 page art book for the show."})]}),Object(p.jsxs)(Oe,{children:[Object(p.jsx)(oe,{src:Bn}),Object(p.jsxs)(ue,{children:[Object(p.jsx)(ye,{children:"ORBITAL"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Acrylic & spray paint on woodpanel."})]}),Object(p.jsx)(he,{src:En}),Object(p.jsxs)(me,{children:[Object(p.jsx)(ye,{children:"ERASURE I"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Acrylic, spray paint, & spray paint remover on woodpanel."})]})]}),Object(p.jsx)(be,{src:Rn}),Object(p.jsxs)(ge,{children:[Object(p.jsx)(oe,{src:Fn}),Object(p.jsx)(de,{src:Wn}),Object(p.jsxs)(je,{children:[Object(p.jsx)(ye,{children:"EPHEMERAL I & II"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Acrylic & spray paint on wood panels."})]})]}),Object(p.jsxs)(fe,{children:[Object(p.jsx)(oe,{src:Vn}),Object(p.jsxs)(ue,{children:[Object(p.jsx)(ye,{children:"STAIRCASES"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Graphite on heavy paper."})]})]}),Object(p.jsxs)(ge,{children:[Object(p.jsx)(oe,{src:Yn}),Object(p.jsx)(de,{src:Un}),Object(p.jsxs)(je,{children:[Object(p.jsx)(ye,{children:"COMPOSITION X"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Acrylic on wood panel."})]})]}),Object(p.jsx)(be,{src:qn}),Object(p.jsxs)(pe,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(p.jsx)(oe,{src:Kn}),Object(p.jsxs)(ue,{children:[Object(p.jsx)(ye,{children:"CONEY ISLAND, NY"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Film photograph with light leaks."})]}),Object(p.jsx)(he,{src:Hn}),Object(p.jsxs)(me,{children:[Object(p.jsx)(ye,{children:"BROOKLYN, NY I"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Double exposure film photograph."})]}),Object(p.jsx)(xe,{src:Jn}),Object(p.jsxs)(we,{children:[Object(p.jsx)(ye,{children:"BROOKLYN, NY II"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"Double exposure film photograph."})]})]}),Object(p.jsx)(be,{src:Xn}),Object(p.jsxs)(pe,{Grids:"60vh 7vh 85vh 7vh 85vh 7vh",children:[Object(p.jsx)(le,{src:Qn}),Object(p.jsxs)(ue,{children:[Object(p.jsx)(ye,{children:"RUG I"}),Object(p.jsx)(Ie,{children:"2021"}),Object(p.jsx)(ke,{children:"100% Wool & Monks cloth."})]}),Object(p.jsx)(he,{src:Zn}),Object(p.jsxs)(me,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION III"}),Object(p.jsx)(Ie,{children:"2019"}),Object(p.jsx)(ke,{children:"Digital collage (study for a painting)."})]}),Object(p.jsx)(xe,{src:$n}),Object(p.jsxs)(we,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION IV"}),Object(p.jsx)(Ie,{children:"2019"}),Object(p.jsx)(ke,{children:"Digital collage (study for a painting)."})]})]}),Object(p.jsx)(be,{src:ne}),Object(p.jsxs)(pe,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(p.jsx)(oe,{src:ee}),Object(p.jsxs)(ue,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION V"}),Object(p.jsx)(Ie,{children:"2019"}),Object(p.jsx)(ke,{children:"Digital collage (study for a painting)."})]}),Object(p.jsx)(he,{src:te}),Object(p.jsxs)(me,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION VI"}),Object(p.jsx)(Ie,{children:"2019"}),Object(p.jsx)(ke,{children:"Digital collage (study for a painting)."})]}),Object(p.jsx)(xe,{src:ie}),Object(p.jsxs)(we,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION VII"}),Object(p.jsx)(Ie,{children:"2020"}),Object(p.jsx)(ke,{children:"Digital collage (study for a painting)."})]})]}),Object(p.jsx)(be,{src:ce}),Object(p.jsxs)(pe,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(p.jsx)(oe,{src:se}),Object(p.jsxs)(ue,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION I"}),Object(p.jsx)(Ie,{children:"2018"}),Object(p.jsx)(ke,{children:"Digital collage (study for a screenprint)."})]}),Object(p.jsx)(he,{src:te}),Object(p.jsxs)(me,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION VI"}),Object(p.jsx)(Ie,{children:"2019"}),Object(p.jsx)(ke,{children:"Digital collage (study for a painting)."})]}),Object(p.jsx)(xe,{src:ie}),Object(p.jsxs)(we,{children:[Object(p.jsx)(ye,{children:"Design for COMPOSITION VII"}),Object(p.jsx)(Ie,{children:"2020"}),Object(p.jsx)(ke,{children:"Digital collage (study for a painting)."})]})]})]})}var Ce,De,Se=t.p+"static/media/Collection_Web.1bd3f051.png",Te=v.a.div(Ce||(Ce=Object(b.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nwidth: 100vw;\nheight: 100vh;\nbackground-color: #89aea9;\n"]))),_e=v.a.img(De||(De=Object(b.a)(["\nwidth: clamp(500px, 75vw, 2100px);\n"])));function Me(){return Object(p.jsxs)(Te,{children:[Object(p.jsx)(_e,{src:Se}),Object(p.jsx)(cn,{})]})}var Ae=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(I,{}),Object(p.jsxs)(x.c,{children:[Object(p.jsx)(x.a,{path:"/Composition",component:ze}),Object(p.jsx)(x.a,{path:"/Art",component:Nn}),Object(p.jsx)(x.a,{exact:!0,path:"/MacTavish",component:Me})]})]})})},Ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),s(n),r(n)}))};j.a.render(Object(p.jsx)(l.a.StrictMode,{children:Object(p.jsx)(Ae,{})}),document.getElementById("root")),Ne()}},[[64,1,2]]]);
//# sourceMappingURL=main.611312e5.chunk.js.map