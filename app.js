//Auto genterated by Cody
/*#{AppImport*/
//JAX基础功能：
import {JAXEnv} from "/jaxweb/lib/JAXEnv.js";
import {JAXApp} from "/jaxweb/lib/JAXApp.js";
import {JAXDisk} from "/jaxweb/lib/JAXDisk.js";
import {} from "/@coke/node";
import {} from "/jaxweb/lib/JAXHudLib.js";
import {jaxHudState} from "/jaxweb/lib/JAXHudState.js";
import {appCfg} from "./cfg/appCfg.js";
import {textLib} from "./text/textLib.js";
import {appData} from "./appData.js";
import {zip2Path} from "/@zippath";
import pathLib from "/@path";
import {getDataTransferFiles} from "./lib/readdrops.js";
/*}#AppImport*/
import {DiskitUI} from "./ui/DiskitUI.js";
var entryUI=DiskitUI;
/*#{AppEnv-Pre*/
let jaxDiv=document.getElementById("JAXAppFrame");
var jaxApp,jaxEnv,appURL,docPath,diskPath,appParams;
var hotBox=null;

jaxDiv.style.height=window.innerHeight+"px";
jaxDiv.style.background="#F0F0F0";

docPath=appURL=document.location.href;
let pos1=docPath.indexOf("/disks/");
pos1+="/disks/".length;
let pos2=docPath.indexOf("/",pos1);
diskPath=docPath.substring(pos1,pos2);
console.log("Disk Path: "+diskPath);

appData.appURLHost=document.location.host;
appData.appParams=appParams={};
pos1=appURL.indexOf("?");
if(pos1>0){
	let ptext,list;
	ptext=appURL.substring(pos1+1);
	list=ptext.split("&");
	list.forEach(item=>{
		let subs,key,val;
		subs=item.split("=");
		if(subs.length===2){
			key=decodeURIComponent(subs[0]);
			val=decodeURIComponent(subs[1]);
			appParams[key]=val;
		}
	});
}

document.title="CCTerminal";

jaxEnv=new JAXEnv(jaxDiv);
window.jaxApp=jaxApp=jaxEnv.createApp();

//先初始化JAX的文件系统，再启动App:
JAXDisk.init(jaxApp).then(()=>{
	jaxApp.appCfg=appCfg;
	jaxApp.textLib=textLib["EN"];
	jaxApp.appData=appData;
	initData();
});


