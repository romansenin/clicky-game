(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"./svg-icons/iconfinder__social_media_three_copy_2006735.svg",clicked:!1},{id:2,image:"./svg-icons/iconfinder_2_2135937.svg",clicked:!1},{id:3,image:"./svg-icons/iconfinder_3_2135936.svg",clicked:!1},{id:4,image:"./svg-icons/iconfinder_6_adapter_memory_card_holder_storage_space_998294.svg",clicked:!1},{id:5,image:"./svg-icons/iconfinder_012-_Pokestop_-_PokeBall_-_Game_-_Pokemon_-_Pokemongo_1543557.svg",clicked:!1},{id:6,image:"./svg-icons/iconfinder_038_025_xbox_game_network_android_material_1646935.svg",clicked:!1},{id:7,image:"./svg-icons/iconfinder_039-_Pokestop_-_PokeBall_-_Game_-_Pokemon_-_Pokemongo_1543558.svg",clicked:!1},{id:8,image:"./svg-icons/iconfinder_051_SDCard_183180.svg",clicked:!1},{id:9,image:"./svg-icons/iconfinder_Ball_basketball_game_sports_sports_ball_4763256.svg",clicked:!1},{id:10,image:"./svg-icons/iconfinder_black_bishop_754823.svg",clicked:!1},{id:11,image:"./svg-icons/iconfinder_black_king_754822.svg",clicked:!1},{id:12,image:"./svg-icons/iconfinder_black_knight_754824.svg",clicked:!1},{id:13,image:"./svg-icons/iconfinder_black_pawn_754825.svg",clicked:!1},{id:14,image:"./svg-icons/iconfinder_black_queen_754821.svg",clicked:!1},{id:15,image:"./svg-icons/iconfinder_black_rook_754826.svg",clicked:!1},{id:16,image:"./svg-icons/iconfinder_game__control__games__remote__gamepad__device__joystick_2317778.svg",clicked:!1},{id:17,image:"./svg-icons/iconfinder_ic_memory_48px_352538.svg",clicked:!1},{id:18,image:"./svg-icons/iconfinder_icon-game-controller-a_211667 (1).svg",clicked:!1},{id:19,image:"./svg-icons/iconfinder_icon-game-controller-b_211668.svg",clicked:!1},{id:20,image:"./svg-icons/iconfinder_Invader_1_367629.svg",clicked:!1},{id:21,image:"./svg-icons/iconfinder_Invader_3_367631.svg",clicked:!1}]},function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),n=t(8),c=t.n(n),r=(t(16),t(1)),d=t(2),o=t(4),l=t(3),h=t(6),g=t(5),u=(t(17),function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"header-container"},i.a.createElement("p",null,"Clicky Game"),i.a.createElement("p",null,this.props.message),i.a.createElement("p",null,"Score: ",this.props.score," | Top Score: ",this.props.topScore))}}]),a}(s.Component));t(18);var m=function(){return i.a.createElement("div",{className:"intro-container"},i.a.createElement("h1",null,"Clicky Game!"),i.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!"),i.a.createElement("a",{href:"#"},"Get Started"))},_=(t(19),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(h.a)(t)),t.state={},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleClick",value:function(){this.props.image.clicked?(this.props.handleHeaderChange("You guessed incorrectly!"),this.props.resetCards()):(this.props.handleHeaderChange("You guessed correctly!"),this.props.updateCards(this.props.id))}},{key:"render",value:function(){return i.a.createElement("div",{className:"card",onClick:this.handleClick},i.a.createElement("img",{draggable:"false",src:this.props.image.image,alt:""}))}}]),a}(s.Component)),p=(t(20),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).state={},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"row"},this.props.images.map(function(a,t){return i.a.createElement(_,{key:t+e.props.offset,id:t+e.props.offset,image:a,handleHeaderChange:e.props.handleHeaderChange,updateCards:e.props.updateCards,setClicked:e.props.setClicked,resetCards:e.props.resetCards})}))}}]),a}(s.Component)),k=(t(21),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).updateCards=t.updateCards.bind(Object(h.a)(t)),t.resetCards=t.resetCards.bind(Object(h.a)(t)),t.state={cards:t.props.cards,numClicked:0},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({cards:this.shuffleCards(this.state.cards)})}},{key:"shuffleCards",value:function(e){for(var a=0;a<16;a++){var t=e[a].clicked?Math.floor(16*Math.random()):Math.floor(Math.random()*e.length),s=e[a];e[a]=e[t],e[t]=s}return e}},{key:"updateCards",value:function(e){var a=this,t=this.state.cards.slice();t[e].clicked=!0;var s=this.state.numClicked+1;this.setState({numClicked:s},function(){if(21!==a.state.numClicked){if(a.shuffleCards(t),a.state.numClicked>=16){for(var e,s=16;s<t.length;s++)if(!t[s].clicked){e=s;break}var i=Math.floor(16*Math.random()),n=t[i];t[i]=t[e],t[e]=n}a.setState({cards:t})}})}},{key:"resetCards",value:function(){for(var e=this.state.cards,a=0;a<e.length;a++)e[a].clicked=!1;this.shuffleCards(e),this.setState({cards:e,numClicked:0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"cards-container"},i.a.createElement(p,{offset:0,images:this.state.cards.slice(0,4),handleHeaderChange:this.props.handleHeaderChange,updateCards:this.updateCards,setClicked:this.setClicked,resetCards:this.resetCards}),i.a.createElement(p,{offset:4,images:this.state.cards.slice(4,8),handleHeaderChange:this.props.handleHeaderChange,updateCards:this.updateCards,setClicked:this.setClicked,resetCards:this.resetCards}),i.a.createElement(p,{offset:8,images:this.state.cards.slice(8,12),handleHeaderChange:this.props.handleHeaderChange,updateCards:this.updateCards,setClicked:this.setClicked,resetCards:this.resetCards}),i.a.createElement(p,{offset:12,images:this.state.cards.slice(12,16),handleHeaderChange:this.props.handleHeaderChange,updateCards:this.updateCards,setClicked:this.setClicked,resetCards:this.resetCards}))}}]),a}(s.Component)),f=t(9),C=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).handleHeaderChange=t.handleHeaderChange.bind(Object(h.a)(t)),t.state={headerMessage:"Click an image to begin!",score:0,topScore:0},t}return Object(g.a)(a,e),Object(d.a)(a,[{key:"handleHeaderChange",value:function(e){this.setState({headerMessage:e}),"You guessed incorrectly!"===e?this.setState({score:0}):this.setState(function(e){return{score:e.score+1,topScore:e.score+1>e.topScore?e.score+1:e.topScore}})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{message:this.state.headerMessage,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(m,null),i.a.createElement(k,{cards:f,handleHeaderChange:this.handleHeaderChange}))}}]),a}(s.Component);c.a.render(i.a.createElement(C,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.bfa8feca.chunk.js.map