import { readFile,mkdir,rename,stat,rm } from 'node:fs/promises';
import { join,dirname,resolve } from 'node:path';
const base=process.cwd();
const specs=JSON.parse(await readFile(new URL('../media/v3-media.json',import.meta.url),'utf8'));
const opts=process.argv.slice(2);
const p=opts.indexOf('--destination');
const root=resolve(p>=0&&opts[p+1]?opts[p+1]:base);
const strict=opts.includes('--strict');
const allowReinstall=opts.includes('--replace');
const ids=new Set(),names=new Set();
for(const a of specs){
 if(ids.has(a.photo_id)||names.has(a.dest))throw Error('Duplicate photo ID or destination');
 ids.add(a.photo_id); names.add(a.dest);
 if(!a.dest.startsWith('public/media/v3/')||!/^https:\/\/images\.unsplash\.com\/photo-/.test(a.url))throw Error('Untrusted media destination/source');
}
let done=0,failed=0;
async function save(a){
 const file=join(root,a.dest);
 const tmp=file+'.tmp';
 for(let attempt=0;attempt<3;attempt++){
  try{
   try{const s=await stat(file);if(s.size>15000&&!allowReinstall){done++;console.log(`KEEP ${a.name}`);return}}catch{}
   const res=await fetch(a.url,{headers:{'User-Agent':'AFII-India-VisualRefresh/3.0'},signal:AbortSignal.timeout(35000)});
   if(!res.ok)throw Error(`HTTP ${res.status}`);
   const type=(res.headers.get('content-type')||'').toLowerCase();
   if(!type.startsWith('image/'))throw Error(`not an image: ${type}`);
   const bytes=Buffer.from(await res.arrayBuffer());
   if(bytes.length<18000||bytes.length>12000000||bytes[0]!==0xff||bytes[1]!==0xd8)throw Error(`unexpected JPEG bytes: ${bytes.length}`);
   await mkdir(dirname(file),{recursive:true});
   await import('node:fs/promises').then(({writeFile})=>writeFile(tmp,bytes));
   await rename(tmp,file);
   done++;console.log(`OK ${a.name} (${Math.round(bytes.length/1024)} KB)`);return;
  }catch(e){await rm(tmp,{force:true}).catch(()=>{});if(attempt===2){failed++;console.error(`FAILED ${a.name}: ${e.message}`)}}
 }
}
for(let i=0;i<specs.length;i+=4) await Promise.all(specs.slice(i,i+4).map(save));
console.log(`AFII INDIA V3 imagery: ${done} succeeded, ${failed} failed`);
if(failed&&strict)process.exitCode=1;
