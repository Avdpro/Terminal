//Auto genterated by Cody
import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"
import {JAXDataObj} from "/jaxweb/lib/JAXDataObj.js"
/*App的总数据文件*/
/*#{1FBOMFC1B4Imports*/
/*}#1FBOMFC1B4Imports*/

//----------------------------------------------------------------------------
/*App的入口文件*/
var appData={};

//App数据初始化函数:
appData.initData=function(jaxEnv){
	/*#{1FBOMFC1B4initPre*/
	/*}#1FBOMFC1B4initPre*/
	this.jaxEnv=jaxEnv;
	this.version="0.0.0";
	/*#{1FBOMFC1B4initPost*/
	if(this.appParams.path){
		this.path=this.appParams.path;
	}else{
		this.path="/terminal";
	}
	/*}#1FBOMFC1B4initPost*/
};
/*#{1FBOMFC1B4ExFuncs*/
/*}#1FBOMFC1B4ExFuncs*/

export {appData};
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBOMFC1B4", "dataObj": {"version":"\"0.0.0\""}, 
//			"funcs": {"jaxId":"1FBOMFC1B5","funcs":[]}
//		}/*Doc}#*/;
//	}