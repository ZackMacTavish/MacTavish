(this.webpackJsonpmactavish=this.webpackJsonpmactavish||[]).push([[0],{52:function(e,n,t){},53:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var c,i,s,r,a,o=t(5),j=t.n(o),l=t(41),d=t.n(l),h=(t(52),t(21)),x=t(13),b=(t(53),t(8)),p=t(9),O=t(0),v=p.a.div(c||(c=Object(b.a)(["\n z-index: 2000;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    border: none;\n    background-color: #8888888f;\n   pointer-events: none;\n    overflow: hidden;\n    transform: translate3d(0,0,0);\n    position: fixed;\n   "]))),g=function(){var e=j.a.useRef(null);return j.a.useEffect((function(){document.addEventListener("mousemove",(function(n){var t=n.clientX,c=n.clientY,i=t-e.current.clientWidth/2,s=c-e.current.clientHeight/2;e.current.style.transform="translate3d(".concat(i,"px, ").concat(s,"px, 0)")}))}),[]),Object(O.jsx)(v,{ref:e})},m=t.p+"static/media/Final-M-SinglePiece.bb399667.svg",f=p.a.div(i||(i=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nbackground-color:rgba(0,0,0,0) ;\nposition: fixed;\nwidth: 100vw;\nheight: 8vh;\nz-index: 1000;\n"]))),u=p.a.ul(s||(s=Object(b.a)(["\ndisplay: flex;\nwidth: 100vw;\njustify-content: flex-end;\nlist-style-type: none;\ntext-decoration: none;\npadding: 5vw;\n"]))),y=p.a.div(r||(r=Object(b.a)(["\nfont-weight: 800;\npadding-right: 4vw;\nfont-size:  1.2rem;\ncolor: #a6d1ca;\n-webkit-transition: all 2s ease;\n  -moz-transition: all 2s ease;\n  -o-transition: all 2s ease;\n  transition: all 2s ease;\n\n&:hover{\n    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);\n    \n}\n\n"]))),w=p.a.img(a||(a=Object(b.a)(["\nwidth: clamp(50px, 2.6vw, 90px);\npadding-left: 5vw;\n-webkit-transition: all 2s ease;\n  -moz-transition: all 2s ease;\n  -o-transition: all 2s ease;\n  transition: all 2s ease;\n\n\n&:hover {\n    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);\n    \n}\n\n"])));function k(){return Object(O.jsxs)(f,{children:[Object(O.jsx)(h.b,{style:{cursor:"none"},to:"/MacTavish",children:Object(O.jsx)(w,{src:m})}),Object(O.jsxs)(u,{children:[Object(O.jsx)(h.b,{style:{textDecoration:"none",cursor:"none"},to:"/Art",children:Object(O.jsx)(y,{children:"Art"})}),Object(O.jsx)(y,{children:"Design"}),Object(O.jsx)(y,{children:"About"})]})]})}var I,C,z=t(1),D=t(2),S=t(3),A=t(4),T=t(12),G=t(11),_=t(31),N=t(66),M=Object(N.a)({uTime:0,uColor:new G.Color(0,0,0),uTexture:new G.Texture},"\n      precision mediump float;\n      varying vec2 vUv;\n      varying float vWave;\n      uniform float uTime;\n      //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1611474117(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1611474117(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1611474117(vec4 x) {\n     return mod289_1611474117(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1611474117(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_1611474117 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_1611474117 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_1611474117;\n  vec3 i1 = min( g_1611474117.xyz, l.zxy );\n  vec3 i2 = max( g_1611474117.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_1611474117.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1611474117(i);\n  vec4 p = permute_1611474117( permute_1611474117( permute_1611474117(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_1611474117.wyz - D_1611474117.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_1611474117 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1611474117 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_1611474117.xy,h.z);\n  vec3 p3 = vec3(a1_1611474117.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1611474117(vec4(dot(p0_1611474117,p0_1611474117), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1611474117 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1611474117,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n      void main() {\n        vUv = uv;\n        vec3 pos = position;\n        float noiseFreq = 2.0;\n        float noiseAmp = 0.4;\n        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);\n        pos.z += snoise3(noisePos) * noiseAmp;\n        vWave = pos.z;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  \n      }\n    ","\n      precision mediump float;\n      uniform vec3 uColor;\n      uniform float uTime;\n      uniform sampler2D uTexture;\n      varying vec2 vUv;\n      varying float vWave;\n      void main() {\n        float wave = vWave * 0.1;\n        vec3 texture = texture2D(uTexture, vUv + wave).rgb;\n        gl_FragColor = vec4(texture, 1.0); \n      }\n    ");Object(_.b)({WaveShaderMaterial:M});var B,L,P,R,E,F,W,H,Y,U,V=p.a.div(I||(I=Object(b.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nwidth: 100vw;\nheight: 100vh;\nbackground-color: #89aea9;\n"]))),K=p.a.div(C||(C=Object(b.a)(["\nbox-sizing: border-box;\nwidth: 100vw;\n\nheight: 100vh;\nmargin: 0;\npadding: 0;\n"]))),q=function(){var e=Object(o.useRef)();Object(_.c)((function(n){var t=n.clock;return e.current.uTime=t.getElapsedTime()}));var n=Object(_.d)(G.TextureLoader,["https://i.postimg.cc/CL8DLVQP/Black-Turtleneck-popart-01.jpg"]),t=Object(T.a)(n,1)[0];return Object(O.jsxs)("mesh",{children:[Object(O.jsx)("planeBufferGeometry",{args:[.8,.8,16,16]}),Object(O.jsx)("waveShaderMaterial",{uColor:"blue",ref:e,uTexture:t})]})},J=function(){return Object(O.jsx)(V,{children:Object(O.jsx)(K,{children:Object(O.jsx)(_.a,{camera:{fov:12,position:[0,0,5]},children:Object(O.jsx)(o.Suspense,{fallback:null,children:Object(O.jsx)(q,{})})})})})},X=t.p+"static/media/House-Web.fc656db2.png",Z=t.p+"static/media/dribbble.f58b1b84.svg",Q=t.p+"static/media/github.e96a021f.svg",$=t.p+"static/media/instagram.911649b2.svg",ee=t.p+"static/media/linkedin.3c6e7812.svg",ne=p.a.div(B||(B=Object(b.a)(["\nposition: absolute;\nbottom: 2vw;\ndisplay: flex;\nwidth: 100vw;\njustify-content: center;\n\n\n"]))),te=p.a.img(L||(L=Object(b.a)(["\npadding: 1vw;\nwidth: clamp(24px, 2vw, 60px);\n-webkit-transition: all 1s ease;\n  -moz-transition: all 1s ease;\n  -o-transition: all 1s ease;\n  transition: all 1s ease;\n\n\n&:hover{\n    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);\n \n\n}\n\n\n"])));function ce(){return Object(O.jsxs)(ne,{children:[Object(O.jsx)("a",{href:"https://dribbble.com/Zmactavish",target:"_blank",children:Object(O.jsx)(te,{src:Z})}),Object(O.jsx)("a",{href:"  https://github.com/ZackMacTavish",target:"_blank",children:Object(O.jsx)(te,{src:Q})}),Object(O.jsx)("a",{href:"https://www.instagram.com/seuzerone/?hl=en",target:"_blank",children:Object(O.jsx)(te,{src:$})}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/zacharymactavish/",target:"_blank",children:Object(O.jsx)(te,{src:ee})})]})}var ie,se,re,ae,oe,je,le,de,he,xe,be,pe,Oe,ve,ge,me,fe,ue=p.a.div(P||(P=Object(b.a)(["\noverflow-y: hidden;\nwidth: 100vw;\n\n"]))),ye=p.a.h1(R||(R=Object(b.a)(["\ndisplay: flex;\npadding-top: 10vw;\nz-index: 200;\nposition: absolute;\nfont-size: 11rem;\npadding-left: 10vw;\nfont-weight: 800;\ncolor: white;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),we=p.a.div(E||(E=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nheight: 85vh;\nwidth: 100vw;\nbackground-color:",";\n"])),(function(e){return e.Backgroundcolor})),ke=p.a.div(F||(F=Object(b.a)(["\nposition: absolute;\nright: 2vw;\nfont-family: 'Space Grotesk', sans-serif;\nfont-weight: 500;\nfont-size: 2.7rem;\nwidth: 40vw;\ncolor: white;\n"]))),Ie=p.a.div(W||(W=Object(b.a)(["\nposition: absolute;\nleft: 3vw;\nfont-family: 'Space Grotesk', sans-serif;\nfont-weight: 500;\nfont-size: 2.7rem;\nwidth: 40vw;\ncolor: white;\n"]))),Ce=p.a.img(H||(H=Object(b.a)(["\nwidth: 50vw;\npadding-left: 2vw;\n"]))),ze=p.a.ul(Y||(Y=Object(b.a)(["\ncolor: white;\nposition: absolute;\nright: 3vw;\nfont-size: 3rem;\nlist-style-type: none;\ntext-align: right;\n"]))),De=p.a.li(U||(U=Object(b.a)(['\nalign-items: center;\npadding-bottom: 2vh;\nfont-weight: 500;\n\n  &:after {\n    content:"";\n    display: inline-block;\n    width: clamp(20px, 17vw, 500px);\n  height: 10px;\n  margin-bottom: 5px;\n  margin-left: 1vw;\n  background: white;\n  }\n\n  &:hover {\n    content:"";\n   opacity: 0.8;\n  }\n']))),Se=function(e){Object(S.a)(t,e);var n=Object(A.a)(t);function t(){return Object(z.a)(this,t),n.apply(this,arguments)}return Object(D.a)(t,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(ue,{children:[Object(O.jsxs)(ye,{children:["Storytelling ",Object(O.jsx)("br",{}),"through Art"]}),Object(O.jsx)(J,{}),Object(O.jsxs)(we,{Backgroundcolor:"#89aea9",children:[Object(O.jsx)(Ce,{src:X}),Object(O.jsx)(ke,{children:"Throughout my life I\u2019ve lived in 24 different houses. My current work focuses on nostalgia, memory, and past experiences."})]}),Object(O.jsxs)(we,{Backgroundcolor:"#89aea9",children:[Object(O.jsx)(Ie,{children:"Art gives me the freedom to share my story. Explore the work I\u2019ve made in the past."}),Object(O.jsxs)(ze,{children:[Object(O.jsx)(De,{children:"DWELLING"}),Object(O.jsx)(h.b,{style:{textDecoration:"none",color:"white"},to:"/Composition",children:Object(O.jsx)(De,{children:"COMPOSITION"})}),Object(O.jsx)(De,{children:"PAINTINGS"}),Object(O.jsx)(De,{children:"COLLAGE"}),Object(O.jsx)(De,{children:"PRINTMAKING"}),Object(O.jsx)(h.b,{style:{textDecoration:"none",color:"white"},to:"/Photography",children:Object(O.jsx)(De,{children:"PHOTO"})}),Object(O.jsx)(De,{children:"3D"})]})]})]})})}}]),t}(j.a.Component),Ae=Se,Te=t.p+"static/media/FullCover.e7b25680.png",Ge=t.p+"static/media/Render1.523c5c8c.png",_e=t.p+"static/media/Artbook.5823747d.png",Ne=t.p+"static/media/Orbital.445643aa.jpeg",Me=t.p+"static/media/Spraypaintwash.575f7283.png",Be=t.p+"static/media/Render2.b109b4bf.png",Le=t.p+"static/media/Twin1.bb8d3dd1.jpeg",Pe=t.p+"static/media/Twin2.7f17290e.jpeg",Re=t.p+"static/media/Staircases.efb817b0.jpg",Ee=t.p+"static/media/heartwhite.1906a98d.jpeg",Fe=t.p+"static/media/heartblack.a3ef146a.jpg",We=t.p+"static/media/Birds.3795d71d.jpg",He=t.p+"static/media/Brooklyn.7934253e.jpg",Ye=t.p+"static/media/Coney.3b7a1b93.jpg",Ue=t.p+"static/media/Brooklyn2.b0da43be.jpg",Ve=t.p+"static/media/Render4.37edc263.png",Ke=t.p+"static/media/Rug.e3d8fa06.jpg",qe=t.p+"static/media/Mash1.fde8984a.png",Je=t.p+"static/media/Mash2.ff8f5477.png",Xe=t.p+"static/media/Render5.81dcb358.png",Ze=t.p+"static/media/Mash3.a268da5b.png",Qe=t.p+"static/media/Mash4.a5427d90.png",$e=t.p+"static/media/Mash5.37a6774e.png",en=t.p+"static/media/Mattos.b52a51e2.png",nn=t.p+"static/media/No.3.13699040.png",tn=t.p+"static/media/Grain.14c11df1.jpg",cn=p.a.div(ie||(ie=Object(b.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100vw;\nheight: 100vh;\noverflow: hidden;\n"]))),sn=p.a.img(se||(se=Object(b.a)(["\nwidth: 60vw;\n\n"]))),rn=p.a.img(re||(re=Object(b.a)(["\ngrid-row-start: 1;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),an=p.a.img(ae||(ae=Object(b.a)(["\ngrid-row-start: 1;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: auto;\nwidth: 40vw;\nalign-self: flex-end;\n"]))),on=p.a.img(oe||(oe=Object(b.a)(["\ngrid-row-start: 1;\ngrid-column-start: 3;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),jn=p.a.div(je||(je=Object(b.a)(["\ngrid-row-start: 2;\ngrid-column-start: 2;\njustify-self: flex-start;\ncolor: #626262;\npadding: 0;\nmargin: 0;\nline-height: 0.6;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),ln=p.a.img(le||(le=Object(b.a)(["\ngrid-row-start: 3;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),dn=p.a.img(de||(de=Object(b.a)(["\ngrid-row-start: 5;\ngrid-column-start: 2;\njustify-self: flex-start;\nheight: 85vh;\nwidth: auto;\n"]))),hn=p.a.img(he||(he=Object(b.a)(["\nwidth: 100vw;\nheight: auto;\nbackground-size: contain;\n"]))),xn=p.a.div(xe||(xe=Object(b.a)(["\nposition: absolute;\nright: 3vw;\nfont-family: 'Space Grotesk', sans-serif;\nfont-weight: 500;\nfont-size: 2.7rem;\nwidth: 40vw;\ncolor: #626262;\n"]))),bn=p.a.div(be||(be=Object(b.a)(["\ndisplay: grid;\ngrid-template-columns: 10vw 40vw 40vw 10vw;\ngrid-template-rows: ",";\npadding-top: 5vh;\nbackground-color:",";\n"])),(function(e){return e.Grids}),(function(e){return e.Backgroundcolor})),pn=p.a.div(pe||(pe=Object(b.a)(["\ndisplay: grid;\ngrid-column-start: 3;\ngrid-row-start: 1;\nalign-self: flex-end;\npadding: 0;\nmargin: 0;\npadding-left: 4.5vw;\nline-height: 0;\ncolor: #626262;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),On=p.a.div(Oe||(Oe=Object(b.a)(["\ndisplay: grid;\ngrid-column-start: 3;\ngrid-row-start: 3;\nalign-self: flex-end;\npadding: 0;\nmargin: 0;\npadding-left: 4.5vw;\nline-height: 0;\ncolor: #626262;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),vn=p.a.div(ve||(ve=Object(b.a)(["\ndisplay: grid;\ngrid-column-start: 3;\ngrid-row-start: 5;\nalign-self: flex-end;\npadding: 0;\nmargin: 0;\npadding-left: 4.5vw;\nline-height: 0;\ncolor: #626262;\nfont-family: 'Space Grotesk', sans-serif;\n"]))),gn=p.a.h1(ge||(ge=Object(b.a)(["\nfont-weight: 700;\nfont-size: 2.5rem;\n"]))),mn=p.a.h3(me||(me=Object(b.a)(["\nfont-weight: 500;\nfont-size: 2rem;\n"]))),fn=p.a.h2(fe||(fe=Object(b.a)(["\nfont-weight: 400;\nfont-size: 1.4rem;\n"])));function un(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(cn,{children:Object(O.jsx)(sn,{src:Te})}),Object(O.jsx)(hn,{src:Ge}),Object(O.jsxs)(we,{children:[Object(O.jsx)(Ce,{src:_e}),Object(O.jsx)(xn,{children:"Composition was my first solo art exhibition. I released a limited edition of 30 copies of a 46 page art book for the show."})]}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh",children:[Object(O.jsx)(rn,{src:Ne}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"ORBITAL"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Acrylic & spray paint on woodpanel."})]}),Object(O.jsx)(ln,{src:Me}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"ERASURE I"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Acrylic, spray paint, & spray paint remover on woodpanel."})]})]}),Object(O.jsx)(hn,{src:Be}),Object(O.jsxs)(bn,{Grids:"85vh 10vh 15vh",children:[Object(O.jsx)(rn,{src:Le}),Object(O.jsx)(on,{src:Pe}),Object(O.jsxs)(jn,{children:[Object(O.jsx)(gn,{children:"EPHEMERAL I & II"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Acrylic & spray paint on wood panels."})]})]}),Object(O.jsxs)(bn,{Grids:"85vh 10vh",children:[Object(O.jsx)(rn,{src:Re}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"STAIRCASES"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Graphite on heavy paper."})]})]}),Object(O.jsxs)(bn,{Grids:"85vh 10vh 15vh",children:[Object(O.jsx)(rn,{src:Ee}),Object(O.jsx)(on,{src:Fe}),Object(O.jsxs)(jn,{children:[Object(O.jsx)(gn,{children:"COMPOSITION X"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Acrylic on wood panel."})]})]}),Object(O.jsx)(hn,{src:We}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(O.jsx)(rn,{src:Ye}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"CONEY ISLAND, NY"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Film photograph with light leaks."})]}),Object(O.jsx)(ln,{src:He}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"BROOKLYN, NY I"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]}),Object(O.jsx)(dn,{src:Ue}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(gn,{children:"BROOKLYN, NY II"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]})]}),Object(O.jsx)(hn,{src:Ve}),Object(O.jsxs)(bn,{Grids:"60vh 7vh 85vh 7vh 85vh 7vh",children:[Object(O.jsx)(an,{src:Ke}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"RUG I"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"100% Wool & Monks cloth."})]}),Object(O.jsx)(ln,{src:qe}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"Design for COMPOSITION III"}),Object(O.jsx)(mn,{children:"2019"}),Object(O.jsx)(fn,{children:"Digital collage (study for a painting)."})]}),Object(O.jsx)(dn,{src:Je}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(gn,{children:"Design for COMPOSITION IV"}),Object(O.jsx)(mn,{children:"2019"}),Object(O.jsx)(fn,{children:"Digital collage (study for a painting)."})]})]}),Object(O.jsx)(hn,{src:Xe}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(O.jsx)(rn,{src:Ze}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"Design for COMPOSITION V"}),Object(O.jsx)(mn,{children:"2019"}),Object(O.jsx)(fn,{children:"Digital collage (study for a painting)."})]}),Object(O.jsx)(ln,{src:Qe}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"Design for COMPOSITION VI"}),Object(O.jsx)(mn,{children:"2019"}),Object(O.jsx)(fn,{children:"Digital collage (study for a painting)."})]}),Object(O.jsx)(dn,{src:$e}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(gn,{children:"Design for COMPOSITION VII"}),Object(O.jsx)(mn,{children:"2020"}),Object(O.jsx)(fn,{children:"Digital collage (study for a painting)."})]})]}),Object(O.jsx)(hn,{src:en}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh ",children:[Object(O.jsx)(rn,{src:nn}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"Design for COMPOSITION I"}),Object(O.jsx)(mn,{children:"2018"}),Object(O.jsx)(fn,{children:"Digital collage (study for a screenprint)."})]}),Object(O.jsx)(ln,{src:tn}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"GRAIN"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Acrylic & spraypaint on yupo paper."})]})]})]})}var yn,wn,kn=t.p+"static/media/Collection_Web.1bd3f051.png",In=p.a.div(yn||(yn=Object(b.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nwidth: 100vw;\nheight: 100vh;\nbackground-color: #89aea9;\n"]))),Cn=p.a.img(wn||(wn=Object(b.a)(["\nwidth: clamp(500px, 75vw, 2100px);\n"])));function zn(){return Object(O.jsxs)(In,{children:[Object(O.jsx)(Cn,{src:kn}),Object(O.jsx)(ce,{})]})}var Dn,Sn,An=t.p+"static/media/polaroid1.5be54291.jpg",Tn=t.p+"static/media/polaroid2.a289cc91.jpg",Gn=t.p+"static/media/polaroid3.af8ffec1.jpg",_n=t.p+"static/media/Greenhut.8dd65acd.jpg",Nn=t.p+"static/media/1821.e5a95648.jpg",Mn=t.p+"static/media/BirdyBrooklyn.a0dacef0.jpg",Bn=t.p+"static/media/Coney2.6eaf0ba6.jpg",Ln=t.p+"static/media/Cannon1.2e69974c.jpg",Pn=t.p+"static/media/Cannon2.d428deaf.jpg",Rn=t.p+"static/media/Cannon3.a7a12e8c.jpg",En=t.p+"static/media/Kevin.035ae82f.jpg",Fn=t.p+"static/media/Skull.800f913d.jpg",Wn=t.p+"static/media/2skulls.78aefa23.jpg",Hn=t.p+"static/media/HawaiianChurch.88a32daf.jpg",Yn=t.p+"static/media/Aquarium.08f530b3.jpg",Un=t.p+"static/media/Jelly.1f4cf0d6.jpg",Vn=t.p+"static/media/Jelly2.d7483588.jpg",Kn=t.p+"static/media/Goog.d19bd490.jpg",qn=t.p+"static/media/Olivia.3e12b890.jpg",Jn=t.p+"static/media/Williamsburg.7ad989d4.jpg",Xn=t.p+"static/media/Splash.46e2d9ba.jpg",Zn=t.p+"static/media/circle1.37900880.png",Qn=t.p+"static/media/circle2.38d44316.jpg",$n=t.p+"static/media/circle3.d801a269.jpg",et=t.p+"static/media/Avalon.b3662855.jpg",nt=t.p+"static/media/brooklyndouble.602c224f.jpg",tt=t.p+"static/media/Nathans.77fce6c1.jpg",ct=p.a.div(Dn||(Dn=Object(b.a)(["\ndisplay: flex;\npadding: 0 15vw;\nmargin-top: -1vh;\nheight: 101vh;\nalign-items: center;\njustify-content: space-between;\njustify-self: center;\nbackground-color:",";"])),(function(e){return e.Backgroundcolor})),it=p.a.img(Sn||(Sn=Object(b.a)(["\nwidth: 20vw;\n"])));function st(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)(ct,{Backgroundcolor:"#191919",children:[Object(O.jsx)(it,{src:An}),Object(O.jsx)(it,{src:Tn}),Object(O.jsx)(it,{src:Gn})]}),Object(O.jsx)(hn,{src:_n}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(O.jsx)(rn,{src:Nn}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"1821 (Chicago)"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Film photograph taken on the Holga 120N."})]}),Object(O.jsx)(ln,{src:Mn}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"BROOKLYN BRIDGE"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]}),Object(O.jsx)(dn,{src:Bn}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(gn,{children:"PARACHUTE (Coney Island)"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]})]}),Object(O.jsxs)(ct,{Backgroundcolor:"#C7B815",children:[Object(O.jsx)(it,{src:Ln}),Object(O.jsx)(it,{src:Pn}),Object(O.jsx)(it,{src:Rn})]}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(O.jsx)(rn,{src:En}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"KEVIN"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Film photograph taken on the Holga 120N."})]}),Object(O.jsx)(ln,{src:Fn}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"SKULL(Manhattan, NY)"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]}),Object(O.jsx)(dn,{src:Wn}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(gn,{children:"Duo Skulls (Sauvie Island, OR)"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]})]}),Object(O.jsx)(hn,{src:Hn}),Object(O.jsxs)(ct,{Backgroundcolor:"#191919",children:[Object(O.jsx)(it,{src:Yn}),Object(O.jsx)(it,{src:Un}),Object(O.jsx)(it,{src:Vn})]}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(O.jsx)(rn,{src:Kn}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"GOOG"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Film photograph taken on the Holga 120N."})]}),Object(O.jsx)(ln,{src:qn}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"OLIVIA"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]}),Object(O.jsx)(dn,{src:Jn}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(gn,{children:"WILLIAMSBURG BRIDGE"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]})]}),Object(O.jsx)(hn,{src:Xn}),Object(O.jsxs)(ct,{Backgroundcolor:"#191919",children:[Object(O.jsx)(it,{src:Zn}),Object(O.jsx)(it,{src:Qn}),Object(O.jsx)(it,{src:$n})]}),Object(O.jsxs)(bn,{Grids:"85vh 7vh 85vh 7vh 85vh 7vh",children:[Object(O.jsx)(rn,{src:et}),Object(O.jsxs)(pn,{children:[Object(O.jsx)(gn,{children:"Avalon Theatre (Portland, OR)"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Film photograph taken on the Holga 120N."})]}),Object(O.jsx)(ln,{src:nt}),Object(O.jsxs)(On,{children:[Object(O.jsx)(gn,{children:"Street Graffiti (Brooklyn, NY)"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]}),Object(O.jsx)(dn,{src:tt}),Object(O.jsxs)(vn,{children:[Object(O.jsx)(gn,{children:"NATHAN'S (Brooklyn, NY)"}),Object(O.jsx)(mn,{children:"2021"}),Object(O.jsx)(fn,{children:"Double exposure film photograph."})]})]})]})}var rt=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(k,{}),Object(O.jsxs)(x.c,{children:[Object(O.jsx)(x.a,{path:"/Composition",component:un}),Object(O.jsx)(x.a,{path:"/Photography",component:st}),Object(O.jsx)(x.a,{path:"/Art",component:Ae}),Object(O.jsx)(x.a,{exact:!0,path:"/MacTavish",component:zn})]})]})})},at=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),s(e),r(e)}))};d.a.render(Object(O.jsx)(j.a.StrictMode,{children:Object(O.jsx)(rt,{})}),document.getElementById("root")),at()}},[[64,1,2]]]);
//# sourceMappingURL=main.6b34b14b.chunk.js.map