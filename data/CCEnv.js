//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*#{1FEVM7ENL0Imports*/
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {CokeEnv} from "/jaxweb/lib/CokeEnv.js";
import CMDPwd from "../lib/cmd_pwd.js";
/*}#1FEVM7ENL0Imports*/
/*自定义数据类*/
var CCEnv;
let __Proto;

//*****************************************************
/*CCEnv: Data object class*/
//*****************************************************
{
	CCEnv=function(appData){
		var jaxEnv,app;
		/*#{1FEVM7J870Pre*/
		/*}#1FEVM7J870Pre*/
		if(!appData){return;}
		//Data attributes:
		this.curTask = null;
		/*#{1FEVM7J870Post*/
		let self=this;
		this.app=appData.app;
		JAXDisk.appPath=appData.path;
		this.cokeEnv=new CokeEnv(appData.jaxEnv);
		this.stdout=this.cokeEnv.stdout;
		this.tty=this.cokeEnv.tty;
		/*}#1FEVM7J870Post*/
	};
	__Proto=CCEnv.prototype={};
	
	
	/*#{1FEVM7J870Functions*/
	//------------------------------------------------------------------------
	//启动环境:
	__Proto.startCCEnv=function(diskPath,ttyDiv,host){
		JAXDisk.appPath=diskPath;
		CMDPwd.reg_cmd(this.cokeEnv);
		this.cokeEnv.init("",{},ttyDiv,host);
		this.stdout=this.cokeEnv.stdout;
		this.tty=this.cokeEnv.tty;
	};
	
	//------------------------------------------------------------------------
	//清除输出内容:
	__Proto.clearOut=function(){
		this.cokeEnv.tty.clear();
	};

	//------------------------------------------------------------------------
	//启用输入:
	__Proto.startInput=async function(){
		this.cokeEnv.cmdInput(true,true);
	};
	/*}#1FEVM7J870Functions*/
};

/*#{1FEVM7ENL0ExCodes*/
/*}#1FEVM7ENL0ExCodes*/
export {CCEnv};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FEVM7ENL0", "def": "CdyFileDataClass", 
//			"attrs": {"fileName":"\"CCEnv\"","description":"\"\""}, 
//			"classObjs": {
//				"name": "classObjs", "type": "object", "def": "CdyDocObj", "jaxId": "1FEVM7ENL1", 
//				"attrs": {
//					"CCEnv": {
//						"type": "object", "def": "CdyDataClass", "name": "CCEnv", "tip": "", "jaxId": "1FEVM7J870", 
//						"attrs": {}, 
//						"args": {
//							"name": "Arguments", "type": "object", "def": "ClassObjArgObj", "jaxId": "1FEVMBP7H0", 
//							"attrs": {"superClass":"\"CokeEnv\""}
//						}, 
//						"pptsObj": {
//							"name": "Properties", "type": "object", "def": "ClassObjPptObj", "jaxId": "1FEVMBP7H1", 
//							"attrs": {
//								"curTask": {"type":"auto","valText":"null","initVal":"","info":null,"tip":null}
//							}
//						}, 
//						"funcsObj": {"jaxId":"1FEVMBP7H2","funcs":[]}, 
//						"mockObjs": {
//							"name": "Mockups", "type": "object", "def": "CdyDocObj", "jaxId": "1FEVMBP7H3", 
//							"attrs": {}
//						}
//					}
//				}
//			}
//		}/*Doc}#*/;
//	}