//----------------------------------------------------------------------------
//Paste from clip board:
document.body.onpaste=(e)=>{
	let dt,files,cpText;
	if(jaxApp && jaxApp.cokeEnv){
		if(jaxApp.cokeEnv.inCmd){
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		dt=e.clipboardData;
		cpText=dt.getData("text/plain");
		if(cpText){
			let cpVO;
			try{
				cpVO=JSON.parse(cpText);
				if(cpVO && cpVO["$CCDiskitCopy"]){
					cpVO=cpVO["$CCDiskitCopy"];
				}
			}catch(err){
				cpVO=null;
			}
			if(cpVO){
				jaxApp.clipbordFiles=cpVO;
				jaxApp.DoDiskitPaste();
				e.preventDefault();
				e.stopPropagation();
				return;
			}
			return;
		}
		jaxApp.DoCopyDataTransferFiles(dt);
		e.preventDefault();
		e.stopPropagation();
	}
};

//----------------------------------------------------------------------------
//初始化数据:
function initData(){
	let result;
	result=appData.initData(jaxEnv);
	if(result instanceof Promise){
		result.then(startApp).catch((error)=>{jaxEnv.logError(error)});
	}else{
		startApp();
	}
	//TODO: Code this:
	
}

//----------------------------------------------------------------------------
//启动App:
function startApp() {
	var appDef, isShowDlg, appState;
	var dlgList = [];

	appState=jaxHudState(jaxEnv,{
/*}#AppEnv-Pre*/
/*#{AppEnv-Mid*/
	});

	//************************************************************************
	//APP功能操作:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//Put file in path:
		jaxApp.DoPutFile=async function(files){
			let i,n,file,list,node,item,basePath,path
			let diskName,disk,entry;
			let pathes,env,tty;
			
			env=jaxApp.cokeEnv;
			tty=env.tty;
			if(env.inCmd){
				return;
			}

			diskName=env.diskName();
			if(!diskName){
				window.alert("Can't put file(s) in root path, only disk(s) can be created in root.");
				return;
			}

			//This will break the input command loop:
			env.inCmd=true;
			tty.endInput("");//This will end the readLine().
			env.emit("ExecCmdStart","Put file");
			
			basePath=env.pathByDisk();
			disk=await JAXDisk.openDisk(diskName,false);
			if(!disk){
				return false;
			}
			
			n=files.length;
			//Check if putting a single zip file.
			if(n===1 && files[0].name.toLowerCase().endsWith(".zip")){
				if(window.confirm("Extract zip file to "+basepath+"?")){
					//Extract zip 2 path:
					tty.textOut("Unpackaging zip...\n");
					await zip2Path(JAXDisk.appPath,files[0],false,tty);
					tty.textOut(`Zip extracted.\n`);
					env.inCmd=false;
					env.emit("ExecCmdDone",null);
					env.cmdInput();
					return;
				}
			}
			tty.textOut("Unpackaging zip...\n");
			
			//查看是不是有重复文件:
			pathes=[];
			let copyFiles=[];
			let overwriteAll=false;
			let ignoreAll=false;
			let askAll=false;
			for(i=0;i<n;i++){
				path=pathLib.join(basePath,files[i].name);
				entry=await disk.getEntry(path);
				if(entry){
					if(entry.dir){
						window.alert(`Can't over write folder "/${diskName}/${path}" with file, all aborted.`);
						return;
					}else{
						if(askAll && window.confirm(`Overwrite file "/${diskName}/${path}"?`)){
							copyFiles.push(files[i]);
						}else if(overwriteAll){
							copyFiles.push(files[i]);
						}else if(ignoreAll){
						}else if(window.confirm(`"/${diskName}/${path}" and maybe more files already exist, overwrite?`)){
							overwriteAll=true;
							copyFiles.push(files[i]);
						}else if(window.confirm(`Ignore all conflict files?`)){
							ignoreAll=true;
						}else if(window.confirm(`Ask overwrite for each conflict? Or choose cancel to abort all.`)){
							askAll=true;
						}else{
							env.inCmd=false;
							env.emit("ExecCmdDone",null);
							env.cmdInput();
							return;
						}
					}
				}else{
					copyFiles.push(files[i]);
				}
			}
			
			//Put/ copy files here:
			n=copyFiles.length;
			for(i=0;i<n;i++){
				path=pathLib.join(basePath,copyFiles[i].name);
				tty.textOut(`Put file: "/${diskName}/${path}"\n`);
				await disk.saveFile(path,copyFiles[i]);
			}
			tty.textOut(`Put total ${n} file${n>1?"s":""}.\n`);
			
			env.inCmd=false;
			env.emit("ExecCmdDone",null);
			env.cmdInput();
		};
		
		//--------------------------------------------------------------------
		//Open CCEdit in current disk:
		jaxApp.DoOpenCCEditor=function(){
			let env,diskName;
			env=jaxApp.cokeEnv;
			diskName=env.diskName();
			window.open(document.location.origin+"/@ccedit#disk="+encodeURIComponent(diskName),"CCEdit_"+diskName);
		};
		
		//--------------------------------------------------------------------
		//Open Diskit with current path
		jaxApp.DoOpenDiskit=function(){
			let path;
			path=jaxApp.cokeEnv.cwd();
			window.open(document.location.origin+"/@diskit#path="+encodeURIComponent(path));
		};

		//--------------------------------------------------------------------
		//Show tip MD file:
		jaxApp.DoShowTip=function(){
			let path;
			path=pathLib.join(app.appDir,"tip.md");
			window.open(document.location.origin+"/@markdownit/mdview.html#file="+encodeURIComponent(path),`MDView_${path}`);
		};
		
		//--------------------------------------------------------------------
		//Set state text on bottom bar:
		jaxApp.setState=function(text){
			//TODO: Code this:
		};
		
		//--------------------------------------------------------------------
		//On cokeEnv start user input
		jaxApp.OnStartInput=function(env){
			jaxApp.mainUI.showFace("waitCmd");
			jaxApp.mainUI.showPath();
		};

		//--------------------------------------------------------------------
		//On cokeEnv start exec command
		jaxApp.OnExecCmdStart=function(env,cmd){
			jaxApp.mainUI.showFace("inCmd");
		};

		//--------------------------------------------------------------------
		//On cokeEnv exec command done
		jaxApp.OnExecCmdDone=function(env,cmd){
		};
	}
	
	//************************************************************************
	//Copy, paste and drag and drop files:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//paste diskit clipboard's files into current entry
		jaxApp.DoDiskitPaste=async function(){
			let env,tty;
			let copyMeta,listBox,orgDisk,orgPath,tgtDisk,list,tgtPath,overwrite,filesCopied;
			env=jaxApp.cokeEnv;
			tty=env.tty;
			//Check env busy:
			if(env.isCmd){
				return;
			}

			//This will break the input command loop:
			env.inCmd=true;
			tty.endInput("");//This will end the readLine().
			env.emit("ExecCmdStart","Put file");
			
			listBox=jaxApp.listBox;
			copyMeta=jaxApp.clipbordFiles;
			if(!copyMeta){
				return;
			}
			orgDisk=copyMeta.disk;
			orgDisk=await JAXDisk.openDisk(orgDisk,false);
			if(!orgDisk){
				return;
			}
			orgPath=copyMeta.path;
			tgtDisk=env.diskName();
			if(!tgtDisk){
				tty.textOut("You can't put file(s) or folder(s) at file system root, only disks can be created here.\n");
				return;
			}
			tgtDisk=await JAXDisk.openDisk(tgtDisk,false);
			if(!tgtDisk){
				return;
			}
			tgtPath=env.pathByDisk()
			list=copyMeta.files.slice(0);
			if(orgDisk.name===tgtDisk.name && tgtPath===orgPath){
				let curFiles,fileSet,i,n,name,orgName,idx;
				let nameBody,nameExt;
				curFiles=await tgtDisk.getEntries(tgtPath);
				fileSet={};
				n=curFiles.length;
				for(i=0;i<n;i++){
					fileSet[curFiles[i].name]=1;
				}
				n=list.length;
				for(i=0;i<n;i++){
					orgName=name=list[i];
					nameExt=pathLib.extname(name);
					nameBody=pathLib.basename(name,nameExt);
					idx=0;
					while(name in fileSet){
						name=nameBody+" copy"+(idx?idx:"")+nameExt;
						idx++;
					}
					fileSet[name]=1;
					list[i]={
						org:orgPath?orgPath+"/"+orgName:orgName,
						tgt:tgtPath?tgtPath+"/"+name:name,
					};
				}
			}else{
				let curFiles,fileSet,i,n,name;//aa
				curFiles=await tgtDisk.getEntries(tgtPath);
				fileSet={};
				n=curFiles.length;
				for(i=0;i<n;i++){
					fileSet[curFiles[i].name]=1;
				}
				overwrite=1;
				n=list.length;
				for(i=0;i<n;i++){
					name=list[i];
					if(name in fileSet){
						if(!window.confirm("Over write "+name+" and other exist files?")){
							if(!window.confirm("Continue paste files?")){
								env.inCmd=false;
								env.emit("ExecCmdDone",null);
								env.cmdInput();
								return;
							}
							overwrite=0;
						}
						break;
					}
				}
				list=list.map((item)=>{
					return {
						org:orgPath?orgPath+"/"+item:item,
						tgt:tgtPath?tgtPath+"/"+item:item,
					};
				});
			}
			let cnt=0;
			tty.textOut("Copying files...");
			filesCopied=[];
			list=list.map((item)=>{
				tty.clearLine();
				tty.textOut(`Copying file "/${orgDisk.name}/${item.org}" to "/${tgtDisk.name}/${item.tgt}"`);
				return tgtDisk.copyFile(item.org,item.tgt,overwrite,orgDisk).then(files=>{
					cnt++;
					files.forEach(item=>{filesCopied.push(item)});
				});
			});
			return Promise.allSettled(list).then(()=>{
				tty.clearLine();
				tty.textOut(`Copy file done, total ${cnt} file${cnt>1?"s":""} copied}\n`);
				env.inCmd=false;
				env.emit("ExecCmdDone",null);
				env.cmdInput();
			});
		};
		
		//--------------------------------------------------------------------
		//Copy drag&droped files:
		jaxApp.DoCopyDataTransferFiles=async function(dt){
			let env=jaxApp.cokeEnv,tty;
			let path,item,oldItem,file,dirName,filesCopied;
			let listBox=jaxApp.listBox;
			let tgtPath;
			let overWriteAll=false;
			let ignoreAll=false;
			let askOneByOne=false;
			let disk;
			
			//Check env busy:
			if(env.isCmd){
				return;
			}
			tty=env.tty;
			
			let files=await getDataTransferFiles(dt.items);

			//This will break the input command loop:
			env.inCmd=true;
			tty.endInput("");//This will end the readLine().
			env.emit("ExecCmdStart","Put file");
			
			disk=env.diskName();
			disk=await JAXDisk.openDisk(disk,false);
			if(!disk){
				tty.textOut("You can't put file(s) or folder(s) at file system root, only disks can be created here.\n");
				return;
			}
			tgtPath=env.pathByDisk();
			
			function getItemFile(item){
				return new Promise((OnDone,OnError)=>{
					item.file(OnDone);
				});
			};
			
			if(dt){
				let files2Copy=[];
				let dirs2Make=[];

				//First check overwrites:
				for(let i=0,n=files.length;i<n;i++){
					item=files[i];
					if(item.isFile){
						path=pathLib.join(tgtPath,item.fullPath.substring(1));
						oldItem=await disk.getEntry(path);
						if(!oldItem){
							files2Copy.push(item);
						}else{
							if(oldItem.dir){
								//Can't overwrite a dir with file:
								window.alert(`Abort: can't overwrite folder "${path} with a file, no files copied."`);
								env.inCmd=false;
								env.emit("ExecCmdDone",null);
								env.cmdInput();
								return;
							}
							if(overWriteAll){
								files2Copy.push(item);
							}else if(ignoreAll){
								//Pass this file:
							}else if(askOneByOne){
								if(window.confirm(`${path} file existed, overwrite it?`)){
									files2Copy.push(item);
								}
							}else{
								if(window.confirm(`${path} file existed, overwrite it and all other files?`)){
									files2Copy.push(item);
									overWriteAll=true;
								}else if(window.confirm(`Do you want to ignore all existed files?`)){
									ignoreAll=true;
								}else if(window.confirm(`Continue to copy and ask overwrite file one by one?`)){
									askOneByOne=true;
								}else{
									env.inCmd=false;
									env.emit("ExecCmdDone",null);
									env.cmdInput();
									return;
								}
							}
						}
					}else if(item.isDirectory){
						path=pathLib.join(tgtPath,item.fullPath.substring(1));
						oldItem=await disk.getEntry(path);
						if(!oldItem){
							dirs2Make.push(path);
						}else{
							if(!oldItem.dir){
								window.alert(`Abort: can't overwrite file "${path} with a folder, no files copied."`);
								env.inCmd=false;
								env.emit("ExecCmdDone",null);
								env.cmdInput();
								return;
							}
						}
					}
				}
				filesCopied=[];
				//2) Make dirs:
				for(let i=0,n=dirs2Make.length;i<n;i++){
					path=dirs2Make[i];
					await disk.newDir(path);
					dirName=pathLib.dirname(path);
					dirName=dirName==="."?"":dirName;
					if(dirName===tgtPath){
						filesCopied.push(path);
					}
				}
				let cnt=0;
				//3) Copy files:
				for(let i=0,n=files2Copy.length;i<n;i++){
					item=files2Copy[i];
					file=await getItemFile(item);
					if(!file){
						continue;
					}
					cnt++;
					path=pathLib.join(tgtPath,item.fullPath.substring(1));
					tty.textOut(`Save file: "/${disk.name}/${path}."\n`);
					await disk.saveFile(path,file);
					dirName=pathLib.dirname(path);
					dirName=dirName==="."?"":dirName;
					if(dirName===tgtPath){
						filesCopied.push(path);
					}
				}
				tty.textOut(`Saved total ${cnt} file${cnt>1?"s":""}."\n`);
				env.inCmd=false;
				env.emit("ExecCmdDone",null);
				env.cmdInput();
			}
		};
	}

	//************************************************************************
	//对话框相关的:
	//************************************************************************
	{
		//--------------------------------------------------------------------
		//显示对话框
		jaxApp.showDlg=function(dlgFunc,vo,shared=1){
			var dlgHud,dlgCSS,curDlg;

			//显示对话框蒙板:
			if(!isShowDlg) {
				this.DlgLayer.attachLayer();
				isShowDlg = 1;
			}
			//如果当前有对话框，让当前的对话框失去输入响应，新创建的对话框在旧对话框之上:
			curDlg=dlgList.length>0?dlgList[dlgList.length-1]:null;
			if(curDlg){
				curDlg.uiEvent=-1;
			}

			//如果对话框是共享实例的，使用已有的共享实例，如果共享实例不存在，则创建共享实例
			if(shared){
				dlgHud=dlgFunc.sharedDlg;
				if(!dlgHud) {
					dlgCSS = dlgFunc(jaxEnv);
					dlgHud = this.DlgBGBox.appendNewChild(dlgCSS);
					if (shared) {
						dlgFunc.sharedDlg = dlgHud;
						dlgHud.hold();
					}
				}else{
					this.DlgBGBox.appendChild(dlgHud);
				}
			}else{
				dlgCSS = dlgFunc(jaxEnv);
				dlgHud = this.DlgBGBox.appendNewChild(dlgCSS);
				if (shared) {
					dlgFunc.sharedDlg = dlgHud;
				}
			}
			dlgHud.uiEvent=1;
			dlgHud.showDlg(vo);
			dlgList.push(dlgHud);
		};

		//--------------------------------------------------------------------
		//关闭对话框:
		jaxApp.closeDlg=function(dlg){
			var idx,preDlg;
			idx=dlgList.indexOf(dlg);
			if(idx<0){
				//这个对话框没有被显示
				return;
			}
			this.DlgBGBox.removeChild(dlg);
			if(idx===dlgList.length-1){
				//这个是最后一个
				preDlg=dlgList[idx-1];
				if(preDlg){
					preDlg.uiEvent=1;
				}
			}
			dlgList.splice(idx,1);
			//如果没有在展示的对话框了，关闭对话框层:
			if(dlgList.length===0){
				this.DlgLayer.detachLayer();
				isShowDlg=0;
			}
		};
	}

	//************************************************************************
	//Tip相关的:
	//************************************************************************
	{
		let isTipShowing,tgtTipHud,tipTimer;
		let tipHud=null;
		const TIP_TIME=500;
		
		var cssTipBox;

		cssTipBox=function(jaxEnv,x,y,id,text)
		{
			var cssText,txtName;
			var tipAlignH=1,tipAlignV=0;
			cssText={
				type:"text",id:"txtName",x:0,y:0,w:"FW",h:"FH",autoLayout:1,
				text:text,fontSize:12,color:[255,255,255],bold:0,
				alignH:1,alignV:1
			};
			return {
				type:"box",id:id,x:x,y:y,w:200,h:20,display:0,anchorH:0,anchorV:0,
				color:[0,0,0,1],coner:3,shadow:1,
				items:[cssText],
				faces:{},
				OnCreate:function(){
					txtName=this.txtName;
				},
				show:function(x,y,text,alignH=1,alignV=0){
					tipAlignH=alignH;
					tipAlignV=alignV;
					this.x=x;
					this.y=y;
					this.text=text;
					this.display=1;
					this.animate({
						type:"html",
						keyframes:[
							{opacity:0},
							{opacity:1},
						],
						duration:200,
					});
				},
				hide:function(){
					this.display=0;
				},
				get "%text"(){return text;},
				set "%text"(newText){
					var w,h;
					text=newText;
					if(txtName) {
						txtName.text = text;
						w=txtName.textW;
						txtName.w=w+12;
						w=this.w=w+12;
						h=this.h;
						switch(tipAlignH){
							case 0:
								break;
							case 1:
								this.x-=w/2;
								break;
							case 2:
								this.x-=w;
								break;
						}
						switch(tipAlignV){
							case 0:
								break;
							case 1:
								this.y-=h/2;
								break;
							case 2:
								this.y-=h;
								break;
						}
						x=this.x;y=this.y;
						if(x<10){
							x=this.x=10;
						}
						if(x+w*0.5+10>=jaxEnv.jaxDiv.offsetWidth){
							x=this.x=jaxEnv.jaxDiv.offsetWidth-10-w*0.5;
						}
						if(y<10){
							y=this.y=10;
						}
						if(y+h+10>=jaxEnv.jaxDiv.offsetHeight){
							y=this.y=jaxEnv.jaxDiv.offsetHeight-10-h;
						}
					}
				}
			};
		};
		
		//--------------------------------------------------------------------
		//准备显示Tip
		jaxApp.showTip=function(hud,tip,x,y,ah,av){
			if(hud===tgtTipHud){
				return;
			}
			if(isTipShowing){
				this.hideTip();
			}
			if(tipTimer){
				window.clearTimeout(tipTimer);
			}
			tgtTipHud=hud;
			if(!hud)
				return;
			tipTimer=window.setTimeout(()=>{
				//Show tip:
				tipTimer=null;
				if(x===undefined){
					let w,h;
					w=hud.w;h=hud.h;
					x=w/2;y=h+5;
				}

				[x,y]=hud.findRelatedPos(x,y);
				if(!tipHud){
					tipHud=jaxApp.TipBox;
				}
				tipHud.show(x,y,tip,ah,av);
				isTipShowing=1;
			},TIP_TIME);
		};

		//--------------------------------------------------------------------
		//取消准备显示的Tip
		jaxApp.abortTip=function(hud){
			if(hud!==tgtTipHud){
				return;
			}
			if(tipTimer){
				window.clearTimeout(tipTimer);
				tipTimer=null;
			}
			tgtTipHud=null;
			if(isTipShowing){
				this.hideTip();
			}
		};

		//--------------------------------------------------------------------
		//隐藏当前Tip
		jaxApp.hideTip=function(){
			if(isTipShowing){
				tipHud.display=0;
				isTipShowing=0;
			}
		};
	}

	//************************************************************************
	//快捷键相关的:
	//************************************************************************
	{
		//-------------------------------------------------------------------*
		//按键/快捷键处理，
		jaxApp.OnKeyDown=function(e){
			var key,list,item,i,n,hotView;

			hotView=hotBox;
			//console.log(e);

			function checkShortcut(item){
				if(item.altKey!==e.altKey){
					return 0;
				}
				if(item.ctrlKey!==e.ctrlKey){
					return 0;
				}
				if(item.metaKey!==e.metaKey){
					return 0;
				}
				if(item.shiftKey!==e.shiftKey){
					return 0;
				}
				return 1;
			}
			key=e.key;
			list=appCfg.shortCuts[key];
			if(list) {
				if (Array.isArray(list)) {
					n = list.length;
					for (i = 0; i < n; i++) {
						item = list[i];
						if (checkShortcut(item)) {
							//console.log("Short cut: " + item.action);
							//处理快捷键:
							if(hotView && hotView.handleShortcut){
								if(hotView.handleShortcut(item.action)){
									return 1;
								}
							}
							//TODO: Handle app shortcut here:
							return 0;
						}
					}
				} else {
					item = list;
					if (checkShortcut(item)) {
						//console.log("Short cut: " + item.action);
						if(hotView && hotView.handleShortcut){
							if(hotView.handleShortcut(item.action)){
								return 1;
							}
						}
						//TODO: Handle app shortcut here:
						return 0;
					}
				}
			}
			return 0;
		};
	}
