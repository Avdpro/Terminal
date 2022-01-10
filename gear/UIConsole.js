//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js"
/*#{1FF5LFP460Imports*/
import {CCEnv} from "../data/CCEnv.js";
/*}#1FF5LFP460Imports*/
//----------------------------------------------------------------------------
/*Hud控件节点，没有内容，可以有子节点*/
var UIConsole=function (app, $state){
	let jaxEnv,appCfg,txtLib,appData,state;
	let cssVO,self;
	/*#{1FF5LFP461ExLocal*/
	let uiVO=null;
	let ccEnv=null;
	let cokeEnv=null;
	let tty=null;
	/*}#1FF5LFP461ExLocal*/
	
	jaxEnv=app.jaxEnv;
	appCfg=app.appCfg;
	txtLib=app.txtLib;
	appData=app.appData;
	
	state={
		/*#{1FF5LFP463ExState*/
		/*}#1FF5LFP463ExState*/
	};
	if($state){
		Object.assign(state,$state);
	}
	state=jaxHudState(jaxEnv,state);
	
	/*#{1FF5LFP461Mid*/
	ccEnv=new CCEnv(appData);
	/*}#1FF5LFP461Mid*/
	
	cssVO={
		"type": "hud", "jaxId": "1FF5LFP461", "x": 0, "y": 0, "w": "FW", "h": "FH", "autoLayout": 1, 
		"hudState": state, 
		faces: {
		},
		OnCreate: function(){
			self=this;
			/*#{1FF5LFP461CreateFunc*/
			let cwd,execVO;
			execVO=appData.appParams.cokeExecCmd;
			if(execVO){
				self.runCommands(execVO);
			}else{
				cwd=appData.appParams.cwd||"/";
				ccEnv.startCCEnv(cwd,this.webObj,null);
				tty=ccEnv.tty;
				ccEnv.stdout.write("CokeCodes terminal is command-line environment for cokecodes.\n");
				ccEnv.stdout.write(`Use "help" command to see available commands you can use.\n`);
				ccEnv.startInput();
				cokeEnv=ccEnv.cokeEnv;
				app.cokeEnv=cokeEnv;
				cokeEnv.on("StartInput",()=>{
					app.OnStartInput(cokeEnv);
				});
				cokeEnv.on("ExecCmdStart",(cmd)=>{
					app.OnExecCmdStart(cokeEnv,cmd);
				});
				cokeEnv.on("ExecCmdDone",(retVO)=>{
					app.OnExecCmdDone(cokeEnv,retVO);
				});
				this.webObj.onclick=e=>{
					if(e.target!==tty.divInput){
						if(tty.divInput){
							tty.divInput.focus();
							window.getSelection().collapse(tty.divInput.firstChild, tty.divInput.innerText.length);
						}
					}
				};
				self.webObj.ondragover=(e)=>{
					e.dataTransfer.dropEffect = "copy";
					e.preventDefault();
				};
				self.webObj.ondrop=(e)=>{
					let dt,files;
					if(cokeEnv.inCmd){
						return;
					}
					dt=e.dataTransfer;
					app.DoCopyDataTransferFiles(dt);
					e.preventDefault();
					e.stopPropagation();
				};
			}
			/*}#1FF5LFP461CreateFunc*/
		}
	};
	/*#{1FF5LFP461ExViewDef*/

	//------------------------------------------------------------------------
	//Show the UI, called bye dock:
	cssVO.showUI=function(vo){
		uiVO=vo;
	};
	
	//------------------------------------------------------------------------
	//Run start commands:
	cssVO.runCommands=async function(execVO){
		let cwd,cmds,i,n,cmd;
		execVO=JSON.parse(execVO);
		cwd=execVO.path||"/";
		ccEnv.startCCEnv(cwd,this.webObj,null);
		cokeEnv=ccEnv.cokeEnv;
		tty=ccEnv.tty;
		cmds=execVO.cmds;
		if(!Array.isArray(cmds)){
			if(typeof(cmds)==="string"){
				cmds=cmds.split("\n");
			}else{
				cmds=null;
			}
		}
		if(cmds){
			n=cmds.length;
			for(i=0;i<n;i++){
				cmd=cmds[i].trim();
				if(cmd){
					tty.textOut(`coke ${cwd} $>${cmd}\n`);
					await cokeEnv.execCmd(cmd);
				}
			}
		}
		ccEnv.stdout.write(`\n`);
		ccEnv.startInput();
		cokeEnv.on("StartInput",()=>{
			app.OnStartInput(cokeEnv);
		});
		cokeEnv.on("ExeCmdStart",(cmd)=>{
			app.OnExecCmdStart(cokeEnv,cmd);
		});
		cokeEnv.on("ExeCmdDone",(retVO)=>{
			app.OnExecCmdDone(cokeEnv,retVO);
		});
	};
	
	
	/*}#1FF5LFP461ExViewDef*/
	
	return cssVO;
};

/*#{1FF5LFP460PostCode*/
/*}#1FF5LFP460PostCode*/

export {UIConsole};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"type": "object", "name": "UIConsole.js", "def": "CdyFileUIGear", "jaxId": "1FF5LFP460", 
//			"attrs": {
//				"gearName": "\"UIConsole\"", "device": "iPhone 375x750", "w": "375", "h": "750", "desc": "\"\"", 
//				"notes": {
//					"type": "object", "def": "HudNote", "jaxId": "1FF5LFP470", 
//					"attrs": {"locked":"0"}, "faces": null, 
//					"viewFaces": {"jaxId":"1FF5LFP472","entrys":[]}, "subs": []
//				}
//			}, 
//			"uiGear": {
//				"type": "object", "def": "HudObj", "jaxId": "1FF5LFP461", 
//				"args": {
//					"name": "args", "type": "object", "def": "CdyDocObjJSON", "jaxId": "1FF5LFP462", 
//					"attrs": {}
//				}, 
//				"stateObj": {
//					"name": "stateObj", "type": "object", "def": "CdyDocObjHudState", "jaxId": "1FF5LFP463", 
//					"attrs": {}, "funcs": {"jaxId":"1FF5LFP473","funcs":[]}
//				}, 
//				"attrs": {
//					"locked": "0", "id": "\"\"", "x": "0", "y": "0", "w": "\"FW\"", "h": "\"FH\"", "anchorH": "Left", "anchorV": "Top", "autoLayout": "On", "display": "Show", 
//					"clip": "Off", "uiEvent": "On", "alpha": "1", "rotate": "0", "cursor": "\"\"", "zIndex": "0"
//				}, 
//				"viewFaces": {"jaxId":"1FF5LFP474","entrys":[]}, 
//				"funcs": {"jaxId":"1FF5LFP476","funcs":[]}, "subs": []
//			}
//		}/*Doc}#*/;
//	}