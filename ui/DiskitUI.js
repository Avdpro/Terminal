//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
import {btnIcon} from "../gear/btnIcon.js";
/*#{1FBR233GG0Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {UIConsole} from "../gear/UIConsole.js";
/*}#1FBR233GG0Imports*/

/*App界面*/
//----------------------------------------------------------------------------
/*App里的UI View*/
var DiskitUI=function (app){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FBR233GG1ExLocal*/
	/*}#1FBR233GG1ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state=jaxHudState(jaxEnv,{
		/*#{1FBR233GG3ExState*/
		/*}#1FBR233GG3ExState*/
	},);
	/*#{1FBR233GG1PostState*/
	/*}#1FBR233GG1PostState*/
	
	cssVO={
		"type": "view", "hudState": state, "jaxId": "1FBR233GG1", 
		"locked": 1, "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		items: [
			{
				"type": "box", "jaxId": "1FBR2S8SB0", "id": "BoxList", "x": 0, "y": appCfg.size.headerH, "w": "FW", "h": "FH-"+(appCfg.size.headerH+appCfg.size.stateBoxH), 
				"autoLayout": 1, "color": appCfg.color.window, "shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR5JL960", "id": "BoxListHead", "x": 0, "y": 1, "w": "FW", "h": appCfg.size.listHeadH, "autoLayout": 1, "color": appCfg.color.headBox, 
						"shadowColor": [0,0,0,0.5], 
						items: [
							{
								"type": "box", "jaxId": "1FBR5C1N60", "id": "BtmLine", "x": 0, "y": appCfg.size.listHeadH, "w": "FW", "h": 1, "autoLayout": 1, "color": 787878, 
								"shadowColor": [0,0,0,0.5]
							},
							{
								"type": "box", "jaxId": "1FBR5F4TH0", "id": "TopLine", "x": 0, "y": 0, "w": "FW", "h": 1, "autoLayout": 1, "color": [255,255,255,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": "text", "jaxId": "1FM3LE7810", "id": "TxtPath", "x": 25, "y": 0, "w": 100, "h": 24, "text": "/coke/", "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.smallMid
							},
							{
								"type": "image", "jaxId": "1FOTMSDRN6", "id": "ImgPath", "x": 5, "y": 2, "w": 20, "h": 20, "cursor": "pointer", "image": "assets/folder.svg", 
								"autoSize": 0, "fitSize": 1, 
								//函数
								OnClick:function(){
									/*#{1FOV5GV7B0Code*/
									app.DoOpenDiskit();
									/*}#1FOV5GV7B0Code*/
								}
							}
						]
					},
					{
						"type": "dock", "jaxId": "1FF4L6KQ00", "id": "DKConsoles", "x": 0, "y": appCfg.size.listHeadH, "w": "FW", "h": "FH-"+appCfg.size.listHeadH, "ui": -1, 
						"autoLayout": 1
					}
				]
			},
			{
				"type": "box", "jaxId": "1FBR26ACL0", "id": "BoxHead", "x": 0, "y": 0, "w": "FW", "h": appCfg.size.headerH, "autoLayout": 1, "color": appCfg.color.headBox, 
				"shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "box", "jaxId": "1FBR2C50N0", "id": "BtmLine", "x": 0, "y": appCfg.size.headerH, "w": "FW", "h": 1, "autoLayout": 1, "color": 787878, "shadowColor": [0,0,0,0.5]
					},
					{
						"type": "hud", "jaxId": "1FBR4H3UE0", "id": "BoxHeadNavi", "x": 0, "y": 0, "w": "FW", "h": "FH", 
						items: [
							{
								"type": "box", "jaxId": "1FBR4H3UF0", "x": 3, "y": 3, "w": 1, "h": "FH-6", "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
							},
							{
								"type": btnIcon(app,24,"fileadd.svg",null),"jaxId": "1FBR4H3UF3", 
								"locked": 1, "id": "BtnPut", "x": 6, "y": "(FH-24)/2", "tip": "Put file(s)", "labelHtml": "<input type=\"file\"/ multiple=\"true\">", 
								//函数
								OnLabelAction:function(){
									/*#{1FOTPRIL30Code*/
									let files=[],i,n;
									n=this.files.length;
									for(i=0;i<n;i++){
										files.push(this.files[i]);
									}
									app.DoPutFile(files);
									this.value="";
									/*}#1FOTPRIL30Code*/
								}
							},
							{
								"type": btnIcon(app,24,"tip.svg",null),"jaxId": "1FBR4KQEH0", 
								"locked": 1, "id": "BtnTip", "x": 54, "y": "(FH-24)/2", "tip": "Terminal tip", 
								//函数
								OnClick:function(){
									/*#{1FBR50B8K4Code*/
									app.DoOpenTip();
									/*}#1FBR50B8K4Code*/
								}
							},
							{
								"type": btnIcon(app,24,"edit.svg",null),"jaxId": "1FC2R95CR0", 
								"locked": 1, "id": "BtnEdit", "x": 30, "y": "(FH-24)/2", "tip": "Launch CCEdit here", 
								//函数
								OnClick:function(){
									/*#{1FC2R95CR4Code*/
									app.DoOpenCCEditor();
									/*}#1FC2R95CR4Code*/
								}
							}
						]
					}
				]
			},
			{
				"type": "box", "jaxId": "1FBR439899", "id": "BoxState", "x": 0, "y": "FH", "w": "FW", "h": appCfg.size.stateBoxH, "anchorV": 2, "autoLayout": 1, "color": appCfg.color.stateBox, 
				"shadowColor": [0,0,0,0.5], 
				items: [
					{
						"type": "text", "jaxId": "1FBR4H3UF8", "id": "TxtState", "x": 10, "y": 0, "w": 100, "h": 24, "text": "Ready.", "color": [0,0,0], "alignV": 1, "fontSize": appCfg.txtSize.small
					},
					{
						"type": "box", "jaxId": "1FBR46FJ50", "id": "Line", "x": 0, "y": -1, "w": "FW", "h": 1, "autoLayout": 1, "color": [150,150,150,1], "shadowColor": [0,0,0,0.5]
					}
				]
			}
		],
		faces: {
			"inCmd": {
				"$":function(vo){
					/*#{1FOU93GCH0Func*/
					self.BtnEdit.enable=false;
					self.BtnPut.enable=false;
					self.ImgPath.uiEvent=-1;
					self.ImgPath.alpha=0.5;
					self.TxtPath.alpha=0.5;
					/*}#1FOU93GCH0Func*/
				},
			},
			"waitCmd": {
				"$":function(vo){
					/*#{1FOU93QU00Func*/
					self.BtnEdit.enable=true;
					self.BtnPut.enable=true;
					self.ImgPath.uiEvent=1;
					self.ImgPath.alpha=1;
					self.TxtPath.alpha=1;
					/*}#1FOU93QU00Func*/
				},
			}
		},
		/*#{1FBR233GG1ExAttrs*/
		/*}#1FBR233GG1ExAttrs*/
		OnCreate: function(){
			self=this;
			/*#{1FBR233GG1CreateFunc*/
			let cssVO;
			app.mainUI=this;
			cssVO=UIConsole(app);
			this.DKConsoles.showNewUI(cssVO);
			self.showPath();
			/*}#1FBR233GG1CreateFunc*/
		
		}
	};
	/*#{1FBR233GG1ExViewDef*/
	cssVO.showPath=function(){
		let path=JAXDisk.appPath;
		if(path.endsWith("/")){
			path=path.substring(0,path.length-1);
		}
		let pos=path.lastIndexOf("/");
		let img;
		switch(pos){
			case -1:
				path="/";
				img="assets/home.svg";
				break;
			case 0:
				img="assets/disk.svg";
				break;
			default:
				img="assets/folder.svg";
		}
		self.ImgPath.image=img;
		self.TxtPath.text=""+path;
	};
	/*}#1FBR233GG1ExViewDef*/
	
	return cssVO;
};

