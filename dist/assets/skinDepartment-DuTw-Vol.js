import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                   *//* empty css                         */const i=[{title:"皮肤科总耗占比",rate:16.94,delta:1.22,target:15.8,note:"皮肤科整体纯耗材口径"},{title:"形体塑形耗占比",rate:0,delta:.42,target:0,note:"本期暂无耗材成本入账"},{title:"祛斑淡斑耗占比",rate:0,delta:.36,target:0,note:"本期暂无耗材成本入账"},{title:"嫩肤保养耗占比",rate:3.19,delta:.58,target:2.8,note:"轻医美保养项目"},{title:"紧肤提升耗占比",rate:32.47,delta:2.06,target:30.5,note:"热玛吉 / 超声炮等核心项目"}],c=[{name:"BTL",rate:0,delta:.38,count:1},{name:"FOTONA",rate:0,delta:.22,count:1},{name:"少女枪",rate:0,delta:.61,count:1},{name:"热玛吉",rate:30.71,delta:3.84,count:1},{name:"玻尿酸",rate:63.47,delta:-1.12,count:1},{name:"紧肤其他",rate:0,delta:-.44,count:1},{name:"美拉美",rate:41.13,delta:2.18,count:1},{name:"超声炮",rate:98.26,delta:8.73,count:1},{name:"超离子",rate:0,delta:.36,count:1},{name:"黄金射频微针",rate:36.42,delta:-.82,count:1},{name:"黄金热拉提",rate:0,delta:-.57,count:1}],d=[{name:"张医生",rate:43.2,delta:5.8,level:"严重",item:"热玛吉耗材组合偏高"},{name:"王医生",rate:38.7,delta:4.1,level:"严重",item:"超声炮单体成本偏离"},{name:"李医生",rate:35.6,delta:3.24,level:"偏高",item:"黄金射频微针成本偏高"},{name:"赵医生",rate:32.8,delta:2.46,level:"偏高",item:"美拉美耗材结构偏离"},{name:"刘医生",rate:30.5,delta:1.92,level:"偏高",item:"玻尿酸搭配成本偏高"}],u=[{id:"new-1",label:"新客1组",total:3,rate:25.34,delta:2.28,people:[{name:"雷杨梅",rate:24.47,delta:2.1,product:"热玛吉"},{name:"沈妙一",rate:25.28,delta:2.54,product:"超声炮"},{name:"唐文",rate:25.24,delta:2.36,product:"黄金射频微针"}]},{id:"new-2",label:"新客2组",total:3,rate:23.08,delta:1.72,people:[{name:"陈琇",rate:22.78,delta:1.8,product:"热玛吉"},{name:"黄莹",rate:22.06,delta:1.12,product:"美拉美"},{name:"李梦雪",rate:20.79,delta:.98,product:"超声炮"}]},{id:"old",label:"老客组",total:3,rate:36.89,delta:4.6,people:[{name:"曹一一",rate:43.31,delta:15.6,product:"玻尿酸"},{name:"白瑞洁",rate:34.09,delta:8.2,product:"热玛吉"},{name:"张思淼",rate:33.27,delta:7.1,product:"超声炮"}]}],p=[{name:"BTL",target:100,actual:107,rate:107,costRate:0},{name:"FOTONA",target:50,actual:50,rate:100,costRate:0},{name:"少女枪",target:58,actual:60,rate:103.4,costRate:0},{name:"热玛吉",target:20,actual:18,rate:90,costRate:30.71},{name:"玻尿酸",target:6,actual:7,rate:116.7,costRate:63.47},{name:"紧肤其他",target:7,actual:4,rate:57.1,costRate:0},{name:"美拉美",target:24,actual:19,rate:79.2,costRate:41.13},{name:"超声炮",target:53,actual:45,rate:84.9,costRate:98.26},{name:"超离子",target:1,actual:2,rate:200,costRate:0},{name:"黄金射频微针",target:37,actual:27,rate:73,costRate:36.42},{name:"黄金热拉提",target:30,actual:37,rate:123.3,costRate:0}];function n(a,t=2){return`${Number(a).toFixed(t)}%`}function l(a,t=2){return`${a>=0?"+":"-"}${Math.abs(Number(a)).toFixed(t)}%`}function g(){const a=document.getElementById("skin-kpi-grid");a&&(a.innerHTML=i.map(t=>`
    <div class="kpi-card product-kpi-card skin-kpi-card primary">
      <div class="kc-title">${t.title}</div>
      <div class="kc-main danger">${n(t.rate)}</div>
      <div class="kc-divider"></div>
      <div class="kc-row">
        <span class="kc-row-label">较前三期均值</span>
        <span class="kc-val-red">${l(t.delta)}</span>
        <span class="badge badge-red" style="margin-left:auto;">▲ 偏高</span>
      </div>
      <div class="kc-target">目标值：<span>≤${n(t.target)}</span></div>
      <div class="skin-kpi-note">${t.note}</div>
    </div>
  `).join(""))}function m(){const a=document.getElementById("skin-product-alert-list");a&&(a.innerHTML=c.map((t,e)=>{const s=t.delta>=0?"red":"green";return`
      <div class="skin-product-row">
        <span class="skin-rank ${e<3?"top":""}">${e+1}</span>
        <span class="prod-name">${t.name}</span>
        <strong>${n(t.rate)}</strong>
        <span class="skin-row-delta ${s}">较前三期均值 ${l(t.delta)}</span>
        <span class="skin-count-pill">${t.count}</span>
      </div>
    `}).join(""))}function v(){const a=document.getElementById("skin-doctor-alert-list");a&&(a.innerHTML=d.map(t=>`
    <div class="skin-doctor-row">
      <div class="skin-doctor-avatar">${t.name.slice(0,1)}</div>
      <div class="skin-doctor-main">
        <div class="skin-doctor-name">${t.name}<span>${t.level}</span></div>
        <div class="skin-doctor-item">${t.item}</div>
      </div>
      <div class="skin-doctor-metric">
        <strong>${n(t.rate)}</strong>
        <span>较前三期均值 ${l(t.delta)}</span>
      </div>
    </div>
  `).join(""))}function k(){const a=document.getElementById("skin-consult-alert-list");a&&(a.innerHTML=u.map(t=>`
    <div class="skin-consult-group collapsed" data-group-id="${t.id}">
      <button class="skin-consult-head" type="button" onclick="toggleSkinConsultGroup('${t.id}', this)">
        <span>
          <strong>${t.label}</strong>
          <em>${t.total}项异常</em>
        </span>
        <span class="skin-consult-meta">${n(t.rate)} · ${l(t.delta)} <b>展开</b></span>
      </button>
      <div class="skin-consult-body">
        ${t.people.map(e=>`
          <div class="skin-consult-person">
            <div>
              <strong>${e.name}</strong>
              <span>${e.product}</span>
            </div>
            <div>
              <strong>${n(e.rate)}</strong>
              <span>较前三期均值 ${l(e.delta)}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""))}function $(){const a=document.getElementById("skin-target-list");a&&(a.innerHTML=p.map((t,e)=>{const s=Math.min(t.rate,160),r=t.rate>=100?"good":t.rate>=80?"warn":"bad";return`
      <div class="skin-target-row">
        <div class="skin-target-name">
          <span class="skin-rank ${e<3?"top":""}">${e+1}</span>
          <strong>${t.name}</strong>
        </div>
        <div class="skin-target-progress">
          <div class="skin-target-track">
            <div class="skin-target-fill ${r}" style="width:${s/1.6}%;"></div>
          </div>
          <span>${t.actual}/${t.target}</span>
        </div>
        <strong class="skin-target-rate ${r}">${t.rate.toFixed(1)}%</strong>
        <span class="skin-target-cost">成本率 ${n(t.costRate)}</span>
      </div>
    `}).join(""))}function f(a,t){const e=document.querySelector(`.skin-consult-group[data-group-id="${a}"]`);if(!e)return;const s=e.classList.contains("collapsed");e.classList.toggle("collapsed",!s);const r=t?.querySelector("b");r&&(r.textContent=s?"收起":"展开")}function b(a){const t=a.closest(".nav-group");if(!t)return;t.classList.toggle("collapsed");const e=t.querySelector(".nav-toggle");e&&(e.textContent=t.classList.contains("collapsed")?"+":"−")}function w(){const a=document.getElementById("skinAiPanel");a&&a.classList.toggle("show")}function o(){g(),m(),v(),k(),$()}o();window.renderSkinDepartment=o;window.toggleSkinConsultGroup=f;window.toggleNavGroup=b;window.openSkinAI=w;
