UPPERCASE_IO.MAIN=METHOD({run:(e,n)=>{let s=require("less");e(SML.Bridge({rootPath:"./UPPERCASE_IO/view"}).requestListener),n({extension:"less",preprocessor:(e,n)=>{s.render(e,(e,s)=>{n({content:s.css,contentType:"text/css",version:CONFIG.version})})}})}});