/*#{1FBR233GG0PostCode*/
/*}#1FBR233GG0PostCode*/

export {DiskitUI};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"name": "DiskitUI.js", "type": "object", "def": "CdyFileUIView", "jaxId": "1FBR233GG0", 
//			"attrs": {
//				"viewName": "\"DiskitUI\"", "device": "iPad 1024x768", "w": "1024", "h": "768", 
//				"view": {
//					"type": "object", "def": "HudView", "jaxId": "1FBR233GG1", 
//					"args": {
//						"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR233GG2", 
//						"attrs": {}
//					}, 
//					"stateObj": {
//						"name": "state", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FBR233GG3", 
//						"attrs": {}, "funcs": {"jaxId":"1FBR233GG4","funcs":[]}
//					}, 
//					"attrs": {
//						"locked": "1", "viewName": "\"uiView\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "autoLayout": "On"
//					}, 
//					"faces": null, 
//					"viewFaces": {
//						"jaxId": "1FBR233GG6", 
//						"entrys": [
//							{
//								"jaxId": "1FOU93GCH0", "attrs": {"Face Name":"\"inCmd\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOU96VKT0", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							},
//							{
//								"jaxId": "1FOU93QU00", 
//								"attrs": {"Face Name":"\"waitCmd\"","Face Function":"1"}, 
//								"state": {
//									"name": "state", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOU96VKT1", 
//									"attrs": {}
//								}, 
//								"faceTimes": []
//							}
//						]
//					}, 
//					"funcs": {"jaxId":"1FBR233GG7","funcs":[]}, 
//					"subs": [
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR2S8SB0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxList\"", "x": "0", "y": "#appCfg.size.headerH", "w": "#\"FW\"", "h": "#\"FH-\"+(appCfg.size.headerH+appCfg.size.stateBoxH)", 
//								"anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.window", "border": "0", 
//								"borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", 
//								"shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR2S8SB2","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR5JL960", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxListHead\"", "x": "0", "y": "1", "w": "\"FW\"", "h": "#appCfg.size.listHeadH", "anchorH": "Left", "anchorV": "Top", 
//										"autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.headBox", "border": "0", "borderStyle": "Solid", 
//										"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//										"shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR5JL962","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR5C1N60", 
//											"attrs": {
//												"locked": "1", "id": "\"BtmLine\"", "x": "0", "y": "#appCfg.size.listHeadH", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", 
//												"autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//												"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//												"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR5C1N70","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR5F4TH0", 
//											"attrs": {
//												"locked": "1", "id": "\"TopLine\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[255,255,255,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR5F4TJ0","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "HudTxt", "jaxId": "1FM3LE7810", 
//											"attrs": {
//												"locked": "1", "id": "\"TxtPath\"", "x": "25", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "text": "\"/coke/\"", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", 
//												"alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.smallMid", "bold": "0", "italic": "0", "underline": "0", 
//												"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FM3LE7811","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "HudImage", "jaxId": "1FOTMSDRN6", 
//											"attrs": {
//												"locked": "1", "id": "\"ImgPath\"", "x": "5", "y": "2", "w": "20", "h": "20", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"pointer\"", "zIndex": "0", "image": "assets/folder.svg", "autoSize": "0", 
//												"fitSize": "1"
//											}, 
//											"funcs": {
//												"jaxId": "1FOTMSDRN8", 
//												"funcs": [
//													{
//														"jaxId": "1FOV5GV7B0", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOV5HG770", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}, 
//											"subs": []
//										}
//									]
//									
//								},
//								{
//									"type": "object", "def": "HudDock", "jaxId": "1FF4L6KQ00", 
//									"attrs": {
//										"locked": "0", "id": "\"DKConsoles\"", "x": "0", "y": "#appCfg.size.listHeadH", "w": "\"FW\"", "h": "#\"FH-\"+appCfg.size.listHeadH", "ui": "-1", 
//										"anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", 
//										"zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FF4L6KQ02","funcs":[]}, "subs": []
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR26ACL0", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxHead\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "#appCfg.size.headerH", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//								"display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.headBox", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", 
//								"coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", 
//								"alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR26ACL2","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR2C50N0", 
//									"attrs": {
//										"locked": "1", "id": "\"BtmLine\"", "x": "0", "y": "#appCfg.size.headerH", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "color": "#787878", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//										"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR2C50N2","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudObj", "jaxId": "1FBR4H3UE0", 
//									"attrs": {
//										"locked": "1", "id": "\"BoxHeadNavi\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", 
//										"display": "Show", "clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR4H3UE2","funcs":[]}, 
//									"subs": [
//										{
//											"type": "object", "def": "HudBox", "jaxId": "1FBR4H3UF0", 
//											"attrs": {
//												"locked": "1", "id": "\"\"", "x": "3", "y": "3", "w": "1", "h": "\"FH-6\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//												"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//												"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//												"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//											}, 
//											"funcs": {"jaxId":"1FBR4H3UF2","funcs":[]}, "subs": []
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4H3UF3", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4H3UF4", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "24", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"fileadd.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4H3UF5", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"1","info":"","tip":""}, "id": "\"BtnPut\"", "x": "6", "y": "\"(FH-24)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Put file(s)\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off", 
//												"labelHtml": {
//													"type": "auto", "valText": "\"<input type=\\\"file\\\"/ multiple=\\\"true\\\">\"", "initVal": undefined, "info": "", "tip": ""
//												}
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4H3UF7", 
//												"funcs": [
//													{
//														"jaxId": "1FOTPRIL30", "type": "object", "def": "CdyFunc", "name": "OnLabelAction", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FOTPRIL31", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FBR4KQEH0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4KQEH1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "24", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"tip.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR4KQEH2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"1","info":"","tip":""}, "id": "\"BtnTip\"", "x": "54", "y": "\"(FH-24)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Terminal tip\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FBR4KQEH3", 
//												"funcs": [
//													{
//														"jaxId": "1FBR50B8K4", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FBR50B8K5", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										},
//										{
//											"type": "object", "def": "Gear1FBOMHCB70", "jaxId": "1FC2R95CR0", 
//											"args": {
//												"name": "gearArgs", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR1", 
//												"attrs": {
//													"w": {
//														"type": "int", "valText": "24", "initVal": 0, "info": null, 
//														"tip": null
//													}, 
//													"image": {
//														"type": "string", "valText": "\"edit.svg\"", "initVal": "", 
//														"info": null, "tip": null
//													}
//												}
//											}, 
//											"stateObj": {
//												"name": "gearState", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR2", 
//												"attrs": {}
//											}, 
//											"attrs": {
//												"locked": {"type":"auto","valText":"1","info":"","tip":""}, "id": "\"BtnEdit\"", "x": "30", "y": "\"(FH-24)/2\"", 
//												"tip": {
//													"type": "auto", "valText": "\"Launch CCEdit here\"", "initVal": undefined, 
//													"info": null, "tip": null
//												}, 
//												"autoLayout": "Off"
//											}, 
//											"faces": null, 
//											"funcs": {
//												"jaxId": "1FC2R95CR3", 
//												"funcs": [
//													{
//														"jaxId": "1FC2R95CR4", "type": "object", "def": "CdyFunc", "name": "OnClick", "info": "函数", "tip": "", 
//														"args": {
//															"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FC2R95CR5", 
//															"attrs": {}
//														}, 
//														"attrs": {"Mockup Result":"\"\""}
//													}
//												]
//											}
//											
//										}
//									]
//									
//								}
//							]
//							
//						},
//						{
//							"type": "object", "def": "HudBox", "jaxId": "1FBR439899", 
//							"attrs": {
//								"locked": "1", "id": "\"BoxState\"", "x": "0", "y": "\"FH\"", "w": "\"FW\"", "h": "#appCfg.size.stateBoxH", "anchorH": "Left", "anchorV": "Bottom", 
//								"autoLayout": "On", "display": "Show", "clip": "Off", "uiEvent": "On", "color": "#appCfg.color.stateBox", "border": "0", "borderStyle": "Solid", 
//								"borderColor": "[0,0,0,1]", "coner": "0", "gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", 
//								"shadowColor": "[0,0,0,0.5]", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//							}, 
//							"funcs": {"jaxId":"1FBR4398911","funcs":[]}, 
//							"subs": [
//								{
//									"type": "object", "def": "HudTxt", "jaxId": "1FBR4H3UF8", 
//									"attrs": {
//										"locked": "0", "id": "\"TxtState\"", "x": "10", "y": "0", "w": "100", "h": "24", "anchorH": "Left", "anchorV": "Top", "autoLayout": "Off", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "text": "\"Ready.\"", "color": "[0,0,0]", "autoSizeW": "0", "autoSizeH": "0", "select": "0", "wrap": "0", "ellipsis": "0", 
//										"alignH": "Left", "alignV": "Center", "font": "\"\"", "fontSize": "#appCfg.txtSize.small", "bold": "0", "italic": "0", "underline": "0", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR4H3UF10","funcs":[]}, "subs": []
//								},
//								{
//									"type": "object", "def": "HudBox", "jaxId": "1FBR46FJ50", 
//									"attrs": {
//										"locked": "1", "id": "\"Line\"", "x": "0", "y": "-1", "w": "\"FW\"", "h": "1", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//										"clip": "Off", "uiEvent": "On", "color": "[150,150,150,1]", "border": "0", "borderStyle": "Solid", "borderColor": "[0,0,0,1]", "coner": "0", 
//										"gradient": "\"\"", "shadow": "0", "shadowX": "2", "shadowY": "2", "shadowBlur": "3", "shadowSpread": "0", "shadowColor": "[0,0,0,0.5]", "alpha": "1", 
//										"rotate": "0", "cursor": "\"\"", "zIndex": "0"
//									}, 
//									"funcs": {"jaxId":"1FBR46FJ52","funcs":[]}, "subs": []
//								}
//							]
//							
//						}
//					]
//				}, 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FBR233GG8", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FBR233GG10","entrys":[]}, "subs": []
//				}
//			}
//		}/*Doc}#*/;
//	}