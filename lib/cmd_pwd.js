import {JAXEnv,$JXV,$V} from "/jaxweb/lib/JAXEnv.js"

//----------------------------------------------------------------------------
//Show current path:
var cmd_pwd=async function(env, cmds, text){
	let stdout=env.stdout;
	stdout.write(env.cwd()+"\n");
};

//----------------------------------------------------------------------------
//Clear screen:
var cmd_cls=async function(env,cmds,text){
	env.tty.clear();
};

//----------------------------------------------------------------------------
//Rgister functions:
var reg_cmd=function(CCEnv){
	CCEnv.regQuickCmd("pwd",cmd_pwd);
	CCEnv.regQuickCmd("clear",cmd_cls);
};

export default {reg_cmd};
