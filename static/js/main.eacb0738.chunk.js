(this["webpackJsonpreact-example"]=this["webpackJsonpreact-example"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),s=(a(14),a(4)),o=a(5),i=a(7),m=a(6),u=a(1),h=a(8),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={meals:[],isClicked:!1},a.getMeal=a.getMeal.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getMeal",value:function(){var e=this;this.setState({isClicked:!0});fetch("https://www.themealdb.com/api/json/v1/1/random.php",{method:"post",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({meals:t.meals[0]})})).catch((function(e){console.log(e,"catch the hoop")}))}},{key:"render",value:function(){for(var e=this.state,t=e.meals,a=e.isClicked,n=[],r=1;r<20&&t["strIngredient".concat(r)];r++)n.push(l.a.createElement("li",{key:r},t["strIngredient".concat(r)]));var c="https://www.youtube.com/embed/"+(t.strYoutube||"").slice(-11);return l.a.createElement("div",{className:"meals"},l.a.createElement("div",{className:"mainPage"},l.a.createElement("h2",null,"Feeling hungry?"),l.a.createElement("p",null,"Get a random meal by Clicking the button"),l.a.createElement("button",{onClick:this.getMeal}," Get your meal ")),a?l.a.createElement("div",{className:"meal"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mealImg"},l.a.createElement("img",{src:t.strMealThumb,alt:"food"}),l.a.createElement("span",null,l.a.createElement("b",null,"Categeory"),": ",t.strCategory),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("b",null,"Area"),": ",t.strArea),l.a.createElement("br",null),l.a.createElement("span",{className:"tags"},l.a.createElement("b",null,"Tags"),": ",t.strTags),l.a.createElement("br",null),l.a.createElement("h3",null,"Ingredients:"),l.a.createElement("ul",null,n)),l.a.createElement("div",{className:"mealName"},l.a.createElement("h2",null,t.strMeal),l.a.createElement("p",null,t.strInstructions))),l.a.createElement("div",{className:"mealVideo"},l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Video Recipe:"),l.a.createElement("iframe",{title:"video",width:"100%",height:"315",src:c,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))):null)}}]),t}(n.Component);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.eacb0738.chunk.js.map