/*}#AppEnv-Mid*/
/*#{AppEnv-Post*/
	appDef={
		layers: [
			{
				appState:appState,
				id: "UILayer", x: 0, y: 0, ofW: "FW", ofH: "FH",
				items: [
					{
						type:"dock",id:"appDock",x:0,y:0,w:"FW",h:"FH",autoLayout:1,
						ui:entryUI(jaxApp)
					},					
				]
			},
			{
				id:"DlgLayer",x:0,y:0,w:"FW",h:"FH",
				items:[
					{
						type:"box",id:"DlgBGBox",x:0,y:0,w:"FW",h:"FH",color:[0,0,0,0.5],
					}
				]
			},
			{
				id:"TipLayer",x:0,y:0,w:"FW",h:"FH",uiEvent:-1,
				items:[
					cssTipBox(jaxEnv,0,0,"TipBox","Some tips")
				]
			}
		],
		UILayer:null,DlgLayer:null,TipLayer:null,TipBox:null,
		DlgBGBox:null,
		OnCreate:function(){
			this.DlgLayer.detachLayer();
			isShowDlg=0;
			jaxEnv.addOnKeyDown(this.OnKeyDown.bind(this));
		}
	};
	
	{
		let listUI=null;
		let infoUI=null;
		jaxApp.showUI=function(){
			listUI=jaxApp.appDock.showNewUI(CountersUI(jaxApp));
			listUI.hold();
		};

		jaxApp.dismissUI=function(ui){
			jaxApp.appDock.dismissUI(ui);
		};
	}
	
	jaxEnv.initApp(appDef);
/*}#AppEnv-Post*/
/*#{AppEnv-End*/
}
/*}#AppEnv-End*/

//Auto genterated by Cody
/*Cody Project Doc*/
//	
//	function $$$prjDoc() {
//		return /*#{Doc*/{
//			"jaxId": "1FBOMFC1C0", "args": {"entryUI":"\"DiskitUI\"","language":"EN"}
//		}/*Doc}#*/;
//	}