(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{270:function(e,a,t){"use strict";t.r(a);var o=t(16),n=t(63),r=t(0),l=t.n(r),s=t(262),c=t(78),i=t(224),d=t(225),m=t(40),b=t(64),p=t(33),D=t.n(p),u=(t(84),t(264)),w=t.n(u),E=t(256),h=[{name:"Name",selector:"Name",sortable:!0,wrap:!0,width:"250px"},{name:"Phone",selector:"Phone",sortable:!0,wrap:!0,grow:2},{name:"Email",selector:"Email",sortable:!0,wrap:!0,width:"250px"},{name:"Age",selector:"Age",sortable:!0,wrap:!0},{name:"Blood Type",selector:"BloodType",sortable:!0,wrap:!0},{name:"Last Donating Date",selector:"LastDonationDate",sortable:!0,wrap:!0,width:"150px"},{name:"Recovery Date",selector:"RecoveryDate",sortable:!0,wrap:!0,width:"150px"},{name:"Chronic Diseases",selector:"Diseases",sortable:!0,wrap:!0,width:"250px"},{name:"Distance",selector:"Distance",sortable:!0,wrap:!0},{name:"Address",selector:"Address",sortable:!0,wrap:!0,width:"250px"}],g={headCells:{style:{fontWeight:"bold",backgroundColor:"#122861",color:"#FFFFFF",borderStyle:"solid",borderWidth:"1px",borderColor:"#8b8b8b"}},cells:{style:{borderStyle:"solid",borderWidth:"1px",borderColor:"#8b8b8b"}}};a.default=function(e){Object(r.useEffect)(function(){var a=e.donorsFound;a=a.map(function(e){var a=Object(n.a)({},e);return a.Distance=(e.Distance/1e3).toFixed(2)+" KM",a.Diseases=e.Diseases.join(", "),a.LastDonationDate=new Date(a.LastDonationDate).toLocaleDateString(),a.RecoveryDate=new Date(a.RecoveryDate).toLocaleDateString(),a}),u(a)},[e.donorsFound]);var a=Object(r.useState)([]),t=Object(o.a)(a,2),p=t[0],u=t[1];return l.a.createElement(c.a,{fluid:!0},p.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:D.a.mapNote},"Donors Data Found"),l.a.createElement(i.a,null,l.a.createElement(d.a,{md:12},l.a.createElement(m.a,{ctTableFullWidth:!0,ctTableResponsive:!0,content:l.a.createElement("div",{className:D.a.tablePadding},l.a.createElement(r.Suspense,{fallback:l.a.createElement(E.a,null)},l.a.createElement(w.a,{className:D.a.tableCss,noHeader:!0,striped:!0,highlightOnHover:!0,pointerOnHover:!0,columns:h,data:p,customStyles:g,pagination:!0,defaultSortField:"Distance"})))}))),l.a.createElement(i.a,null,l.a.createElement(d.a,{md:12},l.a.createElement(s.a,{controlId:"Map2",bsSize:"large"},l.a.createElement("label",{className:D.a.mapNote},"Donors Locations"),l.a.createElement("div",{className:D.a.Maps},l.a.createElement(r.Suspense,{fallback:l.a.createElement(E.a,null)},l.a.createElement(b.a,{id:2,zoom:10,donorsPositions:p}))))))))}}}]);
//# sourceMappingURL=4.e7fa2219.chunk.js.map