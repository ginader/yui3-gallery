YUI.add("gallery-stalker",function(H){var F=H.UA,C=H.ClassNameManager.getClassName,D="stalker",A="host",E="px",B=C(D),G=function(){G.superclass.constructor.apply(this,arguments);};G.NAME="NodeStalker";G.NS=D;G.ATTRS={};H.extend(G,H.Plugin.Base,{_root:null,_eventHandlers:[],initializer:function(I){var J=H.bind(this.refresh,this);if((this._root=this.get(A))){this._root.addClass(B);this._eventHandlers.push(H.on("scroll",J));this._eventHandlers.push(H.on("windowresize",J));}},destructor:function(){if(this._root){this._root.removeClass(B);}H.Array.each(this._eventHandlers,function(I){I.detach();});},refresh:function(){var K=H.DOM.docScrollY(),J=H.DOM.docScrollX(),M=this._root,I=M.get("parentNode").getXY(),L=["marginTop","marginLeft","borderLeftWidth","borderTopWidth"];I[1]=Math.max(0,I[1]-K);I[0]=I[0]-J;H.Array.each(L,function(N){I[N]=parseInt(M.getStyle(N),10)||0;});M.setStyles({top:I[1]-I.borderTopWidth-I.marginTop,left:I[0]-I.borderLeftWidth-I.marginLeft,position:"fixed"});},_IE6Fix:function(){var I,K,J;if(F.ie==6){I=this._root.get("id");K=this._root.get("parentNode").get("id");J="#"+I+" {top:expression((ignore = document.documentElement.scrollTop>document.getElementById('"+K+"').offsetTop) ? document.documentElement.scrollTop : document.getElementById('"+K+"').offsetTop + 'px' );}";H.on("domready",function(L){});return true;}}});H.namespace("Plugin");H.Plugin.NodeStalker=G;},"gallery-2010.04.02-17-26",{requires:["plugin","node-base","event-resize","event-base","dom-screen","classnamemanager"]});