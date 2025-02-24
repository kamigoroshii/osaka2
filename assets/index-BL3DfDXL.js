(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(v||(v={}));var T;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(T||(T={}));var b;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(b||(b={}));var M;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(M||(M={}));var S;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(S||(S={}));var L;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(L||(L={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class G extends E{constructor(t,s){super(t),this.response=s}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="https://generativelanguage.googleapis.com",j="v1",q="0.2.1",V="genai-js";var l;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(l||(l={}));class y{constructor(t,s,o,n){this.model=t,this.task=s,this.apiKey=o,this.stream=n}toString(){let t=`${$}/${j}/${this.model}:${this.task}`;return this.stream&&(t+="?alt=sse"),t}}function W(){return`${V}/${q}`}async function _(e,t,s){let o;try{if(o=await fetch(e.toString(),Object.assign(Object.assign({},J(s)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":W(),"x-goog-api-key":e.apiKey},body:t})),!o.ok){let n="";try{const i=await o.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`)}catch{}throw new Error(`[${o.status} ${o.statusText}] ${n}`)}}catch(n){const i=new E(`Error fetching from ${e.toString()}: ${n.message}`);throw i.stack=n.stack,i}return o}function J(e){const t={};if((e==null?void 0:e.timeout)>=0){const s=new AbortController,o=s.signal;setTimeout(()=>s.abort(),e.timeout),t.signal=o}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new G(`${C(e)}`,e);return X(e)}else if(e.promptFeedback)throw new G(`Text not available. ${C(e)}`,e);return""},e}function X(e){var t,s,o,n;return!((n=(o=(s=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||s===void 0?void 0:s.parts)===null||o===void 0?void 0:o[0])===null||n===void 0)&&n.text?e.candidates[0].content.parts[0].text:""}const z=[S.RECITATION,S.SAFETY];function H(e){return!!e.finishReason&&z.includes(e.finishReason)}function C(e){var t,s,o;let n="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)n+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(n+=` due to ${e.promptFeedback.blockReason}`),!((s=e.promptFeedback)===null||s===void 0)&&s.blockReasonMessage&&(n+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];H(i)&&(n+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(n+=`: ${i.finishMessage}`))}return n}function p(e){return this instanceof p?(this.v=e,this):new p(e)}function Q(e,t,s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=s.apply(e,t||[]),n,i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(d){o[d]&&(n[d]=function(h){return new Promise(function(A,Y){i.push([d,h,A,Y])>1||r(d,h)})})}function r(d,h){try{c(o[d](h))}catch(A){N(i[0][3],A)}}function c(d){d.value instanceof p?Promise.resolve(d.value.v).then(u,w):N(i[0][2],d)}function u(d){r("next",d)}function w(d){r("throw",d)}function N(d,h){d(h),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Z(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),s=ne(t),[o,n]=s.tee();return{stream:te(o),response:ee(n)}}async function ee(e){const t=[],s=e.getReader();for(;;){const{done:o,value:n}=await s.read();if(o)return I(se(t));t.push(n)}}function te(e){return Q(this,arguments,function*(){const s=e.getReader();for(;;){const{value:o,done:n}=yield p(s.read());if(n)break;yield yield p(I(o))}})}function ne(e){const t=e.getReader();return new ReadableStream({start(o){let n="";return i();function i(){return t.read().then(({value:a,done:r})=>{if(r){if(n.trim()){o.error(new E("Failed to parse stream"));return}o.close();return}n+=a;let c=n.match(P),u;for(;c;){try{u=JSON.parse(c[1])}catch{o.error(new E(`Error parsing JSON response: "${c[1]}"`));return}o.enqueue(u),n=n.substring(c[0].length),c=n.match(P)}return i()})}}})}function se(e){const t=e[e.length-1],s={promptFeedback:t==null?void 0:t.promptFeedback};for(const o of e)if(o.candidates)for(const n of o.candidates){const i=n.index;if(s.candidates||(s.candidates=[]),s.candidates[i]||(s.candidates[i]={index:n.index}),s.candidates[i].citationMetadata=n.citationMetadata,s.candidates[i].finishReason=n.finishReason,s.candidates[i].finishMessage=n.finishMessage,s.candidates[i].safetyRatings=n.safetyRatings,n.content&&n.content.parts){s.candidates[i].content||(s.candidates[i].content={role:n.content.role||"user",parts:[{text:""}]});for(const a of n.content.parts)a.text&&(s.candidates[i].content.parts[0].text+=a.text)}}return s}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D(e,t,s,o){const n=new y(t,l.STREAM_GENERATE_CONTENT,e,!0),i=await _(n,JSON.stringify(s),o);return Z(i)}async function K(e,t,s,o){const n=new y(t,l.GENERATE_CONTENT,e,!1),a=await(await _(n,JSON.stringify(s),o)).json();return{response:I(a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){let s=[];if(typeof e=="string")s=[{text:e}];else for(const o of e)typeof o=="string"?s.push({text:o}):s.push(o);return{role:t,parts:s}}function R(e){return e.contents?e:{contents:[g(e,"user")]}}function oe(e){return typeof e=="string"||Array.isArray(e)?{content:g(e,"user")}:e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="SILENT_ERROR";class ie{constructor(t,s,o,n){this.model=s,this.params=o,this.requestOptions=n,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,o!=null&&o.history&&(this._history=o.history.map(i=>{if(!i.role)throw new Error("Missing role for history item: "+JSON.stringify(i));return g(i.parts,i.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var s,o;await this._sendPromise;const n=g(t,"user"),i={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,contents:[...this._history,n]};let a;return this._sendPromise=this._sendPromise.then(()=>K(this._apiKey,this.model,i,this.requestOptions)).then(r=>{var c;if(r.response.candidates&&r.response.candidates.length>0){this._history.push(n);const u=Object.assign({parts:[],role:"model"},(c=r.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(u)}else{const u=C(r.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}a=r}),await this._sendPromise,a}async sendMessageStream(t){var s,o;await this._sendPromise;const n=g(t,"user"),i={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,contents:[...this._history,n]},a=D(this._apiKey,this.model,i,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(r=>{throw new Error(x)}).then(r=>r.response).then(r=>{if(r.candidates&&r.candidates.length>0){this._history.push(n);const c=Object.assign({},r.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=C(r);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(r=>{r.message!==x&&console.error(r)}),a}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t,s,o){const n=new y(t,l.COUNT_TOKENS,e,!1);return(await _(n,JSON.stringify(Object.assign(Object.assign({},s),{model:t})),o)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t,s,o){const n=new y(t,l.EMBED_CONTENT,e,!1);return(await _(n,JSON.stringify(s),o)).json()}async function ce(e,t,s,o){const n=new y(t,l.BATCH_EMBED_CONTENTS,e,!1),i=s.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await _(n,JSON.stringify({requests:i}),o)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,s,o){this.apiKey=t,s.model.includes("/")?this.model=s.model:this.model=`models/${s.model}`,this.generationConfig=s.generationConfig||{},this.safetySettings=s.safetySettings||[],this.requestOptions=o||{}}async generateContent(t){const s=R(t);return K(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},s),this.requestOptions)}async generateContentStream(t){const s=R(t);return D(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},s),this.requestOptions)}startChat(t){return new ie(this.apiKey,this.model,t,this.requestOptions)}async countTokens(t){const s=R(t);return re(this.apiKey,this.model,s)}async embedContent(t){const s=oe(t);return ae(this.apiKey,this.model,s)}async batchEmbedContents(t){return ce(this.apiKey,this.model,t,this.requestOptions)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.apiKey=t}getGenerativeModel(t,s){if(!t.model)throw new E("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new de(this.apiKey,t,s)}}const le=new ue("AIzaSyAcmNB8BeUEYCaSmVW3AUZhW1ni21unAgs"),he=`imagine yourself as osaka from AZUMANGA DAIOH.. introduce and you are going to help the user with cooking and everything related to it

so basically whatever the user wishes to make you are going to help him with the ingredients and how to do it.

keep your introduction and interaction concise and straightforward
give instructions in detail and clear for the user to understand clearly.

give a little bit of explanation to your actions as well just for fun but it shouldnt be in too much detail

NOW! keeping cooking aside you are also gonna work as a motivation bot....which basically helps the user to get motivation...no matter what it may be
the catch is you need to be funny in your motivation not much serious type but careless
keep your answers that are related to motivation a little simple and short

the third function you are going to help with is music or songs
first you are going to ask the user about his mood or interest
and then considering that you are going to suggest few songs

for everything that is not related to the above three functions.... say that you can't help but it should be in a funny way like how the character osaka would say in the show azumanga daioh`,fe={temperature:1,topP:.95,topK:40,maxOutputTokens:8192};let U=null;const O=document.querySelector(".chat-messages"),F=document.querySelector(".input-form"),f=F.querySelector('input[type="text"]'),ge=document.getElementById("image-upload"),me=document.querySelector(".menu-btn"),B=document.querySelector(".sidebar"),Ee=document.querySelector(".new-chat-btn");function pe(){const e=document.createElement("canvas"),t=e.getContext("2d"),s=document.querySelector(".matrix-code");e.width=s.offsetWidth,e.height=s.offsetHeight,s.appendChild(e);const o="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",n=14,i=e.width/n,a=Array(Math.floor(i)).fill(1);function r(){t.fillStyle="rgba(0, 20, 0, 0.05)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff00",t.font=n+"px monospace";for(let c=0;c<a.length;c++){const u=o[Math.floor(Math.random()*o.length)];t.fillText(u,c*n,a[c]*n),a[c]*n>e.height&&Math.random()>.975&&(a[c]=0),a[c]++}}setInterval(r,33)}async function k(){U=le.getGenerativeModel({model:"gemini-pro"}).startChat({generationConfig:fe,history:[{role:"user",parts:[{text:he}]},{role:"model",parts:[{text:"Oh, hello there! I'm Osaka! You can call me Ayumu if you want. So, you need help with cookin', motivatin', or some tunes? Let's get this show on the road, yeah? I'm ready if you are!"}]}]}),m("Oh, hello there! I'm Osaka! You can call me Ayumu if you want. So, you need help with cookin', motivatin', or some tunes? Let's get this show on the road, yeah? I'm ready if you are!","assistant")}function m(e,t,s=null){const o=document.createElement("div");o.className=`message ${t}`;const n=document.createElement("div");n.className="avatar",n.textContent=t==="user"?"U":"O";const i=document.createElement("div");i.className="message-content",s?i.appendChild(s):i.textContent=e,o.appendChild(n),o.appendChild(i),O.appendChild(o),O.scrollTop=O.scrollHeight}F.addEventListener("submit",async e=>{e.preventDefault();const t=f.value.trim();if(t){m(t,"user"),f.value="",f.disabled=!0;try{const o=await(await U.sendMessage(t)).response.text();m(o,"assistant")}catch(s){console.error("Error:",s),m("Oops! Something went wrong. Please try again.","assistant")}f.disabled=!1,f.focus()}});ge.addEventListener("change",async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){alert("Please upload an image file.");return}const s=new FileReader;s.onload=o=>{const n=document.createElement("img");n.src=o.target.result,m("","user",n)},s.readAsDataURL(t)});me.addEventListener("click",()=>{B.classList.toggle("active"),document.body.classList.toggle("sidebar-open")});Ee.addEventListener("click",()=>{O.innerHTML="",k(),window.innerWidth<768&&(B.classList.remove("active"),document.body.classList.remove("sidebar-open"))});document.addEventListener("DOMContentLoaded",()=>{pe(),k()});
