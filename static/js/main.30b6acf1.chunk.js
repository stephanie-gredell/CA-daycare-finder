(window["webpackJsonpdaycare-finder"]=window["webpackJsonpdaycare-finder"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(8),r=n.n(i),l=(n(14),n(2)),s=n(3),o=n(5),u=n(4),h=n(1),d=n(6),m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={detail:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://secure.dss.ca.gov/ccld/TransparencyAPI/api/FacilityDetail/".concat(this.props.number)).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({detail:t.FacilityDetail})})}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.detail&&c.a.createElement("div",{className:"violations"},c.a.createElement("p",null,"# of Type A Violations: ",this.state.detail.TOTTYPEA),c.a.createElement("p",null,"# of Type B Violations: ",this.state.detail.TOTTYPEB)))}}]),t}(c.a.Component),p=(n(15),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={centers:null},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://secure.dss.ca.gov/ccld/TransparencyAPI/api/FacilitySearch?facType=850&facility=&Street=&city=&zip=".concat(this.state.zip,"&county=&facnum=")).then(function(e){return e.json()}).then(function(e){t.setState({centers:e.FACILITYARRAY.sort(function(e,t){return t.FACILITYNAME>e.FACILITYNAME?-1:1})})})}},{key:"handleChange",value:function(e){this.setState({zip:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("form",{onSubmit:this.handleSubmit,onChange:this.handleChange,className:"search__form"},c.a.createElement("input",{type:"text",placeholder:"Enter zip code and press enter",name:"query",className:"app_search",required:!0})),this.state.centers&&c.a.createElement("ul",{className:"search__results-list"},this.state.centers.map(function(e){return c.a.createElement("li",{key:e.FACILITYNUMBER},c.a.createElement("p",null,c.a.createElement("strong",null,e.FACILITYNAME)),c.a.createElement(m,{number:e.FACILITYNUMBER}))})))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.30b6acf1.chunk.js.map