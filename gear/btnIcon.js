//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FBOMHCB70Imports*/
/*}#1FBOMHCB70Imports*/
//----------------------------------------------------------------------------
/*按钮控件，支持鼠标悬浮、不可用状态*/
var btnIcon=function (app, w, image, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBOMHCB71ExLocal*/
	/*}#1FBOMHCB71ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FBOMHCB73ExState*/
		/*}#1FBOMHCB73ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FBOMHCB71Mid*/
	/*}#1FBOMHCB71Mid*/
	
	cssVO={
		"type": "button", "jaxId": "1FBOMHCB71", "x": 67, "y": 71, "w": w, "h": w, 
		"hudState": state, 
		"hudBtnDown": {
			"type": "box", "jaxId": "1FBPC7MSG0", "x": 0, "y": 0, "w": w, "h": w, "color": appCfg.color.btnDown, "coner": 5, "shadowColor": [0,0,0,0.5]
		},
		"hudBtnOver": {
			"type": "box", "jaxId": "1FBPC6MCV0", "x": 0, "y": 0, "w": w, "h": w, "color": appCfg.color.highLight, "coner": 3, "shadowColor": [0,0,0,0.5]
		},
		items: [
			{
				"type": "image", "jaxId": "1FBOMN88F0", "x": 0, "y": 0, "w": "FW", "h": "FH", "uiEvent": -1, "image": "assets/"+image, "autoSize": 0, "fitSize": 1
			}
		],
		faces: {
			"down": {
				/**/"#1FBOMN88F0": {
					"x": 1, "y": 1, "w": w-2, "h": w-2, "alpha": 1
				},
			},
			"up": {
				/**/"#1FBOMN88F0": {
					"x": 0, "y": 0, "w": w, "h": w, "alpha": 1
				},
			},
			"over": {
				/**/"#1FBOMN88F0": {
					"x": 0, "y": 0, "w": w, "h": w, "alpha": 1
				},
			},
			"gray": {
				/**/"#1FBOMN88F0": {
					"x": 0, "y": 0, "w": w, "h": w, "alpha": 0.3
				},
			}
		},
		OnCreate: function(){
			self=this;
			/*#{1FBOMHCB71CreateFunc*/
			/*}#1FBOMHCB71CreateFunc*/
		}
	};
	/*#{1FBOMHCB71ExViewDef*/
	//---------------------------------------------------------------
	//鼠标进入/离开响应:
	cssVO.OnMouseInOut=function(isIn){
		if(isIn && self.tip){
			app.showTip(self,self.tip,self.w/2,self.h+5,1,0);
		}else{
			app.abortTip(self);
		}
	};
	/*}#1FBOMHCB71ExViewDef*/
	
	return cssVO;
};

/*#{1FBOMHCB70PostCode*/
/*}#1FBOMHCB70PostCode*/

export {btnIcon};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "btnIcon.js", "def": "CdyFileUIGear", "jaxId": "1FBOMHCB70", 
//			"attrs": {
//				"gearName": "\"btnIcon\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBOMHCBD0", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBOMHCBD2","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudBtn", "jaxId": "1FBOMHCB71", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBOMHCB72", 
//					"attrs": {
//						"w": {"type":"int","valText":"32","initVal":"","info":null,"tip":null}, 
//						"image": {
//							"type": "string", "valText": "\"mulu.svg\"", "initVal": "", "info": null, 
//							"tip": null
//						}
//					}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBOMHCB73", 
//					"attrs": {}, "funcs": {"jaxId":"1FBOMHCBD3","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "67", "y": "71", "w": "#w", "h": "#w", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "drag": "NA", "enable": "On", "zIndex": "0"
//				}, 
//				"viewFaces": {
//					"jaxId": "1FBOMHCBD4", 
//					"entrys": [
//						{
//							"jaxId": "1FBPCCNTG0", "attrs": {"Face Name":"\"down\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBPCF63P0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBQRUBH20", "attrs": {"Face Name":"\"up\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBQS7MUD0", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBQRUG4V0", "attrs": {"Face Name":"\"over\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBQS7MUD1", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						},
//						{
//							"jaxId": "1FBQRUO310", "attrs": {"Face Name":"\"gray\"","Face Function":"0"}, 
//							"state": {
//								"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBQS7MUD2", 
//								"attrs": {}
//							}, 
//							"faceTimes": []
//						}
//					]
//				}, 
//				"funcs": {"jaxId":"1FBOMHCBD6","funcs":[]}, 
//				"btnHuds": {
//					"hudBtnDown": {
//						"type": "object", "def": "HudBox", "jaxId": "1FBPC7MSG0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "#w", "h": "#w", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.btnDown", "border": "0", "borderStyle": "Solid", "borderColor": "#000000ff", "coner": "5", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBPC7MSG2","funcs":[]}, "subs": []
//					}, 
//					"hudBtnOver": {
//						"type": "object", "def": "HudBox", "jaxId": "1FBPC6MCV0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "#w", "h": "#w", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "On", "color": "#appCfg.color.highLight", "border": "0", "borderStyle": "Solid", "borderColor": "#000000ff", "coner": "3", 
//							"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//							"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//						}, 
//						"funcs": {"jaxId":"1FBPC6MCV2","funcs":[]}, "subs": []
//					}
//				}, 
//				"subs": [
//					{
//						"type": "object", "def": "HudImage", "jaxId": "1FBOMN88F0", 
//						"attrs": {
//							"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//							"clip": "Off", "uiEvent": "TreeOff", "image": "#\"assets/\"+image", "autoSize": "0", "fitSize": "1", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//							"zIndex": "0"
//						}, 
//						"faces": {
//							"jaxId": "1FBPBUB6Q2", 
//							"entrys": [
//								{
//									"jaxId": "1FBPCF63P1", "entryId": "1FBPCCNTG0", "faceName": "down", 
//									"attrs": {"x":"1","y":"1","w":"#w-2","h":"#w-2","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBPCF63P2", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBQS7MUD3", "entryId": "1FBQRUBH20", "faceName": "up", 
//									"attrs": {"x":"0","y":"0","w":"#w","h":"#w","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBQS7MUD4", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBQS7MUD5", "entryId": "1FBQRUG4V0", "faceName": "over", 
//									"attrs": {"x":"0","y":"0","w":"#w","h":"#w","alpha":"1"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBQS7MUD6", 
//										"attrs": []
//									}
//									
//								},
//								{
//									"jaxId": "1FBQS7MUD7", "entryId": "1FBQRUO310", "faceName": "gray", 
//									"attrs": {"x":"0","y":"0","w":"#w","h":"#w","alpha":"0.3"}, 
//									"anis": {
//										"name": "Animation", "type": "object", "def": "ani", "jaxId": "1FBQS7MUD8", 
//										"attrs": []
//									}
//									
//								}
//							]
//						}, 
//						"funcs": {"jaxId":"1FBOMN88F2","funcs":[]}, "subs": []
//					}
//				]
//			}
//		}/*Doc}#*/;
//	}