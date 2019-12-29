(this["webpackJsonpfare-calculator"]=this["webpackJsonpfare-calculator"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(10),i=a.n(s),c=(a(24),a(11)),u=a(12),r=a(13),o=a(17),m=a(14),h=a(5),d=a(18),E=a(32),p=a(34),C=a(16),v=a(33),g=a(6),b=(a(25),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={distance:!1,drivingTime:!1,waitTime:!1,additionalStopsExtraPassengers:!1,distanceCost:0,drivingCost:0,waitingCost:0,extraCost:0,subTotal:0,tax:0,total:0},a.handleInputChange=a.handleInputChange.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.title="Fare Calculator"}},{key:"handleInputChange",value:function(e){var t=this,a=e.target,n=a.value,l=a.name;this.setState(Object(c.a)({},l,n),(function(){return t.updateValues()}))}},{key:"updateValues",value:function(){this.calculateDistanceCost(),this.calculateDriveTime(),this.calculateWaitTime(),this.calculateAdditionalCosts()}},{key:"updateTotals",value:function(){this.calculateSubTotal(),this.calculateTax()}},{key:"calculateDistanceCost",value:function(){var e=this,t=0;t=this.state.distance>5?1.4*this.state.distance:7,this.setState({distanceCost:t},(function(){return e.updateTotals()}))}},{key:"calculateDriveTime",value:function(){var e=this;this.setState({drivingCost:.25*this.state.drivingTime},(function(){return e.updateTotals()}))}},{key:"calculateWaitTime",value:function(){var e=this;this.setState({waitingCost:.5*this.state.waitTime},(function(){return e.updateTotals()}))}},{key:"calculateAdditionalCosts",value:function(){var e=this;this.setState({extraCost:2*this.state.additionalStopsExtraPassengers},(function(){return e.updateTotals()}))}},{key:"calculateSubTotal",value:function(){var e=this;this.setState({subTotal:this.state.distanceCost+this.state.drivingCost+this.state.waitingCost+this.state.extraCost},(function(){return e.calculateTax()}))}},{key:"calculateTax",value:function(){var e=this;this.setState({tax:.15*this.state.subTotal},(function(){return e.calculateTotal()}))}},{key:"calculateTotal",value:function(){this.setState({total:this.state.subTotal+this.state.tax})}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(p.a.Row,null,l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Distance (km)"),l.a.createElement(p.a.Control,{type:"number",name:"distance",onChange:this.handleInputChange})),l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Distance + Base Cost:"),l.a.createElement(p.a.Control,{type:"number",readOnly:!0,value:this.state.distanceCost,onChange:this.handleInputChange}),l.a.createElement(p.a.Text,null,"$1.40 per km, or $7.00 if under 5km distance"))),l.a.createElement(p.a.Row,null,l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Driving time (minutes)"),l.a.createElement(p.a.Control,{type:"number",name:"drivingTime",onChange:this.handleInputChange})),l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Driving cost ($0.25/min):"),l.a.createElement(p.a.Control,{type:"number",readOnly:!0,value:this.state.drivingCost,onChange:this.handleInputChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Wait time (minutes)"),l.a.createElement(p.a.Control,{type:"number",name:"waitTime",onChange:this.handleInputChange})),l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Waiting cost ($0.50/min):"),l.a.createElement(p.a.Control,{type:"number",readOnly:!0,value:this.state.waitingCost,onChange:this.handleInputChange}))),l.a.createElement(p.a.Row,null,l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Additional stops / Extra passengers"),l.a.createElement(p.a.Control,{type:"number",name:"additionalStopsExtraPassengers",onChange:this.handleInputChange})),l.a.createElement(C.a,null,l.a.createElement(p.a.Label,null,"Additional Costs:"),l.a.createElement(p.a.Control,{type:"number",readOnly:!0,value:this.state.extraCost,onChange:this.handleInputChange}),l.a.createElement(p.a.Text,null,"$2 per stop/extra passenger"))))),l.a.createElement(E.a,null,l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(p.a.Label,{class:"subtotal"},"Subtotal: ")),l.a.createElement(C.a,null,l.a.createElement(g.a,{value:this.state.subTotal,displayType:"text",prefix:"$",decimalScale:"2",class:"subtotal"}))),l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(p.a.Label,{class:"subtotal"},"Tax: ")),l.a.createElement(C.a,null,l.a.createElement(g.a,{value:this.state.tax,displayType:"text",prefix:"$",decimalScale:"2",class:"subtotal"}))),l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(p.a.Label,{class:"total"},"Total: ")),l.a.createElement(C.a,null,l.a.createElement(g.a,{value:this.state.total,displayType:"text",prefix:"$",decimalScale:"2",class:"total"})))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.db2e3ff4.chunk.js.map